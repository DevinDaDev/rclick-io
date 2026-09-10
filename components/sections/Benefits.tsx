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
      <div className="lp-rail grid grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center gap-[56px] max-[1024px]:grid-cols-1 max-[1024px]:gap-12">
        <div>
          <SectionHeader
            id="benefits-heading"
            eyebrow={benefits.eyebrow}
            heading={benefits.heading}
            lede={benefits.lede}
          />

          <ul className="mt-9 flex flex-col gap-[20px]">
            {benefits.items.map((item) => (
              <li key={item.title} className="flex gap-[14px]">
                <span className="lp-check mt-px">
                  <CheckGlyph size={12} strokeWidth={3.2} />
                </span>
                <div>
                  <div className="text-[17px] font-semibold">{item.title}</div>
                  <p className="mt-[3px] text-[15px] leading-[1.55] text-ink-muted text-pretty">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-[20px] border border-border shadow-[0_20px_50px_rgba(20,45,75,0.12)]">
          <Image
            src={benefits.image.src}
            alt={benefits.image.alt}
            width={1180}
            height={760}
            sizes="(min-width: 1024px) 560px, calc(100vw - 40px)"
            loading="lazy"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
