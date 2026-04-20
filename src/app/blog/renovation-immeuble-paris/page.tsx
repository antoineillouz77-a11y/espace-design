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
  headline: 'Rénovation Immeuble Paris : parties communes, façade & copropriété 2025 | Espace Design',
  description: 'Rénover un immeuble à Paris : parties communes, ravalement de façade, cage d\'escalier, hall. Vote AG, prix 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  url: 'https://espacedesignparis.fr/blog/renovation-immeuble-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelle majorité faut-il pour voter des travaux en copropriété à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En copropriété parisienne, la majorité requise dépend de la nature des travaux. Majorité simple (article 24) : travaux courants d'entretien, peinture des parties communes, remplacement d'équipements existants. Majorité absolue (article 25) : travaux modifiant la structure (mur porteur), installation d'un équipement nouveau, ravalement de façade. Double majorité (article 26) : travaux lourds modifiant les droits des copropriétaires. En pratique, la plupart des ravalements et rénovations des parties communes passent en article 24 ou 25.",
      },
    },
    {
      '@type': 'Question',
      name: 'Le ravalement de façade est-il obligatoire à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, à Paris le ravalement de façade est rendu obligatoire par arrêté préfectoral tous les 10 ans (articles L. 132-1 et suivants du Code de la Construction). La Ville peut mettre en demeure le syndic de réaliser les travaux sous peine d'amendes. Le non-respect de cette obligation peut également bloquer la vente des lots de la copropriété. Le coût du ravalement est réparti entre les copropriétaires selon les tantièmes.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles aides financières pour rénover un immeuble à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Plusieurs dispositifs d'aide existent pour les copropriétés parisiennes : MaPrimeRénov' Copropriété (aide ANAH couvrant 25 à 45 % du montant des travaux d'isolation), Eco-PTZ collectif (prêt à taux zéro jusqu'à 50 000 € par logement), aides de la Ville de Paris (isolation de façade, ravalement), TVA à 10 % sur les travaux en immeuble de plus de 2 ans. Ces aides sont cumulables sous conditions. Un audit énergétique préalable est souvent requis.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment gérer un chantier de rénovation dans un immeuble occupé à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un chantier dans un immeuble occupé requiert une organisation rigoureuse : échafaudages avec protection des accès et des véhicules, horaires de travaux respectant les règles de voisinage (7h-22h en semaine, pas de dimanche), information des résidents en amont (lettres d'information, réunions), protection des parties communes (bâches, panneaux de chantier), et désignation d'un coordinateur SPS (Sécurité Protection Santé) pour les chantiers lourds. Le syndic assure généralement la coordination avec les entreprises.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Immeuble Paris : parties communes, façade & copropriété 2025 | Espace Design',
  description: "Rénover un immeuble à Paris : parties communes, ravalement de façade, cage d'escalier, hall. Vote AG, prix 2025.",
}

export default function ArticleRenovationImmmeubleParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Copropriété</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Immeuble Paris : parties communes, façade & copropriété 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La rénovation d&apos;un immeuble parisien — parties communes, ravalement de façade, cage d&apos;escalier, hall d&apos;entrée — est un projet collectif qui engage la copropriété dans sa globalité. Vote en AG, financements disponibles, budget par poste : guide complet pour syndics et copropriétaires en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les principaux postes de travaux en immeuble parisien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Les immeubles parisiens — haussmanniens, de rapport, constructions des années 1960-1980 — présentent des besoins de rénovation spécifiques. Le vieillissement des façades, des parties communes et des équipements collectifs génère des dépenses importantes pour les copropriétés.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Une bonne gestion commence par un diagnostic complet des parties communes, souvent réalisé par un architecte ou un bureau de contrôle technique mandaté par le syndic.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Ravalement de façade',
                  detail: "Nettoyage, traitement et réfection de l'enduit ou du parement de façade. Obligatoire tous les 10 ans à Paris (arrêté préfectoral). Inclut souvent l'isolation thermique par l'extérieur (ITE) pour bénéficier des aides ANAH. Prix : 150 – 350 €/m² de façade selon l'état et le type de finition.",
                },
                {
                  enjeu: 'Cage d\'escalier et hall d\'entrée',
                  detail: "Peinture des murs et plafonds, réfection du sol (marbre, carrelage, pierre), remplacement de la serrurerie et de l'interphone, mise aux normes de l'éclairage (LED détection mouvement), rafraîchissement de la boîte aux lettres. Budget : 15 000 – 60 000 € selon l'immeuble.",
                },
                {
                  enjeu: 'Toiture et étanchéité',
                  detail: "Réfection de la toiture zinc, ardoise ou tuile, remplacement des gouttières et chenaux, traitement des infiltrations. Poste critique car toute humidité non traitée dégrade les structures et les appartements sous les combles. Prix : 100 – 250 €/m² de toiture.",
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

      {/* Section 2 */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Vote en AG et procédure décisionnelle en copropriété
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les travaux en copropriété sont soumis à un processus décisionnel codifié par la loi du 10 juillet 1965. La majorité requise varie selon l&apos;importance des travaux.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Article 24 — Majorité simple',
                detail: "Travaux courants d'entretien et de conservation des parties communes : peinture, remplacement d'équipements vétustes, entretien des espaces verts. Vote à la majorité des voix des copropriétaires présents ou représentés.",
                cout: 'Travaux courants',
              },
              {
                titre: 'Article 25 — Majorité absolue',
                detail: "Travaux plus importants : ravalement de façade, isolation thermique, installation d'un ascenseur ou d'un digicode, modification de la structure. Vote à la majorité des voix de tous les copropriétaires (présents + absents).",
                cout: 'Travaux structurants',
              },
              {
                titre: 'Appel d\'offres et devis',
                detail: "Pour tout chantier significatif, le syndic sollicite 3 devis minimum auprès d'entreprises qualifiées. Les devis sont présentés en AG avec les détails techniques et financiers. Les copropriétaires peuvent poser des questions et demander des modifications avant le vote.",
                cout: 'Procédure obligatoire',
              },
              {
                titre: 'Plan pluriannuel de travaux',
                detail: "Depuis la loi Climat et Résilience (2021), les copropriétés de plus de 15 lots doivent établir un plan pluriannuel de travaux (PPT) basé sur un diagnostic technique global (DTG). Le PPT anticipe les dépenses sur 10 ans et permet de constituer des réserves.",
                cout: 'Obligatoire depuis 2023',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Aides financières et financement pour la rénovation d&apos;immeuble à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            De nombreux dispositifs d&apos;aide permettent aux copropriétés parisiennes de financer leurs travaux de rénovation, notamment ceux à caractère énergétique.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "MaPrimeRénov' Copropriété",
                prix: '25 – 45 % des travaux',
                detail: "Aide de l'ANAH destinée aux copropriétés réalisant des travaux d'amélioration énergétique (isolation de façade, toiture, chauffage collectif). Conditions : gain énergétique d'au moins 35 %, 75 % des lots doivent être des résidences principales. Dossier déposé par le syndic.",
              },
              {
                type: 'Eco-PTZ collectif',
                prix: "Jusqu'à 50 000 € par logement",
                detail: "Prêt à taux zéro collectif permettant de financer les travaux de rénovation énergétique en copropriété sans apport initial. Les copropriétaires remboursent via les charges. Compatible avec MaPrimeRénov' Copropriété.",
              },
              {
                type: 'Aides de la Ville de Paris',
                detail: "Paris propose des aides spécifiques pour l'isolation des façades (Eco-façade) et le ravalement incluant une isolation thermique. Renseignez-vous auprès de l'Agence Parisienne du Climat (APC) qui propose un accompagnement gratuit aux copropriétés.",
                prix: 'Variable selon projet',
              },
              {
                type: 'TVA à taux réduit',
                prix: '10 % (au lieu de 20 %)',
                detail: "Les travaux de rénovation dans les immeubles de plus de 2 ans bénéficient d'une TVA à 10 % (voire 5,5 % pour les travaux d'amélioration thermique). Ce taux s'applique aux travaux en parties communes comme aux parties privatives.",
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

      {/* Budget table */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget par poste : rénovation d&apos;un immeuble parisien (2025)
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Estimations pour un immeuble haussmannien de 10 lots sur 5 étages à Paris, hors aides.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Poste de travaux</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Majorité AG</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget estimatif</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { poste: 'Ravalement de façade (hors ITE)', majorite: 'Art. 25', budget: '60 000 – 120 000 €' },
                  { poste: 'Isolation thermique extérieure (ITE)', majorite: 'Art. 25', budget: '80 000 – 180 000 €' },
                  { poste: 'Réfection cage d\'escalier + hall', majorite: 'Art. 24', budget: '20 000 – 60 000 €' },
                  { poste: 'Toiture (réfection zinc ou ardoise)', majorite: 'Art. 24', budget: '40 000 – 100 000 €' },
                  { poste: 'Mise aux normes ascenseur', majorite: 'Art. 25', budget: '15 000 – 40 000 €' },
                  { poste: 'Rénovation chauffage collectif', majorite: 'Art. 25', budget: '30 000 – 80 000 €' },
                ].map((row, i) => (
                  <tr key={row.poste} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.poste}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.majorite}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">Conseils pour les copropriétaires et syndics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Réalisez un Diagnostic Technique Global (DTG) pour anticiper les travaux sur 10 ans",
                "Groupez plusieurs postes de travaux pour mutualiser les coûts de chantier (échafaudage, benne)",
                "Sollicitez l'accompagnement gratuit de l'Agence Parisienne du Climat (APC)",
                "Exigez 3 devis pour chaque lot de travaux — les écarts entre entreprises sont souvent importants",
                "Constituez un fonds de travaux suffisant (au moins 5 % du budget prévisionnel par an)",
                "Vérifiez les qualifications RGE des entreprises pour bénéficier des aides ANAH",
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
              { href: '/blog/renovation-appartement-paris-13e', title: 'Rénovation appartement Paris 13e' },
              { href: '/blog/renovation-appartement-paris-15e', title: 'Rénovation appartement Paris 15e' },
              { href: '/blog/renovation-appartement-paris-17e', title: 'Rénovation appartement Paris 17e' },
              { href: '/blog/mur-porteur-paris', title: 'Mur porteur Paris : abattre & prix' },
              { href: '/blog/remise-aux-normes-electrique-paris', title: 'Remise aux normes électrique Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique Paris' },
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
          Rénover les parties communes de votre immeuble parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis pour syndics et copropriétés. Réponse sous 48h.
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
