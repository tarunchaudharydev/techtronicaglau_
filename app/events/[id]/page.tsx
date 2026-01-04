import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events } from "@/lib/data/upcomingEvents";
import EventCountdown from "@/components/events/EventCountdown";

// react-icons
import { FiArrowLeft, FiCalendar, FiClock, FiMapPin } from "react-icons/fi";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EventDetailPage({ params }: PageProps) {
  const { id } = await params;

  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  const isUpcoming = Boolean(event.registrationLink);

  return (
    <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-sky-600 transition"
        >
          <FiArrowLeft />
          Back to Events
        </Link>
      </div>

      {/* Cover */}
      <div className="relative h-72 w-full rounded-3xl overflow-hidden mb-8">
        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Club */}
      <p className="text-xs uppercase tracking-widest text-sky-600 mb-2">
        {event.club}
      </p>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        {event.title}
      </h1>

      {/* Description */}
      {event.description.map((line, index) => (
        <p key={index} className="mb-2">
          {line}
        </p>
      ))}

      {/* Meta Info */}
      <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600 mb-8">
        <p className="flex items-center gap-2">
          <FiCalendar className="text-sky-600" />
          {event.date}
        </p>
        <p className="flex items-center gap-2">
          <FiClock className="text-sky-600" />
          {event.time}
        </p>
        <p className="flex items-center gap-2 sm:col-span-2">
          <FiMapPin className="text-sky-600" />
          {event.location}
        </p>
      </div>

      {/* UPCOMING EVENT */}
      {isUpcoming && (
        <div className="mt-8 space-y-4">
          {/* Countdown */}
          {event.registrationDeadline && (
            <EventCountdown deadline={event.registrationDeadline} />
          )}

          {/* Apply Button */}
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700 transition"
          >
            Apply Now
          </a>
        </div>
      )}

      {/* PAST EVENT */}
      {!isUpcoming && (
        <section className="mt-12 space-y-6">
          {event.outcome && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Event Outcome</h2>
              <p className="text-slate-700">{event.outcome}</p>
            </div>
          )}

          {event.winners && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Winners</h2>
              <ul className="list-disc ml-6 text-slate-700">
                {event.winners.map((w) => (
                  <li key={w.name}>
                    {w.position} — {w.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {event.gallery && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Event Gallery</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {event.gallery.map((img) => (
                  <div
                    key={img}
                    className="relative h-40 rounded-xl overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt="Event image"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
