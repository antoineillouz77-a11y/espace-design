import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Création Verrière Intérieure Paris', item: 'https://espacedesignparis.fr/blog/creation-verriere-interieure-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Création Verrière Intérieure Paris : prix, démarches & artisan 2025 | Espace Design',
  description: 'Installer une verrière intérieure à Paris : cloison vitrée atelier, verrière d\'angle, autorisation copropriété. Prix et guide 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/creation-verriere-interieure-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une verrière intérieure à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'une verrière intérieure à Paris varie de 800 à 8 000 € selon la taille et les matériaux. Une petite verrière de séparation (2 m²) en acier noir avec vitrage simple coûte 800–2 000 €. Une grande cloison vitrée style atelier (6–10 m²) avec profilés acier et verre feuilleté de sécurité coûte 3 000–6 000 €. Une verrière d'angle sur mesure avec intégration électrique dépasse souvent 6 000–8 000 €.",
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il une autorisation pour poser une verrière intérieure à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une verrière purement intérieure (sans toucher à la façade ni aux murs porteurs), aucun permis de construire ni déclaration préalable n'est requise. Cependant, en copropriété, si les travaux touchent des murs porteurs ou des parties communes, une autorisation de l'assemblée générale est obligatoire. Il est toujours conseillé de consulter le règlement de copropriété et votre syndic avant de commencer.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel verre choisir pour une verrière intérieure ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le verre feuilleté de sécurité (VSG) est la référence pour les verrières intérieures : en cas de bris, les éclats restent collés au film plastique, sans danger. Épaisseur recommandée : 44.2 (4 mm + film + 4 mm) pour les petites surfaces, 66.2 pour les grandes. Le verre sablé ou dépoli est idéal pour les cloisons bureau ou chambre (intimité tout en laissant passer la lumière). Le verre clair reste la solution la plus lumineuse pour les espaces cuisine-séjour.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Création Verrière Intérieure Paris : prix, démarches & artisan 2025 | Espace Design',
  description: 'Installer une verrière intérieure à Paris : cloison vitrée atelier, verrière d\'angle, autorisation copropriété. Prix et guide 2025.',
}

export default function ArticleVerriereInterieure() {
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
            Menuiserie
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Création Verrière Intérieure Paris : prix, démarches &amp; artisan 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La verrière intérieure est l&apos;élément architectural phare des rénovations parisiennes contemporaines. Cloison vitrée style atelier, verrière d&apos;angle, séparation cuisine-séjour : guide complet pour choisir, budgéter et faire réaliser votre verrière en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de verrières */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les types de verrières intérieures pour appartements parisiens
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La verrière intérieure s&apos;adapte à tous les espaces et tous les usages. Chaque configuration répond à un besoin précis : séparation visuelle douce, apport de lumière, délimitation d&apos;un espace de travail ou agrandissement visuel d&apos;un couloir sombre.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Dans les appartements haussmanniens parisiens avec de grandes hauteurs sous plafond (2,80 m à 3,20 m), la verrière du sol au plafond produit un effet architectural remarquable tout en conservant la circulation de la lumière naturelle.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Cloison vitrée style atelier',
                  detail: 'La référence des rénovations parisiennes. Profilés fins en acier noir mat ou laqué, vitrage clair ou sablé. Sépare deux espaces (cuisine / séjour, couloir / bureau) sans bloquer la lumière. Peut intégrer une porte à la française ou coulissante. Hauteur du sol au plafond recommandée pour un effet optimal.',
                },
                {
                  enjeu: 'Verrière de toit ou de plafond (lanterneau)',
                  detail: 'Intégrée dans un plafond incliné ou une toiture, elle apporte une lumière zénithale incomparable. Typique des duplex parisiens et des appartements sous toiture. Nécessite une étanchéité parfaite et une vitrerie de sécurité feuilletée. Pose plus complexe, souvent soumise à autorisation (copropriété).',
                },
                {
                  enjeu: 'Verrière d\'angle (deux pans vitrés)',
                  detail: 'S\'insère dans un coin de pièce pour créer un espace bureau ou un salon intimiste délimité. Effet très architectural, particulièrement efficace dans les grandes pièces à diviser sans mur plein. La jonction d\'angle nécessite une conception précise pour garantir l\'étanchéité et la rigidité.',
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

      {/* Section 2 — Matériaux */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Matériaux : acier noir, aluminium et types de verre
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix des matériaux détermine l&apos;esthétique, la durabilité et le prix de la verrière. L&apos;acier noir domine le marché pour son aspect industriel chic très prisé à Paris, mais l&apos;aluminium offre des alternatives plus légères et économiques.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Acier noir (fer forgé)',
                solution: 'Matériau noble et très résistant. Profilés fins (20–40 mm) pour un rendu « atelier parisien ». Se peint, se laque ou se protège avec un vernis mat. Entretien : dépoussiérage + cire métallique 1x/an. Durée de vie : 30–50 ans. Surcoût vs aluminium : +20 à +40 %.',
                cout: 'Haut de gamme',
              },
              {
                titre: 'Aluminium thermolaqué',
                solution: 'Plus léger que l\'acier, résistant à la corrosion et thermolaqué dans toutes les teintes RAL. Profilés légèrement plus épais (30–60 mm). Rapport qualité/prix excellent pour les grandes surfaces. Idéal si la verrière est proche d\'une zone humide (cuisine, salle de bain).',
                cout: 'Intermédiaire',
              },
              {
                titre: 'Verre feuilleté de sécurité (VSG)',
                solution: 'Obligatoire pour toute verrière intérieure selon les règles de sécurité. Film intercalaire PVB entre deux feuilles de verre. En cas de bris : les éclats restent solidaires, pas de danger. Épaisseur standard : 44.2 ou 66.2.',
                cout: '80 – 150 €/m²',
              },
              {
                titre: 'Verre sablé ou dépoli',
                solution: 'Idéal pour les verrières de bureau, chambre ou salle de bain : laisse passer la lumière tout en préservant l\'intimité. Peut être sablé partiellement (bandes horizontales) pour un effet design. Disponible en verre sablé imprimé ou en film adhésif repositionnable.',
                cout: '100 – 200 €/m²',
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

      {/* Section 3 — Autorisations */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Autorisations et démarches en copropriété parisienne
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les démarches administratives pour une verrière intérieure à Paris dépendent de la nature des travaux et du statut du logement. En copropriété — ce qui représente l&apos;immense majorité des appartements parisiens — les règles sont strictes.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Verrière sur cloison non porteuse (sans toucher la structure)',
                prix: 'Aucune autorisation',
                detail: 'Si la verrière remplace une cloison légère existante (placoplâtre, brique non structurelle), aucune démarche administrative n\'est requise. C\'est le cas le plus courant dans les appartements parisiens récents. Vérifier toutefois le règlement de copropriété — certains interdisent les modifications même intérieures.',
              },
              {
                type: 'Modification d\'un mur porteur (IPN, linteau)',
                prix: 'Bureau d\'études obligatoire',
                detail: 'Si la verrière nécessite de percer ou modifier un mur porteur, un bureau d\'études structure doit valider le projet (300–800 €). En copropriété, autorisation de l\'AG obligatoire pour tout touche aux éléments porteurs. Délai : prévoir 3 à 6 mois selon le calendrier des assemblées générales.',
              },
              {
                type: 'Verrière de toit (lanterneau)',
                prix: 'Déclaration préalable + AG',
                detail: 'Toute ouverture en toiture nécessite une déclaration préalable de travaux auprès de la mairie de Paris. En copropriété : accord de l\'AG et du syndic. Si l\'immeuble est situé dans un secteur ABF (Architecte des Bâtiments de France), des contraintes supplémentaires s\'appliquent sur les matériaux et la forme.',
              },
              {
                type: 'Intégration électricité dans la verrière',
                prix: 'Électricien certifié',
                detail: 'L\'intégration de spots, rails LED ou prises dans les montants d\'une verrière est possible mais nécessite l\'intervention d\'un électricien qualifié. La verrière doit prévoir des passages de câbles dès la conception (gaines noyées dans les montants creux). Prestation supplémentaire : 300–800 €.',
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
            Budget : prix d&apos;une verrière intérieure à Paris selon la configuration
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous incluent la fourniture et la pose, main d&apos;œuvre comprise, hors démarches administratives.
          </p>

          <div className="space-y-3 mb-8">
            {[
              {
                config: 'Petite verrière fixe (1–2 m²)',
                materiau: 'Acier noir + verre sécurité',
                prix: '800 – 2 000 €',
              },
              {
                config: 'Cloison vitrée style atelier (4–6 m²)',
                materiau: 'Acier noir ou alu + verre feuilleté',
                prix: '2 500 – 4 500 €',
              },
              {
                config: 'Grande verrière avec porte (6–10 m²)',
                materiau: 'Acier + verre + porte intégrée',
                prix: '4 000 – 7 000 €',
              },
              {
                config: 'Verrière d\'angle sur mesure',
                materiau: 'Acier + verre sablé + électricité',
                prix: '5 000 – 8 000 €',
              },
              {
                config: 'Lanterneau (verrière de toit)',
                materiau: 'Alu ou acier + double vitrage',
                prix: '4 000 – 10 000 €',
              },
            ].map((row, i) => (
              <div
                key={row.config}
                className={`rounded-lg p-5 border border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-2 items-start ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}`}
              >
                <div className="font-medium text-[#1C1C1C] text-sm">{row.config}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{row.materiau}</div>
                <div className="text-[#B8960C] text-sm font-medium sm:text-right">{row.prix}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour réussir votre verrière intérieure
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Préférer le verre feuilleté de sécurité VSG — obligatoire et plus résistant',
                'Anticiper les passages de câbles dans les montants dès la conception',
                'Vérifier le mur support avant pose : aplomb et planéité conditionnent le résultat',
                'Choisir une teinte de laquage cohérente avec les autres menuiseries du logement',
                'Prévoir une porte battante ou coulissante si la verrière sépare deux pièces',
                'Demander un certificat de conformité après pose (verre de sécurité)',
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
              { href: '/menuiserie-paris', title: 'Menuiserie sur mesure Paris' },
              { href: '/blog/renovation-fenetre-paris', title: 'Rénovation fenêtres Paris' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
              { href: '/electricite-paris', title: 'Électricité Paris' },
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
          Installez votre verrière intérieure à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Menuisiers spécialisés verrières à Paris.
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
