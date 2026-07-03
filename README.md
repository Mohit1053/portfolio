# Mohit — Portfolio

A fast, animated single-page portfolio built to win both **recruiters** (hire) and **clients** (freelance / agency). Positions Mohit as a one-stop AI partner across **Product, Engineering & Data**.

Built with **React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion**.

---

## Quick start

```bash
npm install
npm run dev        # local dev at http://localhost:5173
npm run build      # type-check + production build into /dist
npm run preview    # preview the production build locally
```

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
| Change nav links | `navItems` |

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
}
```

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

### Option B — GitHub Pages

```bash
npm run build
npx gh-pages -d dist        # or push /dist to the gh-pages branch
```

If serving from `https://<user>.github.io/<repo>/` (a sub-path), set `base: '/<repo>/'` in `vite.config.ts`. For `mohit1053.github.io` (root), leave `base: '/'`.

---

## Make the contact form send email to an inbox (optional)

The form currently opens the visitor's email client, pre-filled to your address — zero setup, always works. To receive submissions **without** opening an email client:

1. Create a free form at [formspree.io](https://formspree.io) and copy your endpoint (e.g. `https://formspree.io/f/abc123`).
2. In [`src/components/Contact.tsx`](src/components/Contact.tsx), replace the `onSubmit` handler with a `fetch(POST)` to that endpoint (send the `FormData`), and show a success state.

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
