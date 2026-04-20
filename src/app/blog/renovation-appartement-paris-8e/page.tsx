import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 8e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-8e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 8e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 8e arrondissement de Paris : Champs-Élysées, Monceau, Faubourg Saint-Honoré. Prestige, devis 48h.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-8e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation d\'appartement dans le 8e arrondissement de Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le 8e arrondissement est l\'un des plus onéreux de Paris à rénover en raison du standing des immeubles et des attentes des propriétaires. Un rafraîchissement (peinture, sols, petits travaux) : 1 200 – 2 000 €/m². Une rénovation complète standard : 3 000 – 5 000 €/m². Pour un appartement de luxe avec marbre, boiseries sur mesure, domotique et finitions premium, le budget peut atteindre 5 000 – 7 000 €/m², voire davantage pour les biens d\'exception du triangle d\'or.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels matériaux utiliser pour une rénovation de prestige dans le 8e ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dans le 8e arrondissement, les finitions luxe sont la norme pour les appartements de standing. Pour les sols : marbre Calacatta ou Carrare, pierre de Bourgogne, parquet en chêne massif contrecollé ou parquet Versailles. Pour les murs : stuc veneziano, peintures à la chaux teintées dans la masse, lambris laqués ou boiseries sur mesure. Pour les salles de bain : robinetterie Dornbracht ou Fantini, vasques en pierre naturelle, douches à l\'italienne avec paroi en verre sablé ou miroir. Pour les cuisines : plan de travail en marbre blanc ou Dekton, façades en laque brillante ou en bois massif huilé.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment intégrer la domotique dans un appartement haussmannien du 8e ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L\'intégration domotique dans un haussmannien du 8e se fait sans dénaturer les volumes ni les ornements. Les systèmes les plus discrets (Lutron pour l\'éclairage, Somfy pour les volets, Legrand pour les prises encastrées affleurantes) s\'intègrent dans les moulures, les plinthes ou les faux-plafonds réalisés en arrière des corniches. L\'audiovisuel (son distribué multiroom) passe dans les combles ou les vides sanitaires. Le tout est piloté depuis une tablette ou un smartphone. Budget domotique complet pour un appartement de 150 m² : 15 000 – 40 000 €.',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un permis de construire pour rénover dans le 8e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour les travaux intérieurs ne modifiant pas la structure de l\'immeuble, aucun permis n\'est nécessaire. Une déclaration préalable de travaux est requise pour les modifications de façade (ravalement, menuiseries extérieures) ou la création d\'ouvertures. Un permis de construire est obligatoire si la surface de plancher augmente de plus de 20 m² ou si les travaux modifient l\'aspect extérieur d\'un immeuble protégé. Espace Design vous accompagne dans toutes les démarches administratives.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 8e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 8e arrondissement de Paris : Champs-Élysées, Monceau, Faubourg Saint-Honoré. Prestige, devis 48h.',
}

export default function ArticleRenovation8e() {
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
            Rénovation Appartement Paris 8e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le 8e arrondissement incarne le Paris de la haute bourgeoisie et du luxe : triangle d&apos;or entre les Champs-Élysées, le Faubourg Saint-Honoré et le parc Monceau, immeubles haussmanniens grand standing, clientèle internationale. Rénover dans le 8e exige des artisans capables de conjuguer exigence esthétique maximale, matériaux nobles et technicité irréprochable.
          </p>
        </div>
      </section>

      {/* Section 1 — Quartiers */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Triangle d&apos;or, Monceau, Faubourg Saint-Honoré : les quartiers du 8e
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 8e arrondissement regroupe des quartiers aux identités distinctes, mais tous caractérisés par un bâti haussmannien de premier ordre et un niveau de résidences de standing parmi les plus élevés de Paris. La clientèle est principalement internationale, à la recherche de prestations luxe et de délais tenus.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Triangle d\'or — Champs-Élysées, George V, Montaigne',
                  detail: 'Le triangle d\'or concentre les immeubles haussmanniens les plus imposants du 8e, souvent avec gardien, ascenseur d\'époque, hall marbré et appartements de 200 à 600 m². Les rénovations y atteignent régulièrement 5 000 à 7 000 €/m² en raison des surfaces importantes et des finitions ultra-premium attendues. Clientèle UHNWI (Ultra High Net Worth Individuals), souvent pilotée par des décorateurs d\'intérieur ou des architectes.',
                },
                {
                  enjeu: 'Monceau — immeubles bourgeois et hôtels particuliers',
                  detail: 'Le quartier Monceau, autour du parc du même nom, offre un tissu plus résidentiel et familial. Les appartements (100 à 300 m²) sont dans des immeubles haussmanniens de qualité, parfois avec jardins privatifs. Rénovations complètes avec cuisines et salles de bain de prestige. Budget moyen : 3 000 – 5 000 €/m².',
                },
                {
                  enjeu: 'Faubourg Saint-Honoré — commerce de luxe et résidences d\'exception',
                  detail: 'Le Faubourg Saint-Honoré mêle commerces de luxe au rez-de-chaussée et appartements de haut standing aux étages. Certains immeubles de cette rue ont fait l\'objet de rénovations récentes spectaculaires. La coexistence avec les commerces impose une logistique chantier rigoureuse (horaires, monte-charge, protection des parties communes).',
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

      {/* Section 2 — Finitions luxe */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Finitions luxe : marbre, boiseries et matériaux de prestige
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans le 8e arrondissement, les propriétaires attendent des finitions qui reflètent le standing du bien et de l&apos;immeuble. Le choix des matériaux est central : marbre naturel, bois massif, métaux nobles, peintures artisanales. Chaque détail compte.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Sol en marbre naturel',
                detail: 'Calacatta, Statuario, Nero Marquina, Travertin : le marbre est le revêtement de prestige par excellence dans le 8e. Pose en opus incertum, damier ou grandes dalles format 60×60 ou 80×80. Inclut joint époxy assorti, protection hydrofuge et polissage miroir final.',
                cout: '180 – 450 €/m²',
              },
              {
                titre: 'Boiseries sur mesure et lambris laqués',
                detail: 'Lambris muraux du sol au plafond, panneaux à profils moulurés, portes à galandage habillées boiseries. Finition laque brillante ou satiné au pistolet airless (30 couches minimum pour les projets prestige). Travail de menuisier-ébéniste atelier.',
                cout: '400 – 1 200 €/m²',
              },
              {
                titre: 'Salle de bain marbre et métal brossé',
                detail: 'Combinaison marbre blanc/noir et robinetterie en laiton brossé ou or rose. Meuble vasque suspendu en bois laqué ou pierre naturelle. Douche à l\'italienne noire de fond avec paroi miroir sans cadre. Éclairage LED en ruban dans les niches et miroir rétroéclairé.',
                cout: '20 000 – 50 000 €',
              },
              {
                titre: 'Cuisine de chef sur mesure',
                detail: 'Plan de travail en marbre blanc ou Dekton ultrafin, façades en laque mate noire ou en chêne fumé massif. Îlot central avec rangements tiroirs poussée-ouverture. Électroménager Gaggenau ou Miele encastré. Hotte plafond invisible ou tiroir. Éclairage LED sous meubles.',
                cout: '30 000 – 80 000 €',
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

      {/* Section 3 — Domotique */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Domotique et électricité premium dans le 8e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La domotique est devenue incontournable dans les rénovations de prestige du 8e arrondissement. Elle répond à des attentes de confort, de sécurité et de gestion de l&apos;énergie tout en restant parfaitement intégrée dans l&apos;esthétique du lieu. Les systèmes doivent être discrets, fiables et maintenables.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Gestion de l\'éclairage (Lutron)',
                prix: '5 000 – 15 000 €',
                detail: 'Variateurs Lutron encastrés dans des plaques personnalisées (laiton, acier brossé, verre teinté). Scènes lumineuses programmées (accueil, cinéma, dîner, nuit). Gradation sans scintillement sur toutes les sources LED. Pilotage via tablette murale ou smartphone.',
              },
              {
                type: 'Volets et stores motorisés (Somfy)',
                prix: '4 000 – 12 000 €',
                detail: 'Motorisation des volets intérieurs, stores vénitiens et rideaux. Scénario automatique lever/coucher de soleil. Commandes dissimulées dans les bâtis de fenêtres ou les plinthes. Compatibilité KNX pour intégration au système global.',
              },
              {
                type: 'Son distribué multiroom',
                prix: '8 000 – 25 000 €',
                detail: 'Haut-parleurs encastrés au plafond (Sonance, Bose, KEF) invisibles grâce au plâtre peint en assortiment. Amplificateurs dans le placard technique. Pilotage par zone depuis application mobile. Compatible Spotify, Apple Music, sources physiques.',
              },
              {
                type: 'Sécurité et contrôle d\'accès',
                prix: '5 000 – 20 000 €',
                detail: 'Visiophone haute définition, contrôle d\'accès à badge ou biométrique, alarme anti-intrusion intégrée. Caméras intérieures et extérieures IP. Coffre-fort encastré dans une boiserie. Système d\'alerte SMS et notification téléphonique en cas d\'intrusion.',
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
            Budget rénovation appartement Paris 8e : prix 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix indicatifs tous corps de métier, hors mobilier, décoration et honoraires d&apos;architecte ou décorateur.
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
                    prestations: 'Peinture, parquet, petits travaux plomberie et électricité',
                    prixM2: '1 200 – 2 000 €',
                  },
                  {
                    niveau: 'Rénovation partielle',
                    prestations: 'Salle de bain ou cuisine prestige + sols + électricité',
                    prixM2: '2 000 – 3 500 €',
                  },
                  {
                    niveau: 'Rénovation complète',
                    prestations: 'Tous corps de métier, finitions haut de gamme, matériaux nobles',
                    prixM2: '3 000 – 5 000 €',
                  },
                  {
                    niveau: 'Luxe et sur mesure',
                    prestations: 'Marbre, boiseries, domotique, sécurité, finitions d\'exception',
                    prixM2: '5 000 – 7 000 €',
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
              Les clés d&apos;une rénovation réussie dans le 8e
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Sélectionner des artisans avec des références vérifiables dans le 8e arrondissement',
                'Définir une charte matériaux dès la conception pour assurer la cohérence du projet',
                'Anticiper les délais d\'approvisionnement des matériaux nobles (marbre, boiseries sur mesure)',
                'Intégrer la domotique en amont dans les plans électriques — impossible à rajouter après',
                'Prévoir une marge de 15 à 20% du budget pour les imprévus (toujours plus nombreux dans l\'ancien)',
                'Soigner la logistique chantier — parties communes à protéger, livraisons à planifier',
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
              { href: '/blog/renovation-appartement-paris-3e', title: 'Rénovation appartement Paris 3e' },
              { href: '/blog/renovation-appartement-paris-7e', title: 'Rénovation appartement Paris 7e' },
              { href: '/blog/renovation-appartement-paris-12e', title: 'Rénovation appartement Paris 12e' },
              { href: '/blog/renovation-appartement-paris-16e', title: 'Rénovation appartement Paris 16e' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
              { href: '/blog/domotique-appartement-paris', title: 'Domotique appartement Paris' },
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
          Rénovez votre appartement dans le 8e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisans premium, finitions luxe. Devis gratuit sous 48h. Intervention Paris 8e et triangle d&apos;or.
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
