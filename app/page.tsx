import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Globe, ShieldCheck, Sparkles, Timer } from "lucide-react";
import { company, services, testimonials } from "@/app/lib/data";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-1" aria-label={`${n} star rating`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < n ? "text-amber-500" : "text-ink-300"}>★</span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-ink-50" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-ink-500/10 blur-3xl" />

        <div className="container relative py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <div className="badge">Port Harcourt • Nigeria • Worldwide</div>
            <h1 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-ink-900">
              Your Gateway to the World — visas, flights, hotels, and insurance.
            </h1>
            <p className="mt-4 text-lg text-ink-700 max-w-xl">
              A professional travel agency workflow: clear checklists, fast turnaround, and real support.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/services" className="btn-primary no-underline">
                Explore Services <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
              <Link href="/contact" className="btn-ghost no-underline">Get a Consultation</Link>
              <Link href="/portal" className="btn-ghost no-underline">Client Portal</Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 max-w-xl">
              <div className="card p-4">
                <div className="flex items-center gap-2 font-extrabold"><BadgeCheck className="h-5 w-5 text-brand-700" /> 98%+</div>
                <div className="text-sm text-ink-600">Client satisfaction (internal tracking)</div>
              </div>
              <div className="card p-4">
                <div className="flex items-center gap-2 font-extrabold"><Globe className="h-5 w-5 text-brand-700" /> 50+</div>
                <div className="text-sm text-ink-600">Countries supported</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="card overflow-hidden">
              <div className="relative h-[320px] md:h-[420px]">
                <Image
                  alt="Travel"
                  fill
                  priority
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1600&q=80"
                />
              </div>
              <div className="p-5">
                <div className="font-extrabold text-lg">Fast, structured process</div>
                <p className="text-sm text-ink-700 mt-1">
                  We combine checklists + timelines + clear communication. No guessing.
                </p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <span className="badge"><Timer className="h-4 w-4 mr-1" /> Fast turnaround</span>
                  <span className="badge"><ShieldCheck className="h-4 w-4 mr-1" /> Secure handling</span>
                  <span className="badge"><Sparkles className="h-4 w-4 mr-1" /> Premium guidance</span>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-black/5 bg-white p-4">
              <div className="text-sm font-extrabold">Contact</div>
              <div className="mt-1 text-sm text-neutral-600">info@rogantravel.com</div>
              <div className="text-sm text-neutral-600">08126204242 / 08165096822</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <a className="btn btn-primary" href="/contact">Get a Consultation</a>
                <a className="btn btn-ghost" href="https://wa.me/2348126204242" target="_blank" rel="noreferrer">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="badge">What we do</div>
            <h2 className="mt-3 text-3xl font-black">Services built for real clients</h2>
            <p className="mt-2 text-ink-700 max-w-2xl">
              Visa services focus on outcomes, not price tags. Flights, hotels and insurance show example ranges in NGN and USD.
            </p>
          </div>
          <Link href="/services" className="btn-ghost no-underline">View all</Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.slug} className="card p-6">
              <div className="font-extrabold text-lg">{s.title}</div>
              <p className="mt-2 text-sm text-ink-700">{s.desc}</p>
              <div className="mt-4">
                <Link href={`/services/${s.slug}`} className="btn-primary no-underline">
                  {s.cta} <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-ink-100">
        <div className="container py-16 grid gap-6 md:grid-cols-4">
          {[
            { title: "Clear checklists", desc: "You always know the next step.", icon: BadgeCheck },
            { title: "Transparent comms", desc: "WhatsApp updates and quick responses.", icon: Sparkles },
            { title: "Global coverage", desc: "Study, visit, travel bookings across routes.", icon: Globe },
            { title: "Secure handling", desc: "Privacy-first handling of your docs.", icon: ShieldCheck }
          ].map((f) => (
            <div key={f.title} className="card p-6">
              <f.icon className="h-6 w-6 text-brand-700" />
              <div className="mt-3 font-extrabold">{f.title}</div>
              <div className="mt-1 text-sm text-ink-700">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <div className="badge">Social proof</div>
        <h2 className="mt-3 text-3xl font-black">What clients say</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((x) => (
            <div key={x.name} className="card p-6">
              <Stars n={x.rating} />
              <p className="mt-3 text-ink-800">“{x.text}”</p>
              <div className="mt-4 font-extrabold">{x.name}</div>
              <div className="text-sm text-ink-600">{x.role}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 card p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="font-extrabold">Want a free consultation?</div>
            <div className="text-sm text-ink-700">Tell us your destination and timeline — we’ll advise the next step.</div>
          </div>
          <Link href="/contact" className="btn-primary no-underline">Contact us</Link>
        </div>
      </section>
    </div>
  );
}
