"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import { cn } from "@/components/utils";
import { BrandMark } from "@/components/BrandMark";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/study-visa", label: "Study Visa" },
      { href: "/services/visit-visa", label: "Visit Visa" },
      { href: "/services/flights", label: "Flights" },
      { href: "/services/hotels", label: "Hotels" },
      { href: "/services/insurance", label: "Insurance" },
      { href: "/services/documents", label: "Document Processing" }
    ]
  },
  { href: "/countries", label: "Countries" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = useMemo(() => (href: string) => pathname === href || pathname.startsWith(href + "/"), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="no-underline"><BrandMark /></Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className={cn("text-sm font-semibold no-underline hover:text-brand-700", active(item.href) && "text-brand-700")}
              >
                <span className="inline-flex items-center gap-1">
                  {item.label}
                  {item.children ? <ChevronDown className="h-4 w-4 opacity-70" /> : null}
                </span>
              </Link>

              {item.children ? (
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute left-0 mt-3 w-56 rounded-2xl border border-ink-100 bg-white shadow-soft p-2">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className={cn("block rounded-xl px-3 py-2 text-sm font-semibold no-underline hover:bg-ink-50", active(c.href) && "bg-ink-50")}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <Link href="/portal" className="btn-primary no-underline">Client Portal</Link>
        </nav>

        <button className="md:hidden btn-ghost" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t border-ink-100 bg-white">
          <div className="container py-4 flex flex-col gap-2">
            {nav.map((item) => (
              <div key={item.href} className="flex flex-col">
                <Link href={item.href} className="px-3 py-2 rounded-xl font-semibold no-underline hover:bg-ink-50" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="pl-3 pb-2">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} className="block px-3 py-2 rounded-xl text-sm font-semibold no-underline hover:bg-ink-50" onClick={() => setOpen(false)}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Link href="/portal" className="btn-primary no-underline mt-2" onClick={() => setOpen(false)}>Client Portal</Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
