"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutAnimatedSection() {
  return (
    <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
     
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Who We Are
        </h2>

        <p className="text-lg mb-4 text-gray-700">
          Techtronica Society is a community of enthusiastic students passionate
          about technology, innovation, and problem-solving.
        </p>

        <p className="text-lg text-gray-700">
          We bridge the gap between classroom learning and real-world skills
          through workshops, projects, hackathons, and industry exposure.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg"
      >
        <Image
          src="/ourTeam/group.JPG"
          alt="Techtronica team"
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
