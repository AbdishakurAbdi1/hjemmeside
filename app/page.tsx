import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 px-4">
      <div className="max-w-screen-sm mx-auto text-lg flex flex-col gap-6 py-24 p-8 text-4xl font-bold">
        <div></div>
        <h1 className="text-4xl font-bold text-gray-100">
           Hei, jeg heter Abdishakur Abdi!
        </h1>
        <p>
          Jeg studerer Datateknologi på Universitetet i Bergen
        </p>
        <p>
          Jeg ville lage en nettside hvor venner, familie, og andre kunne lære mer om meg, og hva jeg driver med.
        </p>

        <p>Denne nettsiden blir utviklet med</p>

        <ul className="pl-4 list-disc">
          <li>Next.js</li>
          <li>Typescript</li>
          <li>TailwindCSS</li>
          <li>Vercel</li>
        </ul>
      </div>
    </div>
  );
}
