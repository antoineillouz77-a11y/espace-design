import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Parquet Contrecollé Paris', item: 'https://espacedesignparis.fr/blog/renovation-parquet-contrecolle-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Parquet Contrecollé Paris : pose, prix & avantages 2025 | Espace Design',
  description: 'Choisir et poser du parquet contrecollé à Paris : avantages vs massif, pose flottante vs collée, essences. Prix au m² et artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-parquet-contrecolle-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Parquet contrecollé ou massif : lequel choisir pour un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le parquet massif convient aux pièces sèches et stables thermiquement, mais il est sensible aux variations d'hygrométrie — fréquentes dans les appartements parisiens anciens. Le contrecollé est plus stable grâce à sa structure multicouche : il supporte mieux le chauffage par le sol et les variations d'humidité. Pour la plupart des appartements parisiens (chauffage central, variation saisonnière), le contrecollé est un choix plus sûr et moins coûteux à long terme.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle différence entre parquet contrecollé et stratifié ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le stratifié est entièrement artificiel : une image de bois imprimée sur un support HDF. Le contrecollé possède une vraie couche de bois naturel en surface (2 à 6 mm), collée sur des plis de contreplaqué. Le contrecollé peut être poncé et rénové 1 à 2 fois selon l'épaisseur de sa couche d'usure, contrairement au stratifié qui ne peut pas être retouché. Le contrecollé se rapproche du massif en termes de ressenti et de longévité.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le prix pour poser du parquet contrecollé à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix du parquet contrecollé posé à Paris varie entre 40 et 120 €/m² selon l'essence et la finition choisies. La pose flottante (colle MS polymère ou agrafes) est moins chère que la pose collée (40 à 60 €/m² fourni posé). La pose collée sur chape ou carrelage existant est plus technique et coûte 60 à 90 €/m². Les essences nobles (noyer, frêne brossé, chêne huilé haut de gamme) font monter le budget à 90 – 120 €/m².",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Parquet Contrecollé Paris : pose, prix & avantages 2025 | Espace Design',
  description: 'Choisir et poser du parquet contrecollé à Paris : avantages vs massif, pose flottante vs collée, essences. Prix au m² et artisan 2025.',
}

export default function ArticleParquetContrecolleParis() {
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
            Parquet Contrecollé Paris : pose, prix &amp; avantages 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le parquet contrecollé s&apos;est imposé comme le choix de référence pour les rénovations parisiennes. Plus stable que le massif face aux variations d&apos;humidité des immeubles anciens, compatible avec le chauffage par le sol, disponible dans de nombreuses essences et finitions : guide complet pour choisir et poser votre parquet contrecollé en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Massif vs contrecollé vs stratifié */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Massif, contrecollé ou stratifié : les différences essentielles
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Avant de choisir un parquet, il est indispensable de comprendre les différences techniques entre les trois types disponibles sur le marché. Ces différences ont des conséquences directes sur la durabilité, la compatibilité avec votre sous-plancher et votre budget.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Parquet massif',
                  detail: 'Une seule pièce de bois de 14 à 22 mm d\'épaisseur. Peut être poncé et rénové de nombreuses fois (5 à 8 fois sur sa vie). Sensible aux variations d\'humidité : il gonfle et se rétracte avec les saisons, ce qui génère des craquements et des disjonctions dans les appartements anciens mal isolés. Incompatible avec le chauffage par le sol radiant.',
                },
                {
                  enjeu: 'Parquet contrecollé',
                  detail: 'Structure multicouche : couche d\'usure en bois naturel (2 à 6 mm) + âme en contreplaqué croisé (HDF ou peuplier). La structure croisée absorbe les mouvements du bois et garantit une grande stabilité dimensionnelle. Compatible avec le chauffage par le sol. Peut être poncé 1 à 2 fois selon l\'épaisseur de la couche d\'usure. Idéal pour les appartements parisiens.',
                },
                {
                  enjeu: 'Parquet stratifié',
                  detail: 'Composé d\'un support HDF recouvert d\'une image de bois imprimée protégée par une résine. Aucun bois naturel en surface. Très résistant aux rayures et à l\'humidité, mais impossible à rénover et sans la chaleur visuelle du vrai bois. Recommandé uniquement pour les budgets très serrés ou les pièces très passantes (couloir).',
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

      {/* Section 2 — Essences */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Essences de bois pour un parquet contrecollé à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;essence du bois détermine la couleur, la dureté et le caractère du parquet. Le chêne domine largement le marché parisien pour sa polyvalence et sa durabilité, mais d&apos;autres essences méritent d&apos;être considérées selon le style de l&apos;appartement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Chêne',
                dureté: 'Dureté Janka 1290',
                detail: 'L\'essence la plus populaire en France. Teintes allant du blond naturel au brun foncé selon la finition. S\'intègre dans tous les styles : haussmannien, contemporain, scandinave. Résistant, durable, facile à entretenir. La valeur sûre du parquet parisien.',
              },
              {
                titre: 'Noyer',
                dureté: 'Dureté Janka 1010',
                detail: 'Teinte naturellement brun-chocolat avec des veinures caractéristiques. Apporte une chaleur et un caractère fort à la pièce. Moins dur que le chêne, à éviter dans les couloirs très passants. Idéal pour chambre à coucher ou salon en style contemporain ou Art Déco.',
              },
              {
                titre: 'Frêne',
                dureté: 'Dureté Janka 1320',
                detail: 'Teinte claire, presque blanche, avec des veinures prononcées et un aspect moderne. Très populaire pour les intérieurs scandinaves et minimalistes. Plus dur que le chêne, excellent dans les zones passantes. Disponible en version brossée pour un effet vieilli très tendance.',
              },
              {
                titre: 'Bambou contrecollé',
                dureté: 'Dureté très élevée',
                detail: 'Techniquement une herbe et non un bois, mais commercialisé comme parquet. Extrêmement résistant aux rayures, teintes du naturel au carbonisé (brun foncé). Aspect contemporain, très stable. Attention à la qualité des colles utilisées lors de la fabrication.',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.dureté}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Finitions */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Finitions : huilé, vitrifié, brossé — comment choisir ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La finition de surface du parquet contrecollé conditionne son aspect visuel, sa résistance et son entretien. Trois grandes familles s&apos;opposent, chacune adaptée à des usages et des styles différents.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Parquet huilé',
                detail: 'L\'huile pénètre dans les fibres du bois et le nourrit en profondeur. Aspect naturel, mat, qui respecte la texture du bois. Le parquet huilé "respire" et développe une patine avec le temps. En contrepartie, il demande un entretien régulier (réhuilage tous les 2 à 5 ans selon l\'usage). Idéal pour un intérieur chaleureux et authentique.',
                entretien: 'Réhuilage annuel recommandé',
              },
              {
                type: 'Parquet vitrifié',
                detail: 'Un vernis polyuréthane est appliqué en surface et forme une pellicule de protection. Très résistant aux rayures, facile à nettoyer à la serpillière humide, aucun entretien particulier. Aspect légèrement brillant ou satiné. Moins de "vie" visuelle que le huilé — le grain du bois est recouvert. Parfait pour les pièces passantes et les familles avec enfants.',
                entretien: 'Passage humide simple',
              },
              {
                type: 'Parquet brossé',
                detail: 'Le brossage mécanique creuse les fibres tendres du bois pour accentuer les veinures et donner un aspect vieilli ou rustique. Peut être combiné avec une finition huilée ou vitrifiée. Très tendance dans les intérieurs contemporains et les rénovations en style "loft parisien". Masque naturellement les petites rayures quotidiennes.',
                entretien: 'Selon finition associée',
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.entretien}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Pose flottante vs collée */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Pose flottante ou collée : quelle méthode pour votre appartement ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            Le choix de la méthode de pose dépend de l&apos;état du sous-plancher, de la présence d&apos;un chauffage par le sol et du type de contrecollé choisi. Les deux méthodes sont professionnelles — le résultat final est identique si la pose est bien réalisée.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Pose flottante (clic ou colle à joint)',
                avantage: 'Rapide, réversible',
                detail: 'Les lames sont simplement emboîtées ou collées entre elles, sans fixation au sol. Le parquet "flotte" sur une sous-couche acoustique. Idéal sur chapes planes, carrelage existant en bon état ou planchers bois anciens. Avantage : dépose possible sans endommager le sol. Inconvénient : léger effet "creux" sous le pied sur les grandes surfaces.',
              },
              {
                type: 'Pose collée (colle MS polymère ou urée)',
                avantage: 'Solidité maximale, compatible plancher chauffant',
                detail: 'Chaque lame est collée directement sur le support avec une colle adaptée. Résultat plus rigide, meilleur ressenti sous le pied, aucun bruit de claquement. Obligatoire pour les parquets contrecollés sur plancher chauffant (colle souple MS polymère). Plus longue à réaliser, non réversible sans endommager le parquet.',
              },
              {
                type: 'Pose clouée (pour planchers bois anciens)',
                avantage: 'Adapté aux parquets anciens',
                detail: 'Méthode traditionnelle sur lambourdes ou plancher bois porteur. Les lames sont clouées ou agrafées dans la languette. Adaptée aux parquets massifs mais aussi à certains contrecollés épais sur plancher bois ancien parisien. Permet une ventilation naturelle sous le parquet.',
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.avantage}</div>
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
            Prix 2025 : parquet contrecollé fourni et posé à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent fourniture et pose incluses, pour un artisan parqueteur qualifié intervenant à Paris et en Île-de-France.
          </p>

          <div className="space-y-3 mb-10">
            {[
              {
                prestation: 'Contrecollé chêne d\'entrée de gamme (pose flottante)',
                prix: '40 – 55 €/m²',
                detail: 'Chêne 3 plis, couche d\'usure 2 mm, finition vitrifiée, pose flottante sur sous-couche.',
              },
              {
                prestation: 'Contrecollé chêne milieu de gamme (pose flottante)',
                prix: '55 – 75 €/m²',
                detail: 'Chêne 5 plis, couche d\'usure 3,5 mm, finition huilée ou vitrifiée, pose flottante.',
              },
              {
                prestation: 'Contrecollé chêne milieu de gamme (pose collée)',
                prix: '65 – 90 €/m²',
                detail: 'Même produit posé à la colle MS polymère — recommandé sur plancher chauffant.',
              },
              {
                prestation: 'Contrecollé chêne haut de gamme brossé huilé',
                prix: '80 – 110 €/m²',
                detail: 'Chêne 5 plis, couche d\'usure 4 à 6 mm, brossé et huilé, lames larges (180 mm et plus).',
              },
              {
                prestation: 'Contrecollé noyer ou frêne haut de gamme',
                prix: '90 – 120 €/m²',
                detail: 'Essences nobles, couche d\'usure épaisse, pose collée, ponçage et finition sur place.',
              },
              {
                prestation: 'Dépose de l\'ancien revêtement',
                prix: '5 – 15 €/m²',
                detail: 'Dépose de moquette, lino ou parquet ancien avant la pose du nouveau parquet.',
              },
              {
                prestation: 'Ragréage de la chape (mise à niveau)',
                prix: '10 – 20 €/m²',
                detail: 'Si le sol n\'est pas plan (tolérance max 2 mm sous règle de 2 m), ragréage indispensable avant pose.',
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
              Conseils pour bien choisir son parquet contrecollé
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Laisser le parquet acclimaté dans la pièce 48h avant la pose pour éviter les retraits',
                'Vérifier la planéité du support avant la pose — le ragréage évite les craquements',
                'Sur plancher chauffant, toujours choisir une colle MS polymère souple',
                'Préférer une couche d\'usure d\'au moins 3,5 mm pour pouvoir poncer et rénover',
                'Comparer les certifications : PEFC ou FSC garantissent une forêt gérée durablement',
                'Prévoir 5 à 10 % de chutes supplémentaires pour les découpes et les angles',
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
              { href: '/renovation-paris', title: 'Rénovation appartement Paris' },
              { href: '/blog/renovation-salon-paris', title: 'Rénovation salon Paris' },
              { href: '/blog/renovation-chambre-paris', title: 'Rénovation chambre Paris' },
              { href: '/blog/renovation-bureau-paris', title: 'Aménagement bureau Paris' },
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
          Posez votre parquet contrecollé à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Parqueteurs qualifiés en Île-de-France.
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
