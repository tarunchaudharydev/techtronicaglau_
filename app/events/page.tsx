import Link from "next/link";
import Image from "next/image";
import { events } from "@/lib/data/upcomingEvents";
import { splitEvents } from "@/lib/utils/eventUtils";

export default function EventsPage() {
  const { upcoming, past } = splitEvents(events);

  return (
    <main className="text-center px-6 max-w-7xl mx-auto space-y-20">
      <Section title="Upcoming Events">
        {upcoming.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </Section>

      <Section title="Past Events">
        {past.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </Section>
    </main>
  );
}

function Section({ title, children }: any) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{children}</div>
    </section>
  );
}

function EventCard({ event }: any) {
  return (
    <article className="rounded-2xl bg-white dark:bg-slate-900 shadow transition hover:-translate-y-1 hover:shadow-xl overflow-hidden flex flex-col">
      {/* Cover Image */}
      <div className="relative h-48 w-full">
        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2 flex flex-col flex-1">
        <p className="text-xs text-sky-600 font-medium">{event.club}</p>

        <h3 className="font-semibold text-lg">{event.title}</h3>

        <p className="text-sm text-gray-600">
          {event.date} • {event.time}
        </p>

        {/* CTA */}
        <div className="mt-auto pt-4">
          <Link
            href={`/events/${event.id}`}
            className="inline-block text-sm font-semibold text-white bg-sky-600 px-4 py-2 rounded-lg hover:bg-sky-700 transition"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}
