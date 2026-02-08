"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PortalLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("demo@rogantravel.com");
  const [password, setPassword] = useState("demo1234");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/portal/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Login failed");
      localStorage.setItem("rt_token", data.token);
      router.push("/portal/dashboard");
    } catch (err: any) {
      setError(err.message ?? "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container py-12">
      <div className="badge">Client Portal</div>
      <h1 className="mt-3 text-4xl font-black">Sign in</h1>
      <p className="mt-3 text-ink-700 max-w-2xl">
        Demo mode (no database). Use the default login. We'll wire real auth later.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 items-start">
        <form onSubmit={login} className="card p-6 space-y-4">
          <div>
            <label className="text-sm font-semibold">Email</label>
            <input className="mt-1 w-full rounded-xl border border-ink-200 px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="text-sm font-semibold">Password</label>
            <input type="password" className="mt-1 w-full rounded-xl border border-ink-200 px-3 py-2" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="btn-primary" disabled={loading}>{loading ? "Signing in..." : "Sign in"}</button>
          {error ? <div className="text-sm font-semibold text-red-700">{error}</div> : null}
        </form>

        <div className="card p-6">
          <div className="font-extrabold text-lg">Inside the portal</div>
          <ul className="mt-3 list-disc pl-5 text-sm text-ink-700 space-y-2">
            <li>Dashboard</li>
            <li>Application tracking</li>
            <li>Document uploads (demo)</li>
            <li>Payment history (demo)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
