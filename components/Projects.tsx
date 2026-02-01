"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Link from "next/link";
import workInProgress from "@/public/underconstruction.json";

function getTimeLeft(targetDate: Date) {
  const now = new Date().getTime();
  const diff = targetDate.getTime() - now;

  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function Projects() {
  // 📅 Expected Launch: 5 Feb (current year)
  const launchDate = new Date(
    new Date().getFullYear(),
    1, // February (0-based)
    5,
    0,
    0,
    0,
  );

  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(launchDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <section className="min-h-[75vh] flex items-center justify-center px-4 bg-gradient-to-br from-white via-sky-50 to-purple-100">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl w-full rounded-3xl bg-white/95 backdrop-blur border border-slate-200 shadow-xl px-6 py-10 text-center"
      >
        {/* Animation */}
        <div className="mx-auto w-64 sm:w-72">
          <Lottie animationData={workInProgress} loop autoplay />
        </div>

        {/* Title */}
        <h1 className="mt-6 text-xl sm:text-2xl font-extrabold text-slate-900">
          We’re working on this page.
        </h1>

        {/* Description */}
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          This page is currently under development. The{" "}
          <span className="font-semibold text-purple-600">Techtronica</span>{" "}
          team is actively working on it.
        </p>

        {/* Launch Date */}
        <p className="mt-4 text-sm font-medium text-slate-700">
          Expected Launch:{" "}
          <span className="font-semibold text-slate-900">5 February</span>
        </p>

        <p className="mt-4 text-sm font-medium text-slate-700">
          Sorry for the delay, we are working on it.
        </p>

        {/* Countdown */}
        {timeLeft ? (
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {[
              {
                label: "Days",
                value: timeLeft.days,
                color: "from-sky-400 to-blue-500",
              },
              {
                label: "Hours",
                value: timeLeft.hours,
                color: "from-purple-400 to-fuchsia-500",
              },
              {
                label: "Minutes",
                value: timeLeft.minutes,
                color: "from-amber-400 to-orange-500",
              },
              {
                label: "Seconds",
                value: timeLeft.seconds,
                color: "from-emerald-400 to-green-500",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                className={`relative min-w-[80px] rounded-2xl bg-gradient-to-br ${item.color} p-[1px]`}
                animate={{
                  scale: item.label === "Seconds" ? [1, 1.05, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  repeat: item.label === "Seconds" ? Infinity : 0,
                  ease: "easeInOut",
                }}
              >
                <div className="rounded-2xl bg-white/90 px-4 py-3 text-center shadow-lg backdrop-blur">
                  <motion.p
                    key={item.value}
                    initial={{ y: 18, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-2xl font-extrabold text-slate-900"
                  >
                    {item.value}
                  </motion.p>

                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-6 text-base font-semibold text-green-600"
          >
            We’re live in an hour!
          </motion.p>
        )}

        {/* Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-purple-700"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
