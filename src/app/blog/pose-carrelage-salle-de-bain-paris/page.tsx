import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Pose Carrelage Salle de Bain Paris', item: 'https://espacedesignparis.fr/blog/pose-carrelage-salle-de-bain-paris' },
  ],
}

export const metadata: Metadata = {
  title: "Pose Carrelage Salle de Bain Paris : prix, types & artisan 2025 | Espace Design",
  description:
    "Pose de carrelage salle de bain à Paris : prix au m² en 2025, types de carrelage (grand format, mosaïque, zellige), préparation support, erreurs à éviter. Artisan carreleur Paris.",
  keywords: [
    'pose carrelage salle de bain Paris',
    'carreleur salle de bain Paris',
    'prix pose carrelage Paris',
    'carrelage grand format salle de bain',
    'zellige salle de bain Paris',
    'mosaïque salle de bain Paris',
    'artisan carrelage Paris',
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Pose Carrelage Salle de Bain Paris : prix, types & artisan 2025",
  description: "Guide complet sur la pose de carrelage en salle de bain à Paris : formats, prix au m², préparation du support et erreurs à éviter.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  url: 'https://espacedesignparis.fr/blog/pose-carrelage-salle-de-bain-paris',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix de pose de carrelage salle de bain à Paris en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix de pose de carrelage salle de bain à Paris se situe entre 50 et 120 €/m² pour la main d'oeuvre seule, selon le format et la complexité. Fourniture et pose incluses, comptez 90 à 200 €/m² pour du carrelage standard à intermédiaire. Pour du zellige ou du marbre posé en opus incertum, le tarif peut dépasser 250 €/m².",
      },
    },
    {
      '@type': 'Question',
      name: "Quel carrelage choisir pour une petite salle de bain ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Contrairement aux idées reçues, les grands formats (60x60 ou 80x80) agrandissent visuellement une petite salle de bain grâce à la réduction des joints. Les teintes claires (blanc, beige, gris clair) réfléchissent la lumière. La mosaïque hexagonale convient mieux aux niches de douche ou aux détails qu'au sol entier.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on carreler sur carrelage existant ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Techniquement oui, si l'ancien carrelage est parfaitement adhérent, plan et sans fissure. Mais cette solution n'est pas recommandée en salle de bain : elle surélève le sol (problème au niveau de la douche italienne), masque d'éventuels problèmes d'étanchéité et fragilise la fixation du nouveau carrelage sur le long terme. Espace Design conseille systématiquement la dépose avant pose.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps dure un chantier de carrelage salle de bain à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une salle de bain de 5 à 8 m², comptez 3 à 5 jours de carrelage pur : préparation du support (1 jour), pose du carrelage sol et mur (2 à 3 jours), jointoiement et finitions (1 jour). À cela s'ajoutent les délais de séchage des colles et enduits (24 à 48h entre chaque étape) qui allongent le chantier total à 5-7 jours ouvrés.",
      },
    },
  ],
}

export default function ArticlePoseCarrelageSalleDeBain() {
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
      <section className="pt-28 sm:pt-36 pb-12 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Guide & Conseils
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Pose Carrelage Salle de Bain Paris : guide complet artisan
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            La pose de carrelage en salle de bain est l&apos;un des postes les plus techniques
            d&apos;une rénovation. Mauvaise préparation du support, défaut d&apos;étanchéité,
            joints inégaux — les erreurs sont nombreuses et coûteuses à corriger. Espace
            Design, artisan carreleur à Paris, vous explique comment bien choisir votre
            carrelage, estimer votre budget et éviter les mauvaises surprises.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 — Types de carrelage */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Types de carrelage salle de bain : avantages et contraintes
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Chaque famille de carrelage a ses spécificités techniques. Le choix influe
              directement sur le coût de pose, la durée du chantier et l&apos;entretien futur.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Grand format (60×60, 80×80, 120×60 cm)
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Le grand format en grès cérame est la référence dans les salles de bain
                  parisiennes modernes. Il agrandit visuellement l&apos;espace, réduit le
                  nombre de joints (donc l&apos;entretien) et offre un rendu très propre.
                  Sa pose est plus exigeante : le support doit être rigoureusement plan
                  (tolérance de 3 mm sous la règle de 2 m). La colle doit être appliquée
                  en double encollage (au dos de la dalle et sur le support) pour éviter
                  les décollements.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Mosaïque (2×2, 5×5 cm)
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  La mosaïque, en verre, céramique ou marbre, est idéale pour les niches
                  de douche, les banquettes et les details décoratifs. Elle épouse les courbes
                  et les petits espaces. En revanche, la multitude de joints en fait un
                  revêtement plus capricieux à entretenir. La pose est chronophage et donc
                  plus coûteuse au m².
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Zellige marocain
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Le zellige connaît un vrai engouement dans les salles de bain parisiennes.
                  Chaque carreau est unique — nuances légèrement différentes, surface
                  irrégulière — ce qui donne un rendu vivant et chaleureux. Sa pose requiert
                  un artisan expérimenté : la planéité du support est critique, le taux de
                  casse est plus élevé qu&apos;un carrelage standard, et le joint doit être
                  soigneusement choisi pour mettre en valeur les couleurs sans les écraser.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Faïence métro biseautée
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  En 7,5×15 cm ou 10×20 cm, la faïence métro reste un classique intemporel.
                  Posée en brique avec un joint gris foncé contrasté, elle apporte un
                  caractère graphique efficace dans une salle de bain haussmannienne ou
                  contemporaine. Son prix de pose est maîtrisé — c&apos;est l&apos;un des
                  carrelages les plus accessibles à mettre en oeuvre.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 — Prix */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Prix pose carrelage salle de bain Paris 2025
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              À Paris, les tarifs de pose de carrelage sont plus élevés qu&apos;en province,
              du fait du coût de la main d&apos;oeuvre, des contraintes d&apos;accès aux
              chantiers (ascenseur étroit, pas de parking) et des délais de livraison des
              matériaux. Voici les fourchettes observées en 2025.
            </p>

            <div className="overflow-x-auto mb-5">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-medium text-[#1C1C1C] text-xs uppercase tracking-wide">Type de carrelage</th>
                    <th className="text-left py-2 pr-4 font-medium text-[#1C1C1C] text-xs uppercase tracking-wide">Pose seule (€/m²)</th>
                    <th className="text-left py-2 font-medium text-[#1C1C1C] text-xs uppercase tracking-wide">Fourni + posé (€/m²)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Faïence métro standard', '50 – 70 €', '80 – 120 €'],
                    ['Grès cérame 60×60', '60 – 90 €', '100 – 160 €'],
                    ['Grand format 80×80 ou 120×60', '80 – 120 €', '130 – 200 €'],
                    ['Mosaïque en niche', '100 – 150 €', '150 – 230 €'],
                    ['Zellige marocain', '120 – 180 €', '180 – 300 €'],
                    ['Marbre ou pierre naturelle', '150 – 250 €', '250 – 450 €'],
                  ].map(([type, pose, fourni]) => (
                    <tr key={type}>
                      <td className="py-2 pr-4 text-gray-600 font-light">{type}</td>
                      <td className="py-2 pr-4 text-gray-600 font-light">{pose}</td>
                      <td className="py-2 text-gray-600 font-light">{fourni}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Ces prix s&apos;entendent hors préparation du support (ragréage, étanchéité),
              hors dépose de l&apos;ancien carrelage et hors fournitures de chantier (colle,
              joint, profilés). Comptez 20 à 40 €/m² supplémentaires pour la dépose et
              le ragréage dans un appartement ancien.
            </p>
          </div>

          {/* Section 3 — Préparation support */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Préparation du support : l&apos;étape que l&apos;on saute à tort
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La qualité d&apos;une pose de carrelage dépend à 70 % de la préparation du
              support. C&apos;est l&apos;étape la plus souvent bâclée par les artisans qui
              cherchent à aller vite — et la source principale des désordres constatés
              quelques années après les travaux.
            </p>
            <ol className="space-y-3">
              {[
                { num: '01', title: 'Dépose et nettoyage', detail: "Retrait de l'ancien carrelage ou revêtement, nettoyage complet du support pour éliminer toute trace de colle, peinture ou corps gras." },
                { num: '02', title: 'Ragréage et planéité', detail: "Application d'un ragréage autolissant ou d'une chape pour corriger les irrégularités. Tolérance max : 3 mm sous la règle de 2 m pour les grands formats." },
                { num: '03', title: 'Étanchéité', detail: "Pose d'une membrane d'étanchéité (SPEC ou résine liquide) sur les angles et autour de la douche. Bandes à joint aux jonctions sol/mur. Étape critique pour éviter les fuites dans le plancher." },
                { num: '04', title: 'Calepinage', detail: "Définir l'implantation du carrelage avant de commencer : centrage, orientation, gestion des chutes en périphérie. Un mauvais calepinage donne des coupes inesthétiques visibles depuis l'entrée." },
                { num: '05', title: 'Choix de la colle', detail: "Colle en poudre C2S (déformable, améliorée) pour les grands formats. Colle blanche pour les matériaux clairs (marbre, zellige) afin d'éviter les taches de fond." },
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

          {/* Section 4 — Joints et finitions */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Joint, profilés et finitions : les détails qui font la différence
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le joint est souvent considéré comme un détail — c&apos;est en réalité un élément
              de design à part entière et un enjeu d&apos;étanchéité majeur.
            </p>
            <ul className="space-y-3 mb-5">
              {[
                "Joint époxy : imperméable, résistant aux taches, idéal en douche. Plus difficile à poser que le joint ciment, mais incomparable en durabilité.",
                "Joint ciment hydrofugé : suffisant pour les murs hors zone humide. Choisir une teinte contrastée pour souligner le calepinage ou une teinte proche du carrelage pour un effet unifié.",
                "Largeur de joint : 1,5 à 2 mm pour les grands formats rectifiés, 3 à 5 mm pour les carreaux non rectifiés comme le zellige.",
                "Profilés de finition : profilé d'angle en aluminium anodisé ou en inox pour les arêtes de douche, profilé de seuil en laiton entre deux revêtements différents.",
                "Silicone sanitaire : aux angles intérieurs et aux jonctions robinetterie/carrelage — jamais de joint ciment à ces endroits, qui craquèle inévitablement.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5 — Erreurs à éviter */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              5 erreurs à éviter lors de la pose de carrelage en salle de bain
            </h2>
            <div className="space-y-4">
              {[
                {
                  num: '1',
                  title: "Carreler sur carrelage existant",
                  desc: "Tentant pour gagner du temps, risqué pour la durabilité. Surtout dans une douche où l'étanchéité doit être garantie dès le support.",
                },
                {
                  num: '2',
                  title: "Négliger le temps de séchage",
                  desc: "Poser le carrelage mural avant que la colle du sol soit sèche, ou jointoyer trop tôt — les mouvements créent des fissurations. Respecter les 24h minimum entre chaque étape.",
                },
                {
                  num: '3',
                  title: "Oublier les joints de dilatation",
                  desc: "Pour les surfaces de plus de 4 m² ou en présence de plancher chauffant, des joints de dilatation périphériques sont obligatoires. Leur absence provoque le soulèvement du carrelage.",
                },
                {
                  num: '4',
                  title: "Choisir un carrelage non adapté à la zone humide",
                  desc: "En douche, le carrelage de sol doit être antidérapant (classement R10 minimum). Certains grès polis ou pièces décoratives ne conviennent pas à une utilisation au sol en zone mouillée.",
                },
                {
                  num: '5',
                  title: "Sous-estimer les chutes de matière",
                  desc: "Prévoir 10 % de supplément pour les coupes sur un carrelage standard, 15 à 20 % pour le zellige ou les petits formats. Commander trop juste expose à ne pas trouver le même lot en cas de casse.",
                },
              ].map((err) => (
                <div key={err.num} className="flex gap-4">
                  <span className="font-display text-2xl font-semibold text-[#D4AF37]/60 flex-shrink-0 w-8">{err.num}</span>
                  <div>
                    <span className="text-[#1C1C1C] text-sm font-medium">{err.title} : </span>
                    <span className="text-gray-600 text-sm font-light">{err.desc}</span>
                  </div>
                </div>
              ))}
            </div>
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
                q: "Quel est le prix de pose de carrelage salle de bain à Paris en 2025 ?",
                a: "Entre 50 et 120 €/m² pour la main d'oeuvre seule. Fourniture et pose incluses, comptez 90 à 200 €/m² pour du carrelage standard à intermédiaire. Pour du zellige ou du marbre, le tarif peut dépasser 250 €/m². Ces tarifs s'entendent hors dépose et ragréage.",
              },
              {
                q: "Quel carrelage choisir pour une petite salle de bain ?",
                a: "Les grands formats (60x60 ou 80x80) agrandissent visuellement une petite pièce en réduisant les joints. Les teintes claires réfléchissent la lumière. La faïence métro biseautée posée en vertical donne de la hauteur. Évitez les petits formats foncés qui alourdissent l'espace.",
              },
              {
                q: "Peut-on carreler sur carrelage existant ?",
                a: "Techniquement possible si l'ancien carrelage est parfaitement adhérent et plan, mais non recommandé en salle de bain : surélévation du sol problématique pour la douche italienne, risque de masquer des problèmes d'étanchéité. Espace Design recommande toujours la dépose avant pose.",
              },
              {
                q: "Combien de temps dure un chantier de carrelage salle de bain à Paris ?",
                a: "Pour une salle de bain de 5 à 8 m², comptez 5 à 7 jours ouvrés en tout : préparation du support, pose sol et mur, jointoiement, finitions — plus les temps de séchage entre chaque étape (24 à 48h).",
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
              { href: '/carrelage-paris', label: 'Carrelage Paris' },
              { href: '/renovation-salle-de-bain-paris', label: 'Rénovation salle de bain Paris' },
              { href: '/blog/carrelage-appartement-paris', label: 'Guide carrelage appartement' },
              { href: '/blog/renovation-salle-de-bain-haussmannien', label: 'SDB haussmannienne Paris' },
              { href: '/blog/choisir-carrelage-salle-de-bain', label: 'Choisir son carrelage' },
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
          Besoin d&apos;un artisan carreleur à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Devis gratuit sous 48h. Déplacement sans engagement dans tout Paris et Île-de-France.
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
