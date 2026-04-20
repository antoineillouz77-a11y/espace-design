import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Parquet à Paris : pose et rénovation', item: 'https://espacedesignparis.fr/blog/renovation-parquet-paris' },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Parquet Paris — Ponçage, Vitrification & Pose | Espace Design',
  description:
    'Rénovation de parquet à Paris : ponçage, vitrification, pose parquet neuf, point de Hongrie. Prix et conseils d\'un artisan parisien. Devis gratuit 48h.',
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation de parquet à Paris',
  description:
    'Ponçage, vitrification, pose parquet neuf à Paris. Conseils et prix d\'un artisan rénovateur parisien.',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-parquet-paris',
}

export default function ArticleParquet() {
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
            Rénovation de parquet à Paris
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Le parquet est l&apos;un des éléments les plus valorisants dans un appartement
            parisien. Bien entretenu, un parquet massif en chêne peut traverser plusieurs
            générations. Mais que faire face à un parquet griffé, terne ou gondolé ?
            Faut-il le poncer, le remplacer ou le recouvrir ? Espace Design vous guide.
          </p>
        </div>
      </section>

      {/* Contenu article */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les types de parquets dans les appartements parisiens
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Paris abrite une grande diversité de parquets, selon l&apos;époque de construction
              et le standing des immeubles. Identifier votre type de parquet est la première
              étape pour choisir la bonne solution de rénovation.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le parquet point de Hongrie
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Caractéristique des appartements haussmanniens et des beaux immeubles du début
                  du XXe siècle, le parquet point de Hongrie est composé de lames disposées en
                  chevrons formant un motif en V. Il est généralement en chêne massif de 22 mm
                  d&apos;épaisseur, ce qui permet plusieurs cycles de ponçage. Sa restauration
                  est l&apos;un de nos chantiers de prédilection chez Espace Design.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le parquet bâtons rompus
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Variante du point de Hongrie, le bâtons rompus dispose les lames à 45°
                  avec une cassure perpendiculaire. Moins courant que le point de Hongrie,
                  il se trouve dans certains immeubles bourgeois du début du XXe siècle.
                  La restauration est identique : ponçage mécanique, puis finition huile ou vernis.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le parquet en lames larges
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Très apprécié dans les rénovations contemporaines, le parquet en lames larges
                  (12 à 20 cm de large, 180 à 220 cm de longueur) apporte une modernité et une
                  élégance contemporaine. Il peut être massif, contrecollé ou en chêne huilé.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le parquet contrecollé
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Composé d&apos;une couche d&apos;usure en bois noble (chêne, noyer, frêne) collée sur
                  un support en bois technique, le parquet contrecollé est plus stable que le
                  massif face aux variations d&apos;humidité. Il peut être posé sur plancher chauffant
                  et ponçé 2 à 3 fois maximum selon l&apos;épaisseur de la couche d&apos;usure.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Ponçage ou remplacement : comment choisir ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La question se pose souvent : vaut-il mieux poncer le parquet existant ou
              le remplacer entièrement ? La réponse dépend de l&apos;état du parquet et de
              son épaisseur résiduelle.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                <div className="text-[#B8960C] text-xs font-light uppercase tracking-widest mb-2">
                  Poncer si...
                </div>
                <ul className="space-y-2">
                  {[
                    'Parquet massif avec au moins 5 mm d\'épaisseur résiduelle',
                    'Lames en bon état structurel (pas de pourriture, pas de lames manquantes)',
                    'Griffes, taches, vitrification à refaire',
                    'Souhait de préserver le charme de l\'ancien',
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-xs text-gray-600 font-light">
                      <CheckCircle size={12} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                <div className="text-[#B8960C] text-xs font-light uppercase tracking-widest mb-2">
                  Remplacer si...
                </div>
                <ul className="space-y-2">
                  {[
                    'Parquet trop fin, déjà poncé plusieurs fois',
                    'Lames gondolées, décollées ou pourries par l\'humidité',
                    'Parquet stratifié (ne se ponce pas)',
                    'Souhait d\'un parquet neuf dans une essence différente',
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-xs text-gray-600 font-light">
                      <span className="text-[#B8960C] flex-shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed font-light">
              En cas de doute, Espace Design effectue un diagnostic gratuit lors de la
              visite de chantier. Nous sondons l&apos;épaisseur des lames avec un outil de
              mesure et évaluons l&apos;état structurel du parquet avant de vous recommander
              la solution la plus adaptée.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le ponçage de parquet à Paris : technique et prix
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le ponçage de parquet est une opération délicate qui nécessite un matériel
              professionnel et une main experte. Il se déroule en plusieurs passes
              progressives (grain 24, 40, 80, 100, 120) jusqu&apos;à obtenir une surface
              parfaitement plane et homogène.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              À Paris, le ponçage génère beaucoup de poussière. Nous utilisons des
              ponceuses équipées de systèmes d&apos;aspiration intégrés pour limiter la
              diffusion de poussière dans l&apos;appartement — une précaution indispensable
              en milieu habité ou lors de chantiers en copropriété.
            </p>

            <div className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100 mb-4">
              <div className="text-[#B8960C] text-xs font-light uppercase tracking-widest mb-3">
                Prix du ponçage parquet à Paris (main d&apos;œuvre + finition)
              </div>
              <div className="space-y-2">
                {[
                  { label: 'Ponçage + vitrification vernis mat', prix: '25 – 40 €/m²' },
                  { label: 'Ponçage + vitrification vernis brillant', prix: '25 – 40 €/m²' },
                  { label: 'Ponçage + huilage (2 couches)', prix: '30 – 45 €/m²' },
                  { label: 'Ponçage + teinture + vitrification', prix: '35 – 55 €/m²' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between text-sm py-1 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600 font-light">{item.label}</span>
                    <span className="text-[#1C1C1C] font-medium ml-4 flex-shrink-0">{item.prix}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-500 text-xs font-light">
              * Ces prix s&apos;entendent pour un appartement parisien standard. Des majorations
              s&apos;appliquent pour les parquets point de Hongrie (travail plus complexe) ou les
              surfaces inférieures à 30 m².
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Vitrification : huile, vernis mat ou satiné ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La finition du parquet détermine son aspect final et son entretien quotidien.
              Voici les trois options principales :
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le vernis mat ou satiné
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  C&apos;est la finition la plus résistante et la plus facile d&apos;entretien. Le vernis
                  crée un film de protection sur le bois qui résiste aux rayures légères et
                  aux projections d&apos;eau. Il est idéal dans les couloirs et pièces de passage.
                  Le mat est plus discret, le satiné apporte un léger brillant qui valorise
                  les veines du bois.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  L&apos;huile ou le bois huilé
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  L&apos;huilage pénètre dans les fibres du bois et le nourrit de l&apos;intérieur.
                  Il donne un aspect naturel, chaleureux et mat. Les parquets huilés sont
                  plus faciles à entretenir localement (une rayure se répare sans tout
                  reponcer), mais nécessitent un entretien régulier (une application
                  annuelle d&apos;huile d&apos;entretien). Très apprécié dans les appartements
                  haussmanniens pour son rendu authentique.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  La teinture avant finition
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Avant d&apos;appliquer huile ou vernis, il est possible de teinter le parquet :
                  chêne blanchi, chêne naturel, chêne fumé, noyer ou même des teintes
                  plus originales. La teinture modifie la couleur du bois de façon durable
                  et permet de personnaliser le parquet selon l&apos;ambiance souhaitée.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Pose de parquet neuf à Paris : essences et prix
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Quand le parquet existant ne peut pas être rénové, ou quand vous souhaitez
              créer un nouveau parquet dans une pièce qui en était dépourvue, la pose
              d&apos;un parquet neuf est la solution. Voici les essences et formats les
              plus demandés à Paris.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {[
                { essence: 'Chêne massif 22 mm', note: 'Le classique parisien. Solide, ponentiel, durable. Prix matériaux : 60–120 €/m².' },
                { essence: 'Chêne contrecollé 15 mm', note: 'Plus stable, compatible plancher chauffant. Prix matériaux : 40–90 €/m².' },
                { essence: 'Noyer massif', note: 'Teinte naturellement foncée, très élégant. Prix matériaux : 90–180 €/m².' },
                { essence: 'Frêne blanchi', note: 'Tendance nordique, clair et lumineux. Prix matériaux : 50–100 €/m².' },
              ].map((item) => (
                <div key={item.essence} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-4">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{item.essence}</div>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La pose d&apos;un parquet neuf à Paris (main d&apos;œuvre) coûte entre 20 et 40 €/m²
              selon le type de pose (collé, flottant, cloué). La pose clouée, traditionnelle
              dans les appartements haussmanniens, est la plus longue et la plus chère —
              mais aussi la plus pérenne.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Explorez nos{' '}
              <Link href="/realisations" className="text-[#B8960C] hover:underline">
                réalisations de parquet
              </Link>{' '}
              pour voir des exemples concrets, ou{' '}
              <Link href="/contact" className="text-[#B8960C] hover:underline">
                demandez un devis gratuit
              </Link>{' '}
              — nous vous répondons sous 48h.
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
              { href: '/parquet-paris', title: 'Parquet Paris — notre service' },
              { href: '/blog/parquet-massif-paris', title: 'Parquet massif Paris : guide complet' },
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix d\'une rénovation à Paris en 2025' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénover un appartement haussmannien' },
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
