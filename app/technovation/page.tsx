"use client";

import Image from "next/image";
import { aboutTechnovation } from "../data/home-data";

// Tailwind config: add these keyframes & animations to tailwind.config if you want stronger animation
// keyframes: {
//   fadeInUp: { "0%": { opacity: "0", transform: "translateY(16px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
//   fadeInRight: { "0%": { opacity: "0", transform: "translateX(24px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
// }
// animation: {
//   fadeInUp: "fadeInUp 0.6s ease-out forwards",
//   fadeInRight: "fadeInRight 0.6s ease-out forwards",
// }

function Technovation() {
  return (
    <main className="min-h-screen pt-28 px-4 bg-gradient-to-br from-white via-sky-50 to-purple-100">
      <div className="w-full max-w-6xl mx-auto px-4 mt-20 pb-20 flex flex-col">
        {/* HERO */}
        <section className="w-full flex-1">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            {/* Left */}
            <div className="space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start animate-fadeInUp">
              <span className="text-xs uppercase tracking-[0.25em] text-sky-600">
                Techtronica • Technovation Club
              </span>

              <div className="space-y-2">
                <p className="text-4xl sm:text-5xl font-bold text-orange-500 drop-shadow-sm">
                  Welcome to
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                  <span className="block text-slate-900">
                    {aboutTechnovation.title}
                  </span>
                  <span className="bg-gradient-to-r from-sky-500 via-purple-500 to-yellow-400 bg-clip-text text-transparent">
                    {" "}
                    {aboutTechnovation.tagline}
                  </span>
                </h1>
              </div>

              <p className="text-sm sm:text-base text-slate-800 max-w-xl mt-3 mb-2 text-center lg:text-left">
                {aboutTechnovation.description}
              </p>

             <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 max-w-xl text-left">
  <li>• Hands-on electronics sessions guided by seniors and mentors.</li>
  <li>• Learning tracks covering hardware basics, embedded systems, and design tools.</li>
  <li>• A practical, collaborative space to experiment, build, and solve real-world problems.</li>
</ul>


              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-purple-950 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500 transition-colors shadow-sm hover:shadow-md">
                  Join Technovation
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
                    src="/images/technovation/chip--.jpg"
                    alt="Students coding in Technovation"
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs sm:text-sm">
                 <p className="font-semibold text-purple-700 flex items-center gap-1">
  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
  Hands-on builds, real solutions.
</p>
<p className="text-orange-500 font-medium text-right">
  🔌 Hardware • ⚙️ Tools • 🛠️ Innovation
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
                  {aboutTechnovation.purpose}
                </h2>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                  {aboutTechnovation.purposeDescription}
                </p>
                <p className="text-sm text-slate-700">
  With a mix of guided workshops, hands-on practice, and collaborative projects,
  the club helps you apply theory to real hardware builds and practical
  engineering solutions.
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
      value: "Hardware • Embedded • Circuit Design",
      color: "text-purple-700",
    },
    {
      label: "Members",
      value: "Electronics-focused, open to learners",
      color: "text-orange-600",
    },
    {
      label: "Sessions",
      value: "Hands-on labs & workshops",
      color: "text-purple-700",
    },
    {
      label: "Level",
      value: "Beginner to intermediate",
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
                  src="/images/technovation/transistor.jpg"
                  alt="Students working on electronic circuits during a Technovation lab session"
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
      Learning tracks inside Technovation
    </h2>
    <p className="text-sm sm:text-base text-slate-800 max-w-3xl mx-auto">
      Choose a track based on your interest and experience. Members can explore
      multiple tracks and progress as they build confidence.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-3 text-xs sm:text-sm">
    {/* Hardware Basics */}
    <div className="rounded-3xl border border-sky-200 bg-sky-50 px-4 py-4 shadow-sm">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-800 mb-1">
        Hardware fundamentals track
      </p>
      <p className="text-slate-800">
        Basic electronics concepts, components, breadboarding, sensors, and
        simple circuit building—ideal for beginners.
      </p>
    </div>

    {/* Embedded & Tools */}
    <div className="rounded-3xl border border-purple-200 bg-purple-50 px-4 py-4 shadow-sm">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-800 mb-1">
        Embedded & tools track
      </p>
      <p className="text-slate-800">
        Hands-on work with Arduino, microcontrollers, simulation tools, and
        design software to understand embedded systems in practice.
      </p>
    </div>

    {/* Projects & Innovation */}
    <div className="rounded-3xl border border-amber-200 bg-amber-50 px-4 py-4 shadow-sm">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-800 mb-1">
        Projects & innovation track
      </p>
      <p className="text-slate-800">
        Team-based projects that combine hardware, embedded logic, and design
        thinking to build real, working electronic solutions.
      </p>
    </div>
  </div>
</section>


         {/* WHAT WE DO + WHO SHOULD JOIN (Technovation) */}
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
          Build mini-projects and prototypes individually and in teams to apply
          theoretical concepts.
        </li>
        <li>
          Participate in workshops focused on embedded systems, hardware
          debugging, and system design.
        </li>
        <li>
          Develop problem-solving skills by troubleshooting real hardware issues
          and improving existing designs.
        </li>
      </ul>
    </div>

    {/* Who should join */}
    <div className="rounded-3xl bg-sky-50/80 border border-purple-100 px-6 sm:px-7 py-6 sm:py-7 space-y-5 shadow-sm">
      <h3 className="text-base sm:text-lg font-semibold text-purple-700">
        Who should join Technovation?
      </h3>

      <p className="text-sm text-slate-700">
        Technovation is for students who want to strengthen their electronics
        foundation by learning through experimentation and building.
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


          {/* SESSIONS + SECOND SIDE IMAGE (Technovation) */}
<section className="grid gap-8 lg:grid-cols-[1.1fr,1.2fr] items-center">

  {/* Left: image */}
  <div className="order-2 lg:order-1 w-full">
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-md bg-white">
      <Image
        src="/images/technovation/ai.jpg"
        alt="Students working on electronic circuits during a Technovation lab session"
        width={800}
        height={450}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  </div>

  {/* Right: session formats */}
  <div className="order-1 lg:order-2 space-y-4">
    <h2 className="text-xl sm:text-2xl font-bold text-purple-800">
      How Technovation sessions work
    </h2>

    <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm">

      <div className="rounded-2xl bg-white border border-sky-100 px-4 py-4 shadow-sm">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-700 mb-1">
          Guided lab sessions
        </p>
        <p className="text-slate-800">
          Seniors demonstrate circuits, components, and tools step by step,
          followed by hands-on practice.
        </p>
      </div>

      <div className="rounded-2xl bg-white border border-purple-100 px-4 py-4 shadow-sm">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-700 mb-1">
          Tool-based workshops
        </p>
        <p className="text-slate-800">
          Practical workshops on Arduino, simulation software, and circuit
          design platforms.
        </p>
      </div>

      <div className="rounded-2xl bg-white border border-emerald-100 px-4 py-4 shadow-sm">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700 mb-1">
          Build & debug sessions
        </p>
        <p className="text-slate-800">
          Dedicated time to assemble, test, troubleshoot, and improve hardware
          projects with mentor support.
        </p>
      </div>

      <div className="rounded-2xl bg-white border border-amber-100 px-4 py-4 shadow-sm">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-700 mb-1">
          Mentorship & guidance
        </p>
        <p className="text-slate-800">
          Small mentoring groups where seniors guide project planning,
          tool selection, and practical problem-solving.
        </p>
      </div>

    </div>
  </div>
</section>


          {/* CTA */}
          <section className="rounded-3xl bg-gradient-to-r from-orange-400 via-purple-500 to-sky-500 border border-purple-300/60 px-5 sm:px-8 py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-md">
           <div className="space-y-2 text-center md:text-left">
  <h2 className="text-base sm:text-lg font-semibold text-white">
    Ready to build and experiment with electronics?
  </h2>
  <p className="text-xs sm:text-sm text-sky-50 max-w-xl mx-auto md:mx-0">
    Fill the interest form, join our next lab session, and start turning
    electronic concepts into real circuits and working prototypes. Your first
    step is simply showing up and building.
  </p>
</div>

            <div className="flex justify-center md:justify-end">
              <button className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-purple-900 bg-white hover:bg-slate-100 active:bg-slate-200 transition-colors shadow-sm hover:shadow-md">
                Join Technovation
              </button>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default Technovation;