import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Isolation Murs Appartement Paris", item: 'https://espacedesignparis.fr/blog/isolation-murs-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Isolation Murs Appartement Paris : ITI, ITE & prix 2025 | Espace Design",
  description: "Isoler les murs d'un appartement à Paris : isolation par l'intérieur (ITI), isolation thermique extérieure (ITE). Contraintes copropriété, aides MaPrimeRénov'. Prix 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/isolation-murs-appartement-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix de l'isolation des murs par l'intérieur (ITI) à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix de l'isolation des murs par l'intérieur (ITI) à Paris se situe entre 45 et 120 €/m² de mur traité, pose et matériaux inclus. Pour la laine de verre ou laine de roche sur ossature métallique : 45 à 75 €/m². Pour le polyuréthane projeté ou en panneaux : 60 à 100 €/m². Pour la fibre de bois ou le liège (matériaux biosourcés) : 80 à 140 €/m². Un appartement parisien de 60 m² avec 3 murs périphériques à isoler représente généralement 40 à 60 m² de traitement, soit un budget total de 2 000 à 7 000 €, hors peinture et finitions.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on isoler par l'extérieur (ITE) un appartement en copropriété à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'isolation thermique par l'extérieur (ITE) d'un immeuble en copropriété à Paris est possible mais nécessite impérativement un vote en assemblée générale à la majorité absolue (article 26 de la loi 65-557). La façade étant une partie commune, aucun copropriétaire ne peut y faire réaliser de travaux individuellement. En pratique, l'ITE est souvent initiée lors de travaux de ravalement de façade. Elle apporte un gain thermique plus important que l'ITI (pas de perte de surface intérieure, suppression des ponts thermiques) mais son coût est supérieur (80 à 200 €/m² de façade) et les délais de décision en AG peuvent être longs.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelles aides financières pour isoler les murs de son appartement parisien en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En 2025, plusieurs aides sont disponibles pour l'isolation des murs : MaPrimeRénov' (ex-CITE) — aide de l'État selon revenus et gain thermique, de 15 à 75 €/m² pour l'ITI ; CEE (Certificats d'Économies d'Énergie) — prime versée par les fournisseurs d'énergie, cumulable avec MaPrimeRénov' ; Éco-PTZ (prêt à taux zéro) — jusqu'à 50 000 € remboursables sur 20 ans sans intérêts pour un bouquet de travaux ; TVA à 5,5 % pour les travaux de rénovation énergétique (au lieu de 20 %). Ces aides sont accessibles aux propriétaires occupants et bailleurs. Un conseiller France Rénov' peut faire un bilan personnalisé gratuit.",
      },
    },
    {
      '@type': 'Question',
      name: "L'isolation par l'intérieur fait-elle perdre beaucoup de surface habitable ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, l'ITI entraîne une perte de surface habitable : 6 à 12 cm par mur traité selon l'épaisseur de l'isolant. Sur un appartement de 60 m² avec 3 murs périphériques de 10 m chacun, la perte est de 1,8 à 3,6 m² de surface au sol. C'est le principal inconvénient de l'ITI par rapport à l'ITE. Pour minimiser cette perte, on peut utiliser des isolants à haute performance (polyuréthane ou aérogel) qui offrent le même résultat thermique avec une épaisseur 2 à 3 fois moindre — mais à un coût supérieur. Dans les petits appartements parisiens, cette contrainte doit être sérieusement pesée avant de décider.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Isolation Murs Appartement Paris : ITI, ITE & prix 2025 | Espace Design",
  description: "Isoler les murs d'un appartement à Paris : isolation par l'intérieur (ITI), isolation thermique extérieure (ITE). Contraintes copropriété, aides MaPrimeRénov'. Prix 2025.",
  keywords: [
    'isolation murs appartement Paris',
    'isolation thermique Paris',
    'ITI Paris',
    'isolation intérieure Paris',
    'isolation extérieure Paris',
    'ITE copropriété Paris',
    'MaPrimeRenov isolation Paris',
  ],
}

export default function ArticleIsolationMursParis() {
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
            Isolation
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Isolation Murs Appartement Paris : ITI, ITE et prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Isoler les murs d&apos;un appartement parisien est l&apos;un des travaux les plus efficaces pour améliorer le confort thermique, réduire les factures d&apos;énergie et améliorer le classement DPE. Deux grandes techniques s&apos;opposent : l&apos;isolation thermique par l&apos;intérieur (ITI) et l&apos;isolation thermique par l&apos;extérieur (ITE). Guide complet 2025 : techniques, matériaux, aides financières et prix.
          </p>
        </div>
      </section>

      {/* Section 1 — ITI */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              ITI — Isolation Thermique par l&apos;Intérieur : technique et matériaux
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              L&apos;ITI est la solution la plus accessible pour un propriétaire souhaitant isoler son appartement sans passer par la copropriété. Elle consiste à poser un isolant sur la face intérieure des murs extérieurs, puis à le recouvrir d&apos;un parement (plaque de plâtre, enduit). C&apos;est la technique de référence pour les appartements parisiens où l&apos;ITE est impossible ou non votée.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: "Laine de verre et laine de roche : les classiques",
                  detail: "Pose sur ossature métallique (rails et montants) avec plaques de plâtre en parement. La laine de verre (lambda 0,032 à 0,040 W/m.K) et la laine de roche (lambda 0,033 à 0,042 W/m.K) sont les isolants les plus utilisés pour leur bon rapport performance/prix. Épaisseur typique : 80 à 120 mm pour atteindre R ≥ 3,7 m².K/W. Incombustibles (classement A1 ou A2), bonne résistance à l'humidité pour la laine de roche. À prévoir : pare-vapeur côté chaud pour éviter la condensation dans la paroi.",
                },
                {
                  enjeu: "Polyuréthane (PU) : haute performance en faible épaisseur",
                  detail: "Le polyuréthane (lambda 0,022 à 0,028 W/m.K) est l'isolant le plus performant par centimètre d'épaisseur : 60 mm de PU équivalent à 120 mm de laine de verre. Idéal dans les petits appartements parisiens où chaque centimètre compte. Disponible en panneaux rigides (PIR/PUR) à coller directement sur le mur (technique collé-vissé) ou en projection (mousse projetée pour les surfaces irrégulières). Plus cher que la laine de verre mais perte de surface divisée par 2.",
                },
                {
                  enjeu: "Fibre de bois et liège : les matériaux biosourcés",
                  detail: "La fibre de bois (lambda 0,038 à 0,045 W/m.K) et le liège expansé (lambda 0,040 à 0,045 W/m.K) sont des isolants naturels à forte inertie thermique : ils régulent les variations de température (confort été) et respirent naturellement (régulation hygrométrique). Plus épais que le polyuréthane pour une même performance, mais sans émanations chimiques et compatibles avec la réglementation RE2020. De plus en plus demandés dans les rénovations qualitatives parisiennes.",
                },
                {
                  enjeu: "Aérogel et panneaux sous vide (VIP) : le futur de l'ITI",
                  detail: "Les panneaux sous vide d'isolation (VIP) et les composites à base d'aérogel atteignent des lambdas de 0,007 à 0,015 W/m.K — 4 à 5 fois plus performants que la laine de verre pour la même épaisseur. Une épaisseur de 20 à 30 mm suffit pour atteindre R = 3 m².K/W. Ces matériaux restent onéreux (150 à 350 €/m²) mais sont particulièrement adaptés aux appartements parisiens très exigus où la perte de surface est critique.",
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

      {/* Section 2 — ITE */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            ITE — Isolation Thermique par l&apos;Extérieur : copropriété et décision en AG
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;ITE est la solution la plus efficace techniquement : elle supprime les ponts thermiques, ne réduit pas la surface habitable et améliore aussi l&apos;aspect de l&apos;immeuble. Mais dans une copropriété parisienne, elle ne peut être décidée que collectivement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Vote en AG obligatoire (article 26)",
                solution: "L'ITE modifie les parties communes (façade). Elle doit être votée à la majorité absolue des copropriétaires (article 26 de la loi du 10 juillet 1965). En pratique : inscription à l'ordre du jour de l'AG, présentation d'un devis, vote. En cas de rejet, il est possible de retenter lors de l'AG suivante. Le délégué syndical peut initier cette démarche.",
                cout: "Vote requis en AG",
              },
              {
                titre: "Souvent liée au ravalement de façade",
                solution: "À Paris, l'ITE est fréquemment couplée aux travaux de ravalement de façade (obligatoires tous les 10 ans). C'est le moment idéal pour voter l'isolation simultanément : les économies d'échelle sont significatives (échafaudage partagé, main d'œuvre). Un ravalement avec ITE coûte 30 à 50 % de plus qu'un simple ravalement.",
                cout: "Économies d'échelle +30 %",
              },
              {
                titre: "Gain thermique supérieur à l'ITI",
                solution: "L'ITE supprime les ponts thermiques (angles, jonctions plancher/façade) qui représentent 15 à 25 % des déperditions thermiques d'un appartement. L'ITI ne les traite pas. Une ITE bien réalisée peut faire gagner 2 à 3 lettres DPE là où l'ITI n'en fait gagner qu'une ou deux. Pour les logements classés F ou G, l'ITE est souvent la seule solution complète.",
                cout: "Gain DPE optimal",
              },
              {
                titre: "Contraintes architecturales à Paris",
                solution: "À Paris intra-muros, les Architectes des Bâtiments de France (ABF) peuvent s'opposer à une ITE qui modifie l'aspect des façades (texture, couleur). De nombreux immeubles haussmanniens classés ou situés en zone de protection ne peuvent pas bénéficier d'une ITE traditionnelle. Des solutions alternatives (ITE avec enduit mince, bardage pierre) existent.",
                cout: "Avis ABF à vérifier",
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

      {/* Section 3 — Aides financières */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Aides financières pour l&apos;isolation des murs à Paris en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;isolation des murs ouvre droit à plusieurs aides financières cumulables. Voici les dispositifs en vigueur en 2025 et leur impact sur le reste à charge.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "MaPrimeRénov' — aide de l'État",
                prix: "15 à 75 €/m²",
                detail: "MaPrimeRénov' est versée par l'ANAH (Agence nationale de l'habitat) selon les revenus du foyer et le gain de performance énergétique. Pour l'isolation des murs, le montant varie de 15 €/m² (ménages aisés) à 75 €/m² (ménages très modestes). L'aide est versée après réalisation des travaux sur présentation des factures. Depuis 2024, l'accompagnement par un Mon Accompagnateur Rénov' (MAR) est obligatoire pour les rénovations globales.",
              },
              {
                type: "CEE — Certificats d'Économies d'Énergie",
                prix: "5 à 30 €/m²",
                detail: "Les CEE sont versés par les fournisseurs d'énergie (EDF, Engie, TotalEnergies...) en échange de la réalisation de travaux d'économies d'énergie. Le montant varie selon le fournisseur et les conditions de marché. Cumulables avec MaPrimeRénov'. Pour l'isolation des murs par l'intérieur (ITE ou ITI), la prime CEE standard est de 5 à 30 €/m² selon les revenus et la zone climatique (Paris est en zone H1).",
              },
              {
                type: "Éco-PTZ — Prêt à taux zéro",
                prix: "Jusqu'à 50 000 € sur 20 ans",
                detail: "L'éco-PTZ permet de financer des travaux de rénovation énergétique sans intérêts, remboursables sur 20 ans. Depuis 2022, il est cumulable avec MaPrimeRénov'. Le montant maximum est de 50 000 € pour un bouquet de travaux intégrant l'isolation des murs. Accessible sans conditions de revenus pour les propriétaires occupants et bailleurs. Disponible dans toutes les banques partenaires.",
              },
              {
                type: "TVA à 5,5 % pour rénovation énergétique",
                prix: "Économie de 14,5 % sur les travaux",
                detail: "Les travaux d'isolation (murs, toiture, planchers) bénéficient d'une TVA réduite à 5,5 % au lieu de 20 % pour les logements de plus de 2 ans. Cette réduction s'applique sur la main d'œuvre et les matériaux. Pour un chantier d'isolation de 8 000 €, l'économie de TVA est de 1 160 €. Applicable automatiquement par l'artisan sur sa facture.",
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

      {/* Section 4 — Prix et ROI */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix isolation murs Paris 2025 : tableau comparatif et retour sur investissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Estimations pour un appartement parisien de 60 m², avec 3 murs extérieurs représentant environ 45 m² de surface à isoler.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Technique</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total 45 m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Gain DPE</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    technique: "ITI laine de verre / laine de roche",
                    prixM2: "45 – 75 €",
                    total: "2 000 – 3 400 €",
                    gain: "+1 lettre DPE",
                  },
                  {
                    technique: "ITI polyuréthane (panneaux PIR)",
                    prixM2: "60 – 100 €",
                    total: "2 700 – 4 500 €",
                    gain: "+1 à 2 lettres",
                  },
                  {
                    technique: "ITI fibre de bois / liège",
                    prixM2: "80 – 140 €",
                    total: "3 600 – 6 300 €",
                    gain: "+1 à 2 lettres",
                  },
                  {
                    technique: "ITI aérogel / VIP (haute perf.)",
                    prixM2: "150 – 350 €",
                    total: "6 750 – 15 750 €",
                    gain: "+2 lettres",
                  },
                  {
                    technique: "ITE (décision AG copropriété)",
                    prixM2: "80 – 200 € (façade)",
                    total: "Chantier collectif",
                    gain: "+2 à 3 lettres",
                  },
                ].map((row, i) => (
                  <tr key={row.technique} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.technique}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.total}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.gain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Checklist avant d&apos;isoler les murs de votre appartement parisien
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Vérifier si l'humidité des murs nécessite un traitement préalable avant isolation",
                "Commander un audit énergétique pour identifier les murs les plus déperdants",
                "Comparer les épaisseurs selon le matériau pour évaluer la perte de surface habitable",
                "Vérifier l'éligibilité aux aides (MaPrimeRénov', CEE) avant de signer le devis",
                "Prévoir un pare-vapeur côté intérieur pour les isolants non respirants (laine de verre, PU)",
                "Anticiper la reprise des plinthes, prises électriques et radiateurs après doublage",
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
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/humidite-appartement-paris', title: "Humidité appartement Paris" },
              { href: '/blog/isolation-combles-subvention-paris', title: 'Isolation combles Paris' },
              { href: '/blog/remise-aux-normes-electrique-paris', title: 'Remise aux normes électrique Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
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
          Isolez les murs de votre appartement parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Éligibilité aides vérifiée. Devis détaillé sous 48h.
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
