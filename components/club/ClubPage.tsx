import { ClubHero } from "./ClubHero";
import { ClubPurpose } from "./ClubPurpose";
import { ClubTracks } from "./ClubTracks";
import { ClubWhatWeDo } from "./ClubWhatWeDo";
import { ClubSessions } from "./ClubSessions";
import { ClubCTA } from "./ClubCTA";
import type { ClubConfig } from "@/lib/types/club";

export function ClubPage({ club }: { club: ClubConfig }) {
  return (
    <main className="min-h-screen pb-18 bg-gradient-to-br from-white via-sky-50 to-purple-100">
      <div className="w-full max-w-6xl mx-auto px-4 mt-20 pb-20 flex flex-col space-y-16">
        <ClubHero club={club} />
        <ClubPurpose club={club} />
        <ClubTracks club={club} />
        <ClubWhatWeDo club={club} />
        <ClubSessions club={club} />
        <ClubCTA club={club} />
      </div>
    </main>
  );
}
