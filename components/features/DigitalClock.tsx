"use client";

import { useEffect, useState } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 rounded-2xl border border-sky-200 bg-transparent px-2 py-1 shadow-md shadow-sky-200/60 backdrop-blur-sm">
      {/* <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-600">
        IST • Asia/Kolkata
      </p> */}
      <p className="text-xs text-foreground dark:text-white leading-tight">
        {time || "--:--:--"}
      </p>
    </div>
  );
}
