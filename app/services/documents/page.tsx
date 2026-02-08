import Link from "next/link";

export default function DocumentsPage() {
  return (
    <div className="container py-12">
      <div className="badge">Service</div>
      <h1 className="mt-3 text-4xl font-black">Document Processing</h1>
      <p className="mt-3 text-ink-700 max-w-3xl">
        Passport applications, renewals, verification, affidavits, and other processing services. No fixed pricing.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a className="btn-primary no-underline" href="https://wa.me/2348126204242?text=Hello%20Rogan%20Travel!%20I%20need%20document%20processing%20help." target="_blank" rel="noreferrer">
          Start on WhatsApp
        </a>
        <Link className="btn-ghost no-underline" href="/contact">Contact form</Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <div className="font-extrabold text-lg">Common requests</div>
          <ul className="mt-3 list-disc pl-5 text-sm text-ink-700 space-y-2">
            <li>Passport application & renewal guidance</li>
            <li>Document verification</li>
            <li>Apostille / attestation guidance</li>
            <li>Affidavits and supporting documentation</li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="font-extrabold text-lg">What to send us</div>
          <p className="mt-2 text-sm text-ink-700">Describe what you need, your timeline, and your location. We’ll reply with next steps.</p>
        </div>
      </div>
    </div>
  );
}
