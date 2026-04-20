import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Plomberie Rénovation Paris', item: 'https://espacedesignparis.fr/blog/plomberie-renovation-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Plomberie Rénovation Paris : remplacement tuyaux, chasse & prix 2025 | Espace Design',
  description: 'Rénover la plomberie d\'un appartement à Paris : tuyaux plomb, chasse d\'eau, siphon, robinetterie. Prix artisan plombier 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/plomberie-renovation-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Les tuyaux en plomb sont-ils encore présents dans les appartements parisiens ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, malgré l\'interdiction du plomb dans les canalisations d\'eau potable depuis 1995, de nombreux appartements parisiens construits avant cette date conservent encore des tuyaux en plomb — notamment dans les colonnes montantes des immeubles haussmanniens et les raccordements privés. Le plomb est particulièrement dangereux pour la santé (saturnisme), surtout chez les enfants et les femmes enceintes. La loi impose désormais le remplacement de toutes les canalisations en plomb en contact avec l\'eau potable. En cas de doute, une analyse de l\'eau au robinet peut révéler la présence de plomb.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le prix de remplacement de la plomberie dans un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le coût de rénovation de la plomberie d\'un appartement à Paris varie entre 2 000 et 10 000 € selon l\'état de l\'installation et la surface. Un remplacement partiel (robinetterie, chasse d\'eau, siphons) coûte entre 500 et 2 000 €. Un remplacement complet des canalisations d\'un appartement de 60 m² (alimentation + évacuation) est estimé entre 4 000 et 8 000 €. Si la colonne montante est concernée (copropriété), les travaux sont à la charge de la copropriété et peuvent s\'élever à 15 000 – 50 000 € pour l\'immeuble entier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un permis de construire pour rénover la plomberie d\'un appartement à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non, les travaux de rénovation de plomberie (remplacement de tuyaux, robinetterie, chasse d\'eau, siphon) ne nécessitent pas de permis de construire ni de déclaration préalable de travaux. Ils relèvent de l\'entretien courant du logement. En revanche, si les travaux impliquent une modification de la distribution d\'eau (déplacement de la cuisine ou salle de bain), une déclaration auprès du syndic de copropriété est souvent requise. Le recours à un plombier qualifié (qualification RGE ou équivalent) est fortement recommandé pour les interventions sur les colonnes montantes.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Plomberie Rénovation Paris : remplacement tuyaux, chasse & prix 2025 | Espace Design',
  description: 'Rénover la plomberie d\'un appartement à Paris : tuyaux plomb, chasse d\'eau, siphon, robinetterie. Prix artisan plombier 2025.',
}

export default function ArticlePlomberieRenovationParis() {
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
            Plomberie
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Plomberie Rénovation Paris : remplacement tuyaux, chasse & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Tuyaux en plomb encore présents, canalisations PER ou cuivre, chasse d&apos;eau économe, remplacement de colonne montante en copropriété : la plomberie d&apos;un appartement parisien soulève des questions techniques et réglementaires spécifiques. Guide complet pour votre rénovation 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Tuyaux plomb */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Tuyaux en plomb : interdits depuis 1995, encore présents à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La loi française interdit l&apos;utilisation du plomb dans les canalisations d&apos;eau potable depuis 1995. Pourtant, dans les immeubles haussmanniens parisiens (construits entre 1850 et 1960), les tuyaux en plomb sont encore fréquents, notamment pour les raccordements privatifs et certaines colonnes montantes. Le plomb se dissout dans l&apos;eau acide et représente un risque sanitaire grave, en particulier pour les enfants de moins de 6 ans.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Si votre appartement a été construit avant 1950 et n&apos;a jamais fait l&apos;objet d&apos;une rénovation complète de la plomberie, la présence de plomb est très probable. Une analyse de l&apos;eau au robinet (laboratoire agréé, 30 à 80 €) ou une inspection visuelle par un plombier permet de le confirmer rapidement.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Remplacement des canalisations en plomb',
                  detail: 'Le remplacement consiste à déposer les anciens tuyaux en plomb et les remplacer par des tuyaux en cuivre ou en PER (polyéthylène réticulé). Les tuyaux sont passés dans les murs (saignées) ou en faux-plafond. Les tuyaux en plomb sont des déchets dangereux : leur évacuation doit être confiée à un professionnel habilité. Coût : 80 à 200 €/ml selon la configuration.',
                },
                {
                  enjeu: 'Collecteurs PER vs cuivre : lequel choisir ?',
                  detail: 'Le PER (polyéthylène réticulé) est flexible, résistant au gel et au calcaire, et moins coûteux que le cuivre. Il est idéal pour les appartements à rénover car il se passe en gaine sans soudure et facilite les interventions futures. Le cuivre reste la référence pour les installations visibles (apparent) et les zones à fort passage. Les deux matériaux sont compatibles avec les chaudières et chauffe-eaux actuels.',
                },
                {
                  enjeu: 'Traçabilité dans les murs',
                  detail: 'En appartement parisien, les canalisations sont souvent noyées dans les murs ou sous le carrelage. Leur traçabilité est essentielle pour les interventions futures : il est recommandé de conserver un plan de l\'installation (schéma des tracés) remis par le plombier à la fin des travaux. Les systèmes PER en gaine permettent de remplacer le tuyau sans casser les murs en cas de fuite.',
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

      {/* Section 2 — Chasse, robinetterie, colonne */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Chasse d&apos;eau, robinetterie et colonne montante
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La rénovation de la plomberie ne se limite pas aux canalisations principales. La chasse d&apos;eau, la robinetterie et les siphons sont des postes souvent négligés qui génèrent des économies d&apos;eau significatives et évitent les fuites chroniques dans les appartements parisiens.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Chasse d\'eau économe (double débit)',
                solution: 'Remplacement du mécanisme de chasse par un modèle double débit (3 L / 6 L) conforme à la réglementation. Réduit la consommation d\'eau des toilettes de 30 à 50%. En appartement parisien, le réservoir suspendu en WC suspendu permet d\'intégrer le mécanisme dans la cloison et d\'optimiser l\'espace.',
                cout: '80 – 300 € main d\'oeuvre comprise',
              },
              {
                titre: 'Remplacement de robinetterie',
                solution: 'Mitigeurs thermostatiques, robinets à cartouche céramique, douchettes économes : la robinetterie moderne réduit les fuites et améliore le confort. Le mitigeur thermostatique maintient une température constante et évite les brûlures. À Paris, la pression d\'eau est souvent élevée : prévoir un réducteur de pression si nécessaire.',
                cout: '150 – 500 € par point d\'eau',
              },
              {
                titre: 'Siphon et évacuation',
                solution: 'Remplacement des siphons vétustes (fonte, plomb) par des modèles PVC silencieux. En appartement parisien, les évacuations en fonte sont encore fréquentes et peuvent présenter des fuites ou des problèmes de raccordement lors de la rénovation. Le remplacement des siphons salle de bain et cuisine est souvent réalisé en même temps que le carrelage.',
                cout: '50 – 150 € par siphon',
              },
              {
                titre: 'Remplacement de colonne montante (copropriété)',
                solution: 'La colonne montante est la canalisation principale qui dessert tous les appartements d\'un immeuble. Son remplacement relève de la copropriété et représente un chantier lourd (accès à chaque appartement, coupure d\'eau générale). En Paris intra-muros, ces travaux sont souvent votés en AG lors de sinistres répétés.',
                cout: '15 000 – 50 000 € / immeuble',
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

      {/* Section 3 — Budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget rénovation plomberie à Paris : prix par poste
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent main d&apos;oeuvre et matériaux inclus, pour un appartement parisien de 50 à 70 m².
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Remarque</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    prestation: 'Remplacement robinetterie salle de bain',
                    prix: '300 – 800 €',
                    remarque: 'Mitigeur + douchette + bonde',
                  },
                  {
                    prestation: 'Remplacement chasse d\'eau + WC suspendu',
                    prix: '800 – 2 000 €',
                    remarque: 'Bâti-support inclus',
                  },
                  {
                    prestation: 'Remplacement canalisations (PER) 50 m²',
                    prix: '2 000 – 5 000 €',
                    remarque: 'Hors dépose murs',
                  },
                  {
                    prestation: 'Rénovation plomberie complète 60 m²',
                    prix: '4 000 – 8 000 €',
                    remarque: 'Alimentation + évacuation',
                  },
                  {
                    prestation: 'Remplacement tuyaux plomb urgence',
                    prix: '2 000 – 6 000 €',
                    remarque: 'Dépose + évacuation déchets',
                  },
                ].map((row, i) => (
                  <tr key={row.prestation} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.prestation}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.remarque}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour une rénovation plomberie réussie à Paris
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Profiter d\'une rénovation de salle de bain ou cuisine pour refaire la plomberie — accès facilité',
                'Choisir le PER en gaine : remplacement du tuyau sans casser les murs en cas de fuite future',
                'Demander systématiquement un plan de l\'installation à la fin des travaux',
                'Faire vérifier la pression d\'eau (idéale entre 2,5 et 4 bars) — un excès détériore la robinetterie',
                'En copropriété, informer le syndic avant tout travaux sur les parties communes ou colonnes montantes',
                'Conserver les factures des travaux — elles peuvent valoriser l\'appartement lors de la revente',
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
              { href: '/blog/renovation-salle-de-bain-prix-paris', title: 'Prix rénovation salle de bain Paris' },
              { href: '/blog/carrelage-salle-de-bain-paris', title: 'Carrelage salle de bain Paris' },
              { href: '/blog/travaux-electricite-appartement-paris', title: 'Électricité appartement Paris' },
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
          Rénovez la plomberie de votre appartement parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Plombier artisan qualifié à Paris.
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
