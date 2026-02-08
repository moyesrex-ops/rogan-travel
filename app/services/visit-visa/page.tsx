import Link from "next/link";

export default function VisitVisaPage() {
  return (
    <div className="container py-12">
      <div className="badge">Service</div>
      <h1 className="mt-3 text-4xl font-black">Visit Visa Services</h1>
      <p className="mt-3 text-ink-700 max-w-3xl">
        Tourist and family visit visa support. No fixed pricing — we quote after understanding your case.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a className="btn-primary no-underline" href="https://wa.me/2348126204242?text=Hello%20Rogan%20Travel!%20I%20need%20visit%20visa%20assistance." target="_blank" rel="noreferrer">
          Chat on WhatsApp
        </a>
        <Link className="btn-ghost no-underline" href="/contact">Request a consultation</Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <div className="font-extrabold text-lg">Typical checklist</div>
          <ul className="mt-3 list-disc pl-5 text-sm text-ink-700 space-y-2">
            <li>Valid passport + biodata page</li>
            <li>Bank statements + proof of income</li>
            <li>Employment letter / business registration</li>
            <li>Invitation letter (if applicable)</li>
            <li>Travel itinerary + accommodation</li>
            <li>Travel history (if any)</li>
          </ul>
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
    </div>
  );
}
