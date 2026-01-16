"use client";

import { useEffect, useState } from "react";
import { Event } from "@/types/event";
import Image from "next/image";
import Link from "next/link";

interface Props {
  event: Event;
  eventSlug: string; // e.g. "udan"
}

export default function EventPopup({ event, eventSlug }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("event-popup-shown");
    if (shown) return;

    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    sessionStorage.setItem("event-popup-shown", "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="relative w-full max-w-md rounded-xl bg-black text-white shadow-2xl overflow-hidden">
        {/* ❌ Close Button */}
        <button
          onClick={closePopup}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-2 py-1 text-lg text-white hover:bg-black"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative h-40 sm:h-48 w-full">
          <Image
            src={event.coverImage}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-3">
          <h2 className="text-lg sm:text-xl font-semibold text-orange-400">
            {event.title}
          </h2>

          <p className="text-xs sm:text-sm text-gray-300">
            {event.date} • {event.time} • {event.location}
          </p>

          {/* Keep content minimal */}
          <ul className="text-xs sm:text-sm text-gray-300 space-y-1">
            {event.description.slice(0, 2).map((point, i) => (
              <li key={i}>• {point}</li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {event.registrationLink && (
              <a
                href={event.registrationLink}
                target="_blank"
                className="flex-1 rounded-lg bg-yellow-500 py-2 text-center text-sm font-semibold text-black hover:bg-yellow-400"
              >
                Register
              </a>
            )}

            <Link
              href={`/events/${event.id}`}
              className="flex-1 rounded-lg border border-gray-600 py-2 text-center text-sm font-medium text-white hover:bg-gray-800"
              onClick={closePopup}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
