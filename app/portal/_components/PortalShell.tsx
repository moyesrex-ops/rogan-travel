"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const links = [
  { href: "/portal/dashboard", label: "Dashboard" },
  { href: "/portal/applications", label: "Applications" },
  { href: "/portal/documents", label: "Documents" },
  { href: "/portal/payments", label: "Payments" }
];

export function PortalShell({ title, children }: { title: string; children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("rt_token");
    if (!token) router.replace("/portal");
    else setReady(true);
  }, [router]);

  function logout() {
    localStorage.removeItem("rt_token");
    router.push("/portal");
  }

  if (!ready) return <div className="container py-12 text-ink-700">Checking session…</div>;

  return (
    <div className="container py-12">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <div className="badge">Portal</div>
          <h1 className="mt-2 text-3xl font-black">{title}</h1>
        </div>
        <button className="btn-ghost" onClick={logout}>Log out</button>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-[240px_1fr]">
        <aside className="card p-4 h-fit">
          <div className="font-extrabold mb-3">Menu</div>
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="px-3 py-2 rounded-xl no-underline font-semibold hover:bg-ink-50">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 text-xs text-ink-600">Demo mode. Connect MongoDB for production.</div>
        </aside>

        <section className="space-y-6">{children}</section>
      </div>
    </div>
  );
}
