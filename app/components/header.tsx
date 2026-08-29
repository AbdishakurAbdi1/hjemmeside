import Link from "next/link";
import ThemeToggle from "./theme-toggle";

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-linear-to-b from-page to-page/80 dark:from-page-dark dark:to-page-dark/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-2">
        <Link
          href="/"
          className="font-display text-sm sm:text-base font-semibold text-ink dark:text-ink-dark hover:text-terracotta-text dark:hover:text-terracotta-dark transition-colors rounded-sm shrink-0 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-terracotta focus-visible:outline-offset-4"
        >
          Abdishakur Abdi
        </Link>
        <nav className="flex items-center gap-1.5 sm:gap-3">
          <ThemeToggle />
          <Link
            href="/prosjekter"
            className="px-2.5 sm:px-4 py-1.5 bg-terracotta-text dark:bg-terracotta-dark text-cream dark:text-ink text-xs sm:text-sm font-medium rounded-full whitespace-nowrap hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-terracotta focus-visible:outline-offset-2"
          >
            Prosjekter
          </Link>
          <a
            href="mailto:abdishakurabdi12@hotmail.com"
            className="px-2.5 sm:px-4 py-1.5 bg-terracotta-text dark:bg-terracotta-dark text-cream dark:text-ink text-xs sm:text-sm font-medium rounded-full whitespace-nowrap hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-terracotta focus-visible:outline-offset-2"
          >
            Kontakt
          </a>
          <a
            href="https://www.linkedin.com/in/abdishakur-abdi-3398b12aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-ink dark:text-ink-dark hover:text-terracotta-text dark:hover:text-terracotta-dark transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-terracotta focus-visible:outline-offset-2"
            aria-label="LinkedIn-profil"
          >
            <LinkedInIcon />
          </a>
        </nav>
      </div>
    </header>
  );
}
