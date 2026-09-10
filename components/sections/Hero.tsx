import Image from 'next/image'
import { ArrowRight, Icon, WindowsGlyph } from '@/components/Icons'
import type { Trust } from '@/content/site'
import { actionNote, hero, primaryAction } from '@/content/site'

/** Trust row under the hero buttons: tinted icon circle plus a two-line label. */
export function TrustRow({ items }: { items: Trust[] }) {
  return (
    <ul className="mt-[40px] flex flex-nowrap gap-[22px] max-[768px]:grid max-[768px]:grid-cols-2 max-[768px]:gap-5">
      {items.map((item) => (
        <li key={item.label} className="w-[96px] shrink-0 text-center max-[768px]:w-auto">
          <div className="mx-auto grid h-[56px] w-[56px] place-items-center rounded-full bg-accent-tint text-accent">
            <Icon name={item.icon} size={24} />
          </div>
          <div className="mt-[10px] text-[13.5px] leading-[1.35] font-medium text-ink-body">{item.label}</div>
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
      className="relative flex min-h-[640px] items-center overflow-hidden border-b border-border-section max-[768px]:min-h-0"
    >
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        preload
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-[center_58%]"
      />
      <div aria-hidden="true" className="lp-hero-scrim pointer-events-none absolute inset-0" />

      <div className={'lp-rail relative grid w-full items-center gap-16 ' + (hero.window ? 'grid-cols-[0.9fr_1.1fr]' : 'grid-cols-1') + '  px-8 pt-[72px] pb-[72px] max-[1024px]:grid-cols-1 max-[1024px]:gap-12 max-[768px]:px-5 max-[768px]:pt-14 max-[768px]:pb-14'}>
        <div className="max-w-[560px]">
          {hero.eyebrow && <div className="lp-eyebrow">{hero.eyebrow}</div>}
          <h1 className="mt-[14px] text-[clamp(44px,4.6vw,66px)] leading-[1.0] font-bold tracking-[-0.034em] text-ink text-pretty">
            {hero.headlineA}
            <br />
            {hero.headlineB}
          </h1>

          <p className="mt-[24px] max-w-[500px] text-[19px] leading-[1.55] text-ink-body text-pretty">
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
          <div className="w-full overflow-hidden rounded-[14px] border border-window-border bg-white shadow-[0_34px_80px_rgba(19,32,56,0.24),0_3px_8px_rgba(19,32,56,0.08)]">
            <Image
              src={hero.window.src}
              alt={hero.window.alt}
              width={hero.window.width}
              height={hero.window.height}
              loading="eager"
              sizes="(min-width: 1024px) 660px, calc(100vw - 40px)"
              className="block h-auto w-full"
            />
          </div>
        )}
      </div>
    </section>
  )
}
