const egenskaper = ["Løsningsorientert", "Teamplayer", "Nysgjerrig", "Strukturert", "Engasjert"];

export default function Egenskaper() {
  return (
    <section className="mb-12 pt-10 border-t border-gray-300/50 dark:border-gray-700/50">
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-5">Egenskaper</h2>
      <div className="flex flex-wrap gap-2">
        {egenskaper.map((egenskap) => (
          <span key={egenskap} className="px-3 py-1.5 bg-white/70 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700">
            {egenskap}
          </span>
        ))}
      </div>
    </section>
  );
}
