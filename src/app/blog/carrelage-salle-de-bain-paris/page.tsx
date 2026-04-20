import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Carrelage Salle de Bain Paris', item: 'https://espacedesignparis.fr/blog/carrelage-salle-de-bain-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Carrelage Salle de Bain Tendance Paris : grand format, marbre & 2025 | Espace Design",
  description: "Tendances carrelage salle de bain Paris 2025 : grand format XXL, imitation marbre, zellige, hexagonal. Artisan poseur Paris, prix et conseils.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/carrelage-salle-de-bain-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix de pose d'un carrelage grand format en salle de bain à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La pose d'un carrelage grand format (60×120 cm ou 120×120 cm) en salle de bain à Paris coûte entre 60 et 120 €/m² fourniture et pose comprises. Ce surcoût par rapport au carrelage standard (35–70 €/m²) s'explique par la complexité de la pose (dalles plus lourdes, nécessitant deux poseurs, collage renforcé au ciment-colle époxy) et la précision du ragréage requis. Le ragréage seul peut atteindre 25 €/m² dans le bâti parisien ancien avec parquet ou béton irrégulier. Prix final pour une salle de bain de 5 m² : 2 500 à 5 000 € de carrelage mural + sol.",
      },
    },
    {
      '@type': 'Question',
      name: "Le zellige est-il adapté à une salle de bain à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, le zellige marocain est parfaitement adapté à la salle de bain à condition de choisir des pièces traitées (imperméabilisées) pour les zones humides. Sa nature artisanale (légères variations de teinte et d'épaisseur) nécessite un poseur expérimenté pour obtenir un résultat régulier. Prix du zellige posé à Paris : 80 à 180 €/m² selon la taille et la marque (Mosaic del Sur, Ateliers Saint-Jacques, Bahya). Il est recommandé sur les murs plutôt qu'au sol (surface moins glissante avec des carreaux de format 10×10 cm). Un scellant hydrofuge est à appliquer après pose.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il déposer l'ancien carrelage avant d'en poser un nouveau ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pas nécessairement. Poser un nouveau carrelage sur l'ancien (carrelage sur carrelage) est possible si : l'ancien carrelage est solidement ancré (aucun carreau décollé), le support est plan, et la hauteur sous plafond permet d'absorber l'épaisseur supplémentaire (environ 10 mm). Cette technique économise la dépose (8 à 15 €/m²) mais présente des risques : si l'ancien carrelage se décolle, le nouveau tombe avec lui. Pour une rénovation de qualité à Paris, la dépose complète est recommandée, notamment pour inspecter l'état du support et traiter les éventuels problèmes d'humidité derrière l'ancien carrelage.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment choisir le carrelage salle de bain selon le style de son appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un appartement haussmannien (moulures, parquet point de Hongrie) : carrelage imitation marbre blanc de Carrare ou hexagonal noir et blanc en ciment, qui s'inscrit dans l'histoire du bâtiment. Pour un appartement moderne ou loft (années 1970-2000) : grand format 60×120 cm en grès cérame gris anthracite ou béton ciré, pour un rendu épuré. Pour un style bohème ou naturel : zellige vert, bleu ou terracotta en 10×10 cm, combiné à des accessoires en laiton. Pour un esprit industriel : carrelage métro blanc 10×30 cm avec joints gris foncé ou carrelage en grès aux finitions mate légèrement rugueuses.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Carrelage Salle de Bain Tendance Paris : grand format, marbre & 2025 | Espace Design",
  description: "Tendances carrelage salle de bain Paris 2025 : grand format XXL, imitation marbre, zellige, hexagonal. Artisan poseur Paris, prix et conseils.",
}

export default function ArticleCarrelageSalleDeBainParis() {
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
            Carrelage
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Carrelage Salle de Bain Tendance Paris : grand format, marbre et zellige 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le carrelage est l&apos;élément qui définit le plus visuellement une salle de bain. À Paris en 2025, les tendances évoluent vers le grand format, les matières naturelles et les mélanges de finitions. Guide complet des tendances, des prix et des contraintes de pose dans les appartements parisiens.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: '35 €/m²', label: 'Prix mini carrelage standard posé' },
              { val: '80 €/m²', label: 'Prix médian grand format posé' },
              { val: '180 €/m²', label: 'Prix max zellige artisanal posé' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-1">{s.val}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — 5 tendances 2025 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les 5 tendances carrelage salle de bain à Paris en 2025
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le choix du carrelage influence radicalement l&apos;ambiance d&apos;une salle de bain. À Paris, les artisans et architectes d&apos;intérieur observent en 2025 un retour aux matières artisanales et aux grands formats, souvent combinés dans un même espace.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La salle de bain est la pièce où les tendances durent le plus longtemps : un carrelage posé aujourd&apos;hui devra rester beau pendant 15 à 20 ans. Choisir une tendance trop marquée peut compliquer la revente. Les matières naturelles (marbre, zellige) vieillissent généralement mieux que les effets graphiques très contemporains.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: "Tendance 1 : Grand format 60×120 cm — l'agrandissement visuel",
                  detail: "Le carrelage grand format réduit le nombre de joints et donne une impression d'espace plus grande, idéale pour les petites salles de bain parisiennes. Les formats 60×120 cm et 120×120 cm dominent les prescriptions en 2025. Contrainte : exige un support parfaitement plan (ragréage précis) et une pose par deux artisans (dalles lourdes). Finitions disponibles : polies, satinées, mates, effet béton ou marbre. Prix posé : 60 à 120 €/m².",
                },
                {
                  enjeu: "Tendance 2 : Imitation marbre — le luxe accessible",
                  detail: "Le grès cérame imitation marbre (Calacatta, Statuario, Nero Marquina) offre l'esthétique du marbre naturel avec une résistance et un entretien bien supérieurs. Les progrès technologiques permettent des reproductions très fidèles, y compris des veines aléatoires. Prix : 40 à 90 €/m² posé, contre 150 à 400 €/m² pour le marbre naturel. Idéal pour les murs, moins conseillé en sol (glissant si poli).",
                },
                {
                  enjeu: "Tendance 3 : Zellige marocain — l'authenticité artisanale",
                  detail: "Le zellige connaît un regain d'intérêt majeur depuis 2022, notamment à Paris où il dialogue bien avec les appartements haussmanniens. Chaque carreau est unique (légères variations de couleur, surface légèrement irrégulière), ce qui crée un effet vivant impossible à reproduire industriellement. Couleurs phares en 2025 : vert olive, terracotta brûlé, bleu de Fès, ivoire. Format le plus courant : 10×10 cm. Prix posé : 80 à 180 €/m².",
                },
                {
                  enjeu: "Tendance 4 : Hexagonal graphique — la référence rétro-chic",
                  detail: "Le carrelage hexagonal (tommette) revient en force, inspiré des salles de bain haussmanniennes d'origine. Format contemporain : 17×20 cm en grès cérame blanc, noir ou coloré. Format historique : 20×20 cm en ciment (tomettes). Utilisé au sol pour son antidérapant naturel, ou en mur pour un effet graphique. En 2025, les associations noir/blanc et vert/blanc sont les plus demandées à Paris. Prix posé : 50 à 100 €/m².",
                },
                {
                  enjeu: "Tendance 5 : Mix mat et brillant — jouer les contrastes",
                  detail: "La tendance 2025 n'impose plus d'uniformité de finition. Associer un carrelage mat au sol (sécurité antidérapante) et un carrelage brillant ou poli au mur (réflexion de lumière dans les petits espaces) est très recherché. Exemple : sol en grès cérame mat anthracite 60×60 cm + mur en grand format poli blanc. Cette combinaison augmente la luminosité perçue sans augmenter la surface réelle.",
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

      {/* Section 2 — Contraintes pose appartement parisien */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes de pose dans un appartement parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Poser du carrelage dans une salle de bain parisienne implique des contraintes spécifiques que tout artisan doit maîtriser. Ignorer ces points conduit à des malfaçons rapidement visibles.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Humidité et étanchéité",
                solution: "Toute zone humide (douche, pourtour baignoire) doit être traitée avec un système d'étanchéité sous carrelage (SPEC ou membrane Schlüter) avant la pose. À Paris, l'humidité remonte fréquemment dans les murs anciens (pierre, brique) : un primaire d'accrochage hydrofuge est indispensable.",
                cout: 'Obligatoire',
              },
              {
                titre: "Vieux carrelage : déposer ou pas",
                solution: "Poser sur l'ancien carrelage est possible si tous les carreaux sont bien collés et que la planéité est correcte. La dépose est recommandée pour vérifier l'état du support (humidité cachée, champignons) et optimiser la planéité. Coût de dépose : 8–15 €/m².",
                cout: '8 – 15 €/m² dépose',
              },
              {
                titre: "Isolation phonique inter-étages",
                solution: "En copropriété parisienne, la pose de carrelage sol doit intégrer une sous-couche désolidarisante (réglementation NF DTU 52.1) pour éviter les bruits d'impact sur l'étage inférieur. Cette sous-couche (mousse ou liège) représente 5 à 10 €/m² de plus mais est souvent exigée par le règlement de copropriété.",
                cout: '5 – 10 €/m²',
              },
              {
                titre: "Planéité et ragréage",
                solution: "Les planchers parisiens anciens (bois, béton précontraint) présentent souvent des irrégularités de 5 à 15 mm. Un ragréage autonivelant est indispensable avant la pose de grand format. Pour les murs en plâtre ou pierre, un enduit de ragréage époxy garantit l'accrochage du carrelage. Coût ragréage : 15 à 25 €/m².",
                cout: '15 – 25 €/m²',
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

      {/* Section 3 — Choix selon style */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Quel carrelage choisir selon le style de votre appartement ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le carrelage doit s&apos;harmoniser avec l&apos;architecture et l&apos;esprit de votre appartement parisien. Voici les associations les plus réussies selon le style dominant.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Appartement haussmannien (moulures, parquet)",
                prix: 'Zellige, hexagonal, marbre',
                detail: "Le carrelage hexagonal noir et blanc en ciment ou en grès cérame est le choix historiquement cohérent avec l'architecture haussmannienne. Le zellige ivoire ou vert olive apporte une touche orientale qui se marie bien avec les dorures et moulures. Le marbre blanc de Carrare (ou son imitation en grès) s'inscrit dans la tradition des belles salles de bain haussmanniennes. Éviter les carrelages trop industriels qui tranchent avec le style du bâtiment.",
              },
              {
                type: "Appartement moderne ou loft (années 1970–2000)",
                prix: 'Grand format, béton ciré, gris',
                detail: "Les grands formats en grès cérame mat gris béton ou anthracite sont parfaitement adaptés aux volumes ouverts et aux appartements à l'architecture contemporaine. Le sol et les murs dans la même teinte (ton sur ton) élargit visuellement l'espace. Associer avec une robinetterie noire mate ou inox brossé pour un rendu cohérent.",
              },
              {
                type: "Style bohème ou naturel",
                prix: 'Zellige, terracotta, relief',
                detail: "Le zellige terracotta, verde ou bleue en 10×10 cm combiné à des équipements en laiton vieilli (miroirs, robinetterie) crée une ambiance chaleureuse et artisanale. Les carrelages à relief (effet 3D, bossages) jouent avec la lumière. Associer avec un meuble en bois massif non traité et des plantes vertes pour un résultat cohérent.",
              },
              {
                type: "Style industriel",
                prix: 'Métro, ardoise, noir mat',
                detail: "Le carrelage métro blanc 10×30 cm avec joints gris anthracite est la signature du style industriel. En sol, un carrelage grès noir mat ou imitation ardoise. La robinetterie en acier brossé ou noir mat complète le tableau. Éviter les formats trop grands qui perdent l'esprit artisanal du style industriel.",
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

      {/* Section 4 — Tableau prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix au m² posé selon le type de carrelage — Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix fourniture et pose compris par un artisan parisien, hors ragréage et dépose de l&apos;ancien carrelage.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de carrelage</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix posé / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Difficulté pose</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Usage recommandé</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    traitement: 'Métro 10×30 cm',
                    unite: '30 – 60 €/m²',
                    budget: 'Facile',
                    duree: 'Mur',
                  },
                  {
                    traitement: 'Standard 30×60 cm',
                    unite: '35 – 70 €/m²',
                    budget: 'Facile',
                    duree: 'Mur + sol',
                  },
                  {
                    traitement: 'Hexagonal 20×20 cm',
                    unite: '50 – 100 €/m²',
                    budget: 'Moyen',
                    duree: 'Sol + mur accent',
                  },
                  {
                    traitement: 'Grand format 60×120 cm',
                    unite: '60 – 120 €/m²',
                    budget: 'Difficile',
                    duree: 'Mur + sol',
                  },
                  {
                    traitement: 'Imitation marbre 60×120 cm',
                    unite: '70 – 130 €/m²',
                    budget: 'Difficile',
                    duree: 'Mur + sol',
                  },
                  {
                    traitement: 'Zellige 10×10 cm',
                    unite: '80 – 180 €/m²',
                    budget: 'Très difficile',
                    duree: 'Mur',
                  },
                  {
                    traitement: 'Marbre naturel',
                    unite: '150 – 400 €/m²',
                    budget: 'Expert',
                    duree: 'Mur + sol',
                  },
                ].map((row, i) => (
                  <tr key={row.traitement} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.traitement}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.unite}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.budget}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils de pose et d&apos;entretien
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Toujours commander 10 à 15 % de carrelage en plus pour les coupes et les casses — les lots de couleur peuvent varier",
                "Privilégier des joints hydrofuges en salle de bain : ils résistent mieux à la moisissure et sont plus faciles à entretenir",
                "Le zellige doit être scellé avec un hydrofuge imprégant après pose et rejointoiement, puis ré-imprégné tous les 5 ans",
                "Le marbre naturel doit être protégé avec un cristallisant avant utilisation — il est sensible aux acides (produits ménagers)",
                "Vérifier que votre artisan utilise un ciment-colle adapté au format (colle époxy pour les grand formats, C2 minimum)",
                "La couleur du joint change radicalement l'aspect final : faire réaliser des échantillons avec joint posé avant de valider",
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

      {/* Guides connexes */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Guides connexes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/prix-renovation-salle-de-bain-paris', title: 'Prix rénovation salle de bain Paris' },
              { href: '/blog/douche-italienne-paris', title: 'Douche italienne Paris' },
              { href: '/blog/carrelage-grand-format-paris', title: 'Carrelage grand format Paris' },
              { href: '/blog/pose-carrelage-grand-format-paris', title: 'Pose carrelage grand format Paris' },
              { href: '/blog/carrelage-appartement-paris', title: 'Carrelage appartement Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
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
          Faites poser votre carrelage par un artisan parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Conseil en showroom ou à domicile. Devis détaillé sous 48h. Pose soignée avec garantie décennale.
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
