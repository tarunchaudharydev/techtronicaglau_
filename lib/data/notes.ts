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
    id: "1",
    title: "Frontend Interview Questions",
    subject: "Frontend",
    category: "Notes",
    year: "2nd Year",
    slug: "frontend-interview-questions",
    pdfUrl: "/notes/frontendInterviewQuestions.pdf",
  },
  {
    id: "2",
    title: "Operating Systems PYQs (Handwritten)",
    subject: "OS",
    category: "PYQs",
    year: "3rd Year",
    slug: "os-pyqs",
    pdfUrl: "/notes/os-pyqs.pdf",
  },
];
