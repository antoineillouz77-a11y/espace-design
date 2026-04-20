import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Escalier Intérieur Paris', item: 'https://espacedesignparis.fr/blog/escalier-interieur-renovation-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Escalier Intérieur Paris : bois, métal & prix 2025 | Espace Design",
  description: "Rénover un escalier intérieur parisien : peinture marches, changement de balustrade, habillage métal, refait à neuf. Prix artisan Paris 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/escalier-interieur-renovation-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation d'escalier intérieur à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le budget dépend de l'ampleur des travaux. Pour une rénovation légère (peinture ou lasure des marches + peinture balustrade) : 800 à 2 500 €. Pour un remplacement de la balustrade ou rampe : 2 000 à 5 000 €. Pour un habillage de marches béton en parquet ou carrelage : 3 000 à 8 000 €. Pour un escalier complet neuf (bois ou métal) dans un appartement duplex parisien : 8 000 à 25 000 € selon les matériaux et la complexité. Demandez un devis gratuit sous 48h.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on rénover un escalier en bois soi-même dans un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La peinture ou lasure des marches est accessible en DIY (ponçage, impression, finition en 2 couches). En revanche, le remplacement de la balustrade, l'habillage des marches ou la modification de la structure nécessitent un artisan qualifié — notamment pour les questions de sécurité (hauteur réglementaire de la rampe à 90 cm minimum) et de conformité dans les copropriétés parisiennes (certains escaliers sont classés et nécessitent l'accord du syndic ou de l'ABF).",
      },
    },
    {
      '@type': 'Question',
      name: "Comment rénover un escalier béton dans un appartement duplex parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Plusieurs options s'offrent à vous pour habiller un escalier béton brut dans un duplex parisien. Option 1 : habillage en parquet stratifié ou contrecollé (contremarches + nez de marche) — élégant et chaleureux, 150 à 250 €/marche fourni et posé. Option 2 : carrelage grès cérame (grand format) — moderne et résistant, 100 à 200 €/marche. Option 3 : résine époxy teintée — contemporaine, facile à entretenir, 80 à 150 €/marche. Option 4 : béton ciré — continuité avec le sol existant, 100 à 200 €/m².",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il une autorisation pour rénover l'escalier d'un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un escalier privatif intérieur (entre deux niveaux d'un duplex), aucune autorisation de la copropriété n'est nécessaire si la structure portante n'est pas modifiée. En revanche, si l'escalier est dans les parties communes de la copropriété, tout travaux nécessite un accord en assemblée générale. Dans les immeubles classés ou en secteur sauvegardé (nombreux dans Paris intra-muros), le changement de matériaux ou de style peut nécessiter l'accord de l'Architecte des Bâtiments de France (ABF). Vérifiez toujours le règlement de copropriété avant travaux.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Escalier Intérieur Paris : bois, métal & prix 2025 | Espace Design",
  description: "Rénover un escalier intérieur parisien : peinture marches, changement de balustrade, habillage métal, refait à neuf. Prix artisan Paris 2025.",
  keywords: "rénovation escalier Paris, escalier intérieur Paris, réfection escalier bois Paris, prix rénovation escalier Paris",
}

export default function ArticleEscalierRenovation() {
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
            Menuiserie
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Escalier Intérieur Paris : bois, métal et prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            L&apos;escalier est souvent le point focal d&apos;un appartement duplex ou d&apos;une maison parisienne. Usé, grinçant, sans cachet ou tout simplement vieilli — il existe des solutions allant de la simple rénovation des marches à l&apos;escalier entièrement refait, adaptées aux contraintes des immeubles parisiens et au respect du PLU.
          </p>
        </div>
      </section>

      {/* Section 1 — Types d'escaliers */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Types d&apos;escaliers dans les appartements parisiens
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le type de structure détermine les possibilités de rénovation, les contraintes techniques et le budget. Identifier votre configuration est la première étape.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                type: 'Escalier bois classique',
                frequence: 'Très fréquent (immeubles avant 1970)',
                detail: "Marches en bois massif sur limon bois ou métal. Souvent grinçant, vieilli, avec balustrade en bois tourné ou métal forgé. Grande valeur patrimoniale dans les immeubles haussmanniens. Rénovation possible sans démolition : ponçage + lasure, remplacement balustrade, remplacement de marches isolées.",
              },
              {
                type: 'Escalier béton brut',
                frequence: 'Fréquent (duplex 1960-1990)',
                detail: "Marches en béton brut ou recouvertes d'un revêtement usé (moquette, carrelage). Base solide qui offre toutes les options d'habillage (parquet, carrelage, résine, béton ciré). Le béton accepte tous les matériaux de revêtement sans modification structurelle.",
              },
              {
                type: 'Escalier métal industriel',
                frequence: 'Tendance croissante (lofts, ateliers)',
                detail: "Structure en acier avec marches bois, béton ou caillebotis. Apprécié pour le style loft et industriel. Rénovation : peinture ou sablage/galvanisation de la structure, remplacement des marches, modernisation des garde-corps.",
              },
              {
                type: 'Escalier colimaçon',
                frequence: 'Nombreux duplex parisiens',
                detail: "Escalier hélicoïdal autour d'un axe central, économe en espace — idéal pour les petits duplex parisiens. Souvent en métal peint. Rénovation : peinture de la structure, remplacement des marches bois, modernisation de la rampe. Remplacement complet possible sur mesure.",
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.type}</div>
                <div className="text-xs text-[#B8960C] font-medium mb-3">{el.frequence}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Types de rénovation */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Types de rénovation : du rafraîchissement au complet neuf
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La rénovation d&apos;un escalier peut être partielle (conserver la structure, rénover la finition) ou totale (remplacer l&apos;ensemble). Le choix dépend de l&apos;état structural, du budget et du résultat souhaité.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                travaux: 'Peinture ou lasure des marches',
                prix: '800 – 2 500 €',
                detail: "La solution la moins invasive et la plus économique. Ponçage des marches, rebouchage des éclats, impression, puis lasure (teinte bois naturelle, transparente ou couvrant) ou peinture laquée (blanc, noir, couleur). Résultat renouvelé pour 5 à 10 ans. Convient si la structure est saine et que seule la finition est usée. Peinture balustrade incluse dans ce budget.",
              },
              {
                travaux: 'Remplacement balustrade et rampe',
                prix: '2 000 – 6 000 €',
                detail: "La balustrade (ensemble des barreaux verticaux) et la rampe (main courante) sont les éléments les plus visibles. Leur remplacement transforme radicalement l'aspect de l'escalier. Options populaires à Paris : rampe métal noir mat (style contemporain), rampe inox brossé, garde-corps en verre trempé (effet loft), ou remplacement des balustres bois par des câbles inox tendus. Vérifier la conformité avec la hauteur réglementaire (90 cm minimum).",
              },
              {
                travaux: 'Habillage marches béton (parquet, carrelage, résine)',
                prix: '3 000 – 8 000 €',
                detail: "Pour les escaliers béton bruts ou avec revêtement usé, l'habillage ajoute un revêtement sur les marches existantes sans toucher à la structure. Parquet contrecollé (chêne, noyer) : chaleureux et élégant, 150 à 250 €/marche. Carrelage grand format grès cérame : moderne et résistant, 100 à 180 €/marche. Résine époxy teintée : très contemporaine, entretien facile, 80 à 140 €/marche. Prévoir systématiquement des nez de marche antidérapants.",
              },
              {
                travaux: 'Escalier complet neuf',
                prix: '8 000 – 25 000 €',
                detail: "Démolition de l'escalier existant et remplacement complet par un escalier sur mesure. La solution la plus onéreuse mais qui offre toutes les libertés de design. Escalier bois massif (chêne, hêtre) : 8 000 à 18 000 €. Escalier métal + marches bois : 10 000 à 20 000 €. Escalier en colimaçon acier laqué : 5 000 à 12 000 €. Les travaux nécessitent souvent une déclaration de travaux selon l'ampleur.",
              },
            ].map((el) => (
              <div key={el.travaux} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.travaux}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Contraintes immeubles parisiens */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes spécifiques des immeubles parisiens anciens
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les immeubles parisiens anciens imposent des contraintes particulières que tout artisan doit anticiper avant de commencer les travaux.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                titre: 'Préservation du cachet haussmannien',
                detail: "Dans les immeubles haussmanniens, les escaliers à balustres bois tournés, rampe fer forgé et marches en pierre naturelle sont des éléments patrimoniaux. Leur remplacement intégral par des matériaux modernes peut être refusé par le syndic ou l'ABF. Privilégier la restauration à l'identique (ponçage, resculptage, peinture) avant tout remplacement.",
              },
              {
                titre: 'PLU et secteur sauvegardé',
                detail: "Paris compte de nombreux secteurs sauvegardés (Marais, Île Saint-Louis, Montmartre...) où toute modification visible de l'extérieur — et parfois de l'intérieur pour les éléments patrimoniaux — nécessite l'accord de l'Architecte des Bâtiments de France. Vérifiez la carte du PLU de Paris avant tout projet.",
              },
              {
                titre: 'Règlement de copropriété',
                detail: "Pour un escalier en parties privatives (duplex), aucune autorisation n'est nécessaire si la structure portante n'est pas modifiée. Pour les escaliers en parties communes, tout travaux doit être voté en assemblée générale. Certains règlements imposent des matériaux ou styles précis pour maintenir l'homogénéité de l'immeuble.",
              },
              {
                titre: 'Accès et logistique chantier',
                detail: "Dans les appartements parisiens, l'escalier à rénover est souvent le seul accès aux étages. La logistique est complexe : évacuation des gravats, montée des matériaux lourds (planches de parquet, carrelage), protection des parties communes. Prévoir 20 à 30% de temps supplémentaire par rapport à une maison individuelle.",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Récapitulatif des prix rénovation escalier Paris 2025
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Travaux</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée chantier</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { travaux: 'Peinture / lasure marches', prix: '800 – 2 500 €', duree: '1 – 3 jours' },
                  { travaux: 'Remplacement balustrade rampe', prix: '2 000 – 6 000 €', duree: '2 – 5 jours' },
                  { travaux: 'Habillage marches béton (parquet)', prix: '150 – 250 €/marche', duree: '3 – 7 jours' },
                  { travaux: 'Habillage marches béton (carrelage)', prix: '100 – 180 €/marche', duree: '3 – 7 jours' },
                  { travaux: 'Résine sur marches béton', prix: '80 – 140 €/marche', duree: '2 – 4 jours' },
                  { travaux: 'Escalier complet neuf bois', prix: '8 000 – 18 000 €', duree: '5 – 10 jours' },
                  { travaux: 'Escalier complet neuf métal + bois', prix: '10 000 – 20 000 €', duree: '5 – 15 jours' },
                ].map((row, i) => (
                  <tr key={row.travaux} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.travaux}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/parquet-pose-paris', title: 'Pose de parquet Paris' },
              { href: '/blog/choisir-peinture-appartement-paris', title: 'Choisir sa peinture Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
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
          Rénovez l&apos;escalier de votre appartement parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Conseils matériaux sur mesure. Devis détaillé sous 48h.
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
