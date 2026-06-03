import PageLayout from "../components/page-layout";

export default function Prosjekter() {
  return (
    <PageLayout>
      <h1 className="text-5xl font-bold tracking-tight leading-tight mb-10 text-gray-900 dark:text-white text-center">
        Prosjekter
      </h1>
      <section>
        <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
          Her vil jeg legge ut prosjekter jeg har jobbet med. Kommer snart!
        </p>
      </section>
    </PageLayout>
  );
}
