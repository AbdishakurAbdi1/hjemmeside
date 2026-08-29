"use client";

import Image from "next/image";
import { useState } from "react";

interface BildeGalleriProps {
  bilder: string[];
  tittel: string;
}

export default function BildeGalleri({ bilder, tittel }: BildeGalleriProps) {
  const [aktiv, setAktiv] = useState(0);

  const forrige = () => setAktiv((prev) => (prev - 1 + bilder.length) % bilder.length);
  const neste = () => setAktiv((prev) => (prev + 1) % bilder.length);

  return (
    <div className="mb-6 max-w-xl mx-auto">
      <div className="flex items-center gap-3">
        {/* Venstre pil */}
        <button
          onClick={forrige}
          className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-ink/15 dark:border-ink-dark/20 bg-white dark:bg-black/30 text-ink dark:text-ink-dark hover:border-terracotta-text/60 dark:hover:border-terracotta-dark/60 hover:text-terracotta-text dark:hover:text-terracotta-dark transition-colors text-lg focus-visible:outline-2 focus-visible:outline-terracotta focus-visible:outline-offset-2"
          aria-label="Forrige bilde"
        >
          ‹
        </button>

        {/* Bilde */}
        <div className="flex-1 rounded-xl overflow-hidden border border-ink/10 dark:border-ink-dark/10 shadow-sm">
          <Image
            src={bilder[aktiv]}
            alt={`Skjermbilde ${aktiv + 1} av ${tittel}`}
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </div>

        {/* Høyre pil */}
        <button
          onClick={neste}
          className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-ink/15 dark:border-ink-dark/20 bg-white dark:bg-black/30 text-ink dark:text-ink-dark hover:border-terracotta-text/60 dark:hover:border-terracotta-dark/60 hover:text-terracotta-text dark:hover:text-terracotta-dark transition-colors text-lg focus-visible:outline-2 focus-visible:outline-terracotta focus-visible:outline-offset-2"
          aria-label="Neste bilde"
        >
          ›
        </button>
      </div>

      {/* Punkt-indikator */}
      <div className="flex justify-center gap-2 mt-3">
        {bilder.map((_, i) => (
          <button
            key={i}
            onClick={() => setAktiv(i)}
            className={`w-2 h-2 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-terracotta focus-visible:outline-offset-2 ${i === aktiv ? "bg-terracotta-text dark:bg-terracotta-dark" : "bg-ink/20 dark:bg-ink-dark/25"}`}
            aria-label={`Gå til bilde ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
