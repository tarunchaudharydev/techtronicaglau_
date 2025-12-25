"use client";

import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen pt-28 px-4 flex justify-center bg-gradient-to-br from-white via-sky-50 to-purple-100">
      <section className="w-full max-w-6xl space-y-16 text-slate-900 pb-20">

        {/* ================= HERO ================= */}
        <header className="grid gap-8 md:grid-cols-[1.4fr,1fr] items-center">
          <div className="space-y-3 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.25em] text-sky-600">
              About Techtronica
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              Techtronica • ECE Society of GLA UNIVERSITY
            </h1>
            <p className="text-sm sm:text-base text-slate-700 max-w-3xl mx-auto md:mx-0">
              Techtronica is the student society of the{" "}
              <span className="font-semibold">
                Electronics and Communication Engineering
              </span>{" "}
              department at GLA UNIVERSITY, focused on bridging classroom
              concepts with real-world innovation, projects, and teamwork.
            </p>
          </div>

          {/* Hero Image */}
          <div
            className="relative w-full max-w-sm mx-auto"
            style={{ height: "14rem" }}
          >
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-sky-200 via-purple-200 to-amber-200 blur-xl opacity-70" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 shadow-lg bg-white">
              <Image
                src="/images/overview/team.jpg"
                alt="Techtronica students collaborating"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </header>

        {/* ================= WHAT WE DO ================= */}
        <section className="grid gap-8 lg:grid-cols-[1.2fr,1fr] items-start">
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-sky-900">
              What Techtronica does
            </h2>

            <div className="grid gap-4 md:grid-cols-3 text-xs sm:text-sm">
              {[
                {
                  title: "Technical activities",
                  color: "text-sky-700",
                  text: "Workshops, coding, circuit design, robotics, IoT, VLSI, and embedded systems.",
                },
                {
                  title: "Events & fests",
                  color: "text-purple-700",
                  text: "Hackathons, expos, guest talks, and inter-college competitions.",
                },
                {
                  title: "Growth & networking",
                  color: "text-amber-700",
                  text: "Leadership roles, mentorship, alumni and industry interaction.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white shadow-sm px-4 py-4"
                >
                  <p className={`text-[11px] font-semibold uppercase tracking-wide mb-1 ${item.color}`}>
                    {item.title}
                  </p>
                  <p className="text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Side Image */}
          <div
            className="relative w-full"
            style={{ height: "16rem" }}
          >
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-sky-100 via-purple-100 to-amber-100 blur-lg opacity-70" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 shadow-md bg-white">
              <Image
                src="/images/technovation/ai.jpg"
                alt="Techtronica workshop"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ================= CULTURE & GALLERY ================= */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-sky-900">
            Culture and values at Techtronica
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {[
              "/images/technovation/chip.jpg",
              "/images/technovation/ai.jpg",
              "/images/technovation/chip--.jpg",
            ].map((src, index) => (
              <div
                key={src}
                className={`relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white ${
                  index === 2 ? "col-span-2" : ""
                }`}
                style={{ height: "8rem" }}
              >
                <Image
                  src={src}
                  alt="Techtronica activity"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="rounded-3xl border border-sky-100 bg-white shadow-md px-5 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-sky-900">
              Want to be a part of Techtronica?
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 max-w-xl">
              Join us to work on real electronics & communication projects,
              host events, and build your portfolio.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/team"
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 transition"
            >
              Meet the Core Team
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-sky-800 border border-sky-200 bg-white hover:bg-sky-50 transition"
            >
              Contact us
            </Link>
          </div>
        </section>

      </section>
    </main>
  );
}
