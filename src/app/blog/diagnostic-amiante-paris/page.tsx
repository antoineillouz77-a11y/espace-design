import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Diagnostic Amiante Paris', item: 'https://espacedesignparis.fr/blog/diagnostic-amiante-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Diagnostic Amiante Paris : avant rénovation, prix & obligations 2025 | Espace Design',
  description: 'Amiante dans un appartement parisien : diagnostic obligatoire, matériaux concernés, coût du désamiantage. Guide complet avant travaux 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/diagnostic-amiante-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Mon appartement parisien construit avant 1997 contient-il de l\'amiante ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "C'est très probable. L'amiante a été massivement utilisé dans la construction française jusqu'à son interdiction en 1997. Dans les appartements parisiens des années 1950 à 1990, on le retrouve fréquemment dans les colles de carrelage, les dalles de sol vinyle, les enduits de façade, les flocages de plafond, et l'isolation des tuyauteries. Un diagnostic amiante avant travaux est obligatoire et permet d'identifier précisément les zones concernées.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte un diagnostic amiante à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'un diagnostic amiante à Paris se situe généralement entre 150 et 300 €, selon le nombre de pièces et la surface du logement. Ce tarif comprend la visite du diagnostiqueur certifié, les prélèvements d'échantillons si nécessaire, et la rédaction du rapport. Ce diagnostic est distinct du DPE ou du diagnostic plomb — il ne peut être réalisé que par un opérateur certifié par un organisme accrédité COFRAC.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on rénover si de l\'amiante est détecté ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, mais un désamiantage préalable est obligatoire avant tout chantier sur les zones concernées. Ce travail ne peut être confié qu'à une entreprise certifiée amiante (mention SS3). Le désamiantage inclut le confinement de la zone, le retrait sécurisé des matériaux, le conditionnement en sacs étanches et l'évacuation vers une filière agréée. Une fois le désamiantage validé (rapport de fin de travaux), la rénovation peut se poursuivre normalement.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Diagnostic Amiante Paris : avant rénovation, prix & obligations 2025 | Espace Design',
  description: 'Amiante dans un appartement parisien : diagnostic obligatoire, matériaux concernés, coût du désamiantage. Guide complet avant travaux 2025.',
}

export default function ArticleDiagnosticAmiante() {
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
            Diagnostic Amiante Paris : avant rénovation, prix & obligations 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            L&apos;amiante est présent dans une grande majorité des appartements parisiens construits avant 1997. Avant tout chantier de rénovation, un diagnostic est obligatoire. Matériaux concernés, coût du diagnostic, procédure de désamiantage : le guide complet pour les propriétaires parisiens.
          </p>
        </div>
      </section>

      {/* Section 1 — Qui est concerné */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              L&apos;amiante dans les appartements parisiens : qui est concerné ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Tout logement dont le permis de construire a été délivré avant le 1er juillet 1997 est potentiellement concerné par la présence d&apos;amiante. À Paris, cela représente l&apos;immense majorité du parc immobilier : haussmanniens, immeubles des années 1950–1970, résidences des années 1980 et début 1990. L&apos;interdiction de l&apos;amiante n&apos;est intervenue qu&apos;en 1997 en France.
            </p>
            <div className="space-y-4">
              {[
                {
                  titre: 'Obligation avant travaux',
                  detail: "Dès lors que des travaux touchent à des matériaux susceptibles de contenir de l'amiante (démolition de cloison, dépose de carrelage, reprise de plafond, remplacement de tuyauteries), un diagnostic amiante avant travaux (DAAT) est obligatoire. Cette obligation s'applique même si vous êtes propriétaire occupant. En cas d'absence de diagnostic, les artisans sont en droit de refuser le chantier.",
                },
                {
                  titre: 'Obligation avant vente',
                  detail: "Lors de la vente d'un appartement parisien construit avant 1997, le vendeur doit fournir un diagnostic amiante des parties privatives (DAPP). Ce document fait partie du dossier de diagnostic technique (DDT) annexé au compromis de vente. S'il date de plus de 3 ans et révèle la présence d'amiante, il doit être renouvelé.",
                },
                {
                  titre: 'Cas des parties communes',
                  detail: "Dans les immeubles en copropriété, le syndic est responsable du diagnostic amiante des parties communes. Si des travaux sont prévus dans les parties communes (façade, cage d'escalier, local technique), le syndic doit mandater un diagnostiqueur certifié. Les propriétaires rénovant leur appartement ne sont responsables que de la partie privative.",
                },
                {
                  titre: 'Sanctions en cas de manquement',
                  detail: "Faire réaliser des travaux sur un logement d'avant 1997 sans diagnostic amiante préalable expose à des risques sérieux : accident de chantier avec dispersion de fibres, responsabilité pénale du donneur d'ordre, remise en état aux frais du propriétaire, et invalidation du contrat d'assurance chantier. Le coût d'un désamiantage d'urgence est 3 à 5 fois supérieur à un désamiantage planifié.",
                },
              ].map((el) => (
                <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Matériaux concernés */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les matériaux susceptibles de contenir de l&apos;amiante
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;amiante ne se détecte pas à l&apos;œil nu. Dans les appartements parisiens des années 1950 à 1990, il peut être présent dans de nombreux matériaux de construction courants, souvent insoupçonnés.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Matériau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Fréquence</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Période concernée</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mat: 'Colles de carrelage (carreaux sol et mur)', freq: 'Très fréquent', periode: '1950 – 1985' },
                  { mat: 'Dalles de sol en vinyle (dalle souple)', freq: 'Très fréquent', periode: '1950 – 1990' },
                  { mat: 'Enduits projetés (flocage de plafond)', freq: 'Fréquent', periode: '1950 – 1980' },
                  { mat: 'Isolation de tuyaux et gaines techniques', freq: 'Fréquent', periode: '1950 – 1990' },
                  { mat: 'Plaques de doublage (fibrociment)', freq: 'Fréquent', periode: '1950 – 1990' },
                  { mat: 'Joints de cheminées et appareils de chauffage', freq: 'Courant', periode: '1950 – 1985' },
                  { mat: 'Toitures en fibrociment (terrasses accès privé)', freq: 'Courant', periode: '1950 – 1985' },
                  { mat: 'Enduits de façade (crépis)', freq: 'Moins fréquent', periode: '1970 – 1990' },
                ].map((row, i) => (
                  <tr key={row.mat} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.mat}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.freq}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.periode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-2">Le cas particulier des colles de carrelage</div>
            <div className="text-gray-400 text-sm font-light leading-relaxed">
              À Paris, la dépose de carrelage est l&apos;une des interventions les plus fréquentes lors d&apos;une rénovation — et l&apos;une des plus risquées en termes d&apos;exposition à l&apos;amiante. Les colles utilisées entre 1950 et 1985 contenaient souvent de la chrysotile (amiante blanc). Lors de la dépose mécanique, les fibres sont libérées dans l&apos;air et inhalées. C&apos;est pourquoi le diagnostic avant dépose de carrelage est systématiquement recommandé dans les logements parisiens d&apos;avant 1990.
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Diagnostic */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Diagnostic amiante : déroulement, qui intervient, prix
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le diagnostic amiante avant travaux (DAAT) est un document technique réglementé. Il ne peut être réalisé que par un opérateur de repérage certifié, indépendant de l&apos;entreprise qui réalisera les travaux.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                etape: '1. Visite du diagnostiqueur certifié',
                detail: "Le diagnostiqueur inspecte visuellement tous les matériaux susceptibles de contenir de l'amiante dans les zones de travaux. Il est certifié par un organisme accrédité COFRAC — vérifiez ce point avant de mandater. La visite dure généralement 1 à 3 heures selon la surface et le nombre de pièces concernées.",
              },
              {
                etape: '2. Prélèvements et analyses en laboratoire',
                detail: "Si le diagnostiqueur identifie des matériaux suspects, il effectue des prélèvements qui sont envoyés en laboratoire accrédité pour analyse. Les résultats sont rendus sous 5 à 10 jours ouvrés. En urgence (chantier programmé rapidement), certains laboratoires proposent des délais express de 48h.",
              },
              {
                etape: '3. Rapport de diagnostic',
                detail: "Le rapport identifie précisément les matériaux contenant de l'amiante, leur localisation, leur état de conservation (dégradé ou non), et les préconisations : maintien en l'état, surveillance, ou retrait avant travaux. Ce document est obligatoire pour lancer un chantier.",
              },
              {
                etape: '4. Durée de validité',
                detail: "Le diagnostic amiante avant travaux n'a pas de durée de validité légale fixe, mais il est lié aux travaux prévus. Si le périmètre des travaux change ou s'étend à de nouvelles zones, un nouveau repérage est nécessaire. Le DAPP (parties privatives, pour la vente) a une durée illimitée si aucun amiante n'est détecté.",
              },
            ].map((el) => (
              <div key={el.etape} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.etape}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de diagnostic</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix à Paris</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Délai rapport</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'DAAT — appartement 2–3 pièces', prix: '150 – 220 €', delai: '5 – 10 jours' },
                  { type: 'DAAT — appartement 4–5 pièces', prix: '200 – 300 €', delai: '5 – 10 jours' },
                  { type: 'DAPP — vente appartement', prix: '100 – 200 €', delai: '5 – 7 jours' },
                  { type: 'Diagnostic express (48h)', prix: '+ 50 à 100 €', delai: '48h ouvrées' },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.delai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4 — Désamiantage */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Désamiantage : obligation légale, entreprises certifiées, coût et délais
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Si le diagnostic révèle la présence d&apos;amiante dans les zones de travaux, le désamiantage est une obligation légale avant de procéder à toute intervention. Cette opération ne peut être confiée qu&apos;à une entreprise titulaire de la certification amiante mention SS3.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                type: 'Désamiantage de dalles de sol',
                cout: '500 – 1 500 €',
                delai: '1 – 2 jours',
                detail: "Dépose sécurisée des dalles vinyle ou carrelage avec colle amiantée. Confinement de la zone, aspiration avec filtre HEPA, conditionnement en big-bags étanches. Surface typique : 20 à 40 m².",
              },
              {
                type: 'Désamiantage de flocage plafond',
                cout: '1 500 – 4 000 €',
                delai: '2 – 5 jours',
                detail: "Retrait du flocage projeté sur dalle ou solives. Technique humide obligatoire pour éviter la dispersion des fibres. Confinement étanche de la pièce avec sas d'entrée. Surface typique : 15 à 30 m².",
              },
              {
                type: 'Désamiantage de tuyauteries',
                cout: '800 – 2 500 €',
                delai: '1 – 3 jours',
                detail: "Retrait des calorifuges et manchons d'isolation amiantés autour des tuyaux techniques. Fréquent dans les appartements des années 1960–1975 avec chauffage collectif.",
              },
              {
                type: 'Désamiantage global (plusieurs zones)',
                cout: '3 000 – 8 000 €',
                delai: '5 – 10 jours',
                detail: "Intervention multi-zones coordonnée sur l'ensemble de l'appartement avant rénovation complète. Inclut rapport de fin de travaux et mesures d'empoussièrement obligatoires.",
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-xs text-gray-500 font-light italic mb-3">Délai : {el.delai}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-2">Comment choisir son entreprise de désamiantage ?</div>
            <div className="text-gray-400 text-sm font-light leading-relaxed">
              Exigez la certification SS3 (sous-section 3), délivrée par un organisme certificateur agréé. Cette certification garantit que l&apos;entreprise dispose des équipements de protection individuelle adaptés, d&apos;un plan de retrait homologué et d&apos;une procédure de gestion des déchets réglementaire. Le rapport de fin de travaux remis par l&apos;entreprise certifiée est le document qui permet de relancer le chantier de rénovation en toute légalité.
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Conseils pratiques */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Conseils pratiques pour les propriétaires parisiens qui rénovent
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Intégrer le diagnostic amiante dès la phase de conception du projet permet d&apos;éviter les mauvaises surprises en cours de chantier et de maîtriser les coûts.
          </p>
          <div className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Faites réaliser le diagnostic amiante avant de signer le devis de rénovation — les résultats peuvent changer le périmètre et le budget des travaux',
                'Si vous achetez un appartement d\'avant 1997 pour le rénover, intégrez le coût du diagnostic et d\'un éventuel désamiantage dans votre budget total',
                'Ne grattez, ne percez ou ne découpez jamais un matériau suspect sans diagnostic préalable — la dispersion de fibres est irréversible',
                'Conservez tous les rapports de diagnostic dans le dossier de votre logement — ils vous seront demandés lors d\'une vente ultérieure',
                'Si l\'amiante est en bon état et non friable, il n\'est pas toujours nécessaire de le retirer — le maintien en place avec surveillance est parfois la solution la plus sûre',
                'Profitez du chantier de désamiantage pour faire diagnostiquer les zones adjacentes — cela évite d\'interrompre à nouveau le chantier plus tard',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
            <div className="font-medium text-[#1C1C1C] text-sm mb-2">Planification recommandée</div>
            <div className="text-gray-600 text-sm font-light leading-relaxed">
              Pour une rénovation sereine d&apos;un appartement parisien d&apos;avant 1997, prévoyez : <strong>J-30</strong> — commande du diagnostic amiante. <strong>J-20</strong> — réception du rapport. <strong>J-15</strong> — si désamiantage nécessaire, commande et planification. <strong>J-5</strong> — désamiantage réalisé, rapport de fin de travaux obtenu. <strong>J0</strong> — début du chantier de rénovation. Ce planning évite tout arrêt de chantier impromptu et les surcoûts associés.
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
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/renovation-avant-achat-appartement-paris', title: 'Rénovation avant achat à Paris' },
              { href: '/tarifs', title: 'Nos tarifs' },
              { href: '/faq', title: 'FAQ rénovation Paris' },
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
              { href: '/renovation-paris-13e', label: 'Paris 13e' },
              { href: '/renovation-paris-14e', label: 'Paris 14e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-paris-19e', label: 'Paris 19e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
              { href: '/renovation-saint-denis', label: 'Saint-Denis' },
              { href: '/renovation-aubervilliers', label: 'Aubervilliers' },
              { href: '/renovation-bobigny', label: 'Bobigny' },
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
          Rénovez votre appartement en toute sécurité
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic amiante coordonné, désamiantage certifié, chantier géré de A à Z. Devis gratuit sous 48h.
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
