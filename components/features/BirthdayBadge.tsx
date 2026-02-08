// components/BirthdayBadge.tsx
"use client";

import { motion } from "framer-motion";
import { Cake } from "lucide-react";

export default function BirthdayBadge() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="
        inline-flex items-center gap-2
        px-3 py-1
        text-sm font-medium
        bg-pink-100 text-pink-700
        rounded-full
      "
    >
      <Cake size={16} />
      Birthday Today
    </motion.div>
  );
}
