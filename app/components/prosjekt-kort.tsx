import Image from "next/image";

interface ProsjektKortProps {
  nummer: number;
  tittel: string;
  bilder: string[];
  beskrivelse: string;
  teknologier: string[];
  githubUrl: string;
}

export default function ProsjektKort({ nummer, tittel, bilder, beskrivelse, teknologier, githubUrl }: ProsjektKortProps) {
  return (
    <article className="bg-white/50 dark:bg-gray-800/40 rounded-2xl p-8 mb-6 shadow-sm border border-white/60 dark:border-gray-700/50">

      {/* Tittel og nummer */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-xs font-bold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md tabular-nums">
          {String(nummer).padStart(2, "0")}
        </span>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{tittel}</h2>
      </div>

      {/* Teknologi-tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {teknologier.map((t) => (
          <span key={t} className="px-2.5 py-1 bg-gray-900/10 dark:bg-white/10 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-md">
            {t}
          </span>
        ))}
      </div>

      {/* Bilder */}
      <div className={`grid gap-3 mb-6 mx-auto ${bilder.length > 1 ? "grid-cols-2 max-w-lg" : "grid-cols-1 max-w-sm"}`}>
        {bilder.map((bilde, i) => (
          <div key={i} className="rounded-xl overflow-hidden border border-gray-200/60 dark:border-gray-700 shadow-sm">
            <Image
              src={bilde}
              alt={`Skjermbilde ${i + 1} av ${tittel}`}
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Beskrivelse */}
      <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-6 max-w-xl">
        {beskrivelse}
      </p>

      {/* GitHub-knapp */}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        Se på GitHub
      </a>

    </article>
  );
}
