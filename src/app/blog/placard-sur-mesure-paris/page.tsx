import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Placard sur mesure Paris', item: 'https://espacedesignparis.fr/blog/placard-sur-mesure-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Placard sur mesure à Paris : fabrication, pose et tarifs 2025",
  description: "Tout savoir sur la fabrication et la pose de placards sur mesure à Paris. Matériaux, délais, prix au m² et conseils d'artisans qualifiés.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/placard-sur-mesure-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'un placard sur mesure au m² à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le tarif d\'un placard sur mesure à Paris varie entre 400 et 1 200 € par m² selon les matériaux (mélaminé, MDF laqué, bois massif) et la complexité de l\'aménagement intérieur. Un placard standard de 2 m² revient généralement entre 800 et 2 000 €, pose comprise.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le délai de fabrication d\'un placard sur mesure ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le délai moyen de fabrication et de pose d\'un placard sur mesure à Paris est de 2 à 3 semaines après validation des plans. Ce délai comprend la prise de mesures, la fabrication en atelier et la pose sur chantier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels matériaux sont recommandés pour un placard sur mesure à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour un placard sur mesure, nous recommandons le MDF laqué pour une finition haut de gamme, le mélaminé hydrofuge pour les pièces humides, ou le bois massif pour un rendu naturel et durable. Le choix dépend de l\'usage, du budget et du style de votre intérieur.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Placard sur mesure Paris — Fabrication & Pose | Espace Design',
  description: 'Fabrication et pose de placards sur mesure à Paris. Matériaux haut de gamme, optimisation d\'espace, devis gratuit sous 48h. Artisan qualifié, assurance décennale.',
}

export default function PlacardSurMesureParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Placard sur mesure à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Fabrication et pose de placards sur mesure par des artisans parisiens qualifiés. Optimisation de chaque espace, matériaux durables et finitions soignées.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi choisir un placard sur mesure à Paris ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Dans les appartements parisiens, chaque centimètre compte. Un placard sur mesure s'adapte parfaitement aux contraintes architecturales — poutres, murs en biais, alcôves — là où un meuble standard resterait inadapté. Nos menuisiers conçoivent chaque placard directement sur vos plans, en tenant compte de vos besoins de rangement et de votre style de décoration.</p>
          <p className="text-gray-600 leading-relaxed mb-4">De la prise de mesures à la pose finale, nous assurons l'intégralité du projet : conception assistée par ordinateur, fabrication en atelier parisien, et installation par nos équipes. Le résultat est un espace de rangement parfaitement intégré, qui valorise votre bien immobilier et simplifie votre quotidien.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Les atouts de nos placards sur mesure</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Optimisation maximale des espaces atypiques',
              'Matériaux haut de gamme (MDF laqué, bois massif, mélaminé)',
              'Délai de fabrication et pose : 2 à 3 semaines',
              'Devis établi sur plans ou sur visite',
              'Portes battantes, coulissantes ou pliantes',
              'Aménagement intérieur sur mesure (tiroirs, étagères, tringles)',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix placard sur mesure Paris 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Prestation</th><th className="p-3 text-right">Tarif indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Placard mélaminé standard (pose comprise)', 'à partir de 400 €/m²'],
                  ['Placard MDF laqué mat ou brillant', '700 – 1 000 €/m²'],
                  ['Placard bois massif ou placage', '900 – 1 200 €/m²'],
                  ['Aménagement intérieur sur mesure', '150 – 400 € selon options'],
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
