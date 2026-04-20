import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: "Assurance Décennale Paris : pourquoi l'exiger à votre artisan 2025",
  description: "Assurance décennale à Paris : définition, travaux couverts, comment vérifier l'attestation de votre artisan. Guide complet 2025 par Espace Design.",
  keywords: [
    "assurance décennale Paris",
    "garantie décennale travaux Paris",
    "vérifier décennale artisan Paris",
    "attestation décennale 2025",
    "garantie 10 ans artisan Paris",
    "dommages-ouvrage Paris",
    "responsabilité artisan Paris",
    "protection travaux rénovation Paris",
  ],
}

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Assurance Décennale Paris : pourquoi l'exiger à votre artisan 2025",
  description: "Assurance décennale à Paris : définition, travaux couverts, comment vérifier l'attestation de votre artisan. Guide complet 2025.",
  author: { "@type": "Organization", name: "Espace Design" },
  publisher: {
    "@type": "Organization",
    name: "Espace Design",
    url: "https://espacedesignparis.fr",
  },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  url: "https://espacedesignparis.fr/blog/assurance-decennale-renovation-paris",
}

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce que la garantie décennale et à quoi sert-elle ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La garantie décennale est une assurance obligatoire pour tout professionnel du bâtiment en France, instaurée par la loi Spinetta du 4 janvier 1978. Elle couvre les dommages compromettant la solidité de l'ouvrage ou le rendant impropre à sa destination pendant 10 ans à compter de la réception des travaux. Il s'agit d'une présomption de responsabilité : dès qu'un sinistre entre dans son champ, l'artisan est automatiquement responsable sauf à prouver une cause étrangère (force majeure ou faute du maître d'ouvrage).",
      },
    },
    {
      "@type": "Question",
      name: "Comment vérifier l'assurance décennale d'un artisan à Paris ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Demandez l'attestation d'assurance décennale avant la signature du devis. Vérifiez que le nom et le SIRET correspondent exactement à ceux du devis, que les activités couvertes incluent vos travaux (maçonnerie, plomberie, électricité, etc.), et que l'attestation est valide à la date d'ouverture du chantier. Pour les chantiers importants, contactez directement l'assureur pour confirmer que le contrat est actif. Depuis la loi ELAN de 2018, l'assureur et le numéro de police doivent figurer sur le devis.",
      },
    },
    {
      "@type": "Question",
      name: "Quels travaux de rénovation sont couverts par la décennale à Paris ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La décennale couvre les dommages affectant la solidité ou l'usage du bâtiment : fondations, structures portantes (poteaux, dalles, charpente), étanchéité des toitures et façades, canalisations encastrées, isolation thermique ou phonique incorporée, plancher chauffant coulé. Elle ne couvre pas les défauts esthétiques (peinture, finitions), les équipements dissociables (radiateurs indépendants, volets, électroménager), ni les dommages dus à un défaut d'entretien.",
      },
    },
    {
      "@type": "Question",
      name: "Que faire si l'artisan réalise des travaux sans assurance décennale ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un artisan non assuré en décennale s'expose à une amende jusqu'à 75 000 euros et 6 mois d'emprisonnement. Pour le client, le risque est majeur en cas de sinistre. Avant les travaux : refusez de signer tant que l'attestation n'est pas remise. Pendant les travaux : mettez en demeure par LRAR et résiliez si aucune attestation n'est fournie. Après les travaux en cas de sinistre : engagez la responsabilité civile devant le tribunal judiciaire de Paris (prescription 10 ans). Si l'artisan est insolvable, le recours devient très limité.",
      },
    },
  ],
}

export default function ArticleAssuranceDecennaleRenovation() {
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
            Assurance Décennale à Paris : guide complet pour vos travaux 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            L&apos;assurance décennale est la première protection à exiger de tout artisan
            intervenant dans votre logement à Paris. Voici comment la comprendre,
            la vérifier, et ce qu&apos;elle couvre réellement dans le cadre d&apos;une rénovation.
          </p>
        </div>
      </section>

      {/* Section 1 — Définition et fondements */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Qu&apos;est-ce que la garantie décennale ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La garantie décennale est une assurance obligatoire pour tous les
              professionnels du bâtiment en France, instaurée par la loi Spinetta du
              4 janvier 1978 (articles 1792 et suivants du Code civil). Elle couvre les
              dommages compromettant la solidité de l&apos;ouvrage ou le rendant impropre à sa
              destination, pendant 10 ans à compter de la réception des travaux.
            </p>
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-5 mb-5">
              <div className="font-medium text-amber-900 text-sm mb-2">Le principe clé</div>
              <p className="text-amber-800 text-sm font-light leading-relaxed">
                C&apos;est une présomption de responsabilité : dès lors qu&apos;un dommage entre dans
                le champ de la décennale dans les 10 ans après réception, l&apos;artisan est
                automatiquement responsable — sauf à prouver une cause étrangère (force
                majeure, faute exclusive du maître d&apos;ouvrage).
              </p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Le délai de 10 ans court à partir de la date de réception des travaux — soit
              la date de signature du procès-verbal de réception, soit la date de prise de
              possession des lieux si aucun PV n&apos;a été établi. Il est donc indispensable de
              formaliser la réception par un document daté et signé des deux parties.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les trois garanties légales après réception
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La décennale s&apos;inscrit dans un dispositif légal de trois garanties successives,
              couvrant différents types de défauts sur différentes durées.
            </p>
            <div className="space-y-3">
              {[
                {
                  garantie: "Garantie de parfait achèvement — 1 an",
                  texte:
                    "Couvre tous les désordres signalés lors de la réception ou notifiés par LRAR dans l'année suivante, y compris les défauts esthétiques. L'artisan est tenu de réparer. Ne couvre pas l'usure normale ni les dommages causés par le propriétaire.",
                },
                {
                  garantie: "Garantie biennale — 2 ans",
                  texte:
                    "Couvre les éléments d'équipement dissociables pendant 2 ans : volets, robinetterie, radiateurs indépendants, VMC sans caisson encastré. Différente de la décennale, elle s'applique aux équipements pouvant être enlevés sans dégrader l'ouvrage.",
                },
                {
                  garantie: "Garantie décennale — 10 ans",
                  texte:
                    "La plus importante. Couvre les dommages compromettant la solidité ou l'usage du bâtiment : structure, étanchéité, équipements indissociables. Présomption de responsabilité automatique, cours dès la réception.",
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

      {/* Section 2 — Ce que couvre la décennale */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Ce que couvre (et ne couvre pas) la décennale en rénovation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La frontière entre couvert et non couvert suscite souvent des litiges. Voici
            les cas les plus fréquents en rénovation parisienne.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 border border-green-100 rounded-lg p-5">
              <div className="font-semibold text-green-800 text-sm mb-3">Couvert par la décennale</div>
              <ul className="space-y-2">
                {[
                  "Fondations et structures portantes",
                  "Étanchéité toiture, terrasse, façade",
                  "Canalisations encastrées (fuites dans murs)",
                  "Plancher chauffant coulé dans la dalle",
                  "VMC et chauffage intégrés à la structure",
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
                  "Défauts esthétiques (peinture, finitions)",
                  "Radiateurs et volets indépendants",
                  "Électroménager et équipements fournis",
                  "Défaut d'entretien par le propriétaire",
                  "Dommages antérieurs à la réception",
                  "Usure normale dans le temps",
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
            La distinction entre équipement indissociable (couvert) et dissociable (non
            couvert) est centrale. Un radiateur posé au sol est dissociable ; un plancher
            chauffant coulé dans la dalle est indissociable. En cas de doute, demandez à
            l&apos;artisan de préciser dans l&apos;attestation ou le devis le périmètre exact couvert.
          </p>
        </div>
      </section>

      {/* Section 3 — Vérifier l'attestation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Comment vérifier l&apos;assurance décennale d&apos;un artisan à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Un artisan sérieux remet spontanément son attestation décennale. Voici les
              5 points à contrôler avant de signer le moindre devis.
            </p>
            <div className="space-y-4">
              {[
                {
                  num: "01",
                  titre: "Identité de l'entreprise",
                  texte:
                    "Le nom commercial, la raison sociale et le numéro SIRET de l'attestation doivent correspondre exactement à ceux du devis. Une attestation au nom d'une société mère ou d'une autre entité ne couvre pas les travaux de votre artisan.",
                },
                {
                  num: "02",
                  titre: "Activités couvertes",
                  texte:
                    "L'attestation liste les activités assurées : maçonnerie, plomberie, électricité, couverture, carrelage, etc. Vérifiez que vos travaux entrent bien dans ce périmètre. Une décennale électricité ne couvre pas des travaux de structure.",
                },
                {
                  num: "03",
                  titre: "Période de validité",
                  texte:
                    "L'attestation doit être valide à la date d'ouverture du chantier. Une attestation expirée ne couvre pas les nouveaux travaux. Demandez toujours la plus récente, même si l'artisan vous en a fourni une lors du premier contact.",
                },
                {
                  num: "04",
                  titre: "Vérification auprès de l'assureur",
                  texte:
                    "Pour les chantiers importants, contactez directement l'assureur pour confirmer que le contrat est en vigueur. Certains artisans présentent des attestations falsifiées ou relatives à des contrats résiliés pour non-paiement de prime.",
                },
                {
                  num: "05",
                  titre: "Mention obligatoire sur le devis",
                  texte:
                    "Depuis la loi ELAN de 2018, le devis doit mentionner le nom et l'adresse de l'assureur décennal ainsi que le numéro de police. L'absence de cette mention est un signal d'alerte. Refusez tout devis sans ces informations.",
                },
              ].map((el) => (
                <div
                  key={el.num}
                  className="flex gap-4 bg-[#FAFAF8] rounded-lg p-5 border border-gray-100"
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

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              La dommages-ouvrage : votre assurance en tant que maître d&apos;ouvrage
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La dommages-ouvrage (DO) est distincte de la décennale de l&apos;artisan. Elle est
              souscrite par vous — le maître d&apos;ouvrage — et vous permet d&apos;être indemnisé
              rapidement en cas de sinistre, sans attendre un jugement sur la responsabilité.
            </p>
            <div className="space-y-3">
              {[
                {
                  titre: "Comment cela fonctionne ?",
                  texte:
                    "En cas de sinistre décennal, vous déclarez à votre assureur DO. Il mandate un expert, rend son rapport sous 60 jours (90 jours maximum), et vous indemnise. Il se retourne ensuite contre l'assureur décennal de l'artisan responsable, sans vous impliquer.",
                },
                {
                  titre: "Est-ce obligatoire ?",
                  texte:
                    "La DO est obligatoire pour les promoteurs et marchands de biens. Pour les particuliers, elle n'est pas légalement obligatoire mais fortement recommandée pour les travaux structurels importants. Son coût est généralement de 1 à 3 % du montant des travaux.",
                },
                {
                  titre: "Impact sur la revente dans les 10 ans",
                  texte:
                    "L'absence de DO peut bloquer ou décote une vente immobilière. Elle se transfère automatiquement aux propriétaires successifs pendant toute la durée de la garantie. Les notaires et acquéreurs avertis la demandent systématiquement.",
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
              Artisan non assuré : quels recours à Paris ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Travailler avec un artisan non assuré en décennale vous expose à des risques
              majeurs. Voici vos options selon le moment où vous le découvrez.
            </p>
            <div className="space-y-3">
              {[
                {
                  cas: "Avant les travaux",
                  texte:
                    "Refusez de signer le devis tant que l'attestation décennale valide n'est pas remise. Un artisan sérieux en dispose et la produit sans difficulté. S'il prétexte qu'elle est en cours de renouvellement, demandez une prolongation provisoire de son assureur.",
                },
                {
                  cas: "Pendant les travaux",
                  texte:
                    "Mettez l'artisan en demeure par LRAR de justifier son assurance. En cas d'absence de réponse, résiliez le contrat pour manquement à une obligation essentielle et demandez la restitution des acomptes versés.",
                },
                {
                  cas: "Après les travaux en cas de sinistre",
                  texte:
                    "Engagez la responsabilité civile de l'artisan devant le tribunal judiciaire de Paris (prescription décennale de 10 ans). Si l'artisan est insolvable ou introuvable, votre recours devient très limité. La présence d'une DO de votre côté est alors la seule protection réelle.",
                },
              ].map((el) => (
                <div key={el.cas} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.cas}</div>
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
                q: "Qu'est-ce que la garantie décennale et à quoi sert-elle ?",
                a: "La garantie décennale est une assurance obligatoire (loi Spinetta, 1978) couvrant les dommages compromettant la solidité ou l'usage du bâtiment pendant 10 ans après réception. C'est une présomption de responsabilité automatique pour l'artisan, sauf cause étrangère prouvée.",
              },
              {
                q: "Comment vérifier l'assurance décennale d'un artisan à Paris ?",
                a: "Demandez l'attestation décennale avant signature du devis. Vérifiez : le SIRET (doit correspondre au devis), les activités couvertes (doivent inclure vos travaux), la période de validité. Le devis doit aussi mentionner le nom de l'assureur et le numéro de police (obligation loi ELAN 2018).",
              },
              {
                q: "Quels travaux de rénovation sont couverts par la décennale à Paris ?",
                a: "La décennale couvre : fondations, structures portantes, étanchéité toitures et façades, canalisations encastrées, plancher chauffant coulé, isolation incorporée. Elle ne couvre pas les défauts esthétiques, les équipements dissociables (radiateurs, volets), ni les dommages dus à un défaut d'entretien.",
              },
              {
                q: "Que faire si l'artisan réalise des travaux sans assurance décennale ?",
                a: "Avant : refusez de signer. Pendant : mettez en demeure par LRAR et résiliez si aucune attestation n'est produite. Après sinistre : engagez la responsabilité civile devant le tribunal judiciaire de Paris (prescription 10 ans). Sans DO de votre côté et si l'artisan est insolvable, le recours est très limité.",
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
              { href: "/blog/reception-travaux-paris", title: "Réception des travaux Paris" },
              { href: "/blog/autorisation-copropriete-paris", title: "Autorisation copropriété Paris" },
              { href: "/blog/devis-renovation-paris", title: "Devis rénovation Paris" },
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
          Espace Design est assurée en décennale pour tous vos travaux. Attestation
          fournie avec chaque devis. Déplacement gratuit sans engagement.
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
