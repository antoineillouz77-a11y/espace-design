import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Cave & Parking Paris', item: 'https://espacedesignparis.fr/blog/renovation-cave-parking-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Cave & Parking Paris : humidité, peinture & prix 2025 | Espace Design',
  description: 'Rénover sa cave ou parking à Paris : traitement humidité, peinture sols, rangements. Prix et guide complet 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-cave-parking-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix pour rénover une cave à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix de rénovation d'une cave à Paris varie de 500 à 8 000 € selon la surface et les travaux à réaliser. Pour une cave de 10 m² : nettoyage + peinture murs et sol = 500–1 500 €, traitement humidité simple (badigeon d'étanchéité) = 800–2 000 €, cuvelage complet = 3 000–6 000 €, aménagement en espace de rangement ou chaufferie = 2 000–8 000 €. Le traitement de l'humidité est toujours le premier poste à traiter avant tout aménagement.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment traiter l\'humidité dans une cave parisienne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les caves parisiennes souffrent souvent de deux types d'humidité : les remontées capillaires (eau remontant par les murs depuis le sol) et les infiltrations latérales (eau traversant les murs de fondation). Le diagnostic préalable est indispensable pour identifier la source. Les solutions vont du simple badigeon d'étanchéité intérieure (500–1 500 €) au cuvelage intégral en béton projeté (3 000–8 000 €) en passant par l'injection de résines hydrophobes dans les murs (150–300 €/ml). Une cave humide non traitée détériore progressivement les matériaux stockés et peut affecter la structure du bâtiment.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle peinture utiliser pour un sol de parking à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un sol de parking, la résine époxy en deux composants est la solution de référence : résistance aux chocs, à l'abrasion, aux taches d'huile et aux agents chimiques (liquide de frein, carburant). Elle est appliquée en deux couches avec possibilité d'ajouter un antidérapant (silice ou alumine mélangée à la couche de finition). Prix : 25–60 €/m² posé selon l'épaisseur et le nombre de couches. Une préparation soigneuse (décapage, dégraissage, primaire d'accrochage) est indispensable pour une tenue dans le temps.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Cave & Parking Paris : humidité, peinture & prix 2025 | Espace Design',
  description: 'Rénover sa cave ou parking à Paris : traitement humidité, peinture sols, rangements. Prix et guide complet 2025.',
}

export default function ArticleRenovationCaveParking() {
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
            Aménagement
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Cave &amp; Parking Paris : humidité, peinture &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Caves humides, parkings dégradés, espaces de stockage vétustes : rénover ces locaux est souvent la dernière priorité des propriétaires parisiens. Pourtant, une cave traitée et un parking en bon état représentent un gain de confort et de valeur immobilière réel. Guide complet 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Humidité cave parisienne */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              L&apos;humidité dans les caves parisiennes : causes et diagnostic
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Les caves des immeubles parisiens anciens (construits avant 1950) sont particulièrement exposées aux problèmes d&apos;humidité. La nappe phréatique parisienne est proche de la surface dans de nombreux secteurs, et les murs de fondation en pierre calcaire ou en moellon de meulière n&apos;ont souvent aucune barrière d&apos;étanchéité.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Identifier la source de l&apos;humidité avant d&apos;entreprendre des travaux est indispensable : un traitement inadapté à la cause est non seulement inefficace mais peut aggraver le problème. Un artisan spécialisé en traitement de l&apos;humidité réalise systématiquement un diagnostic avant de proposer une solution.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Remontées capillaires',
                  detail: 'L\'eau remonte depuis le sol par capillarité dans les murs (jusqu\'à 1,5 m de hauteur). Signes caractéristiques : taches salines blanches (efflorescences), peinture qui cloque à la base des murs, odeur de moisi persistante. Solution typique : injection de résines hydrophobes dans le mur pour créer une barrière étanche.',
                },
                {
                  enjeu: 'Infiltrations latérales',
                  detail: 'L\'eau traverse les murs de fondation sous pression depuis le sol extérieur. Plus fréquent après de fortes pluies ou lors de la fonte des neiges. Signes : traces d\'humidité localisées, parfois ruissellement visible. Solution : cuvelage intérieur ou imperméabilisation extérieure (travaux de génie civil).',
                },
                {
                  enjeu: 'Condensation',
                  detail: 'L\'air chaud et humide qui pénètre en été se condense sur les murs froids de la cave. Provoque des moisissures en surface sans que les murs ne soient réellement infiltrés. Solution : améliorer la ventilation (grille de ventilation, ventilation mécanique), isoler les parois.',
                },
                {
                  enjeu: 'Fuite de canalisation',
                  detail: 'Les canalisations encastrées dans les murs ou les dalles de caves anciennes sont souvent en plomb ou en fonte dégradée. Une micro-fissure peut alimenter une humidité chronique. Diagnostic : test de pression par un plombier, thermographie infrarouge pour localiser les fuites cachées.',
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

      {/* Section 2 — Traitements humidité */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Solutions de traitement de l&apos;humidité en cave
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Du badigeon d&apos;étanchéité au cuvelage complet, les solutions de traitement de l&apos;humidité s&apos;adaptent à la gravité du problème et au budget disponible. Voici les principales options disponibles pour les caves parisiennes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Badigeon d\'étanchéité intérieure',
                solution: 'Enduit minéral cristallisant appliqué sur les murs humides. Colmate les pores du béton ou de la pierre et crée une barrière contre les infiltrations modérées. Efficace pour les caves peu humides. Ne résiste pas à une pression d\'eau soutenue.',
                cout: '800 – 2 000 €',
              },
              {
                titre: 'Injection de résines hydrophobes',
                solution: 'Des résines polyuréthane ou silicone sont injectées sous pression dans des forages horizontaux réalisés à la base des murs. Elles se dilatent en contact avec l\'eau et créent une barrière imperméable permanente. Solution de référence contre les remontées capillaires.',
                cout: '150 – 300 €/ml',
              },
              {
                titre: 'Cuvelage intérieur (drainage + membrane)',
                solution: 'Système de drainage périphérique en pied de mur associé à une membrane d\'étanchéité. L\'eau infiltrée est collectée et évacuée vers une pompe de relevage. Solution efficace même en présence de nappe phréatique. Garantie d\'étanchéité possible.',
                cout: '3 000 – 8 000 €',
              },
              {
                titre: 'Imperméabilisation extérieure',
                solution: 'Excavation autour des fondations, application d\'une membrane bitumineuse ou d\'un enduit imperméable sur la face extérieure des murs. Solution définitive mais coûteuse, nécessite des travaux de terrassement. Rarement possible dans Paris intra-muros sans autorisation.',
                cout: '500 – 1 500 €/ml linéaire de mur',
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

      {/* Section 3 — Peinture sol parking */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Peinture sol et revêtements : cave et parking parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Un sol de cave ou de parking non traité s&apos;érode rapidement sous l&apos;action des passages, des huiles de moteur et de l&apos;humidité. Appliquer un revêtement adapté protège la dalle béton, facilite l&apos;entretien et améliore l&apos;aspect général de l&apos;espace.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Résine époxy bi-composant',
                prix: '25 – 60 €/m²',
                detail: 'La référence pour les parkings et caves de rangement. Résistance supérieure aux chocs, à l\'abrasion, aux taches (huile, carburant, liquide de frein). Application en deux couches sur support dégraissé et primé. Finition antidérapante disponible par ajout de silice. Durée de vie : 10 à 15 ans selon le trafic.',
              },
              {
                type: 'Peinture sol polyuréthane',
                prix: '15 – 35 €/m²',
                detail: 'Alternative plus souple que l\'époxy, recommandée pour les sols fissurés ou soumis à de légères variations thermiques. Résistance chimique légèrement inférieure à l\'époxy mais meilleure élasticité. Idéale pour les caves de rangement ou les halls techniques. Finition mate ou satinée.',
              },
              {
                type: 'Peinture sol acrylique (cave simple)',
                prix: '8 – 20 €/m²',
                detail: 'Solution économique pour les caves de stockage avec trafic léger. Résistance limitée aux produits chimiques et aux passages fréquents. Convient pour une cave de rangement occasionnel non soumise à l\'humidité. Durée de vie : 3 à 5 ans avec entretien. Application facile en deux couches.',
              },
              {
                type: 'Carrelage grès cérame (cave aménagée)',
                prix: '35 – 70 €/m²',
                detail: 'Pour une cave aménagée en espace de vie (bureau, salle de sport, cave à vin), le carrelage grès cérame antidérapant R11 est le revêtement le plus durable et le plus étanche. Pose sur dalle nivelée. Résistance à l\'humidité totale si joints au coulis époxy.',
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

      {/* Section 4 — Aménagement rangements */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Aménagement cave : éclairage, rangements et usages possibles
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Une fois l&apos;humidité traitée et le sol revêtu, une cave parisienne peut devenir bien plus qu&apos;un simple espace de stockage. Voici les principaux aménagements réalisables selon la configuration.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                enjeu: 'Éclairage LED basse consommation',
                detail: 'Remplacer les ampoules incandescentes ou les néons fluorescents par des spots LED encastrés ou des réglettes LED étanches (IP44 minimum pour une cave humide). Coût : 200 à 800 € selon la surface. L\'éclairage à détecteur de présence permet d\'éviter les oublis et de réduire la consommation.',
              },
              {
                enjeu: 'Rayonnages métalliques et rangements sur mesure',
                detail: 'Des rayonnages en acier galvanisé (résistants à l\'humidité résiduelle) permettent d\'optimiser la hauteur disponible. Pour les caves aménagées en cave à vin, des casiers bois ou acier adaptés à l\'hygrométrie. Coût : 300 à 1 500 € selon la surface et la qualité des rayonnages.',
              },
              {
                enjeu: 'Cave à vin aménagée',
                detail: 'Transformation d\'une cave non traitée en cave à vin : régulation de la température (climatiseur de cave 12 à 15°C), contrôle de l\'hygrométrie (60–80%), isolation des murs et du plafond, casiers à bouteilles. Les caves voûtées parisiennes sont idéales pour cet usage. Coût : 3 000 – 10 000 € selon le niveau d\'équipement.',
              },
              {
                enjeu: 'Espace de rangement vélos et mobilité douce',
                detail: 'Dans les immeubles parisiens, les caves sont de plus en plus aménagées pour accueillir vélos électriques et trottinettes. Accroche vélos muraux, prises électriques pour recharge, sol renforcé. Coût par emplacement : 200 à 600 € selon l\'équipement.',
              },
            ].map((el) => (
              <div key={el.enjeu} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.enjeu}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Budget complet */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de rénovation cave et parking à Paris en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs indicatifs pour une cave de 10 à 15 m², main d&apos;œuvre et matériaux inclus.
          </p>

          {/* Price table as styled divs */}
          <div className="rounded-lg overflow-hidden border border-gray-200 mb-8">
            <div className="grid grid-cols-3 bg-[#1C1C1C] text-white px-4 py-3">
              <div className="text-xs font-light uppercase tracking-wider">Prestation</div>
              <div className="text-xs font-light uppercase tracking-wider text-center">Surface</div>
              <div className="text-xs font-light uppercase tracking-wider text-center">Prix indicatif</div>
            </div>
            {[
              { prestation: 'Nettoyage + peinture murs et sol (cave sèche)', surface: '10–15 m²', prix: '500 – 1 500 €' },
              { prestation: 'Badigeon d\'étanchéité murs', surface: '10–15 m²', prix: '800 – 2 000 €' },
              { prestation: 'Injection résines remontées capillaires', surface: 'Par mètre linéaire', prix: '150 – 300 €/ml' },
              { prestation: 'Cuvelage intérieur complet', surface: '10–15 m²', prix: '3 000 – 6 000 €' },
              { prestation: 'Résine époxy sol parking', surface: '15–25 m²', prix: '1 000 – 2 500 €' },
              { prestation: 'Aménagement cave à vin', surface: '8–12 m²', prix: '3 000 – 10 000 €' },
              { prestation: 'Rénovation complète (traitement + sol + éclairage)', surface: '10–15 m²', prix: '3 000 – 8 000 €' },
            ].map((row, i) => (
              <div key={row.prestation} className={`grid grid-cols-3 px-4 py-3 border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}`}>
                <div className="text-sm text-[#1C1C1C] font-light">{row.prestation}</div>
                <div className="text-sm text-gray-600 font-light text-center">{row.surface}</div>
                <div className="text-sm text-[#B8960C] font-medium text-center">{row.prix}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points de vigilance avant de commencer
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Traiter l\'humidité AVANT toute peinture ou revêtement — l\'inverse conduit à un décollage rapide',
                'Vérifier si la cave appartient en propre ou est une partie commune de l\'immeuble (règlement de copropriété)',
                'Demander l\'accord du syndic pour les travaux touchant les fondations ou les parties communes',
                'Ne jamais appliquer de peinture époxy sur un support humide — attendre un taux d\'humidité inférieur à 4%',
                'Prévoir une ventilation suffisante lors de l\'application des résines époxy (produits chimiques solvantés)',
                'Conserver les garanties décennales des artisans pour les traitements d\'étanchéité',
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
              { href: '/amenagement-paris', title: 'Aménagement Paris' },
              { href: '/peinture-paris', title: 'Peinture Paris' },
              { href: '/blog/carrelage-grand-format-paris', title: 'Carrelage grand format Paris' },
              { href: '/blog/renovation-hall-immeuble-paris', title: 'Rénovation hall d\'immeuble Paris' },
              { href: '/blog/humidite-appartement-paris', title: 'Traitement humidité appartement Paris' },
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
              { href: '/renovation-paris-13e', label: 'Paris 13e' },
              { href: '/renovation-paris-14e', label: 'Paris 14e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-saint-denis', label: 'Saint-Denis' },
              { href: '/renovation-pantin', label: 'Pantin' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
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
          Rénovez votre cave ou parking à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisans spécialisés en traitement de l&apos;humidité et aménagement.
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
