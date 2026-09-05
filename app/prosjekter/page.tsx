import PageLayout from "../components/page-layout";
import SectionBlock from "../components/ui/section-block";
import ProsjektKort from "../components/prosjekt-kort";

export default function Prosjekter() {
  return (
    <PageLayout>
      <SectionBlock tone="cream">
        <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-4 text-ink dark:text-ink-dark text-center">
          Prosjekter
        </h1>
        <p className="text-base font-semibold text-ink/70 dark:text-ink-dark/70 text-center mb-1">
          Under finner du mine prosjekter.
        </p>
        <p className="text-sm text-ink/70 dark:text-ink-dark/70 text-center mb-12">
          For tiden jobber jeg med en egen musikk-spiller desktop app med Tauri,
          Rust, TypeScript og React. Flere prosjekter kommer etterhvert.
        </p>

        <ProsjektKort
          nummer={1}
          tittel="Tetris"
          bilder={[
            "/prosjektBilder/tetris-spill.png",
            "/prosjektBilder/tetris-gameover.png",
          ]}
          beskrivelse="Et fullstendig Tetris-spill implementert i Java som semesteroppgave ved UiB (første året). Spillet har klassisk Tetris-mekanikk med fallende brikker, radsletting og poengsum."
          teknologier={["Java", "OOP", "MVC", "Swing"]}
          githubUrl="https://github.com/AbdishakurAbdi1/Tetris"
        />
        <ProsjektKort
          nummer={2}
          tittel="Battleship"
          bilder={[
            "/prosjektBilder/batteshipHomePage.png",
            "/prosjektBilder/battleshipHotToPlay.png",
            "/prosjektBilder/battleshipGameStart.png",
            "/prosjektBilder/battleshipMidGame.png",
            "/prosjektBilder/batteleshipGameOver.png",
          ]}
          beskrivelse="Et fullstendig Battleship-spill implementert i Java som semesteroppgave ved UiB (første året). Spillet har klassisk Battleship-mekanikk der to spillere plasserer skip og forsøker å senke hverandres skip. Motstanderen er en implementert KI."
          teknologier={["Java", "OOP", "MVC", "Swing"]}
          githubUrl="https://github.com/AbdishakurAbdi1/BattleShip"
        />
        <ProsjektKort
          nummer={3}
          tittel="BoxMove"
          bilder={[
            "/prosjektBilder/BoxMove_homepage.png",
            "/prosjektBilder/BoxMove_game1.png",
            "/prosjektBilder/BoxMove_game2.png",
            "/prosjektBilder/BoxMove_game3.png",
            "/prosjektBilder/BoxMove_GameOver.png",
          ]}
          beskrivelse="Et 2D labyrint- og logikkspill utviklet i Java (LibGDX). Spillet er et gruppeprosjekt i emnet systemutvikling. Spilleren navigerer et rutenettbasert brett, flytter bokser, unngår en KI-styrt fiende og bruker power-ups (HEAVYMODE, FRAGILEMODE) for å løse stadig vanskeligere brett og nå igloen."
          teknologier={["Java", "LibGDX", "OOP", "MVC", "Maven"]}
        />
        <ProsjektKort
          nummer={4}
          tittel="Beat for Beat"
          bilder={[
            "/prosjektBilder/BeatforBeat1.png",
            "/prosjektBilder/BeatforBeat2.png",
            "/prosjektBilder/BeatforBeat3.png",
          ]}
          beskrivelse="Egen Beat for Beat webbasert partyspill inspirert av det norske TV-programmet med samme navn. Spillerne skal gjette sanger ord for ord og finne hovedsangen. Bygget med ren HTML, CSS og JavaScript. Inkluderer et innebygd administrasjonspanel hvor man kan legge til, redigere og eksportere egne sanglister. Sangene er lagret lokalt i nettleseren med LocalStorage."
          teknologier={["HTML", "CSS", "JavaScript"]}
        />
        <ProsjektKort
          nummer={5}
          tittel="QR Studio"
          bilder={["/prosjektBilder/QRStudio1.png", "/prosjektBilder/QRStudio2.png"]}
          visGalleri
          beskrivelse="Et lite fullstack-prosjekt der jeg har bygget en egen QR-kode-generator med en Flask-backend og en enkel frontend laget med HTML og CSS. Du limer inn en lenke, velger feilkorrigeringsnivå og får utlevert en QR-koden som kan også lastes ned som en PNG. Lenken er kodet direkte inn i mønsteret uten mellomledd, så den varer så lenge som siden eksisterer."
          teknologier={["Python", "Flask", "HTML/CSS", "JavaScript"]}
          githubUrl="https://github.com/AbdishakurAbdi1/qr-code-generator"
        />
      </SectionBlock>
    </PageLayout>
  );
}
