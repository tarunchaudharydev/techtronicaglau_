"use client";

import { useEffect, useState } from "react";
import { Event } from "@/types/event";
import Image from "next/image";
import Link from "next/link";
import EventCountdown from "../../events/EventCountdown";
import RegisterButton from "@/components/features/events/RegisterButton";
import { parse12HourTime } from "@/lib/utils/eventUtils";

interface Props {
  event: Event;
  eventSlug: string;
}

export default function EventPopup({ event }: Props) {
  const [open, setOpen] = useState(false);

  // Convert event date + time to Date object
  const eventDateTime = parse12HourTime(event.date, event.time);

  // 24 hours before event start
  const popupCutoffTime = new Date(
    eventDateTime.getTime() - 24 * 60 * 60 * 1000,
  );

  useEffect(() => {
    const shown = sessionStorage.getItem("event-popup-shown");
    if (shown) return;

    const now = new Date();

    // ❌ Don't show popup if event already started
    if (now >= eventDateTime) return;

    // ❌ Don't show popup if within 24 hours of event
    if (now >= popupCutoffTime) return;

    const timer = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(timer);
  }, [eventDateTime, popupCutoffTime]);

  const closePopup = () => {
    sessionStorage.setItem("event-popup-shown", "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white shadow-[0_30px_80px_rgba(56,189,248,0.25)] overflow-hidden transition-transform duration-300 hover:-translate-y-1">
        {/* ❌ Close Button */}
        <button
          onClick={closePopup}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-slate-900/10 text-lg text-white cursor-pointer
                     transition-all duration-300
                     hover:bg-red-500 hover:rotate-90 hover:scale-110 hover:shadow-lg"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative h-40 sm:h-48 w-full bg-black">
          <Image
            src={event.coverImage}
            alt={event.title}
            fill
            className="object-contain bg-black"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-sky-400">
            {event.title}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300">
            {event.date} • {event.time} • {event.location}
          </p>

          <ul className="text-xs sm:text-sm text-slate-300 space-y-1">
            {event.description.slice(0, 2).map((point, i) => (
              <li key={i}>• {point}</li>
            ))}
          </ul>

          {/* Countdown & Actions */}
          <div className="pt-3">
            {eventDateTime >= new Date() && (
              <div className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm space-y-4">
                <p className="text-lg font-semibold text-emerald-900">
                  Time Left
                </p>

                {event.registrationDeadline && (
                  <EventCountdown deadline={event.registrationDeadline} />
                )}

                <div className="flex flex-wrap gap-3">
                  <RegisterButton
                    registrationLink={event.registrationLink}
                    registrationDeadline={event.registrationDeadline}
                  />

                  <Link
                    href={`/events/${event.id}`}
                    onClick={closePopup}
                    className="flex-1 rounded-xl border border-slate-600 py-2 text-center text-sm font-medium text-black
                               transition-all duration-300
                               hover:-translate-y-0.5 hover:shadow-md"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
