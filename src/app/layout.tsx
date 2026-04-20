import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Espace Design — Rénovation & Décoration Intérieure Paris',
    template: '%s',
  },
  description:
    'Espace Design — Artisan rénovateur et décorateur intérieur à Paris et en Île-de-France. Rénovation complète, aménagement sur mesure, finitions haut de gamme.',
  keywords: [
    'rénovation appartement Paris',
    'décoration intérieure Paris',
    'artisan rénovation Paris',
    'rénovation intérieure Paris',
    'entreprise rénovation Paris',
    'aménagement intérieur Paris',
  ],
  authors: [{ name: 'Espace Design' }],
  creator: 'Espace Design',
  metadataBase: new URL('https://espacedesignparis.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://espacedesignparis.fr',
    siteName: 'Espace Design',
    title: 'Espace Design — Rénovation & Décoration Intérieure Paris',
    description:
      'Artisan rénovateur et décorateur intérieur à Paris et Île-de-France. Belles finitions garanties.',
    images: [
      {
        url: 'https://espacedesignparis.fr/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Espace Design — Rénovation et décoration intérieure Paris',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Espace Design — Rénovation & Décoration Intérieure Paris',
    description: 'Artisan rénovateur et décorateur intérieur à Paris et Île-de-France.',
    images: ['https://espacedesignparis.fr/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1C1C1C',
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  legalName: 'Espace Design',
  taxID: '90472826800015',
  description:
    'Artisan rénovateur et décorateur intérieur à Paris et en Île-de-France. Rénovation complète, décoration sur-mesure, finitions haut de gamme. 15+ ans d\'expérience.',
  telephone: '+33611783867',
  email: 'espacedesign92@gmail.com',
  url: 'https://espacedesignparis.fr',
  logo: 'https://espacedesignparis.fr/images/hero.jpg',
  image: 'https://espacedesignparis.fr/images/hero.jpg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.8566,
    longitude: 2.3522,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Paris' },
    { '@type': 'AdministrativeArea', name: 'Hauts-de-Seine' },
    { '@type': 'AdministrativeArea', name: 'Val-de-Marne' },
    { '@type': 'AdministrativeArea', name: 'Seine-Saint-Denis' },
    { '@type': 'AdministrativeArea', name: 'Yvelines' },
    { '@type': 'AdministrativeArea', name: 'Val-d\'Oise' },
    { '@type': 'AdministrativeArea', name: 'Essonne' },
    { '@type': 'City', name: 'Neuilly-sur-Seine' },
    { '@type': 'City', name: 'Levallois-Perret' },
    { '@type': 'City', name: 'Boulogne-Billancourt' },
    { '@type': 'City', name: 'Versailles' },
    { '@type': 'City', name: 'Issy-les-Moulineaux' },
    { '@type': 'City', name: 'Courbevoie' },
    { '@type': 'City', name: 'Rueil-Malmaison' },
    { '@type': 'City', name: 'Saint-Cloud' },
    { '@type': 'City', name: 'Montrouge' },
    { '@type': 'City', name: 'Vincennes' },
    { '@type': 'City', name: 'Saint-Germain-en-Laye' },
    { '@type': 'City', name: 'Montreuil' },
    { '@type': 'City', name: 'Saint-Denis' },
    { '@type': 'City', name: 'Argenteuil' },
  ],
  hasMap: 'https://www.google.com/maps/place/Paris,+France',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  priceRange: '€€€',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
  knowsAbout: [
    'Rénovation appartement Paris',
    'Rénovation maison Île-de-France',
    'Décoration intérieure Paris',
    'Aménagement intérieur sur mesure',
    'Peinture appartement Paris',
    'Carrelage salle de bain Paris',
    'Parquet massif Paris',
    'Rénovation salle de bain Paris',
    'Cuisine sur-mesure Paris',
    'Menuiserie sur mesure Paris',
    'Électricité mise aux normes Paris',
    'Plomberie rénovation Paris',
    'Isolation thermique appartement',
    'Plâtrerie cloisons Paris',
    'Verrière intérieure Paris',
    'Mezzanine Paris',
    'Rénovation studio Paris',
    'Appartement haussmannien Paris',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
