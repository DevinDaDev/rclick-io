/**
 * ALL site copy and configuration lives here. Change wording, links, and the brand
 * without touching a single layout file.
 *
 * Rules this file is written under:
 *  1. Never claim a capability the product does not have. No invented stats, no fake
 *     testimonials, no "trusted by 10,000 teams" unless it is true and sourced.
 *  2. Every line here is real copy for rclick.io. Nothing is placeholder.
 *
 * Sections are independent. To drop one, delete its import in app/page.tsx and its
 * nav link below. Nothing else references it.
 */

export type Item = { title: string; text: string }
export type IconItem = Item & { icon: IconKey }

/** Icon names that exist in components/Icons.tsx. Add a glyph there to extend. */
export type IconKey =
  | 'file'
  | 'folder'
  | 'pencil'
  | 'download'
  | 'loop'
  | 'house'
  | 'calendar'
  | 'shield'
  | 'bolt'
  | 'chart'

// ---------------------------------------------------------------------------- brand

export const brand = {
  /** Product name. Appears in the nav, footer, <title>, and social cards. */
  name: 'rclick.io',
  /** Legal owner shown in the copyright line. */
  owner: 'rclick.io',
  /** One line under 160 characters. Used for <meta description> and social cards. */
  description:
    "rclick.io is an AI assistant for IT workers. It remotes to a user's PC, runs diagnostics and security checks, and hands you a plain report.",
  /** Canonical URL. Read from the env var on Vercel so previews get the right origin. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rclick-io.vercel.app',
  /** Where "Contact" and "Email support" resolve. Confirm with the client. */
  contactEmail: 'devin@rclick.com',
  /** Keywords for <meta keywords>. Five or six, plain phrases. */
  keywords: ['IT support software', 'remote diagnostics', 'AI IT assistant', 'MSP tools', 'security automation', 'help desk'],
  /** Schema.org category. BusinessApplication, DeveloperApplication, UtilitiesApplication... */
  schemaCategory: 'BusinessApplication',
  /** Operating system string for schema.org and the CTA line. */
  os: 'Windows 10 and 11',
  /** Theme colour for the browser chrome on mobile. Match the accent in themes/. */
  themeColor: '#2f4a6b',
}

// ------------------------------------------------------------------- primary action

/**
 * The one thing every primary button on the page does. Three common shapes:
 *
 *   Download a file:   { label: 'Download for Windows', href: '/downloads/App-1.0.exe', download: true, glyph: 'windows' }
 *   Sign up / start:   { label: 'Start free trial', href: 'https://app.example.com/signup' }
 *   Book a call:       { label: 'Book a demo', href: 'https://cal.com/you/demo' }
 *
 * No installer or signup URL exists yet, so every primary button goes to the contact page.
 */
export const primaryAction = {
  label: 'Get in touch',
  href: '/contact',
  download: false,
  glyph: 'none' as 'windows' | 'none',
}

/** Small print that belongs next to every primary button. Leave empty to hide. */
export const actionNote = 'Early access. We reply by email.'

// ------------------------------------------------------------------------------ nav

export const nav = {
  /** Page links. Homepage sections are reachable via the footer. */
  links: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: 'Get in touch',
  /** Where the nav button goes. */
  ctaHref: '/contact',
}

// ----------------------------------------------------------------------------- hero

export const hero = {
  headlineA: 'Fix the PC.',
  headlineB: 'Keep the Conversation.',
  sub: "rclick.io remotes to the user's machine, runs the diagnostics, and reports back while you talk to your client.",
  primaryCta: primaryAction.label,
  secondaryCta: 'See how it works',
  secondaryHref: '/features',
  /** Background photo. 1600px wide or more, landscape, quiet enough for text on the left. */
  image: { src: '/img/hero.png', alt: '' },
  /** The product window shown on the right. 1180×760 keeps the ratio the layout expects. */
  window: {
    src: '/img/shot-one.png',
    alt: 'The rclick.io session screen showing a connected PC and a running diagnostic.',
    width: 1180,
    height: 760,
  },
  /** Four short trust points. Icons must exist in components/Icons.tsx. */
  trust: [
    { icon: 'bolt', label: 'Remote in fast' },
    { icon: 'loop', label: 'Runs the checks' },
    { icon: 'shield', label: 'Security sweep' },
    { icon: 'file', label: 'Plain report' },
  ] as { icon: IconKey; label: string }[],
}

// ------------------------------------------------------------------------- features

export const features = {
  eyebrow: 'Features',
  heading: 'The first hour of every ticket, done for you.',
  lede: 'rclick.io connects to a Windows PC, works through the standard diagnostic checks, and runs a security sweep. You get a report you can read out loud to the client.',
  /** Six reads best. Three or nine also fill the grid. */
  items: [
    { icon: 'bolt', title: 'Remote to any user PC', text: 'Open a session to the machine from your own. No walking the user through settings menus.' },
    { icon: 'loop', title: 'Automated diagnostics', text: 'Runs the checks you would run by hand: disk, memory, startup, drivers, network, event log.' },
    { icon: 'shield', title: 'Security sweep', text: 'Looks for missing patches, unknown startup items, weak local settings, and known bad software.' },
    { icon: 'pencil', title: 'Ask it in plain English', text: 'Type what the user told you. The assistant picks the checks and explains what it found.' },
    { icon: 'file', title: 'A report you can hand over', text: 'Every session ends with a short written summary. What was checked, what was found, what was fixed.' },
    { icon: 'calendar', title: 'Fewer return visits', text: 'Catch the second and third problem in the same session, before you are back in the car.' },
  ] as IconItem[],
}

// ------------------------------------------------------------------------- benefits

export const benefits = {
  eyebrow: 'Benefits',
  heading: 'Spend the visit with the client, not the progress bar.',
  lede: 'For IT technicians, help desks, and small MSPs. rclick.io takes the waiting and the repetitive checks so you can do the part that needs a person.',
  items: [
    { title: 'More time talking, less time clicking', text: 'The assistant runs the checks in the background while you find out what the client actually needs.' },
    { title: 'Same checklist every time', text: 'Nothing gets skipped because it was late on a Friday. The diagnostic runs the full list, every session.' },
    { title: 'Faster tickets', text: 'The routine part of a ticket is handled while you work the hard part. One session covers more ground.' },
    { title: 'Something to show for it', text: 'The client gets a written report of what was done. You get a record for the next visit.' },
  ] as Item[],

  /**
   * The stat card. Every number here must be something the product really produces.
   * No verified figures exist yet, so the card is off and the list takes the full width.
   */
  card: null as null | {
    label: string
    stats: { value: string; caption: string }[]
    days: { day: string; pct: number; count: string }[]
  },
}

// ---------------------------------------------------------------------- screenshots

export const screenshots = {
  eyebrow: 'Screenshots',
  heading: 'Four screens. Nothing to learn.',
  /** Real, unretouched captures at 1180×760. Invent any names that appear in them. */
  shots: [
    { key: 'one', title: 'Session', src: '/img/shot-one.png', body: 'The connected PC, the checks in progress, and the assistant chat on one screen.' },
    { key: 'two', title: 'Diagnostics', src: '/img/shot-two.png', body: 'Each check with its result. Open one to see what was tested and what it means.' },
    { key: 'three', title: 'Security', src: '/img/shot-three.png', body: 'Patches, startup items, and settings flagged for review, in order of risk.' },
    { key: 'four', title: 'Report', src: '/img/shot-four.png', body: 'The written summary you send to the client when the session ends.' },
  ],
  note: 'Screens shown are placeholders until the first build is captured.',
}

// -------------------------------------------------------------------------- cta band

/** Kept for the closing band on inner pages. The homepage download band was removed. */
export const cta = {
  heading: 'Want to try it on a real ticket?',
  button: primaryAction.label,
}

// ------------------------------------------------------------------------------ faq

export const faq = {
  eyebrow: 'FAQ',
  heading: 'Straight answers.',
  lede: 'What it does, what it does not, and where to ask.',
  /**
   * Optional "known limitations" callouts above the FAQ. Honest pages convert better
   * than perfect-sounding ones. Empty array hides the block.
   */
  callouts: [
    { title: 'Early access', text: 'rclick.io is not yet open for public download. Get in touch and we will set you up when a build is ready for you.' },
  ] as Item[],
  items: [
    { id: 'privacy', title: "What does it do on the user's PC?", text: 'It opens a remote session, runs diagnostic and security checks, and writes a report. It only acts on the machine you connect it to, during the session you start.' },
    { id: 'price', title: 'What does it cost?', text: 'Pricing is not set yet. There is a free tier planned. Team and Business plans are priced on request while we are in early access.' },
    { id: 'data', title: 'Can I get my reports out?', text: 'Yes. Each session report is yours to save and send. Ask us to remove anything we hold and we will.' },
    { id: 'os', title: 'What does it run on?', text: 'It connects to Windows 10 and 11 PCs. Other platforms are not supported today.' },
    { id: 'support', title: 'Who do I talk to when it breaks?', text: 'Email us. A person reads the inbox and replies within a working day.' },
  ],
  contact: {
    title: 'Still stuck?',
    text: 'One person reads this address and replies within a working day.',
    label: 'Email support',
  },
}

// --------------------------------------------------------------------------- footer

export const footer = {
  description: 'An AI assistant for IT workers. It remotes to the PC, runs the checks, and writes the report.',
  columns: [
    {
      heading: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Screenshots', href: '/#screenshots' },
        { label: 'Get in touch', href: '/contact' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Email support', href: 'mailto:' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy', href: '/#faq-privacy' },
        { label: 'Your data', href: '/#faq-data' },
        { label: 'FAQ', href: '/#faq' },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} ${brand.owner}. All rights reserved.`,
  /** One reassurance line, right-aligned in the footer. Empty string hides it. */
  reassurance: 'No trackers. No third-party scripts.',
}
