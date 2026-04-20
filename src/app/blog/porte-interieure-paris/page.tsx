import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Porte intérieure Paris', item: 'https://espacedesignparis.fr/blog/porte-interieure-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Pose et remplacement de portes intérieures à Paris — Tarifs 2025",
  description: "Pose et remplacement de portes intérieures à Paris. Bois massif, huisseries, finitions laquées. Prix, délais et conseils d'experts pour votre rénovation.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/porte-interieure-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix de pose d\'une porte intérieure à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix de pose d\'une porte intérieure à Paris (main d\'oeuvre uniquement) varie entre 80 et 200 € par porte selon la complexité. Fourniture et pose d\'un bloc-porte complet (huisserie + vantail + quincaillerie) revient entre 350 et 900 € selon les matériaux et finitions choisis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on remplacer une porte intérieure en urgence à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous intervenons sous 48 à 72h pour le remplacement de portes intérieures à Paris dans les cas urgents (porte bloquée, endommagée). Une visite préalable est nécessaire pour prendre les cotes et vérifier la configuration de l\'huisserie existante.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure la pose d\'une porte intérieure ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La pose d\'un bloc-porte standard prend entre 2 et 4 heures par porte, huisserie comprise. Si l\'ancienne huisserie est à déposer, prévoir une demi-journée. Les finitions (joint, peinture des bâtis) peuvent nécessiter un second passage.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Pose Porte Intérieure Paris — Remplacement & Prix 2025 | Espace Design',
  description: 'Pose et remplacement de portes intérieures à Paris. Bois massif, laqué, vitrée. Huisseries et finitions soignées. Artisan qualifié, devis gratuit sous 48h.',
}

export default function PorteInterieureParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Pose de portes intérieures à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Remplacement et installation de portes intérieures par des menuisiers parisiens. Bois massif, finitions laquées ou vitrées, huisseries et quincaillerie incluses.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Remplacement de portes intérieures : ce qu'il faut savoir</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Remplacer ses portes intérieures est l'un des gestes de rénovation les plus impactants visuellement. Une porte bien posée, avec une huisserie droite et des bâtis bien ajustés, transforme instantanément l'ambiance d'un appartement. À Paris, les immeubles anciens présentent souvent des baies non standard qui nécessitent une adaptation précise — c'est notre spécialité.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Nos menuisiers interviennent pour la pose de blocs-portes complets (vantail + huisserie + quincaillerie), le remplacement de vantaux seuls sur huisserie existante, ou la création de nouvelles baies. Chaque prestation comprend les réglages fins (taquets, joint de sous-porte, calage) et une finition soignée des bâtis.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations portes intérieures</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Portes en bois massif (chêne, hêtre, pin)',
              'Pose d\'huisseries et bâtis sur mesure',
              'Taquets magnétiques et serrures de qualité',
              'Finitions laquées mat, satin ou brillant',
              'Portes vitrées (verre sécurit ou dépoli)',
              'Intervention en appartement occupé sans gêne',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Prix porte intérieure Paris 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Prestation</th><th className="p-3 text-right">Tarif indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Pose d\'un bloc-porte standard (fourniture + pose)', '350 – 600 €'],
                  ['Bloc-porte bois massif ou laqué haut de gamme', '600 – 900 €'],
                  ['Remplacement vantail seul (huisserie conservée)', '150 – 350 €'],
                  ['Porte vitrée (verre sécurit, dépoli ou cathédrale)', '450 – 800 €'],
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
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation Paris' },
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
