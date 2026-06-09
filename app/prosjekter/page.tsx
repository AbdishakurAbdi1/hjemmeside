import PageLayout from "../components/page-layout";
import ProsjektKort from "../components/prosjekt-kort";

export default function Prosjekter() {
  return (
    <PageLayout>
      <h1 className="text-5xl font-bold tracking-tight leading-tight mb-4 text-gray-900 dark:text-white text-center">
        Prosjekter
      </h1>
      <p className="text-base text-gray-500 dark:text-gray-400 text-center mb-12">
        Under finner du mine prosjekter.
      </p>

      <ProsjektKort
        nummer={1}
        tittel="Tetris"
        bilder={["/prosjekter/tetris-spill.png", "/prosjekter/tetris-gameover.png"]}
        beskrivelse="Et fullstendig Tetris-spill implementert i Java som semesteroppgave i INF101 ved UiB (første året). Spillet har klassisk Tetris-mekanikk med fallende brikker, radsletting og poengsum."
        teknologier={["Java", "OOP", "MVC", "Swing"]}
        githubUrl="https://github.com/AbdishakurAbdi1/Tetris"
      />
    </PageLayout>
  );
}
