import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 1er', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-1er' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 1er : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 1er arrondissement de Paris : Louvre, Châtelet, Les Halles. Artisan local, devis gratuit 48h.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-1er',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation dans le 1er arrondissement de Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dans le 1er arrondissement, les prix de rénovation sont parmi les plus élevés de Paris. Comptez entre 2 000 et 4 500 €/m² selon l\'état du bien et le niveau de finition souhaité. Pour une rénovation complète d\'un appartement haussmannien de 60 m², le budget se situe généralement entre 80 000 et 150 000 €. Les contraintes ABF (Architecte des Bâtiments de France) et la présence fréquente de matériaux anciens (parquet point de Hongrie, moulures, cheminées) peuvent alourdir la facture de 15 à 30 % par rapport à un appartement standard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il une autorisation spéciale pour rénover dans le 1er arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. Le 1er arrondissement est entièrement classé en secteur sauvegardé (Site Patrimonial Remarquable), ce qui implique un avis obligatoire de l\'Architecte des Bâtiments de France (ABF) pour tous les travaux visibles depuis l\'extérieur : ravalement de façade, remplacement de fenêtres, modifications de devantures. Pour les travaux intérieurs (sans impact sur les parties communes ni sur l\'aspect extérieur du bâtiment), une simple déclaration préalable suffit généralement. Il est fortement conseillé de consulter la Mairie du 1er ou un architecte du patrimoine avant d\'engager des travaux.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps prend une rénovation complète dans le 1er arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une rénovation complète d\'un appartement de 50 à 80 m² dans le 1er arrondissement prend en moyenne 3 à 6 mois, hors délais d\'obtention des autorisations administratives (ABF, déclarations préalables). Les délais peuvent s\'allonger de 2 à 4 semaines supplémentaires si des éléments patrimoniaux sont découverts en cours de chantier (peintures anciennes, parquets originaux à restaurer, structures maçonnées). Prévoir également un délai de 4 à 8 semaines pour l\'obtention des autorisations auprès de l\'ABF.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 1er : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 1er arrondissement de Paris : Louvre, Châtelet, Les Halles. Artisan local, devis gratuit 48h.',
}

export default function ArticleRenovationParis1er() {
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
            Paris
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Paris 1er : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Louvre, Châtelet, Les Halles, Palais-Royal — le 1er arrondissement est l&apos;un des plus prestigieux et des plus contraignants de Paris pour engager des travaux. Immeubles haussmanniens classés, secteur sauvegardé, avis ABF obligatoire : guide complet pour rénover dans les règles en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Spécificités du 1er */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les spécificités du 1er arrondissement pour la rénovation
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 1er arrondissement de Paris est l&apos;arrondissement le plus touristique de la capitale. Il abrite le musée du Louvre, le Palais-Royal, la Sainte-Chapelle et les Halles — autant de monuments qui font du secteur un espace patrimonial d&apos;exception, mais aussi l&apos;un des plus réglementés pour les travaux.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Rénover un appartement dans le 1er, c&apos;est composer avec des contraintes administratives strictes, un bâti ancien exigeant des savoir-faire spécifiques, et un marché immobilier haut de gamme qui justifie des finitions irréprochables.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Secteur sauvegardé et avis ABF',
                  detail: 'L\'ensemble du 1er arrondissement est couvert par le Plan de Sauvegarde et de Mise en Valeur (PSMV). Tout travail affectant l\'aspect extérieur d\'un bâtiment (fenêtres, ravalement, toiture) requiert l\'avis favorable de l\'Architecte des Bâtiments de France. Un refus de l\'ABF peut bloquer entièrement un projet de rénovation.',
                },
                {
                  enjeu: 'Immeubles haussmanniens : contraintes et richesses',
                  detail: 'Les immeubles du 1er (IXe – XIXe s.) présentent des planchers en bois porteurs, des moulures en plâtre, des parquets point de Hongrie et des cheminées d\'époque. Leur conservation est souvent imposée par le règlement de copropriété ou par l\'ABF. La restauration de ces éléments nécessite des artisans spécialisés et augmente le coût des travaux.',
                },
                {
                  enjeu: 'Résidences haut de gamme et travaux d\'exception',
                  detail: 'Les appartements du 1er accueillent une clientèle internationale et des résidences secondaires de standing. Les finitions attendues sont à l\'avenant : pierre de taille apparente, enduits à la chaux, menuiseries sur mesure, domotique intégrée. Les prix reflètent ces exigences : 2 000 à 4 500 €/m² pour une rénovation complète.',
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

      {/* Section 2 — Contraintes ABF */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes ABF : ce que vous devez savoir avant de commencer
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;Architecte des Bâtiments de France est l&apos;interlocuteur incontournable de tout projet de rénovation dans le 1er arrondissement. Son avis conforme — c&apos;est-à-dire contraignant — s&apos;impose à l&apos;administration pour les travaux extérieurs. Comprendre son périmètre d&apos;intervention permet d&apos;anticiper les délais et d&apos;éviter les refus.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Remplacement de fenêtres',
                contrainte: 'Modèle, matériau (bois imposé en façade sur rue), couleur et profil doivent être validés par l\'ABF. Le double vitrage est accepté s\'il respecte l\'aspect d\'origine. Délai d\'instruction : 2 à 3 mois.',
                cout: 'Surcoût : +10 – 20 %',
              },
              {
                titre: 'Ravalement de façade',
                contrainte: 'Matériaux et teinte imposés. Toute modification de l\'aspect de la pierre de taille (jointement, badigeon) est soumise à autorisation préfectorale. L\'ABF peut exiger un ravalement à la chaux traditionnelle.',
                cout: 'Surcoût : +15 – 30 %',
              },
              {
                titre: 'Travaux intérieurs',
                contrainte: 'Les travaux intérieurs sans impact extérieur (redistribution de pièces, cuisine, salle de bain) ne nécessitent généralement pas l\'avis ABF. En revanche, la suppression de moulures ou de parquets anciens peut être interdite par le règlement de copropriété.',
                cout: 'Pas de surcoût ABF',
              },
              {
                titre: 'Verrière et modifications de structure',
                contrainte: 'L\'ouverture d\'une verrière en toiture ou la modification de la structure d\'un immeuble classé nécessite un permis de construire avec avis ABF. Délai d\'instruction : 4 à 6 mois. Refus fréquents en secteur sauvegardé.',
                cout: 'Surcoût : +20 – 40 %',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.contrainte}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Types de travaux courants */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux courants dans les appartements du 1er arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les chantiers de rénovation dans le 1er présentent des caractéristiques récurrentes liées à l&apos;âge du bâti (souvent antérieur à 1950) et aux exigences de la clientèle locale. Voici les postes de travaux les plus fréquents.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Restauration des parquets anciens',
                prix: '40 – 90 €/m²',
                detail: 'Ponçage, vitrification ou huilage des parquets point de Hongrie, à chevrons ou bâton rompu d\'époque. La restauration est souvent préférable à la dépose, car ces parquets sont irremplaçables à l\'identique. Un parquet en mauvais état peut nécessiter un rebouchage des lames manquantes par un parqueteur spécialisé.',
              },
              {
                type: 'Restauration des moulures et corniches',
                prix: '120 – 300 €/ml',
                detail: 'Réfection des moulures en staff ou en plâtre : ragréage des parties manquantes, moulage à l\'identique pour les sections très abîmées. Indispensable dans les appartements haussmanniens de prestige dont les corniches sont souvent camouflées sous des faux-plafonds à déposer.',
              },
              {
                type: 'Redistribution des espaces',
                prix: '1 800 – 3 500 €/m²',
                detail: 'Ouverture de cloisons, création d\'une cuisine ouverte, déplacement de salle de bain. Dans les immeubles anciens, les murs porteurs sont fréquents et nécessitent la pose de poutres IPN ou HEA avec calcul de structure par un bureau d\'études. Prévoir 3 000 – 8 000 € pour une ouverture de mur porteur.',
              },
              {
                type: 'Mise aux normes électriques et plomberie',
                prix: '8 000 – 25 000 €',
                detail: 'La majorité des appartements du 1er construits avant les années 1970 présentent des installations électriques obsolètes (aluminium, fusibles, absence de prise de terre). La mise aux normes NF C 15-100 est obligatoire lors d\'une rénovation complète. La plomberie en plomb doit également être remplacée intégralement.',
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

      {/* Section 4 — Budget */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget rénovation appartement Paris 1er : prix au m² 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les tarifs ci-dessous s&apos;entendent main d&apos;œuvre et matériaux inclus, pour des appartements haussmanniens typiques du 1er arrondissement.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture + parquet + sanitaires (sans modification de plan)',
                    prixM2: '600 – 1 000 €',
                  },
                  {
                    niveau: 'Rénovation partielle',
                    prestations: 'Cuisine + SDB + électricité + parquet restauré',
                    prixM2: '1 000 – 2 000 €',
                  },
                  {
                    niveau: 'Rénovation complète',
                    prestations: 'Tout corps d\'état, redistribution légère, finitions haut de gamme',
                    prixM2: '2 000 – 3 500 €',
                  },
                  {
                    niveau: 'Rénovation d\'exception',
                    prestations: 'Restauration patrimoniale, domotique, matériaux nobles, ABF',
                    prixM2: '3 500 – 4 500 €',
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Ce qui fait varier le prix dans le 1er arrondissement
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Présence d\'éléments patrimoniaux à restaurer (parquet, moulures, cheminées)',
                'Contraintes ABF entraînant un surcoût matériaux (fenêtres bois, enduits chaux)',
                'État des installations existantes (électricité plomb, plomberie ancienne)',
                'Accessibilité du chantier (immeubles sans ascenseur, étages élevés)',
                'Présence d\'amiante ou de plomb (diagnostic obligatoire avant 1997)',
                'Niveau de finition souhaité : standard, haut de gamme ou prestige',
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
              { href: '/blog/renovation-appartement-paris-2e', title: 'Rénovation appartement Paris 2e' },
              { href: '/blog/renovation-maison-ancienne-paris', title: 'Rénovation maison ancienne Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
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

      {/* Zones */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos zones d&apos;intervention</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/renovation-paris-2e', label: 'Paris 2e' },
              { href: '/renovation-paris-3e', label: 'Paris 3e' },
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly' },
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
          Votre projet de rénovation dans le 1er arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan expérimenté en bâti ancien et contraintes ABF. Devis gratuit sous 48h.
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
