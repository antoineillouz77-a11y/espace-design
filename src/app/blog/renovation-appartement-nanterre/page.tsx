import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Nanterre', item: 'https://espacedesignparis.fr/blog/renovation-appartement-nanterre' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Nanterre (92) — Guide complet 2025",
  description: "Rénover son appartement à Nanterre : prix au m², artisans qualifiés Hauts-de-Seine, démarches et conseils pour valoriser votre bien à deux pas de La Défense.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-nanterre' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le tarif moyen d\'une rénovation à Nanterre ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Nanterre, les prix pour une rénovation complète oscillent entre 1 100 et 1 600 €/m². La proximité de La Défense et la demande soutenue des cadres font de Nanterre un marché où la rénovation se valorise rapidement.' },
    },
    {
      '@type': 'Question',
      name: 'Quels types de logements trouve-t-on à Nanterre ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nanterre propose une offre variée : résidences étudiantes et appartements modernes côté université Paris-Nanterre, copropriétés des années 1960-1980 en centre-ville, et quelques immeubles plus anciens nécessitant une rénovation complète.' },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un maître d\'oeuvre pour rénover à Nanterre ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour une rénovation partielle (salle de bain, cuisine), un artisan qualifié suffit. Pour une rénovation complète impliquant plusieurs corps de métier, faire appel à un maître d\'oeuvre ou une entreprise générale comme Espace Design garantit la coordination et le respect des délais.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Nanterre (92) — Prix & Artisans 2025 | Espace Design',
  description: 'Rénover son appartement à Nanterre : prix au m², artisans qualifiés Hauts-de-Seine, démarches et conseils pour valoriser votre bien à deux pas de La Défense.',
}

export default function RenovationNanterre() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Nanterre (92)</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">À deux pas de La Défense et de l'université, Nanterre est une ville en fort développement. Nos experts en rénovation vous accompagnent pour sublimer votre appartement dans les Hauts-de-Seine.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Nanterre, entre La Défense et l'université</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Nanterre occupe une position stratégique dans les Hauts-de-Seine : jouxtant le premier quartier d'affaires européen (La Défense) et accueillant l'une des plus grandes universités de France, la ville attire cadres, étudiants et jeunes familles. Le marché locatif y est particulièrement tendu, ce qui confère aux rénovations un excellent rendement. Les prix immobiliers à Nanterre restent inférieurs à ceux de Neuilly ou Levallois, créant une opportunité pour les acquéreurs qui misent sur la rénovation.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Le bâti nanterrien est divers : grands ensembles réhabilités, immeubles récents côté Seine, villas et pavillons dans les quartiers résidentiels. Espace Design maîtrise l'ensemble de ces contextes et propose des prestations adaptées à chaque budget, des travaux ciblés à la rénovation intégrale.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations de rénovation à Nanterre</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète clé en main',
              'Parquet massif et stratifié',
              'Salle de bain design',
              'Cuisine ouverte sur séjour',
              'Peinture décorative et enduits',
              'Isolation phonique et thermique',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Nanterre 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Rénovation complète', '1 100 – 1 600 €/m²'],
                  ['Salle de bain', '8 000 – 14 000 €'],
                  ['Cuisine', '10 000 – 16 000 €'],
                  ['Parquet (pose comprise)', '60 – 90 €/m²'],
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Nanterre</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
