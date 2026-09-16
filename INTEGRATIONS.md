# Connecting your tools

Everything on this page is done by editing one file: `src/config/site.ts`. You never need to touch any other file. Open it in any text editor, change the values between the quotes, save, and redeploy (if the site is on Vercel or Netlify, pushing the change to GitHub redeploys automatically).

Until you connect something, every button on the site opens an email to you with a subject line telling you which offering the person wants. So the site works on day one with nothing set up.

There are five slots. Each one has a `provider` (which tool you use) and one or more URLs or IDs.

## 1. Scheduling (the Book a Deal Call buttons)

Where people book their 45-minute Deal Call.

Find this block:

```ts
scheduling: { provider: "none", url: "", embedId: "" },
```

- **Calendly**: create an event type for the Deal Call (add intake questions asking for the listing link and a file upload of the financials). Copy the event's booking link, something like `https://calendly.com/yourname/deal-call`. Then set:
  `provider: "calendly", url: "https://calendly.com/yourname/deal-call"`
- **Cal.com**: same idea. Copy your event link, like `https://cal.com/yourname/deal-call`, and set `provider: "cal"` with that url.
- **GoHighLevel**: in GHL, open your calendar, get its scheduling link, and set `provider: "ghl"` with that url.

Tip: if you charge for the call through the scheduler (Calendly and GHL both support collecting payment at booking), you do not need a separate payment link for the Deal Call.

## 2. Payments (Deal Call, Quarterback, Under Contract)

Hosted checkout pages. People click the button on your site and land on a page run by Stripe or GHL where they pay. No cart, no checkout built into the site.

Find this block:

```ts
payments: {
  provider: "none",
  dealCallUrl: "",
  quarterbackUrl: "",
  underContractUrl: "",
},
```

- **Stripe**: in the Stripe dashboard, create three Payment Links: one for the $150 Deal Call (one-time), one for Quarterback at $500 a month (make this a subscription so people can cancel themselves), and one for Under Contract at $2,500 (one-time). Copy each link (they look like `https://buy.stripe.com/abc123`) into the matching field and set `provider: "stripe"`.
- **GoHighLevel**: create three order pages or payment links in GHL and paste those URLs instead, with `provider: "ghl"`.

Note: if you set up a scheduling link (slot 1), the Deal Call button uses the scheduling link first and ignores `dealCallUrl`. Use whichever flow you prefer: book-then-pay or pay-then-book.

## 3. Course

Where the Get the course button sends people. The course itself is hosted by the vendor, not on this site.

Find this block:

```ts
course: { provider: "none", url: "" },
```

- **Gumroad**: publish the course, copy the product URL (like `https://yourname.gumroad.com/l/course`), set `provider: "gumroad"` and paste the url.
- **Skool**: use your group's join or about URL with `provider: "skool"`.
- **Kajabi** or **GHL memberships**: use the checkout or offer URL with `provider: "kajabi"` or `provider: "ghl"`.

## 4. Email capture

There is intentionally no email signup on the launch site. When you decide you want a list, the form component already exists (`src/components/EmailCaptureForm.astro`); a developer, or Claude, can drop it into any section in a minute. To make it live:

```ts
emailCapture: { provider: "none", formAction: "", embedId: "" },
```

- **ConvertKit**: create a form in ConvertKit, grab the form ID from the embed code (the number in the script URL), set `provider: "convertkit"` and put that ID in `embedId`.
- **GHL** or anything else that accepts a form POST: set the provider and put the form's submission URL in `formAction`.

## 5. Analytics

Find this block:

```ts
analytics: { provider: "none", id: "" },
```

- **Plausible**: sign up at plausible.io, add your site, then set `provider: "plausible"` and put your domain (like `yourfirm.com`) in `id`.
- **Google Analytics 4**: create a GA4 property, copy the Measurement ID (looks like `G-XXXXXXXXXX`), set `provider: "ga4"` and put that ID in `id`.

No analytics script loads at all while the provider is `"none"`, which keeps the site fast.

## Checking your work

After any change, run the site locally (`npm run dev`) or wait for the deploy, then click the buttons. A button that still opens your email app means its slot is not filled in, or the provider is still `"none"`.
