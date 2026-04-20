import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Brise-vue terrasse à Paris', item: 'https://espacedesignparis.fr/blog/brise-vue-terrasse-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Brise-vue terrasse à Paris : bois, végétal, bambou ou verre dépoli",
  description: "Préservez l'intimité de votre terrasse parisienne avec un brise-vue adapté : bois, bambou, végétal, verre dépoli. Idées, conseils et prix 2025.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/brise-vue-terrasse-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Faut-il une autorisation pour installer un brise-vue sur une terrasse à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'En appartement, toute modification de l\'aspect extérieur peut nécessiter l\'accord du syndic de copropriété. Pour une maison individuelle, une déclaration préalable de travaux est parfois requise si le brise-vue dépasse 1,80 m et est visible depuis la voie publique. À Paris, certains secteurs sauvegardés imposent des règles supplémentaires. Renseignez-vous en mairie avant tout projet.' },
    },
    {
      '@type': 'Question',
      name: 'Quel brise-vue choisir pour résister au vent à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Paris est une ville ventée, notamment sur les toits. Les brise-vues ajourés (lames de bois espacées, grillage végétalisé) résistent mieux au vent que les panneaux pleins qui font effet voile. Le verre trempé feuilleté et le polycarbonate sont aussi de bonnes options. Quelle que soit la matière, la fixation à la structure portante doit être dimensionnée pour des vents de 100 à 120 km/h.' },
    },
    {
      '@type': 'Question',
      name: 'Quelle plante choisir pour un mur végétal brise-vue à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour un brise-vue végétal à Paris, privilégiez les plantes persistantes et résistantes : lierre (pousse rapide, très couvrant), clématite (floraison décorative), hortensia grimpant, ou encore bambou en bac (attention à le contenir). Le bambou non-traçant en pot est une excellente solution pour créer un écran naturel dense sans risque d\'envahissement. Un système d\'arrosage automatique facilite l\'entretien.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Brise-vue Terrasse Paris — Bois, Bambou, Végétal & Prix 2025 | Espace Design',
  description: 'Brise-vue pour terrasse à Paris : bois, bambou, verre dépoli, végétal. Intimité, design et tarifs 2025. Artisan qualifié, devis gratuit sous 48h.',
}

export default function BriseVueTerrasseParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Brise-vue terrasse à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Profitez de votre terrasse parisienne en toute intimité. Bois, bambou, verre dépoli ou végétal : découvrez les solutions brise-vue les mieux adaptées à l&apos;environnement urbain parisien.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi installer un brise-vue sur sa terrasse parisienne ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">À Paris, les terrasses et balcons sont souvent proches des vis-à-vis : immeubles mitoyens, cours intérieures, terrasses voisines. Un brise-vue bien conçu permet de profiter de son espace extérieur sans se sentir observé, tout en ajoutant une dimension esthétique à la terrasse. Il peut aussi protéger du vent, créer de l&apos;ombre et délimiter visuellement l&apos;espace.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Le choix du brise-vue dépend de plusieurs facteurs : l&apos;exposition (soleil, vent), le style décoratif souhaité, le règlement de copropriété et le budget. Les artisans d&apos;Espace Design réalisent des installations sur mesure, des lames de bois aux panneaux de verre en passant par les structures végétalisées, avec des fixations adaptées aux contraintes parisiennes.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Les solutions brise-vue pour terrasse à Paris</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Lames de bois composite (résistant aux intempéries, sans entretien)',
              'Bambou : naturel, léger, ambiance exotique',
              'Verre trempé dépoli ou sablé : design et lumière filtrée',
              'Polycarbonate alvéolaire : léger, translucide, économique',
              'Panneau végétalisé ou bac à bambou non-traçant',
              'Brise-vue en acier Corten ou inox pour style contemporain',
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
                  ['Brise-vue bois ou composite (fourni et posé)', '80 € – 180 €/m²'],
                  ['Brise-vue bambou (fourni et posé)', '40 € – 90 €/m²'],
                  ['Brise-vue végétal (structure + plantes + arrosage auto)', '60 € – 150 €/m²'],
                  ['Brise-vue verre trempé dépoli (fourni et posé)', '200 € – 500 €/m²'],
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
