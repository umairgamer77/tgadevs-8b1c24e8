import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  LayoutTemplate,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Footer, SectionHead, SiteHeader, TrackedLink } from "@/components/site-chrome";
import {
  EMAIL,
  EMAIL_ADDRESS,
  SITE_URL,
  TELEGRAM_CHANNEL,
  TELEGRAM_DM,
  WHATSAPP,
  faqs,
  plans,
  reasons,
  services,
  work,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TGA Webs — Affordable Website Design from ₹499" },
      {
        name: "description",
        content:
          "TGA Webs builds modern, fast, mobile-friendly websites for small businesses, restaurants, creators and local shops. Plans from ₹499, delivered in 2-4 days.",
      },
      { property: "og:title", content: "TGA Webs — Affordable Website Design from ₹499" },
      {
        property: "og:description",
        content:
          "Business, restaurant, portfolio and landing page websites designed to convert. Delivered fast, priced honestly.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "TGA Webs",
          url: SITE_URL,
          email: EMAIL_ADDRESS,
          description:
            "Affordable modern website design for small businesses, restaurants, creators and local shops.",
          areaServed: "IN",
          priceRange: "₹₹",
          sameAs: [TELEGRAM_DM, TELEGRAM_CHANNEL],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Process />
        <Pricing />
        <WhyUs />
        <Portfolio />
        <Testimonials />
        <Faq />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-backdrop" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[52rem] -translate-x-1/2 rounded-full bg-brand/25 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-20 text-center md:pb-32 md:pt-28">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            Websites from ₹499 · Delivered in days
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mx-auto mt-7 max-w-5xl text-[2.6rem] font-bold leading-[1.03] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Your Business Deserves a{" "}
            <span className="text-gradient">Better Website</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl">
            TGA Webs is a design studio building premium, affordable websites for shops,
            restaurants, creators and local businesses — honest pricing and a site that actually
            brings you customers.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold btn-glow"
            >
              Get Your Website Today <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-8 py-4 text-base font-semibold text-foreground transition-colors hover:border-brand/50 hover:bg-surface-2"
            >
              Explore our services
            </Link>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4">
            {[
              ["50+", "Projects delivered"],
              ["2-4 days", "Average turnaround"],
              ["100%", "Mobile friendly"],
              ["₹499", "Starting price"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl font-bold text-brand md:text-4xl">{v}</dt>
                <dd className="mt-1 text-xs text-muted-foreground md:text-sm">{l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHead
        eyebrow="Services"
        title="What we build"
        sub="Four focused website types, each designed around what your customers actually do on your site."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 90}>
            <Link
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="surface-card flex h-full flex-col rounded-2xl p-6 transition-colors hover:border-brand/50"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/12 text-brand ring-1 ring-brand/25">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand">
                {s.price} · See details <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { step: "Tell us about your business", text: "One message with your name, services and photos is enough to start." },
    { step: "We design a live preview", text: "A real, clickable version of your website within 48 hours." },
    { step: "You review and we polish", text: "Colours, copy, sections — we adjust until it feels right." },
    { step: "We launch and support you", text: "Live on your domain, with support after handover." },
  ];
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-brand-alt/10 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Process"
          title="From idea to live in days"
          sub="A simple four-step process with no jargon and no long meetings."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 90}>
              <article className="surface-card h-full rounded-2xl p-6">
                <span className="font-display text-4xl font-bold text-brand/40">0{i + 1}</span>
                <h3 className="mt-4 text-base font-semibold">{s.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 h-72 bg-brand-glow/10 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Pricing"
          title="Simple, honest pricing"
          sub="One-time payment. No hidden charges, no monthly surprises."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 110}>
              <article
                className={`surface-card relative h-full rounded-3xl p-7 ${p.popular ? "glow-ring" : ""}`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-7 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider btn-glow">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{p.tagline}</p>
                <p className="mt-6 font-display text-4xl font-bold">
                  ₹{p.price}
                  <span className="ml-1 text-sm font-medium text-muted-foreground">one-time</span>
                </p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {f}
                    </li>
                  ))}
                </ul>
                <TrackedLink
                  href={TELEGRAM_DM}
                  channel="telegram"
                  location={`pricing_${p.name.toLowerCase()}`}
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                    p.popular
                      ? "btn-glow"
                      : "border border-border bg-surface-2 text-foreground hover:border-brand/50"
                  }`}
                >
                  Choose {p.name} <ArrowRight className="h-4 w-4" />
                </TrackedLink>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHead
        eyebrow="Why TGA Webs"
        title="Built by people who care"
        sub="We keep it small, fast and personal — you talk directly to the person designing your site."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={i * 90}>
            <article className="surface-card h-full rounded-2xl p-6 text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-brand/12 text-brand ring-1 ring-brand/25 animate-float">
                <r.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHead
        eyebrow="Portfolio"
        title="Demo websites"
        sub="A look at the kind of work we deliver across different industries."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {work.map((w, i) => (
          <Reveal key={w.title} delay={i * 90}>
            <article className="surface-card group h-full overflow-hidden rounded-3xl">
              <div className="overflow-hidden">
                <img
                  src={w.img}
                  alt={`${w.tag} demo design for ${w.title} by TGA Webs`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-72"
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-6">
                <div>
                  <h3 className="text-base font-semibold">{w.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-brand">{w.tag}</p>
                </div>
                <LayoutTemplate className="h-5 w-5 text-muted-foreground" />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-brand-alt/10 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Testimonials"
          title="What clients say"
          sub="Real feedback from small business owners we've worked with."
        />
        <TestimonialCarousel />
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 md:py-28">
      <SectionHead eyebrow="FAQ" title="Questions, answered" />
      <div className="mt-12 space-y-3">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 60}>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold transition-colors hover:text-brand"
              >
                {f.q}
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                    open === i ? "rotate-180 text-brand" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-4">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-brand/25 bg-surface px-6 py-16 text-center glow-ring md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-70" />
          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-5xl md:text-6xl">
              Get Your Website <span className="text-gradient">Today</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground md:text-lg">
              Message us with your business name and idea. You'll get a design plan and a fixed
              price within hours.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackedLink
                href={TELEGRAM_DM}
                channel="telegram"
                location="cta_band"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold btn-glow"
              >
                <Send className="h-4 w-4" /> Message on Telegram
              </TrackedLink>
              <TrackedLink
                href={WHATSAPP}
                channel="whatsapp"
                location="cta_band"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface-2 px-8 py-4 text-base font-semibold transition-colors hover:border-brand/50"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </TrackedLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Contact() {
  const items = [
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us instantly", href: WHATSAPP, channel: "whatsapp" as const },
    { icon: Send, label: "Telegram", value: "@ENDLES_ERA", href: TELEGRAM_DM, channel: "telegram" as const },
    { icon: Sparkles, label: "Telegram Channel", value: "@TGADEVS", href: TELEGRAM_CHANNEL, channel: "telegram" as const },
    { icon: Mail, label: "Email", value: EMAIL_ADDRESS, href: EMAIL, channel: "email" as const },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHead
        eyebrow="Contact"
        title="Let's build it together"
        sub="Fill in the form and we'll open a ready-to-send message, or reach us directly below."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <ContactForm />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {items.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <TrackedLink
                href={c.href}
                channel={c.channel}
                location="contact_cards"
                className="surface-card flex h-full items-center gap-4 rounded-2xl p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/12 text-brand ring-1 ring-brand/25">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{c.label}</span>
                  <span className="block break-words text-xs text-muted-foreground">{c.value}</span>
                </span>
              </TrackedLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
