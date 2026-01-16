"use client";

import { Key, ReactNode } from "react";
import Image from "next/image";

type AboutSociety = {
  title: string;
  description: ReactNode[];
};

type ClubsOverviewProps = {
  aboutSociety: AboutSociety;
  setSectionRef: (el: HTMLDivElement | null, index: number) => void;
};

const ClubsOverview = ({ aboutSociety, setSectionRef }: ClubsOverviewProps) => {
  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4">
      <div
        ref={(el) => setSectionRef(el, 0)}
        className="flex flex-col md:flex-row gap-8 items-center"
      >
        <div className="w-full md:w-1/2 space-y-3 mb-4 md:mb-0">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-sky-900">
            {aboutSociety.title}
          </h2>

          {aboutSociety.description.map((para: ReactNode, index: Key) => (
            <p
              key={index}
              className="text-sm sm:text-base text-slate-700 leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src="/homeImages/team_image.jpg"
            alt="Students collaborating in different clubs"
            width={800}
            height={500}
            className="w-full h-52 sm:h-64 md:h-72 rounded-3xl object-cover shadow-[0_18px_60px_rgba(15,23,42,0.25)]"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ClubsOverview;
