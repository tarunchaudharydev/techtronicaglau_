"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { notes } from "@/lib/data/notes";
import { FiSearch, FiFileText } from "react-icons/fi";
import Lottie from "lottie-react";
import bookLoading from "@/public/bookloading.json";

export default function AcademicsPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredNotes = notes.filter((note) => {
    const text =
      `${note.title} ${note.subject} ${note.category} ${note.year}`.toLowerCase();
    return text.includes(query.toLowerCase());
  });

  // 🔄 Loading Screen
  if (loading) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-900">
        <div className="w-64">
          <Lottie animationData={bookLoading} loop autoplay />
        </div>
        <p className="mt-4 text-sm font-medium text-muted">
          Loading academic resources………
        </p>
      </main>
    );
  }

  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-foreground dark:text-white mb-2">
          Academics & Resources
        </h1>
        <p className="text-muted">
          Search and access notes, previous year questions, and learning
          resources.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8 max-w-md">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search by subject, year, or title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 py-2.5 pl-10 pr-4 text-sm text-foreground dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>

      {/* Notes List */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <Link
              key={note.id}
              href={`${note.pdfUrl}#zoom=page-width`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border bg-white dark:bg-slate-900 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start gap-3">
                <FiFileText className="mt-1 text-sky-600" />

                <div>
                  <h3 className="font-semibold text-foreground dark:text-white group-hover:text-sky-600">
                    {note.title}
                  </h3>

                  <p className="mt-1 text-xs text-muted">
                    {note.subject} • {note.year}
                  </p>

                  <span className="mt-2 inline-block rounded-full bg-sky-100 px-3 py-1 text-[11px] font-medium text-sky-700">
                    {note.category}
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-slate-500">No matching resources found.</p>
        )}
      </div>
    </main>
  );
}
