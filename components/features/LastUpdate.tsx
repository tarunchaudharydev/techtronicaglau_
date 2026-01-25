"use client";

export default function LastUpdated() {
  const buildTime = process.env.NEXT_PUBLIC_BUILD_TIME as string;

  const formattedDateTime: string = new Date(buildTime).toLocaleString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    },
  );

  return (
    <p className="text-xs text-slate-500">
      Last updated on{" "}
      <span className="font-medium text-slate-700">
        {formattedDateTime} IST
      </span>
    </p>
  );
}
