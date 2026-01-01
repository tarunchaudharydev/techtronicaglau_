"use client";

export function WhatWeDoSection() {
  return (
    <section className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2 items-start">
        {/* What you do */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-800 text-center md:text-left">
            What you&apos;ll do in Code-E-Phobia
          </h2>
          <ul className="text-sm sm:text-base text-slate-800 space-y-2.5 list-disc pl-6">
            <li>
              Participate in coding contests, hackathons, and online rounds.
            </li>
            <li>
              Practise DSA on LeetCode, Codeforces, and GfG with topic‑wise
              guidance.
            </li>
            <li>
              Work on mini-projects and team challenges to build your portfolio.
            </li>
            <li>
              Discuss approaches, debug together, and learn new algorithms.
            </li>
            <li>
              Learn how to read editorials, optimize code, and write clean
              solutions.
            </li>
          </ul>
        </div>

        {/* Who should join */}
        <div className="rounded-3xl bg-sky-50/80 border border-orange-100 px-6 sm:px-7 py-6 sm:py-7 space-y-5 shadow-sm">
          <h3 className="text-base sm:text-lg font-semibold text-orange-600">
            Who should join Code-E-Phobia?
          </h3>

          <p className="text-sm text-slate-700">
            Code-E-Phobia is for students who want to grow their coding skills
            seriously while still enjoying the journey.
          </p>

          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div className="space-y-1">
              <p className="font-semibold text-slate-900">Curious beginners</p>
              <p className="text-slate-700">
                Just starting out and looking for guidance, structure, and peers
                to practise coding with.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-900">
                DSA & interview aspirants
              </p>
              <p className="text-slate-700">
                Preparing for internships or placements and need consistent DSA
                practice, mock contests, and discussions.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-900">
                Competitive programmers
              </p>
              <p className="text-slate-700">
                Enjoy contests, want to improve ratings, and like breaking down
                complex problems with others.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-900">Project builders</p>
              <p className="text-slate-700">
                Interested in turning ideas into mini‑projects, tools, or
                automation scripts with a supportive team.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 border-t border-slate-200 pt-4">
            <span className="font-semibold text-slate-800">
              No prerequisites.
            </span>{" "}
            The only requirement is consistency—show up regularly, attempt
            problems, ask questions, and help others grow along the way.
          </p>
        </div>
      </div>
    </section>
  );
}
