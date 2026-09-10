import { ImageResponse } from 'next/og'
import { brand, hero } from '@/content/site'

export const alt = `${brand.name} - ${hero.headlineA} ${hero.headlineB}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Social card, generated at build time from content/site.ts. Uses the two surfaces and
 * the accent so it needs no image payload. Colours are hardcoded here because the OG
 * renderer cannot read CSS variables: match them to the active theme preset.
 */
const ACCENT = '#2f4a6b' // matches themes/slate.css
const TINT = '#f3f6f9'
const TINT_BORDER = '#dbe3ec'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#ffffff',
          color: '#191a17',
          padding: 72,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: ACCENT }} />
          <span style={{ fontSize: 34, fontWeight: 600, letterSpacing: -0.7 }}>{brand.name}</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 74,
              lineHeight: 1.08,
              fontWeight: 700,
              letterSpacing: -2.2,
              color: ACCENT,
              maxWidth: 980,
            }}
          >
            {`${hero.headlineA} ${hero.headlineB}`}
          </div>
          <div style={{ marginTop: 26, fontSize: 27, lineHeight: 1.45, color: '#3d3e38', maxWidth: 820 }}>
            {hero.sub}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 14, fontSize: 21, color: '#3d3e38' }}>
          {hero.trust.map((t) => (
            <span
              key={t.label}
              style={{
                border: `1px solid ${TINT_BORDER}`,
                background: TINT,
                borderRadius: 10,
                padding: '10px 18px',
              }}
            >
              {t.label}
            </span>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
