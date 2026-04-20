import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 16e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-16e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 16e : artisan & prix 2025 | Espace Design',
  description: "Rénovation appartement dans le 16e arrondissement de Paris : Passy, Auteuil, Trocadéro. Prestige, haussmannien, artisan 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-16e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation d'appartement dans le 16e arrondissement de Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le 16e arrondissement, les prix de rénovation sont parmi les plus élevés de Paris en raison du niveau de prestations attendu et du coût des matériaux nobles utilisés. Comptez 1 500 à 2 500 €/m² pour une rénovation standard, 2 500 à 4 000 €/m² pour des finitions haut de gamme avec matériaux premium, et jusqu'à 5 500 €/m² pour des appartements de grand standing avec restauration patrimoniale complète (moulures, parquets Versailles, boiseries). Pour un appartement de 100 m², le budget total oscille entre 150 000 et 400 000 €.",
      },
    },
    {
      '@type': 'Question',
      name: "Quels types d'appartements trouve-t-on dans le 16e arrondissement ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le 16e arrondissement offre une grande variété typologique. Côté Passy et Trocadéro : immeubles haussmanniens et bourgeois des années 1880-1910, avec de grands appartements familiaux (80 à 300 m²). Côté Auteuil : villas et lotissements privés des années 1900-1930 (style Art Nouveau, néo-Louis XVI), maisons de ville et appartements en rez-de-jardin. Autour de la Muette : immeubles Art Déco et néoclassiques des années 1920-1935, avec des volumes généreux et des éléments décoratifs spécifiques à cette période.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment rénover un appartement bourgeois des années 1900-1930 dans le 16e ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les appartements des immeubles bourgeois du 16e (1900-1930) présentent des caractéristiques distinctives : parquets point de Hongrie ou mosaïque, moulures art nouveau ou géométriques, ferronneries d'ascenseur, carreaux de grès dans les entrées. La rénovation doit conserver ces éléments tout en modernisant les équipements. Points-clés : conserver le carrelage d'entrée d'époque (très valorisant), restaurer les moulures plutôt que de les supprimer, remplacer les menuiseries dans le respect des profils d'origine. L'électricité et la plomberie sont à reprendre intégralement dans la grande majorité des cas.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il une autorisation spéciale pour rénover dans le 16e arrondissement ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Certains secteurs du 16e sont soumis à des périmètres de protection ABF (autour du Trocadéro, du Palais de Tokyo, des Serres d'Auteuil). Pour les travaux intérieurs, aucune autorisation spéciale n'est requise au-delà du permis de construire standard si la surface créée dépasse 20 m². Pour les menuiseries extérieures et le ravalement, vérifiez auprès de la mairie du 16e si votre immeuble est dans un secteur sauvegardé. Espace Design vous accompagne dans ces démarches préalables.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 16e : artisan & prix 2025 | Espace Design',
  description: "Rénovation appartement dans le 16e arrondissement de Paris : Passy, Auteuil, Trocadéro. Prestige, haussmannien, artisan 2025.",
}

export default function ArticleRenovationParis16e() {
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
            Rénovation Appartement Paris 16e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le 16e arrondissement est l&apos;un des territoires les plus homogènes et les plus préservés de Paris. Passy, Trocadéro, Auteuil, La Muette : ses immeubles bourgeois des années 1900-1930 et ses haussmanniens grand standing accueillent une clientèle HNWI exigeante sur la qualité des finitions. Guide complet des prix et bonnes pratiques pour rénover dans le 16e en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Quartiers */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Passy, Trocadéro, Auteuil : l&apos;architecture bourgeoise du 16e
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 16e arrondissement se distingue par la qualité et la cohérence de son bâti. À la différence de quartiers plus populaires, les immeubles y sont quasi-exclusivement bourgeois ou grand standing, construits entre 1880 et 1940, avec un soin apporté aux façades, aux halls et aux parties communes qui se retrouve dans les appartements eux-mêmes.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: "Passy — haussmannien et grand bourgeois, vue Seine",
                  detail: "Le quartier Passy longe la Seine et offre des vues dégagées exceptionnelles. Les immeubles haussmanniens (1870-1900) y côtoient des immeubles de rapport plus tardifs aux façades en pierre de taille ornées. Les appartements sont souvent traversants, lumineux, avec des surfaces moyennes de 80 à 200 m². Coût rénovation : 2 000 à 3 500 €/m².",
                },
                {
                  enjeu: "Trocadéro — prestige absolu, immeubles d'exception",
                  detail: "Autour du Trocadéro et de l'avenue Kléber, les immeubles sont parmi les plus prestigieux de Paris. Construits majoritairement entre 1900 et 1930, ils allient grands volumes, hall de marbre, ascenseur de service et appartements de 150 à 500 m². La rénovation mobilise des budgets de 3 000 à 5 500 €/m² pour des finitions à la hauteur du lieu.",
                },
                {
                  enjeu: "Auteuil — villas, lotissements privés, esprit village",
                  detail: "Le secteur Auteuil se distingue par ses villas privées et ses lotissements des années 1900-1920, souvent en style Art Nouveau ou néo-gothique. Les maisons de ville et appartements en rez-de-jardin y sont nombreux. Cadre de vie exceptionnel avec jardins privatifs. Coût rénovation : 1 800 à 3 000 €/m² selon le type de bien.",
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

      {/* Section 2 — Finitions haut de gamme */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Finitions haut de gamme : les standards du 16e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La clientèle du 16e arrondissement est habituée à des niveaux de finition qui dépassent la moyenne parisienne. Marbre, boiseries, domotique haut de gamme et robinetterie de prestige sont la norme dans les rénovations de standing de cet arrondissement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Sols en marbre ou pierre naturelle",
                detail: "Marbre Carrare, Calacatta, Travertin, Pierre de Bourgogne. Pose à joint fin ou à joint vif selon l'esthétique. La pierre naturelle est le choix roi dans les entrées, salles de bain et cuisines des appartements du 16e.",
                cout: "150 – 400 €/m²",
              },
              {
                titre: "Boiseries et menuiseries intérieures sur mesure",
                detail: "Portes en bois massif, boiseries murales, bibliothèques intégrées du sol au plafond. Laquage à la main (4 à 8 couches) ou finition huilée pour le bois naturel. Menuisier-ébéniste spécialisé pour les travaux de qualité muséale.",
                cout: "300 – 800 €/m² de surface",
              },
              {
                titre: "Domotique et éclairage architectural",
                detail: "Système domotique Lutron ou Crestron pour la gestion de l'éclairage, des volets, du chauffage et de l'audiovisuel. Éclairage architectural (spots encastrés, corniche lumineuse, niche rétroéclairée) valorisant les volumes et les ornements.",
                cout: "15 000 – 50 000 €",
              },
              {
                titre: "Robinetterie et sanitaires de luxe",
                detail: "Robinetterie Dornbracht, Fantini, Vola ou THG Paris. Baignoire îlot en fonte émaillée, douche à l'italienne XL (120 × 120 cm minimum), paroi de douche sans bord apparent. Chauffage au sol électrique ou hydraulique dans toutes les pièces d'eau.",
                cout: "5 000 – 25 000 € (SDB complète)",
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
            Travaux courants dans un appartement du 16e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les rénovations dans le 16e arrondissement combinent systématiquement mise aux normes des équipements techniques et élévation du niveau de finition. La valeur au m² élevée du secteur (10 000 à 20 000 €/m²) justifie des investissements importants en rénovation.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Rénovation salle de bain prestige",
                prix: "15 000 – 45 000 €",
                detail: "Salle de bain de 6 à 12 m² entièrement repensée : sol en marbre, douche à l'italienne XL, baignoire îlot, double vasque sur meuble sur mesure, miroir rétroéclairé, radiateur sèche-serviettes design, ventilation silencieuse. La plomberie et l'électricité sont intégralement reprises. Robinetterie haut de gamme (Dornbracht, Hansgrohe Axor).",
              },
              {
                type: "Cuisine sur mesure et ouverte",
                prix: "20 000 – 60 000 €",
                detail: "La cuisine sur mesure est un standard dans le 16e. Façades en laque mate 2 composants ou en bois massif, plan de travail en marbre ou Dekton ultra-compact, électroménager de prestige encastré (Gaggenau, Miele Generation 7000). Pour les cuisines ouvertes, intégration d'une hotte à recirculation design ou d'un conduit de ventilation discret.",
              },
              {
                type: "Réfection complète parquets",
                prix: "80 – 200 €/m²",
                detail: "Ponçage et vitrification des parquets anciens (point de Hongrie, Versailles, chevrons), remplacement des lames abîmées, teinte personnalisée. Pour les rénovations complètes, remplacement par un parquet massif chêne 23 mm huilé ou verni satiné. Dans les entrées de standing, mosaïque granito ou carrelage octogonal d'époque à restaurer.",
              },
              {
                type: "Mise aux normes électriques et domotique",
                prix: "12 000 – 35 000 €",
                detail: "Reprise complète de l'installation électrique NF C 15-100 + intégration d'un système domotique (Lutron, Legrand Céliane with Netatmo) pour la gestion de l'éclairage, des volets motorisés et du chauffage. Câblage réseau Cat 6A dissimulé dans les moulures et les cloisons. Pré-équipement borne de recharge véhicule électrique.",
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
            Prix rénovation appartement Paris 16e : tableau 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Estimations tous corps de métier inclus (main d&apos;œuvre + matériaux), hors honoraires d&apos;architecte et mobilier.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total 100 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: "Rafraîchissement",
                    prestations: "Peinture + parquets + petits travaux",
                    prixM2: "800 – 1 500 €",
                    total: "80 000 – 150 000 €",
                  },
                  {
                    niveau: "Rénovation complète standard",
                    prestations: "Tous corps de métier, finitions soignées",
                    prixM2: "1 500 – 2 500 €",
                    total: "150 000 – 250 000 €",
                  },
                  {
                    niveau: "Haut de gamme",
                    prestations: "Marbre, boiseries, domotique, matériaux premium",
                    prixM2: "2 500 – 4 000 €",
                    total: "250 000 – 400 000 €",
                  },
                  {
                    niveau: "Grand standing exceptionnel",
                    prestations: "Restauration patrimoine + tout sur mesure + architecte",
                    prixM2: "4 000 – 5 500 €",
                    total: "400 000 – 550 000 €",
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
              Points d&apos;attention pour une rénovation dans le 16e
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Choisir des matériaux nobles cohérents avec le standing de l'immeuble et le marché local",
                "Préserver les éléments patrimoniaux — un parquet Versailles restauré vaut bien plus qu'un neuf",
                "Anticiper les contraintes de copropriété (règlement intérieur, horaires de travaux)",
                "Intégrer la domotique dès la phase électricité — impossible à ajouter après",
                "Traiter l'isolation phonique inter-appartements souvent insuffisante dans les immeubles anciens",
                "Prévoir un budget honoraires architecte (5 à 12 %) pour les projets complexes",
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
              { href: '/blog/renovation-appartement-paris-7e', title: 'Rénovation appartement Paris 7e' },
              { href: '/blog/renovation-appartement-paris-8e', title: 'Rénovation appartement Paris 8e' },
              { href: '/blog/renovation-appartement-paris-12e', title: 'Rénovation appartement Paris 12e' },
              { href: '/blog/prix-renovation-salle-de-bain-paris', title: 'Prix rénovation salle de bain Paris' },
              { href: '/blog/domotique-appartement-paris', title: 'Domotique appartement Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation haussmannien Paris' },
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
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-saint-cloud', label: 'Saint-Cloud' },
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
          Votre projet de rénovation dans le 16e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisans spécialisés en rénovation prestige. Devis gratuit sous 48h. Intervention sur Passy, Trocadéro, Auteuil.
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
