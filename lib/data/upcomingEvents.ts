export type EventClub =
  | "Code-E-Phobia"
  | "Gizmo"
  | "Technovation"
  | "Unnati"
  | "Mindboggler";

export interface Event {
  id: string;
  title: string;
  club: EventClub;
  date: string;        // YYYY-MM-DD
  time: string;        // "10:00 AM"
  location: string;

  coverImage: string;
  description: string;

  // UPCOMING only
  registrationLink?: string;
  registrationDeadline?: string;

  // PAST only
  outcome?: string;
  winners?: {
    name: string;
    position: string;
  }[];
  gallery?: string[];
}


export const events: Event[] = [
  {
    id: "web",
    title: "Web Development Bootcamp",
    club: "Code-E-Phobia",
    date: "2026-01-01",
    time: "10:00 AM",
    location: "Seminar Hall A",
    coverImage: "/clubs/code-e-phobia/images/Hackthon.jpg",
    description:
      "Hands-on workshop on React, Next.js, Tailwind and real-world projects.",
    registrationLink: "https://forms.gle/xyz",
    registrationDeadline: "2025-12-30",
  },
  
  {
    id: "robotics-showcase-2024",
    title: "Robotics Showcase",
    club: "Gizmo",
    date: "2024-08-12",
    time: "02:00 PM",
    location: "Innovation Lab",
    coverImage: "/clubs/code-e-phobia/images/Hackthon.jpg",
    description:
      "Live demonstration of student-built robots and IoT systems.",
    outcome: "15 robots were showcased successfully.",
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/events/robotics/1.jpg",
      "/events/robotics/2.jpg",
      "/events/robotics/3.jpg",
    ],
  },
];
