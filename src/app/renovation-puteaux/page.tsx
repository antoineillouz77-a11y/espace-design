import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Puteaux (92800) — Artisan Rénovateur | Espace Design',
  description:
    'Artisan rénovateur à Puteaux (92800) — tours résidentielles modernes et appartements adjacents à La Défense. Rénovation complète, salle de bain, cuisine, finitions haut de gamme. Devis gratuit 48h.',
  keywords: [
    'rénovation Puteaux',
    'artisan rénovation Puteaux 92800',
    'rénovation appartement Puteaux',
    'entreprise rénovation Puteaux',
    'renovation 92800',
    'artisan Puteaux La Défense',
  ],
}

const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur à Puteaux (92800) — rénovation appartements tours résidentielles et biens autour de La Défense.',
  telephone: '+33611783867',
  email: 'espacedesign92@gmail.com',
  url: 'https://espacedesignparis.fr/renovation-puteaux',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Puteaux',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Puteaux',
    postalCode: '92800',
    addressCountry: 'FR',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
  },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation à Puteaux ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'une rénovation à Puteaux varie entre 700 et 1 400 €/m² pour une rénovation standard, et 1 500 à 2 500 €/m² pour du haut de gamme. Puteaux étant adjacente à La Défense, les projets y sont souvent ambitieux, notamment dans les tours résidentielles modernes. Devis gratuit sous 48h.",
      },
    },
    {
      '@type': 'Question',
      name: 'Espace Design intervient-il à Puteaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. Nous intervenons régulièrement à Puteaux et dans tout le secteur de La Défense — Courbevoie, Neuilly-sur-Seine, Suresnes, Nanterre. Déplacement gratuit et sans engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels types de travaux réalisez-vous à Puteaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Rénovation complète d'appartement, salle de bain, cuisine, peinture, parquet, carrelage, électricité, plomberie, menuiserie sur-mesure. Un seul artisan pour coordonner l'ensemble du chantier à Puteaux.",
      },
    },
    {
      '@type': 'Question',
      name: 'Avez-vous une assurance décennale ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux sont garantis 10 ans après livraison.',
      },
    },
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Hauts-de-Seine (92)', item: 'https://espacedesignparis.fr/renovation-hauts-de-seine' },
    { '@type': 'ListItem', position: 3, name: 'Puteaux', item: 'https://espacedesignparis.fr/renovation-puteaux' },
  ],
}

export default function RenovationPuteaux() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocal) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      {/* Hero compact */}
      <section className="pt-28 sm:pt-36 pb-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Hauts-de-Seine — Puteaux 92800</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation appartement<br className="hidden sm:block" /> Puteaux
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan rénovateur à Puteaux et dans le secteur de La Défense. Rénovation complète, salle de bain, cuisine, finitions haut de gamme. Appartements modernes et tours résidentielles. Devis gratuit sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+33611783867"
              className="flex items-center justify-center gap-2 bg-[#1C1C1C] text-white px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#B8960C] transition-colors duration-300"
            >
              <Phone size={15} />
              06 11 78 38 67
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border border-[#1C1C1C] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#1C1C1C] hover:text-white transition-colors duration-300"
            >
              Devis gratuit <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro locale */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Votre artisan rénovateur à Puteaux
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Commune directement adjacente au quartier d'affaires de <strong>La Défense</strong>, Puteaux présente un
            parc immobilier résidentiel particulier : tours de logements construites dans les années 1970-1990, résidences
            modernes de standing, et quelques îlots de maisons de ville dans les quartiers historiques. Ces biens
            nécessitent souvent une rénovation complète pour répondre aux standards actuels de confort et d'esthétique.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Espace Design intervient à Puteaux pour tous vos projets de rénovation : refonte complète d'un appartement
            en vue d'une mise en location ou de la revente, rénovation de salle de bain et cuisine dans une résidence
            moderne, pose de parquet ou de carrelage, peinture décorative. Notre savoir-faire en finitions haut de gamme
            correspond aux attentes des résidents de ce secteur dynamique des Hauts-de-Seine.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nous intervenons également dans les communes voisines de
            <Link href="/renovation-courbevoie" className="text-[#B8960C] hover:underline mx-1">Courbevoie</Link>,
            <Link href="/renovation-suresnes" className="text-[#B8960C] hover:underline mx-1">Suresnes</Link>,
            <Link href="/renovation-nanterre" className="text-[#B8960C] hover:underline mx-1">Nanterre</Link> et
            <Link href="/renovation-neuilly-sur-seine" className="text-[#B8960C] hover:underline mx-1">Neuilly-sur-Seine</Link>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Devis gratuit sous 48h',
              'Assurance décennale',
              "15+ ans d'expérience",
              'Respect des délais',
              'Finitions haut de gamme',
              'Un seul interlocuteur',
            ].map((a) => (
              <div key={a} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#F2F2EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-10">
            Nos services à Puteaux
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Rénovation complète',
                desc: "Du sol au plafond à Puteaux : gros œuvre, électricité, plomberie, cloisons, finitions. Un seul artisan coordonne l'ensemble du chantier, du devis à la livraison.",
              },
              {
                num: '02',
                title: 'Salle de bain & cuisine',
                desc: "Conception et réalisation de salles de bain et cuisines haut de gamme. Carrelage, faïence, robinetterie premium, menuiserie sur-mesure adaptée aux appartements modernes.",
              },
              {
                num: '03',
                title: 'Finitions sur mesure',
                desc: "Parquet, peinture décorative, menuiseries, éclairage architectural. Les détails qui transforment votre appartement en résidence à Puteaux en espace d'exception.",
              },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-lg p-6 border border-gray-100">
                <div className="font-display text-3xl font-semibold text-[#D4AF37] mb-3">{s.num}</div>
                <div className="w-6 h-px bg-[#D4AF37]/50 mb-4" />
                <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atouts */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              'Devis gratuit sous 48h',
              'Assurance décennale',
              "15+ ans d'expérience",
              'Respect des délais',
              'Finitions haut de gamme',
              'Un seul interlocuteur',
            ].map((a) => (
              <div key={a} className="flex items-center gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0" />
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Quel est le prix d'une rénovation à Puteaux ?",
                a: "Le prix d'une rénovation à Puteaux varie entre 700 et 1 400 €/m² pour une rénovation standard, et 1 500 à 2 500 €/m² pour du haut de gamme. Devis gratuit sous 48h.",
              },
              {
                q: 'Espace Design intervient-il à Puteaux ?',
                a: 'Oui. Nous intervenons régulièrement à Puteaux et dans tout le secteur de La Défense — Courbevoie, Neuilly-sur-Seine, Suresnes, Nanterre. Déplacement gratuit et sans engagement.',
              },
              {
                q: 'Quels types de travaux réalisez-vous à Puteaux ?',
                a: "Rénovation complète d'appartement, salle de bain, cuisine, peinture, parquet, carrelage, électricité, plomberie, menuiserie sur-mesure. Un seul artisan pour coordonner l'ensemble du chantier.",
              },
              {
                q: 'Avez-vous une assurance décennale ?',
                a: 'Oui, Espace Design est couvert par une assurance décennale et une RC professionnelle. Vos travaux sont garantis 10 ans après livraison.',
              },
            ].map((item) => (
              <details key={item.q} className="bg-white border border-gray-100 rounded-lg p-5 group">
                <summary className="font-display text-base font-semibold text-[#1C1C1C] cursor-pointer list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-[#D4AF37] text-lg ml-4 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed font-light">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Zones voisines */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Zones voisines</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
              { href: '/renovation-suresnes', label: 'Suresnes' },
              { href: '/renovation-nanterre', label: 'Nanterre' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
              { href: '/renovation-hauts-de-seine', label: 'Hauts-de-Seine (92)' },
            ].map((z) => (
              <Link
                key={z.href}
                href={z.href}
                className="text-xs text-[#1C1C1C] border border-gray-200 rounded px-3 py-1.5 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light"
              >
                {z.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Voir aussi — services */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos services</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/renovation-salle-de-bain-paris', label: 'Salle de bain' },
              { href: '/renovation-cuisine-paris', label: 'Cuisine' },
              { href: '/peinture-paris', label: 'Peinture' },
              { href: '/parquet-paris', label: 'Parquet' },
              { href: '/carrelage-paris', label: 'Carrelage' },
              { href: '/electricite-paris', label: 'Électricité' },
              { href: '/plomberie-paris', label: 'Plomberie' },
              { href: '/menuiserie-paris', label: 'Menuiserie' },
              { href: '/isolation-paris', label: 'Isolation' },
              { href: '/platrererie-paris', label: 'Plâtrerie' },
              { href: '/decoration-interieure-paris', label: 'Décoration' },
              { href: '/amenagement-interieur-paris', label: 'Aménagement' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Votre projet à Puteaux
          </h2>
          <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Décrivez votre projet et recevez un devis gratuit et détaillé sous 48h.
            Déplacement sans engagement à Puteaux et dans tout le secteur de La Défense.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#c9a030] transition-colors duration-300"
            >
              Devis gratuit <ArrowRight size={13} />
            </Link>
            <a
              href="tel:+33611783867"
              className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 px-7 py-3.5 rounded font-light text-sm tracking-wide hover:border-white hover:text-white transition-colors duration-300"
            >
              <Phone size={14} />
              06 11 78 38 67
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
