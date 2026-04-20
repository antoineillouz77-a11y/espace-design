import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Rénovation hors d'air hors d'eau", item: "https://espacedesignparis.fr/blog/renovation-appartement-hors-dair-eau" },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation hors d'air hors d'eau — Mise hors d'eau, charpente et couverture à Paris",
  description: "Comprendre la rénovation hors d'air hors d'eau : charpente, couverture, zinguerie, isolation toiture. Étapes essentielles avant les travaux intérieurs. Devis gratuit Espace Design.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-hors-dair-eau' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Qu'est-ce que la rénovation hors d'air hors d'eau ?",
      acceptedAnswer: { '@type': 'Answer', text: "La mise hors d'air hors d'eau désigne l'ensemble des travaux qui rendent un bâtiment étanche aux intempéries et à l'air extérieur : toiture, charpente, zinguerie, menuiseries extérieures. Ces travaux constituent le prérequis indispensable avant toute rénovation intérieure." },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix d'une toiture de 100 m² à Paris ?",
      acceptedAnswer: { '@type': 'Answer', text: "La réfection d'une toiture de 100 m² à Paris ou en Île-de-France coûte entre 15 000 et 35 000 €, selon la nature de la couverture (tuiles, ardoises, zinc), l'état de la charpente et l'accessibilité. L'isolation par l'extérieur (sarking) est facturée 30 à 70 €/m² en supplément." },
    },
    {
      '@type': 'Question',
      name: "Peut-on commencer les travaux intérieurs avant la mise hors d'eau ?",
      acceptedAnswer: { '@type': 'Answer', text: "Non. Commencer les travaux intérieurs (peinture, parquet, plâtrerie) avant la mise hors d'eau expose les matériaux aux infiltrations d'eau et d'air, entraînant des reprises coûteuses. La mise hors d'air hors d'eau est toujours la première phase d'une rénovation lourde." },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation hors d'air hors d'eau — Charpente et couverture Paris — Espace Design",
  description: "Comprendre la rénovation hors d'air hors d'eau : charpente, couverture, zinguerie, isolation toiture. Étapes essentielles avant les travaux intérieurs. Devis gratuit Espace Design.",
}

export default function RenovationHorsDairEau() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">{"Rénovation hors d'air hors d'eau à Paris"}</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">{"Charpente, couverture, zinguerie et isolation toiture : la mise hors d'eau est la première étape de toute rénovation lourde. Espace Design vous accompagne dès le départ."}</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">{"Hors d'air, hors d'eau : définition et enjeux"}</h2>
          <p className="text-gray-600 leading-relaxed mb-4">{"La phase « hors d'air hors d'eau » est le stade de la construction ou de la rénovation à partir duquel le bâtiment est protégé contre les infiltrations d'eau (pluie, neige) et les courants d'air extérieurs. Elle comprend la charpente, la couverture (tuiles, ardoises, zinc ou bac acier), les fenêtres de toit, les gouttières et la zinguerie."}</p>
          <p className="text-gray-600 leading-relaxed mb-4">{"Pour une rénovation lourde à Paris ou en Île-de-France, cette phase doit impérativement précéder tous les travaux intérieurs. Une infiltration non traitée peut ruiner une isolation neuve, faire gonfler un parquet ou décoller un enduit en quelques semaines. Espace Design coordonne ces travaux avec des charpentiers et couvreurs partenaires certifiés."}</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Les postes de la mise hors eau</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Charpente traditionnelle et fermette',
              'Couverture tuiles, ardoises ou zinc',
              'Zinguerie et évacuation des eaux',
              'Velux et fenêtres de toit',
              'Isolation toiture par sarking',
              'Étanchéité toiture-terrasse',
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
                  ['Toiture complète 100 m²', '15 000 – 35 000 €'],
                  ['Zinguerie (gouttières, noues)', '80 – 200 €/ml'],
                  ['Isolation toiture (sarking)', '30 – 70 €/m²'],
                  ['Velux ou fenêtre de toit', '800 – 2 500 € / unité'],
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
