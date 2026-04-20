import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Parquet Chêne Paris', item: 'https://espacedesignparis.fr/blog/parquet-chene-paris' },
  ],
}

export const metadata: Metadata = {
  title: 'Parquet Chêne Paris : massif, contrecollé & prix 2025 | Espace Design',
  description:
    'Parquet en chêne à Paris : massif vs contrecollé, essence, finitions, prix au m², artisans. Guide complet 2025.',
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Parquet Chêne à Paris : guide d\'achat et prix 2025',
  description:
    'Parquet en chêne à Paris : massif vs contrecollé, essence, finitions, prix au m², artisans. Guide complet 2025.',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/parquet-chene-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Parquet massif ou contrecollé pour un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dans les appartements parisiens anciens avec plancher bois, le parquet massif cloué est le choix traditionnel (80-150€/m² posé). Il peut être poncé et vitrifié plusieurs fois sur 100 ans. Le parquet contrecollé convient mieux aux supports en béton (colle) et aux appartements avec chauffage au sol. Prix contrecollé posé : 50-100€/m². En appartement haussmannien, le massif est fortement recommandé.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte un parquet chêne massif posé à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le coût d\'un parquet chêne massif à Paris inclut : fourniture (40-120€/m² selon l\'épaisseur et le grade), pose clouée (30-50€/m²), ponçage et vitrification (15-25€/m²). Total parquet chêne massif posé vitrifié : 85-195€/m² selon la qualité. Pour 50m², prévoyez 4 250 à 9 750€ hors TVA.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle finition choisir pour un parquet chêne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les finitions du parquet chêne sont : vitrification (résistante, brillante ou mate, 12-25€/m²), huile (rendu naturel, entretien régulier, 15-30€/m²), cire (aspect traditionnel, moins résistant, 10-20€/m²), vernis UV (ultra résistant, industriel). Pour les appartements familiaux, la vitrification mat est recommandée. Pour un rendu naturel haut de gamme, l\'huile dure est préférée.',
      },
    },
  ],
}

export default function ArticleParquetChene() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />

      {/* Hero article */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Sols &amp; Parquet
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Parquet Chêne à Paris : guide d&apos;achat et prix 2025
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Le chêne est l&apos;essence de parquet la plus utilisée dans les appartements parisiens,
            et pour cause : robuste, élégant, indémodable. Mais entre parquet massif et
            contrecollé, chêne européen et américain, vitrifié et huilé, les choix sont nombreux.
            Ce guide vous aide à choisir le bon parquet chêne pour votre appartement parisien
            et à en maîtriser le budget.
          </p>
        </div>
      </section>

      {/* Contenu article */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Parquet massif ou contrecollé : le choix décisif
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              C&apos;est la première question à trancher avant tout achat de parquet. Le choix
              entre massif et contrecollé dépend avant tout du support existant dans votre
              appartement parisien — et non de vos seules préférences esthétiques.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le parquet massif cloué : le choix des appartements anciens
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Dans les appartements haussmanniens et les immeubles du XIXe siècle, les
                  planchers sont en bois massif. Le parquet massif cloué (22 à 23 mm d&apos;épaisseur)
                  est posé directement sur les lambourdes existantes. C&apos;est la technique
                  traditionnelle, irremplaçable dans ce contexte. Un parquet massif peut être
                  poncé et retraité 5 à 7 fois au fil des décennies — une qualité qui lui
                  confère une durée de vie pouvant dépasser 100 ans. Prix fourniture : 40 à
                  120 €/m² selon l&apos;épaisseur, le grade et la largeur des lames.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le parquet contrecollé collé : pour les supports béton
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Dans les appartements des années 1960-1990 avec dalle béton, le parquet
                  contrecollé (10 à 15 mm) est posé collé à la colle polyuréthane ou en
                  flottant. Il convient également aux appartements avec chauffage par le sol
                  (plancher chauffant), à condition de vérifier la compatibilité de l&apos;essence
                  et de l&apos;épaisseur. Prix fourniture : 25 à 80 €/m². Moins onéreux à l&apos;achat,
                  mais ne peut être poncé qu&apos;une à deux fois au maximum.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Les motifs traditionnels parisiens
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Le parquet point de Hongrie (lames en chevrons à 45°) et le parquet Versailles
                  (panneaux à motif géométrique) sont les deux références historiques des
                  appartements parisiens. Ces poses nécessitent une découpe précise et plus
                  de chutes — comptez 10 à 15% de matière supplémentaire. La pose en point de
                  Hongrie est plus longue à mettre en oeuvre, d&apos;où un surcoût de pose de 20 à
                  30% par rapport à une pose droite.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Chêne européen vs chêne américain : quelles différences ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le chêne est produit sur deux continents et les différences entre les essences
              sont réelles, tant sur le plan esthétique que technique.
            </p>
            <ul className="space-y-3">
              {[
                {
                  poste: 'Chêne européen (Quercus robur / petraea)',
                  fourchette: 'Haut de gamme',
                  detail: 'Grain serré, nombreux fils et noeuds caractéristiques, teinte miel à dorée. C\'est l\'essence utilisée dans les parquets haussmanniens d\'origine. Plus stable que le chêne américain, il résiste bien aux variations hygrométriques des immeubles anciens.',
                },
                {
                  poste: 'Chêne blanc américain (White Oak)',
                  fourchette: 'Milieu de gamme',
                  detail: 'Grain plus régulier, teinte plus froide (gris-beige), très populaire dans les rénovations contemporaines. Bon rapport qualité-prix, souvent proposé en contrecollé large format.',
                },
                {
                  poste: 'Chêne rouge américain (Red Oak)',
                  fourchette: 'Entrée de gamme',
                  detail: 'Teinte rosée caractéristique, grain ouvert. Moins prisé dans les appartements parisiens pour son aspect moins neutre. Bonne résistance mécanique.',
                },
              ].map((item) => (
                <li key={item.poste} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-medium text-[#1C1C1C] text-sm">{item.poste}</div>
                    <div className="text-[#B8960C] text-sm font-medium whitespace-nowrap ml-4">{item.fourchette}</div>
                  </div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Finitions du parquet chêne : vitrifié, huilé, ciré, brossé
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La finition conditionne à la fois le rendu esthétique et les contraintes
              d&apos;entretien au quotidien. Voici le comparatif des quatre grandes familles
              de finitions pour un parquet chêne à Paris.
            </p>
            <ul className="space-y-3">
              {[
                {
                  flag: 'Vitrification (vernis polyuréthane)',
                  detail: 'La finition la plus résistante. Film protecteur en surface (mat, satiné ou brillant). Entretien facile au balai et à la serpillière. Durée avant re-vitrification : 8 à 15 ans. Coût : 12-25€/m². Idéale pour les appartements familiaux avec enfants.',
                },
                {
                  flag: 'Huile (huile dure ou cire-huile)',
                  detail: 'Pénètre dans le bois et le nourrit sans film de surface. Rendu naturel, chaleureux, mat. Entretien avec savon doux et re-huilage partiel possible. Demande plus d\'entretien mais permet des réparations localisées sans ponçage total. Coût : 15-30€/m².',
                },
                {
                  flag: 'Cire',
                  detail: 'Finition traditionnelle des parquets anciens, aspect chaud et soyeux. Moins résistante à l\'eau et aux taches. Entretien régulier avec cire en pâte. Idéale pour les appartements d\'époque souhaitant conserver un caractère authentique. Coût : 10-20€/m².',
                },
                {
                  flag: 'Brossé + huilé',
                  detail: 'Le brossage creuse les veines du bois avant application de l\'huile, accentuant le relief naturel du grain. Très tendance dans les rénovations contemporaines. Masque mieux les rayures du quotidien. Surcoût de 5-10€/m² par rapport à une finition huile classique.',
                },
              ].map((item) => (
                <li key={item.flag} className="flex gap-3">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#1C1C1C] text-sm font-medium">{item.flag} : </span>
                    <span className="text-gray-600 text-sm font-light">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Prix complets d&apos;un parquet chêne posé à Paris en 2025
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Voici les fourchettes de prix tout compris (fourniture + pose + finition) pour
              les configurations les plus courantes dans les appartements parisiens.
            </p>
            <ul className="space-y-3">
              {[
                {
                  poste: 'Parquet contrecollé chêne posé collé (appartement béton)',
                  fourchette: '50 à 100 €/m²',
                  detail: 'Fourniture contrecollé 15 mm + pose collée + vitrification incluse. Configuration la plus accessible.',
                },
                {
                  poste: 'Parquet massif chêne 22 mm posé cloué (appartement ancien)',
                  fourchette: '80 à 150 €/m²',
                  detail: 'Fourniture massif + pose clouée sur lambourdes + ponçage + vitrification mat. Le choix traditionnel pour les haussmanniens.',
                },
                {
                  poste: 'Parquet massif chêne point de Hongrie posé cloué',
                  fourchette: '120 à 200 €/m²',
                  detail: 'Surcoût de pose et de chutes lié au motif. Vitrification ou huile selon souhait. Le choix premium pour les appartements de prestige.',
                },
                {
                  poste: 'Renovation parquet ancien : ponçage + vitrification uniquement',
                  fourchette: '15 à 30 €/m²',
                  detail: 'Si le parquet existant est en bon état, le rénover est plus économique et valorisant que de le remplacer.',
                },
              ].map((item) => (
                <li key={item.poste} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-medium text-[#1C1C1C] text-sm">{item.poste}</div>
                    <div className="text-[#B8960C] text-sm font-medium whitespace-nowrap ml-4">{item.fourchette}</div>
                  </div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Trouver un parqueteur qualifié à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La qualité de la pose est aussi importante que le choix du parquet. Un mauvais
              clouage, un mauvais jointement ou une vitrification mal préparée (ponçage
              insuffisant) peuvent compromettre un parquet de qualité. Vérifiez que votre
              parqueteur dispose d&apos;une assurance décennale couvrant les travaux de pose de sols.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Espace Design coordonne l&apos;ensemble des travaux de parquet dans les appartements
              parisiens : fourniture, pose, ponçage, vitrification ou huilage. Notre équipe
              intervient dans tout Paris et la petite couronne (Neuilly, Boulogne, Versailles,
              Rueil). Consultez nos{' '}
              <Link href="/realisations" className="text-[#B8960C] hover:underline">
                réalisations
              </Link>{' '}
              ou{' '}
              <Link href="/contact" className="text-[#B8960C] hover:underline">
                demandez un devis gratuit
              </Link>
              .
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-6">
              Questions fréquentes — Parquet chêne Paris
            </h2>
            <div className="space-y-4">
              {schemaFaq.mainEntity.map((item) => (
                <div key={item.name} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{item.name}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.acceptedAnswer.text}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/parquet-paris', title: 'Parquet Paris — Espace Design' },
              { href: '/blog/parquet-massif-paris', title: 'Parquet massif Paris — guide 2025' },
              { href: '/blog/renovation-parquet-paris', title: 'Rénovation parquet Paris — guide 2025' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
              { href: '/peinture-paris', title: 'Peinture Paris — Espace Design' },
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
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-saint-cloud', label: 'Saint-Cloud' },
              { href: '/renovation-rueil-malmaison', label: 'Rueil-Malmaison' },
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
          Vous posez un parquet chêne à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Déplacement sans engagement dans tout Paris et petite couronne.
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
