"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../lib/data/projects";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const statusStyles: Record<string, string> = {
  completed: "bg-green-100 text-green-700",
  ongoing: "bg-amber-100 text-amber-700",
  upcoming: "bg-sky-100 text-sky-700",
};

export default function Projects() {
  return (
    <section className="bg-gradient-to-br from-white dark:from-slate-950 via-sky-50 dark:via-slate-900 to-purple-100 dark:to-black py-20">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground dark:text-white">
            Projects by Techtronica
          </h2>
          <p className="text-sm sm:text-base text-muted">
            A glimpse of innovation, engineering, and research driven by our
            members.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative h-44 w-full bg-slate-100">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                      statusStyles[project.status]
                    }`}
                  >
                    {project.status.toUpperCase()}
                  </span>

                  <span className="text-xs text-slate-500">{project.year}</span>
                </div>

                <h3 className="text-base font-semibold text-foreground dark:text-white">
                  {project.title}
                </h3>

                <Link
                  href={`/projects/${project.id}`}
                  className="mt-3 inline-block text-xs font-semibold text-sky-600 hover:underline"
                >
                  View Details →
                </Link>

                {/* Domains */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.domain.map((d) => (
                    <span
                      key={d}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-700"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-3">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      className="text-xs font-medium text-sky-600 hover:underline"
                    >
                      View Code
                    </a>
                  )}

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      className="text-xs font-medium text-purple-600 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}

                  {!project.repo && !project.liveDemo && (
                    <Link
                      href="/projects"
                      className="text-xs font-medium text-slate-500"
                    >
                      Details soon
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
