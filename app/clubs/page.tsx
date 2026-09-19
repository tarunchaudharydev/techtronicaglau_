"use client";

import Link from "next/link";
import Image from "next/image";

const clubs = [
  {
    slug: "technovation",
    name: "Technovation",
    tag: "Projects & Innovation",
    description:
      "Build real-world tech projects, explore hardware–software integration, and present innovative prototypes.",
    image: "/clubs/technovation/logo.jpeg",
  },

  {
    slug: "gizmo",
    name: "Gizmo",
    tag: "Robotics & Electronics",
    description:
      "Dive into circuits, bots, and embedded systems with hands-on hardware experiments and competitions.",
    image: "/clubs/gizmo/logo.jpeg",
  },
  {
    slug: "code-e-phobia",
    name: "Code-E-Phobia",
    tag: "Coding & Programming",
    description:
      "Overcome the fear of coding through DSA practice, contests, hackathons, and guided coding sessions.",
    image: "/clubs/code-e-phobia/logo.jpeg",
  },
  {
    slug: "unnati",
    name: "Unnati",
    tag: "Cultural & Events",
    description:
      "Manage cultural events, fests, and celebrations that keep the campus energetic and connected.",
    image: "/clubs/unnati/logo.jpeg",
  },
  {
    slug: "mindboggler",
    name: "Mindboggler",
    tag: "Creativity & Content",
    description:
      "A space for writers, designers, and storytellers to create blogs, posters, reels, and digital content.",
    image: "/clubs/mindbogglers/logo.jpeg",
  },
];

export default function ClubsPage() {
  return (
    <main className="min-h-screen flex justify-center bg-gradient-to-br from-white dark:from-slate-950 via-sky-50 dark:via-slate-900 to-purple-100 dark:to-black">
      <section className="w-full max-w-5xl pb-16">
        {/* Top text section */}
        <header className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-sky-600 mb-2">
            Techtronica • Clubs
          </p>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground dark:text-white mb-2">
            Explore our clubs
          </h1>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto">
            Join the communities that match your interests—from coding and
            robotics to creativity, culture, and hands-on innovation. Learn,
            collaborate, and grow with like‑minded students.
          </p>
        </header>

        <div className="grid gap-6 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {clubs.map((club) => (
            <article
              key={club.slug}
              className="
                group
                rounded-3xl bg-sky-50
                border border-slate-200 dark:border-slate-800/80
                shadow-sm
                overflow-hidden
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-lg
                hover:border-sky-200
              "
            >
            
              <div style={{ height: "9rem" }} className="relative w-full">
                <Image
                  src={club.image}
                  alt={club.name}
                  fill
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         33vw"
                  className="object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-4 flex flex-col gap-1.5">
                <p className="text-[11px] uppercase tracking-wide text-sky-600">
                  {club.tag}
                </p>

                <h2 className="font-semibold text-foreground dark:text-white">
                  {club.name}
                </h2>

                <p className="text-sm text-slate-700 mt-1 flex-1">
                  {club.description}
                </p>

                <Link
                  href={`/clubs/${club.slug}`}
                  className="mt-2 text-sm font-semibold text-sky-700 group-hover:text-sky-900 transition-colors"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
