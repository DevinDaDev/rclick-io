# One-shot build prompt

Paste everything below the line into a **fresh Claude Code session**. Fill in the two
fields at the top. Send it as one message. It does not need `/loop`: the prompt tells the
session to keep going until the checklist is green, and your global CLAUDE.md already
says autopilot. `/loop` is for re-running a task on a timer, which would restart the
build instead of finishing it.

If the session dies mid-way, paste the same prompt again and add one line:
"Resume. The repo already exists at <path>. Read PROGRESS.md first."

---

PRODUCT NAME: <name>
PRODUCT DESCRIPTION: <two to five sentences: what it does, who it is for, what the primary
button should do (download / sign up URL / book a call URL), and the support email if you
have one>

Build the complete marketing website for the product above and get it live on Vercel.
One shot. Do not stop to ask questions. Do not stop at a preview. Stop only when every
item in the DONE checklist at the bottom is true, then report.

## Source

Template repo: https://github.com/DevinDaDev/software-onepage-template
Read its START-HERE.md fully before touching anything. Follow it, with these overrides:

- **Skip every "ask first" question.** Use the defaults below. Log every default you had
  to lean on in PROGRESS.md under "Assumptions" so I can correct them afterwards.
- **Do deploy and do push.** START-HERE says wait for permission. This prompt is that
  permission.

## Defaults when the description does not say

- Legal owner: the product name.
- Support email: devin@rclick.com. Flag it in Assumptions.
- Primary button: if no URL or file was given, use a "Get in touch" button that links to
  /contact. Delete the download band from the homepage and the `release` details.
- Pricing: if no prices were given, keep the /pricing page but make the tiers
  "Free", "Team", "Business" with "Contact for pricing" on the paid ones and no dollar
  figures. Never invent a number.
- Team block on /about: remove it. No invented people.
- Stats card on the homepage: set `benefits.card = null` unless the description gives
  real figures.
- Offices on /contact: remove unless an address was given.
- Theme: pick the preset in themes/ that best matches the product's mood. Say which.
- Images: keep the generated grey placeholders. List each slot in PROGRESS.md under
  "Images still needed" with the size it wants.

## Copy

Write all of it from the description. Every TODO in content/site.ts and content/pages.ts
gets real, specific copy. Rules in START-HERE.md apply: plain words, short sentences, no
buzzwords, no claim the description does not support. If the description is thin, write
fewer, truer sentences rather than padding.

## Setup

1. Slug = product name in kebab-case. Folder: C:\Users\Devin\Documents\projects\<slug>
2. Clone the template there, `rm -rf .git`, `git init`, `npm install`, `npm run build`.
   The build must pass before you change anything.
3. Set the slug in package.json and .claude/launch.json.
4. Write PROGRESS.md as a checklist and keep it current. It is your recovery point.

## Polish loop

After the content is in, run this loop until it passes clean twice in a row:

1. `npx tsc --noEmit` and `npm run build` clean.
2. `grep -rn "TODO\|Acme\|example.com" content/ app/ components/` returns nothing
   (except the example URLs inside code comments in content/site.ts).
3. Start the dev server. Open every page (/, /features, /pricing, /about, /contact) at
   390, 768, 1024 and 1440px. Zero horizontal overflow on any page. Nav collapses below
   1024. Check with a script, not by eye.
4. Read every page's text back once as a visitor would. Fix anything vague, repeated,
   or that over-promises.
5. Tab through the homepage once. Every control has a visible focus ring.
6. Contact form submits (opens a mailto when no action URL is set).
7. /opengraph-image renders with the right name and headline. Match its ACCENT constant
   to the theme you picked.

## Ship

1. Commit everything to main. No branches, no PRs.
2. `gh repo create DevinDaDev/<slug> --public --source=. --remote=origin --push`
3. `npx vercel deploy --prod --yes --scope rclick`. When it prints the deployment URL,
   set the env var and redeploy so the canonical URL is right:
   `npx vercel env add NEXT_PUBLIC_SITE_URL production --scope rclick` with the
   `https://<slug>.vercel.app` origin, then deploy again.
4. `curl -sI https://<slug>.vercel.app` returns 200. Open it and click through every nav
   link once on the live site.

## DONE checklist

- [ ] Every page live at https://<slug>.vercel.app and returns 200
- [ ] Every nav and footer link on the live site lands on a real page or anchor
- [ ] No TODO, "Acme", or example.com anywhere in shipped content
- [ ] Polish loop passed clean twice
- [ ] GitHub repo DevinDaDev/<slug> has everything on main, working tree clean
- [ ] PROGRESS.md lists Assumptions and Images still needed

## Report

When the checklist is fully true, reply with exactly this and nothing else:

- Live URL
- GitHub URL
- Theme picked and why, one line
- Assumptions, as a bulleted list
- Images still needed, as a bulleted list with sizes
- **Next:** what I should do first when I sit down
- **Blockers:** only if real
- **Rec:** what you would do if I reply "go"
