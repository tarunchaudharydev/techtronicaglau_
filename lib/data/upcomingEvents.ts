import { Event, ClubEvent } from "@/types/event";

export type { Event, ClubEvent };


export const events: Event[] = [
  {
    id: "udan",
    title: "TECHTRONICA SOCIETY PRESENTS — IDEA UDAAN",
    club: "code-e-phobia",
    date: "2026-01-20",
    time: "10:00 AM",
    location: "Seminar Hall A",
    coverImage: "/clubs/code-e-phobia/images/Hackthon.jpg",
       description: [
        "Something meaningful. Something impactful.",


        "🌱⚙️ ECOVATION  ",
        "A Sustainability-Focused Tech Competition  ",



        "Where technology meets responsibility and ideas turn into action.",



        "💡 What is ECOVATION?  ",



        "ECOVATION is a technology-driven competition built purely around the theme of Sustainability.  ",


        "It’s a platform to present innovative, practical, and future-ready solutions for real-world ",
        "problems using technology.",



        "📌 Event Structure  ",



        "• Round 1: Online PPT Submission  ",
        "• Round 2: Offline Exhibition (Final Round)  ",




        "🗓 Online PPT Submission Starts: 15th January 2026  ",
        "🗓 Final Offline Exhibition: 6th February 2026  ",




        "👥 Who Can Participate?  ",

        "• Any student from any year  ",
        "• Team-based participation (3–5 members)  ",
        "• Teams can include students from different years  ",
        "• Teams can include students from different courses  ",
        "• Outside college participants are not allowed  ",


        "⚠️ Important Guidelines  ",

        "• The theme Sustainability must be strictly followed  ",
        "• Original ideas only — copied or AI-generated content is not allowed  ",
        "• One team can submit only one idea",
       ],



    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeW5pXjVxfEVG0h8rvFKkDyFT8aTIILiC5KvcZJVaWs_8llwQ/viewform",
    registrationDeadline: "2026-01-20",
  },










  {
    id: "CodeX",
    title: "CodeX",
    club: "code-e-phobia",
    date: "2022-04-11",
    time: "10:00 AM",
    location: "Seminar Hall A",
    coverImage: "/clubs/code-e-phobia/images/CodeX.jpg",
    description: ["A multi-round competitive coding event where participants raced to solve problem statements first. Speed and accuracy decided the winners."],
    
    outcome: "",
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/clubs/code-e-phobia/images/css.jpg",
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
    description: ["A daily GitHub-based coding challenge where correct, original solutions earned points, while AI-generated code resulted in penalties."],
    
    outcome: "",
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/clubs/code-e-phobia/images/newtworking.jpg",
      
    ],
  },






  // gizmo




  {
    id: "iotWorkshop",
    title: "IoT Workshop",
    club: "gizmo",
    date: "2025-04-11",
    time: "10:00 AM",
    location: "Seminar Hall A",
    coverImage: "/clubs/gizmo/events/iothome.jpg",
    description: ["A workshop on Internet of Things. this workshop is about how to make a smart home using IoT."],
    
    outcome: "Learn how to make a smart home using IoT.",
    // winners: [
    //   { name: "Team Alpha", position: "1st" },
    //   { name: "Team Beta", position: "2nd" },
    // ],
    gallery: [
      "/clubs/gizmo/events/iotworkshop.jpeg",
      
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
    id: "pcbworkshop",
    title: "PCB Workshop",
    club: "gizmo",
    date: "2025-05-20",
    time: "02:00 PM",
    location: "Innovation Lab",
    coverImage: "/clubs/gizmo/events/pcbhome.jpg",
    description: ["Learn PCB design, circuit simulation, and practical electronics by building real-world electronic modules from scratch."],
    // winners: [
    //   { name: "Team Alpha", position: "1st" },
    //   { name: "Team Beta", position: "2nd" },
    // ],
    gallery: [
      "/clubs/gizmo/events/pcbworkshop.jpeg",
      
    ],
  },



  // mindboggler



  {
    id: "testing",
    title: "No events right now",
    club: "mindboggler",
    date: "2024-04-01",
    time: "02:00 PM",
    location: "Innovation Lab",
    coverImage: "/clubs/gizmo/images/sitrobort.jpg",
    description: ["No events right now"],
    winners: [],
    gallery: [],
  },


  




  
 





  
  



  // technovation



  {
    id: "CadenceWorkshop",
    title: "Cadence Workshop",
    club: "technovation",
    date: "2024-04-10",
    time: "02:00 PM",
    location: "Innovation Lab",
    coverImage: "/clubs/technovation/events/cadenceworkshop.jpeg",
    description: ["A hands-on workshop introducing students to Cadence EDA tools, covering circuit design, simulation, layout, and verification for real-world VLSI applications."],
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/clubs/technovation/events/cadenceworkshop.jpeg",
      "/clubs/technovation/events/cadencework.jpeg",
      
    ],
  },


  

  
  




  // {
  //   id: "InnovationExpo",
  //   title: "Innovation Expo & Prototype Showcase",
  //   club: "technovation",
  //   date: "2024-04-10",
  //   time: "02:00 PM",
  //   location: "Innovation Lab",
  //   coverImage: "/clubs/technovation/images/ram.jpg",
  //   description: ["Participants present working prototypes and project ideas to a panel of judges, industry mentors, and fellow students."],
  //   winners: [
  //     { name: "Team Alpha", position: "1st" },
  //     { name: "Team Beta", position: "2nd" },
  //   ],
  //   gallery: [
  //     "/clubs/technovation/images/technovation3.jpg",
    
  //   ],
  // },



  // unnati


  {
    id: "udan",
    title: "Udan",
    club: "unnati",
    date: "2024-04-10",
    time: "02:00 PM",
    location: "Innovation Lab",
    coverImage: "/clubs/unnati/events/udan.jpeg",
    description: ["A creative competition featuring Painting, Nail Art, Mehendi, and Rangoli, celebrating artistic expression and skill."],
    winners: [
      { name: "Team Alpha", position: "1st" },
      { name: "Team Beta", position: "2nd" },
    ],
    gallery: [
      "/clubs/unnati/events/udan.jpeg",
      
      

    ],
  },





  {
    id: "Kratikala",
    title: "Kratikala",
    club: "unnati",
    date: "2024-04-10",
    time: "02:00 PM",
    location: "Innovation Lab",
    coverImage: "/clubs/unnati/images/kratikala25.jpg",
    description: ["A creative competition featuring Painting, Nail Art, Mehendi, and Rangoli, celebrating artistic expression and skill."],
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
      "/clubs/unnati/images/10.jpg",
      "/clubs/unnati/images/11.jpg",
      "/clubs/unnati/images/12.jpg",
      "/clubs/unnati/images/13.jpg",
      "/clubs/unnati/images/14.jpg",
      "/clubs/unnati/images/15.jpg",
      "/clubs/unnati/images/16.jpg",
      "/clubs/unnati/images/17.jpg",
      "/clubs/unnati/images/18.jpg",
      "/clubs/unnati/images/19.jpg",
      "/clubs/unnati/images/20.jpg",
      "/clubs/unnati/images/21.jpg",
      "/clubs/unnati/images/22.jpg",
      "/clubs/unnati/images/23.jpg",
      "/clubs/unnati/images/24.jpg",
      "/clubs/unnati/images/25.jpg",
      "/clubs/unnati/images/26.jpg",
      "/clubs/unnati/images/27.jpg",
      "/clubs/unnati/images/28.jpg",
      "/clubs/unnati/images/29.jpg",
      "/clubs/unnati/images/30.jpg",
      "/clubs/unnati/images/31.jpg",
      "/clubs/unnati/images/32.jpg",
      "/clubs/unnati/images/33.jpg",
      "/clubs/unnati/images/34.jpg",
      "/clubs/unnati/images/35.jpg",
      "/clubs/unnati/images/36.jpg",
      "/clubs/unnati/images/37.jpg",
      "/clubs/unnati/images/38.jpg",
      "/clubs/unnati/images/39.jpg",
      "/clubs/unnati/images/40.jpg",
      "/clubs/unnati/images/41.jpg",
      "/clubs/unnati/images/42.jpg",
      "/clubs/unnati/images/43.jpg",
      "/clubs/unnati/images/44.jpg",
      "/clubs/unnati/images/45.jpg",
      "/clubs/unnati/images/46.jpg",
      "/clubs/unnati/images/47.jpg",
      "/clubs/unnati/images/48.jpg",
      "/clubs/unnati/images/49.jpg",
      "/clubs/unnati/images/50.jpg",
      "/clubs/unnati/images/51.jpg",
      "/clubs/unnati/images/52.jpg",
      "/clubs/unnati/images/53.jpg",
      "/clubs/unnati/images/54.jpg",
      "/clubs/unnati/images/55.jpg",
      "/clubs/unnati/images/56.jpg",
      "/clubs/unnati/images/57.jpg",
      "/clubs/unnati/images/58.jpg",
      "/clubs/unnati/images/59.jpg",
      "/clubs/unnati/images/60.jpg",
      "/clubs/unnati/images/61.jpg",
      "/clubs/unnati/images/62.jpg",
      "/clubs/unnati/images/63.jpg",
      "/clubs/unnati/images/64.jpg",
      "/clubs/unnati/images/65.jpg",
      "/clubs/unnati/images/66.jpg",
      "/clubs/unnati/images/67.jpg",
      "/clubs/unnati/images/68.jpg",
      "/clubs/unnati/images/69.jpg",
      "/clubs/unnati/images/70.jpg",
      "/clubs/unnati/images/71.jpg",
      "/clubs/unnati/images/72.jpg",
      "/clubs/unnati/images/73.jpg",
      

    ],
  },







  


  




 
  




  


  





];

export const upcomingEvent = events[0];
