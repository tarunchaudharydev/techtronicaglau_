"use client";

import { aboutGizmo } from "@/lib/data/home-data";

import { GizmoHeroSection } from "./components/GizmoHeroSection";
import { GizmoPurposeSection } from "./components/GizmoPurposeSection";
import { GizmoTracksSection } from "./components/GizmoTracksSection";
import { GizmoWhatWeDoSection } from "./components/GizmoWhatWeDoSection";
import { GizmoSessionsSection } from "./components/GizmoSessionsSection";
import { GizmoCtaSection } from "./components/GizmoCtaSection";

export default function Gizmo() {
  return (
    <main className="min-h-screen pb-18 px-4 bg-gradient-to-br from-white via-sky-50 to-purple-100">
      <div className="w-full max-w-6xl mx-auto px-4 mt-20 pb-20 flex flex-col">
        {/* HERO */}
        <GizmoHeroSection aboutGizmo={aboutGizmo} />

        {/* MAIN CONTENT */}
        <section className="w-full mt-16 space-y-16">
          <GizmoPurposeSection aboutGizmo={aboutGizmo} />
          <GizmoTracksSection />
          <GizmoWhatWeDoSection />
          <GizmoSessionsSection />
          <GizmoCtaSection />
        </section>
      </div>
    </main>
  );
}
