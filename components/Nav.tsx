'use client'

import { useEffect, useState } from 'react'
import { LogoMark } from './Icons'
import { brand, nav } from '@/content/site'

/**
 * The sticky bar. 68px tall, translucent white over a 14px blur, one hairline rule
 * underneath, and above the hero's stacking order.
 *
 * Below 1024px the links collapse into a disclosure menu; the CTA button stays in the
 * bar at every width, because it is the page's one job.
 */
export function Nav() {
  const [open, setOpen] = useState(false)

  // A menu that survives a resize into desktop layout would strand an open panel.
  useEffect(() => {
    if (!open) return

    const close = () => setOpen(false)
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('resize', close)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('resize', close)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <nav
      aria-label="Main"
      className="absolute inset-x-0 top-0 z-40 bg-transparent"
    >
      <div className="mx-auto grid h-[78px] w-full max-w-[1284px] grid-cols-[1fr_auto_1fr] items-center gap-[38px] px-8 max-[1024px]:grid-cols-[1fr_auto] max-[768px]:px-5">
        <a href="/" className="flex items-center gap-[10px] text-ink">
          <LogoMark size={30} />
          <span className="text-[21px] font-semibold tracking-[-0.02em]">{brand.name}</span>
        </a>

        <div className="flex items-center justify-center gap-[36px] max-[1024px]:hidden">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[16px] font-medium text-ink transition-colors duration-140 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3">

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="hidden h-[42px] w-[42px] place-items-center rounded-lg border border-border-tile bg-white/90 text-ink-secondary transition-colors duration-140 hover:text-accent max-[1024px]:grid"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <path d="M5 5l14 14" />
                  <path d="M19 5L5 19" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="nav-menu"
          className="border-y border-border-section bg-white min-[1024px]:hidden"
        >
          <div className="lp-rail flex flex-col px-8 py-2 max-[768px]:px-5">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] font-medium text-ink-secondary transition-colors duration-140 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a href={nav.ctaHref} onClick={() => setOpen(false)} className="lp-btn lp-btn-nav my-3 w-fit">
              {nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
