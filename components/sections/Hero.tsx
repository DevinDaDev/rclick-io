import Image from 'next/image'
import { ArrowRight, Icon, WindowsGlyph } from '@/components/Icons'
import type { Trust } from '@/content/site'
import { actionNote, hero, primaryAction } from '@/content/site'

/** Trust row under the hero buttons: tinted icon circle plus a two-line label. */
export function TrustRow({ items }: { items: Trust[] }) {
  return (
    <ul className="mt-[44px] flex flex-wrap gap-[30px] max-[768px]:grid max-[768px]:grid-cols-2 max-[768px]:gap-5">
      {items.map((item) => (
        <li key={item.label} className="w-[92px] text-center max-[768px]:w-auto">
          <div className="mx-auto grid h-[48px] w-[48px] place-items-center rounded-full bg-accent-tint text-accent">
            <Icon name={item.icon} size={21} />
          </div>
          <div className="mt-[10px] text-[12.5px] leading-[1.35] font-medium text-ink-body">{item.label}</div>
        </li>
      ))}
    </ul>
  )
}

/**
 * Hero: photo background with a light scrim, headline left, product window right.
 * The photo is the LCP element and the only image on the page worth a preload.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[680px] items-center overflow-hidden border-b border-border-section max-[768px]:min-h-0"
    >
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        preload
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="lp-hero-scrim pointer-events-none absolute inset-0" />

      <div className="lp-rail relative flex w-full flex-wrap items-center justify-between gap-14 px-8 pt-[84px] pb-[84px] max-[768px]:px-5 max-[768px]:pt-14 max-[768px]:pb-14">
        <div className="min-w-[340px] max-w-[520px] flex-[1_1_440px] max-[768px]:min-w-0">
          {hero.eyebrow && <div className="lp-eyebrow">{hero.eyebrow}</div>}
          <h1 className="mt-[14px] text-[56px] leading-[1.05] font-bold tracking-[-0.032em] text-ink text-pretty max-[768px]:text-[38px]">
            {hero.headlineA}
            <br />
            {hero.headlineB}
          </h1>

          <p className="mt-[22px] max-w-[460px] text-[18px] leading-[1.55] text-ink-body text-pretty">
            {hero.sub}
          </p>

          <div className="mt-[30px] flex flex-wrap items-center gap-[14px]">
            <a
              href={primaryAction.href}
              download={primaryAction.download || undefined}
              className="lp-btn lp-btn-primary"
            >
              {primaryAction.glyph === 'windows' && <WindowsGlyph />}
              {hero.primaryCta}
              <ArrowRight />
            </a>
            <a href={hero.secondaryHref} className="lp-btn lp-btn-secondary">
              {hero.secondaryCta}
            </a>
          </div>

          {actionNote && (
            <p className="mt-3 max-w-[420px] text-[13px] leading-[1.55] text-ink-meta">{actionNote}</p>
          )}

          <TrustRow items={hero.trust} />
        </div>

        {hero.window && (
          <div className="min-w-[400px] max-w-[560px] flex-[1_1_500px] overflow-hidden rounded-[12px] border border-window-border bg-white shadow-[0_30px_70px_rgba(19,32,56,0.22),0_3px_8px_rgba(19,32,56,0.08)] max-[768px]:w-full max-[768px]:min-w-0 max-[768px]:max-w-none">
            <Image
              src={hero.window.src}
              alt={hero.window.alt}
              width={hero.window.width}
              height={hero.window.height}
              loading="eager"
              sizes="(min-width: 600px) 560px, calc(100vw - 40px)"
              className="block h-auto w-full"
            />
          </div>
        )}
      </div>
    </section>
  )
}
