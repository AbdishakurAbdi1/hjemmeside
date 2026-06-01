# Abdishakur Abdi — Porteføljeside

Personlig porteføljeside for en informatikkstudent ved Universitetet i Bergen. Siden presenterer hvem jeg er, mine ferdigheter, verv og prosjekter.

## Teknologier

| Teknologi | Bruk |
|---|---|
| [Next.js 16](https://nextjs.org) | Rammeverk og routing |
| [React 19](https://react.dev) | UI-komponenter |
| [TypeScript](https://www.typescriptlang.org) | Typesikkerhet |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling |
| [Vercel](https://vercel.com) | Hosting og deployment |

## Funksjoner

- Lys/mørk modus (class-basert, starter alltid i lys modus)
- Animerte partikler i bakgrunnen
- Responsive design
- Sider: Forside og Prosjekter

## Filstruktur

```
app/
├── components/
│   ├── header.tsx        # Navigasjonsbar
│   ├── particle-field.tsx # Animert bakgrunn
│   └── theme-toggle.tsx  # Mørk/lys-modus-knapp
├── prosjekter/
│   └── page.tsx          # Prosjekter-side
├── globals.css
├── layout.tsx
└── page.tsx              # Forside
```

## Kjør lokalt

Dette repoet er åpent og du er velkommen til å klone det og lage din egen versjon!

```bash
git clone https://github.com/AbdishakurAbdi1/hjemmeside.git
cd hjemmeside
npm install
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000) i nettleseren.

Bytt ut navn, tekst og innhold i `app/page.tsx` med din egen informasjon, så har du en ferdig porteføljeside.
