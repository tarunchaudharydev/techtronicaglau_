"use client";

import Image from "next/image";

export function TechnovationSessionsSection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr,1.2fr] items-center">
      {/* Left: image */}
      <div className="order-2 lg:order-1 w-full">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-md bg-white">
          <Image
            src="/images/technovation/ai.jpg"
            alt="Students working on electronic circuits during a Technovation lab session"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Right: session formats */}
      <div className="order-1 lg:order-2 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-800">
          How Technovation sessions work
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm">
          <div className="rounded-2xl bg-white border border-sky-100 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-700 mb-1">
              Guided lab sessions
            </p>
            <p className="text-slate-800">
              Seniors demonstrate circuits, components, and tools step by step,
              followed by hands-on practice.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-purple-100 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-700 mb-1">
              Tool-based workshops
            </p>
            <p className="text-slate-800">
              Practical workshops on Arduino, simulation software, and circuit
              design platforms.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-emerald-100 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700 mb-1">
              Build & debug sessions
            </p>
            <p className="text-slate-800">
              Dedicated time to assemble, test, troubleshoot, and improve
              hardware projects with mentor support.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-amber-100 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-700 mb-1">
              Mentorship & guidance
            </p>
            <p className="text-slate-800">
              Small mentoring groups where seniors guide project planning, tool
              selection, and practical problem-solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
