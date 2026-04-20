import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Avant Location Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-mise-en-location-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Avant Location Paris : travaux, budget & rentabilité 2025',
  description: 'Rénover un appartement avant de le louer à Paris : travaux prioritaires, budget optimal, rendement locatif. Guide investisseur 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-mise-en-location-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel budget prévoir pour rénover un appartement avant de le louer à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour une rénovation ciblée "mise en location" à Paris, le budget optimal se situe entre 500 et 1 000 €/m². Pour un 2 pièces de 35 m², comptez 17 500 à 35 000 €. Au-delà de 1 000 €/m², le retour sur investissement locatif diminue car le marché locatif parisien est encadré (loi ELAN) et le loyer ne peut pas être indexé sur le niveau de prestations. L\'objectif est un bien propre, fonctionnel et conforme aux normes — pas un bien premium.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on encore louer un appartement classé DPE F ou G à Paris en 2025 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non. Depuis le 1er janvier 2025, les logements classés G au DPE (diagnostic de performance énergétique) sont interdits à la location en France. Les logements classés F seront interdits à partir du 1er janvier 2028. À Paris, un nombre important de logements anciens sont concernés par cette mesure. Si votre bien est classé F ou G, des travaux d\'isolation ou de mise à niveau du système de chauffage sont indispensables avant de pouvoir le mettre sur le marché locatif.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels sont les travaux les plus rentables avant une mise en location à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Par ordre de rentabilité décroissante : 1) Peinture neutre (blanc cassé, beige) — ROI immédiat, loue plus vite et rassure le locataire. 2) Mise aux normes électrique — obligatoire si l\'installation a plus de 15 ans et qu\'elle présente des risques. 3) Réfection de la salle de bains (si très dégradée) — améliore fortement l\'attractivité. 4) Remplacement de la cuisine — si l\'équipement est vétuste. 5) Isolation thermique — indispensable pour sortir d\'un classement DPE F ou G. Les travaux décoratifs non structurants (parquet exotique, crédence design) sont peu rentables en locatif.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Avant Location Paris : travaux, budget & rentabilité 2025 | Espace Design',
  description: 'Rénover un appartement avant de le louer à Paris : travaux prioritaires, budget optimal, rendement locatif. Guide investisseur 2025.',
}

export default function ArticleRenovationLocation() {
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
            Rénovation Avant Location Paris : travaux, budget & rentabilité 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Rénover un appartement avant de le louer à Paris est un investissement à calibrer avec précision. Entre obligation DPE, travaux prioritaires et budget rentable, ce guide vous aide à maximiser votre rendement locatif sans sur-investir en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — DPE et obligations */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              DPE : l&apos;obligation qui change tout pour la location en 2025
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le diagnostic de performance énergétique (DPE) est devenu le critère légal numéro un pour la mise en location. Depuis le 1er janvier 2025, les logements classés G sont interdits à la location. Les logements F seront interdits dès 2028. À Paris, une part importante du parc locatif privé (immeubles anciens, chauffage électrique, simple vitrage) est concernée.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Avant tout investissement de rénovation, faites réaliser un DPE par un diagnostiqueur certifié. Ce document vous permettra d&apos;identifier les travaux prioritaires pour améliorer le classement, d&apos;estimer l&apos;effort financier nécessaire, et de vérifier l&apos;éligibilité aux aides (MaPrimeRénov, CEE).
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'DPE G — interdit à la location depuis janvier 2025',
                  detail: 'Un logement classé G (consommation supérieure à 420 kWh EP/m²/an) ne peut plus être mis en location ou faire l\'objet d\'une reconduction de bail depuis le 1er janvier 2025. Si votre bien est classé G, des travaux d\'amélioration thermique sont obligatoires avant toute mise sur le marché.',
                },
                {
                  enjeu: 'DPE F — interdit à la location dès 2028',
                  detail: 'Les logements classés F (consommation entre 331 et 420 kWh EP/m²/an) pourront encore être loués jusqu\'au 31 décembre 2027. Mais avec une échéance proche, il est conseillé d\'anticiper les travaux dès maintenant pour bénéficier des aides actuelles (MaPrimeRénov) et éviter une vacance locative forcée.',
                },
                {
                  enjeu: 'DPE D ou E — louer sans problème, améliorer pour valoriser',
                  detail: 'Un logement classé D ou E peut être loué librement. Des travaux d\'isolation ou de remplacement du chauffage permettent de passer en C, ce qui améliore l\'attractivité du bien, justifie un loyer légèrement supérieur (dans les limites de l\'encadrement des loyers parisiens) et valorise le patrimoine.',
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

      {/* Section 2 — Travaux prioritaires */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux indispensables vs superflus pour la location
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            En locatif, l&apos;objectif n&apos;est pas de créer le bien le plus beau, mais le bien le plus attractif pour le budget investi. Certains travaux ont un impact direct sur la vitesse de location et le loyer obtenu. D&apos;autres sont sans effet sur le rendement locatif.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Peinture neutre — indispensable',
                detail: 'Une peinture fraîche blanc cassé ou beige clair est le premier facteur de rapidité de location. Elle donne une impression de propreté, agrandit visuellement l\'espace et s\'adapte à tous les styles de mobilier du locataire. Budget : 15 à 25 €/m² de surface murale, pose comprise.',
                cout: 'Priorité 1',
              },
              {
                titre: 'Mise aux normes électrique — obligatoire',
                detail: 'Si le logement date d\'avant les années 2000 et que l\'installation électrique n\'a jamais été refaite, une mise en conformité est indispensable (disjoncteur différentiel, mise à la terre, tableau aux normes NF C 15-100). Coût : 3 000 à 8 000 € selon la surface.',
                cout: 'Priorité 1',
              },
              {
                titre: 'Salle de bains fonctionnelle — prioritaire',
                detail: 'Une salle de bains vétuste (joints noircis, carrelage fissuré, robinetterie hors d\'âge) est le premier frein à la location. Une rénovation complète sans excès (carrelage blanc, douche italienne ou bac, meuble vasque basique) suffit. Budget : 5 000 à 10 000 € pour une SDB de 5 m².',
                cout: 'Priorité 2',
              },
              {
                titre: 'Cuisine équipée — très rentable',
                detail: 'À Paris, les locataires attendent une cuisine équipée (plaques, four, hotte). Une cuisine ikea avec électroménager de base suffit en locatif standard. Budget : 3 000 à 7 000 € cuisine + électroménager posé.',
                cout: 'Priorité 2',
              },
              {
                titre: 'Sol : parquet stratifié — bon rapport qualité/prix',
                detail: 'Remplacer un sol en mauvais état par un parquet stratifié ou un LVT (vinyle clipsable) est très rentable. Évitez le parquet massif en locatif (coût élevé, sensible aux chocs et à l\'humidité). Budget : 25 à 50 €/m² posé.',
                cout: 'Priorité 3',
              },
              {
                titre: 'Décoration premium — superflue',
                detail: 'Parquet en chêne massif, faïence artisanale, robinetterie design, éclairage domotique : ces éléments sont superflus en locatif. Le locataire appréciera, mais le loyer parisien encadré n\'augmentera pas pour autant. Investissez ce budget en isolation plutôt.',
                cout: 'Non prioritaire',
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

      {/* Section 3 — Isolation et DPE */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Isolation : améliorer le DPE pour louer et valoriser le bien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;amélioration du DPE est devenue un axe stratégique pour tout investisseur locatif parisien. En plus de lever l&apos;interdiction de location (DPE F/G), des travaux d&apos;isolation améliorent le confort du locataire, réduisent ses charges, et valorisent le bien à la revente.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Isolation des combles (si accessible)',
                prix: '20 – 35 €/m²',
                detail: 'Le geste le plus rentable. Jusqu\'à 30 % des déperditions thermiques passent par la toiture. En isolation soufflée (laine minérale R7), le gain de classe DPE peut être de 1 à 2 niveaux. Aides MaPrimeRénov et CEE disponibles — artisan RGE obligatoire.',
              },
              {
                type: 'Remplacement des fenêtres (double vitrage)',
                prix: '500 – 1 200 €/fenêtre',
                detail: 'Dans un appartement parisien ancien avec simple vitrage, le remplacement en double vitrage acoustique et thermique améliore le confort sonore (très apprécié des locataires) et thermique. Gain DPE modéré, mais fort impact sur l\'attractivité locative.',
              },
              {
                type: 'Remplacement du système de chauffage',
                prix: '3 000 – 8 000 €',
                detail: 'Le chauffage est le premier critère du calcul DPE. Remplacer des convecteurs électriques (très énergivores, classe G) par une pompe à chaleur air/air ou un système radiateur à inertie améliore significativement la note. Éligible MaPrimeRénov et CEE.',
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

      {/* Section 4 — Retour sur investissement */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Retour sur investissement : loyers et valorisation patrimoniale
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            À Paris, l&apos;encadrement des loyers (loi ELAN, zones tendues) limite la possibilité d&apos;augmenter significativement le loyer après rénovation. Mais les travaux ont un impact sur la vitesse de location (vacance réduite), la qualité des locataires, et la valorisation du bien à la revente.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Réduction de la vacance locative',
                prix: 'ROI immédiat',
                detail: 'Un bien rénové se loue 2 à 4 fois plus vite qu\'un bien en mauvais état. À Paris, chaque mois de vacance représente 1 000 à 2 500 € de loyer perdu selon l\'arrondissement. Une rénovation bien ciblée s\'amortit donc très rapidement par la réduction de la vacance.',
              },
              {
                type: 'Complément de loyer (pour prestations exceptionnelles)',
                prix: 'Encadré par la loi',
                detail: 'À Paris, le loyer est plafonné par l\'encadrement des loyers (loyer de référence majoré). Un complément de loyer peut être demandé si le bien dispose de prestations "exceptionnelles" non prises en compte dans le loyer de référence (terrasse, vue exceptionnelle, prestations haut de gamme). Ce complément est limité et doit être justifiable.',
              },
              {
                type: 'Valorisation à la revente',
                prix: '+5 à +20 %',
                detail: 'Un appartement rénové et bien classé au DPE (A, B, C) se revend significativement plus cher à Paris. Les études notariales montrent une décote de 5 à 20 % pour les biens classés F ou G par rapport à un bien équivalent classé C ou D. La rénovation énergétique protège donc aussi la valeur patrimoniale.',
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
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

      {/* Section 5 — Budget récapitulatif */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget rénovation avant location : tableau récapitulatif 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Estimation pour un appartement de 35 m² à Paris (2 pièces), rénovation ciblée mise en location. Main d&apos;œuvre et matériaux inclus.
          </p>

          <div className="grid grid-cols-1 gap-3 mb-8">
            {[
              {
                niveau: 'Rénovation légère (état correct)',
                prestations: 'Peinture + petites réparations + nettoyage professionnel',
                prix: '3 000 – 7 000 €',
              },
              {
                niveau: 'Rénovation standard',
                prestations: 'Peinture + sol stratifié + mise aux normes électrique basique',
                prix: '10 000 – 18 000 €',
              },
              {
                niveau: 'Rénovation complète',
                prestations: 'Peinture + sol + SDB + cuisine + électricité complète',
                prix: '20 000 – 35 000 €',
              },
              {
                niveau: 'Rénovation complète avec isolation',
                prestations: 'Tout le dessus + combles + fenêtres + chauffage (sortie DPE F/G)',
                prix: '35 000 – 55 000 €',
              },
            ].map((row) => (
              <div key={row.niveau} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{row.niveau}</div>
                  <div className="text-gray-600 text-xs font-light">{row.prestations}</div>
                </div>
                <div className="text-[#B8960C] font-medium text-sm flex-shrink-0">{row.prix}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Checklist investisseur avant de lancer les travaux
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Faire réaliser un DPE avant les travaux pour identifier les priorités énergétiques',
                'Vérifier l\'encadrement des loyers dans l\'arrondissement (loyer de référence majoré)',
                'Calculer le rendement locatif cible : loyer annuel net divisé par coût total acquis + rénové',
                'Ne pas sur-investir en décoration — viser fonctionnel et propre, pas luxueux',
                'Demander les aides MaPrimeRénov et CEE pour les travaux d\'isolation (artisan RGE)',
                'Prévoir un budget de réserve de 10 % pour les imprévus de chantier',
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
              { href: '/blog/isolation-combles-subvention-paris', title: 'Isolation combles Paris avec aides' },
              { href: '/blog/renovation-appartement-copropriete-paris', title: 'Rénovation en copropriété Paris' },
              { href: '/electricite-paris', title: 'Électricité Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bains Paris' },
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
          Préparez votre bien pour la location à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan spécialisé rénovation locative Paris. Devis ciblé et rentable. Réponse sous 48h.
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
