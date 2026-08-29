export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink dark:text-ink-dark mb-5">
      {children}
    </h2>
  );
}
