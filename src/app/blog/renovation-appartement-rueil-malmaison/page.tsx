import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Rueil-Malmaison', item: 'https://espacedesignparis.fr/blog/renovation-appartement-rueil-malmaison' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Rueil-Malmaison (92) — Guide complet 2025",
  description: "Rénover un appartement à Rueil-Malmaison : prix au m², prestations haut de gamme, artisan qualifié. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-rueil-malmaison' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget prévoir pour rénover un appartement à Rueil-Malmaison ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le budget d\'une rénovation complète à Rueil-Malmaison se situe entre 1 200 et 1 700 € par m². Pour un appartement de 70 m², comptez entre 84 000 et 119 000 € selon le niveau de finition et l\'état initial du bien.' },
    },
    {
      '@type': 'Question',
      name: 'Pourquoi les prix sont-ils plus élevés à Rueil-Malmaison qu\'ailleurs en Île-de-France ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Rueil-Malmaison est l\'une des villes les plus résidentielles et les plus prisées des Hauts-de-Seine. La clientèle exige des finitions haut de gamme, des matériaux premium et des délais maîtrisés, ce qui se reflète dans les tarifs des artisans qualifiés.' },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'une salle de bain haut de gamme à Rueil-Malmaison ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Une salle de bain haut de gamme à Rueil-Malmaison coûte entre 9 000 et 16 000 €, marbre ou grand format inclus. Pour une salle de bain standard, prévoyez 7 000 à 11 000 € pose et fourniture comprises.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Rueil-Malmaison (92) — Prix & Artisans 2025 | Espace Design',
  description: 'Rénovation appartement à Rueil-Malmaison : prix au m², salle de bain haut de gamme, cuisine sur mesure. Artisan qualifié, devis gratuit sous 48h.',
}

export default function RenovationAppartementRueilMalmaison() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Rueil-Malmaison (92)</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Ville résidentielle haut de gamme des Hauts-de-Seine : prix, prestations et artisans qualifiés pour rénover votre appartement haussmannien ou récent.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover à Rueil-Malmaison : un marché exigeant</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Rueil-Malmaison est l&apos;une des communes les plus résidentielles des Hauts-de-Seine, avec un parc immobilier mixte alliant immeubles haussmanniens du centre-ville et résidences récentes dans les quartiers Plaine et Jonchère. Le niveau de vie élevé de la ville se reflète dans les exigences des propriétaires : finitions soignées, matériaux haut de gamme et délais maîtrisés.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Les appartements haussmanniens de Rueil-Malmaison présentent souvent de beaux volumes avec moulures, parquets anciens et grandes fenêtres — des éléments à mettre en valeur plutôt qu&apos;à supprimer. Nos artisans interviennent régulièrement dans le 92 et maîtrisent les contraintes propres aux copropriétés haut de gamme de la commune.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations haut de gamme à Rueil-Malmaison</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète clé en main',
              'Salle de bain marbre & grand format',
              'Cuisine sur mesure premium',
              'Parquet massif restauration & pose',
              'Moulures & enduits à la chaux',
              'Domotique & éclairage LED scénique',
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
                  ['Rénovation complète', '1 200 – 1 700 €/m²'],
                  ['Rénovation salle de bain haut de gamme', '9 000 – 16 000 €'],
                  ['Rénovation cuisine sur mesure', '11 000 – 18 000 €'],
                  ['Restauration parquet ancien', '40 – 80 €/m²'],
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
