import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ Rénovation Paris — Questions Fréquentes | Espace Design',
  description:
    'Toutes les réponses à vos questions sur la rénovation à Paris : prix, délais, artisans, matériaux, devis, garanties. Guide Espace Design 2025.',
  keywords: [
    'faq rénovation Paris',
    'questions rénovation appartement Paris',
    'prix rénovation Paris 2025',
    'combien coûte rénovation Paris',
    'artisan rénovation Paris questions',
  ],
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://espacedesignparis.fr/faq' },
  ],
}

const faqCategories = [
  {
    categorie: 'Prix & Budgets',
    items: [
      {
        q: 'Quel est le prix moyen d\'une rénovation d\'appartement à Paris ?',
        a: 'Le prix d\'une rénovation à Paris varie selon l\'ampleur des travaux : 500–800 €/m² pour un rafraîchissement (peinture, sols), 800–1 500 €/m² pour une rénovation partielle (une ou deux pièces), 1 500–2 500 €/m² pour une rénovation complète (tous corps de métier), et 2 500–4 000 €/m² pour du haut de gamme avec matériaux premium. Ces prix incluent la main d\'œuvre et les fournitures standard.',
        link: { href: '/blog/prix-renovation-appartement-paris', label: 'Guide prix complet →' },
      },
      {
        q: 'Combien coûte la rénovation d\'une salle de bain à Paris ?',
        a: 'Une rénovation de salle de bain à Paris coûte entre 5 000 et 20 000 € selon la surface et les prestations. Pour une salle de bain de 5 m² avec douche italienne, carrelage et meuble vasque : comptez 7 000 à 12 000 € en finitions standard, 12 000 à 20 000 € en finitions haut de gamme (zellige, robinetterie design, douche à l\'italienne sur-mesure).',
        link: { href: '/renovation-salle-de-bain-paris', label: 'Rénovation salle de bain →' },
      },
      {
        q: 'Combien coûte la rénovation d\'une cuisine à Paris ?',
        a: 'La rénovation d\'une cuisine à Paris coûte entre 5 000 et 25 000 €. En main d\'œuvre pure (pose des meubles + plomberie + électricité) : 3 000 à 8 000 €. En rénovation complète avec mobilier semi sur-mesure : 8 000 à 15 000 €. Cuisine entièrement sur-mesure avec plan de travail pierre et électroménager intégré : 15 000 à 30 000 €.',
        link: { href: '/renovation-cuisine-paris', label: 'Rénovation cuisine →' },
      },
      {
        q: 'Quel budget prévoir pour rénover un studio parisien ?',
        a: 'La rénovation d\'un studio de 20 à 30 m² à Paris coûte entre 15 000 et 60 000 € selon le niveau de rénovation. Un rafraîchissement (peinture + parquet + luminaires) : 8 000 à 15 000 €. Une rénovation complète avec cuisine et salle de bain refaites : 25 000 à 50 000 €. Un studio optimisé avec aménagement sur-mesure (lit escamotable, rangements intégrés) : 35 000 à 70 000 €.',
        link: { href: '/renovation-studio-paris', label: 'Rénovation studio →' },
      },
      {
        q: 'Comment estimer le budget de ma rénovation ?',
        a: 'Pour estimer votre budget : définissez les pièces à rénover et le niveau de finition souhaité, multipliez la surface par le coût au m² correspondant (voir notre tableau des tarifs), ajoutez 10 à 15% de marge pour les imprévus, et demandez 3 devis à des artisans qualifiés pour comparer. Espace Design offre des devis gratuits et détaillés sous 48h.',
        link: { href: '/tarifs', label: 'Voir nos tarifs →' },
      },
    ],
  },
  {
    categorie: 'Délais & Organisation',
    items: [
      {
        q: 'Combien de temps dure une rénovation d\'appartement à Paris ?',
        a: 'Les délais varient selon l\'ampleur des travaux. Un rafraîchissement (peinture + sols) d\'un T3 : 2 à 3 semaines. Une rénovation partielle avec salle de bain et cuisine : 4 à 8 semaines. Une rénovation complète d\'un 3 pièces de 70 m² : 8 à 14 semaines. Ces délais incluent la préparation du chantier, les corps de métier et les finitions. Espace Design coordonne tous les intervenants pour respecter le planning convenu.',
        link: null,
      },
      {
        q: 'Faut-il quitter son appartement pendant les travaux ?',
        a: 'Pour une rénovation complète (électricité, plomberie, cloisons), il est fortement recommandé de quitter l\'appartement pour des raisons de sécurité et de confort. Pour un rafraîchissement partiel (une pièce à la fois), il est possible de rester, en organisant les travaux pièce par pièce. Espace Design prévoit toujours une protection des zones non rénovées (bâches, fermetures provisoires).',
        link: null,
      },
      {
        q: 'Quelle est la meilleure période pour rénover à Paris ?',
        a: 'Il n\'y a pas de mauvaise saison pour rénover, mais les artisans sont plus disponibles en janvier-février et en automne (septembre-novembre). L\'été (juillet-août) est souvent chargé et les délais peuvent être plus longs. Pour des travaux nécessitant séchage (enduits, béton ciré, peinture), évitez les périodes de forte humidité et préférez un appartement chauffé.',
        link: null,
      },
    ],
  },
  {
    categorie: 'Artisans & Garanties',
    items: [
      {
        q: 'Comment choisir un bon artisan rénovateur à Paris ?',
        a: 'Pour choisir un bon artisan à Paris : vérifiez son assurance décennale et RC professionnelle (obligatoires), demandez des références et photos de chantiers similaires, comparez au moins 3 devis détaillés poste par poste, assurez-vous qu\'il est joignable et réactif, préférez un artisan local qui connaît les spécificités des immeubles parisiens (haussmanniens, années 70, etc.). Méfiez-vous des prix anormalement bas.',
        link: { href: '/blog/choisir-artisan-renovation-paris', label: 'Guide choix artisan →' },
      },
      {
        q: 'Espace Design a-t-il une assurance décennale ?',
        a: 'Oui, Espace Design est couvert par une assurance décennale et une assurance responsabilité civile professionnelle. L\'assurance décennale couvre tous les travaux de construction et de rénovation pendant 10 ans après la réception des travaux. Nous pouvons vous fournir notre attestation d\'assurance sur simple demande.',
        link: null,
      },
      {
        q: 'Que contient un devis de rénovation sérieux ?',
        a: 'Un devis sérieux doit comporter : le détail poste par poste (désignation, quantités, unité, prix unitaire), la distinction fournitures / main d\'œuvre, le taux de TVA applicable (10% pour travaux dans logements de plus de 2 ans), les délais d\'exécution, les conditions de paiement et les modalités de révision. Méfiez-vous des devis trop vagues ou au forfait global sans détail.',
        link: { href: '/blog/devis-renovation-paris', label: 'Guide devis rénovation →' },
      },
    ],
  },
  {
    categorie: 'Matériaux & Techniques',
    items: [
      {
        q: 'Quel parquet choisir pour un appartement parisien ?',
        a: 'Pour un appartement haussmannien : le parquet massif chêne est le choix traditionnel (pose clouée ou collée, 80-150€/m² posé). Pour un appartement moderne : le parquet contrecollé offre un excellent rapport qualité-prix et une meilleure résistance aux variations hygrométriques. Le stratifié convient aux petits budgets. La rénovation (ponçage + vitrification) d\'un parquet ancien coûte 15 à 30€/m².',
        link: { href: '/parquet-paris', label: 'Service parquet →' },
      },
      {
        q: 'Peut-on installer du béton ciré dans une salle de bain parisienne ?',
        a: 'Oui, le béton ciré est parfaitement adapté à la salle de bain à condition d\'être correctement appliqué et protégé. Il faut appliquer 3 à 5 couches de résine, puis 2 couches de cire ou polyuréthane imperméabilisant. Coût : 90 à 180€/m² posé. Attention aux mouvements du support : le béton ciré ne doit pas être appliqué sur des supports fissurés ou instables.',
        link: { href: '/carrelage-paris', label: 'Service carrelage & sols →' },
      },
      {
        q: 'Comment abattre un mur porteur dans un appartement parisien ?',
        a: 'L\'abattage d\'un mur porteur à Paris nécessite obligatoirement : une étude de structure par un bureau d\'études agréé (500 à 1 500€), un permis de travaux ou déclaration préalable, et l\'accord de la copropriété. Des IPN (poutres métalliques) reprennent les charges. Coût total : 5 000 à 15 000€ selon la longueur et la complexité. Un mur non porteur coûte 500 à 2 000€ à abattre.',
        link: { href: '/renovation-cuisine-paris', label: 'Cuisine ouverte →' },
      },
    ],
  },
  {
    categorie: 'Copropriété & Réglementation',
    items: [
      {
        q: 'Quels travaux nécessitent l\'accord de la copropriété ?',
        a: 'Nécessitent l\'accord de la copropriété (vote en AG) : modification de façade ou balcon, travaux touchant les parties communes, abattage de mur porteur, création d\'une verrière en toiture, modification des réseaux collectifs. Ne nécessitent généralement pas d\'accord : travaux intérieurs ne touchant pas les parties communes ni les éléments structurels, peinture, revêtements de sol, salle de bain (sans modification de colonnes).',
        link: null,
      },
      {
        q: 'Quels travaux déclarer en mairie à Paris ?',
        a: 'À Paris, une déclaration préalable de travaux est nécessaire pour : modification de l\'aspect extérieur (fenêtres, volets, couleur de façade), création d\'ouverture dans un mur extérieur, travaux en secteur sauvegardé (Marais, Île Saint-Louis, etc.), transformation d\'un local commercial en habitation. Un permis de construire est requis pour les extensions de plus de 20 m². Les travaux intérieurs de rénovation ne nécessitent généralement aucune formalité.',
        link: null,
      },
    ],
  },
]

export default function FaqPage() {
  const allFaqs = faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }))
  )

  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Aide & conseils</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          FAQ Rénovation Paris
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Toutes les réponses à vos questions sur la rénovation à Paris — prix, délais, artisans, matériaux et réglementation.
        </p>
      </section>

      {/* Contenu FAQ */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-14">
            {faqCategories.map((cat) => (
              <div key={cat.categorie}>
                <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mb-6 pb-2 border-b border-gray-200">
                  {cat.categorie}
                </h2>
                <div className="space-y-6">
                  {cat.items.map((item) => (
                    <div key={item.q} className="bg-white rounded-lg border border-gray-100 p-6">
                      <h3 className="font-semibold text-[#1C1C1C] mb-3 text-sm leading-snug">{item.q}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-light mb-3">{item.a}</p>
                      {item.link && (
                        <Link
                          href={item.link.href}
                          className="text-[#B8960C] text-xs font-light hover:underline"
                        >
                          {item.link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Guides détaillés</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation appartement' },
              { href: '/blog/choisir-artisan-renovation-paris', label: 'Choisir son artisan' },
              { href: '/blog/renovation-salle-de-bain-paris', label: 'Guide salle de bain' },
              { href: '/blog/renovation-2-pieces-paris', label: 'Budget 2 pièces' },
              { href: '/blog/renovation-3-pieces-paris', label: 'Budget 3 pièces' },
              { href: '/tarifs', label: 'Nos tarifs 2025' },
              { href: '/blog/devis-renovation-paris', label: 'Obtenir un bon devis' },
              { href: '/blog/renovation-appartement-ancien-paris', label: 'Appartement ancien' },
              { href: '/blog/isolation-thermique-appartement-paris', label: 'Isolation thermique' },
              { href: '/renovation-appartement-paris', label: 'Rénovation Paris' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl font-semibold text-white mb-3">
          Votre question n&apos;est pas listée ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-6 max-w-lg mx-auto">
          Contactez-nous directement — nous répondons sous 24h et proposons un devis gratuit.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3.5 rounded font-bold text-sm hover:bg-[#c9a030] transition-colors"
        >
          Poser une question <ArrowRight size={13} />
        </Link>
      </section>
    </>
  )
}
