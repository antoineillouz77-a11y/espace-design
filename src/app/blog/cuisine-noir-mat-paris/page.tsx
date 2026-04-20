import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cuisine noire mat à Paris', item: 'https://espacedesignparis.fr/blog/cuisine-noir-mat-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Cuisine noire mat à Paris : tendance, entretien et prix 2025",
  description: "La cuisine noire mat s'impose à Paris : façades laquées, plan de travail noir, carrelage sombre. Guide complet sur l'entretien, les associations et les tarifs 2025.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/cuisine-noir-mat-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'La cuisine noire mat est-elle difficile à entretenir ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Les façades laquées noires mat marquent les traces de doigts et la graisse plus rapidement que le blanc. Un nettoyage régulier avec un chiffon microfibre légèrement humide suffit à conserver l\'aspect mat. Les matériaux ultra-mat avec traitement anti-traces facilitent l\'entretien au quotidien. Le plan de travail en pierre noire doit être scellé périodiquement.' },
    },
    {
      '@type': 'Question',
      name: 'Comment éclairer une cuisine entièrement noire sans qu\'elle paraisse sombre ?',
      acceptedAnswer: { '@type': 'Answer', text: 'L\'éclairage est clé dans une cuisine noire mat. On multiplie les sources : spots encastrés au plafond, bandeau LED sous les meubles hauts, suspension design au-dessus de l\'îlot. L\'association avec un plan de travail clair (marbre blanc, quartz beige) ou un carrelage de crédence en zellige blanc apporte de la lumière et crée un contraste élégant.' },
    },
    {
      '@type': 'Question',
      name: 'Quel plan de travail associer à une cuisine noire mat ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Deux approches s\'opposent : le plan de travail noir (quartz ou granite) pour un effet monolithique très contemporain, ou le plan de travail clair (marbre blanc, chêne massif, quartz blanc veiné) pour créer un contraste luxueux. Le bois apporte de la chaleur et équilibre l\'austérité du noir. Le choix dépend du volume de la pièce et de la luminosité naturelle disponible.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Cuisine Noire Mat Paris — Tendance, Entretien & Prix 2025 | Espace Design',
  description: 'Cuisine noire mat à Paris : façades laquées, plan de travail, crédence. Idées déco, conseils entretien et tarifs 2025. Devis gratuit sous 48h.',
}

export default function CuisineNoirMatParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Cuisine noire mat à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Tendance forte et durable, la cuisine noire mat transforme radicalement un intérieur. Façades laquées, plan de travail en pierre sombre, crédence en zellige : découvrez comment réussir ce projet ambitieux.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">La cuisine noire mat, une tendance qui s&apos;installe durablement à Paris</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Longtemps réservée aux cuisines de chef et aux showrooms haut de gamme, la cuisine noire mat a conquis les appartements parisiens. Elle séduit par son caractère affirmé, son élégance sobre et sa capacité à s&apos;adapter à des styles très différents — minimaliste, industriel, contemporain ou même campagne chic. Contrairement aux idées reçues, elle ne rend pas une cuisine sombre si elle est bien éclairée.</p>
          <p className="text-gray-600 leading-relaxed mb-4">L&apos;essor des façades laquées ultra-mat et des plans de travail en quartz noir a démocratisé ce style. Les cuisinistes et artisans parisiens maîtrisent désormais parfaitement les associations qui font mouche : noir mat et bois chêne, noir et marbre blanc, noir et carrelage de crédence en zellige ivoire. Espace Design vous accompagne de la conception à la pose.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Les éléments d&apos;une cuisine noire mat réussie</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Façades laquées noir mat ou anthracite profond',
              'Plan de travail en quartz noir ou granite veiné',
              'Crédence en zellige blanc, carrelage métro ou ardoise',
              'Éclairage multicouche (spots + LED sous meubles + suspension)',
              'Poignées minimalistes ou façades sans poignées (push-to-open)',
              'Électroménager inox brossé ou noir mat assorti',
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
                  ['Cuisine noire mat complète (pose + équipement, hors électroménager)', '12 000 € – 25 000 €'],
                  ['Façades laquées noires mat (remplacement sur caissons existants)', '150 € – 400 €/m²'],
                  ['Plan de travail quartz ou granite noir (fourni et posé)', '200 € – 600 €/m²'],
                  ['Crédence carrelage zellige ou métro (pose incluse)', '80 € – 180 €/m²'],
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
