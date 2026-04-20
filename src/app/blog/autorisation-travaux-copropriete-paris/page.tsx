import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: "Autorisation Travaux Copropriete Paris : demarches & guide 2025",
  description: "Quels travaux en copropriete necessitent un vote en AG a Paris ? Parties communes, facade, structure, urgences. Guide complet 2025 par Espace Design.",
  keywords: [
    "autorisation travaux copropriete Paris",
    "travaux parties communes Paris",
    "vote AG travaux copropriete",
    "syndic travaux Paris",
    "dommages-ouvrage copropriete",
    "travaux urgents copropriete",
    "facade copropriete Paris",
    "modification parties communes",
  ],
}

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Autorisation Travaux Copropriete Paris : demarches & guide 2025",
  description: "Quels travaux en copropriete necessitent un vote en AG ? Facade, structure, parties communes. Guide complet 2025.",
  author: { "@type": "Organization", name: "Espace Design" },
  publisher: {
    "@type": "Organization",
    name: "Espace Design",
    url: "https://espacedesignparis.fr",
  },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  url: "https://espacedesignparis.fr/blog/autorisation-travaux-copropriete-paris",
}

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quels travaux necessitent une autorisation en copropriete ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En copropriete, tous les travaux touchant aux parties communes necessitent une autorisation de l'assemblee generale. Cela inclut : la modification de la facade (fenetre, volet, balcon, climatiseur visible), les travaux sur la toiture, le percement ou la suppression d'un mur porteur ou d'une dalle (structure porteuse), le passage de canalisations dans les parties communes, et tout changement d'usage d'un local commun. Les travaux strictement privatifs (peinture interieure, parquet, carrelage dans votre lot) ne necessitent pas d'autorisation, sous reserve de ne pas nuire a l'immeuble.",
      },
    },
    {
      "@type": "Question",
      name: "Comment faire passer des travaux en assemblee generale de copropriete ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour inscrire des travaux a l'ordre du jour d'une AG, adressez une demande ecrite au syndic par lettre recommandee avec AR, en precisant la nature des travaux, le devis et la resolution souhaitee. Le syndic a l'obligation d'inscrire le point si la demande est recue au moins 21 jours avant la date de l'AG. La majorite requise depend de la nature des travaux : majorite simple (article 24) pour les travaux d'entretien, majorite absolue (article 25) pour les travaux d'amelioration, double majorite (article 26) pour les travaux lourds touchant a la structure ou a la destination de l'immeuble.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je faire des travaux en copropriete sans attendre l'assemblee generale ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, dans deux situations. Premierement, si vos travaux sont entierement privatifs (au sein de votre lot, sans toucher aux parties communes ni a la structure) : vous pouvez les realiser sans autorisation. Deuxiemement, en cas d'urgence averee (fuite d'eau, risque effondrement) : le syndic peut autoriser des travaux conservatoires sans AG prealable, puis regulariser lors de la prochaine assemblee. En dehors de ces cas, realiser des travaux sur parties communes sans autorisation vous expose a devoir les demolir a vos frais.",
      },
    },
    {
      "@type": "Question",
      name: "Que faire si le syndicat de copropriete refuse mes travaux ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si l'AG refuse votre resolution, plusieurs recours sont possibles. Le recours amiable : representez votre projet lors d'une prochaine AG avec des modifications pour lever les objections (etude de structure, isolation phonique supplementaire). Le recours judiciaire : si le refus est abusif ou contraire au reglement de copropriete, saisissez le tribunal judiciaire de Paris dans les 2 mois suivant la notification du proces-verbal d'AG. En cas d'inaction du syndicat sur des travaux d'entretien urgents, le juge peut se substituer au syndicat (article 29 de la loi du 10 juillet 1965).",
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
            Travaux en Copropriété Paris : toutes les autorisations nécessaires
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Rénover un appartement en copropriété à Paris implique de naviguer entre deux
            ensembles de règles : le droit de l&apos;urbanisme et le droit de la copropriété.
            Voici comment identifier ce qui nécessite un vote en AG, comment le préparer, et
            quels recours existent en cas de blocage.
          </p>
        </div>
      </section>

      {/* Section 1 — Privatif vs parties communes */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Travaux privatifs vs parties communes : la distinction fondamentale
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La première question à se poser avant tout chantier : les travaux affectent-ils uniquement
              votre lot privatif, ou touchent-ils aux parties communes ? Cette distinction conditionne
              entièrement les autorisations nécessaires.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-100 rounded-lg p-5">
                <div className="font-semibold text-green-800 text-sm mb-3">
                  Travaux privatifs — sans autorisation AG
                </div>
                <ul className="space-y-2">
                  {[
                    "Peinture, papier peint, revêtements intérieurs",
                    "Pose de parquet ou carrelage (sans fragiliser le plancher)",
                    "Cuisine équipée, salle de bain (sans modifier les colonnes montantes)",
                    "Cloisons légères intérieures non portantes",
                    "Remplacement de radiateurs (sans toucher aux colonnes communes)",
                  ].map((item) => (
                    <li key={item} className="text-sm text-green-900 font-light flex gap-2">
                      <span className="flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-lg p-5">
                <div className="font-semibold text-red-800 text-sm mb-3">
                  Parties communes — autorisation AG requise
                </div>
                <ul className="space-y-2">
                  {[
                    "Modification de façade (fenêtre, volet, clim visible)",
                    "Travaux sur toiture ou terrasse commune",
                    "Percement ou suppression d'un mur porteur",
                    "Passage de canalisations dans les parties communes",
                    "Modification de l'aspect extérieur du bâtiment",
                  ].map((item) => (
                    <li key={item} className="text-sm text-red-900 font-light flex gap-2">
                      <span className="flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les trois majorités selon la nature des travaux
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La loi du 10 juillet 1965 distingue trois types de majorité selon l&apos;importance
              des travaux soumis au vote de l&apos;assemblée générale. Se tromper de majorité expose
              à l&apos;annulation de la résolution.
            </p>
            <div className="space-y-3">
              {[
                {
                  article: "Article 24 — Majorité simple",
                  desc: "Travaux d'entretien courant et de conservation de l'immeuble, travaux d'économies d'énergie (isolation, double vitrage). La résolution est adoptée si elle obtient la majorité des voix des copropriétaires présents, représentés ou ayant voté par correspondance.",
                  exemples: "Ravalement, toiture, isolation des combles.",
                },
                {
                  article: "Article 25 — Majorité absolue",
                  desc: "Travaux d'amélioration affectant les parties communes, autorisation donnée à un copropriétaire d'effectuer des travaux privatifs affectant les parties communes. La résolution requiert la majorité de tous les copropriétaires (présents ou non), soit 50 % + 1 des tantièmes.",
                  exemples: "Création d'une ouverture en façade, installation d'une climatisation visible, modification d'une porte d'entrée.",
                },
                {
                  article: "Article 26 — Double majorité",
                  desc: "Travaux entraînant une modification de la structure de l'immeuble, changement de destination d'une partie commune, vente d'une partie commune. Requiert la majorité en nombre de copropriétaires ET les deux tiers des tantièmes.",
                  exemples: "Surélévation, creation d'un lot dans les parties communes, division d'un lot.",
                },
              ].map((el) => (
                <div key={el.article} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.article}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed mb-2">{el.desc}</div>
                  <div className="text-gray-500 text-xs font-light italic">Ex : {el.exemples}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Préparer l'AG */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Comment préparer une résolution de travaux en AG
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Faire voter des travaux en assemblée générale ne s&apos;improvise pas. Une résolution mal
            préparée sera refusée ou contestée. Voici les étapes pour maximiser les chances
            d&apos;adoption.
          </p>
          <div className="space-y-4">
            {[
              {
                num: "01",
                titre: "Demande d'inscription à l'ordre du jour",
                texte:
                  "Envoyez une lettre recommandée avec AR au syndic en précisant : la nature exacte des travaux, le(s) devis obtenu(s) avec le détail des prestations, la résolution que vous souhaitez voir soumise au vote, et la majorité applicable. La demande doit parvenir au syndic au moins 21 jours avant la tenue de l'AG.",
              },
              {
                num: "02",
                titre: "Fournir au moins deux devis",
                texte:
                  "Pour les travaux dont le montant dépasse un certain seuil (fixé par le règlement de copropriété, souvent 3 000 €), le syndicat doit soumettre au moins deux devis. En pratique, présenter trois offres comparatives renforce votre crédibilité et accélère le vote.",
              },
              {
                num: "03",
                titre: "Joindre les études techniques nécessaires",
                texte:
                  "Pour un mur porteur : note de calcul d'un bureau d'études structure. Pour une facade : avis de l'ABF si périmètre protégé. Pour une installation technique (VMC, climatisation) : fiche technique du fabricant. Ces documents rassurent les copropriétaires et limitent les questions en séance.",
              },
              {
                num: "04",
                titre: "Anticiper les opposants",
                texte:
                  "Avant l'AG, informez vos voisins directs du projet. Expliquez les précautions prises contre le bruit (horaires de chantier), les nuisances (protection des parties communes) et l'impact sur la valeur de l'immeuble. Une opposition minoritaire organisée peut influencer le vote.",
              },
              {
                num: "05",
                titre: "Prévoir la résolution de réserve (article 25-1)",
                texte:
                  "Si la résolution article 25 ne recueille pas la majorité absolue mais obtient au moins le tiers des voix, elle peut être soumise immédiatement à la majorité simple (article 24). Prévoyez une résolution de repli dans votre demande au syndic.",
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

      {/* Section 3 — Assurance et urgences */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Dommages-ouvrage et assurance en copropriété
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Lorsque les travaux votés en AG sont importants (rénovation toiture, ravalement,
              structure), la souscription d&apos;une assurance dommages-ouvrage est fortement
              recommandée — et parfois obligatoire.
            </p>
            <div className="space-y-3">
              {[
                {
                  titre: "Rôle de la dommages-ouvrage",
                  texte:
                    "Souscrite par le maître d'ouvrage (ici le syndicat des copropriétaires), elle prend en charge les réparations relevant de la garantie décennale sans attendre qu'un tribunal désigne le responsable. Indispensable pour les travaux structurels.",
                },
                {
                  titre: "Qui la souscrit ?",
                  texte:
                    "Pour les travaux sur parties communes, c'est le syndicat des copropriétaires (représenté par le syndic) qui souscrit la dommages-ouvrage. Pour vos travaux privatifs touchant à la structure (mur porteur), c'est vous en tant que maître d'ouvrage.",
                },
                {
                  titre: "Coût et délai",
                  texte:
                    "La prime dommages-ouvrage représente en général entre 1 % et 3 % du coût HT des travaux. Elle doit être souscrite avant l'ouverture du chantier. Le défaut de souscription constitue une infraction pénale pour le maître d'ouvrage professionnel, et prive le particulier de la rapidité d'indemnisation.",
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
              Travaux urgents : peut-on contourner l&apos;AG ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              En cas de danger immédiat (infiltration grave, risque d&apos;effondrement, panne de
              chauffage collectif en hiver), la loi de 1965 prévoit des dérogations.
            </p>
            <div className="space-y-3">
              {[
                {
                  cas: "Initiative du syndic (article 18)",
                  texte:
                    "Le syndic peut engager sans délai les travaux nécessaires à la sauvegarde de l'immeuble ou à la sécurité des occupants, en informant les copropriétaires dans les meilleurs délais. Il doit ensuite convoquer une AG pour ratifier sa décision.",
                },
                {
                  cas: "Initiative d'un copropriétaire (article 18 al. 2)",
                  texte:
                    "Un copropriétaire peut faire exécuter des travaux conservatoires urgents aux frais du syndicat, à condition d'en informer le syndic immédiatement et de ne pas avoir pu le joindre. Les travaux doivent être strictement limités à l'urgence.",
                },
                {
                  cas: "Travaux privatifs urgents",
                  texte:
                    "Si la fuite ou le dommage provient de votre lot privatif, vous pouvez intervenir immédiatement sans autorisation, à condition de ne pas affecter les parties communes. Documentez tout (photos, devis, factures) pour votre assurance.",
                },
              ].map((el) => (
                <div key={el.cas} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.cas}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.texte}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Opposition du syndicat : vos recours
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le refus de l&apos;AG n&apos;est pas toujours définitif. Deux recours sont possibles.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  titre: "Recours judiciaire",
                  texte:
                    "Si le refus est manifestement abusif ou contraire aux intérêts de l'immeuble, saisissez le tribunal judiciaire de Paris dans les 2 mois suivant la notification du PV d'AG. Le juge peut autoriser les travaux et condamner le syndicat aux frais de procédure.",
                },
                {
                  titre: "Nouvelle AG",
                  texte:
                    "Rien n'empêche de représenter la résolution lors d'une prochaine AG avec un dossier renforcé. Faites évoluer le projet pour répondre aux objections : nuisances phoniques, impact visuel, sécurité. La concertation préalable est souvent plus efficace que le contentieux.",
                },
              ].map((el) => (
                <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.texte}</div>
                </div>
              ))}
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
                q: "Quels travaux nécessitent une autorisation en copropriété ?",
                a: "Tous les travaux affectant les parties communes : modification de façade, travaux sur toiture, percement d'un mur porteur, passage de canalisations dans les parties communes, changement de destination d'un local commun. Les travaux strictement privatifs (peinture, parquet, cuisine) ne nécessitent pas d'autorisation AG.",
              },
              {
                q: "Comment faire passer des travaux en AG de copropriété ?",
                a: "Adressez une demande écrite au syndic par LRAR au moins 21 jours avant la date de l'AG, avec la résolution souhaitée, les devis et les études techniques. La majorité requise dépend de la nature des travaux : article 24 (travaux d'entretien), article 25 (travaux d'amélioration), article 26 (modifications structurelles).",
              },
              {
                q: "Puis-je faire des travaux en copropriété sans attendre l'AG ?",
                a: "Oui si les travaux sont entièrement privatifs. Oui aussi en cas d'urgence avérée (danger pour les occupants), où le syndic ou un copropriétaire peut agir sans AG préalable puis régulariser. En dehors de ces cas, réaliser des travaux sur parties communes sans autorisation vous expose à l'obligation de démolir.",
              },
              {
                q: "Que faire si le syndicat de copropriété refuse mes travaux ?",
                a: "Deux recours : le recours judiciaire devant le tribunal judiciaire de Paris (dans les 2 mois suivant le PV d'AG) si le refus est abusif, ou la représentation du projet lors d'une prochaine AG avec un dossier amélioré. La concertation préalable avec les voisins est souvent plus efficace que le contentieux.",
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
              {
                href: "/blog/declaration-travaux-paris",
                title: "Déclaration préalable de travaux Paris",
              },
              {
                href: "/blog/assurance-decennale-artisan-paris",
                title: "Assurance décennale artisan Paris",
              },
              {
                href: "/blog/reception-travaux-paris",
                title: "Réception des travaux Paris",
              },
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
          Espace Design vous accompagne dans les démarches et la réalisation de vos travaux.
          Devis gratuit, déplacement sans engagement.
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
