import Image from 'next/image'
import { CheckGlyph } from '@/components/Icons'
import { benefits } from '@/content/site'
import { SectionHeader } from './SectionHeader'

/** Checklist left, photo right. */
export function Benefits() {
  return (
    <section
      id="benefits"
      aria-labelledby="benefits-heading"
      className="lp-section border-y border-border-section bg-surface-warm max-[768px]:px-5 max-[768px]:py-16"
    >
      <div className="lp-rail grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-[72px] max-[1024px]:grid-cols-1 max-[1024px]:gap-12">
        <div>
          <SectionHeader
            id="benefits-heading"
            eyebrow={benefits.eyebrow}
            heading={benefits.heading}
            lede={benefits.lede}
          />

          <ul className="mt-8 flex flex-col gap-[18px]">
            {benefits.items.map((item) => (
              <li key={item.title} className="flex gap-[14px]">
                <span className="lp-check mt-px">
                  <CheckGlyph size={12} strokeWidth={3.2} />
                </span>
                <div>
                  <div className="text-[16px] font-semibold">{item.title}</div>
                  <p className="mt-[3px] text-[14.5px] leading-[1.55] text-ink-muted text-pretty">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-[18px] border border-border shadow-[0_18px_44px_rgba(19,32,56,0.10)]">
          <Image
            src={benefits.image.src}
            alt={benefits.image.alt}
            width={1180}
            height={760}
            sizes="(min-width: 1024px) 560px, calc(100vw - 40px)"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
