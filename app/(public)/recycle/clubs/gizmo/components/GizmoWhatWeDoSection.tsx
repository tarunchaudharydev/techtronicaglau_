"use client";

export function GizmoWhatWeDoSection() {
  return (
    <section className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2 items-start">
        {/* What you do */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-800 text-center md:text-left">
            What you&apos;ll do in Gizmo
          </h2>
          <ul className="text-sm sm:text-base text-slate-800 space-y-2.5 list-disc pl-6">
            <li>
              Build and experiment with robots, circuits, and electronic
              components.
            </li>
            <li>
              Work hands-on with motors, sensors, microcontrollers, and embedded
              systems.
            </li>
            <li>
              Collaborate on team-based hardware projects and automation ideas.
            </li>
            <li>
              Test, debug, and improve hardware designs through trial and
              experimentation.
            </li>
            <li>
              Learn practical electronics concepts by turning theory into real
              builds.
            </li>
          </ul>
        </div>

        {/* Who should join */}
        <div className="rounded-3xl bg-sky-50/80 border border-orange-100 px-6 sm:px-7 py-6 sm:py-7 space-y-5 shadow-sm">
          <h3 className="text-base sm:text-lg font-semibold text-orange-600">
            Who should join Gizmo?
          </h3>

          <p className="text-sm text-slate-700">
            Gizmo is for students who are curious about robotics, electronics,
            and building real hardware systems through hands-on learning.
          </p>

          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div className="space-y-1">
              <p className="font-semibold text-slate-900">Hardware beginners</p>
              <p className="text-slate-700">
                New to robotics or electronics and looking for structured
                guidance and practical exposure.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-900">
                Robotics & electronics enthusiasts
              </p>
              <p className="text-slate-700">
                Interested in motors, sensors, circuits, and embedded systems
                and want to build working models.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-900">
                Project-focused learners
              </p>
              <p className="text-slate-700">
                Want to turn ideas into robots, automation systems, or
                electronic prototypes with a collaborative team.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-900">Hands-on explorers</p>
              <p className="text-slate-700">
                Enjoy experimenting, testing, and learning by building rather
                than only studying theory.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 border-t border-slate-200 pt-4">
            <span className="font-semibold text-slate-800">
              No prior experience required.
            </span>{" "}
            All you need is curiosity, patience, and a willingness to learn
            through hands-on experimentation.
          </p>
        </div>
      </div>
    </section>
  );
}
