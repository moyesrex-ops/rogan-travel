import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null) as null | { name?: string; email?: string; phone?: string; message?: string };
  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }
  console.log("Contact form submission:", body);
  return NextResponse.json({ ok: true });
}
