"use client";

export function TechnovationTracksSection() {
  return (
    <section className="space-y-5">
      <div className="text-center space-y-2">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-800">
          Learning tracks inside Technovation
        </h2>
        <p className="text-sm sm:text-base text-slate-800 max-w-3xl mx-auto">
          Choose a track based on your interest and experience. Members can
          explore multiple tracks and progress as they build confidence.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 text-xs sm:text-sm">
        {/* Hardware Basics */}
        <div className="rounded-3xl border border-sky-200 bg-sky-50 px-4 py-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-800 mb-1">
            Hardware fundamentals track
          </p>
          <p className="text-slate-800">
            Basic electronics concepts, components, breadboarding, sensors, and
            simple circuit building—ideal for beginners.
          </p>
        </div>

        {/* Embedded & Tools */}
        <div className="rounded-3xl border border-purple-200 bg-purple-50 px-4 py-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-800 mb-1">
            Embedded & tools track
          </p>
          <p className="text-slate-800">
            Hands-on work with Arduino, microcontrollers, simulation tools, and
            design software to understand embedded systems in practice.
          </p>
        </div>

        {/* Projects & Innovation */}
        <div className="rounded-3xl border border-amber-200 bg-amber-50 px-4 py-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-800 mb-1">
            Projects & innovation track
          </p>
          <p className="text-slate-800">
            Team-based projects that combine hardware, embedded logic, and
            design thinking to build real, working electronic solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
