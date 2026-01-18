"use client";

import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function MissionVisionValue() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            title: "Our Mission",
            text: "To empower students with technical expertise and leadership skills.",
          },
          {
            title: "Our Vision",
            text: "To build a strong, innovative, and future-ready tech community.",
          },
          {
            title: "Our Values",
            text: "Innovation, teamwork, integrity, and continuous learning.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="
              p-8 bg-gray-50 rounded-xl rounded-xl shadow-md
              hover:shadow-xl transition-shadow duration-300
            "
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
