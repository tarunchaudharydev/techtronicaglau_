// "use client";
// do not need to change this.

const HowToGetInvolved = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-bold text-sky-900">
        How to get involved
      </h2>
      <div className="relative border-l border-sky-200 pl-5 space-y-6">
        <div className="relative">
          <span className="absolute -left-1 top-1 h-3 w-3 rounded-full bg-sky-500" />
          <h3 className="text-sm font-semibold text-sky-900">
            1. Explore clubs
          </h3>
          <p className="text-xs sm:text-sm text-slate-700">
            Visit the Clubs page to read about each club&apos;s vision,
            activities, and team.
          </p>
        </div>

        <div className="relative">
          <span className="absolute -left-1 top-1 h-3 w-3 rounded-full bg-purple-500" />
          <h3 className="text-sm font-semibold text-sky-900">
            2. Fill interest form
          </h3>
          <p className="text-xs sm:text-sm text-slate-700">
            Submit a short form or contact the club representatives shown on the
            Team page.
          </p>
        </div>

        <div className="relative">
          <span className="absolute -left-1 top-1 h-3 w-3 rounded-full bg-yellow-400" />
          <h3 className="text-sm font-semibold text-sky-900">
            3. Join events & meets
          </h3>
          <p className="text-xs sm:text-sm text-slate-700">
            Attend orientations, weekly meets, and events to become an active
            member.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToGetInvolved;
