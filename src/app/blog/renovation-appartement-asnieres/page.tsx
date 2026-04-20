import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Asnières-sur-Seine', item: 'https://espacedesignparis.fr/blog/renovation-appartement-asnieres' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Asnières-sur-Seine (92) — Guide complet 2025",
  description: "Rénovez votre appartement à Asnières-sur-Seine avec Espace Design. Devis gratuit, artisan qualifié, prix indicatifs pour rénovation complète, salle de bain et cuisine en 2025.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-asnieres' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation complète à Asnières-sur-Seine ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Asnières-sur-Seine, le prix d\'une rénovation complète se situe entre 1 200 et 1 700 €/m² selon l\'état du bien et les prestations choisies. Pour un appartement de 60 m², comptez entre 72 000 et 102 000 €.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure une rénovation appartement à Asnières ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Une rénovation complète d\'un appartement de 60 m² dure en moyenne 6 à 10 semaines. Les chantiers partiels (salle de bain ou cuisine) sont réalisés en 2 à 3 semaines.' },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un permis de construire pour rénover à Asnières-sur-Seine ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour une rénovation intérieure sans modification de façade ni de structure porteuse, aucun permis de construire n\'est requis. En cas de modification de l\'aspect extérieur ou de cloisonnement modifiant la surface habitable, une déclaration préalable peut être nécessaire.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Asnières-sur-Seine (92) — Espace Design',
  description: 'Rénovez votre appartement à Asnières-sur-Seine avec Espace Design. Devis gratuit, artisan qualifié, prix indicatifs pour rénovation complète, salle de bain et cuisine en 2025.',
}

export default function RenovationAppartementAsnieres() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement à Asnières-sur-Seine (92)</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Haussmannien classique ou immeuble moderne en bord de Seine — nos artisans interviennent à Asnières pour sublimer votre intérieur avec précision et savoir-faire.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi rénover à Asnières-sur-Seine ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Asnières-sur-Seine est l'une des communes les plus dynamiques des Hauts-de-Seine (92). Traversée par la Seine, elle attire propriétaires et investisseurs grâce à un parc immobilier varié : immeubles haussmanniens du XIXe siècle, résidences des années 1960-1980 et programmes neufs. La valorisation des biens par la rénovation est une stratégie courante, que ce soit pour habiter ou louer.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design intervient régulièrement à Asnières pour des rénovations complètes ou partielles. Notre équipe maîtrise les contraintes des copropriétés et des bâtiments anciens : contraintes acoustiques, mise aux normes électriques, reprise de planchers en bois, isolation thermique et acoustique entre appartements.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations à Asnières</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Rénovation complète clé en main',
              'Réfection de salle de bain',
              'Rénovation cuisine équipée',
              'Peinture et revêtements muraux',
              'Pose de parquet et carrelage',
              'Électricité et plomberie',
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
                  ['Rénovation complète', '1 200 – 1 700 €/m²'],
                  ['Salle de bain', '9 000 – 15 000 €'],
                  ['Cuisine', '10 000 – 17 000 €'],
                  ['Peinture appartement', '20 – 40 €/m²'],
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Asnières</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
