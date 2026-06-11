const vervListe = [
  {
    tittel: "Hovedstyre - NestLeder",
    org: "echo - Linjeforeningen for informatikk · mar. 2026 - nåtid",
    beskrivelse:
      "Nestleder i hovedstyret til echo, som består av 14 studenter. Vi har et overordnet ansvar for organisasjonen, samt det sosiale miljøet og faglige studentsaker. Vi representerer rundt 900 informatikkstudenter og fungerer som bindeleddet mellom studentene, instituttet, fakultetet og næringslivet.",
    lenke: {
      tekst: "Hovedstyre 2026/2027 - echo.uib.no",
      url: "https://echo.uib.no/for-studenter/gruppe/hovedstyret",
    },
  },
  {
    tittel: "Hyggkom - Leder",
    org: "echo - Linjeforeningen for informatikk · mar. 2025 - mar. 2026 · 1 år 1 mnd",
    beskrivelse:
      "Hyggkom er en undergruppe i echo - linjeforeningen for informatikkstudenter. Vi har fokus på å skape et trivelig og inkluderende miljø på lesesalene og campus. Vi planlegger og gjennomfører høytidsrelaterte aktiviteter, sosiale arrangementer og andre tiltak som fremmer trivsel blant studentene.",
  },
  {
    tittel: "Hyggkom - Styremedlem og Sosialansvarlig",
    org: "echo - Linjeforeningen for informatikk · aug. 2024 - mar. 2025 · 8 mnd",
  },
];

export default function Verv() {
  return (
    <section className="mb-12 pt-10 border-t border-gray-300/50 dark:border-gray-700/50">
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-5">Verv</h2>
      <div className="flex flex-col gap-6">
        {vervListe.map((v) => (
          <div key={v.tittel}>
            <p className="font-medium text-gray-800 dark:text-gray-200">{v.tittel}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{v.org}</p>
            {v.beskrivelse && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{v.beskrivelse}</p>
            )}
            {v.lenke && (
              <a
                href={v.lenke.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-gray-600 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 underline underline-offset-2 transition-colors"
              >
                {v.lenke.tekst}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
