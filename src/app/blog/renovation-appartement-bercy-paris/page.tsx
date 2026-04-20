import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation appartement Bercy Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-bercy-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation appartement Bercy Paris 12e — Lofts, espaces industriels, devis gratuit",
  description: "Rénovation appartement et loft à Bercy (Paris 12e) : béton ciré, verrières, open space. Spécialiste des anciens entrepôts convertis. Devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-appartement-bercy-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le coût de rénovation d\'un loft à Bercy ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La rénovation d\'un loft à Bercy varie entre 800 et 1 600 €/m² selon les finitions. Les espaces industriels demandent souvent un traitement du béton ciré, des verrières et une mise aux normes électrique plus poussée, ce qui peut porter le budget d\'un loft de 80 m² entre 65 000 et 130 000 €.' },
    },
    {
      '@type': 'Question',
      name: 'Comment aménager un open space dans un ancien entrepôt de Bercy ?',
      acceptedAnswer: { '@type': 'Answer', text: 'L\'aménagement d\'un open space dans un entrepôt converti passe par la création de cloisons légères ou de verrières intérieures, l\'installation d\'un béton ciré ou d\'un parquet industriel, et une réflexion sur la circulation et l\'éclairage. Espace Design vous propose une étude d\'aménagement sur mesure.' },
    },
    {
      '@type': 'Question',
      name: 'Faut-il des autorisations spécifiques pour rénover dans une copropriété à Bercy ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, toute modification des parties communes, façades ou structure portante nécessite l\'accord du syndic de copropriété. Pour les lofts issus de reconversions industrielles, des règles spécifiques peuvent s\'appliquer selon le PLU du 12e arrondissement.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation appartement Bercy Paris 12e — Lofts & espaces industriels | Espace Design',
  description: 'Rénovation appartement et loft à Bercy (Paris 12e) : béton ciré, verrières, open space. Spécialiste des anciens entrepôts convertis. Devis gratuit sous 48h.',
}

export default function RenovationBercyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Rénovation appartement Bercy — Paris 12e</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Expert en rénovation de lofts et d'espaces industriels convertis à Bercy : béton ciré, verrières, open space. Devis gratuit sous 48h.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Bercy, un quartier en pleine transformation</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Le quartier de Bercy, dans le 12e arrondissement, a connu une transformation radicale ces vingt dernières années. D'ancien quartier viticole et industriel, il est devenu l'un des secteurs les plus dynamiques de Paris Est, avec ses lofts issus d'entrepôts reconvertis, ses immeubles contemporains et sa proximité avec le Bois de Vincennes. Rénover à Bercy c'est souvent composer avec des volumes atypiques et un bâti singulier.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Espace Design accompagne les propriétaires de lofts et d'appartements dans ce quartier en évolution : pose de béton ciré sur des grandes surfaces, installation de verrières intérieures pour délimiter les espaces sans cloisonner, création de salles de bain et cuisines ouvertes. Notre équipe maîtrise les contraintes techniques des anciens entrepôts industriels reconvertis en habitations.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos spécialités pour les lofts de Bercy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {['Pose et application de béton ciré','Installation de verrières intérieures','Aménagement d\'open space sur mesure','Revêtements industriels (acier, bois brut)','Mise aux normes électrique grande surface','Cloisons légères et rangements intégrés'].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix rénovation Bercy 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Type de travaux</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Béton ciré sol (par m²)', '80 – 150 €/m²'],
                  ['Verrière intérieure (standard)', '3 500 – 8 000 €'],
                  ['Aménagement open space complet', '15 000 – 40 000 €'],
                  ['Rénovation complète loft (au m²)', '800 – 1 600 €/m²'],
                ].map(([label, price]) => (
                  <tr key={label} className="border-b border-gray-100"><td className="p-3 text-gray-600">{label}</td><td className="p-3 text-right font-medium">{price}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">FAQ — Bercy</h2>
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Bercy</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
