import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement 150m2 Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-150m2-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement 150m2 Paris : prix et conseils 2025",
  description: "Prix pour rénover un grand appartement de 150m2 à Paris. Budget par niveau de prestation, postes de travaux et conseils Espace Design pour les projets d'envergure.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-150m2-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour rénover un appartement de 150m2 à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour un grand appartement de 150m2 à Paris, prévoyez entre 38 000 et 60 000 € pour un rafraîchissement, entre 60 000 et 120 000 € pour une rénovation partielle, entre 120 000 et 200 000 € pour une rénovation complète tous corps de métier, et 200 000 € ou plus pour un projet haut de gamme avec architecte d\'intérieur et matériaux premium.' },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un architecte pour rénover un 150m2 à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Au-delà de 150m2 de surface de plancher et pour tout projet de construction ou d\'extension, le recours à un architecte est obligatoire. Pour une rénovation intérieure sans modification de la surface, ce n\'est pas obligatoire mais fortement conseillé à cette surface. Espace Design travaille avec des architectes partenaires et peut assurer la coordination complète du projet.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps prend la rénovation d\'un 150m2 à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Une rénovation complète d\'un appartement de 150m2 à Paris nécessite entre 4 et 7 mois selon l\'ampleur des travaux, la complexité des aménagements et le nombre de corps de métier mobilisés. Une bonne planification en amont et une coordination rigoureuse du chantier sont essentielles pour tenir les délais.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement 150m2 Paris : prix 2025 | Espace Design',
  description: "Prix pour rénover un grand appartement de 150m2 à Paris. Budget par niveau de prestation, postes de travaux et conseils Espace Design pour les projets d'envergure.",
}

export default function RenovationAppartement150m2Paris() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement 150m2 Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Grand appartement parisien de 150m2 : budgets, postes de travaux et conseils pour un projet d'envergure réussi en 2025.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover un grand appartement de 150m2 à Paris : les enjeux</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Un appartement de 150m2 à Paris est un bien d'exception. Ces surfaces se trouvent principalement dans les immeubles haussmanniens des arrondissements centraux (1er, 4e, 6e, 7e, 8e, 16e, 17e) et dans des résidences des années 70 à 90 en proche banlieue Ouest. La rénovation d'un tel bien est un projet ambitieux qui nécessite une organisation sans faille, une maîtrise des corps de métier et souvent l'intervention d'un architecte d'intérieur pour optimiser les espaces.</p>
          <p className="text-gray-600 leading-relaxed mb-4">À 150m2, les projets les plus courants incluent la création de deux ou trois salles de bain, une cuisine professionnelle ouverte, une suite parentale avec dressing, ainsi qu'une réfection complète des installations électriques et de la plomberie. Espace Design pilote ces projets de A à Z, depuis le diagnostic initial jusqu'à la remise des clés, avec un interlocuteur unique tout au long du chantier.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Postes de travaux clés dans un 150m2 parisien</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Restructuration architecturale complète',
              'Deux ou trois salles de bain en marbre ou pierre',
              'Cuisine ouverte équipée sur mesure',
              'Suite parentale avec dressing intégré',
              'Domotique et éclairage architectural',
              'Parquet massif ou pierre naturelle au sol',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Budget rénovation 150m2 Paris 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Niveau de rénovation</th><th className="p-3 text-right">Budget total estimé</th></tr></thead>
              <tbody>
                {[
                  ['Rafraîchissement (peinture, sols, luminaires)', '38 000 – 60 000 €'],
                  ['Rénovation partielle (cuisine ou salles de bain)', '60 000 – 120 000 €'],
                  ['Rénovation complète (tous corps de métier)', '120 000 – 200 000 €'],
                  ['Rénovation prestige (architecte, matériaux haut de gamme)', '200 000 € et plus'],
                ].map(([label, price]) => (
                  <tr key={label} className="border-b border-gray-100"><td className="p-3 text-gray-600">{label}</td><td className="p-3 text-right font-medium">{price}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Questions fréquentes</h2>
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
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation Paris' },
              { href: '/blog/budget-renovation-paris-2025', label: 'Budget rénovation 2025' },
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
