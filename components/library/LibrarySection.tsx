"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Folder } from "lucide-react";
import FolderModal from "./FolderModal";

type Status = "active" | "ongoing" | "archived";

type FolderItem = {
  title: string;
  subtitle: string;
  color: string;
  status: Status;
  href: string;
  files: string[];
};

const folders: FolderItem[] = [
  {
    title: "Academics",
    subtitle: "Subjects & fundamentals",
    color: "bg-yellow-300",
    status: "active",
    href: "/academics",
    files: ["VLSI Notes.pdf", "Signals.md", "DSA Cheatsheet.pdf"],
  },
  {
    title: "Research",
    subtitle: "Papers & experiments",
    color: "bg-blue-300",
    status: "ongoing",
    href: "/research",
    files: ["Paper Draft v2.pdf", "Simulation Results.xlsx"],
  },
  {
    title: "Patents",
    subtitle: "Filed innovations",
    color: "bg-orange-300",
    status: "ongoing",
    href: "/patents",
    files: ["Patent Abstract.docx", "Block Diagram.png"],
  },
  {
    title: "Projects",
    subtitle: "Builds & systems",
    color: "bg-green-300",
    status: "active",
    href: "/projects",
    files: ["ESP32 Line Follower", "Portfolio Website"],
  },
];

const statusColor = {
  active: "bg-green-500",
  ongoing: "bg-yellow-500",
  archived: "bg-neutral-400",
};

export default function LibrarySection() {
  const [selected, setSelected] = useState<FolderItem | null>(null);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl text-center font-extrabold mb-20">
          Library Section
        </h2>

        {/* MOBILE: vertical | DESKTOP: stacked */}
        <div className="relative">
          <div
            className="
              grid grid-cols-1 gap-6
              sm:block sm:h-[320px]
            "
          >
            {folders.map((folder, i) => (
              <motion.div
                key={folder.title}
                whileHover={{
                  y: -18,
                  scale: 1.03,
                  zIndex: 20,
                }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className={`
                  cursor-pointer
                  sm:absolute
                `}
                style={{
                  left: i * 120,
                  top: 0,
                }}
                onClick={() => setSelected(folder)}
              >
                <div
                  className={`relative
                  w-full sm:w-[260px]
                  h-[160px] sm:h-[180px]
                  rounded-xl shadow-xl
                  ${folder.color}`}
                >
                  {/* Folder tab */}
                  <div
                    className={`absolute -top-4 left-5 w-24 h-5 
                    rounded-t-md ${folder.color} shadow`}
                  />

                  {/* Status */}
                  <span
                    className={`absolute top-3 right-3 w-3 h-3 rounded-full 
                    ${statusColor[folder.status]}`}
                  />

                  <div className="p-5 flex gap-4">
                    <Folder className="w-8 h-8 text-neutral-800" />
                    <div>
                      <h3 className="font-semibold text-lg">{folder.title}</h3>
                      <p className="text-sm text-neutral-700 mt-1">
                        {folder.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <FolderModal folder={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
