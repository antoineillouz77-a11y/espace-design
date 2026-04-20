import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Plafond Tendu Paris', item: 'https://espacedesignparis.fr/blog/plafond-tendu-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Plafond Tendu Paris : pose, types & prix artisan 2025 | Espace Design",
  description: "Faire poser un plafond tendu à Paris : types (laqué, satiné, acoustique), prix au m², délai de pose et artisan qualifié. Devis gratuit sous 48h.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/plafond-tendu-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quelle est la différence entre un plafond tendu laqué et un plafond tendu satiné ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le plafond tendu laqué offre un effet miroir brillant qui agrandit visuellement l'espace et reflète la lumière naturelle — idéal pour les petites pièces ou les séjours sombres. Le plafond tendu satiné (mat ou satiné) donne un rendu plus doux et discret, proche d'un plafond peint de qualité, sans effet miroir. Le laqué est légèrement plus cher et nécessite une pièce bien éclairée pour sublimer son effet.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien coûte la pose d'un plafond tendu à Paris en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix de pose d'un plafond tendu à Paris en 2025 varie entre 25 et 80 €/m² selon le type de toile, la forme de la pièce et les options choisies. Un plafond tendu satiné simple dans une pièce rectangulaire revient à 25-40 €/m². Le laqué brillant est facturé 40-60 €/m². Les plafonds tendus acoustiques (perforés) ou avec éclairage LED intégré atteignent 60-80 €/m². Ces prix incluent la fourniture de la toile PVC, le profilé périmétrique et la pose.",
      },
    },
    {
      '@type': 'Question',
      name: "Le plafond tendu est-il compatible avec un appartement ancien parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, le plafond tendu est parfaitement compatible avec un appartement ancien parisien, à condition que la hauteur sous plafond soit suffisante (idéalement 2,50 m minimum, car la toile descend de 2 à 5 cm par rapport au plafond existant). Le plafond tendu présente un avantage majeur dans les appartements anciens : il permet de masquer un plafond fissuré, humide ou en mauvais état sans démolition ni enduit, tout en intégrant un éclairage LED moderne.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Plafond Tendu Paris : pose, types & prix artisan 2025",
  description: "Faire poser un plafond tendu à Paris : types (laqué, satiné, acoustique), prix au m², délai de pose et artisan qualifié. Devis gratuit sous 48h.",
  keywords: ['plafond tendu Paris', 'pose plafond tendu Paris', 'prix plafond tendu', 'plafond laqué Paris', 'artisan plafond tendu Paris'],
}

export default function ArticlePlafondTendu() {
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
            Travaux
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Faire Poser un Plafond Tendu à Paris : guide complet artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le plafond tendu est une solution moderne, rapide et esthétique pour transformer un plafond abîmé, intégrer un éclairage LED ou améliorer l&apos;isolation phonique d&apos;un appartement parisien. Laqué, satiné, acoustique, imprimé — ce guide vous aide à choisir le bon type de plafond tendu et à budgéter votre projet à Paris.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de plafonds tendus */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les types de plafonds tendus : laqué, satiné, acoustique et imprimé
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Il n&apos;existe pas un seul plafond tendu mais une gamme étendue de toiles PVC aux rendus et fonctions très différents. Le choix dépend de vos objectifs : esthétique, acoustique, luminosité ou imperméabilité.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Tous les plafonds tendus reposent sur le même principe : une toile en PVC souple ou polyester est tendue sur un profilé périphérique fixé aux murs, à quelques centimètres en dessous du plafond existant. La pose est rapide (quelques heures pour une pièce standard) et ne génère pas de déchets de chantier.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: "Plafond tendu laqué brillant",
                  detail: "Le plafond laqué offre un effet miroir spectaculaire qui amplifie la lumière naturelle et agrandit visuellement l'espace. Disponible dans de nombreux coloris (blanc, gris, beige, noir), il est particulièrement adapté aux séjours, chambres et entrées sombres. Nécessite un plafond existant soigneusement préparé pour éviter les reflets disgracieux.",
                },
                {
                  enjeu: "Plafond tendu satiné ou mat",
                  detail: "Le plafond satiné ou mat offre un rendu proche d'un plafond peint de qualité, sans effet miroir. Plus discret que le laqué, il s'intègre dans tous les styles d'intérieur — contemporain, classique, minimaliste. C'est le choix le plus courant pour les appartements parisiens. Prix plus accessible que le laqué.",
                },
                {
                  enjeu: "Plafond tendu acoustique (perforé)",
                  detail: "Le plafond tendu acoustique est perforé de micro-trous invisibles à l'oeil nu, qui permettent d'absorber les ondes sonores grâce à un matériau isolant posé au-dessus de la toile. Il réduit significativement la réverbération dans une pièce et améliore l'isolation phonique entre étages. Idéal pour les séjours, salles de réunion ou studios d'enregistrement.",
                },
                {
                  enjeu: "Plafond tendu imprimé et LED intégré",
                  detail: "La toile PVC peut recevoir une impression numérique haute résolution (ciel étoilé, nuages, motif personnalisé) pour créer un effet visuel unique. L'intégration de bandeaux LED derrière une toile translucide crée un effet de lumière diffuse très tendance. Ces options premium sont très demandées dans les chambres d'enfants et les espaces wellness.",
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

      {/* Section 2 — Installation */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Comment se passe la pose d&apos;un plafond tendu à Paris ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La pose d&apos;un plafond tendu est l&apos;une des interventions les plus rapides et les moins invasives en rénovation. Pour une pièce standard de 20 m², un artisan qualifié réalise l&apos;ensemble de la pose en une demi-journée, sans poussière ni déchets importants.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Étape 1 — Pose du profilé périmétrique',
                solution: "L'artisan fixe un profilé aluminium ou PVC tout autour de la pièce, à la hauteur souhaitée. Ce profilé recevra la toile tendue. La hauteur de la toile peut être ajustée pour masquer des gaines techniques, des câbles électriques ou un plafond en mauvais état.",
                cout: 'Inclus dans le prix',
              },
              {
                titre: 'Étape 2 — Intégration des points lumineux',
                solution: "Les spots encastrés, lustres ou bandeaux LED sont positionnés et câblés avant la pose de la toile. L'électricien prépare les sorties de câbles, et l'artisan plafond tendu crée les perforations nécessaires dans la toile au moment de la pose.",
                cout: 'Électricité en sus',
              },
              {
                titre: 'Étape 3 — Chauffage et tension de la toile',
                solution: "La toile PVC est chauffée à l'aide d'une soufflerie thermique (pistolet chaud) pour la rendre souple et extensible, puis clipsée dans le profilé périmétrique. En refroidissant, la toile se tend parfaitement et adopte une surface plane et homogène.",
                cout: 'Inclus dans le prix',
              },
              {
                titre: 'Étape 4 — Finitions et vérification',
                solution: "L'artisan pose les rosaces de fixation pour les spots, vérifie la tension de la toile sur l'ensemble du périmètre, nettoie la surface et contrôle le résultat. La pièce est immédiatement utilisable à la fin de la pose.",
                cout: 'Inclus dans le prix',
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
            Prix d&apos;un plafond tendu à Paris en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le coût d&apos;un plafond tendu à Paris varie selon le type de toile, la surface et les options choisies. Ces prix comprennent la fourniture de la toile PVC, le profilé périmétrique et la pose par un artisan qualifié.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Description</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Satiné ou mat',
                    prestations: 'Finition proche peinture, discret, tous coloris',
                    prixM2: '25 – 40 €',
                  },
                  {
                    niveau: 'Laqué brillant',
                    prestations: 'Effet miroir, amplifie la lumière, agrandit l\'espace',
                    prixM2: '40 – 60 €',
                  },
                  {
                    niveau: 'Acoustique perforé',
                    prestations: 'Absorption sonore, amélioration confort phonique',
                    prixM2: '50 – 70 €',
                  },
                  {
                    niveau: 'Avec éclairage LED intégré',
                    prestations: 'Bandeaux LED, spots encastrés, lumière diffuse',
                    prixM2: '60 – 80 €',
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
              Les avantages du plafond tendu dans un appartement parisien
            </h3>
            <div className="space-y-3">
              {[
                "Pose rapide en une demi-journée — sans poussière, sans déchets, pièce utilisable immédiatement",
                "Masque un plafond fissuré, humide ou en mauvais état sans démolition ni enduit",
                "Compatible avec tous les systèmes d'éclairage — spots, lustres, bandeaux LED",
                "Amélioration phonique possible avec la version acoustique perforée",
                "Résistant à l'humidité — idéal pour salles de bain et cuisines sans faux plafond plâtre",
                "Garantie 10 ans sur la toile — entretien minimal (nettoyage à l'eau savonneuse)",
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
              { href: '/blog/faux-plafond-paris', title: 'Faux plafond Paris — types & prix 2025' },
              { href: '/blog/isolation-phonique-appartement-paris', title: 'Isolation phonique appartement Paris' },
              { href: '/blog/peinture-plafond-paris', title: 'Peinture plafond Paris — prix & conseils' },
              { href: '/blog/electricite-appartement-paris', title: 'Électricité appartement Paris — mise aux normes' },
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
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
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
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
          Vous souhaitez poser un plafond tendu à Paris ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Laqué, satiné, acoustique ou avec LED intégré — devis gratuit sous 48h, pose rapide dans tout Paris.
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
