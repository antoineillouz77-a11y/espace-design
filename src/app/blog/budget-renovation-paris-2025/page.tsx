import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Budget Rénovation Paris 2025 : estimez votre projet au m² | Espace Design',
  description:
    'Comment établir un budget rénovation à Paris en 2025 ? Coûts par poste, marges d\'erreur, aides disponibles. Guide pratique avec simulateur.',
  keywords: [
    'budget rénovation Paris',
    'prix rénovation Paris 2025',
    'coût rénovation appartement Paris',
    'estimation travaux Paris',
    'budget travaux appartement Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Budget rénovation Paris 2025', item: 'https://espacedesignparis.fr/blog/budget-renovation-paris-2025' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Budget Rénovation Paris 2025 : estimez votre projet au m²',
  description: 'Comment établir un budget rénovation à Paris en 2025 ? Coûts par poste, marges d\'erreur, aides disponibles.',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/budget-renovation-paris-2025' },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Comment calculer son budget de rénovation à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Commencez par identifier les travaux prioritaires (structure, étanchéité, électricité, plomberie), puis les travaux de confort (isolation, chauffage), et enfin les travaux esthétiques (peinture, sol, cuisine). Pour un appartement parisien standard, comptez 400-700 €/m² pour une rénovation légère, 700-1 200 €/m² pour une rénovation complète, et 1 200-2 000 €/m² pour une rénovation haut de gamme.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels postes de travaux sont les plus chers à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La salle de bain (5 000-25 000 €) et la cuisine (6 000-30 000 €) représentent souvent 40-50% du budget total. La mise aux normes électrique (3 000-8 000 €) et la plomberie (2 000-10 000 €) sont des dépenses incontournables dans les immeubles anciens. Le parquet parisien d\'époque peut coûter 3 000-8 000 € à rénover.',
      },
    },
    {
      '@type': 'Question',
      name: 'Existe-t-il des aides pour la rénovation à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui : MaPrimeRénov\' pour les travaux d\'isolation et de chauffage (jusqu\'à 70% du montant selon revenus), l\'éco-PTZ (prêt à taux zéro jusqu\'à 50 000 €), la TVA à 10% pour les travaux dans les logements de plus de 2 ans (au lieu de 20%), et les aides de la Ville de Paris pour certains travaux de façade.',
      },
    },
  ],
}

export default function BudgetRenovationParis2025() {
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
          <span className="text-gray-400">Budget rénovation Paris 2025</span>
        </nav>
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Prix & Budgets</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
          Budget rénovation Paris 2025
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Tout ce qu&apos;il faut savoir pour estimer votre projet de rénovation à Paris : coûts par poste, marges d&apos;erreur à prévoir, aides financières disponibles.
        </p>
        <p className="text-gray-500 text-xs mt-4">Publié le 20 avril 2025</p>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Établir un budget de rénovation à Paris est souvent la première difficulté des propriétaires et des investisseurs. Le marché parisien présente des particularités : immeubles anciens aux surprises de chantier fréquentes, main-d&apos;œuvre qualifiée plus coûteuse qu&apos;en province, et normes de copropriété parfois contraignantes. Voici comment calculer votre enveloppe avec précision.
          </p>

          {/* 3 niveaux */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Les 3 niveaux de rénovation et leurs prix à Paris
          </h2>
          <div className="space-y-5 mb-10">
            {[
              {
                niveau: 'Rénovation légère (rafraîchissement)',
                desc: 'Peinture, remplacement des sols, petites réparations. Structure, électricité et plomberie conservées si conformes.',
                prix: '400 – 700 €/m²',
                color: 'border-green-200 bg-green-50',
              },
              {
                niveau: 'Rénovation complète',
                desc: 'Tout est refait : électricité, plomberie, cuisine, salle de bain, parquet, peinture, menuiseries intérieures.',
                prix: '700 – 1 200 €/m²',
                color: 'border-amber-200 bg-amber-50',
              },
              {
                niveau: 'Rénovation haut de gamme',
                desc: 'Matériaux premium, mobilier sur mesure, architecte d\'intérieur, finitions soignées dans chaque recoin.',
                prix: '1 200 – 2 000 €/m²',
                color: 'border-blue-200 bg-blue-50',
              },
            ].map((s) => (
              <div key={s.niveau} className={`rounded-lg border p-5 ${s.color}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#1C1C1C] text-sm">{s.niveau}</h3>
                  <span className="text-xs font-semibold text-[#1C1C1C] bg-white/60 px-2 py-0.5 rounded">{s.prix}</span>
                </div>
                <p className="text-gray-500 text-sm font-light">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Tableau postes */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Coûts détaillés par poste de travaux
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Voici les fourchettes de prix constatées à Paris en 2025, pour un appartement de taille standard (50-80 m²). Ces tarifs incluent la main-d&apos;œuvre et les matériaux standards (hors premium).
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Poste de travaux</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Prix standard</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Prix haut de gamme</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { poste: 'Électricité (mise aux normes)', std: '3 000 – 8 000 €', hg: '8 000 – 15 000 €' },
                  { poste: 'Plomberie (remplacement colonnes)', std: '2 000 – 6 000 €', hg: '6 000 – 12 000 €' },
                  { poste: 'Salle de bain (6-8 m²)', std: '5 000 – 12 000 €', hg: '15 000 – 25 000 €' },
                  { poste: 'Cuisine équipée', std: '6 000 – 15 000 €', hg: '20 000 – 40 000 €' },
                  { poste: 'Carrelage (pose au m²)', std: '50 – 80 €/m²', hg: '100 – 200 €/m²' },
                  { poste: 'Peinture intégrale (main-d\'œuvre)', std: '15 – 25 €/m²', hg: '30 – 50 €/m²' },
                  { poste: 'Parquet massif (fourni + posé)', std: '80 – 120 €/m²', hg: '150 – 250 €/m²' },
                  { poste: 'Menuiseries intérieures (portes)', std: '400 – 800 €/unité', hg: '1 000 – 2 500 €/unité' },
                  { poste: 'Isolation thermique (ITE ou ITI)', std: '40 – 80 €/m²', hg: '100 – 180 €/m²' },
                  { poste: 'Plâtrerie / cloisons', std: '50 – 80 €/m²', hg: '100 – 180 €/m²' },
                ].map((row, i) => (
                  <tr key={row.poste} className={i % 2 === 1 ? 'bg-[#FAFAF8]' : ''}>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.poste}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.std}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.hg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Marge erreur */}
          <section className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-6 mb-10">
            <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-3">
              La marge d&apos;erreur : toujours prévoir +15 à 20 %
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Dans les immeubles parisiens anciens (construits avant 1948 pour la majorité), les découvertes de chantier sont quasi-systématiques. Une canalisation en plomb cachée dans une cloison, un plancher bois sous le carrelage, des fils électriques non conformes sous l&apos;enduit — autant de postes non prévisibles à l&apos;ouverture du chantier.
            </p>
            <div className="space-y-2">
              {[
                'Bâti ancien (avant 1948) : +20 % de réserve recommandée',
                'Bâti des années 60-80 : +15 % suffisent généralement',
                'Construction neuve ou récente : +10 % de sécurité',
                'Rénovation partielle ciblée : +10 % sur le poste concerné',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle size={14} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* 3 devis */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Comment obtenir 3 devis comparables à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            La règle des 3 devis est un principe fondamental — mais à Paris, tous les devis ne se comparent pas facilement. Voici comment vous assurer de comparer des prestations identiques :
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                titre: '1. Définissez un cahier des charges précis',
                desc: 'Avant d\'inviter les artisans, listez chaque poste avec les dimensions et matériaux souhaités. Un artisan qui chiffre sans plan sera toujours moins précis — et plus susceptible de vous facturer des avenants en cours de chantier.',
              },
              {
                titre: '2. Exigez le même niveau de détail sur chaque devis',
                desc: 'Un devis professionnel détaille chaque ligne : fournitures, main-d\'œuvre, surface ou quantité concernée. Méfiez-vous des forfaits globaux sans détail : impossible de comparer et de détecter ce qui est omis.',
              },
              {
                titre: '3. Vérifiez les garanties et assurances avant de signer',
                desc: 'Tout artisan intervenant sur le gros œuvre doit disposer d\'une assurance décennale. Demandez l\'attestation avant de signer. Les entreprises multi-corps ont souvent des RC Pro qui couvrent l\'ensemble des trades.',
              },
            ].map((item) => (
              <div key={item.titre} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-2">{item.titre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Phases travaux */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Les phases de travaux dans l&apos;ordre chronologique
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Respecter la séquence des corps de métier évite de refaire deux fois le même travail — et donc de dépenser inutilement. Voici l&apos;ordre canonique pour une rénovation complète à Paris :
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Phase</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Corps de métier</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Durée typique</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { phase: '1 — Démolition', corps: 'Démolisseur / plâtrier', duree: '1-3 jours' },
                  { phase: '2 — Gros œuvre / cloisons', corps: 'Maçon / plâtrier', duree: '1-3 semaines' },
                  { phase: '3 — Électricité (1er passage)', corps: 'Électricien', duree: '3-7 jours' },
                  { phase: '4 — Plomberie (1er passage)', corps: 'Plombier', duree: '3-7 jours' },
                  { phase: '5 — Isolation / doublage', corps: 'Plâtrier / isoleur', duree: '3-7 jours' },
                  { phase: '6 — Enduits / plâtre finition', corps: 'Plâtrier', duree: '1-2 semaines' },
                  { phase: '7 — Carrelage (SDB / cuisine)', corps: 'Carreleur', duree: '1-2 semaines' },
                  { phase: '8 — Menuiseries intérieures', corps: 'Menuisier', duree: '3-7 jours' },
                  { phase: '9 — Peinture', corps: 'Peintre', duree: '1-2 semaines' },
                  { phase: '10 — Sol (parquet / revêtement)', corps: 'Parqueteur', duree: '3-7 jours' },
                  { phase: '11 — Électricité (2e passage)', corps: 'Électricien', duree: '2-4 jours' },
                  { phase: '12 — Cuisine / SDB (finitions)', corps: 'Multi corps de métier', duree: '3-7 jours' },
                ].map((row, i) => (
                  <tr key={row.phase} className={i % 2 === 1 ? 'bg-[#FAFAF8]' : ''}>
                    <td className="p-3 border border-gray-200 text-gray-600 font-medium">{row.phase}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.corps}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Aides */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Aides financières disponibles à Paris en 2025
          </h2>
          <div className="space-y-4 mb-8">
            {[
              {
                aide: 'MaPrimeRénov\'',
                desc: 'Jusqu\'à 70 % du montant des travaux pour les ménages modestes. Couvre l\'isolation, le chauffage, la ventilation. Accessible via maprimerenov.gouv.fr.',
                montant: 'Jusqu\'à 70 %',
              },
              {
                aide: 'Éco-PTZ',
                desc: 'Prêt à taux zéro jusqu\'à 50 000 € pour un bouquet de travaux d\'amélioration énergétique. Remboursable sur 20 ans sans intérêts.',
                montant: 'Jusqu\'à 50 000 €',
              },
              {
                aide: 'TVA à 10 %',
                desc: 'TVA réduite (10 % au lieu de 20 %) pour les travaux de rénovation dans les logements de plus de 2 ans. Applicable à la quasi-totalité des travaux hors extension.',
                montant: 'Économie de 10 %',
              },
              {
                aide: 'Aides de la Ville de Paris',
                desc: 'Subventions pour ravalement de façade (30-50 % selon revenus), isolation toiture et remplacement de chaudière fioul. Renseignements auprès du Point Paris Rénovation.',
                montant: 'Variable selon projet',
              },
            ].map((item) => (
              <div key={item.aide} className="border border-gray-100 rounded-lg p-5 bg-white">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#1C1C1C] text-sm">{item.aide}</h3>
                  <span className="text-xs text-[#B8960C] font-medium bg-amber-50 px-2 py-0.5 rounded">{item.montant}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Espace Design */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Espace Design : devis rénovation Paris sous 48h
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Notre équipe établit un devis détaillé poste par poste, avec un planning prévisionnel et une liste de matériaux. Pas de mauvaises surprises : le budget est fixé avant le démarrage du chantier. Nous coordonnons l&apos;ensemble des corps de métier pour vous éviter toute surcharge de coordination.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Visite technique gratuite sous 48h',
              'Devis détaillé par poste, matériaux inclus',
              'Coordination de tous les corps de métier',
              'Suivi de chantier hebdomadaire avec compte rendu',
              'Assurance décennale et RC Pro',
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
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix rénovation appartement Paris' },
              { href: '/blog/renovation-2-pieces-paris', title: 'Rénovation 2 pièces Paris' },
              { href: '/blog/renovation-avant-achat-appartement-paris', title: 'Rénovation avant achat' },
              { href: '/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/renovation-cuisine-paris', title: 'Rénovation cuisine Paris' },
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
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-saint-germain-en-laye', label: 'Saint-Germain-en-Laye' },
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
      <section className="py-16 bg-[#D4AF37] text-center px-4">
        <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-3">
          Estimez votre budget rénovation à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-6 max-w-lg mx-auto">
          Devis gratuit et détaillé sous 48h — visite technique offerte sur Paris et Île-de-France.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#1C1C1C] text-white px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#333] transition-colors duration-300"
        >
          Demander un devis gratuit <ArrowRight size={13} />
        </Link>
      </section>
    </>
  )
}
