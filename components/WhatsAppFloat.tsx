"use client";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const phone = "2348126204242";
  const text = encodeURIComponent("Hello Rogan Travel! I’d like to make an enquiry.");
  const href = `https://wa.me/${phone}?text=${text}`;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-50 btn-primary rounded-full h-14 w-14 p-0 shadow-soft" aria-label="Chat on WhatsApp">
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
