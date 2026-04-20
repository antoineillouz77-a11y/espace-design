import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Aménagement Petite Salle de Bain Paris', item: 'https://espacedesignparis.fr/blog/amenagement-petite-salle-de-bain-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Aménagement Petite Salle de Bain Paris : astuces & prix 2025 | Espace Design',
  description: "Optimiser une petite salle de bain à Paris (3-5 m²) : douche italienne, WC suspendu, niche carrelage, miroir lumineux. Artisan Paris, devis 48h.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/amenagement-petite-salle-de-bain-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'un aménagement de petite salle de bain à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le budget varie selon la surface et le niveau de finition. Pour une salle de bain de 2 à 3 m² entièrement refaite (douche italienne, WC suspendu, meuble vasque, carrelage, plomberie) : 6 000 à 12 000 €. Pour 4 à 5 m² avec des matériaux milieu de gamme : 10 000 à 18 000 €. Un simple rafraîchissement (peinture, remplacement vasque et robinetterie) peut se faire dès 1 500 à 3 000 €. Demandez un devis gratuit sous 48h pour votre configuration exacte.",
      },
    },
    {
      '@type': 'Question',
      name: "La douche italienne est-elle adaptée aux petites salles de bain parisiennes ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, la douche à l'italienne est particulièrement recommandée pour les petites salles de bain parisiennes. Elle supprime le receveur surélevé et le rideau de douche qui visuellement « coupent » l'espace, et elle s'intègre à partir de 80 × 80 cm. Le bac extra-plat à carreler ou le receveur en résine donne une impression d'espace continu. Attention : l'évacuation nécessite de casser le sol pour créer la pente — à prévoir lors d'une rénovation complète. Coût moyen à Paris : 2 500 à 5 000 € pose comprise.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment gagner de la place dans une salle de bain de 3 m² ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Six astuces efficaces pour maximiser une salle de bain de 3 m² : 1) WC suspendu (libère 15 cm au sol et facilite le nettoyage), 2) meuble vasque suspendu avec rangement intégré (libère le sol visuellement), 3) niche carrelée dans le mur de douche (évite les porte-savons et tablettes saillantes), 4) miroir avec rangement encastré ou miroir large (agrandit visuellement la pièce), 5) carrelage grand format uni pour éviter l'effet découpage, 6) couleurs claires sur les murs et le sol pour la luminosité.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle hauteur de carrelage pour une petite salle de bain ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour agrandir visuellement une petite salle de bain parisienne, deux options s'opposent : carrelage plein mur (du sol au plafond) pour un effet luxueux et sans interruption — efficace mais coûteux (main d'œuvre importante), ou carrelage à mi-hauteur avec peinture hydrofuge au-dessus — moins cher et lumineux si la peinture est claire. Le carrelage plein mur est recommandé pour les surfaces ≤ 3 m² en rénovation complète. Pour les formats : privilégiez les grands formats (60×120 cm) avec des joints fins pour minimiser les lignes de découpe.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Aménagement Petite Salle de Bain Paris : astuces & prix 2025 | Espace Design",
  description: "Optimiser une petite salle de bain à Paris (3-5 m²) : douche italienne, WC suspendu, niche carrelage, miroir lumineux. Artisan Paris, devis 48h.",
  keywords: "petite salle de bain Paris, aménagement salle de bain 4m² Paris, optimiser petite SdB Paris, douche italienne petite surface",
}

export default function ArticleAmenagementPetiteSalleDeBain() {
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
            Salle de bain
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Aménagement Petite Salle de Bain Paris : astuces et prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Les appartements parisiens imposent souvent des contraintes extrêmes : salles de bain de 2 à 5 m² où il faut faire coexister douche, WC et vasque. Voici les 6 astuces d&apos;aménagement les plus efficaces pour optimiser chaque centimètre, avec les prix pratiqués à Paris en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — 6 astuces */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              6 astuces pour optimiser une petite salle de bain parisienne
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Ces solutions sont testées et éprouvées dans les contraintes réelles des appartements parisiens — hauteurs sous plafond, colonnes en fonte, tuyaux apparents, accès restreint pour les travaux.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: '1. WC suspendu : libérer le sol et faciliter le nettoyage',
                  detail: "Le WC suspendu est l'une des premières recommandations pour toute petite salle de bain. La cuvette est fixée à 40-45 cm du sol, libérant visuellement et pratiquement l'espace sous les pieds. Le bâti-support (caisson technique) s'intègre dans la paroi ou dans un habillage mural placo de 10 à 15 cm. Gain visuel immédiat : la pièce semble plus grande et le nettoyage du sol est facilité. Coût installation à Paris : 600 à 1 200 € pose comprise.",
                },
                {
                  enjeu: '2. Douche italienne : supprimer le receveur surélevé',
                  detail: "La douche à l'italienne (receveur à ras du sol ou bac extra-plat) supprime la marche d'entrée et le rideau de douche qui découpent visuellement l'espace. Même dans 80 × 80 cm, elle donne une impression d'espace continu. La vitre fixe transparente au lieu d'une paroi opaque complète l'effet. Attention : nécessite de casser le sol pour l'évacuation — à prévoir en rénovation complète. Coût à Paris : 2 500 à 5 000 €.",
                },
                {
                  enjeu: '3. Meuble vasque suspendu : rangement et légèreté visuelle',
                  detail: "Un meuble vasque suspendu (fixé sur le mur sans pied au sol) libère l'espace sous la vasque, ce qui allège visuellement la pièce. Les modèles avec deux colonnes latérales offrent un rangement généreux dans un format compact (largeur à partir de 60 cm). Choisissez une vasque intégrée (monobloc) pour un nettoyage facilité. Évitez les meubles sur pieds dans les petites surfaces — ils encombrent le sol. Budget : 400 à 1 200 € fourni et posé.",
                },
                {
                  enjeu: '4. Niche carrelée dans la douche : rangement encastré',
                  detail: "La niche carrelée dans le mur de la douche remplace les porte-savons, tablettes et coins de douche qui créent des saillies et accumulent le tartre. Elle s'intègre entre deux montants de la structure, offre un rangement discret et s'entretient facilement. Dimensions recommandées : 30 × 15 cm (savon, shampooing) ou 60 × 15 cm (multiple compartiments). À prévoir impérativement lors de la rénovation — impossible à ajouter après carrelage. Coût : 150 à 400 € selon finition.",
                },
                {
                  enjeu: '5. Miroir avec rangement ou grand miroir : agrandir visuellement',
                  detail: "Un miroir large (occupant toute la largeur du meuble vasque, voire au-delà) double visuellement la profondeur de la pièce. Le miroir avec armoire intégrée (modèles encastrés ou en saillie) ajoute un rangement discret pour médicaments et produits de soin. Avec éclairage LED intégré (rétroéclairage ou bandeau), il compense les petites fenêtres fréquentes dans les salles de bain parisiennes côté cour. Budget : 200 à 800 € selon dimensions et options d'éclairage.",
                },
                {
                  enjeu: '6. Carrelage uni grand format et couleurs claires',
                  detail: "Le carrelage grand format (60×60 cm minimum, idéalement 60×120 cm) avec joints fins réduit le nombre de lignes et agrandit visuellement l'espace. Les carreaux petits format (10×10 cm) ont l'effet inverse — nombreuses jointures qui découpent l'espace. Les couleurs claires (blanc, beige, gris clair, vert sauge pale) sur les murs et le sol réfléchissent la lumière. Évitez de mixer trop de matériaux : un seul carrelage sol/mur donne une unité visuelle qui agrandit la pièce.",
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

      {/* Section 2 — Configurations type */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Configurations types selon la surface
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Chaque surface impose ses propres contraintes et compromis. Voici les configurations optimales selon la taille de votre salle de bain.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                surface: '2 m²',
                label: 'Salle de bain minimale',
                config: [
                  'Douche italienne 80×80 cm',
                  'WC suspendu compact',
                  'Vasque à poser sur console',
                  'Miroir simple rétroéclairé',
                  'Carrelage plein mur blanc',
                ],
                budget: '6 000 – 9 000 €',
              },
              {
                surface: '3 m²',
                label: 'Configuration standard Paris',
                config: [
                  'Douche italienne 90×90 cm',
                  'WC suspendu + bâti-support',
                  'Meuble vasque 60 cm suspendu',
                  'Niche carrelée douche',
                  'Miroir avec rangement',
                ],
                budget: '8 000 – 14 000 €',
              },
              {
                surface: '5 m²',
                label: 'Salle de bain confortable',
                config: [
                  'Douche italienne 100×120 cm',
                  'WC suspendu',
                  'Meuble double vasque 100 cm',
                  'Rangements colonnes',
                  'Carrelage grand format',
                ],
                budget: '12 000 – 20 000 €',
              },
            ].map((c) => (
              <div key={c.surface} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="text-2xl font-display font-semibold text-[#B8960C] mb-1">{c.surface}</div>
                <div className="text-xs text-gray-500 font-light mb-4">{c.label}</div>
                <ul className="space-y-1 mb-4">
                  {c.config.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600 font-light">
                      <CheckCircle size={12} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-[#B8960C] text-sm font-medium">{c.budget}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix selon la surface et le niveau de finition
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix indiqués incluent la main d&apos;oeuvre et les matériaux pour un artisan qualifié à Paris, pour une rénovation complète (démolition, plomberie, électricité, carrelage, sanitaires, finitions).
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Entrée de gamme</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Milieu de gamme</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Haut de gamme</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    prestation: 'Douche italienne (pose)',
                    eco: '1 800 €',
                    mid: '3 000 €',
                    haut: '5 000 €+',
                  },
                  {
                    prestation: 'WC suspendu (fourni + posé)',
                    eco: '600 €',
                    mid: '900 €',
                    haut: '1 500 €',
                  },
                  {
                    prestation: 'Meuble vasque suspendu',
                    eco: '400 €',
                    mid: '700 €',
                    haut: '1 500 €',
                  },
                  {
                    prestation: 'Carrelage (fourni + posé)',
                    eco: '60 €/m²',
                    mid: '100 €/m²',
                    haut: '180 €/m²+',
                  },
                  {
                    prestation: 'Rénovation complète 3 m²',
                    eco: '6 000 €',
                    mid: '10 000 €',
                    haut: '18 000 €+',
                  },
                  {
                    prestation: 'Rénovation complète 5 m²',
                    eco: '9 000 €',
                    mid: '15 000 €',
                    haut: '25 000 €+',
                  },
                ].map((row, i) => (
                  <tr key={row.prestation} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.prestation}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.eco}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.mid}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.haut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points de vigilance pour une rénovation de petite SdB à Paris
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Vérifier la compatibilité de la chute d'eau avec une douche italienne (certains immeubles anciens ont des contraintes de pente)",
                "Détecter les colonnes et tuyaux en fonte avant tout travaux — impossible à déplacer sans intervention lourde",
                "Demander l'autorisation de copropriété pour tout déplacement de cloison ou de sanitaires",
                "Prévoir un déshumidificateur ou VMC hygro-réglable pour éviter les problèmes d'humidité après travaux",
                "Vérifier la puissance électrique disponible pour un sèche-serviettes électrique ou plancher chauffant",
                "Anticiper l'accès du matériel : dans les petits appartements parisiens, l'évacuation des gravats peut doubler la durée du chantier",
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
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/humidite-appartement-paris', title: 'Humidité appartement Paris' },
              { href: '/blog/carrelage-paris', title: 'Carrelage Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
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
          Optimisez votre petite salle de bain parisienne
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Plans d&apos;aménagement sur mesure. Devis détaillé sous 48h.
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
