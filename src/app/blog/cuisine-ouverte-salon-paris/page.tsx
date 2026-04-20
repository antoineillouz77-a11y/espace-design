import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cuisine Ouverte Salon Paris', item: 'https://espacedesignparis.fr/blog/cuisine-ouverte-salon-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Cuisine ouverte sur salon à Paris : abattre une cloison, IPN et prix 2025",
  description: "Ouvrir la cuisine sur le salon à Paris : mur porteur ou non porteur, pose d'IPN, démarches et prix des travaux. Devis gratuit, artisan qualifié.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/cuisine-ouverte-salon-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix pour abattre une cloison de cuisine à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Abattre une cloison non porteuse de cuisine coûte entre 600 et 1 500 € à Paris (démolition, évacuation des gravats, rebouchage, peinture). Si le mur est porteur et nécessite la pose d\'un IPN, le budget grimpe à 4 000 – 8 000 € selon la longueur de la poutre, les travaux de maçonnerie et la remise en état.' },
    },
    {
      '@type': 'Question',
      name: 'Comment savoir si ma cloison de cuisine est un mur porteur ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un mur porteur est généralement en béton, en pierre ou en brique pleine, perpendiculaire à la façade et d\'une épaisseur supérieure à 15 cm. Une cloison non porteuse est souvent en carreaux de plâtre (10 à 12 cm). En cas de doute, seul un bureau d\'études structure ou un architecte peut valider le diagnostic via les plans de la copropriété. À Paris, cette étape est indispensable avant tout abattage.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps durent les travaux pour ouvrir une cuisine sur le salon ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pour une cloison non porteuse simple, le chantier dure 2 à 5 jours (démolition + remise en état). Pour un mur porteur avec IPN, comptez 7 à 14 jours selon la complexité structurelle et les délais d\'étayage. Espace Design coordonne l\'ensemble des corps de métier (maçon, plaquiste, électricien) pour minimiser la durée du chantier.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Cuisine Ouverte sur Salon Paris — Abattre Cloison, IPN, Prix 2025 | Espace Design',
  description: 'Ouvrir la cuisine sur le salon à Paris : mur porteur ou non porteur, pose IPN, prix des travaux. Artisan qualifié, assurance décennale, devis gratuit sous 48h.',
}

export default function CuisineOuverteSalonParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Cuisine Ouverte sur Salon à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Abattre la cloison entre cuisine et salon transforme radicalement un appartement parisien. Mur porteur, IPN, démarches : tout ce qu'il faut savoir avant de se lancer.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi ouvrir la cuisine sur le salon dans un appartement parisien ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Dans les appartements parisiens aux superficies souvent réduites, ouvrir la cuisine sur le salon est l'une des transformations les plus efficaces pour gagner en luminosité et en convivialité. La suppression d'une cloison crée un espace de vie fluide, agrandit visuellement les deux pièces et facilite la circulation. C'est aussi une valorisation immobilière significative : un appartement avec cuisine ouverte bien conçue se vend en moyenne 5 à 10 % plus cher selon les agents immobiliers parisiens.</p>
          <p className="text-gray-600 leading-relaxed mb-4">La première étape, cruciale, est de déterminer si la cloison est porteuse ou non. Une cloison en carreaux de plâtre (épaisseur 10-12 cm) peut être abattue directement. Un mur porteur en béton ou en pierre nécessite la pose d'un IPN (poutre métallique) pour reprendre les charges, après validation par un bureau d'études structure. À Paris, les immeubles haussmanniens ont souvent des configurations atypiques : l'expertise technique est indispensable.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Les étapes clés pour ouvrir votre cuisine sur le salon</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Diagnostic structure : mur porteur ou non porteur',
              'Étude bureau structure si mur porteur (obligatoire)',
              'Déclaration préalable ou permis selon la copropriété',
              'Étayage et pose de l\'IPN si nécessaire',
              'Démolition, évacuation des gravats, rebouchage',
              'Remise en état : sol, plafond, électricité, peinture',
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
                  ['Abattage cloison non porteuse (tout compris)', '600 – 1 500 €'],
                  ['Étude bureau structure (mur porteur)', '400 – 800 €'],
                  ['Pose IPN + maçonnerie mur porteur', '2 500 – 6 000 €'],
                  ['Remise en état complète après travaux', '800 – 2 500 €'],
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
