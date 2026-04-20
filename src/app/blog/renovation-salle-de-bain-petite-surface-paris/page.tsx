import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Petite Salle de Bain Paris', item: 'https://espacedesignparis.fr/blog/renovation-salle-de-bain-petite-surface-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Petite Salle de Bain Paris : rénovation 3m² 4m² & prix 2025 | Espace Design',
  description: 'Rénover une petite salle de bain à Paris (3 à 5 m²) : douche italienne, WC suspendu, rangements. Optimisation espace et prix 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-salle-de-bain-petite-surface-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix pour rénover une petite salle de bain à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation d'une petite salle de bain de 3 à 5 m² à Paris coûte entre 4 000 et 12 000 € selon le niveau de finition et les travaux réalisés. Une rénovation légère (remplacement robinetterie + peinture + carrelage partiel) revient à 4 000 – 6 000 €. Une rénovation complète avec douche italienne, WC suspendu, nouveau carrelage sol et mur, et meuble vasque coûte 7 000 – 12 000 €. Les surprises les plus fréquentes à Paris : mise aux normes électriques (500 – 1 500 €) et déplacement de colonnes d'évacuation (1 000 – 3 000 €).",
      },
    },
    {
      '@type': 'Question',
      name: 'Douche italienne ou baignoire dans une petite salle de bain parisienne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une salle de bain de moins de 5 m², la douche à l'italienne est presque toujours la solution optimale. Une douche italienne de 80 × 80 cm n'occupe que 0,64 m² contre 1,2 à 1,5 m² pour une baignoire standard. Elle supprime également le receveur et les parois, ce qui agrandit visuellement l'espace. La baignoire n'est vraiment justifiée que si la pièce dépasse 5 à 6 m² ou si la présence de jeunes enfants le requiert.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment agrandir visuellement une petite salle de bain à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Plusieurs techniques permettent d'agrandir visuellement une salle de bain sans toucher aux murs : grands carreaux (60 × 60 cm ou 60 × 120 cm) qui réduisent le nombre de joints et donnent une impression d'espace, miroir large ou double miroir qui double la profondeur apparente, éclairage de niche dans la douche qui supprime les ombres, WC suspendu qui libère 10 cm au sol et facilite le nettoyage, et couleur unique sol-mur pour effacer les limites de la pièce.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Petite Salle de Bain Paris : rénovation 3m² 4m² & prix 2025 | Espace Design',
  description: 'Rénover une petite salle de bain à Paris (3 à 5 m²) : douche italienne, WC suspendu, rangements. Optimisation espace et prix 2025.',
}

export default function ArticleRenovationSallesDeBainPetiteSurface() {
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
            Salle de bain
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Petite Salle de Bain Paris : rénovation 3m² 4m² &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La salle de bain parisienne est souvent la pièce la plus contrainte de l&apos;appartement : 3 à 5 m² dans lesquels il faut tout faire tenir. Douche italienne, WC suspendu, miroir lumineux, niches de rangement : guide complet pour optimiser chaque centimètre et transformer votre petite salle de bain en espace fonctionnel et design en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Contraintes petite surface parisienne */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Contraintes spécifiques des salles de bain parisiennes
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Rénover une salle de bain à Paris, c&apos;est composer avec des contraintes qui ne se retrouvent pas dans les maisons individuelles : colonnes de chute encastrées dans les murs, hauteur sous plafond variable, immeubles anciens avec évacuations en plomb ou fonte, présence de voisins dessous et dessus, et réglementation copropriété parfois stricte sur les travaux humides.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Colonnes de chute et évacuations',
                  detail: 'Dans les immeubles haussmanniens, les colonnes de chute (WC, douche, lavabo) passent souvent en gaine collective. Déplacer les points d\'eau requiert une coordination avec la copropriété et peut nécessiter un agrément du syndic. Préférer des solutions qui conservent les évacuations existantes pour minimiser les travaux et les coûts.',
                },
                {
                  enjeu: 'Mise aux normes électriques (NF C 15-100)',
                  detail: 'La norme électrique impose des zones de sécurité autour de la douche, du bain et du lavabo. Un appartement ancien peut ne pas respecter ces zones : absence de différentiel 30 mA, prise trop proche de la douche, luminaire non adapté à la pièce humide. La mise aux normes est obligatoire lors d\'une rénovation complète.',
                },
                {
                  enjeu: 'Étanchéité et protection de l\'eau',
                  detail: 'Dans un immeuble, une fuite en salle de bain touche les voisins du dessous et engage la responsabilité du propriétaire. Une étanchéité sous carrelage (membrane d\'étanchéité liquide + bande aux angles) est indispensable dans les zones mouillées, particulièrement dans la douche à l\'italienne.',
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

      {/* Section 2 — Douche italienne vs baignoire */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Douche à l&apos;italienne vs baignoire : le bon choix pour chaque surface
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            C&apos;est souvent la première décision à prendre lors d&apos;une rénovation de salle de bain. Pour les petites surfaces parisiennes (moins de 5 m²), la douche à l&apos;italienne s&apos;impose presque systématiquement. Voici les arguments pour chaque solution.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Douche italienne (3 à 5 m²)',
                avantage: 'Recommandé',
                detail: 'Supprime le receveur en relief et les parois encombrantes. La douche de plain-pied s\'intègre au carrelage et agrandit visuellement la pièce. Accessible aux personnes à mobilité réduite. Entretien plus facile (pas de joints de receveur). Minimum recommandé : 80 × 80 cm, idéal 90 × 90 cm.',
              },
              {
                titre: 'Baignoire (5 m² et plus)',
                avantage: 'Grandes surfaces',
                detail: 'Indispensable si des enfants en bas âge utilisent la salle de bain. La baignoire "îlot" (autoportante) est une option design pour les surfaces de 7 m² et plus. Pour une baignoire standard (1,60 m × 0,70 m), prévoir au minimum 4 m² de dégagement autour.',
              },
              {
                titre: 'Baignoire-douche (4 à 6 m²)',
                avantage: 'Compromis',
                detail: 'Baignoire courte (1,20 à 1,40 m) avec porte coulissante. Permet de cumuler bain et douche dans un espace limité. Moins confortable qu\'une douche dédiée mais plus polyvalente. Option intéressante dans les appartements familiaux avec une seule salle de bain.',
              },
              {
                titre: 'Douche avec siège intégré',
                avantage: 'Accessibilité',
                detail: 'Pour les personnes à mobilité réduite ou les seniors. Le siège rabattable en teck ou inox ne prend pas de place au quotidien. Prévoir une barre d\'appui homologuée fixée dans la maçonnerie, pas dans le carrrelage seul.',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.avantage}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Agrandir visuellement */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Comment agrandir visuellement une petite salle de bain
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Plusieurs techniques de design et de carrelage permettent de donner une impression d&apos;espace dans une salle de bain de 3 à 5 m², sans toucher aux murs porteurs ni déplacer les évacuations.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Grands carreaux format 60x60 ou 60x120 cm',
                detail: 'Les grands formats réduisent le nombre de joints de carrelage, ce qui diminue visuellement les séparations dans la pièce. L\'effet est particulièrement fort quand le même carreau est posé au sol et aux murs : la continuité efface les limites de la pièce. Un carreau 30 × 30 cm dans une salle de 3 m² donne un effet "patchwork" à éviter.',
                impact: 'Impact visuel fort',
              },
              {
                type: 'WC suspendu (gain de 10 cm)',
                detail: 'Le WC suspendu fixe la cuvette à 45 cm du sol sur un bâti-support encastré dans la cloison. Le sol visible sous la cuvette crée une ligne continue qui allonge la pièce. Le gain de 10 cm de profondeur par rapport à un WC sur pied est significatif dans 3 m². L\'entretien du sol est également facilité.',
                impact: 'Gain de 10 cm',
              },
              {
                type: 'Miroir large ou miroir lumineux',
                detail: 'Un miroir qui couvre toute la largeur du mur au-dessus du lavabo double visuellement la profondeur de la pièce. Les miroirs avec rétroéclairage LED intégré suppriment l\'ombre portée sur le visage (idéal pour le rasage et le maquillage) et apportent un éclairage indirect chaud qui agrandit la perception de la pièce.',
                impact: 'Profondeur × 2',
              },
              {
                type: 'Niche de rangement dans la douche',
                detail: 'Une niche creusée dans la cloison de la douche (entre deux montants de la structure) fournit un rangement encastré sans débordement dans l\'espace. Dimensions typiques : 30 × 20 × 10 cm. Carrelée dans la continuité de la douche, elle est pratiquement invisible. Élimine le besoin d\'un porte-savon ou d\'une étagère rapportée.',
                impact: 'Zéro encombrement',
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.impact}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Rangements */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Optimiser les rangements dans une petite salle de bain parisienne
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            Dans moins de 5 m², chaque centimètre de rangement compte. Les solutions encastrées et les meubles suspendus sont à privilégier pour libérer le sol et simplifier le nettoyage.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Meuble vasque suspendu avec tiroirs',
                prix: '400 – 1 500 €',
                detail: 'Fixé au mur à hauteur réglable, le meuble vasque suspendu libère le sol et facilite le nettoyage. Les tiroirs coulissants organisent produits et accessoires. Choisir une profondeur de 40 cm (au lieu des 55 cm standards) pour dégager plus d\'espace devant la douche.',
              },
              {
                type: 'Colonne de rangement haute et étroite',
                prix: '150 – 600 €',
                detail: 'Une colonne de 25 à 30 cm de largeur placée entre le lavabo et la douche ou à côté du WC exploite la hauteur sous plafond sans empiéter sur le passage. Préférer des modèles fermés pour éviter l\'effet encombré.',
              },
              {
                type: 'Tablettes murales en hauteur',
                prix: '50 – 200 €',
                detail: 'Des tablettes fixées au-dessus du WC ou de la porte utilisent les zones hautes rarement exploitées. Limiter leur profondeur à 15 cm pour ne pas créer d\'obstacle. Matériaux résistants à l\'humidité obligatoires : PVC, aluminium ou bois traité.',
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
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

      {/* Section 5 — Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget rénovation petite salle de bain à Paris : prix 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour une salle de bain de 3 à 5 m² à Paris, main d&apos;œuvre et matériaux inclus.
          </p>

          <div className="space-y-3 mb-10">
            {[
              {
                prestation: 'Rénovation légère (peinture + robinetterie + accessoires)',
                prix: '2 000 – 4 000 €',
                detail: 'Sans toucher au carrelage ni aux évacuations. Remplacement des équipements apparents uniquement.',
              },
              {
                prestation: 'Rénovation partielle (nouveau carrelage + sanitaires)',
                prix: '4 000 – 6 000 €',
                detail: 'Nouveau carrelage sol et mur, nouveaux sanitaires (lavabo + WC), robinetterie, peinture plafond.',
              },
              {
                prestation: 'Rénovation complète standard (3 à 5 m²)',
                prix: '6 000 – 9 000 €',
                detail: 'Dépose totale, douche italienne ou baignoire, carrelage, meuble vasque, WC suspendu, électricité mise aux normes.',
              },
              {
                prestation: 'Rénovation complète haut de gamme',
                prix: '9 000 – 12 000 €',
                detail: 'Matériaux premium (grand format, marbre, robinetterie de luxe), niche, miroir lumineux, douche italienne sur mesure.',
              },
              {
                prestation: 'Mise aux normes électriques (NF C 15-100)',
                prix: '500 – 1 500 €',
                detail: 'Ajout différentiel 30 mA, repositionnement prises et luminaires selon les zones réglementaires.',
              },
              {
                prestation: 'Déplacement d\'une colonne de chute',
                prix: '1 000 – 3 000 €',
                detail: 'Intervention en gaine technique, coordination copropriété souvent nécessaire.',
              },
            ].map((el) => (
              <div key={el.prestation} className="grid grid-cols-[1fr_auto] gap-4 bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                <div>
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.prestation}</div>
                  <div className="text-gray-500 text-xs font-light">{el.detail}</div>
                </div>
                <div className="text-[#B8960C] text-sm font-medium self-center whitespace-nowrap">{el.prix}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour réussir sa petite salle de bain parisienne
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Conserver les évacuations existantes pour réduire les coûts et éviter les démarches en copropriété',
                'Investir dans une douche italienne bien étanchéifiée — les fuites sont le sinistre le plus fréquent',
                'Choisir des grands carreaux format 60 × 120 cm pour agrandir visuellement l\'espace',
                'Opter pour un WC suspendu — 10 cm gagnés font une vraie différence sous 5 m²',
                'Prévoir une niche de rangement dans la douche dès la conception, pas en ajout après',
                'Vérifier la conformité électrique avant les travaux de carrelage (réfection impossible après)',
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
              { href: '/salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/carrelage-paris', title: 'Carrelage Paris' },
              { href: '/plomberie-paris', title: 'Plomberie Paris' },
              { href: '/electricite-paris', title: 'Électricité Paris' },
              { href: '/blog/renovation-cuisine-ouverte-paris', title: 'Cuisine ouverte Paris' },
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
          Rénovez votre salle de bain à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisans spécialisés petites surfaces parisiennes.
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
