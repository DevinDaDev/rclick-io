'use client'

import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import { CheckGlyph, ChevronIcon } from './Icons'
import { brand, screenshots } from '@/content/site'

/**
 * The screenshot slideshow. One screen at a time; tabs, arrows and dots all drive a single
 * index. All images stay mounted at opacity 0 and cross-fade so a tab switch never lands on
 * a blank frame. No autoplay: these are dense UI screens and people need time to read them.
 */
export function Screenshots() {
  const [index, setIndex] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const count = screenshots.shots.length

  const go = useCallback((next: number) => setIndex(((next % count) + count) % count), [count])

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
      <div className="mt-[30px] flex items-center justify-between gap-4">
        <div
          role="tablist"
          aria-label="Application screens"
          onKeyDown={onTabKeyDown}
          className="flex min-w-0 flex-wrap items-center gap-2 max-[1024px]:flex-nowrap max-[1024px]:overflow-x-auto max-[1024px]:pb-1"
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
                'shrink-0 cursor-pointer rounded-full border px-[20px] py-[10px] text-[15px] select-none transition-[background-color,border-color,color] duration-140 ' +
                (i === index
                  ? 'border-accent bg-accent font-semibold text-white'
                  : 'border-border-tile bg-white font-medium text-ink-secondary hover:border-accent-border hover:text-accent')
              }
            >
              {shot.title}
            </button>
          ))}
        </div>

        <div className="flex gap-2 max-[768px]:hidden">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous screen"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-border-tile bg-white transition-colors duration-140 hover:border-accent-border"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next screen"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-border-tile bg-white transition-colors duration-140 hover:border-accent-border"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      </div>

      <div className="mt-[26px] grid grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] items-center gap-12 max-[1200px]:gap-8 max-[1024px]:grid-cols-1">
        <div className="lp-window max-[768px]:p-2">
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
                sizes="(min-width: 1244px) 740px, (min-width: 1024px) calc(63vw - 40px), calc(100vw - 40px)"
                loading="lazy"
                aria-hidden={i !== index}
                className={
                  'pointer-events-none object-cover transition-opacity duration-[220ms] ease-linear ' +
                  (i === index ? 'opacity-100' : 'opacity-0')
                }
              />
            ))}
          </div>
        </div>

        <div>
          <div aria-live="polite" className="text-[32px] font-bold tracking-[-0.026em]">
            {current.title}
          </div>
          <p className="mt-[12px] text-[17px] leading-[1.6] text-ink-muted text-pretty">{current.body}</p>

          {current.bullets && (
            <ul className="mt-6 flex flex-col gap-[14px]">
              {current.bullets.map((b) => (
                <li key={b} className="flex items-center gap-[12px] text-[16px] text-ink-body">
                  <span className="lp-check">
                    <CheckGlyph size={12} strokeWidth={3.2} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-7 flex items-center gap-4">
            <span className="tabular text-[12.5px] font-semibold text-ink-faint-2">
              {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </span>
            <div className="flex gap-[7px]">
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
          </div>

          <p className="mt-5 text-[13px] leading-[1.55] text-ink-faint-2">{screenshots.note}</p>
        </div>
      </div>
    </>
  )
}
