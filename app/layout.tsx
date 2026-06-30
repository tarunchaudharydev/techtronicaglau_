// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import DigitalClock from "../components/features/DigitalClock";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Techtronica Society",
//   description: "Made with ❤️ by Techtronica Society.",
// };

// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Analytics } from "@vercel/analytics/next";
// import EventPopup from "@/components/features/events/EventPopup";
// import { upcomingEvent } from "@/lib/data/upcomingEvents";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-900 text-foreground dark:text-white`}
//       >
//         {/* Site Header */}
//         <Navbar />

//         {/* Main content */}
//         <main className="pt-28 min-h-screen bg-linear-to-br from-white dark:from-slate-950 via-sky-50 dark:via-slate-900 to-purple-100 dark:to-black">
//           <EventPopup event={upcomingEvent} eventSlug={""} />
//           {children}
//         </main>
//         <Analytics />

//         <SpeedInsights />

//         {/* Optional widgets */}
//         <DigitalClock />

//         {/* Site Footer */}
//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-expect-error CSS module declarations missing for globals.css
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DigitalClock from "../components/features/DigitalClock";

// import { ThemeProvider } from "next-themes";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import EventPopup from "@/components/features/events/EventPopup";
import { upcomingEvent } from "@/lib/data/upcomingEvents";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-900 text-foreground dark:text-white dark:bg-black dark:text-white transition-colors duration-300`}
      >
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        <Navbar />

        <main className="pt-28 min-h-screen bg-gradient-to-br from-white dark:from-slate-950 via-sky-50 dark:via-slate-900 to-purple-100 dark:to-black dark:from-slate-900 dark:via-slate-800 dark:to-black transition-colors duration-300">
          <EventPopup event={upcomingEvent} eventSlug={""} />
          {children}
        </main>

        <Analytics />
        <SpeedInsights />
        <DigitalClock />
        <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
