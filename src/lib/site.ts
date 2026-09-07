import {
  Gauge,
  IndianRupee,
  Palette,
  Rocket,
  Smartphone,
  Sparkles,
  Store,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

import demoBusiness from "@/assets/demo-business.jpg";
import demoRestaurant from "@/assets/demo-restaurant.jpg";
import demoPortfolio from "@/assets/demo-portfolio.jpg";
import demoLanding from "@/assets/demo-landing.jpg";

export const SITE_URL = "https://tgadevs.lovable.app";
export const TELEGRAM_DM = "https://t.me/ENDLES_ERA";
export const TELEGRAM_CHANNEL = "https://t.me/TGADEVS";
export const EMAIL_ADDRESS = "tgadevs@gmail.com";
export const EMAIL = `mailto:${EMAIL_ADDRESS}`;
export const WHATSAPP_NUMBER = ""; // add your number here to open a direct chat

/** Build a WhatsApp link with a prefilled message. */
export function whatsappUrl(message: string) {
  const base = WHATSAPP_NUMBER
    ? `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=`
    : "https://api.whatsapp.com/send?text=";
  return base + encodeURIComponent(message);
}

export const WHATSAPP = whatsappUrl(
  "Hi TGA Webs, I want a website for my business.",
);

type TrackPayload = Record<string, string | number | undefined>;

/**
 * Lightweight click tracking for WhatsApp / Telegram CTAs.
 * Pushes to dataLayer (GA/GTM ready) and keeps a local counter so the
 * owner can see engagement even without an analytics account connected.
 */
export function trackContactClick(
  channel: "whatsapp" | "telegram" | "email" | "form",
  location: string,
  extra: TrackPayload = {},
) {
  if (typeof window === "undefined") return;
  const event = {
    event: "contact_click",
    contact_channel: channel,
    contact_location: location,
    page_path: window.location.pathname,
    ...extra,
  };
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(event);
  try {
    const key = "tga_contact_clicks";
    const log = JSON.parse(localStorage.getItem(key) || "[]") as unknown[];
    log.push({ ...event, ts: Date.now() });
    localStorage.setItem(key, JSON.stringify(log.slice(-100)));
  } catch {
    /* storage unavailable */
  }
}

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  hero: string;
  intro: string;
  image: string;
  price: string;
  timeline: string;
  includes: string[];
  process: { step: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "business-websites",
    icon: Store,
    title: "Business Websites",
    short:
      "Professional multi-page sites that make your shop or service look established and trustworthy.",
    hero: "Business websites that win trust before the first call",
    intro:
      "Most customers check you online before they ever walk in. We build clean, credible multi-page websites that show what you do, why you're the safe choice, and exactly how to reach you.",
    image: demoBusiness,
    price: "From ₹999",
    timeline: "3-4 days",
    includes: [
      "Home, About, Services and Contact pages",
      "Google Maps location & click-to-call",
      "Enquiry form straight to WhatsApp",
      "Customer reviews section",
      "Search-friendly headings and page titles",
      "Fully responsive on phone, tablet and desktop",
    ],
    process: [
      { step: "Share your details", text: "Business name, services, photos and contact info." },
      { step: "Design draft", text: "We send a live preview link within 48 hours." },
      { step: "Revisions", text: "You point, we polish — colours, copy, sections." },
      { step: "Launch", text: "We put it live on your domain and hand over the keys." },
    ],
    faqs: [
      { q: "Can you write the content for me?", a: "Yes. Give us rough points and we'll turn them into clean, professional copy." },
      { q: "Will it show up on Google?", a: "Every page ships with proper titles, descriptions and headings, plus a sitemap for search engines." },
    ],
  },
  {
    slug: "restaurant-websites",
    icon: UtensilsCrossed,
    title: "Restaurant Websites",
    short: "Digital menus, photo galleries, table booking links and click-to-call ordering.",
    hero: "Menus that look delicious on every phone",
    intro:
      "A hungry customer decides in seconds. We build fast, photo-first restaurant sites with a digital menu, ordering buttons and directions — no app, no PDF, no pinch-to-zoom.",
    image: demoRestaurant,
    price: "From ₹999",
    timeline: "3-4 days",
    includes: [
      "Digital menu with categories and prices",
      "Food photo gallery",
      "WhatsApp ordering & click-to-call",
      "Table booking or reservation link",
      "Opening hours and Google Maps",
      "Zomato / Swiggy / Instagram links",
    ],
    process: [
      { step: "Send your menu", text: "A photo or PDF is enough — we type it out." },
      { step: "Photo selection", text: "We pick and optimise your best food shots." },
      { step: "Preview & tweak", text: "Adjust dishes, prices and sections anytime." },
      { step: "Go live", text: "Share one link in your bio, board and bills." },
    ],
    faqs: [
      { q: "Can I update prices later?", a: "Yes — send us the change and it's updated the same day, free for the first month." },
      { q: "Do you support online ordering?", a: "Orders come through WhatsApp or a call by default; full checkout can be added on request." },
    ],
  },
  {
    slug: "portfolio-websites",
    icon: Palette,
    title: "Portfolio Websites",
    short: "Sleek showcases for creators, freelancers, photographers and designers.",
    hero: "A portfolio that makes clients say yes",
    intro:
      "Your work deserves better than a social feed. We build calm, gallery-style portfolio sites that put your projects front and centre and make hiring you effortless.",
    image: demoPortfolio,
    price: "From ₹999",
    timeline: "2-3 days",
    includes: [
      "Full-width project gallery",
      "Case study / project detail sections",
      "About and services page",
      "Contact form and social links",
      "Fast image loading",
      "Personal domain setup help",
    ],
    process: [
      { step: "Pick your best work", text: "8-12 pieces is the sweet spot." },
      { step: "Layout direction", text: "Grid, masonry or full-bleed — you choose." },
      { step: "Polish", text: "Typography, spacing and subtle motion." },
      { step: "Launch", text: "Live link ready for your bio and pitches." },
    ],
    faqs: [
      { q: "Can I add new projects myself?", a: "We can set up a simple editable structure, or just send us new work and we'll add it." },
      { q: "Do you design a logo too?", a: "Basic brand touch-ups are included in the Premium plan." },
    ],
  },
  {
    slug: "landing-pages",
    icon: Rocket,
    title: "Landing Pages",
    short: "High-converting single pages built for ads, launches and lead generation.",
    hero: "One page, built to convert",
    intro:
      "Running ads or a launch? A landing page with one clear message and one clear action beats a full website every time. We design for the click, not the applause.",
    image: demoLanding,
    price: "From ₹499",
    timeline: "1-2 days",
    includes: [
      "Conversion-focused single page",
      "Lead form with WhatsApp delivery",
      "Offer, benefits and social proof blocks",
      "Countdown or launch banner",
      "Ad-ready fast loading",
      "Click tracking on every button",
    ],
    process: [
      { step: "Define the offer", text: "One promise, one audience, one action." },
      { step: "Copy & layout", text: "We structure the page around the decision." },
      { step: "Build", text: "Live preview in 24-48 hours." },
      { step: "Track", text: "Buttons wired for click tracking from day one." },
    ],
    faqs: [
      { q: "Can you connect it to my ads?", a: "Yes — we set the page up with tracking so you can measure clicks and leads." },
      { q: "How fast can it go live?", a: "Simple landing pages are usually delivered within 48 hours." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const plans = [
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

export const reasons = [
  { icon: IndianRupee, title: "Affordable", text: "Agency-quality design at prices small businesses can actually pay." },
  { icon: Gauge, title: "Fast Delivery", text: "Most websites go live within 2 to 4 days, not weeks." },
  { icon: Smartphone, title: "Mobile Friendly", text: "Built mobile-first, because most of your customers arrive on a phone." },
  { icon: Sparkles, title: "Custom Design", text: "No recycled templates. Every site is designed around your brand." },
];

export const work = [
  { img: demoBusiness, title: "Nova Consulting", tag: "Business Website" },
  { img: demoRestaurant, title: "Spice Route Kitchen", tag: "Restaurant Website" },
  { img: demoPortfolio, title: "Aarav Studio", tag: "Portfolio Website" },
  { img: demoLanding, title: "PulseFit Launch", tag: "Landing Page" },
];

export const testimonials = [
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
  {
    name: "Karan Bhatia",
    role: "Gym Owner",
    text: "The landing page paid for itself in a week. Enquiries land straight in my WhatsApp with all details filled in.",
  },
  {
    name: "Priya Raghavan",
    role: "Bakery Owner",
    text: "They understood my brand instantly. Soft colours, big photos and a menu my customers actually read.",
  },
];

export const faqs = [
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
