import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "Rénovation Appartement Locatif Paris : travaux déductibles & rentabilité 2025 | Espace Design",
  description:
    "Rénovation locatif Paris : quels travaux déduire des impôts fonciers, comment valoriser son bien, améliorer le DPE et augmenter le loyer. Guide complet 2025.",
  keywords: [
    "rénovation locatif Paris",
    "travaux déductibles impôts fonciers",
    "rentabilité rénovation locative Paris",
    "DPE rénovation appartement Paris",
    "valorisation bien locatif Paris",
  ],
}

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Rénovation Appartement Locatif Paris : travaux déductibles & rentabilité 2025",
  description: "Guide complet pour rénover un appartement locatif à Paris : travaux déductibles, impact sur le loyer, DPE et retour sur investissement.",
  author: { "@type": "Organization", name: "Espace Design" },
  publisher: {
    "@type": "Organization",
    name: "Espace Design",
    url: "https://espacedesignparis.fr",
  },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
}

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quels travaux sont déductibles des impôts fonciers ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Au régime réel, sont déductibles les travaux de réparation et d'entretien (peinture, remplacement de revêtements, réparation de plomberie), les travaux d'amélioration qui n'augmentent pas la surface (nouvelle salle de bain, installation chauffage, isolation), et les charges de copropriété relatives aux travaux. Ne sont pas déductibles les travaux de construction ou d'agrandissement.",
      },
    },
    {
      "@type": "Question",
      name: "Rénovation locative à Paris : quel ROI peut-on espérer ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "À Paris, une rénovation complète d'un appartement locatif permet généralement d'augmenter le loyer de 15 à 30 % et de réduire la vacance locative. Sur un 2 pièces loué 1 200 €/mois avant rénovation, le gain peut atteindre 200 à 300 €/mois après travaux, soit un retour sur investissement en 5 à 8 ans pour un budget de 20 000 à 25 000 €.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il rénover avant ou entre deux locataires ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Idéalement entre deux locataires, car l'appartement est vide et les travaux peuvent avancer rapidement sans contraintes. C'est aussi le bon moment pour faire un état des lieux exhaustif, identifier les dégradations et effectuer les travaux déductibles. Prévoir 3 à 6 semaines de vacance locative selon l'ampleur des travaux.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle rénovation permet de louer plus cher à Paris ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "À Paris, les rénovations qui valorisent le plus le loyer sont : la refonte de la salle de bain (douche italienne, faïence neuve), la cuisine rénovée ou ouverte, le parquet massif ou parquet massif huilé en remplacement d'un sol vieilli, et la mise aux normes électrique avec tableau neuf. Le DPE joue également un rôle croissant : passer de F à C peut justifier une hausse de loyer de 10 à 20 %.",
      },
    },
  ],
}

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://espacedesignparis.fr" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://espacedesignparis.fr/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Rénovation locatif Paris : travaux déductibles & rentabilité",
      item: "https://espacedesignparis.fr/blog/travaux-renovation-locatif-paris",
    },
  ],
}

export default function ArticleRenovationLocatif() {
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
            Investissement & Rentabilité
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Rénovation Locatif Paris : maximiser la rentabilité de votre bien
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Rénover un appartement locatif à Paris, c&apos;est à la fois un levier fiscal et un levier
            de valorisation. Bien arbitrés, les travaux permettent de déduire des charges, d&apos;améliorer
            le DPE, d&apos;augmenter le loyer et de réduire la vacance locative. Ce guide vous explique
            quels travaux prioriser et comment maximiser votre retour sur investissement en 2025.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 — Travaux déductibles */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Travaux déductibles des impôts fonciers : régime micro-foncier vs régime réel
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La déductibilité des travaux dépend du régime fiscal choisi pour vos revenus
              fonciers. C&apos;est un point clé à anticiper avant de lancer votre chantier.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <div className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">
                  Régime micro-foncier
                </h3>
                <p className="text-gray-600 text-xs font-light leading-relaxed mb-3">
                  Applicable si vos revenus fonciers bruts sont inférieurs à 15 000 €/an.
                  Un abattement forfaitaire de 30 % est appliqué automatiquement.
                </p>
                <div className="flex items-start gap-2">
                  <span className="text-red-400 text-xs mt-0.5">✕</span>
                  <p className="text-gray-500 text-xs font-light">
                    Aucune déduction possible pour les travaux réels. Si vous effectuez des travaux
                    importants, ce régime est désavantageux.
                  </p>
                </div>
              </div>
              <div className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-5">
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">
                  Régime réel
                </h3>
                <p className="text-gray-600 text-xs font-light leading-relaxed mb-3">
                  Obligatoire au-delà de 15 000 €/an de revenus fonciers, ou sur option.
                  Vous déduisez vos charges réelles de vos revenus.
                </p>
                <div className="flex items-start gap-2">
                  <span className="text-[#B8960C] text-xs mt-0.5">✓</span>
                  <p className="text-gray-500 text-xs font-light">
                    Travaux de réparation, d&apos;entretien et d&apos;amélioration déductibles à 100 %.
                    Un déficit foncier peut même s&apos;imputer sur votre revenu global jusqu&apos;à 10 700 €/an.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-3">
              Quels travaux sont déductibles au régime réel ?
            </h3>
            <div className="space-y-3">
              {[
                {
                  deductible: true,
                  label: "Travaux de réparation et d'entretien",
                  exemples: "Peinture, remplacement de revêtements de sol, réparation de plomberie, remplacement de fenêtres à l'identique, ravallement.",
                },
                {
                  deductible: true,
                  label: "Travaux d'amélioration",
                  exemples: "Nouvelle salle de bain, installation du chauffage central, isolation des murs et combles, remplacement du système électrique.",
                },
                {
                  deductible: true,
                  label: "Charges de copropriété (travaux)",
                  exemples: "Quote-part des travaux votés en AG sur les parties communes (ravalement, ascenseur, toiture).",
                },
                {
                  deductible: false,
                  label: "Travaux de construction ou d'agrandissement",
                  exemples: "Surélévation, extension, création de nouveaux locaux. Ces travaux s'ajoutent au prix de revient du bien et sont amortissables, mais non déductibles immédiatement.",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <span
                    className={`text-sm flex-shrink-0 mt-0.5 font-medium ${
                      item.deductible ? "text-green-600" : "text-red-400"
                    }`}
                  >
                    {item.deductible ? "✓" : "✕"}
                  </span>
                  <div>
                    <span className="text-[#1C1C1C] text-sm font-medium">{item.label} : </span>
                    <span className="text-gray-600 text-sm font-light">{item.exemples}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 — Valorisation locative */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Valorisation locative : combien la rénovation augmente-t-elle le loyer à Paris ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              À Paris, le marché locatif est extrêmement tendu. Pourtant, la qualité du bien
              reste un facteur différenciant : un appartement rénové se loue plus vite, à un
              loyer plus élevé et attire des locataires plus stables.
            </p>

            <div className="border-l-2 border-[#D4AF37] pl-5 mb-6">
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                Exemple concret : 2 pièces de 40 m² dans le 12e arrondissement
              </h3>
              <div className="bg-[#FAFAF8] rounded-lg p-4 text-sm">
                {[
                  { poste: "Loyer avant rénovation (état vieilli)", valeur: "1 100 €/mois" },
                  { poste: "Loyer après rénovation (salle de bain + cuisine + peinture)", valeur: "1 380 €/mois" },
                  { poste: "Gain mensuel", valeur: "+280 €/mois" },
                  { poste: "Budget travaux", valeur: "18 000 €" },
                  { poste: "Retour sur investissement brut", valeur: "5,4 ans" },
                ].map((row, i) => (
                  <div
                    key={row.poste}
                    className={`flex justify-between py-1.5 ${
                      i < 4 ? "border-b border-gray-100" : "font-semibold text-[#1C1C1C]"
                    }`}
                  >
                    <span className={i < 4 ? "text-gray-600 font-light" : ""}>{row.poste}</span>
                    <span className={i === 2 ? "text-green-600 font-medium" : ""}>{row.valeur}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Le retour sur investissement est d&apos;autant plus rapide que la vacance locative diminue.
              Un appartement rénové se loue en moyenne 2 à 3 fois plus vite qu&apos;un bien vieilli,
              réduisant la perte de loyers entre deux locataires.
            </p>
          </div>

          {/* Section 3 — Priorités travaux locatif */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Priorités travaux pour un logement locatif à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Pour maximiser la valorisation locative avec un budget maîtrisé, voici les travaux
              à prioriser dans cet ordre :
            </p>
            <ul className="space-y-4">
              {[
                {
                  rang: "1",
                  titre: "Salle de bain",
                  impact: "Impact loyer ++",
                  detail: "La salle de bain est le premier critère d'appréciation d'un locataire. Une douche italienne neuve, une faïence propre et une robinetterie moderne transforment la perception du bien. Budget : 7 000 à 12 000 €.",
                },
                {
                  rang: "2",
                  titre: "Cuisine",
                  impact: "Impact loyer ++",
                  detail: "Rénover ou ouvrir la cuisine crée de l'espace et modernise l'appartement. Une cuisine ouverte sur le séjour est particulièrement appréciée sur les petites surfaces parisiennes. Budget : 6 000 à 15 000 €.",
                },
                {
                  rang: "3",
                  titre: "Peinture et sols",
                  impact: "Impact loyer +",
                  detail: "Une peinture fraîche et des sols propres sont le minimum attendu. Parquet massif huilé ou carrelage grand format plutôt que stratifié bas de gamme : le surcoût est limité et l'effet immédiat sur la valeur perçue est significatif. Budget : 3 000 à 6 000 €.",
                },
                {
                  rang: "4",
                  titre: "Électricité et tableau",
                  impact: "Impact sécurité & DPE",
                  detail: "Un tableau électrique aux normes et des prises en nombre suffisant sont des arguments de poids face à des locataires exigeants. Obligatoire si le diagnostic électrique signale des non-conformités. Budget : 3 000 à 7 000 €.",
                },
                {
                  rang: "5",
                  titre: "Isolation et chauffage",
                  impact: "Impact DPE & charges",
                  detail: "Avec les nouvelles règles sur les passoires thermiques (interdiction de louer les biens classés G depuis 2025, F à partir de 2028), améliorer le DPE devient urgent pour les propriétaires bailleurs parisiens. Des aides MaPrimeRénov' sont disponibles.",
                },
              ].map((item) => (
                <li key={item.rang} className="flex gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1C1C1C] flex items-center justify-center text-white text-xs font-semibold">
                    {item.rang}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-[#1C1C1C]">{item.titre}</span>
                      <span className="text-[10px] text-[#B8960C] uppercase tracking-widest font-light">
                        {item.impact}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 — DPE */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              DPE et rénovation énergétique : un enjeu croissant pour les bailleurs parisiens
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Depuis 2025, la loi Climat et Résilience impose des restrictions progressives à
              la location des logements énergivores. À Paris, où le parc immobilier est souvent
              ancien, ce sujet concerne de nombreux propriétaires bailleurs.
            </p>

            <div className="overflow-x-auto mb-5">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left font-light px-4 py-3 text-xs uppercase tracking-widest">Classe DPE</th>
                    <th className="text-left font-light px-4 py-3 text-xs uppercase tracking-widest">Statut locatif</th>
                    <th className="text-left font-light px-4 py-3 text-xs uppercase tracking-widest">Impact loyer estimé</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { dpe: "A / B", statut: "Libre de louer", impact: "+10 à +20 % vs moyenne" },
                    { dpe: "C / D", statut: "Libre de louer", impact: "Loyer de marché" },
                    { dpe: "E", statut: "Libre, gel des loyers", impact: "Loyer plafonné" },
                    { dpe: "F", statut: "Loyer gelé — interdit à partir de 2028", impact: "-10 à -15 % vs marché" },
                    { dpe: "G", statut: "Interdit à la location depuis jan. 2025", impact: "Non louable" },
                  ].map((row, i) => (
                    <tr key={row.dpe} className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"}>
                      <td className="px-4 py-3 font-semibold text-[#1C1C1C]">{row.dpe}</td>
                      <td className="px-4 py-3 text-gray-600 font-light">{row.statut}</td>
                      <td className="px-4 py-3 text-gray-600 font-light">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Améliorer le DPE d&apos;un appartement parisien de classe F à classe C nécessite en général
              une combinaison d&apos;isolation des murs, de remplacement du système de chauffage et
              d&apos;amélioration des fenêtres. Ces travaux bénéficient d&apos;aides importantes via
              MaPrimeRénov&apos; et l&apos;éco-PTZ.
            </p>
            <ul className="space-y-2">
              {[
                "MaPrimeRénov' : jusqu'à 90 % des travaux couverts selon les revenus",
                "Éco-PTZ : prêt jusqu'à 50 000 € sans intérêts pour les travaux de rénovation énergétique",
                "TVA réduite à 5,5 % sur les travaux d'isolation et de chauffage performant",
                "Aides de l'Anah (Agence nationale de l'habitat) pour les propriétaires bailleurs",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-600 font-light">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5 — Loyer avant / après */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Loyer avant et après rénovation : ce que montrent les chiffres à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Les données du marché parisien confirment une corrélation directe entre l&apos;état du
              bien et le niveau de loyer obtenu, dans le respect du plafonnement des loyers (loi
              ELAN). Voici des exemples représentatifs de biens rénovés par Espace Design.
            </p>
            <div className="space-y-4">
              {[
                {
                  bien: "Studio 20 m² — 18e arrondissement",
                  avant: "680 €/mois",
                  apres: "820 €/mois",
                  travaux: "Peinture, sol vinyle, salle de bain — 6 500 €",
                  gain: "+140 €/mois — ROI : 3,9 ans",
                },
                {
                  bien: "2 pièces 38 m² — 11e arrondissement",
                  avant: "1 050 €/mois",
                  apres: "1 290 €/mois",
                  travaux: "Salle de bain, cuisine ouverte, parquet, peinture — 19 000 €",
                  gain: "+240 €/mois — ROI : 6,6 ans",
                },
                {
                  bien: "3 pièces 65 m² — 15e arrondissement",
                  avant: "1 600 €/mois",
                  apres: "2 000 €/mois",
                  travaux: "Rénovation complète, isolation, DPE F→C — 42 000 €",
                  gain: "+400 €/mois — ROI : 8,7 ans",
                },
              ].map((item) => (
                <div key={item.bien} className="border border-gray-100 rounded-lg overflow-hidden">
                  <div className="bg-[#1C1C1C] px-5 py-3">
                    <span className="text-white text-sm font-light">{item.bien}</span>
                  </div>
                  <div className="p-5 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-light block mb-1">
                        Loyer avant
                      </span>
                      <span className="font-semibold text-[#1C1C1C]">{item.avant}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-light block mb-1">
                        Loyer après
                      </span>
                      <span className="font-semibold text-green-600">{item.apres}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-light block mb-1">
                        Travaux réalisés
                      </span>
                      <span className="text-gray-600 font-light">{item.travaux}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[10px] uppercase tracking-widest text-[#B8960C] font-light block mb-1">
                        Résultat
                      </span>
                      <span className="text-[#B8960C] font-medium">{item.gain}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-6">
              Questions fréquentes sur la rénovation locative à Paris
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "Quels travaux sont déductibles des impôts fonciers ?",
                  a: "Au régime réel, sont déductibles les travaux de réparation et d'entretien (peinture, remplacement de revêtements, réparation de plomberie), les travaux d'amélioration qui n'augmentent pas la surface (nouvelle salle de bain, isolation, chauffage), et les charges de copropriété relatives aux travaux. Ne sont pas déductibles les travaux de construction ou d'agrandissement.",
                },
                {
                  q: "Rénovation locative à Paris : quel ROI peut-on espérer ?",
                  a: "Sur un 2 pièces loué 1 200 €/mois avant rénovation, le gain peut atteindre 200 à 300 €/mois après travaux, soit un retour sur investissement en 5 à 8 ans pour un budget de 20 000 à 25 000 €. La réduction de la vacance locative accélère encore ce retour.",
                },
                {
                  q: "Faut-il rénover avant ou entre deux locataires ?",
                  a: "Idéalement entre deux locataires, car l'appartement est vide et les travaux avancent rapidement. C'est aussi le bon moment pour un état des lieux exhaustif et les travaux déductibles. Prévoir 3 à 6 semaines de vacance locative selon l'ampleur des travaux.",
                },
                {
                  q: "Quelle rénovation permet de louer plus cher à Paris ?",
                  a: "Les rénovations qui valorisent le plus le loyer : salle de bain refaite (douche italienne, faïence neuve), cuisine rénovée ou ouverte, parquet massif en remplacement d'un sol vieilli, et mise aux normes électrique. Le DPE joue aussi un rôle croissant : passer de F à C peut justifier une hausse de loyer de 10 à 20 %.",
                },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-[#D4AF37] pl-5">
                  <h3 className="text-sm font-semibold text-[#1C1C1C] mb-2">{item.q}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-6">Voir aussi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/blog/budget-renovation-appartement-paris", title: "Budget rénovation appartement Paris 2025", tag: "Budget" },
              { href: "/blog/choisir-artisan-renovation-paris", title: "Comment choisir un artisan rénovateur à Paris ?", tag: "Conseils" },
              { href: "/blog/renovation-appartement-investissement-paris", title: "Rénovation appartement investissement Paris", tag: "Investissement" },
              { href: "/blog/prix-renovation-salle-de-bain-paris", title: "Prix rénovation salle de bain Paris", tag: "Salle de bain" },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="block p-4 bg-white border border-gray-100 rounded-lg hover:border-[#D4AF37]/40 transition-colors group"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#B8960C] font-light">
                  {a.tag}
                </span>
                <p className="text-sm font-medium text-[#1C1C1C] mt-1 group-hover:text-[#B8960C] transition-colors leading-snug">
                  {a.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Un projet de rénovation locative à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Devis gratuit sous 48h. Conseils sur les travaux à prioriser pour maximiser votre rentabilité.
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
