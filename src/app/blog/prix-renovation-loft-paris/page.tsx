import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Prix rénovation loft Paris', item: 'https://espacedesignparis.fr/blog/prix-renovation-loft-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Prix rénovation loft Paris : tarifs et conseils 2025",
  description: "Quel budget pour rénover un loft à Paris ? Tarifs au m2, postes de travaux spécifiques et conseils d'Espace Design pour transformer un espace brut en loft de caractère.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/prix-renovation-loft-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'un loft à Paris au m2 ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La rénovation d\'un loft à Paris varie de 800 à 1 200 €/m2 pour un aménagement basique (cloisonnement léger, électricité, sols), de 1 200 à 1 800 €/m2 pour une rénovation standard avec cuisine et salle de bain intégrées, de 1 800 à 3 000 €/m2 pour un loft haut de gamme (matériaux nobles, domotique), et plus de 3 000 €/m2 pour un projet prestige sur mesure.' },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les contraintes spécifiques à la rénovation d\'un loft parisien ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un loft parisien (ancien atelier, entrepôt ou local industriel) présente des défis spécifiques : changement de destination (déclaration préalable ou permis de construire), isolation thermique et acoustique renforcée, création de la plomberie et de l\'électricité ex nihilo, respect des règles de copropriété et du PLU parisien. Espace Design vous accompagne sur tous ces aspects administratifs et techniques.' },
    },
    {
      '@type': 'Question',
      name: 'Un loft brut est-il plus cher à rénover qu\'un appartement standard ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, un loft brut (espace non aménagé) est généralement plus coûteux à rénover qu\'un appartement standard, car tout est à créer : cloisonnement, plomberie, électricité, isolation. En revanche, la liberté architecturale est totale et la valeur patrimoniale d\'un loft rénové avec soin à Paris est très élevée. Comptez en moyenne 30 à 40 % de plus qu\'une rénovation d\'appartement de même surface.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Prix rénovation loft Paris : tarifs 2025 au m2 | Espace Design',
  description: "Quel budget pour rénover un loft à Paris ? Tarifs au m2, postes de travaux spécifiques et conseils d'Espace Design pour transformer un espace brut en loft de caractère.",
}

export default function PrixRenovationLoftParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Prix rénovation loft Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Loft brut ou semi-aménagé à Paris : tarifs au m2, postes de travaux et conseils pour réussir votre projet en 2025.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover un loft à Paris : un projet atypique et exigeant</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Le loft parisien est un bien à part : ancien atelier d'artiste, entrepôt reconverti, local commercial transformé en habitation. Ces espaces bruts, souvent dotés de volumes exceptionnels (hauteur sous plafond de 3,5 à 6 m, poutres apparentes, grandes verrières), nécessitent une approche technique et architecturale spécifique. Contrairement à un appartement standard, tout ou presque est à créer : les cloisons, la plomberie, le réseau électrique, l'isolation et parfois le chauffage.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Paris compte de nombreux lofts dans les arrondissements de l'Est (10e, 11e, 13e, 20e) et dans certains secteurs de banlieue proche comme Montreuil, Saint-Denis ou Pantin. La rénovation d'un loft est un investissement significatif, mais la valeur créée — tant patrimoniale que d'usage — est hors norme. Espace Design réalise ces projets avec le même soin qu'une rénovation haut de gamme classique.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Les postes de travaux spécifiques d'un loft</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Cloisonnement et création des pièces',
              'Création réseau plomberie complet',
              'Électricité et tableau général neuf',
              'Isolation thermique et acoustique renforcée',
              'Traitement et polissage des sols béton',
              'Verrières intérieures et garde-corps mezzanine',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Budget rénovation loft Paris 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Niveau de rénovation</th><th className="p-3 text-right">Budget total estimé</th></tr></thead>
              <tbody>
                {[
                  ['Aménagement basique (cloisonnement, électricité, sols)', '800 – 1 200 €/m²'],
                  ['Rénovation standard (cuisine, salle de bain intégrées)', '1 200 – 1 800 €/m²'],
                  ['Rénovation haut de gamme (matériaux nobles, domotique)', '1 800 – 3 000 €/m²'],
                  ['Rénovation prestige (architecte, finitions sur mesure)', '3 000 €/m² et plus'],
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
