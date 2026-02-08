import { countries } from "@/app/lib/data";

export default function CountriesPage() {
  return (
    <div className="container py-12">
      <div className="badge">Countries</div>
      <h1 className="mt-3 text-4xl font-black">Where we help clients travel</h1>
      <p className="mt-3 text-ink-700 max-w-3xl">Destination-specific checklists and guidance for study and visit visas.</p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {countries.map((c) => (
          <div key={c.code} className="card p-6">
            <div className="font-extrabold text-lg">{c.name}</div>
            <div className="mt-2 text-sm text-ink-700">{c.highlight}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
