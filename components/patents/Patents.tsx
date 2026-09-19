// this is under development this is sample code 

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HOURS_LEFT = 48;

export default function Patent() {
  const [timeLeft, setTimeLeft] = useState<number>(HOURS_LEFT * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Patents in Progress</h1>

        <p className="text-neutral-600 mb-10">
          We’re currently finalizing documentation and validations. This section
          will be available shortly.
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-6 mb-8">
          <TimeBlock label="Hours" value={hours} />
          <TimeBlock label="Minutes" value={minutes} />
          <TimeBlock label="Seconds" value={seconds} />
        </div>

        <p className="text-sm text-neutral-500">
          Expected to go live within the next 48 hours.
        </p>
      </motion.div>
    </section>
  );
}

function TimeBlock({ label, value }: { label: string; value: number }) {
  return (
    <div className="w-20">
      <div className="text-3xl font-semibold">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs uppercase tracking-wide text-neutral-500 mt-1">
        {label}
      </div>
    </div>
  );
}
