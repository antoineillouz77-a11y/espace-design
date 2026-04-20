import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Douche Italienne Paris', item: 'https://espacedesignparis.fr/blog/douche-italienne-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Douche Italienne Paris : prix, carrelage & installation 2025 | Espace Design',
  description: 'Créer une douche italienne à Paris : receveur extra-plat, carrelage, paroi, prix. Guide complet et artisans spécialisés 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/douche-italienne-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte une douche italienne à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une douche italienne complète à Paris coûte en moyenne 3 500 à 6 000 € pour une rénovation incluant la chape, le carrelage mi-gamme et une paroi en verre. Ce budget monte à 6 000 – 12 000 € pour une finition premium (grandes dalles marbre, paroi sans cadre). Un receveur extra-plat avec carrelage simple démarre à 1 500 €. La main d'œuvre représente généralement 40 à 60 % du budget total.",
      },
    },
    {
      '@type': 'Question',
      name: "Est-il possible d'installer une douche italienne dans tous les appartements parisiens ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, mais l'installation est plus complexe dans les appartements parisiens anciens. La principale contrainte est la hauteur du siphon de sol : dans les immeubles sans vide-sanitaire (la majorité à Paris), le siphon doit se connecter à l'évacuation existante au même niveau de plancher. Cela impose parfois des travaux de chape (rechargement de béton) importants pour créer la pente nécessaire tout en noyant le siphon. Un diagnostic plomberie préalable est indispensable.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle dimension minimale pour une douche italienne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La dimension minimale pour une douche italienne fonctionnelle est de 80 × 80 cm, mais cette taille est très contrainte. Une dimension de 90 × 90 cm est conseillée pour un usage confortable. L'idéal est d'atteindre 120 × 80 cm, qui offre suffisamment d'espace pour se doucher sans projeter d'eau à l'extérieur. Au-delà de 120 × 120 cm, une paroi de séparation devient indispensable.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Douche Italienne Paris : prix, carrelage & installation 2025 | Espace Design',
  description: 'Créer une douche italienne à Paris : receveur extra-plat, carrelage, paroi, prix. Guide complet et artisans spécialisés 2025.',
}

export default function ArticleDoucheItalienne() {
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
            Salle de bain
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Douche Italienne Paris : prix, carrelage & installation 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La douche italienne s&apos;est imposée comme la référence des rénovations de salle de bain à Paris. Accessibilité, design épuré, gain de place par rapport à la baignoire : receveur extra-plat, carrelage grand format, paroi vitrée — guide complet avec prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Pourquoi choisir une douche italienne */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Pourquoi choisir une douche italienne ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La douche italienne — aussi appelée douche à l&apos;italienne ou douche de plain-pied — se définit par l&apos;absence de rebord : le sol de la douche est de plain-pied avec le reste de la salle de bain, l&apos;eau s&apos;écoulant vers une bonde centrale ou linéaire. Ce principe simple génère des avantages concrets qui expliquent son adoption massive dans les rénovations contemporaines.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Dans les appartements parisiens où les salles de bain ont souvent remplacé d&apos;anciens dressings ou chambres de bonne, la douche italienne permet de récupérer de la surface utile par rapport à une baignoire encastrée, tout en créant une continuité visuelle qui agrandit l&apos;espace. Elle est également plébiscitée dans les projets de viager et les rénovations patrimoniales pour son accessibilité PMR.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Accessibilité', valeur: 'Sans seuil', note: 'Idéal PMR, seniors, usage quotidien' },
                { label: 'Gain de place', valeur: '30 – 50 %', note: 'vs baignoire sur même surface' },
                { label: 'Valeur ajoutée', valeur: 'Élevée', note: 'Critère de vente très recherché à Paris' },
              ].map((item) => (
                <div key={item.label} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100 text-center">
                  <div className="text-[#B8960C] font-semibold text-lg mb-1">{item.valeur}</div>
                  <div className="text-[#1C1C1C] text-sm font-medium mb-1">{item.label}</div>
                  <div className="text-gray-500 text-xs font-light">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Contraintes techniques appartement parisien */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes techniques dans un appartement parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Installer une douche italienne dans un appartement parisien n&apos;est pas aussi simple que dans une construction neuve. Les contraintes structurelles propres aux immeubles anciens imposent des adaptations techniques qui conditionnent le budget et la faisabilité du projet.
          </p>
          <div className="space-y-4">
            {[
              {
                contrainte: 'Pente d\'évacuation et bonde',
                detail: "La douche italienne exige une pente minimale de 1 à 2 % vers la bonde pour que l'eau s'écoule correctement. Dans les appartements parisiens, l'évacuation se raccorde à la colonne montante via une chute dont la position est fixe. La bonde doit être placée au plus près de cette chute pour limiter la longueur de la canalisation horizontale, qui ne peut excéder 3 m sans tomber en deçà de la pente réglementaire.",
              },
              {
                contrainte: 'Chape et surélévation du sol',
                detail: "Pour créer la pente vers la bonde, il faut soit réaliser une chape en mortier (8 à 12 cm de hauteur supplémentaire), soit utiliser un receveur extra-plat (3 cm). La chape implique de supporter un poids de 15 à 20 kg/m² supplémentaires — acceptable dans les immeubles en béton, à vérifier avec un bureau d'études dans les immeubles anciens en bois. Elle crée aussi un seuil de transition avec le reste de la salle de bain, qui doit être pensé dès la conception.",
              },
              {
                contrainte: 'Hauteur sous plafond et étanchéité',
                detail: "L'étanchéité est la contrainte la plus critique. Un système d'étanchéité liquide (SEL) ou des bandes d'étanchéité (SPEC) doivent impérativement être posés sous le carrelage ou le revêtement, y compris en remontée murale sur 10 cm minimum. Dans les immeubles parisiens avec plancher bois, une membrane d'étanchéité renforcée et une membrane de désolidarisation sont indispensables pour absorber les mouvements du support.",
              },
            ].map((el) => (
              <div key={el.contrainte} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.contrainte}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-2">Bonde centrale vs bonde linéaire</div>
            <div className="text-gray-400 text-sm font-light leading-relaxed">
              La bonde centrale (siphon rond au milieu de la douche) est la solution la plus économique et la plus facile à installer. La bonde linéaire (caniveau le long d&apos;un mur) offre un rendu plus épuré et une pente dans un seul sens — plus simple à réaliser en carrelage grand format. Elle est plus coûteuse (150 à 400 € de plus) mais recommandée pour les dalles de grande taille ou les wet rooms.
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Revêtements */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Revêtements : carrelage grand format, pierre naturelle, résine et béton ciré
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix du revêtement est déterminant dans une douche italienne : il conditionne l&apos;esthétique, la facilité d&apos;entretien, et la résistance à long terme. Chaque matériau impose ses contraintes techniques en milieu humide permanent.
          </p>
          <div className="space-y-4">
            {[
              {
                materiau: 'Carrelage grand format (60×60 à 120×120 cm)',
                avantages: ['Peu de joints → moins d\'entretien', 'Rendu minéral très recherché', 'Résistance maximale à l\'eau et aux chocs', 'Large gamme de coloris et textures'],
                contraintes: ['Pente technique plus délicate (peu de joints pour absorber)', 'Bonde linéaire recommandée avec grand format', 'Poids élevé — vérifier le support'],
                prix: '50 – 120 €/m² posé',
              },
              {
                materiau: 'Pierre naturelle (travertin, ardoise, marbre)',
                avantages: ['Rendu haut de gamme intemporel', 'Chaque pierre unique', 'Travertin : naturellement antidérapant'],
                contraintes: ['Traitement hydrofuge obligatoire (annuel pour certaines pierres)', 'Sensible aux produits acides', 'Marbre glissant en sol humide — choisir finition bouchardée'],
                prix: '80 – 180 €/m² posé',
              },
              {
                materiau: 'Béton ciré',
                avantages: ['Continuité sol/mur sans joints', 'Rendu spa luxueux', 'Sur mesure — couleur unique'],
                contraintes: ['Protection hydrofuge renforcée indispensable (résine PU)', 'Entretien annuel (recirage)', 'Support doit être parfaitement stable'],
                prix: '100 – 150 €/m² posé',
              },
              {
                materiau: 'Résine époxy',
                avantages: ['Sans joints, imperméable total', 'Très résistant aux produits chimiques', 'Pose rapide, grand choix de couleurs'],
                contraintes: ['Rendu très lisse → antidérapant à ajouter au sol', 'Sensible aux UV si exposé', 'Réparation difficile en cas de fissure'],
                prix: '70 – 110 €/m² posé',
              },
            ].map((el) => (
              <div key={el.materiau} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.materiau}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
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
                      {el.contraintes.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-xs text-gray-600 font-light">
                          <span className="w-3 h-px bg-gray-400 flex-shrink-0 mt-2" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Parois et portes */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Parois et portes : verre trempé, paroi fixe, wet room sans cloison
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix de la délimitation de la zone de douche est autant une décision esthétique que fonctionnelle. Des parois bien pensées évitent les projections hors de la douche tout en préservant la luminosité de la salle de bain.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                solution: 'Paroi fixe en verre trempé (10 mm)',
                detail: "La solution la plus répandue en rénovation parisienne. Un panneau de verre trempé 8 à 10 mm, fixé au sol et au mur, protège des projections sur l'espace lavabo. Rendu épuré et transparent qui ne coupe pas la lumière. Existe en version sans cadre (le plus design) ou avec profilé aluminium (moins coûteux). Largeur recommandée : 80 cm minimum.",
                prix: '300 – 800 € pose incluse',
              },
              {
                solution: 'Porte coulissante ou pivotante en verre',
                detail: "Idéale si la douche italienne est encastrée dans une niche ou délimitée par deux murs. La porte coulissante est recommandée dans les petites salles de bain où l'espace de débattement d'une porte pivotante est limité. Verre trempé 6 mm minimum — préférer 8 mm pour la robustesse. Attention aux joints d'étanchéité qui demandent un entretien régulier.",
                prix: '500 – 1 500 € pose incluse',
              },
              {
                solution: 'Wet room — aucune cloison ni paroi',
                detail: "La solution la plus design : toute la salle de bain est traitée comme une zone humide continue. Sol et murs entièrement en carrelage hydrofuge ou béton ciré, sans receveur ni paroi. Nécessite une étanchéité parfaite de l'ensemble de la pièce et un positionnement de la bonde qui permet de contenir les projections. Le pommeau de douche est fixé au plafond ou à un mur éloigné de la porte.",
                prix: '5 000 – 12 000 € (salle complète)',
              },
            ].map((el) => (
              <div key={el.solution} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.solution}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-2">Verre transparent vs verre dépoli</div>
            <div className="text-gray-400 text-sm font-light leading-relaxed">
              Le verre transparent (clair) est le plus courant : il préserve la luminosité et donne une sensation d&apos;espace. Le verre dépoli ou satiné offre plus d&apos;intimité mais alourdit visuellement la pièce. Dans les salles de bain parisiennes souvent petites et sombres, privilégiez le verre clair traité anti-calcaire — l&apos;entretien quotidien avec une raclette suffit à maintenir la transparence.
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget complet : douche italienne à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs 2025 pour Paris et petite couronne, main d&apos;œuvre et matériaux inclus. Les prix intègrent plomberie, étanchéité, revêtement et équipements.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Configuration</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget</th>
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Ce qui est inclus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    config: 'Receveur extra-plat seul',
                    budget: '1 000 – 2 500 €',
                    inclus: 'Receveur 90×120 cm, bonde, raccordement plomberie, joints',
                  },
                  {
                    config: 'Douche complète (receveur + paroi + carrelage)',
                    budget: '3 000 – 8 000 €',
                    inclus: 'Receveur ou chape, carrelage mural et sol, paroi vitrée, robinetterie, plomberie',
                  },
                  {
                    config: 'Wet room intégrale',
                    budget: '5 000 – 12 000 €',
                    inclus: 'Étanchéité complète de la pièce, béton ciré ou carrelage grand format, bonde linéaire, robinetterie design, éclairage encastré',
                  },
                ].map((row, i) => (
                  <tr key={row.config} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.config}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium whitespace-nowrap">{row.budget}</td>
                    <td className="px-4 py-3 text-gray-600 font-light text-xs">{row.inclus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-2">Ce qui peut faire varier le budget</div>
            <ul className="space-y-2">
              {[
                "Chape en mortier vs receveur extra-plat : +500 à 1 000 € pour la chape (mais rendu plus authentique)",
                "Bonde linéaire vs bonde centrale : +150 à 400 € (recommandé avec grand format)",
                "Robinetterie thermostatique : +300 à 800 € par rapport à une robinetterie standard",
                "Éclairage encastré étanche (IP65) dans la zone de douche : +300 à 600 €",
                "Remplacement des canalisations vétustes si découverte lors des travaux : +300 à 800 €",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-gray-400 font-light">
                  <CheckCircle size={12} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
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
              { href: '/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/carrelage-paris', title: 'Carrelage Paris' },
              { href: '/plomberie-paris', title: 'Plomberie Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Guide rénovation salle de bain Paris' },
              { href: '/blog/sol-beton-cire-paris', title: 'Sol béton ciré Paris' },
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
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-saint-cloud', label: 'Saint-Cloud' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
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
          Vous installez une douche italienne à Paris ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit sur place. Étude de faisabilité technique incluse. Devis sous 48h.
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
