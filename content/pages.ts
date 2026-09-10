/**
 * Copy for the inner pages. The homepage lives in content/site.ts.
 *
 * Same rules: no invented stats, prices, testimonials or customer names. Each page
 * block is independent: delete a page's folder in app/ and its block here, then remove
 * its nav and footer links in content/site.ts.
 */

import type { IconKey, Item } from './site'
import { primaryAction } from './site'

export type PageHero = { eyebrow?: string; heading: string; lede: string; cta?: { label: string; href: string } }

/** Shared closing band on every inner page. */
export const closing = {
  heading: 'Try it on your next ticket.',
  text: 'One real session tells you more than this page can. Get in touch and we will set you up.',
  button: primaryAction.label,
  href: primaryAction.href,
  secondary: { label: 'Read the FAQ', href: '/#faq' },
}

// ------------------------------------------------------------------------- features

export const featuresPage = {
  title: 'Features',
  hero: {
    eyebrow: 'Features',
    heading: 'What rclick.io does during a session.',
    lede: 'It connects, it checks, it reports. Here is each step in detail. Nothing is listed that the current build does not do.',
    cta: { label: primaryAction.label, href: primaryAction.href },
  } as PageHero,

  /** Alternating image / text rows. Image 1180×760. Even rows put the image on the right. */
  rows: [
    {
      eyebrow: 'Connect',
      heading: "Remote to the user's PC",
      text: "Start a session from your own machine and rclick.io connects to the user's Windows PC. You see their screen and the assistant sees the system.",
      bullets: ['Windows 10 and 11', 'Starts from your machine, not theirs', 'One session, one PC at a time'],
      image: { src: '/img/shot-one.png', alt: 'Session screen with a connected PC and the assistant chat.' },
    },
    {
      eyebrow: 'Diagnose',
      heading: 'Run the standard checks without touching them',
      text: 'The assistant works through disk, memory, startup, drivers, network, and the event log. Each check shows a result and a one-line explanation.',
      bullets: ['Same list every time', 'Results in plain English', 'Runs while you talk to the client'],
      image: { src: '/img/shot-two.png', alt: 'Diagnostics list with results for each check.' },
    },
    {
      eyebrow: 'Secure',
      heading: 'Sweep for the usual security problems',
      text: 'Missing patches, unknown startup items, weak local settings, and known bad software are flagged and sorted by risk. You decide what to act on.',
      bullets: ['Flags first, fixes when you say so', 'Sorted by risk', 'Not a replacement for antivirus'],
      image: { src: '/img/shot-three.png', alt: 'Security sweep results sorted by risk.' },
    },
    {
      eyebrow: 'Report',
      heading: 'Leave with a written summary',
      text: 'When the session ends the assistant writes up what was checked, what it found, and what was changed. Send it to the client or keep it for the file.',
      bullets: ['Written for the client, not the technician', 'Save or send as you like', 'One report per session'],
      image: { src: '/img/shot-four.png', alt: 'Session report ready to send.' },
    },
  ],

  /** The complete list, icon + name + one line. Twelve fills the grid at 4 across. */
  all: {
    eyebrow: 'The full list',
    heading: 'Every feature, alphabetically.',
    items: [
      { icon: 'pencil', title: 'Ask in plain English', text: 'Describe the problem. The assistant picks the checks.' },
      { icon: 'chart', title: 'Disk and memory checks', text: 'Space, health, and usage on the connected PC.' },
      { icon: 'folder', title: 'Driver review', text: 'Finds outdated or failing drivers.' },
      { icon: 'file', title: 'Event log scan', text: 'Pulls recent errors and explains them.' },
      { icon: 'loop', title: 'Network checks', text: 'Connection, DNS, and adapter status.' },
      { icon: 'shield', title: 'Patch status', text: 'Lists missing Windows updates.' },
      { icon: 'bolt', title: 'Remote session', text: 'Connect to a Windows PC from your own machine.' },
      { icon: 'download', title: 'Report export', text: 'Save or send the session summary.' },
      { icon: 'shield', title: 'Security sweep', text: 'Startup items, local settings, known bad software.' },
      { icon: 'calendar', title: 'Session history', text: 'Every past session and its report, per PC.' },
      { icon: 'house', title: 'Startup review', text: 'What runs at boot and whether it should.' },
      { icon: 'pencil', title: 'Written summary', text: 'Plain-English report at the end of each session.' },
    ] as (Item & { icon: IconKey })[],
  },
}

// -------------------------------------------------------------------------- pricing

export const pricingPage = {
  title: 'Pricing',
  hero: {
    eyebrow: 'Pricing',
    heading: 'Three plans. Prices on request while we are in early access.',
    lede: 'A free tier for one technician, and two paid plans for teams. Get in touch and we will quote for your size.',
  } as PageHero,

  /** Three tiers reads best. `featured` gets the accent border and a badge. */
  tiers: [
    {
      name: 'Free',
      price: 'No charge',
      period: 'for one technician',
      note: 'Early access',
      cta: { label: 'Get in touch', href: '/contact' },
      features: ['Remote sessions', 'Diagnostics and security sweep', 'Session reports', 'Email support'],
      featured: false,
    },
    {
      name: 'Team',
      price: 'Contact for pricing',
      period: 'per technician',
      note: 'For help desks and small MSPs',
      badge: 'Most asked about',
      cta: { label: 'Talk to us', href: '/contact' },
      features: ['Everything in Free', 'Shared session history', 'Priority email support', 'Setup call'],
      featured: true,
    },
    {
      name: 'Business',
      price: 'Contact for pricing',
      period: 'per technician',
      note: 'For larger teams',
      cta: { label: 'Talk to us', href: '/contact' },
      features: ['Everything in Team', 'Report export for the whole team', 'Named contact', 'Invoice billing'],
      featured: false,
    },
  ],
  footnote: 'Plan contents may change before general release. We will tell existing users first.',

  faq: {
    eyebrow: 'Billing questions',
    heading: 'The fine print, in plain English.',
    items: [
      { id: 'users', title: 'What counts as a technician?', text: 'Anyone who starts a session. Viewing a report does not count.' },
      { id: 'upgrade', title: 'Can I change plans later?', text: 'Yes. Tell us and we will move you at the next billing date.' },
      { id: 'refund', title: 'Is there a refund?', text: 'Paid plans are not open yet. Refund terms will be published with the prices.' },
      { id: 'invoice', title: 'Can I pay by invoice?', text: 'Yes on the Business plan. Team is card only.' },
    ],
  },
}

// ---------------------------------------------------------------------------- about

export const aboutPage = {
  title: 'About',
  hero: {
    eyebrow: 'About',
    heading: 'Built for IT workers who are tired of watching progress bars.',
    lede: 'Too much of a site visit is spent running the same checks and waiting. rclick.io exists so that time goes to the client instead.',
  } as PageHero,

  story: {
    heading: 'The short version',
    paragraphs: [
      'Every ticket starts the same way. Remote in, run the checks, wait, read the results, explain them. Twenty minutes of routine before the real problem gets any attention.',
      'rclick.io does that routine part. It connects to the PC, runs the diagnostics and the security sweep, and writes up what it found. The technician is free to talk to the client while it works.',
      'It is in early access today. It runs on Windows 10 and 11 and is being tested on real tickets. If you want to be one of the first to use it, get in touch.',
    ],
    image: { src: '/img/hero.png', alt: '' },
  },

  /** Four values. One noun each, one sentence each. */
  values: {
    eyebrow: 'How we work',
    heading: 'Four things we will not trade away.',
    items: [
      { icon: 'shield', title: 'You stay in control', text: 'The assistant flags and suggests. Changes to a machine happen when you say so.' },
      { icon: 'bolt', title: 'Fast to learn', text: 'If a screen needs a tutorial, the screen is wrong.' },
      { icon: 'pencil', title: 'Honest copy', text: 'This site says what the product does today, not next quarter.' },
      { icon: 'house', title: 'Small on purpose', text: 'One product, one job, done well.' },
    ] as (Item & { icon: IconKey })[],
  },

  /** Real people only. Set `team: null` to hide the block entirely. */
  team: null as null | { eyebrow: string; heading: string; people: { name: string; role: string; text: string }[] },
}

// -------------------------------------------------------------------------- contact

export const contactPage = {
  title: 'Contact',
  hero: {
    eyebrow: 'Contact',
    heading: 'Get in touch.',
    lede: 'Email is fastest. The form goes to the same inbox. We reply within a working day.',
  } as PageHero,

  /** Ways to reach you. Leave a `value` empty to hide that row. */
  methods: [
    { icon: 'pencil', label: 'Email us', value: 'devin@rclick.com', href: 'mailto:devin@rclick.com' },
  ] as { icon: IconKey; label: string; value: string; href: string }[],

  /** Offices. Empty array hides the block. */
  offices: [] as { city: string; lines: string[] }[],

  form: {
    heading: 'Send a message',
    /**
     * Where the form posts. Use a Formspree, Basin or similar endpoint URL. When empty
     * the form falls back to a mailto: link so nothing is silently lost.
     */
    action: '',
    fields: {
      name: 'Your name',
      email: 'Work email',
      company: 'Company (optional)',
      message: 'What are you working on?',
    },
    submit: 'Send message',
    privacy: 'We reply from a human inbox and never add you to a list.',
  },
}
