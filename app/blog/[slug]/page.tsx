import Link from "next/link";

type Props = { params: { slug: string } };

const content: Record<string, { title: string; body: string[] }> = {
  "uk-study-visa-checklist": {
    title: "UK Study Visa Checklist (2025)",
    body: [
      "Start with your admission documents, then build a clean checklist: passport, tuition proof, funds, academic docs, and SOP.",
      "Avoid mismatched dates and unexplained deposits. Keep names consistent across documents.",
      "If you want a fast review, message us on WhatsApp."
    ]
  },
  "visa-bank-statement-tips": {
    title: "Bank Statement Tips for Visa Applications",
    body: [
      "Visa officers look for stability: regular inflow, believable expenses, and a clear source of funds.",
      "Large last-minute deposits can be red flags. If unavoidable, document the source properly.",
      "Keep statements clear and consistent with your declared income."
    ]
  },
  "dubai-travel-deals": {
    title: "Dubai Travel Deals: How to Save Without Risk",
    body: [
      "Deals are real — but many come with strict conditions. Always check baggage and cancellation rules.",
      "Flexible dates (±2 days) can reduce cost significantly. Mid-week travel often wins.",
      "Ask for 3–5 options so you can compare trade-offs quickly."
    ]
  },
  "insurance-explained": {
    title: "Travel Insurance Explained in Plain English",
    body: [
      "Insurance mainly covers financial risk: medical emergencies, trip delays, cancellations, and baggage issues.",
      "The key is selecting a policy that matches destination requirements and your trip duration.",
      "Request a quote if you’re unsure; we’ll recommend a safe baseline plan."
    ]
  }
};

export default function BlogPost({ params }: Props) {
  const post = content[params.slug] ?? {
    title: "Post not found",
    body: ["This article doesn't exist yet. Return to the blog index."]
  };

  return (
    <div className="container py-12">
      <Link href="/blog" className="text-sm font-semibold text-brand-700 no-underline hover:underline">← Back to Blog</Link>
      <h1 className="mt-4 text-4xl font-black">{post.title}</h1>
      <div className="mt-6 space-y-4 text-ink-800">
        {post.body.map((p, i) => <p key={i} className="leading-relaxed">{p}</p>)}
      </div>
    </div>
  );
}
