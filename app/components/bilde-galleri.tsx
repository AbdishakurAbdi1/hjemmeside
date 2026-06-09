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
    <div className="mb-6 max-w-lg mx-auto">
      <div className="relative rounded-xl overflow-hidden border border-gray-200/60 dark:border-gray-700 shadow-sm">
        <Image
          src={bilder[aktiv]}
          alt={`Skjermbilde ${aktiv + 1} av ${tittel}`}
          width={600}
          height={400}
          className="w-full object-cover"
        />

        {/* Pil-knapper */}
        <button
          onClick={forrige}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
          aria-label="Forrige bilde"
        >
          ‹
        </button>
        <button
          onClick={neste}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
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
