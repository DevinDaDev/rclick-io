# START HERE — agent build protocol

You are building a marketing site for a piece of software from this template: a
one-page home plus Features, Pricing, About and Contact pages.
Read this file fully, then follow it top to bottom. Work autonomously. Make ordinary
judgement calls yourself and keep going.

**The human gave you:** this repo, the product name, and whatever they have about the
product (an app, screenshots, a spec, an old page). Everything else you ask for below.

---

## Step 0 — Ask these FIRST, in one message

Batch them. Mark the ones with a default as "I'll assume X unless you say otherwise" so
the human can reply with only the exceptions.

### Must have

1. **Product name and legal owner** for the copyright line.
2. **What the primary button does.** Download a file, sign up at a URL, or book a call.
   Give the exact URL or file. This drives every green button on the page.
3. **Support email.** Confirmed with the client. Never guess one from the domain.
4. **Deploy target.** Vercel scope/team and project name. Whether to go live on a real
   domain in this run or stop at a preview URL.

### Ask, proceed on the default

5. **Pages and sections.** Default: keep all five pages and all six homepage sections.
   See "Pages" and "Sections" below for how to drop one cleanly. A product with no
   paid plan drops `/pricing`. A solo founder may drop the team block on `/about`.
6. **Theme preset.** Default: pick one from `themes/` that no recent client is using and
   say which. See `themes/README.md`. This is what stops two clients looking identical.
7. **Screenshots.** Real captures at 1180×760 or the closest 3:2-ish ratio. If none exist,
   say so and ship with the grey placeholders clearly labelled in PROGRESS.md.
8. **Hero photo.** A quiet landscape photo, 1600px wide or more. If none, leave the grey
   placeholder and list it in PROGRESS.md. Do not pull a stock image without asking.

### Confirm before you finish

9. Every number in the benefits stat card. **Never invent figures.** If nothing is
   verifiable, set `benefits.card = null` and let the list take the full width.
10. Price and licence wording in the FAQ.

---

## Step 1 — Set up

1. Create `C:\Users\Devin\Documents\projects\<product-slug>`.
2. Clone this template into it, then `rm -rf .git` and `git init`.
3. `npm install`, then confirm **`npm run build` passes before you change anything**.
4. Set `package.json` `name` and `.claude/launch.json` `name` to the slug.
5. Write `PROGRESS.md` as a checklist. It is your source of truth if you lose your place.

---

## Step 2 — Content

Homepage copy is in **`content/site.ts`**. Inner pages are in **`content/pages.ts`**.
Layout files never carry copy.

1. Search both files for `TODO` and replace every one.
2. `brand` — name, owner, description, contact email, keywords, OS string.
3. `primaryAction` — the one link every primary button uses. Three shapes are shown in
   the comment above it.
4. `release` — version, size, filename, SHA-256. Not a download product? Delete the
   CtaBand section instead of leaving fake release data.
5. `hero`, `features`, `benefits`, `screenshots`, `cta`, `faq`, `footer` — homepage copy.
6. In `content/pages.ts`: `closing` (the band on every inner page), `featuresPage`,
   `pricingPage`, `aboutPage`, `contactPage`.
7. Contact form: set `contactPage.form.action` to a Formspree or Basin endpoint if the
   client has one. Left empty, the form opens a pre-filled email instead, so it still
   works with no backend.

### Copy rules

- Plain words. No "seamless", "powerful", "robust", "leverage", "empower".
- One idea per sentence. Under 20 words.
- Say what the product does, not what it is. "Tracks the files you open" beats "a
  file-tracking solution".
- Never claim a capability the build does not have. Never invent a testimonial, a
  customer count, or a rating.
- The FAQ is where honesty lives. If something is unfinished, say so in a callout there.

---

## Step 3 — Images

Put files in `public/img/` and update the paths in `content/site.ts`.

| Slot | Size | Notes |
|---|---|---|
| `hero.image` | 1600×1000 or larger | Quiet on the left third; text sits over it |
| `hero.window` | 1180×760 | The main screen. Also used as screenshot one |
| `screenshots.shots[].src` | 1180×760 | Unretouched. Invent any names visible in them |
| `app/icon.png` | 64×64 or larger | Favicon |
| `app/apple-icon.png` | 180×180 | iOS home screen |

Real logo: drop it in `public/img/` and replace the body of `LogoMark` in
`components/Icons.tsx` with a `next/image`. Ratio is on you.

Placeholders are regenerated with `node scripts/make-placeholders.mjs`. Never ship a
placeholder without listing it in PROGRESS.md.

---

## Step 4 — Look

1. Pick a preset in `themes/active.css`. Four exist. To add one, copy `forest.css`.
2. Match `brand.themeColor` in `content/site.ts` and the `ACCENT` constants in
   `app/opengraph-image.tsx` to the preset's accent.
3. Font: `lib/fonts.ts`. Inter Tight default, self-hosted. Only change if asked.

Do not add gradients to content sections, extra shadows, or a third surface colour. The
design is borders-and-two-surfaces on purpose.

---

## Pages

| Page | Route | Content block | Layout |
|---|---|---|---|
| Home | `app/page.tsx` | `content/site.ts` | Six stacked sections, see below |
| Features | `app/features/page.tsx` | `featuresPage` | Hero, alternating image rows, full icon grid, closing band |
| Pricing | `app/pricing/page.tsx` | `pricingPage` | Hero, three tier cards, billing FAQ, closing band |
| About | `app/about/page.tsx` | `aboutPage` | Hero, story + image, values grid, team cards, closing band |
| Contact | `app/contact/page.tsx` | `contactPage` | Hero, contact methods + offices, form |

Inner-page building blocks live in `components/pages/`: `PageHero`, `AltRows`,
`IconGrid`, `PricingTiers`, `FaqList`, `ClosingCta`, `ContactForm`. Every inner page
is Nav → PageHero → blocks → ClosingCta → Footer. Copy that pattern for a new page.

**To remove a page:** delete its folder in `app/`, its block in `content/pages.ts`, its
entry in `app/sitemap.ts`, and its links in `nav.links` and `footer.columns`.

## Sections (homepage)

Each section is one file in `components/sections/` and one line in `app/page.tsx`.

| Section | File | Anchor |
|---|---|---|
| Hero | `Hero.tsx` | `#top` |
| Features | `Features.tsx` | `#features` |
| Benefits | `Benefits.tsx` | `#benefits` |
| Screenshots | `ScreenshotsSection.tsx` | `#screenshots` |
| CTA band | `CtaBand.tsx` | `#download` |
| FAQ | `Faq.tsx` | `#faq` |
| Footer | `Footer.tsx` | — |

**To remove one:** delete its line in `app/page.tsx`, remove its link from `nav.links`
and `footer.columns` in `content/site.ts`, and check no other `href` points at its
anchor. Delete the component file. Build.

**To add one:** copy the closest existing section, give it an `id`, an
`aria-labelledby`, and a `SectionHeader`. Add its copy to `content/site.ts`, not the
component.

---

## Step 5 — Verify

1. `npx tsc --noEmit` and `npm run build` both clean.
2. `grep -rn TODO content/ app/ components/` returns nothing.
3. Open every page at 390px, 768px, 1024px and 1440px. No horizontal scroll at any
   width on any page. Nav collapses below 1024px.
3a. Submit the contact form once. With no `action` it must open a pre-filled email.
4. Tab through the page once. Every control shows a focus ring.
5. Click every link in the nav and footer. Anchors land under the sticky bar, not
   behind it.
6. View `/opengraph-image`, `/robots.txt`, `/sitemap.xml`.

---

## Step 6 — Deploy

Only when the human says so.

1. Commit to `main`. No branches, no PRs.
2. Create the GitHub repo under the account the human names.
3. `npx vercel deploy --prod --yes --scope <scope>`. Set `NEXT_PUBLIC_SITE_URL` in the
   Vercel project first so the canonical URL and sitemap are right.
4. If a download product: upload release files to `public/downloads/` before deploying.
   They are gitignored on purpose. `.vercelignore` lets them through.
5. Report the live URL and anything still in PROGRESS.md.

---

## Never

- Invent stats, prices, testimonials, or customer names.
- Add analytics, a chat widget, a cookie banner, or any third-party script without being
  asked. The page currently makes zero third-party requests.
- Hardcode copy in a component.
- Leave a TODO in shipped content.
