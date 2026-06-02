import Header from "./components/header";
import ParticleField from "./components/particle-field";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#c2d4e6] dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <ParticleField />
      <Header />

      <div className="relative z-10 max-w-4xl mx-auto mt-28 bg-[#dce6f0] dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-12 pt-20 pb-24">

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
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 w-28 pt-2 shrink-0">{level}</span>
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
              <p className="font-medium text-gray-800 dark:text-gray-200">Hovedstyre - NestLeder</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">echo - Linjeforeningen for informatikk · mar. 2026 – nåtid</p>
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
              <p className="font-medium text-gray-800 dark:text-gray-200">Hyggkom - Styremedlem og Sosialansvarlig</p>
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
      {/* Footer — på bakgrunnen under innholdsboksen */}
      <footer className="relative z-10 max-w-4xl mx-auto py-10 flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/abdishakur-abdi-3398b12aa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://github.com/AbdishakurAbdi1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © Abdishakur Abdi {new Date().getFullYear()}
        </p>
      </footer>

    </div>
  );
}
