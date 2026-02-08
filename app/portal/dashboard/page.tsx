import Link from "next/link";
import { PortalShell } from "@/app/portal/_components/PortalShell";
import { services } from "@/app/lib/data";

export default function PortalDashboard() {
  return (
    <PortalShell title="Dashboard">
      <div className="card p-6">
        <div className="font-extrabold text-lg">Quick status</div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            { k: "Active applications", v: "2" },
            { k: "Documents pending", v: "1" },
            { k: "Payments", v: "₦0 (demo)" }
          ].map((x) => (
            <div key={x.k} className="rounded-xl border border-ink-100 bg-ink-50 p-4">
              <div className="text-sm text-ink-600">{x.k}</div>
              <div className="mt-1 text-2xl font-black">{x.v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="font-extrabold text-lg">Services catalog</div>
            <div className="text-sm text-ink-700">Clients can browse what you offer.</div>
          </div>
          <Link href="/services" className="btn-ghost no-underline">Public site</Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.slug} className="rounded-xl border border-ink-100 bg-white p-4">
              <div className="font-extrabold">{s.title}</div>
              <div className="mt-1 text-sm text-ink-700">{s.desc}</div>
              <Link href={`/services/${s.slug}`} className="mt-3 inline-block text-sm font-semibold text-brand-700 no-underline hover:underline">
                View page →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </PortalShell>
  );
}
