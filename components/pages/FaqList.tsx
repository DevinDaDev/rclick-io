import { SectionHeader } from '@/components/sections/SectionHeader'
import { FaqCards } from './FaqCards'

/** FAQ section for inner pages: header with optional handwritten aside, then card rows. */
export function FaqList({
  id,
  eyebrow,
  heading,
  note,
  items,
}: {
  id: string
  eyebrow: string
  heading: string
  note?: string
  items: { id: string; title: string; text: string }[]
}) {
  return (
    <section
      aria-labelledby={`${id}-heading`}
      className="lp-section border-t border-border-section bg-surface-warm max-[768px]:px-5 max-[768px]:py-16"
    >
      <div className="lp-rail">
        <div className="flex items-end justify-between gap-8">
          <SectionHeader id={`${id}-heading`} eyebrow={eyebrow} heading={heading} />
          {note && (
            <div className="flex items-center gap-3 pr-6 pb-2 max-[1024px]:hidden" aria-hidden="true">
              <div className="lp-note">{note}</div>
              <svg width="30" height="44" viewBox="0 0 30 44" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 3c10 6 18 18 22 38" />
                <path d="M26 41l-8-5M26 41l2-9" />
              </svg>
            </div>
          )}
        </div>
        <div className="mt-10">
          <FaqCards items={items} />
        </div>
      </div>
    </section>
  )
}
