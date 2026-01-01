"use client";

export function GizmoTracksSection() {
  return (
    <section className="space-y-5">
      <div className="text-center space-y-2">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-800">
          Learning tracks inside the club
        </h2>
        <p className="text-sm sm:text-base text-slate-800 max-w-3xl mx-auto">
          Choose a track based on your interest and experience. Members can
          explore multiple tracks and grow as they build and experiment.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 text-xs sm:text-sm">
        <div className="rounded-3xl border border-sky-200 bg-sky-50 px-4 py-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-800 mb-1">
            Robotics basics track
          </p>
          <p className="text-slate-800">
            Introduction to motors, sensors, controllers, and simple robot
            builds— ideal for beginners starting with hardware.
          </p>
        </div>

        <div className="rounded-3xl border border-purple-200 bg-purple-50 px-4 py-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-800 mb-1">
            Electronics & embedded track
          </p>
          <p className="text-slate-800">
            Work with microcontrollers, embedded logic, circuit connections, and
            interfacing components for real applications.
          </p>
        </div>

        <div className="rounded-3xl border border-amber-200 bg-amber-50 px-4 py-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-800 mb-1">
            Projects & automation track
          </p>
          <p className="text-slate-800">
            Team-based projects focused on automation, smart systems, and
            practical robotic solutions that solve real problems.
          </p>
        </div>
      </div>
    </section>
  );
}
