import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Isolation acoustique appartement Paris', item: 'https://espacedesignparis.fr/blog/isolation-acoustique-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Isolation acoustique d\'un appartement à Paris : guide complet 2025',
  description: 'Comment améliorer l\'isolation phonique de votre appartement à Paris ? Solutions, prix et démarches pour réduire le bruit des voisins, de la rue et des montées d\'escalier.',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
    logo: { '@type': 'ImageObject', url: 'https://espacedesignparis.fr/images/hero.jpg' },
  },
  url: 'https://espacedesignparis.fr/blog/isolation-acoustique-appartement-paris',
  datePublished: '2025-02-10',
  dateModified: '2025-04-19',
  inLanguage: 'fr-FR',
}

export const metadata: Metadata = {
  title: 'Isolation Acoustique Appartement Paris — Guide & Prix 2025 | Espace Design',
  description:
    'Comment améliorer l\'isolation phonique de votre appartement à Paris ? Solutions techniques, prix, matériaux et démarches copropriété. Devis gratuit 48h.',
  keywords: [
    'isolation acoustique appartement Paris',
    'isolation phonique Paris',
    'bruit voisins appartement Paris',
    'améliorer isolation sonore Paris',
    'artisan isolation Paris',
    'isolation plancher Paris',
  ],
}

export default function ArticleIsolationAcoustique() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      {/* Hero article */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Guide & Conseils
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Isolation acoustique d&apos;un appartement à Paris : guide complet 2025
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Le bruit est l&apos;un des premiers motifs d&apos;insatisfaction dans les appartements parisiens.
            Bruits de pas du voisin du dessus, conversations à travers les cloisons, rumeurs de la rue,
            canalisations — l&apos;isolation acoustique est souvent la première amélioration demandée lors
            d&apos;une rénovation. Voici comment améliorer efficacement l&apos;isolation phonique de votre appartement
            à Paris, avec les solutions et budgets correspondants.
          </p>
        </div>
      </section>

      {/* Contenu article */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Comprendre les types de bruit dans un appartement parisien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Avant de choisir une solution d&apos;isolation, il est essentiel d&apos;identifier la nature
              du bruit qui vous dérange. Les nuisances acoustiques se répartissent en deux grandes catégories,
              qui nécessitent des traitements différents.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  label: 'Bruits aériens',
                  examples: 'Voix, musique, télévision, aboiements',
                  solution: 'Isolation des cloisons, des murs et des fenêtres. Double vitrage, doublage phonique.',
                },
                {
                  label: 'Bruits d\'impact',
                  examples: 'Pas, chutes d\'objets, déplacements de meubles',
                  solution: 'Isolation du plancher ou du plafond. Chape flottante, faux plafond découplé.',
                },
              ].map((item) => (
                <div key={item.label} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                  <div className="text-[#B8960C] text-xs font-light uppercase tracking-widest mb-1">
                    {item.label}
                  </div>
                  <div className="font-semibold text-sm text-[#1C1C1C] mb-2">Exemples : {item.examples}</div>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{item.solution}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Dans les immeubles haussmanniens parisiens — construits aux XIXe et début XXe siècles —
              les dalles en bois et les cloisons en plâtre offrent une isolation naturellement
              insuffisante selon les standards actuels. Les appartements des années 1960-1980 ne sont
              guère mieux lotis : les constructions en béton transmettent parfaitement les bruits d&apos;impact.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Solutions d&apos;isolation acoustique et prix à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Les solutions varient selon la source du bruit et le résultat attendu.
              Voici un panorama des principaux travaux d&apos;isolation acoustique réalisables dans un appartement parisien,
              avec les budgets moyens constatés en 2025.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: 'Isolation du plancher',
                  desc: 'La solution la plus efficace contre les bruits d\'impact venant du dessus. Pose d\'une sous-couche résiliente sous le revêtement de sol (parquet, carrelage), ou d\'une chape sèche flottante. À Paris, dans les appartements haussmanniens, cette intervention est souvent réalisée lors d\'une rénovation complète du parquet.',
                  price: '40 – 80 €/m²',
                  gain: 'Réduction de 15 à 25 dB',
                },
                {
                  title: 'Faux plafond acoustique',
                  desc: 'Pour les bruits de pas du voisin du dessus. Un faux plafond découplé des dalles (montants sur silent-bloc, laine de roche) peut réduire significativement les bruits d\'impact. Cette solution fait perdre 8 à 15 cm de hauteur sous plafond — attention dans les appartements aux plafonds déjà bas.',
                  price: '60 – 120 €/m²',
                  gain: 'Réduction de 20 à 30 dB',
                },
                {
                  title: 'Doublage de cloison phonique',
                  desc: 'Pour les bruits aériens (voix, télévision) en provenance d\'un voisin mitoyen. Pose d\'un complexe phonique en doublage : ossature métallique, laine de roche haute densité (45 ou 70 kg/m³) et plaques de plâtre à haute densité. La cloison perd 7 à 12 cm d\'épaisseur.',
                  price: '80 – 150 €/m²',
                  gain: 'Réduction de 20 à 40 dB',
                },
                {
                  title: 'Amélioration des fenêtres',
                  desc: 'Pour les nuisances sonores extérieures (rue, voie ferrée, métro aérien). Le remplacement des fenêtres par du double vitrage acoustique (4-16-4 ou 6-20-4) est souvent la première chose à faire. À Paris, cette opération nécessite l\'accord de la copropriété et parfois de la mairie si les fenêtres donnent sur un bâtiment classé.',
                  price: '500 – 1 500 € / fenêtre',
                  gain: 'Réduction de 25 à 45 dB',
                },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-[#D4AF37] pl-5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg font-semibold text-[#1C1C1C]">{item.title}</h3>
                    <div className="text-right flex-shrink-0">
                      <div className="font-semibold text-[#B8960C] text-sm">{item.price}</div>
                      <div className="text-gray-400 text-xs">{item.gain}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Contraintes spécifiques aux immeubles parisiens
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Les travaux d&apos;isolation acoustique dans un appartement parisien sont soumis à des
              règles particulières qu&apos;il est important de connaître avant de démarrer.
            </p>
            <ul className="space-y-3">
              {[
                {
                  title: 'Règlement de copropriété',
                  detail: 'Certains règlements imposent des règles strictes sur l\'isolation entre appartements. Avant tous travaux affectant les parties communes ou les structures porteuses, une déclaration et parfois un accord de l\'assemblée générale des copropriétaires est nécessaire.',
                },
                {
                  title: 'Protection du patrimoine',
                  detail: 'Dans certains arrondissements (Marais, Saint-Germain, Île de la Cité), les travaux sur les façades ou les fenêtres peuvent nécessiter une autorisation de la DRAC (Direction régionale des affaires culturelles) si le bâtiment est classé ou inscrit.',
                },
                {
                  title: 'Hauteur sous plafond',
                  detail: 'Dans les appartements haussmanniens avec 3,20 à 3,60 m sous plafond, la pose d\'un faux plafond est envisageable. Dans les immeubles des années 1960-1970 avec 2,50 m, cette solution peut être trop contraignante.',
                },
                {
                  title: 'Planchers en bois dans les appartements anciens',
                  detail: 'Les parquets d\'origine (parquet en chêne point de Hongrie, lames larges) doivent souvent être soulevés pour poser une sous-couche acoustique. Il faut prévoir de les rénover à la remise en place.',
                },
              ].map((item) => (
                <li key={item.title} className="bg-white rounded-lg border border-gray-100 p-5">
                  <div className="font-semibold text-sm text-[#1C1C1C] mb-1">{item.title}</div>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Budgets types pour l&apos;isolation acoustique à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Pour vous donner une idée concrète des coûts, voici quelques exemples de budgets
              d&apos;isolation acoustique pour des appartements parisiens types.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: 'Isolation fenêtres + cloison mitoyenne (35 m²)',
                  detail: 'Remplacement de 2 fenêtres par double vitrage acoustique, doublage d\'une cloison mitoyenne sur 8 m linéaires.',
                  items: [
                    { label: '2 fenêtres double vitrage acoustique', price: '2 400 €' },
                    { label: 'Doublage cloison 8 ml', price: '3 200 €' },
                    { label: 'Finitions peinture', price: '800 €' },
                  ],
                  total: '6 400 €',
                },
                {
                  title: 'Isolation plancher + faux plafond (65 m²)',
                  detail: 'Réfection du parquet avec sous-couche acoustique et faux plafond découplé dans les chambres.',
                  items: [
                    { label: 'Sous-couche acoustique 65 m²', price: '3 900 €' },
                    { label: 'Faux plafond découplé chambres 25 m²', price: '3 500 €' },
                    { label: 'Peinture faux plafond', price: '600 €' },
                  ],
                  total: '8 000 €',
                },
              ].map((budget) => (
                <div key={budget.title} className="border-l-2 border-[#D4AF37] pl-5">
                  <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-1">{budget.title}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed mb-3">{budget.detail}</p>
                  <div className="bg-[#FAFAF8] rounded p-4 text-sm">
                    {budget.items.map((item) => (
                      <div key={item.label} className="flex justify-between text-gray-600 font-light py-1">
                        <span>{item.label}</span><span>{item.price}</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-[#1C1C1C] font-medium pt-2 border-t border-gray-200">
                      <span>Total estimé</span><span>{budget.total}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Pourquoi confier l&apos;isolation acoustique à Espace Design ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              L&apos;isolation acoustique est un travail de précision. Un mauvais choix de matériaux,
              une mise en œuvre trop hâtive, ou un oubli de ponts acoustiques peut rendre le
              résultat décevant — et il est souvent impossible de recommencer sans tout démonter.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Chez Espace Design, nous traitons l&apos;isolation acoustique avec la même rigueur que
              nos finitions décoratives. Nous maîtrisons les contraintes spécifiques des immeubles
              parisiens — haussmanniens, béton des années 60, réglements de copropriété — et
              nous vous conseillons sur la solution la plus efficace selon votre cas.
            </p>
            <ul className="space-y-2">
              {[
                'Diagnostic acoustique initial gratuit',
                'Choix des matériaux adaptés à votre type d\'immeuble',
                'Maîtrise des contraintes copropriété et patrimoine',
                'Finitions soignées après travaux d\'isolation',
                'Devis détaillé poste par poste',
                'Résultat mesuré et garanti',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed font-light mt-4">
              Consultez nos{' '}
              <Link href="/realisations" className="text-[#B8960C] hover:underline">
                réalisations
              </Link>{' '}
              ou{' '}
              <Link href="/contact" className="text-[#B8960C] hover:underline">
                contactez-nous
              </Link>{' '}
              pour un devis gratuit d&apos;isolation acoustique à Paris.
            </p>
          </div>

        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-6">Voir aussi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix rénovation appartement Paris 2025', tag: 'Prix' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénover un appartement haussmannien', tag: 'Guide' },
              { href: '/blog/renovation-parquet-paris', title: 'Parquet à Paris : pose et rénovation', tag: 'Sols' },
              { href: '/blog/choisir-artisan-renovation-paris', title: 'Choisir son artisan rénovateur à Paris', tag: 'Conseils' },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="block p-4 bg-[#FAFAF8] border border-gray-100 rounded-lg hover:border-[#D4AF37]/40 transition-colors group">
                <span className="text-[10px] uppercase tracking-widest text-[#B8960C] font-light">{a.tag}</span>
                <p className="text-sm font-medium text-[#1C1C1C] mt-1 group-hover:text-[#B8960C] transition-colors leading-snug">{a.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-12 bg-[#F2F2EE]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-4">
            Isolation acoustique par arrondissement à Paris
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-appartement-paris', label: 'Tous les arrondissements' },
            ].map((z) => (
              <Link
                key={z.href}
                href={z.href}
                className="text-xs text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors"
              >
                {z.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Problème de bruit dans votre appartement ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Devis gratuit et diagnostic acoustique sous 48h. Déplacement sans engagement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#c9a030] transition-colors"
          >
            Devis gratuit <ArrowRight size={13} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 px-7 py-3.5 rounded font-light text-sm tracking-wide hover:border-white hover:text-white transition-colors"
          >
            <Phone size={14} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
