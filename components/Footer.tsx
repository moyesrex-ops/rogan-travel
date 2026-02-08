import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="container py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="no-underline"><BrandMark /></Link>
          <p className="mt-4 text-sm text-ink-700 max-w-lg">
            Visa support, flights, hotels, and travel protection — handled professionally.
          </p>
        </div>
        <div>
          <div className="font-extrabold mb-3">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="no-underline hover:underline">About</Link></li>
            <li><Link href="/countries" className="no-underline hover:underline">Countries</Link></li>
            <li><Link href="/blog" className="no-underline hover:underline">Blog</Link></li>
            <li><Link href="/contact" className="no-underline hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-extrabold mb-3">Services</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/study-visa" className="no-underline hover:underline">Study Visa</Link></li>
            <li><Link href="/services/visit-visa" className="no-underline hover:underline">Visit Visa</Link></li>
            <li><Link href="/services/flights" className="no-underline hover:underline">Flights</Link></li>
            <li><Link href="/services/hotels" className="no-underline hover:underline">Hotels</Link></li>
            <li><Link href="/services/insurance" className="no-underline hover:underline">Insurance</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-100">
        <div className="container py-6 text-sm text-ink-600 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Rogan Travel &amp; Tour. All rights reserved.</div>
          <div>Port Harcourt, Nigeria • info@rogantravel.com • 08126204242</div>
        </div>
      </div>
    </footer>
  );
}
