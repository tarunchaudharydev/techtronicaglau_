/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import Image from "next/image";
import { events } from "@/lib/data/upcomingEvents";
import { splitEvents } from "@/lib/utils/eventUtils";
import EventShowcase from "@/components/events/EventsShowcase";
import { useState } from "react";

export default function EventsPage() {
  const { upcoming, past } = splitEvents(events);

  const [visiblePast, setVisiblePast] = useState(6);

  return (
    <main className="text-center px-6 max-w-7xl mx-auto space-y-20">
      <EventShowcase />

      <Section title="Upcoming Events">
        {upcoming.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </Section>

      <Section title="Past Events">
        {past.slice(0, visiblePast).map((e) => (
          <EventCard key={e.id} event={e} />
        ))}

        {past.length > visiblePast && (
          <div className="col-span-full flex justify-center mt-6">
            <button
              onClick={() => setVisiblePast((prev) => prev + 6)}
              className="px-6 py-3 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-700 transition"
            >
              Load More
            </button>
          </div>
        )}
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
     
      <div className="relative h-48 w-full">
        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

   
      <div className="p-4 space-y-2 flex flex-col flex-1">
        <p className="text-xs text-sky-600 font-medium">{event.club}</p>

        <h3 className="font-semibold text-lg">{event.title}</h3>

        <p className="text-sm text-gray-600">
          {event.date} • {event.time}
        </p>

       
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
