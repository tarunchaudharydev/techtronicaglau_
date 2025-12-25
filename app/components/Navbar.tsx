"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/clubs", label: "Clubs" },
  { href: "/about", label: "About us" },
  { href: "/upcomingevents", label: "Upcoming Events" },
  { href: "/highlights", label: "Highlights" },
  { href: "/gallery", label: "Gallery" },
  { href: "/community", label: "Community" },
  { href: "/contact", label: "Contact us" },
];

const clubItems = [
  { href: "/code-e-phobia", label: "Code-E-Phobia" },
  { href: "/mindblogger", label: "Mindblogger" },
  { href: "/technovation", label: "Technovation" },
  { href: "/unnati", label: "Unnati" },
  { href: "/gizmo", label: "Gizmo" },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isClubsOpen, setIsClubsOpen] = useState(false); 
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement | null>(null);

  const isActive = (href: string) =>
    href === "/home" ? pathname === "/home" : pathname.startsWith(href);

  // close mobile on click outside
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
          <Link href="/home" className="flex items-center shrink-0">
  <div className="relative h-14 w-40 rounded-2xl overflow-hidden">
    <Image
      src="/logo.png"
      alt="Society Logo"
      fill
      sizes="160px"
      className="object-contain"
      priority
    />
  </div>
</Link>


          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              // Clubs with hover dropdown
              if (link.href === "/clubs") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setIsClubsOpen(true)}
                    onMouseLeave={() => setIsClubsOpen(false)}
                  >
                    {/* trigger */}
                    <div className="inline-flex items-center gap-1 cursor-pointer">
                      <Link
                        href="/clubs"
                        className={`transition-colors ${
                          active
                            ? "text-blue-600"
                            : "text-slate-900 hover:text-yellow-500"
                        }`}
                      >
                        Clubs
                      </Link>
                      <span className="text-xs">▼</span>
                    </div>

                    {/* dropdown */}
                    {isClubsOpen && (
                      <div
                        className="
                          absolute left-1/2 z-50 mt-0 w-60 -translate-x-1/2
                          rounded-2xl border border-black
                          bg-blue-500/10 backdrop-blur-xl
                          shadow-xl shadow-black/400 
                        "
                      >
                        <ul className="py-2 text-xs text-black">
                          {clubItems.map((club) => (
                            <li key={club.href}>
                              <Link
                                href={club.href}
                                className={` block px-4 py-2 relative transition-colors ${
                    active
                      ? "text-blue-600"
                      : "text-slate-900 hover:text-yellow-500"
                  }`}
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

              // normal desktop links
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative transition-colors ${
                    active
                      ? "text-blue-600"
                      : "text-slate-900 hover:text-yellow-500"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile / tablet hamburger */}
          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-black hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle navigation menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-black rounded-full" />
              <span className="block h-0.5 w-4 bg-black rounded-full" />
              <span className="block h-0.5 w-5 bg-black rounded-full" />
            </div>
          </button>
        </nav>

        {/* Mobile & tablet menu */}
        <div
  className={`
    md:hidden mt-2 rounded-3xl border border-slate-200
    bg-white shadow-lg
    transition-all duration-300 overflow-hidden
    ${
      isMobileOpen
        ? "max-h-[320px] opacity-100"
        : "max-h-0 opacity-0"
    }
  `}
>

          <nav className="flex flex-col px-4 py-3 space-y-2 text-sm font-medium text-slate-900">
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
                    <div className="ml-3 border-l border-slate-200 pl-3 space-y-1 text-[13px] text-slate-700">
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
                  className="hover:text-sky-600"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
