"use client";

import Image from "next/image";
import { aboutUnnati } from "../../../lib/data/home-data";

import { UnnatiHeroSection } from "./components/UnnatiHeroSection";
import { UnnatiPurposeSection } from "./components/UnnatiPurposeSection";
import { UnnatiTracksSection } from "./components/UnnatiTracksSection";
import { UnnatiWhatWeDoSection } from "./components/UnnatiWhatWeDoSection";
import { UnnatiSessionsSection } from "./components/UnnatiSessionsSection";
import { UnnatiCtaSection } from "./components/UnnatiCtaSection";

function Unnati() {
  return (
    <main className="min-h-screen pb-18 bg-gradient-to-br from-white via-sky-50 to-purple-100">
      <div className="w-full max-w-6xl mx-auto px-4 mt-20 pb-20 flex flex-col">
        {/* HERO */}
        <UnnatiHeroSection aboutUnnati={aboutUnnati} />

        {/* MAIN CONTENT */}
        <section className="w-full mt-16 space-y-16">
          <UnnatiPurposeSection aboutUnnati={aboutUnnati} />
          <UnnatiTracksSection />
          <UnnatiWhatWeDoSection />
          <UnnatiSessionsSection />
          <UnnatiCtaSection />
        </section>
      </div>
    </main>
  );
}

export default Unnati;
