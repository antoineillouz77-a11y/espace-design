import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Saint-Lazare Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-saint-lazare-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Saint-Lazare Paris 8e 9e — Investissement locatif, standing",
  description: "Rénovation appartement à Saint-Lazare (Paris 8e/9e) : mise en location, investissement immobilier, finitions standing. Artisan qualifié. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-saint-lazare-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation d\'appartement à Saint-Lazare ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dans le secteur Saint-Lazare (8e/9e), une rénovation complète coûte entre 800 et 1 600 €/m². Pour un investissement locatif, une rénovation ciblée (salle de bain, cuisine, peinture) permettant de valoriser le bien pour la mise en location représente en moyenne 30 000 à 60 000 € pour un appartement de 50 à 70 m².' },
    },
    {
      '@type': 'Question',
      name: 'La rénovation est-elle rentable pour un investissement locatif à Saint-Lazare ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, le quartier Saint-Lazare présente une forte demande locative grâce à sa desserte exceptionnelle (gare, RER, lignes de métro). Une rénovation bien ciblée permet d\'augmenter le loyer de 15 à 30 % et de réduire les périodes de vacance locative. Le retour sur investissement est généralement atteint en 5 à 8 ans.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure une rénovation pour mise en location à Saint-Lazare ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Une rénovation orientée investissement locatif (rafraîchissement complet, nouvelle salle de bain et cuisine) prend de 4 à 8 semaines selon la superficie du bien. Espace Design optimise le planning pour minimiser la vacance locative et maximiser votre rendement.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Saint-Lazare Paris 8e 9e — Investissement locatif | Espace Design',
  description: 'Rénovation appartement à Saint-Lazare (Paris 8e/9e) : mise en location, investissement immobilier, finitions standing. Artisan qualifié. Devis gratuit sous 48h.',
}

export default function RenovationSaintLazarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Saint-Lazare — Paris 8e &amp; 9e</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Rénovation d'appartements à Saint-Lazare pour investissement locatif ou résidence principale. Finitions standing, délais maîtrisés. Devis sous 48h.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Saint-Lazare : un quartier d'affaires à fort potentiel locatif</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Le quartier Saint-Lazare, aux portes des 8e et 9e arrondissements, est un secteur d'affaires très prisé grâce à sa desserte unique : gare Saint-Lazare, RER E, lignes 3, 12, 13 et 14 du métro. Les appartements anciens y sont nombreux et constituent d'excellentes opportunités d'investissement locatif pour les propriétaires qui souhaitent valoriser leur bien par la rénovation.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design accompagne les investisseurs et propriétaires du secteur dans des projets de rénovation orientés rentabilité : choix des matériaux durables, finitions de standing pour justifier un loyer élevé, délais optimisés pour réduire la vacance locative. Notre équipe vous conseille sur les travaux à prioriser selon votre budget et votre objectif de rendement.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations à Saint-Lazare</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Rénovation appartement pour mise en location','Rafraîchissement complet peinture et sols','Rénovation salle de bain et cuisine','Mise aux normes électrique DPE','Isolation thermique pour amélioration DPE','Menuiseries double vitrage et volets'].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Saint-Lazare 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Rénovation légère pour location (au m²)', '300 – 600 €/m²'],
                  ['Rénovation salle de bain standing', '6 000 – 14 000 €'],
                  ['Rénovation cuisine équipée', '8 000 – 20 000 €'],
                  ['Rénovation complète appartement (au m²)', '800 – 1 600 €/m²'],
                ].map(([label, price]) => (
                  <tr key={label} className="border-b border-gray-100"><td className="p-3 text-gray-600">{label}</td><td className="p-3 text-right font-medium">{price}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">FAQ — Saint-Lazare</h2>
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
              { href: '/blog/renovation-appartement-haussmannien-paris', label: 'Appartement haussmannien' },
              { href: '/blog', label: 'Tous les articles' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Saint-Lazare</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
