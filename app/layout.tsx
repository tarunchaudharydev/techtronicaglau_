import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DigitalClock from "../components/features/DigitalClock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Techtronica Society",
  description: "Made with ❤️ by Techtronica Society.",
};

import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        {/* Site Header */}
        <Navbar />

        {/* Main content (ALL pages render here) */}
        <main className="pt-28 min-h-screen bg-linear-to-br from-white via-sky-50 to-purple-100">
          {children}
          <SpeedInsights />
        </main>

        {/* Optional widgets */}
        <DigitalClock />

        {/* Site Footer */}
        <Footer />
      </body>
    </html>
  );
}
