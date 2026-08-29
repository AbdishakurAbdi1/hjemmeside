import SectionBlock from "../ui/section-block";
import SectionHeading from "../ui/section-heading";
import Pill from "../ui/pill";

const skillGroups = [
  { level: "Sterk",         skills: ["Python", "Java"] },
  { level: "Erfaren",       skills: ["HTML/CSS", "Git"] },
  { level: "Middels",       skills: ["Kotlin", "TypeScript", "React", "Next.js"] },
  { level: "Grunnleggende", skills: ["C", "C++", "SQL"] },
];

export default function Ferdigheter() {
  return (
    <SectionBlock tone="sand">
      <SectionHeading>Mine ferdigheter</SectionHeading>
      <div className="flex flex-col gap-4">
        {skillGroups.map(({ level, skills }) => (
          <div key={level} className="flex items-start gap-4">
            <span className="text-sm font-semibold text-ink/70 dark:text-ink-dark/70 w-28 pt-2 shrink-0">
              {level}
            </span>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Pill key={skill}>{skill}</Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
