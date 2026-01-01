"use client";

export function TracksSection() {
  return (
    <section className="space-y-5">
      <div className="text-center space-y-2">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-800">
          Learning tracks inside the club
        </h2>
        <p className="text-sm sm:text-base text-slate-800 max-w-3xl mx-auto">
          Choose a track that fits your level and switch as you grow. Seniors
          will help you decide what to practise next.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 text-xs sm:text-sm">
        <div className="rounded-3xl border border-sky-200 bg-sky-50 px-4 py-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-800 mb-1">
            Beginner track
          </p>
          <p className="text-slate-800">
            Basics of programming, loops, arrays, functions, and simple
            problems—ideal if you’re new to coding or shifting languages.
          </p>
        </div>
        <div className="rounded-3xl border border-purple-200 bg-purple-50 px-4 py-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-800 mb-1">
            DSA track
          </p>
          <p className="text-slate-800">
            Core data structures and algorithms, patterns, and frequently asked
            interview problems with structured practise lists.
          </p>
        </div>
        <div className="rounded-3xl border border-amber-200 bg-amber-50 px-4 py-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-800 mb-1">
            CP & project track
          </p>
          <p className="text-slate-800">
            Time‑limited contests, rating‑style practice, and mini projects that
            turn your ideas into working tools.
          </p>
        </div>
      </div>
    </section>
  );
}
