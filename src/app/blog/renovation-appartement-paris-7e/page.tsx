import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 7e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-7e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 7e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 7e arrondissement de Paris : Invalides, Eiffel, Saint-Thomas-d\'Aquin. Haussmannien prestige. Devis 48h.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-7e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation d\'appartement dans le 7e arrondissement de Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dans le 7e arrondissement, l\'un des plus prestigieux de Paris, le prix d\'une rénovation complète varie entre 2 500 et 5 000 €/m². Un rafraîchissement (peinture, parquet, petits travaux) : 1 000 – 1 800 €/m². Une rénovation complète standard tous corps de métier : 2 500 – 3 500 €/m². Pour les appartements haussmanniens grand standing avec restauration de moulures, parquets Versailles, cheminées en marbre et finitions de prestige, le budget atteint 4 000 – 5 000 €/m².',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles contraintes patrimoniales s\'appliquent dans le 7e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le 7e arrondissement compte de nombreux immeubles protégés au titre des Monuments Historiques, notamment autour des Invalides, du Palais Bourbon et du ministère des Affaires étrangères. Pour tout immeuble situé à moins de 500 m d\'un monument classé, l\'Architecte des Bâtiments de France doit valider les modifications de façade. Dans les zones de protection, les fenêtres, les ravalements et les toitures sont soumis à des règles strictes. À l\'intérieur, les appartements de grand standing conservent souvent des éléments remarquables (parquets Versailles, moulures, boiseries) dont la restauration est préférable à la suppression.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment rénover un appartement haussmannien dans le 7e en conservant le cachet ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rénover un haussmannien du 7e en préservant son caractère implique plusieurs principes. Conserver les éléments structurants du style : moulures, corniches, parquets point de Hongrie ou Versailles, cheminées, hauteurs sous plafond (3 à 4 m). Pour la cuisine et la salle de bain, intégrer les équipements modernes sans dénaturer les volumes. Utiliser des matériaux nobles en accord avec l\'esprit du lieu : marbre, pierre naturelle, boiseries laquées. L\'éclairage doit valoriser les hauteurs et les ornements. Un artisan expérimenté en rénovation haussmannienne évite les interventions irréversibles qui détruisent la valeur patrimoniale du bien.',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un architecte pour rénover dans le 7e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un architecte est obligatoire si la surface de plancher après travaux dépasse 150 m² ou si les travaux nécessitent un permis de construire. Pour les rénovations de moins de 150 m² (la majorité des appartements parisiens), un architecte n\'est pas légalement requis mais peut être conseillé pour les projets complexes. Espace Design coordonne l\'ensemble des corps de métier et peut s\'appuyer sur des architectes partenaires pour les projets nécessitant un suivi de maîtrise d\'œuvre.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 7e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 7e arrondissement de Paris : Invalides, Eiffel, Saint-Thomas-d\'Aquin. Haussmannien prestige. Devis 48h.',
}

export default function ArticleRenovation7e() {
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
            Rénovation Appartement Paris 7e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le 7e arrondissement est l&apos;un des arrondissements les plus résidentiels et les plus préservés de Paris. Quartier diplomatique, Invalides, Tour Eiffel, Saint-Thomas-d&apos;Aquin : ses immeubles haussmanniens grand standing abritent des appartements d&apos;exception aux volumes généreux, moulures, parquets et cheminées intacts. Rénover dans le 7e, c&apos;est conjuguer exigence patrimoniale et confort contemporain.
          </p>
        </div>
      </section>

      {/* Section 1 — Quartiers */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les quartiers du 7e : Invalides, Tour Eiffel, Saint-Thomas-d&apos;Aquin
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 7e arrondissement est divisé en quatre quartiers administratifs aux ambiances distinctes, tous caractérisés par un bâti haussmannien de qualité et un niveau de préservation patrimoniale exceptionnel. C&apos;est l&apos;arrondissement qui concentre le plus de résidences diplomatiques et d&apos;appartements appartenant à des familles depuis plusieurs générations.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Invalides — prestige institutionnel et patrimoine préservé',
                  detail: 'Le quartier des Invalides borde l\'esplanade du même nom et le Champ-de-Mars. Les immeubles y sont majoritairement haussmanniens, avec des façades en pierre de taille soigneusement entretenues. Nombreux ambassades et hôtels particuliers. Les appartements sont souvent vastes (200 à 400 m²), avec des hauteurs sous plafond de 3,5 à 4,5 m. Coût rénovation : 3 000 – 5 000 €/m².',
                },
                {
                  enjeu: 'Tour Eiffel / Champ-de-Mars — immeubles bourgeois vue dégagée',
                  detail: 'Autour du Champ-de-Mars, les immeubles de la fin XIXe et du début XXe (style néo-haussmannien) offrent des apartements lumineux avec vues sur la Tour Eiffel. La rénovation y est portée par une clientèle internationale exigeante. Forte valorisation à la revente. Coût rénovation : 2 800 – 4 500 €/m².',
                },
                {
                  enjeu: 'Saint-Thomas-d\'Aquin — ambiance village, tissu haussmannien fin',
                  detail: 'Quartier résidentiel prisé, avec une ambiance de village parisien autour de l\'église Saint-Thomas-d\'Aquin. Immeubles haussmanniens plus intimes (5 à 6 étages), appartements de 60 à 150 m² typiques. Forte demande de rénovation pour moderniser tout en conservant le cachet. Coût rénovation : 2 500 – 3 800 €/m².',
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

      {/* Section 2 — Éléments haussmanniens */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Moulures, parquets et cheminées : restaurer l&apos;haussmannien du 7e
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;appartement haussmannien du 7e arrondissement se distingue par des éléments décoratifs et architecturaux qui font toute sa valeur. Leur restauration soigneuse est le socle d&apos;une rénovation réussie dans ce secteur — et un argument de valorisation considérable à la revente.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Restauration des moulures et corniches',
                detail: 'Les moulures en staff (mélange de plâtre et de fibres) peuvent être réparées par injection ou refaites à l\'identique. Les corniches abîmées sont restaurées par moulage en relief. Un staff qualifié travaille à la main pour respecter les profils d\'époque.',
                cout: '80 – 200 €/ml',
              },
              {
                titre: 'Parquets Versailles et point de Hongrie',
                detail: 'Ponçage, comblement et vitrification des parquets anciens. Le parquet Versailles (motif carré avec cadre) est l\'emblème du grand appartement parisien. Sa restauration nécessite un parqueteur spécialisé capable de ressourcer des lames d\'époque.',
                cout: '30 – 80 €/m²',
              },
              {
                titre: 'Cheminées en marbre et manteaux sculptés',
                detail: 'Nettoyage, rejointoiement et lustrage du marbre. Restauration des éléments sculptés (colonnes, chapiteaux, frises). Remise en état du foyer si utilisation souhaitée (tubage acier). Certains marbres du 7e sont des Carrare ou des Brèches d\'Alep à valeur intrinsèque.',
                cout: '2 000 – 8 000 € / unité',
              },
              {
                titre: 'Boiseries et lambris muraux',
                detail: 'Restauration ou remplacement des panneaux de boiseries lambris. Peinture à la main (laques traditionnelles ou peintures à l\'huile pour un galbe parfait). Dorures à la feuille pour les éléments décoratifs si souhaité. Travail de menuisier-ébéniste spécialisé.',
                cout: '300 – 800 €/m²',
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

      {/* Section 3 — Travaux courants */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux courants dans un appartement du 7e : salle de bain, cuisine, électricité
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Au-delà de la restauration patrimoniale, la rénovation d&apos;un appartement du 7e arrondissement comprend les mêmes postes de travaux que tout appartement parisien : mise aux normes électriques, rénovation de la salle de bain et de la cuisine, isolation thermique et phonique. La différence tient dans le niveau de finition attendu — souvent haut de gamme — et la nécessité de travailler sans dénaturer les volumes.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Rénovation salle de bain prestige',
                prix: '12 000 – 35 000 €',
                detail: 'Pour une salle de bain de 6 à 10 m² dans un appartement du 7e, les finitions attendues incluent : sol et murs en marbre ou pierre naturelle, robinetterie haut de gamme (Hansgrohe, Dornbracht), douche à l\'italienne, baignoire îlot, double vasque, miroir rétroéclairé. La plomberie et l\'électricité sont intégralement reprises.',
              },
              {
                type: 'Rénovation cuisine ouverte ou fermée',
                prix: '15 000 – 45 000 €',
                detail: 'La cuisine sur mesure est la règle dans les appartements du 7e. Façades en laque mate ou bois massif, plan de travail en marbre ou Dekton, électroménager encastré haut de gamme (Gaggenau, Miele). Pour les cuisines ouvertes, une verrière d\'atelier acier et verre peut délimiter l\'espace tout en conservant la luminosité.',
              },
              {
                type: 'Mise aux normes électriques complète',
                prix: '8 000 – 20 000 €',
                detail: 'Les appartements anciens du 7e ont souvent des installations électriques des années 1970-1980 à reprendre entièrement : tableau électrique, circuits différenciés, prises 2P+T, éclairage sur circuit dédié, gaines réseau et domotique. Dans les hauteurs sous plafond importantes, les goulottes et saignées sont dissimulées dans les moulures ou les cloisons.',
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
            Budget rénovation appartement Paris 7e : prix 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Estimations tous corps de métier inclus (main d&apos;œuvre + matériaux), hors études et honoraires d&apos;architecte.
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
                    prixM2: '1 000 – 1 800 €',
                  },
                  {
                    niveau: 'Rénovation partielle',
                    prestations: 'Salle de bain ou cuisine + sols + électricité partielle',
                    prixM2: '1 800 – 2 500 €',
                  },
                  {
                    niveau: 'Rénovation complète',
                    prestations: 'Tous corps de métier, finitions soignées, matériaux de qualité',
                    prixM2: '2 500 – 3 500 €',
                  },
                  {
                    niveau: 'Prestige patrimoniale',
                    prestations: 'Restauration moulures, parquet Versailles, marbre, boiseries, domotique',
                    prixM2: '3 500 – 5 000 €',
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
              Conseils pour réussir sa rénovation dans le 7e
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Faire un diagnostic complet de l\'installation électrique avant tout autre travaux',
                'Préserver les éléments patrimoniaux — ils fondent la valeur du bien à la revente',
                'Anticiper les contraintes ABF pour les modifications de façade ou de menuiseries extérieures',
                'Choisir des matériaux nobles cohérents avec le standing de l\'immeuble',
                'Traiter l\'isolation phonique entre appartements — souvent insuffisante dans les immeubles anciens',
                'Prévoir un budget mobilier adapté — dans le 7e, le mobilier et la décoration font partie du projet',
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
              { href: '/blog/renovation-appartement-paris-8e', title: 'Rénovation appartement Paris 8e' },
              { href: '/blog/renovation-appartement-paris-12e', title: 'Rénovation appartement Paris 12e' },
              { href: '/blog/renovation-appartement-paris-16e', title: 'Rénovation appartement Paris 16e' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
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
          Rénovez votre appartement dans le 7e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisans spécialisés en rénovation haussmannienne prestige. Devis gratuit sous 48h.
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
