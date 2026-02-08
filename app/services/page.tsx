import Link from "next/link";
import { services } from "@/app/lib/data";

export default function ServicesIndex() {
  return (
    <div className="container py-12">
      <div className="badge">Services</div>
      <h1 className="mt-3 text-4xl font-black">Everything we handle</h1>
      <p className="mt-3 text-ink-700 max-w-3xl">
        Visa services are quote-based because requirements vary per client. Flights/hotels/insurance show example ranges.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.slug} className="card p-6">
            <div className="font-extrabold text-lg">{s.title}</div>
            <div className="mt-2 text-sm text-ink-700">{s.desc}</div>
            <div className="mt-4">
              <Link href={`/services/${s.slug}`} className="btn-primary no-underline">{s.cta}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
