//  this file no longer in production mode
//  only for reference purpose 


export interface AboutBase {
  title: string;
  tagline: string;
  description: string[];
}

export interface AboutClub extends AboutBase {
  purpose: string;
  purposeDescription: string[];
}





export const aboutSociety: AboutBase = {
  title: "Techtronica",
  tagline: "Where Ideas Flow Without Resistance",
  description: [
    "Techtronica was founded to create a dynamic, student-led environment within the Electronics Department where students can develop technical, creative, and professional skills. Through hands-on projects, workshops, technical events, and collaborative learning, the society bridges the gap between classroom concepts and real-world applications, providing exposure to industry-relevant technologies.",
    "By encouraging creativity, teamwork, leadership, and effective communication, Techtronica helps students build confidence and a strong professional foundation. Through its structured clubs and diverse initiatives, the society nurtures curiosity, promotes experimentation, and prepares students to adapt to evolving technological challenges, shaping industry-ready engineers.",
  ],
};

export const aboutGizmo: AboutClub = {
  title: "Gizmo",
  tagline: "Crank Up the Power of Resolution.",
  description: [
    "Gizmo is the robotics-focused club under Techtronia where ideas come to life through machines. The club provides students with hands-on exposure to robotics, automation, and hardware systems, allowing them to design, build, and test robots in a practical and collaborative environment.",
  ],
  purpose: "Why & Purpose of Gizmo",
  purposeDescription: [
    "Gizmo was created to help students experience the real-world application of electronics through robotics. The club encourages learning by building—working with sensors, motors, microcontrollers, and control systems. Through workshops, projects, and competitions, Gizmo helps students develop problem-solving skills, teamwork, and technical confidence. Its purpose is to nurture innovation and practical thinking while preparing students for careers in robotics, automation, and advanced hardware technologies.",
  ],
};

export const aboutTechnovation: AboutClub = {
  title: "Technovation",
  tagline: " A Step Towards Evolving Innovators",
  description: [
    "Technovation is the core technical club under Techtronica where electronics students learn by working hands-on with real tools and technologies. It offers a practical space to explore essential electronics concepts using platforms like Arduino, Cadence, and circuit design software through engaging workshops and interactive sessions.",
  ],
  purpose: "Why & Purpose of Technovation",
  purposeDescription: [
    "Technovation was created to make electronics learning more practical, engaging, and meaningful. The club helps students move beyond theory by encouraging them to experiment, build, and solve real problems. Through workshops and collaborative activities, students gain confidence with core electronics tools, strengthen their technical foundation, and develop an innovative way of thinking. The purpose of Technovation is to support electronics students in becoming skilled, curious, and industry-ready engineers who are prepared for future technologies and real-world challenges.",
  ],
};

export const aboutCodeEPhobia: AboutClub = {
  title: "Code-E-Phobia",
  tagline: "Controlling Complexity Is the Essence of Programming",
  description: [
    "Code-E-Phobia is the coding and programming club under Techtronica that helps students overcome the fear of coding and build strong computational skills. The club provides a supportive platform where students learn, practice, and grow through coding challenges, competitions, and hackathons.",
  ],
  purpose: "Why & Purpose of Code-E-Phobia",
  purposeDescription: [
    "Code-E-Phobia was created to make coding more accessible, engaging, and enjoyable for students from electronics and allied backgrounds. Through hackathons, competitive coding events, and hands-on problem-solving sessions, the club helps students strengthen logic, improve programming skills, and think analytically. Its purpose is to encourage continuous learning, foster innovation, and prepare students to confidently face technical interviews, competitions, and real-world software challenges.",
  ],
};

export const aboutMindblogger: AboutClub = {
  title: "Mindblogger",
  tagline: "The Quest for Zero Defeat",
  description: [
    "MindBloggers is the creative and knowledge-driven club under Techtronica that encourages students to think, express, and explore ideas beyond the technical space. As the name suggests, the club focuses on engaging minds through quizzes, creative activities, and interactive learning experiences that make knowledge fun and meaningful.",
  ],
  purpose: "Why & Purpose of MindBloggers",
  purposeDescription: [
    "MindBloggers exists to spark curiosity and encourage students to think beyond textbooks. By organizing quizzes, knowledge-based activities, and interactive challenges, the club helps students strengthen logical thinking, expand awareness, and build confidence in expressing their thoughts. It also creates a fun and engaging environment where students learn from one another and grow together. The purpose of MindBloggers is to develop sharp, informed, and expressive individuals who enjoy learning, communicate effectively, and approach challenges with clarity and creativity.",
  ],
};

export const aboutUnnati: AboutClub = {
  title: "Unnati",
  tagline: "Where Everyone Adapts Culture with Creativity.",
  description: [
    "Unnati is the cultural and personality development club under Techtronica society that celebrates expression, creativity, and growth. It offers students a welcoming space to showcase their talents, participate in cultural activities, and build confidence while developing essential life and interpersonal skills.",
  ],
  purpose: "Why & Purpose of Unnati",
  purposeDescription: [
    "At Unnati, we believe that learning goes beyond technical knowledge. Cultural experiences play a key role in shaping confident and capable individuals. Through events, activities, and interactive sessions, Unnati helps students strengthen communication skills, gain self-confidence, and learn the value of teamwork. The club encourages students to step out of their comfort zones, explore their abilities, and grow both personally and socially.",
    "Unnati aims to create an inclusive and energetic environment where students can grow alongside their academic journey. By organizing cultural events, competitions, and engagement activities, the club supports holistic development and helps students become confident individuals, effective communicators, and well-rounded professionals ready for the future.",
  ],
};


