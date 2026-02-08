import Link from "next/link";

const posts = [
  { slug: "uk-study-visa-checklist", title: "UK Study Visa Checklist (2025)", excerpt: "A practical checklist and common mistakes to avoid." },
  { slug: "visa-bank-statement-tips", title: "Bank Statement Tips for Visa Applications", excerpt: "What officers look for and how to avoid red flags." },
  { slug: "dubai-travel-deals", title: "Dubai Travel Deals: How to Save Without Risk", excerpt: "Deals, flexibility, and timing." },
  { slug: "insurance-explained", title: "Travel Insurance Explained in Plain English", excerpt: "What is covered, what isn't, and how to choose." }
];

export default function BlogIndex() {
  return (
    <div className="container py-12">
      <div className="badge">Blog</div>
      <h1 className="mt-3 text-4xl font-black">Guides & Updates</h1>
      <p className="mt-3 text-ink-700 max-w-3xl">Replace these with your real blog posts later.</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card p-6 no-underline hover:shadow-glow transition">
            <div className="font-extrabold text-xl text-ink-900">{p.title}</div>
            <div className="mt-2 text-sm text-ink-700">{p.excerpt}</div>
            <div className="mt-4 text-sm font-semibold text-brand-700">Read more →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
