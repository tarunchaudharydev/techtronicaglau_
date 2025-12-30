"use client";

import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-white text-black border-gray-300">
      {/* Top area */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-10 md:flex-row">
          {/* Brand + college info */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="relative h-14 w-40 sm:h-16 sm:w-48 overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/logo.png"
                  alt="Techtronica Logo"
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase">
                  Techtronica
                </p>
                <h2 className="text-base sm:text-lg font-bold">
                  Society of Electronics & Communication
                </h2>
              </div>
            </div>

            <div className="space-y-1 text-xs sm:text-sm">
              <p className="font-semibold text-yellow-600">
                GLA UNIVERSITY, Mathura
              </p>
              <p className="text-slate-700">
                Department of{" "}
                <span className="font-semibold">
                  Electronics and Communication Engineering
                </span>
              </p>
              <p className="text-slate-500">
                A student society that connects circuits, communication, and
                creativity through hands-on projects, events, and collaboration.
              </p>
            </div>
          </div>

          {/* Links area */}
          <div
            className="
              flex-1
              grid grid-cols-2 gap-6
              md:flex md:flex-row md:flex-wrap md:justify-end md:gap-10
            "
          >
            {/* Navigate (top-left) */}
            <div className="space-y-3 text-xs sm:text-sm">
              <h3 className="text-[11px] font-semibold uppercase tracking-wide text-sky-700">
                Navigate
              </h3>
              <ul className="space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/clubs", label: "Clubs" },
                  { href: "/gallery", label: "Gallery" },
                  { href: "/events", label: "Events" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-slate-600 hover:text-sky-700 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About (top-right) */}
            <div className="space-y-3 text-xs sm:text-sm">
              <h3 className="text-[11px] font-semibold uppercase tracking-wide text-sky-700">
                About
              </h3>
              <ul className="space-y-2">
                {[
                  { href: "/about", label: "About Techtronica" },
                  { href: "/team", label: "Core Team" },
                  { href: "/contact", label: "Contact us" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-slate-600 hover:text-sky-700 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect  */}
            <div className="space-y-3 text-xs sm:text-sm col-start-1 row-start-2 md:col-auto md:row-auto">
              <h3 className="text-[11px] font-semibold uppercase tracking-wide text-sky-700">
                Connect
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.instagram.com/techtronica_glau?igsh=Y244amc5ZzZmaTBw" className="text-slate-600 hover:text-purple-700">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/techtronica-society2016/" className="text-slate-600 hover:text-purple-700">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:techtronica@gla.ac.in"
                    className="text-slate-600 hover:text-purple-700"
                  >
                    techtronica@gla.ac.in
                  </a>
                </li>
              </ul>
            </div>

            {/* Official links */}
            <div className="space-y-3 text-xs sm:text-sm col-start-2 row-start-2 md:col-auto md:row-auto">
              <h3 className="text-[11px] font-semibold uppercase tracking-wide text-sky-700">
                Official links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.gla.ac.in"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 hover:text-sky-700"
                  >
                    GLA University Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gla.ac.in/academics/department-of-electronics-communication-engineering"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 hover:text-sky-700"
                  >
                    ECE Department Page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 bg-slate-100/80">
        <div className="mx-auto max-w-6xl px-4 py-4 text-[11px] text-slate-500 text-center sm:text-left">
          © {new Date().getFullYear()} Techtronica • GLA University • Electronics
          and Communication Engineering
        </div>
      </div>
    </footer>
  );
}

export default Footer;
