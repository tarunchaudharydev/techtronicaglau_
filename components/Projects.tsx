"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Link from "next/link";
import workInProgress from "@/public/underconstruction.json";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(targetDate: Date): TimeLeft | null {
  const now = Date.now();
  const diff = targetDate.getTime() - now;

  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(num: number) {
  return String(num).padStart(2, "0");
}

export default function Projects() {
  const launchDate = useMemo(() => {
    const now = new Date();
    let year = now.getFullYear();
    const target = new Date(year, 2, 10, 0, 0, 0);

    if (target.getTime() <= now.getTime()) {
      year += 1;
    }

    return new Date(year, 2, 10, 0, 0, 0);
  }, []);

  const startDate = useMemo(() => {
    const past = new Date(launchDate);
    past.setMonth(past.getMonth() - 1);
    return past;
  }, [launchDate]);

  const totalDuration = launchDate.getTime() - startDate.getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() =>
    calculateTimeLeft(launchDate),
  );

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const updated = calculateTimeLeft(launchDate);

      setTimeLeft(updated);

      const elapsed = now - startDate.getTime();
      const percent = Math.min(
        Math.max((elapsed / totalDuration) * 100, 0),
        100,
      );

      setProgress(percent);

      if (!updated) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate, startDate, totalDuration]);

  const formattedDate = launchDate.toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const timeBlocks = timeLeft
    ? [
        { label: "Days", value: pad(timeLeft.days) },
        { label: "Hours", value: pad(timeLeft.hours) },
        { label: "Minutes", value: pad(timeLeft.minutes) },
        { label: "Seconds", value: pad(timeLeft.seconds) },
      ]
    : [];

  return (
    <section className="min-h-[75vh] flex items-center justify-center px-4 bg-gradient-to-br from-white dark:from-slate-950 via-sky-50 dark:via-slate-900 to-purple-100 dark:to-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full rounded-3xl bg-white dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-2xl px-6 py-10 text-center"
      >
        <div className="mx-auto w-64 sm:w-72">
          <Lottie animationData={workInProgress} loop />
        </div>

        <h1 className="mt-6 text-xl sm:text-2xl font-extrabold dark:text-white">
          We’re building something cool.
        </h1>

        <p className="mt-3 text-sm sm:text-base text-slate-600">
          Techtronica is in progress. Launching on{" "}
          <span className="font-semibold text-purple-600">{formattedDate}</span>
        </p>

        {timeLeft && (
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {timeBlocks.map((item) => (
              <div
                key={item.label}
                className="min-w-[80px] rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 p-[1px]"
              >
                <div className="rounded-2xl bg-white dark:bg-slate-900 px-4 py-3 text-center shadow-lg">
                  <motion.p
                    key={item.value}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl font-extrabold dark:text-white"
                  >
                    {item.value}
                  </motion.p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-500">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 space-y-3">
          <div className="relative h-4 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-inner">
            <motion.div
              className="absolute inset-0 bg-purple-500/20 blur-xl"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <motion.div
              className="relative h-full rounded-full overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              />

              <motion.div
                className="absolute inset-0 bg-white/20"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  clipPath: "polygon(0 0, 30% 0, 20% 100%, 0% 100%)",
                }}
              />
            </motion.div>
          </div>

          <motion.p
            key={progress}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-medium text-slate-600 dark:text-slate-300"
          >
            {Math.floor(progress)}% completed
          </motion.p>
        </div>

        {!timeLeft && (
          <motion.p
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mt-6 text-base font-semibold text-green-600"
          >
             We’re live!
          </motion.p>
        )}

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
