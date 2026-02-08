"use client";

import { useMemo, useState } from "react";
import { Bot, Send, X } from "lucide-react";

type Msg = { role: "user" | "assistant"; text: string };

const quick = [
  "What documents do I need for a UK study visa?",
  "How long does a visit visa process take?",
  "Can you help with flight bookings from Lagos?",
  "I need hotel reservation for visa application."
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "assistant", text: "Hi — I’m the Rogan Travel assistant. Ask me about visas, flights, hotels, or insurance." }
  ]);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  async function send(text: string) {
    const t = text.trim();
    if (!t) return;
    setMsgs((m) => [...m, { role: "user", text: t }]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: t })
      });
      const data = (await res.json()) as { reply?: string };
      setMsgs((m) => [...m, { role: "assistant", text: data.reply ?? "I can help — please rephrase that." }]);
    } catch {
      setMsgs((m) => [...m, { role: "assistant", text: "Connection issue. You can also reach us on WhatsApp for quick help." }]);
    }
  }

  return (
    <>
      <button className="fixed bottom-5 left-5 z-50 btn-ghost rounded-full h-14 w-14 p-0 shadow-soft" onClick={() => setOpen(true)} aria-label="Open assistant">
        <Bot className="h-6 w-6" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm">
          <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[420px] card overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-ink-100 bg-white">
              <div className="font-extrabold">Rogan AI Assistant</div>
              <button className="btn-ghost" onClick={() => setOpen(false)} aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[50vh] overflow-auto p-4 space-y-3 bg-ink-50">
              {msgs.map((m, i) => (
                <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                  <div className={m.role === "user"
                    ? "max-w-[85%] rounded-2xl bg-brand-600 text-white px-3 py-2 text-sm shadow-soft"
                    : "max-w-[85%] rounded-2xl bg-white px-3 py-2 text-sm shadow-soft border border-ink-100"}>
                    {m.text}
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <div className="text-xs font-semibold text-ink-600 mb-2">Quick questions</div>
                <div className="flex flex-wrap gap-2">
                  {quick.map((q) => (
                    <button key={q} className="badge hover:bg-ink-200" onClick={() => send(q)}>{q}</button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3 bg-white border-t border-ink-100 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question…"
                className="w-full rounded-xl border border-ink-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500/20"
                onKeyDown={(e) => { if (e.key === "Enter") send(input); }}
              />
              <button className="btn-primary" disabled={!canSend} onClick={() => send(input)}>
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
