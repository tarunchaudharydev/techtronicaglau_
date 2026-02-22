interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  eyebrow = "Techtronica",
}: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <p className="text-xs uppercase tracking-[0.3em] text-sky-600 mb-2">
        {eyebrow}
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm md:text-base text-muted mt-2">{subtitle}</p>
      )}
    </div>
  );
}
