"use client";

export function MindbloggerWhatWeDoSection() {
  return (
    <section className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2 items-start">
        {/* What you do */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-800 text-center md:text-left">
            What you&apos;ll do in Mindblogger
          </h2>

          <ul className="text-sm sm:text-base text-slate-800 space-y-2.5 list-disc pl-6">
            <li>
              Participate in interactive quizzes covering general knowledge,
              current affairs, and theme-based topics.
            </li>
            <li>
              Take part in group discussions, explanation rounds, and
              idea-sharing sessions to strengthen clarity of thought.
            </li>
            <li>
              Engage in creative activities such as writing prompts, blogging,
              poster design, and content creation challenges.
            </li>
            <li>
              Collaborate in team-based activities that encourage brainstorming,
              communication, and creative problem-solving.
            </li>
            <li>
              Build confidence in expressing ideas, presenting viewpoints, and
              speaking in front of peers in a supportive environment.
            </li>
          </ul>
        </div>

        {/* Who should join – Mindblogger */}
        <div className="rounded-3xl bg-sky-50/80 border border-purple-100 px-6 sm:px-7 py-6 sm:py-7 space-y-5 shadow-sm">
          <h3 className="text-base sm:text-lg font-semibold text-purple-700">
            Who should join Mindblogger?
          </h3>

          <p className="text-sm text-slate-700">
            Mindblogger is for students who enjoy learning, questioning, and
            expressing ideas while growing their knowledge and communication
            skills.
          </p>

          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div className="space-y-1">
              <p className="font-semibold text-slate-900">
                Quiz & knowledge enthusiasts
              </p>
              <p className="text-slate-700">
                Love quizzes, current affairs, general knowledge, or testing how
                quickly you can think and respond under pressure.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-900">Curious learners</p>
              <p className="text-slate-700">
                Enjoy exploring new topics, asking questions, and learning
                beyond textbooks through interactive activities.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-900">Creative thinkers</p>
              <p className="text-slate-700">
                Interested in writing, storytelling, content creation, posters,
                or expressing ideas in creative and engaging ways.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-900">
                Confident communicators (or aspiring ones)
              </p>
              <p className="text-slate-700">
                Want to improve speaking, discussions, debates, and presenting
                your thoughts clearly in front of others.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 border-t border-slate-200 pt-4">
            <span className="font-semibold text-slate-800">
              No prior experience needed.
            </span>{" "}
            If you are curious, willing to participate, and open to learning,
            Mindblogger is the right place to grow together.
          </p>
        </div>
      </div>
    </section>
  );
}
