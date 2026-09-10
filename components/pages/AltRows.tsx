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
            'px-8 py-[80px] max-[768px]:px-5 max-[768px]:py-14 ' +
            (i % 2 === 1 ? 'border-y border-border-section bg-surface-warm' : 'bg-white')
          }
        >
          <div className="lp-rail grid grid-cols-2 items-center gap-[72px] max-[1024px]:grid-cols-1 max-[1024px]:gap-10">
            <div className={i % 2 === 1 ? 'min-[1024px]:order-2' : ''}>
              <div className="rounded-[18px] border border-border bg-surface-warm p-3 shadow-[0_18px_44px_rgba(19,32,56,0.10)]">
                <div className="overflow-hidden rounded-[10px] border border-window-border bg-white">
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
            </div>
            <div>
              {row.eyebrow && <div className="lp-eyebrow">{row.eyebrow}</div>}
              <h2 className="mt-[12px] text-[34px] leading-[1.14] font-semibold tracking-[-0.028em] text-pretty max-[768px]:text-[27px]">
                {row.heading}
              </h2>
              <p className="mt-4 text-[16.5px] leading-[1.6] text-ink-muted text-pretty">{row.text}</p>
              {row.bullets && (
                <ul className="mt-6 flex flex-col gap-3">
                  {row.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[15px] text-ink-body">
                      <span className="grid h-[22px] w-[22px] flex-none place-items-center rounded-full bg-accent-tint text-accent">
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
