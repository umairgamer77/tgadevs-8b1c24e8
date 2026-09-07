import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Footer, SectionHead, SiteHeader } from "@/components/site-chrome";
import { SITE_URL, services } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Website Design Services — TGA Webs" },
      {
        name: "description",
        content:
          "Business, restaurant, portfolio and landing page website design from ₹499. See what's included, timelines and pricing for each TGA Webs service.",
      },
      { property: "og:title", content: "Website Design Services — TGA Webs" },
      {
        property: "og:description",
        content:
          "Four focused website services for small businesses — clear inclusions, fixed prices and 2-4 day delivery.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/services` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services` }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 grid-backdrop" />
          <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-20 text-center md:pt-24">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Services
              </span>
              <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl">
                Websites built around <span className="text-gradient">your business</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
                Pick the type of site you need and see exactly what's included, how long it takes
                and what it costs.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-24">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="surface-card group flex h-full flex-col overflow-hidden rounded-3xl"
                >
                  <img
                    src={s.image}
                    alt={`${s.title} design example by TGA Webs`}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/12 text-brand ring-1 ring-brand/25">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <h2 className="mt-5 text-xl font-semibold">{s.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                    <p className="mt-5 text-sm font-semibold text-brand">
                      {s.price} · {s.timeline}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">
                      See details <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-24">
          <SectionHead
            eyebrow="Next step"
            title="Not sure which one fits?"
            sub="Tell us about your business and we'll recommend the right plan — no pressure."
          />
          <div className="mt-8 text-center">
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold btn-glow"
            >
              Get a free recommendation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
