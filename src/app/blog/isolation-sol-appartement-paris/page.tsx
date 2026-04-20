import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Isolation sol appartement Paris', item: 'https://espacedesignparis.fr/blog/isolation-sol-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Isolation sol appartement Paris : chape, plancher chauffant et sous-couche isolante",
  description: "Guide complet pour isoler le sol d'un appartement à Paris : sous-couche isolante, chape isolante, plancher chauffant hydraulique ou électrique. Prix 2025 et conseils.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/isolation-sol-appartement-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelle est la meilleure isolation de sol pour un appartement parisien ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour un appartement parisien avec peu de hauteur disponible, la sous-couche isolante mince (5-15 €/m²) est idéale. Pour des travaux plus conséquents, une chape isolante (25-50 €/m²) offre de meilleures performances acoustiques et thermiques.' },
    },
    {
      '@type': 'Question',
      name: 'Peut-on installer un plancher chauffant dans un appartement existant à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, c\'est possible lors d\'une rénovation. Le plancher chauffant électrique (70-130 €/m² posé) est le plus adapté en appartement existant car il nécessite une faible épaisseur. Le plancher chauffant hydraulique convient mieux aux rénovations lourdes avec remplacement de la chape.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps prend la pose d\'une chape isolante dans un appartement ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La pose d\'une chape isolante dans un appartement de 50 m² prend généralement 2 à 4 jours de travaux. Il faut ensuite respecter un temps de séchage de 3 à 4 semaines avant la pose du revêtement de sol final.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Isolation Sol Appartement Paris — Chape & Plancher Chauffant | Espace Design',
  description: "Isolation sol appartement Paris : sous-couche 5-15€/m², chape isolante 25-50€/m², plancher chauffant 70-130€/m². Artisan qualifié, devis gratuit sous 48h.",
}

export default function IsolationSolAppartementParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Isolation sol appartement Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Chape isolante, sous-couche acoustique et thermique, plancher chauffant : toutes les solutions pour isoler le sol de votre appartement parisien en 2025.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi isoler le sol de son appartement à Paris ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Dans les appartements parisiens anciens, le sol est souvent une source importante de déperdition thermique et de nuisances sonores entre les étages. Isoler correctement le sol permet de réduire les bruits d'impact (pas, chutes d'objets), d'améliorer le confort thermique en hiver et de diminuer les factures d'énergie.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Contrairement aux maisons, les appartements présentent des contraintes spécifiques : hauteur sous plafond limitée, poids de la chape à ne pas dépasser, et exigences acoustiques renforcées. Notre équipe sélectionne la solution adaptée à la configuration de votre logement, du simple isolant mince à la chape complète avec plancher chauffant intégré.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Les solutions d'isolation de sol que nous proposons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Diagnostic acoustique et thermique du sol',
              'Pose de sous-couche isolante mince',
              'Chape sèche ou liquide avec isolant intégré',
              'Plancher chauffant électrique (rénovation)',
              'Plancher chauffant hydraulique (rénovation lourde)',
              'Pose revêtement final (parquet, carrelage, vinyl)',
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
                  ['Sous-couche isolante mince', '5 – 15 €/m²'],
                  ['Chape isolante (sèche ou liquide)', '25 – 50 €/m²'],
                  ['Plancher chauffant électrique posé', '70 – 130 €/m²'],
                  ['Plancher chauffant hydraulique posé', '90 – 160 €/m²'],
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
