type Tone = "cream" | "sand" | "terracotta-tint" | "sage" | "stone";

const toneClasses: Record<Tone, string> = {
  cream: "bg-cream dark:bg-cream-dark",
  sand: "bg-sand dark:bg-sand-dark",
  "terracotta-tint": "bg-terracotta-tint dark:bg-terracotta-tint-dark",
  sage: "bg-sage dark:bg-sage-dark",
  stone: "bg-stone dark:bg-stone-dark",
};

interface SectionBlockProps {
  tone: Tone;
  children: React.ReactNode;
  className?: string;
}

/**
 * Full-bredde fargeblokk (innenfor den avrundede innholdskolonnen) som gir
 * hver seksjon sin egen bakgrunnsfarge fra paletten. Seksjonene stables uten
 * mellomrom, slik at overgangen mellom dem vises som et rent fargeskifte.
 */
export default function SectionBlock({ tone, children, className = "" }: SectionBlockProps) {
  return (
    <div className={`${toneClasses[tone]} px-8 sm:px-12 py-12 md:py-14 ${className}`}>
      {children}
    </div>
  );
}
