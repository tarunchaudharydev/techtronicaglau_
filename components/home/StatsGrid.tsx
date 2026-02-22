// "use client";

// StatsGrid for home page
// this do not need to be changed.

import { RefObject } from "react";

type StatsGridProps = {
  statsRef: RefObject<HTMLDivElement | null>;
};

const StatsGrid = ({ statsRef }: StatsGridProps) => {
  return (
    <div
      ref={statsRef}
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm mb-4 sm:mb-8"
    >
      <div className="rounded-2xl border border-purple-100 bg-white dark:bg-slate-900/80 shadow-sm p-4">
        <p className="font-semibold text-sky-900">5 Clubs</p>
        <p className="text-[11px] sm:text-xs text-slate-700">
          Technovation, Code-E-Phobia, Gizmo, Unnati, Mindblogger.
        </p>
      </div>
      <div className="rounded-2xl border border-purple-100 bg-white dark:bg-slate-900/80 shadow-sm p-4">
        <p className="font-semibold text-sky-900">20+ Events</p>
        <p className="text-[11px] sm:text-xs text-slate-700">
          Fests, hackathons, workshops, and competitions.
        </p>
      </div>
      <div className="rounded-2xl border border-purple-100 bg-white dark:bg-slate-900/80 shadow-sm p-4">
        <p className="font-semibold text-sky-900">100+ Members</p>
        <p className="text-[11px] sm:text-xs text-slate-700">
          Active students from all departments.
        </p>
      </div>
      <div className="rounded-2xl border border-purple-100 bg-white dark:bg-slate-900/80 shadow-sm p-4">
        <p className="font-semibold text-sky-900">Mentors</p>
        <p className="text-[11px] sm:text-xs text-slate-700">
          Guided by experienced faculty coordinators.
        </p>
      </div>
    </div>
  );
};

export default StatsGrid;
