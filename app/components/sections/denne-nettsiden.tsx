import SectionBlock from "../ui/section-block";
import SectionHeading from "../ui/section-heading";
import Pill from "../ui/pill";

const teknologier = ["TypeScript", "React", "Next.js", "Tailwind CSS", "Vercel"];

export default function DenneNettsiden() {
  return (
    <SectionBlock tone="stone" className="pb-8 md:pb-10">
      <SectionHeading>Denne nettsiden</SectionHeading>
      <p className="text-base text-ink/80 dark:text-ink-dark/80 leading-relaxed mb-4 max-w-xl">
        Nettsiden er bygget med:
      </p>
      <div className="flex flex-wrap gap-2">
        {teknologier.map((tech) => (
          <Pill key={tech}>{tech}</Pill>
        ))}
      </div>
    </SectionBlock>
  );
}
