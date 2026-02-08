import { PortalShell } from "@/app/portal/_components/PortalShell";

const apps = [
  { name: "Study Visa - UK", status: "Documents Under Review", progress: 80, next: "Interview preparation", updated: "Today" },
  { name: "Visit Visa - UAE", status: "Checklist Sent", progress: 35, next: "Submit documents", updated: "Yesterday" }
];

export default function ApplicationsPage() {
  return (
    <PortalShell title="Applications">
      <div className="card p-6">
        <div className="font-extrabold text-lg">Tracking</div>
        <div className="mt-6 grid gap-4">
          {apps.map((a) => (
            <div key={a.name} className="rounded-2xl border border-ink-100 bg-ink-50 p-5">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="font-extrabold">{a.name}</div>
                  <div className="text-sm text-ink-700 mt-1">Status: {a.status}</div>
                  <div className="text-sm text-ink-700">Next step: {a.next}</div>
                </div>
                <div className="text-sm text-ink-600">Updated: {a.updated}</div>
              </div>
              <div className="mt-4">
                <div className="h-3 w-full rounded-full bg-white border border-ink-100 overflow-hidden">
                  <div className="h-full bg-brand-600" style={{ width: `${a.progress}%` }} />
                </div>
                <div className="mt-2 text-xs text-ink-600">{a.progress}% complete</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PortalShell>
  );
}
