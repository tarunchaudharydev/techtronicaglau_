"use client";

//  this is the first thing which user see the home page with slider and welcoming message or text.
import { RefObject } from "react";
import Link from "next/link";
import HomeSlider from "@/components/HomeSlider";

type HomeHeroProps = {
  heroRef: RefObject<HTMLDivElement | null>;
};

const HomeHero = ({ heroRef }: HomeHeroProps) => {
  return (
    <div
      ref={heroRef}
      className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center"
    >
      <div className="w-full lg:w-2/5 text-center lg:text-left space-y-4">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-sky-600">
          Techtronica society • GLA University
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Where Ideas Flow
          <span className="mx-2 bg-gradient-to-r from-sky-500 via-purple-500 to-yellow-400 bg-clip-text text-transparent">
            without resistance.
          </span>
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-slate-800 max-w-xl mx-auto lg:mx-0">
          Explore five dynamic clubs, join events, and collaborate with peers to
          build a vibrant, inclusive college community.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
          <Link
            href="/clubs"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-black bg-yellow-300 hover:bg-yellow-400 transition-colors shadow-md shadow-yellow-400/40"
          >
            Explore Clubs
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-purple-200 text-sky-900 bg-white/70 hover:bg-white transition-colors shadow-sm"
          >
            Learn More
          </Link>
        </div>
      </div>

      <HomeSlider />
    </div>
  );
};

export default HomeHero;
