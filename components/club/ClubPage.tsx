import ClubPurpose from "./ClubPurpose";
import ClubTracks from "./ClubTracks";
import ClubWhatYouDo from "./ClubWhatYouDo";
import ClubSessions from "./ClubSessions";
import ClubCTA from "./ClubCTA";
import type { Club } from "@/lib/config/clubs";

export function ClubPage({ club }: { club: Club }) {
  return (
    <main className="min-h-screen pb-18 bg-gradient-to-br from-white dark:from-slate-950 via-sky-50 dark:via-slate-900 to-purple-100 dark:to-black">
      <div className="w-full max-w-6xl mx-auto px-4 mt-20 pb-20 flex flex-col space-y-16">
        {/* <ClubHero club={club} /> */}
        <ClubPurpose club={club} />
        <ClubTracks club={club} />
        <ClubWhatYouDo club={club} />
        <ClubSessions club={club} />
        <ClubCTA club={club} />
      </div>
    </main>
  );
}
