import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Salle de jeux adultes Paris', item: 'https://espacedesignparis.fr/blog/renovation-salle-de-jeux-adultes-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Aménager une salle de jeux adultes ou home cinéma à Paris",
  description: "Créez votre espace détente idéal à Paris : salle de jeux adultes, home cinéma, insonorisation. Devis gratuit, artisan qualifié.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-salle-de-jeux-adultes-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget prévoir pour une salle home cinéma à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un home cinéma complet à Paris coûte entre 8 000 et 20 000 € selon la surface, le matériel de projection et l\'insonorisation. Un aménagement basique (écran, son, éclairage) démarre autour de 3 000 €.' },
    },
    {
      '@type': 'Question',
      name: 'L\'insonorisation est-elle obligatoire dans un appartement parisien ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Elle n\'est pas légalement obligatoire mais fortement recommandée pour éviter les nuisances sonores. On compte entre 60 et 120 €/m² pour un traitement acoustique efficace (panneaux absorbants, masse lourde, désolidarisation).' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure l\'aménagement d\'une salle de jeux adultes ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un aménagement simple (peinture, éclairage, rangements) prend 3 à 5 jours. Un home cinéma avec insonorisation et faux plafond demande 2 à 4 semaines selon la complexité.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Salle de jeux adultes & Home Cinéma Paris — Espace Design',
  description: 'Aménagez votre salle de jeux adultes ou home cinéma à Paris : insonorisation, éclairage tamisé, écran de projection. Devis gratuit sous 48h.',
}

export default function SalleJeuxAdultesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Salle de jeux adultes et home cinéma à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Transformez une pièce inutilisée en véritable espace détente : home cinéma immersif, salle de jeux, insonorisation sur mesure.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi aménager une salle dédiée aux loisirs ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Dans un appartement parisien, chaque pièce doit être optimisée. Aménager une salle de jeux adultes ou un home cinéma permet de regrouper vos équipements, d&apos;améliorer l&apos;expérience sonore et visuelle, et surtout de préserver le reste du logement. L&apos;acoustique, l&apos;éclairage tamisé et la disposition du mobilier font toute la différence.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nos artisans conçoivent des espaces sur mesure adaptés à votre surface — de la chambre reconvertie au sous-sol aménagé — en intégrant écran de projection motorisé, système son surround, mobilier lounge et traitement acoustique certifié.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Ce que comprend notre prestation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Étude acoustique et plans 3D',
              'Insonorisation phonique (60-120 €/m²)',
              'Pose écran de projection motorisé',
              'Éclairage LED tamisé et scénarios',
              'Installation sono surround 5.1/7.1',
              'Faux plafond et habillage mural',
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
                  ['Aménagement salle de jeux basique', '3 000 – 8 000 €'],
                  ['Home cinéma complet', '8 000 – 20 000 €'],
                  ['Insonorisation phonique', '60 – 120 €/m²'],
                  ['Éclairage scénographique LED', '800 – 2 500 €'],
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
