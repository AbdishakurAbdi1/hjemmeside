import SectionBlock from "../ui/section-block";
import SectionHeading from "../ui/section-heading";

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
    <SectionBlock tone="terracotta-tint">
      <SectionHeading>Verv</SectionHeading>
      <div className="flex flex-col gap-8 border-l-2 border-terracotta/30 dark:border-terracotta-dark/30 pl-6">
        {vervListe.map((v) => (
          <div key={v.tittel} className="relative">
            <span className="absolute -left-7.25 top-1.5 w-2.5 h-2.5 rounded-full bg-terracotta dark:bg-terracotta-dark" />
            <p className="font-medium text-ink dark:text-ink-dark">{v.tittel}</p>
            <p className="text-sm text-ink/70 dark:text-ink-dark/70 mt-0.5">{v.org}</p>
            {v.beskrivelse && (
              <p className="text-sm text-ink/70 dark:text-ink-dark/70 mt-1">{v.beskrivelse}</p>
            )}
            {v.lenke && (
              <a
                href={v.lenke.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-terracotta-text dark:text-terracotta-dark hover:opacity-80 underline underline-offset-2 transition-opacity rounded-sm focus-visible:outline-2 focus-visible:outline-terracotta focus-visible:outline-offset-2"
              >
                {v.lenke.tekst}
              </a>
            )}
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
