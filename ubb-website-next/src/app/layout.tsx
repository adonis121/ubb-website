import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter, Space_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'UBB Bausanierung GmbH',
  description: 'Kernsanierung, Umbau und Innenausbau aus einer Hand. Seit 2010 in Freiburg, Müllheim und Südbaden. 15 Fachleute, ein Ansprechpartner.',
  url: 'https://www.ubb-bausanierung.de',
  telephone: '+4976311730287',
  faxNumber: '+4976311731455',
  email: 'info@ubb-bausanierung.de',
  legalName: 'UBB Bausanierung GmbH',
  identifier: { '@type': 'PropertyValue', name: 'HRB', value: '711948' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Biergasse 1',
    addressLocality: 'Buggingen',
    postalCode: '79426',
    addressCountry: 'DE',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 47.8644, longitude: 7.6333 },
  foundingDate: '2010',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 15 },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.3',
    reviewCount: '40',
    bestRating: '5',
    worstRating: '1',
  },
  areaServed: [
    'Freiburg im Breisgau', 'Müllheim', 'Buggingen',
    'Bad Krozingen', 'Breisach am Rhein', 'Lörrach', 'Rheinfelden (Baden)',
  ].map((name) => ({ '@type': 'City', name })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Bausanierung Leistungen',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sanierung & Umbau' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bodenarbeiten' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Innenarbeiten' } },
    ],
  },
  sameAs: ['https://www.instagram.com/ubb.bausanierung'],
}

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
  metadataBase: new URL('https://www.ubb-bausanierung.de'),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  )
}
