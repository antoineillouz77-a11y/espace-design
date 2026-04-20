import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement meublé Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-meuble-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement meublé Paris : mobilier intégré, optimisation et standing",
  description: "Rénover un appartement meublé à Paris pour la location : mobilier sur mesure, optimisation de la surface, finitions haut de gamme. Prix studio, T2, T3 en 2025.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-meuble-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget prévoir pour rénover un appartement meublé à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le budget varie selon la surface et le niveau de standing visé : 15 000 – 25 000 € pour un studio, 22 000 – 38 000 € pour un T2 et 30 000 – 55 000 € pour un T3 entièrement rénové et meublé. Ces tarifs incluent mobilier intégré, revêtements et électroménager.' },
    },
    {
      '@type': 'Question',
      name: 'Quels aménagements augmentent le plus la valeur locative d\'un meublé parisien ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Les rangements intégrés sur mesure, la cuisine équipée haut de gamme et une salle de bain renovée sont les investissements avec le meilleur retour. Un meublé bien rénové à Paris peut louer 20 à 40 % plus cher qu\'un meublé standard de surface équivalente.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure la rénovation complète d\'un appartement meublé ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La rénovation complète d\'un studio ou T2 meublé à Paris prend entre 4 et 8 semaines selon l\'ampleur des travaux. Un T3 avec refonte totale peut nécessiter 8 à 12 semaines. Un planning précis est établi dès le devis pour minimiser la vacance locative.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Meublé Paris — Studio T2 T3 | Espace Design',
  description: "Rénovation appartement meublé Paris : studio 15-25k€, T2 22-38k€, T3 30-55k€. Mobilier intégré, optimisation surface, finitions standing. Devis gratuit sous 48h.",
}

export default function RenovationAppartementMeubleParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement meublé Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Valorisez votre investissement locatif parisien avec une rénovation complète clé en main : mobilier intégré sur mesure, optimisation de l'espace et finitions haut de gamme.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi rénover son appartement meublé à Paris ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">La location meublée à Paris est un marché très concurrentiel. Un appartement bien rénové et joliment meublé peut se louer 20 à 40 % plus cher qu'un logement standard, tout en attirant des locataires plus solvables et réduisant la vacance locative. Dans un contexte où les loyers plafonnent, améliorer la qualité du bien devient le principal levier de rentabilité.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Notre approche pour la rénovation de meublés parisiens est centrée sur l'optimisation de chaque mètre carré : rangements intégrés du sol au plafond, mobilier multifonction, cuisine ouverte équipée et salle de bain soignée. Nous travaillons aussi bien pour des propriétaires bailleurs que pour des investisseurs qui souhaitent mettre leur bien en location saisonnière ou longue durée.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Ce qui est inclus dans notre offre rénovation meublé</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Conception 3D de l\'aménagement intérieur',
              'Mobilier intégré sur mesure (rangements, lit escamotable)',
              'Rénovation cuisine équipée haut de gamme',
              'Réfection salle de bain complète',
              'Revêtements sols et peintures de qualité',
              'Mise aux normes électrique et plomberie',
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
                  ['Rénovation meublée studio (jusqu\'à 25 m²)', '15 000 – 25 000 €'],
                  ['Rénovation meublée T2 (25 – 45 m²)', '22 000 – 38 000 €'],
                  ['Rénovation meublée T3 (45 – 70 m²)', '30 000 – 55 000 €'],
                  ['Délai moyen de réalisation', '4 – 12 semaines'],
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
