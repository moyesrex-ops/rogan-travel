import { PortalShell } from "@/app/portal/_components/PortalShell";
import { dualPrice } from "@/app/lib/currency";

const payments = [
  { ref: "RT-INV-10021", item: "Flight booking deposit", ngn: 120_000, status: "Pending" },
  { ref: "RT-INV-10018", item: "Hotel reservation", ngn: 260_000, status: "Paid" }
];

export default function PaymentsPage() {
  return (
    <PortalShell title="Payments">
      <div className="card p-6">
        <div className="font-extrabold text-lg">Payment history (demo)</div>
        <div className="mt-6 overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-ink-600">
                <th className="py-2">Reference</th>
                <th className="py-2">Item</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p) => {
                const amt = dualPrice(p.ngn);
                return (
                  <tr key={p.ref} className="border-t border-ink-100">
                    <td className="py-3 font-semibold">{p.ref}</td>
                    <td className="py-3">{p.item}</td>
                    <td className="py-3">{amt.ngn} • {amt.usd}</td>
                    <td className="py-3">
                      <span className={p.status === "Paid" ? "badge bg-green-100 text-green-800" : "badge bg-amber-100 text-amber-800"}>
                        {p.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </PortalShell>
  );
}
