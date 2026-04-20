import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Choisir Carrelage Salle de Bain Paris', item: 'https://espacedesignparis.fr/blog/choisir-carrelage-salle-de-bain' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Choisir son Carrelage Salle de Bain Paris : guide & prix 2025 | Espace Design',
  description: 'Comment choisir le bon carrelage pour sa salle de bain à Paris : format, matière, adhérence, joints. Guide artisan et prix 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/choisir-carrelage-salle-de-bain',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel format de carrelage pour une petite salle de bain parisienne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une petite salle de bain parisienne (moins de 5 m²), les formats 30x60 ou 60x60 cm sont un excellent compromis : ils agrandissent visuellement l'espace grâce à peu de joints, sans être aussi encombrants que les grands formats 120x60. Les petits formats (20x20, mosaïque) peuvent convenir au sol pour leur adhérence naturelle mais alourdissent visuellement l'espace. Évitez les formats 120x60 dans les petites surfaces car la coupe et la pose deviennent très délicates dans des espaces anguleux.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on poser du carrelage sur de l\'ancien carrelage dans une salle de bain ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, sous conditions. L'ancien carrelage doit être solidement ancré (aucun carreau décollé ou sonnant creux), parfaitement plan (écarts inférieurs à 3 mm sous la règle de 2 m) et propre et dégraissé. La pose sur ancien carrelage augmente le sol de 10 à 15 mm, ce qui peut poser problème pour les seuils de porte et les évacuations. Un ragréage fin est parfois nécessaire pour corriger la planéité. En appartement parisien, cette solution évite la dépose et l'évacuation des gravats, ce qui est un avantage logistique non négligeable.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel joint choisir pour un carrelage de salle de bain à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une salle de bain parisienne, le joint époxy est la meilleure option : imperméable, anti-moisissures, résistant aux produits ménagers et aux chocs thermiques. Il est plus difficile à poser que le joint ciment (séchage rapide, nettoyage immédiat obligatoire) mais dure 2 à 3 fois plus longtemps. Le joint ciment blanc est acceptable mais jaunit avec le temps et nécessite une application de résine hydrofuge. Le joint de résine (polyuréthane) est une alternative mi-gamme entre ciment et époxy.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Choisir son Carrelage Salle de Bain Paris : guide & prix 2025 | Espace Design',
  description: 'Comment choisir le bon carrelage pour sa salle de bain à Paris : format, matière, adhérence, joints. Guide artisan et prix 2025.',
}

export default function ArticleCarrelageSalleDeBain() {
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
            Choisir son Carrelage Salle de Bain Paris : guide & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Format, matière, adhérence au sol, joints : choisir le bon carrelage pour une salle de bain parisienne est un exercice qui combine technique et esthétique. Guide complet par un artisan carreleur parisien, avec les prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Formats */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Formats de carrelage : de la mosaïque au grand format
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le format du carrelage modifie profondément l&apos;apparence d&apos;une salle de bain. Les petits formats créent un effet rythmé et vintage, les grands formats donnent une impression d&apos;espace et de modernité. En pratique, le format doit aussi être adapté à la taille de la pièce et à la complexité des découpes.
            </p>
            <div className="space-y-4">
              {[
                {
                  format: 'Petits formats (10x10, 20x20, mosaïque)',
                  usage: 'Sol douche, niche, fond de baignoire',
                  detail: "Nombreux joints qui augmentent naturellement l'adhérence au sol. Idéaux pour les zones humides (douche à l'italienne) où le coefficient R est une priorité. Tendance rétro ou méditerranéenne. Pose plus longue et plus coûteuse (plus de découpes, plus de joints à remplir).",
                  prix: 'Pose : 55 – 80 €/m²',
                },
                {
                  format: 'Formats intermédiaires (30x60, 60x60)',
                  usage: 'Sol et murs, toutes tailles de SdB',
                  detail: "Le format 60x60 est aujourd'hui le plus demandé à Paris pour les salles de bain modernes : peu de joints, facilité d'entretien, aspect contemporain. Le 30x60 en pose décalée donne un effet allongé très apprécié dans les petites surfaces. Bon compromis entre facilité de pose et esthétique.",
                  prix: 'Pose : 45 – 65 €/m²',
                },
                {
                  format: 'Grands formats (80x80, 120x60, 120x120)',
                  usage: 'Grandes salles de bain, douches à l\'italienne',
                  detail: "Le 120x60 est la tendance forte des salles de bain haut de gamme parisiennes : joints quasi invisibles, effet marbre ou béton ciré très réaliste. Pose plus complexe (support parfaitement plan obligatoire, cales de nivellement) et chutes importantes. Nécessite souvent un ragréage préalable.",
                  prix: 'Pose : 60 – 90 €/m²',
                },
              ].map((el) => (
                <div key={el.format} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <div className="font-medium text-[#1C1C1C] text-sm">{el.format}</div>
                    <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.prix}</div>
                  </div>
                  <div className="text-[10px] text-gray-400 font-light mb-2">{el.usage}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Matières */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Matières : grès cérame, faïence, marbre et zellige
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix de la matière détermine la durabilité, l&apos;entretien et l&apos;esthétique du carrelage. En salle de bain, toutes les matières ne conviennent pas au sol — l&apos;adhérence (coefficient R) est le critère technique prioritaire.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                matiere: 'Grès cérame',
                usage: 'Sol + murs',
                detail: "Matière de référence pour les salles de bain : très résistant, imperméable, disponible en finition mate, satinée ou polie. Imite parfaitement le marbre, le béton ou le bois. Coefficient anti-glisse R9 à R11 selon finition. Poids élevé (format 120x60 : 20 kg/m²) — vérifier la résistance du plancher.",
                prix: '15 – 80 €/m² fourniture',
              },
              {
                matiere: 'Faïence',
                usage: 'Murs uniquement',
                detail: "Carrelage émaillé traditionnel. Léger, facile à poser, grande variété de couleurs et de motifs. Réservé aux murs : trop fragile pour le sol (résistance à l'usure insuffisante). La faïence de salle de bain reste très présente dans les appartements parisiens des années 1970-1990.",
                prix: '10 – 40 €/m² fourniture',
              },
              {
                matiere: 'Marbre naturel',
                usage: 'Sol + murs',
                detail: "Matériau noble, présent dans de nombreux hôtels particuliers et appartements haussmanniens parisiens. Nécessite un traitement hydrofuge régulier (sensible aux taches et à l'acidité). Froid au toucher, poids élevé. Coefficient anti-glisse faible en finition poli — à utiliser sur les murs ou avec traitement antidérapant.",
                prix: '60 – 200 €/m² fourniture',
              },
              {
                matiere: 'Zellige',
                usage: 'Murs, crédences, niches',
                detail: "Carrelage marocain artisanal en terre cuite émaillée. Irrégularités de surface et de couleur qui lui donnent un caractère unique. Très tendance dans les salles de bain et cuisines parisiennes branchées. Pose délicate (joints larges, niveaux irréguliers). Réservé aux murs — trop fragile pour le sol.",
                prix: '50 – 150 €/m² fourniture',
              },
            ].map((el) => (
              <div key={el.matiere} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.matiere}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-[10px] text-gray-400 font-light mb-2">{el.usage}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5 text-sm">
            <div className="text-[#D4AF37] font-medium mb-2">Coefficient anti-glisse (R) : ce que vous devez savoir</div>
            <div className="text-gray-300 font-light leading-relaxed">
              Pour le sol d&apos;une salle de bain, la norme impose un coefficient R9 minimum. R10 est recommandé pour les douches à l&apos;italienne, R11 pour les douches extérieures ou espaces balnéo. Les carrelages polis (marbre, grès cérame brillant) ont souvent un coefficient R6 ou R7 — dangereux au sol mouillé. Toujours vérifier la fiche technique avant achat.
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Joints */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Joints de carrelage : ciment, époxy et résine
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le joint est souvent le parent pauvre d&apos;un chantier de carrelage — pourtant c&apos;est lui qui détermine la longévité de la salle de bain. En milieu humide, un joint de mauvaise qualité ou mal appliqué devient une source de moisissures et d&apos;infiltrations en quelques mois.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Joint ciment gris ou blanc',
                prix: 'Inclus dans le prix de pose',
                detail: "Joint traditionnel, facile à poser. Le blanc jaunit avec le temps et capte les moisissures en zone humide. Le gris est plus neutre et plus masquant. À protéger obligatoirement avec une résine hydrofuge après pose. Durée de vie : 5 à 10 ans avant rejointoiement.",
              },
              {
                type: 'Joint époxy',
                prix: '+ 5 à 10 €/m² par rapport au ciment',
                detail: "Référence technique pour les salles de bain : imperméable, anti-moisissures, résistant aux détergents et aux chocs thermiques. Durée de vie 3 fois supérieure au ciment. Pose difficile (séchage très rapide, nettoyage immédiat obligatoire) — réservée aux artisans carreleurs expérimentés. À privilégier absolument en douche.",
              },
              {
                type: 'Joint résine (polyuréthane)',
                prix: '+ 3 à 6 €/m² par rapport au ciment',
                detail: "Solution intermédiaire entre ciment et époxy. Flexibilité supérieure au ciment (absorbe les micro-mouvements du support). Résistance à l'humidité correcte. Pose plus simple que l'époxy. Idéal pour les baignoires et douches à fiable trafic.",
              },
              {
                type: 'Joint de fractionnement (silicone)',
                prix: '5 – 15 € par joint linéaire',
                detail: "Obligatoire aux jonctions mur-sol et autour des équipements sanitaires (baignoire, douche, lavabo). Le silicone neutre absorbe les dilatations différentielles entre le carrelage et les équipements. À renouveler tous les 5 à 8 ans en zone humide.",
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
            Prix de pose du carrelage à Paris : tableau 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix s&apos;entendent main d&apos;oeuvre pose uniquement, fourniture carrelage non incluse, pour un carreleur parisien.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix pose</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Détail</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { prestation: 'Carrelage mural format 30x60', prix: '45 – 60 €/m²', detail: 'Pose collée, joint ciment inclus' },
                  { prestation: 'Carrelage sol format 60x60', prix: '50 – 70 €/m²', detail: 'Pose collée, joint époxy recommandé' },
                  { prestation: 'Grand format 120x60 sol ou mur', prix: '60 – 90 €/m²', detail: 'Ragréage souvent nécessaire en supplément' },
                  { prestation: 'Mosaïque / petits formats', prix: '55 – 85 €/m²', detail: 'Pose plus longue, nombreuses découpes' },
                  { prestation: 'Zellige (mur)', prix: '70 – 100 €/m²', detail: 'Joints larges, niveaux irréguliers' },
                  { prestation: 'Dépose ancien carrelage + évacuation', prix: '20 – 40 €/m²', detail: 'Selon épaisseur et adhérence' },
                ].map((row, i) => (
                  <tr key={row.prestation} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.prestation}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Checklist avant de choisir son carrelage
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Vérifier le coefficient anti-glisse R pour les carreaux de sol (R9 minimum)",
                "S'assurer que le format choisi est adapté à la taille de la pièce",
                "Prévoir 10 à 15% de chutes supplémentaires sur la quantité commandée",
                "Choisir un joint époxy pour la douche et les zones les plus humides",
                "Vérifier la planéité du support avant de commander en grand format",
                "Prévoir les joints de silicone aux jonctions sanitaires et mur-sol",
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
              { href: '/carrelage-paris', title: 'Carrelage Paris' },
              { href: '/salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/renovation-parquet-massif-paris', title: 'Parquet massif Paris' },
              { href: '/blog/renovation-cuisine-americaine-paris', title: 'Cuisine américaine Paris' },
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
          Carrelez votre salle de bain parisienne avec un artisan local
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan carreleur parisien. Devis gratuit sous 48h. Pose soignée, joints impeccables.
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
