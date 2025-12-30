import { CalendarX } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  text: string;
}

export default function EmptyState({ text }: { text: string }) {
  return <div className="text-center py-10 text-slate-500 text-sm">{text}</div>;
}
