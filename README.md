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
- Responsivt design
- Sider: Forside og Prosjekter

## Filstruktur

```
app/
├── components/
│   ├── sections/          # Innholdsseksjoner (om meg, ferdigheter, osv.)
│   ├── header.tsx
│   ├── footer.tsx
│   ├── page-layout.tsx    # Felles sideoppsett
│   ├── particle-field.tsx
│   ├── prosjekt-kort.tsx
│   ├── bilde-galleri.tsx
│   └── theme-toggle.tsx
├── prosjekter/
│   └── page.tsx
├── globals.css
├── layout.tsx
└── page.tsx
```

## Kjør lokalt

```bash
git clone https://github.com/AbdishakurAbdi1/hjemmeside.git
cd hjemmeside
npm install
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000) i nettleseren.

## Vil du lage din egen?

Du er velkommen til å **forke** dette repoet og lage din egen versjon. Da får du en kopi under din egen GitHub-konto som du kan tilpasse fritt med ditt eget navn og innhold.
