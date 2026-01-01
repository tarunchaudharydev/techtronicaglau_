import { clubs } from "@/lib/config/clubs";
import ClubPurpose from "@/components/club/ClubPurpose";
import ClubTracks from "@/components/club/ClubTracks";
import ClubWhatYouDo from "@/components/club/ClubWhatYouDo";
import ClubSessions from "@/components/club/ClubSessions";
import ClubVideo from "@/components/club/ClubVideo";
import ClubTeam from "@/components/club/ClubTeam";
import ClubContact from "@/components/club/ClubContact";
import ClubCTA from "@/components/club/ClubCTA";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ClubPage({ params }: Props) {
  const { slug } = await params;

  const club = clubs.find((c) => c.slug === slug);

  if (!club) {
    notFound();
  }

  return (
    <>
      {/* <ClubHero club={club} /> */}
      <ClubSessions club={club} />
      <ClubPurpose club={club} />
      <ClubTracks club={club} />
      <ClubWhatYouDo club={club} />

      <ClubVideo club={club} />
      <ClubTeam club={club} />
      <ClubContact club={club} />
      <ClubCTA club={club} />
    </>
  );
}
