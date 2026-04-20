import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services Rénovation Appartement Paris — Espace Design | Artisan Rénovateur',
  description:
    'Rénovation complète, décoration intérieure, peinture, carrelage, menuiserie, salle de bain, cuisine sur-mesure. Artisan rénovateur Paris & Île-de-France. Devis gratuit 48h.',
  keywords: [
    'rénovation appartement Paris',
    'artisan rénovation Paris',
    'décoration intérieure Paris',
    'rénovation salle de bain Paris',
    'peinture appartement Paris',
    'carrelage Paris',
    'parquet Paris',
    'menuiserie sur-mesure Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://espacedesignparis.fr/services' },
  ],
}

const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Espace Design',
  description: 'Artisan rénovateur et décorateur intérieur à Paris et Île-de-France. Rénovation complète, décoration sur-mesure, finitions haut de gamme.',
  telephone: '+33611783867',
  email: 'espacedesign92@gmail.com',
  url: 'https://espacedesignparis.fr',
  areaServed: { '@type': 'City', name: 'Paris' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    addressCountry: 'FR',
  },
  priceRange: '€€€',
  openingHours: 'Mo-Sa 08:00-19:00',
}

const servicePages = [
  { href: '/renovation-salle-de-bain-paris', label: 'Rénovation Salle de bain', desc: 'Douche italienne, baignoire, faïence, sanitaires — de 5 000 à 25 000 €', tag: 'Salle de bain' },
  { href: '/renovation-cuisine-paris', label: 'Rénovation Cuisine', desc: 'Cuisine ouverte, plan de travail, crédence, électroménager intégré — de 6 000 à 30 000 €', tag: 'Cuisine' },
  { href: '/peinture-paris', label: 'Peinture Paris', desc: 'Toutes surfaces, préparation, peinture décorative — de 20 à 60 €/m²', tag: 'Peinture' },
  { href: '/parquet-paris', label: 'Parquet Paris', desc: 'Parquet massif, contrecollé, vitrification, pose — de 50 à 150 €/m²', tag: 'Sols' },
  { href: '/carrelage-paris', label: 'Carrelage Paris', desc: 'Grand format, zellige, pose sol et mur — de 40 à 150 €/m²', tag: 'Sols' },
  { href: '/electricite-paris', label: 'Électricité Paris', desc: 'Mise aux normes NF C 15-100, tableau, prises — de 40 à 120 €/m²', tag: 'Électricité' },
  { href: '/plomberie-paris', label: 'Plomberie Paris', desc: 'Canalisations, sanitaires, mise aux normes — de 150 à 10 000 €', tag: 'Plomberie' },
  { href: '/menuiserie-paris', label: 'Menuiserie Sur Mesure', desc: 'Placards, dressings, bibliothèques, verrières — dès 800 €/ml', tag: 'Menuiserie' },
  { href: '/isolation-paris', label: 'Isolation Paris', desc: "Thermique et acoustique, MaPrimeRénov' — de 30 à 150 €/m²", tag: 'Isolation' },
  { href: '/platrererie-paris', label: 'Plâtrerie & Cloisons', desc: 'Cloisons placo, faux plafonds, enduits — de 40 à 120 €/m²', tag: 'Plâtrerie' },
  { href: '/decoration-interieure-paris', label: 'Décoration Intérieure', desc: 'Conseil, mood board, coordination travaux — de 2 000 à 15 000 €', tag: 'Décoration' },
  { href: '/amenagement-interieur-paris', label: 'Aménagement Sur Mesure', desc: 'Mezzanine, verrière, studio optimisé — de 3 000 à 30 000 €', tag: 'Aménagement' },
]

const services = [
  {
    title: 'Rénovation complète',
    icon: '🏗️',
    desc: "Nous prenons en charge l'intégralité de votre projet de rénovation, du premier coup de marteau à la dernière finition.",
    details: [
      'Démolition et dépose',
      'Cloisonnement et isolation',
      'Électricité et plomberie (coordination)',
      'Revêtements sols et murs',
      'Peinture et finitions',
      'Coordination des artisans',
    ],
  },
  {
    title: 'Décoration intérieure',
    icon: '🎨',
    desc: 'Conception et aménagement de votre intérieur selon vos goûts, votre mode de vie et votre budget.',
    details: [
      "Conseil couleurs et matériaux",
      "Plan d'aménagement",
      'Choix mobilier et accessoires',
      'Éclairage sur mesure',
      'Coordination des travaux',
      "Suivi jusqu'à la livraison",
    ],
  },
  {
    title: 'Finitions haut de gamme',
    icon: '✨',
    desc: 'Notre spécialité : les finitions qui font la différence entre un chantier ordinaire et un résultat exceptionnel.',
    details: [
      'Peinture toutes surfaces',
      'Enduits décoratifs',
      'Pose carrelage et faïence',
      'Parquet et revêtements sols',
      'Menuiseries intérieures',
      'Habillages et moulures',
    ],
  },
  {
    title: 'Cuisine & Salle de bain',
    icon: '🛁',
    desc: "Rénovation complète de vos pièces d'eau et cuisine — les pièces maîtresses de votre logement.",
    details: [
      'Pose de cuisine équipée',
      'Rénovation salle de bain',
      'Faïence et carrelage',
      'Plomberie et sanitaires',
      'Rangements sur mesure',
      'Petits espaces optimisés',
    ],
  },
  {
    title: 'Peinture & Revêtements',
    icon: '🖌️',
    desc: 'Une peinture impeccable est la base d\'un intérieur réussi. Nous travaillons avec les meilleures peintures du marché.',
    details: [
      'Peinture appartements et maisons',
      'Préparation des surfaces',
      'Peinture décorative',
      'Papier peint et revêtements muraux',
      'Ravalement façades',
      'Résines et béton ciré',
    ],
  },
  {
    title: 'Aménagement sur mesure',
    icon: '📐',
    desc: "Optimiser chaque mètre carré, c'est notre métier. Nous créons des solutions d'aménagement adaptées à votre espace.",
    details: [
      'Dressing et rangements',
      'Bibliothèques et placards',
      'Cloisons et verrières',
      'Isolation phonique et thermique',
      'Petits travaux tous corps d\'état',
      'Rénovation partielles',
    ],
  },
]

const zonesData = [
  { href: '/renovation-paris-1er', label: 'Paris 1er' },
  { href: '/renovation-paris-2e', label: 'Paris 2e' },
  { href: '/renovation-paris-3e', label: 'Paris 3e' },
  { href: '/renovation-paris-4e', label: 'Paris 4e' },
  { href: '/renovation-paris-5e', label: 'Paris 5e' },
  { href: '/renovation-paris-6e', label: 'Paris 6e' },
  { href: '/renovation-paris-7e', label: 'Paris 7e' },
  { href: '/renovation-paris-8e', label: 'Paris 8e' },
  { href: '/renovation-paris-9e', label: 'Paris 9e' },
  { href: '/renovation-paris-10e', label: 'Paris 10e' },
  { href: '/renovation-paris-11e', label: 'Paris 11e' },
  { href: '/renovation-paris-12e', label: 'Paris 12e' },
  { href: '/renovation-paris-13e', label: 'Paris 13e' },
  { href: '/renovation-paris-14e', label: 'Paris 14e' },
  { href: '/renovation-paris-15e', label: 'Paris 15e' },
  { href: '/renovation-paris-16e', label: 'Paris 16e' },
  { href: '/renovation-paris-17e', label: 'Paris 17e' },
  { href: '/renovation-paris-18e', label: 'Paris 18e' },
  { href: '/renovation-paris-19e', label: 'Paris 19e' },
  { href: '/renovation-paris-20e', label: 'Paris 20e' },
  { href: '/renovation-neuilly-sur-seine', label: 'Neuilly' },
  { href: '/renovation-levallois-perret', label: 'Levallois' },
  { href: '/renovation-boulogne-billancourt', label: 'Boulogne' },
  { href: '/renovation-issy-les-moulineaux', label: 'Issy' },
  { href: '/renovation-saint-cloud', label: 'Saint-Cloud' },
  { href: '/renovation-courbevoie', label: 'Courbevoie' },
  { href: '/renovation-asnieres-sur-seine', label: 'Asnières' },
  { href: '/renovation-suresnes', label: 'Suresnes' },
  { href: '/renovation-puteaux', label: 'Puteaux' },
  { href: '/renovation-nanterre', label: 'Nanterre' },
  { href: '/renovation-rueil-malmaison', label: 'Rueil-Malmaison' },
  { href: '/renovation-meudon', label: 'Meudon' },
  { href: '/renovation-clamart', label: 'Clamart' },
  { href: '/renovation-montrouge', label: 'Montrouge' },
  { href: '/renovation-malakoff', label: 'Malakoff' },
  { href: '/renovation-chatillon', label: 'Châtillon' },
  { href: '/renovation-vanves', label: 'Vanves' },
  { href: '/renovation-clichy', label: 'Clichy' },
  { href: '/renovation-colombes', label: 'Colombes' },
  { href: '/renovation-bagneux', label: 'Bagneux' },
  { href: '/renovation-antony', label: 'Antony' },
  { href: '/renovation-garches', label: 'Garches' },
  { href: '/renovation-sevres', label: 'Sèvres' },
  { href: '/renovation-vincennes', label: 'Vincennes' },
  { href: '/renovation-saint-mande', label: 'Saint-Mandé' },
  { href: '/renovation-fontenay-sous-bois', label: 'Fontenay-sous-Bois' },
  { href: '/renovation-nogent-sur-marne', label: 'Nogent-sur-Marne' },
  { href: '/renovation-saint-maur-des-fosses', label: 'Saint-Maur-des-Fossés' },
  { href: '/renovation-maisons-alfort', label: 'Maisons-Alfort' },
  { href: '/renovation-joinville-le-pont', label: 'Joinville-le-Pont' },
  { href: '/renovation-charenton-le-pont', label: 'Charenton-le-Pont' },
  { href: '/renovation-ivry-sur-seine', label: 'Ivry-sur-Seine' },
  { href: '/renovation-gentilly', label: 'Gentilly' },
  { href: '/renovation-versailles', label: 'Versailles' },
  { href: '/renovation-saint-germain-en-laye', label: 'Saint-Germain-en-Laye' },
  { href: '/renovation-le-vesinet', label: 'Le Vésinet' },
  { href: '/renovation-chatou', label: 'Chatou' },
]

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Nos prestations</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Tous vos travaux, un seul artisan
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          De la rénovation complète aux petites finitions, Espace Design intervient sur tous types
          de projets à Paris et en Île-de-France.
        </p>
      </section>

      {/* Service pages — cartes cliquables */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#B8960C] text-[10px] uppercase tracking-widest font-light mb-3">Pages dédiées</p>
            <h2 className="font-display text-3xl font-bold text-[#1C1C1C] mb-3">Explorez nos services en détail</h2>
            <p className="text-gray-500 text-sm font-light max-w-xl mx-auto">
              Chaque prestation a sa page dédiée avec prix, conseils et FAQ
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicePages.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white rounded-lg p-6 border border-gray-100 hover:border-[#D4AF37]/40 hover:shadow-md transition-all group block"
              >
                <span className="inline-block text-[10px] uppercase tracking-widest text-[#B8960C] font-light mb-3">
                  {s.tag}
                </span>
                <h3 className="font-display text-lg font-semibold text-[#1C1C1C] leading-snug mb-2 group-hover:text-[#B8960C] transition-colors">
                  {s.label}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light mb-4">{s.desc}</p>
                <span className="flex items-center gap-1 text-[#B8960C] text-xs font-light">
                  Voir le détail <ArrowRight size={11} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#B8960C] text-[10px] uppercase tracking-widest font-light mb-3">Nos prestations</p>
            <h2 className="font-display text-3xl font-bold text-[#1C1C1C]">Ce que nous faisons</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-lg p-8 border border-gray-100 hover:border-[#D4AF37]/40 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">{s.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={13} className="text-[#B8960C] flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-sm font-medium uppercase tracking-widest mb-3">Comment ça marche</p>
          <h2 className="font-display text-3xl font-bold text-[#1C1C1C] mb-12">Notre méthode en 4 étapes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: '01', title: 'Premier contact', desc: 'Appelez-nous ou envoyez un message. Nous répondons sous 24h.' },
              { n: '02', title: 'Visite & devis', desc: 'Déplacement gratuit pour évaluer votre projet. Devis détaillé sous 48h.' },
              { n: '03', title: 'Travaux', desc: 'Nous intervenons selon les délais convenus, avec soin et propreté.' },
              { n: '04', title: 'Livraison', desc: 'Contrôle qualité final, retouches si nécessaire, remise des clés.' },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#1C1C1C] font-bold text-sm mx-auto mb-4">
                  {step.n}
                </div>
                <h3 className="font-semibold text-[#1C1C1C] mb-2">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="py-16 bg-[#F2F2EE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-[#B8960C] mb-3">
            <MapPin size={14} />
            <span className="text-[10px] font-light uppercase tracking-[0.25em]">Zone d&apos;intervention</span>
          </div>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-3">
            Rénovation à Paris & en Île-de-France
          </h2>
          <p className="text-gray-500 text-sm font-light mb-6 max-w-2xl">
            Nous intervenons dans tous les arrondissements de Paris et dans les villes limitrophes. Devis gratuit sur place sous 48h.
          </p>
          <div className="flex flex-wrap gap-2">
            {zonesData.map((z) => (
              <Link
                key={z.href}
                href={z.href}
                className="text-xs text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors duration-200"
              >
                {z.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Liens utiles */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Ressources utiles</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/tarifs', label: 'Nos tarifs 2025' },
              { href: '/faq', label: 'FAQ rénovation' },
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation Paris' },
              { href: '/blog/choisir-artisan-renovation-paris', label: 'Choisir son artisan' },
              { href: '/blog/devis-renovation-paris', label: 'Obtenir un devis' },
              { href: '/blog/diagnostic-amiante-paris', label: 'Diagnostic avant travaux' },
              { href: '/blog/renovation-appartement-copropriete-paris', label: 'Rénover en copropriété' },
              { href: '/blog/budget-renovation-paris-2025', label: 'Budget rénovation 2025' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet, notre expertise</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
          Quel que soit l&apos;état de votre logement, nous avons la solution. Contactez-nous pour un devis gratuit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-semibold hover:bg-[#c9a030] transition-colors"
          >
            Devis gratuit <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"
          >
            <Phone size={16} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
