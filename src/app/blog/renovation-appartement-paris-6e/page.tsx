import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 6e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-6e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 6e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 6e arrondissement de Paris : Saint-Germain-des-Prés, Luxembourg. Haussmannien, ABF. Devis 48h.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-6e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation appartement dans le 6e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le 6e arrondissement, les prix de rénovation varient entre 2 500 et 5 000 €/m² selon le niveau de finition et les contraintes patrimoniales. Une rénovation légère (peinture, sol, électricité partielle) se situe autour de 1 000 à 1 500 €/m². Une rénovation complète d'un Haussmannien (cuisine équipée, salle de bain en marbre, parquet restauré, moulures) coûte entre 2 500 et 4 000 €/m². Pour un appartement haut de gamme de prestige avec matériaux nobles et menuiseries sur mesure, comptez 4 000 à 5 500 €/m².",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment conserver les moulures et cheminées dans un appartement Haussmannien du 6e ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La restauration des moulures en staff (corniche, frises, rosaces) passe par un ragréage fin au plâtre de Paris ou au staff armé jute, puis une peinture glycéro ou acrylique sur enduit. Les cheminées en marbre sont nettoyées avec des produits acides doux, les joints refaits à la chaux blanche, et le foyer peut être remis en service après vérification du conduit (tubage inox) ou équipé d'un insert électrique. Ces éléments représentent une vraie valeur patrimoniale : ne jamais les enduire ni les démolir sans avis d'un professionnel.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on rénover la façade d\'un immeuble Haussmannien dans le 6e ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le ravalement de façade dans le 6e requiert un permis de ravalement (déclaration préalable) et, pour les immeubles en zone de protection du patrimoine, l'avis favorable de l'Architecte des Bâtiments de France. Les matériaux autorisés sont généralement la pierre de taille, l'enduit à la chaux ou le badigeon. La peinture acrylique est souvent refusée sur les immeubles Haussmanniens. Un ravalement complet coûte entre 80 et 180 €/m² de façade, échafaudage compris.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quels artisans choisir pour rénover un appartement de prestige dans le 6e ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un appartement de prestige dans le 6e arrondissement, privilégiez des artisans avec une expérience avérée dans la rénovation de haut de gamme parisien : maîtrise du staff et du plâtre ancien, connaissance des matériaux nobles (marbre, bois massif, cuivre), respect des règles patrimoniales. Demandez systématiquement des références de chantiers similaires, des photos de réalisations et une visite préalable gratuite. Méfiez-vous des devis très bas qui ne tiennent pas compte des contraintes réelles des immeubles anciens.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 6e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 6e arrondissement de Paris : Saint-Germain-des-Prés, Luxembourg. Haussmannien, ABF. Devis 48h.',
}

export default function ArticleRenovationParis6e() {
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
            Rénovation Appartement Paris 6e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Saint-Germain-des-Prés, Luxembourg, Odéon : le 6e arrondissement abrite certains des immeubles Haussmanniens les plus recherchés de Paris. Rénover dans ce quartier d&apos;exception exige une connaissance fine des matériaux anciens, des règles ABF et des attentes d&apos;une clientèle exigeante. Guide complet et prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Saint-Germain-des-Prés */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Saint-Germain-des-Prés : l&apos;Haussmannien haut de gamme
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le quartier Saint-Germain-des-Prés concentre des immeubles construits sous le Second Empire (1853-1870), caractérisés par leurs façades en pierre de taille, leurs balcons filants au 2e et 5e étage, leurs hauts plafonds (2,80 m à 3,50 m) et leur riche décoration intérieure. Ces appartements ont souvent été occupés sans rénovation profonde depuis des décennies : ils cumulent un potentiel architectural exceptionnel et des mises aux normes importantes à réaliser.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La clientèle du 6e est exigeante sur les matériaux et les finitions. Les shortcuts habituels (carrelage bon marché, doublage placo standard, peinture acrylique directe sur staff) ne conviennent pas ici. Les artisans doivent maîtriser les techniques de l&apos;ancien et proposer des finitions à la hauteur de la valeur du bien.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Respect des éléments Haussmanniens',
                  detail: 'Moulures en staff (corniches, frises, médaillons), parquets en chêne massif (point de Hongrie ou bâtons rompus), boiseries peintes, cheminées en marbre ou en fonte émaillée : ces éléments constituent l\'identité de l\'appartement et conditionnent sa valeur. Leur restauration est toujours préférable à leur remplacement.',
                },
                {
                  enjeu: 'Contraintes patrimoniales et ABF',
                  detail: 'Une grande partie du 6e est couverte par des zones de protection du patrimoine. Les travaux extérieurs (fenêtres, volets, façade) requièrent l\'avis de l\'ABF. Les matériaux imposés (bois peint blanc, pierre de taille, zinc) orientent les choix et peuvent augmenter les coûts de 20 à 40 % par rapport à des matériaux standards.',
                },
                {
                  enjeu: 'Clientèle internationale et délais maîtrisés',
                  detail: 'De nombreux propriétaires d\'appartements dans le 6e résident à l\'étranger ou gèrent des biens locatifs de prestige. Ils attendent des artisans une communication claire, un respect strict des délais et des comptes-rendus de chantier réguliers. La confiance se construit sur la transparence et la qualité d\'exécution.',
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

      {/* Section 2 — Moulures et cheminées */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Moulures, cheminées et boiseries : préserver l&apos;âme de l&apos;appartement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un appartement Haussmannien du 6e, les éléments décoratifs d&apos;origine font partie intégrante de la valeur du bien. Leur restauration est un investissement qui se rentabilise à la revente — et qui demande des artisans au savoir-faire spécifique.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Restauration moulures en staff',
                detail: 'Ragréage des parties manquantes ou dégradées au plâtre armé jute, reconstitution des profils par moulage en silicone, peinture de finition en glycéro satiné. Un artisan staffeur qualifié peut reproduire à l\'identique n\'importe quel profil de corniche Haussmannienne.',
                cout: '60 – 120 €/ml',
              },
              {
                titre: 'Cheminées en marbre',
                detail: 'Nettoyage acide doux, rejointoiement, réparation des éclats. Si le tirage est possible : tubage inox et remise en fonctionnement (1 500 – 3 000 €). Si décorative : insert électrique à effet flamme (300 – 800 €). Le marbre ne se repeint jamais : préserver la patine d\'origine.',
                cout: '500 – 3 000 € / unité',
              },
              {
                titre: 'Parquet chêne massif',
                detail: 'Ponçage à la bande (pas de disque pour respecter le profil des lames), traitement antifongique si nécessaire, vitrification polyuréthane mat ou huilage naturel. Pour les lames manquantes : chêne massif de même épaisseur (22 mm typiquement) et même motif.',
                cout: '40 – 90 €/m²',
              },
              {
                titre: 'Boiseries et placards d\'époque',
                detail: 'Les boiseries peintes (lambris, volets intérieurs, encadrements) se décapent à la soude ou au décapant chimique, se rebouchent à la pâte à bois et se repeignent en glycéro. Les assemblages de menuiserie traditionnelle (mortaise-tenon, tourillons) sont à réparer à l\'identique.',
                cout: '80 – 200 €/m²',
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

      {/* Section 3 — Cuisine et SDB haut de gamme */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Cuisine et salle de bain : le haut de gamme dans le 6e
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans le 6e arrondissement, cuisine et salle de bain sont les pièces où l&apos;investissement est le plus élevé — et le plus valorisant. Les propriétaires attendent des prestations qui correspondent au standing du bien.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Cuisine équipée sur mesure',
                prix: '15 000 – 40 000 €',
                detail: 'Façades en chêne massif ou laqué, plan de travail en marbre ou granit, électroménager encastré (Miele, Gaggenau, Smeg). La cuisine ouverte est possible dans les appartements Haussmanniens si le mur séparateur est porteur uniquement d\'un côté. Compter IPN + study structure (2 000 – 5 000 €) pour abattre le mur côté séjour.',
              },
              {
                type: 'Salle de bain en marbre',
                prix: '12 000 – 35 000 €',
                detail: 'Carrelage grand format en marbre Calacatta ou Carrare, douche à l\'italienne ou baignoire sur pieds en fonte émaillée, double vasque en céramique ou pierre naturelle, robinetterie dorée brossée ou chromée mate. La salle de bain haut de gamme dans le 6e est un argument de vente déterminant.',
              },
              {
                type: 'Électricité et domotique',
                prix: '8 000 – 20 000 €',
                detail: 'Mise aux normes NF C 15-100 complète, tableau divisionnaire, circuits dédiés, prises en laiton ou plaqué or assorties aux interrupteurs (Legrand Céliane ou Schneider Odace). Option domotique : volets, éclairage et chauffage pilotés par smartphone (Somfy, Shelly, Philips Hue).',
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
            Prix d&apos;une rénovation appartement Paris 6e en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs main d&apos;œuvre et matériaux inclus pour un appartement dans le 6e arrondissement.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total 60 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Réfection légère',
                    prestations: 'Peinture, électricité partielle, sol poncé',
                    prixM2: '1 000 – 1 500 €',
                    total: '60 000 – 90 000 €',
                  },
                  {
                    niveau: 'Rénovation standard',
                    prestations: 'Cuisine, SDB, électricité, parquet, peinture',
                    prixM2: '1 800 – 2 800 €',
                    total: '108 000 – 168 000 €',
                  },
                  {
                    niveau: 'Rénovation complète prestige',
                    prestations: 'Moulures + parquet + cuisine haut de gamme + SDB marbre',
                    prixM2: '2 500 – 4 000 €',
                    total: '150 000 – 240 000 €',
                  },
                  {
                    niveau: 'Haut de gamme exceptionnel',
                    prestations: 'Matériaux nobles + menuiserie sur mesure + domotique complète',
                    prixM2: '4 000 – 5 500 €',
                    total: '240 000 – 330 000 €',
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
              Ce qui fait la différence dans le 6e arrondissement
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Choisir des artisans avec références en rénovation Haussmannienne haut de gamme',
                'Ne jamais masquer ou démolir les moulures, cheminées et boiseries d\'époque',
                'Prévoir un budget contingence de 15 % pour les découvertes en plancher et murs anciens',
                'Anticiper les délais ABF pour les travaux extérieurs (fenêtres, ravalement)',
                'Investir dans des matériaux nobles qui valorisent durablement le bien',
                'Soigner les finitions invisibles (câblage, plomberie) autant que les finitions visibles',
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
              { href: '/blog/renovation-appartement-paris-4e', title: 'Rénovation appartement Paris 4e' },
              { href: '/blog/renovation-appartement-paris-10e', title: 'Rénovation appartement Paris 10e' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/renovation-cuisine-americaine-paris', title: 'Cuisine américaine Paris' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
              { href: '/renovation-paris', title: 'Rénovation Paris — tous arrondissements' },
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
              { href: '/renovation-paris-5e', label: 'Paris 5e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-14e', label: 'Paris 14e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-montrouge', label: 'Montrouge' },
              { href: '/renovation-issy-les-moulineaux', label: 'Issy-les-Moulineaux' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-vanves', label: 'Vanves' },
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
          Rénovation appartement Paris 6e : devis gratuit sous 48h
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisans spécialisés en rénovation Haussmannienne haut de gamme. Devis détaillé sous 48h.
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
