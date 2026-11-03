# ClientPulse

Client intake and follow-up automation for solo service businesses — plumbers, cleaners, tax consultants, lawn-care crews — the kind of operator who loses jobs because they can't get back to a lead at 9 PM.

**Live:** [clientpulse.dev](https://clientpulse.dev) · **Stack:** Next.js 16 · Turso · Stripe · Twilio · Resend

The pitch: a branded intake form you can share anywhere, email + SMS follow-ups that fire on Day 1 / Day 3 / Day 7 automatically, and a single dashboard that shows who came in, who's been contacted, and who's still waiting on you.

![ClientPulse landing page — warm editorial design with intake dashboard mockup](docs/screenshot-landing.png)

## Status

**Paused.** This was a side project I shipped in spring 2026 and left running while I moved on to other work. The code is intact and the stack still runs locally — treat the repo as a working artifact of what was built, not an actively maintained product. The live site at `clientpulse.dev` is on indefinite low-maintenance mode; the signup flow may be gated or disabled depending on when you visit.

## What's in here

A full Next.js 16 + React 19 + TypeScript app:

- **Marketing landing** at `src/app/page.tsx` — editorial typography, warm palette, no SaaS-template slop
- **Public intake form** at `/intake` — branded submission form, lands straight in the owner's dashboard
- **Dashboard** at `/admin` — leads, status, scheduled follow-ups
- **Auth** — email/password with JWTs (jose), bcrypt hashing, password reset via Resend
- **Billing** — Stripe checkout, two tiers (`$39` Starter, `$89` Pro), 7-day trial, cancellation handling via webhooks
- **Scheduled follow-ups** — cron-triggered email + SMS cadences, idempotent so a retry doesn't double-send
- **Data** — Turso (libSQL) with per-tenant isolation at the query layer

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 16 (App Router) | SSR for marketing, API routes for the rest |
| Database | Turso (libSQL) | Edge-replicated, cheap, SQL-native |
| Auth | jose + bcryptjs | No third-party auth vendor, no vendor lock |
| Email | Resend | Deliverability-focused transactional email |
| SMS | Twilio | Follow-up SMS on the Pro tier |
| Billing | Stripe Checkout + webhooks | Standard trial → subscription flow |
| Hosting | Vercel | Co-located with the Turso edge replica region |
| Styling | Tailwind v4 | Zero runtime, inline where it reads clearest |

## Run it locally

```bash
npm install
cp .env.example .env.local   # fill in Turso, Stripe, Resend, Twilio keys
npm run dev
```

Open `http://localhost:3000`. The intake form at `/intake` works without any environment variables beyond the Turso connection — the Stripe + Twilio + Resend paths will warn and no-op if their keys are missing.

## What I'd do differently

If I rebuilt this today:

- Lean on **Stripe Customer Portal** instead of hand-rolling subscription management UI
- Replace the custom auth with **Auth.js** — the hand-rolled JWT path works but it's not where I want to spend time
- Move follow-up scheduling off app-level cron and onto **Trigger.dev** or **Inngest** — more observable, easier to retry
- Add a **Twilio Verify** step on signup to confirm the business owner's phone before enabling SMS follow-ups

## License

MIT. See [`LICENSE`](./LICENSE).

---

Built by [Paul Adejayan](https://pauladejayan.github.io/).
