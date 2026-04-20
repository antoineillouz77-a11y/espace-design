import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Garde-Corps Terrasse Paris', item: 'https://espacedesignparis.fr/blog/garde-corps-terrasse-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Garde-corps terrasse Paris — métal, verre, inox, aluminium 2025",
  description: "Pose de garde-corps terrasse à Paris : métal, verre, inox, aluminium. Tarifs 2025, normes NF P01-012 et artisans qualifiés. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/garde-corps-terrasse-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelle est la hauteur réglementaire d\'un garde-corps de terrasse à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Selon la norme NF P01-012, un garde-corps de terrasse doit mesurer au minimum 1 mètre de hauteur si la hauteur de chute est inférieure à 1 m, et 1,10 mètre si la hauteur de chute est supérieure ou égale à 1 m. Ces dimensions sont obligatoires pour tout garde-corps neuf ou rénové à Paris.' },
    },
    {
      '@type': 'Question',
      name: 'Quel matériau choisir pour un garde-corps de terrasse à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'L\'acier thermolaqué est le plus économique et s\'adapte à tous les styles. L\'inox 316L résiste mieux à la corrosion urbaine parisienne. Le verre feuilleté apporte légèreté et vue dégagée mais est plus coûteux. L\'aluminium anodisé offre un bon compromis entre prix, légèreté et durabilité.' },
    },
    {
      '@type': 'Question',
      name: 'Faut-il une autorisation pour installer un garde-corps de terrasse à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'En copropriété parisienne, le garde-corps de terrasse est en général soumis à l\'approbation du syndic car il modifie l\'aspect extérieur de l\'immeuble. Dans certains secteurs sauvegardés (Marais, île Saint-Louis), un accord de l\'Architecte des Bâtiments de France peut être nécessaire. Renseignez-vous en mairie avant les travaux.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Garde-Corps Terrasse Paris — Métal, Verre, Inox, Aluminium | Espace Design',
  description: 'Pose garde-corps terrasse à Paris : métal, verre, inox, aluminium. Normes NF P01-012, artisan qualifié, devis gratuit 48h. Tarifs 2025.',
}

export default function GardeCorpsTerrassePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Garde-Corps Terrasse à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Métal, verre, inox, aluminium — pose sur mesure aux normes NF P01-012 dans Paris et la petite couronne.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Garde-corps terrasse : sécurité et esthétique</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Le garde-corps de terrasse est à la fois une obligation réglementaire et un élément architectural fort. À Paris, où les terrasses sur toits-terrasses et les balcons sont très prisés, un garde-corps bien conçu peut transformer un espace extérieur en véritable prolongement de vie. Il doit respecter la norme NF P01-012 tout en s&apos;intégrant à l&apos;architecture du bâtiment.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design intervient sur tous types de terrasses parisiennes : toits-terrasses, balcons haussmanniens, cours intérieures et jardins en étage. Nos métalliers fabriquent chaque garde-corps sur mesure, depuis la prise de côtes jusqu&apos;à la pose et la finition, en respectant scrupuleusement les normes de sécurité en vigueur.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Matériaux et finitions disponibles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Acier thermolaqué — économique et durable',
              'Inox 316L — résistance maximale milieu urbain',
              'Verre feuilleté sécurit — vue dégagée',
              'Aluminium anodisé — léger et sans entretien',
              'Câble inox — style contemporain minimaliste',
              'Mixte métal/verre — élégance architecturale',
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
                  ['Garde-corps acier thermolaqué (posé)', '150 – 300 €/ml'],
                  ['Garde-corps inox 316L (posé)', '250 – 450 €/ml'],
                  ['Garde-corps verre feuilleté (posé)', '350 – 600 €/ml'],
                  ['Pose seule (hors fourniture)', '50 – 100 €/ml'],
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
