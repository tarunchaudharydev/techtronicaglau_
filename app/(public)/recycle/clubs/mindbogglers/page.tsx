"use client";

import Image from "next/image";
import { aboutMindblogger } from "../../../lib/data/home-data";

import { MindbloggerHeroSection } from "./components/MindbloggerHeroSection";
import { MindbloggerPurposeSection } from "./components/MindbloggerPurposeSection";
import { MindbloggerTracksSection } from "./components/MindbloggerTracksSection";
import { MindbloggerWhatWeDoSection } from "./components/MindbloggerWhatWeDoSection";
import { MindbloggerSessionsSection } from "./components/MindbloggerSessionsSection";
import { MindbloggerCtaSection } from "./components/MindbloggerCtaSection";

function MindBlogger() {
  return (
    <main className="min-h-screen pb-18 px-4 bg-gradient-to-br from-white via-sky-50 to-purple-100">
      <div className="w-full max-w-6xl mx-auto px-4 mt-20 pb-20 flex flex-col">
        {/* HERO */}
        <MindbloggerHeroSection aboutMindblogger={aboutMindblogger} />

        {/* MAIN CONTENT */}
        <section className="w-full mt-16 space-y-16">
          <MindbloggerPurposeSection aboutMindblogger={aboutMindblogger} />
          <MindbloggerTracksSection />
          <MindbloggerWhatWeDoSection />
          <MindbloggerSessionsSection />
          <MindbloggerCtaSection />
        </section>
      </div>
    </main>
  );
}

export default MindBlogger;
