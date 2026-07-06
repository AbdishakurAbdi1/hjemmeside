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
          className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-lg"
          aria-label="Forrige bilde"
        >
          ‹
        </button>

        {/* Bilde */}
        <div className="flex-1 rounded-xl overflow-hidden border border-gray-200/60 dark:border-gray-700 shadow-sm">
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
          className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-lg"
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
            className={`w-2 h-2 rounded-full transition-colors ${i === aktiv ? "bg-gray-700 dark:bg-gray-300" : "bg-gray-300 dark:bg-gray-600"}`}
            aria-label={`Gå til bilde ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
