"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { events } from "@/lib/data/upcomingEvents";
import type { Event } from "@/lib/data/upcomingEvents";

/* ===================== IST HELPERS ===================== */

function getISTNow() {
  const now = new Date();
  return new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
}

function getISTDeadline(date: string) {
  return new Date(`${date}T23:59:59+05:30`);
}

function getTimeLeft(deadline: Date) {
  const diff = deadline.getTime() - getISTNow().getTime();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

/* ===================== PAGE ===================== */

export default function MindBogglersEvents() {
  const [, tick] = useState(0);
  const [activeEvent, setActiveEvent] = useState<Event | null>(null);

  useEffect(() => {
    const i = setInterval(() => tick((v) => v + 1), 1000);
    return () => clearInterval(i);
  }, []);

  const mindbogglersEvents = events.filter((e) => e.club === "Mindboggler");

  const upcomingEvents = mindbogglersEvents.filter((e) => {
    if (!e.registrationDeadline) return false;
    return getISTDeadline(e.registrationDeadline) > getISTNow();
  });

  const pastEvents = mindbogglersEvents.filter((e) => {
    if (!e.registrationDeadline) return true;
    return getISTDeadline(e.registrationDeadline) <= getISTNow();
  });

  return (
    <main className="min-h-screen px-4 py-24 bg-gradient-to-br from-white via-sky-50 to-purple-100">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* HEADER */}
        <header className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-900">
            Mindboggler Events
          </h1>
          <p className="text-slate-700 max-w-2xl mx-auto">
            Upcoming and completed events organized by Mindboggler.
          </p>
        </header>

        {/* ================= UPCOMING ================= */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-purple-800">
            Upcoming Events
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => {
              const deadline = getISTDeadline(event.registrationDeadline!);
              const timeLeft = getTimeLeft(deadline);

              return (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl border border-purple-100 shadow-sm overflow-hidden"
                >
                  <div className="relative h-44">
                    <Image
                      src={event.coverImage}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-semibold text-purple-800">
                      {event.title}
                    </h3>

                    <p className="text-xs text-orange-500">
                      {event.date} • {event.time}
                    </p>

                    <p className="text-sm text-slate-700">
                      {event.description}
                    </p>

                    {timeLeft ? (
                      <p className="text-xs font-medium text-purple-700">
                        ⏳ Ends in {timeLeft.days}d {timeLeft.hours}h{" "}
                        {timeLeft.minutes}m {timeLeft.seconds}s (IST)
                      </p>
                    ) : (
                      <p className="text-xs font-semibold text-red-600">
                        ❌ Oops! You missed it
                      </p>
                    )}

                    {timeLeft ? (
                      <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full justify-center px-4 py-2 rounded-full text-sm font-semibold text-purple-950 bg-yellow-300 hover:bg-yellow-400"
                      >
                        Register Now
                      </a>
                    ) : (
                      <button
                        disabled
                        className="inline-flex w-full justify-center px-4 py-2 rounded-full text-sm font-semibold bg-slate-200 text-slate-400 cursor-not-allowed"
                      >
                        Registration Closed
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= PAST ================= */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-purple-800">Past Events</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => setActiveEvent(event)}
                className="cursor-pointer bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <div className="relative h-44">
                  <Image
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold text-slate-800">
                    {event.title}
                  </h3>
                  <p className="text-xs text-slate-500">{event.date}</p>
                  <p className="text-sm text-slate-700">
                    Click to view details →
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ================= MODAL ================= */}
      {activeEvent && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full rounded-3xl p-6 space-y-4 relative">
            <button
              onClick={() => setActiveEvent(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-purple-900">
              {activeEvent.title}
            </h2>

            <p className="text-slate-700">{activeEvent.description}</p>

            {activeEvent.outcome && (
              <p className="text-sm text-green-700 font-medium">
                Outcome: {activeEvent.outcome}
              </p>
            )}

            {activeEvent.winners && (
              <div>
                <h3 className="font-semibold text-purple-800">Winners</h3>
                <ul className="list-disc list-inside text-sm text-slate-700">
                  {activeEvent.winners.map((w) => (
                    <li key={w.name}>
                      {w.position} – {w.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeEvent.gallery && (
              <div className="grid grid-cols-3 gap-2">
                {activeEvent.gallery.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt="Event gallery"
                    width={200}
                    height={120}
                    className="rounded-lg object-cover"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
