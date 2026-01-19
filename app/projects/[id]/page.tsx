// import { notFound } from "next/navigation";
// import { projects } from "@/lib/data/projects";
// import ProjectDetail from "@/components/library/ProjectDetail";

// type PageProps = {
//   params: Promise<{
//     id: string;
//   }>;
// };

// export default async function ProjectPage({ params }: PageProps) {
//   const { id } = await params; // ✅ REQUIRED in Next.js 14

//   const project = projects.find((p) => p.id === id);

//   if (!project) {
//     notFound();
//   }

//   return <ProjectDetail project={project} />;
// }
