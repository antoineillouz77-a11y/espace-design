import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Bailleur Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-bailleur-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Bailleur Paris : entre deux locataires 2025 | Espace Design',
  description: 'Rénover un appartement entre deux locataires à Paris : peinture, sols, cuisine, salle de bain. Budget et artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-bailleur-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte une remise en état entre deux locataires à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une remise en état standard entre deux locataires à Paris coûte entre 3 000 et 8 000 € pour un appartement de 40 à 60 m². Ce budget comprend peinture complète, remise en état du sol (remplacement ou rénovation parquet), et petites réparations. Une rénovation complète incluant cuisine et salle de bain peut atteindre 12 000 à 20 000 € sur la même surface. Le coût dépend fortement de l'état laissé par le locataire sortant et de votre ambition de montée en gamme.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quels travaux sont à la charge du bailleur entre deux locataires ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Entre deux locataires, le bailleur est responsable des travaux de vétusté (usure normale) : peinture des murs et plafonds quand la durée de vie est dépassée (5 à 7 ans pour la peinture), remplacement du revêtement de sol usé, remise en état des équipements de chauffage. Les dégradations causées par le locataire sortant sont imputables sur le dépôt de garantie. Les travaux d'amélioration (DPE, mise aux normes électriques) restent à la charge du propriétaire.",
      },
    },
    {
      '@type': 'Question',
      name: 'Les travaux de rénovation permettent-ils d\'augmenter le loyer à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À Paris, l'encadrement des loyers limite les hausses automatiques entre deux locataires. Cependant, des travaux d'amélioration significatifs (rénovation cuisine ou salle de bain complète, isolation thermique, mise aux normes électriques) permettent d'appliquer un complément de loyer justifié ou d'opter pour une majoration au titre des travaux (15% du coût des travaux réalisés sur les 6 derniers mois précédant la relocation). Consulter un conseiller spécialisé avant toute hausse.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles obligations DPE s\'appliquent aux bailleurs parisiens en 2025 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Depuis 2025, les logements classés G au DPE (consommation supérieure à 450 kWh/m²/an) ne peuvent plus être mis en location. Les logements F restent louables jusqu'en 2028. À Paris, la majorité des appartements concernés sont des immeubles anciens mal isolés. Le bailleur doit réaliser un audit énergétique et planifier des travaux d'isolation (combles, murs, fenêtres) pour maintenir ou retrouver le droit de louer. Espace Design accompagne les bailleurs dans la remise aux normes énergétiques.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Bailleur Paris : entre deux locataires 2025 | Espace Design',
  description: 'Rénover un appartement entre deux locataires à Paris : peinture, sols, cuisine, salle de bain. Budget et artisan 2025.',
}

export default function ArticleRenovationBailleur() {
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
            Rénovation Appartement Bailleur Paris : entre deux locataires 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La période entre deux locataires est le moment idéal pour remettre en état, améliorer et valoriser votre bien. Peinture, sols, cuisine, salle de bain, DPE : guide complet pour optimiser votre investissement locatif parisien en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Check-list travaux */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Check-list complète des travaux entre deux locataires
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Avant de remettre un appartement en location à Paris, un audit rapide permet d&apos;identifier les travaux indispensables (obligatoires ou impactant directement la location) et ceux souhaitables (améliorant la valeur et le loyer). Cette check-list couvre l&apos;ensemble des postes à inspecter.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La règle d&apos;or : prioriser les travaux visibles et durables. Un appartement fraîchement peint et avec un sol rénové se loue beaucoup plus vite et à un meilleur loyer qu&apos;un logement en état moyen.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Peinture — priorité absolue',
                  detail: 'La peinture est le poste le plus rentable entre deux locataires. Un appartement fraîchement peint se loue en moyenne 15% plus vite. Comptez 15 à 25 €/m² de surface de mur (main d\'œuvre et matériaux inclus). À Paris, un 50 m² nécessite environ 3 000 à 4 500 € de peinture complète (murs + plafonds).',
                },
                {
                  enjeu: 'Sols — parquet et revêtements',
                  detail: 'Vérifier l\'état du parquet (ponçage et vitrification si rayures profondes : 20-35 €/m²), du carrelage (rejointoiement, remplacement des carreaux cassés), et des revêtements vinyl ou PVC (remplacement si décollements ou perforations). Un parquet rénové plutôt que remplacé économise souvent 2 000 à 4 000 €.',
                },
                {
                  enjeu: 'Cuisine — équipements et surfaces',
                  detail: 'Tester tous les équipements (plaques, four, réfrigérateur, hotte). Vérifier les joints de plan de travail, le calfeutrage des éviers, les portes de placard. Une cuisine datée mais propre et fonctionnelle reste louable ; une cuisine avec moisissures ou équipements défectueux exige une intervention avant relocation.',
                },
                {
                  enjeu: 'Salle de bain — points critiques',
                  detail: 'Inspecter les joints douche/baignoire (refaire si noircis : 100-300 €), le bon fonctionnement du mitigeur et de la ventilation (VMC), l\'état du carrelage (fissures, décollements), et la présence de moisissures au plafond. Une salle de bain avec infiltrations non traitées peut générer des sinistres graves.',
                },
                {
                  enjeu: 'Équipements techniques',
                  detail: 'Vérifier le tableau électrique (différentiel, fusibles), le bon fonctionnement du chauffe-eau (anticiper le remplacement si plus de 10 ans), la chaudière (entretien annuel obligatoire), et les détecteurs de fumée (obligatoires depuis 2015). Ces points conditionnent la décence du logement.',
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

      {/* Section 2 — Ce qui impacte le loyer */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux qui valorisent le loyer à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            À Paris, le marché locatif est très concurrentiel. Un appartement rénové et bien présenté se loue plus vite, suscite moins de vacance locative, et attire des profils de locataires plus soigneux. Certains travaux ont un impact direct et mesurable sur la valeur locative.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Cuisine équipée moderne',
                solution: 'Remplacer une cuisine vétuste par un modèle contemporain avec lave-vaisselle et plaques à induction. Impact loyer : +5 à +10% selon le quartier. ROI : 3 à 5 ans de loyer supplémentaire.',
                cout: '4 000 – 9 000 €',
              },
              {
                titre: 'Salle de bain rénovée',
                solution: 'Douche à l\'italienne, carrelage moderne, vasque design. Impact loyer : +5 à +8%. La salle de bain est souvent le 1er critère de décision d\'un locataire parisien.',
                cout: '5 000 – 12 000 €',
              },
              {
                titre: 'Parquet massif ou contrecollé',
                solution: 'Remplacer un sol vinyl usé par un parquet bois. Impact loyer : +3 à +7%. Le parquet est fortement valorisé sur le marché parisien, notamment dans les arrondissements bourgeois.',
                cout: '40 – 80 €/m²',
              },
              {
                titre: 'Luminosité et fenêtres',
                solution: 'Remplacement des fenêtres simple vitrage par du double vitrage. Impact loyer : +3 à +5% + amélioration DPE. Obligatoire pour certains logements classés F ou G.',
                cout: '600 – 1 200 €/fenêtre',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.solution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — DPE locatif 2025 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            DPE locatif : obligations des bailleurs parisiens en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La réglementation énergétique se durcit progressivement pour les propriétaires bailleurs. À Paris, les immeubles anciens — souvent mal isolés — sont particulièrement concernés. Comprendre ces obligations est essentiel pour anticiper les travaux nécessaires.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Logements G : interdiction de location depuis 2025',
                prix: 'Priorité urgente',
                detail: 'Les logements dont la consommation dépasse 450 kWh/m²/an (classe G+) ne peuvent plus être loués depuis janvier 2025. Les propriétaires doivent réaliser un audit énergétique et engager des travaux d\'isolation pour relever la note DPE. À Paris, cela concerne souvent des appartements sous les toits ou des rez-de-chaussée sans isolation de plancher.',
              },
              {
                type: 'Logements F : interdiction progressive 2028',
                prix: 'À planifier',
                detail: 'Les logements classés F (consommation 331-450 kWh/m²/an) restent louables jusqu\'en 2028, mais il est conseillé d\'anticiper dès maintenant. Les travaux d\'isolation peuvent représenter 10 000 à 30 000 € selon le bien, mais des aides (MaPrimeRénov\', CEE) existent pour les propriétaires bailleurs.',
              },
              {
                type: 'Gel des loyers pour logements E, F, G',
                prix: 'Contrainte active',
                detail: 'Depuis août 2022, les propriétaires de logements classés E, F ou G ne peuvent pas réviser leur loyer à la hausse lors du renouvellement de bail. Seuls les travaux de rénovation énergétique permettent de sortir de ce gel en améliorant la classe DPE.',
              },
              {
                type: 'Audit énergétique obligatoire',
                prix: '500 – 1 000 €',
                detail: 'Obligatoire pour la mise en vente des logements F et G depuis 2023, l\'audit énergétique devient la base de toute stratégie de rénovation. Il identifie les gisements d\'économies d\'énergie et permet de planifier les travaux par ordre de priorité et de rentabilité.',
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

      {/* Section 4 — Budget et durée */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget bailleur : prix et durée de chantier à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un appartement de 40 à 60 m² à Paris, main d&apos;œuvre et matériaux inclus. La durée de chantier impacte directement la vacance locative — chaque semaine vide représente un loyer perdu.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de travaux</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée chantier</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">ROI estimé</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: 'Remise en état basique (peinture + petites réparations)',
                    budget: '2 000 – 4 000 €',
                    duree: '3 – 7 jours',
                    roi: 'Immédiat',
                  },
                  {
                    type: 'Rénovation standard (peinture + sol + cuisine légère)',
                    budget: '5 000 – 10 000 €',
                    duree: '1 – 2 semaines',
                    roi: '2 – 3 ans',
                  },
                  {
                    type: 'Rénovation complète (cuisine + SDB + sol + peinture)',
                    budget: '12 000 – 20 000 €',
                    duree: '3 – 5 semaines',
                    roi: '4 – 6 ans',
                  },
                  {
                    type: 'Rénovation énergétique (isolation + fenêtres + chauffage)',
                    budget: '15 000 – 35 000 €',
                    duree: '4 – 8 semaines',
                    roi: '7 – 12 ans',
                  },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.budget}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.roi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour minimiser la vacance locative
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Lancer les travaux dès la remise des clés — chaque jour compte',
                'Planifier l\'ensemble du chantier en amont pour éviter les artisans en séquentiel',
                'Choisir des matériaux durables : moins de remplacement entre locataires',
                'Opter pour des couleurs neutres (blanc cassé, gris clair) : plaisent à tous',
                'Traiter les odeurs et l\'humidité avant la peinture finale',
                'Photographier l\'état des lieux sortant pour document les dégradations imputables',
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

      {/* Guides connexes */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Guides connexes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-appartement-investissement-paris', title: 'Rénovation appartement investissement Paris' },
              { href: '/blog/renovation-appartement-mise-en-location-paris', title: 'Rénovation avant mise en location' },
              { href: '/blog/renovation-appartement-loue-paris', title: 'Rénovation appartement loué Paris' },
              { href: '/blog/peinture-appartement-paris', title: 'Peinture appartement Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
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
          Remettez votre appartement en location rapidement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Chantier rapide pour minimiser votre vacance locative.
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
