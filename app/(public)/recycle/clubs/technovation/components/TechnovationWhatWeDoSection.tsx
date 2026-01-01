"use client";

export function TechnovationWhatWeDoSection() {
  return (
    <section className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2 items-start">
        {/* What you'll do */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-800 text-center md:text-left">
            What you&apos;ll do in Technovation
          </h2>

          <ul className="text-sm sm:text-base text-slate-800 space-y-2.5 list-disc pl-6">
            <li>
              Work hands-on with electronic components, circuits, sensors, and
              development boards during guided lab sessions.
            </li>
            <li>
              Learn to use industry-relevant tools such as Arduino, simulation
              software, and circuit design platforms.
            </li>
            <li>
              Build mini-projects and prototypes individually and in teams to
              apply theoretical concepts.
            </li>
            <li>
              Participate in workshops focused on embedded systems, hardware
              debugging, and system design.
            </li>
            <li>
              Develop problem-solving skills by troubleshooting real hardware
              issues and improving existing designs.
            </li>
          </ul>
        </div>

        {/* Who should join */}
        <div className="rounded-3xl bg-sky-50/80 border border-purple-100 px-6 sm:px-7 py-6 sm:py-7 space-y-5 shadow-sm">
          <h3 className="text-base sm:text-lg font-semibold text-purple-700">
            Who should join Technovation?
          </h3>

          <p className="text-sm text-slate-700">
            Technovation is for students who want to strengthen their
            electronics foundation by learning through experimentation and
            building.
          </p>

          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div className="space-y-1">
              <p className="font-semibold text-slate-900">
                Electronics beginners
              </p>
              <p className="text-slate-700">
                New to hardware or lab work and looking for structured guidance,
                practical exposure, and supportive peers.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-900">
                Tool & platform learners
              </p>
              <p className="text-slate-700">
                Interested in learning Arduino, simulation tools, circuit design
                software, and embedded platforms hands-on.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-900">
                Project-oriented students
              </p>
              <p className="text-slate-700">
                Want to convert ideas into working prototypes, lab projects, or
                real-world electronic solutions.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-900">
                Aspiring hardware engineers
              </p>
              <p className="text-slate-700">
                Preparing for core electronics roles and aiming to build strong
                practical and problem-solving skills.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 border-t border-slate-200 pt-4">
            <span className="font-semibold text-slate-800">
              No advanced experience required.
            </span>{" "}
            Curiosity, willingness to learn, and consistency are all you need to
            grow with Technovation.
          </p>
        </div>
      </div>
    </section>
  );
}
