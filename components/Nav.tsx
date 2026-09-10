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
      className="sticky top-0 z-40 border-b border-border-section bg-white/[0.88] backdrop-blur-[14px]"
    >
      <div className="mx-auto flex h-[74px] w-full max-w-[1284px] items-center gap-[38px] px-8 max-[768px]:px-5">
        <a href="/" className="flex items-center gap-[10px] text-ink">
          <LogoMark size={30} />
          <span className="text-[21px] font-semibold tracking-[-0.02em]">{brand.name}</span>
        </a>

        <div className="flex-1" />

        <div className="flex items-center gap-[34px] max-[1024px]:hidden">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[16px] font-medium text-ink-secondary transition-colors duration-140 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href={nav.ctaHref} className="lp-btn lp-btn-nav">
            {nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="hidden h-[38px] w-[38px] place-items-center rounded-lg border border-border-tile bg-white text-ink-secondary transition-colors duration-140 hover:text-accent max-[1024px]:grid"
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
          className="border-t border-border-section bg-white min-[1024px]:hidden"
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
          </div>
        </div>
      )}
    </nav>
  )
}
