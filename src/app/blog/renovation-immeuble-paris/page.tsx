import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Immeuble Paris', item: 'https://espacedesignparis.fr/blog/renovation-immeuble-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Immeuble Paris : parties communes, cage escalier & prix 2025',
  description: "Rénover les parties communes d'un immeuble parisien : hall d'entrée, cage escalier, façade. Décisions en copropriété, répartition des charges et prix 2025.",
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-immeuble-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Qui décide et qui paie la rénovation des parties communes d'un immeuble parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les décisions de rénovation des parties communes d'un immeuble en copropriété sont votées en assemblée générale. Les travaux d'entretien courant peuvent être décidés par le syndic ou votés à la majorité simple (article 24). Les travaux importants (ravalement de façade, réfection de cage d'escalier) nécessitent une majorité absolue (article 25). Les frais sont répartis entre les copropriétaires en fonction de leurs tantièmes de parties communes, inscrits dans le règlement de copropriété.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix de rénovation d'une cage d'escalier à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix de rénovation d'une cage d'escalier à Paris dépend de la hauteur de l'immeuble et des prestations. Pour un immeuble de 5 étages : peinture simple 3 000 – 8 000 €, réfection complète (enduit + peinture + sol + garde-corps) 15 000 – 40 000 €. Pour un immeuble de 8 étages et plus : 25 000 – 80 000 €. Ces travaux sont votés en AG et répartis entre copropriétaires selon les tantièmes. Des aides (MaPrimeRénov' Copropriétés, ANAH) peuvent réduire le reste à charge.",
      },
    },
    {
      '@type': 'Question',
      name: "Le ravalement de façade est-il obligatoire à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À Paris, le ravalement de façade est rendu obligatoire par la réglementation municipale tous les 10 ans si l'aspect de la façade est dégradé (article L. 132-1 du Code de la construction). La Ville de Paris peut mettre en demeure le syndic de réaliser les travaux dans un délai imparti. En cas de péril ou de risque de chute d'éléments, une injonction d'urgence est possible. Le ravalement est aussi l'occasion d'intégrer une isolation thermique par l'extérieur (ITE), éligible aux aides ANAH.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment obtenir des aides pour la rénovation d'un immeuble parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Plusieurs dispositifs d'aides existent pour les copropriétés parisiennes. MaPrimeRénov' Copropriétés (ANAH) : jusqu'à 25% du montant des travaux pour les immeubles réalisant un gain énergétique d'au moins 35%. Éco-PTZ Copropriétés : prêt collectif à taux zéro. Aides de la Ville de Paris : subventions pour le ravalement incluant l'isolation thermique. Action Logement peut aussi intervenir pour certains immeubles. La demande se fait via un Espace Conseil France Rénov' ou un AMO (assistant à maîtrise d'ouvrage) agréé.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Immeuble Paris : parties communes, cage escalier & prix 2025 | Espace Design',
  description: "Rénover les parties communes d'un immeuble parisien : hall d'entrée, cage escalier, façade. Décisions en copropriété, répartition des charges et prix 2025.",
  keywords: ['rénovation immeuble Paris', 'rénovation parties communes Paris', 'cage escalier Paris', 'ravalement façade Paris', 'copropriété travaux Paris'],
}

export default function ArticleRenovationImmeubelParis() {
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
            Rénovation Immeuble Paris : parties communes, cage escalier et prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La rénovation des parties communes d&apos;un immeuble parisien — hall d&apos;entrée, cage escalier, façade, toiture — est une décision collective en copropriété. Elle implique des votes en assemblée générale, une répartition des charges entre copropriétaires et des démarches administratives spécifiques à Paris. Guide complet 2025 avec les prix réels.
          </p>
        </div>
      </section>

      {/* Section 1 — Parties communes : de quoi parle-t-on ? */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Parties communes d&apos;un immeuble parisien : ce qui peut être rénové
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Les parties communes d&apos;un immeuble en copropriété comprennent tout ce qui est à usage collectif ou qui relève de la structure du bâtiment. À Paris, les immeubles anciens (haussmanniens, immeubles de rapport du XIXe ou début XXe) ont souvent des parties communes importantes en mauvais état.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Contrairement aux parties privatives (l&apos;intérieur de chaque appartement), les travaux de parties communes sont décidés collectivement et financés par l&apos;ensemble des copropriétaires selon leurs tantièmes. Les décisions suivent des règles de majorité définies par la loi du 10 juillet 1965.
            </p>
            <div className="space-y-4">
              {[
                {
                  zone: "Hall d'entrée et vestibule",
                  description: "La première impression de l'immeuble. Travaux courants : peinture des murs et plafonds, réfection du sol (carrelage, pierre), remplacement de la boîte aux lettres, éclairage LED avec détecteur de présence, interphone ou visiophone, digicode. Budget type : 5 000 à 25 000 € selon surface et prestations.",
                  frequence: 'Tous les 10 – 15 ans',
                },
                {
                  zone: "Cage d'escalier",
                  description: "Zone la plus visible et la plus fréquentée des parties communes. Travaux : peinture des murs et plafonds, réfection ou ponçage-vitrification des marches en bois (très fréquent dans l'haussmannien), remplacement de la rampe ou garde-corps, éclairage, ravalement des murs en pierre. La cage d'escalier représente souvent 40 à 60% du budget de rénovation des parties communes.",
                  frequence: 'Tous les 15 – 20 ans',
                },
                {
                  zone: 'Façade et ravalement',
                  description: "Ravalement obligatoire tous les 10 ans à Paris si l'état de la façade est dégradé (loi municipale). Travaux : nettoyage haute pression, réparation des pierres ou enduits, rejointoiement, hydrofugation, ravalement complet. Le ravalement est aussi l'opportunité d'intégrer une isolation thermique par l'extérieur (ITE).",
                  frequence: 'Tous les 10 ans (obligation légale Paris)',
                },
                {
                  zone: 'Toiture, terrasses et cours',
                  description: "Travaux d'étanchéité (terrasse-terroir), réfection de couverture (ardoises, zinc, tuiles), isolation des combles par l'intérieur ou l'extérieur, entretien des chéneaux et gouttières. Les combles et la toiture sont souvent les postes les plus coûteux.",
                  frequence: 'Selon état (tous les 20 – 30 ans)',
                },
              ].map((el) => (
                <div key={el.zone} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="font-medium text-[#1C1C1C] text-sm">{el.zone}</div>
                    <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.frequence}</div>
                  </div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Décisions en copropriété */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Décisions en copropriété : comment voter les travaux ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Avant de lancer des travaux de parties communes, il faut respecter le processus décisionnel de la copropriété, encadré par la loi du 10 juillet 1965 modifiée. Les règles de majorité varient selon l&apos;importance des travaux.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                regle: 'Majorité simple (article 24)',
                detail: "S'applique aux travaux d'entretien courant : peinture de la cage d'escalier, remplacement de l'éclairage, réparation de fuites. Vote à la majorité des voix des copropriétaires présents et représentés.",
                typeTravaux: 'Entretien courant, petites réparations',
              },
              {
                regle: 'Majorité absolue (article 25)',
                detail: "Requiert la majorité de l'ensemble des voix de tous les copropriétaires (présents, représentés ou absents). Pour ravalement de façade, réfection de toiture, isolation thermique, rénovation complète des parties communes.",
                typeTravaux: 'Travaux importants, embellissements',
              },
              {
                regle: 'Double majorité (article 26)',
                detail: "2/3 des voix de l'ensemble des copropriétaires ET majorité en nombre. Réservée aux travaux affectant la jouissance des parties privatives ou aux décisions très structurantes.",
                typeTravaux: 'Travaux très lourds, modifications du règlement',
              },
              {
                regle: 'Urgence (article 37)',
                detail: "En cas de péril imminent (risque de chute, sinistre), le syndic peut engager des travaux conservatoires sans vote préalable, avec convocation d'une AG dans les meilleurs délais pour ratification.",
                typeTravaux: 'Péril, sinistre, urgence sécurité',
              },
            ].map((el) => (
              <div key={el.regle} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.regle}</div>
                <div className="text-[#B8960C] text-xs font-light mb-2">{el.typeTravaux}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <h3 className="font-display text-base font-semibold text-white mb-3">
              Les étapes clés pour faire voter des travaux en AG
            </h3>
            <div className="space-y-2">
              {[
                "Obtenir 3 devis comparatifs d'artisans qualifiés (obligatoire pour les travaux supérieurs au seuil fixé par le règlement)",
                "Inscrire les travaux à l'ordre du jour de l'AG — délai minimum de convocation : 21 jours",
                "Présenter en AG le descriptif des travaux, les devis et le plan de financement (avec ou sans emprunt collectif)",
                "Après vote favorable : notifier les copropriétaires opposants (délai de recours 2 mois) puis signer le marché",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-300 font-light">
                  <CheckCircle size={14} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Rénovation cage escalier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénovation cage escalier Paris : étapes et prix 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La cage d&apos;escalier est le cœur des parties communes d&apos;un immeuble parisien. Sa rénovation améliore l&apos;image de l&apos;immeuble, valorise les appartements et répond souvent à des exigences de sécurité (normes incendie, garde-corps réglementaire). Voici les étapes et les coûts réels observés à Paris.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                etape: '1 — Diagnostic et état des lieux',
                detail: "Inventaire précis de l'état des murs (enduits, peinture, humidité), marches et contremarches (bois massif, béton, pierre), rampe et garde-corps (conformité hauteur 90 cm mini, barreaux), éclairage (conformité), digicode et sonnettes. Le diagnostic oriente le programme de travaux.",
                cout: 'Gratuit sur devis',
              },
              {
                etape: '2 — Travaux de maçonnerie et enduits',
                detail: "Rebouchage des fissures et trous, réparation des pierres abîmées, reprise d'enduit sur les murs et plafonds. Dans les immeubles haussmanniens, la restauration des moulures et corniches en staff est un poste significatif mais très valorisant.",
                cout: '3 000 – 12 000 € (immeuble 5 étages)',
              },
              {
                etape: '3 — Peinture et finitions murales',
                detail: "Application d'une sous-couche et d'une peinture de qualité (peinture satinée résistante aux frottements recommandée en parties communes). Sur les murs en pierre brute ou parement : nettoyage et hydrofugation. Les détails (plinthes, encadrements de porte, moulures) font toute la différence du résultat.",
                cout: '2 000 – 8 000 € (immeuble 5 étages)',
              },
              {
                etape: '4 — Sol de la cage et paliers',
                detail: "Réfection ou ponçage des parquets de palier (très courant dans l'haussmannien), remplacement du carrelage des paliers (tomettes, marbre, grès cérame), traitement des marches en bois (ponçage, huilage, vitrification) ou pose d'un nez de marche antidérapant.",
                cout: '3 000 – 15 000 € (immeuble 5 étages)',
              },
              {
                etape: '5 — Éclairage et sécurité',
                detail: "Remplacement des luminaires par LED avec détecteur de présence (économie d'énergie de 70 à 80%), mise aux normes du tableau électrique, remplacement de l'interphone ou du visiophone, installation ou rénovation du digicode. L'éclairage de sécurité (BAES) est obligatoire.",
                cout: '1 500 – 5 000 €',
              },
            ].map((el) => (
              <div key={el.etape} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.etape}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
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
            Budget rénovation immeuble Paris : tableau des prix 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix indicatifs pour un immeuble parisien de 5 étages (R+5), 10 appartements. Main d&apos;œuvre et matériaux inclus.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Zone rénovée</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget (R+5)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { zone: "Hall d'entrée", prestation: 'Réfection complète (sol + murs + éclairage)', budget: '8 000 – 25 000 €' },
                  { zone: 'Cage escalier', prestation: 'Peinture simple (murs + plafonds)', budget: '3 000 – 8 000 €' },
                  { zone: 'Cage escalier', prestation: 'Réfection complète (enduit + peinture + sol + rampe)', budget: '20 000 – 50 000 €' },
                  { zone: 'Façade', prestation: 'Ravalement complet (nettoyage + rejointoiement + peinture)', budget: '30 000 – 120 000 €' },
                  { zone: 'Façade', prestation: 'Ravalement + ITE (isolation thermique extérieure)', budget: '60 000 – 200 000 €' },
                  { zone: 'Toiture', prestation: 'Réfection étanchéité terrasse', budget: '15 000 – 40 000 €' },
                  { zone: 'Parties communes', prestation: 'Rénovation globale (hall + cage + éclairage)', budget: '35 000 – 100 000 €' },
                ].map((row, i) => (
                  <tr key={`${row.zone}-${row.prestation}`} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.zone}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prestation}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Aides financières disponibles pour les copropriétés parisiennes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "MaPrimeRénov' Copropriétés (ANAH) : jusqu'à 25% des travaux si gain énergétique ≥ 35%",
                "Éco-PTZ Copropriétés : prêt collectif à taux zéro pour travaux d'économie d'énergie",
                "Subventions Ville de Paris : aide au ravalement incluant isolation thermique",
                "Action Logement : peut intervenir pour les copropriétés en difficulté",
                "Certificats d'économies d'énergie (CEE) : prime des fournisseurs d'énergie",
                "TVA réduite à 10% (ou 5,5% si travaux d'efficacité énergétique) pour les immeubles de plus de 2 ans",
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

      {/* Section 5 — Ravalement façade Paris */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Ravalement de façade à Paris : obligation, permis et ABF
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Paris dispose d&apos;une réglementation spécifique sur le ravalement des façades. La Ville peut mettre en demeure les copropriétés dont la façade est dégradée ou présente un risque. Le ravalement est aussi encadré par les règles architecturales propres à chaque secteur.
          </p>
          <div className="space-y-4">
            {[
              {
                titre: 'Obligation de ravalement tous les 10 ans',
                detail: "La réglementation parisienne impose le ravalement des façades tous les 10 ans si leur état est dégradé. La Ville de Paris peut émettre un arrêté de mise en demeure avec délai d'exécution. En cas d'inaction du syndic, la Ville peut faire réaliser les travaux d'office aux frais de la copropriété.",
              },
              {
                titre: 'Déclaration préalable ou permis de construire',
                detail: "Un ravalement simple (nettoyage, peinture à l'identique) ne nécessite généralement qu'une déclaration préalable de travaux. Si le ravalement modifie l'aspect de la façade (changement de couleur, ITE avec matériaux apparents), un permis de construire peut être requis. Dans les secteurs protégés, l'accord de l'ABF est obligatoire.",
              },
              {
                titre: 'Secteurs protégés et ABF',
                detail: "De nombreux arrondissements parisiens (1er au 8e, Marais, Montmartre...) sont en secteur sauvegardé ou à proximité de monuments historiques. Toute modification de façade nécessite alors une consultation préalable de l'Architecte des Bâtiments de France (ABF), qui peut imposer des matériaux et des teintes spécifiques.",
              },
              {
                titre: "Ravalement + ITE : l'opportunité à saisir",
                detail: "Le ravalement est le meilleur moment pour réaliser une isolation thermique par l'extérieur (ITE), qui améliore le DPE de l'immeuble et réduit les charges de chauffage. L'ITE évite de perdre de la surface intérieure et est éligible aux aides ANAH (MaPrimeRénov' Copropriétés).",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Qui paie quoi */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Répartition des charges : qui paie quoi en copropriété ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La répartition des charges de travaux entre copropriétaires est encadrée par le règlement de copropriété. Les clés de répartition (tantièmes) définissent la quote-part de chaque lot pour chaque catégorie de charges.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                categorie: 'Charges générales',
                detail: "Réparties en fonction des tantièmes généraux (proportionnels à la surface et à la valeur des lots). Concernent l'entretien courant des parties communes, le gardiennage, l'assurance.",
              },
              {
                categorie: 'Charges spéciales',
                detail: "Réparties selon l'utilité de la prestation pour chaque lot (ex : ascenseur : seuls les étages supérieurs paient la totalité). Concernent l'ascenseur, le chauffage collectif, certains équipements.",
              },
              {
                categorie: 'Locataires vs propriétaires',
                detail: "Certaines charges récupérables sur le locataire (nettoyage, éclairage, eau chaude commune). Les travaux de rénovation lourds (cage d'escalier, ravalement) restent à la charge du propriétaire.",
              },
              {
                categorie: 'Fonds de travaux obligatoire',
                detail: "Depuis 2017, toute copropriété de plus de 10 lots doit alimenter un fonds de travaux à hauteur d'au moins 5% du budget prévisionnel annuel. Ce fonds permet d'anticiper les travaux sans appel de fonds exceptionnel.",
              },
            ].map((el) => (
              <div key={el.categorie} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.categorie}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-6 text-center">Questions fréquentes</p>
          <div className="space-y-6">
            {schemaFaq.mainEntity.map((q) => (
              <div key={q.name} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-3">{q.name}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{q.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides connexes */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Guides connexes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-cage-escalier-paris', title: 'Rénovation cage escalier Paris' },
              { href: '/blog/renovation-hall-immeuble-paris', title: 'Rénovation hall immeuble Paris' },
              { href: '/blog/ravalement-facade-copropriete-paris', title: 'Ravalement façade copropriété Paris' },
              { href: '/blog/renovation-appartement-copropriete-paris', title: 'Rénovation appartement copropriété Paris' },
              { href: '/blog/revetement-sol-appartement-paris', title: 'Revêtement sol appartement Paris' },
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

      {/* CTA */}
      <section className="py-16 bg-[#D4AF37] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-4">
          Rénover les parties communes de votre immeuble parisien ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis pour syndic et copropriété. Cage escalier, hall, façade. Résultat soigné sous délai maîtrisé.
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
