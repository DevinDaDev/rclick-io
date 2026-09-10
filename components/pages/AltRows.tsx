import Image from 'next/image'
import { CheckGlyph } from '@/components/Icons'

export type AltRow = {
  eyebrow?: string
  heading: string
  text: string
  bullets?: string[]
  image: { src: string; alt: string }
}

/** Alternating image / text rows on alternating surfaces. Odd rows image left, even rows image right. */
export function AltRows({ rows }: { rows: AltRow[] }) {
  return (
    <>
      {rows.map((row, i) => (
        <section
          key={row.heading}
          className={
            'px-8 py-[64px] max-[768px]:px-5 max-[768px]:py-14 ' +
            (i % 2 === 1 ? 'border-y border-border-section bg-surface-warm' : 'bg-white')
          }
        >
          <div className="lp-rail grid grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center gap-[56px] max-[1024px]:grid-cols-1 max-[1024px]:gap-10">
            <div className={i % 2 === 1 ? 'min-[1024px]:order-2' : ''}>
              <div className="lp-window">
                <div>
                  <Image
                    src={row.image.src}
                    alt={row.image.alt}
                    width={1180}
                    height={760}
                    sizes="(min-width: 1024px) 680px, calc(100vw - 40px)"
                    className="block h-auto w-full"
                  />
                </div>
              </div>
            </div>
            <div>
              {row.eyebrow && <div className="lp-eyebrow">{row.eyebrow}</div>}
              <h2 className="mt-[12px] text-[36px] leading-[1.1] font-bold tracking-[-0.03em] text-pretty max-[768px]:text-[28px]">
                {row.heading}
              </h2>
              <p className="mt-4 text-[17.5px] leading-[1.6] text-ink-muted text-pretty">{row.text}</p>
              {row.bullets && (
                <ul className="mt-6 flex flex-col gap-3">
                  {row.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[16px] text-ink-body">
                      <span className="grid h-[24px] w-[24px] flex-none place-items-center rounded-full bg-accent-tint text-accent">
                        <CheckGlyph size={11} strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
