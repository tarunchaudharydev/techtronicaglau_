"use client";

import { events } from "@/lib/data/upcomingEvents";
import { splitEvents } from "@/lib/utils/eventUtils";
import EventCard from "./EventCard";
import EmptyState from "./EmptyState";

export default function UpcomingEventsSection() {
  const { upcoming, past } = splitEvents(events);

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>

      {upcoming.length === 0 ? (
        <EmptyState text="No upcoming events right now." />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcoming.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}

      <h2 className="text-3xl font-bold mt-20 mb-6">Past Events</h2>

      {past.length === 0 ? (
        <EmptyState text="No past events yet." />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {past.map((event) => (
            <EventCard key={event.id} event={event} past />
          ))}
        </div>
      )}
    </section>
  );
}
