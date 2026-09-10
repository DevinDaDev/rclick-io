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
  | 'monitor'
  | 'users'
  | 'clock'
  | 'mail'
  | 'lock'
  | 'message'
  | 'ticket'
  | 'target'
  | 'settings'
  | 'building'
  | 'checkcircle'

export type Trust = { icon: IconKey; label: string }

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
export const actionNote = ''

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
  eyebrow: 'Remote IT support, simplified',
  headlineA: 'Fix the PC.',
  headlineB: 'Keep the Conversation.',
  sub: "rclick.io remotes to the user's machine, runs diagnostics, and reports back while you talk to your client.",
  primaryCta: primaryAction.label,
  secondaryCta: 'See how it works',
  secondaryHref: '/features',
  /**
   * Background photo. 1600px wide or more, landscape, quiet on the left half. Ideally it
   * already shows the app on a laptop screen; then set `window` to null below.
   */
  image: { src: '/img/hero.png', alt: '' },
  /** The product window floated over the photo. Set to null once the photo shows the app. */
  window: null as null | { src: string; alt: string; width: number; height: number },
  /** Four short trust points. Icons must exist in components/Icons.tsx. */
  trust: [
    { icon: 'bolt', label: 'Remote to Windows PCs' },
    { icon: 'loop', label: 'Run the checks' },
    { icon: 'shield', label: 'Security sweep' },
    { icon: 'file', label: 'Plain-English report' },
  ] as Trust[],
}

// ------------------------------------------------------------------------- features

export const features = {
  eyebrow: 'Features',
  heading: 'Everything you need for a smoother session.',
  lede: 'Built around the checks IT technicians run every day. It connects, checks, and reports.',
  /** Six reads best. Three or nine also fill the grid. */
  items: [
    { icon: 'monitor', title: 'Remote to Windows PCs', text: "Start a session from your own machine and connect to the user's Windows 10 or 11 PC in seconds." },
    { icon: 'settings', title: 'Automated diagnostics', text: 'Runs the standard checks on disk, memory, startup, drivers, network and more.' },
    { icon: 'shield', title: 'Security sweep', text: 'Finds missing patches, unknown startup items, weak local settings, and known bad software.' },
    { icon: 'pencil', title: 'Ask it in plain English', text: 'Type what the user told you. The assistant picks the checks and explains what it found.' },
    { icon: 'file', title: 'A report you can hand over', text: 'Every session ends with a clear summary of what was checked, what was found, and what changed.' },
    { icon: 'users', title: 'Fewer return visits', text: 'Catch the real issues and fix them in the same session, before your client has to call again.' },
  ] as IconItem[],
}

// ------------------------------------------------------------------------- benefits

export const benefits = {
  eyebrow: 'Why rclick.io',
  heading: 'Spend the visit with the client, not the progress bar.',
  lede: 'For IT technicians, help desks, and small MSPs. rclick.io takes the waiting and the repeatable checks so you can do the part that needs a person.',
  items: [
    { title: 'More time talking, less time clicking', text: 'The assistant runs the checks while you find out what the client actually needs.' },
    { title: 'Same checklist every time', text: 'Nothing gets skipped because it was late on a Friday.' },
    { title: 'Faster tickets', text: 'The routine part is handled while you handle the problem that actually needs you.' },
    { title: 'Something to show for it', text: 'The client gets a written report. You get a record for the next visit.' },
  ] as Item[],
  /** Photo on the right. 1180x760. Quiet, on-brand, no UI in it. */
  image: { src: '/img/benefits.png', alt: 'An office chair and desk with a monitor, the workspace of an IT technician.' },

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
  eyebrow: 'Product screenshots',
  heading: 'Four screens. Nothing to learn.',
  lede: 'The same simple flow every time. Click a tab to see each screen.',
  /** Real, unretouched captures at 1180×760. Invent any names that appear in them. */
  shots: [
    {
      key: 'one',
      title: 'Session',
      src: '/img/shot-one.png',
      body: 'The connected PC, the checks in progress, and the assistant chat on one screen.',
      bullets: ['See what the user sees', 'Run checks in real time', 'Talk to the assistant while it works', 'Move to the next step when ready'],
    },
    {
      key: 'two',
      title: 'Diagnostics',
      src: '/img/shot-two.png',
      body: 'Each check with its result. Open one to see what was tested and what it means.',
      bullets: ['Disk, memory, startup, drivers, network, event log', 'One-line result per check', 'Details a click away', 'Run again any time'],
    },
    {
      key: 'three',
      title: 'Security',
      src: '/img/shot-three.png',
      body: 'Patches, startup items, and settings flagged for review, in order of risk.',
      bullets: ['Sorted by risk', 'Flags first, fixes when you say so', 'Known bad software called out', 'Not a replacement for antivirus'],
    },
    {
      key: 'four',
      title: 'Report',
      src: '/img/shot-four.png',
      body: 'The written summary you send to the client when the session ends.',
      bullets: ['What was checked', 'What was found', 'What was changed', 'Save or send as you like'],
    },
  ],
  note: 'Screens are design mockups of the app. The shipping build may differ.',
}

// -------------------------------------------------------------------------- cta band

export const cta = {
  eyebrow: 'Ready to try it?',
  heading: 'Get started on your next ticket.',
  text: 'One real session tells you more than this page can. Get in touch and we will set you up.',
  button: primaryAction.label,
  href: primaryAction.href,
  secondary: { label: 'Read the FAQ', href: '/#faq' },
  /** Handwritten aside. Line break with \n. Empty string hides it. */
  note: 'Same checks.\nFewer callbacks.',
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
    { id: 'privacy', title: "What does rclick.io do on the user's PC?", text: 'It opens a remote session, runs diagnostic and security checks, and writes a report. It only acts on the machine you connect it to, during the session you start.' },
    { id: 'price', title: 'What does it cost?', text: 'Pricing is not set yet. There is a free tier planned. Team and Business plans are priced on request while we are in early access.' },
    { id: 'data', title: 'Can I get my reports out?', text: 'Yes. Each session report is yours to save and send. Ask us to remove anything we hold and we will.' },
    { id: 'os', title: 'What does it run on?', text: 'It connects to Windows 10 and 11 PCs. Other platforms are not supported today.' },
    { id: 'support', title: "Who do I talk to when I'm stuck?", text: 'Email us. A person reads the inbox and replies within a working day.' },
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
