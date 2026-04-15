import type { Metadata } from 'next'
import { Barlow, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const barlow = Barlow({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-sans' })
const oswald = Oswald({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Car Motoring Caguas PR | Servicio Automotriz Profesional',
  description: 'Car Motoring — taller mecánico profesional en Caguas, Puerto Rico. Servicio de frenos, transmisión, cambio de aceite, A/C y más. Atención personalizada y precios justos.',
  keywords: 'Car Motoring, taller mecánico, Caguas, Puerto Rico, mecánico, reparación de autos, frenos, transmisión, aceite',
  metadataBase: new URL('https://carmotoringpr.com'),
  alternates: {
    canonical: 'https://carmotoringpr.com',
  },
  openGraph: {
    title: 'Car Motoring Caguas PR | Servicio Automotriz Profesional',
    description: 'Taller mecánico especializado en mecánica racing BMW y Supra en Caguas, Puerto Rico.',
    url: 'https://carmotoringpr.com',
    siteName: 'Car Motoring PR',
    locale: 'es_PR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${barlow.variable} ${oswald.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
