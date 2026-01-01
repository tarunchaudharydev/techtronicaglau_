"use client";

import Image from "next/image";
import { aboutCodeEPhobia } from "../../../lib/data/home-data";
import { HeroSection } from "./components/HeroSection";
import { PurposeSection } from "./components/PurposeSection";
import { TracksSection } from "./components/TracksSection";
import { WhatWeDoSection } from "./components/WhatWeDoSection";
import { SessionsSection } from "./components/SessionsSection";
import { CtaSection } from "./components/CtaSection";

export default function CodeEPhobiaPage() {
  return (
    <main className="min-h-screen pb-12 px-4 bg-gradient-to-br from-white via-sky-50 to-purple-100">
      <div className="w-full max-w-6xl mx-auto px-4 mt-20 pb-20 flex flex-col">
        <HeroSection aboutCodeEPhobia={aboutCodeEPhobia} />

        <section className="w-full mt-16 space-y-16">
          <PurposeSection aboutCodeEPhobia={aboutCodeEPhobia} />
          <TracksSection />
          <WhatWeDoSection />
          <SessionsSection />
          <CtaSection />
        </section>
      </div>
    </main>
  );
}
