import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Parquet Chêne Blanc Paris', item: 'https://espacedesignparis.fr/blog/renovation-parquet-chene-blanc-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Parquet Chêne Blanc Paris : naturel, blanchi & prix artisan 2025 | Espace Design',
  description: 'Parquet chêne blanc à Paris : bois naturel blanchi, huile blanche, vernis satiné. Tendance 2025, pose et entretien. Espace Design artisan parquet.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-parquet-chene-blanc-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'un parquet chêne blanc posé à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix d\'un parquet chêne blanc posé à Paris varie selon la technique de finition et le type de pose. Pour un parquet chêne huilé blanc (contrecollé) en pose droite : 80 à 130 €/m² fourni et posé. Pour un parquet massif blanchi avec finition huile blanche : 120 à 200 €/m². La lasure blanche sur parquet existant (décapage + lazure) coûte 25 à 50 €/m² de main d\'œuvre. Le traitement huile blanche seul sur parquet poncé : 15 à 30 €/m². Demandez un devis gratuit pour votre projet à Paris.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre huile blanche, lasure et vernis pour un parquet chêne blanc ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L\'huile blanche pénètre dans le bois et lui confère un aspect naturel mat, légèrement pigmenté blanc, tout en conservant le grain et les noeuds apparents. Elle nécessite un entretien annuel avec une huile d\'entretien. La lasure blanche (ou vitrificateur teinté blanc) dépose un film en surface, effet plus couvrant et moins "bois naturel". Le vernis satiné blanc est le plus résistant mais le moins naturel visuellement. Pour les petits appartements parisiens, l\'huile blanche est recommandée : elle apporte luminosité sans effet plastique.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le parquet chêne blanc convient-il aux petits appartements parisiens ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, c\'est même l\'une de ses qualités principales. Les teintes claires agrandissent visuellement l\'espace et reflètent mieux la lumière naturelle — particulièrement précieux dans les appartements parisiens souvent peu lumineux ou en rez-de-chaussée. Un parquet chêne blanchi en format large (lames de 180 mm ou plus) en pose droite ou bateau accentue encore cet effet d\'espace. C\'est la tendance dominante dans les rénovations parisiennes depuis 2022.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment entretenir un parquet chêne blanc huilé ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un parquet chêne blanc huilé s\'entretient avec un savon neutre pH légèrement acide (type savon parquet ou savon noir dilué) pour le nettoyage quotidien. Évitez l\'eau en excès et les produits ménagers agressifs qui dégraissent l\'huile. Une fois par an, appliquer une huile d\'entretien blanche pour nourrir le bois et rafraîchir la teinte. En cas de rayure profonde, il est possible de poncer localement et de ré-huiler sans refaire tout le sol — avantage majeur par rapport au vernis. Évitez les patins abrasifs sous les meubles.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Parquet Chêne Blanc Paris : naturel, blanchi & prix artisan 2025 | Espace Design',
  description: 'Parquet chêne blanc à Paris : bois naturel blanchi, huile blanche, vernis satiné. Tendance 2025, pose et entretien. Espace Design artisan parquet.',
}

export default function ArticleParquetCheneBlancParis() {
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

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Parquet
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Parquet Chêne Blanc Paris : naturel, blanchi et prix artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le parquet chêne blanc s&apos;est imposé comme la tendance phare des rénovations parisiennes. Entre bois naturel huilé blanc, lasure claire et vernis satiné, les techniques diffèrent et les résultats aussi. Guide complet 2025 : blanchiment, pose, entretien et prix.
          </p>
        </div>
      </section>

      {/* Section 1 — Tendance chêne blanc */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Tendance chêne blanc à Paris : naturel ou traité ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Depuis 2022, le parquet chêne clair ou blanchi domine les rénovations parisiennes. Ce choix n&apos;est pas anodin : dans des appartements souvent sombres, en rez-de-chaussée ou orientés nord, les sols clairs réfléchissent la lumière naturelle et agrandissent visuellement l&apos;espace. Deux grandes options s&apos;offrent à vous.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Le <strong>chêne naturel clair</strong> (non traité blanc) désigne un chêne de teinte naturellement pâle, issu de coupes sélectionnées (bois de fil, sans noeuds prononcés). Il suffit d&apos;une huile incolore ou légèrement satinée pour conserver cette teinte lumineuse. Le <strong>chêne blanchi</strong>, en revanche, est un chêne de teinte standard qui a subi un traitement de blanchiment : décapage, brossage, huile blanche ou lasure. Le résultat est plus couvrant, plus uniforme, légèrement plus artificiel mais très tendance.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Chêne naturel clair : authenticité et noblesse',
                  detail: 'Sélectionné pour sa teinte naturellement claire, ce chêne haut de gamme nécessite peu de traitement. Une huile naturelle incolore ou légèrement satinée suffit à révéler le grain et la chaleur du bois. Avantage : aspect le plus naturel et noble, durabilité maximale. Inconvénient : prix plus élevé (bois sélectionné) et variations naturelles de teinte entre les lames.',
                },
                {
                  enjeu: 'Chêne blanchi : traitement huile blanche ou lasure',
                  detail: 'Un chêne standard (teinte miel) traité avec une huile pigmentée blanche ou une lasure blanche. Le pigment blanc s\'incruste dans le grain du bois en préservant la texture. Résultat : effet bois flotté ou Scandi très lumineux. Avantage : prix plus accessible, large choix de teintes (blanc pur, blanc cassé, gris blanc). Inconvénient : entretien avec huile d\'entretien blanche obligatoire une fois par an.',
                },
                {
                  enjeu: 'Chêne décapé ou brossé : effet vieilli naturel',
                  detail: 'Le brossage mécanique accentue le fil du bois (creuse les zones tendres) avant application d\'une huile blanche. Résultat très naturel, aspect bois ancien blanchi au soleil. Technique prisée dans les rénovations de caractère (appartements haussmanniens, ateliers). Plus résistant aux rayures car les micro-reliefs masquent les traces d\'usure quotidienne.',
                },
              ].map((el) => (
                <div key={el.enjeu} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.enjeu}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Techniques de blanchiment */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Techniques de blanchiment : huile, lasure et décapage
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Chaque technique de blanchiment donne un rendu différent, une durabilité différente et un coût différent. Le choix dépend du parquet existant, de l&apos;effet souhaité et du budget.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Huile blanche (pénétrante)',
                solution: 'L\'huile pigmentée blanche pénètre dans les fibres du bois sans former de film en surface. Rendu naturel, mat, très tactile. Le bois reste "vivant" et respire. Nécessite une réapplication annuelle d\'huile d\'entretien blanche. Idéale sur parquet massif ou contrecollé épais.',
                cout: '15 – 30 €/m²',
              },
              {
                titre: 'Lasure blanche (semi-filmogène)',
                solution: 'La lasure blanche dépose un léger film en surface tout en laissant le grain apparent. Rendu plus couvrant que l\'huile, légèrement brillant ou satiné selon le produit. Durabilité supérieure (5 à 7 ans sans re-traitement). Moins facile à réparer localement.',
                cout: '20 – 40 €/m²',
              },
              {
                titre: 'Décapage + brossage mécanique',
                solution: 'Sur parquet ancien verni (chêne naturel ou exotique), décapage à la ponceuse (2 passages) pour retirer l\'ancienne finition, puis brossage pour creuser le grain, puis huile blanche ou lasure. Idéal pour redonner une seconde vie à un vieux parquet en chêne. Donne un magnifique effet bois blanchi naturellement.',
                cout: '25 – 55 €/m²',
              },
              {
                titre: 'Vernis satiné teinté blanc',
                solution: 'Film plastique en surface, maximum de protection (résistant aux taches, à l\'eau, aux griffures). Rendu le plus uniforme et brillant. Moins naturel visuellement — le grain bois est moins perceptible. Durabilité 10 à 15 ans. Idéal pour familles avec enfants ou zones à fort trafic.',
                cout: '30 – 50 €/m²',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.solution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Luminosité et petits appartements */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Effet luminosité dans les petits appartements parisiens
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            À Paris, les appartements de 30 à 60 m² sont la norme. Dans ces espaces contraints, le choix du revêtement de sol a un impact considérable sur la perception de la lumière et du volume. Le parquet chêne blanc est l&apos;un des leviers les plus efficaces — et les moins coûteux — pour transformer visuellement un appartement.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Lames larges pour agrandir l\'espace',
                prix: 'Lames 180 – 240 mm',
                detail: 'Les lames larges (180 mm ou plus) réduisent le nombre de joints visibles au sol et créent une impression de continuité et d\'espace. Combinées à une teinte claire, elles sont idéales dans les studios et 2 pièces parisiens. La pose dans la longueur de la pièce accentue encore la profondeur.',
              },
              {
                type: 'Pose bateau ou en biais pour dynamiser',
                prix: 'Pose oblique +15%',
                detail: 'La pose en biais (à 45°) agrandit visuellement l\'espace mais génère plus de chutes (15% de pertes). La pose "bateau" (lames parallèles au plus grand mur) est la plus classique et la plus économique. Dans un couloir ou un séjour en longueur, la pose perpendiculaire au sens de circulation élargit visuellement.',
              },
              {
                type: 'Parquet blanc et murs blancs : risque de froid',
                prix: 'Conseil décoration',
                detail: 'Associer parquet chêne blanchi ET murs blancs purs peut donner un résultat froid et aseptisé. Les artisans recommandent de tempérer avec des murs en blanc cassé (légèrement chaud), des touches de bois naturel non traité (mobilier, étagères) et des textiles en lin naturel. Le chêne blanc s\'associe très bien avec le vert sauge, le terracotta doux ou le gris perle.',
              },
              {
                type: 'Parquet blanc en rez-de-chaussée : vigilance humidité',
                prix: 'Point technique',
                detail: 'En rez-de-chaussée parisien, l\'humidité du sol peut faire gonfler et blanchir davantage le parquet. Vérifier l\'hygrométrie avant pose (taux < 65%), prévoir une sous-couche vapeur si nécessaire, et privilégier un contrecollé (plus stable) au massif si l\'humidité est supérieure à 60%.',
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Prix m² */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix parquet chêne blanc à Paris : récapitulatif 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs indicatifs pour Paris intra-muros, fourniture et pose incluses par un artisan qualifié.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget 30 m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durabilité</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    traitement: 'Parquet contrecollé chêne huilé blanc (pose droite)',
                    unite: '80 – 130 €/m²',
                    budget: '2 400 – 3 900 €',
                    duree: '20 – 30 ans',
                  },
                  {
                    traitement: 'Parquet massif chêne blanchi (pose clouée)',
                    unite: '120 – 200 €/m²',
                    budget: '3 600 – 6 000 €',
                    duree: '50+ ans (multiple ponçages)',
                  },
                  {
                    traitement: 'Ponçage + huile blanche (parquet existant)',
                    unite: '25 – 45 €/m²',
                    budget: '750 – 1 350 €',
                    duree: '5 – 10 ans (ré-huilage)',
                  },
                  {
                    traitement: 'Décapage + brossage + lasure blanche',
                    unite: '35 – 60 €/m²',
                    budget: '1 050 – 1 800 €',
                    duree: '7 – 12 ans',
                  },
                  {
                    traitement: 'Dépose parquet ancien + repose neuf',
                    unite: '15 – 25 €/m² (dépose)',
                    budget: '450 – 750 € (dépose seule)',
                    duree: 'Selon nouveau parquet',
                  },
                  {
                    traitement: 'Sous-couche acoustique et vapeur',
                    unite: '5 – 12 €/m²',
                    budget: '150 – 360 €',
                    duree: 'Durée vie parquet',
                  },
                ].map((row, i) => (
                  <tr key={row.traitement} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.traitement}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.unite}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.budget}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Erreurs à éviter avec le parquet chêne blanc
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Ne pas poser un parquet blanc en zone humide (cuisine ouverte, salle de bain) sans finition adaptée',
                'Ne pas utiliser de produits ménagers chlorés ou alcoolisés sur un parquet huilé — ils dégrassent l\'huile',
                'Ne pas négliger l\'acclimatation : laisser les lames 48h à 72h dans la pièce avant pose',
                'Ne pas choisir un blanc trop pur (RAL 9010) : il jaunit rapidement à la lumière UV. Préférer blanc cassé',
                'Ne pas poser collé sur plancher chauffant sans vérifier la compatibilité du parquet choisi',
                'Ne pas oublier les plinthes assorties ou en peint blanc pour un résultat cohérent',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-6 text-center">Questions fréquentes</p>
          <div className="space-y-6">
            {schemaFaq.mainEntity.map((q) => (
              <div key={q.name} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-3">{q.name}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{q.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides connexes */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Guides connexes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-parquet-paris', title: 'Rénovation parquet Paris' },
              { href: '/blog/pose-parquet-paris', title: 'Pose parquet Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/peinture-enduit-paris', title: 'Peinture et enduit Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/renovation-appartement-paris-16e', title: 'Rénovation appartement Paris 16e' },
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
      <section className="py-16 bg-[#D4AF37] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-4">
          Posez votre parquet chêne blanc à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan parquet Paris — devis gratuit sous 48h. Fourniture et pose, ponçage, traitement blanc.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#1C1C1C] text-white px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-black transition-colors"
          >
            Devis gratuit <ArrowRight size={13} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-[#1C1C1C]/30 text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:border-[#1C1C1C] transition-colors"
          >
            <Phone size={14} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
