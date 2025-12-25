"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

function NotFound() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const digitsRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cardRef.current || !digitsRef.current || !textRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    gsap.set(cardRef.current, { opacity: 0, y: 40, scale: 0.9 });
    gsap.set(digitsRef.current.children, {
      opacity: 0,
      y: -40,
      scale: 0.6,
      rotate: -15,
    });
    gsap.set(textRef.current, { opacity: 0, y: 20 });

    tl.to(cardRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
    })
      .to(
        digitsRef.current.children,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 0.9,
          ease: "elastic.out(1, 0.55)",
          stagger: 0.12,
        },
        "-=0.3"
      )
      .to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=0.4"
      )
      .to(digitsRef.current.children, {
        y: -6,
        rotate: (i) => (i === 1 ? 3 : -3),
        duration: 1.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.2, from: "center" },
      });

    // hover animation for digits
    const handleEnter = (e: Event) => {
      const target = e.currentTarget as HTMLSpanElement;
      gsap.to(target, {
        scale: 1.08,
        y: -10,
        boxShadow: "0 18px 40px rgba(37,99,235,0.45)",
        duration: 0.25,
        ease: "power2.out",
      });
    };

    const handleLeave = (e: Event) => {
      const target = e.currentTarget as HTMLSpanElement;
      gsap.to(target, {
        scale: 1,
        y: 0,
        boxShadow: "0 12px 26px rgba(15,23,42,0.25)",
        duration: 0.25,
        ease: "power2.inOut",
      });
    };

    const digitEls = Array.from(
      digitsRef.current.children
    ) as HTMLSpanElement[];

    digitEls.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      digitEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-sky-50 to-amber-50 px-4">
      <div
        ref={cardRef}
        className="w-full max-w-xl rounded-3xl border border-purple-200 bg-white/90 px-6 py-8 shadow-[0_25px_80px_rgba(15,23,42,0.15)] backdrop-blur-xl"
      >
        {/* 404 animated digits */}
        <div
          ref={digitsRef}
          className="mb-4 flex items-center justify-center gap-3 text-[64px] sm:text-[80px] font-extrabold tracking-tight text-slate-900"
        >
          <span className="inline-flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-400 to-blue-600 text-black shadow-lg shadow-sky-400/50 cursor-pointer transition-transform">
            4
          </span>
          <span className="inline-flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 text-black shadow-lg shadow-amber-300/60 cursor-pointer transition-transform">
            0
          </span>
          <span className="inline-flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-fuchsia-400 to-purple-600 text-black shadow-lg shadow-fuchsia-400/50 cursor-pointer transition-transform">
            4
          </span>
        </div>

        {/* Text + buttons */}
        <div ref={textRef} className="text-center space-y-3">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Lost in the circuit of{" "}
            <span className="bg-gradient-to-r from-sky-500 via-purple-500 to-amber-500 bg-clip-text text-transparent">
              Techtronica
            </span>
            .
          </h1>
          <p className="text-sm sm:text-base text-slate-700 font-medium max-w-md mx-auto">
            The page you are looking for is not connected yet. Check the URL, or
            jump back to the home page and explore our clubs, events, and team.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/home"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-sky-400/50 transition-all duration-200 hover:shadow-lg hover:shadow-sky-400/70 hover:-translate-y-0.5"
            >
              <span className="mr-1 group-hover:-translate-x-0.5 transition-transform">
                ←
              </span>
              Back to Home
            </Link>
            <Link
              href="/clubs"
              className="group inline-flex items-center justify-center rounded-full border border-purple-200 bg-white px-6 py-2.5 text-xs sm:text-sm font-semibold text-purple-800 shadow-sm transition-all duration-200 hover:bg-purple-50 hover:-translate-y-0.5 hover:shadow-md"
            >
              Explore Clubs
              <span className="ml-1 group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
