import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Créteil', item: 'https://espacedesignparis.fr/blog/renovation-appartement-creteil' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Créteil (94) — Guide complet 2025",
  description: "Rénover son appartement à Créteil : tarifs 2025, artisans expérimentés, démarches administratives et conseils pour valoriser votre bien dans le Val-de-Marne.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-creteil' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget prévoir pour rénover un appartement à Créteil ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Créteil, une rénovation complète coûte entre 1 000 et 1 500 €/m². Pour un appartement de 60 m², le budget global se situe entre 60 000 et 90 000 €, peinture, salle de bain et cuisine comprises.' },
    },
    {
      '@type': 'Question',
      name: 'Les immeubles des années 1970 à Créteil posent-ils des problèmes spécifiques ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, les copropriétés de cette époque peuvent présenter des problèmes d\'amiante, d\'isolation insuffisante et de réseaux vieillissants. Un diagnostic avant travaux est indispensable pour chiffrer précisément votre projet et éviter les surcoûts.' },
    },
    {
      '@type': 'Question',
      name: 'Peut-on modifier la disposition des pièces dans un appartement à Créteil ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, sous réserve de respecter les règles de copropriété et les normes structurelles. La suppression d\'une cloison non porteuse ne nécessite pas d\'autorisation. En revanche, toucher à une paroi porteuse ou modifier des réseaux communs requiert l\'accord du syndic.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Créteil (94) — Prix & Artisans 2025 | Espace Design',
  description: 'Rénover son appartement à Créteil : tarifs 2025, artisans expérimentés, démarches administratives et conseils pour valoriser votre bien dans le Val-de-Marne.',
}

export default function RenovationCreteil() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Créteil (94)</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Préfecture du Val-de-Marne, Créteil dispose d'un parc immobilier diversifié allant des tours emblématiques aux pavillons. Nos artisans interviennent sur tous types de biens pour des rénovations soignées et durables.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover à Créteil : un investissement rentable</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Créteil offre un excellent rapport qualité-prix pour les acquéreurs souhaitant rénover. La préfecture du Val-de-Marne bénéficie de bonnes dessertes en transports (RER D, métro ligne 8), de commerces de proximité et d'infrastructures scolaires et hospitalières de qualité. Les prix immobiliers restent accessibles par rapport à Paris intra-muros, ce qui rend les opérations de rénovation particulièrement attractives pour les investisseurs comme pour les primo-accédants.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Le parc immobilier de Créteil est mixte : on y trouve des immeubles modernes issus des années 1960-1980 (notamment dans le secteur des Bleuets et du lac) et des bâtiments plus anciens nécessitant une remise à niveau complète. Espace Design adapte ses méthodes à chaque contexte, avec une attention particulière aux contraintes de copropriété.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations de rénovation à Créteil</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète tous corps d\'état',
              'Désamiantage et diagnostic préalable',
              'Réfection salle de bain',
              'Cuisine sur mesure',
              'Peinture et décoration intérieure',
              'Mise aux normes électriques (NF C 15-100)',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Créteil 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Rénovation complète', '1 000 – 1 500 €/m²'],
                  ['Salle de bain', '7 000 – 13 000 €'],
                  ['Cuisine', '9 000 – 15 000 €'],
                  ['Peinture intérieure', '40 – 65 €/m²'],
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
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation' },
              { href: '/blog', label: 'Tous les articles' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Créteil</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
