import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.espacedesignparis.fr/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Bilan avant travaux Paris',
      item: 'https://www.espacedesignparis.fr/blog/bilan-avant-travaux-paris',
    },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Bilan avant travaux à Paris : pourquoi et comment faire un audit pré-rénovation',
  description:
    'Tout savoir sur le bilan avant travaux (diagnostic amiante, plomb, structure, humidité) avant de rénover un appartement parisien. Étapes, coûts et obligations légales.',
  author: { '@type': 'Organization', name: 'Espace Design Paris' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design Paris',
    logo: { '@type': 'ImageObject', url: 'https://www.espacedesignparis.fr/logo.png' },
  },
  datePublished: '2025-04-01',
  dateModified: '2025-04-01',
  mainEntityOfPage: 'https://www.espacedesignparis.fr/blog/bilan-avant-travaux-paris',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels diagnostics sont obligatoires avant des travaux à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour un appartement construit avant 1997, un diagnostic amiante avant travaux (DAAT) est obligatoire. Pour les biens construits avant 1949, un diagnostic plomb (CREP) est requis. Si des murs porteurs sont concernés, une note de calcul d\'un bureau d\'étude structure est fortement recommandée. Dans les immeubles parisiens classés ou situés en secteur sauvegardé, une consultation ABF (Architecte des Bâtiments de France) peut être nécessaire.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte un bilan avant travaux complet à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un diagnostic amiante avant travaux coûte entre 200 et 500 € selon la surface. Un diagnostic plomb se facture entre 150 et 300 €. Une étude de structure (mur porteur) coûte entre 400 et 1 000 €. Un audit énergétique complet (DPE + préconisations) représente entre 500 et 1 500 €. Ces dépenses sont rentabilisées dès le premier chantier en évitant les mauvaises surprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qu\'est-ce qu\'un audit énergétique et est-il obligatoire avant travaux à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L\'audit énergétique est une analyse complète de la performance thermique d\'un logement. Il est obligatoire depuis le 1er avril 2023 pour la vente des passoires thermiques (DPE F ou G) en maison individuelle. Pour les appartements en copropriété, il n\'est pas encore obligatoire à la vente, mais il conditionne l\'obtention de certaines aides à la rénovation (MaPrimeRénov\').',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Bilan avant travaux Paris – Diagnostic pré-rénovation | Espace Design Paris',
  description:
    'Guide du bilan avant travaux à Paris : diagnostics obligatoires (amiante, plomb, structure), coûts et étapes clés pour bien préparer votre rénovation. Devis gratuit.',
}

export default function BilanAvantTravauxParis() {
  const checks = [
    'Diagnostic amiante avant travaux (obligatoire avant 1997)',
    'Diagnostic plomb CREP (obligatoire avant 1949)',
    'Vérification de l\'état des canalisations encastrées',
    'Contrôle du tableau électrique et mise aux normes',
    'Détection d\'humidité et de ponts thermiques',
    'Étude de structure si mur porteur concerné',
  ]

  const faqs = schemaFAQ.mainEntity

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8A97E] text-sm font-semibold uppercase tracking-widest mb-4">
            Guide diagnostic
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Bilan avant travaux à Paris
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            L'audit pré-rénovation est la première étape d'un chantier réussi. Découvrez les
            diagnostics obligatoires et recommandés pour rénover sereinement à Paris.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">
            Pourquoi réaliser un bilan avant de rénover à Paris ?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            À Paris, la grande majorité du parc immobilier date du XIX<sup>e</sup> ou du début du
            XX<sup>e</sup> siècle. Ces appartements présentent des spécificités que seul un
            diagnostic professionnel permet de révéler : présence d'amiante dans les joints de
            carrelage ou les dalles de sol, peintures au plomb sur les boiseries, canalisations en
            plomb ou en zinc à bout de vie, planchers fragilisés ou murs porteurs dissimulés dans
            une cloison apparemment banale. Engager des travaux sans ce bilan préalable expose le
            propriétaire à des surcoûts imprévus, des arrêts de chantier et parfois des risques
            sanitaires graves pour les occupants et les artisans.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Espace Design Paris propose une visite de diagnostic complète avant chaque projet de
            rénovation. Nos experts évaluent l'état général du logement, identifient les
            contraintes techniques et réglementaires, et vous remettent un rapport synthétique
            servant de base au cahier des charges. Cette démarche préventive évite les mauvaises
            surprises en cours de chantier et vous permet d'obtenir des devis d'artisans vraiment
            comparables, établis sur une base commune fiable.
          </p>

          {/* Price table */}
          <h3 className="text-xl font-bold text-[#1C1C1C] mb-4">
            Coût des principaux diagnostics à Paris
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-[#1C1C1C] text-white">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Diagnostic</th>
                  <th className="py-3 px-4 text-center font-semibold">Obligatoire</th>
                  <th className="py-3 px-4 text-right font-semibold">Coût indicatif</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Amiante avant travaux (DAAT)', 'Oui (avant 1997)', '200 – 500 €'],
                  ['Plomb (CREP)', 'Oui (avant 1949)', '150 – 300 €'],
                  ['DPE (performance énergétique)', 'Vente / location', '100 – 200 €'],
                  ['Audit énergétique', 'DPE F ou G (maison)', '500 – 1 500 €'],
                  ['Étude de structure', 'Recommandé', '400 – 1 000 €'],
                  ['Inspection canalisations (caméra)', 'Recommandé', '200 – 600 €'],
                ].map(([d, o, c]) => (
                  <tr key={d} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700">{d}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{o}</td>
                    <td className="py-3 px-4 text-right font-medium text-[#1C1C1C]">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Checklist */}
          <h3 className="text-xl font-bold text-[#1C1C1C] mb-4">
            Les 6 points d'un bilan complet
          </h3>
          <ul className="space-y-3 mb-10">
            {checks.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="text-[#C8A97E] mt-0.5 shrink-0" size={20} />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          {/* FAQ */}
          <h3 className="text-xl font-bold text-[#1C1C1C] mb-6">Questions fréquentes</h3>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.name} className="border-l-4 border-[#C8A97E] pl-4">
                <p className="font-semibold text-[#1C1C1C] mb-2">{faq.name}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Planifiez votre visite de diagnostic gratuite
          </h2>
          <p className="text-gray-300 mb-8">
            Espace Design Paris réalise une visite technique de votre appartement avant tout
            devis. Un prérequis indispensable pour un projet sans surprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C8A97E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b8976b] transition-colors"
            >
              Prendre rendez-vous <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+33611783867"
              className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1C1C1C] transition-colors"
            >
              <Phone size={18} /> 06 11 78 38 67
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
