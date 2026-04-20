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
  headline: 'Isolation Thermique Appartement Paris : laine de verre, bio-sourcé & prix 2025 | Espace Design',
  description: 'Isoler son appartement à Paris : laine de verre, laine de roche, ouate de cellulose. Copropriété, DPE, aides MaPrimeRénov\'. Prix 2025.',
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
      name: "Quel est le prix de l'isolation thermique d'un appartement à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix de l'isolation thermique d'un appartement parisien dépend du support et du matériau. Pour les murs intérieurs : 60 à 120 €/m² (laine de roche + plaque de plâtre sur ossature). Pour un doublage collé (sans ossature) : 40 à 80 €/m². Pour l'isolation du plancher bas ou des combles perdus : 20 à 60 €/m² (ouate soufflée). Pour une isolation bio-sourcée (ouate de cellulose, fibre de bois) : ajouter 15 à 30 % au tarif standard. Ces prix incluent main d'œuvre et matériaux.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on bénéficier de MaPrimeRénov' pour isoler un appartement à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, MaPrimeRénov' est accessible aux propriétaires occupants et bailleurs d'appartements parisiens. Le montant de l'aide dépend des revenus du foyer et du type de travaux. Pour l'isolation des murs par l'intérieur, l'aide peut atteindre 25 €/m² pour les ménages modestes et jusqu'à 75 €/m² pour les ménages très modestes. Les travaux doivent être réalisés par un artisan certifié RGE. Les certificats d'économies d'énergie (CEE) peuvent compléter cette aide.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il l'accord de la copropriété pour isoler son appartement à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une isolation par l'intérieur (doublage des murs, isolation du plancher), l'accord de la copropriété n'est généralement pas nécessaire car les travaux restent dans les parties privatives. En revanche, si vous souhaitez isoler des parties communes (toiture, cave, plancher bas sur sous-sol), l'accord de l'assemblée générale est obligatoire. L'isolation par l'extérieur (ITE) est quasiment impossible sans accord de la copropriété car elle modifie l'aspect de la façade.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle isolation choisir entre laine de roche, laine de verre et ouate de cellulose ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Laine de roche : excellent rapport performance/prix, bonne résistance à l'humidité et au feu, recommandée pour les doublages de murs. Laine de verre : légèrement moins performante, moins chère. Ouate de cellulose : matériau bio-sourcé fabriqué à partir de papier recyclé, performances thermiques supérieures, régulation hygrométrique naturelle — idéale pour les immeubles anciens en pierre. Fibre de bois : excellent déphasage thermique, coût plus élevé. Le choix dépend du budget, des contraintes du bâtiment et des critères environnementaux.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Isolation Thermique Appartement Paris : laine de verre, bio-sourcé & prix 2025 | Espace Design',
  description: "Isoler son appartement à Paris : laine de verre, laine de roche, ouate de cellulose. Copropriété, DPE, aides MaPrimeRénov'. Prix 2025.",
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
            Isolation Thermique Appartement Paris : laine de verre, bio-sourcé &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Avec la montée des prix de l&apos;énergie et le durcissement des critères DPE, isoler son appartement à Paris est devenu une priorité. Laine de roche, ouate de cellulose, fibre de bois : quels matériaux choisir ? Quelles aides disponibles ? Guide complet et prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Laine de roche, laine de verre et isolants bio-sourcés : quel matériau choisir ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Chaque isolant a ses forces et ses faiblesses. Dans un appartement parisien en immeuble ancien, la respirabilité des matériaux est un critère souvent sous-estimé : les murs en pierre ou en brique ont besoin de laisser migrer la vapeur d&apos;eau pour éviter les phénomènes de condensation et de moisissures.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La résistance thermique (valeur R, exprimée en m².K/W) est le principal indicateur de performance. Pour les murs, une résistance de 2,5 à 4 m².K/W est recommandée par les critères MaPrimeRénov&apos;.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Laine de roche (laine minérale)',
                  detail: "La référence pour les doublages de murs dans les appartements parisiens. Non combustible (Euroclasse A1), résistante à l'humidité, bonne performance acoustique en complément de la performance thermique. Conductivité thermique : 0,032 à 0,040 W/m.K. Pose en panneau semi-rigide sur ossature ou en rouleau souple. Prix matériau : 8 à 20 €/m².",
                },
                {
                  enjeu: 'Laine de verre',
                  detail: "Légèrement moins dense que la laine de roche, elle est moins résistante à l'humidité mais suffisante pour des murs intérieurs secs. Moins chère de 20 à 30 %. Bonne performance acoustique. Format en rouleau ou en panneau. À éviter dans les caves et les sous-sols humides. Prix matériau : 5 à 15 €/m².",
                },
                {
                  enjeu: 'Ouate de cellulose',
                  detail: "Isolant bio-sourcé fabriqué à partir de papier journal recyclé. Excellente respirabilité, régulation hygrométrique naturelle (idéale pour les immeubles anciens en pierre), très bon déphasage thermique (confort été). Pose par soufflage (combles perdus) ou par injection (murs creux). Certifiée ACERMI. Prix matériau : 10 à 30 €/m².",
                },
                {
                  enjeu: 'Fibre de bois',
                  detail: "Isolant bio-sourcé haute densité, excellent déphasage thermique (jusqu'à 10h). Idéal pour les appartements sous toiture. Légèrement plus cher que la laine de roche mais apprécié pour les rénovations BBC et passives. Prix matériau : 15 à 40 €/m² selon épaisseur.",
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
            Murs, combles et planchers : par où commencer ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un appartement parisien, les déperditions thermiques sont hiérarchisées. Selon l&apos;ADEME, 25 à 30 % des pertes ont lieu par les murs, 20 à 25 % par le toit et les combles, 10 à 15 % par les planchers et 15 % par les fenêtres. Traiter par ordre d&apos;impact maximise le retour sur investissement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Isolation des murs par l'intérieur (ITI)",
                detail: "Solution principale dans les appartements parisiens. Doublage avec ossature métallique + laine de roche 45 à 100 mm + plaque de plâtre BA13. Perte de 6 à 12 cm sur la largeur. Gain en DPE : souvent 1 à 2 lettres (ex. E vers C). Possible sans accord de copropriété.",
                cout: '60 – 120 €/m²',
              },
              {
                titre: 'Isolation des combles perdus',
                detail: "Si l'appartement est sous toiture et dispose d'un accès aux combles perdus, l'isolation par soufflage d'ouate de cellulose est la solution la plus rapide et économique. 20 cm d'ouate soufflée = R de 5 m².K/W. Éligible MaPrimeRénov' et CEE.",
                cout: '20 – 50 €/m²',
              },
              {
                titre: 'Isolation du plancher bas',
                detail: "Pour les appartements en rez-de-chaussée ou sur vide sanitaire. Pose de panneaux de laine de roche ou de polyuréthane sous le plancher. Traitement des ponts thermiques périphériques indispensable. Éligible aux aides si le logement est sur sous-sol non chauffé.",
                cout: '30 – 70 €/m²',
              },
              {
                titre: 'Remplacement des fenêtres',
                detail: "Double vitrage 4/16/4 ou triple vitrage selon l'exposition. Menuiseries PVC, aluminium ou bois selon les contraintes ABF. Le remplacement améliore aussi le confort acoustique et réduit les ponts thermiques de l'encadrement.",
                cout: '400 – 1 000 € / fenêtre',
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
            Aides MaPrimeRénov&apos; et CEE : financer l&apos;isolation de son appartement parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Plusieurs dispositifs permettent de financer une partie des travaux d&apos;isolation thermique à Paris. Ces aides sont cumulables sous conditions et peuvent couvrir de 20 à 70 % du coût des travaux pour les ménages modestes.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "MaPrimeRénov' (ANAH)",
                prix: "Jusqu'à 75 €/m²",
                detail: "Aide de l'État calculée selon les revenus du foyer (4 tranches) et le type de travaux. Pour l'isolation des murs par l'intérieur : 25 €/m² pour les revenus intermédiaires, 50 €/m² pour les revenus modestes, 75 €/m² pour les très modestes. Travaux réalisés obligatoirement par un artisan RGE.",
              },
              {
                type: "Certificats d'Économies d'Énergie (CEE)",
                prix: 'Variable selon travaux',
                detail: "Prime versée par les fournisseurs d'énergie en contrepartie de travaux d'efficacité énergétique. Cumulable avec MaPrimeRénov'. Peut représenter 2 000 à 8 000 € pour une isolation complète d'un appartement de 60 m². Les offres varient selon les fournisseurs.",
              },
              {
                type: 'Éco-prêt à taux zéro (Éco-PTZ)',
                prix: "Jusqu'à 50 000 €",
                detail: "Prêt sans intérêt pour financer des travaux d'isolation et de rénovation énergétique. Accessible aux propriétaires occupants et bailleurs. Remboursé sur 20 ans maximum. Compatible avec MaPrimeRénov'. Doit financer au moins deux postes d'amélioration énergétique.",
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

      {/* Section 4 */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de l&apos;isolation thermique à Paris en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs main d&apos;œuvre et matériaux inclus, hors aides.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type d&apos;isolation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Matériau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Gain DPE</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Murs ITI (ossature)', materiau: 'Laine de roche 60 mm', prix: '80 – 120 €/m²', gain: '1 à 2 lettres' },
                  { type: 'Murs ITI (collé)', materiau: 'Polystyrène expansé 80 mm', prix: '40 – 70 €/m²', gain: '1 lettre' },
                  { type: 'Combles perdus soufflés', materiau: 'Ouate de cellulose 200 mm', prix: '20 – 50 €/m²', gain: '1 à 2 lettres' },
                  { type: 'Plancher bas', materiau: 'Laine de roche ou PU 80 mm', prix: '30 – 70 €/m²', gain: '0,5 à 1 lettre' },
                  { type: 'Bio-sourcé (surcoût)', materiau: 'Fibre de bois ou chanvre', prix: '+15 à 30 %', gain: 'Identique + déphasage' },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.materiau}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.gain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Bonnes pratiques pour bien isoler son appartement parisien
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Commencer par un audit énergétique pour identifier les postes de déperdition prioritaires",
                "Choisir un artisan RGE pour bénéficier de MaPrimeRénov' et des CEE",
                "Ne jamais isoler un mur humide sans traiter d'abord les remontées capillaires",
                "Assurer la continuité de l'isolation pour éviter les ponts thermiques en périphérie",
                "Coupler l'isolation avec une VMC pour éviter les problèmes d'humidité intérieure",
                "Conserver la respirabilité des murs anciens en choisissant des isolants hygroscopiques",
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
              { href: '/blog/renovation-appartement-paris-4e', title: 'Rénovation appartement Paris 4e' },
              { href: '/blog/renovation-appartement-paris-6e', title: 'Rénovation appartement Paris 6e' },
              { href: '/blog/renovation-appartement-paris-10e', title: 'Rénovation appartement Paris 10e' },
              { href: '/blog/renovation-cuisine-americaine-paris', title: 'Cuisine américaine Paris' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
              { href: '/isolation-phonique-paris', title: 'Isolation phonique Paris' },
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
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos zones d&apos;intervention</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
              { href: '/renovation-saint-ouen', label: 'Saint-Ouen' },
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
          Isolation thermique à Paris : devis gratuit sous 48h
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisans RGE certifiés. Accompagnement MaPrimeRénov&apos; et CEE. Devis détaillé sous 48h.
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
