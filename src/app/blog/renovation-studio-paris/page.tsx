import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Studio Paris', item: 'https://espacedesignparis.fr/blog/renovation-studio-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Studio Paris : optimiser l'espace & prix au m² 2025 | Espace Design",
  description: "Rénover un studio parisien de 15 à 35 m² : optimisation espace, rangements intégrés, kitchenette, salle de bain. Prix au m² et conseils artisan 2025.",
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-studio-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation complète de studio à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'une rénovation complète d'un studio à Paris varie selon la surface et le niveau de finition. Pour un studio de 20 m², comptez entre 15 000 et 26 000 € tout compris (électricité, plomberie, sol, peinture, cuisine équipée, salle d'eau). Une rénovation légère (peinture, sol, cuisine basique) sur 20 m² se situe entre 5 500 et 9 000 €. Le prix au m² pour une rénovation complète oscille entre 750 et 1 200 €/m² selon les matériaux choisis et l'état du logement.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il déclarer des travaux pour rénover un studio en copropriété parisienne ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les travaux purement intérieurs (peinture, sol, cuisine non raccordée aux colonnes communes) ne nécessitent aucune autorisation. En revanche, certains travaux requièrent une déclaration ou une autorisation : déplacement de la cuisine ou salle de bain sur les colonnes communes (accord syndic), percement de murs porteurs (architecte + déclaration préalable), modification de fenêtres (déclaration préalable mairie), tout travail modifiant les parties communes ou la façade (AG copropriété + mairie).",
      },
    },
    {
      '@type': 'Question',
      name: "Un lit mezzanine est-il adapté à tous les studios parisiens ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le lit mezzanine est pertinent uniquement si la hauteur sous plafond est suffisante. Il faut au minimum 2,20 m sous la mezzanine pour que l'espace de vie dessous soit confortable, et 0,90 m à 1,10 m sous le plafond côté couchage. Dans les immeubles haussmanniens (plafonds à 3 m ou plus), c'est idéal. Dans les immeubles des années 60-80 (hauteur souvent 2,50 à 2,70 m), c'est techniquement possible mais peu confortable. Un artisan peut évaluer la faisabilité sur place gratuitement.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle différence entre salle d'eau et salle de bain dans un studio ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une salle d'eau comprend douche + lavabo (sans baignoire), et représente le choix standard pour les studios : elle s'intègre dans 3 à 4 m² et libère de l'espace de vie. La salle de bain avec baignoire nécessite au minimum 5 à 6 m², ce qui est rare dans un studio parisien. Pour un studio de moins de 25 m², la salle d'eau avec douche à l'italienne (sans receveur) est la solution la plus efficace : elle agrandit visuellement la pièce et simplifie l'entretien. Budget salle d'eau complète dans un studio : 4 000 à 8 000 € pose comprise.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Studio Paris : optimiser l'espace & prix au m² 2025 | Espace Design",
  description: "Rénover un studio parisien de 15 à 35 m² : optimisation espace, rangements intégrés, kitchenette, salle de bain. Prix au m² et conseils artisan 2025.",
  keywords: "rénovation studio Paris, aménagement studio Paris, prix rénovation studio Paris",
}

export default function ArticleRenovationStudioParis() {
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
            Rénovation Studio Paris : optimiser l&apos;espace &amp; prix au m² 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Rénover un studio parisien de 15 à 35 m² est un exercice d&apos;optimisation : chaque centimètre compte. Rangements intégrés, kitchenette sur-mesure, salle d&apos;eau compacte, isolation phonique en copropriété — voici le guide complet 2025 pour transformer votre studio sans gaspiller d&apos;espace ni de budget.
          </p>
        </div>
      </section>

      {/* Section 1 — Problématiques spécifiques */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les défis spécifiques du studio parisien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Un studio parisien cumule plusieurs contraintes que l&apos;on ne retrouve pas dans un appartement classique : surface réduite (souvent 18 à 30 m²), pièce unique sans séparation naturelle, et normes copropriété strictes. Ces contraintes imposent une approche de rénovation radicalement différente.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Les immeubles haussmanniens offrent des plafonds hauts (2,80 m à 3,20 m) qui permettent les mezzanines, mais des planchers bois anciens qui compliquent la pose de chapes. Les immeubles des années 60 ont des plafonds bas (2,50 m), limitant les possibilités en hauteur mais simplifiant les travaux de sol.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Absence de cloisonnement : zones nuit et vie confondues',
                  detail: "Dans un studio, salon, chambre et parfois cuisine occupent la même pièce. L'enjeu est de créer des zones distinctes sans poser de cloisons qui réduiraient encore la surface. Solutions : lit mezzanine, cloison mi-hauteur, bibliothèque ouverte en séparateur, changement de sol ou de niveau de plafond pour différencier les zones visuellement.",
                },
                {
                  enjeu: 'Rangements structurellement insuffisants',
                  detail: "Un studio parisien manque structurellement de rangements. La rénovation est l'occasion de créer des rangements intégrés sur-mesure : placards jusqu'au plafond (gain de 30 à 50 cm en hauteur), lit coffre avec rangement intégré, banquette-coffre sous fenêtre, niche dans les murs non porteurs. Un artisan compétent peut identifier chaque recoin exploitable.",
                },
                {
                  enjeu: 'Cuisine et salle de bain dans de petits espaces',
                  detail: "Dans un studio, la cuisine (souvent une kitchenette de 2 à 3 ml) et la salle d'eau (3 à 4 m²) occupent une part importante de la surface totale. L'optimisation de ces deux espaces est critique : cuisine sur-mesure encastrée, plan de travail dépliable, douche à l'italienne sans receveur, WC suspendus pour gagner de l'espace au sol.",
                },
                {
                  enjeu: 'Isolation phonique obligatoire en copropriété',
                  detail: "En copropriété parisienne, tout remplacement de sol (carrelage, parquet) doit respecter un indice d'isolement acoustique aux bruits d'impact. Cela impose systématiquement une sous-couche acoustique, ce qui modifie les hauteurs de sol et peut nécessiter de rogner sur les plinthes. Ignorer cette règle expose à des conflits de voisinage et des mises en demeure du syndic.",
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

      {/* Section 2 — Rangements intégrés */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rangements intégrés : les solutions les plus efficaces
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un studio, les rangements sur-mesure ne sont pas un luxe — ils sont la condition sine qua non d&apos;une vie confortable. Voici les solutions les plus efficaces, classées par impact sur la qualité de vie.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Lit mezzanine avec bureau dessous',
                solution: "La solution la plus radicale pour un studio avec plafonds hauts (minimum 2,80 m). Le lit est surélevé à 1,60–1,80 m, libérant dessous un bureau ou un canapé. Les modèles sur-mesure permettent d'intégrer des rangements dans les montants et les marches.",
                cout: '2 500 – 6 000 €',
              },
              {
                titre: 'Placards sol-plafond sur un pan de mur',
                solution: "Exploiter un mur entier du sol au plafond avec des placards coulissants. Sur 3 m de large × 2,70 m de hauteur, on crée environ 8 m² de rangement vertical. Le placage sur mesure permet d'intégrer dressing, bibliothèque et rangements ménagers dans un seul meuble.",
                cout: '1 500 – 4 000 €',
              },
              {
                titre: 'Lit coffre avec rangement intégré',
                solution: "Pour les studios avec plafonds bas (< 2,70 m) où la mezzanine est impossible. Le sommier à coffre permet de stocker draps, valises, affaires saisonnières. S'intègre dans la rénovation avec une tête de lit murale sur-mesure et des chevets flottants.",
                cout: '800 – 2 000 €',
              },
              {
                titre: 'Banquette-coffre sous fenêtre',
                solution: "L'espace sous les fenêtres (souvent inexploité dans les studios parisiens) peut accueillir une banquette avec coffre de rangement : idéal pour stocker livres, matériel de sport, affaires diverses. Sert aussi d'assise supplémentaire.",
                cout: '600 – 1 500 €',
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

      {/* Section 3 — Cuisine et salle de bain */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Kitchenette ou vraie cuisine ? Salle d&apos;eau optimisée dans un studio
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            Dans un studio, chaque m² de cuisine ou salle de bain est un m² de moins dans la pièce de vie. L&apos;enjeu est de trouver le bon équilibre entre confort d&apos;usage et surface préservée.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Kitchenette encastrée (linéaire 1,80 à 2,40 m)',
                prix: '2 500 – 5 000 €',
                detail: "La solution standard pour les studios : plan de travail avec évier, plaques à induction (2 feux), four encastré et réfrigérateur compact. Les colonnes hautes de part et d'autre maximisent le rangement. Porte coulissante ou volet japonais pour masquer la cuisine en soirée. Un artisan peut créer un meuble cuisine sur-mesure pour exploiter exactement la niche disponible.",
              },
              {
                type: 'Cuisine semi-ouverte avec plan bar',
                prix: '4 000 – 9 000 €',
                detail: "Pour les studios de 25 m² et plus : une cuisine en L ou en U avec un plan de travail prolongé en bar (hauteur 90 cm, 2 à 3 tabourets). Cette configuration sépare visuellement la cuisine de la pièce de vie sans cloison, et crée un espace repas sans table dédiée. Nécessite parfois de déplacer la colonne d'eau — à vérifier avec le syndic.",
              },
              {
                type: "Salle d'eau avec douche italienne",
                prix: '4 000 – 8 000 €',
                detail: "La salle d'eau à l'italienne (douche sans receveur, sol carrelé en continuité) est la meilleure option dans un studio : elle s'intègre dans 3 m², agrandit visuellement la pièce et simplifie l'entretien. WC suspendus, vasque à poser sur meuble fin (40 cm de profondeur), miroir éclairé LED pour la luminosité. Ventilation VMC obligatoire.",
              },
              {
                type: "WC séparés ou intégrés dans la salle d'eau",
                prix: '1 500 – 3 500 €',
                detail: "Dans un studio parisien, les WC séparés sont rares (pas assez de surface). La solution la plus répandue est d'intégrer les WC dans la salle d'eau avec une séparation visuelle (cloison basse, rideau, séparateur en verre). Si les WC sont dans un réduit séparé, les ouvrir sur la salle d'eau améliore nettement le confort.",
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

      {/* Section 4 — Isolation phonique */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Isolation phonique en copropriété parisienne
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            En copropriété parisienne, le règlement impose souvent des contraintes acoustiques lors de tout changement de revêtement de sol. La rénovation d&apos;un studio est l&apos;occasion idéale de traiter l&apos;isolation phonique de fond en comble : sol, murs mitoyens, plafond si nécessaire.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Sous-couche acoustique sous parquet ou stratifié',
                solution: "Obligatoire dans la plupart des copropriétés parisiennes. Les sous-couches en polyéthylène mousse (2–3 mm) sont insuffisantes : préférer les sous-couches en polyuréthane haute densité (5–8 mm) ou les panneaux d'isolation acoustique rigides sous carrelage. Réduction des bruits d'impact : 18 à 22 dB.",
                cout: '8 – 25 €/m²',
              },
              {
                titre: 'Doublage mur mitoyen avec voisin bruyant',
                solution: "Si le bruit vient d'un mur mitoyen : doublage intérieur en placo avec laine de roche 45 mm (perte de 5–6 cm d'épaisseur). Gain acoustique : 30 à 40 dB. Dans un studio, cette perte de surface est à peser soigneusement avant décision.",
                cout: '80 – 150 €/m²',
              },
              {
                titre: 'Plafond suspendu acoustique',
                solution: "Si le bruit vient des voisins du dessus. Plafond suspendu en rail antivibratile avec laine de verre 60 mm : gain 8 à 12 dB sur les bruits d'impact. Perte de hauteur : 8 à 12 cm — à éviter dans les studios avec plafonds bas déjà limités.",
                cout: '60 – 120 €/m²',
              },
              {
                titre: 'Joints de porte et colmatage des passages',
                solution: "Les bruits aériens (voix, télévision) passent principalement par les espaces autour des portes et les gaines techniques. Joints brosse sous les portes, joints d'étanchéité sur le cadre, calfeutrage des passages de gaines avec mousse acoustique expansive. Solution souvent très efficace pour un faible coût.",
                cout: '100 – 400 €',
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

      {/* Section 5 — Tableau prix par surface */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix rénovation studio Paris 2025 : tableau par surface
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les fourchettes ci-dessous s&apos;entendent pour un studio parisien, toutes prestations incluses (main d&apos;œuvre + matériaux), hors mobilier. Trois niveaux de finition : rénovation légère (peinture + sol), rénovation complète (électricité + plomberie + cuisine + salle de bain), rénovation haut de gamme (sur-mesure, matériaux premium).
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Surface</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Rénovation légère</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Rénovation complète</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Haut de gamme</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { surface: 'Studio 15 m²', legere: '4 000 – 7 000 €', complete: '12 000 – 20 000 €', premium: '20 000 – 32 000 €' },
                  { surface: 'Studio 20 m²', legere: '5 500 – 9 000 €', complete: '15 000 – 26 000 €', premium: '26 000 – 40 000 €' },
                  { surface: 'Studio 25 m²', legere: '7 000 – 11 000 €', complete: '18 000 – 32 000 €', premium: '32 000 – 48 000 €' },
                  { surface: 'Studio 30 m²', legere: '8 500 – 13 000 €', complete: '22 000 – 38 000 €', premium: '38 000 – 56 000 €' },
                  { surface: 'Prix au m² moyen', legere: '350 – 500 €/m²', complete: '750 – 1 200 €/m²', premium: '1 200 – 1 800 €/m²' },
                ].map((row, i) => (
                  <tr key={row.surface} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.surface}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.legere}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.complete}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Checklist avant de lancer la rénovation de votre studio
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Vérifier le règlement de copropriété (restrictions sur les matériaux, horaires travaux)',
                'Identifier les murs porteurs avant tout percement ou modification de cloison',
                "Déclarer les travaux à la mairie si modification de l'aspect extérieur ou des fenêtres",
                'Prévoir les contraintes acoustiques : sous-couche sol obligatoire en copropriété',
                "Évaluer la hauteur sous plafond avant d'envisager une mezzanine (minimum 2,80 m)",
                "Obtenir l'accord du syndic avant tout déplacement de colonne d'eau ou de gaz",
                'Prévoir un logement de remplacement pendant les travaux (généralement 4 à 8 semaines)',
                'Demander 3 devis à des artisans qualifiés avec détail des postes de travaux',
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
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/renovation-cuisine-paris', title: 'Rénovation cuisine Paris' },
              { href: '/blog/renovation-loft-paris', title: 'Rénovation loft Paris' },
              { href: '/blog/peinture-enduit-paris', title: 'Peinture et enduit Paris' },
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
          Optimisez votre studio parisien avec Espace Design
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisan qualifié, intervention Paris et Île-de-France.
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
