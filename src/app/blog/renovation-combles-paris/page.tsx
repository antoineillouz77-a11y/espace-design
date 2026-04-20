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
  headline: "Rénovation Combles Paris : aménagement sous pente & prix 2025 | Espace Design",
  description: "Aménager des combles parisiens : isolation thermique, velux, cloisons sous pente. Contraintes patrimoniales ABF, prix 2025.",
  datePublished: '2025-01-15',
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
      name: "Faut-il une autorisation pour aménager des combles à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Plusieurs autorisations peuvent être nécessaires. Si les combles font partie des parties communes de la copropriété, une assemblée générale doit voter leur transfert de jouissance. Si les travaux modifient l'aspect extérieur (ajout de velux, modification de toiture), une déclaration préalable ou un permis de construire est obligatoire, souvent soumis à l'avis conforme de l'Architecte des Bâtiments de France (ABF) dans les secteurs protégés parisiens. Les règles du PLU de Paris imposent également des conditions de hauteur et de surface habitable.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle hauteur sous plafond minimum pour aménager des combles à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La réglementation française impose une hauteur sous plafond minimum de 1,80 m sous rampant pour qu'une surface soit comptabilisée comme surface habitable (loi Carrez). En pratique, pour un confort d'usage réel, une hauteur de 2,20 m au point le plus haut est recommandée. À Paris, les combles sous toitures mansardées ou en zinc peuvent présenter des profils très différents selon l'immeuble — un diagnostic de faisabilité préalable est indispensable avant tout projet.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle isolation choisir pour des combles aménageables à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour des combles aménageables où chaque centimètre de hauteur compte, la mousse polyuréthane projetée offre le meilleur rapport épaisseur/performance thermique : 10 cm suffisent pour atteindre R = 4,5. La laine de roche entre chevrons est moins coûteuse (30 à 55 €/m²) mais nécessite un pare-vapeur et un doublage intérieur, amputant la hauteur sous plafond de 8 à 15 cm. Le sarking (isolation par l'extérieur) est la solution la plus performante (80 à 140 €/m²), idéale lors d'une réfection de toiture.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on installer un velux dans un immeuble parisien classé ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, sous conditions. La quasi-totalité de Paris intra-muros est classée dans un périmètre de protection des monuments historiques, ce qui soumet toute modification extérieure à l'avis conforme de l'ABF. En pratique, les velux sont généralement acceptés dans les pentes de toiture non visibles depuis la rue, mais refusés en façade principale. L'ABF prescrit souvent le format (largeur maximale), la finition (zinc naturel) et le nombre de fenêtres. Un dépôt de déclaration préalable est obligatoire, avec délai d'instruction de 1 à 2 mois.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Combles Paris : aménagement sous pente & prix 2025 | Espace Design",
  description: "Aménager des combles parisiens : isolation thermique, velux, cloisons sous pente. Contraintes patrimoniales ABF, prix 2025.",
  keywords: "rénovation combles Paris, aménagement sous-pente Paris, combles perdus Paris",
}

export default function ArticleRenovationComblesParis() {
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
            Rénovation Combles Paris : aménagement sous pente &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Les combles d&apos;un appartement en dernier étage parisien représentent souvent un potentiel inexploité. Entre les contraintes de l&apos;ABF, la règle des 1,80 m et l&apos;isolation sous rampants, chaque projet est unique. Guide complet pour aménager vos combles parisiens en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Combles perdus vs aménageables */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Combles perdus ou aménageables : la règle des 1,80 m
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La première question à trancher est la faisabilité d&apos;aménagement. En France, une surface n&apos;est comptabilisée comme habitable (loi Carrez) que si la hauteur sous plafond est d&apos;au moins 1,80 m sous rampant. En pratique, une hauteur de 2,20 m au point le plus haut est recommandée pour un confort d&apos;usage réel.
            </p>
            <div className="space-y-4">
              {[
                {
                  type: "Combles perdus (non aménageables)",
                  detail: "Hauteur sous rampant inférieure à 1,80 m, ou structure de charpente complexe empêchant tout aménagement. Seule solution : isolation thermique par soufflage de laine (combles perdus au sol) pour améliorer la performance énergétique de l'appartement du dessous. Coût : 15 à 30 €/m². Aide MaPrimeRénov' disponible.",
                },
                {
                  type: "Combles aménageables (hauteur 1,80 m à 2,20 m)",
                  detail: "Zone centrale habitable limitée, rampants exploitables pour rangements intégrés. Convient parfaitement pour une chambre, un bureau ou un dressing. La surface Carrez sera moindre que la surface au sol totale. Aménagement léger à complet selon la configuration.",
                },
                {
                  type: "Combles confortables (hauteur > 2,20 m)",
                  detail: "La configuration idéale : toiture mansardée ou comble à grande hauteur centrale. Permet toutes les configurations (chambre, salon, salle de bain). La surface habitable créée est comptabilisée intégralement dans la loi Carrez et peut augmenter significativement la valeur du bien.",
                },
              ].map((el) => (
                <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.type}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Contraintes ABF */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes ABF et secteurs protégés : velux et modifications de toiture
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La quasi-totalité de Paris intra-muros est classée dans le périmètre de protection des monuments historiques. Toute modification de toiture (velux, châssis, surélévation) doit recueillir l&apos;avis conforme de l&apos;Architecte des Bâtiments de France avant instruction en mairie.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Velux en pan arrière (invisible depuis la rue)",
                regle: "Généralement accepté par l'ABF",
                detail: "Les fenêtres de toit posées dans la pente arrière (côté cour) sont le plus souvent approuvées. L'ABF peut imposer un format maximum et une finition zinc naturel. Déclaration préalable obligatoire.",
              },
              {
                titre: "Velux en façade principale",
                regle: "Souvent refusé par l'ABF",
                detail: "Toute modification visible depuis la voie publique est soumise à un avis plus strict. Dans les secteurs sauvegardés (Marais, Île Saint-Louis, etc.), les refus sont fréquents. Consulter la mairie d'arrondissement en amont.",
              },
              {
                titre: "Surélévation ou modification du gabarit",
                regle: "Permis de construire obligatoire",
                detail: "Toute modification qui dépasse le gabarit autorisé du PLU de Paris nécessite un permis de construire, souvent refusé dans les zones patrimoniales. Un architecte est obligatoire pour tout projet > 150 m² de surface créée.",
              },
              {
                titre: "Création d'une ouverture dans un mur de pignon",
                regle: "Déclaration préalable + accord copropriété",
                detail: "L'ouverture d'une baie dans un mur pignon (partie commune dans la majorité des copropriétés) nécessite un vote en AG avant toute démarche administrative. Prévoir 6 à 18 mois de délai.",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.titre}</div>
                <div className="text-[#B8960C] text-xs font-medium mb-2">{el.regle}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Isolation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Isolation combles : laine soufflée, sarking et mousse projetée
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;isolation est le poste le plus impactant sur le confort thermique d&apos;un appartement en dernier étage. Le choix de la technique dépend du type de combles et de la contrainte de hauteur sous plafond disponible.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Technique</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix (€/m²)</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Résistance (R)</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Usage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tech: "Soufflage laine de verre (combles perdus)", prix: "15 – 30 €", r: "R ≥ 7", usage: "Combles non aménagés" },
                  { tech: "Laine de roche entre chevrons", prix: "30 – 55 €", r: "R ≥ 4,5", usage: "Rampants aménageables" },
                  { tech: "Sarking (isolation toiture par l'extérieur)", prix: "80 – 140 €", r: "R ≥ 6", usage: "Réfection toiture + isolation" },
                  { tech: "Mousse polyuréthane projetée", prix: "40 – 70 €", r: "R ≥ 5", usage: "Rampants + pignons" },
                  { tech: "Ouate de cellulose soufflée", prix: "25 – 45 €", r: "R ≥ 5", usage: "Combles perdus ou rampants" },
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
          <div className="bg-[#1C1C1C]/5 rounded-lg p-5 border border-gray-200">
            <p className="text-[#1C1C1C] text-sm font-medium mb-2">Le sarking : solution combinée toiture + isolation</p>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              Le sarking consiste à poser l&apos;isolant rigide sur la charpente côté extérieur, avant de reposer la couverture. Solution la plus performante — elle élimine les ponts thermiques et ne réduit pas la hauteur intérieure. Recommandée lors d&apos;une réfection de toiture simultanée. Nécessite l&apos;accord ABF pour toute modification extérieure visible.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — Velux et fenêtres de toit */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Velux et fenêtres de toit : types, prix et réglementation à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;ajout de fenêtres de toit est souvent indispensable pour apporter lumière et ventilation dans des combles aménagés. C&apos;est aussi le point réglementaire le plus sensible dans les secteurs protégés parisiens.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Fenêtre de toit standard (type Velux GGL)",
                prix: "800 – 1 400 €",
                detail: "Fenêtre à rotation centrale, la plus courante. Dimensions de 55×78 cm à 114×118 cm. À Paris, l'ABF impose souvent des formats précis et des finitions zinc pour respecter le caractère des toitures haussmanniennes.",
                regle: "Déclaration préalable + accord ABF en secteur protégé",
              },
              {
                type: "Fenêtre à projection (type Velux GVK)",
                prix: "1 200 – 2 000 €",
                detail: "S'ouvre vers l'extérieur en faisant saillie sur la toiture. Apporte plus de lumière. Souvent refusée par l'ABF en façade principale car elle modifie davantage l'aspect extérieur.",
                regle: "Accord ABF souvent nécessaire — vérifier en mairie",
              },
              {
                type: "Châssis de désenfumage",
                prix: "600 – 1 000 €",
                detail: "Requis par le règlement de sécurité incendie si les combles aménagés créent une surface habitable accessible par un seul escalier. Peut être intégré dans la fenêtre de toit principale.",
                regle: "Obligatoire selon la configuration — consulter le maître d'œuvre",
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed mb-2">{el.detail}</div>
                <div className="text-xs text-gray-500 font-light italic">{el.regle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Cloisons sous pente et rangements */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Cloisons sous pente et rangements intégrés
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les volumes sous rampants, inutilisables debout, peuvent devenir de précieux espaces de rangement. La conception des cloisons sous pente est une spécialité des chantiers en combles : chaque centimètre doit être pensé pour maximiser la surface utile tout en respectant la structure de la charpente.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Placards intégrés sous rampants",
                prix: "150 – 350 €/ml",
                detail: "Caissons sur mesure en médium laqué ou en bois massif, construits dans les zones de hauteur inférieure à 1,80 m. Portes battantes ou coulissantes selon la profondeur disponible. Solution idéale pour dressing ou rangement chambre.",
              },
              {
                titre: "Cloison de séparation sous pente",
                prix: "60 – 100 €/m²",
                detail: "Cloison en placo sur ossature métallique adaptée aux angles des rampants. Permet de délimiter une chambre, un bureau ou une salle de bain dans un grand volume de combles. Les soffites (habillages de chevrons) complètent la finition.",
              },
              {
                titre: "Niche et étagères intégrées",
                prix: "200 – 600 € / unité",
                detail: "Niches créées entre les chevrons ou dans les volumes perdus, habillées en placo et éclairées en LED. Parfait pour livres, objets décoratifs ou télévision encastrée. Zéro emprise au sol.",
              },
              {
                titre: "Bureau intégré sous rampant",
                prix: "800 – 2 500 €",
                detail: "Plan de travail sur mesure installé dans la zone de hauteur réduite (1,20 à 1,80 m). Adapté à un usage bureau ou bibliothèque. Éclairage LED intégré et prises encastrées complètent l'installation.",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Tableau prix aménagement complet */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix aménagement combles Paris 2025 : tableau complet
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
                    config: "Isolation seule (combles perdus)",
                    prestations: "Soufflage laine, sans aménagement",
                    budget: "15 – 30 €/m²",
                    delai: "1 – 2 jours",
                  },
                  {
                    config: "Aménagement léger",
                    prestations: "Isolation + plâtrerie + sol + électricité, sans sanitaires",
                    budget: "400 – 700 €/m²",
                    delai: "3 – 5 semaines",
                  },
                  {
                    config: "Aménagement complet",
                    prestations: "Isolation + velux + cloisons + électricité + sanitaires + escalier + sol",
                    budget: "800 – 1 500 €/m²",
                    delai: "6 – 10 semaines",
                  },
                  {
                    config: "Haut de gamme / duplex",
                    prestations: "Tout inclus + matériaux premium, salle de bain complète, aménagements sur mesure",
                    budget: "1 500 – 2 500 €/m²",
                    delai: "10 – 16 semaines",
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
          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points de vigilance avant de lancer le projet
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Vérifier la résistance structurelle du plancher avant de prévoir des charges lourdes (carrelage, baignoire)",
                "Le raccordement aux réseaux depuis l'étage inférieur est souvent le poste le plus sous-estimé",
                "Anticiper le coût des autorisations : architecte pour dépôt de PC (3 à 8 % du montant des travaux)",
                "Vérifier si les combles sont en parties privatives ou communes dans le règlement de copropriété",
                "Profiter des aides disponibles : MaPrimeRénov' et TVA à 5,5 % pour l'isolation thermique",
                "Déposer la demande en AG de copropriété dès que possible — les délais peuvent dépasser 12 mois",
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
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/renovation-duplex-paris', title: 'Rénovation duplex Paris' },
              { href: '/blog/pose-parquet-paris', title: 'Pose parquet Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/renovation-appartement-paris-10e', title: 'Rénovation appartement Paris 10e' },
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
          Aménagez vos combles avec des artisans parisiens spécialisés
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Faisabilité gratuite. Coordination isolation, menuiserie, plâtrerie et électricité. Devis sous 48h.
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
