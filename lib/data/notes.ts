// This file is no longer in production mode and is only kept for reference purposes. It contains static data that is not used in the current implementation of the project. In a production-grade project, it is advisable to avoid using static data files as they can make the project heavy and slow. Instead, consider using a database or other dynamic data sources for managing such information.



export type Note = {
  id: string;
  title: string;
  subject: string;
  category: "Notes" | "PYQs" | "Resources";
  year: "1st Year" | "2nd Year" | "3rd Year" | "4th Year";
  slug: string;
  pdfUrl: string; 
};

export const notes: Note[] = [
  {
    id: "sns",
    title: "Signal And System",
    subject: "Electronics",
    category: "Notes",
    year: "2nd Year",
    slug: "signal-and-system",
    pdfUrl: "/notes/signal.pdf",
  },
  
  {
    id: "ssdc",
    title: "SSDC",
    subject: "Electronics",
    category: "Notes",
    year: "2nd Year",
    slug: "ssdc",
    pdfUrl: "/notes/ssdc.pdf",
  },

  {
    id: "aic",
    title: "analog integrated circuit",
    subject: "Electronics",
    category: "Notes",
    year: "2nd Year",
    slug: "analog-integrated-circuit",
    pdfUrl: "/notes/analogintegrated.pdf",
  },


  {
    id: "cs",
    title: "Communication System",
    subject: "Electronics",
    category: "Notes",
    year: "2nd Year",
    slug: "communication-system",
    pdfUrl: "/notes/communication.pdf",
  },



  {
    id: "ds",
    title: "Data Structure",
    subject: "General",
    category: "Notes",
    year: "3rd Year",
    slug: "data-structure",
    pdfUrl: "/notes/data structure.pdf",
  },



  {
    id: "nas",
    title: "Network Analysis",
    subject: "Electronics",
    category: "Notes",
    year: "2nd Year",
    slug: "network-analysis",
    pdfUrl: "/notes/nas.pdf",
  },



  {
    id: "physics",
    title: "Physics",
    subject: "General",
    category: "Notes",
    year: "3rd Year",
    slug: "physics",
    pdfUrl: "/notes/physics.pdf",
  },




  {
    id: "micro",
    title: "Microprocessor",
    subject: "Electronics",
    category: "Notes",
    year: "2nd Year",
    slug: "microprocessor",
    pdfUrl: "/notes/micro.pdf",
  },

  {
    id: "digitalelectronics",
    title: "Digital Electronics",
    subject: "Electronics",
    category: "Notes",
    year: "2nd Year",
    slug: "digital-electronics",
    pdfUrl: "/notes/digitalelectronics.pdf",
  },



];
