import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Carrelage extérieur terrasse Paris', item: 'https://espacedesignparis.fr/blog/carrelage-exterieur-terrasse-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Carrelage extérieur terrasse à Paris : guide complet 2025",
  description: "Tout savoir sur le carrelage extérieur pour terrasse à Paris : antidérapant, résistance au gel, dalles grès cérame 60x60. Prix et conseils 2025 par Espace Design.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/carrelage-exterieur-terrasse-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel carrelage choisir pour une terrasse parisienne exposée au gel ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour une terrasse à Paris, privilégiez un grès cérame pleine masse de classe R11 minimum (antidérapant), avec une absorption d\'eau inférieure à 0,5 % pour résister aux cycles gel/dégel. Les dalles 60x60 en grès cérame sont le standard recommandé.' },
    },
    {
      '@type': 'Question',
      name: 'Quel est le prix de pose d\'un carrelage extérieur à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La pose d\'un carrelage extérieur à Paris coûte entre 40 et 70 €/m² selon la complexité du support, la taille des dalles et les finitions (joints, seuils, plinthes). Le carrelage lui-même coûte entre 35 et 80 €/m² pour un extérieur standard.' },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre dalle sur plots et carrelage collé pour terrasse ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Les dalles sur plots (20 mm d\'épaisseur minimum) se posent sans colle sur une terrasse et permettent l\'accès aux étanchéités. Le carrelage collé, plus traditionnel, offre une finition plus soignée mais nécessite un support parfaitement drainé et plan.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Carrelage extérieur terrasse Paris — Antidérapant, grès cérame 2025 | Espace Design',
  description: "Tout savoir sur le carrelage extérieur pour terrasse à Paris : antidérapant, résistance au gel, dalles grès cérame 60x60. Prix et conseils 2025 par Espace Design.",
}

export default function CarrelageExterieurTerrassePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Carrelage extérieur terrasse à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Antidérapant, résistance au gel, dalles grès cérame : tout ce qu'il faut savoir pour réussir votre terrasse parisienne en 2025.</p>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Choisir le bon carrelage pour une terrasse parisienne</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Paris et sa région connaissent des hivers avec des passages réguliers sous zéro. Le carrelage extérieur d'une terrasse doit impérativement résister aux cycles gel/dégel sans se fissurer ni se décoller. Le critère principal est la porosité : un grès cérame avec une absorption d'eau inférieure à 0,5 % est indispensable. La classe antidérapant R11 minimum garantit la sécurité même par temps de pluie.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Les dalles grand format 60x60 en grès cérame sont devenues le standard pour les terrasses parisiennes : elles offrent un rendu élégant, nécessitent peu de joints (moins d'entretien) et existent en finition mate ou structurée adaptée à l'extérieur. Pour les terrasses inaccessibles ou avec étanchéité, les dalles sur plots de 20 mm permettent une pose technique sans colle.</p>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Ce que nous prenons en charge</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Préparation et ragréage du support',
              'Pose carrelage collé extérieur R11',
              'Pose dalles grès cérame sur plots',
              'Joints polymère résistants aux UV',
              'Seuils, plinthes et finitions périphériques',
              'Étanchéité sous carrelage si nécessaire',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Tarifs 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="p-3 text-left">Prestation</th>
                  <th className="p-3 text-right">Prix</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Carrelage extérieur standard', '35 – 80 €/m²'],
                  ['Dalles grès cérame premium 60x60', '50 – 120 €/m²'],
                  ['Pose carrelage extérieur collé', '40 – 70 €/m²'],
                  ['Pose dalles sur plots (hors dalles)', '30 – 55 €/m²'],
                ].map(([l, p]) => (
                  <tr key={l} className="border-b border-gray-100">
                    <td className="p-3 text-gray-600">{l}</td>
                    <td className="p-3 text-right font-medium">{p}</td>
                  </tr>
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
