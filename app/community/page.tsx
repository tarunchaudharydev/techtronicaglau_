"use client";

import { useState } from "react";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

type Member = {
  id: number;
  name: string;
  role: string;
  image: string;
  shortBio: string;
  longBio: string;
  instagram?: string;
  linkedin?: string;
};

const members: Member[] = [
  {
    id: 1,
    name: "Abhishek Sharma",
    role: "President",
    image: "/images/technovation/abhishek.jpg",
    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Shiva coordinates Techtronica’s strategy, mentors student leaders, and ensures that every event delivers value to the campus tech community.",
    instagram: "https://instagram.com/username",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: 1,
    name: "Dheeraj Rajput",
    role: "Vice President",
    image: "/team/dheeraj.jpg",
    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Shiva coordinates Techtronica’s strategy, mentors student leaders, and ensures that every event delivers value to the campus tech community.",
    instagram: "https://instagram.com/username",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: 1,
    name: "Harshit Tiwari",
    role: "GENERAL SECRETARY",
    image: "/team/harshit.jpg",
    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Shiva coordinates Techtronica’s strategy, mentors student leaders, and ensures that every event delivers value to the campus tech community.",
    instagram: "https://instagram.com/username",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: 1,
    name: "Ayushi Richhariya",
    role: "Operation head",
    image: "/team/ayushi.jpg",
    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Shiva coordinates Techtronica’s strategy, mentors student leaders, and ensures that every event delivers value to the campus tech community.",
    instagram: "https://instagram.com/username",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: 1,
    name: "Utkarsh Saxena",
    role: "Vice President",
    image: "/team/utkarsh.jpg",
    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Shiva coordinates Techtronica’s strategy, mentors student leaders, and ensures that every event delivers value to the campus tech community.",
    instagram: "https://instagram.com/username",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: 1,
    name: " Samriddhi Gaur",
    role: "General Secretary",
    image: "/team/samriddhi.jpg",
    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Shiva coordinates Techtronica’s strategy, mentors student leaders, and ensures that every event delivers value to the campus tech community.",
    instagram: "https://instagram.com/username",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: 1,
    name: " Astitva Johri",
    role: "President",
    image: "/team/astitva.jpg",
    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Shiva coordinates Techtronica’s strategy, mentors student leaders, and ensures that every event delivers value to the campus tech community.",
    instagram: "https://instagram.com/username",
    linkedin: "https://linkedin.com/in/username",
  },

  // ...other members
];

export default function CommunityPage() {
  const [selected, setSelected] = useState<Member | null>(null);

  return (
    <section className="min-h-screen pt-28 px-4 bg-gradient-to-br from-white via-sky-50 to-purple-100  sm:px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 px-2">
          <p className="text-[11px] uppercase tracking-[0.25em] text-sky-600 mb-2">
            Techtronica • GLA University
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Community Team
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Meet the people who organize events, mentor juniors, and keep
            Techtronica active all year.
          </p>
        </div>

        {/* Mobile-first grid: 1 → 2 → 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {members.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setSelected(m)}
              className="group w-full max-w-sm rounded-2xl bg-white border border-slate-200 px-4 py-5 sm:px-5 sm:py-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              <div className="flex flex-col items-center">
                <div className="mb-3 h-18 w-18 sm:h-20 sm:w-20 rounded-full overflow-hidden border border-slate-300 shadow-sm">
                  <Image
                    src={m.image}
                    alt={m.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide text-sky-600 mb-1">
                  {m.role}
                </p>
                <p className="text-sm sm:text-base font-semibold text-slate-900 mb-1 text-center">
                  {m.name}
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 text-center mb-2">
                  {m.shortBio}
                </p>
                <span className="text-[11px] font-medium text-sky-700 group-hover:text-sky-900 inline-flex items-center">
                  View profile
                  <span className="ml-1 translate-x-0 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* FULL-SCREEN profile (mobile-friendly) */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-white text-slate-900">
          {/* Top bar */}
          <header className="sticky top-0 z-10 border-b border-slate-200 bg-white">
            <div className="max-w-5xl mx-auto flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4">
              <div className="min-w-0">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-sky-600 mb-1">
                  Techtronica Profile
                </p>
                <h2 className="text-base sm:text-lg md:text-2xl font-semibold truncate">
                  {selected.name}
                </h2>
                <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 truncate">
                  {selected.role}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="ml-3 h-8 w-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 text-sm font-bold flex items-center justify-center flex-shrink-0"
              >
                ✕
              </button>
            </div>
          </header>

          {/* Scrollable content */}
          <main className="max-w-5xl mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8 max-h-[calc(100vh-3.5rem)] overflow-y-auto">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              {/* Photo + socials */}
              <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                <div className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-3xl overflow-hidden border border-slate-200 shadow-lg mb-3 sm:mb-4">
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    width={220}
                    height={220}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="inline-flex items-center rounded-full border border-sky-500/60 bg-sky-50 px-3 py-1 text-[10px] sm:text-[11px] font-medium text-sky-800">
                  {selected.role}
                </span>

                {/* Social links */}
                <div className="mt-3 flex gap-3">
                  {selected.linkedin && (
                    <a
                      href={selected.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-white hover:bg-sky-700 transition"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {selected.instagram && (
                    <a
                      href={selected.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-yellow-400 text-white hover:brightness-110 transition"
                      aria-label="Instagram profile"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Text section */}
              <div className="flex-1">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">
                  About {selected.name.split(" ")[0]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mb-4">
                  {selected.longBio}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-700">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-wide text-sky-700 mb-1">
                      What they handle
                    </p>
                    <p>
                      Plans and executes events, supports volunteers, and keeps
                      Techtronica activities aligned with students’ interests.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-wide text-sky-700 mb-1">
                      How they can help you
                    </p>
                    <p>
                      Reach out for guidance on joining teams, proposing ideas,
                      or getting support for your own tech initiatives.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="mt-5 inline-flex items-center rounded-full bg-sky-600 px-5 py-2 text-[11px] sm:text-xs font-semibold text-white shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
                >
                  Back to community
                </button>
              </div>
            </div>
          </main>
        </div>
      )}
    </section>
  );
}
