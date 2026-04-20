import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cuisine Ouverte Paris', item: 'https://espacedesignparis.fr/blog/renovation-cuisine-ouverte-paris' },
  ],
}

export const metadata: Metadata = {
  title: "Cuisine Ouverte Paris : rénovation, prix & démarches 2025 | Espace Design",
  description:
    "Ouvrir et rénover une cuisine à Paris : abattage mur porteur, IBS/poutre, démarches syndic, prix et tendances 2025. Artisan spécialisé Paris. Devis gratuit sous 48h.",
  keywords: [
    'cuisine ouverte Paris',
    'ouvrir cuisine salon Paris',
    'abattage mur porteur Paris',
    'rénovation cuisine ouverte Paris',
    'prix cuisine ouverte Paris',
    'IPN mur porteur Paris',
    'démarches syndic ouverture cuisine',
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Cuisine Ouverte Paris : rénovation, prix & démarches 2025",
  description: "Guide complet pour ouvrir et rénover une cuisine à Paris : abattage de mur porteur ou non-porteur, IBS/poutre, démarches syndic, prix et tendances 2025.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  url: 'https://espacedesignparis.fr/blog/renovation-cuisine-ouverte-paris',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Peut-on abattre un mur porteur pour ouvrir une cuisine à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, c'est techniquement possible dans la grande majorité des cas. L'abattage d'un mur porteur nécessite une étude de structure par un bureau d'études agréé, qui définit le type de reprise en sous-oeuvre nécessaire (poutre IPN, IBS, béton armé). Un étaiement provisoire est mis en place pendant les travaux. Comptez 800 à 2 000 € pour l'étude et 4 000 à 12 000 € pour la reprise structurelle selon la portée.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il un accord du syndic pour ouvrir sa cuisine ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Si vous abattez ou modifiez un mur porteur (partie structurelle commune dans de nombreuses copropriétés), l'accord du syndic est obligatoire — souvent avec passage en assemblée générale. Pour la simple suppression d'une cloison non-porteuse entre cuisine et salon, aucune démarche syndic n'est requise, mais une déclaration préalable de travaux en mairie peut être nécessaire si les travaux modifient la distribution du logement.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix d'une cuisine ouverte à Paris en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le budget total d'une cuisine ouverte à Paris se décompose ainsi : démolition de la cloison (500 à 2 000 € pour non-porteur, 3 000 à 8 000 € pour porteur avec IPN) + nouvelle cuisine fournie et posée (6 000 à 25 000 € selon gamme) + finitions (sol, peinture, électricité : 2 000 à 6 000 €). Budget global : de 10 000 € pour une ouverture simple à 40 000 € pour un projet complet haut de gamme.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le délai pour des travaux d'ouverture de cuisine à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une cloison non-porteuse : 1 à 2 semaines (démolition + cuisine + finitions). Pour un mur porteur avec IPN : 3 à 6 semaines, dont 1 semaine pour l'étaiement et la reprise structurelle. Ajoutez 2 à 4 mois pour l'obtention de l'accord syndic et de la déclaration préalable en mairie si nécessaire — à anticiper bien avant le début du chantier.",
      },
    },
  ],
}

export default function ArticleCuisineOuverteParis() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Guide & Conseils
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Cuisine Ouverte Paris : ouvrir et rénover votre cuisine
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Ouvrir la cuisine sur le séjour est l&apos;une des transformations les plus
            demandées dans les appartements parisiens. Elle implique des questions techniques
            majeures — porteur ou non-porteur ? IBS ou IPN ? — et des démarches
            administratives souvent sous-estimées. Espace Design vous guide pour mener ce
            projet sans mauvaise surprise.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 — Porteur vs non-porteur */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Mur porteur ou non-porteur : comment savoir ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La distinction entre mur porteur et cloison légère est la première question à
              résoudre avant tout projet d&apos;ouverture de cuisine. Se tromper entraîne des
              désordres structurels graves — fissures, affaissement de plancher, effondrement
              partiel.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  label: 'Mur porteur',
                  color: 'border-red-200 bg-red-50',
                  badge: 'Intervention structurelle obligatoire',
                  items: [
                    "Épaisseur supérieure à 20 cm",
                    "Maçonnerie en pierre, brique pleine ou béton",
                    "Perpendiculaire aux solives du plancher",
                    "Présent dans l'axe de toute la hauteur de l'immeuble",
                    "Figurant sur les plans structurels du bâtiment",
                  ],
                },
                {
                  label: 'Cloison légère (non-porteuse)',
                  color: 'border-green-200 bg-green-50',
                  badge: 'Démolition simplifiée',
                  items: [
                    "Épaisseur de 5 à 15 cm",
                    "Brique creuse, carreaux de plâtre ou placo",
                    "Parallèle aux solives ou sans lien structurel",
                    "Ne remonte pas sur toute la hauteur de l'immeuble",
                    "Son retrait ne modifie pas la stabilité du bâtiment",
                  ],
                },
              ].map((item) => (
                <div key={item.label} className={`border rounded-lg p-5 ${item.color}`}>
                  <div className="font-display text-sm font-semibold text-[#1C1C1C] mb-1">{item.label}</div>
                  <div className="text-xs text-gray-500 font-light mb-3">{item.badge}</div>
                  <ul className="space-y-1">
                    {item.items.map((i) => (
                      <li key={i} className="flex gap-2 text-xs text-gray-600 font-light">
                        <span className="text-gray-400 flex-shrink-0">—</span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed font-light">
              En cas de doute — et dans un appartement parisien ancien le doute est fréquent
              — seul un bureau d&apos;études structures peut trancher avec certitude, après
              examen visuel et consultation des plans de l&apos;immeuble. Cette étude coûte
              entre 500 et 1 500 €. Espace Design travaille avec des bureaux d&apos;études
              partenaires et peut organiser cette visite dès la phase de devis.
            </p>
          </div>

          {/* Section 2 — IBS / Poutre */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              IBS, IPN, poutre béton : quelle reprise en sous-oeuvre ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Quand un mur porteur est abattu, les charges qu&apos;il supportait doivent être
              reprises par un linteau ou une poutre. Le choix dépend de la portée de
              l&apos;ouverture, des charges à supporter et de l&apos;esthétique souhaitée.
            </p>

            <div className="space-y-4 mb-5">
              {[
                {
                  type: "IPN (poutre acier laminée)",
                  usage: "Portée de 1,50 m à 5 m — le plus courant à Paris",
                  prix: "2 500 – 6 000 €",
                  detail: "La poutre IPN (en I) est le standard pour les reprises de murs porteurs dans les appartements haussmanniens et les immeubles récents. Elle est mise en place après étaiement provisoire, puis encastrée dans les murs de rive. Elle peut rester apparente (effet industriel) ou être habillée d'un coffrage plâtre.",
                },
                {
                  type: "IBS (poutre béton armé coulée en place)",
                  usage: "Portée courte à moyenne, dans le béton existant",
                  prix: "1 800 – 4 000 €",
                  detail: "L'IBS (ou linteau béton) est coulé en place dans une trémie créée dans le mur. Solution adaptée aux murs en béton banché des immeubles des années 1960-1980. Plus discret qu'un IPN apparent mais impose un coffrage soigné. Délai de séchage béton : 28 jours avant décoffrage.",
                },
                {
                  type: "Poutre bois lamellé-collé",
                  usage: "Petites portées (< 2,50 m), esprit chaleureux",
                  prix: "2 000 – 4 500 €",
                  detail: "La poutre bois apparent est une alternative esthétique dans les lofts et appartements au style chaleureux. Elle est dimensionnée par le bureau d'études et laissée visible pour l'effet décoratif. Non adaptée aux grandes portées ni aux charges lourdes.",
                },
              ].map((item) => (
                <div key={item.type} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <div className="font-display text-sm font-semibold text-[#1C1C1C]">{item.type}</div>
                    <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{item.prix}</div>
                  </div>
                  <div className="text-xs text-gray-500 font-light mb-2">{item.usage}</div>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 — Démarches syndic */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Démarches syndic et administratives : ce qui est obligatoire
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Paris est une ville de copropriétés — et les copropriétés ont leurs règles. Voici
              ce que vous devez anticiper selon le type de travaux envisagé.
            </p>
            <ol className="space-y-3 mb-5">
              {[
                { num: '01', title: "Cloison non-porteuse entre cuisine et salon", detail: "Aucune démarche syndic requise. Déclaration préalable de travaux en mairie si la superficie habituelle du logement est modifiée (rare pour une simple ouverture cuisine)." },
                { num: '02', title: "Mur porteur appartenant aux parties communes", detail: "Accord obligatoire du syndic + vote en assemblée générale (majorité article 25 ou 26 selon le règlement). Délai : 2 à 4 mois selon la prochaine AG. Fournir l'étude de structure et les plans d'exécution." },
                { num: '03', title: "Déclaration préalable en mairie", detail: "Obligatoire si les travaux modifient la structure porteuse du bâtiment. Instruction en 1 mois. Affichage de la déclaration obligatoire pendant toute la durée du chantier." },
                { num: '04', title: "Assurance dommages-ouvrage", detail: "Recommandée (parfois exigée par le syndic) pour tout abattage de mur porteur. Elle garantit la prise en charge des dommages structurels pendant 10 ans. Coût : 1 à 3 % du montant des travaux." },
                { num: '05', title: "Déclaration au voisinage", detail: "Non obligatoire légalement, mais fortement conseillée. Les vibrations liées à la démolition d'un mur maçonné peuvent inquiéter les voisins. Une information préalable évite les conflits." },
              ].map((step) => (
                <li key={step.num} className="flex gap-4">
                  <span className="font-display text-2xl font-semibold text-[#D4AF37]/60 flex-shrink-0 w-8">{step.num}</span>
                  <div>
                    <span className="text-[#1C1C1C] text-sm font-medium">{step.title} : </span>
                    <span className="text-gray-600 text-sm font-light">{step.detail}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Section 4 — Prix */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Prix d&apos;une cuisine ouverte à Paris 2025 : budget complet
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le budget d&apos;une cuisine ouverte se décompose en trois grands postes, chacun
              pouvant varier selon la configuration du logement et le niveau de prestation
              souhaité.
            </p>

            <div className="overflow-x-auto mb-5">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-medium text-[#1C1C1C] text-xs uppercase tracking-wide">Poste</th>
                    <th className="text-left py-2 pr-4 font-medium text-[#1C1C1C] text-xs uppercase tracking-wide">Entrée de gamme</th>
                    <th className="text-left py-2 font-medium text-[#1C1C1C] text-xs uppercase tracking-wide">Haut de gamme</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Démolition cloison légère", "500 €", "2 000 €"],
                    ["Abattage mur porteur + IPN", "4 000 €", "12 000 €"],
                    ["Cuisine fournie + posée (sans électromenager)", "5 000 €", "25 000 €"],
                    ["Électroménager encastré", "1 500 €", "8 000 €"],
                    ["Finitions (sol, peinture, électricité)", "2 000 €", "6 000 €"],
                    ["Étude de structure", "500 €", "1 500 €"],
                  ].map(([poste, bas, haut]) => (
                    <tr key={poste}>
                      <td className="py-2 pr-4 text-gray-600 font-light">{poste}</td>
                      <td className="py-2 pr-4 text-gray-600 font-light">{bas}</td>
                      <td className="py-2 text-gray-600 font-light">{haut}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  label: 'Ouverture simple (cloison légère)',
                  price: '8 000 – 18 000 €',
                  desc: "Suppression d'une cloison légère + nouvelle cuisine équipée. Finitions peinture et sol incluses.",
                },
                {
                  label: 'Ouverture avec mur porteur',
                  price: '15 000 – 30 000 €',
                  desc: "Étude structure + IPN + cuisine + finitions. Le cas le plus fréquent dans les appartements haussmanniens parisiens.",
                },
                {
                  label: 'Projet complet haut de gamme',
                  price: '30 000 – 50 000 €',
                  desc: "Mur porteur, cuisine sur mesure, électroménager premium, îlot central, parquet, peinture décorative.",
                },
              ].map((item) => (
                <div key={item.label} className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                  <div className="text-[#B8960C] text-xs font-light uppercase tracking-widest mb-1">{item.label}</div>
                  <div className="font-display text-lg font-semibold text-[#1C1C1C] mb-2">{item.price}</div>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5 — Tendances */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Tendances cuisine ouverte Paris 2025
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Les cuisines ouvertes que nous réalisons à Paris en 2025 suivent des tendances
              fortes, mêlant fonctionnalité, esthétique et durabilité.
            </p>
            <ul className="space-y-3">
              {[
                "Îlot central de cuisson avec plan de travail en quartzite ou marbre : le format le plus demandé dans les 3 pièces et plus.",
                "Façades de cuisine sans poignée (push-to-open) en laque mate gris foncé ou vert sauge : pour une intégration discrète dans le salon.",
                "Verrière d'atelier acier noir entre cuisine et couloir : séparer sans cloisonner, laisser passer la lumière.",
                "Extracteur déporté (moteur en façade ou dans les combles) : silence et efficacité dans une cuisine ouverte, sans gêner le séjour.",
                "Éclairage multicouche : hotte lumineuse + spots encastrés + sous-meubles LED pour varier les ambiances.",
                "Plan de travail en bois massif chêne + crédence en zellige vert ou bleu : alliance de la chaleur et de la couleur.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Peut-on abattre un mur porteur pour ouvrir une cuisine à Paris ?",
                a: "Oui, dans la grande majorité des cas. Cela nécessite une étude de structure (500 à 1 500 €) qui définit le type de reprise en sous-oeuvre — poutre IPN, IBS ou béton. Un étaiement provisoire est mis en place pendant les travaux. Budget reprise structurelle : 4 000 à 12 000 € selon la portée.",
              },
              {
                q: "Faut-il un accord du syndic pour ouvrir sa cuisine ?",
                a: "Uniquement si vous touchez à un mur porteur faisant partie des parties communes. Dans ce cas, accord syndic obligatoire, souvent avec vote en AG. Pour la suppression d'une cloison légère intérieure, aucune démarche syndic n'est nécessaire. Espace Design vous aide à identifier le statut du mur dès la première visite.",
              },
              {
                q: "Quel est le prix d'une cuisine ouverte à Paris en 2025 ?",
                a: "De 8 000 € (ouverture simple + cuisine basique) à 50 000 € (mur porteur + cuisine sur mesure haut de gamme). La fourchette la plus courante pour un 3 pièces parisien avec mur porteur et cuisine équipée de milieu de gamme : 15 000 à 25 000 € tout compris.",
              },
              {
                q: "Quel est le délai pour des travaux d'ouverture de cuisine à Paris ?",
                a: "Cloison légère : 1 à 2 semaines de chantier. Mur porteur avec IPN : 3 à 6 semaines. Ajoutez 2 à 4 mois pour les démarches syndic et la déclaration préalable en mairie si nécessaire — à anticiper bien avant le début du chantier.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-6">
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Voir aussi</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/renovation-cuisine-paris', label: 'Rénovation cuisine Paris' },
              { href: '/blog/prix-renovation-cuisine-paris', label: 'Prix rénovation cuisine Paris' },
              { href: '/blog/mur-porteur-paris', label: 'Guide mur porteur Paris' },
              { href: '/blog/ouverture-cuisine-salon-paris', label: 'Ouverture cuisine salon Paris' },
              { href: '/blog/renovation-cuisine-americaine-paris', label: 'Cuisine américaine Paris' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Votre projet cuisine ouverte à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Diagnostic gratuit, étude de faisabilité et devis détaillé sous 48h. Porteur ou non-porteur — on gère tout.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#c9a030] transition-colors"
          >
            Devis gratuit <ArrowRight size={13} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 px-7 py-3.5 rounded font-light text-sm tracking-wide hover:border-white hover:text-white transition-colors"
          >
            <Phone size={14} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
