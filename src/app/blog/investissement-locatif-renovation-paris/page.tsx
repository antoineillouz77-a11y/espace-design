import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation Investissement Locatif Paris : Rentabilité & Stratégie 2025',
  description:
    'Rénover un appartement pour le louer à Paris : quels travaux prioriser, budget, retour sur investissement, impact sur le loyer. Guide Espace Design.',
  keywords: [
    'investissement locatif rénovation Paris',
    'rénover appartement louer Paris',
    'rentabilité rénovation Paris',
    'travaux avant location Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Investissement Locatif Paris', item: 'https://espacedesignparis.fr/blog/investissement-locatif-renovation-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Investissement Locatif Paris : Rentabilité & Stratégie 2025',
  description: 'Quels travaux prioriser avant de louer à Paris, comment calculer le retour sur investissement et choisir entre location vide et meublée.',
  datePublished: '2025-04-20',
  dateModified: '2025-04-20',
  inLanguage: 'fr-FR',
  author: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
    logo: { '@type': 'ImageObject', url: 'https://espacedesignparis.fr/images/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/investissement-locatif-renovation-paris' },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels travaux faire avant de mettre un appartement en location à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour un investissement locatif à Paris, priorisez : la mise aux normes électriques (obligatoire si installation > 15 ans), le remplacement de la salle de bain (impact loyer +10-20%), la cuisine si vétuste, et la peinture. Évitez la décoration trop personnalisée — restez dans des tons neutres.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le retour sur investissement d\'une rénovation locative à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'À Paris, une rénovation bien ciblée permet d\'augmenter le loyer de 15 à 30 %. Pour un studio de 25 m² dont le loyer passe de 900 € à 1 100 €, l\'investissement de 15 000 € en travaux est amorti en 6 ans. La plus-value à la revente peut dépasser 2 à 3 fois le coût des travaux dans les arrondissements prisés.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vaut-il mieux louer vide ou meublé après rénovation à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En meublé (LMNP), les loyers sont 15 à 25 % supérieurs à la location vide pour les petites surfaces (studios, 2 pièces). La rénovation doit alors inclure des rangements encastrés et une cuisine équipée. Pour les grands appartements (3-4 pièces), la location vide est souvent plus stable avec un public familial.',
      },
    },
  ],
}

export default function InvestissementLocatifRenovationParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

      {/* Hero */}
      <section className="pt-32 pb-14 bg-[#1C1C1C] text-center px-4">
        <nav className="text-xs text-gray-500 mb-6 flex justify-center gap-2">
          <Link href="/" className="hover:text-[#D4AF37]">Accueil</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#D4AF37]">Blog</Link>
          <span>/</span>
          <span className="text-gray-400">Rénovation investissement locatif Paris</span>
        </nav>
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Investissement Locatif</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
          Rénovation investissement locatif Paris :<br className="hidden sm:block" /> rentabilité & stratégie 2025
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Quels travaux prioriser avant de louer à Paris, comment calculer le retour sur investissement et choisir entre location vide et meublée. Guide complet par Espace Design.
        </p>
        <p className="text-gray-500 text-xs mt-4">Publié le 20 avril 2025</p>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            À Paris, la rénovation d&apos;un appartement destiné à la location est un levier puissant pour maximiser le rendement locatif et la valeur patrimoniale du bien. Mais tous les travaux ne se valent pas en termes de retour sur investissement. L&apos;enjeu est de concentrer le budget sur ce qui fait vraiment monter le loyer — et d&apos;éviter les dépenses inutiles.
          </p>

          {/* Travaux à prioriser — ROI */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Quels travaux prioriser pour un investissement locatif à Paris ?
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Poste</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Budget moyen</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Impact loyer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { poste: 'Salle de bain refaite', budget: '6 000 – 15 000 €', impact: '+10 à +20 %' },
                  { poste: 'Cuisine équipée moderne', budget: '5 000 – 15 000 €', impact: '+8 à +15 %' },
                  { poste: 'Peinture tons neutres', budget: '2 000 – 7 000 €', impact: '+3 à +5 %' },
                  { poste: 'Parquet ou sol neuf', budget: '3 000 – 9 000 €', impact: '+5 à +10 %' },
                  { poste: 'Mise aux normes électriques', budget: '3 000 – 8 000 €', impact: 'Obligatoire + sécurité' },
                  { poste: 'Rangements encastrés (LMNP)', budget: '3 000 – 8 000 €', impact: '+5 à +10 % en meublé' },
                  { poste: 'Double vitrage', budget: '3 000 – 8 000 €', impact: 'Améliore DPE + loyer' },
                ].map((row, i) => (
                  <tr key={row.poste} className={i % 2 === 1 ? 'bg-[#FAFAF8]' : ''}>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.poste}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.budget}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 font-medium text-[#B8960C]">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Calcul rentabilité */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Calcul de rentabilité : exemples concrets à Paris
          </h2>

          <div className="space-y-5 mb-8">
            {[
              {
                niveau: 'Studio 25 m² — Paris 11e',
                desc: 'Rénovation complète salle de bain + peinture + cuisine équipée + parquet.',
                investissement: '15 000 €',
                loyer_avant: '900 €/mois',
                loyer_apres: '1 100 €/mois',
                amortissement: '6 ans',
                color: 'border-green-200 bg-green-50',
              },
              {
                niveau: '2 pièces 45 m² — Paris 15e',
                desc: 'Rénovation salle de bain + cuisine + peinture + parquet + mise aux normes électriques.',
                investissement: '30 000 €',
                loyer_avant: '1 400 €/mois',
                loyer_apres: '1 750 €/mois',
                amortissement: '7 ans',
                color: 'border-amber-200 bg-amber-50',
              },
              {
                niveau: '3 pièces 65 m² — Paris 8e',
                desc: 'Rénovation complète — haut de gamme, location meublée ou location vide premium.',
                investissement: '65 000 €',
                loyer_avant: '2 500 €/mois',
                loyer_apres: '3 200 €/mois',
                amortissement: '8 ans',
                color: 'border-blue-200 bg-blue-50',
              },
            ].map((s) => (
              <div key={s.niveau} className={`rounded-lg border p-5 ${s.color}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#1C1C1C] text-sm">{s.niveau}</h3>
                  <span className="text-xs text-gray-500 font-light">Amorti en {s.amortissement}</span>
                </div>
                <p className="text-gray-500 text-sm font-light mb-3">{s.desc}</p>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-gray-400 block">Investissement</span>
                    <span className="font-semibold text-[#1C1C1C]">{s.investissement}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">Loyer avant</span>
                    <span className="font-semibold text-[#1C1C1C]">{s.loyer_avant}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">Loyer après</span>
                    <span className="font-semibold text-[#B8960C]">{s.loyer_apres}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DPE */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Impact du DPE sur le loyer et l&apos;obligation de rénovation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Depuis la loi Climat et Résilience, les logements classés G ne peuvent plus être loués à partir de 2025 (nouveaux baux), les F à partir de 2028. À Paris, de nombreux appartements haussmanniens sont concernés. Cela change radicalement le calcul du propriétaire-bailleur :
          </p>
          <div className="space-y-3 mb-8">
            {[
              { n: 'G', t: 'DPE G — Interdit à la location dès 2025', d: 'Travaux d\'isolation thermique obligatoires avant toute mise en location. Budget : de 10 000 à 40 000 € selon la surface et les travaux nécessaires (isolation combles, murs, fenêtres).' },
              { n: 'F', t: 'DPE F — Interdit à la location en 2028', d: 'Vous avez encore du temps, mais les travaux doivent être planifiés. Une rénovation énergétique peut aussi faire baisser les charges et augmenter l\'attractivité du bien.' },
              { n: 'D', t: 'DPE D ou mieux — Atout locatif', d: 'Un bon DPE est un argument de location. Les locataires parisiens sont de plus en plus attentifs aux charges énergétiques, surtout depuis la hausse des prix de l\'énergie.' },
            ].map((item) => (
              <div key={item.n} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#D4AF37]/20 text-[#B8960C] text-xs font-semibold flex items-center justify-center mt-0.5">{item.n}</span>
                <div>
                  <p className="font-semibold text-[#1C1C1C] text-sm mb-1">{item.t}</p>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{item.d}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Vide vs meublé */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Location vide ou meublée (LMNP) : quelle rénovation choisir ?
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Critère</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Location vide</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Location meublée (LMNP)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { critere: 'Loyer', vide: 'Base', meuble: '+15 à +25 % (petites surfaces)' },
                  { critere: 'Travaux spécifiques', vide: 'Rénovation standard', meuble: 'Rangements encastrés, cuisine équipée, mobilier' },
                  { critere: 'Public cible', vide: 'Familles (3-4 pièces)', meuble: 'Étudiants, jeunes actifs (studios, 2 pièces)' },
                  { critere: 'Fiscalité', vide: 'Revenus fonciers', meuble: 'BIC, amortissement déductible' },
                  { critere: 'Stabilité locataire', vide: 'Bail 3 ans minimum', meuble: 'Bail 1 an, turnover plus élevé' },
                ].map((row, i) => (
                  <tr key={row.critere} className={i % 2 === 1 ? 'bg-[#FAFAF8]' : ''}>
                    <td className="p-3 border border-gray-200 text-gray-600 font-medium">{row.critere}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.vide}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.meuble}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Erreurs à éviter */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Les erreurs à éviter lors d&apos;une rénovation locative à Paris
          </h2>
          <div className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-6 mb-8">
            <div className="space-y-3">
              {[
                { t: 'Personnaliser trop la décoration', d: 'Couleurs vives, matériaux trop spécifiques. Optez pour des tons neutres (blanc, beige, gris clair) qui plaisent au plus grand nombre.' },
                { t: 'Négliger l\'électricité', d: 'Une installation non conforme expose le propriétaire à des problèmes d\'assurance et des obligations légales. C\'est un incontournable.' },
                { t: 'Investir dans du mobilier bas de gamme (LMNP)', d: 'Un mobilier cheap se détériore rapidement. Mieux vaut investir dans des pièces solides qui dureront plusieurs locataires.' },
                { t: 'Oublier le budget imprévus', d: 'Dans un appartement ancien parisien, on découvre souvent des surprises (amiante, canalisations hors normes). Prévoyez 10 % du budget en réserve.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                  <div>
                    <p className="font-semibold text-[#1C1C1C] text-sm mb-0.5">{item.t}</p>
                    <p className="text-gray-500 text-sm font-light">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Espace Design */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Espace Design : rénovation locative à Paris, de la stratégie à la livraison
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Espace Design accompagne les propriétaires-bailleurs dans leur stratégie de rénovation locative à Paris. Nous vous conseillons sur les travaux à prioriser selon votre objectif (vide, meublé, revente) et réalisons les chantiers en gestion complète.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Audit stratégique : quels travaux pour quel retour sur investissement',
              'Rénovation clé en main : un seul interlocuteur',
              'Livraison rapide pour minimiser la vacance locative',
              'Devis gratuit et détaillé sous 48h',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#D4AF37] mt-1">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </article>

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-avant-achat-appartement-paris', title: 'Rénovation avant achat appartement Paris' },
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix d\'une rénovation à Paris en 2025' },
              { href: '/blog/electricite-appartement-paris', title: 'Électricité appartement Paris : mise aux normes' },
              { href: '/blog/renovation-studio-paris', title: 'Rénovation studio Paris : prix et astuces' },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="bg-white border border-gray-100 rounded-lg p-4 hover:border-[#D4AF37]/40 transition-colors group"
              >
                <span className="text-sm text-[#1C1C1C] font-light group-hover:text-[#B8960C] transition-colors">{a.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos zones d&apos;intervention</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/renovation-paris-6e', label: '6e' },
              { href: '/renovation-paris-7e', label: '7e' },
              { href: '/renovation-paris-8e', label: '8e' },
              { href: '/renovation-paris-15e', label: '15e' },
              { href: '/renovation-paris-16e', label: '16e' },
              { href: '/renovation-paris-17e', label: '17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
              { href: '/renovation-versailles', label: 'Versailles' },
            ].map((z) => (
              <Link
                key={z.href}
                href={z.href}
                className="text-xs text-[#1C1C1C] border border-gray-200 rounded px-3 py-1.5 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light"
              >
                {z.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl font-semibold text-white mb-3">
          Votre investissement locatif à rénover à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-6 max-w-lg mx-auto">
          Devis gratuit sous 48h — nous maximisons votre retour sur investissement locatif.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#c9a030] transition-colors duration-300"
        >
          Demander un devis <ArrowRight size={13} />
        </Link>
      </section>
    </>
  )
}
