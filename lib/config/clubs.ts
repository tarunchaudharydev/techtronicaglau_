

export type ClubSlug =
  | "code-e-phobia"
  | "gizmo"
  | "technovation"
  | "unnati"
  | "mindboggler";

export interface Club {
  slug: ClubSlug;
  name: string;
  tagline: string;
  shortDescription: string;
  purposeTitle: string;
  purposeDescription: string;
  joinFormUrl?: string;   // for join club form

  heroImage: string;
  galleryImage: string;
  sessionImage: string;
  promoVideo?: string;

  tracks: {
    title: string;
    description: string;
  }[];

  whatYouDo: string[];

  sessions: {
    title: string;
    description: string;
  }[];

  team: {
    name: string;
    role: string;
    image: string;
  }[];

  contact: {
    linkedin?: string;
    instagram?: string;
    whatsapp?: string;
  };
}

export const clubs: Club[] = [
  {
    slug: "code-e-phobia",
    name: " \"Code-E-Phobia\" ",
    tagline: "Controlling Complexity Is the Essence of Programming",
    shortDescription:
      "Code-E-Phobia is the coding and programming club under Techtronica that helps students overcome the fear of coding and build strong computational skills. The club provides a supportive platform where students learn, practice, and grow through coding challenges, competitions, and hackathons.",

    purposeTitle: "Why & Purpose of Code-E-Phobia",
    purposeDescription:
      "Code-E-Phobia was created to make coding more accessible, engaging, and enjoyable for students from electronics and allied backgrounds. Through hackathons, competitive coding events, and hands-on problem-solving sessions, the club helps students strengthen logic, improve programming skills, and think analytically. Its purpose is to encourage continuous learning, foster innovation, and prepare students to confidently face technical interviews, competitions, and real-world software challenges.",

    heroImage: "/clubs/code-e-phobia/images/homepage.avif",
    galleryImage: "/clubs/code-e-phobia/images/coding.jpg",
    sessionImage: "/clubs/code-e-phobia/images/session.avif",
    promoVideo: "/clubs/video.mp4",
    tracks: [
      {
        title: "Beginner Track",
        description: "Basics of programming and logic building.",
      },
      {
        title: "DSA Track",
        description: "Structured DSA and interview preparation.",
      },
      {
        title: "CP & Project Track",
        description: "Competitive programming and mini projects.",
      },
    ],

    whatYouDo: [
      "Participate in contests and hackathons",
      "Practice DSA with mentors",
      "Build projects",
      "Learn debugging and optimization",
    ],

    sessions: [
      {
        title: "Problem Walkthroughs",
        description: "Seniors explain problems step by step.",
      },
      {
        title: "Silent Grind Sessions",
        description: "Solve problems together with instant doubt clearing.",
      },
      {
        title: "Mock Contests",
        description: "Timed contests with discussions.",
      },
      {
        title: "Mentorship Circles",
        description: "Small groups with guidance.",
      },
    ],

    team: [
      {
        name: "Dheeraj Rajput",
        role: "President",
        image: "/clubs/code-e-phobia/team/president.jpg",
      },
      {
        name: "Utkarsh",
        role: "Vice President",
        image: "/clubs/code-e-phobia/team/vicePresident.jpg",
      },
      {
        name: "Samriddhi Gaur",
        role: "Secretary",
        image: "/clubs/code-e-phobia/team/GS.jpg",
      },
    ],

    contact: {
      linkedin: "https://www.linkedin.com/company/techtronica-gla",
      instagram: "https://www.instagram.com/techtronica_glau?igsh=Y244amc5ZzZmaTBw",
    },
  },

  // 🔁 ADD OTHER CLUBS SAME WAY (Gizmo, Unnati, etc.)

  {
    slug: "gizmo",
    name: "Gizmo",
    tagline: "Crank Up the Power of Resolution.",
    shortDescription:
      "Gizmo is the robotics-focused club under Techtronia where ideas come to life through machines. The club provides students with hands-on exposure to robotics, automation, and hardware systems, allowing them to design, build, and test robots in a practical and collaborative environment.",

    purposeTitle: "Why & Purpose of Gizmo",
    purposeDescription:
      "Gizmo was created to help students experience the real-world application of electronics through robotics. The club encourages learning by building—working with sensors, motors, microcontrollers, and control systems. Through workshops, projects, and competitions, Gizmo helps students develop problem-solving skills, teamwork, and technical confidence. Its purpose is to nurture innovation and practical thinking while preparing students for careers in robotics, automation, and advanced hardware technologies.",

    heroImage: "/clubs/gizmo/images/righthand.jpg",
    galleryImage: "/clubs/gizmo/images/righthand.jpg",
    sessionImage: "/clubs/gizmo/images/righthand.jpg",
    promoVideo: "/clubs/gizmo/video.mp4",

    tracks: [
      {
        title: "Robotics basics track",
        description: "Basics of robotics and electronics.",
      },
      {
        title: "Robotics advanced track",
        description: "Advanced robotics and electronics.",
      },
      {
        title: "Robotics project track",
        description: "Competitive robotics and mini projects.",
      },
    ],

    whatYouDo: [
      "Participate in robotics competitions and hackathons",
      "Practice robotics with mentors",
      "Build projects",
      "Learn debugging and optimization",
    ],

    sessions: [
      {
        title: "Robotics Problem Walkthroughs",
        description: "Seniors explain robotics problems step by step.",
      },
      {
        title: "Silent Grind Sessions",
        description: "Solve robotics problems together with instant doubt clearing.",
      },
      {
        title: "Mock Robotics Competitions",
        description: "Timed robotics competitions with discussions.",
      },
      {
        title: "Mentorship Circles",
        description: "Small groups with guidance.",
      },
    ],

    team: [
      {
        name: "Vaibhav Jain",
        role: "President",
        image: "/clubs/gizmo/team/president.jpg",
      },

      {
        name: "Pyush",
        role: "Vice President",
        image: "/clubs/gizmo/team/vicePresident.jpg",
      },

      {
        name: "Avantika",
        role: "GeneralSecretary",
        image: "/clubs/gizmo/team/GS.jpg",
      },
    ],

    contact: {
      linkedin: "https://www.linkedin.com/company/techtronica-society2016/",
      instagram: "https://www.instagram.com/techtronica_glau?igsh=Y244amc5ZzZmaTBw",
    },
  },

// technovation


  {
    slug: "technovation",
    name: "Technovation",
    tagline: "A Step Towards Evolving Innovators.",
    shortDescription:
      "Technovation is the core technical club under Techtronica where electronics students learn by working hands-on with real tools and technologies. It offers a practical space to explore essential electronics concepts using platforms like Arduino, Cadence, and circuit design software through engaging workshops and interactive sessions.",

    purposeTitle: "Why & Purpose of Technovation",
    purposeDescription:
      "Technovation was created to make electronics learning more practical, engaging, and meaningful. The club helps students move beyond theory by encouraging them to experiment, build, and solve real problems. Through workshops and collaborative activities, students gain confidence with core electronics tools, strengthen their technical foundation, and develop an innovative way of thinking. The purpose of Technovation is to support electronics students in becoming skilled, curious, and industry-ready engineers who are prepared for future technologies and real-world challenges.",

    heroImage: "/clubs/technovation/images/pcb.jpg",
    galleryImage: "/clubs/technovation/images/ram.jpg",
    sessionImage: "/clubs/technovation/images/session.jpg",
    promoVideo: "/clubs/technovation/video.mp4",

    tracks: [
      {
        title: "Hardware Fundamentals Track",
        description: "Basics of electronics and logic building.",
      },
      {
        title: "Embedded & Tools Track",
        description: "Hands-on work with Arduino, microcontrollers, simulation tools, and design software to understand embedded systems in practice.",
      },
      {
        title: "Projects & Innovation Track",
        description: "Team-based projects that combine hardware, embedded logic, and design thinking to build real, working electronic solutions.",
      },
    ],

    whatYouDo: [
      "Work hands-on with electronic components",
      "Build projects",
      "Learn debugging and optimization",
    ],

    sessions: [
      {
        title: "Workshops",
        description: "Hands-on sessions with mentors.",
      },
      {
        title: "Projects",
        description: "Build real, working electronic solutions.",
      },
      {
        title: "Design Thinking",
        description: "Innovative thinking and problem-solving.",
      },
      {
        title: "Mentorship",
        description: "Guidance and support from seniors.",
      },
    ],

    team: [
      {
        name: "Brijesh Maurya",
        role: "President",
        image: "/clubs/technovation/team/president.jpg",
      },

      {
        name: "Tushar Sharma",
        role: "Vice President",
        image: "/clubs/technovation/team/vicePresident.jpg",
      },

      {
        name: "Utkarsh Singhal",
        role: "General Secretary",
        image: "/clubs/technovation/team/GS.jpeg",
      },
    ],

    contact: {
      linkedin: "https://www.linkedin.com/company/techtronica-society2016/",
      instagram: "https://www.instagram.com/techtronica_glau?igsh=Y244amc5ZzZmaTBw",
    },
  },


// unnati

  {
    slug: "unnati",
    name: "Unnati",
    tagline: "Where Everyone Adapts Culture with Creativity.",
    shortDescription:
      "Unnati is the cultural and personality development club under Techtronica society that celebrates expression, creativity, and growth. It offers students a welcoming space to showcase their talents, participate in cultural activities, and build confidence while developing essential life and interpersonal skills.",

    purposeTitle: "Why & Purpose of Unnati",
    purposeDescription:
      "At Unnati, we believe that learning goes beyond technical knowledge. Cultural experiences play a key role in shaping confident and capable individuals. Through events, activities, and interactive sessions, Unnati helps students strengthen communication skills, gain self-confidence, and learn the value of teamwork. The club encourages students to step out of their comfort zones, explore their abilities, and grow both personally and socially.Unnati aims to create an inclusive and energetic environment where students can grow alongside their academic journey. By organizing cultural events, competitions, and engagement activities, the club supports holistic development and helps students become confident individuals, effective communicators, and well-rounded professionals ready for the future.",

    heroImage: "/clubs/unnati/images/1.jpg",
    galleryImage: "/clubs/unnati/images/2.jpg",
    sessionImage: "/clubs/unnati/images/3.jpg",
    promoVideo: "/clubs/unnati/video.mp4",

    tracks: [
      {
        title: "Expression Track",
        description: "Explore dance, music, drama, anchoring, and creative performances—perfect for students who enjoy expressing themselves on stage.",
      },
      {
        title: "Personality Track",
        description: "Focus on communication skills, confidence building, teamwork, and public speaking through interactive activities and sessions.",
      },
      {
        title: "Event & Leadership Track",
        description: "Learn event planning, coordination, stage management, and leadership by organizing cultural events and college activities.",
      },
    ],

    whatYouDo: [
      "Participate in cultural events",
      "Take part in dance, music, drama, anchoring, and other creative activities.",
      "Build Confidence and Teamwork",
      "Learn Public Speaking and Communication Skills",
    ],

    sessions: [
      {
        title: "Workshops",
        description: "Hands-on sessions with mentors.",
      },
      {
        title: "Events",
        description: "Organize cultural events and college activities.",
      },
      {
        title: "Mentorship",
        description: "Guidance and support from seniors.",
      },
    ],

    team: [
      {
        name: "Astitva Johri",
        role: "President",
        image: "/clubs/unnati/team/president.jpg",
      },

      {
        name: "Nandini",
        role: "Vice President",
        image: "/clubs/unnati/team/vicePresident.jpg",
      },

      {
        name: "Ridhima",
        role: "General Secretary",
        image: "/clubs/unnati/team/GS.jpeg",
      },
    ],

    contact: {
      linkedin: "https://www.linkedin.com/company/techtronica-society2016/",
      instagram: "https://www.instagram.com/techtronica_glau?igsh=Y244amc5ZzZmaTBw",
    },
  },




  // mindbloggers

  {
    slug: "mindboggler",
    name: "MindBloggers",
    tagline: "The Quest for Zero Defeat.",
    shortDescription:
      "MindBloggers is the creative and knowledge-driven club under Techtronica that encourages students to think, express, and explore ideas beyond the technical space. As the name suggests, the club focuses on engaging minds through quizzes, creative activities, and interactive learning experiences that make knowledge fun and meaningful.",

    purposeTitle: "Why & Purpose of MindBloggers",
    purposeDescription:
      "MindBloggers exists to spark curiosity and encourage students to think beyond textbooks. By organizing quizzes, knowledge-based activities, and interactive challenges, the club helps students strengthen logical thinking, expand awareness, and build confidence in expressing their thoughts. It also creates a fun and engaging environment where students learn from one another and grow together. The purpose of MindBloggers is to develop sharp, informed, and expressive individuals who enjoy learning, communicate effectively, and approach challenges with clarity and creativity.",

    heroImage: "/clubs/mindbogglers/images/mindbogglerChip.jpg",
    galleryImage: "/clubs/mindbogglers/images/mindbogglerChip.jpg",
    sessionImage: "/clubs/mindbogglers/images/mindbogglerChip.jpg",
    promoVideo: "/clubs/mindboggler/video.mp4",

    tracks: [
      {
        title: "Knowledge & quiz track",
        description: "General knowledge, current affairs, logical reasoning, and themed quizzes designed to build awareness, speed, and confidence.",
      },
      {
        title: "Creative expression track",
        description: "Writing prompts, blogging, poster design, reels, and storytelling activities that help you express ideas clearly and creatively.",
      },
      {
        title: "Communication & discussion track",
        description: "Group discussions, debates, quizzes with explanation rounds, and peer feedback sessions to improve articulation and public speaking.",
      },
    ],

    whatYouDo: [
      "Participate in interactive quizzes",
      "Take part in group discussions",
      "Express ideas through creative activities",
      "Learn public speaking and articulation",
    ],

    sessions: [
      {
        title: "Interactive Quizzes",
        description: "Interactive quizzes with explanation rounds and peer feedback sessions.",
      },
      {
        title: "Group Discussions",
        description: "Group discussions and debates to improve articulation and public speaking.",
      },
      {
        title: "Quizzes with Explanation Rounds",
        description: "Quizzes with explanation rounds and peer feedback sessions.",
      },
      {
        title: "Peer Feedback Sessions",
        description: "Peer feedback sessions to improve articulation and public speaking.",
      },
    ],

    team: [
      {
        name: "Mukul",
        role: "President",
        image: "/clubs/mindbogglers/team/president.jpg",
      },

      {
        name: "Vikram Singh",
        role: "Vice President",
        image: "/clubs/mindbogglers/team/vicePresident.jpg",
      },


      {
        name: "Harshit Ramrakhyani",
        role: "General Secretary",
        image: "/clubs/mindbogglers/team/GS.jpeg",
      },
    ],

    contact: {
      linkedin: "https://www.linkedin.com/company/techtronica-society2016/",
      instagram: "https://www.instagram.com/techtronica_glau?igsh=Y244amc5ZzZmaTBw",
    },
  },



];
