import SectionBlock from "../ui/section-block";

export default function OmMeg() {
  return (
    <SectionBlock tone="cream" className="pt-0 md:pt-0">
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink dark:text-ink-dark mb-4">
        Om meg
      </h2>
      <p className="text-base text-ink/80 dark:text-ink-dark/80 leading-relaxed max-w-xl">
        Jeg har fullført en bachelor i Informatikk ved UiB og går nå på et master i
        programvareutvikling. Jeg er en engasjert og aktiv student som liker å
        holde meg involvert i miljøet rundt meg. Jeg trives med å jobbe på
        spennende prosjekter og er alltid på utkikk etter nye
        programmeringsspråk og teknologier å utforske.
      </p>
    </SectionBlock>
  );
}
