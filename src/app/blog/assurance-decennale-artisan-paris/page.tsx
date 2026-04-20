import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: "Assurance Decennale Paris : pourquoi exiger une garantie ? Guide 2025",
  description: "Comment verifier l'assurance decennale d'un artisan a Paris ? Travaux couverts, attestation, dommages-ouvrage. Guide complet 2025 par Espace Design.",
  keywords: [
    "assurance decennale Paris",
    "garantie decennale artisan Paris",
    "verifier decennale artisan",
    "attestation decennale",
    "dommages-ouvrage Paris",
    "garantie constructeur Paris",
    "travaux couverts decennale",
    "artisan assure Paris",
  ],
}

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Assurance Decennale Paris : pourquoi exiger une garantie ? Guide 2025",
  description: "Comment verifier l'assurance decennale d'un artisan a Paris ? Travaux couverts, attestation, recours. Guide complet 2025.",
  author: { "@type": "Organization", name: "Espace Design" },
  publisher: {
    "@type": "Organization",
    name: "Espace Design",
    url: "https://espacedesignparis.fr",
  },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  url: "https://espacedesignparis.fr/blog/assurance-decennale-artisan-paris",
}

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment verifier l'assurance decennale d'un artisan a Paris ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Demandez systematiquement l'attestation d'assurance decennale avant tout commencement de travaux. Ce document doit mentionner : le nom et le numero SIRET de l'entreprise, le numero de police, l'assureur, les activites couvertes (electricite, plomberie, gros oeuvre, etc.), et la periode de validite. Verifiez que les travaux que vous commandez entrent bien dans le perimetre des activites couvertes. Vous pouvez egalement contacter l'assureur directement pour valider l'authenticite de l'attestation.",
      },
    },
    {
      "@type": "Question",
      name: "Quels travaux sont couverts par l'assurance decennale ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La garantie decennale couvre les dommages qui compromettent la solidite de l'ouvrage ou le rendent impropre a sa destination, survenus dans les 10 ans apres la reception des travaux. Sont couverts : les fondations et structures portantes, l'etancheite des toitures et facades, les equipements indissociables (chauffage integre, VMC encastree, plomberie encastree). Ne sont pas couverts : les dommages esthetiques, les equipements dissociables (volets, radiateurs independants, electromenager), et les dommages resultant d'un defaut d'entretien.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il souscrire une dommages-ouvrage en tant que maitre d'ouvrage ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La dommages-ouvrage n'est pas obligatoire pour les particuliers construisant pour leur propre usage. Elle est en revanche fortement recommandee car elle permet d'obtenir une indemnisation rapide (dans un delai de 90 jours maximum) sans attendre qu'un tribunal determine la responsabilite de l'artisan. En cas de revente du bien dans les 10 ans, le nouveau proprietaire beneficie egalement de la dommages-ouvrage. Son absence peut bloquer la vente ou entrainner une decote significative du prix.",
      },
    },
    {
      "@type": "Question",
      name: "Que faire si l'artisan n'est pas assure en decennale ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si l'artisan n'est pas assure en decennale, plusieurs recours existent en cas de sinistre. Sur le plan contractuel : vous pouvez exiger la resolution du contrat si la garantie decennale etait une condition essentielle de votre accord. Sur le plan judiciaire : engagez la responsabilite civile de l'artisan devant le tribunal judiciaire (prescription 10 ans). Sur le plan pratique : si l'artisan est insolvable, votre recours devient tres limite. La meilleure protection reste de n'engager que des artisans assures, en verifiant l'attestation avant signature du devis.",
      },
    },
  ],
}

export default function ArticleAssuranceDecennale() {
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
            Assurance Décennale Artisan Paris : ce qu&apos;il faut savoir
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            L&apos;assurance décennale est la protection la plus importante pour tout maître
            d&apos;ouvrage engageant des travaux à Paris. Voici comment la vérifier, ce qu&apos;elle
            couvre vraiment, et ce qui se passe si votre artisan n&apos;en dispose pas.
          </p>
        </div>
      </section>

      {/* Section 1 — Définition */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Qu&apos;est-ce que la garantie décennale ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La garantie décennale est une assurance obligatoire pour tous les professionnels du
              bâtiment en France, instaurée par la loi Spinetta du 4 janvier 1978 (codifiée aux
              articles 1792 et suivants du Code civil). Elle couvre les dommages compromettant la
              solidité de l&apos;ouvrage ou le rendant impropre à sa destination, pendant 10 ans à
              compter de la réception des travaux.
            </p>
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-5 mb-5">
              <div className="font-medium text-amber-900 text-sm mb-2">Point clé</div>
              <p className="text-amber-800 text-sm font-light leading-relaxed">
                La décennale est une présomption de responsabilité : dès lors qu&apos;un dommage est
                constaté dans les 10 ans après réception et qu&apos;il entre dans son champ, l&apos;artisan
                est automatiquement responsable sauf à prouver une cause étrangère (force majeure,
                faute du maître d&apos;ouvrage).
              </p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Le délai de 10 ans court à compter de la date de réception des travaux — c&apos;est-à-dire
              la date de signature du procès-verbal de réception (ou la date à laquelle vous avez
              pris possession des lieux si aucun PV n&apos;a été établi). Il est impératif de dater
              précisément cet acte.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Ce que couvre (et ne couvre pas) la décennale
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="bg-green-50 border border-green-100 rounded-lg p-5">
                <div className="font-semibold text-green-800 text-sm mb-3">Couvert</div>
                <ul className="space-y-2">
                  {[
                    "Fondations et structures portantes (poteaux, dalles, charpente)",
                    "Étanchéité des toitures, terrasses, façades",
                    "Canalisations encastrées (fuites dans les murs)",
                    "VMC et chauffage intégrés dans la construction",
                    "Isolation thermique ou phonique incorporée",
                  ].map((item) => (
                    <li key={item} className="text-sm text-green-900 font-light flex gap-2">
                      <span className="flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-lg p-5">
                <div className="font-semibold text-red-800 text-sm mb-3">Non couvert</div>
                <ul className="space-y-2">
                  {[
                    "Dommages esthétiques (rayures, couleur, finitions)",
                    "Équipements dissociables (volets, radiateurs indépendants)",
                    "Électroménager et appareils fournis",
                    "Défaut d'entretien par le propriétaire",
                    "Dommages antérieurs à la réception",
                  ].map((item) => (
                    <li key={item} className="text-sm text-red-900 font-light flex gap-2">
                      <span className="flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              La frontière entre équipement dissociable et indissociable peut faire l&apos;objet de
              contentieux. Un radiateur posé au sol est dissociable ; un plancher chauffant coulé
              dans la dalle est indissociable. En cas de doute, demandez à votre artisan de
              préciser le périmètre couvert dans son attestation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Vérifier */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Comment vérifier l&apos;assurance décennale d&apos;un artisan
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Un artisan sérieux vous remet spontanément son attestation décennale. Si ce n&apos;est
            pas le cas, demandez-la systématiquement avant la signature du devis. Voici les
            points à contrôler.
          </p>
          <div className="space-y-4">
            {[
              {
                num: "01",
                titre: "Identité de l'entreprise",
                texte:
                  "Le nom commercial, la raison sociale et le numéro SIRET figurant sur l'attestation doivent correspondre exactement à ceux du devis. Une attestation au nom d'une autre entité (société mère, holding) ne couvre pas les travaux réalisés par votre artisan.",
              },
              {
                num: "02",
                titre: "Activités couvertes",
                texte:
                  "L'attestation liste les activités assurées : maçonnerie, électricité, plomberie, couverture, etc. Vérifiez que le type de travaux que vous commanditez est bien inclus. Une décennale électricité ne couvre pas les travaux de structure, et inversement.",
              },
              {
                num: "03",
                titre: "Période de validité",
                texte:
                  "L'attestation doit être valide à la date d'ouverture du chantier. Une attestation expirée ne couvre pas les nouveaux travaux. Demandez l'attestation la plus récente, même si l'artisan vous en a fourni une lors du premier contact.",
              },
              {
                num: "04",
                titre: "Vérification auprès de l'assureur",
                texte:
                  "Pour les chantiers importants, contactez directement l'assureur mentionné sur l'attestation pour confirmer que le contrat est en vigueur. Certains artisans présentent des attestations falsifiées ou relatives à des contrats résiliés pour non-paiement.",
              },
              {
                num: "05",
                titre: "Mention sur le devis",
                texte:
                  "Le devis doit mentionner les coordonnées de l'assureur décennal de l'entreprise (nom et adresse de l'assureur, numéro de police). Cette mention est obligatoire depuis la loi ELAN de 2018 pour les artisans dont le chiffre d'affaires dépasse un certain seuil.",
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

      {/* Section 3 — DO et artisan non assuré */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              L&apos;assurance dommages-ouvrage côté maître d&apos;ouvrage
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La dommages-ouvrage (DO) est l&apos;assurance du maître d&apos;ouvrage — c&apos;est-à-dire vous.
              Distincte de la décennale de l&apos;artisan, elle vous permet d&apos;être indemnisé rapidement
              en cas de sinistre décennal sans passer par une procédure judiciaire longue.
            </p>
            <div className="space-y-3">
              {[
                {
                  titre: "Principe de fonctionnement",
                  texte:
                    "En cas de sinistre décennal, vous déclarez le sinistre à votre assureur DO. Celui-ci mandate un expert, rend son rapport sous 60 jours (90 jours au maximum), et vous indemnise. Il se retourne ensuite contre l'assureur décennal de l'artisan responsable — sans vous impliquer.",
                },
                {
                  titre: "Obligatoire pour qui ?",
                  texte:
                    "La dommages-ouvrage est obligatoire pour les professionnels de l'immobilier (promoteurs, marchands de biens). Pour les particuliers, elle n'est pas obligatoire légalement mais vivement recommandée, surtout pour des travaux structurels importants (mur porteur, toiture, extension).",
                },
                {
                  titre: "Impact sur la revente",
                  texte:
                    "L'absence de dommages-ouvrage peut bloquer ou déccoter une vente immobilière dans les 10 ans suivant les travaux. Les notaires et acquéreurs avertis la demandent systématiquement. Elle se transfère automatiquement aux propriétaires successifs pendant toute la durée de la garantie décennale.",
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
              Que faire si l&apos;artisan n&apos;est pas assuré ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Un artisan qui intervient sans assurance décennale s&apos;expose à des sanctions pénales
              (amende jusqu&apos;à 75 000 €, 6 mois d&apos;emprisonnement). Mais le risque est aussi pour
              vous. Voici vos options.
            </p>
            <div className="space-y-3">
              {[
                {
                  cas: "Avant les travaux",
                  texte:
                    "Refusez de signer le devis tant que l'attestation décennale valide n'est pas remise. Un artisan sérieux en dispose et la produit sans difficulté. Un artisan qui rechigne ou prétexte qu'elle est en cours de renouvellement doit vous alerter.",
                },
                {
                  cas: "Pendant les travaux",
                  texte:
                    "Si vous découvrez en cours de chantier que l'artisan n'est pas assuré, mettez-le en demeure par écrit (LRAR) de justifier de son assurance. S'il ne peut le faire, vous pouvez résilier le contrat pour manquement à une obligation essentielle et demander restitution des acomptes versés.",
                },
                {
                  cas: "Après les travaux — en cas de sinistre",
                  texte:
                    "Engagez la responsabilité civile de l'artisan devant le tribunal judiciaire de Paris (prescription décennale). Si l'artisan est insolvable ou introuvable, votre recours devient très limité en l'absence de DO. La Garantie des Artisans et Entreprises du Bâtiment (FNTP) ne couvre pas les particuliers lésés par des artisans non assurés.",
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
              Les 3 garanties légales après réception
            </h2>
            <div className="space-y-3">
              {[
                {
                  garantie: "Garantie de parfait achèvement — 1 an",
                  texte:
                    "Pendant 1 an à compter de la réception, l'artisan est tenu de réparer tous les désordres signalés, y compris les défauts esthétiques mentionnés au PV de réception ou notifiés par LRAR pendant l'année. Elle ne couvre pas l'usure normale ni les dommages causés par vous.",
                },
                {
                  garantie: "Garantie biennale — 2 ans",
                  texte:
                    "Elle couvre les éléments d'équipement dissociables (volets, robinetterie, radiateurs, VMC sans caisson encastré) pendant 2 ans. Différente de la décennale, elle s'applique aux équipements qui peuvent être enlevés sans dégrader l'ouvrage.",
                },
                {
                  garantie: "Garantie décennale — 10 ans",
                  texte:
                    "La plus importante : couvre les dommages compromettant la solidité ou l'usage du bâtiment pendant 10 ans. Présomption de responsabilité de l'artisan sauf cause étrangère prouvée. Court dès la réception des travaux.",
                },
              ].map((el) => (
                <div key={el.garantie} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.garantie}</div>
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
                q: "Comment vérifier l'assurance décennale d'un artisan à Paris ?",
                a: "Demandez l'attestation d'assurance décennale avant tout commencement de travaux. Vérifiez : le nom de l'entreprise (doit correspondre au devis), le numéro SIRET, les activités couvertes (elles doivent inclure vos travaux), et la période de validité. Pour les chantiers importants, contactez directement l'assureur pour confirmer que le contrat est en cours.",
              },
              {
                q: "Quels travaux sont couverts par l'assurance décennale ?",
                a: "La décennale couvre les dommages compromettant la solidité de l'ouvrage ou le rendant impropre à sa destination : fondations, structure, étanchéité des toitures et façades, canalisations encastrées, équipements indissociables (plancher chauffant, VMC intégrée). Elle ne couvre pas les défauts esthétiques ni les équipements dissociables.",
              },
              {
                q: "Faut-il souscrire une dommages-ouvrage à Paris ?",
                a: "Non obligatoire pour les particuliers, mais fortement recommandée. La DO vous permet d'être indemnisé sous 90 jours maximum sans passer par un tribunal, et se transfère aux acheteurs successifs. Son absence peut bloquer ou déccoter une revente dans les 10 ans. Pour les travaux structurels importants, c'est une protection essentielle.",
              },
              {
                q: "Que faire si l'artisan n'est pas assuré en décennale ?",
                a: "Avant les travaux : refusez de signer tant que l'attestation n'est pas produite. Pendant les travaux : mettez en demeure par LRAR et résiliez si aucune attestation n'est fournie. Après les travaux en cas de sinistre : engagez la responsabilité civile de l'artisan devant le tribunal judiciaire (prescription 10 ans). Si l'artisan est insolvable, votre recours est très limité.",
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
                href: "/blog/reception-travaux-paris",
                title: "Réception des travaux Paris",
              },
              {
                href: "/blog/declaration-travaux-paris",
                title: "Déclaration préalable de travaux Paris",
              },
              {
                href: "/blog/devis-renovation-paris",
                title: "Devis rénovation Paris",
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
          Un projet de rénovation à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Espace Design est assurée en décennale. Attestation fournie avec chaque devis.
          Déplacement gratuit sans engagement.
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
