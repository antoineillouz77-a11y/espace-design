import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation colocation Paris', item: 'https://espacedesignparis.fr/blog/renovation-colocation-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation colocation Paris : aménager et optimiser un appartement en coloc 2025",
  description: "Aménager un appartement en colocation à Paris : création de chambres indépendantes, SDB partagée, espaces communs optimisés. Budget T3 et T4, conseils d'artisans.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-colocation-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour aménager un appartement en colocation à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'L\'aménagement d\'une colocation à Paris coûte entre 8 000 et 18 000 € pour un T3, et entre 12 000 et 25 000 € pour un T4. La création d\'une chambre supplémentaire par cloison coûte entre 5 000 et 12 000 € selon les travaux de plomberie et d\'électricité nécessaires.' },
    },
    {
      '@type': 'Question',
      name: 'Est-il possible de créer une chambre supplémentaire dans un appartement parisien ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, en posant des cloisons légères (placo) ou en réorganisant le plan. La chambre doit faire au moins 9 m² et disposer d\'une fenêtre pour être considérée comme chambre habitable. Un permis de construire n\'est généralement pas nécessaire pour des cloisons intérieures.' },
    },
    {
      '@type': 'Question',
      name: 'Quels aménagements sont indispensables pour une colocation bien conçue ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Les éléments clés d\'une bonne colocation sont : des chambres avec serrure individuelle, une ou deux salles de bain selon le nombre de colocataires, une cuisine équipée avec rangements suffisants, et des espaces communs (salon) conviviaux mais neutres. Le bruit entre les chambres doit aussi être traité.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Colocation Paris — Aménagement T3 & T4 | Espace Design',
  description: "Aménager appartement en colocation Paris : T3 8-18k€, T4 12-25k€, création chambre 5-12k€. Chambres indépendantes, SDB partagée, espaces communs. Devis gratuit.",
}

export default function RenovationColocationParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation colocation Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Transformez votre appartement parisien en colocation rentable : chambres indépendantes, salle de bain partagée optimisée et espaces communs bien conçus.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi convertir son appartement en colocation à Paris ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">La colocation est l'un des marchés locatifs les plus dynamiques à Paris, portée par la demande des étudiants, jeunes actifs et travailleurs en mobilité. Un appartement T3 ou T4 bien aménagé pour la colocation peut générer 30 à 50 % de revenus locatifs supplémentaires par rapport à une location classique, grâce à la mutualisation des loyers entre colocataires.</p>
          <p className="text-gray-600 leading-relaxed mb-4">L'enjeu d'une rénovation colocation réussie est de créer des espaces privés suffisamment indépendants (chambre avec serrure, espace de rangement) tout en soignant les parties communes qui valorisent l'ensemble. Notre équipe maîtrise les contraintes spécifiques aux appartements parisiens : hauteur sous plafond, murs porteurs, réseaux électriques et de plomberie à redistribuer.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations aménagement colocation Paris</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Étude de faisabilité et plan d\'optimisation',
              'Création de cloisons et nouvelles chambres',
              'Installation de serrures individuelles',
              'Rénovation salle(s) de bain partagée(s)',
              'Cuisine équipée avec rangements dédiés par coloc',
              'Mise aux normes électrique multi-chambres',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Tarifs Paris 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Prestation</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Aménagement colocation T3', '8 000 – 18 000 €'],
                  ['Aménagement colocation T4', '12 000 – 25 000 €'],
                  ['Création chambre supplémentaire', '5 000 – 12 000 €'],
                  ['Rénovation SDB partagée complète', '4 000 – 9 000 €'],
                ].map(([label, price]) => (
                  <tr key={label} className="border-b border-gray-100"><td className="p-3 text-gray-600">{label}</td><td className="p-3 text-right font-medium">{price}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">FAQ</h2>
          <div className="space-y-4">
            {schemaFAQ.mainEntity.map((faq) => (
              <div key={faq.name} className="border border-gray-200 rounded p-4">
                <p className="font-semibold text-[#1C1C1C] mb-2">{faq.name}</p>
                <p className="text-sm text-gray-600">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Voir aussi</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/renovation-appartement-paris', label: 'Rénovation Paris' },
              { href: '/blog', label: 'Tous les articles' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Paris</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
