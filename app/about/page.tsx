import Image from "next/image";
import { company } from "@/app/lib/data";

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="badge">About</div>
      <h1 className="mt-3 text-4xl font-black">Rogan Travel &amp; Tour</h1>
      <p className="mt-3 text-ink-700 max-w-3xl">
        We run a structured travel and visa support workflow: discovery → checklist → document review → submission guidance → follow-ups.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 items-stretch">
        <div className="card overflow-hidden">
          <div className="relative h-64">
            <Image alt="Team" fill className="object-cover" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80" />
          </div>
          <div className="p-6">
            <div className="font-extrabold text-lg">Mission</div>
            <p className="mt-2 text-sm text-ink-700">Make travel and visa prep predictable with clear steps and strong communication.</p>
          </div>
        </div>

        <div className="card p-6">
          <div className="font-extrabold text-lg">Office</div>
          <p className="mt-2 text-sm text-ink-700">{company.address}</p>

          <div className="mt-6 font-extrabold text-lg">What we believe</div>
          <ul className="mt-2 list-disc pl-5 text-sm text-ink-700 space-y-2">
            <li>Clients deserve clarity and timelines.</li>
            <li>Paperwork is a process — not a mystery.</li>
            <li>Speed matters, but accuracy matters more.</li>
            <li>Good service is communication.</li>
          </ul>

          <div className="mt-6 font-extrabold text-lg">Contact</div>
          <div className="mt-2 text-sm text-ink-700">
            <div>Email: {company.email}</div>
            <div>Phone: {company.phones.join(" / ")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
