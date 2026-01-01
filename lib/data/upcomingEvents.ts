export type ClubEvent =
  | "unnati"
  | "gizmo"
  | "code-e-phobia"
  | "technovation"
  | "mindboggler";


export interface Event {
  id: string;
  title: string;
  club: ClubEvent;
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
    club: "code-e-phobia",
    date: "2026-01-20",
    time: "10:00 AM",
    location: "Seminar Hall A",
    coverImage: "/clubs/code-e-phobia/images/Hackthon.jpg",
    description:
      "Hands-on workshop on React, Next.js, Tailwind and real-world projects.",
    registrationLink: "https://forms.gle/xyz",
    registrationDeadline: "2026-01-15",
  },


  {
    id: "CodeX",
    title: "CodeX",
    club: "code-e-phobia",
    date: "2022-04-11",
    time: "10:00 AM",
    location: "Seminar Hall A",
    coverImage: "/clubs/code-e-phobia/images/CodeX.jpg",
    description:
      "A multi-round competitive coding event where participants raced to solve problem statements first. Speed and accuracy decided the winners.",
    
    outcome: "",
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/clubs/code-e-phobia/images/CodeX.jpg",
    ],
  },


   {
    id: "CodeQuest",
    title: "Code Quest",
    club: "code-e-phobia",
    date: "2023-04-01",
    time: "10:00 AM",
    location: "Seminar Hall A",
    coverImage: "/clubs/code-e-phobia/images/CodeQuest.jpg",
    description:
      "A daily GitHub-based coding challenge where correct, original solutions earned points, while AI-generated code resulted in penalties.",
    
    outcome: "",
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/clubs/code-e-phobia/images/CodeQuest.jpg",
      "/clubs/code-e-phobia/images/CodeQuest.jpg",
    ],
  },




  // gizmo




  {
    id: "RoboticsBootcamp",
    title: "Robotics Bootcamp",
    club: "gizmo",
    date: "2022-04-11",
    time: "10:00 AM",
    location: "Seminar Hall A",
    coverImage: "/clubs/gizmo/images/gizmo.jpg",
    description:
      "A multi-round competitive coding event where participants raced to solve problem statements first. Speed and accuracy decided the winners.",
    
    outcome: "",
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/clubs/gizmo/images/gizmo.jpg",
      "/clubs/gizmo/images/gizmo.jpg",
      "/clubs/gizmo/images/gizmo.jpg",
    ],
  },




  
  // {
  //   id: "Robotics Bootcamp",
  //   title: "Robotics Bootcamp",
  //   club: "Gizmo",
  //   date: "2024-04-10",
  //   time: "02:00 PM",
  //   location: "Innovation Lab",
  //   coverImage: "/clubs/gizmo/images/gizmo.jpg",
  //   description:
  //     "A hands-on bootcamp introducing students to robot design, sensors, motors, and basic automation using Arduino and microcontrollers.",
  //   outcome: "",
  //   winners: [
  //     { name: "Team Alpha", position: "1st" },
  //     { name: "Team Beta", position: "2nd" },
  //   ],
  //   gallery: [
  //     "/clubs/gizmo/images/gizmo.jpg",
  //     "/clubs/gizmo/images/gizmo.jpg",
  //     "/clubs/gizmo/images/gizmo.jpg",
  //   ],
  // },



  {
    id: "RoboRaceAutomationChallenge",
    title: "Robo Race & Automation Challenge",
    club: "gizmo",
    date: "2024-04-10",
    time: "02:00 PM",
    location: "Innovation Lab",
    coverImage: "/clubs/gizmo/images/gizmo.jpg",
    description:
      "Compete in thrilling robotics challenges involving line followers, obstacle courses, and automation problem-solving.",
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/clubs/gizmo/images/gizmo.jpg",
      "/clubs/gizmo/images/gizmo.jpg",
      "/clubs/gizmo/images/gizmo.jpg",
    ],
  },



  {
    id: "ElectronicsCircuitDesignWorkshop",
    title: "Electronics & Circuit Design Workshop",
    club: "gizmo",
    date: "2024-04-10",
    time: "02:00 PM",
    location: "Innovation Lab",
    coverImage: "/clubs/gizmo/images/gizmo.jpg",
    description:
      "Learn PCB design, circuit simulation, and practical electronics by building real-world electronic modules from scratch.",
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/clubs/gizmo/images/gizmo.jpg",
      "/clubs/gizmo/images/gizmo.jpg",
      "/clubs/gizmo/images/gizmo.jpg",
    ],
  },



  // mindboggler


  {
    id: "QuizQuestUltimate",
    title: "QuizQuest Ultimate",
    club: "mindboggler",
    date: "2024-04-10",
    time: "02:00 PM",
    location: "Innovation Lab",
    coverImage: "/clubs/mindboggler/images/mindbogglerChip.jpg",
    description:
      "A fast-paced 3-round quiz testing knowledge, logic, and quick thinking—MCQ screening, team stage, and an intense rapid-fire finale.",
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/clubs/mindboggler/images/mindbogglerChip.jpg",
      "/clubs/mindboggler/images/mindbogglerChip.jpg",
      "/clubs/mindboggler/images/mindbogglerChip.jpg",
    ],
  },




  
  {
    id: "PenToPodium",
    title: "Pen to Podium",
    club: "mindboggler",
    date: "2024-04-10",
    time: "02:00 PM",
    location: "Innovation Lab",
    coverImage: "/clubs/mindboggler/images/mindbogglerChip.jpg",
    description:
      "A two-round creative event combining writing and speaking—Pic to Pen challenges imagination, followed by Think & Talk to test confidence and communication.",
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/clubs/mindboggler/images/mindbogglerChip.jpg",
      "/clubs/mindboggler/images/mindbogglerChip.jpg",
      "/clubs/mindboggler/images/mindbogglerChip.jpg",
    ],
  },





  
  {
    id: "BloggingContentCreationChallenge",
    title: "Blogging & Content Creation Challenge",
    club: "mindboggler",
    date: "2024-04-10",
    time: "02:00 PM",
    location: "Innovation Lab",
    coverImage: "/clubs/mindboggler/images/mindbogglerChip.jpg",
    description:
      "Participants create blogs, articles, reels, or short-form content based on trending topics, judged on originality and impact.",
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/clubs/mindboggler/images/mindbogglerChip.jpg",
      "/clubs/mindboggler/images/mindbogglerChip.jpg",
      "/clubs/mindboggler/images/mindbogglerChip.jpg",
    ],
  },



  // technovation



  {
    id: "CadenceWorkshop",
    title: "Cadence Workshop",
    club: "technovation",
    date: "2024-04-10",
    time: "02:00 PM",
    location: "Innovation Lab",
    coverImage: "/clubs/technovation/images/CadenceWorkshop.jpg",
    description:
      "A hands-on workshop introducing students to Cadence EDA tools, covering circuit design, simulation, layout, and verification for real-world VLSI applications.",
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/clubs/technovation/images/CadenceWorkshop.jpg",
      "/clubs/technovation/images/CadenceWorkshop.jpg",
      "/clubs/technovation/images/CadenceWorkshop.jpg",
    ],
  },


  

  {
    id: "HardwareIntegrationChallenge",
    title: "Hardware–Software Integration Challenge",
    club: "technovation",
    date: "2024-04-10",
    time: "02:00 PM",
    location: "Innovation Lab",
    coverImage: "/clubs/technovation/images/motherboard.jpg",
    description:
      "Teams build integrated systems using sensors, microcontrollers, and software platforms to solve practical engineering problems.",
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/clubs/technovation/images/motherboard.jpg",
      "/clubs/technovation/images/motherboard.jpg",
      "/clubs/technovation/images/motherboard.jpg",
    ],
  },




  {
    id: "InnovationExpo",
    title: "Innovation Expo & Prototype Showcase",
    club: "technovation",
    date: "2024-04-10",
    time: "02:00 PM",
    location: "Innovation Lab",
    coverImage: "/clubs/technovation/images/ram.jpg",
    description:
      "Participants present working prototypes and project ideas to a panel of judges, industry mentors, and fellow students.",
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/clubs/technovation/images/ram.jpg",
      "/clubs/technovation/images/ram.jpg",
      "/clubs/technovation/images/ram.jpg",
    ],
  },



  // unnati


  {
    id: "Kratikala",
    title: "Kratikala",
    club: "unnati",
    date: "2024-04-10",
    time: "02:00 PM",
    location: "Innovation Lab",
    coverImage: "/clubs/unnati/images/IMG-20240410-121212.jpg",
    description:
      "A creative competition featuring Painting, Nail Art, Mehendi, and Rangoli, celebrating artistic expression and skill.",
    outcome: "",
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/clubs/unnati/images/1.jpg",
      "/clubs/unnati/images/2.jpg",
      "/clubs/unnati/images/3.jpg",
      "/clubs/unnati/images/4.jpg",
      "/clubs/unnati/images/5.jpg",
      "/clubs/unnati/images/6.jpg",
      "/clubs/unnati/images/7.jpg",
      "/clubs/unnati/images/8.jpg",
      "/clubs/unnati/images/9.jpg",
      

    ],
  },







  {
    id: "Tarang",
    title: "Tarang",
    club: "unnati",
    date: "2024-04-10",
    time: "02:00 PM",
    location: "Innovation Lab",
    coverImage: "/clubs/unnati/images/1.jpg",
    description:
      "A fun fusion of a mental quiz and talent showcase, where participants answer a surprise question and then perform their unique talent.",
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/clubs/unnati/images/1.jpg",
      "/clubs/unnati/images/2.jpg",
      "/clubs/unnati/images/3.jpg",
    ],
  },





  {
    id: "Udaan",
    title: "Udaan",
    club: "unnati",
    date: "2024-04-10",
    time: "02:00 PM",
    location: "Innovation Lab",
    coverImage: "/clubs/unnati/images/1.jpg",
    description:
      "Organize an interactive visit to a school, including games and activities with the students.",
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/clubs/unnati/images/1.jpg",
      "/clubs/unnati/images/2.jpg",
      "/clubs/unnati/images/3.jpg",
    ],
  },




  {
    id: "CultureWalk",
    title: "CultureWalk",
    club: "unnati",
    date: "2024-04-10",
    time: "02:00 PM",
    location: "Innovation Lab",
    coverImage: "/clubs/unnati/images/6.jpg",
    description:
      "A fashion show where participants showcase cultural diversity by walking the ramp in traditional outfits.",
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/clubs/unnati/images/6.jpg",
      "/clubs/unnati/images/7.jpg",
      "/clubs/unnati/images/8.jpg",
    ],
  },




  {
    id: "Trash-To-Treasure",
    title: "Trash-To-Treasure",
    club: "unnati",
    date: "2024-04-10",
    time: "02:00 PM",
    location: "Innovation Lab",
    coverImage: "/clubs/unnati/images/5.jpg",
    description:
      "A creative event where waste materials are transformed into innovative and useful creations.",
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/clubs/unnati/images/5.jpg",
      "/clubs/unnati/images/6.jpg",
      "/clubs/unnati/images/7.jpg",
    ],
  },




  


  





];
