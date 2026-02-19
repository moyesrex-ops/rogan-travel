# CLAUDE.md

## Project Overview

Rogan Travel & Tour (v2) — a full-stack travel and visa agency website with a demo client portal. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The site serves as a marketing website for a Nigerian travel agency plus a client-facing portal for tracking applications, documents, and payments.

**Current state:** Frontend is functional with demo/hard-coded data. Production features (MongoDB, JWT auth, third-party API integrations) are planned but not yet implemented.

## Tech Stack

- **Framework:** Next.js 14.2.5 (App Router, file-based routing)
- **Language:** TypeScript 5.5.4 (strict mode enabled)
- **Styling:** Tailwind CSS 3.4.10 with custom color palette
- **Icons:** Lucide React
- **Utilities:** clsx + tailwind-merge (via `cn()` helper in `components/utils.ts`)
- **AI Chat:** Groq API (llama3-70b-8192) with rule-based fallback
- **Node:** LTS v18+

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Production build
npm start            # Start production server
npm run lint         # Run ESLint (eslint-config-next)
```

There is no test framework configured. No CI/CD pipeline exists.

## Project Structure

```
app/
├── layout.tsx                    # Root layout (Header, Footer, ChatWidget, WhatsApp)
├── page.tsx                      # Home/landing page
├── globals.css                   # Global styles (Tailwind directives)
├── about/page.tsx                # About page
├── contact/page.tsx              # Contact form
├── countries/page.tsx            # Supported countries listing
├── blog/
│   ├── page.tsx                  # Blog listing
│   └── [slug]/page.tsx           # Dynamic blog post
├── services/
│   ├── page.tsx                  # Services overview
│   ├── study-visa/page.tsx
│   ├── visit-visa/page.tsx
│   ├── flights/page.tsx
│   ├── hotels/page.tsx
│   ├── insurance/page.tsx
│   └── documents/page.tsx
├── portal/                       # Client portal (demo auth)
│   ├── page.tsx                  # Login page
│   ├── dashboard/page.tsx
│   ├── applications/page.tsx
│   ├── documents/page.tsx
│   ├── payments/page.tsx
│   └── _components/PortalShell.tsx
├── api/
│   ├── chat/route.ts             # AI chatbot endpoint (Groq)
│   ├── contact/route.ts          # Contact form handler
│   └── portal/auth/route.ts      # Demo authentication
└── lib/
    ├── data.ts                   # Hard-coded business data
    └── currency.ts               # Currency conversion utilities

components/
├── Header.tsx                    # Navigation with dropdown menu
├── Footer.tsx                    # Site footer
├── ChatWidget.tsx                # Floating AI chat widget
├── WhatsAppFloat.tsx             # WhatsApp floating button
├── BrandMark.tsx                 # Logo/brand component
└── utils.ts                      # cn() helper, formatCurrency()
```

## Architecture

### Routing
Next.js App Router with file-based routing. Public marketing pages live at the top level (`/about`, `/services/*`, `/countries`, `/blog/*`). The client portal lives under `/portal/*`.

### Data
All data is currently hard-coded in `app/lib/data.ts` — services, countries, testimonials, company info. There is no database connected yet. MongoDB is planned (connection string in `.env.example`).

### Authentication
Portal auth is demo-only. `POST /api/portal/auth` checks credentials against env vars (default: `demo@rogantravel.com` / `demo1234`) and returns a random token. The client stores it in `localStorage` under key `rt_token`. This is not production-ready — replace with MongoDB + JWT/httpOnly cookies.

### API Routes
- `POST /api/chat` — Sends user message to Groq LLM. Falls back to rule-based keyword matching if no API key or on error.
- `POST /api/contact` — Receives contact form data, currently logs to console only.
- `POST /api/portal/auth` — Demo login returning a localStorage token.

### Styling
Tailwind CSS with a custom color palette defined in `tailwind.config.ts`:
- `brand` (teal shades) — primary/trust color
- `accent` (gold/amber shades) — premium feel
- `ink` (neutral grays) — typography and backgrounds
- Custom `glow` box-shadow for focus states

Use the `cn()` utility from `components/utils.ts` for conditional class merging.

### Layout
The root layout (`app/layout.tsx`) wraps all pages with `Header`, `Footer`, `WhatsAppFloat`, and `ChatWidget`. Portal pages use `PortalShell` for sidebar navigation within the portal section.

## Environment Variables

Copy `.env.example` to `.env.local` for development. Key variables:

| Variable | Purpose | Required |
|---|---|---|
| `GROQ_API_KEY` | Groq LLM API for chatbot | Optional (fallback exists) |
| `PAYSTACK_PUBLIC_KEY` | Payment processing | No (not yet integrated) |
| `PAYSTACK_SECRET_KEY` | Payment processing | No (not yet integrated) |
| `MONGODB_URI` | Database connection | No (not yet integrated) |
| `JWT_SECRET` | Auth token signing | No (not yet integrated) |
| `EMAIL_USER` | Email notifications | No (not yet integrated) |
| `EMAIL_PASS` | Email notifications | No (not yet integrated) |
| `USD_NGN_RATE` | Currency conversion rate (default: 1500) | No |
| `DEMO_PORTAL_EMAIL` | Demo login email (default: demo@rogantravel.com) | No |
| `DEMO_PORTAL_PASSWORD` | Demo login password (default: demo1234) | No |

## Path Aliases

TypeScript path alias `@/*` maps to the project root. Use `@/components/Header` instead of relative paths like `../../components/Header`.

## Images

External images are allowed from `images.unsplash.com`, `plus.unsplash.com`, and `images.pexels.com` (configured in `next.config.js`). Add new domains to `remotePatterns` if needed.

## Code Conventions

- **Components:** Named exports preferred (e.g., `export function Header()`). Components in `components/` are shared across the app; page-specific components go in `_components/` directories.
- **Styling:** Tailwind utility classes directly on elements. Use `cn()` for conditional classes. No CSS modules or styled-components.
- **TypeScript:** Strict mode. Inline types preferred over separate type files for small types. Use `type` imports where applicable.
- **API routes:** Use `NextResponse.json()` for responses. Handle errors gracefully — never break the UI on API failure (see chat route fallback pattern).
- **Data:** Business data centralized in `app/lib/data.ts`. Update this file when adding services, countries, or testimonials.

## Known Limitations

- No test suite — add Jest/Vitest + React Testing Library for production
- No CI/CD pipeline
- Portal auth is demo-only (localStorage tokens, no real security)
- Contact form only logs to console (no email delivery)
- Flight/hotel pricing uses demo data (needs Amadeus/Booking API integration)
- No database — all data is hard-coded
