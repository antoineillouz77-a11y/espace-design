import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Planning travaux rénovation Paris', item: 'https://espacedesignparis.fr/blog/planning-travaux-renovation-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Planning travaux rénovation Paris : ordre des corps de métier et délais réalistes",
  description: "Apprenez l'ordre logique des travaux de rénovation à Paris : gros oeuvre, second oeuvre, finitions. Coordination des corps de métier et planning type inclus.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/planning-travaux-renovation-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Dans quel ordre faut-il réaliser les travaux de rénovation ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L\'ordre logique est : 1) Démolition et gros oeuvre (abattage de cloisons, création d\'ouvertures), 2) Second oeuvre technique (plomberie, électricité, chauffage, ventilation), 3) Cloisons et isolation, 4) Revêtements de sol et muraux, 5) Menuiseries intérieures, 6) Peinture et finitions, 7) Mobilier et équipement. Respecter cet ordre évite de refaire des travaux déjà terminés.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure une rénovation complète à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour un appartement de 50 à 80 m² à Paris nécessitant une rénovation complète, comptez entre 8 et 16 semaines selon l\'état initial, le nombre de corps de métier mobilisables simultanément et la complexité des travaux (mise aux normes électriques, changement de salle de bain, création de cloisons). Le délai peut se réduire si plusieurs artisans travaillent en parallèle sous la coordination d\'un conducteur de travaux.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le planning type d\'une rénovation d\'appartement à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Semaines 1-2 : démolition et protection. Semaines 2-4 : plomberie et électricité en saignées. Semaines 4-6 : cloisons, isolation, chape. Semaines 6-9 : carrelage, parquet, faïence. Semaines 9-11 : menuiseries, plafonds. Semaines 11-13 : peinture. Semaines 13-14 : équipements, sanitaires, finitions et nettoyage. Ces délais valent pour un appartement de 60 m² en rénovation totale avec une équipe complète.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Planning travaux rénovation Paris — Ordre des corps de métier | Espace Design',
  description: 'Apprenez l\'ordre logique des travaux de rénovation à Paris : gros oeuvre, second oeuvre, finitions. Coordination des corps de métier et planning type inclus.',
}

export default function PlanningTravauxRenovationParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Planning travaux rénovation Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Comprendre l&apos;ordre logique des travaux de rénovation, la coordination des corps de métier et les délais réalistes pour un chantier parisien réussi.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi l&apos;ordre des travaux est crucial</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Une rénovation mal planifiée coûte systématiquement plus cher et prend plus de temps. Faire poser le parquet avant de terminer l&apos;électricité, peindre avant de finir les cloisons ou installer la cuisine avant de raccorder la plomberie oblige à reprendre des travaux déjà effectués. Dans un appartement parisien souvent exigu, ces erreurs de séquençage se paient cher — en temps, en argent et en stress.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            La logique d&apos;un chantier de rénovation suit toujours la même progression : du gros oeuvre vers le second oeuvre technique, puis vers les finitions. En pratique, la démolition et les éventuels abattages de cloisons ouvrent le chantier. Viennent ensuite les corps de métier techniques — électricien, plombier, chauffagiste — dont les travaux doivent être encastrés dans les murs avant que les revêtements soient posés. La peinture et les finitions closing le chantier en dernier.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Les grandes étapes d&apos;un chantier rénovation parisien</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Gros oeuvre en premier : démolition, abattage de cloisons, création d\'ouvertures',
              'Second oeuvre technique : électricité, plomberie, chauffage, VMC',
              'Cloisons, isolation thermique et acoustique, chape si nécessaire',
              'Revêtements : carrelage, parquet, faïence — avant les menuiseries',
              'Menuiseries intérieures, plafonds, plinthes',
              'Peinture, finitions, équipements sanitaires et cuisine en dernier',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
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
              { href: '/blog/devis-renovation-paris', label: 'Devis rénovation' },
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
