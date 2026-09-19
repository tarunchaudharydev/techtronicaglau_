"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Event } from "@/lib/data/upcomingEvents";

function getTimeLeft(deadline: string) {
  const diff = new Date(deadline).getTime() - Date.now();

  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return { days, hours, minutes };
}

export default function EventCard({
  event,
  past = false,
}: {
  event: Event;
  past?: boolean;
}) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
  } | null>(null);

  useEffect(() => {
    if (!event.registrationDeadline) return;

    const updateTimer = () => {
      setTimeLeft(getTimeLeft(event.registrationDeadline!));
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60_000);

    return () => clearInterval(interval);
  }, [event.registrationDeadline]);

  return (
    <Link href={`/events/${event.id}`} className="block">
      <article
        className={`rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border shadow-md transition hover:-translate-y-1 hover:shadow-xl ${
          past ? "opacity-90" : ""
        }`}
      >
        <div className="relative h-44 w-full">
          <Image
            src={event.coverImage}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-5 space-y-2">
          <p className="text-xs uppercase tracking-wide text-sky-600">
            {event.club}
          </p>

          <h3 className="text-lg font-semibold text-foreground dark:text-white">
            {event.title}
          </h3>

          <p className="text-sm text-muted line-clamp-3">{event.description}</p>

          <p className="text-xs text-slate-500">
            📅 {event.date} &nbsp; ⏰ {event.time}
          </p>

          <p className="text-xs text-slate-500">📍 {event.location}</p>

          <div className="pt-3 space-y-2">
            <span
              className={`inline-block px-3 py-1 rounded-full text-[11px] font-medium ${
                past ? "bg-slate-200 text-slate-700" : "bg-sky-100 text-sky-700"
              }`}
            >
              {past ? "Completed" : "Upcoming"}
            </span>

            {!past && timeLeft && (
              <p className="text-xs text-red-600 font-medium">
                Registration closes in{" "}
                <span className="font-semibold">
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
                </span>
              </p>
            )}

            {!past && !timeLeft && event.registrationDeadline && (
              <p className="text-xs text-slate-400">Registration closed</p>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
