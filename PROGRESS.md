# rclick.io — build progress

## Setup
- [x] Clone template, rm -rf .git, git init
- [x] npm install, baseline build passes
- [x] Slug `rclick-io` in package.json and .claude/launch.json

## Content
- [x] content/site.ts — all copy written
- [x] content/pages.ts — all copy written
- [x] Homepage download band (CtaBand) and `release` removed
- [x] Team block on /about removed
- [x] Offices on /contact removed
- [x] benefits.card = null

## Look
- [x] Theme: slate (blue #2f4a6b). IT / corporate mood fits an IT-worker tool.
- [x] brand.themeColor and opengraph-image ACCENT/TINT/BORDER match slate
- [x] Placeholder icons regenerated in slate accent

## Polish loop
- [x] Pass 1: tsc + build clean, grep clean, overflow check at 390/768/1024/1440, nav collapses, copy read-back, focus rings, contact form mailto, OG image
- [x] Pass 2: same, clean

## Ship
- [x] Commit to main
- [x] GitHub repo DevinDaDev/rclick-io
- [x] Vercel deploy, NEXT_PUBLIC_SITE_URL set, redeploy
- [x] Live 200 + nav click-through

## Assumptions
- Legal owner = "rclick.io" (no company name given).
- Support email = devin@rclick.com. **Placeholder until a real support address exists.** Used in footer, FAQ, contact page, and the mailto form fallback.
- "Download button" was requested but no file or URL was given. Primary button is "Get in touch" → /contact. Homepage download band deleted. Swap `primaryAction` in content/site.ts when an installer exists.
- Pricing: tiers Free / Team / Business, "Contact for pricing" on paid tiers, no dollar figures.
- Session history feature is inferred, not confirmed. Free tier contents (remote sessions, diagnostics, reports, email support) and Team/Business extras (shared history, setup call, invoice billing, named contact) are proposed plan shapes, not confirmed.
- Billing FAQ answers (technician = person who starts a session, invoice on Business only) are proposed, not confirmed.
- Product runs on Windows 10 and 11. Inferred from "remotes to users pc"; nothing else was stated.
- Diagnostic check list (disk, memory, startup, drivers, network, event log) and security sweep scope (patches, startup items, local settings, known bad software) are inferred from "diagnostic and security automation". Trim any the build does not do.
- Product described as "early access" throughout since there is no public download yet.
- No team block, no stats card, no offices, no testimonials.
- Theme: slate.

## Images still needed (v2 redesign, 2026-09-09)
Mockup-style redesign is live. These slots currently reuse the old hero photo or a screenshot as a stand-in. Generate and drop in with these exact filenames:

| Slot | File | Size | Prompt notes |
|---|---|---|---|
| Home hero | public/img/hero.png | 1600x1000 | Laptop on a desk showing the rclick.io Session screen; left half quiet. Then set hero.window = null in content/site.ts |
| Features hero | public/img/hero-features.png | 1600x1000 | Same style, laptop showing Diagnostics |
| Pricing hero | public/img/hero-pricing.png | 1600x1000 | Same style, laptop showing Sessions list |
| About hero | public/img/hero-about.png | 1600x1000 | Monitor showing the checklist, poster on wall |
| Contact hero | public/img/hero-contact.png | 1600x1000 | Laptop closed, mug, poster; no UI needed |
| Benefits photo | public/img/benefits.png | 1180x760 | Office chair and desk, print on chair back |
| About story | public/img/about-story.png | 1180x760 | Monitor with a floating checklist card |
| About philosophy | public/img/about-philosophy.png | 1180x760 | Chair with printed slogan, desk behind |

Icons, logo and the four app screenshots are done.
