import { ArrowRight, Icon } from '@/components/Icons'
import type { IconKey } from '@/content/site'
import { closing } from '@/content/pages'

export type ClosingContent = {
  eyebrow?: string
  heading: string
  text: string
  button: string
  href: string
  secondary?: { label: string; href: string } | null
  /** Handwritten aside on the right. Empty hides it. */
  note?: string
  /** Optional large icon on the left. */
  icon?: IconKey
}

/**
 * The tinted band that ends a page: eyebrow, heading, text, buttons, and a handwritten
 * aside with an arrow. Defaults to `closing` in content/pages.ts.
 */
export function ClosingCta({ content = closing, className = '' }: { content?: ClosingContent; className?: string }) {
  const c = content
  return (
    <section className={'bg-white px-8 py-[80px] max-[768px]:px-5 max-[768px]:py-14 ' + className}>
      <div className="lp-rail relative grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-10 overflow-hidden rounded-[22px] border border-accent-border bg-accent-tint px-12 py-[52px] max-[1024px]:grid-cols-1 max-[1024px]:gap-7 max-[768px]:px-6 max-[768px]:py-9">
        {c.icon ? (
          <div className="grid h-[88px] w-[88px] place-items-center rounded-full bg-white text-accent shadow-[0_6px_20px_rgba(19,32,56,0.08)] max-[1024px]:hidden">
            <Icon name={c.icon} size={36} />
          </div>
        ) : (
          <div className="hidden max-[1024px]:hidden" aria-hidden="true" />
        )}

        <div className={c.icon ? '' : 'min-[1024px]:col-span-1 min-[1024px]:text-center'}>
          {c.eyebrow && <div className="lp-eyebrow">{c.eyebrow}</div>}
          <h2 className="mt-3 text-[34px] leading-[1.14] font-semibold tracking-[-0.028em] text-ink text-pretty max-[768px]:text-[28px]">
            {c.heading}
          </h2>
          <p className={'mt-3 max-w-[600px] text-[16px] leading-[1.55] text-cta-body text-pretty' + (c.icon ? '' : ' min-[1024px]:mx-auto')}>
            {c.text}
          </p>
          <div className={'mt-7 flex flex-wrap items-center gap-[14px]' + (c.icon ? '' : ' min-[1024px]:justify-center')}>
            <a href={c.href} className="lp-btn lp-btn-primary">
              {c.button}
              <ArrowRight />
            </a>
            {c.secondary && (
              <a href={c.secondary.href} className="lp-btn lp-btn-secondary">
                {c.secondary.label}
              </a>
            )}
          </div>
        </div>

        {c.note ? (
          <div className="flex items-center gap-3 pr-2 max-[1024px]:hidden" aria-hidden="true">
            <svg width="44" height="30" viewBox="0 0 44 30" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M42 4C30 6 16 12 3 26" />
              <path d="M3 26l3-9M3 26l9 2" />
            </svg>
            <div className="lp-note">{c.note}</div>
          </div>
        ) : (
          <div aria-hidden="true" />
        )}
      </div>
    </section>
  )
}
