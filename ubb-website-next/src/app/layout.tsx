import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter, Space_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | UBB Bausanierung GmbH',
    default: 'UBB Bausanierung GmbH | Sanierung, Umbau & Innenausbau in Südbaden',
  },
  description: 'Kernsanierung, Umbau und Innenausbau aus einer Hand. Seit 2010 in Freiburg, Müllheim und Südbaden. 15 Fachleute · 4,3★ · Ein Ansprechpartner.',
  keywords: ['Bausanierung', 'Kernsanierung', 'Umbau', 'Innenausbau', 'Freiburg', 'Südbaden', 'Estrich', 'Trockenbau'],
  openGraph: {
    siteName: 'UBB Bausanierung GmbH',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${jakarta.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
