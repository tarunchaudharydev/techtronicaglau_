export interface Alumni {
  id: number;
  name: string;
  session: string;          
  roleInSociety: string;    // e.g. "President", "Core Member"
  club?: string;            // e.g. "Technovation"
  image: string;            // profile photo
  linkedin: string;

  currentRole: string;      // e.g. "Software Engineer"
  currentCompany?: string;  // e.g. "Infosys"
  currentLocation?: string; // e.g. "Bangalore, India"

  achievements?: string[];  // optional highlights
  message?: string;         // optional message to juniors
}





export const alumni: Alumni[] = [
  {
    id: 1,
    name: "Abhirup Paul",
    session: "2017–2019",
    roleInSociety: "Founding President",
    club: "Technovation",
    image: "/ourTeam/alumni/Abhirup Paul.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

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



  {
    id: 2,
    name: "Mahima Goswami",
    session: "2017–2019",
    roleInSociety: "Vice President",
    club: "Technovation",
    image: "/ourTeam/alumni/Mahima Goswami.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "2nd Line Data Engineer",
    currentCompany: "BT Group",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },



  {
    id: 3,
    name: "Shubham pandey",
    session: "2017–2019",
    roleInSociety: "Vice President",
    club: "Technovation",
    image: "/ourTeam/alumni/Shubham Pandey.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Flying Officer",
    currentCompany: "Indian Airforce",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },






  {
    id: 4,
    name: "Juhi Sharma",
    session: "2017–2019",
    roleInSociety: "Lead for Unnati & MindBoggler",
    club: "Technovation",
    image: "/ourTeam/alumni/Juhi Sharma.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Project Engineer",
    currentCompany: "Wipro",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },







  {
    id: 5,
    name: "Arunima Saxena",
    session: "2017–2019",
    roleInSociety: "Associate head for Unnati",
    club: "Technovation",
    image: "/ourTeam/alumni/Arunima Saxena.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Lead Cyber Risk Analyst",
    currentCompany: "UKG",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },








  {
    id: 6,
    name: "Sumukh Shukla",
    session: "2017–2019",
    roleInSociety: "Associate head for software",
    club: "Technovation",
    image: "/ourTeam/alumni/Sumukh Shukla.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Associate Manager Automation",
    currentCompany: "LBPL",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },






  {
    id: 7,
    name: "Abhay Kulshrestha",
    session: "2017–2019",
    roleInSociety: "Gizo & Codephobia Club",
    club: "Technovation",
    image: "/ourTeam/alumni/Abhay Kulshrestha.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Senior Software Developer",
    currentCompany: "Tech Mahindra",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },









  {
    id: 8,
    name: "Shrey Pandey",
    session: "2019–2020",
    roleInSociety: "Society President",
    club: "Technovation",
    image: "/ourTeam/alumni/Shrey Pandey.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Software Engineer",
    currentCompany: " Bosch Global Software Technology",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },










  {
    id: 9,
    name: "Ankit Bansal",
    session: "2019–2020",
    roleInSociety: "Head Coordinator",
    club: "Technovation",
    image: "/ourTeam/alumni/Ankit Bansal.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Associate Software Engineer",
    currentCompany: "TCS",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },











  {
    id: 10,
    name: "Saurabh Gaur",
    session: "2019–2020",
    roleInSociety: "Society Vice-President ",
    club: "Technovation",
    image: "/ourTeam/alumni/Saurabh Gaur.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Network Engineer",
    currentCompany: "HCLTech",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },








  {
    id: 11,
    name: "Surabhi Tripathi",
    session: "2019–2020",
    roleInSociety: "Head Coordinator ",
    club: "Technovation",
    image: "/ourTeam/alumni/Surabhi Tripathi.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Connectivity Engineer ",
    currentCompany: "Opensystems",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },












  {
    id: 12,
    name: "Ankit Tiwari",
    session: "2019–2020",
    roleInSociety: "Head Coordinator ",
    club: "Technovation",
    image: "/ourTeam/alumni/Ankit Tiwari.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: " Data Scientist",
    currentCompany: "Encore capital Group",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },









  {
    id: 13,
    name: "Vivek kumar singh",
    session: "2019–2020",
    roleInSociety: "Head Coordinator",
    club: "Technovation",
    image: "/ourTeam/alumni/Vivek kumar singh.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Analyst",
    currentCompany: "Accenture",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },











  {
    id: 14,
    name: "Rohit Yadav",
    session: "2019–2020",
    roleInSociety: "Head Coordinator",
    club: "Technovation",
    image: "/ourTeam/alumni/Rohit Yadav.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Senior NOC engineer",
    currentCompany: " Orange Business Services",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },











  {
    id: 15,
    name: "Rohit Tiwari",
    session: "2019–2020",
    roleInSociety: "Head Coordinator",
    club: "Technovation",
    image: "/ourTeam/alumni/Rohit Tiwari.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Junior Asscoiate",
    currentCompany: "SBI",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },










  {
    id: 16,
    name: "Priyansh Srivastava",
    session: "2020–2021",
    roleInSociety: "Society President",
    club: "Technovation",
    image: "/ourTeam/alumni/Priyansh Srivastava.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Senior Analys",
    currentCompany: " Cardinal Health",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },













  {
    id: 17,
    name: "Hitesh Kukreja",
    session: "2020–2021",
    roleInSociety: "Society Vice President",
    club: "Technovation",
    image: "/ourTeam/alumni/Hitesh Kukreja.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: " L2 network Engineer",
    currentCompany: " Sify Technologies Limited",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },









  {
    id: 18,
    name: "Amit Tiwari",
    session: "2020–2021",
    roleInSociety: "Head Coordinator",
    club: "Technovation",
    image: "/ourTeam/alumni/Amit Tiwari.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Embedded Software Developer",
    currentCompany: "VVDN",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },













  {
    id: 19,
    name: "Chesta Saxena",
    session: "2020–2021",
    roleInSociety: "Head Coordinator",
    club: "Technovation",
    image: "/ourTeam/alumni/Chesta Saxena.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Application Development Analyst",
    currentCompany: "Accenture",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },









  {
    id: 20,
    name: "Utkarsh Khanna",
    session: "2020–2021",
    roleInSociety: "Head Coordinator",
    club: "Technovation",
    image: "/ourTeam/alumni/Utkarsh Khanna.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Business Intelligence Consultant",
    currentCompany: "Congizant",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },









  {
    id: 21,
    name: "Lata Bhatt",
    session: "2020–2021",
    roleInSociety: "Head Coordinator ",
    club: "Technovation",
    image: "/ourTeam/alumni/Lata Bhatt.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "SAP ABAP Consultant",
    currentCompany: " Deloitte USI",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },











  {
    id: 22,
    name: "Saurabh Tripathi",
    session: "2020–2021",
    roleInSociety: "Head Coordinator",
    club: "Technovation",
    image: "/ourTeam/alumni/Saurabh Tripathi.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Asscoiate",
    currentCompany: " Congizant",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },










  {
    id: 23,
    name: "Rupesh Raj Jaiswal ",
    session: "2020–2021",
    roleInSociety: "Head Coordinator",
    club: "Technovation",
    image: "/ourTeam/alumni/Rupesh Raj Jaiswal.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Office Manager",
    currentCompany: " PubMatic India Pvt Ltd",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },















  {
    id: 24,
    name: "Vikram Dubey",
    session: "2020–2021",
    roleInSociety: "Head Coordinator",
    club: "Technovation",
    image: "/ourTeam/alumni/Vikram Dubey.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "SRE",
    currentCompany: "BT",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },















  {
    id: 25,
    name: "Anant Gupta",
    session: "2021–2022",
    roleInSociety: "Society President",
    club: "Technovation",
    image: "/ourTeam/alumni/Anant Gupta.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Application Development Associate",
    currentCompany: " Accenture",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },

















  {
    id: 26,
    name: "Komal Chhangani",
    session: "2021–2022",
    roleInSociety: "Head Coordinator",
    club: "Technovation",
    image: "/ourTeam/alumni/Komal Chhangani.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Product Analyst",
    currentCompany: " Accenture",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },















  {
    id: 27,
    name: "Shashank Yadav",
    session: "2021–2022",
    roleInSociety: "Head Coordinator ",
    club: "Technovation",
    image: "/ourTeam/alumni/Shashank Yadav.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Application Development Associate",
    currentCompany: " Accenture",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },










  {
    id: 28,
    name: "Shraddha Singh",
    session: "2021–2022",
    roleInSociety: "Head Coordinator",
    club: "Technovation",
   image: "/ourTeam/alumni/Shraddha Singh.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Embedded software engineer",
    currentCompany: "VVDN",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },













  {
    id: 29,
    name: "Priyanshi Bansal",
    session: "2021–2022",
    roleInSociety: "Head Coordinator",
    club: "Technovation",
    image: "/ourTeam/alumni/Priyanshi Bansal.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Embedded Software Engineer",
    currentCompany: "Silicon Labs",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },















  {
    id: 30,
    name: "Ishan Sakhuja",
    session: "2021–2022",
    roleInSociety: "Head Coordinator",
    club: "Technovation",
    image: "/ourTeam/alumni/Ishan Sakhuja.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Application Development Analyst",
    currentCompany: "Accenture",
    currentLocation: "Pune, India",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },


















  {
    id: 31,
    name: "Dev Nohwar",
    session: "2021–2022",
    roleInSociety: "Head Coordinator",
    club: "Technovation",
    image: "/ourTeam/alumni/Dev Nohwar.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: " Data Analytics Engineer",
    currentCompany: "TechstyleOS",
    currentLocation: "US",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },








  {
    id: 32,
    name: "Salil Dixit",
    session: "2022-2023",
    roleInSociety: "Society President",
    club: "Technovation",
    image: "/ourTeam/alumni/Salil Dixit.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Embedded Enginee",
    currentCompany: "AgVa Healthcare",
    currentLocation: "US",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },








  {
    id: 33,
    name: "Rohit Tiwari",
    session: "2022–2023",
    roleInSociety: "Society Vice President",
    club: "Technovation",
    image: "/ourTeam/alumni/Rohit Tiwari.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Senior Design Engineer",
    currentCompany: " UNO MINDA",
    currentLocation: "US",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },














  {
    id: 34,
    name: "Shruti Gupta",
    session: "2022–2023",
    roleInSociety: "Head Coordinator",
    club: "Technovation",
    image: "/ourTeam/alumni/Shruti Gupta.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Senior Application Engineer",
    currentCompany: " Synopsys Inc.",
    currentLocation: "US",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },















  {
    id: 35,
    name: "Gaurangna Singh",
    session: "2022–2023",
    roleInSociety: "Head Coordinator",
    club: "Technovation",
    image: "/ourTeam/alumni/Gaurangna Singh.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Engineer",
    currentCompany: "Orange Business",
    currentLocation: "US",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },












  {
    id: 36,
    name: "Hritik Mittal",
    session: "2022–2023",
    roleInSociety: "Head Coordinator",
    club: "Technovation",
    image: "/ourTeam/alumni/Hritik Mittal.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Growth & Digital Strategy",
    currentCompany: "noon Food",
    currentLocation: "US",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },

















  {
    id: 37,
    name: "Shubham Yadav",
    session: "2023–2024",
    roleInSociety: "Society President",
    club: "Technovation",
    image: "/ourTeam/alumni/Shubham Yadav.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Embedded Software Developer",
    currentCompany: "Surfytech",
    currentLocation: "US",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },












  {
    id: 38,
    name: "Shikhar Agarwal",
    session: "2023–2024",
    roleInSociety: "Society Vice President",
    club: "Technovation",
    image: "/ourTeam/alumni/Shikhar Agarwal.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Operational Specialist",
    currentCompany: " Xelec",
    currentLocation: "US",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },











  {
    id: 39,
    name: "Vaishali Verma",
    session: "2023–2024",
    roleInSociety: "Club President ",
    club: "Technovation",
    image: "/ourTeam/alumni/Vaishali Verma.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Engineer Trainee",
    currentCompany: " Sify Technologies Ltd",
    currentLocation: "US",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },












  {
    id: 40,
    name: "Aditya Narayan",
    session: "2023–2024",
    roleInSociety: "Club President",
    club: "Technovation",
    image: "/ourTeam/alumni/Aditya Narayan.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "AV Presales Engineer",
    currentCompany: " Oxford Integration India",
    currentLocation: "US",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },












  {
    id: 41,
    name: "Chirag Saxena",
    session: "2023–2024",
    roleInSociety: "Club President",
    club: "Technovation",
    image: "/ourTeam/alumni/Chirag Saxena.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Executive ORM",
    currentCompany: " Netimpact Solutions Private Limited",
    currentLocation: "US",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },


















  {
    id: 42,
    name: "Diksha Gupta",
    session: "2024–2025",
    roleInSociety: "Society President",
    club: "Technovation",
    image: "/ourTeam/alumni/Diksha Gupta.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Graduate Engineer Trainee",
    currentCompany: "UNO MINDA",
    currentLocation: "US",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },
















  {
    id: 43,
    name: "Ritik Pal",
    session: "2024–2025",
    roleInSociety: "Society Vice - President",
    club: "Technovation",
    image: "/ourTeam/alumni/Ritik Pal.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "___",
    currentCompany: "___",
    currentLocation: "__",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },












  {
    id: 44,
    name: "Srijita Srivastava",
    session: "2021–2022",
    roleInSociety: "Society Vice - President",
    club: "Technovation",
    image: "/ourTeam/alumni/Srijita Srivastava.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Graduate Engineer Trainee",
    currentCompany: "UNO MINDA",
    currentLocation: "US",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },





















  {
    id: 45,
    name: "Anubhav Srivastava",
    session: "2024–2025",
    roleInSociety: "Club President",
    club: "Technovation",
    image: "/ourTeam/alumni/Anubhav Srivastava.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Audio Video Design Engineer",
    currentCompany: " Havi Design India Llp",
    currentLocation: "US",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },













  {
    id: 46,
    name: "Anjali Baghel",
    session: "2024–2025",
    roleInSociety: "Club President",
    club: "Technovation",
    image: "/ourTeam/alumni/Anjali Baghel.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "Graduate Engineer Trainee",
    currentCompany: "Amber Enterprises India Ltd",
    currentLocation: "US",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },












  {
    id: 47,
    name: "Harsh Misra",
    session: "2041–2025",
    roleInSociety: "Club President",
    club: "Technovation",
    image: "/ourTeam/alumni/Harsh Misra.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "___",
    currentCompany: "___",
    currentLocation: "__",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },

















  {
    id: 48,
    name: "Devansh",
    session: "2024–2025",
    roleInSociety: "Club President",
    club: "Technovation",
    image: "/ourTeam/alumni/Devansh.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "SWE Intern",
    currentCompany: "NI",
    currentLocation: "__",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },
















  {
    id: 49,
    name: "Abhishek Sharma",
    session: "2025–2026",
    roleInSociety: "Society President",
    club: "Technovation",
    image: "/ourTeam/alumni/Abhishek Sharma.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "___",
    currentCompany: "___",
    currentLocation: "___",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },














  {
    id: 50,
    name: "Dheeraj Rajput",
    session: "2025–2026",
    roleInSociety: "Society Vice President",
    club: "Technovation",
    image: "/ourTeam/alumni/Dheeraj Rajput.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "___",
    currentCompany: "___",
    currentLocation: "___",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },












  {
    id: 52,
    name: "Brijesh Maurya",
    session: "2025–2026",
    roleInSociety: "Club President",
    club: "Technovation",
    image: "/ourTeam/alumni/Brijesh Maurya.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "___",
    currentCompany: "___",
    currentLocation: "__",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },














  {
    id: 53,
    name: "Astitva Johri",
    session: "2025–2026",
    roleInSociety: "Club President",
    club: "Technovation",
    image: "/ourTeam/alumni/Astitva Johri.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "___",
    currentCompany: "___",
    currentLocation: "___",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },













  {
    id: 54,
    name: "Mukul Sharma",
    session: "2025-2026",
    roleInSociety: "Club President",
    club: "Technovation",
    image: "/ourTeam/alumni/Mukul Sharma.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "___",
    currentCompany: "___",
    currentLocation: "___",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },















  {
    id: 55,
    name: "Puspender",
    session: "2025–2026",
    roleInSociety: "Club President",
    club: "Technovation",
    image: "/ourTeam/alumni/Puspender.jpg",
    linkedin: "https://linkedin.com/in/rohitverma",

    currentRole: "___",
    currentCompany: "___",
    currentLocation: "___",

    achievements: [
      "Led multiple technical workshops",
      "Organized first inter-college hackathon",
    ],

    message:
      "Techtronica gave me confidence, leadership skills, and real-world exposure. Stay curious and keep building.",
  },





















];
