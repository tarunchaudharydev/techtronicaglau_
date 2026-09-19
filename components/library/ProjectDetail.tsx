// import Image from "next/image";
// import Link from "next/link";
// import { Project } from "@/lib/data/projects";

// export default function ProjectDetail({ project }: { project: Project }) {
//   return (
//     <section className="bg-slate-50 min-h-screen">
//       <div className="max-w-5xl mx-auto px-4 py-20 space-y-12">
//         {/* Back Button */}
//         <div>
//           <Link
//             href="/projects"
//             className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-sky-600 transition"
//           >
//             ← Back to Projects
//           </Link>
//         </div>

//         {/* Header */}
//         <div>
//           <h1 className="text-3xl md:text-4xl font-extrabold text-foreground dark:text-white">
//             {project.title}
//           </h1>
//           <p className="mt-2 text-muted">{project.year}</p>
//         </div>

//         {/* Cover */}
//         <div className="relative h-72 w-full rounded-3xl overflow-hidden">
//           <Image
//             src={project.coverImage}
//             alt={project.title}
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* Detailed Description */}
//         <section className="space-y-3">
//           <h2 className="text-xl font-semibold">About the Project</h2>
//           {project.detailedDescription.map((p, i) => (
//             <p key={i} className="text-slate-700">
//               {p}
//             </p>
//           ))}
//         </section>

//         {/* Working */}
//         <section className="space-y-3">
//           <h2 className="text-xl font-semibold">How it Works</h2>
//           <ul className="list-disc ml-6 text-slate-700 space-y-1">
//             {project.working.map((step, i) => (
//               <li key={i}>{step}</li>
//             ))}
//           </ul>
//         </section>

//         {/* Images */}
//         <section className="space-y-4">
//           <h2 className="text-xl font-semibold">Implementation & Code</h2>
//           <div className="grid sm:grid-cols-2 gap-4">
//             {project.images.map((img, i) => (
//               <div
//                 key={i}
//                 className="relative h-56 rounded-xl overflow-hidden border bg-black"
//               >
//                 <Image src={img} alt="" fill className="object-contain" />
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Credits */}
//         <section className="space-y-3">
//           <h2 className="text-xl font-semibold">Credits</h2>
//           <ul className="space-y-1 text-slate-700">
//             {project.credits.map((c) => (
//               <li key={c.name}>
//                 <span className="font-semibold">{c.name}</span> — {c.role}
//               </li>
//             ))}
//           </ul>
//         </section>

//         {/* Links */}
//         <div className="flex gap-4">
//           {project.repo && (
//             <a
//               href={project.repo}
//               target="_blank"
//               className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition"
//             >
//               View Code
//             </a>
//           )}
//           {project.liveDemo && (
//             <a
//               href={project.liveDemo}
//               target="_blank"
//               className="rounded-full border border-slate-300 dark:border-slate-700 px-5 py-2 text-sm font-semibold hover:bg-white dark:bg-slate-900 transition"
//             >
//               Live Demo
//             </a>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// project id

// import { notFound } from "next/navigation";
// import { projects } from "@/lib/data/projects";
// import ProjectDetail from "@/components/library/ProjectDetail";

// type PageProps = {
//   params: Promise<{
//     id: string;
//   }>;
// };

// export default async function ProjectPage({ params }: PageProps) {
//   const { id } = await params; 

//   const project = projects.find((p) => p.id === id);

//   if (!project) {
//     notFound();
//   }

//   return <ProjectDetail project={project} />;
// }
