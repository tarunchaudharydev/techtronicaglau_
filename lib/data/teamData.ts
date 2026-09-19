// no longer in production mode
// only for reference purpose


export type MemberCategory =
  | "core-member"
  | "Design Team"
  | "GMC"
  | "President"
  | "Vice President"
  | "General Secratory"
  | "alumni"
  | "mentor"
  | "faculty";


  export type BioParagraph = {
  text: string;
  
  bold?: boolean;
};




export interface Member {
  id: number;
  name: string;
  image: string;
  roles: string[];
  shortBio: string;
  longBio: BioParagraph[];
  categories: string[];
  linkedin?: string;
  whatsApp?: string;
  dob?: string;
  roleType: "mentor" | "team";
}


export const members: Member[] = [





   {
    id: 30,
    name: "Abhishek Sharma",
    dob: "",
    roleType: "team",
    roles: ["President", "Techtronica Society"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/abhisheksir.jpeg",
    shortBio: "President of Techtronica Society.",
    longBio: [
      { text: "I currently lead Techtronica ( Group of 5 Clubs), the technical society of ECE at GLA University, where I focus on building an environment that encourages hands-on learning, innovation, and student-driven growth in core domains like VLSI, Embedded Systems, and AI/ML.", bold: false },

      { text: "I believe that an organization grows best when it's driven by a group of committed people working together with shared vision, responsibility, and purpose. My focus has been to create such a culture within the society.", bold: false },

      { text: "Key Contributions:", bold: true },

      { text: "Built a structured team system with a Core Team and a General Members Council (GMC) to ensure smooth functioning, collaboration, and leadership development.", bold: false },

      { text: "Drafted the first official society constitution, providing a clear framework for roles, decision-making, and continuity for future batches.", bold: false },

      { text: "Initiated a Research and Patent Cell to help students explore research writing, paper publishing, and intellectual property creation.", bold: false },

      { text: "Actively connected with alumni to foster mentorship, industry insight sessions, and real-world career guidance.", bold: false },

      { text: "Ensured society efforts align with emerging tech trends and national initiatives like Atmanirbhar Bharat, especially in semiconductors and electronics.", bold: false },

      { text: "I believe in creating long-term systems, not just one-time events—and that’s what I’ve consistently worked towards with Techtronica.", bold: true },
],

    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/abhishek-sharma-19april1965",
  },

  


  




];




