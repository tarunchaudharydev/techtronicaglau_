"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { X, FileText } from "lucide-react";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

export default function FolderModal({
  folder,
  onClose,
}: {
  folder: {
    title: string;
    subtitle: string;
    href: string;
    files: string[];
  };
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ scale: 0.92, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl"
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold">{folder.title}</h3>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-neutral-600 mb-6">{folder.subtitle}</p>

        {/* Animated file list */}
        <motion.ul
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="space-y-3 mb-6"
        >
          {folder.files.map((file) => (
            <motion.li
              key={file}
              variants={itemVariants}
              className="flex items-center gap-3 p-3 rounded-lg 
              bg-neutral-100 text-sm"
            >
              <FileText className="w-4 h-4 text-neutral-600" />
              {file}
            </motion.li>
          ))}
        </motion.ul>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border">
            Close
          </button>
          <Link
            href={folder.href}
            className="px-4 py-2 rounded-lg bg-neutral-900 text-white"
          >
            Open Folder →
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
