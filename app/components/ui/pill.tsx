export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1.5 bg-white/60 dark:bg-black/20 text-ink dark:text-ink-dark text-sm rounded-full border border-ink/10 dark:border-ink-dark/15 hover:border-terracotta-text/60 dark:hover:border-terracotta-dark/60 hover:text-terracotta-text dark:hover:text-terracotta-dark transition-colors">
      {children}
    </span>
  );
}
