import SectionBlock from "../ui/section-block";
import SectionHeading from "../ui/section-heading";

const egenskaper = ["Løsningsorientert", "Teamplayer", "Nysgjerrig", "Strukturert", "Engasjert", "Rask læringsevne"];

export default function Egenskaper() {
  return (
    <SectionBlock tone="sage">
      <SectionHeading>Egenskaper</SectionHeading>
      <p className="text-lg font-medium text-ink dark:text-ink-dark leading-relaxed">
        {egenskaper.map((egenskap, i) => (
          <span key={egenskap}>
            <span className="hover:text-terracotta-text dark:hover:text-terracotta-dark transition-colors">
              {egenskap}
            </span>
            {i < egenskaper.length - 1 && (
              <span className="text-ink/40 dark:text-ink-dark/40" aria-hidden="true"> · </span>
            )}
          </span>
        ))}
      </p>
    </SectionBlock>
  );
}
