import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Renovation Entree Appartement Paris", item: 'https://espacedesignparis.fr/blog/renovation-entree-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Renovation Entree Appartement Paris : idees & prix artisan 2025",
  description: "Comment renover l'entree de son appartement a Paris : amenagement couloir, miroirs, rangements, revetements sol et mur, luminaires. Prix artisan 2025.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-entree-appartement-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel budget prevoir pour renover l'entree d'un appartement a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le budget pour renover l'entree d'un appartement a Paris varie de 800 a 6 000 euros selon la surface et le niveau de prestations. Un rafraichissement (peinture + sol vinyle) revient a 800 - 1 500 euros pour 4 m². Une renovation complete avec parquet, peinture preparee, penderie sur mesure et eclairage multi-sources coute entre 3 000 et 6 000 euros. Une entree haut de gamme (marbre, menuiserie laquee, domotique) peut depasser 10 000 euros.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel revetement de sol choisir pour une entree d'appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une entree d'appartement parisien, le carrelage en gres cerame (40 - 90 euros/m² pose) est le choix le plus durable et le plus facile d'entretien. Le parquet chene massif (80 - 180 euros/m² pose) offre une coherence avec le sejour et valorise le bien. Le sol vinyle LVT (25 - 60 euros/m² pose) est le meilleur rapport qualite/prix pour les budgets contraints. Evitez la moquette en entree : elle retient la poussiere et se salit rapidement.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment agrandir visuellement un petit couloir d'entree a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour agrandir visuellement un petit couloir d'entree parisien : posez un grand miroir plein-cadre face a la porte d'entree (effet de doublement de l'espace), choisissez une peinture claire (blanc casse, lin, gris pale, LRV superieur a 75), optez pour un sol pose en diagonale pour allonger la perspective, privilegiez un eclairage en plusieurs sources (spot plafond + applique murale) et choisissez un mobilier suspendu au sol degage pour alleguer l'espace.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il une autorisation pour renover l'entree de son appartement a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La renovation interieure d'une entree (peinture, sol, rangements) ne necessite aucune autorisation administrative. En revanche, si les travaux touchent les parties communes de la copropriete (porte paliere, revetement de palier, boites aux lettres), une autorisation de l'assemblee generale est obligatoire. Pour toute modification de cloison portante, un permis de construire ou une declaration de travaux peut etre requis selon l'ampleur du chantier.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Renovation Entree Appartement Paris : idees & prix artisan 2025 | Espace Design",
  description: "Renover l'entree de son appartement a Paris : amenagement couloir, miroirs, rangements, revetements, luminaires. Prix artisan 2025.",
  keywords: [
    'renovation entree appartement Paris',
    'amenagement couloir Paris',
    'artisan renovation entree Paris',
    'prix renovation entree Paris',
    'petit couloir appartement Paris',
    'miroir entree Paris',
    'rangements entree Paris',
    'revetement sol entree Paris',
  ],
}

export default function ArticleRenovationEntreeAppartement() {
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
            Rénover son Entrée à Paris : idées, matériaux & prix artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            L&apos;entrée d&apos;un appartement parisien est souvent la pièce la plus négligée — et pourtant la première perçue. Couloir étroit, absence de lumière naturelle, rangements inexistants : autant de contraintes que l&apos;artisan sait transformer en atouts. Sol durable, miroirs, penderie encastrée, éclairage multicouche — guide complet et prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Enjeux spécifiques de l'entrée parisienne */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les défis de l&apos;entrée parisienne : étroitesse, obscurité, désorganisation
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Dans les appartements parisiens — qu&apos;ils soient haussmanniens, d&apos;après-guerre ou contemporains — l&apos;entrée oscille généralement entre 3 et 8 m², avec un couloir de 1,10 à 1,60 m de large. Cette configuration impose des contraintes fortes : absence de lumière naturelle, circulation difficile et rangements réduits.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Pourtant, l&apos;entrée est la pièce qui concentre le plus de flux quotidiens : chaussures, manteaux, courrier, parapluies, poussettes. Une entrée bien rénovée améliore concrètement le quotidien, valorise l&apos;appartement à la revente et crée la première impression sur les visiteurs.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Couloir sans lumière naturelle',
                  detail: "La quasi-totalité des entrées parisiennes sont dépourvues de fenêtre. L'éclairage artificiel est la seule ressource lumineuse. Un plan d'éclairage bien pensé (spot encastré + applique + ruban LED) transforme radicalement un couloir sombre en espace accueillant.",
                },
                {
                  enjeu: 'Surface contrainte et circulation difficile',
                  detail: "Un couloir de 1,10 à 1,40 m de large ne tolère pas les meubles encombrants. Tout mobilier doit être adossé au mur, de préférence suspendu (sol dégagé = impression d'espace). La hauteur sous plafond — souvent 2,70 à 3,20 m — est la ressource à exploiter en priorité.",
                },
                {
                  enjeu: 'Résistance aux passages intensifs',
                  detail: "L'entrée subit des passages avec chaussures humides ou boueuses, des valises à roulettes, des vélos ou poussettes selon les familles. Le revêtement de sol et de mur (à hauteur de mains, environ 90 cm) doit être résistant aux chocs et facile à nettoyer.",
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

      {/* Section 2 — Revêtements sol et mur */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Revêtements sol & mur : durabilité et esthétique
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le sol et les murs de l&apos;entrée sont les deux postes les plus visibles et les plus sollicités. Leurs revêtements conditionnent l&apos;entretien quotidien, la durée de vie de la rénovation et la cohérence avec le reste du logement.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Revêtement sol</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix posé (€/m²)</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durabilité</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Entretien</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mat: 'Carrelage grès cérame', prix: '40 – 90 €', durabilite: 'Excellente (30+ ans)', entretien: 'Très facile' },
                  { mat: 'Parquet chêne massif', prix: '80 – 180 €', durabilite: 'Excellente (50+ ans)', entretien: 'Facile' },
                  { mat: 'Carrelage grand format 60×60', prix: '60 – 120 €', durabilite: 'Excellente', entretien: 'Très facile' },
                  { mat: 'Sol vinyle LVT', prix: '25 – 60 €', durabilite: 'Bonne (15-20 ans)', entretien: 'Très facile' },
                  { mat: 'Béton ciré', prix: '80 – 150 €', durabilite: 'Très bonne', entretien: 'Moyen' },
                ].map((row, i) => (
                  <tr key={row.mat} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.mat}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.durabilite}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.entretien}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-3">Revêtements muraux : peinture, faïence et lambris</h3>
          <div className="space-y-3 mb-6">
            {[
              {
                type: 'Peinture satinée ou semi-brillante',
                prix: '15 – 35 €/m²',
                detail: "Finition satinée recommandée en entrée : plus résistante aux traces de mains et lavable à l'eau. Choisir une teinte claire (LRV > 70) pour maximiser la luminosité dans un couloir sans fenêtre. Application en 2 couches après impression sur murs anciens.",
              },
              {
                type: 'Soubassement en faïence ou carrelage mural',
                prix: '40 – 90 €/m²',
                detail: "Traitement des 90 premiers centimètres de mur en faïence ou carrelage. Très pratique pour les entrées à fort passage : résistant aux impacts, lavable, imperméable. Aspect contemporain ou traditionnel selon le format et la couleur choisis.",
              },
              {
                type: 'Lambris ou boiseries',
                prix: '50 – 120 €/m²',
                detail: "Le lambris à mi-hauteur apporte chaleur et caractère à une entrée. Dans les appartements haussmanniens, les boiseries peintes en blanc cassé sont cohérentes avec l'architecture d'époque. Les panneaux MDF peints offrent un rendu similaire à moindre coût.",
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-2">Notre recommandation</div>
            <div className="text-gray-400 text-sm font-light leading-relaxed">
              Si l&apos;appartement dispose d&apos;un parquet en chêne dans le séjour, prolonger le même parquet dans l&apos;entrée crée une cohérence optimale et agrandit visuellement l&apos;espace. Si l&apos;entrée présente un changement de niveau ou un passage fréquent avec chaussures, le carrelage grand format est la solution la plus durable et la plus facile d&apos;entretien.
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Rangements */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rangements fonctionnels : penderie, vestiaire et meuble à chaussures
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Une entrée sans rangements organisés devient rapidement invivable. Dans l&apos;appartement parisien où chaque mètre carré est précieux, les rangements d&apos;entrée doivent être pensés en 3D : du sol au plafond, avec des profondeurs adaptées aux manteaux (minimum 60 cm) et aux chaussures (25 à 35 cm suffisent).
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Penderie encastrée sur mesure',
                prix: '1 200 – 3 500 €',
                detail: "Solution optimale pour les entrées de plus de 1,40 m de large. Portes coulissantes pour ne pas gêner la circulation, intérieur avec double penderie, tablettes superposées et tiroirs à chaussures. Peut intégrer un grand miroir en façade pour agrandir visuellement le couloir.",
              },
              {
                type: 'Vestiaire mural compact',
                prix: '400 – 1 200 €',
                detail: "Banquette avec espace chaussures intégré en dessous, crochets muraux et tablette supérieure. Solution idéale pour les entrées étroites de moins de 1,20 m. Fonctionnel pour les familles : chaque occupant a son espace clairement défini.",
              },
              {
                type: 'Meuble d\'entrée suspendu avec miroir',
                prix: '600 – 1 800 €',
                detail: "Meuble bas fixé au mur avec sol entièrement dégagé. Légèreté visuelle maximale. Intègre un espace chaussures et un miroir vertical. Parfait pour les couloirs étroits où un meuble posé au sol réduirait encore davantage la circulation.",
              },
              {
                type: 'Armoire du sol au plafond',
                prix: '2 000 – 5 000 €',
                detail: "Armoire menuisée sur mesure exploitant toute la hauteur sous plafond (souvent 2,70 à 3,20 m à Paris). Volume de rangement deux à trois fois supérieur à une armoire standard. Façades miroir ou laquées selon le style de l'appartement.",
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

      {/* Section 4 — Miroirs et luminaires */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Miroirs & luminaires : les deux leviers pour agrandir un couloir
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans une entrée sans lumière naturelle, le miroir et l&apos;éclairage sont les deux investissements les plus efficaces. Un grand miroir plein-cadre peut littéralement doubler l&apos;espace perçu, tandis qu&apos;un éclairage multicouche bien conçu transforme l&apos;atmosphère d&apos;un couloir sombre.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Grand miroir plein-cadre (>120 cm)',
                solution: "Positionné face à la porte d'entrée ou sur le mur le plus long du couloir. Crée un effet de profondeur et double visuellement la surface. Encadrement en laiton brossé ou bois naturel pour un style cohérent. Budget : 150 - 600 € selon le format.",
                cout: '150 – 600 €',
              },
              {
                titre: 'Miroir éclairant rétroéclairé LED',
                solution: "Combine l'effet agrandissant du miroir et la fonction d'éclairage. Rétroéclairage LED doux en pourtour, température de couleur 2 700 K recommandée. Idéal pour les petites entrées où l'espace manque pour des luminaires séparés.",
                cout: '200 – 700 €',
              },
              {
                titre: 'Spot encastré LED au plafond',
                solution: "Éclairage général uniforme. Optez pour des spots orientables pour éclairer la zone de la porte et le meuble d'entrée séparément. Température de couleur 2 700 – 3 000 K (blanc chaud) pour une entrée accueillante.",
                cout: '80 – 200 € / spot',
              },
              {
                titre: 'Applique murale + ruban LED',
                solution: "L'applique crée un éclairage d'ambiance latéral plus doux que le spot central. Le ruban LED sous-meuble ajoute un éclairage indirect au sol. Ces deux sources combinées aux spots plafond offrent une atmosphère haut de gamme.",
                cout: '150 – 450 €',
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

      {/* Section 5 — Budget global */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de la rénovation d&apos;entrée à Paris : budget par niveau de finition
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour une entrée de 4 à 6 m² à Paris, main d&apos;œuvre et matériaux inclus. Hors dépose d&apos;anciens revêtements (compter 15 à 25 €/m² supplémentaires si nécessaire).
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations incluses</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture murs + plafond, sol vinyle LVT',
                    total: '800 – 1 500 €',
                  },
                  {
                    niveau: 'Rénovation standard',
                    prestations: 'Carrelage ou parquet, peinture, éclairage spot, meuble vestiaire',
                    total: '2 000 – 4 000 €',
                  },
                  {
                    niveau: 'Rénovation complète',
                    prestations: 'Sol premium, peinture préparée, penderie sur mesure, éclairage multi-sources, miroir',
                    total: '4 000 – 7 000 €',
                  },
                  {
                    niveau: 'Haut de gamme',
                    prestations: 'Marbre ou parquet massif, menuiserie laquée, domotique, éclairage encastré, boiseries',
                    total: '7 000 – 15 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
            Conseils pour réussir la rénovation de son entrée
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Commencer par le sol — c'est le poste le plus impactant visuellement et le plus durable",
              "Toujours prévoir un grand miroir, même avec un budget serré : il transforme radicalement l'espace",
              "Choisir une peinture satinée ou semi-brillante sur les murs de l'entrée, plus résistante aux traces",
              "Planifier les rangements avant les travaux de finition — modifier une penderie encastrée après coup est coûteux",
              "Assurer la cohérence du sol entre l'entrée et le séjour si les deux espaces sont visibles en même temps",
              "Prévoir 10 à 15 % de budget imprévus pour les mauvaises surprises derrière les murs anciens",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
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
              { href: '/carrelage-paris', title: 'Carrelage Paris' },
              { href: '/menuiserie-paris', title: 'Menuiserie sur mesure Paris' },
              { href: '/blog/renovation-chambre-paris', title: 'Rénovation chambre Paris' },
              { href: '/blog/renovation-salon-paris', title: 'Rénovation salon Paris' },
              { href: '/blog/peinture-appartement-paris', title: 'Peinture appartement Paris' },
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
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne' },
              { href: '/renovation-saint-cloud', label: 'Saint-Cloud' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
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
          Votre entrée mérite une première impression parfaite
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisans spécialisés en rénovation parisienne.
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
