import { useState, type FormEvent } from "react";
import { ArrowRight, MessageCircle, Send } from "lucide-react";

import { TELEGRAM_DM, services, trackContactClick, whatsappUrl } from "@/lib/site";

const budgets = ["₹499 — Basic", "₹999 — Standard", "₹1,999 — Premium", "Not sure yet"];

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState(defaultService ?? services[0]!.title);
  const [budget, setBudget] = useState(budgets[1]!);
  const [details, setDetails] = useState("");
  const [sent, setSent] = useState(false);

  const message = [
    "New website enquiry — TGA Webs",
    `Name: ${name || "-"}`,
    `Business: ${business || "-"}`,
    `Contact: ${contact || "-"}`,
    `Service: ${service}`,
    `Budget: ${budget}`,
    `Details: ${details || "-"}`,
  ].join("\n");

  const submit = (e: FormEvent, channel: "whatsapp" | "telegram") => {
    e.preventDefault();
    trackContactClick(channel, "contact_form", { service, budget });
    setSent(true);
    const url =
      channel === "whatsapp"
        ? whatsappUrl(message)
        : `${TELEGRAM_DM}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
  };

  const field =
    "w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand/60";

  return (
    <form className="surface-card rounded-3xl p-6 md:p-8" onSubmit={(e) => submit(e, "whatsapp")}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Your name
          </span>
          <input
            required
            className={field}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Rahul Mehta"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Business name
          </span>
          <input
            className={field}
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            placeholder="Mehta Electronics"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Phone, email or Telegram
          </span>
          <input
            required
            className={field}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="+91 98765 43210"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            What do you need?
          </span>
          <select className={field} value={service} onChange={(e) => setService(e.target.value)}>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Budget
          </span>
          <select className={field} value={budget} onChange={(e) => setBudget(e.target.value)}>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Tell us about your idea
          </span>
          <textarea
            rows={4}
            className={field}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="I run a bakery and want a menu page with photos and WhatsApp ordering."
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold btn-glow"
        >
          <MessageCircle className="h-4 w-4" /> Send on WhatsApp
          <ArrowRight className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={(e) => submit(e, "telegram")}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-surface-2 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-brand/50"
        >
          <Send className="h-4 w-4" /> Send on Telegram
        </button>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        {sent
          ? "Your message is ready in the chat window — just press send and we'll reply within a few hours."
          : "Your answers open a ready-to-send chat message. Nothing is stored on this website."}
      </p>
    </form>
  );
}
