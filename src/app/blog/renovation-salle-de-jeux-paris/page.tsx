import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Aménagement Salle de Jeux Paris', item: 'https://espacedesignparis.fr/blog/renovation-salle-de-jeux-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Aménagement Salle de Jeux Paris : idées & prix 2025 | Espace Design',
  description: 'Créer ou rénover une salle de jeux pour enfants à Paris : sol souple, rangements, peinture. Prix et idées déco 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-salle-de-jeux-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le budget pour aménager une salle de jeux à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'aménagement d'une salle de jeux à Paris coûte entre 200 et 700 €/m² selon le niveau de finition. Pour une pièce de 10 m², comptez 2 000 – 4 000 € pour un aménagement de base (sol souple + peinture + rangements simples), 5 000 – 8 000 € pour une rénovation complète avec rangements sur mesure et isolation phonique, et jusqu'à 12 000 € pour une salle thématique avec menuiserie sur mesure et équipements spécialisés.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel revêtement de sol choisir pour une salle de jeux enfants à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une salle de jeux, le linoléum (25 à 50 €/m² posé) est la solution la plus recommandée : naturel, antidérapant, facile à nettoyer et résistant aux chocs. La moquette courte est une alternative appréciée pour son confort (30 à 60 €/m² posé). Les dalles mousse amovibles sont une option économique et pratique. Évitez le carrelage dur et les parquets vernis brillants, glissants et peu amortissants pour les chutes d'enfants.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle peinture utiliser dans une salle de jeux pour enfants ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une salle de jeux, choisissez impérativement une peinture sans COV (composés organiques volatils) ou à très faible teneur en COV, homologuée pour les pièces de vie des enfants. Les peintures lavables en finition mate ou satinée permettent de nettoyer les traces sans abîmer le support. Comptez 15 à 35 €/m² pour la fourniture et la pose. Évitez les peintures à solvants dans une pièce destinée aux enfants.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Aménagement Salle de Jeux Paris : idées & prix 2025 | Espace Design',
  description: 'Créer ou rénover une salle de jeux pour enfants à Paris : sol souple, rangements, peinture. Prix et idées déco 2025.',
}

export default function ArticleSalleDeJeux() {
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
            Aménagement Salle de Jeux Paris : idées & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Créer ou rénover une salle de jeux pour enfants à Paris demande de concilier sécurité, durabilité et plaisir. Sol souple, peinture sans COV, rangements adaptés et isolation phonique : guide complet et prix pour 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Sols adaptés aux enfants */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Revêtements de sol adaptés aux enfants : parquet, linoléum, moquette
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le sol d&apos;une salle de jeux doit répondre à des critères spécifiques : confort en cas de chute, facilité d&apos;entretien, résistance aux chocs et aux taches, et absence de produits toxiques. À Paris, les appartements disposent souvent d&apos;un parquet ancien qu&apos;il faut protéger ou recouvrir de manière adaptée.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Le choix du revêtement de sol conditionne aussi l&apos;isolation phonique vis-à-vis des voisins du dessous — enjeu crucial dans les immeubles parisiens où les bruits d&apos;impact se transmettent facilement.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Revêtement</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix posé (€/m²)</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Confort chute</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Entretien</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { mat: 'Linoléum naturel', prix: '25 – 50 €', confort: 'Bon', entretien: 'Très facile' },
                    { mat: 'Moquette velours courte', prix: '30 – 60 €', confort: 'Excellent', entretien: 'Moyen' },
                    { mat: 'Parquet contrecollé + sous-couche', prix: '50 – 100 €', confort: 'Moyen', entretien: 'Facile' },
                    { mat: 'Dalles mousse amovibles', prix: '15 – 30 €', confort: 'Excellent', entretien: 'Facile' },
                    { mat: 'Sol vinyle LVT', prix: '25 – 60 €', confort: 'Bon', entretien: 'Très facile' },
                  ].map((row, i) => (
                    <tr key={row.mat} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                      <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.mat}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prix}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.confort}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.entretien}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-[#1C1C1C] rounded-lg p-5">
              <div className="font-medium text-white text-sm mb-2">Notre recommandation pour une salle de jeux parisienne</div>
              <div className="text-gray-400 text-sm font-light leading-relaxed">
                Le linoléum naturel est notre premier choix : fabriqué à partir de matières naturelles (lin, résines, chanvre), il est sain, résistant et facile à entretenir. Posé sur une sous-couche résiliente, il offre également un bon amortissement phonique. Pour les petits (0-4 ans), les dalles mousse amovibles peuvent compléter un sol existant sans travaux.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Peinture sécurisée */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Peinture sécurisée sans COV pour une salle de jeux
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les enfants passent beaucoup de temps au sol, à proximité des murs. La qualité de l&apos;air intérieur est un enjeu de santé prioritaire dans une salle de jeux. Les peintures conventionnelles peuvent émettre des composés organiques volatils (COV) pendant des semaines après application — un risque à ne pas minimiser dans une pièce destinée aux enfants.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Peinture minérale à la chaux ou à l\'argile',
                prix: '20 – 40 €/m²',
                detail: 'Zéro COV, naturelle et respirante. Régule l\'humidité ambiante. Palette de teintes douces. Idéale pour les murs et plafonds. Moins lavable que les peintures synthétiques mais réapplicable facilement.',
              },
              {
                type: 'Peinture acrylique sans COV certifiée',
                prix: '15 – 35 €/m²',
                detail: 'Nombreuses marques proposent des gammes certifiées EC1 ou A+ (meilleure classe d\'émission). Finition lavable satinée recommandée pour résister aux traces de crayon et de peinture enfants. Large choix de couleurs.',
              },
              {
                type: 'Peinture ardoise ou tableau',
                prix: '25 – 50 €/m²',
                detail: 'Appliquée sur un pan de mur, elle transforme la surface en tableau sur lequel les enfants peuvent dessiner à la craie. Alternative créative et stimulante. Existe en version magnétique.',
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
          <div className="bg-[#FAFAF8] border border-gray-200 rounded-lg p-5">
            <div className="font-medium text-[#1C1C1C] text-sm mb-2">Couleurs tendance 2025 pour une salle de jeux</div>
            <div className="text-gray-600 text-sm font-light leading-relaxed">
              Les teintes douces et apaisantes sont recommandées pour favoriser la concentration et le jeu créatif : vert sauge, bleu ciel pâle, terra cotta doux, jaune miel. Une seule paroi en couleur forte (terracotta ou vert forêt) suffit à créer un effet dynamique sans surcharger l&apos;espace.
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Rangements sur mesure */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rangements sur mesure : bibliothèques, coffres et casiers
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Un bon système de rangement est la clé d&apos;une salle de jeux fonctionnelle et sûre. Il doit être accessible à l&apos;enfant (hauteur adaptée), solide (fixations murales pour les grandes pièces), et évolutif pour accompagner la croissance.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Bibliothèque basse sur mesure (h. 80 – 120 cm)',
                prix: '800 – 2 000 €',
                detail: 'Accessible à l\'enfant dès 2 ans. Tablettes adaptées à la hauteur selon l\'âge. Façades colorées ou en bois naturel. Bords arrondis obligatoires pour la sécurité. Fixation murale anti-basculement incluse.',
              },
              {
                type: 'Coffres à jouets intégrés',
                prix: '600 – 1 500 €',
                detail: 'Couvercle à fermeture lente sécurisée (anti-coincement de doigts). Double fonction : rangement + assise ou table de jeu. Peut s\'intégrer sous une fenêtre ou en bout de pièce pour optimiser l\'espace.',
              },
              {
                type: 'Casiers modulables du sol au plafond',
                prix: '1 500 – 4 000 €',
                detail: 'Système de casiers ouverts ou avec portes, répartis sur toute la hauteur. Les parties basses (à hauteur enfant) sont ouvertes pour l\'accès autonome, les parties hautes (adulte) ferment à clé pour les objets fragiles ou dangereux.',
              },
              {
                type: 'Coin lecture intégré avec rangements',
                prix: '1 200 – 3 500 €',
                detail: 'Banquette avec coffre de rangement, encadrée de bibliothèques basses. Coussin confort amovible. Un espace cocooning dans la salle de jeux qui encourage la lecture et le calme.',
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
            Isolation phonique : plancher flottant et solutions acoustiques
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un appartement parisien, une salle de jeux sans isolation phonique est source de conflits de voisinage. Les bruits d&apos;impact (sauts, courses, chutes de jouets) se transmettent directement dans les dalles béton ou planchers bois. Un traitement acoustique efficace est indispensable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Plancher flottant + sous-couche résiliente',
                solution: 'La solution la plus efficace contre les bruits d\'impact. Une sous-couche en mousse polyuréthane ou en laine de roche (8 à 15 mm) posée sous le revêtement de sol absorbe les chocs. Gain : 15 à 22 dB sur les bruits d\'impact.',
                cout: '15 – 30 €/m²',
              },
              {
                titre: 'Dalle flottante sèche',
                solution: 'Pour une isolation renforcée : plaques de plâtre haute densité posées sur plots résilients, recouvertes du revêtement de sol. Traite également le plancher chauffant. Gain : 20 à 28 dB.',
                cout: '40 – 80 €/m²',
              },
              {
                titre: 'Panneau acoustique mural',
                solution: 'Panneaux en laine de bois, liège ou mousse acoustique posés sur les murs. Réduisent la réverbération sonore dans la pièce et le bruit transmis aux pièces adjacentes. Peuvent être esthétiques (colorés, formes originales).',
                cout: '30 – 70 €/m²',
              },
              {
                titre: 'Faux-plafond désolidarisé',
                solution: 'Faux-plafond sur suspentes anti-vibrations + laine minérale. Traite les bruits aériens (voix, musique) et d\'impact (sauts). Solution maximale mais nécessite 8 à 12 cm de hauteur disponible.',
                cout: '80 – 150 €/m²',
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

      {/* Section 5 — Budget complet */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget complet : prix d&apos;aménagement d&apos;une salle de jeux à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour une salle de jeux de 10 m² à Paris, main d&apos;œuvre et matériaux inclus.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total 10 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture sans COV + linoléum ou dalles mousse',
                    prixM2: '200 – 300 €',
                    total: '2 000 – 3 000 €',
                  },
                  {
                    niveau: 'Aménagement standard',
                    prestations: 'Sol + peinture + rangements modulables + isolation basique',
                    prixM2: '350 – 500 €',
                    total: '3 500 – 5 000 €',
                  },
                  {
                    niveau: 'Aménagement complet',
                    prestations: 'Sol souple + peinture déco + rangements sur mesure + isolation phonique plancher',
                    prixM2: '500 – 700 €',
                    total: '5 000 – 7 000 €',
                  },
                  {
                    niveau: 'Haut de gamme',
                    prestations: 'Menuiserie sur mesure + isolation totale + peinture ardoise + éclairage LED',
                    prixM2: '700 – 1 000 €',
                    total: '7 000 – 10 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour maîtriser son budget
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Commencer par l\'isolation phonique du plancher — le plus impactant pour la vie avec les voisins',
                'Choisir une peinture sans COV dès le départ — la santé des enfants n\'est pas un poste d\'économie',
                'Privilégier des rangements évolutifs qui s\'adaptent à l\'âge de l\'enfant sur 10 ans',
                'Grouper les travaux avec d\'autres pièces pour mutualiser les coûts de protection et de transport',
                'Prévoir 10 % de budget imprévus, surtout dans des immeubles anciens',
                'Opter pour des matériaux lavables partout — le nettoyage sera quotidien',
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
              { href: '/menuiserie-paris', title: 'Menuiserie sur mesure Paris' },
              { href: '/parquet-paris', title: 'Parquet Paris' },
              { href: '/blog/renovation-chambre-paris', title: 'Rénovation chambre Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/menuiserie-sur-mesure-paris', title: 'Menuiserie sur mesure Paris — guide' },
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
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-saint-cloud', label: 'Saint-Cloud' },
              { href: '/renovation-rueil-malmaison', label: 'Rueil-Malmaison' },
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
          Créez la salle de jeux idéale pour vos enfants
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisans spécialisés en aménagement parisien.
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
