import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null) as null | { email?: string; password?: string };
  const email = body?.email ?? "";
  const password = body?.password ?? "";

  const demoEmail = process.env.DEMO_PORTAL_EMAIL ?? "demo@rogantravel.com";
  const demoPassword = process.env.DEMO_PORTAL_PASSWORD ?? "demo1234";

  if (email !== demoEmail || password !== demoPassword) {
    return NextResponse.json({ error: "Invalid credentials (demo mode)." }, { status: 401 });
  }

  const token = "demo-" + Math.random().toString(36).slice(2);
  return NextResponse.json({ token });
}
