import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

import { testimonials } from "@/lib/site";
import { useIsMobile } from "@/hooks/use-mobile";

export function TestimonialCarousel() {
  const isMobile = useIsMobile();
  const perView = isMobile ? 1 : 2;
  const pages = Math.ceil(testimonials.length / perView);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setPage(0);
  }, [perView]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setPage((p) => (p + 1) % pages), 5500);
    return () => clearInterval(id);
  }, [pages, paused]);

  return (
    <div
      className="mt-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)]"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="shrink-0 px-2.5"
              style={{ width: `${100 / perView}%` }}
            >
              <figure className="surface-card h-full rounded-3xl p-7">
                <Quote className="h-7 w-7 text-brand/70" />
                <blockquote className="mt-5 text-base leading-relaxed text-muted-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand/15 font-display text-sm font-bold text-brand">
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
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          aria-label="Previous testimonials"
          onClick={() => setPage((p) => (p - 1 + pages) % pages)}
          className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface transition-colors hover:border-brand/50 hover:text-brand"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === page}
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all ${
                i === page ? "w-7 bg-brand" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
        <button
          aria-label="Next testimonials"
          onClick={() => setPage((p) => (p + 1) % pages)}
          className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface transition-colors hover:border-brand/50 hover:text-brand"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
