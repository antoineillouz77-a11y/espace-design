import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Combles Paris', item: 'https://espacedesignparis.fr/blog/renovation-combles-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Combles Paris : aménagement, isolation & prix 2025 | Espace Design',
  description: 'Aménager les combles à Paris : isolation, Velux, hauteur sous plafond, prix. Guide pour appartements en dernier étage 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-combles-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Faut-il une autorisation pour aménager les combles à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, plusieurs autorisations peuvent être nécessaires. Si les combles font partie de la copropriété (parties communes), une assemblée générale doit voter le transfert de jouissance ou de propriété. Si les travaux modifient l'aspect extérieur (ajout de Velux, modification de toiture), un permis de construire ou une déclaration préalable est obligatoire, souvent soumis à l'avis de l'Architecte des Bâtiments de France (ABF) dans les secteurs protégés parisiens. Enfin, les règles du PLU de Paris imposent des conditions de hauteur et de surface habitable.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle hauteur sous plafond minimum pour aménager des combles à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La réglementation française (article R.111-2 du Code de la construction) impose une hauteur sous plafond minimum de 1,80 m sous rampant pour qu'une surface soit comptabilisée comme surface habitable (loi Carrez). En pratique, pour un confort d'usage réel, une hauteur de 2,20 m au point le plus haut est recommandée. À Paris, les combles sous toitures mansardées ou en zinc peuvent présenter des profils très différents selon l'immeuble — un diagnostic de faisabilité préalable est indispensable.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps durent les travaux d\'aménagement de combles à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un chantier d'aménagement de combles à Paris dure en moyenne 4 à 10 semaines selon l'ampleur des travaux. Une simple isolation + plâtrerie légère peut être réalisée en 2 à 3 semaines. Un aménagement complet avec Velux, cloisons, escalier, sanitaires et électricité nécessite 6 à 10 semaines. Le délai d'obtention des autorisations (déclaration préalable ou permis de construire) s'ajoute en amont : compter 1 à 2 mois supplémentaires.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Combles Paris : aménagement, isolation & prix 2025 | Espace Design',
  description: 'Aménager les combles à Paris : isolation, Velux, hauteur sous plafond, prix. Guide pour appartements en dernier étage 2025.',
}

export default function ArticleRenovationCombles() {
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
            Guides
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Combles Paris : aménagement, isolation & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Les combles d&apos;un appartement en dernier étage parisien représentent souvent un potentiel inexploité : espace de rangement transformable en pièce à vivre, gain de surface habitable, amélioration thermique. Conditions réglementaires, isolation, Velux, budget : le guide complet pour aménager ses combles à Paris.
          </p>
        </div>
      </section>

      {/* Section 1 — Faisabilité */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Quand peut-on aménager des combles à Paris ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              L&apos;aménagement de combles à Paris est soumis à un ensemble de conditions réglementaires et techniques qu&apos;il convient d&apos;évaluer avant de lancer les travaux. Une faisabilité mal évaluée peut conduire à des refus de permis ou à des complications majeures en cours de chantier.
            </p>
            <div className="space-y-4">
              {[
                {
                  condition: 'Hauteur minimale sous rampant : 1,80 m',
                  detail: "C'est la condition technique la plus éliminatoire. Pour qu'une surface soit comptabilisée comme habitable (loi Carrez), la hauteur sous plafond doit être d'au moins 1,80 m sur les rampants. En pratique, les combles parisiens sous toitures à deux pans ou mansardées (toiture à la Mansart) offrent souvent une partie centrale à hauteur suffisante. Une mesure préalable précise est indispensable avant tout projet.",
                },
                {
                  condition: 'Accord de la copropriété',
                  detail: "Si les combles font partie des parties communes de l'immeuble (cas le plus fréquent à Paris), leur privatisation nécessite un vote en assemblée générale à la double majorité (article 26 de la loi de 1965). Cette étape peut prendre 6 à 18 mois. Si les combles sont déjà dans les parties privatives du dernier étage (vérifier l'acte de copropriété), cet accord n'est pas nécessaire pour des travaux intérieurs.",
                },
                {
                  condition: 'Règles du PLU de Paris',
                  detail: "Le Plan Local d'Urbanisme de Paris fixe les règles de gabarit et de hauteur maximale des constructions. En règle générale, les combles aménagés ne doivent pas dépasser le gabarit autorisé de l'immeuble. Toute surélévation ou modification de toiture visible depuis la rue nécessite une déclaration préalable ou un permis de construire, soumis à l'avis de l'ABF dans les secteurs sauvegardés.",
                },
                {
                  condition: 'Avis de l\'Architecte des Bâtiments de France (ABF)',
                  detail: "Paris est en grande partie classée zone protégée au titre du patrimoine architectural. Tout projet modifiant l'aspect extérieur d'un immeuble (ajout de Velux, modification de la toiture) doit recueillir l'avis conforme de l'ABF. Cet avis peut imposer des contraintes sur le type et la taille des fenêtres de toit, ou refuser certaines modifications sur des façades classées.",
                },
              ].map((el) => (
                <div key={el.condition} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.condition}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Isolation */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Isolation des combles : sarking, soufflage, laine de verre — prix et performances
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;isolation est le poste le plus impactant sur le confort d&apos;un appartement en dernier étage parisien. Le choix de la technique dépend du type de combles (perdus ou aménageables) et de la contrainte de hauteur sous plafond.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Technique</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix (€/m²)</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Résistance thermique</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Usage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tech: 'Soufflage laine de verre (combles perdus)', prix: '15 – 30 €', r: 'R ≥ 7', usage: 'Combles non aménagés' },
                  { tech: 'Laine de roche entre chevrons', prix: '30 – 55 €', r: 'R ≥ 4,5', usage: 'Combles aménageables' },
                  { tech: 'Sarking (isolation en toiture par l\'extérieur)', prix: '80 – 140 €', r: 'R ≥ 6', usage: 'Réfection toiture + isolation' },
                  { tech: 'Polyuréthane projeté (mousse)', prix: '40 – 70 €', r: 'R ≥ 5', usage: 'Rampants + pignons' },
                  { tech: 'Ouate de cellulose soufflée', prix: '25 – 45 €', r: 'R ≥ 5', usage: 'Combles perdus ou rampants' },
                ].map((row, i) => (
                  <tr key={row.tech} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.tech}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.r}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-3">
            {[
              {
                titre: 'Le sarking : la solution combinée toiture + isolation',
                texte: "Le sarking consiste à poser l'isolant rigide (polyisocyanurate ou laine de bois) sur la charpente, côté extérieur, avant de reposer la couverture. C'est la solution la plus performante thermiquement — elle élimine les ponts thermiques et ne réduit pas la hauteur sous plafond intérieure. Elle est recommandée lors d'une réfection de toiture, car le coût de la couverture est mutualisé. En revanche, elle nécessite l'accord de l'ABF à Paris pour toute modification de l'aspect extérieur.",
              },
              {
                titre: 'Isolation sous rampants : garder la hauteur sous plafond',
                texte: "Pour des combles aménageables où chaque centimètre de hauteur compte, l'isolation par projection de mousse polyuréthane offre le meilleur rapport épaisseur/performance thermique. Une épaisseur de 10 cm atteint R = 4,5 — suffisant pour répondre à la RE2020. La laine de roche entre chevrons est moins coûteuse mais nécessite un pare-vapeur et un doublage intérieur, qui ampute la hauteur sous plafond de 8 à 15 cm supplémentaires.",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.texte}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Velux */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Velux et ouvertures en toiture : réglementation et prix à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;ajout de fenêtres de toit est souvent indispensable pour apporter lumière et ventilation dans des combles aménagés à Paris. Mais c&apos;est aussi le point réglementaire le plus sensible, notamment dans les secteurs protégés.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Fenêtre de toit standard (type Velux GGL)',
                prix: '800 – 1 400 €',
                detail: "Fenêtre à rotation centrale, la plus courante. Dimensions de 55×78 cm à 114×118 cm. Pose par un couvreur (2 à 4h par unité). À Paris, les ABF imposent souvent des formats précis et des finitions zinc pour respecter le caractère architectural des toitures haussmanniennes.",
                reglementation: 'Déclaration préalable obligatoire + accord ABF en secteur protégé',
              },
              {
                type: 'Fenêtre de toit à projection (type Velux GVK)',
                prix: '1 200 – 2 000 €',
                detail: "S'ouvre vers l'extérieur en faisant saillie sur la toiture. Apporte plus de lumière et permet une vue dégagée. Souvent refusée par l'ABF dans les secteurs sauvegardés parisiens car elle modifie davantage l'aspect extérieur.",
                reglementation: 'Accord ABF souvent nécessaire — vérifier en mairie',
              },
              {
                type: 'Châssis de désenfumage (pour circulation)',
                prix: '600 – 1 000 €',
                detail: "Requis par le règlement de sécurité incendie si les combles aménagés créent une surface habitable supplémentaire accessible par un seul escalier. Peut être intégré dans la fenêtre de toit principale.",
                reglementation: 'Obligatoire selon configuration — vérifier avec le maître d\'œuvre',
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed mb-2">{el.detail}</div>
                <div className="text-xs text-gray-500 font-light italic">{el.reglementation}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-2">Le secteur protégé parisien et l&apos;ABF</div>
            <div className="text-gray-400 text-sm font-light leading-relaxed">
              La quasi-totalité de Paris intra-muros est classée dans le périmètre de protection des monuments historiques, ce qui soumet toute modification extérieure à l&apos;avis conforme de l&apos;Architecte des Bâtiments de France. En pratique, les Velux sont généralement acceptés dans les pentes de toiture non visibles depuis la rue, mais refusés en façade principale. Le choix de la finition (zinc naturel, ardoise) et du format est souvent prescrit par l&apos;ABF.
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Aménagement intérieur */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Aménagement intérieur : cloisons, escalier, sanitaires, électricité
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Une fois l&apos;isolation posée et les ouvertures créées, l&apos;aménagement intérieur des combles suit la même logique qu&apos;une rénovation d&apos;appartement standard, avec toutefois des contraintes spécifiques liées aux volumes sous rampants.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                poste: 'Cloisons et plâtrerie',
                detail: "Les cloisons sont généralement en placo sur ossature métallique, adaptées aux angles des rampants. Prévoir des soffites (habillages de chevrons) et des faux-plafonds pour masquer l'isolation et les réseaux.",
                prix: '40 – 80 €/m²',
              },
              {
                poste: 'Escalier d\'accès',
                detail: "L'accès aux combles nécessite souvent la création d'un escalier depuis l'étage inférieur (si les combles ne sont pas accessibles depuis le palier). Escalier droit en bois : 2 000 – 5 000 €. Escalier hélicoïdal gain de place : 1 500 – 4 000 €.",
                prix: '1 500 – 5 000 €',
              },
              {
                poste: 'Sanitaires (salle de bain ou WC)',
                detail: "L'ajout de sanitaires nécessite d'amener les alimentations eau froide/chaude et les évacuations depuis l'étage inférieur. C'est le poste le plus complexe techniquement — prévoir 2 000 à 5 000 € pour la plomberie seule, selon la distance et la complexité.",
                prix: '2 000 – 5 000 €',
              },
              {
                poste: 'Électricité',
                detail: "Création d'un tableau divisionnaire, tirage de câbles depuis le compteur principal, points lumineux adaptés aux angles (spots encastrés dans les rampants), prises de courant. Budget moyen pour une pièce de 20 m² : 1 500 à 3 000 €.",
                prix: '1 500 – 3 000 €',
              },
              {
                poste: 'Revêtements de sol',
                detail: "Parquet flottant ou massif : solution la plus adaptée pour les combles (légèreté, pose sans colle sur plancher bois existant). Carrelage possible mais nécessite une vérification de la résistance du plancher (charge admissible).",
                prix: '30 – 100 €/m² posé',
              },
              {
                poste: 'VMC et ventilation',
                detail: "Les combles aménagés doivent disposer d'une ventilation conforme. Si l'immeuble possède une VMC collective, un raccordement est possible. Sinon, une VMC simple flux ou double flux est à prévoir (1 000 – 3 000 €).",
                prix: '1 000 – 3 000 €',
              },
            ].map((el) => (
              <div key={el.poste} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.poste}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
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
            Budget complet selon configuration
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs 2025 pour un aménagement de combles à Paris, main d&apos;œuvre et matériaux inclus. Hors coûts administratifs (architecte, déclaration préalable, frais de copropriété).
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Configuration</th>
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations incluses</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Délai travaux</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    config: 'Simple isolation',
                    prestations: 'Isolation rampants + soufflage combles perdus, sans aménagement',
                    budget: '50 – 80 €/m²',
                    delai: '2 – 5 jours',
                  },
                  {
                    config: 'Aménagement léger',
                    prestations: 'Isolation + plâtrerie + électricité + sol, sans sanitaires',
                    budget: '400 – 700 €/m²',
                    delai: '3 – 5 semaines',
                  },
                  {
                    config: 'Aménagement complet',
                    prestations: 'Isolation + Velux + cloisons + électricité + sanitaires + escalier + sol + peinture',
                    budget: '800 – 1 500 €/m²',
                    delai: '6 – 10 semaines',
                  },
                  {
                    config: 'Haut de gamme / duplex',
                    prestations: 'Tout inclus + matériaux premium, salle de bain complète, aménagements sur mesure',
                    budget: '1 500 – 2 500 €/m²',
                    delai: '10 – 16 semaines',
                  },
                ].map((row, i) => (
                  <tr key={row.config} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.config}</td>
                    <td className="px-4 py-3 text-gray-600 font-light text-xs">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.budget}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.delai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mb-6">
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points de vigilance budget
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Vérifiez la résistance structurelle du plancher avant de prévoir des charges lourdes (carrelage, baignoire) — un bureau d\'études structure peut être nécessaire',
                'Le raccordement aux réseaux (eau, électricité) depuis l\'étage inférieur est souvent le poste le plus sous-estimé dans les budgets combles',
                'Intégrez les honoraires d\'un maître d\'œuvre ou d\'un architecte si les travaux dépassent 150 m² ou modifient la structure — obligatoire au-delà de 150 m²',
                'Vérifiez si votre assurance habitation couvre les combles aménagés — une mise à jour de contrat peut être nécessaire',
                'Anticipez le coût des autorisations : architecte pour dépôt de PC (3 à 8 % du montant des travaux), frais de copropriété, délais ABF',
                'Profitez des aides fiscales disponibles : MaPrimeRénov\', CEE (isolation), TVA à taux réduit 5,5 % pour l\'isolation thermique',
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
              { href: '/menuiserie-paris', title: 'Menuiserie Paris' },
              { href: '/blog/renovation-duplex-paris', title: 'Rénovation duplex Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/renovation-loft-paris', title: 'Rénovation loft Paris' },
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
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-paris-19e', label: 'Paris 19e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-montrouge', label: 'Montrouge' },
              { href: '/renovation-clamart', label: 'Clamart' },
              { href: '/renovation-vanves', label: 'Vanves' },
              { href: '/renovation-malakoff', label: 'Malakoff' },
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
          Aménagez vos combles avec des artisans parisiens spécialisés
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Faisabilité gratuite. Devis détaillé sous 48h. Coordination isolation, menuiserie, plâtrerie et électricité.
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
