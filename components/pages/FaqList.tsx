import { SectionHeader } from '@/components/sections/SectionHeader'

/** Reusable FAQ accordion for inner pages. Rows get id `faq-<id>` for deep links. */
export function FaqList({
  id,
  eyebrow,
  heading,
  items,
}: {
  id: string
  eyebrow: string
  heading: string
  items: { id: string; title: string; text: string }[]
}) {
  return (
    <section
      aria-labelledby={`${id}-heading`}
      className="lp-section border-t border-border-section bg-surface-warm max-[768px]:px-5 max-[768px]:py-16"
    >
      <div className="lp-rail max-w-[860px]">
        <SectionHeader id={`${id}-heading`} eyebrow={eyebrow} heading={heading} />
        <div className="mt-10 border-t border-border-section">
          {items.map((item) => (
            <details key={item.id} id={`faq-${item.id}`} className="group border-b border-border-section">
              <summary className="flex cursor-pointer list-none items-baseline gap-4 py-4 text-[15.5px] font-semibold transition-colors duration-140 marker:hidden hover:text-accent">
                <span
                  aria-hidden="true"
                  className="mt-1 text-[13px] text-ink-faint-2 transition-transform group-open:rotate-90"
                >
                  ›
                </span>
                <span className="min-w-0">{item.title}</span>
              </summary>
              <p className="max-w-[760px] pb-5 pl-8 text-[14.5px] leading-[1.55] text-ink-muted text-pretty">
                {item.text}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
