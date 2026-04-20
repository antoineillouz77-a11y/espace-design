import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Prix Rénovation Salle de Bain Paris', item: 'https://espacedesignparis.fr/blog/renovation-salle-de-bain-prix-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Prix Rénovation Salle de Bain Paris : budget détaillé 2025 | Espace Design',
  description: 'Budget pour rénover une salle de bain à Paris : carrelage, douche, vasque, plomberie. Prix détaillés par poste artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-salle-de-bain-prix-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le budget moyen pour rénover une salle de bain à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le budget moyen pour rénover une salle de bain à Paris se situe entre 8 000 et 20 000 € pour une salle de bain de 4 à 6 m². Ce budget comprend le carrelage murs et sol, la douche à l\'italienne ou baignoire, la vasque et robinetterie, les WC suspendu, la plomberie et l\'électricité. Le prix varie fortement selon l\'état de l\'installation existante (si des travaux de plomberie ou de carrelage sont à refaire entièrement) et le niveau de gamme des matériaux choisis. Une rénovation haut de gamme avec douche sur mesure et matériaux premium peut dépasser 25 000 €.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte une douche à l\'italienne dans un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L\'installation d\'une douche à l\'italienne dans un appartement parisien coûte entre 2 500 et 6 000 € en moyenne, tout compris (création du bac avec étanchéité, carrelage, bonde de sol, robinetterie thermostatique, paroi ou pan de verre). Ce prix varie selon la taille (60x80, 90x90, 120x80 cm), le système d\'étanchéité choisi (Schluter, résine), et la robinetterie (entrée de gamme à 200 € vs thermostatique encastrée à 800 €). En appartement haussmannien, surélever le plancher pour créer le bac en pente peut générer un surcoût de 500 à 1 000 €.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels sont les facteurs qui font varier le prix d\'une rénovation de salle de bain à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plusieurs facteurs influencent fortement le budget d\'une rénovation de salle de bain à Paris : la taille de la pièce (chaque m² supplémentaire augmente tous les postes de carrelage, plomberie et électricité), l\'état de l\'installation existante (plomberie en plomb ou câblage vétuste = surcoût), le choix des matériaux (carrelage à 20 €/m² ou grand format à 80 €/m², robinetterie haut de gamme), la création d\'une douche à l\'italienne (nécessite travaux de bac et étanchéité), et l\'accessibilité du chantier (appartement en étage sans ascenseur = majoration 10 à 15% pour la logistique).',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Prix Rénovation Salle de Bain Paris : budget détaillé 2025 | Espace Design',
  description: 'Budget pour rénover une salle de bain à Paris : carrelage, douche, vasque, plomberie. Prix détaillés par poste artisan 2025.',
}

export default function ArticlePrixRenovationSalleDeBainParis() {
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
            Prix & Budgets
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Prix Rénovation Salle de Bain Paris : budget détaillé 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Carrelage, douche italienne, vasque, WC suspendu, plomberie, électricité : la rénovation d&apos;une salle de bain parisienne mobilise de nombreux corps de métier. Ce guide détaille le budget par poste pour vous aider à planifier votre projet sans surprise.
          </p>
        </div>
      </section>

      {/* Section 1 — Vue d'ensemble */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Vue d&apos;ensemble : budget total selon le niveau de rénovation
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Pour une salle de bain parisienne de 4 à 6 m², voici les fourchettes de budget à prévoir selon le niveau de rénovation souhaité. Ces prix incluent la main d&apos;oeuvre et les matériaux.
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Périmètre</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget 5 m²</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      niveau: 'Rafraîchissement',
                      perimetre: 'Peinture, robinetterie, accessoires',
                      budget: '1 500 – 3 000 €',
                    },
                    {
                      niveau: 'Rénovation partielle',
                      perimetre: 'Carrelage + vasque + robinetterie',
                      budget: '4 000 – 8 000 €',
                    },
                    {
                      niveau: 'Rénovation complète',
                      perimetre: 'Tout compris : carrelage, douche, WC, plomberie, électricité',
                      budget: '8 000 – 16 000 €',
                    },
                    {
                      niveau: 'Haut de gamme',
                      perimetre: 'Matériaux premium, douche sur mesure, domotique',
                      budget: '16 000 – 25 000 €',
                    },
                  ].map((row, i) => (
                    <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                      <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.perimetre}</td>
                      <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.budget}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Prix par poste */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix détaillés par poste de travaux
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Chaque poste est estimé pour une salle de bain de 4 à 6 m² à Paris, main d&apos;oeuvre et matériaux inclus. Les prix s&apos;entendent pour des prestations de qualité réalisées par un artisan qualifié.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Carrelage murs et sol',
                solution: 'Dépose de l\'ancien carrelage, ragréage si nécessaire, pose de nouveau carrelage mural (faïence ou grès cérame) et sol (antidérapant R10 en zone douche). Joint époxy recommandé sur les zones humides. Fourniture carrelage non comprise.',
                cout: '2 000 – 5 000 €',
              },
              {
                titre: 'Douche italienne',
                solution: 'Création du bac en pente avec étanchéité (Schluter ou résine), bonde de sol, carrelage, robinetterie thermostatique encastrée, paroi ou pan de verre. La douche sur mesure (180x90 cm et plus) est plus coûteuse mais mieux adaptée aux salles de bain parisiennes étroites.',
                cout: '2 500 – 6 000 €',
              },
              {
                titre: 'Vasque et robinetterie',
                solution: 'Vasque à poser ou encastrée sur meuble suspendu, mitigeur, siphon, et installation du meuble de salle de bain avec rangement. Les modèles suspendus (meuble à 40 cm du sol) facilitent l\'entretien et agrandissent visuellement la pièce.',
                cout: '500 – 2 000 €',
              },
              {
                titre: 'WC suspendu',
                solution: 'Bâti-support encastré dans la cloison, réservoir encastré, cuvette suspendue, abattant, et carrelage de finition autour du bâti. Le WC suspendu libère 10 à 15 cm au sol et facilite le nettoyage. La pose du bâti-support nécessite de créer ou renforcer la cloison de doublage.',
                cout: '800 – 2 000 €',
              },
              {
                titre: 'Plomberie (alimentation + évacuation)',
                solution: 'Remplacement des canalisations d\'alimentation (cuivre ou PER) et des évacuations (PVC), robinets d\'arrêt par équipement, raccordements douche, vasque et WC. Surcoût si les tuyaux sont en plomb (dépose et évacuation déchets dangereux).',
                cout: '1 500 – 4 000 €',
              },
              {
                titre: 'Électricité (circuit dédié + luminaires)',
                solution: 'Circuit électrique dédié salle de bain avec disjoncteur différentiel 30 mA, prises conformes aux zones réglementaires (zone 2 uniquement), luminaire étanche plafonnier (IP44 minimum), prise rase-moignons. Mise aux normes NF C 15-100 incluse.',
                cout: '500 – 1 500 €',
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

      {/* Section 3 — Facteurs de variation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Ce qui fait varier le budget : facteurs clés à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Un même projet de salle de bain peut varier du simple au double selon plusieurs facteurs spécifiques au contexte parisien. Anticiper ces variables vous permettra d&apos;établir un budget réaliste et d&apos;éviter les mauvaises surprises en cours de chantier.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Taille de la salle de bain',
                prix: 'Impact fort',
                detail: 'Chaque mètre carré supplémentaire augmente le coût du carrelage (sol + murs), de la plomberie et de la main d\'oeuvre. Une salle de bain de 3 m² coûte 50 à 70% moins cher qu\'une salle de bain de 8 m². Dans les appartements parisiens, les salles de bain de 2 à 4 m² sont fréquentes (immeubles haussmanniens) et peuvent compliquer l\'accès aux outils.',
              },
              {
                type: 'État de l\'installation existante',
                prix: 'Impact très fort',
                detail: 'Si la plomberie est en plomb, le câblage électrique non conforme, ou si des travaux de démolition lourds sont nécessaires (dépose de cloisons, suppression de baignoire encastrée), le budget peut augmenter de 2 000 à 5 000 €. Un appartement jamais rénové depuis les années 1970 concentre souvent ces surcoûts.',
              },
              {
                type: 'Choix des matériaux',
                prix: 'Impact modéré',
                detail: 'Le carrelage varie de 15 à 120 €/m² selon la marque et le format. La robinetterie d\'entrée de gamme est disponible à partir de 80 €, contre 500 à 1 500 € pour un thermostatique haut de gamme. Un choix de matériaux cohérent (milieu de gamme) donne un excellent résultat à moindre coût.',
              },
              {
                type: 'Accessibilité du chantier',
                prix: 'Impact de 10 à 15%',
                detail: 'Un appartement situé en étage élevé sans ascenseur ou avec un couloir étroit génère un surcoût logistique (montée de matériaux, évacuation des gravats à la main). À Paris, ces contraintes sont fréquentes dans les immeubles du 19ème et début 20ème siècle.',
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

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Comment optimiser son budget salle de bain à Paris
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Faire réaliser plusieurs devis (3 minimum) pour comparer main d\'oeuvre et fournitures',
                'Choisir des matériaux milieu de gamme sur les surfaces importantes (carrelage mural) et investir sur les points de contact (robinetterie)',
                'Grouper tous les corps de métier (carreleur, plombier, électricien) pour réduire les frais de déplacement',
                'Profiter d\'une rénovation groupée : si la cuisine est aussi à rénover, les économies sur la plomberie peuvent être significatives',
                'Conserver la position des équipements existants si possible — déplacer un WC ou une douche coûte 500 à 2 000 € supplémentaires',
                'Prévoir 10 à 15% de budget de réserve pour les imprévus (découverte de plomb, problème de structure)',
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
              { href: '/blog/carrelage-salle-de-bain-paris', title: 'Carrelage salle de bain Paris' },
              { href: '/blog/plomberie-renovation-paris', title: 'Plomberie rénovation Paris' },
              { href: '/blog/travaux-electricite-appartement-paris', title: 'Électricité appartement Paris' },
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
          Obtenez un devis précis pour votre salle de bain
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Visite gratuite. Devis détaillé par poste sous 48h. Artisans qualifiés à Paris et Île-de-France.
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
