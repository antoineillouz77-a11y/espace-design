import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Sol Béton Ciré Paris', item: 'https://espacedesignparis.fr/blog/sol-beton-cire-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sol Béton Ciré Paris : prix, pose & finitions 2025 | Espace Design',
  description: 'Béton ciré à Paris : cuisine, salle de bain, séjour. Prix au m², application, entretien, comparatif avec carrelage. Guide complet 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/sol-beton-cire-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix du béton ciré au m² à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le béton ciré coûte entre 60 et 130 €/m² posé à Paris selon la pièce et la finition. En séjour : 60 à 90 €/m². En cuisine : 80 à 110 €/m² (protection alimentaire supplémentaire). En salle de bain : 90 à 130 €/m² (traitement hydrofuge renforcé, joints de fractionnement). Ces prix incluent la préparation du support, les 2 à 3 couches de béton ciré et la finition cire ou résine de protection.",
      },
    },
    {
      '@type': 'Question',
      name: 'Le béton ciré est-il adapté à une salle de bain parisienne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, à condition de respecter deux impératifs : un support sain et stable (pas de fissures actives), et l'application d'une protection hydrofuge haute performance (résine polyuréthane ou époxy). Dans les appartements parisiens anciens, les planchers en bois peuvent travailler et provoquer des fissures dans le béton ciré — un ragréage fibré ou une membrane de désolidarisation est alors indispensable. Prévoir un budget de 90 à 130 €/m² pour une salle de bain bien traitée.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure un béton ciré et comment l\'entretenir ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un béton ciré bien posé et correctement entretenu dure 10 à 20 ans. L'entretien courant se limite à un nettoyage à l'eau claire avec une serpillière légèrement humide et un savon neutre (pH 7). Évitez les produits acides (vinaigre, citron) qui attaquent la protection. Un recirage annuel (cire liquide naturelle) préserve l'aspect et protège le support. En cas de rayures profondes, une rénovation partielle (poncage + réimprégnation) est possible sans tout déposer.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Sol Béton Ciré Paris : prix, pose & finitions 2025 | Espace Design',
  description: 'Béton ciré à Paris : cuisine, salle de bain, séjour. Prix au m², application, entretien, comparatif avec carrelage. Guide complet 2025.',
}

export default function ArticleBetonCire() {
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
            Sols & Parquet
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Sol Béton Ciré Paris : prix, pose & finitions 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le béton ciré s&apos;impose dans les intérieurs parisiens contemporains pour son esthétique minérale et sa continuité visuelle entre les pièces. Cuisine, salle de bain, séjour : prix au m², techniques d&apos;application, finitions et entretien — guide complet 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Qu'est-ce que le béton ciré */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Qu&apos;est-ce que le béton ciré ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le béton ciré est un revêtement décoratif à base de ciment, de résines et de pigments, appliqué en couches minces (2 à 3 mm d&apos;épaisseur totale) sur un support existant. Il ne s&apos;agit pas de béton structurel, mais d&apos;un enduit de finition qui peut recouvrir aussi bien un carrelage existant, un béton brut ou une chape ciment.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Sa grande force : la continuité visuelle. Sans joints apparents (sauf joints de fractionnement techniques), le béton ciré agrandit visuellement les espaces et crée une fluidité entre les pièces particulièrement appréciée dans les appartements parisiens à surface limitée. Son rendu varie du mat profond au satiné brillant selon la finition choisie.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Épaisseur', valeur: '2 – 3 mm', note: 'N\'affecte pas les portes' },
                { label: 'Poids ajouté', valeur: '3 – 5 kg/m²', note: 'Très léger, compatible planchers bois' },
                { label: 'Délai de séchage', valeur: '7 – 10 jours', note: 'Avant usage normal' },
              ].map((item) => (
                <div key={item.label} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100 text-center">
                  <div className="text-[#B8960C] font-semibold text-lg mb-1">{item.valeur}</div>
                  <div className="text-[#1C1C1C] text-sm font-medium mb-1">{item.label}</div>
                  <div className="text-gray-500 text-xs font-light">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Par pièce */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Béton ciré en cuisine, salle de bain et séjour
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Chaque pièce impose ses contraintes techniques. Le béton ciré s&apos;adapte à toutes, mais la préparation et la protection varient significativement selon l&apos;exposition à l&apos;humidité et aux chocs.
          </p>
          <div className="space-y-4">
            {[
              {
                piece: 'Séjour / salon',
                avantages: ['Rendu minéral continu sans joints', 'Agrandit visuellement les petits espaces', 'Large choix de coloris et de finitions'],
                contraintes: ['Sensible aux rayures (meubles à protéger)', 'Pas adapté aux zones très humides sans traitement'],
                prix: '60 – 90 €/m²',
              },
              {
                piece: 'Cuisine',
                avantages: ['Sans joints = pas de bactéries ni de salissures incrustées', 'Facile à nettoyer une fois protégé', 'Continuité visuelle avec le séjour en open space'],
                contraintes: ['Protection alimentaire obligatoire (résine polyuréthane)', 'Sensible aux produits acides (détartrant, vinaigre)', 'Délai de mise en service : 10 à 14 jours'],
                prix: '80 – 110 €/m²',
              },
              {
                piece: 'Salle de bain',
                avantages: ['Esthétique spa minérale très recherchée', 'Réducteur de joints donc moins d\'entretien', 'Application possible sur receveur de douche'],
                contraintes: ['Support doit être parfaitement stable (pas de plancher en bois non traité)', 'Traitement hydrofuge haute performance indispensable', 'Joints de fractionnement techniques obligatoires'],
                prix: '90 – 130 €/m²',
              },
            ].map((el) => (
              <div key={el.piece} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.piece}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Avantages</div>
                    <ul className="space-y-1">
                      {el.avantages.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-xs text-gray-600 font-light">
                          <CheckCircle size={12} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Points de vigilance</div>
                    <ul className="space-y-1">
                      {el.contraintes.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-xs text-gray-600 font-light">
                          <span className="w-3 h-px bg-gray-400 flex-shrink-0 mt-2" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Finitions et couleurs */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Finitions et couleurs : les options 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le béton ciré se décline dans une palette de finitions et de coloris très large. Le choix de la finition conditionne l&apos;aspect final, mais aussi la résistance et l&apos;entretien du revêtement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                finition: 'Mat velouté',
                description: "Aspect naturel pierre, très tendance. Absorbe légèrement la lumière. Idéal pour les chambres et séjours. Entretien : cire naturelle 1 à 2 fois par an.",
                ideal: 'Chambre, séjour',
              },
              {
                finition: 'Satiné',
                description: "Compromis entre mat et brillant. Légère réflexion de la lumière qui agrandit les espaces. Le plus polyvalent. Entretien standard.",
                ideal: 'Toutes pièces',
              },
              {
                finition: 'Brillant (époxy)',
                description: "Effet miroir, très facile à nettoyer. Révèle les irrégularités du support — exige une préparation parfaite. Résistance maximale.",
                ideal: 'Cuisine, SDB',
              },
              {
                finition: 'Cire naturelle',
                description: "Finition traditionnelle au tampon. Aspect légèrement irrégulier, très authentique. Demande un recirage régulier mais se rénove facilement.",
                ideal: 'Séjour, couloir',
              },
            ].map((el) => (
              <div key={el.finition} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.finition}</div>
                  <div className="text-xs text-gray-500 font-light flex-shrink-0">{el.ideal}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.description}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-2">Couleurs tendance 2025</div>
            <div className="text-gray-400 text-sm font-light leading-relaxed">
              Les teintes les plus demandées à Paris en 2025 : gris béton naturel (le classique intemporel), blanc cassé lin (lumineux pour les pièces sombres), taupe chaud (tendance maison de famille), noir anthracite (pour les cuisines design). Les tons terracotta et ocre émergent dans les intérieurs bohème. Demandez toujours un échantillon appliqué sur votre support avant de valider — la teinte sèche toujours plus claire qu&apos;humide.
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Application */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Application : préparation du support, technique et délais
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La qualité d&apos;un béton ciré tient à 80 % dans la préparation du support. Un applicateur expérimenté consacre souvent autant de temps à la préparation qu&apos;à l&apos;application elle-même. C&apos;est là que se jouent la tenue dans le temps et l&apos;aspect final.
          </p>
          <div className="space-y-3">
            {[
              {
                etape: '1. Diagnostic et préparation du support',
                detail: "Vérification de la planéité (tolérance 3 mm sous la règle de 2 m), de l'humidité (< 3 % obligatoire) et de la solidité. Ragréage des creux et fissures. Sur plancher bois : application d'une membrane de désolidarisation ou d'un primaire fibré pour absorber les mouvements.",
                duree: 'J-3 à J-1',
              },
              {
                etape: '2. Couche d\'accrochage (primaire)',
                detail: "Application d'un primaire d'accrochage adapté au support (béton, carrelage, bois). Séchage 4 à 6 heures. Cette étape est souvent omise par les artisans peu expérimentés — elle conditionne pourtant l'adhérence à long terme.",
                duree: 'J1',
              },
              {
                etape: '3. Application du béton ciré (2 couches)',
                detail: "Première couche à la spatule inox (couche de fond, teintée). Séchage 12 à 24 heures. Léger ponçage à l'éponge humide. Deuxième couche (finition, teinte définitive). Chaque couche fait 1 à 1,5 mm d'épaisseur.",
                duree: 'J2 – J3',
              },
              {
                etape: '4. Protection et finition',
                detail: "Application de 2 à 3 couches de protection selon la pièce : cire naturelle (séjour), résine polyuréthane (cuisine, SDB). Chaque couche de protection sèche 2 à 4 heures. Dernière couche = finition définitive (mat, satiné, brillant).",
                duree: 'J4 – J5',
              },
              {
                etape: '5. Séchage et mise en service',
                detail: "Circulation possible après 24 à 48 heures. Usage normal après 7 jours. Résistance maximale à l'eau et aux produits ménagers après 28 jours. Ne poser aucun meuble lourd avant 7 jours complets.",
                duree: 'J6 – J35',
              },
            ].map((el) => (
              <div key={el.etape} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.etape}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.duree}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix complets du béton ciré à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs 2025 pour Paris et Île-de-France, main d&apos;œuvre et matériaux inclus, hors dépose de l&apos;ancien revêtement si nécessaire (compter 15 à 25 €/m²).
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Pièce / Surface</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Exemple 15 m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Protection incluse</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { piece: 'Séjour / couloir', prix: '60 – 90 €', exemple: '900 – 1 350 €', protection: 'Cire naturelle' },
                  { piece: 'Cuisine (open-space)', prix: '80 – 110 €', exemple: '1 200 – 1 650 €', protection: 'Résine PU alimentaire' },
                  { piece: 'Salle de bain', prix: '90 – 130 €', exemple: '1 350 – 1 950 €', protection: 'Résine PU hydrofuge' },
                  { piece: 'Douche italienne', prix: '100 – 150 €', exemple: '450 – 675 € (3 m²)', protection: 'Époxy + antidérapant' },
                  { piece: 'Chambre', prix: '60 – 90 €', exemple: '720 – 1 080 € (12 m²)', protection: 'Cire naturelle' },
                ].map((row, i) => (
                  <tr key={row.piece} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.piece}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.exemple}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.protection}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mb-6">
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Béton ciré vs carrelage : le vrai comparatif
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  titre: 'Béton ciré',
                  points: [
                    'Sans joints → hygiénique et facile à nettoyer',
                    'Continuité visuelle entre pièces',
                    'Pose possible sur support existant',
                    'Résistance aux chocs moindre',
                    'Entretien régulier (cire)',
                    '60 – 130 €/m²',
                  ],
                },
                {
                  titre: 'Carrelage grès cérame',
                  points: [
                    'Très résistant aux chocs et rayures',
                    'Joints à entretenir (noircissement)',
                    'Dépose obligatoire si support fragile',
                    'Froid au toucher (moins agréable en chambre)',
                    'Entretien minimal',
                    '40 – 100 €/m²',
                  ],
                },
              ].map((col) => (
                <div key={col.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-3">{col.titre}</div>
                  <ul className="space-y-2">
                    {col.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-gray-600 font-light">
                        <CheckCircle size={12} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
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
              { href: '/carrelage-paris', title: 'Carrelage Paris' },
              { href: '/parquet-paris', title: 'Parquet Paris' },
              { href: '/blog/carrelage-appartement-paris', title: 'Carrelage appartement Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/renovation-cuisine-ouverte-paris', title: 'Rénovation cuisine ouverte Paris' },
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
              { href: '/renovation-paris-3e', label: 'Paris 3e' },
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
              { href: '/renovation-pantin', label: 'Pantin' },
              { href: '/renovation-bagnolet', label: 'Bagnolet' },
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
          Un projet béton ciré à Paris ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit sur place. Échantillon appliqué avant validation. Devis sous 48h.
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
