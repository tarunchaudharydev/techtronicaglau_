"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// import ThemeToggle from "@/components/features/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/clubs", label: "Clubs" },
  { href: "/about", label: "About us" },
  { href: "/events", label: "Events" },
  // { href: "/academics", label: "Academics" },
  // { href: "/home", label: "Sidebar" },
  {
    href: "/library",
    label: "Library",
    badge: "NEW",
  },
  // { href: "/research", label: "Research & Patents" },
  { href: "/alumni", label: "Alumni" },
  { href: "/contact", label: "Contact us" },
  // <ThemeToggle />,
];

// const academicsItems = [
//   { href: "/researchAndPatents", label: "Research & Patents" },
//   { href: "resources", label: "Resources" },
// ];

const clubItems = [
  { href: "/clubs/code-e-phobia", label: "Code-E-Phobia" },
  { href: "/clubs/mindboggler", label: "Mindboggler" },
  { href: "/clubs/technovation", label: "Technovation" },
  { href: "/clubs/unnati", label: "Unnati" },
  { href: "/clubs/gizmo", label: "Gizmo" },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isClubsOpen, setIsClubsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // close mobile menu on outside click
  useEffect(() => {
    if (!isMobileOpen) return;
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isMobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <div ref={navRef} className="mt-4 w-full max-w-5xl px-4">
        <nav
          className="
            flex items-center justify-between
            rounded-3xl border border-white/20
            bg-blue-500/10 backdrop-blur-lg
            shadow-lg shadow-black/20
            px-4 sm:px-6 py-3
          "
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative h-14 w-40 rounded-2xl overflow-hidden">
              <Image
                src="/logo.png"
                alt="Society Logo"
                fill
                sizes="160px"
                className="object-contain"
                priority
              />
              {/* <ThemeToggle /> */}
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              if (link.href === "/clubs") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setIsClubsOpen(true)}
                    onMouseLeave={() => setIsClubsOpen(false)}
                  >
                    <div className="inline-flex items-center gap-1 cursor-pointer">
                      <Link
                        href="/clubs"
                        className={`transition-colors ${
                          active
                            ? "text-blue-600"
                            : "text-foreground dark:text-white hover:text-yellow-500"
                        }`}
                      >
                        Clubs
                      </Link>
                      <span className="text-xs">▼</span>
                    </div>

                    {isClubsOpen && (
                      <div className="absolute left-1/2 z-50 mt-0 w-60 -translate-x-1/2 rounded-2xl border border-black bg-white dark:bg-slate-900 shadow-xl">
                        <ul className="py-2 text-xs text-black">
                          {clubItems.map((club) => (
                            <li key={club.href}>
                              <Link
                                href={club.href}
                                className="block px-4 py-2 text-foreground dark:text-white hover:text-yellow-500 transition-colors"
                              >
                                {club.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative inline-flex items-center transition-colors ${
                    active
                      ? "text-blue-600"
                      : "text-foreground dark:text-white hover:text-yellow-500"
                  }`}
                >
                  <span>{link.label}</span>

                  {link.badge && (
                    <span
                      className="
        absolute -top-3 -right-3
        rounded-full
        bg-gradient-to-r from-pink-500 to-red-500
        px-1.5 py-[2px]
        text-[9px] font-semibold text-white
        animate-pulse
      "
                    >
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-black hover:bg-white dark:bg-slate-900/20 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-black rounded-full" />
              <span className="block h-0.5 w-4 bg-black rounded-full" />
              <span className="block h-0.5 w-5 bg-black rounded-full" />
            </div>
          </button>
        </nav>

        {/* ✅ FIXED Mobile menu */}
        <div
          className={`
            md:hidden mt-2 rounded-3xl border border-slate-200 dark:border-slate-800
            bg-white dark:bg-slate-900 shadow-lg
            transition-all duration-300 overflow-hidden
            ${isMobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <nav className="flex flex-col px-4 py-3 space-y-2 text-sm font-medium text-foreground dark:text-white overflow-y-auto">
            {navLinks.map((link) => {
              if (link.href === "/clubs") {
                return (
                  <div key={link.href} className="space-y-1">
                    <Link
                      href="/clubs"
                      onClick={() => setIsMobileOpen(false)}
                      className="hover:text-sky-600"
                    >
                      Clubs
                    </Link>
                    <div className="ml-3 border-l border-slate-200 dark:border-slate-800 pl-3 space-y-1 text-[13px] text-slate-700">
                      {clubItems.map((club) => (
                        <Link
                          key={club.href}
                          href={club.href}
                          onClick={() => setIsMobileOpen(false)}
                          className="block hover:text-sky-600"
                        >
                          {club.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center gap-2 hover:text-sky-600"
                >
                  <span>{link.label}</span>

                  {link.badge && (
                    <span className="rounded-full bg-pink-500 px-2 py-[2px] text-[10px] font-semibold text-white">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
