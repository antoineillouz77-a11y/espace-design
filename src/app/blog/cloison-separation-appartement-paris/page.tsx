import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cloison Séparation Appartement Paris', item: 'https://espacedesignparis.fr/blog/cloison-separation-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cloison Séparation Appartement Paris : types, prix & pose 2025 | Espace Design',
  description: "Créer une cloison séparation dans un appartement parisien : placo, brique, verre, cloison amovible. Prix pose artisan Paris 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/cloison-separation-appartement-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Faut-il une autorisation pour créer une cloison dans un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une cloison non porteuse dans votre appartement, aucune déclaration de travaux n'est nécessaire vis-à-vis de la mairie. En revanche, si votre appartement est en copropriété, il est indispensable de consulter le règlement de copropriété et, selon les cas, d'obtenir l'accord du syndic. Les travaux touchant à la structure de l'immeuble (suppression ou déplacement d'une cloison porteuse) nécessitent toujours l'accord de l'assemblée générale et un bureau d'études structure. Pour les appartements classés ou situés dans un secteur sauvegardé parisien, une déclaration préalable peut être exigée.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix d'une cloison en placo à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'une cloison en placo (plaque de plâtre sur ossature métallique) à Paris se situe entre 60 et 120 € par m² posé, finitions comprises (bandes, enduit, peinture première couche). Pour une cloison phonique double plaque (2 × BA13 + laine de verre), comptez 100 à 180 € par m². Ces prix incluent la main d'oeuvre d'un artisan qualifié et les matériaux. Une cloison de 3 m de long sur 2,50 m de hauteur (7,5 m²) coûte donc entre 450 et 1 350 € selon le type choisi.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment choisir entre une cloison placo et une cloison en carreaux de plâtre ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les deux solutions ont des caractéristiques différentes. La cloison placo (ossature métallique + plaques) est plus légère (30 à 40 kg/m²), plus rapide à poser, facilement démontable, et permet d'intégrer des gaines électriques ou de plomberie dans l'épaisseur. Elle est idéale dans les appartements haussmanniens avec des planchers bois anciens. Les carreaux de plâtre sont plus lourds (80 à 100 kg/m²), plus solides, mieux isolants phoniquement, et ne nécessitent pas d'ossature. Ils sont préférés pour les pièces humides (salle de bain) avec la gamme hydrofuge. À Paris, le placo domine car il est compatible avec les contraintes des immeubles anciens.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps dure la pose d'une cloison dans un appartement ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La durée de pose d'une cloison dépend du type et de la longueur. Une cloison placo standard de 3 à 4 mètres linéaires se pose en 1 journée (ossature + plaques). Les bandes et l'enduit nécessitent ensuite 1 à 2 jours supplémentaires de séchage avant ponçage et finition. Pour une cloison vitrée style atelier avec menuiserie métallique, comptez 2 à 3 jours. Une cloison amovible modulaire s'installe en quelques heures. La peinture finale est possible 48 à 72h après l'enduit. Au total, de la pose à la finition peinture : 3 à 5 jours pour une cloison standard.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Cloison Séparation Appartement Paris : types, prix & pose 2025 | Espace Design",
  description: "Créer une cloison séparation dans un appartement parisien : placo, brique, verre, cloison amovible. Prix pose artisan Paris 2025.",
  keywords: "cloison appartement Paris, séparation pièce Paris, cloison placo Paris, prix cloison Paris",
}

export default function ArticleCloisonSeparation() {
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
            Aménagement
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Cloison Séparation Appartement Paris : types, prix et pose 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Créer ou déplacer une cloison dans un appartement parisien permet de réorganiser entièrement la distribution des pièces : séparer un studio en deux espaces, créer une chambre supplémentaire, isoler un bureau. Placo, carreaux de plâtre, verre, cloison amovible — guide complet des types, contraintes et prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de cloisons */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les 5 types de cloisons pour appartement parisien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Chaque type de cloison répond à des besoins différents : isolation phonique, légèreté, esthétique, réversibilité. Dans un appartement parisien ancien, le choix dépend aussi du plancher (bois ou béton), de la hauteur sous plafond et des contraintes de la copropriété.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Cloison placo standard (BA13 sur ossature métallique)',
                  detail: 'La solution la plus courante à Paris. Plaques de plâtre fixées sur une ossature en acier galvanisé. Légère (30 à 40 kg/m²), adaptée aux planchers bois des immeubles haussmanniens, rapide à poser, facilement perçable pour fixer des étagères ou meubles muraux. Épaisseur totale : 7 à 10 cm. Isolation phonique modérée (30 à 35 dB). Prix : 60 à 100 €/m² posé finitions incluses.',
                },
                {
                  enjeu: 'Cloison double plaque phonique (2 × BA13 + laine de verre)',
                  detail: 'Pour les chambres, bureaux ou pièces nécessitant une bonne isolation acoustique. Double plaque de chaque côté de l\'ossature avec laine de verre ou laine de roche dans l\'épaisseur. Atténuation : 45 à 52 dB. Épaisseur totale : 14 à 16 cm. Idéale pour séparer une chambre à coucher d\'un salon dans un appartement haussmannien ou avant une mise en location meublée. Prix : 100 à 180 €/m² posé.',
                },
                {
                  enjeu: 'Carreaux de plâtre et brique plâtrière',
                  detail: 'Éléments monolithiques empilés et collés. Plus lourds (80 à 100 kg/m²) mais plus solides, meilleure inertie thermique et phonique. Gamme hydrofuge disponible pour salle de bain ou cuisine. Ne nécessitent pas d\'ossature métallique. Très populaires dans les appartements parisiens de standing pour leur robustesse et leur aspect massif. Prix : 90 à 160 €/m² posé.',
                },
                {
                  enjeu: 'Cloison vitrée style atelier (menuiserie acier ou aluminium)',
                  detail: 'Très tendance à Paris pour les appartements haussmanniens et les lofts. Séparation transparente qui conserve la luminosité tout en délimitant deux espaces. Profilés noirs style atelier avec vitrages fixes ou ouvrants. Effet architectural fort. Peut être combinée avec des parties opaques. Hauteur sous plafond complète recommandée. Prix : 400 à 900 €/m² posé selon le type de menuiserie et le vitrage.',
                },
                {
                  enjeu: 'Cloison amovible et modulaire',
                  detail: 'Panneaux démontables fixés au sol et au plafond, sans travaux lourds. Idéale pour les locataires ou les propriétaires souhaitant une solution réversible : séparer temporairement un espace de travail dans un salon, créer une chambre provisoire dans un grand appartement. Isolation phonique faible (20 à 30 dB). Prix : 150 à 350 €/m² selon le système choisi. Installation en quelques heures.',
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

      {/* Section 2 — Contraintes appartement parisien */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes spécifiques aux appartements parisiens
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Créer une cloison à Paris ne se limite pas au choix du matériau. Les immeubles parisiens — majoritairement anciens — imposent des vérifications techniques avant tout chantier.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Identifier les cloisons porteuses',
                solution: 'Avant tout travaux, un artisan expérimenté doit identifier les cloisons structurelles (porteuses) à ne surtout pas toucher sans étude béton armé. Dans les immeubles haussmanniens, les refends en pierre ou brique épais (20 cm et plus) sont souvent porteurs. Toute suppression ou percement d\'une cloison porteuse nécessite un bureau d\'études structure et un permis de construire.',
                cout: 'Diagnostic gratuit',
              },
              {
                titre: 'Planchers bois : charge admissible',
                solution: 'Les planchers bois des immeubles parisiens du XIXe siècle ont une charge admissible limitée (150 à 300 kg/m²). Les cloisons en carreaux de plâtre ou en brique (80 à 100 kg/m²) peuvent être trop lourdes selon l\'état du plancher. Préférer le placo (30 à 40 kg/m²) dans les étages supérieurs ou après diagnostic de la structure.',
                cout: 'Vérification préalable',
              },
              {
                titre: 'Règlement de copropriété',
                solution: 'Certains règlements de copropriété parisiens interdisent ou encadrent les travaux de cloisonnement qui modifient la distribution intérieure. Une lecture préalable du règlement et une déclaration au syndic sont recommandées pour tout cloisonnement impactant la surface habitable ou le nombre de pièces (cas d\'une vente ultérieure).',
                cout: 'Démarche gratuite',
              },
              {
                titre: 'Hauteur sous plafond et moulures',
                solution: 'Les appartements haussmanniens affichent des hauteurs sous plafond de 2,80 m à 3,50 m, parfois avec des moulures ou corniches en stuc. La cloison doit être intégrée sans détruire les ornements existants. Des solutions adaptées (ossature décalée, baguette de raccord) permettent de préserver l\'esthétique du plafond tout en installant la séparation.',
                cout: 'Sur mesure',
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

      {/* Section 3 — Prix selon type et longueur */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix d&apos;une cloison à Paris : tableau récapitulatif 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un appartement parisien, main d&apos;œuvre et matériaux inclus, finitions comprises (bandes, enduit, peinture première couche). Hors démolition d&apos;une cloison existante.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de cloison</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Cloison 3 m × 2,50 m</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Délai pose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: 'Placo standard (BA13)',
                    unite: '60 – 100 €',
                    budget: '450 – 750 €',
                    duree: '1 à 2 jours',
                  },
                  {
                    type: 'Placo double phonique',
                    unite: '100 – 180 €',
                    budget: '750 – 1 350 €',
                    duree: '1 à 2 jours',
                  },
                  {
                    type: 'Carreaux de plâtre',
                    unite: '90 – 160 €',
                    budget: '675 – 1 200 €',
                    duree: '1 à 2 jours',
                  },
                  {
                    type: 'Cloison vitrée atelier',
                    unite: '400 – 900 €',
                    budget: '3 000 – 6 750 €',
                    duree: '2 à 3 jours',
                  },
                  {
                    type: 'Cloison amovible modulaire',
                    unite: '150 – 350 €',
                    budget: '1 125 – 2 625 €',
                    duree: 'Quelques heures',
                  },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.unite}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.budget}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Ce qu&apos;il faut anticiper avant le chantier
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Vérifier systématiquement si la cloison à créer ou supprimer est porteuse avant tout devis',
                'Consulter le règlement de copropriété pour les travaux modifiant la distribution des pièces',
                'Prévoir le passage des gaines électriques et de plomberie dans l\'épaisseur de la cloison dès la conception',
                'Adapter le type de cloison à la charge admissible du plancher (bois ancien = placo préféré)',
                'Prévoir la reprise du sol (parquet, carrelage) après création ou suppression d\'une cloison',
                'Ne jamais supprimer une cloison sans diagnostic structure préalable dans un immeuble ancien',
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
              { href: '/blog/creation-cloison-separation-paris', title: 'Création cloison et séparation Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/ouverture-cuisine-salon-paris', title: 'Ouverture cuisine salon Paris' },
              { href: '/blog/mur-porteur-paris', title: 'Mur porteur Paris' },
              { href: '/blog/creation-verriere-interieure-paris', title: 'Création verrière intérieure Paris' },
              { href: '/blog/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
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
          Créez votre cloison sur mesure à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Conseils sur le type de cloison adapté. Devis détaillé sous 48h.
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
