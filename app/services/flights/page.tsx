import Link from "next/link";
import { dualPrice } from "@/app/lib/currency";

const routes = [
  { from: "Lagos", to: "London", economyNgn: 950_000, businessNgn: 2_900_000 },
  { from: "Lagos", to: "Dubai", economyNgn: 520_000, businessNgn: 1_800_000 },
  { from: "Lagos", to: "Toronto", economyNgn: 1_650_000, businessNgn: 4_400_000 },
  { from: "Port Harcourt", to: "Abuja", economyNgn: 85_000, businessNgn: 160_000 }
];

export default function FlightsPage() {
  return (
    <div className="container py-12">
      <div className="badge">Service</div>
      <h1 className="mt-3 text-4xl font-black">Flight Bookings</h1>
      <p className="mt-3 text-ink-700 max-w-3xl">
        Example ranges (not live inventory). Real-time pricing requires an aggregator API (Amadeus, etc.).
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/contact" className="btn-primary no-underline">Request a flight quote</Link>
        <a className="btn-ghost no-underline" href="https://wa.me/2348126204242?text=Hello%20Rogan%20Travel!%20I%20need%20flight%20options." target="_blank" rel="noreferrer">WhatsApp</a>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {routes.map((r) => {
          const econ = dualPrice(r.economyNgn);
          const biz = dualPrice(r.businessNgn);
          return (
            <div key={r.from + r.to} className="card p-6">
              <div className="font-extrabold text-lg">{r.from} → {r.to}</div>
              <div className="mt-3 grid gap-3">
                <div className="rounded-xl border border-ink-100 bg-ink-50 p-4">
                  <div className="font-extrabold">Economy (example)</div>
                  <div className="text-sm text-ink-700 mt-1">{econ.ngn} • {econ.usd}</div>
                </div>
                <div className="rounded-xl border border-ink-100 bg-ink-50 p-4">
                  <div className="font-extrabold">Business (example)</div>
                  <div className="text-sm text-ink-700 mt-1">{biz.ngn} • {biz.usd}</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-ink-600">Includes typical 15–20% service markup depending on season.</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
