import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement 30m2 Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-30m2-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement 30m2 Paris : prix et conseils 2025",
  description: "Combien coûte la rénovation d'un studio ou T1 de 30m2 à Paris ? Découvrez les prix détaillés, les postes de travaux et les conseils d'Espace Design pour optimiser votre budget.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-30m2-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le budget moyen pour rénover un studio de 30m2 à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour un studio de 30m2 à Paris, comptez entre 8 000 et 15 000 € pour un rafraîchissement (peinture, sols, luminaires), entre 15 000 et 25 000 € pour une rénovation partielle (cuisine ou salle de bain incluse), et entre 25 000 et 45 000 € pour une rénovation complète. Un projet haut de gamme peut atteindre 45 000 à 65 000 €.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure la rénovation d\'un 30m2 à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un rafraîchissement prend 1 à 2 semaines. Une rénovation complète d\'un studio de 30m2 nécessite généralement 4 à 8 semaines selon l\'ampleur des travaux (plomberie, électricité, cloisonnement). Espace Design coordonne tous les corps de métier pour minimiser les délais.' },
    },
    {
      '@type': 'Question',
      name: 'Faut-il une autorisation pour rénover un studio à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour les travaux intérieurs sans modification de structure (peinture, revêtements, cuisine, salle de bain), aucun permis n\'est requis. En revanche, la modification d\'une cloison porteuse ou l\'agrandissement d\'une fenêtre nécessite une déclaration préalable ou un permis de construire. Nous vous accompagnons dans ces démarches.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement 30m2 Paris : prix 2025 | Espace Design',
  description: "Combien coûte la rénovation d'un studio ou T1 de 30m2 à Paris ? Découvrez les prix détaillés, les postes de travaux et les conseils d'Espace Design pour optimiser votre budget.",
}

export default function RenovationAppartement30m2Paris() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement 30m2 Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Studio ou T1 : tout ce qu'il faut savoir sur les prix, les travaux et les délais pour rénover 30m2 à Paris en 2025.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Rénover un studio de 30m2 à Paris : par où commencer ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Un studio ou T1 de 30m2 à Paris est souvent le premier bien immobilier à rénover : investissement locatif, résidence principale ou remise en vente. Malgré sa surface modeste, un 30m2 parisien concentre tous les enjeux d'une rénovation — optimisation de l'espace, isolation phonique, mise aux normes électriques et plomberie parfois vétuste. La bonne nouvelle : une rénovation bien pensée peut transformer radicalement un petit appartement en un espace fonctionnel et élégant.</p>
          <p className="text-gray-600 leading-relaxed mb-4">À Paris, les prix de rénovation au m2 sont naturellement plus élevés qu'en province, en raison du coût de la main-d'oeuvre, des contraintes d'accès (immeubles haussmanniens, pas d'ascenseur, stationnement limité) et des normes en vigueur dans les copropriétés. Comptez en moyenne entre 800 et 2 200 € par m2 selon le niveau de prestation souhaité.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Les postes de travaux incontournables dans un 30m2</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Peinture murs et plafonds',
              'Remplacement des revêtements de sol',
              'Rénovation ou remplacement de la cuisine',
              'Rénovation salle de bain / douche',
              'Mise aux normes électrique (tableau, prises)',
              'Optimisation des rangements et cloisons',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Budget rénovation 30m2 Paris 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Niveau de rénovation</th><th className="p-3 text-right">Budget total estimé</th></tr></thead>
              <tbody>
                {[
                  ['Rafraîchissement (peinture, sols, luminaires)', '8 000 – 15 000 €'],
                  ['Rénovation partielle (cuisine ou salle de bain)', '15 000 – 25 000 €'],
                  ['Rénovation complète (tous corps de métier)', '25 000 – 45 000 €'],
                  ['Rénovation haut de gamme (matériaux premium)', '45 000 – 65 000 €'],
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
