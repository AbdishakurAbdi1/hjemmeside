import Header from "./components/header";
import ParticleField from "./components/particle-field";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#c2d4e6] dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <ParticleField />
      <Header />

      <div className="relative z-10 max-w-4xl mx-auto mt-28 min-h-[calc(100vh-4rem)] bg-[#dce6f0] dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-12 pt-20 pb-24">

        <h1 className="text-5xl font-bold tracking-tight leading-tight mb-10 text-gray-900 dark:text-white text-center">
          Hei, jeg er<br />Abdishakur Abdi
        </h1>

        {/* Om meg */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Om meg</h2>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
            Jeg har nettopp fullført bacheloren min ved UiB og starter på en master i programvareutvikling til høsten.
            Jeg er en engasjert og aktiv student som liker å holde meg involvert i miljøet rundt meg. Jeg trives med å jobbe på spennende prosjekter og er alltid på utkikk etter nye programmeringsspråk og teknologier å utforske.
          </p>
        </section>

        {/* Mine ferdigheter */}
        <section className="mb-12 pt-10 border-t border-gray-300/50 dark:border-gray-700/50">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-5">Mine ferdigheter</h2>
          <div className="flex flex-col gap-4">
            {[
              { level: "Sterk",          skills: ["Python", "Java"] },
              { level: "Erfaren",        skills: ["HTML/CSS", "Git"] },
              { level: "Middels",        skills: ["TypeScript", "React", "Next.js"] },
              { level: "Grunnleggende",  skills: ["Kotlin", "C", "C++", "SQL"] },
            ].map(({ level, skills }) => (
              <div key={level} className="flex items-start gap-4">
                <span className="text-xs font-medium text-gray-400 dark:text-gray-500 w-28 pt-2 shrink-0">{level}</span>
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

        {/* Verv */}
        <section className="mb-12 pt-10 border-t border-gray-300/50 dark:border-gray-700/50">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-5">Verv</h2>
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-200">Hovedstyre — NestLeder</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">echo – Linjeforeningen for informatikk · mar. 2026 – nåtid</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Nestleder i hovedstyret til echo, som består av 14 studenter. Vi har et overordnet ansvar for organisasjonen, samt det sosiale miljøet og faglige studentsaker. Vi representerer rundt 900 informatikkstudenter og fungerer som bindeleddet mellom studentene, instituttet, fakultetet og næringslivet.
              </p>
              <a
                href="https://echo.uib.no/for-studenter/gruppe/hovedstyret"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-gray-600 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 underline underline-offset-2 transition-colors"
              >
                Hovedstyre 2026/2027 — echo.uib.no
              </a>
            </div>
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-200">Hyggkom - Leder</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">echo – Linjeforeningen for informatikk · mar. 2025 – mar. 2026 · 1 år 1 mnd</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Hyggkom er en undergruppe i echo – linjeforeningen for informatikkstudenter. Vi har fokus på å skape et trivelig og inkluderende miljø på lesesalene og campus. Vi planlegger og gjennomfører høytidsrelaterte aktiviteter, sosiale arrangementer og andre tiltak som fremmer trivsel blant studentene.
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-200">Hyggkom — Styremedlem og Sosialansvarlig</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">echo – Linjeforeningen for informatikk · aug. 2024 – mar. 2025 · 8 mnd</p>
            </div>
          </div>
        </section>

        {/* Egenskaper */}
        <section className="mb-12 pt-10 border-t border-gray-300/50 dark:border-gray-700/50">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-5">Egenskaper</h2>
          <div className="flex flex-wrap gap-2">
            {["Løsningsorientert", "Teamplayer", "Nysgjerrig", "Strukturert", "Engasjert"].map((trait) => (
              <span key={trait} className="px-3 py-1.5 bg-white/70 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700">
                {trait}
              </span>
            ))}
          </div>
        </section>

        {/* Denne nettsiden */}
        <section className="pt-10 border-t border-gray-300/50 dark:border-gray-700/50">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Denne nettsiden</h2>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-4 max-w-xl">
            Nettsiden er bygget fra bunnen av med:
          </p>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-white/70 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
