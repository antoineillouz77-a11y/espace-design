import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Nettoyage chantier Paris', item: 'https://espacedesignparis.fr/blog/nettoyage-chantier-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Nettoyage de fin de chantier à Paris : tarifs et prestations 2025",
  description: "Nettoyage professionnel après rénovation à Paris : enlèvement déchets, dépoussiérage, nettoyage vitres et sols. Intervention rapide, devis gratuit.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/nettoyage-chantier-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'un nettoyage de fin de chantier à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le nettoyage d\'un studio coûte entre 300 et 600 €, un T2 entre 500 et 900 €, un T3 entre 700 et 1 300 €. Un nettoyage approfondi avec vitres et dégraissage profond représente environ 50 % de plus.' },
    },
    {
      '@type': 'Question',
      name: 'Que comprend un nettoyage de chantier professionnel ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le nettoyage de fin de chantier inclut l\'enlèvement des gravats résiduels, le dépoussiérage complet (sols, murs, plafonds), le nettoyage des vitres intérieures, le décapage des protections plastiques et la remise en état des sols pour leur livraison.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure un nettoyage de chantier ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un studio se nettoie en 3 à 5 heures, un T2 en une demi-journée, un T3 en une journée complète. Les chantiers avec gravats importants ou plâtre projeté nécessitent une équipe de 2 à 3 personnes.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Nettoyage Fin de Chantier Paris — Tarifs 2025 — Espace Design',
  description: 'Nettoyage professionnel après rénovation à Paris : dépoussiérage, vitres, enlèvement déchets. Studio dès 300 €. Devis gratuit sous 48h.',
}

export default function NettoyageChantierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Nettoyage de fin de chantier à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Après les travaux, un nettoyage professionnel remet votre logement en état de livraison : poussières, gravats, vitres, sols — on s&apos;occupe de tout.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi confier le nettoyage de chantier à des professionnels ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Un chantier de rénovation laisse invariablement des résidus difficiles à éliminer : poussière de plâtre incrustée dans les angles, mortier séché sur les vitres, copeaux de bois sur les parquets, films plastiques collés. Un nettoyage ménager classique ne suffit pas — il faut les bons équipements et les bons produits.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Notre équipe intervient à Paris et en petite couronne après tous types de travaux : rénovation complète, second œuvre, peinture, carrelage ou pose de parquet. Nous remettons votre bien en état de livraison ou de commercialisation en une journée.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Notre prestation nettoyage chantier</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Enlèvement gravats et déchets résiduels',
              'Dépoussiérage sols, murs et plafonds',
              'Nettoyage vitres intérieures',
              'Décapage protections plastiques et adhésifs',
              'Dégraissage cuisine et salle de bain',
              'Remise en état parquets et carrelages',
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
                  ['Nettoyage studio (jusqu\'à 30 m²)', '300 – 600 €'],
                  ['Nettoyage T2 (30 – 55 m²)', '500 – 900 €'],
                  ['Nettoyage T3 (55 – 80 m²)', '700 – 1 300 €'],
                  ['Nettoyage approfondi (supplément)', '+50 % environ'],
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
