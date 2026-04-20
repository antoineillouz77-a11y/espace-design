import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Peinture Cuisine Paris', item: 'https://espacedesignparis.fr/blog/peinture-cuisine-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Peinture Cuisine Paris : couleurs, lessivables & prix 2025 | Espace Design',
  description: 'Choisir la bonne peinture pour sa cuisine parisienne : peinture lessivable, émulsion, faïence. Couleurs tendance, prix. Guide 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/peinture-cuisine-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix de la peinture d\'une cuisine à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La peinture d'une cuisine à Paris coûte entre 20 et 60 €/m² de surface peinte, main d'œuvre et matériaux inclus. Pour une cuisine de 8 m² (environ 30 m² de surfaces peintes avec plafond), comptez 600 – 1 200 € pour un rafraîchissement standard. Si les murs nécessitent une préparation importante (ragréage, dégraissage, sous-couche d'accrochage sur carrelage), le budget peut atteindre 1 500 – 2 500 €.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle peinture choisir pour une cuisine parisienne humide et grasse ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une cuisine parisienne soumise à l'humidité et aux projections grasses, choisissez impérativement une peinture lessivable en finition satinée ou brillante (résistance aux lavages répétés). La peinture acrylique satin est le meilleur rapport qualité/prix (15 à 35 €/m²). La résine époxy est recommandée pour les zones très exposées (crédence, derrière le plan de cuisson). Évitez les finitions mates en cuisine : elles absorbent les graisses et se lavent difficilement.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on peindre sur du carrelage dans une cuisine parisienne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, peindre sur du carrelage existant est possible et économique par rapport au remplacement. Il faut dégraisser soigneusement la surface, poncer légèrement pour créer de l'accroche, appliquer une sous-couche d'adhérence spéciale carrelage, puis deux couches de peinture carrelage spécifique (résine ou polyuréthane). Coût : 30 à 60 €/m². La durabilité est de 5 à 10 ans selon la qualité des produits et le soin apporté à la préparation.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Peinture Cuisine Paris : couleurs, lessivables & prix 2025 | Espace Design',
  description: 'Choisir la bonne peinture pour sa cuisine parisienne : peinture lessivable, émulsion, faïence. Couleurs tendance, prix. Guide 2025.',
}

export default function ArticlePeintureCuisine() {
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
            Peinture
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Peinture Cuisine Paris : couleurs, lessivables & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La cuisine est la pièce la plus exigeante pour la peinture : humidité, vapeurs, projections grasses, lavages fréquents. Bien choisir sa peinture, ses couleurs et sa technique de préparation est essentiel pour un résultat durable. Guide complet et prix 2025 pour Paris.
          </p>
        </div>
      </section>

      {/* Section 1 — Contraintes de la peinture cuisine */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Contraintes spécifiques de la peinture en cuisine : humidité, graisses et vapeurs
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Une cuisine parisienne est soumise à des conditions extrêmes pour la peinture. La vapeur d&apos;eau lors de la cuisson fait varier le taux d&apos;humidité brutalement. Les projections grasses du plan de cuisson atteignent les murs voisins. Les surfaces sont nettoyées avec des produits parfois abrasifs plusieurs fois par semaine.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Dans les appartements parisiens anciens, ces contraintes s&apos;ajoutent souvent à des murs en mauvais état (humidité résiduelle, ancienne peinture cloquée, carrelage vieillissant) qui nécessitent une préparation sérieuse avant toute application.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Zones à risque dans une cuisine',
                  detail: 'La crédence (derrière le plan de cuisson) est la zone la plus exposée : chaleur, projections grasses, buée. Les murs autour de l\'évier subissent des éclaboussures d\'eau et de produits vaisselle. Le plafond accumule la condensation. Chaque zone peut nécessiter un traitement différent.',
                },
                {
                  enjeu: 'L\'enjeu de la finition : mat, satin ou brillant',
                  detail: 'En cuisine, la finition détermine la résistance au lavage. Mat : aspect élégant mais absorbant, déconseillé en cuisine. Satin : bon compromis esthétique/lavabilité, recommandé pour les murs cuisine. Brillant : lavabilité maximale mais révèle les imperfections du support. Résine époxy : solution professionnelle pour les zones très exposées.',
                },
                {
                  enjeu: 'Ventilation et temps de séchage',
                  detail: 'En cuisine, la ventilation est parfois déficiente dans les appartements parisiens (VMC insuffisante, absence de fenêtre). Une humidité résiduelle dans les murs empêche la peinture d\'adhérer correctement. Un test d\'humidité (hygromètre) avant travaux est recommandé. En cas d\'humidité > 75 %, traiter d\'abord la source et attendre le séchage complet.',
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

      {/* Section 2 — Types de peintures */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Types de peintures pour cuisine : glycéro, acrylique, résine
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le marché propose plusieurs familles de peintures adaptées aux cuisines. Chaque famille a ses avantages, ses limites et sa gamme de prix. Le bon choix dépend du support, de la zone à peindre et du niveau de durabilité attendu.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix fourni (€/m²)</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Lavabilité</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Usage recommandé</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Acrylique satin cuisine', prix: '5 – 12 €', lavabilite: 'Très bonne', usage: 'Murs et plafond cuisine' },
                  { type: 'Alkyde (glycéro) satin', prix: '8 – 18 €', lavabilite: 'Excellente', usage: 'Boiseries, meubles, portes' },
                  { type: 'Peinture résine époxy', prix: '20 – 40 €', lavabilite: 'Maximale', usage: 'Crédence, zones très exposées' },
                  { type: 'Peinture carrelage spéciale', prix: '15 – 30 €', lavabilite: 'Très bonne', usage: 'Recouvrir l\'ancien carrelage' },
                  { type: 'Peinture anti-humidité', prix: '8 – 20 €', lavabilite: 'Bonne', usage: 'Murs humides ou condensation' },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.lavabilite}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-2">Notre recommandation pour une cuisine parisienne standard</div>
            <div className="text-gray-400 text-sm font-light leading-relaxed">
              Peinture acrylique satin spéciale cuisine (classe A+, sans COV) pour les murs et le plafond, résine époxy pour la crédence et la zone autour de l&apos;évier. Cette combinaison offre le meilleur rapport durabilité/esthétique/prix pour la majorité des cuisines parisiennes.
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Couleurs tendance */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Couleurs tendance 2025 pour une cuisine parisienne
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La couleur d&apos;une cuisine influence l&apos;appétit, l&apos;ambiance et la perception de l&apos;espace. En 2025, les tendances s&apos;orientent vers des teintes riches et affirmées sur les volumes bas (meubles, crédence) contrastant avec des murs clairs et lumineux.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Blanc cassé, grège et lin clair',
                usage: 'Murs et plafond',
                detail: 'Les classiques intemporels qui agrandissent visuellement la cuisine et s\'associent à n\'importe quelle couleur de meuble. Le blanc cassé (légèrement chaud) est préférable au blanc pur qui paraît froid sous la lumière artificielle. LRV recommandé : 70 à 85.',
              },
              {
                type: 'Vert sauge, vert eucalyptus',
                usage: 'Meubles ou un pan de mur',
                detail: 'La teinte tendance 2025 par excellence en cuisine. Apporte une touche naturelle et apaisante, s\'associe parfaitement au bois, au marbre et aux métaux dorés. Recommandée pour les meubles bas ou une crédence peinte.',
              },
              {
                type: 'Terracotta, brique douce',
                usage: 'Crédence ou mur accent',
                detail: 'Évoque la chaleur méditerranéenne. Fonctionne très bien dans les cuisines ouvertes parisiennes pour créer une séparation visuelle avec le séjour. À utiliser avec parcimonie (un seul pan de mur ou la crédence uniquement).',
              },
              {
                type: 'Bleu nuit, bleu canard',
                usage: 'Meubles hauts ou îlot central',
                detail: 'Très chic et sophistiqué, parfait pour les appartements haussmanniens avec grande cuisine. Associé à des plans de travail en marbre blanc ou en granit clair pour un contraste élégant. À éviter dans les petites cuisines fermées où il peut sembler oppressant.',
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.usage}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Préparation des murs */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Préparation des murs : carrelage existant ou peinture ancienne
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La préparation est l&apos;étape la plus critique pour une peinture cuisine durable. Un mur mal préparé verra sa peinture décoller en quelques mois. Dans une cuisine ancienne, plusieurs cas de figure se présentent selon l&apos;état du support existant.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Peinture ancienne en bon état',
                solution: 'Dégraissage au détergent neutre, ponçage léger pour créer de l\'accroche, dépoussiérage. Application directe de la nouvelle peinture sans sous-couche si les produits sont compatibles. Travaux rapides et économiques.',
                cout: '5 – 10 €/m²',
              },
              {
                titre: 'Peinture ancienne décollée ou cloquée',
                solution: 'Grattage ou sablage de l\'ancienne peinture, rebouchage des irrégularités, enduit de ragréage si nécessaire, sous-couche d\'accrochage. Travaux plus longs mais indispensables pour un résultat durable.',
                cout: '15 – 30 €/m²',
              },
              {
                titre: 'Carrelage à repeindre',
                solution: 'Dégraissage énergique (dissolvant gras), ponçage au papier de verre grain 80, sous-couche d\'adhérence spéciale carrelage, attendre 24h, puis 2 couches de peinture carrelage ou résine. Résultat durable 5 à 10 ans si bien réalisé.',
                cout: '30 – 60 €/m²',
              },
              {
                titre: 'Murs humides ou tachés',
                solution: 'Traitement anti-moisissures (eau de javel + fongicide), séchage complet (au minimum 48h), application d\'un primaire assainissant, puis peinture anti-humidité. Ne jamais peindre sur un mur encore humide.',
                cout: '20 – 40 €/m²',
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

      {/* Section 5 — Budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget complet : prix de la peinture cuisine à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour une cuisine de 8 m² à Paris (environ 28 à 35 m² de surfaces peintes), main d&apos;œuvre et matériaux inclus.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total cuisine 8 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    prestation: 'Rafraîchissement (peinture acrylique satin)',
                    prixM2: '20 – 35 €',
                    total: '600 – 1 000 €',
                  },
                  {
                    prestation: 'Rénovation standard (prépa + peinture qualité)',
                    prixM2: '35 – 50 €',
                    total: '1 000 – 1 500 €',
                  },
                  {
                    prestation: 'Rénovation avec crédence résine',
                    prixM2: '45 – 65 €',
                    total: '1 300 – 1 900 €',
                  },
                  {
                    prestation: 'Peinture sur carrelage (intégral)',
                    prixM2: '50 – 80 €',
                    total: '1 500 – 2 500 €',
                  },
                ].map((row, i) => (
                  <tr key={row.prestation} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.prestation}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour réussir sa peinture cuisine
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Ne jamais négliger la préparation — 80 % du résultat final dépend de la préparation du support',
                'Choisir une peinture spéciale cuisine (résistance à la vapeur et aux graisses) plutôt qu\'une peinture standard',
                'Traiter la crédence avec une résine ou une peinture carrelage plutôt qu\'une peinture murale classique',
                'Ventiler la pièce pendant et après les travaux pour accélérer le séchage',
                'Prévoir 15 % de surface supplémentaire pour les chutes et retouches',
                'Éviter de cuire pendant au moins 48h après application pour éviter la condensation sur la peinture fraîche',
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
              { href: '/peinture-paris', title: 'Peinture Paris' },
              { href: '/carrelage-paris', title: 'Carrelage Paris' },
              { href: '/blog/renovation-cuisine-ouverte-paris', title: 'Rénovation cuisine ouverte Paris' },
              { href: '/blog/peinture-appartement-paris', title: 'Peinture appartement Paris' },
              { href: '/blog/peinture-decorative-paris', title: 'Peinture décorative Paris' },
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
              { href: '/renovation-paris-13e', label: 'Paris 13e' },
              { href: '/renovation-paris-14e', label: 'Paris 14e' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
              { href: '/renovation-bagnolet', label: 'Bagnolet' },
              { href: '/renovation-ivry-sur-seine', label: 'Ivry' },
              { href: '/renovation-vitry-sur-seine', label: 'Vitry' },
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
          Une cuisine repeinte avec soin et durabilité
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Peintres spécialisés en rénovation parisienne.
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
