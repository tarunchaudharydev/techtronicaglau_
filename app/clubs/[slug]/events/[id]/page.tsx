import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events } from "@/lib/data/upcomingEvents";
import EventCountdown from "@/components/events/EventCountdown";
import EventGallery from "@/components/events/EventGallery";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string; id: string }>;
}) {
  const { slug, id } = await params;

  const event = events.find((e) => e.club === slug && e.id === id);
  if (!event) return notFound();

  return (
    <main className="min-h-screen bg-emerald-50 pt-28 -mt-30 pb-20 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Back */}
        <Link
          href={`/clubs/${slug}/events`}
          className="inline-block text-sm font-medium text-emerald-700 hover:underline"
        >
          ← Back to Club Events
        </Link>

        {/* Header Card */}
        <section className="rounded-3xl bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
          {/* Cover */}
          {event.coverImage && (
            <div className="relative h-72 w-full">
              <Image
                src={event.coverImage}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-emerald-900">
              {event.title}
            </h1>

            <p className="text-sm text-muted">
              {event.date} • {event.time} • {event.location}
            </p>
          </div>
        </section>

        {/* Countdown Card */}
        {event.registrationDeadline && (
          <section className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm">
            <p className="text-lg font-semibold text-emerald-900 mb-2">
              Event Status
            </p>
            <EventCountdown deadline={event.registrationDeadline} />
            <p className="text-sm text-muted mt-2">
              Stay tuned — actions will unlock as the event approaches.
            </p>
          </section>
        )}

        {/* Description */}
        <section className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm space-y-3">
          {event.description.map((line, index) => (
            <p key={index} className="text-slate-700">
              {line}
            </p>
          ))}
        </section>

        {/* Winners */}
        {event.winners && event.winners.length > 0 && (
          <section className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3 text-emerald-900">
              Winners
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              {event.winners.map((w, i) => (
                <li key={`${w.name}-${i}`}>
                  {w.position} — {w.name}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Gallery */}
        {event.gallery && event.gallery.length > 0 && (
          <section className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-emerald-900">
              Event Gallery
            </h2>
            <EventGallery images={event.gallery} />
          </section>
        )}
      </div>
    </main>
  );
}
