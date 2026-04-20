import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Maison Ancienne Paris', item: 'https://espacedesignparis.fr/blog/renovation-maison-ancienne-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Maison Ancienne Paris : meulière, pierres & contraintes 2025 | Espace Design',
  description: 'Rénover une maison ancienne à Paris : meulière, pierres de taille, poutres. Contraintes ABF, amiante, surcoûts. Guide artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-maison-ancienne-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix de rénovation d\'une maison ancienne à Paris et en Île-de-France ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix de rénovation d\'une maison ancienne (meulière, maison de ville, haussmannienne) varie entre 1 200 et 3 500 €/m² selon l\'état du bien, le type de travaux et les contraintes patrimoniales. Pour une maison meulière de 120 m² en rénovation complète, comptez entre 150 000 et 300 000 €. Les surcoûts liés à la présence d\'amiante (désamiantage : 5 000 à 30 000 €), au traitement des murs en pierre (isolation ITI, enduit chaux) et aux prescriptions ABF peuvent représenter 20 à 40 % du budget initial.',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il isoler les murs en pierre par l\'intérieur ou l\'extérieur ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour une maison ancienne à murs en pierre à Paris et en Île-de-France, l\'isolation par l\'extérieur (ITE) est généralement impossible ou très contrainte par l\'ABF (aspect de façade modifié). L\'isolation par l\'intérieur (ITI) est donc la solution retenue dans la grande majorité des cas. Deux options : le doublage plâtre sur ossature avec laine de roche (perte de 10 à 14 cm sur la largeur de la pièce, coût : 60 à 100 €/m²) ou l\'enduit chaux-chanvre projeté (plus respirant, compatible avec les murs anciens, coût : 80 à 140 €/m²). L\'enduit chaux est recommandé sur les murs en pierre car il laisse respirer le mur et évite les problèmes d\'humidité par condensation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels délais prévoir pour la rénovation d\'une maison ancienne à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une rénovation complète de maison ancienne à Paris prend entre 4 et 10 mois selon la surface et la complexité du projet. À ce délai s\'ajoutent : 1 à 3 mois pour les diagnostics obligatoires (amiante, plomb, DPE) et les démarches administratives, 2 à 4 mois pour l\'obtention des autorisations ABF si nécessaire, et 1 à 2 mois pour la conception et la sélection des entreprises. Au total, entre la décision de rénover et la livraison, comptez 8 à 18 mois pour un projet complet. Les découvertes en cours de chantier (amiante, structure dégradée, réseaux anciens) peuvent allonger ces délais.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Maison Ancienne Paris : meulière, pierres & contraintes 2025 | Espace Design',
  description: 'Rénover une maison ancienne à Paris : meulière, pierres de taille, poutres. Contraintes ABF, amiante, surcoûts. Guide artisan 2025.',
}

export default function ArticleRenovationMaisonAncienne() {
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
            Rénovation Maison Ancienne Paris : meulière, pierres &amp; contraintes 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Meulière d&apos;Île-de-France, maison de ville parisienne, haussmannienne : chaque type de maison ancienne présente ses propres contraintes techniques, réglementaires et budgétaires. Guide complet pour rénover dans les règles en 2025, avec les vrais prix et les surcoûts à anticiper.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de maisons */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les types de maisons anciennes à Paris et en Île-de-France
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Avant d&apos;engager des travaux, il est essentiel d&apos;identifier le type de construction de votre maison. Chaque type présente des matériaux, des pathologies et des contraintes de rénovation spécifiques.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'La meulière d\'Île-de-France',
                  detail: 'Construite entre 1870 et 1930, la meulière est caractérisée par ses murs en pierre de meulière (roche siliceuse irrégulière), ses volets en bois et ses toitures à forte pente. Elle se rencontre surtout en proche banlieue (Vincennes, Fontenay, Boulogne, Saint-Cloud, Le Perreux). Ses murs en pierre non isolés (U = 1,5 à 2 W/m²K) sont la principale source de déperditions thermiques. L\'enduit extérieur à la chaux est souvent dégradé et la toiture en ardoise ou en tuile mecanique nécessite une attention particulière.',
                },
                {
                  enjeu: 'La maison de ville parisienne intra-muros',
                  detail: 'Rare mais présente dans les arrondissements périphériques (13e, 14e, 15e, 20e), la maison de ville parisienne est souvent construite en brique et pierre meulière. Mitoyenne sur 2 ou 3 côtés, elle présente peu de façades exposées mais souffre souvent d\'une mauvaise ventilation. La rénovation doit intégrer un système de ventilation mécanique contrôlée (VMC) dès le départ.',
                },
                {
                  enjeu: 'La maison haussmannienne avec jardin',
                  detail: 'Dans certains secteurs de Paris (16e, ouest parisien), des maisons individuelles de style haussmannien coexistent avec les immeubles de rapport. Pierre de taille en façade, hauts plafonds, moulures, parquets point de Hongrie : les matériaux nobles sont présents mais nécessitent une restauration experte. Les contraintes ABF sont maximales pour les travaux extérieurs.',
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

      {/* Section 2 — Murs en pierre et poutres */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Murs en pierre, poutres et charpente : traitement et conservation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les maisons anciennes regorgent de matériaux nobles qui méritent d&apos;être conservés et mis en valeur. Mais leur traitement nécessite des compétences spécifiques et des délais à ne pas sous-estimer.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Isolation intérieure des murs en pierre (ITI)',
                detail: 'Doublage plâtre + laine de roche 100 mm sur ossature désolidarisée, ou enduit chaux-chanvre projeté (plus respirant). L\'enduit chaux est recommandé car il régule l\'humidité et ne piège pas la vapeur d\'eau dans le mur. Perte en surface : 10 à 14 cm par mur traité.',
                cout: '60 – 140 €/m²',
              },
              {
                titre: 'Enduit chaux sur façade',
                detail: 'Dépose de l\'enduit dégradé, ragréage de la meulière ou de la pierre, application d\'un enduit à la chaux teinté dans la masse. Traitement hydrofuge si nécessaire. L\'enduit chaux respire et s\'entretient facilement. À faire valider par l\'ABF pour les façades sur rue.',
                cout: '80 – 150 €/m²',
              },
              {
                titre: 'Poutres apparentes : conservation et traitement',
                detail: 'Les poutres en chêne ou en sapin des maisons anciennes sont un atout décoratif. Avant mise en valeur : traitement fongicide et insecticide (curatif si infestation détectée), sablage ou décapage chimique pour retrouver le bois naturel, puis huilage ou lasure. Coût : 80 à 200 €/ml selon section et état.',
                cout: '80 – 200 €/ml',
              },
              {
                titre: 'Charpente et toiture',
                detail: 'La charpente en bois des maisons de plus de 50 ans doit être inspectée par un charpentier avant tout projet de rénovation. Merrain, capricorne des maisons, anobium : les insectes xylophages peuvent fragiliser la structure. Un traitement préventif coûte 20 à 40 €/m² de surface traitée. Le remplacement d\'une charpente complète : 10 000 à 30 000 €.',
                cout: '20 – 40 €/m² traité',
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

      {/* Section 3 — Diagnostics et réglementation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Diagnostics obligatoires et réglementation : ce qu&apos;il faut savoir avant les travaux
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Pour toute maison construite avant 1997, les diagnostics amiante et plomb sont obligatoires avant d&apos;engager des travaux. Leur résultat conditionne le budget et les délais du chantier.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Diagnostic amiante avant travaux (DAAT)',
                prix: '300 – 800 €',
                detail: 'Obligatoire pour tout bien construit avant le 1er juillet 1997. Le diagnostiqueur recherche la présence d\'amiante dans les matériaux susceptibles d\'être impactés par les travaux (colles de carrelage, dalles vinyle, enduits projetés, calorifugeage des tuyaux). En cas de détection, le désamiantage doit être réalisé par une entreprise certifiée avant le démarrage du chantier. Coût du désamiantage : 5 000 à 30 000 € selon la surface et les zones concernées.',
              },
              {
                type: 'Diagnostic plomb (CREP)',
                prix: '150 – 500 €',
                detail: 'Le Constat de Risque d\'Exposition au Plomb (CREP) est obligatoire pour les biens construits avant 1949 (vente ou location). Les peintures au plomb sont fréquentes dans les maisons de cette période. Si la concentration en plomb dépasse le seuil réglementaire, des travaux d\'encapsulage ou de décapage doivent être réalisés avant les travaux de rénovation.',
              },
              {
                type: 'Contraintes ABF et autorisations',
                prix: 'Variable',
                detail: 'Les maisons situées dans un rayon de 500 m autour d\'un monument historique ou dans un Site Patrimonial Remarquable sont soumises à l\'avis de l\'Architecte des Bâtiments de France pour les travaux extérieurs. Cela concerne notamment les fenêtres, le ravalement de façade, la toiture et les extensions. Un refus peut bloquer un projet entier. Délai d\'instruction : 2 à 4 mois.',
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

      {/* Section 4 — Budget et surcoûts */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget rénovation maison ancienne : prix 2025 et surcoûts à anticiper
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La rénovation d&apos;une maison ancienne est souvent ponctuée de découvertes imprévues en cours de chantier. Prévoir une réserve de 20 à 40 % sur le budget initial est une règle d&apos;or.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Poste de travaux</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix unitaire</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Surcoût potentiel</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    poste: 'Isolation des murs (ITI)',
                    prix: '60 – 140 €/m²',
                    surcout: '+20 % si murs irréguliers',
                  },
                  {
                    poste: 'Toiture et charpente',
                    prix: '150 – 300 €/m²',
                    surcout: '+30 % si charpente à traiter',
                  },
                  {
                    poste: 'Désamiantage',
                    prix: '5 000 – 30 000 €',
                    surcout: 'Non prévisible sans diagnostic',
                  },
                  {
                    poste: 'Mise aux normes électricité',
                    prix: '8 000 – 25 000 €',
                    surcout: '+15 % si faux-plafonds à déposer',
                  },
                  {
                    poste: 'Plomberie complète',
                    prix: '5 000 – 18 000 €',
                    surcout: '+20 % si tuyaux en plomb',
                  },
                  {
                    poste: 'Rénovation façade (enduit chaux)',
                    prix: '80 – 150 €/m²',
                    surcout: '+25 % si échafaudage obligatoire',
                  },
                ].map((row, i) => (
                  <tr key={row.poste} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.poste}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.surcout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour maîtriser son budget sur une maison ancienne
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Réaliser tous les diagnostics obligatoires avant de signer un devis d\'entreprise',
                'Faire appel à un architecte ou maître d\'œuvre pour les projets de plus de 100 000 €',
                'Prévoir 20 à 40 % de réserve pour les imprévus de chantier',
                'Traiter la toiture et les réseaux (électricité, plomberie) en priorité avant les finitions',
                'Ne pas supprimer les poutres ou les cheminées sans avis d\'un expert en patrimoine',
                'Vérifier les aides disponibles : MaPrimeRénov\', éco-PTZ, aides de l\'ANAH pour l\'isolation',
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

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/renovation-appartement-paris-1er', title: 'Rénovation appartement Paris 1er' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation haussmannien Paris' },
              { href: '/blog/diagnostic-amiante-paris', title: 'Diagnostic amiante Paris' },
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
              { href: '/renovation-vincennes', label: 'Vincennes' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne' },
              { href: '/renovation-saint-cloud', label: 'Saint-Cloud' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
              { href: '/renovation-pantin', label: 'Pantin' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
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
          Votre projet de rénovation de maison ancienne
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Meulière, maison de ville, haussmannienne — expertise bâti ancien. Devis gratuit sous 48h.
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
