import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement 80m2 Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-80m2-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement 80m2 Paris : prix et conseils 2025",
  description: "Combien coûte la rénovation d'un T3 ou T4 de 80m2 à Paris ? Budget détaillé, postes de travaux prioritaires et conseils d'Espace Design pour votre projet parisien.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-80m2-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le coût d\'une rénovation complète pour un 80m2 à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Une rénovation complète d\'un appartement de 80m2 à Paris coûte entre 65 000 et 110 000 €, tous corps de métier inclus (électricité, plomberie, carrelage, peinture, menuiserie). Pour des matériaux haut de gamme ou une architecture d\'intérieur signature, le budget peut atteindre 110 000 à 160 000 €.' },
    },
    {
      '@type': 'Question',
      name: 'Comment optimiser le budget de rénovation d\'un 80m2 parisien ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour optimiser votre budget sur un 80m2 parisien, priorisez les travaux structurants (électricité, plomberie, isolation) qui valorisent durablement le bien. Choisissez des matériaux intermédiaires de qualité pour les surfaces les plus visibles (parquet, carrelage salle de bain) et des solutions économiques pour les espaces secondaires. Espace Design vous aide à arbitrer chaque poste.' },
    },
    {
      '@type': 'Question',
      name: 'Faut-il quitter son logement pendant les travaux d\'un 80m2 ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour une rénovation complète d\'un 80m2, il est fortement recommandé de quitter le logement pendant la durée du chantier (8 à 14 semaines en moyenne). Certains travaux partiels (rénovation d\'une seule pièce) peuvent se faire en restant sur place, en accord avec notre équipe. Nous pouvons également phaser les travaux pour limiter l\'inconfort.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement 80m2 Paris : prix 2025 | Espace Design',
  description: "Combien coûte la rénovation d'un T3 ou T4 de 80m2 à Paris ? Budget détaillé, postes de travaux prioritaires et conseils d'Espace Design pour votre projet parisien.",
}

export default function RenovationAppartement80m2Paris() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement 80m2 Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">T3 ou T4 de 80m2 à Paris : budgets précis, postes de travaux et conseils pour planifier votre rénovation en 2025.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">80m2 à Paris : une rénovation à forte valeur ajoutée</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Un appartement de 80m2 à Paris constitue un bien de famille ou un investissement locatif premium. À cette surface, la rénovation est souvent motivée par un changement de destination (passage en location meublée, accueil d'une famille), la valorisation avant revente, ou simplement la mise au goût du jour d'un appartement vieillissant. La valeur créée par une rénovation de qualité à Paris est réelle : une rénovation complète bien exécutée peut augmenter la valeur du bien de 15 à 25 %.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design intervient sur tous les types d'appartements parisiens de 80m2 : haussmannien, années 70, immeuble moderne. Chaque projet fait l'objet d'un diagnostic complet en amont pour identifier les contraintes techniques (plomberie encastrée, plancher chauffant, amiante) et proposer les solutions les plus adaptées à votre budget.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Postes de travaux pour un appartement de 80m2</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Restructuration et décloisonnement',
              'Deux salles de bain ou salle de bain + salle d\'eau',
              'Cuisine équipée sur mesure',
              'Électricité complète avec domotique',
              'Parquet massif ou carrelage grand format',
              'Menuiserie intérieure et placards sur mesure',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Budget rénovation 80m2 Paris 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Niveau de rénovation</th><th className="p-3 text-right">Budget total estimé</th></tr></thead>
              <tbody>
                {[
                  ['Rafraîchissement (peinture, sols, luminaires)', '20 000 – 32 000 €'],
                  ['Rénovation partielle (cuisine ou salle de bain)', '32 000 – 65 000 €'],
                  ['Rénovation complète (tous corps de métier)', '65 000 – 110 000 €'],
                  ['Rénovation haut de gamme (matériaux premium)', '110 000 – 160 000 €'],
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
