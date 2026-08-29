import Header from "./header";
import ParticleField from "./particle-field";
import Footer from "./footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-page dark:bg-page-dark text-ink dark:text-ink-dark">
      <ParticleField />
      <Header />
      <div className="relative z-10 max-w-5xl mx-auto mt-28 mb-10 rounded-3xl overflow-hidden border border-ink/10 dark:border-ink-dark/10 shadow-sm shadow-ink/5">
        {children}
        <Footer />
      </div>
    </div>
  );
}
