"use client";

import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  fallbackHref?: string;
  label?: string;
}

export default function BackButton({
  fallbackHref = "/events",
  label = "Back",
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <button
      onClick={handleBack}
      aria-label="Go back"
      className="
        inline-flex items-center gap-2
        rounded-full border border-emerald-200
        bg-white dark:bg-slate-900 px-4 py-2
        text-sm font-medium text-emerald-800
        shadow-sm
        transition-all duration-200
        hover:bg-emerald-50 hover:-translate-y-0.5
        active:translate-y-0
        focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400
      "
    >
      <FiArrowLeft className="text-base" />
      {label}
    </button>
  );
}
