import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation WC Paris', item: 'https://espacedesignparis.fr/blog/renovation-wc-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation WC Paris : carrelage, faïence & prix 2025 | Espace Design',
  description: 'Rénover ses WC à Paris : carrelage, faïence, WC suspendu, lave-mains. Prix, délais, artisans. Guide complet 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-wc-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation de WC à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation de WC à Paris varie selon l'ampleur des travaux : un simple rafraîchissement (peinture + nouveau WC classique) revient à 500 – 1 500 €. Une rénovation standard avec carrelage et WC suspendu coûte 1 500 – 3 000 €. Une rénovation complète avec lave-mains intégré, faïence sur mesure et installation électrique mise aux normes atteint 3 000 – 5 000 €. La pose d'un WC suspendu représente à elle seule 600 à 1 200 € de main d'œuvre (bâti support + habillage).",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps prend la rénovation de WC ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un rafraîchissement (peinture + remplacement WC classique) se fait en 1 à 2 jours. Une rénovation standard avec carrelage et WC suspendu nécessite 3 à 5 jours ouvrés (dépose, plomberie, carrelage, séchage joints, installation sanitaire). Une rénovation complète avec lave-mains et travaux électriques demande 5 à 8 jours. Prévoir une interruption d'usage des WC pendant 2 à 3 jours minimum au minimum lors d'une rénovation standard.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on installer un WC suspendu dans un immeuble ancien parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, dans la grande majorité des cas. Le WC suspendu s'installe sur un bâti support en acier fixé aux murs (et non au plancher), ce qui le rend compatible avec les planchers en bois des immeubles anciens. La contrainte principale est la colonne montante : dans les immeubles haussmanniens, les évacuations sont souvent en fonte et en pente fixe — vérifiez que la hauteur d'évacuation est compatible avec le bâti support (généralement 220 à 230 mm). Un plombier expérimenté en immeuble ancien saura le confirmer lors d'un diagnostic.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation WC Paris : carrelage, faïence & prix 2025 | Espace Design',
  description: 'Rénover ses WC à Paris : carrelage, faïence, WC suspendu, lave-mains. Prix, délais, artisans. Guide complet 2025.',
}

export default function ArticleRenovationWC() {
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
            Plomberie
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation WC Paris : carrelage, faïence & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Rénover ses toilettes à Paris, c&apos;est composer avec les contraintes des immeubles anciens : colonnes montantes en fonte, hauteurs sous plafond limitées, voisinage proche. WC suspendu, carrelage, lave-mains intégré : guide complet avec prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Contraintes immeubles anciens */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Rénover ses toilettes à Paris : contraintes des immeubles anciens
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Les WC parisiens dans les immeubles haussmanniens ou de la Belle Époque présentent des caractéristiques techniques spécifiques qui conditionnent les choix de rénovation. Ignorer ces contraintes peut mener à des travaux plus longs et plus coûteux que prévu.
            </p>
            <div className="space-y-4">
              {[
                {
                  contrainte: 'Colonnes montantes en fonte',
                  detail: "La plupart des immeubles parisiens d'avant 1960 disposent d'évacuations en fonte sur colonne montante partagée. La pente d'évacuation est fixe et ne peut être modifiée sans accord de la copropriété. Cela impose une hauteur d'évacuation précise lors de l'installation d'un WC suspendu. Un mauvais raccordement peut créer des reflux ou du bruit pour les voisins.",
                },
                {
                  contrainte: 'Hauteur sous plafond variable',
                  detail: "Dans les WC parisiens en demi-niveau ou en entresol, la hauteur sous plafond peut descendre à 2,10 – 2,30 m. Cela limite le choix des formats de carrelage (grands formats déconseillés), complique la pose de faux-plafond et peut rendre le chantier difficile d'accès pour les artisans.",
                },
                {
                  contrainte: 'Surface réduite (1 à 2 m²)',
                  detail: "Un WC parisien standard mesure souvent 0,9 × 1,2 m à 1 × 1,5 m. Dans cet espace, la coactivité des corps de métier est impossible : plombier, carreleur et peintre doivent intervenir séquentiellement, ce qui allonge les délais.",
                },
                {
                  contrainte: 'Murs porteurs et canalisations cachées',
                  detail: "Avant tout percement pour fixation de bâti support ou installation de lave-mains, un diagnostic par détecteur de canalisations et de structures est indispensable. Dans les immeubles anciens, les alimentations en eau peuvent passer dans des endroits inattendus.",
                },
              ].map((el) => (
                <div key={el.contrainte} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.contrainte}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — WC suspendu vs classique */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            WC suspendu vs WC classique : avantages, installation, prix
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le WC suspendu s&apos;est imposé comme le standard des rénovations contemporaines à Paris. Son principal avantage : libérer le sol pour faciliter le nettoyage et agrandir visuellement l&apos;espace. Mais son installation est plus complexe et plus coûteuse qu&apos;un WC posé classique.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                type: 'WC posé classique',
                avantages: ['Installation simple et rapide (1 journée)', 'Coût inférieur (matériel + pose : 300 – 700 €)', 'Compatible avec tous les supports', 'Réparation facile'],
                inconvenients: ['Sol plus difficile à nettoyer autour du pied', 'Réservoir apparent (esthétique moins épurée)', 'Moins valorisant à la revente'],
                cout: '300 – 700 €',
              },
              {
                type: 'WC suspendu (bâti support)',
                avantages: ['Sol entièrement dégagé → nettoyage facile', 'Réservoir caché dans la cloison', 'Hauteur réglable (confort personnalisé)', 'Esthétique contemporaine valorisante'],
                inconvenients: ['Installation complexe (bâti support + habillage)', 'Coût plus élevé (matériel + pose : 800 – 1 800 €)', 'Accès au réservoir via trappe de visite'],
                cout: '800 – 1 800 €',
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="mb-3">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Avantages</div>
                  <ul className="space-y-1">
                    {el.avantages.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-xs text-gray-600 font-light">
                        <CheckCircle size={12} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Points de vigilance</div>
                  <ul className="space-y-1">
                    {el.inconvenients.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600 font-light">
                        <span className="w-3 h-px bg-gray-400 flex-shrink-0 mt-2" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-2">Notre recommandation</div>
            <div className="text-gray-400 text-sm font-light leading-relaxed">
              Pour une rénovation complète des WC à Paris, le WC suspendu est le meilleur investissement sur le long terme : plus facile à nettoyer, plus valorisant et sans impact sur les planchers bois des immeubles anciens (fixation mural). Si le budget est limité, un WC posé avec réservoir bas offre déjà une belle esthétique pour 2 à 3 fois moins cher.
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Revêtements */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Revêtements : carrelage, faïence, peinture hydrofuge, résine
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un WC de 1 à 2 m², le revêtement mural est l&apos;élément décoratif dominant. Le choix du matériau conditionne l&apos;ambiance, la facilité d&apos;entretien et la résistance à l&apos;humidité sur la durée.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Revêtement</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix posé (€/m²)</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Résistance humidité</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée de vie</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mat: 'Faïence murale standard', prix: '35 – 80 €', humidite: 'Excellente', duree: '20 – 30 ans' },
                  { mat: 'Grès cérame grand format', prix: '60 – 120 €', humidite: 'Excellente', duree: '30+ ans' },
                  { mat: 'Peinture hydrofuge', prix: '20 – 40 €', humidite: 'Bonne (hors projections)', duree: '5 – 10 ans' },
                  { mat: 'Résine époxy', prix: '60 – 100 €', humidite: 'Très bonne', duree: '10 – 15 ans' },
                  { mat: 'Béton ciré mural', prix: '80 – 120 €', humidite: 'Bonne (avec protection)', duree: '8 – 15 ans' },
                ].map((row, i) => (
                  <tr key={row.mat} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.mat}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.humidite}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-3">
            {[
              {
                titre: 'Carrelage sol : les formats adaptés aux WC parisiens',
                texte: "Dans un WC de moins de 2 m², les grands formats (60×60 et plus) sont techniquement possibles mais peu recommandés : les coupes sont nombreuses, les pertes importantes et l'effet peut écraser l'espace. Privilégiez les formats 20×20, 30×30 ou les carreaux de ciment (15×15) pour les petites surfaces. Le format hexagonal est très tendance et adapté aux petits espaces.",
              },
              {
                titre: 'Faïence murale : pleine hauteur ou mi-hauteur ?',
                texte: "La faïence pleine hauteur (du sol au plafond) est la solution la plus résistante à l'humidité et la plus facile à nettoyer. La faïence mi-hauteur (jusqu'à 1,20 – 1,50 m) suivie d'une peinture hydrofuge est moins coûteuse mais expose la partie haute aux projections sur le long terme. Pour un WC ventilé mécaniquement (VMC), la mi-hauteur suffit généralement.",
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

      {/* Section 4 — Lave-mains */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Lave-mains intégré : tendances, prix et contraintes plomberie
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;installation d&apos;un lave-mains dans des WC séparés est une tendance forte à Paris, portée par les rénovations qui cherchent à maximiser l&apos;autonomie de la pièce. Elle nécessite cependant d&apos;amener une alimentation en eau froide (et parfois chaude) et une évacuation dans un espace souvent dépourvu de ces éléments.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Lave-mains angle (solution compacte)',
                prix: '150 – 400 €',
                detail: "Format ultra-compact (25×25 cm) conçu pour les angles. Profondeur réduite qui libère la circulation. Idéal pour les WC de 0,9 × 1,2 m. Robinetterie intégrée ou séparée. Évacuation directe dans le même siphon que le WC possible selon configuration.",
                travaux: 'Plomberie : 300 – 600 €',
              },
              {
                type: 'Lave-mains suspendu design',
                prix: '200 – 600 €',
                detail: "Vasque suspendue contemporaine, finitions céramique, pierre de synthèse ou béton. S'intègre parfaitement avec un WC suspendu pour une esthétique épurée cohérente. Meuble sous-vasque possible pour rangement papier WC et produits.",
                travaux: 'Plomberie : 400 – 800 €',
              },
              {
                type: 'WC avec lave-mains intégré (réservoir)',
                prix: '350 – 900 €',
                detail: "Système tout-en-un : l'eau de rinçage du lave-mains alimente la chasse d'eau. Ingénieux en termes d'économie d'eau et de surface. S'installe comme un WC posé standard — pas d'alimentation supplémentaire nécessaire.",
                travaux: 'Comme WC classique : 300 – 600 €',
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed mb-2">{el.detail}</div>
                <div className="text-xs text-gray-500 font-light italic">{el.travaux}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-2">Contrainte plomberie à Paris</div>
            <div className="text-gray-400 text-sm font-light leading-relaxed">
              Si vos WC n&apos;ont pas de lave-mains, l&apos;alimentation en eau doit être amenée depuis la pièce adjacente (salle de bain ou cuisine). Ce travail de plomberie — percées, raccordements, habillage — représente généralement 400 à 1 000 € supplémentaires selon la distance et l&apos;accessibilité. Vérifiez également que votre immeuble autorise les travaux de plomberie dans les WC séparés (certains règlements de copropriété imposent un accord préalable).
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget complet rénovation WC à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs 2025 pour des WC standard (1 à 1,5 m²) à Paris, main d&apos;œuvre et matériaux inclus.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations incluses</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Délai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture murs + plafond, remplacement WC classique, sol vinyle',
                    budget: '500 – 1 500 €',
                    delai: '1 – 2 jours',
                  },
                  {
                    niveau: 'Rénovation standard',
                    prestations: 'Carrelage sol + faïence mi-hauteur, WC suspendu, robinetterie neuve',
                    budget: '1 500 – 3 000 €',
                    delai: '3 – 5 jours',
                  },
                  {
                    niveau: 'Rénovation complète',
                    prestations: 'Faïence pleine hauteur, WC suspendu haut de gamme, lave-mains, électricité aux normes',
                    budget: '3 000 – 5 000 €',
                    delai: '5 – 8 jours',
                  },
                  {
                    niveau: 'Haut de gamme / design',
                    prestations: 'Grand format, marque premium, lave-mains design, éclairage encastré, domotique',
                    budget: '5 000 – 8 000 €',
                    delai: '8 – 12 jours',
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
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
              Conseils pour optimiser votre rénovation WC
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Profitez de la rénovation des WC pour mettre la VMC aux normes — une bonne ventilation est la meilleure protection contre l\'humidité',
                'Si les canalisations sont vétustes (plomb, fonte rouillée), remplacez-les pendant le chantier — l\'accès ne sera pas plus facile plus tard',
                'Choisissez un carrelage de sol antidérapant (R9 minimum) même en WC — les projections rendent le sol glissant',
                'Un éclairage LED encastré au plafond transforme l\'ambiance d\'un WC pour 200 à 400 € — c\'est le meilleur rapport qualité/effet',
                'Posez un miroir même dans un WC sans lave-mains — il agrandit visuellement l\'espace',
                'Demandez à l\'artisan de prévoir une trappe de visite accessible devant le réservoir du WC suspendu',
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
              { href: '/plomberie-paris', title: 'Plomberie Paris' },
              { href: '/carrelage-paris', title: 'Carrelage Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/plomberie-appartement-paris', title: 'Plomberie appartement Paris' },
              { href: '/blog/carrelage-appartement-paris', title: 'Carrelage appartement Paris' },
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
              { href: '/renovation-paris-1er', label: 'Paris 1er' },
              { href: '/renovation-paris-2e', label: 'Paris 2e' },
              { href: '/renovation-paris-3e', label: 'Paris 3e' },
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-5e', label: 'Paris 5e' },
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly' },
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
          Renovez vos WC avec des artisans parisiens spécialisés
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Plombier, carreleur et peintre coordonnés.
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
