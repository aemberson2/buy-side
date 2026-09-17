// -----------------------------------------------------------------------------
// Every external link, embed ID, contact detail, and piece of offering data
// lives in this file. Components read from here and nowhere else.
// See INTEGRATIONS.md in the repo root for plain-language fill-in instructions.
// -----------------------------------------------------------------------------

export type SchedulingProvider = "calendly" | "cal" | "ghl" | "none";
export type PaymentsProvider = "stripe" | "ghl" | "none";
export type CourseProvider = "gumroad" | "skool" | "kajabi" | "ghl" | "none";
export type EmailCaptureProvider = "convertkit" | "ghl" | "resend" | "none";
export type AnalyticsProvider = "plausible" | "ga4" | "none";

export type OfferingKey = "course" | "dealCall" | "quarterback" | "underContract";

export interface Offering {
  key: OfferingKey;
  label: string;
  headline: string;
  description: string;
  price: string;
  priceNote?: string;
  capNote?: string;
  ctaLabel: string;
  /** Subject line used for the mailto fallback when no integration is connected. */
  mailtoSubject: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const site = {
  name: "[FIRM NAME]",
  tagline: "Buy-side advisory for first-time business buyers",
  description:
    "A working business broker who helps first-time buyers evaluate deals, talk to brokers, build a deal team, and get to closing. No deal sourcing, no commission.",
  /** Set this to the production URL once deployed, e.g. "https://example.com". */
  url: "",
  advisor: {
    name: "Andrew",
    fullName: "Andrew Emberson",
    title: "Licensed Business Broker",
    location: "Minneapolis, MN",
    email: "[EMAIL]",
    phone: "[PHONE]",
    tiktok: "[TIKTOK URL]",
    linkedin: "[LINKEDIN URL]",
  },
  proof: {
    stats: [
      {
        value: "$1B+",
        text: "in businesses sold by my brokerage nationwide last year",
      },
      {
        value: "$50M+",
        text: "closed by our Minnesota office last year",
      },
      {
        value: "Hundreds",
        text: "of buyer conversations every month",
      },
    ],
  },
  integrations: {
    // Scheduling: "calendly" | "cal" | "ghl" | "none"
    scheduling: {
      provider: "none" as SchedulingProvider,
      url: "",
      embedId: "",
    },
    // Payments for Deal Call / Quarterback / Under Contract: "stripe" | "ghl" | "none"
    payments: {
      provider: "none" as PaymentsProvider,
      dealCallUrl: "",
      quarterbackUrl: "",
      underContractUrl: "",
    },
    // Course: "gumroad" | "skool" | "kajabi" | "ghl" | "none"
    course: {
      provider: "none" as CourseProvider,
      url: "",
    },
    // Email capture: "convertkit" | "ghl" | "resend" | "none"
    emailCapture: {
      provider: "none" as EmailCaptureProvider,
      formAction: "",
      embedId: "",
    },
    // Analytics: "plausible" | "ga4" | "none"
    analytics: {
      provider: "none" as AnalyticsProvider,
      id: "",
    },
  },
  offerings: [
    {
      key: "course",
      label: "The Playbook",
      headline:
        "I like the idea of buying a business someday, but I have no idea how it works or what it actually takes.",
      description:
        "How buying a small business actually works, from the broker's side of the table. The numbers, SBA loans, what brokers look for, what kills deals. Watch at your own pace.",
      price: "$27",
      ctaLabel: "Get the Playbook",
      mailtoSubject: "The Playbook",
    },
    {
      key: "dealCall",
      label: "Deal Call",
      headline:
        "I've started looking at listings, but I don't know what to look for or what questions to ask.",
      description:
        "Send me a real listing and its financials. I read everything before we talk. Then 45 minutes on the price, the red flags, and exactly what to ask the broker. The Playbook is included. Most people start here.",
      price: "$150",
      ctaLabel: "Book a Deal Call",
      mailtoSubject: "Deal Call",
    },
    {
      key: "quarterback",
      label: "Quarterback",
      headline:
        "I'm actively searching and I want someone in my corner while I do it.",
      description:
        "Your advisor while you search. Weekly calls, text and email in between, coaching before every broker conversation, and I review your LOI before it goes out. I help you build your team, keep you efficient, and save you money on things you don't need and mistakes you won't make. Cancel anytime.",
      price: "$500 a month",
      capNote:
        "Only 5 clients at a time so quality stays high. If I'm full, you go on the waitlist.",
      ctaLabel: "Apply for Quarterback",
      mailtoSubject: "Quarterback",
    },
    {
      key: "underContract",
      label: "Under Contract",
      headline:
        "I found the one and I'm under contract. Now I need to get it closed without blowing it up.",
      description:
        "Signed LOI to closing. The right CPA, attorney, QoE firm, and lender, in the right order, with weekly check-ins. Most deals don't die on the numbers. They die on the process.",
      price: "$2,500 flat.",
      priceNote: "$1,500 if you're already a Quarterback client.",
      ctaLabel: "Start Under Contract",
      mailtoSubject: "Under Contract",
    },
  ] satisfies Offering[],
  faq: [
    {
      question: "Do you find deals for me?",
      answer:
        "No. Thousands of listings are public on BizBuySell and the other marketplaces. Finding them is not the hard part. I help you spot the ones worth your time and work the process. Want off-market deals sourced for you? That's a different service and it costs many thousands of dollars.",
    },
    {
      question: "Can I just buy a Deal Call and nothing else?",
      answer: "Yes. A lot of people do. There's no upsell on the call.",
    },
    {
      question: "Do you get paid when I close?",
      answer:
        "No. I charge the same flat fees whether you buy the business or walk away. That's on purpose. It means I can tell you to walk.",
    },
    {
      question: "Are you licensed where I live?",
      answer:
        "I'm a licensed business broker in Minnesota. This is advisory work, not brokerage, and I work with buyers anywhere in the US. I'm not acting as your broker or agent in the transaction.",
    },
    {
      question: "Do I need financials before a Deal Call?",
      answer:
        "Yes. Sign the NDA, get the P&L and whatever the broker sends, then book. If all you have is the listing, the Playbook will get you further than a call.",
    },
    {
      question: "What if I don't end up buying anything?",
      answer:
        "Then you spent a few hundred dollars finding that out instead of a few hundred thousand.",
    },
    {
      question: "Can I cancel Quarterback?",
      answer: "Any time. It's month to month.",
    },
    {
      question: "What happens if the deal dies during Under Contract?",
      answer:
        "The fee is split, half at signing and half at close or termination. If it dies, you pay the second half and we talk about what's next. Deals dying in diligence is often the right outcome.",
    },
    {
      question: "Do you work with sellers?",
      answer:
        "Yes, that's my day job. It's also why I know what the other side is thinking.",
    },
  ] satisfies FaqItem[],
};

export type Site = typeof site;

/**
 * Resolve the destination for an offering's CTA from the integrations config.
 * When nothing is connected, every button falls back to a mailto with a
 * prefilled subject so the site is fully usable on day one.
 */
export function resolveOfferingHref(key: OfferingKey): string {
  const offering = site.offerings.find((o) => o.key === key);
  const subject = encodeURIComponent(offering?.mailtoSubject ?? site.name);
  const mailto = `mailto:${site.advisor.email}?subject=${subject}`;
  const { scheduling, payments, course } = site.integrations;

  switch (key) {
    case "course":
      return course.provider !== "none" && course.url ? course.url : mailto;
    case "dealCall":
      if (scheduling.provider !== "none" && scheduling.url) return scheduling.url;
      if (payments.provider !== "none" && payments.dealCallUrl) return payments.dealCallUrl;
      return mailto;
    case "quarterback":
      return payments.provider !== "none" && payments.quarterbackUrl
        ? payments.quarterbackUrl
        : mailto;
    case "underContract":
      return payments.provider !== "none" && payments.underContractUrl
        ? payments.underContractUrl
        : mailto;
  }
}

/** True when the resolved href leaves the site (used to add rel/target). */
export function offeringHrefIsExternal(key: OfferingKey): boolean {
  return resolveOfferingHref(key).startsWith("http");
}
