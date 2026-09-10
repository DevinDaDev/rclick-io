import Image from 'next/image'
import { CheckGlyph } from '@/components/Icons'

export type AltRow = {
  eyebrow?: string
  heading: string
  text: string
  bullets?: string[]
  image: { src: string; alt: string }
}

/** Alternating image / text rows. Odd rows image left, even rows image right. */
export function AltRows({ rows }: { rows: AltRow[] }) {
  return (
    <section className="lp-section bg-white max-[768px]:px-5 max-[768px]:py-16">
      <div className="lp-rail flex flex-col gap-[96px] max-[768px]:gap-16">
        {rows.map((row, i) => (
          <div
            key={row.heading}
            className="grid grid-cols-2 items-center gap-[72px] max-[1024px]:grid-cols-1 max-[1024px]:gap-10"
          >
            <div className={i % 2 === 1 ? 'min-[1024px]:order-2' : ''}>
              <div className="overflow-hidden rounded-[14px] border border-window-border bg-white shadow-[0_18px_44px_rgba(28,30,26,0.10)]">
                <Image
                  src={row.image.src}
                  alt={row.image.alt}
                  width={1180}
                  height={760}
                  sizes="(min-width: 1024px) 560px, calc(100vw - 40px)"
                  className="block h-auto w-full"
                />
              </div>
            </div>
            <div>
              {row.eyebrow && <div className="lp-eyebrow">{row.eyebrow}</div>}
              <h2 className="mt-[12px] text-[32px] leading-[1.16] font-semibold tracking-[-0.026em] text-pretty max-[768px]:text-[26px]">
                {row.heading}
              </h2>
              <p className="mt-4 text-[16.5px] leading-[1.6] text-ink-muted text-pretty">{row.text}</p>
              {row.bullets && (
                <ul className="mt-6 flex flex-col gap-3">
                  {row.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[15px] text-ink-body">
                      <span className="mt-[3px] grid h-[18px] w-[18px] flex-none place-items-center rounded-full bg-accent-tint text-accent">
                        <CheckGlyph size={10} strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
