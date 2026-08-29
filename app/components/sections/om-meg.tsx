import SectionBlock from "../ui/section-block";

export default function OmMeg() {
  return (
    <SectionBlock tone="cream" className="pt-0 md:pt-0">
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink dark:text-ink-dark mb-4">
        Om meg
      </h2>
      <p className="text-base text-ink/80 dark:text-ink-dark/80 leading-relaxed max-w-xl">
        Jeg har fullført en bachelorgrad i informatikk ved UiB og tar nå en
        mastergrad i programvareutvikling. Jeg er en engasjert student som
        trives med å bidra aktivt til både det sosiale og faglige
        studentmiljøet. Jeg trives med å jobbe med spennende prosjekter og er
        alltid på utkikk etter nye programmeringsspråk og teknologier å
        utforske.
      </p>
    </SectionBlock>
  );
}
