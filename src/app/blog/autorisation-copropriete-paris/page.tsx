import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: "Autorisation Copropriété Paris : travaux et démarches 2025",
  description: "Comment obtenir une autorisation de copropriété à Paris pour vos travaux ? AG, parties communes, délais, rôle du syndic. Guide complet 2025 par Espace Design.",
  keywords: [
    "autorisation copropriété Paris",
    "travaux copropriété Paris",
    "assemblée générale copropriété",
    "parties communes travaux Paris",
    "syndic autorisation travaux",
    "règlement de copropriété Paris",
    "vote travaux copropriété",
    "démarches travaux appartement Paris",
  ],
}

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Autorisation Copropriété Paris : travaux et démarches 2025",
  description: "Comment obtenir une autorisation de copropriété à Paris pour vos travaux ? AG, parties communes, délais, rôle du syndic. Guide complet 2025.",
  author: { "@type": "Organization", name: "Espace Design" },
  publisher: {
    "@type": "Organization",
    name: "Espace Design",
    url: "https://espacedesignparis.fr",
  },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  url: "https://espacedesignparis.fr/blog/autorisation-copropriete-paris",
}

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quels travaux nécessitent une autorisation de la copropriété à Paris ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tout travail touchant les parties communes ou l'aspect extérieur de l'immeuble nécessite une autorisation de l'assemblée générale des copropriétaires. Cela inclut : la modification ou suppression d'un mur porteur (même en partie privative), l'ouverture d'une fenêtre ou porte dans une façade, la création d'une terrasse accessible depuis les parties communes, le raccordement à des canalisations communes, et toute modification des éléments d'équipement communs. En revanche, les travaux strictement intérieurs (peinture, revêtements de sol, cloisons non portantes) n'exigent pas d'autorisation, sauf si le règlement de copropriété le prévoit spécifiquement.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps faut-il prévoir pour obtenir l'autorisation en assemblée générale ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le délai minimal légal de convocation d'une AG est de 21 jours. Si votre demande n'est pas inscrite à l'ordre du jour de la prochaine AG ordinaire (généralement annuelle), vous devrez attendre la suivante ou demander une AG extraordinaire. En pratique à Paris, il faut compter entre 2 et 6 mois entre le dépôt de la demande auprès du syndic et la tenue de l'assemblée. Après le vote, le procès-verbal doit être notifié dans les 2 mois. Le délai de recours des copropriétaires opposants est de 2 mois à compter de la notification.",
      },
    },
    {
      "@type": "Question",
      name: "Que faire si le syndic refuse de mettre ma demande à l'ordre du jour ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tout copropriétaire a le droit de faire inscrire des questions à l'ordre du jour d'une AG (article 10 du décret du 17 mars 1967). Si le syndic refuse, envoyez votre demande par lettre recommandée avec AR en visant cet article. En cas de refus persistant ou de défaillance du syndic, vous pouvez saisir le président du tribunal judiciaire de Paris en référé pour désigner un mandataire chargé de convoquer l'assemblée. Cette procédure prend généralement 1 à 3 mois.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on commencer les travaux avant l'autorisation de la copropriété ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Commencer des travaux sur parties communes ou affectant l'aspect extérieur sans autorisation préalable de l'AG expose à une action en remise en état aux frais du copropriétaire fautif, sans indemnités. Le syndicat peut obtenir en justice la démolition des travaux et la remise en état, même si les travaux sont terminés depuis plusieurs années. En pratique, cela peut bloquer une revente. Il faut toujours attendre le procès-verbal d'AG et l'expiration du délai de recours (2 mois) avant de démarrer.",
      },
    },
  ],
}

export default function ArticleAutorisationCopropriete() {
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

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Guide pratique
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Obtenir une Autorisation de Copropriété à Paris : guide complet 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Vous souhaitez rénover votre appartement à Paris mais l&apos;immeuble est en
            copropriété ? Certains travaux nécessitent un vote en assemblée générale.
            Voici comment identifier ce qui est soumis à autorisation, comment préparer
            votre dossier, et les délais à anticiper.
          </p>
        </div>
      </section>

      {/* Section 1 — Parties communes vs privatives */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Parties communes vs parties privatives : la distinction fondamentale
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La loi du 10 juillet 1965 sur la copropriété distingue les parties communes
              (détenues collectivement par tous les copropriétaires) des parties privatives
              (appartenant à chaque copropriétaire). Les travaux sur parties communes
              nécessitent une autorisation de l&apos;assemblée générale (AG) ; les travaux sur
              parties privatives sont en principe libres, sauf exceptions importantes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
                <div className="font-semibold text-blue-800 text-sm mb-3">Parties communes</div>
                <ul className="space-y-2">
                  {[
                    "Façades, toitures, terrasses accessibles",
                    "Gros œuvre, murs porteurs, dalles",
                    "Cage d'escalier, hall d'entrée, couloirs",
                    "Canalisations et réseaux communs",
                    "Cour intérieure, jardin commun",
                  ].map((item) => (
                    <li key={item} className="text-sm text-blue-900 font-light flex gap-2">
                      <span className="flex-shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-lg p-5">
                <div className="font-semibold text-green-800 text-sm mb-3">Parties privatives</div>
                <ul className="space-y-2">
                  {[
                    "Cloisons intérieures non portantes",
                    "Revêtements de sol et plafonds",
                    "Portes intérieures, placards, cuisine",
                    "Salle de bain (hors canalisations communes)",
                    "Balcon (face intérieure) — selon règlement",
                  ].map((item) => (
                    <li key={item} className="text-sm text-green-900 font-light flex gap-2">
                      <span className="flex-shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-5">
              <div className="font-medium text-amber-900 text-sm mb-2">Attention — zone grise</div>
              <p className="text-amber-800 text-sm font-light leading-relaxed">
                Certains éléments sont en partie commune même s&apos;ils se trouvent dans votre
                appartement : les gaines techniques, les colonnes montantes d&apos;eau, les murs
                porteurs (même intérieurs), et parfois les fenêtres (selon le règlement).
                Consultez toujours le règlement de copropriété avant de lancer des travaux.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Quels travaux nécessitent une autorisation de l&apos;AG ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Même dans vos parties privatives, certains travaux sont soumis à autorisation
              car ils affectent les parties communes, l&apos;aspect extérieur de l&apos;immeuble, ou
              touchent à des éléments structurels.
            </p>
            <div className="space-y-3">
              {[
                {
                  titre: "Modification d'un mur porteur",
                  texte:
                    "Abattre, percer ou modifier un mur porteur touche au gros oeuvre de l'immeuble, qui est une partie commune. Même si ce mur se trouve dans votre appartement, vous devez obtenir l'accord de l'AG. Une étude structure est également indispensable.",
                },
                {
                  titre: "Modification de la façade ou des fenêtres",
                  texte:
                    "Les façades sont des parties communes. Percer une nouvelle fenêtre, changer le type de vitrage (si le règlement impose un modèle uniforme), poser un climatiseur visible depuis l'extérieur, ou créer un accès depuis une terrasse collective nécessitent un vote en AG.",
                },
                {
                  titre: "Raccordement à des colonnes communes",
                  texte:
                    "Toute modification affectant les colonnes d'eau, les évacuations communes, ou les réseaux partagés (gaz, électricité collective) requiert une autorisation. Cela concerne notamment la création d'une salle de bain supplémentaire ou le déplacement d'une cuisine.",
                },
                {
                  titre: "Travaux sur parties communes à usage privatif",
                  texte:
                    "Terrasse, toit-terrasse, cour ou jardin à usage privatif : ces espaces appartiennent à la copropriété même si vous en avez la jouissance exclusive. Tout aménagement (pergola, abri, dallage) nécessite l'accord de l'AG.",
                },
              ].map((el) => (
                <div
                  key={el.titre}
                  className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100"
                >
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.titre}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.texte}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Démarches */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les démarches pour obtenir l&apos;autorisation de la copropriété
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La procédure se déroule en plusieurs étapes. Anticiper est essentiel : les
            délais peuvent s&apos;étendre de 2 à 6 mois selon la fréquence des AG dans votre
            immeuble.
          </p>
          <div className="space-y-4">
            {[
              {
                num: "01",
                titre: "Consulter le règlement de copropriété",
                texte:
                  "Avant tout, lisez votre règlement de copropriété (disponible chez le syndic ou au bureau de conservation des hypothèques). Il précise la liste des travaux soumis à autorisation, les règles d'aspect extérieur, et parfois des clauses spécifiques à votre immeuble.",
              },
              {
                num: "02",
                titre: "Contacter le syndic",
                texte:
                  "Envoyez au syndic une demande écrite (recommandé AR) décrivant précisément les travaux envisagés, accompagnée des plans et devis de l'artisan. Demandez explicitement l'inscription à l'ordre du jour de la prochaine AG et le délai prévisionnel.",
              },
              {
                num: "03",
                titre: "Constituer le dossier technique",
                texte:
                  "Pour les travaux sur gros oeuvre, une note de calcul structure (ingénieur structure ou architecte) est souvent demandée. Pour les modifications de façade, des visuels (plans, photos) facilitent le vote. Plus le dossier est complet, moins il y a de risque de report.",
              },
              {
                num: "04",
                titre: "Vote en assemblée générale",
                texte:
                  "Les travaux sur parties communes se votent à la majorité de l'article 26 (double majorité : majorité des copropriétaires représentant au moins 2/3 des tantièmes) pour les travaux importants, ou à la majorité de l'article 25 (majorité absolue des tantièmes) pour les travaux courants d'amélioration.",
              },
              {
                num: "05",
                titre: "Attendre l'expiration du délai de recours",
                texte:
                  "Après l'AG, le procès-verbal est notifié à tous les copropriétaires. Les opposants disposent de 2 mois pour contester la décision en justice. Il est prudent d'attendre l'expiration de ce délai avant de démarrer les travaux, surtout pour les chantiers lourds.",
              },
            ].map((el) => (
              <div
                key={el.num}
                className="flex gap-4 bg-white rounded-lg p-5 border border-gray-100"
              >
                <span className="font-display text-2xl font-semibold text-[#D4AF37]/40 flex-shrink-0 leading-none">
                  {el.num}
                </span>
                <div>
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.titre}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.texte}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Règles de majorité et rôle syndic */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les règles de majorité en assemblée générale
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La majorité requise dépend de la nature des travaux. Se tromper de majorité
              peut rendre la décision nulle. Voici les trois seuils à connaître.
            </p>
            <div className="space-y-3">
              {[
                {
                  garantie: "Article 24 — Majorité simple",
                  texte:
                    "Travaux d'entretien courant, de maintenance, ou de conservation de l'immeuble. Décision prise à la majorité des voix des copropriétaires présents ou représentés. Exemple : ravalement décidé collectivement, réparation d'une toiture, entretien des parties communes.",
                },
                {
                  garantie: "Article 25 — Majorité absolue",
                  texte:
                    "Autorisation donnée à un copropriétaire de réaliser des travaux affectant les parties communes ou l'aspect extérieur (art. 25 b). Nécessite la majorité des voix de tous les copropriétaires (présents, représentés et absents). Si ce seuil n'est pas atteint mais qu'un tiers des voix est favorable, un second vote à la majorité simple (art. 24) peut être organisé immédiatement.",
                },
                {
                  garantie: "Article 26 — Double majorité",
                  texte:
                    "Travaux d'amélioration importants ou surélévation de l'immeuble. Nécessite la majorité en nombre des copropriétaires (plus de 50 % des personnes) représentant au moins 2/3 des tantièmes. Seuil le plus élevé, souvent requis pour les transformations structurelles majeures.",
                },
              ].map((el) => (
                <div key={el.garantie} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.garantie}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.texte}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le rôle du syndic dans votre projet de travaux
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le syndic est le mandataire du syndicat des copropriétaires. Son rôle est
              d&apos;organiser les AG, d&apos;administrer les parties communes et de veiller au
              respect du règlement. Il n&apos;a pas le pouvoir d&apos;autoriser ou refuser vos
              travaux seul — seule l&apos;AG en décide. Mais il peut bloquer indirectement votre
              projet.
            </p>
            <div className="space-y-3">
              {[
                {
                  titre: "Ce que le syndic peut faire",
                  texte:
                    "Inscrire ou refuser d'inscrire votre demande à l'ordre du jour, fixer la date de l'AG, rédiger et notifier le PV, vérifier que les travaux autorisés sont bien conformes à ce qui a été voté. En cas de refus d'inscription injustifié, saisissez le tribunal judiciaire de Paris.",
                },
                {
                  titre: "Ce que le syndic ne peut pas faire",
                  texte:
                    "Autoriser lui-même vos travaux (sauf délégation expresse de l'AG pour des montants limités). Bloquer des travaux sur parties privatives ne touchant ni les parties communes ni l'aspect extérieur. Exiger des frais administratifs non prévus par le contrat de syndic.",
                },
                {
                  titre: "L'état daté et les travaux en cours de vente",
                  texte:
                    "Si vous vendez votre appartement après avoir réalisé des travaux, le syndic établit un état daté mentionnant les travaux réalisés et leur conformité avec les autorisations de l'AG. Des travaux non autorisés peuvent bloquer la vente ou engager votre responsabilité vis-à-vis de l'acquéreur.",
                },
              ].map((el) => (
                <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.titre}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.texte}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Travaux libres vs travaux soumis à autorisation : tableau récapitulatif
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left p-3 font-light text-xs uppercase tracking-wider">Type de travaux</th>
                    <th className="text-center p-3 font-light text-xs uppercase tracking-wider">Autorisation AG</th>
                    <th className="text-center p-3 font-light text-xs uppercase tracking-wider">Permis / DP</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { travaux: "Peinture, revêtements intérieurs", ag: "Non", dp: "Non" },
                    { travaux: "Cloison non portante intérieure", ag: "Non", dp: "Non" },
                    { travaux: "Mur porteur (même en partie privative)", ag: "Oui (art. 25)", dp: "Souvent" },
                    { travaux: "Modification fenêtres / façade", ag: "Oui (art. 25)", dp: "Oui (DP)" },
                    { travaux: "Création salle de bain (raccord colonne)", ag: "Oui (art. 25)", dp: "Non" },
                    { travaux: "Aménagement toit-terrasse privatif", ag: "Oui (art. 25-26)", dp: "Souvent" },
                    { travaux: "Ravalement façade (commun)", ag: "Oui (art. 24)", dp: "DP souvent" },
                  ].map((row, i) => (
                    <tr key={row.travaux} className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"}>
                      <td className="p-3 text-gray-700 font-light">{row.travaux}</td>
                      <td className="p-3 text-center">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${row.ag === "Non" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}`}>
                          {row.ag}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${row.dp === "Non" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}>
                          {row.dp}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-8 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Quels travaux nécessitent une autorisation de la copropriété à Paris ?",
                a: "Tout travail touchant les parties communes ou l'aspect extérieur de l'immeuble nécessite un vote en AG : modification d'un mur porteur, ouverture en façade, raccordement à une colonne commune, travaux sur terrasse ou toit-terrasse. Les travaux purement intérieurs sur parties privatives (peinture, revêtements, cloisons non portantes) ne nécessitent pas d'autorisation en principe, sauf clause contraire du règlement.",
              },
              {
                q: "Combien de temps faut-il pour obtenir l'autorisation en AG ?",
                a: "Comptez 2 à 6 mois à Paris selon la fréquence des AG dans votre immeuble. Le délai légal de convocation est de 21 jours. Après le vote, le PV est notifié sous 2 mois et les copropriétaires opposants disposent de 2 mois supplémentaires pour contester. Il est prudent d'attendre l'expiration de ce délai de recours avant de démarrer.",
              },
              {
                q: "Que faire si le syndic refuse de mettre ma demande à l'ordre du jour ?",
                a: "Tout copropriétaire a le droit de faire inscrire une question à l'ordre du jour (article 10 du décret du 17 mars 1967). Envoyez votre demande par LRAR en citant cet article. En cas de refus, saisissez le président du tribunal judiciaire de Paris en référé pour désigner un mandataire chargé de convoquer l'assemblée.",
              },
              {
                q: "Peut-on commencer les travaux avant l'autorisation de la copropriété ?",
                a: "Non. Commencer sans autorisation expose à une action en remise en état aux frais du copropriétaire, sans indemnités. Le syndicat peut obtenir la démolition des travaux même plusieurs années après. Cela peut aussi bloquer une revente. Il faut toujours attendre le PV d'AG et l'expiration du délai de recours de 2 mois.",
              },
            ].map((faq) => (
              <details key={faq.q} className="bg-white rounded-lg border border-gray-100 group">
                <summary className="flex justify-between items-center px-5 py-4 cursor-pointer list-none text-sm font-medium text-[#1C1C1C]">
                  {faq.q}
                  <span className="text-[#D4AF37] font-light text-lg ml-4 flex-shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 font-light leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">
            Voir aussi
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/blog/assurance-decennale-renovation-paris", title: "Assurance décennale Paris" },
              { href: "/blog/declaration-travaux-paris", title: "Déclaration préalable de travaux Paris" },
              { href: "/blog/renovation-appartement-copropriete-paris", title: "Rénovation appartement copropriété Paris" },
              { href: "/contact", title: "Demander un devis gratuit" },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-4 hover:border-[#D4AF37]/40 transition-colors group"
              >
                <span className="text-sm text-[#1C1C1C] font-light group-hover:text-[#B8960C] transition-colors">
                  {a.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Un projet de rénovation en copropriété à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Espace Design vous accompagne de l&apos;obtention des autorisations jusqu&apos;à la
          réception des travaux. Devis gratuit, déplacement sans engagement.
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
