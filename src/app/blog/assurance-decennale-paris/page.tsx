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
      name: 'Assurance décennale Paris',
      item: 'https://www.espacedesignparis.fr/blog/assurance-decennale-paris',
    },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Assurance décennale à Paris : ce que vous devez savoir avant vos travaux',
  description:
    'Tout comprendre sur l\'assurance décennale obligatoire pour les travaux de rénovation à Paris : définition, durée, travaux couverts, comment vérifier l\'attestation de votre artisan.',
  author: { '@type': 'Organization', name: 'Espace Design Paris' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design Paris',
    logo: { '@type': 'ImageObject', url: 'https://www.espacedesignparis.fr/logo.png' },
  },
  datePublished: '2025-04-01',
  dateModified: '2025-04-01',
  mainEntityOfPage: 'https://www.espacedesignparis.fr/blog/assurance-decennale-paris',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels travaux sont couverts par l\'assurance décennale à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L\'assurance décennale couvre les dommages qui compromettent la solidité de l\'ouvrage ou le rendent impropre à sa destination pendant 10 ans après réception. Elle s\'applique aux gros oeuvres (structure, toiture, fondations), aux travaux d\'étanchéité, à la plomberie encastrée, à l\'électricité et aux cloisons porteuses. Elle ne couvre pas les dommages esthétiques mineurs ni l\'usure normale.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment vérifier l\'attestation décennale d\'un artisan parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Demandez l\'attestation d\'assurance décennale en cours de validité avant toute signature de devis. Vérifiez que la date d\'effet et la date d\'expiration encadrent bien la période des travaux, que les activités couvertes correspondent aux travaux prévus, et que le numéro SIRET de l\'artisan correspond à celui du devis. En cas de doute, contactez directement l\'assureur pour confirmation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dois-je souscrire une assurance dommages-ouvrage avant mes travaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La dommages-ouvrage (DO) est obligatoire pour le maître d\'ouvrage (vous, le propriétaire) dès que des travaux importants sont réalisés. Elle permet une indemnisation rapide sans attendre une décision de justice en cas de sinistre décennal. À Paris, son coût représente généralement 1 à 3 % du montant des travaux. Sans DO, vous ne pourrez pas vendre votre bien sans en informer l\'acquéreur.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Assurance décennale Paris – Guide 2025 pour propriétaires | Espace Design Paris',
  description:
    'Comprendre l\'assurance décennale obligatoire pour vos travaux à Paris : travaux couverts, vérification attestation, dommages-ouvrage. Guide clair et pratique.',
}

export default function AssuranceDecennaleParis() {
  const checks = [
    'Exiger l\'attestation décennale avant de signer le devis',
    'Vérifier que les activités couvertes correspondent aux travaux',
    'Contrôler que l\'attestation est en cours de validité pendant les travaux',
    'Souscrire une assurance dommages-ouvrage pour les gros travaux',
    'Conserver l\'attestation pendant 10 ans après réception des travaux',
    'En cas de sinistre, déclarer dans les 5 jours ouvrés',
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
            Guide assurances
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Assurance décennale à Paris
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprendre cette garantie obligatoire, savoir la vérifier chez votre artisan et vous
            protéger en tant que propriétaire parisien.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">
            Qu'est-ce que l'assurance décennale et pourquoi est-elle obligatoire ?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Issue de la loi Spinetta du 4 janvier 1978, l'assurance décennale (ou garantie
            décennale) oblige tout constructeur, artisan ou entreprise de bâtiment à garantir les
            travaux qu'il réalise pendant 10 ans après leur réception. En cas de désordre grave —
            fissures dans un mur porteur, infiltration d'eau par la toiture, effondrement d'un
            plancher — c'est l'assurance décennale de l'artisan qui prend en charge les
            réparations. À Paris, où les immeubles anciens présentent souvent des fragilités
            structurelles, cette garantie est particulièrement précieuse.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            En tant que maître d'ouvrage (le propriétaire qui commande les travaux), vous devez
            également souscrire une assurance dommages-ouvrage (DO) avant l'ouverture du chantier
            dès lors que les travaux sont importants. Contrairement à l'assurance décennale qui
            engage la responsabilité de l'artisan, la DO vous permet d'être indemnisé rapidement —
            en général sous 90 jours — sans avoir à prouver la faute de qui que ce soit. Sans
            cette assurance, la revente de votre bien parisien peut être compliquée, le notaire
            étant tenu d'informer l'acheteur de son absence.
          </p>

          {/* Table */}
          <h3 className="text-xl font-bold text-[#1C1C1C] mb-4">
            Garanties légales en construction : récapitulatif
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-[#1C1C1C] text-white">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Garantie</th>
                  <th className="py-3 px-4 text-center font-semibold">Durée</th>
                  <th className="py-3 px-4 text-left font-semibold">Ce qu'elle couvre</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Parfait achèvement', '1 an', 'Tous défauts signalés à la réception'],
                  ['Bon fonctionnement', '2 ans', 'Équipements dissociables (robinets, volets)'],
                  ['Décennale', '10 ans', 'Solidité, impropriété à destination'],
                  ['Dommages-ouvrage', '10 ans', 'Préfinancement rapide des sinistres décennaux'],
                ].map(([g, d, c]) => (
                  <tr key={g} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-[#1C1C1C]">{g}</td>
                    <td className="py-3 px-4 text-center text-gray-700">{d}</td>
                    <td className="py-3 px-4 text-gray-700">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Checklist */}
          <h3 className="text-xl font-bold text-[#1C1C1C] mb-4">
            Checklist assurance avant de signer
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
            Travaillez avec une entreprise assurée et certifiée
          </h2>
          <p className="text-gray-300 mb-8">
            Espace Design Paris fournit systématiquement l'attestation décennale à chaque devis.
            Transparence totale, zéro surprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C8A97E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b8976b] transition-colors"
            >
              Devis gratuit <ArrowRight size={18} />
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
