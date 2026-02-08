import { NextResponse } from "next/server";

function fallbackReply(message: string) {
  const m = message.toLowerCase();
  if (m.includes("study") && m.includes("visa")) return "For study visas: destination + intake date + highest qualification + funds proof. Send these on WhatsApp for a tailored checklist.";
  if (m.includes("visit") && m.includes("visa")) return "For visit visas: destination + travel dates + employment/business proof + funds + invitation (if any). Message us for the checklist.";
  if (m.includes("hotel")) return "For hotels: city, dates, budget, guests. We can provide visa-friendly bookings when needed.";
  if (m.includes("flight")) return "For flights: origin, destination, dates, passengers, cabin class. We’ll send options and explain baggage/refund rules.";
  return "Tell me your destination + timeline and what service you need (visa, flight, hotel, insurance).";
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null) as null | { message?: string };
  const message = body?.message?.toString() ?? "";
  if (!message) return NextResponse.json({ reply: "Please type a message." });
  return NextResponse.json({ reply: fallbackReply(message) });
}
