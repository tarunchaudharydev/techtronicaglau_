import Link from "next/link";
import { notFound } from "next/navigation";
import { notes } from "@/lib/data/notes";
import { FiArrowLeft } from "react-icons/fi";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NotePage({ params }: PageProps) {
  const { slug } = await params;

  const note = notes.find((n) => n.slug === slug);
  if (!note) notFound();

  return (
    <main className="pt-28 pb-20 px-4 max-w-6xl mx-auto">
      {/* Back Button */}
      <div className="mb-4">
        <Link
          href="/academics"
          className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition"
        >
          <FiArrowLeft />
          Back to Academics
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
        {note.title}
      </h1>

      {/* Meta */}
      <p className="text-sm text-slate-600 mb-6">
        {note.subject} • {note.year} • {note.category}
      </p>

      {/* PDF Viewer */}
      {/* PDF Viewer */}
      {/* <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
        <div className="relative w-full aspect-[1/1.4142]">
          <iframe
            src={`${note.pdfUrl}#zoom=page-width`}
            title={note.title}
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div> */}

      {/* PDF Viewer – embedded in page */}
      {/* <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
        <div className="relative w-full aspect-[1/1.4142]">
          <iframe
            src={`${note.pdfUrl}#zoom=page-width`}
            title={note.title}
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div> */}

      {/* PDF Viewer – stays on same page */}
      <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
        <div className="relative w-full aspect-[1/1.4142]">
          <iframe
            src={`${note.pdfUrl}#zoom=page-width`}
            title={note.title}
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </main>
  );
}
