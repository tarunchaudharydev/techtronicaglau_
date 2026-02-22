"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, Search } from "lucide-react";

type Status = "active" | "ongoing" | "archived";

type FolderItem = {
  title: string;
  subtitle: string;
  color: string;
  status: Status;
  href: string;
  files: number;
  updated: string;
};

const folders: FolderItem[] = [
  {
    title: "Academics",
    subtitle: "Subjects & fundamentals",
    color: "from-yellow-400 to-yellow-300",
    status: "active",
    href: "/academics",
    files: 12,
    updated: "2 days ago",
  },
  {
    title: "Research",
    subtitle: "Papers & experiments",
    color: "from-blue-400 to-blue-300",
    status: "ongoing",
    href: "/research",
    files: 6,
    updated: "1 week ago",
  },
  {
    title: "Patents",
    subtitle: "Filed innovations",
    color: "from-orange-400 to-orange-300",
    status: "ongoing",
    href: "/patents",
    files: 3,
    updated: "3 days ago",
  },
  {
    title: "Projects",
    subtitle: "Builds & systems",
    color: "from-green-400 to-green-300",
    status: "active",
    href: "/projects",
    files: 9,
    updated: "Today",
  },
];

export default function LibrarySection() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const filtered = useMemo(() => {
    return folders.filter((f) =>
      f.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const openFolder = (href: string) => {
    router.push(href);
  };

  /* ---------------- Keyboard Navigation ---------------- */

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (paletteOpen) return;

      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev < filtered.length - 1 ? prev + 1 : prev,
        );
      }

      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }

      if (e.key === "Enter" && filtered[selectedIndex]) {
        openFolder(filtered[selectedIndex].href);
      }

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen(true);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [filtered, selectedIndex, paletteOpen]);

  return (
    <section className="relative  bg-gradient-to-br from-white via-slate-50 to-purple-50 transition-colors duration-300">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-extrabold">Library OS</h2>
        </div>

        {/* Search */}
        <div className="relative max-w-md mb-12">
          <Search className="absolute left-3 top-3 w-4 h-4 text-neutral-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search folders... (⌘K)"
            className="w-full pl-10 pr-4 py-2 rounded-xl border bg-white"
          />
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((folder, index) => (
            <motion.div
              key={folder.title}
              onClick={() => openFolder(folder.href)}
              whileHover={{ y: -6 }}
              className={`relative p-6 rounded-2xl cursor-pointer border shadow transition
                ${selectedIndex === index ? "ring-2 ring-purple-500" : ""}
                bg-white`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${folder.color} flex items-center justify-center mb-4`}
              >
                <Folder className="w-6 h-6 text-neutral-800" />
              </div>

              <h3 className="text-xl font-semibold">{folder.title}</h3>
              <p className="text-sm text-neutral-500 mt-1">{folder.subtitle}</p>

              <div className="mt-4 text-xs text-neutral-400">
                {folder.files} files • Updated {folder.updated}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------------- Command Palette ---------------- */}
      <AnimatePresence>
        {paletteOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setPaletteOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white p-6 rounded-2xl w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-semibold mb-4">Quick Open</h3>

              <div className="space-y-2">
                {folders.map((f) => (
                  <div
                    key={f.title}
                    onClick={() => openFolder(f.href)}
                    className="p-2 rounded-lg hover:bg-slate-100 cursor-pointer text-sm"
                  >
                    {f.title}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
