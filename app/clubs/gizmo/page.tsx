"use client";

import Image from "next/image";
import { aboutGizmo } from "../../../lib/data/home-data";

// Tailwind config: add these keyframes & animations to tailwind.config if you want stronger animation
// keyframes: {
//   fadeInUp: { "0%": { opacity: "0", transform: "translateY(16px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
//   fadeInRight: { "0%": { opacity: "0", transform: "translateX(24px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
// }
// animation: {
//   fadeInUp: "fadeInUp 0.6s ease-out forwards",
//   fadeInRight: "fadeInRight 0.6s ease-out forwards",
// }

function Gizmo() {
  return (
    <main className="min-h-screen pb-18 px-4 bg-gradient-to-br from-white via-sky-50 to-purple-100">
      <div className="w-full max-w-6xl mx-auto px-4 mt-20 pb-20 flex flex-col">
        {/* HERO */}
        <section className="w-full flex-1">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            {/* Left */}
            <div className="space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start animate-fadeInUp">
              <span className="text-xs uppercase tracking-[0.25em] text-sky-600">
                Techtronica • Gizmo Club
              </span>

              <div className="space-y-2">
                <p className="text-4xl sm:text-5xl font-bold text-orange-500 drop-shadow-sm">
                  Welcome to
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                  <span className="block text-slate-900">
                    {aboutGizmo.title}
                  </span>
                  <span className="bg-gradient-to-r from-sky-500 via-purple-500 to-yellow-400 bg-clip-text text-transparent">
                    {" "}
                    {aboutGizmo.tagline}
                  </span>
                </h1>
              </div>

              <p className="text-sm sm:text-base text-slate-800 max-w-xl mt-3 mb-2 text-center lg:text-left">
                {aboutGizmo.description}
              </p>

              <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 max-w-xl text-left">
                <li>
                  • Hands-on building sessions with guidance from seniors and
                  mentors.
                </li>
                <li>
                  • Tracks covering robotics basics, electronics, and embedded
                  systems.
                </li>
                <li>
                  • A friendly, experimental space to ask doubts, test ideas,
                  and learn by doing.
                </li>
              </ul>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-purple-950 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500 transition-colors shadow-sm hover:shadow-md">
                  Join Gizmo
                </button>
                <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-purple-700 border border-purple-300 bg-white hover:bg-purple-50 transition-colors">
                  View upcoming events
                </button>
              </div>
            </div>

            {/* Right: image card */}
            <div className="relative mt-6 lg:mt-0 animate-fadeInRight">
              <div className="absolute -inset-4 bg-gradient-to-tr from-orange-300/40 via-purple-400/40 to-sky-300/50 blur-3xl -z-10" />
              <div className="rounded-3xl bg-white border border-purple-100 shadow-xl overflow-hidden">
                <div className="w-full">
                  <Image
                    src="/images/gizmo/robort-white.jpg"
                    alt="Students coding in Code-E-Phobia"
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs sm:text-sm">
                  <p className="font-semibold text-purple-700 flex items-center gap-1">
                    <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
                    Live builds, real machines.
                  </p>
                  <p className="text-orange-500 font-medium text-right">
                    🤖 Robotics • ⚙️ Hardware • 🤝 Teamwork
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="w-full mt-16 space-y-16">
          {/* PURPOSE + STATS + SIDE IMAGE (SECTION 1) */}
          <section className="grid gap-10 lg:grid-cols-[1.5fr,1.1fr] items-center">
            {/* Left: purpose */}
            <div className="space-y-5">
              <div className="space-y-3 text-center lg:text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-purple-800">
                  {aboutGizmo.purpose}
                </h2>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                  {aboutGizmo.purposeDescription}
                </p>
                <p className="text-sm text-slate-700">
                  With a mix of guided build sessions, hands-on practice, and
                  hardware experimentation, the club helps you turn concepts
                  into working robots and real-world electronic systems.
                </p>
              </div>

              {/* At a glance */}
              <div className="space-y-3">
                <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-orange-500">
                  At a glance
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      label: "Focus",
                      value: "Robotics • Electronics • Embedded Systems",
                      color: "text-purple-700",
                    },
                    {
                      label: "Members",
                      value: "Open to all branches",
                      color: "text-orange-600",
                    },
                    {
                      label: "Sessions",
                      value: "Hands-on build & lab sessions",
                      color: "text-purple-700",
                    },
                    {
                      label: "Level",
                      value: "Beginner-friendly to advanced",
                      color: "text-orange-600",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-white border border-purple-100 shadow-sm px-4 py-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-purple-200"
                    >
                      <p className={`${item.color} font-semibold text-sm`}>
                        {item.label}
                      </p>
                      <p className="text-slate-800 text-xs sm:text-sm mt-0.5">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: image (section 1) */}
            <div className="relative h-44 sm:h-56 md:h-64 w-full">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-sky-200 via-purple-200 to-orange-200 blur-lg opacity-70" />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 shadow-md bg-white">
                <Image
                  src="/images/gizmo/robort.jpg"
                  alt="Team"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* TRACKS (full width) */}
          <section className="space-y-5">
            <div className="text-center space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-purple-800">
                Learning tracks inside the club
              </h2>
              <p className="text-sm sm:text-base text-slate-800 max-w-3xl mx-auto">
                Choose a track based on your interest and experience. Members
                can explore multiple tracks and grow as they build and
                experiment.
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
                  Work with microcontrollers, embedded logic, circuit
                  connections, and interfacing components for real applications.
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

          {/* WHAT WE DO + WHO SHOULD JOIN (with better card) */}
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
                    Work hands-on with motors, sensors, microcontrollers, and
                    embedded systems.
                  </li>
                  <li>
                    Collaborate on team-based hardware projects and automation
                    ideas.
                  </li>
                  <li>
                    Test, debug, and improve hardware designs through trial and
                    experimentation.
                  </li>
                  <li>
                    Learn practical electronics concepts by turning theory into
                    real builds.
                  </li>
                </ul>
              </div>

              {/* Who should join – fixed padding & bg */}
              <div className="rounded-3xl bg-sky-50/80 border border-orange-100 px-6 sm:px-7 py-6 sm:py-7 space-y-5 shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold text-orange-600">
                  Who should join Gizmo?
                </h3>

                <p className="text-sm text-slate-700">
                  Gizmo is for students who are curious about robotics,
                  electronics, and building real hardware systems through
                  hands-on learning.
                </p>

                <div className="grid gap-4 md:grid-cols-2 text-sm">
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900">
                      Hardware beginners
                    </p>
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
                      Interested in motors, sensors, circuits, and embedded
                      systems and want to build working models.
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
                    <p className="font-semibold text-slate-900">
                      Hands-on explorers
                    </p>
                    <p className="text-slate-700">
                      Enjoy experimenting, testing, and learning by building
                      rather than only studying theory.
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 border-t border-slate-200 pt-4">
                  <span className="font-semibold text-slate-800">
                    No prior experience required.
                  </span>{" "}
                  All you need is curiosity, patience, and a willingness to
                  learn through hands-on experimentation.
                </p>
              </div>
            </div>
          </section>

          {/* SESSIONS + SECOND SIDE IMAGE (SECTION 2) */}
          <section className="grid gap-8 lg:grid-cols-[1.1fr,1.2fr] items-center">
            {/* Left: image on desktop, above on mobile */}
            <div className="order-2 lg:order-1 relative h-44 sm:h-56 md:h-64 w-full">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple-200 via-sky-200 to-orange-200 blur-lg opacity-80" />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 shadow-md bg-white">
                <Image
                  src="/images/gizmo/drone.jpg"
                  alt="Students working on robots and electronic components during a Gizmo session"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: session formats */}
            <div className="order-1 lg:order-2 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-purple-800">
                How our sessions work
              </h2>

              <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm">
                <div className="rounded-2xl bg-white border border-sky-100 px-4 py-4 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-700 mb-1">
                    Hands-on builds
                  </p>
                  <p className="text-slate-800">
                    Sessions start with assembling circuits, sensors, or
                    mechanical parts, so you learn by physically building and
                    testing components.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-purple-100 px-4 py-4 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-700 mb-1">
                    Guided demos
                  </p>
                  <p className="text-slate-800">
                    Seniors demonstrate tools, wiring, and modules step-by-step
                    before you try the same setup on your own kits.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-emerald-100 px-4 py-4 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                    Mini challenges
                  </p>
                  <p className="text-slate-800">
                    Small challenges like line-following bots, sensor
                    automation, or motor control tasks to apply concepts
                    immediately.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-amber-100 px-4 py-4 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-700 mb-1">
                    Team mentoring
                  </p>
                  <p className="text-slate-800">
                    Work in small groups where mentors help debug circuits, fix
                    hardware issues, and improve design thinking.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-3xl bg-gradient-to-r from-orange-400 via-purple-500 to-sky-500 border border-purple-300/60 px-5 sm:px-8 py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-md">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-base sm:text-lg font-semibold text-white">
                Ready to start your Robotics journey?
              </h2>
              <p className="text-xs sm:text-sm text-sky-50 max-w-xl mx-auto md:mx-0">
                Fill the interest form, join our next meetup, and move from
                &quot;I&apos;m scared of Robotics&quot; to &quot;I build cool
                things with Robotics&quot;. Your first step is simply showing
                up.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <button className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-purple-900 bg-white hover:bg-slate-100 active:bg-slate-200 transition-colors shadow-sm hover:shadow-md">
                Join Gizmo
              </button>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default Gizmo;
