import Link from "next/link";
import { dualPrice } from "@/app/lib/currency";

const plans = [
  { name: "Basic", bestFor: "Short trips", ngn: 45_000, points: ["Medical emergency", "Trip delay", "24/7 assistance"] },
  { name: "Standard", bestFor: "Most travelers", ngn: 85_000, points: ["Higher medical cover", "Baggage protection", "Cancellation cover"] },
  { name: "Premium", bestFor: "Long trips", ngn: 150_000, points: ["Top medical cover", "Sports add-ons", "Priority support"] }
];

export default function InsurancePage() {
  return (
    <div className="container py-12">
      <div className="badge">Service</div>
      <h1 className="mt-3 text-4xl font-black">Travel Insurance</h1>
      <p className="mt-3 text-ink-700 max-w-3xl">
        Example pricing in NGN and USD. Actual premiums depend on destination, duration, age, and coverage.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/contact" className="btn-primary no-underline">Get an insurance quote</Link>
        <a className="btn-ghost no-underline" href="https://wa.me/2348126204242?text=Hello%20Rogan%20Travel!%20I%20need%20travel%20insurance." target="_blank" rel="noreferrer">WhatsApp</a>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((p) => {
          const price = dualPrice(p.ngn);
          return (
            <div key={p.name} className="card p-6">
              <div className="badge">{p.bestFor}</div>
              <div className="mt-3 font-black text-2xl">{p.name}</div>
              <div className="mt-2 text-sm text-ink-700">{price.ngn} • {price.usd}</div>
              <ul className="mt-4 text-sm text-ink-700 list-disc pl-5 space-y-2">
                {p.points.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
