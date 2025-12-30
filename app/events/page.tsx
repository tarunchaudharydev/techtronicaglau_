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
    <Link href={`/events/${event.id}`}>
      <article className="rounded-2xl bg-white shadow hover:-translate-y-1 transition overflow-hidden">
        <div className="relative h-48">
          <Image
            src={event.coverImage}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 space-y-2">
          <p className="text-xs text-sky-600">{event.club}</p>
          <h3 className="font-semibold">{event.title}</h3>
          <p className="text-sm text-gray-600">
            {event.date} • {event.time}
          </p>
        </div>
      </article>
    </Link>
  );
}
