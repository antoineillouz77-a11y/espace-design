import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Saint-Germain-des-Prés Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-saint-germain-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Saint-Germain-des-Prés Paris : spécificités & prix | Espace Design',
  description: 'Rénover dans le 6e arrondissement à Paris : ABF, moulures, parquet point de Hongrie, contraintes copropriété. Prix artisan.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-saint-germain-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelles sont les contraintes ABF pour rénover à Saint-Germain-des-Prés ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Saint-Germain-des-Prés (Paris 6e) est en secteur protégé : toute modification visible depuis la rue nécessite l'accord de l'Architecte des Bâtiments de France (ABF). Cela concerne le remplacement des fenêtres, le ravalement de façade, les velux en toiture et les climatiseurs visibles. Le délai d'instruction ABF est de 2 à 3 mois. À l'intérieur, les travaux sont libres dans la plupart des cas — sauf si l'appartement est lui-même classé ou inscrit.",
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il restaurer ou remplacer le parquet point de Hongrie dans le 6e ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La restauration d'un parquet en point de Hongrie d'époque est presque toujours préférable à son remplacement dans le 6e arrondissement. Un parquet massif en chêne peut être ponçé et rehaussé 3 à 4 fois. La restauration coûte 60 à 120 €/m² — nettement moins qu'un remplacement, et incomparablement plus valorisant pour un bien premium. La pose d'un nouveau parquet point de Hongrie (chêne massif sur liteaux) est possible si le parquet existant est trop dégradé : comptez 150 à 250 €/m² fourni-posé.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation complète dans le 6e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation complète d'un appartement à Saint-Germain-des-Prés coûte entre 1 500 et 2 500 €/m² pour une rénovation standard, et entre 2 500 et 4 000 €/m² si elle inclut la restauration du patrimoine (parquets anciens, moulures, cheminées). Pour un 80 m², prévoyez de 120 000 à 320 000 € en rénovation intégrale de standing. Ce surcoût par rapport à d'autres quartiers s'explique par la complexité technique, l'accès difficile et le niveau de finition attendu.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Saint-Germain-des-Prés Paris : spécificités & prix | Espace Design',
  description: 'Rénover dans le 6e arrondissement à Paris : ABF, moulures, parquet point de Hongrie, contraintes copropriété. Prix artisan.',
}

export default function ArticleSaintGermain() {
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
            Quartiers
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Saint-Germain-des-Prés Paris : spécificités &amp; prix
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Saint-Germain-des-Prés (Paris 6e) concentre certains des plus beaux appartements parisiens : haussmanniens, immeubles du XVIIIe et XIXe siècle, parquets point de Hongrie, plafonds hauts, moulures ornées. Rénover dans le 6e demande une expertise technique et un niveau de finition à la hauteur du quartier. Ce guide vous accompagne pas à pas.
          </p>
        </div>
      </section>

      {/* Section 1 — Caractéristiques du quartier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les appartements du 6e : immeubles haussmanniens et contraintes patrimoniales
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 6e arrondissement est dominé par deux typologies : les immeubles haussmanniens construits sous Napoléon III (1853-1870) et les immeubles anciens antérieurs datant parfois du XVIIe siècle. Ces deux typologies ont en commun des caractéristiques architecturales remarquables — et des contraintes de rénovation tout aussi remarquables.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Saint-Germain-des-Prés étant en secteur protégé, toute modification visible depuis la rue est soumise à l&apos;accord préalable de l&apos;Architecte des Bâtiments de France (ABF). Le délai d&apos;instruction est de 2 à 3 mois et doit être anticipé dans le planning du chantier.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Immeubles haussmanniens — les étages nobles',
                  detail: 'Hauteur sous plafond de 3,20 m à 4,20 m, parquet en bois massif (point de Hongrie ou lames larges), moulures en plâtre, cheminée en marbre, fenêtres à double vantail en bois. Les 1er et 2e étages (étages nobles) présentent les plus belles prestations : plafonds les plus hauts, moulures les plus richement ornées.',
                },
                {
                  enjeu: 'Immeubles anciens — XVIIe et XVIIIe siècle',
                  detail: 'Certains immeubles de Saint-Germain-des-Prés datent du XVIIe siècle, notamment autour de la rue de Buci et du carrefour de l&apos;Odéon. Ces biens présentent des planchers en chêne massif, des poutres apparentes et des murs en pierre de taille. Leur rénovation doit concilier performance technique (isolation, plomberie, électricité) et respect du bâti historique.',
                },
                {
                  enjeu: 'Règlement de copropriété — contraintes à vérifier',
                  detail: 'Dans les immeubles anciens du 6e, les règlements de copropriété sont souvent très détaillés sur les matériaux autorisés, les horaires de travaux (souvent 8h-17h en semaine) et les accès. Vérifiez ces points avant de signer avec votre artisan pour éviter les mauvaises surprises.',
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

      {/* Section 2 — Parquet et moulures */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Parquet point de Hongrie et moulures : restaurer ou remplacer ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un appartement du 6e, le traitement du parquet et des moulures est le poste le plus identitaire — et souvent le plus délicat à arbitrer. Voici les options et leurs coûts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Restauration parquet point de Hongrie',
                solution: 'Ponçage + vitrification ou huilage d&apos;un parquet massif d&apos;époque. Possible 3 à 4 fois sur la durée de vie du parquet. Résultat incomparable, valorisation maximale du bien. Recommandé en priorité si le parquet est sain.',
                cout: '60 – 120 €/m²',
              },
              {
                titre: 'Remplacement parquet (neuf)',
                solution: 'Parquet point de Hongrie neuf en chêne massif sur liteaux, posé selon les règles de l&apos;art. Solution si le parquet existant est trop dégradé ou très mince. Le résultat est identique à l&apos;original mais le coût est supérieur.',
                cout: '150 – 250 €/m²',
              },
              {
                titre: 'Restauration moulures et corniches',
                solution: 'Les moulures en plâtre peuvent être restaurées (remplissage, lissage, peinture) ou refaites à l&apos;identique par un staffeur. Compter 80 à 200 €/ml selon la complexité des profils. Indispensable pour préserver le caractère haussmannien.',
                cout: '80 – 200 €/ml',
              },
              {
                titre: 'Cheminées en marbre — restauration',
                solution: 'La restauration d&apos;une cheminée en marbre comprend le nettoyage, le rebouchage des éclats et éventuellement la cristallisation ou le polissage du marbre. Une cheminée restaurée valorise significativement un appartement du 6e.',
                cout: '800 – 3 000 €',
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
            Prix d&apos;une rénovation à Saint-Germain-des-Prés en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 6e arrondissement est l&apos;un des plus chers de Paris à la rénovation. Les raisons sont multiples : complexité technique, matériaux nobles, accès difficile (étroitesse des rues, copropriétés strictes) et niveau de finition attendu.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Description</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement léger',
                    prestations: 'Peinture, sols, luminaires — sans modifier les installations',
                    prixM2: '500 – 900 €',
                  },
                  {
                    niveau: 'Rénovation partielle',
                    prestations: 'Salle de bain ou cuisine seule, finitions premium',
                    prixM2: '12 000 – 30 000 € (la pièce)',
                  },
                  {
                    niveau: 'Rénovation complète standard',
                    prestations: 'Électricité, plomberie, cuisine, SDB, sols, peintures',
                    prixM2: '1 500 – 2 500 €',
                  },
                  {
                    niveau: 'Rénovation avec restauration patrimoine',
                    prestations: 'Parquet, moulures, cheminées + matériaux nobles (marbre, boiseries)',
                    prixM2: '2 500 – 4 000 €',
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
              Postes clés d&apos;une rénovation haussmannienne dans le 6e
            </h3>
            <div className="space-y-3">
              {[
                'Restauration parquet point de Hongrie — 60 à 120 €/m² (valorise significativement le bien)',
                'Mise aux normes électriques complètes — 10 000 à 18 000 € pour un 80 m² non rénové',
                'Salle de bain premium (carrelage grand format 120×60, robinetterie haut de gamme) — 18 000 à 35 000 €',
                'Remplacement des fenêtres avec accord ABF — double vitrage bois sur l\'existant privilégié',
                'Réfection des moulures et corniches — 80 à 200 €/ml selon la complexité des profils',
                'Cuisine sur mesure avec plan de travail en marbre ou granit — 20 000 à 40 000 €',
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

      {/* Section 4 — Délais administratifs */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Délais administratifs : ce qu&apos;il faut anticiper dans le 6e
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La rénovation dans un secteur protégé comme Saint-Germain-des-Prés implique des délais administratifs supplémentaires qu&apos;un artisan expérimenté intègre dès la phase de planification.
          </p>
          <div className="space-y-4">
            {[
              {
                type: 'Déclaration préalable de travaux (ABF)',
                prix: '2 à 3 mois',
                detail: 'Obligatoire pour tout remplacement de fenêtres, ravalement de façade, velux ou équipement visible depuis la rue. À déposer avant le démarrage du chantier. Le dossier ABF comprend des plans, des photos et une notice descriptive des matériaux.',
              },
              {
                type: 'Autorisation de la copropriété',
                prix: '1 à 3 mois',
                detail: 'Les travaux importants (ouverture de cloisons porteuses, modification de façade, changement de destination de locaux) nécessitent une autorisation de l&apos;assemblée générale. Comptez un cycle de convocation + vote avant de démarrer.',
              },
              {
                type: 'Benne et stationnement de livraison',
                prix: '2 à 4 semaines',
                detail: 'Déposer une demande d&apos;autorisation de stationnement en Mairie pour la benne à gravats et les livraisons de matériaux. Dans les rues étroites du 6e (rue de Buci, rue Jacob), cela peut nécessiter une organisation spéciale avec des horaires de livraison restreints.',
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
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
              { href: '/blog/parquet-massif-paris', title: 'Parquet massif à Paris : restauration et pose' },
              { href: '/blog/renovation-appartement-marais-paris', title: 'Rénovation appartement Marais Paris' },
              { href: '/blog/moulures-paris', title: 'Moulures Paris : restauration et pose' },
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
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-5e', label: 'Paris 5e' },
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-14e', label: 'Paris 14e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-versailles', label: 'Versailles' },
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
          Vous rénovez un appartement à Saint-Germain-des-Prés ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis gratuit et détaillé sous 48h. Déplacement sans engagement dans le 6e et alentours.
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
