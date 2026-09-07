import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { TELEGRAM_DM, trackContactClick } from "@/lib/site";

export function TrackedLink({
  href,
  channel,
  location,
  className,
  children,
}: {
  href: string;
  channel: "whatsapp" | "telegram" | "email";
  location: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      onClick={() => trackContactClick(channel, location)}
    >
      {children}
    </a>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Services", "/#services"],
    ["Pricing", "/#pricing"],
    ["Work", "/#work"],
    ["FAQ", "/#faq"],
    ["Contact", "/#contact"],
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl btn-glow font-display text-sm font-bold">
            TG
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            TGA <span className="text-gradient">Webs</span>
          </span>
        </Link>

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
          <TrackedLink
            href={TELEGRAM_DM}
            channel="telegram"
            location="header"
            className="hidden rounded-full px-5 py-2.5 text-sm font-semibold btn-glow sm:inline-flex"
          >
            Get a Quote
          </TrackedLink>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface md:hidden"
          >
            <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
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

export function SectionHead({
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
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-sm text-muted-foreground md:text-base">{sub}</p>}
    </Reveal>
  );
}

export function Footer() {
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
