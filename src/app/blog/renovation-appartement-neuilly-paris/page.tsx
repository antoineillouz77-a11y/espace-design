import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Neuilly-sur-Seine', item: 'https://espacedesignparis.fr/blog/renovation-appartement-neuilly-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Neuilly-sur-Seine : guide complet et tarifs 2025",
  description: "Tout savoir sur la rénovation d'appartement à Neuilly-sur-Seine : prix, étapes, conseils pour vos travaux dans cette commune haut de gamme des Hauts-de-Seine.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-neuilly-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation complète à Neuilly-sur-Seine ?',
      acceptedAnswer: { '@type': 'Answer', text: 'À Neuilly-sur-Seine, la rénovation complète d\'un appartement coûte entre 1 800 et 2 500 €/m² selon le niveau de finition. Pour un 3 pièces de 70 m², le budget total se situe entre 126 000 et 175 000 €.' },
    },
    {
      '@type': 'Question',
      name: 'Faut-il une autorisation pour rénover à Neuilly ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Les travaux intérieurs sans modification de façade ne nécessitent généralement pas de permis de construire. En revanche, tout changement de destination ou modification de structure nécessite une déclaration préalable auprès de la mairie de Neuilly-sur-Seine.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure une rénovation à Neuilly-sur-Seine ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Une rénovation complète d\'un appartement de 60 à 100 m² à Neuilly-sur-Seine dure entre 8 et 16 semaines, selon l\'ampleur des travaux. Une rénovation partielle (cuisine ou salle de bain) prend généralement 3 à 5 semaines.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Neuilly-sur-Seine — Prix 2025 | Espace Design',
  description: 'Tout savoir sur la rénovation d\'appartement à Neuilly-sur-Seine : prix, étapes, conseils pour vos travaux dans cette commune haut de gamme des Hauts-de-Seine.',
}

export default function RenovationNeuillyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Neuilly-sur-Seine</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Guide complet pour rénover votre appartement à Neuilly-sur-Seine en 2025 : prix, étapes clés et conseils d'experts pour des finitions haut de gamme.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover à Neuilly-sur-Seine : un marché d'exception</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Neuilly-sur-Seine est la commune la plus chère d'Île-de-France, avec un parc immobilier dominé par de grands appartements haussmanniens, des immeubles de standing et des résidences sécurisées. La rénovation d'un appartement dans cette ville exige un niveau de finition irréprochable pour correspondre aux attentes de sa clientèle exigeante. Moulures, parquets anciens, hauteurs sous plafond généreuses : chaque détail compte.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design intervient régulièrement à Neuilly-sur-Seine pour des projets de rénovation complète ou partielle. Notre équipe maîtrise les contraintes spécifiques des immeubles haussmanniens — règlement de copropriété strict, coordination avec le gardien, protection des parties communes — et vous accompagne de la conception jusqu'à la livraison.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Ce que comprend une rénovation complète à Neuilly</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Dépose et refection des revêtements sol',
              'Rénovation cuisine équipée haut de gamme',
              'Réfection complète salle de bain',
              'Mise aux normes électrique NF C 15-100',
              'Peinture plafonds, murs et boiseries',
              'Restauration moulures et parquets anciens',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Neuilly-sur-Seine 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Rénovation complète appartement', '1 800 – 2 500 €/m²'],
                  ['Salle de bain haut de gamme', '15 000 – 25 000 €'],
                  ['Cuisine équipée premium', '20 000 – 35 000 €'],
                  ['Peinture et parquet', '80 – 120 €/m²'],
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
              { href: '/blog/renovation-appartement-haussmannien-paris', label: 'Appartement haussmannien' },
              { href: '/blog', label: 'Tous les articles' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Neuilly-sur-Seine</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
