"use client";

export function MindbloggerTracksSection() {
  return (
    <section className="space-y-5">
      {/* Heading */}
      <div className="text-center space-y-2">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-800">
          Learning tracks inside Mindblogger
        </h2>
        <p className="text-sm sm:text-base text-slate-800 max-w-3xl mx-auto">
          Explore different tracks focused on quizzes, creativity, and
          communication. Members are free to switch tracks as they discover
          their interests.
        </p>
      </div>

      {/* Tracks Grid */}
      <div className="grid gap-6 md:grid-cols-3 text-sm">
        {/* Knowledge & quiz track */}
        <div className="rounded-3xl border border-sky-200 bg-sky-50 px-5 py-5 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-800 mb-1">
            Knowledge & quiz track
          </p>
          <p className="text-slate-800">
            General knowledge, current affairs, logical reasoning, and themed
            quizzes designed to build awareness, speed, and confidence.
          </p>
        </div>

        {/* Creative expression track */}
        <div className="rounded-3xl border border-purple-200 bg-purple-50 px-5 py-5 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-800 mb-1">
            Creative expression track
          </p>
          <p className="text-slate-800">
            Writing prompts, blogging, poster design, reels, and storytelling
            activities that help you express ideas clearly and creatively.
          </p>
        </div>

        {/* Communication & discussion track */}
        <div className="rounded-3xl border border-amber-200 bg-amber-50 px-5 py-5 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-800 mb-1">
            Communication & discussion track
          </p>
          <p className="text-slate-800">
            Group discussions, debates, quizzes with explanation rounds, and
            peer feedback sessions to improve articulation and public speaking.
          </p>
        </div>
      </div>
    </section>
  );
}
