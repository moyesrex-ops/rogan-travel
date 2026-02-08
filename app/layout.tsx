import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ChatWidget } from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Rogan Travel & Tour",
  description: "Professional travel & visa agency — visas, flights, hotels, and travel insurance."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ChatWidget />
      </body>
    </html>
  );
}
