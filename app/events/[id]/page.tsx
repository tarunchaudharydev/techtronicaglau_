import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events } from "@/lib/data/upcomingEvents";
import EventCountdown from "@/components/events/EventCountdown";
import EventGallery from "@/components/events/EventGallery";
import RegisterButton from "@/components/events/RegisterButton";
// import { useRouter } from "next/navigation";
import BackButton from "@/components/events/BackButton";

import { FiArrowLeft, FiCalendar, FiClock, FiMapPin } from "react-icons/fi";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function EventDetailPage({ params }: PageProps) {
  const { id } = await params;
  const event = events.find((e) => e.id === id);
  if (!event) notFound();

  const isUpcoming = Boolean(event.registrationLink);

  return (
    // <main className="min-h-screen bg-emerald-50 pt-24 sm:pt-28 pb-16 sm:pb-20 px-3 sm:px-4">

    <main className="min-h-screen bg-emerald-50 pt-28 -mt-31 pb-20 px-4">
      {/* Back */}
      <div className="max-w-6xl mx-auto mb-6">
        <BackButton />
      </div>

      <section className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[380px_1fr]">
        {/* LEFT */}
        <aside className="space-y-6 lg:sticky lg:top-28 self-start">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={event.coverImage}
              alt={event.title}
              width={400}
              height={520}
              priority
              className="w-full max-h-[520px] object-cover"
            />
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500 mb-1">Hosted By</p>
            <p className="font-semibold text-slate-800">{event.club}</p>
          </div>
        </aside>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* Title */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-900 mb-4 leading-tight">
              {event.title}
            </h1>

            <div className="space-y-2 text-sm text-emerald-900/80">
              <p className="flex items-center gap-2">
                <FiCalendar className="shrink-0" /> {event.date}
              </p>
              <p className="flex items-center gap-2">
                <FiClock className="shrink-0" /> {event.time}
              </p>
              <p className="flex items-center gap-2">
                <FiMapPin className="shrink-0" /> {event.location}
              </p>
            </div>
          </div>

          {/* STATUS CARD */}
          {isUpcoming && (
            <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm space-y-4 border border-emerald-100">
              <p className="text-lg font-semibold text-emerald-900">
                Time Left
              </p>

              {event.registrationDeadline && (
                <EventCountdown deadline={event.registrationDeadline} />
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <RegisterButton
                  registrationLink={event.registrationLink}
                  registrationDeadline={event.registrationDeadline}
                />

                <button className="rounded-full border border-emerald-200 px-5 py-2.5 text-sm font-medium text-emerald-700 hover:bg-emerald-50 transition-colors">
                  Add to Calendar
                </button>
              </div>
            </div>
          )}

          {/* DESCRIPTION */}
          <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm space-y-3">
            {event.description.map((line, i) => (
              <p
                key={i}
                className="text-slate-700 leading-relaxed text-sm sm:text-base"
              >
                {line}
              </p>
            ))}
          </div>

          {/* PAST EVENT */}
          {!isUpcoming && (
            <div className="space-y-6">
              {event.outcome && (
                <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm">
                  <h2 className="text-xl font-semibold mb-2">Event Outcome</h2>
                  <p className="text-slate-700 leading-relaxed">
                    {event.outcome}
                  </p>
                </div>
              )}

              {event.winners && (
                <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm">
                  <h2 className="text-xl font-semibold mb-2">Winners</h2>
                  <ul className="list-disc ml-6 text-slate-700 space-y-1">
                    {event.winners.map((w) => (
                      <li key={w.name}>
                        {w.position} — {w.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {event.gallery && event.gallery.length > 0 && (
                <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-sm">
                  <h2 className="text-xl font-semibold mb-4">Event Gallery</h2>
                  <EventGallery images={event.gallery} />
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
