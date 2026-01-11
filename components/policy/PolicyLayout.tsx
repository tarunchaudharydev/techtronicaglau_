interface PolicyLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function PolicyLayout({ title, children }: PolicyLayoutProps) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">{title}</h1>
      <div className="prose prose-gray max-w-none">{children}</div>
    </section>
  );
}
