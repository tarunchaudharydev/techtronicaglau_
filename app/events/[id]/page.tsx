import { notFound } from "next/navigation";
import { events } from "@/lib/data/upcomingEvents";
import ClientEventDetails from "./ClientEventDetails";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EventDetailPage({ params }: PageProps) {
  const { id } = await params; // 👈 REQUIRED

  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  const isUpcoming = Boolean(event.registrationLink);

  return <ClientEventDetails event={event} isUpcoming={isUpcoming} />;
}
