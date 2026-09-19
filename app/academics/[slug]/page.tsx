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
      {/* yha back button hoghi for best user experience */}
      <div className="mb-4">
        <Link
          href="/academics"
          className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 hover:text-foreground dark:text-white transition"
        >
          <FiArrowLeft />
          Back to Academics
        </Link>
      </div>

      {/* sabse phle title hoga jo ki pram se le rhe hai  */}
      <h1 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-white mb-2">
        {note.title}
      </h1>

      {/* yha tags hai */}
      <p className="text-sm text-muted mb-6">
        {note.subject} • {note.year} • {note.category}
      </p>

      {/* PDF Viewer */}
      {/* PDF Viewer */}
      {/* <div className="rounded-2xl border bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
        <div className="relative w-full aspect-[1/1.4142]">
          <iframe
            src={`${note.pdfUrl}#zoom=page-width`}
            title={note.title}
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div> */}

      {/* PDF Viewer – embedded in page */}
      {/* <div className="rounded-2xl border bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
        <div className="relative w-full aspect-[1/1.4142]">
          <iframe
            src={`${note.pdfUrl}#zoom=page-width`}
            title={note.title}
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div> */}

      {/* yha hum third party ya extrnal browser or app use nhi krr rhe for opening notes or any document */}
      <div className="rounded-2xl border bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
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
