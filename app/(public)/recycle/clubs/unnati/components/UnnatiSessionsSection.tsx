"use client";

import Image from "next/image";

export function UnnatiSessionsSection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr,1.2fr] items-center">
      {/* Left: image on desktop, above on mobile */}
      <div className="order-2 lg:order-1 relative h-44 sm:h-56 md:h-64 w-full">
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple-200 via-sky-200 to-orange-200 blur-lg opacity-80" />
        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 shadow-md bg-white">
          <Image
            src="/images/unnati/party.jpg"
            alt="Students performing and practising during an Unnati cultural session"
            width={800}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right: session formats */}
      <div className="order-1 lg:order-2 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-800">
          How Unnati sessions work
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm">
          <div className="rounded-2xl bg-white border border-sky-100 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-700 mb-1">
              Guided practice sessions
            </p>
            <p className="text-slate-800">
              Coordinators guide rehearsals, activities, and creative practices
              to help members gain confidence and improve performance.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-purple-100 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-700 mb-1">
              Interactive activities
            </p>
            <p className="text-slate-800">
              Fun group activities, games, and exercises that improve
              communication, teamwork, and stage comfort.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-emerald-100 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700 mb-1">
              Event rehearsals
            </p>
            <p className="text-slate-800">
              Dedicated rehearsal sessions to prepare performances, skits,
              dances, and anchoring segments for college events.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-amber-100 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-700 mb-1">
              Mentorship & feedback
            </p>
            <p className="text-slate-800">
              Seniors and mentors provide constructive feedback to help members
              grow in confidence, expression, and presentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
