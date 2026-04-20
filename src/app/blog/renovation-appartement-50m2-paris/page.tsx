import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement 50m2 Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-50m2-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement 50m2 Paris : prix et conseils 2025",
  description: "Quel budget prévoir pour rénover un T2 ou T3 de 50m2 à Paris ? Prix par poste, délais et conseils pratiques pour votre rénovation signée Espace Design.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-50m2-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget pour rénover un appartement de 50m2 à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour un T2 ou T3 de 50m2 à Paris, le budget varie de 12 000 à 20 000 € pour un rafraîchissement, de 20 000 à 40 000 € pour une rénovation partielle, de 40 000 à 70 000 € pour une rénovation complète, et de 70 000 à 100 000 € pour un projet haut de gamme avec matériaux premium.' },
    },
    {
      '@type': 'Question',
      name: 'Peut-on rénover un 50m2 parisien en restant sous 50 000 € ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, une rénovation complète d\'un 50m2 à Paris est réalisable entre 40 000 et 50 000 € en choisissant des matériaux intermédiaires et en optimisant la coordination des artisans. Espace Design propose des solutions clé-en-main adaptées à chaque budget, sans compromis sur la qualité.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure la rénovation d\'un 50m2 à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Une rénovation complète d\'un appartement de 50m2 à Paris dure entre 6 et 12 semaines selon la complexité des travaux. Un rafraîchissement simple (peinture, sols) se réalise en 2 à 3 semaines. La coordination des différents corps de métier est essentielle pour respecter les délais.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement 50m2 Paris : prix 2025 | Espace Design',
  description: "Quel budget prévoir pour rénover un T2 ou T3 de 50m2 à Paris ? Prix par poste, délais et conseils pratiques pour votre rénovation signée Espace Design.",
}

export default function RenovationAppartement50m2Paris() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement 50m2 Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">T2 ou T3 de 50m2 : budgets, postes de travaux et délais pour une rénovation réussie à Paris en 2025.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénovation d'un T2 ou T3 de 50m2 à Paris : les enjeux</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Un appartement de 50m2 représente la surface idéale pour une résidence principale en couple ou un investissement locatif à Paris. C'est également la superficie à partir de laquelle on peut envisager une redistribution des pièces, l'ouverture de la cuisine sur le séjour, ou l'optimisation d'une salle de bain souvent trop étroite dans les immeubles parisiens anciens.</p>
          <p className="text-gray-600 leading-relaxed mb-4">À cette surface, la rénovation implique généralement de coordonner plusieurs corps de métier simultanément : électricien, plombier, carreleur, menuisier, peintre. Espace Design assure la maîtrise d'ouvrage complète pour garantir un chantier fluide et des finitions irréprochables, dans le respect de votre budget et de vos délais.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Les travaux les plus courants dans un 50m2 parisien</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Ouverture cuisine sur séjour',
              'Réfection complète salle de bain',
              'Mise aux normes tableau électrique',
              'Pose parquet ou carrelage grand format',
              'Isolation phonique des cloisons',
              'Rénovation fenêtres et volets',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Budget rénovation 50m2 Paris 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Niveau de rénovation</th><th className="p-3 text-right">Budget total estimé</th></tr></thead>
              <tbody>
                {[
                  ['Rafraîchissement (peinture, sols, luminaires)', '12 000 – 20 000 €'],
                  ['Rénovation partielle (cuisine ou salle de bain)', '20 000 – 40 000 €'],
                  ['Rénovation complète (tous corps de métier)', '40 000 – 70 000 €'],
                  ['Rénovation haut de gamme (matériaux premium)', '70 000 – 100 000 €'],
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
