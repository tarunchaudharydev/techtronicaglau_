// this file is no longer in use
//  just for reference purpose only


export interface Alumni {
  id: number;
  name: string;
  session: string;          
  roleInSociety: string;   
  club?: string;            
  image: string;            
  linkedin: string;

  currentRole: string;      
  currentCompany?: string;  
  currentLocation?: string; 

  achievements?: string[];  
  message?: string;         





export const alumni: Alumni[] = [
  {
    id: 1,
    name: "Abhirup Paul",
    session: "2017–2019",
    roleInSociety: "Founding President",
    club: "Technovation",
    image: "/ourTeam/alumni/Abhirup Paul.jpg",
    linkedin: "https://www.linkedin.com/in/abhirup-paul-a75a2b1b",

    currentRole: "SDE II",
    currentCompany: "Harman International",
    currentLocation: "India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },




];
