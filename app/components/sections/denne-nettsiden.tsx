const teknologier = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"];

export default function DenneNettsiden() {
  return (
    <section className="pt-10 border-t border-gray-300/50 dark:border-gray-700/50">
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Denne nettsiden</h2>
      <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-4 max-w-xl">
        Nettsiden er bygget med:
      </p>
      <div className="flex flex-wrap gap-2">
        {teknologier.map((tech) => (
          <span key={tech} className="px-3 py-1.5 bg-white/70 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
