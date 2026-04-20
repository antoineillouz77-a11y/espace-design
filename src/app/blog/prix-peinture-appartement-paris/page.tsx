import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Prix Peinture Appartement Paris : tarif artisan au m² 2025",
  description: "Prix peinture appartement Paris 2025 : tarifs au m² par type de pièce, préparation des murs, main-d'oeuvre artisan. Devis gratuit 48h — Espace Design.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  url: 'https://espacedesignparis.fr/blog/prix-peinture-appartement-paris',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix moyen de la peinture d'un appartement à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix moyen de la peinture d'un appartement à Paris se situe entre 25 et 55 €/m² de surface murale, main-d'oeuvre et fournitures comprises. Pour un appartement de 50 m² (environ 150 m² de surfaces murales et plafonds), comptez entre 3 750 et 8 250 €. Ce tarif inclut la préparation des murs, 2 couches de peinture et les finitions. La main-d'oeuvre représente 60 à 70 % du prix total, la fourniture 30 à 40 %.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien coûte la peinture d'un salon à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La peinture d'un salon de 20 m² à Paris (murs + plafond) coûte entre 800 et 2 000 € selon l'état des murs et la qualité de la peinture choisie. Si les murs nécessitent un rebouchage important (fissures, trous, anciennes teintes foncées à couvrir), prévoyez une couche primaire supplémentaire (+100 à 200 €). Un salon avec moulures ou boiseries à peindre en teinte différente augmente le temps de pose de 30 à 50 %.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il 2 ou 3 couches de peinture ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le nombre de couches dépend de la situation. 1 couche de primaire + 2 couches de finition est le standard pour un mur en bon état. 3 couches de finition sont nécessaires si vous changez pour une teinte claire sur une ancienne teinte foncée, ou sur un mur très poreux. Un enduit de préparation (rebouchage) peut remplacer le primaire sur des murs abîmés. Évitez de chercher à économiser sur les couches : une peinture posée en une seule couche mal couverte se révèle rapidement sous la lumière rasante.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel délai pour peindre un appartement à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un studio de 20 à 30 m² prend 2 à 3 jours (préparation + 2 couches). Un 3 pièces de 60 m² nécessite 4 à 6 jours. Un appartement de 100 m² complet prend 8 à 12 jours selon l'état des murs. Le respect des temps de séchage entre couches (minimum 4h pour une peinture acrylique, 12h pour une alkyde) est impératif pour un résultat durable. Un artisan sérieux ne brûle jamais les temps de séchage.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Prix Peinture Appartement Paris : tarif artisan au m² 2025 | Espace Design",
  description: "Prix peinture appartement Paris 2025 : tarifs au m² par type de pièce, préparation des murs, main-d'oeuvre artisan. Devis gratuit 48h — Espace Design.",
  keywords: [
    "prix peinture appartement Paris",
    "tarif peinture appartement Paris",
    "peinture appartement Paris prix m2",
    "artisan peintre Paris",
    "coût peinture appartement Paris 2025",
  ],
}

export default function ArticlePrixPeintureAppartementParis() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Peinture &amp; Finitions
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Prix et Tarif Peinture Appartement à Paris en 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Combien coûte vraiment la peinture d&apos;un appartement à Paris ? Tarifs au m² par pièce, prix de la main-d&apos;oeuvre, coût de la préparation des murs, nombre de couches — tout ce qu&apos;il faut savoir pour budgéter votre projet en 2025.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: '25 €/m²', label: 'Prix mini artisan Paris' },
              { val: '55 €/m²', label: 'Prix maxi finition haute' },
              { val: '48h', label: 'Délai devis gratuit' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-1">{s.val}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — Prix par type de pièce */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C]">
            Prix de la peinture par type de pièce à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Le coût de la peinture varie significativement selon la pièce. La cuisine et la salle de bain nécessitent des peintures hydrofuges plus chères. Les plafonds hauts des appartements haussmanniens augmentent la surface à traiter et le temps de pose. Les couloirs, étroits et encombrés de portes, sont plus chronophages que leur surface ne le laisse supposer.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left p-3 font-light uppercase tracking-wider">Pièce</th>
                  <th className="text-left p-3 font-light uppercase tracking-wider">Surface moyenne</th>
                  <th className="text-left p-3 font-light uppercase tracking-wider">Prix artisan Paris</th>
                  <th className="text-left p-3 font-light uppercase tracking-wider">Remarque</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { piece: "Studio (20 m²)", surface: "60–70 m² muraux", prix: "1 500–3 500 €", remarque: "Pièce unique, accès facile" },
                  { piece: "Salon / séjour (20 m²)", surface: "55–70 m² muraux", prix: "800–2 000 €", remarque: "Hors boiseries et moulures" },
                  { piece: "Chambre (12 m²)", surface: "35–45 m² muraux", prix: "600–1 400 €", remarque: "Déplacer les meubles en sus" },
                  { piece: "Cuisine (8 m²)", surface: "25–35 m² muraux", prix: "500–1 200 €", remarque: "Peinture lavable obligatoire" },
                  { piece: "Salle de bain (5 m²)", surface: "20–28 m² muraux", prix: "400–1 000 €", remarque: "Peinture anti-humidité" },
                  { piece: "WC", surface: "8–12 m² muraux", prix: "200–500 €", remarque: "Accès réduit = surcoût" },
                  { piece: "Couloir (6 m²)", surface: "20–30 m² muraux", prix: "400–900 €", remarque: "Nombreuses découpes de portes" },
                  { piece: "Appartement 50 m²", surface: "~150 m² muraux", prix: "3 750–8 250 €", remarque: "Estimation globale complète" },
                ].map((r, i) => (
                  <tr key={r.piece} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="p-3 font-medium text-[#1C1C1C]">{r.piece}</td>
                    <td className="p-3 text-gray-600">{r.surface}</td>
                    <td className="p-3 text-[#D4AF37] font-display font-semibold">{r.prix}</td>
                    <td className="p-3 text-gray-400 font-light">{r.remarque}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Ces tarifs s&apos;entendent fournitures et main-d&apos;oeuvre comprises, pour une peinture acrylique standard en 2 couches sur murs en bon état. La préparation des murs (rebouchage, ponçage, primaire) est facturée en supplément si le support l&apos;exige.
          </p>
        </div>
      </section>

      {/* Section 2 — Préparation des murs */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C]">
            La préparation des murs : une étape incontournable
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Dans les appartements parisiens — souvent anciens — la préparation des murs est fréquemment plus longue et plus coûteuse que la peinture elle-même. Un artisan sérieux consacre 40 à 60 % du temps total à cette phase. Ne négligez jamais cette étape : une peinture appliquée sur un mur mal préparé cloque, s&apos;écaille ou révèle toutes les imperfections sous la lumière.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                titre: "Rebouchage et enduit",
                prix: "5 à 15 €/m²",
                detail: "Bouchez les fissures, trous de cheville, accrocs. Utilisez un enduit de rebouchage léger pour les petits défauts, un enduit de lissage pour les surfaces inégales. Séchage 4 à 12h avant ponçage.",
              },
              {
                titre: "Ponçage",
                prix: "3 à 8 €/m²",
                detail: "Poncez à la cale (grain 80 puis 120) pour lisser les aspérités et dépoussiérez à fond. Le ponçage est indispensable après tout rebouchage et sur les anciennes peintures brillantes pour assurer l'accroche.",
              },
              {
                titre: "Primaire d'accrochage",
                prix: "3 à 6 €/m²",
                detail: "Obligatoire sur les supports poreux (plâtre nu, béton cellulaire), les changements de support ou les surfaces très absorbantes. Régule l'absorption et améliore la tenue de la peinture de finition.",
              },
              {
                titre: "Dépose ancien papier peint",
                prix: "5 à 12 €/m²",
                detail: "Plus difficile qu'il n'y paraît dans les anciens appartements parisiens. Un papier peint posé directement sur le plâtre (sans sous-couche) peut arracher le plâtre à la dépose — prévoir un enduit de rattrapage.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white border border-gray-100 rounded-sm p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-sm font-semibold text-[#1C1C1C]">{item.titre}</h3>
                  <span className="text-[#D4AF37] font-display text-xs font-semibold shrink-0 ml-2">{item.prix}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed font-light">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Nombre de couches */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C]">
            Combien de couches de peinture faut-il ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Le nombre de couches est un sujet sur lequel les devis divergent fortement. Certains artisans proposent une seule couche pour afficher un prix bas : le résultat est systématiquement décevant. Voici la réalité selon les situations.
          </p>
          <div className="space-y-4">
            {[
              {
                cas: "Situation standard",
                couches: "1 primaire + 2 finition",
                detail: "Mur en bon état, changement de teinte similaire, support neutre. C'est la configuration idéale et la plus économique. Le primaire peut être intégré à la première couche de finition si le mur est sain.",
              },
              {
                cas: "Teinte foncée sur teinte claire",
                couches: "1 primaire teinté + 2 finition",
                detail: "Un primaire teinté (proche de la couleur finale) améliore le rendu final et peut éviter une 3e couche. Indispensable pour les teintes saturées (bleu marine, vert bouteille, gris anthracite).",
              },
              {
                cas: "Teinte claire sur ancienne teinte foncée",
                couches: "1 primaire couvrant + 3 finition",
                detail: "C'est le cas le plus coûteux. Une ancienne teinte foncée (rouge, vert, marron) transparaît très facilement sous une teinte claire. Comptez systématiquement 3 couches de finition et un primaire couvrant à pigmentation maximale.",
              },
              {
                cas: "Mur neuf (plâtre, placo)",
                couches: "1 impression + 2 finition",
                detail: "Un mur neuf est extrêmement poreux et absorbe la peinture. Une impression (enduit d'impression ou primaire universel) est obligatoire sinon la peinture sera absorbée irrégulièrement, laissant des zones mates et brillantes.",
              },
              {
                cas: "Salle de bain / cuisine",
                couches: "1 primaire anti-humidité + 2 finition",
                detail: "Les peintures hydrofuges sont moins couvrantes que les peintures classiques. Prévoyez systématiquement 2 couches de finition en zones humides, parfois 3 pour les teintes claires sur support neutre.",
              },
            ].map((item) => (
              <div key={item.cas} className="flex gap-4 items-start border-b border-gray-100 pb-4">
                <div className="shrink-0 bg-[#1C1C1C] text-[#D4AF37] text-[10px] font-light uppercase tracking-wider px-3 py-1 rounded-sm w-32 text-center">
                  {item.couches}
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-[#1C1C1C] mb-1">{item.cas}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-light">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Main d'oeuvre */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C]">
            Prix de la main-d&apos;oeuvre peinture à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            À Paris, le coût de la main-d&apos;oeuvre d&apos;un artisan peintre se situe entre 35 et 60 € de l&apos;heure selon le niveau de qualification, la complexité du travail et la zone d&apos;intervention dans la capitale. La main-d&apos;oeuvre représente 60 à 70 % du prix total d&apos;une prestation de peinture.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                titre: "Taux horaire artisan",
                val: "35–60 €/h",
                detail: "Variable selon qualification et spécialité. Un peintre décorateur (effets, enduits) facture plus qu'un peintre en bâtiment standard.",
              },
              {
                titre: "Rendement moyen",
                val: "8–12 m²/h",
                detail: "Un artisan expérimenté peint 8 à 12 m² de mur par heure en régime de croisière (hors masquages et découpes).",
              },
              {
                titre: "Coût MO estimé au m²",
                val: "15–35 €/m²",
                detail: "La main-d'oeuvre seule sur un mur standard peint en 2 couches. La fourniture peinture ajoute 5 à 15 €/m² selon la qualité choisie.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white border border-gray-100 rounded-sm p-5 text-center">
                <div className="font-display text-xl font-semibold text-[#D4AF37] mb-1">{item.val}</div>
                <h3 className="font-display text-sm font-semibold text-[#1C1C1C] mb-2">{item.titre}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-light">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Méfiez-vous des devis très bas (moins de 15 €/m²) : ils masquent souvent une sous-évaluation des couches nécessaires, l&apos;absence de préparation des murs, ou une main-d&apos;oeuvre non déclarée. Un devis sérieux détaille systématiquement le nombre de couches, les produits utilisés (marque et référence) et le temps estimé.
          </p>
        </div>
      </section>

      {/* Section 5 — Choisir sa peinture */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C]">
            Choisir sa peinture : impact sur le prix et la durabilité
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Le choix de la peinture influe directement sur le résultat final et le coût global. Une peinture bon marché peut exiger 3 couches là où une peinture professionnelle couvre parfaitement en 2 — réduisant le temps de main-d&apos;oeuvre et souvent le coût total malgré un prix de fourniture plus élevé.
          </p>
          <div className="space-y-3">
            {[
              {
                titre: "Peinture acrylique (eau)",
                detail: "La plus courante à Paris. Séchage rapide (2h en surface, 4h avant repassage), sans odeur, nettoyage à l'eau. Disponible en mat, velours, satin et brillant. Convient à tous les supports intérieurs. Prix fourniture : 4 à 10 €/m² selon la gamme.",
              },
              {
                titre: "Peinture glycéro (solvant)",
                detail: "Résistance élevée aux chocs et à l'humidité. Utilisée pour les boiseries, portes et plinthes. Odeur forte, séchage lent (12 à 24h). Tend à jaunir avec le temps. Moins courante pour les murs depuis la généralisation des acryliques haut de gamme. Prix : 5 à 12 €/m².",
              },
              {
                titre: "Peinture mate velours",
                detail: "Le finish le plus demandé à Paris pour les murs de séjour et chambres. Cache davantage les imperfections qu'un satin ou brillant. Le velours (légèrement satiné) est plus lavable que le mat et reste la finition idéale pour la vie en appartement. Prix : 5 à 9 €/m².",
              },
              {
                titre: "Peinture anti-humidité",
                detail: "Obligatoire en salle de bain, cuisine et sous-sol. Contient des fongicides qui empêchent le développement de moisissures. Moins couvrante que les peintures classiques — prévoir systématiquement 2 couches. Prix : 7 à 14 €/m² (fourniture seule).",
              },
            ].map((item) => (
              <div key={item.titre} className="border-l-2 border-[#D4AF37]/40 pl-5">
                <h3 className="font-display text-sm font-semibold text-[#1C1C1C] mb-1">{item.titre}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-light">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-8">
            Questions fréquentes — Prix peinture Paris
          </h2>
          <div className="space-y-6">
            {schemaFAQ.mainEntity.map((faq) => (
              <div key={faq['@type']} className="border-b border-gray-100 pb-6">
                <h3 className="font-display text-sm font-semibold text-[#1C1C1C] mb-2">
                  {faq.name}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed font-light">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Artisan Peintre Paris
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Demandez votre devis peinture à Paris
          </h2>
          <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 max-w-xl mx-auto">
            Espace Design intervient dans tous les arrondissements parisiens pour vos travaux de peinture. Devis gratuit et détaillé sous 48h, préparation des murs incluse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-6 py-3 text-xs font-medium uppercase tracking-widest hover:bg-[#c9a632] transition-colors"
            >
              Devis gratuit 48h
              <ArrowRight className="w-3 h-3" />
            </Link>
            <a
              href="tel:+33611783867"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-xs font-light uppercase tracking-widest hover:border-white/40 transition-colors"
            >
              <Phone className="w-3 h-3" />
              06 11 78 38 67
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
