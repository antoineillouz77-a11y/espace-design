import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation investissement locatif Paris', item: 'https://espacedesignparis.fr/blog/renovation-investissement-locatif-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation investissement locatif Paris : stratégie, ROI et travaux prioritaires 2025",
  description: "Rénover un appartement pour le louer à Paris : quels travaux prioriser, budgets types, calcul du retour sur investissement et impact DPE. Guide Espace Design 2025.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
    logo: { '@type': 'ImageObject', url: 'https://espacedesignparis.fr/images/logo.png' },
  },
  datePublished: '2025-04-20',
  dateModified: '2025-06-01',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-investissement-locatif-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quels travaux faire avant de mettre un appartement en location à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un investissement locatif à Paris, priorisez la mise aux normes électriques (obligatoire si installation de plus de 15 ans), la rénovation de la salle de bain (impact loyer +10 à +20 %), la cuisine si vétuste, et la peinture en tons neutres. Évitez les choix trop personnalisés.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le retour sur investissement d'une rénovation locative à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À Paris, une rénovation bien ciblée permet d'augmenter le loyer de 15 à 30 %. Pour un studio de 25 m² dont le loyer passe de 900 à 1 100 € par mois, un investissement de 15 000 € est amorti en 6 ans. La plus-value à la revente peut dépasser 2 à 3 fois le coût des travaux dans les arrondissements prisés.",
      },
    },
    {
      '@type': 'Question',
      name: "Vaut-il mieux louer vide ou meublé après rénovation à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En meublé LMNP, les loyers sont 15 à 25 % supérieurs à la location vide pour les petites surfaces. La rénovation doit inclure des rangements encastrés et une cuisine équipée. Pour les grands appartements, la location vide est souvent plus stable avec un public familial.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation investissement locatif Paris : ROI & stratégie 2025 | Espace Design',
  description: "Rénover un appartement pour le louer à Paris : quels travaux prioriser, budgets types, calcul du ROI et impact DPE. Guide complet Espace Design 2025.",
}

export default function RenovationInvestissementLocatifParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <nav className="text-xs text-gray-500 mb-6 flex justify-center gap-2">
          <Link href="/" className="hover:text-[#D4AF37]">Accueil</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#D4AF37]">Blog</Link>
          <span>/</span>
          <span className="text-gray-400">Rénovation investissement locatif Paris</span>
        </nav>
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Investissement Locatif</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 max-w-3xl mx-auto leading-tight">
          Rénovation investissement locatif Paris :<br className="hidden sm:block" /> stratégie, ROI et travaux 2025
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Quels travaux prioriser avant de louer, comment calculer votre retour sur investissement et choisir
          entre location vide et meublée à Paris. Guide complet par Espace Design.
        </p>
        <p className="text-gray-500 text-xs mt-4">Publié le 20 avril 2025</p>
      </section>

      {/* Article body */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            À Paris, rénover un appartement destiné à la location est l&apos;un des leviers les plus puissants
            pour maximiser le rendement locatif et la valeur patrimoniale du bien. Mais tous les travaux ne se
            valent pas en termes de retour sur investissement. L&apos;enjeu est de concentrer le budget sur ce
            qui fait vraiment monter le loyer — et d&apos;éviter les dépenses inutiles.
          </p>

          {/* Travaux prioritaires */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Quels travaux prioriser pour un investissement locatif à Paris ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Chaque euro investi doit avoir un impact mesurable sur le loyer ou sur l&apos;attractivité du bien.
            Voici les postes à traiter en priorité, classés par impact sur le rendement locatif.
          </p>

          <div className="overflow-x-auto mb-10">
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

          {/* ROI exemples */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Calcul de rentabilité : exemples concrets à Paris
          </h2>

          <div className="space-y-5 mb-10">
            {[
              {
                titre: 'Studio 25 m² — Paris 11e',
                desc: 'Rénovation salle de bain + peinture + cuisine équipée + parquet.',
                investissement: '15 000 €',
                loyerAvant: '900 €/mois',
                loyerApres: '1 100 €/mois',
                amortissement: '6 ans',
                color: 'border-green-200 bg-green-50',
              },
              {
                titre: '2 pièces 45 m² — Paris 15e',
                desc: 'Rénovation salle de bain + cuisine + peinture + parquet + mise aux normes électriques.',
                investissement: '30 000 €',
                loyerAvant: '1 400 €/mois',
                loyerApres: '1 750 €/mois',
                amortissement: '7 ans',
                color: 'border-amber-200 bg-amber-50',
              },
              {
                titre: '3 pièces 65 m² — Paris 8e',
                desc: 'Rénovation complète haut de gamme — location meublée ou vide premium.',
                investissement: '65 000 €',
                loyerAvant: '2 500 €/mois',
                loyerApres: '3 200 €/mois',
                amortissement: '8 ans',
                color: 'border-blue-200 bg-blue-50',
              },
            ].map((s) => (
              <div key={s.titre} className={`rounded-lg border p-5 ${s.color}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#1C1C1C] text-sm">{s.titre}</h3>
                  <span className="text-xs text-gray-500">Amorti en {s.amortissement}</span>
                </div>
                <p className="text-gray-500 text-sm mb-3">{s.desc}</p>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-gray-400 block">Investissement</span>
                    <span className="font-semibold text-[#1C1C1C]">{s.investissement}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">Loyer avant</span>
                    <span className="font-semibold text-[#1C1C1C]">{s.loyerAvant}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">Loyer après</span>
                    <span className="font-semibold text-[#B8960C]">{s.loyerApres}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DPE */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Impact du DPE sur l&apos;obligation de rénover
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Depuis la loi Climat et Résilience, les logements classés G ne peuvent plus être loués à partir
            de 2025 (nouveaux baux), les F à partir de 2028. À Paris, de nombreux appartements haussmanniens
            sont concernés. Cela change radicalement le calcul pour le propriétaire-bailleur.
          </p>
          <div className="space-y-3 mb-10">
            {[
              {
                n: 'G',
                titre: 'DPE G — Interdit à la location dès 2025',
                detail: "Travaux d'isolation thermique obligatoires avant toute mise en location. Budget : de 10 000 à 40 000 € selon la surface et les travaux nécessaires (isolation combles, murs, fenêtres).",
              },
              {
                n: 'F',
                titre: 'DPE F — Interdit à la location en 2028',
                detail: "Vous avez encore du temps, mais les travaux doivent être planifiés. Une rénovation énergétique bien menée fait baisser les charges et augmente l'attractivité du bien.",
              },
              {
                n: 'D',
                titre: 'DPE D ou mieux — Atout locatif',
                detail: "Un bon DPE est un argument de location. Les locataires parisiens sont de plus en plus attentifs aux charges énergétiques, surtout depuis la hausse des prix de l'énergie.",
              },
            ].map((item) => (
              <div key={item.n} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#D4AF37]/20 text-[#B8960C] text-xs font-semibold flex items-center justify-center mt-0.5">
                  {item.n}
                </span>
                <div>
                  <p className="font-semibold text-[#1C1C1C] text-sm mb-1">{item.titre}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Vide vs meublé */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Location vide ou meublée (LMNP) : quelle rénovation choisir ?
          </h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Critère</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Location vide</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Meublé LMNP</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { critere: 'Loyer', vide: 'Base', meuble: '+15 à +25 % (petites surfaces)' },
                  { critere: 'Travaux spécifiques', vide: 'Rénovation standard', meuble: 'Rangements, cuisine équipée, mobilier' },
                  { critere: 'Public cible', vide: 'Familles (3-4 pièces)', meuble: 'Étudiants, jeunes actifs' },
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
          <div className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-6 mb-10">
            <div className="space-y-3">
              {[
                { t: 'Décoration trop personnalisée', d: "Couleurs vives ou matériaux trop spécifiques rebutent les locataires. Optez pour des tons neutres (blanc, beige, gris clair) qui séduisent le plus grand nombre." },
                { t: "Négliger l'électricité", d: "Une installation non conforme expose le propriétaire à des problèmes d'assurance et à des obligations légales. C'est un incontournable avant toute mise en location." },
                { t: 'Mobilier bas de gamme en LMNP', d: "Un mobilier cheap se détériore rapidement. Investissez dans des pièces solides qui tiendront plusieurs rotations de locataires." },
                { t: 'Oublier le budget imprévus', d: "Dans un appartement ancien parisien, on découvre souvent des surprises (amiante, canalisations hors normes). Prévoyez 10 % du budget en réserve." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">&#x2717;</span>
                  <div>
                    <p className="font-semibold text-[#1C1C1C] text-sm mb-0.5">{item.t}</p>
                    <p className="text-gray-500 text-sm">{item.d}</p>
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
            Espace Design accompagne les propriétaires-bailleurs dans leur stratégie de rénovation locative
            à Paris. Nous conseillons sur les travaux à prioriser selon votre objectif (vide, meublé, revente)
            et réalisons les chantiers en gestion complète.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Audit stratégique : quels travaux pour quel retour',
              'Rénovation clé en main : un seul interlocuteur',
              'Livraison rapide pour minimiser la vacance locative',
              'Devis gratuit et détaillé sous 48h',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{item}</span>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mt-10 mb-4">Questions fréquentes</h2>
          <div className="space-y-3">
            {schemaFAQ.mainEntity.map((faq) => (
              <div key={faq.name} className="border border-gray-200 rounded p-4">
                <p className="font-semibold text-[#1C1C1C] mb-1 text-sm">{faq.name}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-avant-achat-appartement-paris', title: "Rénovation avant achat appartement Paris" },
              { href: '/blog/prix-renovation-appartement-paris', title: "Prix d'une rénovation à Paris en 2025" },
              { href: '/blog/electricite-appartement-paris', title: "Électricité appartement Paris : mise aux normes" },
              { href: '/blog/renovation-studio-paris', title: "Rénovation studio Paris : prix et astuces" },
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

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre investissement locatif à rénover à Paris ?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
          Devis gratuit sous 48h — nous maximisons votre retour sur investissement locatif.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors"
          >
            Devis gratuit <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"
          >
            <Phone size={16} />06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
