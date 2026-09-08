import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, Send } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { Footer, SectionHead, SiteHeader, TrackedLink } from "@/components/site-chrome";
import { SITE_URL, TELEGRAM_DM, WHATSAPP, getService, services } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — TGA Webs" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    const title = `${s.title} — TGA Webs`;
    return {
      meta: [
        { title },
        { name: "description", content: s.short },
        { property: "og:title", content: title },
        { property: "og:description", content: s.short },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${SITE_URL}/services/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.short,
            provider: { "@type": "Organization", name: "TGA Webs", url: SITE_URL },
            areaServed: "IN",
            offers: { "@type": "Offer", price: s.price.replace(/[^0-9]/g, ""), priceCurrency: "INR" },
          }),
        },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetail,
});

function ServiceNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-28 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">We couldn't find that service</h1>
        <p className="mt-4 text-muted-foreground">It may have moved. Browse everything we build instead.</p>
        <Link
          to="/services"
          className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold btn-glow"
        >
          View all services <ArrowRight className="h-4 w-4" />
        </Link>
      </main>
      <Footer />
    </div>
  );
}

function ServiceDetail() {
  const { service: s } = Route.useLoaderData();
  const others = services.filter((o) => o.slug !== s.slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 grid-backdrop" />
          <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-20 md:grid-cols-2 md:pt-24">
            <Reveal>
              <Link to="/services" className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                ← All services
              </Link>
              <h1 className="mt-5 text-4xl font-bold leading-[1.08] sm:text-5xl">{s.hero}</h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">{s.intro}</p>
              <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold">
                <span className="rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-brand">
                  {s.price}
                </span>
                <span className="rounded-full border border-border bg-surface px-4 py-2 text-muted-foreground">
                  Delivered in {s.timeline}
                </span>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <TrackedLink
                  href={TELEGRAM_DM}
                  channel="telegram"
                  location={`service_${s.slug}_hero`}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold btn-glow"
                >
                  <Send className="h-4 w-4" /> Start on Telegram
                </TrackedLink>
                <TrackedLink
                  href={WHATSAPP}
                  channel="whatsapp"
                  location={`service_${s.slug}_hero`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-semibold transition-colors hover:border-brand/50"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </TrackedLink>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <img
                src={s.image}
                alt={`${s.title} design example by TGA Webs`}
                className="surface-card w-full rounded-3xl object-cover"
                loading="eager"
              />
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <Reveal>
              <h2 className="text-2xl font-bold sm:text-3xl">What's included</h2>
              <ul className="mt-6 space-y-3.5">
                {s.includes.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="text-2xl font-bold sm:text-3xl">How it works</h2>
              <ol className="mt-6 space-y-5">
                {s.process.map((p, i) => (
                  <li key={p.step} className="flex gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand/12 font-display text-sm font-bold text-brand ring-1 ring-brand/25">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">{p.step}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">{p.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 pb-8">
          <SectionHead eyebrow="FAQ" title={`${s.title} questions`} />
          <div className="mt-10 space-y-3">
            {s.faqs.map((f) => (
              <Reveal key={f.q}>
                <div className="rounded-2xl border border-border bg-surface p-5">
                  <p className="text-sm font-semibold">{f.q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <SectionHead
            eyebrow="Get started"
            title={`Request a ${s.title.toLowerCase().replace(/s$/, "")}`}
            sub="Fill this in and we'll open a ready-to-send message with your details."
          />
          <div className="mt-10">
            <ContactForm defaultService={s.title} />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-24">
          <h2 className="text-xl font-bold">Other services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/services/$slug"
                params={{ slug: o.slug }}
                className="surface-card rounded-2xl p-5 transition-colors hover:border-brand/50"
              >
                <o.icon className="h-5 w-5 text-brand" />
                <p className="mt-4 text-sm font-semibold">{o.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{o.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
