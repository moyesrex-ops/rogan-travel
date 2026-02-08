"use client";

import { useState } from "react";
import { PortalShell } from "@/app/portal/_components/PortalShell";

export default function DocumentsPage() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  async function upload(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    if (!files || files.length === 0) { setMsg("Pick a file first."); return; }
    setMsg(`Uploaded (demo): ${files[0].name}`);
  }

  return (
    <PortalShell title="Documents">
      <div className="card p-6">
        <div className="font-extrabold text-lg">Upload documents (demo)</div>
        <p className="mt-2 text-sm text-ink-700">UI-only demo. Production upload needs secure storage + DB.</p>

        <form onSubmit={upload} className="mt-6 space-y-3">
          <input type="file" onChange={(e) => setFiles(e.target.files)} />
          <button className="btn-primary">Upload</button>
          {msg ? <div className="text-sm font-semibold text-ink-700">{msg}</div> : null}
        </form>
      </div>
    </PortalShell>
  );
}
