type Niva = 1 | 2 | 3 | 4;

// Fire nivåer, fra sterkest (1) til svakest (4) — størrelse og fargestyrke
// avtar sammen, slik at ferdighetsnivået leses direkte av pillen selv.
const nivaClasses: Record<Niva, string> = {
  1: "px-4 py-2 text-base font-semibold bg-terracotta-text dark:bg-terracotta-dark text-cream dark:text-ink",
  2: "px-3.5 py-1.5 text-sm font-medium bg-terracotta-tint dark:bg-terracotta-tint-dark text-terracotta-text dark:text-terracotta-dark border border-terracotta/30 dark:border-terracotta-dark/30",
  3: "px-3 py-1.5 text-sm bg-white/60 dark:bg-black/20 text-ink dark:text-ink-dark border border-ink/10 dark:border-ink-dark/15",
  4: "px-2.5 py-1 text-xs bg-white/50 dark:bg-black/25 text-ink/80 dark:text-ink-dark/80 border border-ink/25 dark:border-ink-dark/30",
};

interface SkillPillProps {
  niva: Niva;
  children: React.ReactNode;
}

export default function SkillPill({ niva, children }: SkillPillProps) {
  return (
    <span className={`inline-flex items-center rounded-full transition-opacity hover:opacity-80 ${nivaClasses[niva]}`}>
      {children}
    </span>
  );
}
