import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 11e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-11e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 11e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 11e arrondissement de Paris : Bastille, Oberkampf, Nation. Artisan local, devis 48h.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-11e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix au m² pour rénover un appartement dans le 11e arrondissement de Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix de rénovation dans le 11e arrondissement varie entre 1 600 et 3 200 €/m² selon le niveau de prestations. Une rénovation partielle (peinture, sol, salle de bain) oscille entre 1 600 et 2 200 €/m², tandis qu\'une rénovation complète avec cuisine, électricité, plomberie et menuiserie atteint 2 500 à 3 200 €/m². Les immeubles haussmanniens impliquent souvent des surcoûts liés à la hauteur sous plafond et aux moulures à restaurer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Les immeubles du 11e arrondissement ont-ils des contraintes de rénovation particulières ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le 11e arrondissement concentre plusieurs typologies architecturales. Les immeubles haussmanniens (fin XIXe - début XXe) imposent souvent la conservation des moulures, parquets massifs et menuiseries d\'origine. Les anciens ateliers d\'artisans reconvertis en lofts permettent davantage de liberté architecturale mais requièrent un traitement spécifique de l\'isolation thermique et phonique. Dans tous les cas, une déclaration préalable de travaux est requise pour les modifications de façade ou ouvertures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure une rénovation complète dans le 11e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La durée d\'une rénovation complète dans le 11e arrondissement dépend de la surface et de l\'ampleur des travaux. Pour un appartement de 50 m², comptez 6 à 10 semaines. Pour 80 m² avec changement complet des réseaux (électricité, plomberie), 10 à 16 semaines. Les délais peuvent s\'allonger dans les copropriétés où certains travaux nécessitent l\'accord du syndic (modification de la distribution, travaux en parties communes).',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il vider l\'appartement pendant les travaux de rénovation dans le 11e ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour une rénovation complète (électricité, plomberie, cuisine, salle de bain, sols), il est fortement recommandé de quitter le logement pendant la durée des travaux. La poussière, les coupures de réseaux et la nécessité pour les artisans d\'accéder librement à toutes les pièces rendent le maintien en place difficile. Pour une rénovation partielle (peinture, sol d\'une pièce, salle de bain seule), une cohabitation peut être organisée en planifiant les interventions pièce par pièce.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 11e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 11e arrondissement de Paris : Bastille, Oberkampf, Nation. Artisan local, devis 48h.',
}

export default function ArticleRenovationParis11() {
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
            Rénovation Appartement Paris 11e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Bastille, Oberkampf, Nation, Père-Lachaise : le 11e arrondissement est l&apos;un des plus vivants de Paris, prisé pour ses immeubles haussmanniens, ses anciens ateliers d&apos;artisans reconvertis en lofts et sa vie de quartier unique. Espace Design intervient dans tout le 11e pour des rénovations d&apos;appartements de A à Z, avec devis sous 48h.
          </p>
        </div>
      </section>

      {/* Section 1 — Quartiers */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les quartiers du 11e et leurs spécificités architecturales
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 11e arrondissement est l&apos;un des plus denses de Paris, avec une architecture variée qui détermine directement la nature des travaux à entreprendre. Chaque quartier a ses particularités que nos artisans maîtrisent parfaitement.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Bastille - Oberkampf : le coeur bobo du 11e',
                  detail: 'Secteur le plus prisé du 11e, entre la place de la Bastille et la rue Oberkampf. Les immeubles haussmanniens des années 1880-1910 dominent, avec parquets point de Hongrie, moulures au plafond et hauteur sous plafond de 2,80 à 3,20 m. La rénovation met l\'accent sur la préservation du cachet historique tout en modernisant cuisine, salle de bain et réseaux.',
                },
                {
                  enjeu: 'Père-Lachaise - Nation : immeubles 1900 et grands appartements',
                  detail: 'La partie est du 11e, autour du cimetière du Père-Lachaise et de la place de la Nation, concentre de beaux immeubles 1900 avec de grands appartements familiaux. Les rénovations portent souvent sur la réorganisation de la distribution (suppression de cloisons, création d\'une cuisine ouverte) et la mise aux normes complète de l\'électricité.',
                },
                {
                  enjeu: 'Anciens ateliers d\'artisans : lofts et espaces atypiques',
                  detail: 'Le 11e compte de nombreux anciens ateliers de menuisiers, ébénistes ou imprimeurs reconvertis en habitations. Ces lofts offrent des volumes spectaculaires (hauteur 4 à 6 m, verrières, poutres apparentes) mais impliquent des enjeux d\'isolation thermique et acoustique spécifiques. Un artisan expérimenté est indispensable pour traiter ces typologies atypiques.',
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

      {/* Section 2 — Types de rénovation */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Types de rénovation les plus courants dans le 11e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Que vous soyez propriétaire d&apos;un studio haussmannien ou d&apos;un grand appartement familial, les besoins de rénovation dans le 11e suivent des schémas récurrents que nos artisans traitent quotidiennement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Rénovation cuisine ouverte',
                solution: 'Dans les appartements haussmanniens du 11e, la cuisine est souvent reléguée en fond de couloir. La tendance est à l\'ouverture sur le séjour : suppression de la cloison, création d\'un îlot ou d\'un comptoir, mise aux normes électricité et ventilation. Vérification préalable obligatoire du caractère porteur ou non de la cloison.',
                cout: '8 000 – 20 000 €',
              },
              {
                titre: 'Rénovation salle de bain',
                solution: 'Les appartements anciens du 11e ont souvent des salles de bain étroites avec carrelage vieillissant. Travaux courants : remplacement baignoire par douche italienne, reconfiguration des sanitaires, mise aux normes VMC, nouveau carrelage et meuble vasque suspendu.',
                cout: '6 000 – 18 000 €',
              },
              {
                titre: 'Mise aux normes électricité',
                solution: 'De nombreux appartements du 11e construits avant 1950 ont une installation électrique obsolète (anciens fusibles, absence de prise de terre, tableau non conforme). La mise aux normes complète est indispensable avant toute revente et pour la sécurité des occupants.',
                cout: '3 000 – 8 000 €',
              },
              {
                titre: 'Réfection des sols',
                solution: 'Parquet point de Hongrie à restaurer, carrelage ancien à remplacer ou moquette à supprimer : les sols sont souvent le premier chantier prioritaire. Ponçage et vitrification du parquet existant, ou pose d\'un nouveau parquet massif ou contrecollé selon le budget.',
                cout: '60 – 200 €/m²',
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

      {/* Section 3 — Immeubles haussmanniens */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénover un appartement haussmannien dans le 11e : les règles à connaître
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les immeubles haussmanniens du 11e arrondissement datent pour la plupart de 1870 à 1910. Leur rénovation obéit à des règles spécifiques pour préserver le patrimoine tout en répondant aux exigences de confort contemporain.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Conservation des éléments patrimoniaux',
                prix: 'Inclus dans le devis',
                detail: 'Moulures au plafond, parquet point de Hongrie, cheminées décoractives, portes à double vantaux : ces éléments constituent la valeur patrimoniale de l\'appartement et doivent être préservés ou restaurés. La restauration d\'une cheminée en marbre coûte entre 800 et 2 500 € ; la réfection des moulures en plâtre, 50 à 120 €/ml.',
              },
              {
                type: 'Isolation sans dénaturer la hauteur sous plafond',
                prix: '40 – 90 €/m²',
                detail: 'La hauteur sous plafond (2,80 à 3,20 m) est un atout majeur des haussmanniens. L\'isolation thermique par l\'intérieur doit être réalisée avec des matériaux minces (panneaux PIR, enduit isolant) pour ne pas perdre plus de 2 à 4 cm de hauteur. Le recours à l\'isolation extérieure est souvent bloqué par le règlement de copropriété.',
              },
              {
                type: 'Mise aux normes des installations',
                prix: '4 000 – 10 000 €',
                detail: 'Électricité, plomberie en plomb (à remplacer obligatoirement avant 2025 dans les logements locatifs), chaudière ancienne : la rénovation d\'un appartement haussmannien inclut presque toujours une mise à niveau des réseaux. Cette phase est à anticiper car elle précède tous les autres travaux de finition.',
              },
              {
                type: 'Autorisations copropriété et mairie',
                prix: 'Sans objet (démarches)',
                detail: 'Dans les copropriétés du 11e, toute modification de la structure (mur porteur, plancher, façade) nécessite l\'accord de l\'assemblée générale. Une déclaration préalable de travaux est obligatoire pour les modifications de façade ou de baies vitrées. Notre équipe vous accompagne dans ces démarches administratives.',
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
            Prix rénovation appartement Paris 11e : tableau récapitulatif 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent main d&apos;œuvre et matériaux inclus, pour des appartements du 11e arrondissement de Paris.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total 50 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture, sol, petites réparations',
                    prixM2: '400 – 700 €',
                    total: '20 000 – 35 000 €',
                  },
                  {
                    niveau: 'Rénovation partielle',
                    prestations: 'Cuisine ou SDB + peinture + sol',
                    prixM2: '800 – 1 400 €',
                    total: '40 000 – 70 000 €',
                  },
                  {
                    niveau: 'Rénovation complète',
                    prestations: 'Cuisine + SDB + électricité + plomberie + sols + peinture',
                    prixM2: '1 600 – 2 500 €',
                    total: '80 000 – 125 000 €',
                  },
                  {
                    niveau: 'Rénovation haut de gamme',
                    prestations: 'Tout compris + menuiserie sur mesure + matériaux premium + restauration',
                    prixM2: '2 500 – 3 200 €',
                    total: '125 000 – 160 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Ce qui fait varier le prix dans le 11e arrondissement
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Étage et présence d\'un ascenseur : facteur de difficulté pour la livraison des matériaux',
                'Immeuble haussmannien vs moderne : contraintes de préservation du patrimoine',
                'Présence de murs porteurs : conditionne la possibilité d\'ouvrir des espaces',
                'État des réseaux existants (électricité, plomberie) : souvent à refaire dans les immeubles anciens',
                'Niveau de finition souhaité : matériaux standard vs premium (carrelage, parquet, robinetterie)',
                'Délai d\'intervention : urgence possible mais majorée de 15 à 20 %',
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
              { href: '/blog/renovation-appartement-paris-14e', title: 'Rénovation appartement Paris 14e' },
              { href: '/blog/renovation-appartement-paris-18e', title: 'Rénovation appartement Paris 18e' },
              { href: '/blog/prix-renovation-salle-de-bain-paris', title: 'Prix rénovation salle de bain Paris' },
              { href: '/blog/devis-travaux-renovation-paris', title: 'Devis travaux rénovation Paris' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
              { href: '/renovation-paris', title: 'Rénovation appartement Paris' },
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
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
              { href: '/renovation-paris-13e', label: 'Paris 13e' },
              { href: '/renovation-paris-14e', label: 'Paris 14e' },
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
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
          Rénover votre appartement dans le 11e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit sur place. Devis détaillé sous 48h. Artisan local spécialiste des appartements parisiens.
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
