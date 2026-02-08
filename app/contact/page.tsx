"use client";

import { useState } from "react";
import { company } from "@/app/lib/data";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("bad");
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="container py-12">
      <div className="badge">Contact</div>
      <h1 className="mt-3 text-4xl font-black">Let’s plan your next move</h1>
      <p className="mt-3 text-ink-700 max-w-3xl">
        For urgent visa/document matters, WhatsApp is the fastest route.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <form onSubmit={submit} className="card p-6 space-y-4">
          <div>
            <label className="text-sm font-semibold">Full name</label>
            <input className="mt-1 w-full rounded-xl border border-ink-200 px-3 py-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          </div>
          <div>
            <label className="text-sm font-semibold">Email</label>
            <input type="email" className="mt-1 w-full rounded-xl border border-ink-200 px-3 py-2" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div>
            <label className="text-sm font-semibold">Phone</label>
            <input className="mt-1 w-full rounded-xl border border-ink-200 px-3 py-2" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          </div>
          <div>
            <label className="text-sm font-semibold">Message</label>
            <textarea className="mt-1 w-full rounded-xl border border-ink-200 px-3 py-2 min-h-[140px]" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
          </div>

          <button className="btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "sent" ? <div className="text-sm font-semibold text-green-700">Sent. We’ll respond shortly.</div> : null}
          {status === "error" ? <div className="text-sm font-semibold text-red-700">Failed. Try again or use WhatsApp.</div> : null}
        </form>

        <div className="card p-6">
          <div className="font-extrabold text-lg">Office</div>
          <div className="mt-2 text-sm text-ink-700">{company.address}</div>

          <div className="mt-6 font-extrabold text-lg">Contact</div>
          <div className="mt-2 text-sm text-ink-700">
            <div>Email: {company.email}</div>
            <div>Phone: {company.phones.join(" / ")}</div>
          </div>

          <a className="btn-primary no-underline mt-4" href="https://wa.me/2348126204242?text=Hello%20Rogan%20Travel!%20I%20want%20to%20make%20an%20enquiry." target="_blank" rel="noreferrer">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
