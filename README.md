# Mohit — Portfolio

[![CI](https://github.com/Mohit1053/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Mohit1053/portfolio/actions/workflows/ci.yml)

A fast, animated single-page portfolio built to win both **recruiters** (hire) and **clients** (freelance / agency). Positions Mohit as a one-stop AI partner across **Product, Engineering & Data**.

Built with **React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion**.

---

## Quick start

```bash
npm install
npm run dev        # local dev at http://localhost:5173
npm run build      # type-check + production build into /dist
npm run preview    # preview the production build locally
npm test           # build + Playwright smoke tests (headless)
```

## Tests & CI

A [Playwright](https://playwright.dev) smoke suite in [`tests/`](tests/) drives the real production build — page load (no uncaught errors), every section present, theme toggle + persistence, project modal open/close, category filter, nav scroll, contact form, résumé link, the 404 page, and the mobile menu drawer.

```bash
npm test           # runs headless against a preview build
npm run test:ui    # interactive Playwright UI
```

GitHub Actions ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)) type-checks, builds, and runs the suite on every push and pull request.

---

## Editing content (no design knowledge needed)

**Everything on the site is driven by one file:** [`src/data/content.ts`](src/data/content.ts).
Open it and edit the plain-text values. The layout updates automatically.

| I want to… | Edit this in `content.ts` |
|---|---|
| Change name / role / tagline / contact | `profile` |
| Change the availability badge text | `profile.availability` |
| Change hero rotating phrases | `profile.rotatingWords` |
| Change the 4 big hero numbers | `heroStats` |
| Edit the "About" text & quick facts | `about` |
| Edit the Services / capabilities | `services` |
| Edit "Why work with me" points | `differentiators` |
| Change the proof metrics band | `impactMetrics` |
| Edit the process steps | `process` |
| Add / edit jobs & the founder/agency entry | `experiences` |
| **Add or edit a project** | `projects` (see below) |
| Edit skills | `skillGroups` |
| Edit education / certs / leadership | `education`, `certifications`, `leadership` |
| Edit the FAQ | `faqs` |
| Edit testimonials (or empty to hide the section) | `testimonials` |
| Edit writing / articles (or empty to hide) | `writing` |
| Add a hero headshot | `profile.photo` (drop a square image in `public/`, set the path) |
| Receive form submissions in your inbox | `profile.formEndpoint` (see below) |
| Change nav links | `navItems` |

> Light/dark theme, the scroll-to-top button, and the animated console are automatic — no config needed. The site defaults to dark and remembers the visitor's choice.

### Add a new project

Append an object to the `projects` array in `content.ts`:

```ts
{
  id: 'my-new-project',                 // unique
  title: 'My New Project',
  category: 'AI Products',              // must be one of projectCategories
  year: '2026',
  featured: true,                       // gold "Featured" badge + highlighted card
  tagline: 'One punchy line about it.',
  description: 'Two or three sentences with the full story.',
  highlights: ['Point one.', 'Point two.', 'Point three.'],
  metrics: [{ value: '10x', label: 'faster' }],   // optional, up to 3 look best
  tags: ['Python', 'LLMs', 'FastAPI'],
  links: [{ label: 'GitHub', href: 'https://github.com/Mohit1053/...' }], // optional
  image: '/shots/my-project.png',       // optional — 16:9 screenshot in public/; shows on card + modal
}
```

Drop project screenshots in `public/` (e.g. `public/shots/`) and reference them with an absolute path (`/shots/name.png`). Omit `image` to keep the clean icon-only card.

Valid `category` values are in `projectCategories` (`AI Products`, `Voice AI`, `Quant & Finance`, `NLP & RAG`, `Computer Vision`, `Automation`, `Research`). Add a new category by adding it to that list **and** giving it an icon in `src/lib/icons.tsx` (`categoryIcon`).

---

## Swapping the résumé

Replace [`public/Mohit_Resume.pdf`](public/Mohit_Resume.pdf) with your latest PDF (keep the same filename, or update `profile.resume` in `content.ts`).

## Regenerating the social preview (OG) image

The social preview at `public/og-image.png` is generated from a template:

```bash
node scripts/og.mjs        # requires Playwright chromium (already installed)
```

Edit the HTML in `scripts/og.mjs` to change it.

## Colors, fonts, effects

- Design tokens (colors, fonts, shadows) live at the top of [`src/index.css`](src/index.css) in the `@theme` block.
- Fonts are loaded in [`index.html`](index.html) (Sora / Inter / JetBrains Mono).

---

## Deploy

### Option A — Vercel (recommended)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Vercel auto-detects Vite. Confirm: **Build = `npm run build`**, **Output = `dist`**. Deploy.
4. (Optional) Add a custom domain in Vercel → Settings → Domains.

`vercel.json` sets security headers + long-lived caching for hashed assets, and `public/404.html` is a branded not-found page — both applied automatically on deploy.

### Option B — GitHub Pages (free backup, already automated)

Every push to `main` also publishes to **https://mohit1053.github.io/portfolio/** via
[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). No setup needed.

How the two hosts coexist:

- Vercel serves at `/`; GitHub Pages serves the project at `/portfolio/`.
- The Pages workflow builds with `DEPLOY_TARGET=pages`, which switches Vite's `base` to `/portfolio/`
  (see [`vite.config.ts`](vite.config.ts)). Vercel builds without it and stays at `/`.
- Runtime asset paths (résumé, photo, project images) go through [`asset()`](src/lib/asset.ts),
  which prefixes `import.meta.env.BASE_URL` — a no-op on Vercel, correct on Pages.
- `canonical` / `og:url` intentionally point at the **Vercel** URL so search engines treat it as the
  primary and don't flag the mirror as duplicate content.

Both hosts are free forever. Vercel is the one to share; Pages is the safety net.

---

## Make the contact form land in your inbox (optional)

Out of the box the form opens the visitor's email client, pre-filled to your address — zero setup, always works. To receive submissions **without** opening an email client (with inline success / error states):

1. Create a free form at [formspree.io](https://formspree.io) and copy your endpoint (e.g. `https://formspree.io/f/abc123`).
2. Set `profile.formEndpoint` to that URL in [`src/data/content.ts`](src/data/content.ts). That's it — the form auto-switches to async submit with a "Sending…" state and a success / error message.

---

## Project structure

```
public/            static assets (résumé, favicon, og-image)
src/
  data/content.ts  ← all site content (edit here)
  lib/             icons, helpers, scroll hooks
  components/       one file per section
    ui/            small reusable pieces (Reveal, Section, Aurora, …)
  index.css        design tokens + effects
  App.tsx          section order
scripts/           screenshot + OG-image generators (dev only)
```
