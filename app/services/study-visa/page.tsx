import Link from "next/link";
import { countries } from "@/app/lib/data";

export default function StudyVisaPage() {
  return (
    <div className="container py-12">
      <div className="badge">Service</div>
      <h1 className="mt-3 text-4xl font-black">Study Visa Assistance</h1>
      <p className="mt-3 text-ink-700 max-w-3xl">
        No fixed prices here — requirements vary by profile and destination. Start on WhatsApp for a tailored checklist.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a className="btn-primary no-underline" href="https://wa.me/2348126204242?text=Hello%20Rogan%20Travel!%20I%20need%20study%20visa%20assistance." target="_blank" rel="noreferrer">
          Chat on WhatsApp
        </a>
        <Link className="btn-ghost no-underline" href="/contact">Request a consultation</Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <div className="font-extrabold text-lg">Popular destinations</div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {countries.slice(0, 6).map((c) => (
              <div key={c.code} className="rounded-xl border border-ink-100 bg-ink-50 p-4">
                <div className="font-extrabold">{c.name}</div>
                <div className="text-sm text-ink-700 mt-1">{c.highlight}</div>
              </div>
            ))}
          </div>
        </div>

<div className="card p-6">
  <div className="font-extrabold text-lg">How it works</div>
  <ol className="mt-3 list-decimal pl-5 text-sm text-ink-700 space-y-2">
    <li>Discovery call (destination, timeline, budget).</li>
    <li>Document checklist + personalized guidance.</li>
    <li>Review and corrections.</li>
    <li>Submission support + follow-up strategy.</li>
    <li>Interview prep (if required).</li>
    <li>Travel planning (flights/hotels/insurance) when approved.</li>
  </ol>
</div>

      </div>

      <div className="mt-10 card p-6">
        <div className="font-extrabold">What we need from you</div>
        <div className="mt-2 text-sm text-ink-700">
          Destination, intended intake date, highest qualification, and any prior refusals.
        </div>
      </div>
    </div>
  );
}
