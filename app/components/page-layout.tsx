import Header from "./header";
import ParticleField from "./particle-field";
import Footer from "./footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg-ytre dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <ParticleField />
      <Header />
      <div className="relative z-10 max-w-4xl mx-auto mt-28 min-h-[calc(100vh-4rem)] bg-bg-indre dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-12 pt-20 pb-24">
        {children}
      </div>
      <Footer />
    </div>
  );
}
