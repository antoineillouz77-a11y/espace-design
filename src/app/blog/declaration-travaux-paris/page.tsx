import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: "Declaration Travaux Paris : quand et comment declarer ? Guide 2025",
  description: "Quels travaux necessitent une declaration prealable a Paris ? Delai d'instruction, dossier a constituer, role de l'ABF. Guide complet 2025 par Espace Design.",
  keywords: [
    "declaration travaux Paris",
    "declaration prealable travaux Paris",
    "permis de construire Paris",
    "ABF Paris travaux",
    "dossier declaration travaux",
    "travaux facade Paris",
    "declaration toiture Paris",
    "cerfa declaration travaux",
  ],
}

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Declaration Travaux Paris : quand et comment declarer ? Guide 2025",
  description: "Quels travaux necessitent une declaration prealable a Paris ? Delai d'instruction, dossier a constituer, role de l'ABF. Guide complet 2025.",
  author: { "@type": "Organization", name: "Espace Design" },
  publisher: {
    "@type": "Organization",
    name: "Espace Design",
    url: "https://espacedesignparis.fr",
  },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  url: "https://espacedesignparis.fr/blog/declaration-travaux-paris",
}

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quels travaux necessitent une declaration prealable a Paris ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Paris, une declaration prealable est obligatoire pour : les extensions de moins de 40 m2 en zone urbaine (entre 20 et 40 m2 si un PC est deja existant), les modifications de facade (changement de menuiseries, creation d'une ouverture), les changements de toiture (materiaux, couleur, pente), les installations de velux ou lucarnes, et les changements de destination d'un local. Les travaux de moins de 20 m2 d'emprise au sol et de surface de plancher n'exigent ni DP ni PC, mais doivent rester conformes aux regles du PLU.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le delai d'instruction d'une declaration de travaux a Paris ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le delai de droit commun est d'un mois a compter du depot d'un dossier complet en mairie. Ce delai est porte a deux mois lorsque le projet se situe dans le perimetre d'un Architecte des Batiments de France (ABF), ce qui concerne une grande partie de Paris compte tenu des secteurs sauvegardes et des abords de monuments historiques. L'absence de reponse a l'issue du delai vaut decision de non-opposition (accord tacite), a condition que le dossier soit complet.",
      },
    },
    {
      "@type": "Question",
      name: "Que risque-t-on si on realise des travaux sans declaration a Paris ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les sanctions sont de plusieurs ordres. Sur le plan penal : amende pouvant atteindre 300 000 euros et jusqu'a 6 mois d'emprisonnement. Sur le plan civil : le tribunal peut ordonner la demolition ou la mise en conformite de l'ouvrage, a vos frais. Sur le plan pratique : impossibilite de vendre le bien sans regularisation, refus d'assurance, et responsabilite engage en cas d'accident. La prescription penale est de 6 ans a compter de l'achevement des travaux.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il obligatoirement l'accord de l'ABF dans Paris ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, pour tous les travaux situes dans le perimetre de protection d'un monument historique (rayon de 500 metres) ou dans un secteur protege (PSMV, AVAP/SPR), l'accord prealable de l'Architecte des Batiments de France est requis. L'ABF dispose d'un avis conforme : si son avis est defavorable, la declaration de travaux est automatiquement refusee. A Paris, compte tenu de la densite des monuments historiques, plus de la moitie des arrondissements sont concernes, en particulier les 1er, 3e, 4e, 5e, 6e, 7e, 8e et 9e.",
      },
    },
  ],
}

export default function ArticleDeclarationTravaux() {
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
            Déclaration Préalable de Travaux à Paris : guide complet 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Avant de toucher à une façade, une toiture ou d&apos;aménager des combles à Paris, la
            question de la déclaration préalable se pose. Voici comment distinguer les travaux
            libres, ceux soumis à déclaration et ceux nécessitant un permis de construire — et
            comment constituer un dossier solide.
          </p>
        </div>
      </section>

      {/* Section 1 — DP vs PC */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Déclaration préalable ou permis de construire : quelle différence ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le droit de l&apos;urbanisme distingue trois régimes selon l&apos;importance des travaux. À
              Paris, les règles sont plus strictes qu&apos;ailleurs compte tenu du Plan Local d&apos;Urbanisme
              (PLU) et de la présence massive de secteurs protégés.
            </p>
            <div className="space-y-3">
              {[
                {
                  regime: "Travaux sans formalité",
                  detail:
                    "Extension inférieure à 5 m² d'emprise au sol, travaux d'entretien courant (peinture intérieure, remplacement à l'identique de revêtements). Aucune autorisation n'est requise, mais les travaux doivent respecter le PLU de Paris.",
                  tag: "Libre",
                  color: "bg-green-50 border-green-100",
                  tagColor: "bg-green-100 text-green-800",
                },
                {
                  regime: "Déclaration préalable (DP)",
                  detail:
                    "Extension entre 5 et 40 m², modification de façade ou toiture, création d'une ouverture, changement de destination d'un local. Délai d'instruction : 1 mois (2 mois en secteur ABF).",
                  tag: "DP",
                  color: "bg-amber-50 border-amber-100",
                  tagColor: "bg-amber-100 text-amber-800",
                },
                {
                  regime: "Permis de construire (PC)",
                  detail:
                    "Construction nouvelle, extension supérieure à 40 m² (ou à 20 m² si elle porte la surface totale au-delà de 150 m²), changement de destination avec travaux sur structure portante. Délai d'instruction : 2 mois (3 mois en secteur ABF).",
                  tag: "PC",
                  color: "bg-red-50 border-red-100",
                  tagColor: "bg-red-100 text-red-800",
                },
              ].map((r) => (
                <div
                  key={r.regime}
                  className={`rounded-lg p-5 border ${r.color} flex gap-4 items-start`}
                >
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 ${r.tagColor}`}
                  >
                    {r.tag}
                  </span>
                  <div>
                    <div className="font-medium text-[#1C1C1C] text-sm mb-1">{r.regime}</div>
                    <div className="text-gray-600 text-sm font-light leading-relaxed">{r.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les travaux soumis à déclaration préalable à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              À Paris, plusieurs catégories de travaux courants nécessitent une déclaration préalable.
              Cette liste n&apos;est pas exhaustive : en cas de doute, consultez le service urbanisme
              de votre arrondissement.
            </p>
            <ul className="space-y-3">
              {[
                {
                  item: "Modification de façade",
                  detail:
                    "Remplacement des menuiseries par des modèles d'aspect différent (couleur, matériau, profil), création ou agrandissement d'une fenêtre, ajout d'un balcon ou d'une marquise. À Paris, la couleur des huisseries est souvent réglementée par le PLU.",
                },
                {
                  item: "Travaux sur toiture",
                  detail:
                    "Changement de matériau de couverture (tuiles, ardoises), modification de la pente ou de la forme du toit, création de fenêtres de toit (velux), création d'une lucarne. L'aspect extérieur est strictement encadré dans les secteurs historiques.",
                },
                {
                  item: "Extension de moins de 40 m²",
                  detail:
                    "En zone urbaine, les extensions entre 20 et 40 m² restent soumises à DP (et non à PC), à condition que la surface totale après travaux n'excède pas 150 m². Au-delà, le recours à un architecte est obligatoire.",
                },
                {
                  item: "Changement de destination",
                  detail:
                    "Transformer des bureaux en logement, un commerce en atelier ou un logement en local professionnel constitue un changement de destination. Il nécessite une DP si aucune modification de structure n'est réalisée, un PC dans le cas contraire.",
                },
                {
                  item: "Clôtures et portails",
                  detail:
                    "L'installation d'une clôture sur rue ou d'un portail est soumise à DP dans toutes les communes disposant d'un PLU, ce qui est le cas de Paris.",
                },
              ].map((el) => (
                <li key={el.item} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.item}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2 — Dossier */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Constituer le dossier de déclaration préalable
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le dossier de DP se dépose en mairie d&apos;arrondissement (ou en ligne via le portail
            national de l&apos;urbanisme). Un dossier incomplet interrompt le délai d&apos;instruction. Voici
            les pièces à rassembler.
          </p>
          <div className="space-y-4">
            {[
              {
                num: "01",
                titre: "Formulaire CERFA n°13703",
                texte:
                  "C'est le formulaire officiel de déclaration préalable pour les travaux sur construction existante. Il doit être rempli avec précision : coordonnées du demandeur, description du projet, surface concernée. Disponible sur service-public.fr.",
              },
              {
                num: "02",
                titre: "Plan de situation du terrain (PCMI01)",
                texte:
                  "Il permet de localiser le terrain dans la commune. À Paris, une capture du plan cadastral est suffisante. Le numéro de parcelle est disponible sur cadastre.gouv.fr.",
              },
              {
                num: "03",
                titre: "Plan de masse (PCMI02)",
                texte:
                  "Vue du dessus faisant apparaître l'implantation du bâtiment existant et les travaux projetés, avec les dimensions et distances aux limites séparatives. L'échelle doit être indiquée.",
              },
              {
                num: "04",
                titre: "Plan en coupe (PCMI03)",
                texte:
                  "Coupe verticale du terrain et du bâtiment montrant les hauteurs actuelles et futures. Obligatoire pour les travaux modifiant le gabarit (extension, surélévation).",
              },
              {
                num: "05",
                titre: "Photos et insertions paysagères",
                texte:
                  "Photos du bâtiment existant dans son environnement, et simulation du projet une fois réalisé. Obligatoires pour tous les travaux visibles depuis l'espace public.",
              },
              {
                num: "06",
                titre: "Notice descriptive",
                texte:
                  "Document libre décrivant le projet, les matériaux utilisés, les couleurs choisies. À Paris, en secteur ABF, soyez très précis sur les matériaux : ardoise naturelle, zinc, bois peint en couleur X selon nuancier PSMV.",
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

      {/* Section 3 — ABF et délais */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le rôle de l&apos;Architecte des Bâtiments de France (ABF)
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              À Paris, l&apos;ABF exerce un rôle déterminant. Son périmètre de protection s&apos;étend à 500
              mètres autour de chaque monument historique. Compte tenu de la densité des monuments
              parisiens, la quasi-totalité de la capitale est couverte, notamment les 1er, 3e, 4e,
              5e, 6e, 7e, 8e et 9e arrondissements.
            </p>
            <div className="space-y-3">
              {[
                {
                  titre: "Avis conforme",
                  texte:
                    "Dans les secteurs les plus protégés (PSMV — Plan de Sauvegarde et de Mise en Valeur), l'ABF délivre un avis conforme : un avis défavorable de l'ABF entraîne automatiquement le refus de la DP. Le pétitionnaire peut contester devant le préfet de région.",
                },
                {
                  titre: "Délai porté à 2 mois",
                  texte:
                    "Dès lors que l'ABF est consulté, le délai d'instruction passe d'un mois à deux mois. Ce délai court à compter de la réception d'un dossier complet. Une pièce manquante suspend et repart à zéro.",
                },
                {
                  titre: "Matériaux et couleurs imposés",
                  texte:
                    "L'ABF peut imposer des matériaux spécifiques (zinc, ardoise naturelle, enduit à la chaux, bois peint) et des couleurs issues du nuancier du PSMV. Ces exigences sont non négociables dans les périmètres concernés.",
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
              Copropriété : des autorisations complémentaires
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La déclaration préalable est une autorisation administrative. Elle ne se substitue pas
              aux autorisations de copropriété. Si les travaux affectent les parties communes
              (façade, toiture, structure), il faut également obtenir l&apos;accord de l&apos;assemblée
              générale des copropriétaires — souvent à la majorité de l&apos;article 25 ou 26 de la loi
              du 10 juillet 1965.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Obtenir le règlement de copropriété pour identifier les parties communes concernées",
                "Consulter le syndic avant de déposer la DP : certains immeubles imposent une validation architecturale interne",
                "Inscrire le point à l'ordre du jour de la prochaine AG (délai de convocation : 21 jours minimum)",
                "Joindre l'autorisation de l'AG au dossier de DP si les travaux portent sur des parties communes",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                  <span className="text-[#D4AF37] font-medium flex-shrink-0">→</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Refus et recours : que faire ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Un refus de DP n&apos;est pas nécessairement définitif. Voici les recours possibles, dans
              l&apos;ordre chronologique.
            </p>
            <div className="space-y-3">
              {[
                {
                  etape: "1 — Recours gracieux",
                  texte:
                    "Dans les 2 mois suivant la notification du refus, adressez une lettre recommandée au maire d'arrondissement pour demander le réexamen du dossier. C'est souvent l'occasion de modifier légèrement le projet pour lever les objections.",
                },
                {
                  etape: "2 — Recours hiérarchique (ABF)",
                  texte:
                    "Si le refus est motivé par un avis défavorable de l'ABF, le recours s'exerce auprès du préfet de région (DRAC Île-de-France) dans les 2 mois suivant la notification. Le préfet peut passer outre l'ABF dans certains cas.",
                },
                {
                  etape: "3 — Recours contentieux",
                  texte:
                    "Saisine du tribunal administratif de Paris dans les 2 mois suivant la décision de rejet du recours gracieux. Le juge administratif vérifie la légalité de la décision, pas son opportunité. Faites-vous assister par un avocat spécialisé en droit de l'urbanisme.",
                },
              ].map((el) => (
                <div key={el.etape} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.etape}</div>
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
                q: "Quels travaux nécessitent une déclaration préalable à Paris ?",
                a: "Les travaux les plus courants soumis à DP à Paris sont : les modifications de façade (menuiseries, ouvertures), les travaux sur toiture (matériaux, lucarne, velux), les extensions entre 5 et 40 m², et les changements de destination sans travaux sur structure. En zone ABF, des travaux qui seraient libres ailleurs peuvent nécessiter une DP.",
              },
              {
                q: "Quel est le délai d'instruction d'une déclaration préalable à Paris ?",
                a: "Le délai standard est d'un mois à compter du dépôt d'un dossier complet. Il est porté à deux mois lorsque le projet est soumis à l'avis de l'ABF, ce qui concerne la majorité des arrondissements parisiens. L'absence de réponse dans ce délai vaut accord tacite.",
              },
              {
                q: "Que risque-t-on si on fait des travaux sans déclaration à Paris ?",
                a: "Les sanctions vont de l'amende pénale (jusqu'à 300 000 €) à l'obligation de démolir. La prescription est de 6 ans. Sur le plan pratique, les travaux non déclarés bloquent la vente du bien et peuvent entraîner un refus d'assurance. La régularisation a posteriori est possible mais coûteuse.",
              },
              {
                q: "Faut-il l'accord de l'ABF dans Paris ?",
                a: "Oui, pour tous les travaux situés dans le périmètre de protection d'un monument historique (500 m) ou dans un secteur protégé. L'avis de l'ABF est conforme : un avis défavorable entraîne le refus de la DP. Le recours s'exerce auprès du préfet de région dans les 2 mois suivant la notification.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="bg-white rounded-lg border border-gray-100 group"
              >
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
                href: "/blog/autorisation-travaux-copropriete-paris",
                title: "Travaux en copropriété Paris",
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
          Un projet de travaux à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Espace Design vous accompagne de la déclaration préalable jusqu&apos;à la réception du
          chantier. Devis gratuit, déplacement sans engagement.
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
