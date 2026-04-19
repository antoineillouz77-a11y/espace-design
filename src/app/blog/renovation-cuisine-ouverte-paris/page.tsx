import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Créer une cuisine ouverte à Paris', item: 'https://espacedesignparis.fr/blog/renovation-cuisine-ouverte-paris' },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Cuisine Ouverte Paris — Idées & Prix | Espace Design',
  description:
    'Ouvrir sa cuisine à Paris : démarches, coût, mur porteur ou non, idées d\'aménagement. Artisan rénovateur Paris spécialisé cuisine ouverte et open space.',
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation cuisine ouverte à Paris',
  description:
    'Tout savoir sur l\'ouverture d\'une cuisine à Paris : mur porteur, démarches, budget, idées d\'aménagement.',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-cuisine-ouverte-paris',
}

export default function ArticleCuisineOuverte() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      {/* Hero article */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Guide & Conseils
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation cuisine ouverte à Paris
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Ouvrir la cuisine sur le salon est l&apos;une des transformations les plus demandées
            dans les appartements parisiens. Elle apporte lumière, convivialité et sentiment
            d&apos;espace — particulièrement précieux dans les petites surfaces. Mais ce chantier
            soulève des questions techniques et administratives qu&apos;il faut anticiper.
          </p>
        </div>
      </section>

      {/* Contenu article */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Pourquoi ouvrir sa cuisine à Paris ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Les appartements parisiens sont souvent organisés autour d&apos;une cuisine fermée,
              héritée d&apos;une époque où la cuisine était considérée comme une pièce de service.
              Aujourd&apos;hui, les modes de vie ont changé : on cuisine en famille, on reçoit
              debout au comptoir, on regarde la télé en préparant le dîner.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Dans un appartement de 45 ou 60 m², supprimer la cloison entre la cuisine et le
              séjour peut faire gagner une impression d&apos;espace considérable. La lumière
              circule mieux, la pièce paraît plus grande, et la cuisine elle-même devient
              un véritable espace de vie plutôt qu&apos;un couloir fonctionnel.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Chez Espace Design, nous avons réalisé de nombreuses ouvertures de cuisines
              à Paris — dans des haussmanniens, des immeubles des années 1970 et des
              constructions récentes. Chaque cas est différent, mais la démarche est
              toujours la même : vérifier, diagnostiquer, planifier.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Comment savoir si un mur est porteur ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              C&apos;est la question que tout propriétaire se pose avant d&apos;abattre une cloison.
              Un mur porteur supporte le poids de la structure au-dessus — le supprimer
              sans précaution peut compromettre la stabilité du bâtiment.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Quelques indices visuels permettent d&apos;orienter le diagnostic : un mur
              perpendiculaire à la façade, présent à tous les étages et dans la cave, est
              souvent porteur. Un mur parallèle à la façade, en plâtre léger ou en
              carreau de plâtre, est généralement une cloison non porteuse.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Mais ces indices ne suffisent pas. Chez Espace Design, nous mandatons
              systématiquement un bureau d&apos;études structure avant toute démolition de
              mur. Le rapport de l&apos;ingénieur structure est indispensable pour :
            </p>
            <ul className="space-y-2">
              {[
                'Confirmer ou infirmer le caractère porteur du mur',
                'Dimensionner l\'IPN (poutre acier) ou le linteau nécessaire si le mur est porteur',
                'Fournir un document technique à la copropriété et à l\'assureur décennal',
                'Sécuriser les travaux vis-à-vis de votre assurance habitation',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Démarches administratives à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              L&apos;ouverture d&apos;une cuisine à Paris peut nécessiter plusieurs démarches
              administratives selon la nature des travaux.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Autorisation de copropriété
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Si la cloison à abattre est un mur porteur — même intérieur à votre lot —
                  l&apos;assemblée générale de copropriété doit généralement être informée, voire
                  donner son accord. Vérifiez votre règlement de copropriété et le règlement
                  de construction. La plupart des syndics demandent le rapport de l&apos;ingénieur
                  structure avant de valider les travaux.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Déclaration préalable ou permis de construire
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Pour les travaux intérieurs qui ne modifient pas l&apos;aspect extérieur du
                  bâtiment, aucune déclaration en mairie n&apos;est en principe nécessaire à
                  Paris. Mais si vous touchez aux façades, aux fenêtres ou à des éléments
                  classés, l&apos;accord de l&apos;ABF peut être requis.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Adaptation de la ventilation
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Une cuisine ouverte doit impérativement disposer d&apos;une ventilation
                  efficace. La hotte doit être suffisamment puissante et, si possible,
                  raccordée à un conduit d&apos;extraction (et non simplement à filtre à
                  charbon). À Paris, les conduits d&apos;extraction sont souvent partagés —
                  vérifiez avec votre syndic avant de modifier la configuration.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Budget pour l&apos;ouverture d&apos;une cuisine à Paris
            </h2>

            <div className="bg-[#FAFAF8] rounded-lg p-6 border border-gray-100 mb-5">
              <div className="space-y-2">
                {[
                  { poste: 'Bureau d\'études structure (rapport + plans)', prix: '500 – 1 500 €' },
                  { poste: 'Démolition cloison non porteuse (3 m²)', prix: '800 – 1 500 €' },
                  { poste: 'Pose IPN si mur porteur (selon dimension)', prix: '2 000 – 6 000 €' },
                  { poste: 'Reprise des sols (raccord parquet ou carrelage)', prix: '1 200 – 3 000 €' },
                  { poste: 'Électricité (déplacement prises, éclairage)', prix: '800 – 2 500 €' },
                  { poste: 'Plomberie (si déplacement évier ou gazier)', prix: '1 500 – 4 000 €' },
                  { poste: 'Peinture et finitions', prix: '1 000 – 2 500 €' },
                ].map((item) => (
                  <div key={item.poste} className="flex justify-between text-sm py-1.5 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600 font-light">{item.poste}</span>
                    <span className="text-[#1C1C1C] font-medium ml-4 flex-shrink-0">{item.prix}</span>
                  </div>
                ))}
                <div className="flex justify-between text-sm pt-3">
                  <span className="text-[#1C1C1C] font-semibold">Total selon complexité</span>
                  <span className="text-[#B8960C] font-semibold">5 000 – 20 000 €</span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Le poste le plus variable est la pose de l&apos;IPN : si le mur est porteur et
              que l&apos;ouverture est large (plus de 2,5 m), les travaux de structure peuvent
              représenter à eux seuls la moitié du budget.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Idées d&apos;aménagement et de séparation visuelle
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Ouvrir la cuisine ne signifie pas tout fusionner. Il existe de nombreuses
              façons de délimiter visuellement l&apos;espace cuisine sans cloisonner.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: 'L\'îlot central',
                  detail: 'La solution la plus populaire dans les appartements parisiens spacieux. Il crée une frontière naturelle entre cuisine et séjour, offre un espace de travail supplémentaire et peut servir de bar. Un îlot sur-mesure coûte entre 3 000 et 12 000 € selon les matériaux.',
                },
                {
                  title: 'La verrière intérieure',
                  detail: 'Elle préserve la séparation acoustique tout en laissant passer la lumière. La verrière d\'atelier en acier noir est une référence esthétique très appréciée à Paris. Comptez 3 000 à 8 000 € selon la dimension.',
                },
                {
                  title: 'Le changement de revêtement de sol',
                  detail: 'Une différence de matière au sol (carrelage en cuisine, parquet en séjour) délimite naturellement les espaces sans avoir recours à une cloison. C\'est la solution la plus économique.',
                },
                {
                  title: 'La hotte plafond ou la hotte îlot',
                  detail: 'Dans une cuisine ouverte, la hotte devient un élément décoratif. Les hottes suspendues en inox, cuivre ou verre fumé sont à la fois fonctionnelles et esthétiques. Budget : 800 à 3 000 €.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CheckCircle size={16} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#1C1C1C] text-sm font-medium">{item.title} : </span>
                    <span className="text-gray-600 text-sm font-light">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed font-light mt-5">
              Explorez nos{' '}
              <Link href="/realisations" className="text-[#B8960C] hover:underline">
                réalisations
              </Link>{' '}
              pour voir des exemples de cuisines ouvertes réalisées à Paris, ou{' '}
              <Link href="/contact" className="text-[#B8960C] hover:underline">
                demandez votre devis
              </Link>{' '}
              — nous nous déplaçons gratuitement pour évaluer votre projet.
            </p>
          </div>

        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix d\'une rénovation à Paris en 2025' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain à Paris' },
              { href: '/blog/choisir-artisan-renovation-paris', title: 'Comment choisir un artisan rénovateur ?' },
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
