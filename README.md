# Software One-Page Template

A reusable marketing site for a piece of software. A one-page home (hero, features,
benefits, screenshots, download or sign-up band, FAQ) plus Features, Pricing, About and
Contact pages. No backend and no third-party requests; the contact form posts to a
form service you name or falls back to email. Cloned fresh for each product.

Two ways to start a site: read START-HERE.md and work through it, or paste
**[BUILD-PROMPT.md](BUILD-PROMPT.md)** into a fresh Claude Code session with the product
name and description and let it run to a live Vercel URL.

Stack: **Next.js 16 + Tailwind 4 + TypeScript, deployed on Vercel.**

Building a site from this? Read **[START-HERE.md](START-HERE.md)**. That is the whole brief.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000. Edit `content/site.ts` and watch it change.

## Where things live

| What | Where |
|---|---|
| Homepage copy, links, brand, release info | `content/site.ts` |
| Inner page copy (features, pricing, about, contact) | `content/pages.ts` |
| Colour presets | `themes/*.css`, switched in `themes/active.css` |
| Font | `lib/fonts.ts` |
| Page order | `app/page.tsx` |
| Homepage sections, one file each | `components/sections/` |
| Inner-page building blocks | `components/pages/` |
| Inner pages | `app/features`, `app/pricing`, `app/about`, `app/contact` |
| Sticky nav, slideshow, FAQ deep-link helper | `components/` |
| Icons and logo mark | `components/Icons.tsx` |
| Images | `public/img/` |
| Release binaries (gitignored) | `public/downloads/` |
| Placeholder image generator | `scripts/make-placeholders.mjs` |

## Design in one paragraph

Business utility, not consumer SaaS. Two surfaces (white and a warm off-white), one
accent hue, borders instead of shadows, no gradients on content. The only blurred
surface is the sticky nav. Every quiet grey clears WCAG AA on both surfaces. Focus rings
are a solid 2px outline everywhere. Breakpoints use `max-[768px]`, `max-[1024px]`,
`max-[1200px]` because Tailwind 4 excludes the named pixel; pair any new rule with those.

## Pages and sections

Every page and every homepage section is independent. Details in START-HERE.md under
"Pages" and "Sections". The repo name says one-page because the home is; the inner pages
were added in the same sitting.

## Origin

Generalised from the WorkLog product site (September 2026). No WorkLog assets or copy
remain.
