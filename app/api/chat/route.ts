import { NextResponse } from "next/server";

export const runtime = "nodejs"; // important for server-side key usage

type Body = { message?: string };

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as Body;
  const message = (body.message || "").trim();

  if (!message) {
    return NextResponse.json({ reply: "Please type your question.", debug: { usedOpenAI: false, reason: "empty_message" } });
  }

  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    return NextResponse.json({
      reply: "Server is missing OPENAI_API_KEY.",
      debug: { usedOpenAI: false, reason: "missing_key" },
    }, { status: 500 });
  }

  try {
    const r = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        input: [
          {
            role: "system",
            content:
              "You are Rogan Travel & Tour’s assistant. Be warm, African + global professional. Ask 1–2 clarifying questions when needed. For visa help: give a checklist, timelines, and next steps. Always offer WhatsApp contact. Do NOT mention any 'application fee price'.",
          },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await r.json();

    // Responses API returns text in output[].content[].text
    const text =
      data?.output?.[0]?.content?.map((c: any) => c?.text).filter(Boolean).join("") ||
      data?.output_text ||
      "";

    if (!r.ok || !text) {
      return NextResponse.json({
        reply: "OpenAI call failed, using fallback. Check Vercel logs.",
        debug: { usedOpenAI: false, reason: "openai_error", status: r.status, data },
      }, { status: 200 });
    }

    return NextResponse.json({
      reply: text,
      debug: { usedOpenAI: true },
    });
  } catch (err: any) {
    return NextResponse.json({
      reply: "OpenAI call crashed, using fallback. Check Vercel logs.",
      debug: { usedOpenAI: false, reason: "exception", error: String(err?.message || err) },
    }, { status: 200 });
  }
}
