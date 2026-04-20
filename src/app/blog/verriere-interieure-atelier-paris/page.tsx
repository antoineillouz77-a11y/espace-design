import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: "Verrière Intérieure Atelier Paris", item: 'https://espacedesignparis.fr/blog/verriere-interieure-atelier-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Verrière Intérieure Atelier Paris : styles, prix & pose 2025 | Espace Design",
  description: "Installer une verrière intérieure style atelier à Paris : séparation salon-cuisine, cloison vitrée, prix pose. Artisan Paris, devis 48h.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/verriere-interieure-atelier-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une verrière intérieure style atelier à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'une verrière intérieure à Paris dépend du matériau, de la taille et de la configuration. Pour une verrière fixe en acier brut (style atelier, 2 à 3 m²) : 2 500 à 5 000 €, pose incluse. Pour une verrière avec porte coulissante intégrée (3 à 5 m²) : 4 500 à 9 000 €. Pour une verrière en aluminium thermolaqué (moins chère, délai plus court) : 1 800 à 4 000 €. Les verrières sur mesure en bois/acier mixte ou avec double vitrage acoustique sont les plus onéreuses : 6 000 à 15 000 € selon les dimensions.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il une autorisation de la copropriété pour installer une verrière intérieure ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une verrière intérieure posée à l'intérieur de l'appartement (sans modification de la structure porteuse ni de la façade) ne nécessite généralement pas d'autorisation de la copropriété ni de permis de construire. En revanche, si la verrière remplace une cloison porteuse, un bureau d'études structure est obligatoire et une déclaration préalable peut être requise. Si des travaux touchent les parties communes (percement d'une dalle, modifications des réseaux collectifs), l'accord du syndic est indispensable. Notre équipe vérifie systématiquement ces points avant tout démarrage.",
      },
    },
    {
      '@type': 'Question',
      name: "Acier, aluminium ou bois : quel matériau choisir pour une verrière intérieure ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'acier brut (ou thermolaqué noir) est le choix emblématique du style atelier parisien : robustesse, finesse des profilés, aspect industriel authentique. Il est plus lourd et plus cher que l'aluminium, mais son rendu est inégalé. L'aluminium thermolaqué est plus léger, moins coûteux (20 à 30 % moins cher) et disponible en de nombreuses teintes, mais ses profilés sont légèrement plus épais. Le bois/acier mixte apporte une chaleur naturelle au style atelier et convient aux intérieurs nordiques ou scandinaves. Pour les appartements haussmanniens parisiens, l'acier noir mat reste la valeur sûre.",
      },
    },
    {
      '@type': 'Question',
      name: "Une verrière intérieure isole-t-elle correctement le bruit ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une verrière simple vitrage (4 mm) offre une isolation phonique très faible (Rw ≈ 28 dB), insuffisante pour une séparation salon-cuisine si l'on souhaite isoler les odeurs de cuisson ou les bruits. Le double vitrage feuilleté acoustique (44/2/44 ou 44/4/44) monte jusqu'à Rw 40–44 dB, comparable à une cloison légère. Pour une vraie isolation phonique entre deux pièces, optez pour le double vitrage acoustique dès la conception. Le surcoût est de 15 à 25 % sur le prix du vitrage mais apporte un confort significatif.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Verrière Intérieure Atelier Paris : styles, prix & pose 2025 | Espace Design",
  description: "Installer une verrière intérieure style atelier à Paris : séparation salon-cuisine, cloison vitrée, prix pose. Artisan Paris, devis 48h.",
  keywords: [
    'verrière intérieure Paris',
    'verrière atelier Paris',
    'cloison vitrée Paris',
    'prix verrière intérieure Paris',
    'verrière style atelier appartement',
    'séparation vitrée salon cuisine Paris',
    'artisan verrière Paris',
  ],
}

export default function ArticleVerriereAtelierParis() {
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
            Décoration
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Verrière Intérieure Atelier Paris : styles, prix et pose 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La verrière intérieure style atelier est devenue l&apos;un des éléments décoratifs les plus demandés dans les appartements parisiens. Séparation salon-cuisine, cloison vitrée entre entrée et couloir, porte verrière coulissante : elle apporte lumière, volume et caractère sans cloisonner l&apos;espace. Guide complet 2025 : styles, matériaux, configurations, prix et contraintes de pose.
          </p>
        </div>
      </section>

      {/* Section 1 — Styles */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les 4 grands styles de verrières intérieures pour appartement parisien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le style de la verrière doit s&apos;harmoniser avec l&apos;architecture existante. Un appartement haussmannien, un loft industriel et un appartement années 70 n&apos;appellent pas les mêmes choix. Voici les grandes familles de verrières que nous réalisons à Paris.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: "Style atelier Eiffel : acier brut et vitrage clair",
                  detail: "Le style atelier classique s'inspire des ateliers d'artistes parisiens du XIXe siècle : profilés en acier brut ou thermolaqué noir mat, petits carreaux, vitrage transparent. C'est la finition emblématique des lofts et des appartements industriels parisiens. Les profilés fins (20 à 30 mm) apportent un aspect authentique et laissent passer un maximum de lumière. Adapté aux grands appartements avec double séjour ou mezzanine.",
                },
                {
                  enjeu: "Style nordique / scandinave : acier noir et bois",
                  detail: "L'association acier noir et bois naturel (chêne, hêtre, pin) adoucit le rendu industriel de l'atelier pour un effet plus chaleureux, parfait dans les appartements avec parquet en chêne. Les montants en bois peuvent être traités foncés (teinte wengé, gris anthracite) pour rester cohérents avec un intérieur contemporain. Idéal dans les appartements des années 70–80 rénovés dans un esprit nordique.",
                },
                {
                  enjeu: "Style contemporain : aluminium thermolaqué",
                  detail: "L'aluminium thermolaqué offre des profilés fins disponibles en toutes teintes RAL, des formes plus géométriques et épurées. Moins cher que l'acier, plus léger, et ne demandant aucun entretien. Le rendu est plus design et moins brut que l'acier, adapté aux appartements modernes, aux cuisines ouvertes contemporaines et aux espaces qui ne veulent pas d'une esthétique trop industrielle.",
                },
                {
                  enjeu: "Style haussmannien : verrière et moulures",
                  detail: "Dans les appartements haussmanniens parisiens, la verrière peut s'intégrer avec des profilés en acier noir alliant les codes industriels à des vitrages aux formes géométriques classiques (arches, demi-lunes). La verrière peut séparer l'entrée du couloir, isoler une bibliothèque ou encadrer un espace bureau. Elle dialogue avec les moulures et hauts plafonds sans les concurrencer.",
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

      {/* Section 2 — Configurations */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Configurations de verrières : séparation, porte coulissante, mur porteur
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La verrière peut prendre de nombreuses formes selon la configuration de votre appartement et l&apos;effet recherché. Voici les cas les plus courants que nous réalisons à Paris.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Verrière de séparation cuisine-salon",
                solution: "La configuration la plus demandée à Paris : une cloison vitrée sépare la cuisine ouverte du salon pour contenir les odeurs de cuisson tout en gardant la luminosité et la convivialité d'un espace ouvert. En général 2 à 4 m de large, du sol au plafond. Une ouverture (fixe ou avec porte) est souvent intégrée pour circuler entre les deux espaces.",
                cout: "2 500 – 7 000 €",
              },
              {
                titre: "Porte verrière coulissante",
                solution: "Idéale pour les petits appartements parisiens : la porte coulissante en verre et acier noir ne prend pas de place à l'ouverture, divise ou unit l'espace selon les besoins. Système rail au plafond ou au sol. Disponible en version simple ou double vantail. Parfaite pour séparer une chambre d'un bureau ou une entrée d'un couloir.",
                cout: "1 800 – 4 500 €",
              },
              {
                titre: "Verrière sur mur porteur",
                solution: "Lorsqu'un mur porteur sépare deux pièces, il est possible de réaliser une ouverture avec linteau métallique et d'y intégrer une verrière vitrée. Un bureau d'études structure est obligatoire, ainsi qu'une déclaration préalable. Cette configuration transforme deux pièces distinctes en un espace fluide tout en conservant l'intégrité structurelle du bâtiment.",
                cout: "5 000 – 14 000 €",
              },
              {
                titre: "Claustra vitré et séparation partielle",
                solution: "Pour séparer visuellement deux zones sans aller jusqu'au plafond : une cloison vitrée mi-hauteur (100 à 160 cm) crée une barrière visuelle légère et délimite les espaces (salon/salle à manger, bureau/chambre) sans couper la lumière. Idéal dans les studios ou T2 parisiens où chaque m² compte.",
                cout: "1 200 – 3 500 €",
              },
              {
                titre: "Verrière de mezzanine",
                solution: "Dans les appartements avec mezzanine (fréquents dans les lofts et greniers aménagés parisiens), une verrière sécurise l'accès à la mezzanine tout en préservant la double hauteur visuelle. Structure en acier avec garde-corps intégré, vitrage feuilleté de sécurité. La mezzanine devient une pièce à part entière, lumineuse et sécurisée.",
                cout: "4 000 – 10 000 €",
              },
              {
                titre: "Verrière d'entrée / sas",
                solution: "Séparer l'entrée du reste de l'appartement par une verrière crée un sas élégant qui valorise immédiatement l'accès au logement. Très utilisé dans les appartements haussmanniens avec grand vestibule. La verrière peut être fixe ou intégrer une porte à deux vantaux pour un effet théâtral à l'entrée.",
                cout: "2 000 – 6 000 €",
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

      {/* Section 3 — Matériaux et isolation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Matériaux, vitrages et isolation phonique
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix des matériaux et du type de vitrage détermine autant l&apos;esthétique que les performances de la verrière (isolation phonique, thermique, sécurité). Voici les options disponibles et leur impact réel.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Acier brut vs acier thermolaqué",
                prix: "Acier : +20 à 40 % vs aluminium",
                detail: "L'acier brut (non traité) offre un rendu industriel authentique mais demande une protection antirouille et un entretien périodique (huile de lin, vernis). L'acier thermolaqué (poudre époxy cuite au four) est plus résistant à la corrosion et ne demande aucun entretien : c'est le choix le plus courant. Le noir mat RAL 9005 reste la teinte la plus demandée pour le style atelier parisien.",
              },
              {
                type: "Simple vitrage vs double vitrage acoustique",
                prix: "DV acoustique : +15 à 25 %",
                detail: "Le simple vitrage (4 mm) est léger et peu coûteux mais n'offre aucune isolation phonique significative (Rw ≈ 27–28 dB). Pour une séparation cuisine-salon où l'on souhaite atténuer les bruits et odeurs, le double vitrage feuilleté acoustique (44.2/12/44.2) est conseillé : Rw 40–44 dB, comparable à une cloison légère standard. Le verre feuilleté (couche PVB intérieure) est également obligatoire pour les vitrages à moins de 90 cm du sol (sécurité NF).",
              },
              {
                type: "Vitrage dépoli, sablé ou teinté",
                prix: "+10 à 20 % vs vitrage clair",
                detail: "Le verre dépoli ou sablé permet de créer une intimité visuelle tout en laissant passer la lumière : idéal pour une séparation chambre/bureau ou entrée/couloir. Le verre fumé (teinté gris ou bronze) apporte une esthétique contemporaine. Le verre sérigraphié (motifs géométriques, pois, rayures) personnalise la verrière mais alourdit le budget.",
              },
              {
                type: "Joints et étanchéité",
                prix: "Inclus dans la pose",
                detail: "L'étanchéité entre les profilés et le vitrage est assurée par des joints silicone ou EPDM. Pour les verrières séparant la cuisine (vapeurs, odeurs), des joints à profil labyrinthique sont conseillés. La qualité des joints détermine la durabilité de la verrière et son efficacité pour contenir les odeurs.",
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

      {/* Section 4 — Prix et délais */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix verrière intérieure à Paris : tableau récapitulatif 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs pose incluse, sur mesure, pour des verrières standards installées dans des appartements parisiens.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de verrière</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Matériau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix (pose incluse)</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Délai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: "Verrière fixe séparation (2–3 m²)",
                    materiau: "Aluminium",
                    prix: "1 800 – 3 500 €",
                    delai: "2 – 3 semaines",
                  },
                  {
                    type: "Verrière fixe séparation (2–3 m²)",
                    materiau: "Acier thermolaqué",
                    prix: "2 500 – 5 000 €",
                    delai: "3 – 5 semaines",
                  },
                  {
                    type: "Porte verrière coulissante",
                    materiau: "Acier / aluminium",
                    prix: "1 800 – 4 500 €",
                    delai: "2 – 4 semaines",
                  },
                  {
                    type: "Verrière avec porte intégrée (3–5 m²)",
                    materiau: "Acier thermolaqué",
                    prix: "4 500 – 9 000 €",
                    delai: "4 – 6 semaines",
                  },
                  {
                    type: "Verrière sur mur porteur (avec linteau)",
                    materiau: "Acier + étude structure",
                    prix: "5 000 – 14 000 €",
                    delai: "6 – 10 semaines",
                  },
                  {
                    type: "Verrière bois/acier mixte sur mesure",
                    materiau: "Bois + acier",
                    prix: "6 000 – 15 000 €",
                    delai: "5 – 8 semaines",
                  },
                ].map((row, i) => (
                  <tr key={row.type + row.materiau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.materiau}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.delai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points de vigilance avant de poser une verrière à Paris
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Vérifier si la cloison existante est porteuse avant toute démolition",
                "Prévoir un vitrage feuilleté de sécurité pour les panneaux à moins de 90 cm du sol",
                "Choisir un double vitrage acoustique si la verrière sépare des espaces bruyants",
                "Vérifier le règlement de copropriété en cas de modification structurelle",
                "Anticiper les finitions au sol et au plafond autour de la verrière (ragréage, peinture)",
                "Prévoir une évacuation des eaux si la verrière est posée en zone humide",
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
              { href: '/blog/creation-verriere-interieure-paris', title: 'Création verrière intérieure Paris' },
              { href: '/blog/ouverture-cuisine-salon-paris', title: 'Ouverture cuisine salon Paris' },
              { href: '/blog/creation-cloison-separation-paris', title: 'Cloison séparation Paris' },
              { href: '/blog/mur-porteur-paris', title: 'Mur porteur Paris' },
              { href: '/blog/renovation-cuisine-ouverte-paris', title: 'Rénovation cuisine ouverte Paris' },
              { href: '/blog/decoration-interieure-paris', title: 'Décoration intérieure Paris' },
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
          Installez votre verrière style atelier à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Verrière sur mesure, acier thermolaqué, pose soignée. Devis gratuit sous 48h.
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
