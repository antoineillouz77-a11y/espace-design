import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Pompe à chaleur Paris', item: 'https://espacedesignparis.fr/blog/pompe-a-chaleur-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Pompe à chaleur Paris : installation PAC air/air, air/eau et géothermique 2025",
  description: "Installation de pompe à chaleur (PAC) à Paris : air/air, air/eau, géothermique. Prix, aides MaPrimeRénov', délais d'installation. Artisan RGE qualifié.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/pompe-a-chaleur-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelle pompe à chaleur choisir pour un appartement parisien ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour un appartement parisien, la PAC air/air (3 000 – 8 000 €) est la solution la plus répandue car elle ne nécessite pas de réseau hydraulique existant. La PAC air/eau (8 000 – 15 000 €) est idéale si vous avez déjà des radiateurs ou un plancher chauffant.' },
    },
    {
      '@type': 'Question',
      name: 'Quelles aides financières pour l\'installation d\'une PAC à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'MaPrimeRénov\' peut financer de 1 000 à 5 000 € selon vos revenus. Les Certificats d\'Économies d\'Énergie (CEE) apportent une prime complémentaire. L\'éco-prêt à taux zéro permet de financer le reste à taux 0 %. Un artisan RGE est obligatoire pour bénéficier de ces aides.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure l\'installation d\'une pompe à chaleur ?',
      acceptedAnswer: { '@type': 'Answer', text: 'L\'installation d\'une PAC air/air prend 1 à 2 jours. Une PAC air/eau nécessite 2 à 5 jours selon la complexité du réseau hydraulique. La géothermique, avec forage, peut demander 5 à 10 jours de chantier.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Pompe à Chaleur Paris — Installation PAC Air/Air & Air/Eau | Espace Design',
  description: "Installation pompe à chaleur Paris : PAC air/air 3-8k€, air/eau 8-15k€, subventions disponibles. Artisan RGE certifié, délai 2-5j, devis gratuit sous 48h.",
}

export default function PompeAChaleurParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Pompe à chaleur Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Installation de PAC air/air, air/eau et géothermique à Paris. Comparez les solutions, découvrez les aides disponibles et obtenez un devis sous 48h.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">La pompe à chaleur, le chauffage d'avenir pour Paris</h2>
          <p className="text-gray-600 leading-relaxed mb-4">La pompe à chaleur (PAC) est aujourd'hui la solution de chauffage la plus efficiente : elle produit 3 à 4 kWh de chaleur pour 1 kWh d'électricité consommé, grâce à l'extraction des calories présentes dans l'air extérieur ou dans le sol. À Paris, où les logements sont souvent chauffés au gaz ou à l'électricité directe, passer à une PAC permet de diviser par deux à trois sa facture de chauffage.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Les aides de l'État rendent l'investissement particulièrement attractif en 2025 : MaPrimeRénov', CEE et éco-PTZ peuvent couvrir jusqu'à 50 à 70 % du coût total pour les ménages éligibles. Notre équipe certifiée RGE (Reconnu Garant de l'Environnement) vous aide à monter votre dossier d'aides et assure une installation conforme aux normes en vigueur.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations pompe à chaleur à Paris</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Étude thermique et dimensionnement',
              'PAC air/air (split ou gainable)',
              'PAC air/eau avec radiateurs ou plancher chauffant',
              'PAC géothermique avec sonde ou nappe',
              'Montage dossier MaPrimeRénov\' et CEE',
              'Maintenance et entretien annuel PAC',
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
                  ['PAC air/air posée', '3 000 – 8 000 €'],
                  ['PAC air/eau posée', '8 000 – 15 000 €'],
                  ['Délai d\'installation', '2 – 5 jours'],
                  ['Aide MaPrimeRénov\' possible', 'jusqu\'à 5 000 €'],
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
