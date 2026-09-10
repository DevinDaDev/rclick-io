// Visual verification: full-page screenshots of every page at the reference widths.
// Uses the headless Edge/Chrome already on the machine, so there is nothing to install.
//
//   node scripts/verify.mjs            -> .verification/<page>-<width>-<NN>.png
//   node scripts/verify.mjs 1600       -> one width only
//
// Start the server first (npm run build && npm run start). Compare the output against
// the reference mockups by eye or with an image diff; the numbered suffix keeps every
// iteration so you can see whether a change moved things the right way.
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'

const BASE = process.env.VERIFY_URL ?? 'http://localhost:3000'
const PAGES = { home: '/', features: '/features', pricing: '/pricing', about: '/about', contact: '/contact' }
const WIDTHS = process.argv[2] ? [Number(process.argv[2])] : [1600, 1440, 390]
const HEIGHT = { 1600: 4600, 1440: 4600, 390: 6400 }

const browsers = [
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
]
const browser = browsers.find((b) => existsSync(b))
if (!browser) throw new Error('No Edge or Chrome found')

const out = resolve('.verification')
mkdirSync(out, { recursive: true })

for (const w of WIDTHS) {
  for (const [name, path] of Object.entries(PAGES)) {
    const prev = readdirSync(out).filter((f) => f.startsWith(`${name}-${w}-`)).length
    const file = resolve(out, `${name}-${w}-${String(prev + 1).padStart(2, '0')}.png`)
    execFileSync(browser, [
      '--headless=new', '--disable-gpu', '--hide-scrollbars', '--virtual-time-budget=6000',
      `--window-size=${w},${HEIGHT[w] ?? 4600}`, `--screenshot=${file}`, `${BASE}${path}`,
    ], { stdio: 'ignore' })
    console.log(file)
  }
}
