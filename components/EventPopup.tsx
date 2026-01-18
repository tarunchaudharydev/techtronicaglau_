"use client";

import { useEffect, useState } from "react";
import { Event } from "@/types/event";
import Image from "next/image";
import Link from "next/link";

interface Props {
  event: Event;
  eventSlug: string;
}

export default function EventPopup({ event }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("event-popup-shown");
    if (shown) return;

    const timer = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

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
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lg text-white cursor-pointer
                     transition-all duration-300
                     hover:bg-red-500 hover:rotate-90 hover:scale-110 hover:shadow-lg"
        >
          ✕
        </button>

        {/* Image */}
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

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            {event.registrationLink && (
              <a
                href={event.registrationLink}
                target="_blank"
                className="flex-1 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 py-2 text-center text-sm font-semibold text-black
                           transition-all duration-300
                           hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(251,191,36,0.6)]"
              >
                Register
              </a>
            )}

            <Link
              href={`/events/${event.id}`}
              onClick={closePopup}
              className="flex-1 rounded-xl border border-slate-600 py-2 text-center text-sm font-medium text-white
                         transition-all duration-300
                         hover:bg-slate-800 hover:-translate-y-0.5 hover:border-sky-400 hover:shadow-md"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
