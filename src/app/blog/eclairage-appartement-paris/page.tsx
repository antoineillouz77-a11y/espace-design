import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Eclairage Appartement Paris', item: 'https://espacedesignparis.fr/blog/eclairage-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Eclairage appartement Paris : spots LED, rubans, domotique — prix 2025",
  description: "Concevoir l'éclairage de votre appartement parisien : spots LED encastrés, rubans LED, variateurs et domotique. Conseils et tarifs d'installation 2025.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/eclairage-appartement-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'installation de spots LED encastrés à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'L\'installation de spots LED encastrés à Paris coûte entre 80 et 180 € par spot, main-d\'œuvre et fourniture comprises (spot, boîte d\'encastrement, câblage). Pour un salon de 25 m² avec 8 spots sur variateur, comptez 800 à 1 600 €. Le prix varie selon l\'accessibilité du plafond (faux plafond existant ou création), la marque des spots et la présence d\'un variateur.' },
    },
    {
      '@type': 'Question',
      name: 'Peut-on poser des rubans LED dans une cuisine d\'appartement parisien ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, les rubans LED sont idéaux en cuisine : sous les meubles hauts pour éclairer le plan de travail, dans les niches de crédence ou en soulignage de mobilier. Choisissez un ruban LED IRC 90 minimum pour un rendu des couleurs fidèle et une température de couleur 3 000 K (blanc chaud) ou 4 000 K (blanc neutre). La pose est simple mais doit être raccordée sur un circuit dédié avec transformateur 12 V ou 24 V — une demi-journée d\'électricien suffit.' },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte l\'installation d\'un système de domotique éclairage à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un système de domotique éclairage de base (interrupteurs connectés, application smartphone, scènes de lumière) coûte entre 1 500 et 4 000 € pour un appartement de 3 pièces à Paris. Les solutions Philips Hue, Legrand Netatmo ou Somfy sont les plus répandues. Pour une installation complète avec KNX (standard haut de gamme), le budget monte à 5 000 – 12 000 €. La domotique éclairage peut réduire la consommation jusqu\'à 30 % grâce à la programmation et aux capteurs de présence.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Eclairage Appartement Paris — Spots LED, Rubans & Domotique | Espace Design',
  description: 'Eclairage appartement Paris : spots LED encastrés, rubans LED cuisine, variateurs et domotique. Electricien qualifié, devis gratuit sous 48h, assurance décennale.',
}

export default function EclairageAppartementParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Eclairage Appartement à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Spots LED encastrés, rubans lumineux, variateurs et domotique : une conception éclairage soignée transforme l'ambiance de chaque pièce et valorise votre appartement parisien.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Concevoir l'éclairage de votre appartement parisien</h2>
          <p className="text-gray-600 leading-relaxed mb-4">L'éclairage est souvent le parent pauvre des rénovations — et pourtant, il peut transformer radicalement l'ambiance d'un appartement parisien sans travaux lourds. La règle d'or : multiplier les sources lumineuses à différentes hauteurs (plafond, plan de travail, sol) et les rendre modulables via des variateurs. Spots LED encastrés en plafond pour l'éclairage général, rubans LED sous les meubles pour l'éclairage d'ambiance, appliques murales pour les zones de lecture — chaque couche lumineuse joue un rôle précis.</p>
          <p className="text-gray-600 leading-relaxed mb-4">La technologie LED a révolutionné les possibilités : durée de vie supérieure à 25 000 heures, consommation divisée par 5 par rapport à l'halogène, et une gamme de températures de couleur de 2 700 K (blanc très chaud, ambiance cosy) à 6 500 K (blanc froid, lumière du jour). À Paris, les électriciens Espace Design conçoivent votre plan lumière et réalisent l'installation complète, de la mise à la terre jusqu'aux finitions, avec raccordement au tableau électrique conforme NF C 15-100.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Solutions d'éclairage pour un appartement parisien</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Spots LED encastrés sur variateur : éclairage général modulable',
              'Rubans LED IRC 90 : sous-meubles cuisine, niches, soulignage',
              'Appliques et suspensions : points lumineux décoratifs',
              'Domotique éclairage : scènes, programmation, smartphone',
              'Capteurs de présence et détecteurs crépusculaires',
              'Spots orientables pour mettre en valeur tableaux ou architecture',
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
                  ['Installation spot LED encastré (fourni posé)', '80 – 180 € / spot'],
                  ['Pose ruban LED cuisine (ml, fourni posé)', '45 – 90 € / ml'],
                  ['Variateur connecté par zone', '80 – 250 €'],
                  ['Domotique éclairage complète (3 pièces)', '1 500 – 4 000 €'],
                ].map(([label, price]) => (
                  <tr key={label} className="border-b border-gray-100"><td className="p-3 text-gray-600">{label}</td><td className="p-3 text-right font-medium">{price}</td></tr>
                ))}
              </tbody>
            </table>
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
