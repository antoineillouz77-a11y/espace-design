import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement 70m2 Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-70m2-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement 70m2 Paris : prix et conseils 2025",
  description: "Prix et conseils pour rénover un T3 de 70m2 à Paris. Budget détaillé par niveau de prestation, postes de travaux et délais estimés par Espace Design.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-70m2-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget prévoir pour rénover un T3 de 70m2 à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour un T3 de 70m2 à Paris, prévoyez entre 18 000 et 28 000 € pour un rafraîchissement, de 28 000 à 55 000 € pour une rénovation partielle, de 55 000 à 95 000 € pour une rénovation complète tous corps de métier, et de 95 000 à 140 000 € pour un projet haut de gamme avec matériaux et finitions premium.' },
    },
    {
      '@type': 'Question',
      name: 'Quels travaux sont prioritaires dans un 70m2 parisien ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dans un appartement parisien de 70m2, les travaux prioritaires sont souvent la mise aux normes électrique (tableau, câblage), la rénovation de la salle de bain et de la cuisine, ainsi que l\'isolation phonique des cloisons. La remise à neuf des sols et une peinture générale transforment visuellement l\'ensemble à moindre coût.' },
    },
    {
      '@type': 'Question',
      name: 'Peut-on bénéficier d\'aides pour la rénovation d\'un 70m2 à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, plusieurs aides sont disponibles : MaPrimeRénov\' pour les travaux d\'isolation ou de chauffage, l\'éco-PTZ pour financer les rénovations énergétiques sans intérêts, et les aides de la Ville de Paris. Espace Design vous aide à identifier les dispositifs auxquels vous êtes éligible.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement 70m2 Paris : prix 2025 | Espace Design',
  description: "Prix et conseils pour rénover un T3 de 70m2 à Paris. Budget détaillé par niveau de prestation, postes de travaux et délais estimés par Espace Design.",
}

export default function RenovationAppartement70m2Paris() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement 70m2 Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">T3 de 70m2 à Paris : tous les prix, postes de travaux et conseils pour une rénovation maîtrisée en 2025.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover un T3 de 70m2 à Paris : les spécificités parisiennes</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Un appartement de 70m2 à Paris offre une configuration typique de T3 avec deux chambres, un séjour, une cuisine et une salle de bain. C'est à cette surface que les propriétaires envisagent le plus souvent une restructuration complète : décloisonnement, création d'une suite parentale, réaménagement de la cuisine en open space. Ces interventions nécessitent des études préalables et parfois l'accord de la copropriété ou un dépôt de déclaration préalable de travaux.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Les appartements haussmanniens ou de l'après-guerre présentent souvent des planchers en bois anciens à rénover, des hauteurs sous plafond avantageuses exploitables par des mezzanines ou des rangements sur mesure, et des installations électriques datées nécessitant une mise aux normes complète. Espace Design maîtrise l'ensemble de ces contraintes et coordonne chaque artisan pour livrer un chantier dans les délais.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Travaux courants dans un appartement de 70m2</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Décloisonnement et restructuration',
              'Réfection salle de bain et WC séparé',
              'Cuisine ouverte sur séjour',
              'Mise aux normes électrique complète',
              'Rénovation ou remplacement des sols',
              'Isolation thermique et phonique',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Budget rénovation 70m2 Paris 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Niveau de rénovation</th><th className="p-3 text-right">Budget total estimé</th></tr></thead>
              <tbody>
                {[
                  ['Rafraîchissement (peinture, sols, luminaires)', '18 000 – 28 000 €'],
                  ['Rénovation partielle (cuisine ou salle de bain)', '28 000 – 55 000 €'],
                  ['Rénovation complète (tous corps de métier)', '55 000 – 95 000 €'],
                  ['Rénovation haut de gamme (matériaux premium)', '95 000 – 140 000 €'],
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
