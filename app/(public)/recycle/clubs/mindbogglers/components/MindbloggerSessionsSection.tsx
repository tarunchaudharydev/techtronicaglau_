"use client";

import Image from "next/image";

export function MindbloggerSessionsSection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr,1.2fr] items-center">
      {/* Left: image (desktop left, mobile top) */}
      <div className="order-2 lg:order-1 relative h-44 sm:h-56 md:h-64 w-full">
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple-200 via-sky-200 to-pink-200 blur-lg opacity-80" />
        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 shadow-md bg-white">
          <Image
            src="/images/mindblogger/quiz-session.jpg"
            alt="Students participating in a Mindblogger quiz and discussion session"
            width={800}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right: session formats */}
      <div className="order-1 lg:order-2 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-800">
          How Mindblogger sessions work
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm">
          <div className="rounded-2xl bg-white border border-sky-100 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-700 mb-1">
              Quiz-based learning
            </p>
            <p className="text-slate-800">
              Interactive quizzes on general knowledge, current affairs, and
              themed topics designed to improve thinking speed and clarity.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-purple-100 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-700 mb-1">
              Creative activities
            </p>
            <p className="text-slate-800">
              Writing prompts, storytelling tasks, poster ideas, and creative
              challenges that encourage expression and originality.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-emerald-100 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700 mb-1">
              Group discussions
            </p>
            <p className="text-slate-800">
              Open discussions and explanation rounds where participants share
              viewpoints, justify answers, and learn from each other.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-amber-100 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-700 mb-1">
              Feedback & reflection
            </p>
            <p className="text-slate-800">
              Seniors and peers provide constructive feedback to help you
              improve confidence, communication, and clarity of thought.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
