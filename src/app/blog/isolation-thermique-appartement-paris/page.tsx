import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Isolation Thermique Appartement Paris', item: 'https://espacedesignparis.fr/blog/isolation-thermique-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Isolation Thermique Appartement Paris : murs, fenêtres & DPE 2025 | Espace Design',
  description: "Isoler son appartement à Paris : ITI murs, fenêtres double vitrage, plancher. Impact DPE, aides MaPrimeRénov' et prix 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/isolation-thermique-appartement-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Mon appartement parisien classé DPE G peut-il être loué en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non, depuis le 1er janvier 2025, les logements classés G au DPE (consommation énergétique supérieure à 450 kWh/m²/an) sont interdits à la location en France. Les logements classés F sont interdits à la location depuis le 1er janvier 2028. Pour remettre un appartement parisien classé G ou F sur le marché locatif, une rénovation énergétique permettant d'atteindre au minimum la classe E (idéalement D ou C) est nécessaire. Les principales actions : isolation des murs par l'intérieur (ITI), remplacement des fenêtres en double vitrage, installation d'un chauffage performant (pompe à chaleur, chaudière à condensation). Avec les aides MaPrimeRénov' et les CEE, le reste-à-charge peut être significativement réduit.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelles aides sont disponibles pour isoler un appartement à Paris en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En 2025, plusieurs aides permettent de financer l'isolation thermique d'un appartement parisien. MaPrimeRénov' Parcours par geste : jusqu'à 75 € par m² de murs isolés (sous plafond) selon les revenus du foyer, versée directement par l'ANAH. Les Certificats d'Économie d'Énergie (CEE) : primes versées par les fournisseurs d'énergie (EDF, Engie...) pour les travaux d'isolation. La TVA à 5,5 % s'applique sur tous les travaux d'amélioration énergétique réalisés par un artisan RGE (Reconnu Garant de l'Environnement). L'éco-prêt à taux zéro (Eco-PTZ) permet de financer jusqu'à 50 000 € de travaux sans intérêts. Ces aides peuvent se cumuler.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel gain de DPE peut-on espérer après isolation d'un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le gain de classe DPE dépend du point de départ et de l'ampleur des travaux. Pour un appartement parisien classé F ou G dans un immeuble des années 1960 : l'isolation des murs par l'intérieur (laine de roche, 10 cm) permet un gain de 1 à 2 classes DPE. Le remplacement des fenêtres simple vitrage en double vitrage permet un gain supplémentaire de 0,5 à 1 classe. Le remplacement d'un chauffage électrique par une pompe à chaleur air-air peut faire gagner 2 à 3 classes. En combinant isolation des murs, remplacement des fenêtres et nouveau chauffage, un appartement classé G peut passer à D ou C, ce qui le rend louable et valorise significativement le bien.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Isolation Thermique Appartement Paris : murs, fenêtres & DPE 2025 | Espace Design",
  description: "Isoler son appartement à Paris : ITI murs, fenêtres double vitrage, plancher. Impact DPE, aides MaPrimeRénov' et prix 2025.",
}

export default function ArticleIsolationThermiqueParis() {
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
            Isolation
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Isolation Thermique Appartement Paris : murs, fenêtres &amp; DPE 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Les interdictions de location des logements classés F et G rendent l&apos;isolation thermique incontournable pour de nombreux propriétaires parisiens. ITI des murs, remplacement des fenêtres, isolation du plancher, aides MaPrimeRénov&apos; et impact DPE : guide complet pour isoler votre appartement à Paris en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — DPE et enjeux */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              DPE et interdictions de location : pourquoi isoler devient urgent à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le Diagnostic de Performance Énergétique (DPE) classe les logements de A (très performant) à G (passoire thermique). À Paris, une large part du parc immobilier ancien est classée E, F ou G — notamment les immeubles des années 1960-1970 et certains appartements haussmanniens mal isolés.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La loi Climat et Résilience a instauré un calendrier d&apos;interdiction de location progressive : les logements G sont interdits à la location depuis le 1er janvier 2025, les logements F le seront en 2028. Pour les propriétaires bailleurs parisiens, rénover énergétiquement leur bien n&apos;est plus une option mais une obligation.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Logements G interdits à la location depuis janvier 2025',
                  detail: "Depuis le 1er janvier 2025, tout nouveau contrat de location ou renouvellement de bail est interdit pour les logements classés G (consommation supérieure à 450 kWh/m²/an d'énergie finale). Les propriétaires de ces biens doivent réaliser des travaux d'isolation et/ou de chauffage pour remonter au minimum en classe E avant de pouvoir les louer à nouveau.",
                },
                {
                  enjeu: 'Décote des passoires thermiques sur le marché parisien',
                  detail: "Un logement classé F ou G se vend en moyenne 10 à 20 % moins cher qu'un logement équivalent classé C ou D à Paris. Cette décote s'accentue chaque année avec la prise de conscience des acquéreurs des contraintes légales et des coûts de chauffage. Investir dans l'isolation est donc doublement rentable : moins de charges et valorisation du bien.",
                },
                {
                  enjeu: 'Paris : des contraintes d\'isolation spécifiques',
                  detail: "À Paris, l'isolation par l'extérieur (ITE) des façades est quasi impossible : elle modifie l'aspect des immeubles classés ou dans des secteurs protégés ABF, et nécessite l'accord de la copropriété et de l'ABF. Seule l'isolation par l'intérieur (ITI) est praticable dans la plupart des appartements parisiens. Les règlements de copropriété peuvent aussi imposer des contraintes sur les matériaux de revêtement de sol.",
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

      {/* Section 2 — Solutions d'isolation */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Solutions d&apos;isolation pour un appartement parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un appartement parisien, les postes d&apos;isolation à traiter en priorité sont les murs (les plus gros ponts thermiques), les fenêtres (pertes importantes par rayonnement et infiltration) et le plancher bas (en contact avec les caves ou les sous-sols non chauffés).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Isolation thermique par l\'intérieur (ITI) — murs',
                detail: "L'ITI consiste à poser un doublage isolant sur la face intérieure des murs extérieurs. Pour un appartement standard, on utilise de la laine de roche (lambda 0,035) ou de la laine de bois sur ossature métallique avec plaque de plâtre. Sur des murs en pierre, il faut préférer des matériaux respirants (chanvre, liège) pour éviter la condensation. Gain thermique : R de 2 à 4 selon l'épaisseur posée.",
                cout: '80 – 160 €/m²',
              },
              {
                titre: 'Remplacement des fenêtres — double vitrage',
                detail: "Le remplacement des fenêtres simple vitrage par du double vitrage est l'une des actions les plus efficaces. Le double vitrage à isolation renforcée (Ug 1,1 W/m²K) divise par 3 les pertes thermiques par les vitres. Le PVC est le moins cher et le plus performant thermiquement, mais peut être refusé par l'ABF dans les immeubles anciens. L'aluminium à rupture de pont thermique et le bois peint sont les alternatives en secteur protégé.",
                cout: '500 – 1 800 € par fenêtre',
              },
              {
                titre: 'Survitrage — alternative sans changer les fenêtres',
                detail: "Le survitrage consiste à poser une seconde vitre sur la fenêtre existante, sans remplacer les menuiseries. C'est la solution idéale dans les immeubles classés où l'ABF interdit le remplacement des fenêtres. Le gain thermique est significatif (Ug de 1,4 à 2 W/m²K) et le coût est inférieur au remplacement complet. Le survitrage ne nécessite pas l'accord de la copropriété.",
                cout: '200 – 600 € par fenêtre',
              },
              {
                titre: 'Isolation du plancher bas',
                detail: "Si votre appartement est au rez-de-chaussée ou au-dessus d'une cave ou d'un sous-sol non chauffé, l'isolation du plancher bas est très efficace : elle supprime la sensation de 'pieds froids' et améliore le DPE. On pose une laine minérale (laine de roche ou laine de verre) entre les lambourdes du plancher ou sous le ragréage. Gain thermique : 10 à 20 % de la déperdition totale.",
                cout: '30 – 70 €/m²',
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

      {/* Section 3 — Aides 2025 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Aides pour l&apos;isolation à Paris en 2025 : MaPrimeRénov&apos;, CEE, TVA 5,5 %
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            En 2025, plusieurs dispositifs permettent de financer une partie des travaux d&apos;isolation thermique dans un appartement parisien. Ces aides peuvent se cumuler et réduire significativement le reste-à-charge.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "MaPrimeRénov' — aide par geste",
                prix: "Jusqu'à 75 €/m² pour l'ITI",
                detail: "MaPrimeRénov' Parcours par geste finance les travaux d'isolation réalisés par des artisans certifiés RGE (Reconnu Garant de l'Environnement). Pour l'isolation des murs par l'intérieur (ITI), le montant peut atteindre 75 €/m² pour les ménages modestes (revenus inférieurs aux plafonds ANAH). Pour le remplacement des fenêtres en double vitrage, la prime atteint 100 € par fenêtre pour les ménages modestes. La demande se fait sur le site maprimerenov.gouv.fr avant le début des travaux.",
              },
              {
                type: 'Certificats d\'Économie d\'Énergie (CEE)',
                prix: '50 – 150 € par fenêtre / 15 – 40 €/m² ITI',
                detail: "Les CEE sont des primes versées par les fournisseurs d'énergie (EDF, Engie, TotalEnergies, etc.) pour les travaux d'économie d'énergie. Elles s'ajoutent à MaPrimeRénov' et peuvent être obtenues via des comparateurs en ligne. Pour l'isolation des murs, les primes CEE représentent généralement 15 à 40 €/m² supplémentaires. Pour les fenêtres, comptez 50 à 150 € par ouvrant selon le fournisseur.",
              },
              {
                type: 'TVA à 5,5 % sur les travaux d\'isolation',
                prix: 'Économie de 14,5 % sur la facture HT',
                detail: "Tous les travaux d'amélioration énergétique réalisés par un artisan qualifié RGE dans un logement de plus de 2 ans bénéficient de la TVA réduite à 5,5 % (au lieu de 10 % pour les travaux de rénovation classiques). Cette réduction s'applique sur la main-d'oeuvre et les matériaux. Pour un chantier d'isolation de 20 000 € HT, l'économie représente environ 2 900 € par rapport au taux normal.",
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

      {/* Section 4 — Budget et prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de l&apos;isolation thermique à Paris : tableau 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un appartement parisien, main d&apos;oeuvre et matériaux inclus (TVA 5,5 % pour les artisans RGE). Le reste-à-charge après aides peut être divisé par 2 à 3 pour les ménages modestes.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type d&apos;isolation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Gain DPE estimé</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix unitaire</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Aides possibles</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: 'ITI murs (laine de roche 10 cm)',
                    gain: '+1 à +2 classes',
                    prix: '80 – 130 €/m²',
                    aides: "MPR + CEE + TVA 5,5 %",
                  },
                  {
                    type: 'Remplacement fenêtres double vitrage',
                    gain: '+0,5 à +1 classe',
                    prix: '500 – 1 500 €/fenêtre',
                    aides: "MPR + CEE + TVA 5,5 %",
                  },
                  {
                    type: 'Survitrage (intérieur)',
                    gain: '+0,3 à +0,7 classe',
                    prix: '200 – 500 €/fenêtre',
                    aides: "CEE + TVA 5,5 %",
                  },
                  {
                    type: 'Isolation plancher bas',
                    gain: '+0,3 à +0,5 classe',
                    prix: '30 – 70 €/m²',
                    aides: "MPR + CEE + TVA 5,5 %",
                  },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.gain}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.aides}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour isoler votre appartement parisien
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Faire réaliser un audit énergétique avant travaux pour identifier les priorités et maximiser les aides",
                "Toujours choisir un artisan certifié RGE pour bénéficier de MaPrimeRénov' et de la TVA à 5,5 %",
                "Sur des murs en pierre anciens, utiliser des matériaux respirants (laine de bois, chanvre) — pas de polystyrène",
                "Vérifier l'accord de la copropriété avant de remplacer les fenêtres — et consulter l'ABF si zone protégée",
                "Le survitrage est une alternative efficace et peu coûteuse si le remplacement des fenêtres est impossible",
                "Déposer la demande MaPrimeRénov' sur maprimerenov.gouv.fr AVANT de signer les devis artisans",
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
              { href: '/blog/renovation-fenetre-paris', title: 'Rénovation fenêtre Paris' },
              { href: '/blog/renovation-maison-ancienne-paris', title: 'Rénovation maison ancienne Paris' },
              { href: '/blog/isolation-acoustique-appartement-paris', title: 'Isolation acoustique Paris' },
              { href: '/contact', title: 'Demander un devis gratuit' },
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
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
              { href: '/renovation-saint-denis', label: 'Saint-Denis' },
              { href: '/renovation-pantin', label: 'Pantin' },
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
          Isolez votre appartement parisien — devis gratuit sous 48h
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisans certifiés RGE, éligibles MaPrimeRénov&apos; et CEE. Intervention dans tout Paris et Île-de-France.
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
