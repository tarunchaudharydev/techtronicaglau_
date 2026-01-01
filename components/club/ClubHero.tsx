"use client";

import Image from "next/image";
import Link from "next/link";
import { Club } from "@/lib/config/clubs";

export default function ClubHero({ club }: { club: Club }) {
  return (
    <section className="bg-gradient-to-br from-white via-sky-50 to-purple-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14 sm:pb-16 lg:pb-20 grid gap-8 sm:gap-10 lg:grid-cols-2 items-center">
        {/* TEXT */}
        <div className="text-center lg:text-left space-y-4 sm:space-y-5">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-sky-600">
            Techtronica • {club.name}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            {club.name}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-500">
              {club.tagline}
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto lg:mx-0">
            {club.shortDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Link
              href={`/clubs/${club.slug}/join`}
              className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500 font-semibold text-sm sm:text-base text-slate-900 text-center shadow-sm transition-colors"
            >
              Join {club.name}
            </Link>
            <Link
              href={`/clubs/${club.slug}/events`}
              className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full border border-slate-300 bg-white/70 hover:bg-white text-sm sm:text-base text-slate-800 text-center shadow-sm transition-colors"
            >
              View events
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative max-w-md mx-auto lg:max-w-lg xl:max-w-xl w-full">
          <div className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-gradient-to-tr from-sky-200 via-purple-200 to-orange-200 blur-xl opacity-60 -z-10" />
          <Image
            src={club.heroImage}
            alt={club.name}
            width={800}
            height={500}
            className="rounded-3xl shadow-xl w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
