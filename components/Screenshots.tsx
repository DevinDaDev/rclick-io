'use client'

import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import { ChevronIcon } from './Icons'
import { brand, screenshots } from '@/content/site'

/**
 * The screenshot slideshow. A three-up grid made these screens unreadable, so one screen
 * is shown at a time and the tabs, arrows and dots all drive a single index.
 *
 * All images stay mounted at opacity 0 and cross-fade, which is the preloading
 * mechanism - conditionally rendering only the current slide would show a blank frame on
 * the first switch. Inactive layers are hidden from assistive tech so several alt texts are
 * not announced at once.
 *
 * No autoplay: these are dense UI screens and people need time to read them.
 */
export function Screenshots() {
  const [index, setIndex] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const count = screenshots.shots.length

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  )

  // Left/right move between tabs the way a tablist is expected to, focus following.
  const onTabKeyDown = (event: React.KeyboardEvent) => {
    const delta = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0
    if (delta === 0) return

    event.preventDefault()
    const next = ((index + delta) % count + count) % count
    setIndex(next)
    tabRefs.current[next]?.focus()
  }

  const current = screenshots.shots[index]

  return (
    <>
      <div
        role="tablist"
        aria-label="Application screens"
        onKeyDown={onTabKeyDown}
        className="mt-[34px] flex flex-wrap items-center gap-2 max-[1024px]:flex-nowrap max-[1024px]:overflow-x-auto max-[1024px]:pb-1"
      >
        {screenshots.shots.map((shot, i) => (
          <button
            key={shot.key}
            ref={(node) => {
              tabRefs.current[i] = node
            }}
            role="tab"
            id={`shot-tab-${shot.key}`}
            aria-selected={i === index}
            aria-controls="shot-panel"
            tabIndex={i === index ? 0 : -1}
            onClick={() => setIndex(i)}
            className={
              'shrink-0 cursor-pointer rounded-lg border px-4 py-2 text-[14px] select-none transition-[background-color,border-color,color] duration-140 ' +
              (i === index
                ? 'border-accent bg-accent font-semibold text-white'
                : 'border-border-tile bg-white font-medium text-ink-secondary')
            }
          >
            {shot.title}
          </button>
        ))}
      </div>

      <div className="mt-[22px] grid grid-cols-[minmax(0,1fr)_268px] items-start gap-8 max-[1200px]:gap-4 max-[1024px]:grid-cols-1">
        {/* stage */}
        <div className="relative overflow-hidden rounded-[15px] border border-border bg-surface-warm shadow-[0_18px_44px_rgba(28,30,26,0.10)]">
          <div
            id="shot-panel"
            role="tabpanel"
            aria-labelledby={`shot-tab-${current.key}`}
            className="relative aspect-[1180/760]"
          >
            {screenshots.shots.map((shot, i) => (
              <Image
                key={shot.key}
                src={shot.src}
                alt={`${brand.name} ${shot.title} screen`}
                fill
                sizes="(min-width: 1244px) 880px, (min-width: 1200px) calc(100vw - 364px), (min-width: 1024px) calc(100vw - 348px), (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)"
                /*
                  All lazy, deliberately. They are stacked in one box far below the
                  fold, so the browser starts all of them as the section approaches and a tab
                  switch never lands on a blank frame. Marking the first one eager or
                  preloaded instead emitted a second <link rel=preload> for a file the hero
                  already preloads at a different width, competing with the LCP.
                */
                loading="lazy"
                aria-hidden={i !== index}
                className={
                  'pointer-events-none object-cover transition-opacity duration-[220ms] ease-linear ' +
                  (i === index ? 'opacity-100' : 'opacity-0')
                }
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous screen"
            className="absolute top-1/2 left-[14px] grid h-10 w-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-border-tile bg-white/[0.94] shadow-[0_3px_12px_rgba(28,30,26,0.16)] transition-colors duration-140 hover:bg-white"
          >
            <ChevronIcon direction="left" />
          </button>

          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next screen"
            className="absolute top-1/2 right-[14px] grid h-10 w-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-border-tile bg-white/[0.94] shadow-[0_3px_12px_rgba(28,30,26,0.16)] transition-colors duration-140 hover:bg-white"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>

        {/* caption rail */}
        <div className="pt-[6px]">
          <div className="tabular text-[12.5px] font-semibold text-ink-faint-2">
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </div>

          <div
            aria-live="polite"
            className="mt-[10px] text-[22px] font-semibold tracking-[-0.02em]"
          >
            {current.title}
          </div>

          <p className="mt-[10px] text-[15px] leading-[1.6] text-ink-muted text-pretty">
            {current.body}
          </p>

          <div className="mt-6 flex gap-[7px]">
            {screenshots.shots.map((shot, i) => (
              <button
                key={shot.key}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show the ${shot.title} screen`}
                aria-current={i === index}
                className={
                  'block h-2 cursor-pointer rounded-[5px] transition-[width,background-color] duration-[180ms] ' +
                  (i === index ? 'w-[22px] bg-accent' : 'w-2 bg-border-control')
                }
              />
            ))}
          </div>

          <p className="mt-5 text-[13px] leading-[1.55] text-ink-faint-2">
            {screenshots.note}
          </p>
        </div>
      </div>
    </>
  )
}
