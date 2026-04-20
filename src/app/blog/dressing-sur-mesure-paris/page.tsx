import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Dressing sur mesure Paris', item: 'https://espacedesignparis.fr/blog/dressing-sur-mesure-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Dressing sur mesure à Paris : aménagement, prix et délais 2025",
  description: "Aménagement de dressing sur mesure à Paris. Conception 3D, paroi vitrée, éclairage LED, dressing d'angle. Devis gratuit par un artisan qualifié.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/dressing-sur-mesure-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'un dressing sur mesure à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix d\'un dressing sur mesure à Paris varie entre 1 500 et 6 000 € selon la surface, les matériaux et les équipements (LED, tiroirs, paroi vitrée). Un dressing de 3 m² avec aménagement complet revient en moyenne entre 2 500 et 4 000 €, pose incluse.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle surface minimale faut-il pour un dressing ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un dressing accessible nécessite au minimum 1,5 m² de surface au sol, avec 60 cm de profondeur pour les penderies et un couloir de circulation d\'au moins 80 cm. Pour un dressing confortable avec espace de circulation, prévoir 3 à 4 m².',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le délai de pose d\'un dressing sur mesure à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le délai de réalisation d\'un dressing sur mesure est de 3 à 4 semaines en moyenne : 1 semaine pour la conception et validation des plans 3D, 2 semaines de fabrication en atelier, et 1 à 2 jours pour la pose sur chantier.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Dressing sur mesure Paris — Aménagement & Pose | Espace Design',
  description: 'Aménagement dressing sur mesure à Paris. Conception 3D, paroi vitrée, éclairage LED intégré, dressing d\'angle. Artisan qualifié, devis gratuit sous 48h.',
}

export default function DressingSurMesureParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Dressing sur mesure à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Conception et pose de dressings sur mesure par des artisans parisiens. Modélisation 3D, matériaux haut de gamme et éclairage LED intégré pour un rendu professionnel.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Un dressing conçu pour votre appartement parisien</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Un dressing sur mesure transforme une chambre ou un couloir en espace de rangement fonctionnel et esthétique. À Paris, où les configurations sont souvent atypiques — alcôves, combles, angles —, le sur mesure s'impose comme la solution la plus intelligente. Nos designers conçoivent votre dressing en 3D avant toute fabrication, vous permettant de visualiser le rendu final et d'ajuster chaque détail.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Qu'il s'agisse d'un dressing d'angle, d'un dressing avec paroi vitrée pour séparer une chambre, ou d'un aménagement intégré dans une niche, nos menuisiers maîtrisent toutes les configurations. Chaque élément est fabriqué en atelier puis installé sur mesure chez vous, avec une finition impeccable.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Ce que comprend notre prestation dressing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Conception 3D validée avant fabrication',
              'Dressing d\'angle et configurations atypiques',
              'Paroi vitrée pour séparation chambre/dressing',
              'Éclairage LED intégré (spots, bandeau, détecteur)',
              'Penderies, tiroirs, étagères sur mesure',
              'Finitions laquées, bois naturel ou stratifié',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix dressing sur mesure Paris 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Prestation</th><th className="p-3 text-right">Tarif indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Dressing simple (penderie + étagères, 2 m²)', '1 500 – 2 500 €'],
                  ['Dressing complet avec tiroirs et LED (3 m²)', '2 500 – 4 000 €'],
                  ['Dressing d\'angle ou configuration atypique', '3 000 – 5 500 €'],
                  ['Paroi vitrée coulissante (séparation chambre)', '800 – 2 000 €'],
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
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation Paris' },
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
