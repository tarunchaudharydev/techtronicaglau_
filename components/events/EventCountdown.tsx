"use client";

import { useCountdown } from "@/lib/hooks/useCountdown";

export default function EventCountdown({ deadline }: { deadline?: string }) {
  const t = useCountdown(deadline);

  if (!deadline) return null;

  if (!t)
    return (
      <p className="text-xs font-medium text-red-600">
        ❌ Oops! Registration closed
      </p>
    );

  return (
    <p className="text-xs font-semibold text-purple-700">
      ⏳ {t.days}d {t.hours}h {t.minutes}m {t.seconds}s{" "}
      <span className="text-[10px]">(IST)</span>
    </p>
  );
}
