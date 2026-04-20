import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Avant Vente Paris', item: 'https://espacedesignparis.fr/blog/renovation-avant-vente-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Avant Vente Paris : valoriser son appartement 2025 | Espace Design',
  description: 'Rénover avant de vendre à Paris : quels travaux pour valoriser, budget, retour sur investissement. Conseils artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-avant-vente-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels travaux font le plus monter le prix de vente à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À Paris, les travaux à plus fort retour sur investissement avant vente sont : la peinture complète (ROI souvent supérieur à 200%), la réfection du parquet (ponçage ou pose neuve), la rénovation de la salle de bain (robinetterie, faïence, meuble vasque), et la mise en valeur du salon avec un éclairage soigné. Ces quatre postes permettent généralement de valoriser le bien de 5 à 15% et de réduire le délai de vente de façon significative.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte une rénovation avant vente à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le budget recommandé pour une rénovation avant vente à Paris représente 5 à 10% du prix de vente estimé. Pour un appartement estimé à 400 000 €, comptez entre 20 000 et 40 000 €. En pratique, un rafraîchissement ciblé (peinture, parquet, salle de bain) pour un 3 pièces de 60 m² coûte entre 8 000 et 18 000 €. L'objectif est que chaque euro investi génère au moins 2 euros de valorisation du bien.",
      },
    },
    {
      '@type': 'Question',
      name: 'Vaut-il mieux faire du home staging ou des travaux complets avant de vendre ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le home staging (ameublement temporaire, dépersonnalisation, mise en scène) est complémentaire aux travaux mais ne les remplace pas. Un appartement avec des murs abîmés ou un parquet rayé ne sera pas valorisé par le home staging seul. La bonne approche : d'abord les travaux de remise en état (peinture, sol, salle de bain), puis le home staging pour maximiser l'attractivité lors des visites. Le home staging seul coûte 1 000 à 5 000 € et peut accélérer la vente sans forcément augmenter le prix.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Avant Vente Paris : valoriser son appartement 2025 | Espace Design',
  description: 'Rénover avant de vendre à Paris : quels travaux pour valoriser, budget, retour sur investissement. Conseils artisan 2025.',
}

export default function ArticleRenovationAvantVente() {
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
            Investissement
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Avant Vente Paris : valoriser son appartement 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Vendre un appartement parisien sans travaux, c&apos;est souvent laisser de l&apos;argent sur la table. Quelques semaines de rénovation ciblée peuvent valoriser un bien de 5 à 15% et réduire considérablement le délai de vente. Guide complet pour choisir les bons travaux et maximiser votre retour sur investissement en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Home staging vs rénovation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Home staging vs rénovation : quelle stratégie avant de vendre ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Deux approches s&apos;offrent au vendeur parisien : le home staging (valorisation visuelle sans travaux structurels) et la rénovation partielle ou complète. Ces stratégies ne sont pas exclusives — elles se complètent selon l&apos;état du bien et le prix de vente visé.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Un appartement haussmannien avec moulures et parquet d&apos;origine en bon état se prête davantage au home staging. Un bien des années 70-80 avec revêtements vieillis nécessite une rénovation ciblée pour ne pas se retrouver en position de faiblesse dans la négociation.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Home staging : dépersonnalisation et mise en scène',
                  detail: 'Rangement, dépersonnalisation (retrait des objets trop personnels), harmonisation décorative, mobilier de location si l\'appartement est vide, mise en valeur de la lumière. Coût : 1 000 – 5 000 €. Efficace pour accélérer la vente, moins impactant sur le prix final.',
                },
                {
                  enjeu: 'Rénovation légère : rafraîchissement ciblé',
                  detail: 'Peinture complète, ponçage ou vitrification du parquet, remplacement de la robinetterie, nettoyage et rejointement de la salle de bain. Coût : 5 000 – 15 000 € pour un 3 pièces. ROI moyen : 150 à 250% — chaque euro investi en génère 2 à 3 à la vente.',
                },
                {
                  enjeu: 'Rénovation partielle : travaux à fort impact visuel',
                  detail: 'Réfection de la salle de bain, remplacement du parquet, mise aux normes électrique partielle, rénovation de la cuisine si vétuste. Coût : 15 000 – 35 000 € pour un 3 pièces. Permet de repositionner le bien dans une tranche de prix supérieure.',
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

      {/* Section 2 — Travaux à fort ROI */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux à fort retour sur investissement avant une vente parisienne
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Certains travaux génèrent systématiquement un retour sur investissement élevé sur le marché parisien. Voici les postes à prioriser pour maximiser la valorisation de votre bien avant la mise en vente.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Peinture complète',
                solution: 'Un appartement fraîchement peint en teintes neutres (blanc cassé, gris clair, beige chaud) donne immédiatement une impression de propreté et d\'espace. C\'est le travail au ROI le plus élevé : pour 2 000 – 5 000 € investis, la valorisation perçue est généralement de 8 000 – 15 000 €.',
                cout: 'ROI : plus de 200%',
              },
              {
                titre: 'Réfection du parquet',
                solution: 'Un parquet ancien rayé ou terne peut être ponçé et vitrifié pour 20 – 40 €/m². Un parquet irrécupérable sera remplacé par un parquet stratifié ou contrecollé. Les acheteurs parisiens sont très sensibles à l\'état du parquet, surtout dans les appartements haussmanniens.',
                cout: 'ROI : plus de 150%',
              },
              {
                titre: 'Rénovation salle de bain',
                solution: 'Remplacement de la robinetterie (mitigeur thermostatique, douche à l\'italienne), faïence nettoyée ou remplacée, meuble vasque moderne, miroir avec éclairage LED intégré. Une salle de bain modernisée valorise directement le bien et lève une objection fréquente des acheteurs.',
                cout: 'ROI : plus de 130%',
              },
              {
                titre: 'Éclairage et électricité visible',
                solution: 'Remplacement des points lumineux vétustes, installation de spots LED encastrés dans le séjour et la cuisine. L\'éclairage joue un rôle majeur lors des visites : un appartement bien éclairé paraît plus grand et plus chaleureux. Investissement : 800 – 2 500 €.',
                cout: 'ROI : plus de 120%',
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

      {/* Section 3 — Travaux à éviter */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux à éviter si vous vendez rapidement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tous les travaux ne sont pas rentables avant une vente. Certains postes absorbent un budget important sans générer de valorisation proportionnelle sur le marché parisien.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Cuisine complète neuve',
                prix: 'À éviter si vente rapide',
                detail: 'Une cuisine complète coûte 8 000 – 25 000 €. Or, les acheteurs ont des goûts très différents en matière de cuisine et préféreront souvent refaire à leur goût. Mieux vaut une cuisine propre avec poignées et robinetterie changées (500 – 1 500 €) qu\'une cuisine neuve imposée qui peut ne pas plaire.',
              },
              {
                type: 'Salle de bain haut de gamme',
                prix: 'À modérer',
                detail: 'Une salle de bain de luxe (marbre, douche à l\'italienne sur mesure, balnéo) représente 15 000 – 30 000 € d\'investissement pour une valorisation rarement proportionnelle. Mieux vaut une rénovation moderne et soignée à 4 000 – 8 000 € qui plaira au plus grand nombre.',
              },
              {
                type: 'Travaux structurels lourds',
                prix: 'Risque élevé',
                detail: 'Ouverture de murs porteurs, surélévation, extensions : ces travaux dépassent systématiquement les délais et budgets initiaux. Un bien en chantier se vend mal. Si ces travaux sont nécessaires, mieux vaut vendre sans les réaliser en intégrant leur coût dans le prix de négociation.',
              },
              {
                type: 'Aménagements trop personnalisés',
                prix: 'ROI négatif',
                detail: 'Une bibliothèque murale laquée rouge, une fresque peinte dans la chambre, des papiers peints très graphiques : ces éléments plaisent à certains et rebutent d\'autres. Avant la vente, neutraliser le bien pour qu\'il plaise au plus grand nombre est la règle d\'or.',
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

      {/* Section 4 — Budget et délais */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget recommandé et délais de réalisation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour Paris, main d&apos;oeuvre et matériaux inclus, pour un appartement de 60 m².
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de rénovation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Délai</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Valorisation estimée</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement (peinture + nettoyage)',
                    budget: '2 000 – 5 000 €',
                    delai: '3 – 7 jours',
                    valorisation: '+3 – 5%',
                  },
                  {
                    niveau: 'Rénovation légère (peinture + parquet + robinetterie)',
                    budget: '8 000 – 15 000 €',
                    delai: '2 – 3 semaines',
                    valorisation: '+7 – 10%',
                  },
                  {
                    niveau: 'Rénovation partielle (+ salle de bain + éclairage)',
                    budget: '15 000 – 25 000 €',
                    delai: '3 – 5 semaines',
                    valorisation: '+10 – 15%',
                  },
                  {
                    niveau: 'Rénovation complète hors cuisine',
                    budget: '25 000 – 40 000 €',
                    delai: '5 – 8 semaines',
                    valorisation: '+15 – 20%',
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.budget}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.delai}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.valorisation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour maximiser le retour sur investissement
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Faire estimer le bien avant et après travaux par un agent immobilier pour valider le budget',
                'Commencer par la peinture — c\'est le levier le plus puissant pour le premier coup d\'oeil',
                'Choisir des matériaux neutres et intemporels : blanc, gris clair, bois naturel',
                'Prévoir 10% de marge sur le budget pour les imprévus de chantier',
                'Planifier les travaux au moins 6 semaines avant la mise en vente',
                'Faire appel à un artisan local parisien pour des délais d\'intervention courts',
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
              { href: '/parquet-paris', title: 'Parquet Paris' },
              { href: '/peinture-paris', title: 'Peinture Paris' },
              { href: '/salle-de-bain-paris', title: 'Salle de bain Paris' },
              { href: '/blog/devis-renovation-en-ligne-paris', title: 'Devis rénovation en ligne Paris' },
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
          Valorisez votre appartement avant la vente
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisans spécialisés en rénovation parisienne avant vente.
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
