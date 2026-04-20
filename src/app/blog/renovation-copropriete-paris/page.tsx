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
      name: 'Rénovation en copropriété Paris',
      item: 'https://www.espacedesignparis.fr/blog/renovation-copropriete-paris',
    },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation en copropriété à Paris : règles, autorisations et conseils pratiques',
  description:
    'Tout ce qu\'il faut savoir avant de rénover dans une copropriété parisienne : règlement de copropriété, accord de l\'AG, parties communes vs privatives, déclaration de travaux.',
  author: { '@type': 'Organization', name: 'Espace Design Paris' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design Paris',
    logo: { '@type': 'ImageObject', url: 'https://www.espacedesignparis.fr/logo.png' },
  },
  datePublished: '2025-04-01',
  dateModified: '2025-04-01',
  mainEntityOfPage: 'https://www.espacedesignparis.fr/blog/renovation-copropriete-paris',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Faut-il l\'accord de la copropriété pour refaire son parquet à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour les travaux strictement intérieurs sans modification de structure (remplacement de revêtements de sol, peinture, cuisine), l\'accord de la copropriété n\'est généralement pas requis. En revanche, le règlement de copropriété peut imposer un isolant phonique sous parquet flotant. Vérifiez toujours le règlement avant de commencer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels travaux nécessitent un vote en assemblée générale de copropriété ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tout ce qui touche aux parties communes ou à l\'aspect extérieur de l\'immeuble requiert un vote en AG : ouverture d\'une fenêtre en façade, création d\'un Velux, modification de la cage d\'escalier, branchement sur la colonne montante de plomberie, ou pose d\'une climatisation visible depuis la rue.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment informer le syndic avant des travaux de rénovation à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Envoyez une lettre recommandée avec AR au syndic décrivant la nature des travaux, les dates et le nom de l\'entreprise. Certains règlements imposent un chèque de caution pour les travaux lourds. Le syndic peut exiger que les travaux se déroulent uniquement du lundi au vendredi, de 8h à 18h.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation en copropriété Paris – Autorisations & Conseils | Espace Design Paris',
  description:
    'Guide complet pour rénover votre appartement en copropriété à Paris : règles à respecter, autorisations AG, déclarations et travaux sans contrainte. Devis gratuit.',
}

export default function RenovationCopropriete() {
  const checks = [
    'Consulter le règlement de copropriété avant tout projet',
    'Identifier les parties communes et les parties privatives concernées',
    'Informer le syndic par lettre recommandée avec AR',
    'Prévoir un vote en AG si l\'aspect extérieur est modifié',
    'Respecter les horaires de chantier imposés par l\'immeuble',
    'Souscrire une assurance dommages-ouvrage avant les gros travaux',
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
            Guide copropriété
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Rénover en copropriété à Paris
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Règles à respecter, autorisations à obtenir et conseils pratiques pour mener vos
            travaux sereinement dans un immeuble parisien.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">
            Comprendre les règles de la copropriété parisienne
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Paris compte plus de 80 000 immeubles en copropriété. Chaque copropriété possède un
            règlement qui définit précisément ce que chaque copropriétaire peut faire dans ses
            parties privatives et ce qui relève des parties communes. Avant d'engager quelque
            travaux que ce soit, la première étape est de relire attentivement ce document — souvent
            disponible auprès de votre notaire ou du syndic. Les immeubles haussmanniens imposent
            fréquemment des contraintes spécifiques : type de fenêtres autorisées, interdiction de
            poser certains revêtements sans sous-couche phonique, ou obligation de maintenir
            l'aspect des parquets d'origine.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Espace Design Paris travaille régulièrement dans des immeubles sous gestion syndic en
            Île-de-France. Nous vous aidons à constituer votre dossier de demande d'autorisation,
            à rédiger le courrier au syndic et à planifier le chantier en respectant les contraintes
            horaires et d'accès aux parties communes (monte-charge, cage d'escalier). Cette
            anticipation évite les blocages de dernière minute et les litiges avec le voisinage.
          </p>

          {/* Table travaux */}
          <h3 className="text-xl font-bold text-[#1C1C1C] mb-4">
            Travaux libres vs travaux soumis à autorisation
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-[#1C1C1C] text-white">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Type de travaux</th>
                  <th className="py-3 px-4 text-center font-semibold">Autorisation requise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Peinture intérieure, sols, cuisine', 'Non (vérifier règlement)'],
                  ['Remplacement fenêtres (même modèle)', 'Information syndic recommandée'],
                  ['Ouverture d\'une fenêtre en façade', 'Vote AG (majorité art. 25)'],
                  ['Abattement de cloison non porteuse', 'Non (si 100 % privatif)'],
                  ['Mur porteur / modification structure', 'Vote AG + étude structure'],
                  ['Climatisation visible depuis la rue', 'Vote AG + autorisation mairie'],
                  ['Travaux en parties communes', 'Vote AG obligatoire'],
                ].map(([label, auth]) => (
                  <tr key={label} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700">{label}</td>
                    <td className="py-3 px-4 text-center text-[#1C1C1C] font-medium">{auth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Checklist */}
          <h3 className="text-xl font-bold text-[#1C1C1C] mb-4">
            Checklist avant de démarrer vos travaux
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
            Un projet en copropriété à Paris ?
          </h2>
          <p className="text-gray-300 mb-8">
            Espace Design Paris vous accompagne de A à Z : constitution du dossier syndic,
            coordination du chantier et respect des règles de l'immeuble.
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
