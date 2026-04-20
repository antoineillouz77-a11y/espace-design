import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 11e Bastille', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-11e-bastille' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Appartement Paris 11e Bastille : artisan & prix 2025 | Espace Design",
  description: "Rénover un appartement dans le 11e arrondissement de Paris (Bastille, Oberkampf, Nation, Charonne) : contraintes bâti ancien, prix 2025 et artisan local.",
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-11e-bastille',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation complète dans le 11e arrondissement de Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le 11e arrondissement, le prix d'une rénovation complète varie entre 800 et 1 800 €/m² selon l'état du logement et le niveau de prestations. Pour un appartement de 50 m² en rénovation lourde (électricité, plomberie, cloisons, sols, salle de bain, cuisine), comptez 50 000 à 90 000 €. Une rénovation légère (rafraîchissement, peinture, sols) se situe entre 200 et 500 €/m². La forte demande locative du quartier justifie souvent un budget rénovation plus conséquent pour valoriser le bien.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il une autorisation pour rénover dans le 11e arrondissement ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La plupart des travaux intérieurs (peinture, carrelage, cloisons non porteuses) ne nécessitent aucune déclaration. En revanche, la modification de façade (fenêtres, volets, ravalement) exige une déclaration préalable de travaux en mairie. Si l'immeuble est en copropriété, les travaux affectant les parties communes ou la structure (murs porteurs) nécessitent une autorisation de l'assemblée générale. Le 11e ne compte pas de secteur sauvegardé classé, ce qui simplifie les démarches par rapport aux arrondissements historiques.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelles sont les contraintes de rénovation dans les immeubles anciens du 11e ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les immeubles haussmanniens et de faubourg du 11e présentent des contraintes spécifiques : planchers bois anciens (souvent à rénover ou renforcer), murs en pierre de taille ou brique (isolation complexe), hauteur sous plafond élevée (idéale pour mezzanines), plomberie en plomb à remplacer dans les immeubles d'avant 1950, électricité vétuste (tableau à moderniser), et caves humides. Ces contraintes influent directement sur le budget, qui peut augmenter de 20 à 40 % par rapport à un appartement de construction récente.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment valoriser un appartement du 11e avant de le mettre en location ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le 11e affiche une forte tension locative, notamment autour de Bastille, Oberkampf et Nation. Pour maximiser le loyer, les travaux les plus rentables sont : la réfection complète de la salle de bain (retour sur investissement en 3 à 5 ans), l'installation d'une cuisine ouverte (très demandée par les locataires jeunes actifs), le remplacement des sols (parquet massif ou carrelage grand format), et la mise aux normes électrique (sécurité et économies d'énergie). Un DPE amélioré (passage de E à C) peut également augmenter le loyer de 10 à 15 %.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Appartement Paris 11e Bastille : artisan & prix 2025 | Espace Design",
  description: "Rénover un appartement dans le 11e arrondissement de Paris (Bastille, Oberkampf, Nation, Charonne) : contraintes bâti ancien, prix 2025 et artisan local.",
  keywords: "rénovation appartement Paris 11e, rénovation Bastille, artisan Paris 11, travaux appartement Oberkampf, rénovation Nation Charonne",
}

export default function ArticleRenovation11eBastille() {
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
            Rénovation Appartement Paris 11e Bastille : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le 11e arrondissement — Bastille, Oberkampf, Nation, Charonne — est l&apos;un des quartiers les plus dynamiques de Paris. Son bâti mêle immeubles haussmanniens, immeubles de faubourg et constructions des années 1960. Rénover dans ce secteur demande de connaître les contraintes spécifiques du bâti ancien et les opportunités de valorisation locative. Guide complet 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Profil du quartier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le 11e arrondissement : profil immobilier et enjeux de rénovation
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Longtemps populaire et artisanal, le 11e a connu une transformation profonde depuis les années 2000 : gentrification progressive, essor des restaurants et bars branchés autour d&apos;Oberkampf et de la rue de la Roquette, forte demande des jeunes actifs et des familles. Le parc immobilier reste très majoritairement ancien (avant 1970), avec une proportion importante d&apos;appartements nécessitant une remise à niveau.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La tension locative est forte : le 11e affiche des loyers moyens de 27 à 35 €/m² pour un appartement rénové. Un bien en bon état se loue plus vite et à un loyer supérieur de 10 à 20 % par rapport à un bien vétuste. Investir dans la rénovation représente donc un levier direct de valorisation du patrimoine.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: "Bastille / Bréguet-Sabin",
                  detail: "Secteur très prisé, proche de la place de la Bastille et du marché d'Aligre. Immeubles haussmanniens avec beaux volumes, plafonds hauts, moulures. Forte demande pour les appartements rénovés avec standing. Prix au m² parmi les plus élevés du 11e (7 000 à 9 500 €/m²). Les travaux de rénovation soignée se valorisent particulièrement bien.",
                },
                {
                  enjeu: "Oberkampf / Saint-Ambroise",
                  detail: "Quartier branché très demandé par les jeunes actifs et les expatriés. Mix d'immeubles de faubourg (3-4 étages, cours intérieures) et d'immeubles haussmanniens. Forte demande pour les appartements avec cuisine ouverte et décoration contemporaine. Idéal pour la location meublée de courte ou moyenne durée.",
                },
                {
                  enjeu: "Nation / Charonne",
                  detail: "Secteur plus familial, en mutation depuis 10 ans. Immeubles des années 1950-1970 avec des appartements souvent plus grands (3-4 pièces). Forte demande des familles pour les appartements proches des écoles. Rénovations axées sur la fonctionnalité : cuisine ouverte, rangements optimisés, isolation thermique et phonique.",
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

      {/* Section 2 — Contraintes bâti ancien */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes techniques du bâti ancien parisien dans le 11e
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Rénover dans un immeuble ancien du 11e n&apos;est pas la même chose que rénover dans un appartement de construction récente. Les artisans doivent maîtriser des techniques spécifiques et anticiper les surprises fréquentes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Planchers bois anciens",
                solution: "Les planchers bois du XIXe siècle sont souvent en bon état structurel mais peuvent présenter des lames dégradées, des grincements ou une isolation phonique insuffisante. Solutions : ponçage et vitrification (500 à 1 500 €), remplacement de lames défectueuses (80 à 150 €/m²), ou pose d'une chape sèche pour améliorer l'isolation entre étages.",
                cout: "500 – 3 000 €",
              },
              {
                titre: "Plomberie en plomb",
                solution: "Dans les immeubles d'avant 1950, les colonnes de plomberie et parfois les raccordements intérieurs sont encore en plomb. Le remplacement est obligatoire lors d'une rénovation de salle de bain ou de cuisine. Comptez 2 000 à 5 000 € pour la réfection complète de la plomberie d'un appartement de 50 m².",
                cout: "2 000 – 5 000 €",
              },
              {
                titre: "Électricité vétuste",
                solution: "Les appartements antérieurs à 1975 sont souvent équipés de tableaux électriques en fuse ou de fils sans terre. La mise aux normes (tableau différentiel, mise à la terre, circuits dédiés cuisine et SDB) est indispensable pour la sécurité et impose souvent l'ouverture de saignées dans les murs. Budget : 3 000 à 8 000 €.",
                cout: "3 000 – 8 000 €",
              },
              {
                titre: "Murs porteurs et cloisons",
                solution: "Avant tout abattage de cloison, un bureau d'études doit confirmer qu'elle n'est pas porteuse. Dans le bâti parisien, les murs en pierre ou en brique de 20 cm sont souvent porteurs. L'abattage d'un mur porteur avec pose d'un IPN (poutre métallique) coûte 3 000 à 8 000 € et nécessite l'accord de la copropriété.",
                cout: "3 000 – 8 000 €",
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

      {/* Section 3 — Travaux les plus demandés */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux les plus demandés dans le 11e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La demande locative du 11e oriente clairement les priorités de rénovation. Voici les travaux qui offrent le meilleur retour sur investissement dans ce quartier.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Ouverture cuisine sur salon",
                prix: "3 000 – 12 000 €",
                detail: "La cuisine ouverte est la demande numéro 1 des locataires du 11e. L'abattage ou la suppression d'une cloison non porteuse (1 000 à 3 000 €) combiné à un réaménagement de la cuisine (3 000 à 8 000 €) transforme un appartement cloisonné en loft lumineux. Les studios et 2-pièces se louent beaucoup plus vite avec une cuisine ouverte bien équipée.",
              },
              {
                type: "Rénovation salle de bain complète",
                prix: "4 000 – 12 000 €",
                detail: "Les salles de bain des immeubles anciens du 11e sont souvent petites (3 à 5 m²) et vétustes. Une rénovation complète (démolition, étanchéité, carrelage, plomberie, meuble vasque, douche à l'italienne ou baignoire) valorise immédiatement le bien. La douche à l'italienne est particulièrement appréciée dans les petits espaces : elle agrandit visuellement la pièce.",
              },
              {
                type: "Isolation phonique inter-étages",
                prix: "2 000 – 6 000 €",
                detail: "L'isolation phonique est un point critique dans les immeubles anciens à planchers bois. Les locataires du 11e, souvent dans des quartiers animés, sont très sensibles aux nuisances sonores. La pose d'une chape sèche phonique (Fermacell ou équivalent) entre le plancher bois et le sol fini réduit significativement les bruits d'impact. Un double vitrage phonique (38 à 44 dB) complète le dispositif.",
              },
              {
                type: "Mise aux normes électriques et création de rangements",
                prix: "3 000 – 10 000 €",
                detail: "La mise aux normes électriques (tableau différentiel, circuits dédiés, prises RJ45) est souvent couplée à la création de rangements sur-mesure (bibliothèque encastrée, dressing, placard sous escalier). Ces aménagements sont très valorisants dans les petits appartements du 11e où l'espace de rangement fait souvent défaut.",
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

      {/* Section 4 — Budget récapitulatif */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget rénovation Paris 11e : récapitulatif des prix 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Estimations pour un appartement du 11e arrondissement, main d&apos;œuvre et matériaux inclus.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Poste</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix min</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix max</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée chantier</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { poste: "Rafraîchissement (peinture + sols)", min: "5 000 €", max: "15 000 €", duree: "1 – 2 sem." },
                  { poste: "Rénovation salle de bain", min: "4 000 €", max: "12 000 €", duree: "1 – 2 sem." },
                  { poste: "Rénovation cuisine", min: "4 000 €", max: "15 000 €", duree: "1 – 2 sem." },
                  { poste: "Mise aux normes électriques", min: "3 000 €", max: "8 000 €", duree: "3 – 7 jours" },
                  { poste: "Isolation phonique plancher", min: "2 000 €", max: "6 000 €", duree: "3 – 5 jours" },
                  { poste: "Rénovation complète (50 m²)", min: "40 000 €", max: "90 000 €", duree: "6 – 12 sem." },
                ].map((row, i) => (
                  <tr key={row.poste} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.poste}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.min}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.max}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour optimiser votre budget dans le 11e
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Faire réaliser 3 devis détaillés auprès d'artisans locaux avant de choisir",
                "Regrouper les chantiers (électricité + plomberie) pour réduire le coût des travaux de second œuvre",
                "Prioriser la mise aux normes électriques avant tout travail de finition",
                "Vérifier le DPE actuel : une amélioration de classe énergétique augmente la valeur locative",
                "Anticiper les travaux de parties communes si rénovation globale de l'immeuble prévue",
                "Consulter le syndic avant tout abattage de cloison ou modification de structure",
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

      {/* Section 5 — Spécificités locatives */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénovation pour la location dans le 11e : ce qui fait la différence
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 11e est l&apos;un des arrondissements parisiens où la demande locative est la plus soutenue. Les appartements rénovés avec soin se louent en quelques jours, à des loyers supérieurs de 15 à 25 % aux biens vétustes. Quelques points à privilégier :
          </p>
          <div className="space-y-4">
            {[
              {
                enjeu: "Luminosité et volumes",
                detail: "Les locataires du 11e sont très sensibles à la luminosité. Supprimer les cloisons inutiles pour créer un séjour ouvert, opter pour des finitions claires (blancs chauds, béton ciré clair), et maximiser les apports de lumière naturelle sont des leviers puissants. Les appartements traversants (double exposition) se louent systématiquement plus cher.",
              },
              {
                enjeu: "Cuisine équipée et fonctionnelle",
                detail: "La cuisine équipée est incontournable pour la location dans ce quartier. Les jeunes actifs qui constituent la majorité des locataires du 11e ne souhaitent pas investir dans l'équipement cuisine. Une cuisine ouverte avec ilot ou bar, équipée d'un lave-vaisselle, d'un four, d'un réfrigérateur et d'une plaque à induction, augmente significativement l'attractivité du bien.",
              },
              {
                enjeu: "Connectivité et domotique légère",
                detail: "La fibre optique (passage gaine), les prises RJ45 dans chaque pièce, et quelques éléments de domotique accessible (thermostat connecté, éclairage LED commandable) font partie des attentes des locataires du 11e, profil CSP+ et digital natives. Ces éléments coûtent peu à intégrer lors d'une rénovation électrique et constituent un argument de location.",
              },
            ].map((el) => (
              <div key={el.enjeu} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.enjeu}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Réglementation copropriété */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Réglementation et copropriété : ce qu&apos;il faut savoir avant de commencer
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La grande majorité des appartements du 11e sont en copropriété. Avant tout chantier, il convient de vérifier les règles applicables pour éviter des conflits ou des arrêts de chantier.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                titre: "Travaux sans autorisation",
                detail: "Peinture, revêtements de sol, remplacement de robinetterie, pose d'équipements électriques en remplacement à l'identique. Aucune déclaration nécessaire.",
              },
              {
                titre: "Déclaration préalable mairie",
                detail: "Modification de façade (fenêtres, volets, portes), ravalement. À déposer en mairie du 11e, délai d'instruction 1 mois.",
              },
              {
                titre: "Autorisation AG copropriété",
                detail: "Travaux affectant les parties communes, percement d'un mur porteur, modification des canalisations communes. Nécessite un vote en assemblée générale.",
              },
              {
                titre: "Déclaration bruit de chantier",
                detail: "Pour les travaux bruyants, il est recommandé d'informer la copropriété et les voisins. Les horaires légaux à Paris sont 7h-22h en semaine, 8h-20h le samedi.",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
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

      {/* Guides connexes */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Guides connexes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/renovation-cuisine-ouverte-paris', title: 'Cuisine ouverte Paris' },
              { href: '/blog/renovation-salle-de-bain-italienne-paris', title: 'Douche à l\'italienne Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/humidite-appartement-paris', title: 'Humidité appartement Paris' },
              { href: '/blog/renovation-cave-amenagee-paris', title: 'Cave aménagée Paris' },
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
          Rénovez votre appartement dans le 11e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan local Paris 11e. Devis gratuit sous 48h. Chantier propre et respectueux des voisins.
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
