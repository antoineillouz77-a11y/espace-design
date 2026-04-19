import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prix Rénovation Appartement Paris 2025 — Tarifs & Devis | Espace Design',
  description:
    'Quel est le prix d\'une rénovation d\'appartement à Paris en 2025 ? Tarifs au m², exemples de chantiers, conseils pour bien budgéter. Devis gratuit sous 48h.',
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Prix rénovation appartement Paris 2025', item: 'https://espacedesignparis.fr/blog/prix-renovation-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Prix d\'une rénovation d\'appartement à Paris en 2025',
  description:
    'Quel est le prix d\'une rénovation d\'appartement à Paris en 2025 ? Tarifs au m², exemples de chantiers, conseils pour bien budgéter.',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
    logo: { '@type': 'ImageObject', url: 'https://espacedesignparis.fr/images/hero.jpg' },
  },
  url: 'https://espacedesignparis.fr/blog/prix-renovation-appartement-paris',
  datePublished: '2025-01-15',
  dateModified: '2025-04-19',
  inLanguage: 'fr-FR',
}

export default function ArticlePrixRenovation() {
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
            Prix d&apos;une rénovation d&apos;appartement à Paris en 2025
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Combien coûte une rénovation d&apos;appartement à Paris ? C&apos;est la question que se
            posent la plupart des propriétaires avant de lancer des travaux. Les tarifs varient
            selon l&apos;ampleur du chantier, la qualité des matériaux et l&apos;état initial du bien. Voici
            un guide complet pour budgéter votre projet de rénovation à Paris en 2025.
          </p>
        </div>
      </section>

      {/* Contenu article */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les grandes catégories de prix pour une rénovation à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le marché parisien de la rénovation est structuré autour de trois niveaux de prestation.
              Ces fourchettes de prix au m² sont des ordres de grandeur — chaque chantier est unique
              et mérite une étude personnalisée. Chez Espace Design, nous établissons systématiquement
              un devis détaillé après visite du bien.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  label: 'Rafraîchissement',
                  price: '300 – 600 €/m²',
                  desc: 'Peinture, sol stratifié, petits travaux. Idéal pour remettre un bien en état sans le restructurer.',
                },
                {
                  label: 'Rénovation complète',
                  price: '800 – 1 500 €/m²',
                  desc: 'Refaire l\'électricité, la plomberie, les revêtements, la salle de bain et la cuisine. Transformation complète.',
                },
                {
                  label: 'Haut de gamme',
                  price: '1 500 – 3 000 €/m²',
                  desc: 'Matériaux premium, architecte, sur-mesure, finitions luxe. Pour les appartements d\'exception.',
                },
              ].map((item) => (
                <div key={item.label} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                  <div className="text-[#B8960C] text-xs font-light uppercase tracking-widest mb-1">
                    {item.label}
                  </div>
                  <div className="font-display text-lg font-semibold text-[#1C1C1C] mb-2">
                    {item.price}
                  </div>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed font-light">
              À Paris, le coût de la rénovation est naturellement supérieur aux autres villes de
              France. Les contraintes logistiques (ascenseur limité, pas de monte-charge, stationnement,
              copropriété stricte), la densité des prestataires qualifiés et le niveau d&apos;exigence
              de la clientèle parisienne expliquent cette différence. Un artisan sérieux à Paris
              travaille rarement en dessous de 350 à 400 €/m² même pour un simple rafraîchissement.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Facteurs qui influencent le coût de rénovation à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le prix d&apos;une rénovation à Paris ne dépend pas uniquement de la surface. De nombreux
              facteurs viennent impacter le budget final — à la hausse comme à la baisse.
            </p>
            <ul className="space-y-3">
              {[
                {
                  title: 'L\'état initial du bien',
                  detail:
                    'Un appartement des années 1960 non rénové nécessitera une mise aux normes électrique complète (tableau, prises, gaines) et souvent une révision de la plomberie. Ce point peut représenter 15 à 25 % du budget total.',
                },
                {
                  title: 'L\'étage et l\'accessibilité',
                  detail:
                    'Un 6e étage sans ascenseur ou un couloir étroit complique l\'acheminement des matériaux et rallonge les heures de travail. Comptez une majoration de 5 à 10 % par rapport à un rez-de-chaussée accessible.',
                },
                {
                  title: 'La copropriété et le règlement intérieur',
                  detail:
                    'Certaines copropriétés imposent des horaires de chantier stricts, interdisent certains travaux en façade ou sur les parties communes, et exigent des protections spécifiques. Ces contraintes allongent les délais et le coût.',
                },
                {
                  title: 'Le choix des matériaux',
                  detail:
                    'Carrelage à 20 €/m² ou marbre à 200 €/m², parquet stratifié ou chêne massif huilé, robinetterie standard ou design — les écarts de prix sur les matériaux seuls peuvent doubler le budget d\'une salle de bain.',
                },
                {
                  title: 'Les travaux structurels',
                  detail:
                    'Abattre un mur porteur, créer une trémie pour un escalier ou déplacer des colonnes humides sont des opérations qui nécessitent un bureau d\'études et des autorisations. Ces postes peuvent rapidement atteindre 5 000 à 15 000 €.',
                },
                {
                  title: 'La saison et les délais',
                  detail:
                    'Les artisans parisiens sont souvent bookés 3 à 6 mois à l&apos;avance. Une demande urgente peut entraîner une majoration de 10 à 20 %.',
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <CheckCircle size={16} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#1C1C1C] text-sm font-medium">{item.title} : </span>
                    <span className="text-gray-600 text-sm font-light">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Exemples concrets de budgets de rénovation à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Pour donner une idée plus concrète du coût d&apos;une rénovation à Paris, voici trois
              exemples représentatifs de chantiers réalisés par Espace Design.
            </p>

            <div className="space-y-6">
              <div className="border-l-2 border-[#D4AF37] pl-5">
                <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-2">
                  Studio de 25 m² — Rénovation complète
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-3">
                  Refaire entièrement un studio dans le 11e arrondissement : démolition cloison,
                  nouvelle salle de bain, mise aux normes électrique, parquet, peinture,
                  cuisine équipée sur-mesure.
                </p>
                <div className="bg-[#FAFAF8] rounded p-4 text-sm">
                  <div className="flex justify-between text-gray-600 font-light py-1">
                    <span>Gros œuvre & démolition</span><span>2 500 €</span>
                  </div>
                  <div className="flex justify-between text-gray-600 font-light py-1">
                    <span>Électricité complète</span><span>4 800 €</span>
                  </div>
                  <div className="flex justify-between text-gray-600 font-light py-1">
                    <span>Salle de bain</span><span>6 500 €</span>
                  </div>
                  <div className="flex justify-between text-gray-600 font-light py-1">
                    <span>Cuisine équipée</span><span>5 200 €</span>
                  </div>
                  <div className="flex justify-between text-gray-600 font-light py-1">
                    <span>Parquet + peinture</span><span>3 800 €</span>
                  </div>
                  <div className="flex justify-between text-[#1C1C1C] font-medium pt-2 border-t border-gray-200">
                    <span>Total estimé</span><span>22 800 €</span>
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-[#D4AF37] pl-5">
                <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-2">
                  2 pièces de 45 m² — Rénovation partielle
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-3">
                  Appartement dans le 15e, cuisine ouverte à créer, salle de bain à rénover,
                  parquet massif à poncer et vitrifier, peinture dans tout l&apos;appartement.
                </p>
                <div className="bg-[#FAFAF8] rounded p-4 text-sm">
                  <div className="flex justify-between text-gray-600 font-light py-1">
                    <span>Ouverture cuisine + habillage</span><span>4 200 €</span>
                  </div>
                  <div className="flex justify-between text-gray-600 font-light py-1">
                    <span>Rénovation salle de bain</span><span>7 800 €</span>
                  </div>
                  <div className="flex justify-between text-gray-600 font-light py-1">
                    <span>Ponçage + vitrification parquet</span><span>2 400 €</span>
                  </div>
                  <div className="flex justify-between text-gray-600 font-light py-1">
                    <span>Peinture complète</span><span>3 100 €</span>
                  </div>
                  <div className="flex justify-between text-[#1C1C1C] font-medium pt-2 border-t border-gray-200">
                    <span>Total estimé</span><span>17 500 €</span>
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-[#D4AF37] pl-5">
                <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-2">
                  3 pièces de 70 m² — Rénovation haut de gamme
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-3">
                  Appartement haussmannien dans le 7e, rénovation complète avec préservation
                  des moulures, parquet point de Hongrie, salle de bain marbre, cuisine
                  sur-mesure, électricité et plomberie entièrement refaites.
                </p>
                <div className="bg-[#FAFAF8] rounded p-4 text-sm">
                  <div className="flex justify-between text-gray-600 font-light py-1">
                    <span>Électricité + plomberie</span><span>14 000 €</span>
                  </div>
                  <div className="flex justify-between text-gray-600 font-light py-1">
                    <span>Salle de bain marbre</span><span>18 500 €</span>
                  </div>
                  <div className="flex justify-between text-gray-600 font-light py-1">
                    <span>Cuisine sur-mesure</span><span>22 000 €</span>
                  </div>
                  <div className="flex justify-between text-gray-600 font-light py-1">
                    <span>Parquet point de Hongrie</span><span>9 800 €</span>
                  </div>
                  <div className="flex justify-between text-gray-600 font-light py-1">
                    <span>Peinture décorative + finitions</span><span>8 200 €</span>
                  </div>
                  <div className="flex justify-between text-[#1C1C1C] font-medium pt-2 border-t border-gray-200">
                    <span>Total estimé</span><span>72 500 €</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Comment obtenir un devis de rénovation fiable à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Un devis de rénovation sérieux à Paris se construit toujours après une visite sur
              place. Méfiez-vous des devis envoyés par email sans visite : ils sont soit trop
              vagues pour être utiles, soit calculés à la louche et vous réservent des surprises
              en cours de chantier.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Chez Espace Design, nous vous proposons un déplacement gratuit et sans engagement.
              Lors de cette visite, nous évaluons l&apos;état des installations existantes, prenons
              les mesures exactes, identifions les contraintes techniques et vous écoutons pour
              comprendre vos priorités. Le devis que nous vous remettons ensuite est détaillé
              poste par poste — vous savez exactement ce que vous payez.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Pour obtenir un devis de rénovation à Paris, quelques conseils pratiques :
            </p>
            <ul className="space-y-2">
              {[
                'Préparez vos plans ou les dimensions approximatives de chaque pièce',
                'Ayez une idée claire de l\'état des équipements à conserver ou à remplacer',
                'Definissez votre niveau de finition (économique, standard, haut de gamme)',
                'Indiquez vos contraintes : délais, logement occupé ou vide pendant le chantier',
                'Demandez au moins 2 ou 3 devis pour pouvoir comparer',
                'Vérifiez que chaque artisan possède une assurance décennale en cours de validité',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Pourquoi choisir Espace Design pour votre rénovation à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Espace Design est un artisan rénovateur parisien avec plus de 15 ans d&apos;expérience
              dans la rénovation d&apos;appartements à Paris et en Île-de-France. Notre spécificité :
              nous prenons en charge l&apos;intégralité du chantier — du gros œuvre aux finitions
              décoratives — sans sous-traiter à des équipes inconnues.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Cette approche vous garantit un interlocuteur unique, une cohérence dans les
              finitions et une maîtrise des délais. Nous intervenons dans tous les arrondissements
              parisiens et proposons des prestations allant du simple rafraîchissement peinture
              à la rénovation complète d&apos;appartements haussmanniens.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Consultez nos{' '}
              <Link href="/realisations" className="text-[#B8960C] hover:underline">
                réalisations
              </Link>{' '}
              pour voir des exemples concrets de chantiers menés à Paris, ou{' '}
              <Link href="/contact" className="text-[#B8960C] hover:underline">
                contactez-nous
              </Link>{' '}
              pour obtenir votre devis gratuit sous 48h.
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
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain à Paris : guide complet', tag: 'Salle de bain' },
              { href: '/blog/choisir-artisan-renovation-paris', title: 'Comment choisir un artisan rénovateur à Paris ?', tag: 'Conseils' },
              { href: '/blog/isolation-acoustique-appartement-paris', title: 'Isolation acoustique appartement Paris', tag: 'Isolation' },
              { href: '/blog/renovation-parquet-paris', title: 'Parquet à Paris : pose, rénovation, vitrification', tag: 'Sols' },
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
            Rénovation d&apos;appartement par arrondissement
          </h2>
          <p className="text-gray-500 text-sm font-light mb-5">
            Consultez notre page dédiée à votre arrondissement pour des informations spécifiques sur votre secteur.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/renovation-paris-1er', label: 'Paris 1er' },
              { href: '/renovation-paris-2e', label: 'Paris 2e' },
              { href: '/renovation-paris-3e', label: 'Paris 3e' },
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-5e', label: 'Paris 5e' },
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
              { href: '/renovation-paris-13e', label: 'Paris 13e' },
              { href: '/renovation-paris-14e', label: 'Paris 14e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-paris-19e', label: 'Paris 19e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
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
          Un projet de rénovation à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Déplacement sans engagement.
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
