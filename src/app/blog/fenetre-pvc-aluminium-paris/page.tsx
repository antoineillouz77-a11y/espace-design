import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Fenêtre PVC ou aluminium à Paris', item: 'https://espacedesignparis.fr/blog/fenetre-pvc-aluminium-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Fenêtre PVC ou aluminium à Paris : comparatif, isolation et prix 2025",
  description: "PVC ou aluminium pour vos fenêtres parisiennes ? Comparatif complet sur l'isolation thermique, l'esthétique, la durabilité et les tarifs 2025.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/fenetre-pvc-aluminium-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'PVC ou aluminium : quelle fenêtre isole le mieux ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le PVC est naturellement isolant et offre d\'excellentes performances thermiques (Uw pouvant atteindre 0,8 W/m².K). L\'aluminium conduit la chaleur, mais les profilés modernes avec rupture de pont thermique rattrapent cet écart. Pour une isolation optimale en appartement parisien, le double vitrage à lame argon est le minimum ; le triple vitrage est recommandé pour les façades exposées nord ou très bruyantes.' },
    },
    {
      '@type': 'Question',
      name: 'Peut-on remplacer des fenêtres dans un appartement haussmannien à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, mais le remplacement de fenêtres dans un immeuble haussmannien peut être soumis à l\'approbation du syndic et, dans les secteurs protégés, à une déclaration préalable en mairie. L\'aluminium laqué anthracite ou blanc cassé imite bien les fenêtres d\'origine. Il faut vérifier le règlement de copropriété avant tout projet et s\'assurer que le poseur est qualifié RGE pour bénéficier des aides.' },
    },
    {
      '@type': 'Question',
      name: 'Quelles aides financières pour le remplacement de fenêtres à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'En 2025, MaPrimeRénov\' peut couvrir une partie du coût du remplacement de fenêtres dans les logements anciens, sous conditions de ressources et de performance du vitrage. L\'éco-PTZ permet de financer les travaux sans intérêts. La TVA à 5,5 % s\'applique aux travaux de rénovation énergétique réalisés par un artisan RGE. Il est conseillé de faire appel à un conseiller France Rénov\' pour évaluer les aides auxquelles vous avez droit.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Fenêtre PVC ou Aluminium Paris — Comparatif & Prix 2025 | Espace Design',
  description: 'Remplacement de fenêtres à Paris : PVC ou aluminium, double ou triple vitrage. Comparatif isolation, tarifs 2025 et aides disponibles. Devis gratuit.',
}

export default function FenetrePvcAluminiumParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Fenêtre PVC ou aluminium à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Remplacer ses fenêtres à Paris : PVC économique et isolant ou aluminium élégant et durable ? Guide complet pour choisir selon votre bien et votre budget.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">PVC vs aluminium : comment choisir pour son appartement parisien ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Le remplacement des fenêtres est l&apos;un des investissements les plus rentables en rénovation : il améliore le confort thermique, réduit les factures d&apos;énergie et valorise le bien. À Paris, le choix entre PVC et aluminium dépend de plusieurs facteurs : le style de l&apos;immeuble, le règlement de copropriété, le budget et les performances souhaitées.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Le PVC séduit par son rapport qualité-prix excellent et ses très bonnes performances thermiques naturelles. L&apos;aluminium, plus fin et plus élégant, s&apos;impose dans les immeubles contemporains ou pour les grandes baies vitrées. Dans les immeubles haussmanniens, l&apos;aluminium laqué blanc cassé ou anthracite s&apos;intègre mieux que le PVC blanc brillant. Espace Design pose les deux matériaux et vous guide vers le meilleur choix.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Critères de choix pour vos fenêtres parisiennes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'PVC : isolation thermique naturelle, coût plus faible',
              'Aluminium : profilés fins, grandes dimensions possibles',
              'Double vitrage argon : standard recommandé à Paris',
              'Triple vitrage : idéal pour façades nord ou bruyantes',
              'Rupture de pont thermique obligatoire sur l\'aluminium',
              'Certification RGE pour bénéficier des aides MaPrimeRénov\'',
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
                  ['Fenêtre PVC double vitrage (fournie et posée)', '400 € – 900 €/unité'],
                  ['Fenêtre aluminium double vitrage (fournie et posée)', '600 € – 1 400 €/unité'],
                  ['Pose seule (dépose ancienne fenêtre + pose nouvelle)', '150 € – 300 €/fenêtre'],
                  ['Baie vitrée coulissante aluminium (fournie et posée)', '1 500 € – 4 000 €'],
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
