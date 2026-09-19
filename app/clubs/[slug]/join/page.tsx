import { notFound } from "next/navigation";
import { clubs } from "@/lib/config/clubs";

export default async function JoinClub({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const club = clubs.find((c) => c.slug === slug);
  if (!club) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-xl rounded-3xl bg-white dark:bg-slate-900 shadow-lg border border-slate-100 p-6 sm:p-8">
        
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-white mb-2">
          Join <span className="text-purple-700">{club.name}</span>
        </h1>

        <p className="text-sm sm:text-base text-muted mb-6">
          Fill the interest form to become a part of{" "}
          <span className="font-medium">{club.name}</span>.
        </p>

        
        <div className="rounded-2xl bg-slate-50 border border-slate-200 dark:border-slate-800 p-4 mb-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            By joining <strong>{club.name}</strong>, you’ll get access to
            workshops, hands-on sessions, events, and a community of like-minded
            students passionate about learning and growth.
          </p>
        </div>

    
        <a
          // href={club.joinFormUrl ?? "#"}
          target="_blank"
          rel="noreferrer"
          className="block w-full text-center rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors py-3 text-sm sm:text-base font-semibold text-foreground dark:text-white shadow-sm"
        >
          
          Oops! You missed it.
        </a>

       
        <div className="mt-6 text-center">
          <a
            href={`/clubs/${club.slug}`}
            className="text-sm text-muted hover:text-purple-700 hover:underline"
          >
            ← Back to {club.name}
          </a>
        </div>
      </div>
    </main>
  );
}
