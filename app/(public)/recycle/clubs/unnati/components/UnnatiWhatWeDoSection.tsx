"use client";

export function UnnatiWhatWeDoSection() {
  return (
    <section className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2 items-start">
        {/* What you do */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-800 text-center md:text-left">
            What you&apos;ll do in Unnati
          </h2>
          <ul className="text-sm sm:text-base text-slate-800 space-y-2.5 list-disc pl-6">
            <li>
              Participate in cultural events, competitions, and campus
              celebrations.
            </li>
            <li>
              Take part in dance, music, drama, anchoring, and other creative
              activities.
            </li>
            <li>
              Build confidence through stage exposure, performances, and group
              activities.
            </li>
            <li>
              Work in teams to plan, rehearse, and execute cultural programs and
              events.
            </li>
            <li>
              Develop communication, leadership, and interpersonal skills
              naturally.
            </li>
          </ul>
        </div>

        {/* Who should join */}
        <div className="rounded-3xl bg-sky-50/80 border border-orange-100 px-6 sm:px-7 py-6 sm:py-7 space-y-5 shadow-sm">
          <h3 className="text-base sm:text-lg font-semibold text-orange-600">
            Who should join Unnati?
          </h3>

          <p className="text-sm text-slate-700">
            Unnati is for students who want to express themselves, build
            confidence, and grow beyond academics in a supportive cultural
            environment.
          </p>

          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div className="space-y-1">
              <p className="font-semibold text-slate-900">
                Creative enthusiasts
              </p>
              <p className="text-slate-700">
                Enjoy dance, music, drama, anchoring, or any form of artistic
                expression.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-900">
                Confidence builders
              </p>
              <p className="text-slate-700">
                Want to improve stage presence, communication skills, and
                self-confidence.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-900">Team players</p>
              <p className="text-slate-700">
                Like working with others, rehearsing together, and supporting
                group efforts.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-900">Event organizers</p>
              <p className="text-slate-700">
                Interested in planning, managing, and executing cultural events
                and fests.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 border-t border-slate-200 pt-4">
            <span className="font-semibold text-slate-800">
              No prior experience needed.
            </span>{" "}
            All you need is enthusiasm, openness to learn, and the confidence to
            try.
          </p>
        </div>
      </div>
    </section>
  );
}
