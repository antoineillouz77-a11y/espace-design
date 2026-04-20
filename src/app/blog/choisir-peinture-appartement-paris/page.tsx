import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Choisir Peinture Appartement Paris', item: 'https://espacedesignparis.fr/blog/choisir-peinture-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Choisir sa Peinture Appartement Paris : marques, finitions & prix 2025 | Espace Design",
  description: "Quelle peinture choisir pour un appartement parisien ? Marques (Dulux, Tollens, Farrow & Ball), finitions, rendement. Artisan peintre Paris, conseils 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/choisir-peinture-appartement-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quelle est la meilleure peinture pour un appartement parisien ancien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour les appartements parisiens anciens (plâtre, moulures, murs irréguliers), la finition mate ou velours est recommandée : elle masque les imperfections des murs et donne un rendu élégant. Côté marque, Tollens (gamme Référence) ou Zoffany offrent un excellent rapport qualité-prix. Pour un résultat premium sur des moulures, Farrow & Ball (finition Estate Emulsion) est la référence. Prévoir 2 à 3 couches sur des vieux murs parisiens après une couche d'impression spéciale plâtre.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de litres de peinture pour un appartement de 60 m² à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un appartement de 60 m² avec des hauteurs sous plafond de 2,70 m (standard haussmannien), la surface de murs à peindre est d'environ 140 à 160 m² (murs + plafonds, déduction fenêtres et portes). Avec un rendement moyen de 10 à 12 m²/litre et deux couches, prévoyez 25 à 30 litres pour les murs et 10 à 12 litres pour les plafonds (peinture blanc mat). Ajouter 20% pour les pertes et la retouche. Sur un vieux plâtre parisien très absorbant, le rendement peut descendre à 8 m²/litre.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il décoller le papier peint avant de peindre à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En règle générale, oui — il est fortement recommandé de décoller le papier peint avant de peindre. Peindre sur un papier peint existant crée des risques de décollements, de cloquages et d'un rendu final inégal (les raccords de lés restent visibles). Cependant, si le papier peint est solidement accroché (sans décollements, joints plats, sans relief) et qu'il est en vinyle lisse, une couche d'impression spéciale 'peinture sur papier peint' peut être appliquée. Un artisan peintre parisien vous conseillera lors du diagnostic gratuit.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel prix pour un artisan peintre à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le tarif d'un artisan peintre à Paris varie de 25 à 50 €/m² de surface peinte (mains d'oeuvre + fournitures), selon le niveau de finition, la préparation des murs et l'accessibilité du chantier. Pour un appartement de 60 m² avec préparation soignée (rebouchage, impression, 2 couches) : comptez 3 000 à 6 000 € environ. Les marques haut de gamme (Farrow & Ball) ajoutent 5 à 15 €/m² en fournitures. Demandez plusieurs devis et vérifiez que la préparation des murs est incluse — c'est là que se joue la qualité du résultat.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Choisir sa Peinture Appartement Paris : marques, finitions & prix 2025 | Espace Design",
  description: "Quelle peinture choisir pour un appartement parisien ? Marques (Dulux, Tollens, Farrow & Ball), finitions, rendement. Artisan peintre Paris, conseils 2025.",
  keywords: "choisir peinture Paris, meilleure peinture appartement Paris, peinture Farrow Ball Paris, artisan peintre Paris",
}

export default function ArticleChoisirPeinture() {
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
            Peinture
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Choisir sa Peinture Appartement Paris : marques, finitions et prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La peinture représente souvent la moitié du résultat visuel d&apos;une rénovation. Pourtant le choix entre marques, finitions et gammes est rarement simple. Guide complet 2025 pour choisir la peinture adaptée à votre appartement parisien, à votre budget et à l&apos;usage de chaque pièce.
          </p>
        </div>
      </section>

      {/* Section 1 — Comparatif marques */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Comparatif marques de peinture : du budget au premium
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Trois gammes se distinguent selon le budget et les exigences. Le prix au litre est un indicateur, mais le rendement (m²/litre) et la qualité de pose font la vraie différence sur le résultat final.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                gamme: 'Entrée de gamme — Dulux Valentine',
                prix: '8 – 18 €/litre',
                detail: "Dulux Valentine (gamme Color Resist, Crème de Couleur) est la référence grand public disponible en GSB (Leroy Merlin, Castorama). Bon rendement (10-12 m²/litre), vaste choix de coloris, séchage rapide. Adapté pour les pièces à faible trafic (chambres, couloirs) ou pour un budget serré. Inconvénient : la couverture sur vieux murs parisiens nécessite souvent 3 couches. Résultat moins profond que les gammes professionnelles.",
              },
              {
                gamme: 'Milieu de gamme — Tollens & Zoffany',
                prix: '20 – 45 €/litre',
                detail: "Tollens (gamme Référence, disponible en négoce pro) est la marque de référence des artisans peintres parisiens. Excellent pouvoir couvrant (2 couches suffisent sur un support bien préparé), rendu velouté, large palette colorimétrique. Zoffany (groupe Colefax) offre des teintes sophistiquées avec une pigmentation riche. Ces marques sont recommandées pour les appartements haussmanniens avec moulures et parements soignés.",
              },
              {
                gamme: 'Haut de gamme — Farrow & Ball & Little Greene',
                prix: '45 – 80 €/litre',
                detail: "Farrow & Ball est la marque de référence mondiale pour les appartements de prestige. Sa palette limitée (140 teintes) mais unique, sa pigmentation minérale et ses finitions Estate Emulsion (mat velouté profond) ou Modern Emulsion donnent un rendu incomparable. Little Greene offre une alternative légèrement moins onéreuse avec des teintes historiques et des finitions repositionnables. Idéal pour les rénovations haut de gamme dans Paris intra-muros.",
              },
            ].map((el) => (
              <div key={el.gamme} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.gamme}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Finitions */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Finitions de peinture : mat, velours, satin, brillant — laquelle choisir ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La finition détermine l&apos;aspect final, la résistance et la facilité d&apos;entretien. Le choix dépend de la pièce, de l&apos;état des murs et du style recherché.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                finition: 'Mat absolu',
                usage: 'Plafonds, séjour, chambre',
                avantage: "Masque les imperfections des vieux murs parisiens. Rendu le plus élégant et profond. Idéal pour les hauts plafonds haussmanniens.",
                inconvenient: "Difficile à lessiver — éviter cuisines et couloirs à fort trafic.",
              },
              {
                finition: 'Velours (mat soyeux)',
                usage: 'Séjour, chambre, bureau',
                avantage: "Compromis idéal entre esthétique et praticité. Léger satiné qui facilite le nettoyage. La finition la plus polyvalente pour appartements parisiens.",
                inconvenient: "Moins couvrant que le mat sur supports très irréguliers.",
              },
              {
                finition: 'Satin / Satiné',
                usage: 'Cuisine, couloir, salle de bain (hors zones humides)',
                avantage: "Résistant aux lessivages, supporte les projections. Bonne durabilité dans les pièces à fort trafic ou humidité modérée.",
                inconvenient: "Révèle davantage les imperfections des murs — nécessite une préparation soignée.",
              },
              {
                finition: 'Brillant / Laqué',
                usage: 'Boiseries, portes, plinthes, radiateurs',
                avantage: "Très résistant, facile à nettoyer. Idéal pour les éléments soumis aux chocs et contacts fréquents. Rendu contemporain ou classique selon la couleur.",
                inconvenient: "Ne s'utilise pas sur les murs (révèle toutes les imperfections). Application délicate — réservée aux artisans.",
              },
            ].map((el) => (
              <div key={el.finition} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.finition}</div>
                <div className="text-xs text-[#B8960C] font-medium mb-3">{el.usage}</div>
                <div className="text-gray-600 text-xs font-light leading-relaxed mb-2">
                  <span className="font-medium text-gray-700">Avantage :</span> {el.avantage}
                </div>
                <div className="text-gray-600 text-xs font-light leading-relaxed">
                  <span className="font-medium text-gray-700">Limite :</span> {el.inconvenient}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Couches & supports */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Nombre de couches selon le support parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les vieux immeubles parisiens imposent des contraintes spécifiques. Le support conditionne la préparation, le nombre de couches et le choix de la peinture.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                support: 'Plâtre ancien (immeubles avant 1950)',
                couches: '1 impression + 2 à 3 couches finition',
                detail: "Le plâtre ancien est très absorbant et souvent irrégulier (fissures, repiquages, enduits successifs). Une impression spéciale plâtre (fixateur-durcisseur) est indispensable avant toute peinture pour uniformiser l'absorption et éviter les sucons. Certaines zones très dégradées nécessitent un rebouchage à la colle à lapin ou un enduit de lissage préalable.",
              },
              {
                support: 'Murs en béton ou placo (immeubles 1960-1980)',
                couches: '1 impression + 2 couches finition',
                detail: "Les murs en placo ou béton sont plus réguliers mais présentent souvent des joints de plaques visibles. Une impression adaptée (sous-couche universelle) améliore l'adhérence et uniformise le fond. Deux couches de finition suffisent généralement avec une peinture de qualité professionnelle.",
              },
              {
                support: 'Papier peint à décoller',
                couches: 'Décollage obligatoire + rebouchage + 2 couches',
                detail: "Le papier peint doit être décollé avant peinture dans la grande majorité des cas. Les raccords de lés et les textures restent visibles sous la peinture. Après décollage : reboucher les impacts, poncer, laisser sécher 48h avant impression. Exception : papier peint lisse en vinyle solidement accroché — vérification par un artisan recommandée.",
              },
              {
                support: 'Peinture existante en bon état',
                couches: '1 couche dépoussiérage/dégraissage + 2 couches finition',
                detail: "Si la peinture existante est saine (pas de cloques, ni écaillages ni suintements), il suffit de nettoyer, poncer légèrement pour accrocher, dégraisser, puis appliquer directement 2 couches de la nouvelle peinture. Si la couleur existante est très foncée et la nouvelle teinte claire : prévoir une couche d'impression opacifiante.",
              },
            ].map((el) => (
              <div key={el.support} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.support}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0 text-right">{el.couches}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Peintures spéciales : SdB, cuisine, espaces communs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Salle de bain : peinture anti-humidité (fongicide intégrée) ou peinture alkyde satinée — résistance vapeur d'eau et moisissures",
                "Cuisine : peinture lessivable satinée ou semi-brillante — résistance aux graisses et projections, nettoyage facile",
                "Couloirs et parties communes : peinture acrylique satinée à fort pouvoir lavable — résistance aux frottements",
                "Plafonds : peinture blanche mate plafond spécifique — formulation anti-éclaboussures, séchage rapide",
                "Radiateurs : peinture laque alkyde résistante à la chaleur jusqu'à 80°C — ne jaunit pas avec la montée en température",
                "Boiseries extérieures : peinture microporeuse ou lasure — imperméable mais respirante pour le bois",
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

      {/* Section 4 — Prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix peinture appartement Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs artisan peintre Paris, main d&apos;oeuvre et fournitures incluses, selon la surface et la gamme choisie.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix au m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget 60 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { prestation: 'Peinture murs (entrée de gamme)', m2: '15 – 25 €/m²', budget: '2 100 – 3 500 €' },
                  { prestation: 'Peinture murs (milieu de gamme)', m2: '25 – 40 €/m²', budget: '3 500 – 5 600 €' },
                  { prestation: 'Peinture murs (haut de gamme F&B)', m2: '40 – 60 €/m²', budget: '5 600 – 8 400 €' },
                  { prestation: 'Plafonds (peinture blanche)', m2: '10 – 20 €/m²', budget: '600 – 1 200 €' },
                  { prestation: 'Boiseries et plinthes', m2: '20 – 35 €/ml', budget: 'sur devis' },
                  { prestation: 'Décollage papier peint + prépa', m2: '8 – 15 €/m²', budget: '1 100 – 2 100 €' },
                ].map((row, i) => (
                  <tr key={row.prestation} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.prestation}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.m2}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-6 text-center">Questions fréquentes</p>
          <div className="space-y-6">
            {schemaFaq.mainEntity.map((q) => (
              <div key={q.name} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-3">{q.name}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{q.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides connexes */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Guides connexes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/peinture-enduit-paris', title: 'Peinture et enduit Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/humidite-appartement-paris', title: 'Humidité appartement Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique Paris' },
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
          Donnez une nouvelle vie à votre appartement parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Conseil couleurs gratuit. Choix des finitions. Devis détaillé sous 48h.
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
