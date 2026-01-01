"use client";

import Image from "next/image";

export function GizmoSessionsSection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr,1.2fr] items-center">
      {/* Left: image on desktop, above on mobile */}
      <div className="order-2 lg:order-1 relative h-44 sm:h-56 md:h-64 w-full">
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple-200 via-sky-200 to-orange-200 blur-lg opacity-80" />
        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 shadow-md bg-white">
          <Image
            src="/images/gizmo/drone.jpg"
            alt="Students working on robots and electronic components during a Gizmo session"
            width={800}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right: session formats */}
      <div className="order-1 lg:order-2 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-800">
          How our sessions work
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm">
          <div className="rounded-2xl bg-white border border-sky-100 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-700 mb-1">
              Hands-on builds
            </p>
            <p className="text-slate-800">
              Sessions start with assembling circuits, sensors, or mechanical
              parts, so you learn by physically building and testing components.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-purple-100 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-700 mb-1">
              Guided demos
            </p>
            <p className="text-slate-800">
              Seniors demonstrate tools, wiring, and modules step-by-step before
              you try the same setup on your own kits.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-emerald-100 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700 mb-1">
              Mini challenges
            </p>
            <p className="text-slate-800">
              Small challenges like line-following bots, sensor automation, or
              motor control tasks to apply concepts immediately.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-amber-100 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-700 mb-1">
              Team mentoring
            </p>
            <p className="text-slate-800">
              Work in small groups where mentors help debug circuits, fix
              hardware issues, and improve design thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
