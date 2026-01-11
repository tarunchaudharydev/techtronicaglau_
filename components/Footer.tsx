"use client";

import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 ">
      {/* Top */}
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col gap-12 lg:flex-row ">
          {/* Brand */}
          <div className="flex-1 space-y-5">
            <div className="relative h-14 w-40 sm:h-16 sm:w-48">
              <Image
                src="/logo.png"
                alt="Techtronica Logo"
                fill
                className="object-contain"
              />
            </div>

            <div className="space-y-2 text-xs sm:text-sm max-w-md">
              <p className="font-semibold text-sky-700">
                GLA UNIVERSITY, Mathura
              </p>
              <p className="text-slate-700">
                Department of{" "}
                <span className="font-semibold">
                  Electronics and Communication Engineering
                </span>
              </p>
              <p className="text-slate-500 leading-relaxed">
                A student society connecting circuits, communication, and
                creativity through hands-on projects, events, and collaboration.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex-1 grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-4 ">
            {/* Navigate */}
            <div>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-sky-700">
                Navigate
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link href="/" className="footer-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/clubs" className="footer-link">
                    Clubs
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="footer-link">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="footer-link">
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-sky-700">
                About
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link href="/about" className="footer-link">
                    About Techtronica
                  </Link>
                </li>
                <li>
                  <Link href="/alumni" className="footer-link">
                    Alumni
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="footer-link">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="footer-link">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="footer-link">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/code-of-conduct" className="footer-link">
                    Code of Conduct
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="footer-link">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="footer-link">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-sky-700">
                Connect
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a
                    href="https://www.instagram.com/techtronica_glau"
                    className="footer-link"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/techtronica-society2016/"
                    className="footer-link"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:techtronica@gla.ac.in"
                    className="footer-link break-all"
                  >
                    techtronica@gla.ac.in
                  </a>
                </li>
              </ul>
            </div>

            {/* Official */}
            <div>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-sky-700 ">
                Official Links
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a
                    href="https://www.gla.ac.in"
                    target="_blank"
                    className="footer-link"
                  >
                    GLA University Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gla.ac.in/academics/department-of-electronics-communication-engineering"
                    target="_blank"
                    className="footer-link"
                  >
                    ECE Department Page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-4 text-[11px] text-slate-500 text-center sm:text-left">
          © {new Date().getFullYear()} Techtronica • GLA University •
          Electronics & Communication Engineering
        </div>
      </div>
    </footer>
  );
}

export default Footer;
