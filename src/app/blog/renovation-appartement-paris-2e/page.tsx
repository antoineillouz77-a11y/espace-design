import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 2e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-2e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 2e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 2e arrondissement de Paris : Bourse, Sentier, Montorgueil. Artisan local, devis gratuit 48h.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-2e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation dans le 2e arrondissement de Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dans le 2e arrondissement, le prix moyen d\'une rénovation complète se situe entre 1 800 et 3 500 €/m², selon l\'état du bien et le niveau de finition souhaité. Les anciens ateliers textiles du Sentier (hauts plafonds, grandes fenêtres, structures métalliques) peuvent nécessiter des travaux spécifiques qui font monter le budget : isolation thermique par l\'intérieur, remplacement de menuiseries industrielles, mise aux normes électriques. Pour un loft de 80 m² en rénovation complète, comptez entre 100 000 et 200 000 €.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment rénover un loft dans l\'ancien quartier du Sentier ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les anciens ateliers textiles du Sentier présentent des caractéristiques propres : volumes importants (hauteur 3,5 à 5 m), grandes baies vitrées, structures métalliques ou en béton. La rénovation d\'un tel espace passe généralement par : création d\'une mezzanine pour gagner de la surface (4 000 à 12 000 €), isolation thermique et phonique des cloisons (60 à 120 €/m²), installation d\'un plancher chauffant ou d\'un système de chauffage adapté aux grands volumes, et mise aux normes électriques complète. Le tout avec une attention particulière au traitement acoustique, car les anciens planchers industriels transmettent beaucoup les bruits d\'impact.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le 2e arrondissement est-il soumis aux mêmes contraintes ABF que le 1er ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le 2e arrondissement n\'est pas entièrement classé en secteur sauvegardé comme le 1er, mais une grande partie de son territoire est couverte par le Plan Local d\'Urbanisme (PLU) de Paris avec des prescriptions patrimoniales sur certains secteurs (Bourse, Vivienne). L\'avis de l\'ABF est requis pour les travaux extérieurs dans les zones protégées. Pour les travaux intérieurs dans les immeubles haussmanniens ou les anciens ateliers, les contraintes sont généralement moins strictes qu\'au 1er, sauf si l\'immeuble est inscrit ou classé. Renseignez-vous auprès de la Mairie du 2e avant d\'engager des travaux affectant l\'extérieur.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 2e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 2e arrondissement de Paris : Bourse, Sentier, Montorgueil. Artisan local, devis gratuit 48h.',
}

export default function ArticleRenovationParis2e() {
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
            Rénovation Appartement Paris 2e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Sentier, Bourse, Montorgueil — le 2e arrondissement vit une transformation rapide. Anciens ateliers textiles reconvertis en lofts, immeubles haussmanniens gentrifiés, rues animées de Montorgueil : guide complet pour rénover dans ce quartier en pleine mutation en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Portrait du 2e */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Un arrondissement en pleine transformation
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 2e arrondissement est le plus petit de Paris mais l&apos;un des plus dynamiques. Le quartier Sentier — jadis coeur de l&apos;industrie textile parisienne — est devenu en moins de vingt ans le hub français des startups et du numérique. Les anciens ateliers de confection sont rachetés, réhabilités, transformés en espaces de coworking ou en appartements atypiques à hauts plafonds.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              À Montorgueil, la gentrification a transformé un quartier populaire en adresse prisée. Les appartements au-dessus de la rue piétonne se louent à prix d&apos;or. La rénovation y suit une logique de valorisation maximale : cuisine ouverte, parquet ancien restauré, salle de bain de standing.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Lofts du Sentier : volumes atypiques',
                  detail: 'Les anciens ateliers textiles offrent des volumes généreux (3,5 à 5 m sous plafond) et de grandes baies vitrées orientées nord. Leur rénovation nécessite des solutions spécifiques : isolation renforcée, chauffage adapté aux grands volumes, mezzanine, traitement acoustique des planchers industriels.',
                },
                {
                  enjeu: 'Immeubles haussmanniens de la Bourse et Vivienne',
                  detail: 'Le secteur de la Bourse et des galeries Vivienne conserve des immeubles du Second Empire en très bon état. Moulures, parquets point de Hongrie, cheminées d\'époque : la rénovation doit composer avec un bâti riche mais parfois fragile. Certains bâtiments sont inscrits ou classés.',
                },
                {
                  enjeu: 'Montorgueil : appartements à fort potentiel',
                  detail: 'Les appartements de la rue Montorgueil et des rues adjacentes sont souvent de petites surfaces (30 à 60 m²) avec un fort potentiel locatif. La rénovation vise ici la valorisation maximale au m² : cuisine ouverte, salle de bain repensée, optimisation des rangements dans des plans souvent étroits.',
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

      {/* Section 2 — Travaux spécifiques lofts */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénover un ancien atelier textile : les spécificités techniques
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les anciens ateliers du Sentier présentent des enjeux techniques propres, très différents d&apos;un appartement haussmannien classique. Voici les postes de travaux à anticiper.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Isolation thermique et phonique',
                detail: 'Les anciennes menuiseries industrielles (acier simple vitrage) sont très peu performantes. Remplacement par double vitrage aluminium thermolaqué ou survitrages intérieurs. Doublage des murs périphériques avec laine de roche 100 mm. Coût : 80 à 150 €/m².',
                cout: '80 – 150 €/m²',
              },
              {
                titre: 'Création de mezzanine',
                detail: 'Dans un atelier de 4 m sous plafond, une mezzanine de 20 m² crée une chambre ou un bureau supplémentaire. Structure métallique ou bois, escalier sur mesure, garde-corps. Nécessite un calcul de structure. Coût global : 8 000 à 20 000 €.',
                cout: '8 000 – 20 000 €',
              },
              {
                titre: 'Chauffage grands volumes',
                detail: 'Le chauffage au sol est idéal mais coûteux à installer (chape + plancher). Alternatives : radiateurs à inertie de grande puissance, ventilo-convecteurs, pompe à chaleur air/air avec gainable. Prévoir 6 000 à 15 000 € pour un chauffage complet.',
                cout: '6 000 – 15 000 €',
              },
              {
                titre: 'Acoustique des planchers industriels',
                detail: 'Les dalles béton transmettent fortement les bruits d\'impact. Pose d\'une sous-couche résiliente sous revêtement de sol (chape sèche ou carreau de plâtre sur plots). Traitement de la périphérie avec joint acoustique. Coût : 30 à 60 €/m².',
                cout: '30 – 60 €/m²',
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

      {/* Section 3 — Appartements haussmanniens et Montorgueil */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénovation des appartements haussmanniens et quartier Montorgueil
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Pour les appartements haussmanniens classiques et les petites surfaces de Montorgueil, les travaux de rénovation suivent des logiques différentes selon l&apos;objectif : résidence principale ou investissement locatif.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Cuisine ouverte sur séjour',
                prix: '8 000 – 20 000 €',
                detail: 'Suppression d\'une cloison légère ou ouverture d\'un mur porteur pour fusionner cuisine et séjour. Tendance dominante dans les appartements du 2e destinés à la location ou à la revente. Inclut : hotte décorative, îlot central ou plan de travail en L, électricité et plomberie déplacées.',
              },
              {
                type: 'Salle de bain complète',
                prix: '6 000 – 15 000 €',
                detail: 'Refonte totale avec douche à l\'italienne, meuble vasque suspendu, carrelage grand format. Dans les petites surfaces de Montorgueil, la salle de bain de 3 à 4 m² doit être optimisée. Niche de rangement dans la douche, miroir avec éclairage LED intégré, WC suspendu.',
              },
              {
                type: 'Parquet restauré ou remplacé',
                prix: '40 – 100 €/m²',
                detail: 'Les parquets anciens en chêne massif méritent d\'être restaurés (ponçage + vitrification : 40 – 60 €/m²) plutôt que remplacés. Si le parquet est trop dégradé, pose d\'un parquet flottant chêne contrecollé (50 – 100 €/m² posé). Éviter le stratifié dans les biens haut de gamme.',
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
            Prix de rénovation dans le 2e arrondissement : tableau 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs moyens constatés à Paris 2e, main d&apos;œuvre et matériaux inclus.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de bien</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau travaux</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: 'Appartement haussmannien',
                    niveau: 'Rafraîchissement (peinture + sol)',
                    prix: '500 – 900 €',
                  },
                  {
                    type: 'Appartement haussmannien',
                    niveau: 'Rénovation complète',
                    prix: '1 800 – 3 000 €',
                  },
                  {
                    type: 'Loft ancien atelier',
                    niveau: 'Rénovation partielle',
                    prix: '1 200 – 2 000 €',
                  },
                  {
                    type: 'Loft ancien atelier',
                    niveau: 'Rénovation complète + mezzanine',
                    prix: '2 500 – 3 500 €',
                  },
                ].map((row, i) => (
                  <tr key={row.type + row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points de vigilance dans le 2e arrondissement
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Vérifier la nature des murs avant toute ouverture (porteurs fréquents dans les ateliers)',
                'Anticiper la mise aux normes électrique si le tableau est ancien ou en aluminium',
                'Diagnostics amiante et plomb obligatoires dans les immeubles avant 1997',
                'Vérifier les autorisations de copropriété avant de modifier les parties communes',
                'Prévoir l\'accès chantier : certains immeubles du 2e n\'ont pas d\'ascenseur ni de monte-charge',
                'Consulter le règlement de copropriété pour les contraintes sur les revêtements de sol',
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

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-appartement-paris-1er', title: 'Rénovation appartement Paris 1er' },
              { href: '/blog/renovation-maison-ancienne-paris', title: 'Rénovation maison ancienne Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/choisir-carrelage-salle-de-bain', title: 'Choisir son carrelage salle de bain' },
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
              { href: '/renovation-paris-1er', label: 'Paris 1er' },
              { href: '/renovation-paris-3e', label: 'Paris 3e' },
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-saint-denis', label: 'Saint-Denis' },
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
          Votre projet de rénovation dans le 2e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Loft, haussmannien, petit studio Montorgueil — devis gratuit sous 48h.
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
