import Header from "../components/header";
import ParticleField from "../components/particle-field";

export default function Prosjekter() {
  return (
    <div className="min-h-screen bg-[#c2d4e6] dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <ParticleField />
      <Header />

      <div className="relative z-10 max-w-4xl mx-auto mt-28 min-h-[calc(100vh-4rem)] bg-[#dce6f0] dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-12 pt-20 pb-24">

        <h1 className="text-5xl font-bold tracking-tight leading-tight mb-10 text-gray-900 dark:text-white text-center">
          Prosjekter
        </h1>

        <section className="mb-12">
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
            Her vil jeg legge ut prosjekter jeg har jobbet med. Kommer snart!
          </p>
        </section>

      </div>
    </div>
  );
}
