import SectionBlock from "../ui/section-block";
import SectionHeading from "../ui/section-heading";
import SkillPill from "../ui/skill-pill";

const skillGroups = [
  { level: "Sterk",         niva: 1 as const, skills: ["Java", "Python", "Git"] },
  { level: "Erfaren",       niva: 2 as const, skills: ["Kotlin", "HTML/CSS"] },
  { level: "Middels",       niva: 3 as const, skills: ["TypeScript", "React", "SQL", "JavaScript"] },
  { level: "Grunnleggende", niva: 4 as const, skills: ["C", "C++", "SpringBoot"] },
];

export default function Ferdigheter() {
  return (
    <SectionBlock tone="sand">
      <SectionHeading>Mine ferdigheter</SectionHeading>
      <div className="flex flex-col gap-4">
        {skillGroups.map(({ level, niva, skills }) => (
          <div key={level} className="flex items-start gap-4">
            <span className="text-sm font-semibold text-ink/70 dark:text-ink-dark/70 w-28 pt-2 shrink-0">
              {level}
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {skills.map((skill) => (
                <SkillPill key={skill} niva={niva}>{skill}</SkillPill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
