"use client";

import { useState } from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTABanner />
      <FAQ />
      <Footer />
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="sticky top-0 z-40 bg-[var(--bg)]/90 backdrop-blur-sm border-b border-[var(--rule)]">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl leading-none text-[var(--ink)]">ClientPulse</Link>
        <div className="hidden sm:flex items-center gap-8 text-sm text-[var(--muted)]">
          <a href="#features" className="hover:text-[var(--ink)] transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-[var(--ink)] transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-[var(--ink)] transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-[var(--ink)] transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-5">
          <a href="/login" className="text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors">Log in</a>
          <a href="/signup" className="bg-[var(--ink)] text-[var(--bg)] px-4 py-2 text-sm font-medium rounded-full hover:bg-[var(--ink)]/90 transition-colors">
            Start free
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────
function DashboardMockup() {
  return (
    <div className="relative w-full rounded-xl bg-[#fcfaf5] border border-[var(--rule)] overflow-hidden shadow-[0_30px_60px_-20px_rgba(26,19,16,0.25)]">
      <div className="bg-[#f6f2eb] px-4 py-2.5 border-b border-[var(--rule)] flex items-center">
        <div className="flex-1 bg-[#fcfaf5] rounded-md px-3 py-1 text-xs text-[var(--muted)] border border-[var(--rule)]">
          clientpulse.dev/dashboard
        </div>
      </div>
      <div className="p-5 bg-[#faf7f1]">
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: "New leads this week", value: "12" },
            { label: "Follow-ups sent", value: "34" },
            { label: "Awaiting reply", value: "5" },
          ].map((s) => (
            <div key={s.label} className="bg-[#fcfaf5] rounded-lg p-3 border border-[var(--rule)]">
              <div className="font-display text-3xl text-[var(--ink)] tnum leading-none">{s.value}</div>
              <div className="text-[11px] text-[var(--muted)] mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="bg-[#fcfaf5] rounded-lg border border-[var(--rule)] overflow-hidden">
          <div className="px-4 py-2.5 border-b border-[var(--rule)] flex items-center justify-between">
            <span className="text-xs font-medium text-[var(--ink)]">Recent leads</span>
            <span className="text-[11px] text-[var(--muted)]">Last 48 hours</span>
          </div>
          <div className="divide-y divide-[var(--rule)]">
            {[
              { name: "Sarah Johnson", service: "House cleaning", status: "Follow-up sent", when: "2h ago" },
              { name: "Mike Torres", service: "Plumbing repair", status: "New lead", when: "4h ago" },
              { name: "Emily Chen", service: "Tax consulting", status: "Responded", when: "yesterday" },
              { name: "David Park", service: "Lawn care", status: "Follow-up sent", when: "yesterday" },
            ].map((lead) => (
              <div key={lead.name} className="px-4 py-2.5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-[var(--ink)]">{lead.name}</div>
                  <div className="text-xs text-[var(--muted)]">{lead.service}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[var(--ink)]">{lead.status}</div>
                  <div className="text-[11px] text-[var(--muted)] tnum">{lead.when}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
        <div>
          <p className="text-sm text-[var(--muted)] mb-6 tracking-wide">For solo service businesses — plumbers, cleaners, consultants, trades.</p>
          <h1 className="font-display text-[clamp(44px,7vw,96px)] leading-[0.95] text-[var(--ink)] mb-7">
            Never lose a client to <span className="text-[var(--accent)] italic">slow follow-up</span> again.
          </h1>
          <p className="text-lg text-[var(--muted)] max-w-xl leading-relaxed mb-9">
            ClientPulse catches every lead and sends personalized follow-ups on autopilot. Set it up in five minutes. No CRM experience required.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="/signup" className="bg-[var(--ink)] text-[var(--bg)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[var(--accent)] transition-colors">
              Start a free trial
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-[var(--ink)] underline underline-offset-4 decoration-[var(--muted)] hover:decoration-[var(--ink)] transition-colors">
              See how it works
            </a>
          </div>
          <p className="mt-5 text-xs text-[var(--muted)]">Seven-day trial · No card required · Cancel from your dashboard.</p>
        </div>
        <div className="relative">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────
function Features() {
  const features = [
    { n: "01", title: "Intake forms that fit the work", desc: "Pick the fields you actually need — name, phone, service, notes. Share the link or embed it on your site. No coding." },
    { n: "02", title: "Follow-ups on autopilot", desc: "Day 1, Day 3, Day 7. Set the cadence, write the copy once, let it run. Clients get a reply even when you're on a job." },
    { n: "03", title: "One screen, every lead", desc: "See who came in, who was contacted, who replied, who's still waiting. The dashboard that doesn't need a tutorial." },
    { n: "04", title: "Boring where it should be", desc: "AES-256 at rest, OWASP-aligned, GDPR-ready. Client data stays yours — not shared, not sold, not used for anything else." },
    { n: "05", title: "Live in five minutes", desc: "Sign in, pick a color, name your form, share the link. If you've ever filled out a form, you can set this up." },
    { n: "06", title: "Flat pricing, no counting", desc: "One monthly rate. No per-lead charges, no per-contact fees, no tier gymnastics as you grow." },
  ];
  return (
    <section id="features" className="py-28 border-t border-[var(--rule)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <p className="text-sm text-[var(--muted)] mb-4">Features</p>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[1.02] text-[var(--ink)]">
            Everything a one-person shop needs. Nothing it doesn&apos;t.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {features.map((f) => (
            <div key={f.n}>
              <div className="font-display text-5xl text-[var(--accent)] mb-5 tnum">{f.n}</div>
              <h3 className="text-lg font-medium text-[var(--ink)] mb-2">{f.title}</h3>
              <p className="text-[var(--muted)] leading-relaxed text-[15px]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ──────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { num: "First", title: "Build your intake form", desc: "Pick the fields. Set your brand color. Takes a couple of minutes — it's a form, not an onboarding." },
    { num: "Next", title: "Put the link where people find you", desc: "Website, Google Business Profile, Instagram bio, a text to a prospect. Works wherever a URL fits." },
    { num: "Then", title: "Leads land in your inbox and dashboard", desc: "The moment someone submits, you know. Dashboard records it, email tells you, follow-up starts counting." },
    { num: "Finally", title: "Follow-up runs on its own", desc: "Day 1, Day 3, Day 7 by default. Clients feel attended to even when you're swinging a wrench or at your kid's game." },
  ];

  return (
    <section id="how-it-works" className="py-28 bg-[var(--surface)] border-y border-[var(--rule)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <p className="text-sm text-[var(--muted)] mb-4">How it works</p>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[1.02] text-[var(--ink)]">Up and running by lunchtime.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14 max-w-5xl">
          {steps.map((s) => (
            <div key={s.num} className="border-t border-[var(--rule)] pt-6">
              <div className="font-display italic text-[var(--accent)] text-xl mb-3">{s.num}</div>
              <h3 className="font-medium text-xl text-[var(--ink)] mb-2">{s.title}</h3>
              <p className="text-[var(--muted)] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────
function Pricing() {
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout(plan: string) {
    setError(null);
    setLoading(plan);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else setError("We couldn't start checkout. Try again in a moment.");
    } catch {
      setError("Connection failed. Check your network and try again.");
    }
    setLoading(null);
  }

  return (
    <section id="pricing" className="py-28 border-t border-[var(--rule)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <p className="text-sm text-[var(--muted)] mb-4">Pricing</p>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[1.02] text-[var(--ink)]">Two plans. No contracts. Cancel from your dashboard.</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 items-stretch">

          {/* Starter */}
          <div className="rounded-2xl bg-[var(--surface)] border border-[var(--rule)] p-9 flex flex-col">
            <div className="flex items-baseline justify-between mb-6">
              <h3 className="font-display text-2xl text-[var(--ink)]">Starter</h3>
              <span className="font-display italic text-[var(--muted)]">solo</span>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="font-display text-6xl text-[var(--ink)] tnum">$39</span>
              <span className="text-[var(--muted)]">/month</span>
            </div>
            <p className="text-sm text-[var(--muted)] mb-8">For solo service providers getting started.</p>
            <ul className="space-y-3 mb-10 text-sm text-[var(--ink)] flex-1">
              {["Up to 50 clients", "Unlimited intake forms", "3-step follow-up sequences", "Lead dashboard", "Email notifications", "7-day free trial"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-[2px]">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleCheckout("starter")}
              disabled={loading === "starter"}
              className="w-full border border-[var(--ink)] text-[var(--ink)] py-3 rounded-full text-sm font-medium hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors disabled:opacity-50 mt-auto"
            >
              {loading === "starter" ? "Loading…" : "Start with Starter"}
            </button>
          </div>

          {/* Pro */}
          <div className="rounded-2xl bg-[var(--ink)] text-[var(--bg)] p-9 flex flex-col relative shadow-[0_30px_60px_-30px_rgba(26,19,16,0.4)]">
            <div className="flex items-baseline justify-between mb-6">
              <h3 className="font-display text-2xl">Pro</h3>
              <span className="font-display italic opacity-70">growing</span>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="font-display text-6xl tnum">$89</span>
              <span className="opacity-70">/month</span>
            </div>
            <p className="text-sm opacity-70 mb-8">For shops with more than one job going at once.</p>
            <ul className="space-y-3 mb-10 text-sm flex-1">
              {["Everything in Starter", "Up to 500 clients", "Unlimited follow-up sequences", "SMS follow-ups", "Custom branding", "Priority support"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[var(--bg)] opacity-60 mt-[2px]">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleCheckout("pro")}
              disabled={loading === "pro"}
              className="w-full bg-[var(--bg)] text-[var(--ink)] py-3 rounded-full text-sm font-medium hover:bg-[#fcfaf5] transition-colors disabled:opacity-50 mt-auto"
            >
              {loading === "pro" ? "Loading…" : "Start with Pro"}
            </button>
          </div>

        </div>
        {error && (
          <p className="text-center text-sm text-[var(--warn)] mt-8" role="alert">
            {error}
          </p>
        )}
        <p className="text-center text-xs text-[var(--muted)] mt-10">Both plans include a seven-day trial. No card required.</p>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="py-24 bg-[var(--accent)] text-[var(--accent-ink)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[1.02] mb-6">
          Your next client is already looking for you.
        </h2>
        <p className="text-lg opacity-85 max-w-xl mx-auto mb-10 leading-relaxed">
          The question is whether you&apos;ll be the one who answers first.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a href="/signup" className="bg-[var(--bg)] text-[var(--ink)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#fcfaf5] transition-colors">
            Start a free trial
          </a>
          <a href="#pricing" className="text-sm font-medium underline underline-offset-4 decoration-white/50 hover:decoration-white transition-colors">
            See the plans
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    { q: "I already have a contact form on my website. Why do I need this?", a: "A contact form collects information — that's it. When a lead comes in at 9 PM and you're off the clock, nothing happens until you remember to check. ClientPulse replies within seconds, then follows up on Day 3 and Day 7 automatically. Most service businesses lose a handful of leads every month to slow follow-up. This closes that gap." },
    { q: "How does it work with my existing website?", a: "You get a link to a branded intake form. Put it on a button, share it on social, text it to a prospect, drop it in your Google Business Profile. Works on any device. From signup to live is about five minutes." },
    { q: "Is client data secure?", a: "Encrypted with AES-256 at rest, OWASP-aligned, GDPR-ready. Client data isn't shared, sold, or used for anything but your follow-ups." },
    { q: "Can I customize the follow-up emails?", a: "Yes. Emails go out under your business name with your brand color and reply-to address. Pro users get unlimited sequences for different services." },
    { q: "How much does it cost, and is there a contract?", a: "Starter is $39/month, Pro is $89/month. Both start with a seven-day free trial — no card required. No contracts, no setup fees, no per-lead charges. Cancel anytime from your dashboard." },
    { q: "Will this actually help me get more clients?", a: "Replying to a lead within five minutes puts you well ahead of your competition. Most service businesses take hours or days — and leads get bored and move on. ClientPulse replies in seconds and keeps nudging so prospects don't go cold while you're on a job." },
    { q: "I'm not tech-savvy. Can I still use this?", a: "Yes. Setup is: enter your business name, pick a brand color, share the link. No CRM to configure. No training required." },
  ];

  return (
    <section id="faq" className="py-28 border-t border-[var(--rule)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm text-[var(--muted)] mb-4">FAQ</p>
            <h2 className="font-display text-[clamp(36px,5vw,56px)] leading-[1.02] text-[var(--ink)] mb-6">Questions, honestly answered.</h2>
            <p className="text-[var(--muted)] leading-relaxed mb-8">If something&apos;s missing from this list, send a note and I&apos;ll answer within a day.</p>
            <a href="mailto:hello@clientpulse.dev" className="inline-flex items-center gap-2 text-sm text-[var(--ink)] underline underline-offset-4 decoration-[var(--muted)] hover:decoration-[var(--ink)] transition-colors">
              hello@clientpulse.dev
            </a>
          </div>
          <div className="space-y-2">
            {faqs.map((f, i) => (
              <div key={i} className="border-t border-[var(--rule)] last:border-b">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full py-5 flex justify-between items-start text-left gap-6"
                >
                  <span className="font-medium text-[var(--ink)]">{f.q}</span>
                  <span className={`shrink-0 font-display text-xl text-[var(--muted)] leading-none mt-0.5 transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10 text-[var(--muted)] leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
        <div className="grid sm:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-16 border-b border-white/10">
          <div>
            <p className="font-display text-3xl mb-4">ClientPulse</p>
            <p className="text-sm leading-relaxed opacity-70 max-w-xs mb-6">Client intake and follow-up for service businesses that don&apos;t have time for a CRM.</p>
            <a href="/signup" className="inline-block bg-[var(--bg)] text-[var(--ink)] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#fcfaf5] transition-colors">
              Start free trial
            </a>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4 opacity-100">Product</h4>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li><a href="#features" className="hover:opacity-100 transition-opacity">Features</a></li>
              <li><a href="#pricing" className="hover:opacity-100 transition-opacity">Pricing</a></li>
              <li><a href="#faq" className="hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="/intake" className="hover:opacity-100 transition-opacity">Sample intake form</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4 opacity-100">Account</h4>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li><a href="/signup" className="hover:opacity-100 transition-opacity">Sign up</a></li>
              <li><a href="/login" className="hover:opacity-100 transition-opacity">Log in</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4 opacity-100">Company</h4>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li><a href="mailto:hello@clientpulse.dev" className="hover:opacity-100 transition-opacity">Contact</a></li>
              <li><a href="/privacy" className="hover:opacity-100 transition-opacity">Privacy</a></li>
              <li><a href="/terms" className="hover:opacity-100 transition-opacity">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} ClientPulse</p>
          <p>
            Built by{" "}
            <a href="https://pauladejayan.github.io/" className="underline underline-offset-4 hover:opacity-100 transition-opacity">
              Paul Adejayan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
