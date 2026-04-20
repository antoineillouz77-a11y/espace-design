import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Pose Parquet sur Carrelage Paris', item: 'https://espacedesignparis.fr/blog/pose-parquet-sur-carrelage-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Poser Parquet sur Carrelage Paris : méthode & prix 2025',
  description: 'Peut-on poser un parquet sur carrelage à Paris ? Méthode flottante, différence de hauteur, seuils. Prix et conseils artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/pose-parquet-sur-carrelage-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Peut-on poser un parquet directement sur du carrelage ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, il est possible de poser un parquet sur du carrelage existant, à condition de respecter deux critères : la hauteur totale du nouveau sol (carrelage + parquet + sous-couche) ne doit pas excéder 8 à 12 mm pour ne pas créer de différence de niveau dangereuse avec les pièces adjacentes, et le carrelage doit être parfaitement plat, solide et bien adhérent. La méthode flottante est la seule recommandée dans ce cas — ne jamais coller un parquet directement sur du carrelage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel type de parquet peut-on poser sur du carrelage ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le parquet contrecollé ou stratifié est idéal pour une pose flottante sur carrelage : il est léger, stable et disponible en épaisseurs de 7 à 14 mm. Le parquet massif est déconseillé sur carrelage : son épaisseur (18 à 22 mm) crée une différence de niveau trop importante avec les pièces adjacentes, et il nécessite généralement d\'être collé ou cloué, ce qui est impossible sur carrelage. Les parquets contrecollés de 10 à 12 mm d\'épaisseur sont le meilleur compromis entre solidité et faible surépaisseur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la pose de parquet sur carrelage à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La pose de parquet contrecollé flottant sur carrelage existant à Paris coûte entre 35 et 70 €/m², main d\'œuvre incluse, hors prix du parquet. Pour un salon de 25 m², comptez 875 – 1 750 € pour la pose seule. En ajoutant le parquet (20 – 80 €/m² selon essence et qualité) et la sous-couche (3 – 8 €/m²), le budget total est de 1 450 – 4 200 € pour 25 m². Si le carrelage présente des irrégularités importantes, un ragréage autonivelant est nécessaire (15 – 25 €/m² supplémentaires).',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Poser Parquet sur Carrelage Paris : méthode & prix 2025',
  description: 'Peut-on poser un parquet sur carrelage à Paris ? Méthode flottante, différence de hauteur, seuils. Prix et conseils artisan 2025.',
}

export default function ArticlePoseParquetSurCarrelage() {
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
            Poser Parquet sur Carrelage Paris : méthode &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Remplacer un carrelage sans le déposer : c&apos;est la solution choisie par de nombreux propriétaires parisiens pour rénover leur sol rapidement, sans chantier lourd ni poussière excessive. Mais poser un parquet sur carrelage demande de respecter des règles précises. Guide complet de la méthode, des matériaux et des prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Faisabilité */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Faisabilité : quand peut-on poser un parquet sur carrelage ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La pose de parquet sur carrelage est techniquement réalisable, mais elle n&apos;est pas systématiquement recommandée. Avant de se lancer, trois points doivent être vérifiés pour garantir un résultat durable et sécurisé.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Contrôle de la hauteur disponible',
                  detail: 'C\'est le point le plus critique. La pose de parquet sur carrelage ajoute une épaisseur de 8 à 14 mm (sous-couche + parquet). Si les pièces adjacentes (couloir, chambre, entrée) ont un sol au même niveau, la différence de hauteur créée peut devenir un obstacle au sens de la réglementation accessibilité et représenter un risque de chute. La règle généralement acceptée est une différence de niveau maximale de 2 cm, avec un seuil de transition obligatoire.',
                },
                {
                  enjeu: 'État du carrelage existant',
                  detail: 'Le carrelage doit être intact (pas de carreaux cassés, décollés ou sonnant creux), parfaitement plat et propre. Un carreau décollé sous un parquet flottant crée un bruit de claquement et peut entraîner la déformation des lames. Vérifier case par case en tapotant chaque carreau avec une pièce de monnaie. Recoller les carreaux désolidarisés avant la pose.',
                },
                {
                  enjeu: 'Planéité du support',
                  detail: 'Un support accidenté (joints en relief, carrelage bombé) se retrouve sous le parquet flottant et génère des points de flexion qui fissurent les lames dans le temps. Tolérance maximale recommandée : 3 mm sous une règle de 2 mètres. Si la planéité est insuffisante, un ragréage autonivelant est nécessaire avant la pose du parquet (15 – 25 €/m² supplémentaires).',
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

      {/* Section 2 — Méthode flottante */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            La méthode flottante : la seule solution sur carrelage
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Sur un support carrelé, la pose collée est impossible (le parquet ne tient pas sur la faïence) et la pose clouée est exclue (les clous traverseraient le carrelage et le béton). La méthode flottante est la seule technique adaptée : les lames s&apos;assemblent entre elles par clipsage ou collage de joint, sans être fixées au sol.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Sous-couche acoustique et d\'égalisation',
                solution: 'La sous-couche (3 – 5 mm) joue trois rôles : absorption des petites irrégularités du carrelage, isolation phonique des bruits d\'impact, et barrière contre l\'humidité remontante. Choisir une sous-couche avec pare-vapeur intégré si la pièce est au rez-de-chaussée ou en contact avec une dalle béton.',
                cout: '3 – 8 €/m²',
              },
              {
                titre: 'Parquet contrecollé clipsable',
                solution: 'Lames à cliquer (système Clic ou Uniclic) pour une pose rapide et démontable. Épaisseur recommandée : 10 – 12 mm sur carrelage (compromis résistance/surépaisseur). La couche d\'usure (2 – 4 mm) détermine la durabilité — choisir 3 mm minimum pour un parquet destiné à durer.',
                cout: '25 – 80 €/m²',
              },
              {
                titre: 'Joint de dilatation périphérique',
                solution: 'Un parquet flottant se dilate avec la chaleur. Un joint de 8 – 10 mm autour du périmètre de la pièce est obligatoire, caché par une plinthe ou un quart-de-rond. Sans ce joint, le parquet bombe et se soulève en été. Ne jamais supprimer ce jeu, même dans un angle peu visible.',
                cout: 'Inclus dans la pose',
              },
              {
                titre: 'Seuil de transition aux portes',
                solution: 'La différence de niveau entre le carrelage des pièces adjacentes et le parquet posé au-dessus est compensée par un seuil de transition (baguette aluminium ou bois). Nécessaire partout où les deux niveaux se rejoignent. Prévoir un seuil pour chaque passage de porte concerné.',
                cout: '15 – 40 €/seuil',
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

      {/* Section 3 — Parquet massif déconseillé */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Parquet massif sur carrelage : pourquoi c&apos;est déconseillé
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le parquet massif est un matériau noble, mais ses caractéristiques physiques le rendent incompatible avec une pose sur carrelage dans la quasi-totalité des situations rencontrées dans les appartements parisiens.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Épaisseur incompatible',
                detail: 'Un parquet massif standard fait 18 à 22 mm d\'épaisseur, auxquels s\'ajoute la sous-couche (3 – 5 mm). La surépaisseur totale de 21 à 27 mm est systématiquement incompatible avec les portes et passages existants — il faudrait retailler toutes les portes et replaner tous les encadrements. Ce surcoût (500 – 1 500 € de menuiserie) annule l\'avantage économique de ne pas déposer le carrelage.',
              },
              {
                type: 'Mode de pose incompatible',
                detail: 'Le parquet massif se pose collé (colle polyuréthane sur ragréage) ou cloué (sur lambourdes en bois). La pose collée requiert un support poreux et homogène — le carrelage ne l\'est pas. La pose clouée sur lambourdes est possible, mais rajoute encore 4 à 5 cm de hauteur. Les deux méthodes sont donc exclues sur carrelage existant.',
              },
              {
                type: 'Sensibilité à l\'humidité amplifiée',
                detail: 'Le parquet massif est hygroscopique (il absorbe et restitue l\'humidité ambiante). Posé sur carrelage, l\'humidité remontante de la dalle béton — stoppée habituellement par la colle à carrelage ou un primaire — peut atteindre le parquet et provoquer gonflement, décollement ou moisissures. Ce risque est très élevé dans les cuisines et salles de bain, mais aussi dans les pièces sur dalle au rez-de-chaussée.',
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.type}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <p className="text-white text-sm font-light leading-relaxed">
              <span className="text-[#D4AF37] font-medium">Alternative recommandée : </span>
              Si vous souhaitez absolument un parquet massif dans votre appartement parisien, la solution est de déposer l&apos;ancien carrelage (35 – 60 €/m² de dépose), puis de poser le massif sur ragréage. Le surcoût de dépose est souvent compensé par la plus-value apportée par un parquet massif, notamment dans les biens haussmanniens haut de gamme.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — Différence de niveau et seuils */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Gérer la différence de niveau avec les pièces adjacentes
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            C&apos;est souvent le problème le plus sous-estimé lors d&apos;une pose de parquet sur carrelage dans un appartement parisien : les pièces adjacentes (couloir, entrée, salle de bain) ont un sol au même niveau que le carrelage. Le parquet créé une marche qui peut être gênante voire dangereuse.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Différence de moins de 8 mm',
                methode: 'Un seuil plat de transition (baguette aluminium en T ou en Z) suffit à rattraper la différence. Solution esthétique et fonctionnelle, standard dans la majorité des cas. Disponible en aluminium brossé, chromé ou en bois pour s\'assortir au parquet.',
                compatibilite: 'Solution standard',
              },
              {
                type: 'Différence de 8 à 15 mm',
                methode: 'Seuil de transition en rampe (profil aluminium biseauté), permettant un passage progressif entre les deux niveaux. Conforme à la réglementation accessibilité. Largeur minimale recommandée : 40 mm pour une transition douce.',
                compatibilite: 'Seuil rampe',
              },
              {
                type: 'Différence supérieure à 15 mm',
                methode: 'À éviter absolument : la marche devient un obstacle réel et non conforme. Dans ce cas, il faut soit abaisser le parquet (parquet plus fin, sans sous-couche épaisse), soit relever le sol des pièces adjacentes (ragréage), soit déposer le carrelage et repartir d\'un sol neuf.',
                compatibilite: 'Solution à éviter',
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.compatibilite}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.methode}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de la pose de parquet sur carrelage à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les tarifs ci-dessous s&apos;entendent pour Paris et Île-de-France, main d&apos;œuvre incluse, hors achat du parquet.
          </p>

          <div className="mb-8">
            <div className="grid grid-cols-3 gap-0 bg-[#1C1C1C] rounded-t-lg">
              <div className="px-4 py-3 text-white text-xs font-light uppercase tracking-wider">Prestation</div>
              <div className="px-4 py-3 text-white text-xs font-light uppercase tracking-wider text-center">Prix / m²</div>
              <div className="px-4 py-3 text-white text-xs font-light uppercase tracking-wider text-center">Note</div>
            </div>
            {[
              { prest: 'Ragréage autonivelant (si nécessaire)', prix: '15 – 25 €/m²', note: 'Si planéité insuffisante', even: true },
              { prest: 'Sous-couche acoustique', prix: '3 – 8 €/m²', note: 'Incluse dans la pose chez la plupart des artisans', even: false },
              { prest: 'Pose parquet flottant contrecollé', prix: '25 – 45 €/m²', note: 'Main d\'œuvre seule', even: true },
              { prest: 'Pose parquet flottant stratifié', prix: '20 – 35 €/m²', note: 'Main d\'œuvre seule', even: false },
              { prest: 'Seuil de transition par porte', prix: '40 – 80 €/porte', note: 'Fourniture et pose', even: true },
              { prest: 'Plinthes et quarts-de-rond', prix: '8 – 20 €/ml', note: 'Selon matériau', even: false },
            ].map((row) => (
              <div key={row.prest} className={`grid grid-cols-3 gap-0 border-b border-gray-100 ${row.even ? 'bg-white' : 'bg-[#FAFAF8]'}`}>
                <div className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.prest}</div>
                <div className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.prix}</div>
                <div className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.note}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points de vigilance avant la pose
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Vérifier la planéité du carrelage avec une règle de 2 m — tolérance max 3 mm sous 2 m',
                'Tester chaque carreau au marteau ou à la pièce pour détecter les carreaux sonnant creux',
                'Mesurer la différence de niveau aux passages de porte avant de choisir l\'épaisseur du parquet',
                'Ne jamais poser sur un carrelage humide — attendre la saison sèche ou traiter l\'humidité',
                'Prévoir 10 % de pertes sur la surface commandée pour les chutes et découpes',
                'Laisser acclimatation les lames de parquet 48h dans la pièce avant la pose',
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
              { href: '/parquet-paris', title: 'Parquet Paris' },
              { href: '/carrelage-paris', title: 'Pose carrelage Paris' },
              { href: '/blog/nettoyage-apres-travaux-paris', title: 'Nettoyage après travaux Paris' },
              { href: '/blog/renovation-complete-appartement-paris', title: 'Rénovation complète appartement Paris' },
              { href: '/blog/renovation-immeuble-ancien-paris', title: 'Rénovation immeuble ancien Paris' },
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
          Pose de parquet sur carrelage à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisans spécialisés en pose de sol parisien.
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
