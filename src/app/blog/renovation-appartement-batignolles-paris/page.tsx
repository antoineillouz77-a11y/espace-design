import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Batignolles Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-batignolles-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Batignolles Paris 17e — Artisan qualifié, devis gratuit",
  description: "Rénovation appartement aux Batignolles (Paris 17e) : moulures, parquet, cuisine, salle de bain. Artisan qualifié, devis gratuit sous 48h, assurance décennale.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-batignolles-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le coût d\'une rénovation d\'appartement aux Batignolles ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le coût d\'une rénovation aux Batignolles varie de 600 à 1 500 €/m² selon le niveau de finition. Une rénovation complète d\'un appartement haussmannien de 70 m² revient typiquement entre 45 000 et 90 000 €, matériaux et main-d\'œuvre inclus.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure un chantier de rénovation aux Batignolles ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La durée dépend de l\'ampleur des travaux. Une rénovation complète prend en général 6 à 12 semaines. Un rafraîchissement ciblé (peinture, parquet, salle de bain) peut être réalisé en 3 à 5 semaines.' },
    },
    {
      '@type': 'Question',
      name: 'Faut-il des autorisations de copropriété pour rénover aux Batignolles ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, tout travaux touchant aux parties communes ou à la façade nécessite l\'accord du syndic et un vote en assemblée générale. Espace Design vous accompagne dans la rédaction du dossier de demande d\'autorisation de travaux.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Batignolles Paris 17e — Artisan qualifié | Espace Design',
  description: 'Rénovation appartement aux Batignolles (Paris 17e) : moulures, parquet, cuisine, salle de bain. Artisan qualifié, devis gratuit sous 48h, assurance décennale.',
}

export default function RenovationBatignollesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Batignolles — Paris 17e</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Spécialiste de la rénovation dans le quartier des Batignolles : haussmannien, années 70, copropriétés. Devis gratuit sous 48h.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover aux Batignolles : un quartier résidentiel exigeant</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Le quartier des Batignolles, dans le 17e arrondissement de Paris, est l'un des secteurs les plus prisés par les familles et les jeunes actifs. Ses immeubles haussmanniens aux façades en pierre de taille côtoient des constructions des années 70, offrant des typologies variées. Rénover un appartement aux Batignolles demande une connaissance fine du bâti local et des contraintes propres aux copropriétés parisiennes.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design intervient régulièrement dans ce secteur pour des rénovations complètes ou partielles : restauration de moulures, pose de parquet en chêne, réfection de salles de bain, modernisation de cuisines. Notre équipe maîtrise les spécificités du patrimoine haussmannien et respecte scrupuleusement les règlements de copropriété en vigueur dans l'arrondissement.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Ce que nous rénovons aux Batignolles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Restauration de moulures et corniches','Pose et ponçage de parquet en chêne','Rénovation de salle de bain complète','Réfection de cuisine sur mesure','Isolation thermique et phonique','Mise aux normes électrique et plomberie'].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Batignolles 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Rafraîchissement peinture (par pièce)', 'à partir de 1 200 €'],
                  ['Rénovation salle de bain complète', '5 000 – 12 000 €'],
                  ['Rénovation cuisine équipée', '8 000 – 20 000 €'],
                  ['Rénovation complète appartement (au m²)', '600 – 1 500 €/m²'],
                ].map(([label, price]) => (
                  <tr key={label} className="border-b border-gray-100"><td className="p-3 text-gray-600">{label}</td><td className="p-3 text-right font-medium">{price}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">FAQ — Batignolles</h2>
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Batignolles</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
