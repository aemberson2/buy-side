# Buy-side advisory site

Single-page marketing site for a buy-side advisory practice. Built with Astro and Tailwind, static output, no CMS, no database.

## Run it locally

You need Node 18 or newer.

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:4321).

To build the production version:

```bash
npm run build
npm run preview
```

The build also regenerates `public/og.png` (the image shown when the site is shared on social media) from the firm name and tagline in the config.

## Deploy

The site is static output with zero required config on either platform.

### Vercel

1. Push this repo to GitHub.
2. Go to vercel.com, click Add New Project, import the repo.
3. Vercel detects Astro automatically. Click Deploy. Done.

### Netlify

1. Push this repo to GitHub.
2. Go to app.netlify.com, click Add new site, import the repo.
3. Netlify detects Astro automatically (build command `npm run build`, publish directory `dist`). Click Deploy.

After deploying, set `url` in `src/config/site.ts` to your live domain (for example `"https://yourfirm.com"`) and redeploy, so social share images use absolute URLs.

## What to replace before launch

Everything still needing a real value is visibly highlighted on the rendered site with a dashed outline, so nothing ships by accident. All of it lives in `src/config/site.ts`:

- [ ] `name`: the firm name (appears in the nav, footer, comparison table, page title, and social image)
- [ ] `url`: the live domain once deployed
- [ ] `advisor.email`: real email (this is where every button points until integrations are connected)
- [ ] `advisor.phone`: real phone number
- [ ] `advisor.tiktok`: TikTok profile URL
- [ ] `advisor.linkedin`: LinkedIn profile URL
- [ ] `proof.stats`: the three stat lines (brokerage $1B+, Minnesota office $50M+, hundreds of buyer conversations). The brokerage is intentionally unnamed on the site; update the figures each year so they stay true.

And two photos:

- [ ] Hero photo of the advisor, 4:5 ratio (portrait). Replace the `<PlaceholderImage>` in `src/components/sections/Hero.astro` with an `<img>` of the same ratio.
- [ ] About photo, 4:5 ratio. Same swap in `src/components/sections/About.astro`.

Put the image files in `public/` (for example `public/andrew-hero.jpg`) and reference them as `/andrew-hero.jpg`. Keep the alt text that is already there.

## Connecting integrations

See `INTEGRATIONS.md`. Short version: the site works on day one with nothing connected. Every purchase or booking button falls back to an email link with a prefilled subject line. When you set up Stripe, Calendly, Gumroad, etc., you paste the URL into `src/config/site.ts` and the buttons switch over. No component edits needed.

## Project structure

```
src/
  config/site.ts          All copy data, contact details, integration URLs
  layouts/Layout.astro     Head, meta, fonts, analytics injection
  components/
    CTAButton.astro        Every purchase/booking button; resolves its own URL
    SchedulerEmbed.astro   Inline calendar embed (unused by default)
    EmailCaptureForm.astro Email signup form (unused by default)
    Nav.astro, Footer.astro, PlaceholderImage.astro
    sections/              One file per page section, in page order
  pages/index.astro        Assembles the sections
  styles/global.css        Design tokens and base styles
scripts/generate-og.mjs    Builds the social share image
```
