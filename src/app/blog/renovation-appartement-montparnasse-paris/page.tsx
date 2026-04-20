import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Montparnasse Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-montparnasse-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Montparnasse Paris 14e 6e — Artisan haut de gamme, devis gratuit",
  description: "Rénovation appartement à Montparnasse (Paris 14e/6e) : salle de bain italienne, cuisine équipée, finitions haut de gamme. Artisan qualifié, devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-montparnasse-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation d\'appartement à Montparnasse ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Montparnasse, les projets de rénovation haut de gamme sont compris entre 900 et 1 800 €/m². Une rénovation complète avec salle de bain italienne et cuisine sur mesure pour un 60 m² se situe généralement entre 55 000 et 100 000 €.' },
    },
    {
      '@type': 'Question',
      name: 'Comment trouver un artisan de confiance à Montparnasse ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Privilégiez un artisan certifié RGE ou qualibat, disposant d\'une assurance décennale et d\'avis clients vérifiés. Espace Design intervient à Montparnasse avec une équipe expérimentée et des références disponibles sur demande.' },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la durée d\'un chantier de rénovation à Montparnasse ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un chantier de rénovation complète à Montparnasse dure en moyenne 8 à 14 semaines selon la superficie et les finitions souhaitées. Espace Design établit un planning précis dès la signature du devis.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Montparnasse Paris 14e 6e — Haut de gamme | Espace Design',
  description: 'Rénovation appartement à Montparnasse (Paris 14e/6e) : salle de bain italienne, cuisine équipée, finitions haut de gamme. Artisan qualifié, devis gratuit sous 48h.',
}

export default function RenovationMontparnassePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Montparnasse — Paris 14e &amp; 6e</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Rénovation haut de gamme dans le quartier Montparnasse : salles de bain italiennes, cuisines équipées, finitions soignées. Devis gratuit sous 48h.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover à Montparnasse : le standing comme exigence</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Montparnasse, à cheval sur les 14e et 6e arrondissements, est un secteur de standing où la qualité des finitions prime. Les immeubles de l'après-guerre côtoient des résidences récentes et des immeubles haussmanniens au charme indéniable. Les propriétaires de ce quartier attendent des rénovations irréprochables, avec des matériaux haut de gamme et un savoir-faire d'exception.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design réalise dans ce secteur des projets sur mesure : salles de bain à l'italienne avec carrelage grand format, cuisines entièrement équipées, optimisation des espaces de rangement. Chaque chantier est suivi de près par notre chef de projet pour garantir respect des délais et qualité d'exécution.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations à Montparnasse</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Salle de bain à l\'italienne haut de gamme','Cuisine équipée sur mesure','Revêtements sol et murs premium','Optimisation des volumes et rangements','Rénovation cave et espace de stockage','Peinture décorative et enduits'].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Montparnasse 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Salle de bain italienne complète', '8 000 – 18 000 €'],
                  ['Cuisine équipée haut de gamme', '12 000 – 30 000 €'],
                  ['Rénovation partielle (hors cuisine/SDB)', '400 – 700 €/m²'],
                  ['Rénovation complète appartement (au m²)', '900 – 1 800 €/m²'],
                ].map(([label, price]) => (
                  <tr key={label} className="border-b border-gray-100"><td className="p-3 text-gray-600">{label}</td><td className="p-3 text-right font-medium">{price}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">FAQ — Montparnasse</h2>
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Montparnasse</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
