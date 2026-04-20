import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénover un Parquet Abîmé Paris', item: 'https://espacedesignparis.fr/blog/renovation-parquet-abime-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénover un Parquet Abîmé Paris : ponçage, vitrification & prix 2025 | Espace Design',
  description: 'Parquet rayé, gondolé ou abîmé à Paris : ponçage, bouche-pores, vitrification, huilage. Prix au m² et guide artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-parquet-abime-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien de fois peut-on poncer un parquet ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le nombre de ponçages possibles dépend de l\'épaisseur de la couche d\'usure du parquet. Un parquet massif de 20 mm d\'épaisseur peut théoriquement être poncé 5 à 8 fois au cours de sa vie, avec un enlèvement de 1 à 2 mm à chaque passage. Un parquet contrecollé avec une couche d\'usure de 3 à 6 mm ne peut être poncé que 1 à 3 fois au maximum. Un parquet contrecollé d\'entrée de gamme (couche d\'usure de 2 mm ou moins) ne supporte généralement pas le ponçage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vitrification ou huilage : quelle finition choisir pour son parquet parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La vitrification (vernis polyuréthane) forme un film protecteur en surface : très résistante aux rayures et à l\'eau, facile à entretenir, idéale pour les zones de fort passage. Elle donne un aspect brillant ou satiné. L\'huilage pénètre dans les fibres du bois : aspect plus naturel et mat, chaleureux, entretien plus simple (huile de rénovation annuelle) mais moins résistant aux liquides. À Paris, la vitrification est souvent préférée pour les parquets point de Hongrie des appartements haussmanniens très passants, tandis que l\'huilage convient mieux aux chambres et aux espaces de vie plus calmes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il quitter son appartement pendant le ponçage du parquet ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le ponçage génère de la poussière de bois, même avec les aspirateurs intégrés aux machines professionnelles modernes. Il est fortement conseillé de quitter l\'appartement pendant la durée des travaux (1 à 3 jours selon la surface) et de ne pas réintégrer les pièces avant le séchage complet de la finition (vitrification : 24 à 72 h, huilage : 12 à 24 h). Les personnes asthmatiques, les enfants en bas âge et les animaux doivent impérativement rester à l\'écart pendant les opérations.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénover un Parquet Abîmé Paris : ponçage, vitrification & prix 2025 | Espace Design',
  description: 'Parquet rayé, gondolé ou abîmé à Paris : ponçage, bouche-pores, vitrification, huilage. Prix au m² et guide artisan 2025.',
}

export default function ArticleRenovationParquetAbime() {
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
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[11px] text-gray-500 font-light">
              <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">Accueil</Link></li>
              <li className="text-gray-600">/</li>
              <li><Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link></li>
              <li className="text-gray-600">/</li>
              <li className="text-gray-400">Parquet abîmé</li>
            </ol>
          </nav>
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Parquet
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénover un Parquet Abîmé Paris : ponçage, vitrification &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Parquet rayé, gondolé, terne ou avec des lames abîmées ? Avant de tout remplacer, le ponçage et la vitrification permettent de retrouver un parquet comme neuf pour un budget bien inférieur à la pose d&apos;un sol neuf. Guide complet des techniques, des prix et des erreurs à éviter à Paris en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Diagnostic */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Diagnostic : rénover en surface ou remplacer le parquet ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Avant tout devis, un artisan parqueteur doit inspecter l&apos;état du parquet pour déterminer si la rénovation en surface (ponçage + finition) est suffisante ou si un remplacement partiel ou total s&apos;impose. Ce diagnostic conditionne fortement le budget final.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Les principaux critères évalués sont l&apos;épaisseur restante de la couche d&apos;usure, l&apos;état de la colle ou du clouage, la planéité générale et la présence de dégâts des eaux ou d&apos;attaques biologiques (insectes xylophages, moisissures).
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Parquet poncable — rénovation possible',
                  detail: 'Rayures superficielles, finition terne, légères marques de talons ou d\'animaux, changement de couleur souhaité. La couche d\'usure est suffisante (plus de 3 mm restants sur un contrecollé, ou parquet massif non encore poncé 5 fois ou plus). Recommandation : ponçage + finition.',
                },
                {
                  enjeu: 'Lames abîmées isolées — remplacement partiel',
                  detail: 'Quelques lames fissurées, cassées ou très gondolées. Si le parquet est en bois massif et que des lames de même essence et section sont disponibles, un remplacement sélectif est possible. Le résultat est légèrement visible mais nettement moins coûteux qu\'une dépose totale.',
                },
                {
                  enjeu: 'Gondolage généralisé ou dégât des eaux',
                  detail: 'Si plusieurs lames sont soulevées, le support (chape ou plancher bois) a probablement subi un excès d\'humidité. Il faut identifier et traiter la source avant tout autre travail. Dans ce cas, une dépose partielle ou totale est souvent nécessaire, suivie d\'un séchage complet du support.',
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

      {/* Section 2 — Ponçage */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Le ponçage du parquet : étapes et matériel professionnel
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le ponçage est l&apos;opération centrale de la rénovation d&apos;un parquet abîmé. Réalisé avec une ponceuse à bande (ou à tambour pour les grandes surfaces) et une ponceuse d&apos;angle pour les bords, il retire la couche d&apos;ancienne finition et les premières fibres du bois pour retrouver une surface saine et plane. Le ponçage professionnel s&apos;effectue en 2 à 3 passages avec des grains de papier abrasif décroissants.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Ponçage gros grain (36-40)',
                detail: 'Premier passage pour enlever l\'ancienne finition (vernis, cire) et corriger les irrégularités de surface. Le plus agressif : élimine 1 à 2 mm de bois. Obligatoire si le parquet est très abîmé ou s\'il a été ciré pendant des années.',
                cout: 'Inclus dans le prix ponçage',
              },
              {
                titre: 'Ponçage grain moyen (60-80)',
                detail: 'Deuxième passage pour affiner la surface et préparer le bois à recevoir la finition. Élimine les traces laissées par le gros grain. Essentiel pour obtenir une surface lisse et uniforme.',
                cout: 'Inclus dans le prix ponçage',
              },
              {
                titre: 'Ponçage fin (100-120)',
                detail: 'Passage final avant application de la finition. Donne au bois son aspect velouté et sa brillance naturelle. La qualité de ce passage conditionne directement la qualité de rendu de la vitrification ou de l\'huilage.',
                cout: 'Inclus dans le prix ponçage',
              },
              {
                titre: 'Bouche-pores',
                detail: 'Après ponçage, application d\'un bouche-pores pour fermer les pores du bois avant la finition. Essentiel sur les bois poreux (chêne, frêne) pour une surface parfaitement lisse et une consommation réduite de vitrificateur. Étape souvent sautée par les artisans peu soigneux.',
                cout: '3 – 6 €/m²',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Vitrification vs huilage */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Vitrification vs huilage : choisir la bonne finition
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Une fois le bois poncé, deux grandes options s&apos;offrent à vous pour la finition : la vitrification (vernis polyuréthane en film de surface) ou l&apos;huilage (pénétration dans les fibres). Le choix dépend de l&apos;usage de la pièce, de l&apos;esthétique souhaitée et du temps que vous êtes prêt à consacrer à l&apos;entretien.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Vitrification polyuréthane mate',
                prix: '15 – 25 €/m²',
                detail: 'Finition la plus résistante. Film protecteur en surface qui protège le bois de l\'eau, des taches et des rayures légères. Aspect mat moderne, peu de reflets. Entretien facile (serpillière légèrement humide). 2 à 3 couches requises. Séchage : 24 à 48 h entre couches, 72 h avant remise en service.',
              },
              {
                type: 'Vitrification polyuréthane satinée ou brillante',
                prix: '15 – 25 €/m²',
                detail: 'Même protection que le mat mais avec un aspect lustré qui amplifie la brillance du bois et la lumière dans la pièce. Très répandu dans les appartements haussmanniens. Sensible aux traces de pieds nus et aux marques. À privilégier dans les espaces formels (salon) plutôt que dans les chambres.',
              },
              {
                type: 'Huilage (huile dure ou huile cire)',
                prix: '18 – 30 €/m²',
                detail: 'Pénètre dans les fibres du bois et les nourrit de l\'intérieur. Aspect naturel et mat très doux, très apprécié des amateurs de déco scandinave ou contemporaine. Moins résistant à l\'eau que le vernis : taches à essuyer immédiatement. Entretien annuel avec une huile de rénovation pour maintenir la protection.',
              },
              {
                type: 'Savon blanc (finition naturelle)',
                prix: '10 – 20 €/m²',
                detail: 'Finition d\'inspiration nordique qui blanchit légèrement le bois en accentuant son veinage naturel. Très tendance mais peu répandu en France. Entretien au savon de parquet régulier. Non recommandé pour les salons très passants car marque facilement.',
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

      {/* Section 4 — Parquet collé vs cloué */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Parquet collé, cloué ou flottant : impact sur la rénovation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le mode de pose du parquet influe directement sur les possibilités de rénovation et sur les risques liés au ponçage. Il est important que l&apos;artisan identifie le mode de pose avant de démarrer.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Parquet massif cloué (immeubles anciens parisiens)',
                detail: 'Le plus courant dans les appartements parisiens du 19e et début 20e siècle. Posé sur des lambourdes en bois, il est facilement réparable lame par lame. Le ponçage est sans contrainte à condition de ne pas poncer dans le sens contraire à la pose.',
                cout: 'Ponçage + finition : 25 – 45 €/m²',
              },
              {
                titre: 'Parquet contrecollé collé sur chape',
                detail: 'Courant dans les rénovations des années 1990-2010. La couche d\'usure (3 à 6 mm) limite le nombre de ponçages possibles. À vérifier impérativement avant de commander les travaux. Si la couche d\'usure est inférieure à 2 mm, le ponçage est déconseillé.',
                cout: 'Ponçage + finition : 20 – 35 €/m²',
              },
              {
                titre: 'Parquet flottant',
                detail: 'Pose sans colle ni clou, sur sous-couche. Non poncable dans la majorité des cas car les lames sont fines et creuses. En cas de dégradation importante, le remplacement est la seule option. Réparation possible uniquement sur quelques lames isolées.',
                cout: 'Remplacement : 40 – 80 €/m²',
              },
              {
                titre: 'Point de Hongrie et chevrons (parquet haussmannien)',
                detail: 'Les parquets à motifs géométriques (point de Hongrie, Versailles, chevrons) sont des parquets massifs, généralement ponçables. Leur rénovation valorise fortement le bien. Le ponçage doit être diagonal ou en X pour respecter le motif. Recommander un artisan spécialisé.',
                cout: 'Supplément 15 – 30 % vs pose droite',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de rénovation d&apos;un parquet à Paris en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tous les prix ci-dessous s&apos;entendent main d&apos;œuvre et fournitures incluses pour un parquet standard dans un appartement parisien.
          </p>

          {/* Price grid */}
          <div className="mb-8 space-y-2">
            <div className="grid grid-cols-3 bg-[#1C1C1C] text-white rounded-t-lg px-4 py-3 text-xs font-light uppercase tracking-wider">
              <div>Prestation</div>
              <div className="text-center">Prix au m²</div>
              <div className="text-right">Pour 40 m²</div>
            </div>
            {[
              { prestation: 'Ponçage seul', m2: '10 – 18 €', total: '400 – 720 €' },
              { prestation: 'Ponçage + vitrification (2 couches)', m2: '25 – 38 €', total: '1 000 – 1 520 €' },
              { prestation: 'Ponçage + vitrification (3 couches)', m2: '30 – 45 €', total: '1 200 – 1 800 €' },
              { prestation: 'Ponçage + huilage', m2: '28 – 42 €', total: '1 120 – 1 680 €' },
              { prestation: 'Remplacement lames isolées', m2: '60 – 120 €', total: 'Selon surface' },
              { prestation: 'Pose parquet massif neuf (fourni)', m2: '70 – 140 €', total: '2 800 – 5 600 €' },
            ].map((row, i) => (
              <div
                key={row.prestation}
                className={`grid grid-cols-3 px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'} border border-gray-100`}
              >
                <div className="text-[#1C1C1C] font-light">{row.prestation}</div>
                <div className="text-center text-[#B8960C] font-medium">{row.m2}</div>
                <div className="text-right text-gray-600 font-light">{row.total}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Durée des travaux et organisation du chantier
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Ponçage d\'un appartement de 60 m² : 1 journée complète',
                'Vitrification 3 couches : 1 à 2 jours supplémentaires (séchage entre couches)',
                'Délai total ponçage + vitrification : 3 à 4 jours pour 60 m²',
                'Ne pas poser de meubles avant 72 h minimum après la dernière couche de vernis',
                'Retirer les plinthes avant le ponçage pour un résultat propre aux bords',
                'Protéger les bas de portes et huisseries contre la poussière de bois',
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
              { href: '/parquet-paris', title: 'Parquet Paris — pose et rénovation' },
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
              { href: '/blog/renovation-chambre-paris', title: 'Rénovation chambre Paris' },
              { href: '/blog/renovation-salon-paris', title: 'Rénovation salon Paris' },
              { href: '/blog/carrelage-paris', title: 'Carrelage Paris — guide et prix' },
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
          Redonnez vie à votre parquet parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis ponçage + vitrification sous 48h. Artisan parqueteur spécialisé Paris.
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
