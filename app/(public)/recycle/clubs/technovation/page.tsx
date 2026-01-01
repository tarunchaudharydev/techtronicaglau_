"use client";

import Image from "next/image";
import { aboutTechnovation } from "../../../lib/data/home-data";

import { TechnovationHeroSection } from "./components/TechnovationHeroSection";
import { TechnovationPurposeSection } from "./components/TechnovationPurposeSection";
import { TechnovationTracksSection } from "./components/TechnovationTracksSection";
import { TechnovationWhatWeDoSection } from "./components/TechnovationWhatWeDoSection";
import { TechnovationSessionsSection } from "./components/TechnovationSessionsSection";
import { TechnovationCtaSection } from "./components/TechnovationCtaSection";

function Technovation() {
  return (
    <main className="min-h-screen pb-18 px-4 bg-gradient-to-br from-white via-sky-50 to-purple-100">
      <div className="w-full max-w-6xl mx-auto px-4 mt-20 pb-20 flex flex-col">
        {/* HERO */}
        <TechnovationHeroSection aboutTechnovation={aboutTechnovation} />

        {/* MAIN CONTENT */}
        <section className="w-full mt-16 space-y-16">
          <TechnovationPurposeSection aboutTechnovation={aboutTechnovation} />
          <TechnovationTracksSection />
          <TechnovationWhatWeDoSection />
          <TechnovationSessionsSection />
          <TechnovationCtaSection />
        </section>
      </div>
    </main>
  );
}

export default Technovation;
