"use client";

import { useEffect, useState } from "react";
import { FiClock, FiAlertTriangle } from "react-icons/fi";

type Props = {
  deadline: string; // YYYY-MM-DD
};

function getISTTimeLeft(deadline: string) {
  const deadlineIST = new Date(`${deadline}T23:59:59+05:30`).getTime();

  const nowUTC = Date.now();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const nowIST = nowUTC + istOffset;

  const diff = deadlineIST - nowIST;

  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function EventCountdown({ deadline }: Props) {
  const [timeLeft, setTimeLeft] =
    useState<ReturnType<typeof getISTTimeLeft>>(null);

  useEffect(() => {
    const update = () => setTimeLeft(getISTTimeLeft(deadline));
    update();

    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  /* ⛔ Expired */
  if (!timeLeft) {
    return (
      <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
        <FiAlertTriangle className="text-base" />
        Oops! Registration time’s up (IST)
      </div>
    );
  }

  const urgent = timeLeft.days === 0;

  return (
    <div
      className={`mt-4 inline-flex items-center gap-3 rounded-xl px-4 py-2 text-sm font-semibold ${
        urgent
          ? "bg-red-100 text-red-700 animate-pulse"
          : "bg-sky-100 text-sky-700"
      }`}
    >
      <FiClock className="text-base" />
      <span>
        Registration closes in{" "}
        <strong>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </strong>{" "}
        (IST)
      </span>
    </div>
  );
}
