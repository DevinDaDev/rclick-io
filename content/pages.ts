/**
 * Copy for the inner pages. The homepage lives in content/site.ts.
 *
 * Same rules: no invented stats, prices, testimonials or customer names. Each page
 * block is independent: delete a page's folder in app/ and its block here, then remove
 * its nav and footer links in content/site.ts.
 */

import type { IconKey, Item, Trust } from './site'
import { primaryAction } from './site'

export type PageHero = {
  eyebrow?: string
  heading: string
  lede: string
  cta?: { label: string; href: string }
  secondary?: { label: string; href: string }
  /** Photo on the right, 1600x1000 or larger, quiet on the left half. Falls back to the homepage hero photo. */
  image?: { src: string; alt: string }
  /** Up to four short trust points under the buttons. */
  trust?: Trust[]
  /** App screen shown in a window card on the right. 1180x760. */
  window?: { src: string; alt: string }
  /** Framed photo on the right, used when there is no app screen to show. 1180x760. */
  photo?: { src: string; alt: string }
}

/** Shared closing band on every inner page. */
export const closing = {
  eyebrow: 'Ready when you are',
  heading: 'Try it on your next ticket.',
  text: 'One real session tells you more than this page can. Get in touch and we will set you up.',
  button: primaryAction.label,
  href: primaryAction.href,
  secondary: { label: 'Read the FAQ', href: '/#faq' },
  note: 'Small steps.\nFewer problems.',
}

// ------------------------------------------------------------------------- features

export const featuresPage = {
  title: 'Features',
  hero: {
    eyebrow: 'Features',
    heading: 'What rclick.io does during a session.',
    lede: 'It connects, runs checks, finds problems, and gives you a clear report. Here is each step in detail.',
    cta: { label: primaryAction.label, href: primaryAction.href },
    image: { src: '/img/hero-features.png', alt: '' },
    trust: [
      { icon: 'bolt', label: 'Fast to start' },
      { icon: 'shield', label: 'Safe and secure' },
      { icon: 'checkcircle', label: 'Clear results' },
      { icon: 'users', label: 'Built for IT pros' },
    ],
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
    lede: 'Everything rclick.io can do during a session.',
    items: [
      { icon: 'pencil', title: 'Ask in plain English', text: 'Describe the problem. The assistant picks the right checks.' },
      { icon: 'chart', title: 'Disk and memory checks', text: 'Space, health, and usage on the connected PC.' },
      { icon: 'folder', title: 'Driver review', text: 'Finds outdated or failing drivers.' },
      { icon: 'file', title: 'Event log scan', text: 'Pulls recent errors and explains them.' },
      { icon: 'loop', title: 'Network checks', text: 'Connection, DNS, and adapter status.' },
      { icon: 'shield', title: 'Patch status', text: 'Lists missing Windows updates.' },
      { icon: 'monitor', title: 'Remote session', text: 'Connect to a Windows PC from your own machine.' },
      { icon: 'download', title: 'Report export', text: 'Save or send the session summary.' },
      { icon: 'target', title: 'Security sweep', text: 'Startup items, local settings, known bad software.' },
      { icon: 'calendar', title: 'Session history', text: 'Every past session and its report, per PC.' },
      { icon: 'house', title: 'Startup review', text: 'What runs at boot and whether it should.' },
      { icon: 'checkcircle', title: 'Written summary', text: 'Plain-English report at the end of each session.' },
    ] as (Item & { icon: IconKey })[],
  },
}

// -------------------------------------------------------------------------- pricing

export const pricingPage = {
  title: 'Pricing',
  hero: {
    eyebrow: 'Pricing',
    heading: 'Three plans. Prices on request while we are in early access.',
    lede: 'A free tier for one technician, and Team or Business plans for larger use. Get in touch and we will quote for your size.',
    cta: { label: primaryAction.label, href: primaryAction.href },
    secondary: { label: 'See how it works', href: '/features' },
    image: { src: '/img/hero-pricing.png', alt: '' },
    trust: [
      { icon: 'bolt', label: 'Set up in minutes' },
      { icon: 'users', label: 'No credit card required' },
      { icon: 'shield', label: 'Built for IT support' },
    ],
  } as PageHero,

  intro: {
    eyebrow: 'Plans for every stage',
    heading: 'Simple plans for IT support teams.',
    lede: 'All plans include remote sessions, diagnostics, reports and email support.',
  },

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
      badge: 'Most popular',
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
    note: 'Straight\nanswers.',
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
    lede: "Too much of an IT worker's day is spent running the same checks and waiting. rclick.io exists so that time goes to the client instead.",
    cta: { label: primaryAction.label, href: primaryAction.href },
    secondary: { label: 'See how it works', href: '/features' },
    image: { src: '/img/hero-about.png', alt: '' },
    trust: [
      { icon: 'clock', label: 'Save time on tickets' },
      { icon: 'message', label: 'Keep the client in the loop' },
      { icon: 'checkcircle', label: 'Easy to use' },
      { icon: 'monitor', label: 'Built for real IT work' },
    ],
  } as PageHero,

  story: {
    eyebrow: 'The short version',
    heading: 'Same checks. A better way.',
    paragraphs: [
      'Every ticket starts the same way. Remote in, run the checks, wait, read the results, explain them. Twenty minutes of routine work before the real problem gets any attention.',
      'rclick.io does that routine part. It connects to the PC, runs the diagnostics and the security sweep, and writes up what it found. The technician is free to talk to the client while it works.',
      'It is in early access today. It runs on Windows 10 and 11 and is being tested on real tickets. If you want to be one of the first to use it, get in touch.',
    ],
    image: { src: '/img/about-story.png', alt: 'A monitor on a desk showing a completed rclick.io checklist.' },
  },

  /** Four values. One noun each, one sentence each. */
  values: {
    eyebrow: 'Our principles',
    heading: 'Four things we will not trade away.',
    lede: 'These are the ideas that shape what we build, and how we support the people who use it.',
    items: [
      { icon: 'shield', title: 'You stay in control', text: 'The assistant flags and suggests. Changes to a machine happen when you say so.' },
      { icon: 'bolt', title: 'Fast to learn', text: 'If a screen needs a tutorial, the screen is wrong. We keep it simple.' },
      { icon: 'pencil', title: 'Honest copy', text: 'This site says what the product does today, not next quarter. No hype, no fine print.' },
      { icon: 'house', title: 'Small on purpose', text: 'One product, one job, done well. We focus on what matters instead of chasing features.' },
    ] as (Item & { icon: IconKey })[],
  },

  philosophy: {
    eyebrow: 'Our philosophy',
    heading: 'Spend the visit with the client, not the progress bar.',
    text: 'IT support is about people. The tools should remove friction, not add it. rclick.io handles the repeatable checks so you can do the part that actually needs you: solving problems and giving good advice.',
    bullets: ['More time solving, less time clicking', 'Same checklist every time', 'Clear, client-ready reports', 'Built for Windows PCs on real tickets'],
    image: { src: '/img/about-philosophy.png', alt: 'An office chair at a desk with a monitor and plants.' },
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
    image: { src: '/img/hero-contact.png', alt: '' },
    trust: [
      { icon: 'bolt', label: 'Fast replies' },
      { icon: 'users', label: 'Real humans' },
      { icon: 'lock', label: 'Data stays private' },
    ],
  } as PageHero,

  /** The card beside the form. */
  aside: {
    heading: "Let's talk.",
    text: 'Have a question, feedback, or want to see how rclick.io could fit your team? Send a message or email us directly.',
    emailLabel: 'Email us',
    facts: [
      { icon: 'clock', title: 'Typical response time', text: 'Within 1 working day' },
      { icon: 'users', title: 'Early access', text: 'Happy to set you up on a real ticket' },
      { icon: 'shield', title: 'Your privacy matters', text: 'We never share your data' },
    ] as (Item & { icon: IconKey })[],
    tip: { icon: 'message' as IconKey, title: 'Not sure what to say?', text: 'A short message is perfect. We will get back to you with next steps.' },
  },

  /** Ways to reach you. Leave a `value` empty to hide that row. */
  methods: [
    { icon: 'mail', label: 'Email us', value: 'devin@rclick.com', href: 'mailto:devin@rclick.com' },
  ] as { icon: IconKey; label: string; value: string; href: string }[],

  /** Offices. Empty array hides the block. */
  offices: [] as { city: string; lines: string[] }[],

  form: {
    heading: 'Send a message',
    lede: 'The form goes directly to our inbox. We aim to reply within a working day.',
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
    placeholders: {
      name: 'Your name',
      email: 'you@company.com',
      company: 'Company name',
      message: 'Tell us a bit about your team, your question, or the ticket you want to try it on.',
    },
    submit: 'Send message',
    privacy: 'We reply from a human inbox and never add you to a list.',
  },

  quick: {
    eyebrow: 'Common questions',
    heading: 'Quick answers.',
    lede: 'Not covered here? Send a message and we will answer it directly.',
    items: [
      { icon: 'mail', title: 'How quickly will you respond?', text: 'We aim to reply to every message within one working day.' },
      { icon: 'users', title: 'Can I request early access?', text: 'Yes. Tell us about your team and we will set you up when a build is ready for you.' },
      { icon: 'monitor', title: 'Can I see it working?', text: 'Yes. Send a message and we will find a time to walk you through a session.' },
      { icon: 'shield', title: 'Is my information safe?', text: 'Yes. We never share your information with third parties.' },
    ] as (Item & { icon: IconKey })[],
  },

  closing: {
    eyebrow: 'Still have questions?',
    heading: "We're here to help.",
    text: 'Whether you have a question, feedback, or just want to say hello, we look forward to hearing from you.',
    note: 'Same inbox.\nFaster answers.',
  },
}
