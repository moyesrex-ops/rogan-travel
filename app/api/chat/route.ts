import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { reply: "Server misconfigured: OPENAI_API_KEY is missing." },
        { status: 500 }
      );
    }

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-5.2",
        messages: [
          {
            role: "system",
            content:
              "You are Rogan Travel & Tour’s assistant. Be concise, professional, Nigeria-aware, and always push WhatsApp contact as the next step when the user wants to proceed. Never mention internal fees unless asked directly.",
          },
          { role: "user", content: String(message ?? "") },
        ],
      }),
    });

    if (!r.ok) {
      const errText = await r.text();
      return NextResponse.json(
        { reply: `OpenAI error (${r.status}): ${errText}` },
        { status: 500 }
      );
    }

    const data = await r.json();
    const reply = data?.choices?.[0]?.message?.content ?? "No reply returned.";

    return NextResponse.json({ reply });
  } catch (e: any) {
    return NextResponse.json(
      { reply: `Server error: ${e?.message ?? "unknown"}` },
      { status: 500 }
    );
  }
}
