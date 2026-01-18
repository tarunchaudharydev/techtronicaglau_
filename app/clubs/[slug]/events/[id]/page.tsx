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
    <main className="max-w-4xl mx-auto px-4 py-20 space-y-8">
      {/* Back button */}
      <Link
        href={`/clubs/${slug}/events`}
        className="inline-block text-sm text-purple-700 hover:underline"
      >
        ← Back to Club Events
      </Link>

      <h1 className="text-3xl font-bold">{event.title}</h1>

      <p className="text-slate-600">
        {event.date} • {event.time} • {event.location}
      </p>

      {/* Live countdown (if applicable) */}
      <EventCountdown deadline={event.registrationDeadline} />

      {event.description.map((line, index) => (
        <p key={index} className="mb-2">
          {line}
        </p>
      ))}
      {/* Winners */}
      {event.winners && event.winners.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-2">Winners</h2>
          <ul className="list-disc pl-5 space-y-1">
            {event.winners.map((w, i) => (
              <li key={`${w.name}-${i}`}>
                {w.position} — {w.name}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Gallery */}
      {/* Gallery */}
      {event.gallery && event.gallery.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Event Gallery</h2>
          <EventGallery images={event.gallery} />
        </section>
      )}
    </main>
  );
}
