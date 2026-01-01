"use client";

export function UnnatiTracksSection() {
  return (
    <section className="space-y-5">
      <div className="text-center space-y-2">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-800">
          Activity tracks inside the club
        </h2>
        <p className="text-sm sm:text-base text-slate-800 max-w-3xl mx-auto">
          Choose a track that matches your interests and explore more as you
          grow. Seniors and coordinators help you discover where you shine best.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 text-xs sm:text-sm">
        <div className="rounded-3xl border border-sky-200 bg-sky-50 px-4 py-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-800 mb-1">
            Expression track
          </p>
          <p className="text-slate-800">
            Explore dance, music, drama, anchoring, and creative performances—
            perfect for students who enjoy expressing themselves on stage.
          </p>
        </div>

        <div className="rounded-3xl border border-purple-200 bg-purple-50 px-4 py-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-800 mb-1">
            Personality track
          </p>
          <p className="text-slate-800">
            Focus on communication skills, confidence building, teamwork, and
            public speaking through interactive activities and sessions.
          </p>
        </div>

        <div className="rounded-3xl border border-amber-200 bg-amber-50 px-4 py-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-800 mb-1">
            Event & leadership track
          </p>
          <p className="text-slate-800">
            Learn event planning, coordination, stage management, and leadership
            by organizing cultural events and college activities.
          </p>
        </div>
      </div>
    </section>
  );
}
