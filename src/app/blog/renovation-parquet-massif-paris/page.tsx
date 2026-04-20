import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Parquet Massif Paris', item: 'https://espacedesignparis.fr/blog/renovation-parquet-massif-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Parquet Massif Paris : pose, ponçage & vitrification 2025 | Espace Design',
  description: 'Parquet massif à Paris : essences, pose collée vs clouée, ponçage, vitrification. Guide artisan et prix au m² 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-parquet-massif-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien de fois peut-on poncer un parquet massif à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un parquet massif peut être poncé 3 à 4 fois sur sa durée de vie, selon l'épaisseur de la lame et la profondeur des rainures. Une lame massive de 20 mm d'épaisseur peut tolérer 3 ponçages avant d'atteindre la rainure. À Paris, où les parquets anciens datent parfois du XIXe siècle, un audit préalable par un artisan parqueteur est recommandé pour évaluer l'épaisseur résiduelle avant tout ponçage.",
      },
    },
    {
      '@type': 'Question',
      name: 'Vitrification ou huile pour un parquet massif dans un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La vitrification (vernis polyuréthane) est la finition la plus utilisée à Paris : très résistante aux rayures et à l'humidité, elle convient aux pièces à fort trafic (couloir, séjour). L'huile pénétrante offre un aspect naturel et mat très apprécié dans les appartements de caractère, mais nécessite un entretien annuel (réhuilage). Pour les zones humides ou les familles avec enfants, la vitrification glycéro est souvent le meilleur compromis.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le prix du parquet massif posé à Paris en 2025 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À Paris, le prix du parquet massif posé varie entre 80 et 200 €/m² selon l'essence et le mode de pose. Chêne massif posé collé sur béton : 80 à 130 €/m². Chêne massif posé cloué sur lambourdes : 110 à 160 €/m². Essences nobles (noyer, frêne, hêtre) : 130 à 200 €/m². Ces prix incluent la fourniture du parquet, les lambourdes si nécessaire, la pose et la finition (vitrification ou huile). La dépose et l'évacuation de l'ancien revêtement sont en supplément (15 à 30 €/m²).",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Parquet Massif Paris : pose, ponçage & vitrification 2025 | Espace Design',
  description: 'Parquet massif à Paris : essences, pose collée vs clouée, ponçage, vitrification. Guide artisan et prix au m² 2025.',
}

export default function ArticleParquetMassif() {
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
            Parquet Massif Paris : pose, ponçage & vitrification 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le parquet massif reste la référence dans les appartements parisiens de caractère. Essences, modes de pose, ponçage, finition : guide complet pour choisir, poser et entretenir un parquet massif à Paris en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Massif vs contrecollé */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Parquet massif vs contrecollé : quelles différences ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le parquet massif est constitué d&apos;une seule et même pièce de bois, usinée dans toute son épaisseur (15 à 22 mm). Le contrecollé est composé d&apos;un parement de bois noble collé sur un support en bois composite. Les deux produits ont une apparence similaire une fois posés, mais leurs propriétés diffèrent significativement.
            </p>
            <div className="space-y-4">
              {[
                {
                  critere: 'Nombre de ponçages possibles',
                  massif: '3 à 4 ponçages sur la durée de vie (lame de 20 mm)',
                  contrecolle: '1 à 2 ponçages maximum (parement de 4 mm d\'épaisseur)',
                },
                {
                  critere: 'Durabilité',
                  massif: "Jusqu'à 100 ans avec un entretien régulier. Les parquets haussmanniens parisiens témoignent de cette longévité.",
                  contrecolle: "25 à 40 ans en moyenne. Sensible à l'humidité sur les couches inférieures.",
                },
                {
                  critere: 'Réaction à l\'humidité',
                  massif: "Travaille davantage (dilatation/rétraction saisonnière). Nécessite une pose adaptée et un taux d'humidité stable.",
                  contrecolle: "Plus stable dimensionnellement. Peut être posé dans des pièces légèrement humides.",
                },
                {
                  critere: 'Prix',
                  massif: "Fourniture : 30 à 90 €/m² selon l'essence. Pose : 40 à 70 €/m² supplémentaires.",
                  contrecolle: "Fourniture : 20 à 60 €/m². Pose souvent plus rapide (clipsage flottant possible).",
                },
              ].map((el) => (
                <div key={el.critere} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-3">{el.critere}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#B8960C] font-light mb-1">Massif</div>
                      <div className="text-gray-600 text-sm font-light leading-relaxed">{el.massif}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-400 font-light mb-1">Contrecollé</div>
                      <div className="text-gray-600 text-sm font-light leading-relaxed">{el.contrecolle}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Essences */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Essences populaires à Paris : chêne, noyer, frêne
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix de l&apos;essence conditionne l&apos;esthétique, la dureté et le prix du parquet. Dans les appartements parisiens, trois essences dominent le marché.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                essence: 'Chêne massif',
                hardness: 'Dureté Brinell : 3,7',
                detail: "L'essence de référence à Paris. Grain marqué, nombreux coloris disponibles (naturel, blanchi, fumé, brossé). Dureté suffisante pour toutes les pièces. La pose en point de Hongrie ou en chevron est particulièrement prisée dans les appartements haussmanniens.",
                prix: '30 – 65 €/m² fourniture',
              },
              {
                essence: 'Noyer massif',
                hardness: 'Dureté Brinell : 3,5',
                detail: "Teinte chocolat chaud naturelle, très décoratif. Plus rare et plus cher que le chêne. Légèrement moins dur, convient aux pièces à trafic modéré. Apprécié dans les appartements contemporains haut de gamme.",
                prix: '55 – 90 €/m² fourniture',
              },
              {
                essence: 'Frêne massif',
                hardness: 'Dureté Brinell : 4,0',
                detail: "Plus dur que le chêne, grain fin et élégant, teinte claire tirant sur le beige. Résistant aux rayures, idéal pour les zones à fort trafic. Très apprécié dans les cuisines ouvertes ou les couloirs.",
                prix: '35 – 65 €/m² fourniture',
              },
              {
                essence: 'Hêtre massif',
                hardness: 'Dureté Brinell : 3,8',
                detail: "Teinte homogène rosée très caractéristique. Sensible à l'humidité et aux variations de température. Adapté aux séjours et chambres mais déconseillé dans les cuisines. Prix attractif pour une essence dure.",
                prix: '28 – 50 €/m² fourniture',
              },
            ].map((el) => (
              <div key={el.essence} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.essence}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-[10px] text-gray-400 font-light mb-2">{el.hardness}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Pose */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Pose collée sur béton vs pose clouée sur lambourdes
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le mode de pose dépend avant tout de la nature du support existant et de l&apos;épaisseur du parquet. Dans un appartement parisien, deux situations sont courantes : un plancher béton (chape ou dalle) ou un plancher bois ancien avec vieux parquet à déposer.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Pose collée sur béton (chape ou ragréage)',
                prix: '40 – 60 €/m² pose seule',
                detail: "Colle bi-composant appliquée à la spatule dentelée directement sur la chape ou un ragréage autonivelant. Nécessite une humidité résiduelle du béton inférieure à 3,5 CM (test carbure obligatoire). Séchage 24 à 48h avant circulation. Solution la plus rapide et la plus économique sur béton sain.",
              },
              {
                type: 'Pose clouée sur lambourdes',
                prix: '60 – 80 €/m² pose + lambourdes',
                detail: "Lambourdes en bois fixées sur la dalle, parquet cloué dessus. Permet de rattraper des irrégularités de niveau, d'intégrer une isolation thermique ou phonique sous le parquet et de créer un espace technique. Solution traditionnelle dans les rénovations d'appartements anciens. Surélévation de 35 à 45 mm.",
              },
              {
                type: 'Pose sur plancher bois existant (chêville ou colle)',
                prix: '35 – 55 €/m² pose seule',
                detail: "Sur un plancher bois sain (vérification préalable des solives), le parquet massif peut être cloué directement. Condition : le plancher existant doit être stable, sec et plan. Permet de conserver la hauteur sous plafond. Solution courante lors de la rénovation des parquets anciens en chêne point de Hongrie.",
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

      {/* Section 4 — Ponçage et finition */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Ponçage et finition : vitrification vs huile
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le ponçage d&apos;un parquet massif ancien est l&apos;opération la plus délicate de la rénovation. Il nécessite un matériel professionnel (ponceuse à bande, ponceuse de bord) et un savoir-faire précis pour éviter les ondulations et les brûlures du bois.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                finition: 'Vitrification glycéro',
                aspect: 'Brillant à satiné',
                detail: "Vernis à l'huile de lin polymérisé. Excellent rapport durabilité / souplesse. Résiste bien aux rayures légères. Séchage 24h entre couches (2 à 3 couches). Très utilisé dans les appartements familiaux parisiens.",
                prix: '15 – 25 €/m²',
              },
              {
                finition: 'Vitrification polyuréthane',
                aspect: 'Brillant à mat',
                detail: "Vernis de synthèse très résistant à l'abrasion et à l'eau. Idéal pour les zones à fort trafic (couloir, salon). Séchage plus rapide (12h). Finition plus plastifiée visuellement. Standard dans les rénovations locatives.",
                prix: '18 – 28 €/m²',
              },
              {
                finition: 'Huile pénétrante',
                aspect: 'Naturel, mat',
                detail: "Huile (lin, tung, durcissante) qui pénètre dans les fibres du bois. Aspect naturel très apprécié dans les appartements de caractère. Le bois respire et reste vivant. Nécessite un réhuilage annuel. Facilement réparable par zone.",
                prix: '12 – 20 €/m²',
              },
              {
                finition: 'Cire',
                aspect: 'Satiné, naturel',
                detail: "Finition traditionnelle des parquets parisiens anciens. Aspect authentique mais entretien plus contraignant (cirage régulier). Déconseillée dans les cuisines ou salles de bain. Idéale pour restituer l'authenticité d'un parquet haussmannien.",
                prix: '10 – 18 €/m²',
              },
            ].map((el) => (
              <div key={el.finition} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.finition}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-[10px] text-gray-400 font-light mb-2">Aspect : {el.aspect}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix du parquet massif à Paris : tableau récapitulatif 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix s&apos;entendent fourniture et pose par un artisan parqueteur parisien, finition vitrification incluse.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Détail</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { prestation: 'Chêne massif posé collé + vitrification', prix: '80 – 130 €/m²', detail: 'Fourniture + colle + pose + vitrification 2 couches' },
                  { prestation: 'Chêne massif posé sur lambourdes + vitrification', prix: '110 – 160 €/m²', detail: 'Fourniture + lambourdes + pose clouée + vitrification' },
                  { prestation: 'Essence noble (noyer, frêne) posé collé', prix: '130 – 200 €/m²', detail: 'Fourniture + colle + pose + finition huile ou vernis' },
                  { prestation: 'Ponçage seul (parquet existant)', prix: '20 – 40 €/m²', detail: 'Ponçage 3 passes + nettoyage (finition non incluse)' },
                  { prestation: 'Vitrification seule (après ponçage)', prix: '15 – 28 €/m²', detail: '2 à 3 couches vernis ou huile' },
                  { prestation: 'Dépose et évacuation ancien parquet', prix: '15 – 30 €/m²', detail: 'Dépose + chargement + évacuation déchetterie' },
                ].map((row, i) => (
                  <tr key={row.prestation} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.prestation}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils avant de rénover un parquet massif parisien
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Mesurer l'épaisseur résiduelle avant de décider de poncer — un parquet trop fin ne peut plus être traité",
                "Vérifier l'humidité du support (béton) avec un test carbure avant toute pose collée",
                "Laisser acclimater le parquet massif 48 à 72h dans la pièce avant la pose",
                "Traiter les lames abîmées ou décollées avant le ponçage pour éviter les vibrations de la ponceuse",
                "Choisir une finition huile si vous souhaitez réparer par zones sans tout rénover",
                "Prévoir un taux d'humidité intérieure stable (45 à 60%) pour limiter le travail du bois",
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

      {/* Voir aussi */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/parquet-paris', title: 'Parquet Paris' },
              { href: '/blog/choisir-carrelage-salle-de-bain', title: 'Choisir son carrelage salle de bain' },
              { href: '/blog/renovation-appartement-paris-1er', title: 'Rénovation appartement Paris 1er' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
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
      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos zones d&apos;intervention</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
              { href: '/renovation-saint-denis', label: 'Saint-Denis' },
              { href: '/renovation-pantin', label: 'Pantin' },
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
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-4">
          Rénover ou poser votre parquet massif à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan parqueteur parisien. Devis gratuit sous 48h. Ponçage, pose et vitrification.
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
