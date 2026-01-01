"use client";

import Image from "next/image";
import type { AboutClub } from "@/lib/data/home-data";

interface Props {
  aboutGizmo: AboutClub;
}

export function GizmoPurposeSection({ aboutGizmo }: Props) {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.5fr,1.1fr] items-center">
      {/* Left: purpose */}
      <div className="space-y-5">
        <div className="space-y-3 text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-800">
            {aboutGizmo.purpose}
          </h2>

          {/* Purpose description (ARRAY → mapped) */}
          <div className="space-y-3">
            {aboutGizmo.purposeDescription.map((text, i) => (
              <p
                key={i}
                className="text-sm sm:text-base text-slate-800 leading-relaxed"
              >
                {text}
              </p>
            ))}
          </div>

          <p className="text-sm text-slate-700">
            With a mix of guided build sessions, hands-on practice, and hardware
            experimentation, the club helps you turn concepts into working
            robots and real-world electronic systems.
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

      {/* Right: image */}
      <div className="relative h-44 sm:h-56 md:h-64 w-full">
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-sky-200 via-purple-200 to-orange-200 blur-lg opacity-70" />
        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 shadow-md bg-white">
          <Image
            src="/images/gizmo/robort.jpg"
            alt="Gizmo robotics team"
            width={800}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
