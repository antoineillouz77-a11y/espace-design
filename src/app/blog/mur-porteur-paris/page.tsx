import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Mur Porteur Paris', item: 'https://espacedesignparis.fr/blog/mur-porteur-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Mur Porteur Paris : abattre, percer & prix artisan 2025 | Espace Design',
  description: 'Abattre ou percer un mur porteur à Paris : démarches, IPN, permis, prix 2025. Guide complet par un artisan parisien.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  url: 'https://espacedesignparis.fr/blog/mur-porteur-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Comment savoir si un mur est porteur dans un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Plusieurs indices permettent d'identifier un mur porteur : son épaisseur (15 à 25 cm pour un mur porteur, contre 7 à 10 cm pour une cloison), sa perpendiculaire aux solives du plancher bois, sa position centrale dans l'appartement, et sa continuité de l'étage inférieur à l'étage supérieur. La méthode fiable reste la consultation des plans de structure en mairie ou le diagnostic d'un bureau d'études structure.",
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un permis de construire pour abattre un mur porteur à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'abattage d'un mur porteur à Paris nécessite une déclaration préalable de travaux dès lors que les travaux modifient la structure porteuse. Dans un immeuble en copropriété, une autorisation de l'assemblée générale est requise (loi du 10 juillet 1965, article 25). En zone protégée (Secteur Sauvegardé, secteur ABF), des autorisations supplémentaires peuvent être exigées.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le prix pour abattre un mur porteur à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix pour abattre un mur porteur à Paris varie selon la longueur et la complexité. Pour une ouverture de 3 à 4 m : étude structure 800 – 2 000 €, fourniture et pose IPN 3 000 – 8 000 €, démolition et déblaiement 1 500 – 3 000 €, finitions (plâtre, peinture, sol) 1 000 – 3 000 €. Budget total moyen : 6 000 – 16 000 € pour une ouverture complète.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps durent les travaux pour abattre un mur porteur ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'abattage d'un mur porteur représente 5 à 10 jours de chantier : 1 jour pour l'étaiement, 1 à 2 jours pour la démolition, 1 jour pour la pose de l'IPN, 2 à 3 jours pour les reprises de maçonnerie, 2 à 3 jours pour les finitions. Ajoutez 3 à 6 semaines en amont pour l'étude structure et les démarches administratives.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Mur Porteur Paris : abattre, percer & prix artisan 2025 | Espace Design',
  description: 'Abattre ou percer un mur porteur à Paris : démarches, IPN, permis, prix 2025. Guide complet par un artisan parisien.',
}

export default function ArticleMurPorteurParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Guides</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Mur Porteur Paris : abattre, percer & prix artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Ouvrir le plan d&apos;un appartement parisien en abattant un mur porteur est l&apos;un des travaux les plus impactants — et les plus encadrés. IPN, étude structure, démarches en copropriété, budget réel : guide complet 2025 par un artisan parisien expérimenté.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Comment identifier un mur porteur dans un appartement parisien ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Avant toute démarche, il faut distinguer murs porteurs et simples cloisons. Dans le bâti ancien parisien — haussmannien, immeuble de rapport du XIXe, construction des années 1950-1970 — la structure est souvent en maçonnerie de pierre ou de briques, parfois en béton armé pour les immeubles plus récents.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Un mur porteur supporte le poids des planchers et des niveaux supérieurs. Le retirer sans précaution peut provoquer des fissurations graves, voire l&apos;effondrement partiel du bâtiment. L&apos;intervention d&apos;un bureau d&apos;études structure est obligatoire.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Épaisseur du mur',
                  detail: "Un mur porteur en pierre ou brique mesure généralement 20 à 50 cm d'épaisseur dans les immeubles haussmanniens, 15 à 25 cm dans les constructions des années 1950-1970. Une cloison légère (plâtre, carreaux de plâtre) fait 7 à 12 cm. L'épaisseur seule ne suffit pas, mais c'est un premier indicateur fiable.",
                },
                {
                  enjeu: 'Position dans le plan de l\'appartement',
                  detail: "Les murs porteurs courent généralement perpendiculairement aux solives du plancher bois (bâti ancien) ou dans le sens de la portée structurelle (béton armé). Un mur central traversant l'appartement de façade à façade est quasi systématiquement porteur. Consultez les plans cadastraux ou les plans de permis de construire disponibles en mairie.",
                },
                {
                  enjeu: 'Diagnostic par un bureau d\'études structure',
                  detail: "C'est la seule méthode fiable et incontestable. Un ingénieur structure visite l'appartement, consulte les plans, sonde le mur si nécessaire, et remet une note de calcul. Ce document est indispensable pour obtenir l'autorisation de la copropriété et de la mairie. Coût : 800 – 2 000 € selon la complexité.",
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
            Démarches administratives et copropriété à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;abattage d&apos;un mur porteur dans un appartement parisien est soumis à plusieurs autorisations cumulatives. Prévoyez 2 à 6 mois de démarches avant le début des travaux selon la configuration de votre immeuble.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Autorisation de la copropriété (AG)',
                detail: "Dans un immeuble en copropriété, les murs porteurs font partie des parties communes structurelles. Toute modification nécessite un vote en assemblée générale à la majorité absolue (article 25 de la loi du 10 juillet 1965). Déposez le dossier au syndic bien en avance de l'AG.",
                cout: 'Délai : 3 à 6 mois',
              },
              {
                titre: 'Déclaration préalable de travaux',
                detail: "Dès lors que les travaux modifient la structure porteuse, une déclaration préalable en mairie est requise. À Paris, le délai d'instruction est d'1 mois (2 mois en secteur protégé). Le dossier doit inclure la note de calcul structure et le plan avant/après.",
                cout: 'Délai : 1 à 2 mois',
              },
              {
                titre: 'Secteur ABF et sites protégés',
                detail: "Une grande partie de Paris est couverte par des Secteurs Sauvegardés ou des périmètres ABF. Des prescriptions spécifiques peuvent s'appliquer. Vérifiez le PLU de Paris avant de déposer votre dossier.",
                cout: 'Variable',
              },
              {
                titre: 'Assurance et responsabilité',
                detail: "L'entreprise doit être couverte par une assurance décennale pour les travaux de gros œuvre. Conservez toutes les attestations. En cas de sinistre sur les parties communes ou chez les voisins, la responsabilité décennale peut être engagée pendant 10 ans.",
                cout: 'Inclus dans le devis',
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
            Technique : IPN, reprise en sous-œuvre et déroulé du chantier
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;abattage d&apos;un mur porteur ne se résume pas à démolir. La structure doit être reprise par un profilé métallique (IPN ou HEB) dimensionné par l&apos;ingénieur structure. Le chantier suit un ordre précis pour garantir la sécurité.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Étaiement préalable',
                prix: 'Inclus dans le devis',
                detail: "Avant toute démolition, le plancher supérieur est étayé sur toute la longueur de l'ouverture. Les étais reprennent les charges pendant la phase de travaux. Cette étape est obligatoire et ne doit jamais être sautée.",
              },
              {
                type: 'Pose de l\'IPN (profilé métallique)',
                prix: '3 000 – 8 000 €',
                detail: "L'IPN est dimensionné par le bureau d'études selon les charges reprises. Il est posé en tête du mur avant démolition. Pour les grandes ouvertures (5 m+), deux profilés accolés ou un HEB peuvent être requis. Les extrémités reposent sur des boutisses en béton armé noyées dans les murs adjacents.",
              },
              {
                type: 'Démolition du mur',
                prix: '1 500 – 3 000 €',
                detail: "Une fois l'IPN posé et les étais en place, la démolition peut commencer. Dans les immeubles haussmanniens en pierre de taille ou meulière, la démolition est manuelle ou mécanisée avec précaution. Prévoir 300 à 600 kg de gravats par m² de mur abattu.",
              },
              {
                type: 'Finitions : plâtre, sol, peinture',
                prix: '1 000 – 3 000 €',
                detail: "Après démolition : ragréage du plafond au droit de l'IPN, raccords de plâtre sur les murs adjacents, reprise du revêtement de sol, et peinture. L'IPN peut être habillé en plâtre (invisible) ou laissé apparent (effet industriel, très tendance).",
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
            Budget complet : prix pour abattre un mur porteur à Paris (2025)
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix pour une ouverture de 3 à 4 m linéaires, main d&apos;œuvre et matériaux inclus.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Poste</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Détail</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix estimatif</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { poste: "Bureau d'études structure", detail: 'Note de calcul + plans exécution', prix: '800 – 2 000 €' },
                  { poste: 'Fourniture IPN ou HEB', detail: 'Profilé métallique + boutisses béton armé', prix: '800 – 2 500 €' },
                  { poste: 'Pose IPN + étaiement', detail: "Main d'œuvre gros œuvre qualifiée", prix: '2 000 – 5 500 €' },
                  { poste: 'Démolition + évacuation', detail: 'Gravats, benne, main d\'œuvre', prix: '1 500 – 3 000 €' },
                  { poste: 'Finitions (plâtre, sol, peinture)', detail: 'Raccords et remise en état', prix: '1 000 – 3 000 €' },
                  { poste: 'TOTAL', detail: 'Ouverture 3 à 4 m, appartement parisien', prix: '6 000 – 16 000 €' },
                ].map((row, i) => (
                  <tr key={row.poste} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.poste}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.detail}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">Points de vigilance</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Demandez systématiquement la note de calcul structure avant d'accepter un devis",
                "Vérifiez que l'entreprise est couverte par une assurance décennale gros œuvre",
                "Prévoyez 15 % de réserve pour les imprévus (réseau électrique, canalisations dans le mur)",
                "Anticipez les démarches copropriété 3 à 6 mois avant le chantier",
                "Comparez plusieurs devis — les écarts peuvent être très importants",
                "L'IPN apparent (non habillé) est moins coûteux et très tendance actuellement",
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
              { href: '/blog/ouverture-cuisine-salon-paris', title: 'Ouvrir Cuisine sur Salon Paris' },
              { href: '/blog/renovation-appartement-paris-13e', title: 'Rénovation appartement Paris 13e' },
              { href: '/blog/renovation-appartement-paris-15e', title: 'Rénovation appartement Paris 15e' },
              { href: '/blog/renovation-appartement-paris-17e', title: 'Rénovation appartement Paris 17e' },
              { href: '/blog/renovation-immeuble-paris', title: 'Rénovation immeuble Paris' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
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
          Votre projet d&apos;ouverture à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Coordination bureau d&apos;études structure incluse. Devis sous 48h.
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
