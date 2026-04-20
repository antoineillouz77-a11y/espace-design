import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Charenton-le-Pont', item: 'https://espacedesignparis.fr/blog/renovation-appartement-charenton-le-pont' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Charenton-le-Pont (94) — Guide complet 2025",
  description: "Rénovez votre appartement à Charenton-le-Pont avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-charenton-le-pont' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour rénover un appartement à Charenton-le-Pont ?',
      acceptedAnswer: { '@type': 'Answer', text: "À Charenton-le-Pont, une rénovation complète coûte entre 800 et 1 400 €/m² en raison de la proximité avec Paris. Pour un appartement de 60 m², prévoyez entre 48 000 et 84 000 € selon l'état du bien et les matériaux choisis." },
    },
    {
      '@type': 'Question',
      name: 'Quels travaux réalisez-vous à Charenton-le-Pont ?',
      acceptedAnswer: { '@type': 'Answer', text: "Espace Design réalise à Charenton-le-Pont tous types de travaux de rénovation : cuisine, salle de bain, parquet, peinture, isolation, électricité, plomberie et cloisons." },
    },
    {
      '@type': 'Question',
      name: 'Comment obtenir un devis à Charenton-le-Pont ?',
      acceptedAnswer: { '@type': 'Answer', text: "Contactez-nous via le formulaire ou par téléphone. Nous proposons un devis gratuit sous 48h avec déplacement gratuit dans tout le Val-de-Marne (94)." },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Charenton-le-Pont (94) | Espace Design',
  description: "Rénovez votre appartement à Charenton-le-Pont avec Espace Design : cuisine, salle de bain, parquet, peinture. Devis gratuit sous 48h.",
}

export default function RenovationCharentonLePont() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Charenton-le-Pont</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Charenton-le-Pont, première commune du Val-de-Marne aux portes de Paris, offre un marché immobilier premium avec des biens souvent anciens à fort potentiel de rénovation. Espace Design transforme vos espaces avec élégance et précision.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénovation d'appartement à Charenton-le-Pont : une exigence de qualité</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Charenton-le-Pont (94220) jouit d'une position stratégique, limitrophe du 12e arrondissement de Paris et accessible en quelques minutes via le métro et le RER. Cette proximité exceptionnelle avec la capitale en fait l'une des villes les plus chères du département, où la rénovation de qualité est indispensable pour se démarquer sur un marché concurrentiel.</p>
          <p className="text-gray-600 leading-relaxed mb-6">Espace Design accompagne les propriétaires de Charenton-le-Pont dans leurs projets de transformation : rénovation haut de gamme de cuisines ouvertes, salles de bain design, parquet en bois massif et peintures soignées. Notre attention portée aux détails et notre respect des délais font de chaque chantier une réussite.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète ou partielle',
              'Cuisine et salle de bain sur mesure',
              'Parquet massif et stratifié',
              'Peinture et revêtements muraux',
              'Électricité et plomberie',
              'Devis gratuit sous 48h',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2"><CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-600">{p}</span></div>
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
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Charenton-le-Pont</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
