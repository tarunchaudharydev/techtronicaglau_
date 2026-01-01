import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events } from "@/lib/data/upcomingEvents";

export default async function GizmoEventDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const event = events.find((e) => e.id === id && e.club === "Gizmo");

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen px-4 py-24 bg-gradient-to-br from-white via-sky-50 to-purple-100">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back button */}
        <Link
          href="/clubs/gizmo/events"
          className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 hover:text-purple-900"
        >
          ← Back to Gizmo Events
        </Link>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-900">
          {event.title}
        </h1>

        <p className="text-slate-600">
          {event.date} • {event.time} • {event.location}
        </p>

        <Image
          src={event.coverImage}
          alt={event.title}
          width={900}
          height={500}
          className="rounded-3xl object-cover"
        />

        <p className="text-slate-700 leading-relaxed">{event.description}</p>

        {event.outcome && (
          <p className="text-green-700 font-medium">Outcome: {event.outcome}</p>
        )}

        {event.winners && (
          <div>
            <h2 className="text-xl font-semibold text-purple-800">Winners</h2>
            <ul className="list-disc list-inside text-slate-700">
              {event.winners.map((w) => (
                <li key={w.name}>
                  {w.position} – {w.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {event.gallery && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {event.gallery.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="Event gallery"
                width={300}
                height={200}
                className="rounded-xl object-cover"
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
