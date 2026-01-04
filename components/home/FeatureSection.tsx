"use client";

import Image from "next/image";
import Link from "next/link";

type FeatureSectionProps = {
  setSectionRef: (el: HTMLDivElement | null, index: number) => void;
  index: number;
  title: string;
  p1: string;
  p2: string;
  imgSrc: string;
  imgAlt: string;
  showTeamLink?: boolean;
};

const FeatureSection = ({
  setSectionRef,
  index,
  title,
  p1,
  p2,
  imgSrc,
  imgAlt,
  showTeamLink,
}: FeatureSectionProps) => {
  return (
    <div
      ref={(el) => setSectionRef(el, index)}
      className="grid gap-8 md:grid-cols-2 md:items-center"
    >
      <div className="feature-text space-y-3 md:col-span-1">
        <h2 className="text-xl sm:text-2xl font-bold text-sky-900">{title}</h2>
        <p className="text-sm sm:text-base text-slate-700">{p1}</p>
        <p className="text-xs sm:text-sm text-slate-700">{p2}</p>

        {showTeamLink && (
          <Link
            href="/team"
            className="inline-flex items-center justify-center mt-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 transition-colors shadow-sm"
          >
            Meet the core team
          </Link>
        )}
      </div>

      <div className="feature-image md:col-span-1">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={800}
          height={500}
          className="h-52 sm:h-64 md:h-72 w-full rounded-3xl object-cover shadow-[0_18px_60px_rgba(15,23,42,0.25)]"
        />
      </div>
    </div>
  );
};

export default FeatureSection;
