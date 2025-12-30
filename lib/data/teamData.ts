export type MemberCategory =
  | "core-member"
  | "GMC"
  | "President"
  | "Vice President"
  | "General Secratory"
  | "alumni"
  | "mentor"
  | "faculty";

export interface Member {
  categories: MemberCategory[];
  id: number;
  name: string;
  roles: string[];
  image: string;
  shortBio: string;
  longBio: string;
  linkedin?: string;
  whatsApp?: string;
}

export const members: Member[] = [
  {
    id: 1,
    name: "Abhishek Sharma",
    roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Abhishek Sharma.jpg",
    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Abhishek Sharma serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/abhishek-sharma-19april1965",
  },



  {
    id: 2,
    name: "Dheeraj Rajput",
    roles: ["President", "Code-E-Phobia"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Dheeraj Rajput.jpg",
    shortBio: "Supports strategy and execution.",
    longBio:
      "Dheeraj Rajput serves as the Vice President of Techtronica, translating vision into action.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/dheeraj-rajput-62ab03285",
  },



   {
    id: 3,
    name: "Aaditya Hridaya",
    roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Aaditya.jpg",
    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Aaditya Hridaya serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/aaditya-hridaya-31730630a/",
  },


   {
    id: 4,
    name: "Adamya Vishwas Sharma",
    roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Adamya Vishwas sharma.jpg",
    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Adamya Vishwas Sharma serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://linkedin.com/in/username",
  },


   {
    id: 5,
    name: "Aditya Kumar",
    roles: ["President", "Core Lead"],
    categories: ["GMC"],
    image: "/ourTeam/coreMembers/Aditya Kumar(GMC).jpg",
    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Aditya Kumar serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/aditya-kumar-061499297",
  },



   {
    id: 6,
    name: "Aman Saraswat",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/AMAN SARASHWAT.jpg",    
    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Aman Saraswat serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/aman-saraswat-22b685309",
  },



   {
    id: 7,
    name: "Ankit Rawat",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Ankit Rawat.jpg",    
    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Ankit Rawat serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/ankit-rawat-25b3b3278",
  },



   {
    id: 8,
    name: "Anshi",
     roles: ["President", "Core Lead"],
    categories: ["President"],
   image: "/ourTeam/coreMembers/Anshi.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Anshi serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/anshi-agrawal-9554ba329",
  },



   {
    id: 9,
    name: "Anshul Gupta",
     roles: ["President", "Core Lead"],
    categories: ["GMC"],
    image: "/ourTeam/coreMembers/Anshul Gupta(GMC).jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Anshul Gupta serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://linkedin.com/in/username",
  },



   {
    id: 10,
    name: "Anurag Sharma",
    roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Anurag sharma.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Anurag Sharma serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/anurag-sharma-756a713a1",
  },



   {
    id: 11,
    name: "Astitva",
    roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Astitva.jpg",    
    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Astitva serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/astitva-johri-6a2a38236",
  },



   {
    id: 12,
    name: "Avantika",
    roles: ["President", "Core Lead"],
    categories: ["President"],
   image: "/ourTeam/coreMembers/Avantika.jpg",
    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Avantika serves as the President of Techtronica, where she leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/avantika-yadav-95a9aa341",
  },



   {
    id: 13,
    name: "Ayushman",
    roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Ayushman.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Ayushman serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/",
  },



   {
    id: 14,
    name: "Ayushman Mishra",
    roles: ["President", "Core Lead"],
    categories: ["President"],
   image: "/ourTeam/coreMembers/Ayushman Mishra.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Ayushman Mishra serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/ayushman-mishra-a45676309",
  },



   {
    id: 15,
    name: "Ayushi Ricchariya",
     roles: ["President", "Core Lead"],
    categories: ["GMC"],
    image: "/ourTeam/coreMembers/Ayushi Ricchariya.jpg",    
    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Ayushi Ricchariya serves as the President of Techtronica, where she leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/ayushi-richhariya-96a268306",
  },




   {
    id: 16,
    name: "Bhumika",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Bhumika kumari.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Bhumika serves as the President of Techtronica, where she leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/bhumika-kumari-4a6050386",
  },



   {
    id: 17,
    name: "Brijesh",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Brijesh.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Brijesh serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/brijesh-maurya-794015283",
  },


   {
    id: 18,
    name: "Charvi Vijay",
     roles: ["President", "Core Lead"],
    categories: ["GMC"],
    image: "/ourTeam/coreMembers/Charvi vijay(GMC).jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Charvi Vijay serves as the President of Techtronica, where she leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/charvi-vijay-644446303",
  },



   {
    id: 19,
    name: "Devang Shukla",
     roles: ["President", "Core Lead"],
    categories: ["GMC"],
   image: "/ourTeam/coreMembers/Devang Shukla(GMC).jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Devang Shukla serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/devang-shukla-3a19a629a",
  },



   {
    id: 20,
    name: "Dheeraj",
     roles: ["President", "Core Lead"],
    categories: ["President"],
   image: "/ourTeam/coreMembers/designAndMediaHead.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Dheeraj serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/dheeraj-rajput-62ab03285",
  },



   {
    id: 21,
    name: "Gargi pal",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Gargi pal.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Gargi Pal serves as the President of Techtronica, where she leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/gargi-pal-366112349",
  },



   {
    id: 22,
    name: "HARSH SHARMA",
     roles: ["President", "Core Lead"],
    categories: ["GMC"],
    image: "/ourTeam/coreMembers/Harsh.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Harsh Sharma serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/harsh-sharma-343999290",
  },



   {
    id: 23,
    name: "Harshit Ramrakhiyan",
     roles: ["President", "Core Lead"],
    categories: ["GMC"],
    image: "/ourTeam/coreMembers/Harshit Ramrakhiyan.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Harshit Ramrakhiyan serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/tushar-sharma-009860359",
  },



   {
    id: 24,
    name: "Harshit Tiwari",
     roles: ["President", "Core Lead"],
    categories: ["President"],
   image: "/ourTeam/coreMembers/Harshit.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Harshit Tiwari serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/harshit-tiwari-690420322",
  },


   {
    id: 25,
    name: "Jeet Sinha",
     roles: ["President", "Core Lead"],
    categories: ["GMC"],
    image: "/ourTeam/coreMembers/Jeet Sinha.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Jeet Sinha serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/jeet-sinha-747778324",
  },



   {
    id: 26,
    name: "Krishna Gupta",
     roles: ["President", "Core Lead"],
    categories: ["GMC"],
    image: "/ourTeam/coreMembers/Krishna Gupta(GMC).jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Krishna Gupta serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/krishna-gupta001",
  },



   {
    id: 27,
    name: "Mukul",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Mukul.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Mukul serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://linkedin.com/in/username",
  },


   {
    id: 28,
    name: "Muskan Singh",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Muskan.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Muskan Singh serves as the President of Techtronica, where she leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/muskan-singh-454405314",
  },



   {
    id: 29,
    name: "Nandini Agarwal",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Nandini.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Nandini Agarwal serves as the President of Techtronica, where she leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/nandini-agarwal-106668249",
  },



   {
    id: 30,
    name: "Narayan",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Narayan.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Narayan serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://linkedin.com/in/username",
  },




   {
    id: 31,
    name: "Nitin Singh",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Nitin.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Nitin Singh serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/nitin-singh-60895737b",
  },



   {
    id: 32,
    name: "Piyush",
    roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Pyush.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Piyush serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://linkedin.com/in/username",
  },




   {
    id: 33,
    name: "Ridhima",
    roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Ridhima.jpeg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Ridhima serves as the President of Techtronica, where she leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/ridhima-srivastava-3740b4314",
  },




   {
    id: 34,
    name: "Sameeraj",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Sameeraj.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Sameeraj serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/sameeraj-bard1",
  },




   {
    id: 35,
    name: "Samriddhi",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Samriddhi Gaur.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Samriddhi serves as the President of Techtronica, where she leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/samriddhi-gaur-775bb8358",
  },



   {
    id: 36,
    name: "Shourya Pratap Singh",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Shourya Pratap Singh.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Shourya Pratap Singh serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/shourya-pratap-singh-1a52952b3",
  },



   {
    id: 37,
    name: "Stuti Shukla",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Stuti Shukla.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Stuti Shukla serves as the President of Techtronica, where she leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/stuti-shukla17",
  },




   {
    id: 38,
    name: "Tarun",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Tarun.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Tarun serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/tarun-kumar-338aa7341",
  },




   {
    id: 39,
    name: "Tushar Sharma",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Tushar.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Tushar Sharma serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/tushar-sharma-009860359",
  },



   {
    id: 40,
    name: "Utkarsh Saxena",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Utkarsh.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Utkarsh Saxena serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/utkarsh-saxena-3b0314222",
  },



   {
    id: 41,
    name: "Utkarsh Singhal",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Utkarsh.jpeg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Utkarsh Singhal serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/utkarsh-singhal-b89b55343",
  },



   {
    id: 42,
    name: "Vaibhav Jain",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Vaibhav jain.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Vaibhav Jain serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/vaibhav-jain-0aa1a1383",
  },



   {
    id: 43,
    name: "Vaibhav kaushik",
     roles: ["President", "Core Lead"],
    categories: ["President"],
   image: "/ourTeam/coreMembers/Vaibhav kaushik.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Vaibhav Kaushik serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/vaibhav-kaushik-5a55943a3",
  },



   {
    id: 44,
    name: "Vikram Singh",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Vikram Singh.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Vikram Singh serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/vikram-singh-b8a0631b8",
  },



   {
    id: 45,
    name: "Vinayak Mishra",
     roles: ["President", "Core Lead"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Vinayak Mishra.jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Vinayak Mishra serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/vinayak-mishra-b31a72298",
  },



   {
    id: 46,
    name: "Yogesh",
     roles: ["Core Lead"],
    categories: ["GMC"],
    image: "/ourTeam/coreMembers/Yogesh(GMC).jpg",    shortBio: "Leads Techtronica and core club initiatives.",
    longBio:
      "Yogesh serves as the President of Techtronica, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/yogeshupadhyay0775",
  },



   



  
 
  



];
