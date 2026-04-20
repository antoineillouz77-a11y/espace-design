import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 14e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-14e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 14e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 14e arrondissement de Paris : Montparnasse, Alésia, Plaisance. Artisan, devis 48h.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-14e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix au m² pour rénover un appartement dans le 14e arrondissement de Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix de rénovation dans le 14e arrondissement se situe entre 1 500 et 3 000 €/m² selon le niveau de prestations. Un rafraîchissement (peinture, sol) revient à 400-700 €/m². Une rénovation partielle (salle de bain ou cuisine + peinture) oscille entre 800 et 1 400 €/m². Une rénovation complète incluant électricité, plomberie, cuisine, salle de bain et sols atteint 1 500 à 2 500 €/m². Les appartements des années 1930-1960, très courants dans le 14e, nécessitent souvent une remise aux normes électrique complète.',
      },
    },
    {
      '@type': 'Question',
      name: 'Les appartements du 14e arrondissement ont-ils des spécificités de rénovation ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le 14e arrondissement concentre principalement des immeubles des années 1930 à 1960 autour de Montparnasse et Alésia, ainsi que des maisons de ville en fond de cour, rares à Paris. Les immeubles des années 1930-60 ont souvent une belle hauteur sous plafond (2,60 à 2,80 m) mais des réseaux électriques et de plomberie à remettre aux normes. Les maisons de ville offrent des possibilités d\'extension (surélévation, véranda) sous réserve d\'accord de la mairie et de la copropriété.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on rénover une maison de ville en fond de cour dans le 14e ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, les maisons de ville en fond de cour du 14e arrondissement peuvent être rénovées et parfois étendues. Une déclaration préalable de travaux est nécessaire pour les modifications de façade, et un permis de construire pour toute extension dépassant 20 m². Ces maisons cumulent souvent plusieurs avantages : jardin privatif, absence de voisins mitoyens en étage et possibilité d\'isolation thermique par l\'extérieur. L\'isolation des combles (si maison avec toit) est également possible et très efficace.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la durée d\'une rénovation complète dans le 14e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour un appartement de 50 m² dans le 14e, une rénovation complète (tous corps de métier) dure entre 8 et 14 semaines. Pour 70 m² avec réorganisation de la distribution, comptez 12 à 18 semaines. Le délai dépend aussi du délai d\'obtention des autorisations administratives (déclaration préalable : 1 mois, permis de construire : 2 à 3 mois). Espace Design coordonne l\'ensemble des corps de métier pour minimiser les délais.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 14e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 14e arrondissement de Paris : Montparnasse, Alésia, Plaisance. Artisan, devis 48h.',
}

export default function ArticleRenovationParis14() {
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
            Rénovation Appartement Paris 14e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Montparnasse, Alésia, Plaisance, Pernety : le 14e arrondissement est un quartier résidentiel calme, plébiscité par les familles et les couples. Entre immeubles des années 1930-1960, résidences modernes et maisons de ville en fond de cour, la diversité architecturale du 14e appelle des savoir-faire variés. Espace Design intervient dans tout le 14e avec devis sous 48h.
          </p>
        </div>
      </section>

      {/* Section 1 — Quartiers */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les quartiers du 14e et leur architecture
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 14e arrondissement est l&apos;un des plus calmes et résidentiels de la rive gauche. Sa géographie architecturale est marquée par des immeubles d&apos;entre-deux-guerres, un tissu pavillonnaire dense et des résidences modernes qui coexistent harmonieusement.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Montparnasse : immeubles 1930-1960 et belle hauteur sous plafond',
                  detail: 'Le secteur Montparnasse concentre des immeubles construits entre 1930 et 1960, aux façades en pierre de taille ou en béton enduit. Ces appartements affichent une hauteur sous plafond de 2,60 à 2,80 m et des pièces généreuses. Les réseaux (électricité, plomberie) nécessitent souvent une mise aux normes complète. La rénovation met l\'accent sur l\'actualisation des cuisines et salles de bain sans dénaturer les volumes.',
                },
                {
                  enjeu: 'Alésia - Plaisance : quartier résidentiel familial',
                  detail: 'Entre les rues d\'Alésia, de Plaisance et de Vanves, le 14e sud est un quartier de village où les appartements familiaux côtoient des ateliers d\'artistes reconvertis. Le calme du quartier et la présence de nombreuses écoles en font un secteur très recherché par les familles. Les travaux portent souvent sur l\'agrandissement de la cuisine, la création d\'une troisième chambre ou la rénovation complète avant mise en location.',
                },
                {
                  enjeu: 'Maisons de ville en fond de cour : une typologie rare et recherchée',
                  detail: 'Le 14e compte un nombre inhabituel de maisons de ville en fond de cour, discrètes depuis la rue mais offrant un cadre de vie exceptionnel. Ces maisons de 80 à 200 m² sur 2 à 3 niveaux peuvent bénéficier d\'une rénovation globale : isolation totale, extension possible, toiture à refaire, création de verrière ou de terrasse en toiture.',
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

      {/* Section 2 — Travaux courants */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux de rénovation les plus demandés dans le 14e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Nos artisans interviennent régulièrement dans le 14e pour les chantiers suivants, adaptés aux typologies d&apos;appartements les plus courantes du secteur.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Rénovation cuisine et ouverture sur séjour',
                solution: 'Très demandée dans les appartements des années 1960 du 14e, où la cuisine est souvent cloisonnée. Vérification du mur porteur, démolition de la cloison, déplacement des réseaux, pose d\'un nouveau revêtement de sol, cuisine équipée sur mesure ou en kit haut de gamme.',
                cout: '10 000 – 25 000 €',
              },
              {
                titre: 'Rénovation salle de bain complète',
                solution: 'Remplacement de l\'ensemble : douche italienne ou baignoire, meuble vasque suspendu, WC suspendu, nouveau carrelage sol et mur, VMC double flux, mise aux normes électricité (circuits séparés). Durée : 2 à 3 semaines.',
                cout: '7 000 – 20 000 €',
              },
              {
                titre: 'Isolation thermique (maisons de ville)',
                solution: 'Pour les maisons en fond de cour du 14e : isolation des combles par soufflage (laine minérale ou ouate de cellulose), isolation des murs par l\'extérieur (ITE) si autorisée, remplacement des fenêtres par du double vitrage performant. Réduction de la facture énergétique de 30 à 60 %.',
                cout: '150 – 400 €/m² de surface isolée',
              },
              {
                titre: 'Mise aux normes électricité',
                solution: 'Obligatoire pour les appartements construits avant 1950, très courants dans le 14e. Remplacement du tableau électrique (fusibles à vis), création de circuits séparés cuisine/salle de bain, pose de prises de terre, mise aux normes de la salle de bain (zones de sécurité). Nécessaire avant toute vente.',
                cout: '3 500 – 9 000 €',
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

      {/* Section 3 — Rénover avant de vendre ou louer */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénover avant de vendre ou de mettre en location dans le 14e
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le marché immobilier du 14e arrondissement est actif et la rénovation représente un levier de valorisation significatif. Nos artisans réalisent régulièrement des rénovations de valorisation pour des propriétaires souhaitant optimiser leur prix de vente ou attirer de bons locataires.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Rénovation express avant vente',
                prix: '400 – 800 €/m²',
                detail: 'Peinture blanche uniformisée, ponçage et vitrification du parquet, remplacement des robinetteries, nettoyage des joints de salle de bain, remplacement des interrupteurs et prises vieillissants. Ces travaux réalisés en 1 à 2 semaines peuvent ajouter 5 à 10 % au prix de vente.',
              },
              {
                type: 'Home staging et rénovation légère',
                prix: '600 – 1 200 €/m²',
                detail: 'En complément du home staging, une rénovation légère (cuisine rafraîchie, salle de bain modernisée, parquet rénové) transforme un bien vieillissant en appartement attractif sans les coûts d\'une rénovation complète. Retour sur investissement généralement positif dans le 14e où les prix au m² atteignent 10 000 – 12 000 €.',
              },
              {
                type: 'Mise aux normes DPE (diagnostic de performance énergétique)',
                prix: '150 – 350 €/m²',
                detail: 'Depuis 2023, les logements classés G sont interdits à la location. Dans le 14e, de nombreux appartements anciens sont concernés. Isolation des murs, remplacement des fenêtres, nouvelle chaudière à condensation ou pompe à chaleur : nos artisans vous accompagnent pour atteindre a minima la classe E et maintenir votre bien en location.',
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
            Prix rénovation appartement Paris 14e : tableau récapitulatif 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Estimations main d&apos;œuvre et matériaux inclus pour des appartements situés dans le 14e arrondissement de Paris.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total 55 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture + sol + petites réparations',
                    prixM2: '400 – 700 €',
                    total: '22 000 – 38 500 €',
                  },
                  {
                    niveau: 'Rénovation partielle',
                    prestations: 'Cuisine ou SDB + peinture + sol',
                    prixM2: '800 – 1 400 €',
                    total: '44 000 – 77 000 €',
                  },
                  {
                    niveau: 'Rénovation complète',
                    prestations: 'Cuisine + SDB + électricité + plomberie + sols',
                    prixM2: '1 500 – 2 500 €',
                    total: '82 500 – 137 500 €',
                  },
                  {
                    niveau: 'Haut de gamme',
                    prestations: 'Tout compris + extension ou verrière + matériaux premium',
                    prixM2: '2 500 – 3 000 €',
                    total: '137 500 – 165 000 €',
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
              Points de vigilance avant de démarrer une rénovation dans le 14e
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Vérifier le règlement de copropriété avant tout projet de modification structurelle',
                'Commander un diagnostic amiante si l\'immeuble date d\'avant 1997',
                'Contrôler la présence de plomb dans les peintures (avant 1949) et la plomberie',
                'Anticiper les délais administratifs (déclaration préalable : 1 mois minimum)',
                'Prévoir 10 % de budget supplémentaire pour les imprévus (réseaux non conformes)',
                'Vérifier la capacité électrique du tableau avant d\'envisager une cuisine équipée',
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
              { href: '/blog/renovation-appartement-paris-11e', title: 'Rénovation appartement Paris 11e' },
              { href: '/blog/renovation-appartement-paris-18e', title: 'Rénovation appartement Paris 18e' },
              { href: '/blog/prix-renovation-salle-de-bain-paris', title: 'Prix rénovation salle de bain Paris' },
              { href: '/blog/devis-travaux-renovation-paris', title: 'Devis travaux rénovation Paris' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
              { href: '/renovation-paris', title: 'Rénovation appartement Paris' },
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
              { href: '/renovation-paris-13e', label: 'Paris 13e' },
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-montrouge', label: 'Montrouge' },
              { href: '/renovation-malakoff', label: 'Malakoff' },
              { href: '/renovation-bagneux', label: 'Bagneux' },
              { href: '/renovation-chatillon', label: 'Châtillon' },
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
          Rénover votre appartement dans le 14e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit sur place. Devis détaillé sous 48h. Artisan local, spécialiste de la rénovation parisienne.
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
