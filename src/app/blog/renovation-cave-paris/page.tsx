import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Cave Paris', item: 'https://espacedesignparis.fr/blog/renovation-cave-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Cave Paris : aménagement, humidité & prix 2025',
  description: 'Rénover sa cave à Paris : traitement humidité, isolation, aménagement bureau ou chambre. Prix, réglementation copropriété. Guide complet 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-cave-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Peut-on aménager une cave en pièce habitable à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'aménagement d'une cave en pièce habitable à Paris est possible si la hauteur sous plafond est supérieure à 2,20 m (loi Carrez) et si le logement dispose de surfaces habitables suffisantes. Il faut obligatoirement demander l'autorisation à la copropriété et déposer une déclaration préalable en mairie si les travaux modifient l'aspect extérieur. La cave doit être correctement isolée, ventilée et éclairée.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment traiter l'humidité dans une cave parisienne ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le traitement de l'humidité dans une cave parisienne comprend : injection de résine hydrofuge dans les murs (150-300€/ml), pose d'un drainage périphérique (2 000-5 000€), application d'enduit de cuvelage (30-60€/m²), installation d'une VMC pour la ventilation. Dans les immeubles anciens, l'infiltration vient souvent des joints de dilatation ou des fissures. Budget total traitement humidité cave : 3 000 à 10 000€ selon la surface.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix de rénovation d'une cave à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation d'une cave parisienne coûte entre 300 et 1 500€/m² selon l'état de départ et le niveau d'aménagement souhaité. Une cave de 20 m² en bon état nécessite 6 000 à 15 000€ pour être aménagée en bureau ou cave à vin. Si des travaux d'étanchéité sont nécessaires, rajoutez 5 000 à 15 000€. La création d'une salle de sport ou d'un home cinéma demande 15 000 à 35 000€.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Cave Paris : aménagement, humidité & prix 2025',
  description: 'Rénover sa cave à Paris : traitement humidité, isolation, aménagement bureau ou chambre. Prix, réglementation copropriété. Guide complet 2025.',
}

export default function ArticleRenovationCave() {
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
            Rénovation Cave Paris : aménagement, humidité & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Rénover une cave parisienne est une opportunité souvent sous-estimée. Bureau, cave à vin, salle de sport, home cinéma : ce guide complet vous explique comment traiter l&apos;humidité, les contraintes réglementaires à Paris et les prix en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Réglementation et faisabilité */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Peut-on aménager sa cave à Paris ? Réglementation et conditions
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              L&apos;aménagement d&apos;une cave à Paris est encadré par plusieurs réglementations qui varient selon le type d&apos;usage souhaité. Voici les conditions essentielles à vérifier avant de commencer les travaux.
            </p>
            <div className="space-y-4">
              {[
                {
                  condition: 'Hauteur sous plafond minimale',
                  detail: "Pour qu'une cave soit considérée comme une pièce habitable, elle doit présenter une hauteur sous plafond d'au moins 2,20 m (loi Carrez). En dessous, l'espace peut être utilisé comme cave à vin, débarras ou local technique, mais pas comme chambre ou bureau habitable au sens légal.",
                },
                {
                  condition: 'Autorisation de la copropriété',
                  detail: "Si la cave est une annexe de votre lot privatif, vous devez obtenir l'autorisation de l'assemblée générale de la copropriété pour tout travaux modifiant sa destination ou son aspect (percée de fenêtre, création d'accès direct depuis l'appartement). Le règlement de copropriété peut interdire l'usage d'habitation en sous-sol.",
                },
                {
                  condition: 'Déclaration préalable ou permis de construire',
                  detail: "Si les travaux créent une nouvelle surface habitable (changement de destination) ou modifient l'aspect extérieur (création d'une fenêtre sur la façade), une déclaration préalable de travaux est obligatoire en mairie de Paris. Si la surface créée dépasse 20 m², un permis de construire peut être requis.",
                },
                {
                  condition: 'Ventilation et éclairage réglementaires',
                  detail: "Une pièce habitable doit disposer d'un éclairage naturel suffisant (1/6e de la surface au sol) et d'une ventilation mécanique conforme. En sous-sol, cela implique souvent la création de soupiraux agrandis ou d'une VMC double flux — une contrainte technique et réglementaire majeure.",
                },
              ].map((el) => (
                <div key={el.condition} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.condition}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tableau prix par usage */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Prix de rénovation d&apos;une cave parisienne selon l&apos;usage
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Usage</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget 15 m²</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget 25 m²</th>
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Particularités</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { usage: 'Cave de rangement rénovée', b15: '3 000 – 6 000 €', b25: '5 000 – 10 000 €', part: 'Traitement humidité + sol béton teinté + éclairage' },
                    { usage: 'Cave à vin', b15: '5 000 – 12 000 €', b25: '8 000 – 20 000 €', part: 'Isolation thermique, hygrométrie contrôlée, casiers bois' },
                    { usage: 'Bureau / salle de travail', b15: '8 000 – 15 000 €', b25: '12 000 – 25 000 €', part: 'Éclairage artificiel, VMC, isolation acoustique, internet' },
                    { usage: 'Salle de sport', b15: '10 000 – 20 000 €', b25: '15 000 – 30 000 €', part: 'Sol amortissant, miroirs, ventilation renforcée' },
                    { usage: 'Home cinéma', b15: '15 000 – 30 000 €', b25: '20 000 – 50 000 €', part: 'Isolation acoustique poussée, projection, mobilier sur-mesure' },
                    { usage: 'Chambre habitable', b15: '15 000 – 35 000 €', b25: '25 000 – 60 000 €', part: 'Soupiraux, VMC double flux, déclaration mairie, salle de bain' },
                  ].map((row, i) => (
                    <tr key={row.usage} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                      <td className="px-4 py-3 text-[#1C1C1C] font-light">{row.usage}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.b15}</td>
                      <td className="px-4 py-3 text-center text-[#B8960C] font-light">{row.b25}</td>
                      <td className="px-4 py-3 text-gray-600 font-light text-xs">{row.part}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs font-light italic mt-3">
              Prix TTC Paris, hors travaux d&apos;étanchéité si nécessaires (ajouter 5 000 à 15 000 €). Variables selon l&apos;état initial.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Traitement humidité */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Traitement de l&apos;humidité : la priorité absolue
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;humidité est le problème numéro un des caves parisiennes. Dans les immeubles anciens, les murs en pierre meulière ou en calcaire absorbent les eaux d&apos;infiltration et les remontées capillaires. Avant tout aménagement, le traitement de l&apos;humidité est indispensable — à défaut, aucun revêtement ne tiendra.
          </p>
          <div>
            <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">
              Identifier la source d&apos;humidité
            </h3>
            <p className="text-gray-600 text-sm font-light leading-relaxed mb-5">
              Il existe trois types d&apos;humidité dans une cave : les infiltrations latérales (eau de pluie ou nappe phréatique qui traverse les murs), les remontées capillaires (eau du sol qui monte par capillarité dans les murs) et la condensation (vapeur d&apos;eau de l&apos;air qui se dépose sur les parois froides). Un diagnostic préalable par un professionnel est nécessaire pour déterminer l&apos;origine et choisir le traitement adapté.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  traitement: 'Injection de résine hydrofuge',
                  usage: 'Remontées capillaires dans les murs',
                  prix: '150 – 300 €/ml de mur',
                  detail: 'Forage des murs tous les 10-15 cm, injection de résine sous pression. Efficacité prouvée sur 20-30 ans.',
                },
                {
                  traitement: 'Enduit de cuvelage',
                  usage: 'Infiltrations latérales légères',
                  prix: '30 – 60 €/m² de mur',
                  detail: "Enduit imperméable hydraulique appliqué côté intérieur. Solution économique pour les infiltrations modérées.",
                },
                {
                  traitement: 'Drainage périphérique extérieur',
                  usage: 'Infiltrations importantes, nappe phréatique',
                  prix: '2 000 – 6 000 €',
                  detail: 'Fouilles en périphérie du bâtiment, pose de drain + géotextile. Solution curative la plus efficace mais invasive.',
                },
                {
                  traitement: 'VMC double flux',
                  usage: 'Condensation chronique',
                  prix: '1 500 – 3 500 €',
                  detail: "Renouvellement d'air contrôlé qui évacue l'humidité de l'air ambiant. Indispensable pour tout usage habitable.",
                },
              ].map((el) => (
                <div key={el.traitement} className="bg-white rounded-lg p-4 border border-gray-100">
                  <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                    <div className="font-medium text-[#1C1C1C] text-sm">{el.traitement}</div>
                    <div className="text-[#B8960C] text-xs font-medium">{el.prix}</div>
                  </div>
                  <div className="text-gray-500 text-xs font-light mb-2 italic">{el.usage}</div>
                  <div className="text-gray-600 text-xs font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Aménagements et conseils */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les aménagements de cave les plus populaires à Paris
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  La cave à vin : l&apos;aménagement classique
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Paris compte de nombreuses caves en sous-sol naturellement fraîches (12 à 14°C constants) — conditions idéales pour conserver le vin. L&apos;aménagement comprend : traitement de l&apos;humidité (hygrométrie idéale 70-80%), isolation thermique des murs pour stabiliser la température, casiers à bouteilles en bois ou métal, éclairage doux. Budget pour une cave à vin de 15 m² : 5 000 à 15 000 € selon le niveau de finition.
                </p>
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le bureau en sous-sol : gagnez une pièce de travail
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Transformer une cave en bureau est un projet très demandé à Paris depuis 2020. Les conditions : hauteur sous plafond 2,20 m minimum, éclairage artificiel qualitatif (LED chaleureux, ampoules à spectre complet pour compenser l&apos;absence de lumière naturelle), VMC pour la qualité de l&apos;air, isolation acoustique. Un bureau de 15 m² bien conçu peut devenir un vrai espace de travail professionnel pour 8 000 à 15 000 €.
                </p>
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  La salle de sport ou le home cinéma
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  La salle de sport en sous-sol demande un sol amortissant (tatami, sol sportif en caoutchouc), une ventilation renforcée et des miroirs muraux. Budget 20 m² : 10 000 à 20 000 €. Le home cinéma est le projet le plus technique : isolation acoustique renforcée (doublage des murs, plafond suspendu anti-vibrations), projection ou écran XXL, mobilier sur-mesure. Budget 25 m² : 20 000 à 50 000 € selon les équipements AV.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Conseils pour réussir votre rénovation de cave
            </h2>
            <ul className="space-y-3">
              {[
                {
                  conseil: "Commencez toujours par l'étanchéité",
                  detail: "Ne posez aucun revêtement avant d'avoir résolu le problème d'humidité. Les finitions (carrelage, parquet, peinture) se décollent rapidement si les murs restent humides.",
                },
                {
                  conseil: 'Vérifiez la nature des matériaux (amiante, plomb)',
                  detail: "Dans les immeubles parisiens construits avant 1997, un diagnostic amiante est obligatoire avant travaux. La présence d'amiante dans les enduits ou les dalles de sol demande une dépose par une entreprise certifiée.",
                },
                {
                  conseil: 'Isolez thermiquement même pour un usage non habitable',
                  detail: "Une cave à vin, un bureau ou une salle de sport sont plus confortables et économiques si les murs sont isolés. L'isolation thermique intérieure (ITI) avec panneau rigide de 60-100 mm est la solution standard en sous-sol.",
                },
                {
                  conseil: "Prévoyez un accès direct depuis l'appartement si possible",
                  detail: "Une cave accessible directement depuis l'appartement (escalier intérieur) multiplie sa valeur d'usage. Cette création demande une trémie dans le plancher — vérifiez les murs porteurs et la structure avec un ingénieur avant de percer.",
                },
              ].map((item) => (
                <li key={item.conseil} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{item.conseil}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              L&apos;expertise Espace Design pour votre cave
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Diagnostic humidité avant travaux',
                'Traitement étanchéité et injection résine',
                'Isolation thermique et acoustique sous-sol',
                'Électricité, éclairage, VMC — mise aux normes',
                'Aménagement sur-mesure (cave à vin, bureau, sport)',
                'Démarches copropriété et déclaration mairie',
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

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/isolation-paris', title: 'Isolation Paris — Espace Design' },
              { href: '/platrererie-paris', title: 'Plâtrerie Paris — Espace Design' },
              { href: '/amenagement-interieur-paris', title: 'Aménagement intérieur Paris' },
              { href: '/blog/isolation-acoustique-appartement-paris', title: 'Isolation acoustique appartement Paris' },
              { href: '/blog/budget-renovation-paris-2025', title: 'Budget rénovation Paris 2025' },
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
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos zones d&apos;intervention</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/renovation-paris-1er', label: 'Paris 1er' },
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-5e', label: 'Paris 5e' },
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-saint-germain-en-laye', label: 'Saint-Germain-en-Laye' },
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
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Votre projet de rénovation de cave à Paris
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Visite gratuite et diagnostic humidité. Devis détaillé sous 48h.
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
