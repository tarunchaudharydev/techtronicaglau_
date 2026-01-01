"use client";

import Image from "next/image";
import Link from "next/link";

interface AboutCodeEPhobia {
  title: string;
  tagline: string;
  description: string[];
  purpose: string;
  purposeDescription: string[];
}

export function HeroSection({
  aboutCodeEPhobia,
}: {
  aboutCodeEPhobia: AboutCodeEPhobia;
}) {
  return (
    <section className="w-full flex-1">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        {/* Left */}
        <div className="space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start animate-fadeInUp">
          <span className="text-xs uppercase tracking-[0.25em] text-sky-600">
            Techtronica • Coding Club
          </span>

          <div className="space-y-2">
            <p className="text-4xl sm:text-5xl font-bold text-orange-500 drop-shadow-sm">
              Welcome to
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="block text-slate-900">
                {aboutCodeEPhobia.title}
              </span>
              <span className="bg-gradient-to-r from-sky-500 via-purple-500 to-yellow-400 bg-clip-text text-transparent">
                {" "}
                {aboutCodeEPhobia.tagline}
              </span>
            </h1>
          </div>

          <div className="text-sm sm:text-base text-slate-800 max-w-xl mt-3 mb-2 text-center lg:text-left space-y-3">
            {aboutCodeEPhobia.description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>

          {/* <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 max-w-xl text-left">
            <li>• Weekly problem‑solving with seniors and mentors.</li>
            <li>• Tracks for beginners, DSA, and competitive programming.</li>
            <li>
              • A low‑pressure, friendly space to ask doubts and grow together.
            </li>
          </ul> */}

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
            <Link
              href="/clubs/code-e-phobia/join"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-purple-950 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500 transition-colors shadow-sm hover:shadow-md"
            >
              Join Code-E-Phobia
            </Link>

            <Link
              href="/clubs/code-e-phobia/events"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-purple-700 border border-purple-300 bg-white hover:bg-purple-50 transition-colors"
            >
              View upcoming events
            </Link>
          </div>
        </div>

        {/* Right: image card */}
        <div className="relative mt-6 lg:mt-0 animate-fadeInRight">
          <div className="absolute -inset-4 bg-gradient-to-tr from-orange-300/40 via-purple-400/40 to-sky-300/50 blur-3xl -z-10" />
          <div className="rounded-3xl bg-white border border-purple-100 shadow-xl overflow-hidden">
            <div className="w-full">
              <Image
                src="/images/code-e-phobia/coding-laptop.jpg"
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
                Live coding, real problems.
              </p>
              <p className="text-orange-500 font-medium text-right">
                💻 Code • 🧠 Logic • 🤝 Community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
