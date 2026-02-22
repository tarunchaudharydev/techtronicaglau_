import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events } from "@/lib/data/upcomingEvents";
import { nowIST, deadlineIST } from "@/lib/utils/time";
import EventCountdown from "@/components/events/EventCountdown";

export default async function ClubEventsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const clubEvents = events.filter((e) => e.club === slug);
  if (clubEvents.length === 0) return notFound();

  const upcoming = clubEvents.filter(
    (e) =>
      e.registrationDeadline && deadlineIST(e.registrationDeadline) > nowIST(),
  );

  const past = clubEvents.filter(
    (e) =>
      !e.registrationDeadline ||
      deadlineIST(e.registrationDeadline) <= nowIST(),
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-20 space-y-14">
      <h1 className="text-3xl font-bold text-center capitalize">
        {slug.replace(/-/g, " ")} Events
      </h1>

      {/* ================= UPCOMING EVENTS ================= */}
      {upcoming.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((e) => (
              <div
                key={e.id}
                className="border rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition"
              >
                <div className="relative h-44">
                  <Image
                    src={e.coverImage}
                    alt={e.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-lg">{e.title}</h3>

                  {/* Live countdown */}
                  <EventCountdown deadline={e.registrationDeadline} />

                  <div className="flex flex-col gap-2">
                    {e.registrationLink ? (
                      <a
                        href={e.registrationLink}
                        target="_blank"
                        rel="noreferrer"
                        className="block text-center rounded-full bg-yellow-300 py-2 font-semibold hover:bg-yellow-400 transition"
                      >
                        Register Now
                      </a>
                    ) : (
                      <button
                        disabled
                        className="w-full py-2 bg-gray-200 rounded-full text-sm text-gray-600"
                      >
                        Registration Closed
                      </button>
                    )}

                    {/* 👇 View Details */}
                    <Link
                      href={`/clubs/${slug}/events/${e.id}`}
                      className="block text-center rounded-full border border-slate-300 dark:border-slate-700 py-2 text-sm font-medium hover:bg-slate-50 transition"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= PAST EVENTS ================= */}
      {past.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Past Events</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {past.map((e) => (
              <Link
                key={e.id}
                href={`/clubs/${slug}/events/${e.id}`}
                className="border rounded-2xl overflow-hidden hover:shadow-md transition bg-white dark:bg-slate-900"
              >
                <div className="relative h-44">
                  <Image
                    src={e.coverImage}
                    alt={e.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold">{e.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">View details →</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
