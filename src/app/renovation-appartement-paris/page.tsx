import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Phone, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris — Artisan Qualifié & Devis Gratuit',
  description:
    'Rénovation d\'appartement à Paris : Espace Design intervient dans tous les arrondissements. Artisan qualifié, belles finitions, devis gratuit sous 48h. ☎ 06 11 78 38 67',
}

const arrondissements = [
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
]

const villes = [
  { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
  { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
  { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
  { href: '/renovation-issy-les-moulineaux', label: 'Issy-les-Moulineaux' },
  { href: '/renovation-saint-cloud', label: 'Saint-Cloud' },
  { href: '/renovation-courbevoie', label: 'Courbevoie' },
  { href: '/renovation-asnieres-sur-seine', label: 'Asnières-sur-Seine' },
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
  { href: '/renovation-saint-denis', label: 'Saint-Denis' },
  { href: '/renovation-montreuil', label: 'Montreuil' },
  { href: '/renovation-pantin', label: 'Pantin' },
  { href: '/renovation-aubervilliers', label: 'Aubervilliers' },
  { href: '/renovation-bagnolet', label: 'Bagnolet' },
  { href: '/renovation-massy', label: 'Massy' },
  { href: '/renovation-palaiseau', label: 'Palaiseau' },
  { href: '/renovation-argenteuil', label: 'Argenteuil' },
  { href: '/renovation-cergy', label: 'Cergy' },
  { href: '/renovation-epinay-sur-seine', label: 'Épinay-sur-Seine' },
  { href: '/renovation-noisy-le-grand', label: 'Noisy-le-Grand' },
  { href: '/renovation-chatenay-malabry', label: 'Châtenay-Malabry' },
]

const services = [
  { href: '/renovation-salle-de-bain-paris', label: 'Salle de bain', desc: 'Douche italienne, baignoire, faïence' },
  { href: '/renovation-cuisine-paris', label: 'Cuisine', desc: 'Cuisine ouverte, plan de travail, crédence' },
  { href: '/peinture-paris', label: 'Peinture', desc: 'Toutes surfaces, préparation, finitions' },
  { href: '/parquet-paris', label: 'Parquet', desc: 'Pose, vitrification, rénovation parquet' },
  { href: '/carrelage-paris', label: 'Carrelage', desc: 'Grand format, zellige, sol et mur' },
  { href: '/electricite-paris', label: 'Électricité', desc: 'Mise aux normes NF C 15-100, tableau' },
  { href: '/plomberie-paris', label: 'Plomberie', desc: 'Sanitaires, tuyauterie, chauffe-eau' },
  { href: '/menuiserie-paris', label: 'Menuiserie', desc: 'Dressings, placards, portes sur mesure' },
  { href: '/isolation-paris', label: 'Isolation', desc: 'Isolation thermique et acoustique' },
  { href: '/platrererie-paris', label: 'Plâtrerie', desc: 'Cloisons, faux-plafonds, enduits' },
  { href: '/decoration-interieure-paris', label: 'Décoration', desc: 'Conseil, mood board, matériaux' },
  { href: '/amenagement-interieur-paris', label: 'Aménagement', desc: 'Mezzanine, verrière, optimisation espace' },
  { href: '/renovation-studio-paris', label: 'Studio', desc: 'Lit escamotable, mezzanine, optimisation' },
  { href: '/renovation-maison-paris', label: 'Maison IDF', desc: 'Rénovation maison en Île-de-France' },
  { href: '/renovation-appartement-haussmannien-paris', label: 'Haussmannien', desc: 'Moulures, parquet, hauteur sous plafond' },
]

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Rénovation appartement Paris', item: 'https://espacedesignparis.fr/renovation-appartement-paris' },
  ],
}

const schemaFaqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le coût d\'une rénovation d\'appartement à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le coût varie selon l\'état du bien et la nature des travaux : de 500 à 1 500 €/m² pour une rénovation partielle, et de 1 500 à 3 000 €/m² pour une rénovation complète. Espace Design établit un devis gratuit et précis après visite.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure une rénovation d\'appartement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour un appartement de 50 m², comptez 3 à 6 semaines selon l\'ampleur des travaux. Nous respectons les délais convenus et vous informons à chaque étape.',
      },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous dans toute la région parisienne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous intervenons dans tous les arrondissements de Paris ainsi que dans toute l\'Île-de-France : Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne et au-delà.',
      },
    },
    {
      '@type': 'Question',
      name: 'Avez-vous une assurance décennale ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Espace Design est couvert par une assurance décennale et une assurance responsabilité civile professionnelle. Tous nos travaux sont garantis 10 ans.',
      },
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous un accompagnement en décoration ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolument. En plus des travaux, nous vous conseillons sur les couleurs, matériaux, et l\'aménagement pour un résultat harmonieux et personnalisé.',
      },
    },
  ],
}

const faq = [
  {
    q: 'Quel est le coût d\'une rénovation d\'appartement à Paris ?',
    a: 'Le coût varie selon l\'état du bien et la nature des travaux : de 500 à 1 500 €/m² pour une rénovation partielle, et de 1 500 à 3 000 €/m² pour une rénovation complète. Nous établissons un devis gratuit et précis après visite.',
  },
  {
    q: 'Combien de temps dure une rénovation d\'appartement ?',
    a: 'Pour un appartement de 50 m², comptez 3 à 6 semaines selon l\'ampleur des travaux. Nous respectons les délais convenus et vous informons à chaque étape.',
  },
  {
    q: 'Intervenez-vous dans toute la région parisienne ?',
    a: 'Oui, nous intervenons dans tous les arrondissements de Paris ainsi que dans toute l\'Île-de-France : Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne et au-delà.',
  },
  {
    q: 'Avez-vous une assurance décennale ?',
    a: 'Oui, Espace Design est couvert par une assurance décennale et une assurance responsabilité civile professionnelle. Tous nos travaux sont garantis.',
  },
  {
    q: 'Proposez-vous un accompagnement en décoration ?',
    a: 'Absolument. En plus des travaux, nous vous conseillons sur les couleurs, matériaux, et l\'aménagement pour un résultat harmonieux et personnalisé.',
  },
]

export default function RenovationParis() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaqPage) }}
      />
      {/* Hero SEO */}
      <section className="pt-32 pb-20 bg-[#1C1C1C] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
            ))}
            <span className="text-gray-400 text-xs ml-2">40+ avis clients</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Rénovation d&apos;appartement à Paris
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Artisan qualifié, 15+ ans d&apos;expérience, belles finitions garanties.
            Devis gratuit sous 48h dans tous les arrondissements de Paris.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33611783867"
              className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors"
            >
              <Phone size={18} />
              06 11 78 38 67
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"
            >
              Devis gratuit en ligne <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro SEO */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-[#1C1C1C] mb-4">
            Votre artisan rénovateur à Paris
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Espace Design est une entreprise de rénovation et décoration intérieure basée en
            Île-de-France. Nous intervenons sur tous types de projets : rénovation complète d&apos;appartements,
            rafraîchissement de pièces, aménagement sur mesure, ou simple remise en état.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Notre signature : des <strong>finitions haut de gamme</strong> à chaque chantier.
            Un artisan minutieux, à l&apos;écoute, qui traite votre logement comme le sien.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Que vous habitiez dans le <strong>15e, 16e, 17e, 8e arrondissement</strong> de Paris
            ou en banlieue, nous nous déplaçons gratuitement pour évaluer votre projet
            et vous remettre un devis détaillé sans engagement.
          </p>
        </div>
      </section>

      {/* Nos engagements */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-[#1C1C1C] mb-8 text-center">
            Nos engagements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Devis gratuit et détaillé sous 48h',
              'Artisan qualifié, assurance décennale',
              'Respect des délais et du budget',
              'Belles finitions sur chaque chantier',
              'Propreté du chantier garantie',
              'Un seul interlocuteur du début à la fin',
              'Matériaux de qualité sélectionnés',
              'Photos avant/après pour chaque projet',
              'Disponible 6j/7, réponse rapide',
            ].map((e) => (
              <div key={e} className="flex items-start gap-3 bg-white rounded p-4 border border-gray-100">
                <CheckCircle size={15} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-[#1C1C1C] mb-3">Nos prestations de rénovation</h2>
          <p className="text-gray-500 text-sm mb-8">Chaque corps de métier est réalisé avec soin. Cliquez pour découvrir les détails, prix et FAQ.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100 hover:border-[#D4AF37]/50 hover:bg-white transition-all group"
              >
                <div className="font-semibold text-[#1C1C1C] text-sm mb-1 group-hover:text-[#B8960C] transition-colors">{s.label}</div>
                <div className="text-gray-500 text-xs leading-relaxed font-light">{s.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Arrondissements + Villes IDF */}
      <section className="py-16 bg-[#F2F2EE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl font-bold text-[#1C1C1C] mb-3">
            Rénovation dans tous les arrondissements
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Nous intervenons dans tout Paris et l&apos;Île-de-France, sans supplément de déplacement.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {arrondissements.map((arr) => (
              <Link
                key={arr.href}
                href={arr.href}
                className="border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-700 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors"
              >
                Paris {arr.label}
              </Link>
            ))}
          </div>
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Île-de-France</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {villes.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className="border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors"
              >
                {v.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-[#1C1C1C] mb-8 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-100 p-6">
                <h3 className="font-semibold text-[#1C1C1C] mb-2 text-sm">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog links */}
      <section className="py-12 bg-[#F2F2EE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-5">Guides & conseils rénovation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix d\'une rénovation à Paris en 2025', tag: 'Prix' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénover un appartement haussmannien', tag: 'Guide' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain à Paris', tag: 'Salle de bain' },
              { href: '/blog/choisir-artisan-renovation-paris', title: 'Bien choisir son artisan rénovateur', tag: 'Conseils' },
              { href: '/blog/renovation-cuisine-ouverte-paris', title: 'Créer une cuisine ouverte à Paris', tag: 'Cuisine' },
              { href: '/blog/renovation-parquet-paris', title: 'Parquet : pose, rénovation, vitrification', tag: 'Sols' },
              { href: '/blog/isolation-acoustique-appartement-paris', title: 'Isolation acoustique appartement Paris', tag: 'Isolation' },
              { href: '/blog/peinture-appartement-paris', title: 'Peinture appartement Paris : prix et conseils', tag: 'Peinture' },
              { href: '/blog/renovation-studio-paris', title: 'Rénovation studio Paris : prix et astuces', tag: 'Studios' },
              { href: '/blog/carrelage-appartement-paris', title: 'Carrelage appartement Paris : prix et pose', tag: 'Carrelage' },
              { href: '/blog/menuiserie-sur-mesure-paris', title: 'Menuiserie sur mesure à Paris', tag: 'Menuiserie' },
              { href: '/blog/decoration-interieure-paris', title: 'Décoration intérieure Paris : guide complet', tag: 'Décoration' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénover un appartement ancien à Paris', tag: 'Ancien' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique Paris : prix et aides', tag: 'Isolation' },
              { href: '/blog/renovation-2-pieces-paris', title: 'Rénovation 2 pièces Paris : budget et guide', tag: 'Budgets' },
              { href: '/blog/renovation-3-pieces-paris', title: 'Rénovation 3 pièces Paris : prix et budget', tag: 'Budgets' },
              { href: '/blog/budget-renovation-paris-2025', title: 'Budget rénovation Paris 2025 : estimez votre projet', tag: 'Budgets' },
              { href: '/blog/devis-renovation-paris', title: 'Comment obtenir et comparer 3 devis à Paris', tag: 'Conseils' },
              { href: '/blog/renovation-fenetre-paris', title: 'Rénovation fenêtres Paris : double vitrage, PVC', tag: 'Rénovation' },
              { href: '/blog/home-staging-paris', title: 'Home staging Paris : valoriser avant vente', tag: 'Conseils' },
              { href: '/blog/domotique-appartement-paris', title: 'Domotique appartement Paris : prix 2025', tag: 'Aménagement' },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100 hover:border-[#D4AF37]/40 transition-colors group">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B8960C] font-light">{a.tag}</span>
                  <p className="text-sm font-medium text-[#1C1C1C] mt-1 group-hover:text-[#B8960C] transition-colors leading-snug">{a.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ressources utiles */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">À explorer</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/tarifs', label: 'Nos tarifs 2025' },
              { href: '/faq', label: 'FAQ rénovation' },
              { href: '/avis', label: 'Avis clients' },
              { href: '/realisations', label: 'Portfolio' },
              { href: '/blog/renovation-loft-paris', label: 'Rénovation loft Paris' },
              { href: '/blog/amenagement-studio-paris', label: 'Aménagement studio' },
              { href: '/blog/chauffage-appartement-paris', label: 'Chauffage appartement' },
              { href: '/blog/plomberie-appartement-paris', label: 'Plomberie appartement' },
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">
          Prêt à rénover votre appartement ?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
          Contactez-nous aujourd&apos;hui pour un devis gratuit. Nous nous déplaçons dans tout Paris et sa couronne.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors"
          >
            <Phone size={18} />
            06 11 78 38 67
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"
          >
            Formulaire de contact <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
