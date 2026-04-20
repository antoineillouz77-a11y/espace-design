import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Isolation Thermique Appartement Paris', item: 'https://espacedesignparis.fr/blog/isolation-thermique-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Isolation Thermique Appartement Paris : murs, fenêtres & DPE 2025 | Espace Design',
  description: "Isoler son appartement à Paris : ITI murs, fenêtres double vitrage, plancher. Impact DPE, aides MaPrimeRénov' et prix 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/isolation-thermique-appartement-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quelle aide MaPrimeRénov' pour l'isolation d'un appartement à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "MaPrimeRénov' couvre l'isolation des murs (ITI et ITE), des fenêtres et du plancher. Le montant dépend des revenus du ménage : de 25% à 75% du coût des travaux selon les 4 profils (bleu, jaune, violet, rose). À Paris, les plafonds de revenus sont majorés. Cumulable avec les CEE et la TVA à 5,5%. Il est obligatoire de passer par un artisan RGE pour débloquer les aides.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de cm perd-on avec une isolation intérieure (ITI) à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une isolation thermique par l'intérieur (ITI) avec doublage plâtre + laine de roche 60 mm entraîne une perte de 8 à 12 cm par mur traité. Dans un appartement parisien de 50 m² avec 2 murs extérieurs traités, la perte effective est de 1,6 à 2,4 m² de surface habitable. Ce compromis est à anticiper lors de la conception du projet.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle est la différence entre double vitrage et survitrage pour un appartement haussmannien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le double vitrage implique de changer les châssis : meilleure performance (Uw de 1,1 à 1,4 W/m².K) mais nécessite souvent l'accord de l'architecte des bâtiments de France (ABF). Le survitrage colle une vitre sur l'existant sans changer les menuiseries : moins performant (Uw 2,5 W/m².K) mais largement accepté en copropriété et par l'ABF. Prix : 200-400 €/fenêtre pour le survitrage vs 800-1 800 € pour le remplacement complet.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Isolation Thermique Appartement Paris : murs, fenêtres & DPE 2025 | Espace Design",
  description: "Isoler son appartement à Paris : ITI murs, fenêtres double vitrage, plancher. Impact DPE, aides MaPrimeRénov' et prix 2025.",
}

export default function ArticleIsolationThermique() {
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
            Isolation Thermique Appartement Paris : murs, fenêtres & DPE 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Chauffage trop coûteux, DPE F ou G, appartement interdit à la location dès 2028 : l&apos;isolation thermique est devenue un enjeu incontournable pour les propriétaires parisiens. Murs, fenêtres, plancher, ponts thermiques — guide complet avec prix et aides 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Pourquoi isoler */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Pourquoi isoler son appartement parisien en 2025 ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Les immeubles parisiens anciens — haussmanniens, immeubles de rapport du XIXe ou constructions d&apos;après-guerre — présentent souvent de très mauvaises performances thermiques. Façades en pierre de taille non isolées, simple vitrage, planchers non traités : une passoire thermique consomme 3 à 5 fois plus d&apos;énergie qu&apos;un logement bien isolé.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Depuis la loi Climat et Résilience, les propriétaires parisiens sont soumis à un calendrier d&apos;interdiction progressive des locations : les logements classés G sont interdits à la location depuis janvier 2025, les F le seront en 2028. Pour les bailleurs comme pour les occupants, l&apos;isolation n&apos;est plus un choix de confort — c&apos;est une nécessité légale et économique.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'DPE et interdictions de location',
                  detail: "Un logement classé G est interdit à la mise en location depuis janvier 2025. Les F seront interdits en 2028, les E en 2034. À Paris, une grande partie du parc locatif privé est concernée. Améliorer le DPE de 2 lettres est souvent possible avec une isolation des murs et le remplacement des fenêtres.",
                },
                {
                  enjeu: 'Économies sur la facture de chauffage',
                  detail: "Un appartement parisien mal isolé de 60 m² peut coûter 2 000 à 3 500 €/an en chauffage. Une isolation complète (murs + fenêtres) réduit la consommation de 40 à 60%, soit une économie annuelle de 800 à 2 000 €. Le retour sur investissement est généralement atteint en 7 à 12 ans.",
                },
                {
                  enjeu: 'Valorisation du bien immobilier',
                  detail: "À Paris, un logement classé A ou B se vend en moyenne 15 à 20% plus cher qu'un logement équivalent classé E ou F. L'isolation est l'un des rares travaux qui valorise le bien à la revente tout en améliorant le quotidien des occupants.",
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

      {/* Section 2 — ITI murs */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Isolation des murs par l&apos;intérieur (ITI) : doublage et solutions
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un appartement parisien, l&apos;isolation par l&apos;extérieur (ITE) est quasi impossible sans accord unanime de la copropriété. L&apos;ITI — isolation par l&apos;intérieur — est donc la solution standard. Elle consiste à coller ou visser un doublage isolant sur les murs extérieurs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Doublage plâtre + laine de roche',
                solution: "Plaque de plâtre solidaire d'une laine de roche 45 à 100 mm. Solution la plus répandue : bonne performance, résistance au feu. Perte de surface : 7 à 12 cm par mur. Résistance thermique R = 1,5 à 3,5 m².K/W selon épaisseur.",
                cout: '60 – 100 €/m²',
              },
              {
                titre: 'Doublage avec isolant mince (mousse PIR)',
                solution: "Polyisocyanurate rigide collé en panneau. Très bonne performance pour une faible épaisseur (40 mm = laine de roche 100 mm). Idéal pour les pièces aux cotes réduites. Classement feu à vérifier.",
                cout: '80 – 130 €/m²',
              },
              {
                titre: 'Enduit isolant projeté',
                solution: "Mortier isolant projeté mécaniquement sur le mur. Moins performant (R = 0,5 à 1,0 m².K/W) mais sans perte de surface significative. Solution de confort thermique pour des appartements sans fort enjeu DPE.",
                cout: '40 – 70 €/m²',
              },
              {
                titre: 'Sarking intérieur (laine soufflée)',
                solution: "Laine soufflée entre ossature bois légère. Solution écologique, sans pont thermique sur l'ossature. Bonne régulation hygroscopique. Idéale pour les rénovations globales cherchant performance et matériaux biosourcés.",
                cout: '90 – 140 €/m²',
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
          <div className="bg-[#1C1C1C] rounded-lg p-5 text-sm">
            <div className="text-[#D4AF37] font-medium mb-2">Ponts thermiques : le point clé souvent négligé</div>
            <div className="text-gray-300 font-light leading-relaxed">
              Un doublage isolant parfait peut être annulé par des ponts thermiques non traités : dalles de plancher traversantes, ébrasements de fenêtres non isolés, liaisons mur-plafond. Dans un appartement parisien, les ponts thermiques représentent jusqu&apos;à 30% des déperditions totales. Ils doivent être traités en même temps que les murs.
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Fenêtres */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Fenêtres : double vitrage, survitrage et contraintes haussmanniennes
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les fenêtres représentent 10 à 15% des déperditions thermiques d&apos;un logement, mais leur remplacement est soumis à des contraintes architecturales strictes dans de nombreux immeubles parisiens. L&apos;architecte des bâtiments de France (ABF) peut imposer le maintien des menuiseries bois d&apos;origine.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Double vitrage avec remplacement des châssis',
                prix: '800 – 1 800 €/fenêtre',
                detail: "Solution la plus performante : Uw de 1,1 à 1,4 W/m².K. Châssis PVC (moins accepté par l'ABF), aluminium ou bois (privilégiés dans les immeubles haussmanniens). Nécessite souvent l'accord de l'assemblée générale de copropriété.",
              },
              {
                type: 'Survitrage (vitrage additionnel)',
                prix: '200 – 400 €/fenêtre',
                detail: "Vitre supplémentaire collée sur le châssis existant, sans remplacement des menuiseries. Performance moindre (Uw de 2,0 à 2,5 W/m².K) mais largement acceptée par les ABF et les copropriétés. Bonne solution de compromis pour les immeubles classés.",
              },
              {
                type: 'Remplacement des joints et calfeutrage',
                prix: '50 – 150 €/fenêtre',
                detail: "Première étape avant tout investissement plus lourd. Des joints défaillants peuvent générer des infiltrations d'air équivalentes à un trou de 10 cm². Remplacement des joints, pose de boudins d'étanchéité, calfeutrage des ébrasements : gains de confort immédiats à faible coût.",
              },
              {
                type: 'Double vitrage intégré (menuiseries d\'origine conservées)',
                prix: '1 200 – 2 500 €/fenêtre',
                detail: "Conservation des menuiseries bois d'origine avec intégration d'un double vitrage dans le châssis existant. Solution patrimoniale acceptée dans les immeubles classés. Performance proche du double vitrage neuf.",
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

      {/* Section 4 — Aides 2025 */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Aides financières 2025 : MaPrimeRénov&apos;, CEE et TVA réduite
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les travaux d&apos;isolation ouvrent droit à plusieurs aides cumulables en 2025. La condition sine qua non : faire appel à un artisan certifié RGE (Reconnu Garant de l&apos;Environnement).
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                aide: "MaPrimeRénov'",
                montant: '25% à 75% du coût des travaux',
                detail: "Subvention de l'ANAH versée après travaux. Montant selon profil de revenus (4 couleurs : bleu, jaune, violet, rose). À Paris, les plafonds de revenus sont majorés de 40% par rapport aux zones rurales. Cumulable avec les CEE. Demande à effectuer avant le début des travaux.",
              },
              {
                aide: 'CEE (Certificats d\'Économies d\'Énergie)',
                montant: '500 – 3 000 € selon travaux',
                detail: "Prime versée par les fournisseurs d'énergie obligés (EDF, TotalEnergies, Engie...). Cumulable avec MaPrimeRénov'. Pour l'isolation des murs (BAR-EN-102) ou des fenêtres (BAR-EN-104), les montants restent significatifs en 2025.",
              },
              {
                aide: 'TVA à 5,5%',
                montant: 'Au lieu de 10% ou 20%',
                detail: "Taux réduit applicable sur les travaux d'amélioration de la performance énergétique réalisés par un professionnel sur un logement de plus de 2 ans. S'applique à la main d'oeuvre et aux matériaux sans démarche particulière.",
              },
              {
                aide: 'Éco-PTZ (prêt à taux zéro)',
                montant: "Jusqu'à 50 000 € sans intérêts",
                detail: "Prêt sans intérêts pour financer les travaux de rénovation énergétique. Cumulable avec MaPrimeRénov'. Durée de remboursement jusqu'à 20 ans. Accessible sans condition de revenus pour les propriétaires occupants et bailleurs.",
              },
            ].map((el) => (
              <div key={el.aide} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.aide}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.montant}</div>
                </div>
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
            Prix des travaux d&apos;isolation à Paris : tableau récapitulatif 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix s&apos;entendent main d&apos;oeuvre et matériaux, TVA à 5,5% incluse. Les aides (MaPrimeRénov&apos; + CEE) peuvent réduire le reste à charge de 30 à 70%.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Travaux</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix brut</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Reste apres aides</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Gain DPE</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { travaux: 'ITI murs (laine de roche, 60 mm)', prix: '60 – 100 €/m²', reste: '20 – 50 €/m²', gain: '1 à 2 lettres' },
                  { travaux: 'Double vitrage (remplacement châssis)', prix: '800 – 1 800 €/fenêtre', reste: '400 – 1 200 €/fenêtre', gain: '0,5 à 1 lettre' },
                  { travaux: 'Survitrage (sans remplacement)', prix: '200 – 400 €/fenêtre', reste: '150 – 300 €/fenêtre', gain: '0,2 à 0,5 lettre' },
                  { travaux: 'Isolation plancher bas', prix: '30 – 60 €/m²', reste: '10 – 30 €/m²', gain: '0,5 lettre' },
                  { travaux: 'Traitement ponts thermiques', prix: '40 – 80 €/ml', reste: '20 – 50 €/ml', gain: 'Inclus dans murs' },
                ].map((row, i) => (
                  <tr key={row.travaux} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.travaux}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.reste}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.gain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour bien piloter son projet d&apos;isolation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Commencer par un audit énergétique pour identifier les postes de déperdition prioritaires",
                "Déposer la demande MaPrimeRénov' avant le début des travaux — condition obligatoire",
                "Choisir un artisan RGE — sans cette certification, les aides ne sont pas débloquées",
                "Traiter les ponts thermiques en même temps que les murs pour ne pas annuler le bénéfice",
                "Anticiper la ventilation : une maison bien isolée doit être bien ventilée (VMC double flux)",
                "Dans un immeuble haussmannien, consulter l'ABF avant de choisir les nouvelles menuiseries",
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
              { href: '/isolation-paris', title: 'Isolation Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/renovation-appartement-haussmannien', title: 'Rénovation appartement haussmannien' },
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
          Isolez votre appartement parisien et améliorez votre DPE
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan RGE. Devis gratuit sous 48h. Nous gérons les dossiers d&apos;aides MaPrimeRénov&apos; pour vous.
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
