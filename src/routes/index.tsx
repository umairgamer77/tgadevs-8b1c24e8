import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Gauge,
  IndianRupee,
  Mail,
  MessageCircle,
  Palette,
  Quote,
  Send,
  Smartphone,
  Sparkles,
  Star,
  Store,
  UtensilsCrossed,
  Rocket,
  LayoutTemplate,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import demoBusiness from "@/assets/demo-business.jpg";
import demoRestaurant from "@/assets/demo-restaurant.jpg";
import demoPortfolio from "@/assets/demo-portfolio.jpg";
import demoLanding from "@/assets/demo-landing.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TGA Webs — Affordable Website Design from ₹499" },
      {
        name: "description",
        content:
          "TGA Webs builds modern, fast, mobile-friendly websites for small businesses, restaurants, creators and local shops. Plans from ₹499.",
      },
      { property: "og:title", content: "TGA Webs — Affordable Website Design from ₹499" },
      {
        property: "og:description",
        content:
          "Business, restaurant, portfolio and landing page websites designed to convert. Delivered fast, priced honestly.",
      },
    ],
  }),
  component: Home,
});

const TELEGRAM_DM = "https://t.me/ENDLES_ERA";
const TELEGRAM_CHANNEL = "https://t.me/TGADEVS";
const WHATSAPP =
  "https://api.whatsapp.com/send?text=Hi%20TGA%20Webs%2C%20I%20want%20a%20website%20for%20my%20business.";
const EMAIL = "mailto:tgadevs@gmail.com";

const services = [
  {
    icon: Store,
    title: "Business Websites",
    text: "Professional multi-page sites that make your shop or service look established and trustworthy.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant Websites",
    text: "Digital menus, photo galleries, table booking links and click-to-call ordering.",
  },
  {
    icon: Palette,
    title: "Portfolio Websites",
    text: "Sleek showcases for creators, freelancers, photographers and designers.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    text: "High-converting single pages built for ads, launches and lead generation.",
  },
];

const plans = [
  {
    name: "Basic",
    price: "499",
    tagline: "Perfect for a simple online presence",
    features: [
      "1 page website",
      "Mobile responsive",
      "Contact & WhatsApp button",
      "Basic SEO setup",
      "Delivery in 2 days",
    ],
  },
  {
    name: "Standard",
    price: "999",
    tagline: "Most popular for growing businesses",
    popular: true,
    features: [
      "Up to 5 pages",
      "Custom design & animations",
      "Gallery / menu section",
      "SEO friendly headings",
      "Social media integration",
      "Delivery in 3-4 days",
    ],
  },
  {
    name: "Premium",
    price: "1,999",
    tagline: "Everything you need to stand out",
    features: [
      "Unlimited sections",
      "Premium custom UI/UX",
      "Contact form + enquiry setup",
      "Speed & SEO optimisation",
      "Logo & brand touch-ups",
      "30 days free support",
    ],
  },
];

const reasons = [
  { icon: IndianRupee, title: "Affordable", text: "Agency-quality design at prices small businesses can actually pay." },
  { icon: Gauge, title: "Fast Delivery", text: "Most websites go live within 2 to 4 days, not weeks." },
  { icon: Smartphone, title: "Mobile Friendly", text: "Built mobile-first, because most of your customers arrive on a phone." },
  { icon: Sparkles, title: "Custom Design", text: "No recycled templates. Every site is designed around your brand." },
];

const work = [
  { img: demoBusiness, title: "Nova Consulting", tag: "Business Website" },
  { img: demoRestaurant, title: "Spice Route Kitchen", tag: "Restaurant Website" },
  { img: demoPortfolio, title: "Aarav Studio", tag: "Portfolio Website" },
  { img: demoLanding, title: "PulseFit Launch", tag: "Landing Page" },
];

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Owner, Mehta Electronics",
    text: "Got my shop website in two days and it looks better than stores ten times my size. Customers now find me on Google.",
  },
  {
    name: "Sneha Kapoor",
    role: "Cafe Owner",
    text: "The menu page is beautiful on mobile. Orders through WhatsApp went up almost immediately after launch.",
  },
  {
    name: "Imran Sheikh",
    role: "Freelance Photographer",
    text: "My portfolio finally feels premium. Clean, fast and the animations are subtle. Worth every rupee.",
  },
  {
    name: "Divya Nair",
    role: "Boutique Founder",
    text: "Honest pricing, quick replies and zero jargon. TGA Webs made the whole process painless.",
  },
];

const faqs = [
  {
    q: "How long does it take to build my website?",
    a: "Most Basic sites are delivered in 2 days, Standard in 3-4 days, and Premium within a week depending on content.",
  },
  {
    q: "Do I need to buy a domain and hosting?",
    a: "You can, and we help you pick the cheapest reliable option. We also offer a free subdomain to get you online instantly.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. Send us your current link and we will suggest a redesign plan that fits your budget.",
  },
  {
    q: "What do you need from me to start?",
    a: "Your business name, logo (if any), a short description, photos and contact details. We handle the rest.",
  },
  {
    q: "Do you offer support after delivery?",
    a: "Every plan includes launch support, and Premium includes 30 days of free changes and fixes.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
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

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Services", "#services"],
    ["Pricing", "#pricing"],
    ["Work", "#work"],
    ["FAQ", "#faq"],
    ["Contact", "#contact"],
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl btn-glow font-display text-sm font-bold">
            TG
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            TGA <span className="text-gradient">Webs</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={TELEGRAM_DM}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full px-5 py-2.5 text-sm font-semibold btn-glow sm:inline-flex"
          >
            Get a Quote
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface md:hidden"
          >
            <ChevronDown
              className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-surface px-5 py-3 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 text-sm font-medium text-muted-foreground last:border-0"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-backdrop" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 md:pb-28 md:pt-28">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            Websites from ₹499 · Delivered in days
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">
            Your Business Deserves a{" "}
            <span className="text-gradient">Better Website</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            TGA Webs is a small, focused web design studio building affordable, modern
            websites for shops, restaurants, creators and local businesses. Premium design,
            honest pricing, and a site that actually brings you customers.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold btn-glow"
            >
              Get Your Website Today <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-brand/50 hover:bg-surface-2"
            >
              View Demo Websites
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
            {[
              ["50+", "Projects delivered"],
              ["2-4 days", "Average turnaround"],
              ["100%", "Mobile friendly"],
              ["₹499", "Starting price"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl font-bold text-brand">{v}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-sm text-muted-foreground md:text-base">{sub}</p>}
    </Reveal>
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
          <Reveal key={s.title} delay={i * 90}>
            <article className="surface-card h-full rounded-2xl p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/12 text-brand ring-1 ring-brand/25">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          </Reveal>
        ))}
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
                className={`surface-card relative h-full rounded-3xl p-7 ${
                  p.popular ? "glow-ring" : ""
                }`}
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
                  <span className="ml-1 text-sm font-medium text-muted-foreground">
                    one-time
                  </span>
                </p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={TELEGRAM_DM}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                    p.popular
                      ? "btn-glow"
                      : "border border-border bg-surface-2 text-foreground hover:border-brand/50"
                  }`}
                >
                  Choose {p.name} <ArrowRight className="h-4 w-4" />
                </a>
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
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-64"
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
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="surface-card h-full rounded-2xl p-6">
                <Quote className="h-6 w-6 text-brand/70" />
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand/15 font-display text-sm font-bold text-brand">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </span>
                  <span className="ml-auto flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-brand text-brand" />
                    ))}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
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
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
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
        <div className="relative overflow-hidden rounded-[2rem] border border-brand/25 bg-surface px-6 py-14 text-center glow-ring md:px-16">
          <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-70" />
          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Get Your Website <span className="text-gradient">Today</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground md:text-base">
              Message us with your business name and idea. You'll get a design plan and a
              fixed price within hours.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={TELEGRAM_DM}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold btn-glow"
              >
                <Send className="h-4 w-4" /> Message on Telegram
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface-2 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-brand/50"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Contact() {
  const items = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us instantly",
      href: WHATSAPP,
    },
    { icon: Send, label: "Telegram", value: "@ENDLES_ERA", href: TELEGRAM_DM },
    { icon: Sparkles, label: "Telegram Channel", value: "@TGADEVS", href: TELEGRAM_CHANNEL },
    { icon: Mail, label: "Email", value: "tgadevs@gmail.com", href: EMAIL },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHead
        eyebrow="Contact"
        title="Let's build it together"
        sub="Pick whichever is easiest for you — we usually reply within a few hours."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((c, i) => (
          <Reveal key={c.label} delay={i * 90}>
            <a
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="surface-card flex h-full flex-col rounded-2xl p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/12 text-brand ring-1 ring-brand/25">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold">{c.label}</h3>
              <p className="mt-1 break-words text-sm text-muted-foreground">{c.value}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand">
                Open <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-display font-bold text-foreground">TGA Webs</span> — affordable
          websites for growing businesses.
        </p>
        <p>© {new Date().getFullYear()} TGA Webs. All rights reserved.</p>
      </div>
    </footer>
  );
}
