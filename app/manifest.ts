import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Monica - Graphic Designer Portfolio',
    short_name: 'Monica Portfolio',
    description: 'Professional graphic designer and creative artist portfolio showcasing brand identity, digital art, typography, and web design work.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0D0D0D',
    theme_color: '#0D0D0D',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

