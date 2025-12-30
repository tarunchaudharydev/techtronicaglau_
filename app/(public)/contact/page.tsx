// "use client";

// import { useState } from "react";
// import { Mail, Phone, MapPin, Send } from "lucide-react"; // npm i lucide-react or remove icons

// export default function ContactPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [status, setStatus] = useState<
//     "idle" | "loading" | "success" | "error"
//   >("idle");
//   const [error, setError] = useState<string | null>(null);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus("loading");
//     setError(null);

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) throw new Error("Failed to send message");

//       setStatus("success");
//       setForm({ name: "", email: "", subject: "", message: "" });
//     } catch (err) {
//       console.error(err);
//       setStatus("error");
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <section className="min-h-screen pt-28 px-4 flex items-start justify-center bg-gradient-to-br from-white via-sky-50 to-purple-100">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-10">
//           <p className="text-xs uppercase tracking-[0.25em] text-sky-600 mb-3">
//             Techtronica • GLA University
//           </p>
//           <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
//             Let’s talk about your ideas
//           </h1>
//           <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
//             Share your questions, collaboration ideas, or feedback with the
//             Techtronica team. We usually respond within 1–2 working days.
//           </p>
//         </div>

//         {/* Gradient card wrapper */}
//         <div className="rounded-3xl bg-gradient-to-r from-sky-500/15 via-purple-500/15 to-amber-400/15 p-[1px] shadow-lg shadow-sky-500/15">
//           <div className="rounded-3xl bg-white/95 backdrop-blur px-6 py-8 md:px-10 md:py-10">
//             <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
//               {/* LEFT: Info */}
//               <div className="lg:col-span-2 space-y-6">
//                 <div>
//                   <h2 className="text-lg font-semibold text-slate-900 mb-1">
//                     Contact information
//                   </h2>
//                   <p className="text-sm text-slate-600">
//                     Reach out via email, phone, or visit us on campus during
//                     working hours. We love hearing from students and mentors.
//                   </p>
//                 </div>

//                 <div className="space-y-4 text-sm">
//                   <div className="flex items-start gap-3">
//                     <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
//                       <Mail className="h-4 w-4" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-slate-900">Email</p>
//                       <p className="text-slate-700">techtronica@gla.ac.in</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
//                       <Phone className="h-4 w-4" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-slate-900">Phone</p>
//                       <p className="text-slate-700">+91-XXXXXXXXXX</p>
//                       <p className="text-xs text-slate-500">
//                         Mon–Fri, 10:00 AM – 5:00 PM
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
//                       <MapPin className="h-4 w-4" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-slate-900">Location</p>
//                       <p className="text-slate-700">
//                         GLA University, Mathura, Uttar Pradesh, India
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Social chips */}
//                 <div className="mt-6">
//                   <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
//                     Stay in the loop
//                   </p>
//                   <div className="flex flex-wrap gap-2 text-xs">
//                     <a
//                       href="https://www.instagram.com/techtronica_glau?igsh=Y244amc5ZzZmaTBw"
//                       className="rounded-full bg-sky-50 px-3 py-1 text-sky-700 border border-sky-100 hover:bg-sky-100 transition"
//                     >
//                       Instagram
//                     </a>
//                     <a
//                       href="https://www.linkedin.com/company/techtronica-society2016/"
//                       className="rounded-full bg-indigo-50 px-3 py-1 text-indigo-700 border border-indigo-100 hover:bg-indigo-100 transition"
//                     >
//                       LinkedIn
//                     </a>
//                     <a
//                       href="#"
//                       className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 border border-emerald-100 hover:bg-emerald-100 transition"
//                     >
//                       WhatsApp
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* RIGHT: Form */}
//               <div className="lg:col-span-3">
//                 <form
//                   onSubmit={handleSubmit}
//                   className="bg-slate-50/80 rounded-2xl border border-slate-100 px-5 py-6 md:px-7 md:py-7"
//                 >
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                     <div>
//                       <label
//                         htmlFor="name"
//                         className="block text-sm font-medium text-slate-800 mb-1"
//                       >
//                         Full name
//                       </label>
//                       <input
//                         id="name"
//                         name="name"
//                         type="text"
//                         required
//                         value={form.name}
//                         onChange={handleChange}
//                         className="block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
//                         placeholder="Enter your name"
//                       />
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="email"
//                         className="block text-sm font-medium text-slate-800 mb-1"
//                       >
//                         Email address
//                       </label>
//                       <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         required
//                         value={form.email}
//                         onChange={handleChange}
//                         className="block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
//                         placeholder="@gmail.com"
//                       />
//                     </div>

//                     <div className="md:col-span-2">
//                       <label
//                         htmlFor="subject"
//                         className="block text-sm font-medium text-slate-800 mb-1"
//                       >
//                         Subject
//                       </label>
//                       <input
//                         id="subject"
//                         name="subject"
//                         type="text"
//                         required
//                         value={form.subject}
//                         onChange={handleChange}
//                         className="block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
//                         placeholder="Tell us what this is about"
//                       />
//                     </div>

//                     <div className="md:col-span-2">
//                       <label
//                         htmlFor="message"
//                         className="block text-sm font-medium text-slate-800 mb-1"
//                       >
//                         Message
//                       </label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         rows={5}
//                         required
//                         value={form.message}
//                         onChange={handleChange}
//                         className="block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
//                         placeholder="Share your question, idea, or feedback..."
//                       />
//                     </div>
//                   </div>

//                   <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//                     <p className="text-[11px] text-slate-500 max-w-md">
//                       By submitting, you agree to be contacted by the Techtronica
//                       team regarding your **message**.
//                     </p>

//                     <button
//                       type="submit"
//                       disabled={status === "loading"}
//                       className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-amber-400 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 hover:from-sky-600 hover:via-indigo-600 hover:to-amber-500 focus:outline-none focus:ring-2 focus:ring-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
//                     >
//                       {status === "loading" ? (
//                         "Sending..."
//                       ) : (
//                         <>
//                           Send message
//                           <Send className="ml-2 h-4 w-4" />
//                         </>
//                       )}
//                     </button>
//                   </div>

//                   {status === "success" && (
//                     <p className="mt-4 text-xs text-emerald-600">
//                       Thanks for reaching out! Your message has been sent.
//                     </p>
//                   )}

//                   {status === "error" && error && (
//                     <p className="mt-4 text-xs text-red-600">{error}</p>
//                   )}
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className=" pb-20">
      <ContactForm />
    </main>
  );
}
