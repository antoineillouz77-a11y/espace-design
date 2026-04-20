import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Prix Rénovation Salle de Bain Paris', item: 'https://espacedesignparis.fr/blog/prix-renovation-salle-de-bain-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Prix Rénovation Salle de Bain Paris : tarifs détaillés 2025 | Espace Design',
  description: 'Prix rénovation salle de bain à Paris : petite surface 3m², carrelage mural, meuble vasque, douche italienne. Tarifs artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/prix-renovation-salle-de-bain-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix moyen d\'une rénovation de salle de bain à Paris en 2025 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix moyen d\'une rénovation de salle de bain à Paris se situe entre 3 000 et 15 000 € selon la surface et le niveau de finition. Pour une petite salle de bain de 3 m² avec douche italienne, meuble vasque et WC suspendu en finition standard, comptez 5 000 à 8 000 €. Une salle de bain de 6 à 8 m² en finition intermédiaire revient à 8 000 – 15 000 €. Les finitions premium (carrelage grès cérame grand format, robinetterie haut de gamme, baignoire îlot) font monter la facture à 15 000 – 30 000 € pour une grande salle de bain.',
      },
    },
    {
      '@type': 'Question',
      name: 'Douche italienne ou baignoire : que choisir pour une salle de bain à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dans les petits appartements parisiens (moins de 6 m² de salle de bain), la douche italienne est presque toujours préférable : elle optimise l\'espace, facilite l\'entretien et répond aux attentes des locataires et acheteurs actuels. La baignoire reste pertinente pour les familles avec enfants et pour les grandes salles de bain (plus de 8 m²) dans des appartements familiaux. Le coût d\'une douche italienne est supérieur à celui d\'une douche bac (receveur à encastrer dans la chape : 300 à 800 € de plus) mais le résultat esthétique et fonctionnel est nettement supérieur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte le carrelage d\'une salle de bain à Paris, pose comprise ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix du carrelage pose comprise dans une salle de bain à Paris varie entre 60 et 200 €/m² selon le matériau et le format. Carrelage standard (20x20 ou 30x60, grès cérame) : 60 à 90 €/m². Carrelage intermédiaire (grand format 60x120, effet marbre) : 90 à 140 €/m². Carrelage premium (grand format 120x120, grès cérame pleine masse ou véritable marbre) : 140 à 200 €/m² et plus. Pour une salle de bain de 5 m², comptez entre 1 200 et 4 000 € pour l\'ensemble sol + murs (environ 20 m² à poser).',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure une rénovation de salle de bain à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une rénovation complète de salle de bain à Paris dure entre 2 et 4 semaines selon la surface et la complexité. Phase 1 (démolition et gros oeuvre) : 2 à 3 jours. Phase 2 (plomberie et électricité) : 2 à 4 jours. Phase 3 (chape et étanchéité pour douche italienne) : 3 à 5 jours avec séchage. Phase 4 (carrelage) : 3 à 5 jours. Phase 5 (pose des équipements, finitions, peinture) : 2 à 3 jours. Au total : 12 à 20 jours ouvrés. La salle de bain est inutilisable pendant toute la durée du chantier.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Prix Rénovation Salle de Bain Paris : tarifs détaillés 2025 | Espace Design',
  description: 'Prix rénovation salle de bain à Paris : petite surface 3m², carrelage mural, meuble vasque, douche italienne. Tarifs artisan 2025.',
}

export default function ArticlePrixSalleDeBain() {
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
            Prix Rénovation Salle de Bain Paris : tarifs détaillés 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La salle de bain est la pièce où le rapport qualité-prix est le plus scruté. À Paris, les contraintes de surface, les réseaux à déplacer et le choix des matériaux font varier les budgets du simple au triple. Ce guide détaille poste par poste les prix pratiqués par les artisans parisiens en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Tableau des niveaux */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Tableau des prix : 3 niveaux de rénovation salle de bain à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix incluent la main d&apos;œuvre, les matériaux et la gestion du chantier. Ils s&apos;entendent pour une salle de bain de 4 à 6 m² à Paris, hors désamiantage ou traitement du plomb si nécessaire.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Equipements</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Matériaux</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Basique',
                    equipements: 'Douche bac + meuble vasque + WC',
                    materiaux: 'Carrelage 30x60 standard, robinetterie entrée de gamme',
                    total: '3 000 – 8 000 €',
                  },
                  {
                    niveau: 'Intermédiaire',
                    equipements: 'Douche italienne + meuble suspendu + WC suspendu + VMC',
                    materiaux: 'Carrelage 60x120 effet béton ou pierre, robinetterie Hansgrohe / Grohe',
                    total: '8 000 – 15 000 €',
                  },
                  {
                    niveau: 'Premium',
                    equipements: 'Douche italienne XL ou baignoire îlot + double vasque + WC japonais',
                    materiaux: 'Grès cérame grand format, marbre véritable, robinetterie design haut de gamme',
                    total: '15 000 – 30 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.equipements}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.materiaux}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4">
            {[
              {
                enjeu: 'Rénovation basique (3 000 – 8 000 €)',
                detail: 'Solution pour les petites surfaces (3 à 4 m²) ou les budgets contraints. Remplacement des équipements à l\'identique, carrelage standard, peinture spéciale humidité. La plomberie et l\'électricité sont maintenues en place. Idéal pour un appartement locatif avec un budget de rafraîchissement limité.',
              },
              {
                enjeu: 'Rénovation intermédiaire (8 000 – 15 000 €)',
                detail: 'Le niveau le plus demandé à Paris. Tout est remplacé : douche italienne encastrée, meuble vasque suspendu avec miroir LED, WC suspendu (gain de place et facilité d\'entretien), carrelage grand format 60x120, VMC hygroréglable. La plomberie peut être légèrement déplacée. C\'est le rapport qualité-prix optimal pour un appartement de ville.',
              },
              {
                enjeu: 'Rénovation premium (15 000 – 30 000 €)',
                detail: 'Pour les appartements haut de gamme ou les grandes surfaces (plus de 7 m²). Baignoire îlot, douche à l\'italienne XL avec pommeau de pluie encastré au plafond, double vasque sur plan de travail marbre, WC japonais, chauffage radiant ou sèche-serviettes design, carrelage en marbre véritable. Matériaux importés sur mesure et délais plus longs (4 à 6 semaines).',
              },
            ].map((el) => (
              <div key={el.enjeu} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.enjeu}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Détail par poste */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix par poste : ce que coûte chaque prestation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Comprendre la décomposition du prix d&apos;une rénovation de salle de bain permet de mieux prioriser et d&apos;arbitrer entre les différents postes selon votre budget.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Carrelage sol et murs (pose + matériaux)',
                solution: 'Carrelage standard 30x60 : 60 – 90 €/m². Carrelage intermédiaire grand format 60x120 : 90 – 140 €/m². Marbre véritable ou grès pleine masse : 140 – 200 €/m². Pour une SDB de 5 m² (environ 20 m² à poser) : 1 200 à 4 000 €. La douche italienne nécessite une étanchéité sous carrelage (150 – 350 € supplémentaires).',
                cout: '60 – 200 €/m²',
              },
              {
                titre: 'Plomberie (déplacement et remplacement)',
                solution: 'Maintien de la plomberie en place avec remplacement des équipements : 800 – 1 500 €. Déplacement mineur (douche décalée de 30 cm) : 1 500 – 3 000 €. Reconfiguration complète avec déplacement de WC : 3 000 – 6 000 €. Remplacement des canalisations en plomb (obligatoire) : 2 000 – 5 000 €.',
                cout: '800 – 6 000 €',
              },
              {
                titre: 'Électricité et VMC',
                solution: 'Mise aux normes électricité salle de bain (zones de sécurité 0, 1, 2, hors zones) : 800 – 2 000 €. Pose VMC simple flux hygroréglable : 400 – 800 €. Pose VMC double flux (grande SDB ou SDB sans fenêtre) : 800 – 1 500 €. Éclairage encastré LED : 150 – 400 € selon nombre de spots.',
                cout: '800 – 2 500 €',
              },
              {
                titre: 'Équipements sanitaires',
                solution: 'Meuble vasque suspendu entrée de gamme : 300 – 600 €. Meuble vasque suspendu milieu de gamme : 600 – 1 500 €. WC suspendu avec bâti-support : 500 – 1 200 €. Douche bac : 200 – 500 €. Douche italienne (receveur + bonde + paroi) : 600 – 2 500 €. Baignoire standard : 400 – 1 000 €. Baignoire îlot : 1 500 – 6 000 €.',
                cout: '1 500 – 10 000 €',
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

      {/* Section 3 — Douche italienne vs baignoire */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Douche italienne vs baignoire : quel choix pour une salle de bain parisienne ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix entre douche italienne et baignoire conditionne la répartition du budget et l&apos;usage quotidien de la salle de bain. Voici une comparaison objective pour vous aider à trancher.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Douche italienne : le choix des appartements parisiens',
                prix: '1 200 – 4 000 € (receveur + étanchéité + bonde + paroi ou verre)',
                detail: 'La douche italienne (douche à l\'italienne ou douche de plain-pied) est le standard actuel pour les appartements parisiens. Avantages : gain d\'espace (pas de receveur haut), accessibilité PMR, facilité d\'entretien, esthétique contemporaine. Contrainte principale : nécessite de rebaisser le niveau du sol (création d\'une chape) pour encastrer la bonde, ce qui augmente les coûts et les délais. Ne convient pas si le plancher est trop mince (vérification préalable obligatoire).',
              },
              {
                type: 'Baignoire : pertinente pour les familles et les grandes surfaces',
                prix: '800 – 8 000 € selon le modèle',
                detail: 'La baignoire reste le choix des familles avec enfants en bas âge et des amateurs de bains relaxants. Dans une grande salle de bain (plus de 7 m²), baignoire + douche séparée est la configuration idéale. La baignoire îlot offre un impact esthétique fort pour les rénovations haut de gamme. Inconvénient en appartement parisien : encombrement important (minimum 1,70 x 0,75 m) qui peut rendre la pièce étriquée dans les petites surfaces.',
              },
              {
                type: 'Douche bac receveur : l\'option économique',
                prix: '400 – 1 500 €',
                detail: 'Le receveur de douche à poser (bac acrylique ou résine) est la solution la moins coûteuse et la plus rapide à installer. Il ne nécessite pas de chape ni d\'étanchéité spéciale. Adapté aux budgets serrés ou aux rénovations locatives où l\'enjeu est la fonctionnalité plus que l\'esthétique. Les modèles extra-plats (4 cm) offrent un compromis intéressant entre aspect douche italienne et simplicité de pose.',
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

      {/* Section 4 — Checklist */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Conseils pour optimiser son budget salle de bain à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Six principes à retenir pour obtenir le meilleur rapport qualité-prix sur votre rénovation de salle de bain.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              'Maintenir la plomberie en place autant que possible : chaque déplacement de point d\'eau coûte 500 à 1 500 €',
              'Choisir un carrelage en phase avec votre budget global : le carrelage représente 25 à 40 % du coût total',
              'Investir dans une VMC performante : l\'humidité est l\'ennemi des salles de bain parisiennes peu ventilées',
              'Opter pour un WC suspendu : gain de place, facilité de nettoyage, valorise l\'appartement',
              'Vérifier la faisabilité de la douche italienne avant de la budgéter : le plancher doit avoir 10 cm minimum de disponible',
              'Prévoir 10 % de budget imprévus : les chantiers en appartement parisien réservent souvent des surprises',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
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
              { href: '/blog/devis-travaux-renovation-paris', title: 'Devis travaux rénovation Paris' },
              { href: '/blog/renovation-appartement-paris-11e', title: 'Rénovation appartement Paris 11e' },
              { href: '/blog/renovation-appartement-paris-14e', title: 'Rénovation appartement Paris 14e' },
              { href: '/blog/renovation-appartement-paris-18e', title: 'Rénovation appartement Paris 18e' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
              { href: '/salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
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
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-14e', label: 'Paris 14e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne' },
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
          Rénovez votre salle de bain à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis détaillé poste par poste sous 48h. Artisan spécialiste salle de bain Paris.
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
