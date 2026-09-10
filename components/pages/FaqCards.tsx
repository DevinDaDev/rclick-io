import { ChevronDown } from '@/components/Icons'

/**
 * FAQ rows as white cards with a chevron. Native <details>, so they work without JS and
 * OpenTargetDetails can expand a deep-linked one. Each row has id `faq-<id>`.
 */
export function FaqCards({ items }: { items: { id: string; title: string; text: string }[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <details
          key={item.id}
          id={`faq-${item.id}`}
          className="group lp-card rounded-[16px] transition-[border-color] duration-140 open:border-accent-border hover:border-accent-border"
        >
          <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-4 px-7 py-[18px] text-[17px] font-semibold marker:hidden max-[768px]:px-5">
            <span className="min-w-0">{item.title}</span>
            <span aria-hidden="true" className="flex-none text-ink-meta transition-transform duration-140 group-open:rotate-180">
              <ChevronDown />
            </span>
          </summary>
          <p className="max-w-[760px] px-7 pb-[22px] text-[15.5px] leading-[1.6] text-ink-muted text-pretty max-[768px]:px-5">
            {item.text}
          </p>
        </details>
      ))}
    </div>
  )
}
