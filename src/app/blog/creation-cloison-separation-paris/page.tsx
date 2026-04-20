import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Créer une Cloison de Séparation Paris', item: 'https://espacedesignparis.fr/blog/creation-cloison-separation-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Créer une Cloison de Séparation Paris : pose, isolation & prix 2025 | Espace Design',
  description: 'Créer une cloison pour séparer deux espaces à Paris : cloison placo, vitrage, coulissante. Prix et démarches artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/creation-cloison-separation-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Faut-il une déclaration de travaux pour créer une cloison dans un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non, la création d\'une cloison non porteuse dans un appartement ne nécessite ni permis de construire ni déclaration préalable de travaux. Cette opération relève des travaux intérieurs courants. En revanche, si vous êtes en copropriété, vérifiez votre règlement de copropriété : certains immeubles imposent une déclaration auprès du syndic avant tout travaux susceptibles d\'affecter la structure ou les parties communes (gaines techniques, colonnes montantes). Si vous envisagez d\'abattre un mur porteur pour agrandir ou reconfigurer un espace, un permis de construire ou une déclaration préalable peut être requis selon la surface concernée.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre une cloison placo et une cloison vitrée (verrière) ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La cloison en plaques de plâtre (placo BA13) est opaque, offre une isolation phonique et thermique, et peut être peinte ou carrelée. Elle est plus économique (50 à 80 €/m²) et s\'adapte à tous les usages (chambre, bureau, couloir). La cloison vitrée ou verrière d\'intérieur est translucide ou transparente : elle permet de séparer deux espaces tout en conservant la lumière naturelle. C\'est une solution très prisée dans les appartements parisiens sombres (lofts, rez-de-chaussée) pour cloisonner sans bloquer la lumière. Elle coûte entre 150 et 350 €/m² selon le vitrage et la structure (acier, aluminium, bois).',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment améliorer l\'isolation phonique d\'une cloison placo à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour optimiser l\'isolation phonique d\'une cloison placo dans un appartement parisien, plusieurs solutions peuvent être combinées : utiliser des plaques de plâtre haute densité (12,5 ou 18 mm) sur les deux faces, intégrer de la laine de roche dans la cavité de l\'ossature (gain de 10 à 15 dB supplémentaires), doubler les plaques (2 couches de chaque côté) pour atteindre un affaiblissement acoustique de 50 dB, et désolidariser l\'ossature du sol et du plafond avec des bandes résilientes pour éviter la transmission des vibrations. Une cloison double ossature avec deux parois indépendantes est la solution la plus performante mais aussi la plus coûteuse (90 à 150 €/m²).',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Créer une Cloison de Séparation Paris : pose, isolation & prix 2025 | Espace Design',
  description: 'Créer une cloison pour séparer deux espaces à Paris : cloison placo, vitrage, coulissante. Prix et démarches artisan 2025.',
}

export default function ArticleCreationCloisonSeparationParis() {
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
            Plâtrerie
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Créer une Cloison de Séparation Paris : pose, isolation & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Séparer un grand séjour en deux pièces, créer un bureau dans un open-space, isoler une chambre d&apos;enfant : la création de cloison est l&apos;une des interventions les plus courantes dans les appartements parisiens. Placo, verrière, coulissante — guide complet 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de cloisons */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibond text-[#1C1C1C] mb-4">
              Types de cloisons : placo, vitrée, coulissante et verrière d&apos;intérieur
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le choix du type de cloison dépend de l&apos;usage souhaité (isoler une chambre, délimiter un espace bureau, créer une entrée), de la luminosité du logement, et du budget disponible. Dans les appartements parisiens où la lumière naturelle est parfois rare, la cloison vitrée ou la verrière d&apos;intérieur s&apos;impose souvent comme la solution optimale.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Aucune de ces cloisons n&apos;est un mur porteur : elles peuvent être créées ou supprimées sans modification de la structure de l&apos;immeuble. Seule une cloison placo avec ossature métallique ancrée dans le plancher et le plafond peut présenter une légère contrainte en copropriété (vibrations transmises).
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Cloison placo BA13 (plaque de plâtre)',
                  detail: 'La solution la plus courante et la plus économique. L\'ossature métallique (montants et rails) est fixée au sol et au plafond, les plaques de plâtre sont vissées de chaque côté, et la cavité est comblée par de la laine de roche ou de verre pour l\'isolation phonique. La cloison peut intégrer une porte, être peinte, enduite ou carrelée. Épaisseur totale : 10 à 15 cm.',
                },
                {
                  enjeu: 'Cloison vitrée et verrière d\'intérieur',
                  detail: 'Structure en acier noir ou aluminium avec vitrage simple ou double. La verrière d\'intérieur (style atelier parisien) s\'intègre parfaitement dans les appartements haussmanniens et les lofts. Elle permet de séparer cuisine et séjour, ou chambre et dressing, tout en conservant la lumière naturelle. Le vitrage peut être transparent, translucide ou teinté.',
                },
                {
                  enjeu: 'Cloison coulissante (à galandage ou rail apparent)',
                  detail: 'La porte coulissante à galandage s\'escamote entièrement dans l\'épaisseur de la cloison : idéale dans les petits appartements parisiens où chaque centimètre compte. La version à rail apparent est moins coûteuse et plus facile à poser, mais exige 30 à 40 cm de mur libre en débord de la baie. Les deux systèmes peuvent combiner placo et vitrage.',
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

      {/* Section 2 — Isolation phonique */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Isolation phonique d&apos;une cloison : solutions et performances
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Une cloison placo simple sans isolation phonique n&apos;offre qu&apos;une atténuation modeste des bruits (environ 35 dB). Pour créer une vraie chambre ou un bureau silencieux dans un appartement parisien, des techniques d&apos;isolation complémentaires sont indispensables.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Laine de roche en cavité',
                solution: 'Intégration de laine de roche haute densité (45 ou 60 mm) dans l\'espace entre les deux parois de placo. Gain d\'environ 10 à 15 dB supplémentaires par rapport à une cloison vide. Solution standard recommandée pour toute séparation chambre/séjour.',
                cout: '+5 – 15 €/m²',
              },
              {
                titre: 'Double plaque (2 × BA13)',
                solution: 'Poser deux plaques de plâtre de chaque côté de l\'ossature multiplie la masse de la cloison et améliore l\'isolation des bruits aériens. Efficace et relativement simple à mettre en oeuvre. Gain de 5 à 8 dB supplémentaires. Épaisseur totale : 15 à 18 cm.',
                cout: '+10 – 20 €/m²',
              },
              {
                titre: 'Bandes résilientes (désolidarisation)',
                solution: 'Interposer des bandes résilientes entre l\'ossature et le sol / plafond pour couper la transmission des vibrations mécaniques. Indispensable si la cloison est mitoyenne d\'une zone avec activité physique (gym, chambre d\'enfant). Améliore l\'isolation aux bruits d\'impact.',
                cout: '+8 – 15 €/m²',
              },
              {
                titre: 'Cloison double ossature',
                solution: 'Deux ossatures indépendantes côte à côte avec laine de roche dans chaque cavité. La solution la plus performante (affaiblissement supérieur à 50 dB) mais aussi la plus épaisse (20 à 25 cm) et la plus coûteuse. Recommandée pour les studios transformés en chambre ou les pièces de musique.',
                cout: '90 – 150 €/m²',
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

      {/* Section 3 — Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de création d&apos;une cloison à Paris : tarifs 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent main d&apos;oeuvre et matériaux inclus, finition enduit prêt à peindre (hors peinture). La pose d&apos;une porte ou d&apos;un vitrage est facturée en supplément.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de cloison</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: 'Placo BA13 simple (sans isolation)',
                    prix: '50 – 70 €/m²',
                    duree: '1 – 2 jours',
                  },
                  {
                    type: 'Placo BA13 avec laine de roche',
                    prix: '70 – 90 €/m²',
                    duree: '1 – 2 jours',
                  },
                  {
                    type: 'Placo double plaque + isolation renforcée',
                    prix: '90 – 130 €/m²',
                    duree: '2 – 3 jours',
                  },
                  {
                    type: 'Verrière d\'intérieur (acier + vitrage)',
                    prix: '150 – 350 €/m²',
                    duree: '2 – 4 jours',
                  },
                  {
                    type: 'Cloison coulissante à galandage',
                    prix: '120 – 220 €/m²',
                    duree: '2 – 3 jours',
                  },
                  {
                    type: 'Intégration d\'une porte (bâti + menuiserie)',
                    prix: '400 – 1 200 € forfait',
                    duree: 'Inclus dans chantier',
                  },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points à vérifier avant de créer une cloison à Paris
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'S\'assurer que la cloison est non porteuse — en cas de doute, faire vérifier par un professionnel',
                'Vérifier la présence de gaines techniques (électricité, plomberie) dans le mur ou le sol à l\'emplacement prévu',
                'Prévoir le passage des câbles électriques dans la cloison avant de fermer les plaques',
                'En copropriété, informer le syndic si les travaux touchent les parties communes ou gaines verticales',
                'Intégrer la finition (enduit, peinture, carrelage) dans le budget global dès le départ',
                'Anticiper l\'impact sur la ventilation de la pièce créée — une fenêtre ou une grille de ventilation peut être nécessaire',
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
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
              { href: '/blog/travaux-electricite-appartement-paris', title: 'Électricité appartement Paris' },
              { href: '/blog/renovation-salle-de-bain-prix-paris', title: 'Prix rénovation salle de bain Paris' },
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
          Créez votre cloison avec un artisan parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Visite gratuite. Devis détaillé sous 48h. Plâtrier-peintre qualifié à Paris et Île-de-France.
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
