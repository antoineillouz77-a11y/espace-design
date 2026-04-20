import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Sol Stratifié Paris', item: 'https://espacedesignparis.fr/blog/sol-stratifie-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sol Stratifié Paris : pose, entretien & prix 2025 | Espace Design',
  description: 'Poser un sol stratifié à Paris : différences avec parquet flottant, classes d\'usage, bruit, prix. Guide artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/sol-stratifie-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre parquet flottant et sol stratifié à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le parquet flottant est composé de vraies lamelles de bois (surface en bois massif ou bois contrecollé), ce qui lui donne une durée de vie supérieure (30 à 50 ans) et la possibilité d'être poncé et rénové plusieurs fois. Le sol stratifié est composé d'un panneau HDF (fibres de bois densifiées) recouvert d'un décor imprimé en haute résolution et d'une couche de résine protectrice. Le stratifié est moins cher (15 à 40 €/m² contre 40 à 120 €/m² pour le parquet), plus résistant aux rayures et à l'humidité légère, mais ne peut pas être rénové : à remplacer intégralement en fin de vie. Il offre également une gamme de décors très large (bois, béton, pierre).",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle classe d\'usage de stratifié choisir pour un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les stratifiés sont classés selon leur résistance à l'usure (normes AC1 à AC6). Pour un appartement parisien en location ou usage intense : AC3 minimum pour les chambres et pièces peu fréquentées, AC4 recommandé pour le séjour, le couloir et la cuisine. L'épaisseur est également importante : 8 mm minimum pour un appartement standard (10 à 12 mm pour un meilleur confort acoustique et une meilleure planéité). Un stratifié trop fin (6 mm) est plus sensible aux irrégularités du sol support et transmet davantage les bruits de pas.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on poser du stratifié dans une salle de bain à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le stratifié standard est déconseillé dans les salles de bain et les cuisines avec risque d'eau stagnante. Bien que la surface soit traitée, les joints entre les lames ne sont pas parfaitement étanches et l'humidité peut pénétrer dans le panneau HDF, provoquant gonflement et délamination. Des stratifiés spéciaux 'hydrofuges' existent mais restent inférieurs à un carrelage en termes de résistance à l'eau. Pour une salle de bain parisienne, préférez le carrelage, le béton ciré ou un vinyle LVT (luxury vinyl tile) totalement imperméable.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Sol Stratifié Paris : pose, entretien & prix 2025 | Espace Design',
  description: "Poser un sol stratifié à Paris : différences avec parquet flottant, classes d'usage, bruit, prix. Guide artisan 2025.",
}

export default function ArticleSolStratifie() {
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
            Parquet
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Sol Stratifié Paris : pose, entretien &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le sol stratifié est souvent confondu avec le parquet flottant — à tort. Moins cher, plus résistant aux rayures mais non rénovable : il répond à des usages précis. Classes d&apos;usage, sous-couche acoustique obligatoire en copropriété, résistance à l&apos;eau, prix posé : guide complet pour bien choisir votre stratifié à Paris en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Stratifié vs parquet */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Stratifié vs parquet flottant : les vraies différences
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La confusion entre stratifié et parquet flottant est très répandue. Les deux se posent flottants (sans colle ni clou), mais leur composition, leur durabilité et leur comportement dans le temps sont très différents. Voici un comparatif objectif pour choisir selon votre usage et votre budget.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Composition et matières',
                  detail: "Le parquet flottant est composé de bois véritable en surface (contrecollé : 2 à 6 mm de bois massif sur support contreplaqué) ou de bois massif. Le stratifié est composé d'un panneau HDF (fibres de bois haute densité), d'un décor imprimé en haute résolution (imitation bois, pierre ou béton) et d'une couche de résine mélaminée protectrice. Le stratifié n'est pas du bois en surface, même si son aspect peut être trompant.",
                },
                {
                  enjeu: 'Durabilité et rénovation',
                  detail: "Le parquet flottant contrecollé peut être poncé 1 à 2 fois en cours de vie, ce qui lui permet d'être remis à neuf (rayures, taches, vieillissement). Sa durée de vie est de 30 à 50 ans avec un entretien adapté. Le stratifié ne peut pas être poncé : une fois usé ou rayé profondément, il doit être remplacé intégralement. Sa durée de vie est de 10 à 20 ans selon la classe d'usage et le niveau de fréquentation.",
                },
                {
                  enjeu: 'Résistance aux rayures',
                  detail: "C'est l'avantage principal du stratifié : la couche de résine mélaminée en surface est plus dure que le bois. Un stratifié AC4 résiste mieux aux rayures des chaises, aux talons aiguilles et aux pattes d'animaux qu'un parquet en chêne huilé. Pour un appartement parisien avec enfants ou animaux, le stratifié est souvent plus adapté dans les zones de passage intensif.",
                },
                {
                  enjeu: 'Comportement face à l\'humidité',
                  detail: "Le parquet en bois est sensible aux variations d'humidité (dilation, retrait) mais supporte mieux les éclaboussures ponctuelles si séchées rapidement. Le stratifié est plus résistant à l'humidité légère en surface, mais le panneau HDF est très sensible à l'eau infiltrée par les joints : il gonfle rapidement et de manière irréversible. Aucun des deux n'est adapté à la salle de bain.",
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

      {/* Section 2 — Classes d'usage et sous-couche */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Classes d&apos;usage, épaisseur et sous-couche acoustique
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            En copropriété parisienne, la sous-couche acoustique n&apos;est pas une option — c&apos;est souvent une obligation du règlement de copropriété. Et le choix de la classe d&apos;usage conditionne directement la durée de vie de votre stratifié.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Classes AC1-AC2 : usage résidentiel léger',
                detail: "Convient aux chambres et pièces rarement fréquentées (bureau, chambre d'amis). Ne pas utiliser dans le séjour ou le couloir d'un appartement parisien : usure prématurée garantie. Souvent vendu en grande surface à bas prix.",
                usage: 'Chambre uniquement',
              },
              {
                titre: 'Classe AC3 : usage résidentiel standard',
                detail: "Le minimum recommandé pour toutes les pièces d'un appartement parisien à usage personnel. Adapté aux séjours et cuisines avec un trafic normal (couple sans enfants, adulte seul). Résistance aux rayures correcte.",
                usage: 'Appartement standard',
              },
              {
                titre: 'Classe AC4 : usage résidentiel intensif',
                detail: "Recommandé pour les appartements avec enfants, animaux domestiques ou en location. Convient aux couloirs, séjours et cuisines avec trafic intensif. C'est le choix le plus courant pour les investissements locatifs parisiens.",
                usage: 'Famille, location',
              },
              {
                titre: 'Sous-couche acoustique : obligatoire en copropriété',
                detail: "La quasi-totalité des règlements de copropriété parisiens imposent une sous-couche résiliente sous tout revêtement flottant. Elle réduit les bruits d'impact transmis aux voisins du dessous. Épaisseur minimale recommandée : 3 mm (indice d'isolation delta Lw supérieur à 19 dB). Certains stratifiés intègrent la sous-couche d'usine — vérifiez si elle est suffisante.",
                usage: 'Obligatoire Paris',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.usage}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix du sol stratifié à Paris : fourniture et pose
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un appartement parisien standard, sur sol existant en bon état ou béton. La préparation du sol (ragréage, dépose de l&apos;ancien revêtement) est facturée en supplément.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Gamme</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Fourniture</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Pose artisan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    prestation: 'Stratifié entrée de gamme (AC3, 8 mm)',
                    gamme: 'Basique',
                    fourniture: '15 – 25 €/m²',
                    pose: '20 – 28 €/m²',
                  },
                  {
                    prestation: 'Stratifié milieu de gamme (AC4, 10 mm)',
                    gamme: 'Standard',
                    fourniture: '25 – 35 €/m²',
                    pose: '22 – 30 €/m²',
                  },
                  {
                    prestation: 'Stratifié haut de gamme (AC5, 12 mm)',
                    gamme: 'Premium',
                    fourniture: '35 – 50 €/m²',
                    pose: '25 – 35 €/m²',
                  },
                  {
                    prestation: 'Sous-couche acoustique séparée',
                    gamme: 'Obligatoire copro.',
                    fourniture: '3 – 8 €/m²',
                    pose: 'Incluse dans la pose',
                  },
                  {
                    prestation: 'Dépose ancien revêtement',
                    gamme: 'Si nécessaire',
                    fourniture: '—',
                    pose: '8 – 15 €/m²',
                  },
                ].map((row, i) => (
                  <tr key={row.prestation} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.prestation}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.gamme}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.fourniture}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.pose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils avant de poser un stratifié dans un appartement parisien
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Vérifier le règlement de copropriété : sous-couche acoustique souvent obligatoire',
                'Choisir AC4 minimum pour un appartement en location ou avec enfants',
                'Préférer une épaisseur de 10 mm minimum pour le confort acoustique',
                'Ne pas poser de stratifié standard en salle de bain (risque de gonflement)',
                'Laisser le stratifié s\'acclimater 48h dans la pièce avant la pose',
                'Prévoir 10 % de chutes supplémentaires pour les coupes et l\'assemblage',
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
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
              { href: '/blog/renovation-parquet-paris', title: 'Rénovation parquet Paris' },
              { href: '/blog/parquet-flottant-vs-colle-paris', title: 'Parquet flottant vs collé Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/contact', title: 'Demander un devis gratuit' },
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
          Pose de sol stratifié à Paris : devis gratuit
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Fourniture et pose par artisan qualifié. Sous-couche acoustique incluse. Devis détaillé sous 48h.
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
