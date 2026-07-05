const skillGroups = [
  { level: "Sterk",         skills: ["Python", "Java"] },
  { level: "Erfaren",       skills: ["HTML/CSS", "Git"] },
  { level: "Middels",       skills: ["Kotlin", "TypeScript", "React", "Next.js"] },
  { level: "Grunnleggende", skills: ["C", "C++", "SQL"] },
];

export default function Ferdigheter() {
  return (
    <section className="mb-12 pt-10 border-t border-gray-300/50 dark:border-gray-700/50">
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-5">Mine ferdigheter</h2>
      <div className="flex flex-col gap-4">
        {skillGroups.map(({ level, skills }) => (
          <div key={level} className="flex items-start gap-4">
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 w-28 pt-2 shrink-0">
              {level}
            </span>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-white/70 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
