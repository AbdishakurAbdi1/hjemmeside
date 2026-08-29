import SectionBlock from "../ui/section-block";
import SectionHeading from "../ui/section-heading";
import Pill from "../ui/pill";

const egenskaper = ["Løsningsorientert", "Teamplayer", "Nysgjerrig", "Strukturert", "Engasjert"];

export default function Egenskaper() {
  return (
    <SectionBlock tone="sage">
      <SectionHeading>Egenskaper</SectionHeading>
      <div className="flex flex-wrap gap-2">
        {egenskaper.map((egenskap) => (
          <Pill key={egenskap}>{egenskap}</Pill>
        ))}
      </div>
    </SectionBlock>
  );
}
