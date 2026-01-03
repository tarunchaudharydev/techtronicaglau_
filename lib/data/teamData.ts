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
    name: "Dheeraj Rajput",
    roles: ["President", "Techtronica Society,Code-e-phobia"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Dheeraj Rajput.jpg",
    shortBio: "Supports strategy and execution.",
    longBio:
      "Dheeraj Rajput serves as the President of Techtronica Society Society and Code-e-phobia Club, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/dheeraj-rajput-62ab03285",
  },


   {
    id: 2,
    name: "Astitva",
    roles: ["Vice President", "Techtronica Society,Unnati"],
    categories: ["Vice President"],
    image: "/ourTeam/coreMembers/Astitva.jpg",    
    shortBio: "Leads Techtronica Society and Unnati and core club initiatives.",
    longBio:
      "Astitva serves as the Vice President of Techtronica Society Society and President ofUnnati Club, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/astitva-johri-6a2a38236",
  },


  {
    id: 3,
    name: "Harshit Tiwari",
     roles: ["General Secratory", "Techtronica Society"],
    categories: ["General Secratory"],
   image: "/ourTeam/coreMembers/Harsh.jpg",    
   shortBio: "Leads Techtronica Society and core club initiatives.",
    longBio:
      "Harshit Tiwari serves as the General Secratory of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/harshit-tiwari-690420322",
  },


  
   {
    id: 4,
    name: "Brijesh Maurya",
     roles: ["President", "Code-e-phobia"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Brijesh.jpg",    
    shortBio: "Leads Code-e-phobia and core club initiatives.",
    longBio:
      "Brijesh serves as the President of Code-e-phobia, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/brijesh-maurya-794015283",
  },




  {
    id: 5,
    name: "Tushar Sharma",
     roles: ["Vice President", "Code-e-phobia"],
    categories: ["Vice President"],
    image: "/ourTeam/coreMembers/Tushar.jpg",    
    shortBio: "Leads Code-e-phobia and core club initiatives.",
    longBio:
      "Tushar Sharma serves as the Vice President of Code-e-phobia, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/tushar-sharma-009860359",
  },



  {
    id: 6,
    name: "Utkarsh Singhal",
     roles: ["General Secratory", "Code-e-phobia"],
    categories: ["General Secratory"],
    image: "/ourTeam/coreMembers/Utkarsh.jpeg",    shortBio: "Leads Code-e-phobia and core club initiatives.",
    longBio:
      "Utkarsh Singhal serves as the General Secratory of Code-e-phobia, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/utkarsh-singhal-b89b55343",
  },


  {
    id: 7,
    name: "Nandini Agarwal",
     roles: ["Vice President", "Unnati"],
    categories: ["Vice President"],
    image: "/ourTeam/coreMembers/Nandini.jpg",    shortBio: "Leads Unnati and core club initiatives.",
    longBio:
      "Nandini Agarwal serves as the Vice President of Unnati, where she leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/nandini-agarwal-106668249",
  },


    {
    id: 8,
    name: "Ridhima Srivastava",
    roles: ["General Secratory", "Unnati"],
    categories: ["General Secratory"],
    image: "/ourTeam/coreMembers/Ridhima.jpeg",    shortBio: "Leads Unnati and core club initiatives.",
    longBio:
      "Ridhima serves as the General Secratory of Unnati, where she leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/ridhima-srivastava-3740b4314",
  },



   {
    id: 9,
    name: "Puspendra",
    roles: ["President", "Gizmo"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Pyush.jpg",    shortBio: "Leads Gizmo and core club initiatives.",
    longBio:
      "Puspendra serves as the President of Gizmo, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://linkedin.com/in/username",
  },



  {
    id: 10,
    name: "Vaibhav Jain",
     roles: ["Vice President", "Gizmo"],
    categories: ["Vice President"],
    image: "/ourTeam/coreMembers/Vaibhav jain.jpg",    shortBio: "Leads Gizmo and core club initiatives.",
    longBio:
      "Vaibhav Jain serves as the Vice President of Gizmo, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/vaibhav-jain-0aa1a1383",
  },


  {
    id: 11,
    name: "Avantika",
    roles: ["General Secratory", "Gizmo"],
    categories: ["General Secratory"],
   image: "/clubs/gizmo/team/GS.jpeg",
    shortBio: "Leads Gizmo and core club initiatives.",
    longBio:
      "Avantika serves as the General Secratory of Gizmo, where she leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/avantika-yadav-95a9aa341",
  },

  {
    id: 12,
    name: "Mukul",
     roles: ["President", "Mindboggler"],
    categories: ["President"],
    image: "/ourTeam/coreMembers/Mukul.jpg",    shortBio: "Leads Mindboggler and core club initiatives.",
    longBio:
      "Mukul serves as the President of Mindboggler, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://linkedin.com/in/username",
  },


  {
    id: 13,
    name: "Vikram Singh",
     roles: ["Vice President", "Mindboggler"],
    categories: ["Vice President"],
    image: "/ourTeam/coreMembers/Vikram Singh.jpg",    shortBio: "Leads Mindboggler and core club initiatives.",
    longBio:
      "Vikram Singh serves as the Vice President of Mindboggler, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/vikram-singh-b8a0631b8",
  },

  {
    id: 14,
    name: "Harshit Ramrakhiyani",
     roles: ["General Secratory", "Mindboggler"],
    categories: ["General Secratory"],
    image: "/ourTeam/coreMembers/harshit ramrakhyani.jpg",    shortBio: "Leads Mindboggler and core club initiatives.",
    longBio:
      "Harshit Ramrakhiyan serves as the General Secratory of Mindboggler, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/tushar-sharma-009860359",
  },

  
   {
    id: 15,
    name: "Utkarsh Saxena",
     roles: ["Vice President", "Code-e-phobia"],
    categories: ["Vice President"],
    image: "/ourTeam/coreMembers/Utkarsh.jpg",    shortBio: "Leads Code-e-phobia and core club initiatives.",
    longBio:
      "Utkarsh Saxena serves as the Vice President of Code-e-phobia, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/utkarsh-saxena-3b0314222",
  },


  {
    id: 16,
    name: "Samriddhi Gaur",
     roles: ["General Secratory", "Code-e-phobia"],
    categories: ["General Secratory"],
    image: "/ourTeam/coreMembers/Samriddhi Gaur.jpg",    shortBio: "Leads Code-e-phobia and core club initiatives.",
    longBio:
      "Samriddhi serves as the General Secratory of Code-e-phobia, where she leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/samriddhi-gaur-775bb8358",
  },


  {
    id: 17,
    name: "Jeet Sinha",
     roles: ["Core Member"],
    categories: ["core-member"],
    image: "/ourTeam/coreMembers/Jeet Sinha.jpg",    
    shortBio: "Core Member of Techtronica Society.",
    longBio:
      "Jeet Sinha is a Core Member of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/jeet-sinha-747778324",
  },

  {
    id: 18,
    name: "Stuti Shukla",
     roles: ["Core Member"],
    categories: ["core-member"],
    image: "/ourTeam/coreMembers/Stuti Shukla.jpg",    shortBio: "Core Member of Techtronica Society.",
    longBio:
      "Stuti Shukla is a Core Member of Techtronica Society, where she leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/stuti-shukla17",
  },

  {
    id: 19,
    name: "Muskan Singh",
     roles: ["Core Member"],
    categories: ["core-member"],
    image: "/ourTeam/coreMembers/Muskan.jpg",    shortBio: "Core Member of Techtronica Society.",
    longBio:
      "Muskan Singh is a Core Member of Techtronica Society, where she leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/muskan-singh-454405314",
  },

   {
    id: 20,
    name: "Anshi",
     roles: ["Core Member"],
    categories: ["core-member"],
   image: "/ourTeam/coreMembers/user3.jpg",    shortBio: "Core Member of Techtronica Society.",
    longBio:
      "Anshi serves is a Core Member of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/anshi-agrawal-9554ba329",
  },

  {
    id: 21,
    name: "Gargi pal",
     roles: ["Core"],
    categories: ["core-member"],
    image: "/ourTeam/coreMembers/Gargi pal.jpg",    shortBio: "Core Member of Techtronica Society.",
    longBio:
      "Gargi Pal is a Core Member of Techtronica Society, where she leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/gargi-pal-366112349",
  },

  {
    id: 22,
    name: "Vinayak Mishra",
     roles: ["Core Member"],
    categories: ["core-member"],
    image: "/ourTeam/coreMembers/Vinayak Mishra.jpg",    shortBio: "Core Member of Techtronica Society.",
    longBio:
      "Vinayak Mishra is a Core Member of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/vinayak-mishra-b31a72298",
  },

  {
    id: 23,
    name: "Tarun",
     roles: ["Core Member"],
    categories: ["core-member"],
    image: "/ourTeam/coreMembers/user11.jpg",    shortBio: "Core Member of Techtronica Society.",
    longBio:
      "Tarun is a Core Member of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/tarun-kumar-338aa7341",
  },

   {
    id: 24,
    name: "Nitin Singh",
     roles: ["Core Member"],
    categories: ["core-member"],
    image: "/ourTeam/coreMembers/Nitin Singh.jpg",    shortBio: "Core Member of Techtronica Society.",
    longBio:
      "Nitin Singh is a Core Member of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/nitin-singh-60895737b",
  },


  {
    id: 25,
    name: "Bhumika",
     roles: ["Core Member"],
    categories: ["core-member"],
    image: "/ourTeam/coreMembers/Bhumika kumari.jpg",    shortBio: "Core Member of Techtronica Society.",
    longBio:
      "Bhumika is a Core Member of Techtronica Society, where she leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/bhumika-kumari-4a6050386",
  },

   {
    id: 26,
    name: "Adamya Vishwas Sharma",
    roles: ["Core Member"],
    categories: ["core-member"],
    image: "/ourTeam/coreMembers/Adamya Vishwas sharma.jpg",
    shortBio: "Core Member of Techtronica Society.",
    longBio:
      "Adamya Vishwas Sharma serves as the Core Member of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://linkedin.com/in/username",
  },

  {
    id: 27,
    name: "Narayan",
     roles: ["Core Member"],
    categories: ["core-member"],
    image: "/ourTeam/coreMembers/Narayan.jpg",    shortBio: "Core Member of Techtronica Society.",
    longBio:
      "Narayan is a Core Member of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://linkedin.com/in/username",
  },


  {
    id: 28,
    name: "Aman Saraswat",
     roles: ["Core Member"],
    categories: ["core-member"],
    image: "/ourTeam/coreMembers/AMAN SARASHWAT.jpg",    
    shortBio: "Core Member of Techtronica Society.",
    longBio:
      "Aman Saraswat is a Core Member of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/aman-saraswat-22b685309",
  },


  {
    id: 29,
    name: "Anurag Sharma",
    roles: [ "Core Member"],
    categories: ["core-member"],
    image: "/ourTeam/coreMembers/Anurag sharma.jpg",    shortBio: "Core Member of Techtronica Society.",
    longBio:
      "Anurag Sharma is a Core Member of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/anurag-sharma-756a713a1",
  },



























  {
    id: 30,
    name: "Abhishek Sharma",
    roles: ["Core Member"],
    categories: ["core-member"],
    image: "/ourTeam/coreMembers/Abhishek Sharma.jpg",
    shortBio: "Core Member of Techtronica Society Society.",
    longBio:
      "Abhishek Sharma serves as the Core Member of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/abhishek-sharma-19april1965",
  },

  






  

 



  




  




   


   {
    id: 31,
    name: "Ankit Rawat",
     roles: ["Core Member"],
    categories: ["core-member"],
    image: "/ourTeam/coreMembers/ankit rawat.jpeg",    
    shortBio: "Core Member of Techtronica Society.",
    longBio:
      "Ankit Rawat is a Core Member of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/ankit-rawat-25b3b3278",
  },



  


 

   



  



   



   {
    id: 32,
    name: "Ayushman",
    roles: ["Core Member"],
    categories: ["core-member"],
    image: "/ourTeam/coreMembers/user4.jpg",    shortBio: "Core Member of Techtronica Society.",
    longBio:
      "Ayushman is a Core Member of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/",
  },



   {
    id: 33,
    name: "Ayushman Mishra",
    roles: ["Core Member"],
    categories: ["core-member"],
   image: "/ourTeam/coreMembers/Ayushman Mishra.jpg",    shortBio: "Core Member of Techtronica Society.",
    longBio:
      "Ayushman Mishra is a Core Member of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/ayushman-mishra-a45676309",
  },



   {
    id: 34,
    name: "Ayushi Ricchariya",
     roles: ["Core Member"],
    categories: ["core-member"],
    image: "/ourTeam/coreMembers/ayushi.jpeg",    
    shortBio: "Core Member of Techtronica Society.",
    longBio:
      "Ayushi Ricchariya is a Core Member of Techtronica Society, where she leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/ayushi-richhariya-96a268306",
  },




   



  


   


   


  //  {
  //   id: 35,
  //   name: "Dheeraj Rajput",
  //    roles: ["Core Member"],
  //   categories: ["core-member"],
  //  image: "/ourTeam/coreMembers/designAndMediaHead.jpg",    shortBio: "Core Member of Techtronica Society.",
  //   longBio:
  //     "Dheeraj Rajput is a Core Member of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
  //   whatsApp: "wa.me/+910000000000",
  //   linkedin: "https://www.linkedin.com/in/dheeraj-rajput-62ab03285",
  // },



   



 

   



   


   


   



   

   



   



   


  

  



 




   




   


   


   



   



   





   



   



   {
    id: 36,
    name: "Vaibhav kaushik",
     roles: ["Core Member"],
    categories: ["core-member"],
   image: "/ourTeam/coreMembers/Vaibhav kaushik.jpg",    shortBio: "Core Member of Techtronica Society.",
    longBio:
      "Vaibhav Kaushik is a Core Member of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/vaibhav-kaushik-5a55943a3",
  },






























   {
    id: 37,
    name: "Aaditya Hridaya",
    roles: ["General member council"],
    categories: ["GMC"],
    image: "/ourTeam/coreMembers/user1.jpg",
    shortBio: "General member council of Techtronica Society.",
    longBio:
      "Aaditya Hridaya serves as the General member council of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/aaditya-hridaya-31730630a/",
  },
  
   {
    id: 38,
    name: "Aditya Kumar",
    roles: ["General member council"],
    categories: ["GMC"],
    image: "/ourTeam/coreMembers/Aditya Kumar(GMC).jpg",
    shortBio: "General member council of Techtronica Society.",
    longBio:
      "Aditya Kumar serves as the General member council of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/aditya-kumar-061499297",
  },

    {
    id: 39,
    name: "Anshul Gupta",
     roles: ["General member council"],
    categories: ["GMC"],
    image: "/ourTeam/coreMembers/Anshul Gupta(GMC).jpg",    shortBio: "General member council of Techtronica Society.",
    longBio:
      "Anshul Gupta serves as the General member council of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://linkedin.com/in/username",
  },

  {
    id: 40,
    name: "Charvi Vijay",
     roles: ["General member council"],
    categories: ["GMC"],
    image: "/ourTeam/coreMembers/Charvi vijay(GMC).jpg",    shortBio: "General member council of Techtronica Society.",
    longBio:
      "Charvi Vijay serves as the General member council of Techtronica Society, where she leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/charvi-vijay-644446303",
  },

  {
    id: 41,
    name: "Devang Shukla",
     roles: ["General member council"],
    categories: ["GMC"],
   image: "/ourTeam/coreMembers/Devang Shukla(GMC).jpg",    shortBio: "General member council of Techtronica Society.",
    longBio:
      "Devang Shukla serves as the General member council of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/devang-shukla-3a19a629a",
  },


    {
    id: 42,
    name: "HARSH SHARMA",
     roles: ["General member council"],
    categories: ["GMC"],
    image: "/ourTeam/coreMembers/Harsh.jpg",    shortBio: "General member council of Techtronica Society.",
    longBio:
      "Harsh Sharma serves as the General member council of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/harsh-sharma-343999290",
  },



  {
    id: 43,
    name: "Krishna Gupta",
     roles: ["General member council"],
    categories: ["GMC"],
    image: "/ourTeam/coreMembers/Krishna Gupta(GMC).jpg",    shortBio: "General member council of Techtronica Society.",
    longBio:
      "Krishna Gupta serves as the General member council of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/krishna-gupta001",
  },
  {
    id: 44,
    name: "Sameeraj",
     roles: ["General member council"],
    categories: ["GMC"],
    image: "/ourTeam/coreMembers/user9.jpg",    shortBio: "General member council of Techtronica Society.",
    longBio:
      "Sameeraj serves as the General member council of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/sameeraj-bard1",
  },

  {
    id: 45,
    name: "Shourya Pratap Singh",
     roles: ["General member council"],
    categories: ["GMC"],
    image: "/ourTeam/coreMembers/user10.jpg",    shortBio: "General member council of Techtronica Society.",
    longBio:
      "Shourya Pratap Singh serves as the General member council of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/shourya-pratap-singh-1a52952b3",
  },

    {
    id: 46,
    name: "Yogesh",
     roles: ["General member council"],
    categories: ["GMC"],
    image: "/ourTeam/coreMembers/Yogesh(GMC).jpg",    shortBio: "General member council of Techtronica Society.",
    longBio:
      "Yogesh serves as the General member council of Techtronica Society, where he leads the society’s vision, strategy, and overall direction with a strong focus on innovation, collaboration, and student growth.",
    whatsApp: "wa.me/+910000000000",
    linkedin: "https://www.linkedin.com/in/yogeshupadhyay0775",
  },
















   



   


 


   



  
 
  



];
