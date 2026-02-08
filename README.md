# Rogan Travel & Tour (v2)

Multi-page Next.js 14 (App Router) website + demo client portal.

## Run
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Notes
- "Live" flight/hotel pricing requires partner APIs (Amadeus/Booking affiliate). This repo ships with realistic demo data and clear integration points.
- Portal auth is demo-only (localStorage token). Replace with MongoDB + JWT/httpOnly cookies for production.
