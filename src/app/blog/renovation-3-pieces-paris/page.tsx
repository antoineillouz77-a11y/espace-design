import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rénovation 3 Pièces Paris : Prix, Budget & Guide Complet 2025',
  description:
    'Rénover un 3 pièces à Paris : budget réaliste de 50 000 à 120 000 €, détail des postes, exemple de projet clé en main. Devis gratuit Espace Design.',
  keywords: [
    'rénovation 3 pièces Paris',
    'rénover 3 pièces Paris prix',
    'rénovation appartement 3 pièces Paris',
    'travaux 3 pièces Paris budget',
    'prix rénovation 3 pièces Paris',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation 3 pièces Paris', item: 'https://espacedesignparis.fr/blog/renovation-3-pieces-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation 3 Pièces Paris : Prix, Budget & Guide Complet 2025',
  description: 'Budget détaillé pour rénover un 3 pièces parisien, exemples de projets selon le niveau de finitions et conseils d\'artisan.',
  datePublished: '2025-04-19',
  dateModified: '2025-04-19',
  inLanguage: 'fr-FR',
  author: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
    logo: { '@type': 'ImageObject', url: 'https://espacedesignparis.fr/images/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/renovation-3-pieces-paris' },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation complète d\'un 3 pièces à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La rénovation complète d\'un 3 pièces parisien (60-80 m²) coûte entre 60 000 et 120 000 € selon le niveau de finitions. En rénovation standard (1 000 €/m²), comptez 60 000-80 000 €. En haut de gamme (1 500 €/m²), de 90 000 à 120 000 €. Ces prix incluent main-d\'œuvre, matériaux et coordination de tous les corps de métier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure la rénovation d\'un 3 pièces à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un rafraîchissement (peinture + sols) d\'un 3 pièces prend 3 à 4 semaines. Une rénovation partielle (salle de bain + cuisine + peinture) dure 6 à 10 semaines. Une rénovation complète avec électricité, plomberie et menuiserie sur mesure nécessite 12 à 20 semaines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment réduire le budget d\'une rénovation de 3 pièces à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour optimiser le budget : priorisez les travaux techniques obligatoires (électricité, plomberie) avant les finitions décoratives, choisissez des matériaux milieu de gamme dans les pièces secondaires et réservez le haut de gamme pour la cuisine et la salle de bain. Faites appel à un artisan qui gère plusieurs corps de métier pour réduire les marges intermédiaires.',
      },
    },
  ],
}

export default function Renovation3PiecesParis() {
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
          <span className="text-gray-400">Rénovation 3 pièces Paris</span>
        </nav>
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Prix & Budgets</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
          Rénovation 3 pièces Paris :<br className="hidden sm:block" /> prix, budget & guide 2025
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Budget réaliste pour rénover un 3 pièces parisien, exemples de projets et conseils pour maîtriser les coûts. Guide Espace Design.
        </p>
        <p className="text-gray-500 text-xs mt-4">Publié le 19 avril 2025</p>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Le 3 pièces est le type d&apos;appartement familial ou d&apos;investissement par excellence à Paris. Avec ses 60 à 80 m² typiques, il offre plus de liberté dans la conception et la décoration — mais aussi plus de postes de travaux à gérer. Comment budgéter correctement une rénovation de 3 pièces à Paris ? Voici notre guide complet.
          </p>

          {/* Budgets */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Budget rénovation 3 pièces à Paris : 3 niveaux
          </h2>
          <div className="space-y-5 mb-8">
            {[
              {
                niveau: 'Rafraîchissement',
                desc: 'Peinture intégrale, remplacement des sols, petites réparations. Structure, électricité et plomberie inchangées.',
                prix_m2: '300 – 500 €/m²',
                budget_60: '18 000 – 30 000 €',
                budget_80: '24 000 – 40 000 €',
                delai: '3 – 5 semaines',
                color: 'border-green-200 bg-green-50',
              },
              {
                niveau: 'Rénovation partielle',
                desc: 'Salle de bain + cuisine complètes, peinture et sols neufs. Électricité et structure conservées si conformes.',
                prix_m2: '700 – 1 000 €/m²',
                budget_60: '42 000 – 60 000 €',
                budget_80: '56 000 – 80 000 €',
                delai: '6 – 12 semaines',
                color: 'border-amber-200 bg-amber-50',
              },
              {
                niveau: 'Rénovation complète',
                desc: 'Tout est refait : électricité, plomberie, cloisons, salle de bain, cuisine, menuiseries, revêtements. Clé en main.',
                prix_m2: '1 000 – 1 500 €/m²',
                budget_60: '60 000 – 90 000 €',
                budget_80: '80 000 – 120 000 €',
                delai: '12 – 20 semaines',
                color: 'border-blue-200 bg-blue-50',
              },
            ].map((s) => (
              <div key={s.niveau} className={`rounded-lg border p-5 ${s.color}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#1C1C1C] text-sm">{s.niveau}</h3>
                  <span className="text-xs text-gray-500 font-light">{s.delai}</span>
                </div>
                <p className="text-gray-500 text-sm font-light mb-3">{s.desc}</p>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-gray-400 block">Prix/m²</span>
                    <span className="font-semibold text-[#1C1C1C]">{s.prix_m2}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">3p de 60 m²</span>
                    <span className="font-semibold text-[#1C1C1C]">{s.budget_60}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">3p de 80 m²</span>
                    <span className="font-semibold text-[#1C1C1C]">{s.budget_80}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Postes */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Détail des postes pour un 3 pièces parisien de 70 m²
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Poste de travaux</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Rénovation standard</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Haut de gamme</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { poste: 'Électricité (mise aux normes)', std: '4 500 – 7 000 €', hg: '7 000 – 12 000 €' },
                  { poste: 'Plomberie', std: '4 000 – 8 000 €', hg: '8 000 – 15 000 €' },
                  { poste: 'Salle de bain (8 m²)', std: '8 000 – 12 000 €', hg: '15 000 – 25 000 €' },
                  { poste: 'Cuisine équipée', std: '8 000 – 15 000 €', hg: '20 000 – 40 000 €' },
                  { poste: 'Parquet (ponçage ou neuf, 70 m²)', std: '3 500 – 7 000 €', hg: '9 000 – 18 000 €' },
                  { poste: 'Peinture intégrale', std: '6 000 – 9 000 €', hg: '10 000 – 18 000 €' },
                  { poste: 'Menuiseries (portes, placards)', std: '5 000 – 10 000 €', hg: '15 000 – 30 000 €' },
                  { poste: 'Plâtrerie / faux plafonds', std: '3 000 – 6 000 €', hg: '6 000 – 12 000 €' },
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

          {/* Exemple */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Exemple : rénovation complète d&apos;un 3 pièces de 68 m² à Paris 7e
          </h2>
          <div className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              <strong className="text-[#1C1C1C]">Contexte :</strong> Appartement haussmannien de 68 m² au 4e étage, acquis pour résidence principale. Travaux : électricité hors normes, salle de bain vétuste, cuisine à remplacer, parquet à remettre en état.
            </p>
            <div className="space-y-2">
              {[
                { poste: 'Mise aux normes électriques (12 circuits, tableau neuf)', cout: '6 500 €' },
                { poste: 'Rénovation complète salle de bain (7 m²)', cout: '11 000 €' },
                { poste: 'Cuisine ouverte avec îlot sur mesure', cout: '18 000 €' },
                { poste: 'Ponçage + vitrification parquet (68 m²)', cout: '4 800 €' },
                { poste: 'Peinture 3 couches, enduit finition', cout: '8 500 €' },
                { poste: 'Dressing sur mesure chambre parentale', cout: '6 200 €' },
                { poste: 'Portes intérieures en chêne (x4)', cout: '5 600 €' },
                { poste: 'Coordination, nettoyage, divers', cout: '2 500 €' },
              ].map((row) => (
                <div key={row.poste} className="flex justify-between text-sm">
                  <span className="text-gray-600 font-light">{row.poste}</span>
                  <span className="text-[#1C1C1C] font-semibold ml-4 flex-shrink-0">{row.cout}</span>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-3 flex justify-between text-sm font-semibold">
                <span className="text-[#1C1C1C]">Total</span>
                <span className="text-[#B8960C]">63 100 €</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 italic mt-3">Durée du chantier : 14 semaines. Livraison clé en main.</p>
          </div>

          {/* Conseils */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            3 conseils pour maîtriser le budget d&apos;un 3 pièces à Paris
          </h2>
          <div className="space-y-4 mb-8">
            {[
              {
                titre: 'Faites réaliser un état des lieux technique avant d\'acheter',
                desc: 'Avant tout achat immobilier, un diagnostic technique (électricité, plomberie, amiante, DPE) permet d\'évaluer le budget de travaux. À Paris, une mise aux normes électriques peut coûter de 4 000 à 12 000 € — c\'est un écart considérable dans une négociation.',
              },
              {
                titre: 'Séparez les travaux techniques des travaux décoratifs',
                desc: 'La règle d\'or : faites d\'abord les travaux qui salissent (électricité, plomberie, cloisons) et terminez par les finitions (peinture, parquet, luminaires). Cette séquence évite de refaire deux fois le même travail.',
              },
              {
                titre: 'Gardez une réserve de 10-15 % pour les imprévus',
                desc: 'Dans un appartement ancien parisien, les découvertes de chantier sont fréquentes : canalisation cachée, mur porteur mal identifié, dalle de béton sous un parquet. Toujours prévoir un matelas budgétaire.',
              },
            ].map((item) => (
              <div key={item.titre} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                <h3 className="font-semibold text-[#1C1C1C] text-sm mb-2">{item.titre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Espace Design */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Espace Design : rénovation de 3 pièces à Paris, clé en main
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Espace Design prend en charge la rénovation complète de votre 3 pièces à Paris, de la conception au dernier coup de pinceau. Un seul interlocuteur pour coordonner électricien, plombier, carreleur, peintre et menuisier.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Devis détaillé poste par poste sous 48h',
              'Planning de chantier remis avant démarrage',
              'Suivi quotidien par votre chef de chantier attitré',
              'Assurance décennale et RC professionnelle',
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
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix d\'une rénovation à Paris en 2025' },
              { href: '/blog/renovation-2-pieces-paris', title: 'Rénovation 2 pièces Paris : budget et guide' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain à Paris' },
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris — Espace Design' },
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
          Votre 3 pièces à rénover à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-6 max-w-lg mx-auto">
          Devis gratuit sous 48h — nous intervenons dans tout Paris et l&apos;Île-de-France.
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
