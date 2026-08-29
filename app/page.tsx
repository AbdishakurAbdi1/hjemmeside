import PageLayout from "./components/page-layout";
import SectionBlock from "./components/ui/section-block";
import OmMeg from "./components/sections/om-meg";
import Ferdigheter from "./components/sections/ferdigheter";
import Verv from "./components/sections/verv";
import Egenskaper from "./components/sections/egenskaper";
import DenneNettsiden from "./components/sections/denne-nettsiden";

export default function Home() {
  return (
    <PageLayout>
      <SectionBlock tone="cream" className="text-center pb-4 md:pb-6">
        <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight leading-tight text-ink dark:text-ink-dark">
          Hei, jeg er<br />Abdishakur Abdi
        </h1>
      </SectionBlock>
      <OmMeg />
      <Ferdigheter />
      <Verv />
      <Egenskaper />
      <DenneNettsiden />
    </PageLayout>
  );
}
