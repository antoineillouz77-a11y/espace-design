import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation façade maison Paris', item: 'https://espacedesignparis.fr/blog/renovation-facade-maison-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation façade maison Paris : ravalement, peinture et isolation extérieure",
  description: "Tout savoir sur la rénovation de façade à Paris : ravalement enduit, peinture façade, isolation thermique par l'extérieur (ITE). Tarifs 2025 et conseils d'artisans.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-facade-maison-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'un ravalement de façade à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le prix d\'un ravalement de façade à Paris varie entre 40 et 80 €/m² pour un enduit traditionnel, et entre 20 et 40 €/m² pour une peinture façade. Le coût total dépend de l\'état de la façade, de son accessibilité et des finitions choisies.' },
    },
    {
      '@type': 'Question',
      name: 'L\'isolation thermique par l\'extérieur est-elle possible en immeuble parisien ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, l\'ITE est réalisable sur les maisons individuelles et certains immeubles parisiens. Elle coûte entre 100 et 200 €/m² posé. Des aides comme MaPrimeRénov\' peuvent financer une partie des travaux.' },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un permis pour rénover la façade d\'une maison à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Une déclaration préalable de travaux est généralement nécessaire pour tout changement d\'aspect extérieur à Paris. Dans les secteurs sauvegardés, l\'accord de l\'ABF (Architecte des Bâtiments de France) peut être requis.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Façade Maison Paris — Ravalement & ITE | Espace Design',
  description: "Rénovation façade maison Paris : ravalement enduit 40-80€/m², peinture façade 20-40€/m², isolation thermique extérieure 100-200€/m². Devis gratuit artisan qualifié.",
}

export default function RenovationFacadeMaisonParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation façade maison Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Ravalement d'enduit, peinture façade, isolation thermique par l'extérieur : guide complet des travaux de façade à Paris et tarifs 2025.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi rénover la façade de sa maison à Paris ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">La façade est la première impression que donne votre maison. À Paris, les conditions climatiques (humidité, pollution, variations thermiques) dégradent rapidement les enduits et peintures. Un ravalement régulier, toutes les 10 à 15 ans, est non seulement esthétique mais aussi indispensable pour protéger la structure du bâtiment contre les infiltrations d'eau.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Au-delà du simple entretien, la rénovation de façade est l'occasion d'améliorer les performances énergétiques de votre logement. L'isolation thermique par l'extérieur (ITE) permet de réduire jusqu'à 25 % les déperditions thermiques, d'éliminer les ponts thermiques et d'améliorer le confort de vos espaces intérieurs sans empiéter sur la surface habitable.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Les prestations incluses dans notre offre façade</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Diagnostic état des façades',
              'Ravalement enduit traditionnel ou projeté',
              'Peinture façade (minérale, silicone, acrylique)',
              'Isolation thermique par l\'extérieur (ITE)',
              'Traitement des fissures et joints',
              'Nettoyage haute pression et hydrofuge',
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
                  ['Ravalement enduit', '40 – 80 €/m²'],
                  ['Peinture façade', '20 – 40 €/m²'],
                  ['Isolation thermique par l\'extérieur (ITE)', '100 – 200 €/m²'],
                  ['Traitement fissures + hydrofuge', '15 – 35 €/m²'],
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
