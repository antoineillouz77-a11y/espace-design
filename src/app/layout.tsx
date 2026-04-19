import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Espace Design — Rénovation & Décoration Intérieure Paris',
    template: '%s | Espace Design Paris',
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

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description:
    'Artisan rénovateur et décorateur intérieur à Paris et en Île-de-France.',
  telephone: '+33611783867',
  email: 'espacedesign92@gmail.com',
  url: 'https://espacedesignparis.fr',
  areaServed: {
    '@type': 'City',
    name: 'Paris',
  },
  priceRange: '€€€',
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
