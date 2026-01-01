"use client";

import Image from "next/image";

export function SessionsSection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr,1.2fr] items-center">
      {/* Left: image on desktop, above on mobile */}
      <div className="order-2 lg:order-1 relative h-44 sm:h-56 md:h-64 w-full">
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple-200 via-sky-200 to-orange-200 blur-lg opacity-80" />
        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 shadow-md bg-white">
          <Image
            src="/images/code-e-phobia/code-session.jpg"
            alt="Students practising during a Code-E-Phobia session"
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
              Problem walkthroughs
            </p>
            <p className="text-slate-800">
              Seniors pick problems, break down the thought process, and then
              let you try similar ones on your own.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-purple-100 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-700 mb-1">
              Silent grind sessions
            </p>
            <p className="text-slate-800">
              Bring your laptop, sit together, and solve problems quietly.
              Doubts are cleared instantly when you get stuck.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-emerald-100 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700 mb-1">
              Mock contests
            </p>
            <p className="text-slate-800">
              Short timed contests that simulate Codeforces rounds or hiring
              tests, followed by solution discussions.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-amber-100 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-700 mb-1">
              Mentorship circles
            </p>
            <p className="text-slate-800">
              Small groups where seniors track your progress, suggest practice
              lists, and share interview tips and resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
