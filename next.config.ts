import type { NextConfig } from 'next'

const DOWNLOAD_PATH = '/downloads/:file*'

const nextConfig: NextConfig = {
  images: {
    // AVIF first, WebP fallback. The hero photo is the LCP element and AVIF compresses
    // photographs far better than WebP.
    formats: ['image/avif', 'image/webp'],
  },

  async headers() {
    return [
      {
        // Release files in public/downloads/ save instead of opening, and are versioned by
        // filename so they can be cached hard. Harmless if the folder is empty.
        source: DOWNLOAD_PATH,
        headers: [
          { key: 'Content-Disposition', value: 'attachment' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'DENY' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
    ]
  },
}

export default nextConfig
