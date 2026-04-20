'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Star, CheckCircle, ArrowRight, MapPin, ChevronDown } from 'lucide-react'

const services = [
  {
    num: '01',
    title: 'Rénovation complète',
    desc: 'Transformation totale de votre appartement ou maison : gros œuvre, second œuvre, finitions. Un seul interlocuteur, du début à la fin.',
  },
  {
    num: '02',
    title: 'Décoration intérieure',
    desc: 'Conception de votre espace selon vos goûts et votre budget. Agencement, matériaux, couleurs — un rendu professionnel et personnalisé.',
  },
  {
    num: '03',
    title: 'Finitions haut de gamme',
    desc: 'Notre spécialité : les finitions soignées qui font la différence. Peinture, revêtements, pose de carrelage, menuiserie — le détail compte.',
  },
]

const atouts = [
  'Devis gratuit et détaillé sous 48h',
  'Artisan qualifié, 15+ ans d\'expérience',
  'Belles finitions garanties',
  'Respect des délais',
  'Assurance décennale',
  'Paris & toute l\'Île-de-France',
]

const temoignages = [
  {
    nom: 'Sophie M.',
    quartier: 'Paris 15e',
    note: 5,
    texte: 'Patrick a rénové notre salon et notre cuisine. Un travail exceptionnel, des finitions parfaites. Je recommande sans hésiter.',
  },
  {
    nom: 'Marc & Isabelle T.',
    quartier: 'Boulogne-Billancourt',
    note: 5,
    texte: 'Rénovation complète de notre appartement en 3 semaines. Sérieux, propre, ponctuel. Le résultat dépasse nos attentes.',
  },
  {
    nom: 'Karim B.',
    quartier: 'Paris 17e',
    note: 5,
    texte: 'Excellent artisan. À l\'écoute, de bon conseil, et un sens du détail rare. Les finitions sont vraiment au top.',
  },
]

const faqs = [
  {
    q: 'Quels types de travaux réalisez-vous ?',
    a: 'Nous intervenons sur tous types de travaux intérieurs : rénovation complète d\'appartement ou de maison, décoration et aménagement d\'espace, cuisine sur-mesure, salle de bain, menuiserie sur-mesure, pose de parquet, et aménagement de terrasse.',
  },
  {
    q: 'Intervenez-vous dans toute l\'Île-de-France ?',
    a: 'Oui. Nous intervenons dans tous les arrondissements de Paris ainsi que dans les communes limitrophes : Boulogne-Billancourt, Levallois-Perret, Neuilly-sur-Seine, Vincennes, Saint-Denis, Issy-les-Moulineaux, et toute la couronne parisienne.',
  },
  {
    q: 'Quel est le délai pour obtenir un devis ?',
    a: 'Nous vous contactons sous 48h pour fixer un rendez-vous de visite gratuit et sans engagement. Le devis détaillé vous est remis en fin de visite ou dans les 48h suivantes.',
  },
  {
    q: 'Avez-vous une assurance décennale ?',
    a: 'Oui, Espace Design est couvert par une assurance décennale ainsi qu\'une responsabilité civile professionnelle. Ces garanties protègent vos travaux pendant 10 ans après la réception du chantier.',
  },
  {
    q: 'Comment se déroule une rénovation complète ?',
    a: 'Tout commence par une visite gratuite sur place. Nous établissons ensuite un devis détaillé et un planning précis. À chaque étape, vous êtes informé de l\'avancement du chantier. Nous procédons à une réception finale avec vous pour valider chaque détail avant de vous remettre les clés.',
  },
]

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Espace Design Paris',
  url: 'https://espacedesignparis.fr',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://espacedesignparis.fr/blog?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur et décorateur intérieur à Paris. Rénovation complète, salle de bain, cuisine, peinture, parquet, carrelage, électricité, plomberie, menuiserie sur mesure.',
  telephone: '+33611783867',
  url: 'https://espacedesignparis.fr',
  email: 'espacedesign92@gmail.com',
  sameAs: ['https://espacedesignparis.fr'],
  priceRange: '€€€',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  areaServed: [
    { '@type': 'City', name: 'Paris' },
    { '@type': 'City', name: 'Boulogne-Billancourt' },
    { '@type': 'City', name: 'Levallois-Perret' },
    { '@type': 'City', name: 'Neuilly-sur-Seine' },
    { '@type': 'City', name: 'Versailles' },
    { '@type': 'City', name: 'Courbevoie' },
    { '@type': 'City', name: 'Issy-les-Moulineaux' },
    { '@type': 'City', name: 'Saint-Cloud' },
    { '@type': 'City', name: 'Rueil-Malmaison' },
    { '@type': 'City', name: 'Nanterre' },
    { '@type': 'City', name: 'Suresnes' },
    { '@type': 'City', name: 'Puteaux' },
    { '@type': 'City', name: 'Clamart' },
    { '@type': 'City', name: 'Meudon' },
    { '@type': 'City', name: 'Montrouge' },
    { '@type': 'City', name: 'Vanves' },
    { '@type': 'City', name: 'Malakoff' },
    { '@type': 'City', name: 'Antony' },
    { '@type': 'City', name: 'Bagneux' },
    { '@type': 'City', name: 'Vincennes' },
    { '@type': 'City', name: 'Fontenay-sous-Bois' },
    { '@type': 'City', name: 'Nogent-sur-Marne' },
    { '@type': 'City', name: 'Saint-Maur-des-Fossés' },
    { '@type': 'City', name: 'Charenton-le-Pont' },
    { '@type': 'City', name: 'Saint-Germain-en-Laye' },
    { '@type': 'City', name: 'Le Vésinet' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de rénovation appartement Paris',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rénovation complète appartement', url: 'https://espacedesignparis.fr/renovation-appartement-paris' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rénovation salle de bain', url: 'https://espacedesignparis.fr/renovation-salle-de-bain-paris' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rénovation cuisine', url: 'https://espacedesignparis.fr/renovation-cuisine-paris' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Peinture appartement', url: 'https://espacedesignparis.fr/peinture-paris' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Parquet', url: 'https://espacedesignparis.fr/parquet-paris' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Carrelage', url: 'https://espacedesignparis.fr/carrelage-paris' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Électricité rénovation', url: 'https://espacedesignparis.fr/electricite-paris' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plomberie rénovation', url: 'https://espacedesignparis.fr/plomberie-paris' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Menuiserie sur mesure', url: 'https://espacedesignparis.fr/menuiserie-paris' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Isolation thermique et acoustique', url: 'https://espacedesignparis.fr/isolation-paris' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plâtrerie et cloisons', url: 'https://espacedesignparis.fr/platrererie-paris' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Décoration intérieure', url: 'https://espacedesignparis.fr/decoration-interieure-paris' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between py-5 text-left gap-4"
      >
        <span className="text-[15px] font-light text-[#1C1C1C] leading-snug">{faq.q}</span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-[#B8960C] mt-0.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-sm text-gray-500 leading-relaxed font-light">{faq.a}</p>
        </div>
      )}
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* WebSite Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {/* LocalBusiness Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero — split layout */}
      <section className="pt-16 sm:pt-20 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Texte intro */}
          <div className="text-center py-12 sm:py-16">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#B8960C] text-[10px] font-light tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
              <MapPin size={11} />
              Paris & Île-de-France
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#1C1C1C] leading-tight mb-5">
              Votre intérieur,{' '}
              <span className="text-[#B8960C]">réinventé.</span>
            </h1>
            <p className="text-gray-500 max-w-lg mx-auto text-sm sm:text-[15px] mb-10 leading-relaxed font-light">
              Artisan rénovateur et décorateur intérieur à Paris.
              Finitions haut de gamme, travail soigné, résultat qui vous ressemble.
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

          {/* Grille photos hero */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 pb-10">
            <div className="relative rounded-xl overflow-hidden h-48 sm:h-72 col-span-2">
              <Image
                src="/images/hero.jpg"
                alt="Salon avec éclairage architectural sur-mesure — rénovation appartement Paris 6e arrondissement par Espace Design"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 640px) 66vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-3 py-2">
                <p className="text-white text-sm font-medium">Paris 6e · Rue de Vaugirard</p>
                <p className="text-[#D4AF37] text-xs font-light">Salon — éclairage architectural</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="relative rounded-xl overflow-hidden flex-1">
                <Image
                  src="/images/realisations/04-terrasse-vue-paris.jpg"
                  alt="Terrasse composite avec vue sur Paris — rénovation terrasse Paris 9e"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 33vw, 25vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1.5">
                  <p className="text-white text-xs font-medium">Paris 9e</p>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden flex-1">
                <Image
                  src="/images/realisations/01-salon-parisien-bibliotheque.jpg"
                  alt="Bibliothèque et salon parisien sur-mesure — rénovation appartement Paris 7e arrondissement"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 33vw, 25vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1.5">
                  <p className="text-white text-xs font-medium">Paris 7e</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atouts rapides */}
      <section className="bg-[#1C1C1C] py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-2">
            {['Devis gratuit 48h', 'Assurance décennale', '15+ ans d\'expérience', 'Paris & Île-de-France'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-300 text-xs font-light tracking-wide py-1">
                <span className="w-1 h-1 rounded-full bg-[#D4AF37] flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 sm:py-32 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Nos prestations</p>
            <span className="gold-line" />
            <h2 className="section-title font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C]">
              Ce que nous faisons
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-lg p-8 border border-gray-100 hover:border-[#D4AF37]/50 hover:shadow-sm transition-all duration-300"
              >
                <div className="service-number mb-5">{s.num}</div>
                <div className="w-8 h-px bg-[#D4AF37]/60 mb-5" />
                <h3 className="font-display text-xl font-semibold text-[#1C1C1C] mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[13px] font-light tracking-wide text-[#B8960C] hover:text-[#1C1C1C] transition-colors duration-300"
            >
              Voir tous nos services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Réalisations preview */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Portfolio</p>
            <span className="gold-line" />
            <h2 className="section-title font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C]">
              Nos réalisations
            </h2>
            <p className="text-gray-400 mt-4 text-sm font-light">Chaque chantier est unique — voici quelques exemples de notre travail.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {[
              { src: '/images/realisations/01-salon-parisien-bibliotheque.jpg', label: 'Salon & bibliothèque', lieu: 'Paris 7e', tall: true },
              { src: '/images/realisations/04-terrasse-vue-paris.jpg', label: 'Terrasse vue Paris', lieu: 'Paris 9e', tall: false },
              { src: '/images/realisations/09-chambre-tete-lit.jpg', label: 'Chambre sur-mesure', lieu: 'Paris 11e', tall: false },
              { src: '/images/realisations/07-open-space-cuisine.jpg', label: 'Open space cuisine', lieu: 'Paris 12e', tall: false },
              { src: '/images/realisations/12-salle-bain.jpg', label: 'Salle de bain', lieu: 'Paris 10e', tall: false },
              { src: '/images/realisations/10-appartement-globe.jpg', label: 'Rénovation complète', lieu: 'Paris 3e', tall: false },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.tall ? 'h-72' : 'h-52'} rounded-lg overflow-hidden relative group cursor-pointer`}
              >
                <Image
                  src={item.src}
                  alt={`${item.label} — ${item.lieu}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/65 px-3 py-2">
                  <div className="text-white text-sm font-medium leading-tight">{item.label}</div>
                  <div className="text-[#D4AF37] text-xs mt-0.5">{item.lieu}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 border border-[#1C1C1C] text-[#1C1C1C] px-6 py-3 rounded text-sm font-light tracking-wide hover:bg-[#1C1C1C] hover:text-white transition-colors duration-300"
            >
              Voir toutes les réalisations <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Atouts */}
      <section className="py-24 sm:py-32 bg-[#F2F2EE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Pourquoi nous choisir</p>
              <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
              <h2 className="section-title font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C] mb-6">
                L&apos;excellence artisanale,<br />à votre service
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-sm font-light">
                Quinze ans à transformer des intérieurs parisiens. Notre engagement : chaque détail compte,
                chaque finition est soignée, chaque client repart satisfait. Espace Design, c&apos;est
                l&apos;exigence d&apos;un architecte avec la proximité d&apos;un artisan.
              </p>
              <ul className="space-y-3">
                {atouts.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-sm text-gray-600 font-light">
                    <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a
                  href="tel:+33611783867"
                  className="inline-flex items-center gap-2 bg-[#1C1C1C] text-white px-6 py-3 rounded text-sm font-light tracking-wide hover:bg-[#B8960C] transition-colors duration-300"
                >
                  <Phone size={14} />
                  Appeler Patrick
                </a>
              </div>
            </div>

            {/* Stats — épuré */}
            <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
              {[
                { value: '15+', label: 'années d\'expérience' },
                { value: '200+', label: 'chantiers réalisés' },
                { value: '40+', label: 'avis clients 5★' },
                { value: '100%', label: 'clients satisfaits' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-8 text-center">
                  <div className="font-display text-4xl sm:text-5xl font-semibold text-[#B8960C] mb-2 leading-none">{stat.value}</div>
                  <div className="text-[11px] text-gray-400 font-light tracking-wide uppercase leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Avis clients</p>
            <span className="gold-line" />
            <h2 className="section-title font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C]">
              Ils nous font confiance
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {temoignages.map((t, i) => (
              <div key={i} className="py-8 px-2 border-t border-gray-100">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.note }).map((_, j) => (
                    <Star key={j} size={12} className="fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic font-light">&ldquo;{t.texte}&rdquo;</p>
                <div>
                  <div className="text-sm font-medium text-[#1C1C1C]">{t.nom}</div>
                  <div className="text-xs text-gray-400 font-light mt-0.5">{t.quartier}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-32 bg-[#F2F2EE]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Questions fréquentes</p>
            <span className="gold-line" />
            <h2 className="section-title font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C]">
              FAQ
            </h2>
          </div>
          <div className="bg-white rounded-lg border border-gray-100 px-6 sm:px-8">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Conseils & Guides</p>
            <span className="gold-line" />
            <h2 className="section-title font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C]">
              Nos guides rénovation
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                href: '/blog/prix-renovation-appartement-paris',
                tag: 'Prix & Budgets',
                title: 'Prix d\'une rénovation à Paris en 2025',
                desc: 'Tarifs au m², exemples de budgets pour studio, 2 et 3 pièces.',
              },
              {
                href: '/blog/renovation-appartement-haussmannien-paris',
                tag: 'Guides',
                title: 'Rénover un appartement haussmannien',
                desc: 'Parquet, moulures, cheminées — préserver le cachet tout en modernisant.',
              },
              {
                href: '/blog/choisir-artisan-renovation-paris',
                tag: 'Conseils',
                title: 'Choisir son artisan rénovateur à Paris',
                desc: 'Les 8 critères pour ne pas se tromper : assurance, devis, références.',
              },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="bg-white rounded-lg p-6 border border-gray-100 hover:border-[#D4AF37]/40 hover:shadow-sm transition-all group"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#B8960C] font-light">{a.tag}</span>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] leading-snug mt-2 mb-2 group-hover:text-[#B8960C] transition-colors">
                  {a.title}
                </h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{a.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[13px] font-light tracking-wide text-[#B8960C] hover:text-[#1C1C1C] transition-colors duration-300"
            >
              Tous nos guides <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Zone intervention */}
      <section className="py-14 bg-[#1C1C1C]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-[#D4AF37] mb-4">
            <MapPin size={14} />
            <span className="text-[10px] font-light uppercase tracking-[0.25em]">Zone d&apos;intervention</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Paris & toute l&apos;Île-de-France
          </h2>
          <p className="text-gray-400 text-sm mb-8 font-light max-w-xl mx-auto leading-relaxed">
            Nous intervenons dans tous les arrondissements de Paris ainsi que dans les communes
            environnantes : Boulogne, Levallois, Neuilly, Vincennes, Saint-Denis, et toute la couronne parisienne.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { href: '/renovation-paris-1er', label: '1er' },
              { href: '/renovation-paris-2e', label: '2e' },
              { href: '/renovation-paris-3e', label: '3e' },
              { href: '/renovation-paris-4e', label: '4e' },
              { href: '/renovation-paris-5e', label: '5e' },
              { href: '/renovation-paris-6e', label: '6e' },
              { href: '/renovation-paris-7e', label: '7e' },
              { href: '/renovation-paris-8e', label: '8e' },
              { href: '/renovation-paris-9e', label: '9e' },
              { href: '/renovation-paris-10e', label: '10e' },
              { href: '/renovation-paris-11e', label: '11e' },
              { href: '/renovation-paris-12e', label: '12e' },
              { href: '/renovation-paris-13e', label: '13e' },
              { href: '/renovation-paris-14e', label: '14e' },
              { href: '/renovation-paris-15e', label: '15e' },
              { href: '/renovation-paris-16e', label: '16e' },
              { href: '/renovation-paris-17e', label: '17e' },
              { href: '/renovation-paris-18e', label: '18e' },
              { href: '/renovation-paris-19e', label: '19e' },
              { href: '/renovation-paris-20e', label: '20e' },
            ].map((arr) => (
              <Link
                key={arr.href}
                href={arr.href}
                className="text-xs text-gray-400 border border-gray-700 px-3 py-1 rounded hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-200"
              >
                Paris {arr.label}
              </Link>
            ))}
            {[
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne' },
              { href: '/renovation-issy-les-moulineaux', label: 'Issy' },
              { href: '/renovation-saint-cloud', label: 'Saint-Cloud' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
              { href: '/renovation-asnieres-sur-seine', label: 'Asnières' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-saint-germain-en-laye', label: 'Saint-Germain' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
              { href: '/renovation-saint-denis', label: 'Saint-Denis' },
              { href: '/renovation-argenteuil', label: 'Argenteuil' },
              { href: '/renovation-cergy', label: 'Cergy' },
            ].map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className="text-xs text-gray-400 border border-gray-700 px-3 py-1 rounded hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-200"
              >
                {v.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded text-sm font-light tracking-wide hover:bg-[#D4AF37] hover:text-[#1C1C1C] transition-colors duration-300"
          >
            Demander un devis gratuit <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 sm:py-32 bg-[#FAFAF8]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Commencer</p>
          <span className="gold-line" />
          <h2 className="section-title font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C] mb-5">
            Votre projet commence ici
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed text-sm font-light">
            Décrivez-nous votre projet — rénovation, décoration, aménagement — et recevez un devis
            gratuit et détaillé sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-[#1C1C1C] text-white px-8 py-4 rounded font-light text-sm tracking-wide hover:bg-[#B8960C] transition-colors duration-300"
            >
              Devis gratuit <ArrowRight size={14} />
            </Link>
            <a
              href="tel:+33611783867"
              className="flex items-center justify-center gap-2 border border-[#1C1C1C] text-[#1C1C1C] px-8 py-4 rounded font-light text-sm tracking-wide hover:bg-[#1C1C1C] hover:text-white transition-colors duration-300"
            >
              <Phone size={15} />
              06 11 78 38 67
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
