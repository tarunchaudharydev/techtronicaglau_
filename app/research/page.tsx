"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import researchLoading from "@/public/researchloading.json";

import {
  FiBookOpen,
  FiFileText,
  FiAward,
  FiUsers,
  FiSend,
} from "react-icons/fi";

type ResearchFormData = {
  name: string;
  email: string;
  type: "research" | "patent";
  title: string;
  domain: string;
  description: string;
};

const showcasedWorks = [
  {
    type: "Patent",
    title: "Smart Energy Monitoring System using IoT",
    domain: "IoT, Embedded Systems",
    year: "2024",
  },
  {
    type: "Research Paper",
    title: "Optimized Routing in Wireless Sensor Networks",
    domain: "Networking, Algorithms",
    year: "2023",
  },
  {
    type: "Patent",
    title: "AI-Based Traffic Density Prediction Model",
    domain: "AI / ML",
    year: "2022",
  },
];

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

export default function ResearchAndPatentSection() {
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState<ResearchFormData>({
    name: "",
    email: "",
    type: "research",
    title: "",
    domain: "",
    description: "",
  });

  // ⏳ 2-second loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", form);
  };

  /* 🔄 LOADING VIEW */
  if (loading) {
    return (
      <section className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-white dark:from-slate-950 via-sky-50 dark:via-slate-900 to-purple-100 dark:to-black">
        <div className="w-64">
          <Lottie animationData={researchLoading} loop autoplay />
        </div>
        <p className="mt-4 text-sm font-medium text-muted">
          Preparing Research & Patent Cell…
        </p>
      </section>
    );
  }

  /* ✅ MAIN CONTENT (UNCHANGED) */
  return (
    <section className="bg-gradient-to-br from-white dark:from-slate-950 via-sky-50 dark:via-slate-900 to-purple-100 dark:to-black py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 space-y-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground dark:text-white">
            Research & Patent Cell
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            Showcasing innovation by our members and supporting new research,
            publications, and patent ideas.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr,1.4fr] items-start">
          {/* LEFT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: <FiFileText />, label: "Papers", value: "15+" },
                { icon: <FiAward />, label: "Patents", value: "6+" },
                { icon: <FiUsers />, label: "Mentors", value: "10+" },
                { icon: <FiBookOpen />, label: "Domains", value: "8+" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 px-4 py-4 text-center shadow-sm"
                >
                  <div className="text-xl text-purple-600 mb-1">
                    {stat.icon}
                  </div>
                  <p className="text-lg font-bold text-foreground dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-[11px] uppercase tracking-wide text-slate-500">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-foreground dark:text-white">
                Recent Patents & Research
              </h3>

              {showcasedWorks.map((work, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex gap-4 rounded-2xl bg-white dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 px-5 py-4 shadow-sm"
                >
                  <div className="mt-1 text-purple-600">
                    {work.type === "Patent" ? <FiAward /> : <FiFileText />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground dark:text-white">
                      {work.title}
                    </p>
                    <p className="text-xs text-muted">
                      {work.domain} • {work.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl bg-white dark:bg-slate-900/95 backdrop-blur border border-slate-200 dark:border-slate-800 shadow-lg px-6 py-7 lg:px-8"
          >
            <h3 className="text-base sm:text-lg font-semibold text-foreground dark:text-white mb-5">
              Submit your research or patent idea
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {" "}
              <div className="grid gap-4 sm:grid-cols-2">
                {" "}
                <input
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className="input"
                  required
                />{" "}
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleChange}
                  className="input"
                  required
                />{" "}
              </div>{" "}
              <div className="grid gap-4 sm:grid-cols-2">
                {" "}
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="input"
                >
                  {" "}
                  <option value="research">Research / Paper</option>{" "}
                  <option value="patent">Patent / IP</option>{" "}
                </select>{" "}
                <input
                  name="domain"
                  placeholder="Domain (AI, IoT, VLSI, etc.)"
                  value={form.domain}
                  onChange={handleChange}
                  className="input"
                />{" "}
              </div>{" "}
              <input
                name="title"
                placeholder="Project / idea title"
                value={form.title}
                onChange={handleChange}
                className="input"
                required
              />{" "}
              <textarea
                name="description"
                rows={4}
                placeholder="Brief description of your idea"
                value={form.description}
                onChange={handleChange}
                className="input"
                required
              />{" "}
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-purple-600 hover:bg-purple-700 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition"
              >
                {" "}
                <FiSend /> Submit idea{" "}
              </button>{" "}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
