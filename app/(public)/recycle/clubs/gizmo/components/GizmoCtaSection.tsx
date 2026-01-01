"use client";

export function GizmoCtaSection() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-orange-400 via-purple-500 to-sky-500 border border-purple-300/60 px-5 sm:px-8 py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-md">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-base sm:text-lg font-semibold text-white">
          Ready to start your Robotics journey?
        </h2>
        <p className="text-xs sm:text-sm text-sky-50 max-w-xl mx-auto md:mx-0">
          Fill the interest form, join our next meetup, and move from
          &quot;I&apos;m scared of Robotics&quot; to &quot;I build cool things
          with Robotics&quot;. Your first step is simply showing up.
        </p>
      </div>
      <div className="flex justify-center md:justify-end">
        <button className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-purple-900 bg-white hover:bg-slate-100 active:bg-slate-200 transition-colors shadow-sm hover:shadow-md">
          Join Gizmo
        </button>
      </div>
    </section>
  );
}
