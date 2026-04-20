import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Investissement Locatif Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-investissement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Investissement Locatif Paris : ROI & travaux prioritaires 2025 | Espace Design',
  description: 'Rénover un investissement locatif à Paris : quels travaux maximisent le loyer, budget, rendement. Guide investisseur 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-investissement-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels travaux de rénovation augmentent le plus le loyer à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À Paris, les travaux qui augmentent le plus la valeur locative sont la rénovation de la salle de bain (gain de 80 à 150 € par mois sur un studio), la réfection complète de la cuisine (gain de 50 à 120 €/mois), et la mise aux normes électrique accompagnée d'une peinture soignée. Sur un studio parisien, un budget de 15 000 € de rénovation complète peut générer un gain de loyer de 150 à 200 €/mois, soit un ROI de 7 à 10 ans — avant avantages fiscaux.",
      },
    },
    {
      '@type': 'Question',
      name: 'Le déficit foncier est-il intéressant pour un investisseur parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, le déficit foncier est l'un des avantages fiscaux les plus puissants pour les investisseurs parisiens au régime réel. Il permet de déduire les travaux de rénovation (hors travaux de construction ou d'agrandissement) des revenus fonciers, voire du revenu global dans la limite de 10 700 € par an (ou 21 400 € pour les passoires thermiques rénovées entre 2023 et 2025). Pour un investisseur dans la tranche marginale à 41 %, un déficit foncier de 10 000 € génère une économie d'impôt de 4 100 €.",
      },
    },
    {
      '@type': 'Question',
      name: 'Vaut-il mieux louer meublé ou vide après rénovation à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La location meublée (LMNP) génère en moyenne 15 à 25 % de loyer supplémentaire par rapport à la location vide à Paris, avec une fiscalité avantageuse (régime micro-BIC à 50 % d'abattement ou régime réel permettant d'amortir les meubles et les travaux). En contrepartie, il faut prévoir le budget mobilier (2 000 à 8 000 € selon la surface) et anticiper une rotation locative plus élevée. Pour les petites surfaces (studios, T2), la location meublée est presque toujours plus rentable à Paris.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Investissement Locatif Paris : ROI & travaux prioritaires 2025 | Espace Design',
  description: 'Rénover un investissement locatif à Paris : quels travaux maximisent le loyer, budget, rendement. Guide investisseur 2025.',
}

export default function ArticleRenovationInvestissement() {
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
            Investissement
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Investissement Locatif Paris : ROI &amp; travaux prioritaires 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Rénover un investissement locatif à Paris, c&apos;est arbitrer entre budget engagé, gain de loyer, avantage fiscal et vacance locative réduite. Quels travaux privilégier pour maximiser votre rendement ? Déficit foncier, meublé ou vide, ROI par poste : guide complet pour l&apos;investisseur parisien en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Lien rénovation-loyer */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Rénovation et loyer : combien rapporte chaque euro investi à Paris ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              À Paris, le marché locatif est tendu et les locataires exigeants. Un appartement rénové se loue plus vite, plus cher, et se garde mieux. La question n&apos;est donc pas de savoir si rénover est rentable — c&apos;est presque toujours le cas — mais de savoir quels travaux prioriser selon votre budget et votre objectif de rendement.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Règle générale à Paris : chaque euro investi en rénovation génère entre 5 et 15 % de gain de loyer annuel, selon le poste de travaux et l&apos;état initial du bien. Les travaux d&apos;embellissement (peinture, parquet) ont un ROI immédiat ; les travaux lourds (salle de bain, cuisine) ont un ROI plus long mais augmentent aussi significativement la valeur vénale du bien.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Peinture et rafraîchissement : ROI immédiat',
                  detail: "Une peinture soignée (murs blancs ou couleurs tendance) est le travail le plus rentable en investissement locatif. Pour 1 500 à 3 000 € sur un studio de 25 m², vous éliminez la vacance locative liée à un état vieilli et pouvez prétendre au loyer maximum selon l'encadrement en vigueur. Gain estimé : 50 à 100 €/mois, soit un ROI de 18 à 36 mois.",
                },
                {
                  enjeu: 'Parquet : valorisation durable',
                  detail: "Remplacer une moquette usée ou un sol stratifié abîmé par un parquet flottant en chêne (60 à 100 €/m² posé) positionne l'appartement dans une gamme supérieure. À Paris, le parquet est très apprécié des locataires et réduit le turnover. Sur un T2 de 40 m², comptez 2 500 à 4 000 €. Gain de loyer : 50 à 80 €/mois.",
                },
                {
                  enjeu: 'Salle de bain : le poste à fort impact',
                  detail: "Une salle de bain rénovée (receveur de douche, faïence, meuble vasque, robinetterie) est le critère numéro un des locataires parisiens après la localisation. Budget : 4 000 à 8 000 € selon la surface. Gain de loyer : 80 à 150 €/mois sur un studio ou T2. C'est souvent le travail avec le meilleur rapport impact-locataire.",
                },
                {
                  enjeu: 'Cuisine équipée : indispensable pour le meublé',
                  detail: "En location meublée (LMNP), une cuisine équipée est obligatoire et constitue un argument majeur. Comptez 3 000 à 6 000 € pour une cuisine équipée complète sur mesure (plaque, hotte, réfrigérateur, lave-vaisselle). En location vide, une cuisine ouverte aménagée valorise également le bien et peut justifier une hausse de loyer de 50 à 80 €/mois.",
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

      {/* Section 2 — Fiscalité */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Déficit foncier et régimes fiscaux : optimiser la rénovation locative
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La fiscalité des travaux est un levier souvent sous-estimé par les investisseurs parisiens. Selon votre régime d&apos;imposition, les travaux de rénovation peuvent réduire significativement votre charge fiscale et améliorer le rendement net de votre investissement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Régime réel (location vide)',
                detail: "Au régime réel, les travaux de réparation, d'entretien et d'amélioration sont intégralement déductibles des revenus fonciers. Si les charges dépassent les revenus, le déficit foncier est imputable sur le revenu global à hauteur de 10 700 €/an (report du surplus sur 10 ans). Particulièrement intéressant pour les investisseurs parisiens aux revenus élevés.",
                label: 'Location vide',
              },
              {
                titre: 'Micro-foncier (location vide)',
                detail: "Le micro-foncier (abattement forfaitaire de 30 %) est simple mais ne permet pas de déduire les travaux au réel. Il est adapté aux biens peu chargés en travaux. Dès que vos charges dépassent 30 % des loyers, le régime réel devient systématiquement plus avantageux.",
                label: 'Moins de 15 000 €/an',
              },
              {
                titre: 'LMNP régime réel (meublé)',
                detail: "En location meublée non professionnelle au régime réel, les travaux et les meubles sont amortissables sur 5 à 10 ans. L'amortissement annuel réduit la base imposable, voire l'annule totalement les premières années. Idéal pour les studios et T2 parisiens rénovés et loués meublés.",
                label: 'Location meublée',
              },
              {
                titre: 'Micro-BIC (meublé)',
                detail: "Le micro-BIC offre un abattement de 50 % (71 % pour les meublés de tourisme classés) sur les recettes. Il ne permet pas de déduire les travaux au réel mais reste intéressant pour les petits investisseurs avec peu de charges. Le régime réel s'impose dès que vos charges dépassent 50 % des loyers.",
                label: 'Moins de 77 700 €/an',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.label}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Budget selon type de location */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget rénovation recommandé selon le type de location à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le budget à engager dépend de l&apos;état initial du bien, du type de location envisagé (vide ou meublé) et de la gamme visée. Voici les fourchettes observées sur le marché parisien en 2025.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Profil du bien</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Type location</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget travaux</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Gain loyer estimé</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    profil: 'Studio 20-25 m² vieilli',
                    type: 'Meublé LMNP',
                    budget: '8 000 – 15 000 €',
                    gain: '+100 – 180 €/mois',
                  },
                  {
                    profil: 'T2 35-45 m² à rafraîchir',
                    type: 'Meublé ou vide',
                    budget: '10 000 – 20 000 €',
                    gain: '+80 – 150 €/mois',
                  },
                  {
                    profil: 'T3 55-70 m² travaux complets',
                    type: 'Location vide (famille)',
                    budget: '20 000 – 40 000 €',
                    gain: '+150 – 250 €/mois',
                  },
                  {
                    profil: 'Passoire thermique (F ou G)',
                    type: 'Vide (obligation DPE)',
                    budget: '25 000 – 50 000 €',
                    gain: 'Maintien légal + valorisation',
                  },
                ].map((row, i) => (
                  <tr key={row.profil} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.profil}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.type}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.budget}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.gain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Meublé vs vide : ce qu&apos;il faut prévoir en plus
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La location meublée à Paris impose un équipement minimum défini par le décret du 31 juillet 2015. En plus des travaux de rénovation, prévoyez un budget mobilier complémentaire selon la surface.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Literie complète (lit, matelas, oreillers, couvertures) : 600 – 1 500 €',
                'Canapé et table basse (séjour) : 400 – 1 200 €',
                'Table et chaises de salle à manger : 300 – 800 €',
                'Cuisine équipée avec électroménager : 1 500 – 4 000 €',
                'Rangements (armoire, étagères) : 300 – 800 €',
                'Luminaires, rideaux et accessoires : 300 – 600 €',
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
              { href: '/blog/renovation-appartement-loue-paris', title: 'Rénovation appartement loué Paris' },
              { href: '/blog/investissement-locatif-renovation-paris', title: 'Investissement locatif et rénovation' },
              { href: '/blog/renovation-appartement-mise-en-location-paris', title: 'Rénovation avant mise en location' },
              { href: '/contact', title: 'Obtenir un devis gratuit' },
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
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
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
          Maximisez le rendement de votre investissement locatif parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis gratuit sous 48h. Chiffrage précis poste par poste. Artisans expérimentés en rénovation locative.
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
