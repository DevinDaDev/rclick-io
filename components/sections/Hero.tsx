import Image from 'next/image'
import { Icon, WindowsGlyph } from '@/components/Icons'
import { actionNote, hero, primaryAction } from '@/content/site'

/**
 * Hero: photo background with a light scrim, headline left, product window right.
 * The photo is the LCP element and the only image on the page worth a preload.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[720px] items-center overflow-hidden max-[768px]:min-h-0"
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

      {/* Scrim tilts down-right and fades out by 76% so the right quarter stays clear.
          Below 768px it flips vertical or the copy stops reading. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.86)_34%,rgba(255,255,255,0.30)_58%,rgba(255,255,255,0)_76%)] max-[768px]:bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.86)_45%,rgba(255,255,255,0)_80%)]"
      />

      <div className="lp-rail relative flex w-full flex-wrap items-center justify-between gap-14 px-8 pt-[90px] pb-24 max-[768px]:px-5 max-[768px]:pt-16 max-[768px]:pb-16">
        <div className="min-w-[340px] max-w-[480px] flex-[1_1_420px] max-[768px]:min-w-0">
          <h1 className="text-[54px] leading-[1.08] font-bold tracking-[-0.03em] text-accent text-pretty max-[768px]:text-[36px]">
            {hero.headlineA}
            <br />
            {hero.headlineB}
          </h1>

          <p className="mt-[22px] max-w-[420px] text-[18.5px] leading-[1.5] text-ink-body text-pretty">
            {hero.sub}
          </p>

          <div className="mt-[34px] flex flex-wrap items-center gap-[14px]">
            <a
              href={primaryAction.href}
              download={primaryAction.download || undefined}
              className="lp-btn lp-btn-primary"
            >
              {primaryAction.glyph === 'windows' && <WindowsGlyph />}
              {hero.primaryCta}
            </a>
            <a href={hero.secondaryHref} className="lp-btn lp-btn-secondary">
              {hero.secondaryCta}
            </a>
          </div>

          {actionNote && (
            <p className="mt-3 max-w-[420px] text-[13px] leading-[1.55] text-ink-meta">
              {actionNote}
            </p>
          )}

          <ul className="mt-[52px] flex gap-[34px] max-[768px]:grid max-[768px]:grid-cols-2 max-[768px]:gap-6">
            {hero.trust.map((item) => (
              <li key={item.label} className="w-[76px] text-center">
                <div className="mx-auto grid h-[46px] w-[46px] place-items-center rounded-xl border border-border-tile bg-white/[0.86] text-accent shadow-[0_2px_8px_rgba(28,30,26,0.06)]">
                  <Icon name={item.icon} size={20} />
                </div>
                <div className="mt-[10px] text-[13px] font-medium text-ink-body">{item.label}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-[420px] max-w-[560px] flex-[1_1_520px] overflow-hidden rounded-[11px] border border-window-border bg-white shadow-[0_30px_70px_rgba(28,30,26,0.26),0_3px_8px_rgba(28,30,26,0.10)] max-[768px]:w-full max-[768px]:min-w-0 max-[768px]:max-w-none">
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
      </div>
    </section>
  )
}
