import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ChatBody = { message?: string };

function fallbackReply(userMsg: string) {
  const m = userMsg.toLowerCase();

  // Lead-qualifier style fallback (used only if Groq is missing/down)
  if (m.includes("study") || m.includes("student")) {
    return `Study visa support ✅
Tell me:
1) Country (UK/USA/Canada/Australia/Germany/Ireland)
2) Intended intake month/year
3) Your highest qualification + GPA (if any)
4) Do you already have admission?

If you want fast help, message us on WhatsApp: 08126204242`;
  }

  if (m.includes("visit") || m.includes("tourist")) {
    return `Visit visa help ✅
Tell me:
1) Destination country
2) Travel date range
3) Purpose (tourism / family / business)
4) Employment/business proof + available funds

If you want fast help, message us on WhatsApp: 08126204242`;
  }

  if (m.includes("flight")) {
    return `Flight bookings ✈️
Tell me:
From → To, travel dates, number of passengers, cabin class (Economy/Business/First).
We’ll send the best options + price.`;
  }

  if (m.includes("hotel")) {
    return `Hotel reservations 🏨
Tell me:
City, check-in/out dates, number of guests, budget range, and preferred area.
We’ll recommend verified options.`;
  }

  return `Tell me what you need (study visa, visit visa, flights, hotels, insurance, documents) + your destination and timeline.`;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ChatBody;
    const message = (body?.message || "").trim();

    if (!message) {
      return NextResponse.json({ reply: "Please type a message." }, { status: 400 });
    }

    const GROQ_API_KEY = process.env.GROQ_API_KEY;

    // If no key, use fallback so the site still works
    if (!GROQ_API_KEY) {
      return NextResponse.json({ reply: fallbackReply(message) });
    }

    const system = `
You are the official assistant for Rogan Travel & Tour (Nigeria).
Business focus: visa assistance (study/visit), travel bookings (flights/hotels), travel insurance, document processing.
Rules:
- Do NOT show or quote prices/fees for visa assistance or document processing. For those, encourage WhatsApp contact.
- For flights/hotels/insurance: you may discuss estimated ranges and what info is needed to quote.
- Be concise, professional, and ask 2–5 clarifying questions when needed.
Business contact:
- WhatsApp/Phone: 08126204242, 08165096822
- Email: rogantravelandtour@gmail.com
Address: 8 Obilor Street, Rumuomasi, Port Harcourt, Nigeria
`;

    const resp = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3-70b-8192",
        temperature: 0.5,
        max_tokens: 350,
        messages: [
          { role: "system", content: system.trim() },
          { role: "user", content: message },
        ],
      }),
    });

    if (!resp.ok) {
      // If Groq errors or rate-limits, fall back instead of breaking the UI
      return NextResponse.json({ reply: fallbackReply(message) }, { status: 200 });
    }

    const data = await resp.json();
    const reply =
      data?.choices?.[0]?.message?.content?.trim() || fallbackReply(message);

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ reply: "Something went wrong. Please try again." }, { status: 200 });
  }
}
