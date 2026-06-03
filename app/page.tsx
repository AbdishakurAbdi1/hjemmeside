import PageLayout from "./components/page-layout";
import OmMeg from "./components/sections/om-meg";
import Ferdigheter from "./components/sections/ferdigheter";
import Verv from "./components/sections/verv";
import Egenskaper from "./components/sections/egenskaper";
import DenneNettsiden from "./components/sections/denne-nettsiden";

export default function Home() {
  return (
    <PageLayout>
      <h1 className="text-5xl font-bold tracking-tight leading-tight mb-10 text-gray-900 dark:text-white text-center">
        Hei, jeg er<br />Abdishakur Abdi
      </h1>
      <OmMeg />
      <Ferdigheter />
      <Verv />
      <Egenskaper />
      <DenneNettsiden />
    </PageLayout>
  );
}
