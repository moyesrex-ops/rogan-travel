import Link from "next/link";
import Image from "next/image";
import { dualPrice } from "@/app/lib/currency";

const deals = [
  { city: "Dubai", hotel: "Marina View Boutique", nights: 3, ngn: 780_000, perks: ["Breakfast", "Free cancellation"] },
  { city: "London", hotel: "Central City Stay", nights: 4, ngn: 1_450_000, perks: ["Near Tube", "Pay at hotel"] },
  { city: "Istanbul", hotel: "Bosphorus Comfort", nights: 5, ngn: 620_000, perks: ["Airport pickup option", "Great reviews"] },
  { city: "Toronto", hotel: "Downtown Suites", nights: 4, ngn: 1_880_000, perks: ["Visa-friendly booking", "Flexible dates"] }
];

export default function HotelsPage() {
  return (
    <div className="container py-12">
      <div className="badge">Service</div>
      <h1 className="mt-3 text-4xl font-black">Hotel Reservations</h1>
      <p className="mt-3 text-ink-700 max-w-3xl">
        Curated “deal-style” examples. Real-time hotel pricing requires an affiliate feed/partner API.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/contact" className="btn-primary no-underline">Request a hotel quote</Link>
        <a className="btn-ghost no-underline" href="https://wa.me/2348126204242?text=Hello%20Rogan%20Travel!%20I%20need%20hotel%20reservation." target="_blank" rel="noreferrer">WhatsApp</a>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card overflow-hidden">
          <div className="relative h-56">
            <Image alt="Hotel" fill className="object-cover" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80" />
          </div>
          <div className="p-6">
            <div className="font-extrabold text-lg">Visa-friendly reservations</div>
            <p className="mt-2 text-sm text-ink-700">
              We provide properly documented reservations suitable for visa applications when required.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {deals.map((d) => {
            const p = dualPrice(d.ngn);
            return (
              <div key={d.city + d.hotel} className="card p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-extrabold">{d.city}</div>
                    <div className="text-sm text-ink-700">{d.hotel}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-extrabold">{p.ngn}</div>
                    <div className="text-sm text-ink-600">{p.usd} • {d.nights} nights</div>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {d.perks.map((x) => <span key={x} className="badge">{x}</span>)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
