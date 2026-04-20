import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Pose papier peint Paris',
      item: 'https://espacedesignparis.fr/blog/pose-papier-peint-paris',
    },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pose papier peint à Paris : tarifs, types et conseils professionnels 2025',
  description:
    "Tout savoir sur la pose de papier peint à Paris : types de revêtements, préparation des murs haussmanniens, prix au m² et conseils de pose professionnelle.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  datePublished: '2025-03-05',
  dateModified: '2025-06-01',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://espacedesignparis.fr/blog/pose-papier-peint-paris',
  },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte la pose de papier peint à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix de pose varie entre 15 et 45 €/m² selon le type de papier (intissé, vinyle, panoramique), la complexité du mur (angles, radiateurs, niches) et l'état du support. La préparation des murs (enduit, ponçage, primaire) est souvent facturée en supplément : comptez 20 à 40 €/m² pour un mur haussmannien en mauvais état.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment préparer les murs d'un appartement haussmannien avant la pose de papier peint ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les murs parisiens anciens présentent souvent des irrégularités, des fissures et des couches successives de peinture ou d'ancien papier. Il faut impérativement décoller l'ancien revêtement, reboucher les fissures à l'enduit, poncer, puis appliquer un primaire d'accrochage adapté. Cette préparation est essentielle pour que le papier adhère correctement et que le résultat soit parfait.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel type de papier peint choisir pour un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'intissé (non-tissé) est le standard actuel : il ne se dilate pas à l'humidité, se pose colle sur le mur (plus facile) et se retire à sec des années plus tard. Le vinyle lavable convient aux cuisines et salles de bain. Pour un effet prestige dans un salon haussmannien, les papiers panoramiques ou les toiles de Jouy font un retour très apprécié à Paris.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Pose papier peint Paris | Espace Design',
  description:
    "Pose de papier peint à Paris par artisan qualifié : intissé, panoramique, vinyle. Préparation murs haussmanniens incluse. Devis gratuit 48h. Espace Design.",
}

export default function PosePapierPeintParis() {
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
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">
          Blog Rénovation
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Pose papier peint à Paris
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Le papier peint fait son grand retour dans les intérieurs parisiens. Intissé moderne,
          panoramique grand format, toile de Jouy classique — notre équipe pose tous les types
          de revêtements avec une finition irréprochable.
        </p>
      </section>

      {/* Content */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Le papier peint, un classique parisien revisité
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Longtemps délaissé au profit de la peinture unie, le papier peint connaît un retour en
            force spectaculaire dans la décoration intérieure parisienne. Les nouvelles générations
            de revêtements muraux — intissés haute définition, papiers peints panoramiques à motifs
            botaniques, revêtements texturés imitant le lin ou le béton — offrent des possibilités
            esthétiques infinies tout en étant bien plus faciles à poser et à déposer que
            leurs ancêtres vinyliques.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Dans les appartements haussmanniens aux hauts plafonds, un papier panoramique sur un
            mur entier crée un effet spectaculaire. Dans les studios du 9e ou du 11e, un papier
            à motif géométrique sur un mur isolé suffit à transformer l&apos;ambiance. Chez Espace
            Design, nous vous conseillons sur le choix du motif et de la pose selon la configuration
            spécifique de votre appartement — volumes, luminosité, style existant.
          </p>

          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-4">
            Les étapes d&apos;une pose professionnelle
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            La réussite d&apos;une pose de papier peint repose à 70 % sur la préparation du
            support. Nos artisans commencent toujours par décaper l&apos;ancien revêtement,
            reboucher fissures et trous à l&apos;enduit de rebouchage, poncer pour obtenir une
            surface lisse, puis appliquer un primaire d&apos;accrochage adapté à la nature du mur
            (plâtre ancien, BA13, béton). Cette étape est particulièrement critique dans les
            immeubles parisiens du XIXe siècle dont les murs cumulent parfois plusieurs couches de
            revêtements.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            La pose elle-même requiert précision et expérience : aplomb rigoureux au laser pour le
            premier lé, raccords de motifs minutieux, gestion des angles et des obstacles (prises,
            interrupteurs, encadrements de portes). Nous utilisons des colles professionnelles
            adaptées à chaque type de papier — colle à l&apos;amidon pour les papiers délicats,
            colle universelle renforcée pour les intissés lourds, colle spéciale panoramique pour
            les grands formats. Le séchage est contrôlé pour éviter les bulles et décollements.
          </p>

          {/* Price table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="px-4 py-2 text-left font-medium">Prestation</th>
                  <th className="px-4 py-2 text-left font-medium">Prix indicatif</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { p: 'Préparation mur (décapage, enduit, primaire)', v: '20 – 40 €/m²' },
                  { p: 'Pose papier peint intissé standard', v: '15 – 25 €/m²' },
                  { p: 'Pose papier peint vinyle ou texturé', v: '20 – 35 €/m²' },
                  { p: 'Pose papier panoramique grand format', v: '35 – 60 €/m²' },
                  { p: 'Pose toile de Lin ou Grasscloth', v: '30 – 50 €/m²' },
                  { p: 'Dépose ancien papier peint', v: '8 – 20 €/m²' },
                ].map((r, i) => (
                  <tr key={r.p} className={i % 2 === 0 ? 'bg-[#FAFAF8]' : 'bg-white'}>
                    <td className="px-4 py-2 text-gray-700">{r.p}</td>
                    <td className="px-4 py-2 text-gray-600">{r.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Tous types de papiers peints',
              'Préparation mur incluse sur devis',
              'Raccords motifs parfaits',
              'Conseil couleur et style offert',
              'Travail au laser pour aplomb parfait',
              'Nettoyage chantier compris',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mt-6 mb-4">FAQ</h2>
          <div className="space-y-3">
            {schemaFAQ.mainEntity.map((faq) => (
              <div key={faq.name} className="border border-gray-200 rounded p-3">
                <p className="font-semibold text-[#1C1C1C] mb-1 text-sm">{faq.name}</p>
                <p className="text-xs text-gray-600">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">
          Habillons vos murs parisiens
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
          Devis gratuit sous 48h — artisan qualifié, assurance décennale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors"
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
