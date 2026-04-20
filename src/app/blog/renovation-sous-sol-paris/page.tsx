import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Aménagement Sous-Sol Paris', item: 'https://espacedesignparis.fr/blog/renovation-sous-sol-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Aménagement Sous-Sol Paris : cave, parking & buanderie 2025 | Espace Design',
  description: 'Aménager son sous-sol à Paris : cave en buanderie, local vélos, isolation, humidité. Contraintes copropriété, prix et conseils 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-sous-sol-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Faut-il un accord de copropriété pour aménager sa cave à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Tout dépend de la nature des travaux. Aménager l'intérieur de votre cave privative (peinture, étagères, sol, éclairage) ne nécessite généralement pas l'accord de la copropriété. En revanche, tout travail touchant les murs porteurs, la ventilation, l'électricité commune ou modifiant l'aspect des parties communes requiert un vote en assemblée générale. Si vous souhaitez transformer une cave en espace habitable (bureau, chambre), un permis de construire peut être exigé car cela crée de la surface de plancher. Consultez le règlement de copropriété et un architecte avant de commencer.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment traiter l'humidité dans une cave parisienne ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'humidité d'une cave parisienne peut venir de plusieurs sources : remontées capillaires par le sol et les murs (eau du sol qui monte par capillarité), infiltrations latérales (joints de fondation défaillants), ou condensation (air humide en contact avec des surfaces froides). Le traitement dépend de la cause : cuvelage par injection de résine hydrophobe (60 à 150 €/m²) pour les remontées capillaires, drainage périphérique avec pompe de relevage (3 000 à 8 000 €) pour les infiltrations importantes, et ventilation mécanique (VMC) pour la condensation. Un diagnostic humidité préalable (200 à 500 €) est fortement recommandé avant tout aménagement.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix pour aménager un sous-sol à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le coût d'aménagement d'un sous-sol parisien varie selon l'état initial et l'usage final. Pour une cave en buanderie fonctionnelle (éclairage, prises, lave-linge) : 2 000 à 5 000 €. Pour un espace cave à vin aménagé avec isolation thermique et hygrométrie contrôlée : 3 000 à 8 000 €. Pour un local vélos sécurisé avec éclairage et revêtement de sol : 1 500 à 4 000 €. Pour la transformation en bureau ou pièce habitable (si autorisée) avec traitement complet humidité + isolation + électricité : 15 000 à 40 000 € selon la surface et la complexité du traitement humidité.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Aménagement Sous-Sol Paris : cave, parking & buanderie 2025 | Espace Design',
  description: 'Aménager son sous-sol à Paris : cave en buanderie, local vélos, isolation, humidité. Contraintes copropriété, prix et conseils 2025.',
}

export default function ArticleRenovationSousSol() {
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
            Aménagement Sous-Sol Paris : cave, parking &amp; buanderie 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Cave humide, parking inutilisé, local commun vétuste : le sous-sol parisien est souvent un espace négligé qui recèle pourtant un vrai potentiel. Traitement de l&apos;humidité, contraintes de copropriété, aménagement en buanderie ou cave à vin — guide complet 2025 pour transformer votre sous-sol en atout.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de sous-sols */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Types de sous-sols parisiens et leur potentiel d&apos;aménagement
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Les immeubles parisiens, qu&apos;ils soient haussmanniens ou de construction plus récente, disposent de sous-sols très variés. Leur configuration initiale conditionne fortement ce qu&apos;il est possible d&apos;y faire — et à quel coût.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Avant tout projet, il convient d&apos;identifier précisément le statut juridique de l&apos;espace (privatif ou commun), son état structurel et les contraintes techniques liées à la profondeur, à l&apos;humidité et à la ventilation.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Cave privative',
                  detail: "Espace attribué à un lot de copropriété, généralement délimité par des cloisons ou du grillage. Surface typique : 3 à 15 m². Aménagements courants : buanderie, cave à vin, rangement optimisé, local vélos personnel. Les travaux intérieurs ne nécessitent pas d'accord de copropriété si aucune partie commune n'est touchée.",
                },
                {
                  enjeu: 'Parking en sous-sol',
                  detail: "Box fermé ou place de stationnement en sous-sol. Peut être aménagé en atelier, local de stockage ou espace de rangement structuré si le règlement de copropriété l'autorise. La hauteur sous plafond (souvent 2,10 à 2,40 m) et la ventilation sont les principales contraintes.",
                },
                {
                  enjeu: 'Local commun (chaufferie, poussettes, vélos)',
                  detail: "Espace appartenant à la copropriété dans son ensemble. Tout réaménagement requiert un vote en assemblée générale. Les projets courants : création d'un local vélos sécurisé, modernisation de la buanderie commune, amélioration de l'éclairage et de la signalétique.",
                },
                {
                  enjeu: 'Cave voûtée haussmannienne',
                  detail: "Caractéristique des immeubles du XIXe siècle, ces caves en pierre de taille offrent un cachet architectural indéniable. Leur structure en voûte impose des contraintes spécifiques pour l'isolation et l'installation de cloisons. Elles se prêtent particulièrement bien à l'aménagement en cave à vin ou en espace de dégustation.",
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

      {/* Section 2 — Traitement humidité */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Traitement de l&apos;humidité : étape indispensable avant tout aménagement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;humidité est l&apos;ennemi numéro un des sous-sols parisiens. Elle se manifeste sous trois formes principales, chacune nécessitant une solution différente. Un diagnostic préalable est toujours recommandé avant de lancer des travaux d&apos;aménagement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Remontées capillaires',
                solution: "L'eau du sol remonte dans les murs par capillarité. Solution : injection de résine hydrophobe dans les murs ou cuvelage intérieur avec enduit étanche. Symptômes : auréoles, efflorescences blanches (salpêtre), peinture qui cloque en bas des murs.",
                cout: '60 – 150 €/m²',
              },
              {
                titre: 'Infiltrations latérales',
                solution: "Eau qui s'infiltre par les joints de fondation ou les fissures. Solution : drainage périphérique extérieur (si accessible) avec membrane d'étanchéité, ou drainage intérieur avec collecte vers une pompe de relevage. Intervention lourde mais durable.",
                cout: '3 000 – 8 000 €',
              },
              {
                titre: 'Condensation',
                solution: "Air chaud et humide se refroidit sur les surfaces froides du sous-sol. Solution : ventilation mécanique (VMC ou extracteur hygroréglable), isolation thermique des parois pour élever leur température de surface, et contrôle de l'hygrométrie.",
                cout: '800 – 2 500 €',
              },
              {
                titre: 'Cuvelage complet',
                solution: "Pour les caves destinées à un usage régulier (buanderie, cave à vin, bureau), un cuvelage complet (murs + sol + angles) avec enduit drainant et membrane d'étanchéité garantit une protection durable. Solution la plus fiable pour les zones très humides.",
                cout: '100 – 200 €/m²',
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

      {/* Section 3 — Isolation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Isolation thermique et phonique du sous-sol parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Un sous-sol non isolé perd une partie de la chaleur de l&apos;appartement situé au-dessus et transmet les bruits entre les niveaux. L&apos;isolation du sous-sol, même partielle, améliore sensiblement le confort et réduit les factures énergétiques.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Isolation du plafond de cave (plancher bas du rez-de-chaussée)",
                prix: '25 – 60 €/m²',
                detail: "Pose de panneaux rigides en laine de roche ou polystyrène expansé (PSE) contre le plafond de la cave. Réduit les pertes de chaleur vers le bas depuis l'appartement du dessus. Solution simple, rapide et peu coûteuse. Gain thermique significatif si le sol du rez-de-chaussée est froid.",
              },
              {
                type: 'Isolation des murs périphériques',
                prix: '40 – 100 €/m²',
                detail: "Doublage des murs extérieurs en contact avec la terre par des panneaux isolants. Attention : l'isolant choisi doit être adapté aux environnements humides (laine de roche hydrophobe, polystyrène extrudé XPS). Éviter la laine de verre classique qui se dégrade en présence d'humidité.",
              },
              {
                type: 'Isolation phonique plafond',
                prix: '60 – 130 €/m²',
                detail: "Faux-plafond désolidarisé avec laine minérale haute densité pour réduire les bruits d'impact transmis entre le sous-sol et l'appartement. Particulièrement utile si le sous-sol est aménagé en espace actif (buanderie, atelier) sous une pièce de vie.",
              },
              {
                type: 'Isolation du sol contre terre',
                prix: '30 – 70 €/m²',
                detail: "Dalle béton avec rupteur thermique ou chape sèche sur panneaux XPS. Élimine l'effet de sol froid caractéristique des caves et réduit les remontées d'humidité par le sol. Indispensable pour tout aménagement à usage régulier.",
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

      {/* Section 4 — Aménagements possibles */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Aménagements possibles : buanderie, cave à vin, bureau
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Une fois l&apos;humidité traitée et l&apos;isolation réalisée, le sous-sol parisien peut accueillir de nombreux usages qui soulagent l&apos;appartement principal. Voici les aménagements les plus demandés et les conditions à réunir.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Buanderie en cave',
                prix: '2 500 – 6 000 €',
                detail: "Installation d'un lave-linge (et éventuellement sèche-linge) avec arrivée et évacuation d'eau, circuit électrique dédié (20 A minimum), éclairage, ventilation et étagères de rangement. Nécessite un accès à une colonne d'eau et une évacuation — vérifier la faisabilité avec un plombier. Libère de la place dans la salle de bains.",
              },
              {
                type: 'Cave à vin aménagée',
                prix: '3 000 – 10 000 €',
                detail: "Isolation thermique renforcée (température stable entre 12 et 14 °C), hygrométrie contrôlée (70 à 80 %), éclairage LED basse chaleur, casiers à bouteilles bois ou métal, sol en pierre naturelle ou carrelage. Pour les caves voûtées haussmanniennes, l'environnement naturel est souvent déjà favorable : froid constant et légère humidité.",
              },
              {
                type: 'Local vélos sécurisé',
                prix: '1 500 – 4 000 €',
                detail: "Revêtement de sol antidérapant, anneaux d'accrochage muraux ou supports vélos verticaux, éclairage automatique (détecteur de présence), porte sécurisée avec serrure à code ou badge. Si c'est une partie commune, le vote en AG est nécessaire — mais ce type de projet est souvent bien accueilli par les copropriétaires.",
              },
              {
                type: 'Bureau ou espace de travail',
                prix: '15 000 – 40 000 €',
                detail: "Transformation d'une cave en espace habitable : traitement complet humidité + cuvelage, isolation thermique et phonique, faux-plafond, revêtement de sol, électricité, Internet, ventilation VMC. Attention : si cette transformation crée de la surface de plancher, un permis de construire est obligatoire. À Paris, la mairie peut refuser si la hauteur sous plafond est insuffisante (minimum légal : 2,20 m).",
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
        </div>
      </section>

      {/* Section 5 — Contraintes réglementaires */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes réglementaires et copropriété
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Avant tout aménagement de sous-sol à Paris, il est essentiel de vérifier le règlement de copropriété et les règles d&apos;urbanisme applicables. Des erreurs réglementaires peuvent entraîner l&apos;obligation de remettre les lieux en état à vos frais.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Vérifier le règlement de copropriété avant tout projet (destination des lots, usages autorisés)",
              "Travaux sur parties communes : vote en AG à la majorité de l'article 25 ou 24 selon la nature",
              "Transformation en espace habitable : permis de construire obligatoire si création de surface de plancher",
              "Hauteur sous plafond minimale pour un espace habitable : 2,20 m (code de la construction)",
              "Raccordement eau et électricité : vérifier la capacité du tableau général et les colonnes montantes",
              "Ventilation obligatoire pour tout usage (buanderie, bureau) : VMC ou grille de ventilation réglementaire",
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
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/renovation-hall-immeuble-paris', title: 'Rénovation hall immeuble Paris' },
              { href: '/blog/renovation-cage-escalier-paris', title: "Rénovation cage d'escalier Paris" },
              { href: '/plomberie-paris', title: 'Plomberie Paris' },
              { href: '/electricite-paris', title: 'Électricité Paris' },
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
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
              { href: '/renovation-saint-denis', label: 'Saint-Denis' },
              { href: '/renovation-pantin', label: 'Pantin' },
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
          Transformez votre sous-sol parisien en espace utile
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisans spécialisés en aménagement et traitement humidité.
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
