import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Choisir son Carrelage Salle de Bain', item: 'https://espacedesignparis.fr/blog/choisir-carrelage-salle-de-bain' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Choisir son Carrelage Salle de Bain : format, matière & prix 2025 | Espace Design',
  description: 'Comment choisir le carrelage pour sa salle de bain : 60x60, grès cérame, zellige. Anti-dérapant, joints époxy. Guide et prix 2025.',
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
      name: 'Quel carrelage choisir pour le sol de la salle de bain ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour le sol de la salle de bain, il faut impérativement choisir un carrelage antidérapant classé R9 minimum (R10 recommandé pour les douches à l'italienne). Le grès cérame est le matériau de référence : dur, imperméable et facile d'entretien. Pour les petites salles de bain, les formats 20x20 ou 30x30 sont plus adaptés car ils permettent de multiplier les joints (qui jouent un rôle antidérapant). Pour les grandes salles de bain, les 60x60 ou 120x60 agrandissent visuellement l'espace.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on poser du carrelage sur un ancien carrelage en salle de bain ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, la pose de carrelage sur carrelage existant est possible si le support est sain, solidement fixé et plan. Avantages : pas de dépose (gain de temps et de budget, moins de poussière), plancher non abaissé. Contraintes : surélévation du sol de 8 à 15 mm (à vérifier avec les portes et les seuils), impossibilité de poser du grand format (la planéité du support doit être parfaite), et nécessité d'utiliser une colle spéciale carrelage sur carrelage. Budget économisé sur la dépose : 20 à 40 €/m².",
      },
    },
    {
      '@type': 'Question',
      name: 'Quels joints choisir pour la salle de bain : ciment ou époxy ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En salle de bain, les joints époxy sont nettement supérieurs aux joints ciment : imperméables, résistants aux moisissures, aux produits ménagers et aux chocs thermiques, ils ne se colorent pas et ne s'abîment pas. Inconvénient : pose plus technique et coût plus élevé (20 à 35 €/m² contre 8 à 15 €/m² pour le ciment). Les joints ciment restent acceptables pour les murs mais sont déconseillés au sol et dans la douche. En règle générale, un artisan qualifié posera systématiquement de l'époxy dans les zones humides.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Choisir son Carrelage Salle de Bain : format, matière & prix 2025 | Espace Design',
  description: 'Comment choisir le carrelage pour sa salle de bain : 60x60, grès cérame, zellige. Anti-dérapant, joints époxy. Guide et prix 2025.',
}

export default function ArticleChoisirCarrelageSDB() {
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
            Choisir son Carrelage Salle de Bain : format, matière &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Grès cérame 60x60, zellige artisanal, chevron en faïence, marbre : le choix du carrelage de salle de bain est décisif — esthétiquement et techniquement. Antidérapant, joints époxy, pose sur ancien carrelage : guide complet pour faire le bon choix en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Formats */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Choisir le bon format de carrelage selon la taille de la pièce
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le format du carrelage influence directement la perception de l&apos;espace. Dans les salles de bain parisiennes, souvent petites, le choix du format est stratégique : un grand format dans une petite pièce peut paraître écrasant, un petit format dans une grande salle de bain manque de modernité.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Petits formats (20x20, 30x30, mosaïque)',
                  detail: "Idéaux pour les salles de bain de moins de 5 m². Les petits formats suivent mieux les courbes (receveurs ronds, niche de douche) et augmentent la surface de joints, ce qui améliore l'adhérence au sol. Le carrelage mosaïque (2x2 ou 5x5 cm) est particulièrement adapté aux douches à l'italienne avec pente. Prix fourniture : 15 – 60 €/m².",
                },
                {
                  enjeu: 'Formats moyens (45x45, 60x60)',
                  detail: "Le 60x60 est le format le plus polyvalent : adapté aux salles de bain de 4 à 15 m², il agrandit visuellement l'espace sans être difficile à poser. C'est le format de référence des rénovations parisiennes standard. Disponible en grès cérame, faïence ou imitation marbre. Prix fourniture : 20 – 80 €/m².",
                },
                {
                  enjeu: 'Grands formats (120x60, 120x120)',
                  detail: "Les grands formats sont réservés aux salles de bain de 8 m² minimum. Ils donnent un effet luxueux et contemporain, réduisent le nombre de joints (donc l'entretien) mais exigent un support parfaitement plan. Peu adaptés aux petites salles de bain parisiennes. Prix fourniture : 40 – 150 €/m².",
                },
                {
                  enjeu: 'Formats atypiques (zellige, chevron, subway)',
                  detail: "Le zellige artisanal marocain (format 10x10 irrégulier), la brique subway (7,5x15 ou 10x30) et le carrelage en chevron connaissent un engouement fort. Effet authentique et chaleureux, mais pose plus longue (forme complexe ou irrégularité du zellige) et entretien spécifique pour le zellige non vitrifié. Prix fourniture : 40 – 180 €/m².",
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

      {/* Section 2 — Matières */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Matières : grès cérame, faïence, marbre, zellige — comparatif
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Chaque matière a ses avantages et ses contraintes. Le grès cérame domine le marché pour sa solidité, mais le zellige ou le marbre apportent une dimension esthétique incomparable dans une salle de bain haut de gamme.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Grès cérame (R9 / R10)',
                solution: "Matériau de référence pour le sol et les murs. Imperméable (porosité quasi nulle), très résistant à l'abrasion et aux chocs. Disponible en finition mate, satinée ou brillante, en imitation bois, marbre ou béton. Le R9 convient au sol standard, le R10 est recommandé pour la douche. Entretien minimal.",
                cout: '20 – 80 €/m²',
              },
              {
                titre: 'Faïence émaillée',
                solution: "Matériau classique pour les murs. Légère, facile à couper et moins coûteuse que le grès cérame. Surface émaillée brillante ou mate. Attention : la faïence est plus fragile (onglet cassant, sensible aux chocs) et moins adaptée au sol. Idéale pour les murs et les crédences de douche.",
                cout: '10 – 40 €/m²',
              },
              {
                titre: 'Marbre naturel',
                solution: "Le marbre confère un aspect luxueux inégalable. Froid au toucher, il convient aux salles de bain chauffées au sol. Contraintes importantes : porosité naturelle (imperméabiliser avec une résine), sensibilité aux acides (produits de nettoyage), et entretien régulier. Réservé aux projets haut de gamme avec artisan spécialisé.",
                cout: '60 – 250 €/m²',
              },
              {
                titre: 'Zellige artisanal',
                solution: "Carrelage émaillé marocain aux reflets irisés et aux légères irrégularités de surface caractéristiques. Très tendance, il apporte chaleur et authenticité. Pose délicate (format irrégulier, joints larges). Entretien plus contraignant : imperméabilisation des joints obligatoire, nettoyage doux uniquement. Idéal en mur ou niche de douche.",
                cout: '40 – 180 €/m²',
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

      {/* Section 3 — Joints et pose */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Joints, antidérapant et pose sur ancien carrelage
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix des joints et la préparation du support sont souvent négligés — pourtant, ils conditionnent la durabilité et l&apos;entretien de votre carrelage sur le long terme.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Joints époxy : la solution durable en zone humide',
                prix: '20 – 35 €/m²',
                detail: "Les joints époxy sont imperméables, résistants aux moisissures et aux produits ménagers agressifs. Ils ne se colorent pas avec le temps et ne nécessitent aucun traitement. Leur pose est plus technique (temps ouvert court, nettoyage immédiat) mais leur durabilité justifie amplement l'investissement. Recommandés pour le sol et la douche.",
              },
              {
                type: 'Joints ciment : économiques mais à éviter en douche',
                prix: '8 – 15 €/m²',
                detail: "Les joints ciment sont plus simples à poser et moins coûteux, mais ils absorbent l'humidité et peuvent se tacher, se fissurer ou développer des moisissures en zone très humide. Acceptables sur les murs de salle de bain mais déconseillés dans la douche ou au sol.",
              },
              {
                type: 'Antidérapance : classement R et obligation réglementaire',
                prix: 'Inclus dans le matériau',
                detail: "En France, le sol d'une salle de bain doit être antidérapant. Le classement R (R9 à R13) mesure la résistance au glissement : R9 est le minimum légal pour un sol intérieur, R10 est recommandé pour la douche à l'italienne, R11-R13 pour les espaces extérieurs. Attention : un carrelage mural brillant peut être magnifique mais ne doit jamais être utilisé au sol sans vérification du classement.",
              },
              {
                type: 'Pose sur ancien carrelage : quand et comment',
                prix: 'Économie de 20 – 40 €/m²',
                detail: "La pose sur carrelage existant est possible si le support est parfaitement adhérent et plan. Elle évite la dépose (dusty, bruyante, plus longue) et économise 20 à 40 €/m². Contraintes : surélévation du sol de 8 à 15 mm, format limité (60x60 maximum recommandé), colle spécifique carrelage-sur-carrelage obligatoire. À éviter si le support est décollé, fissuré ou présentant des désaffleurs importants.",
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

      {/* Section 4 — Prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Tableau des prix : carrelage salle de bain fourni et posé en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous incluent la fourniture du carrelage, la colle, les joints, et la main d&apos;oeuvre de pose à Paris.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de carrelage</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Fourniture</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Pose</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total / m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Faïence standard (mur)', fourniture: '10 – 25 €', pose: '40 – 60 €', total: '50 – 85 €' },
                  { type: 'Grès cérame 60x60', fourniture: '25 – 50 €', pose: '50 – 70 €', total: '75 – 120 €' },
                  { type: 'Grand format 120x60', fourniture: '40 – 100 €', pose: '70 – 100 €', total: '110 – 200 €' },
                  { type: 'Zellige artisanal', fourniture: '60 – 180 €', pose: '80 – 120 €', total: '140 – 300 €' },
                  { type: 'Marbre naturel', fourniture: '80 – 250 €', pose: '80 – 130 €', total: '160 – 380 €' },
                  { type: 'Carrelage chevron / subway', fourniture: '30 – 80 €', pose: '70 – 100 €', total: '100 – 180 €' },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.fourniture}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.pose}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Nos recommandations pour bien choisir
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Toujours vérifier le classement antidérapant (R9 minimum au sol, R10 en douche)",
                "Préférer les joints époxy en zone humide pour éviter moisissures et taches",
                "Commander 10% de surplus pour les coupes et les casses",
                "Harmoniser le format du sol et des murs pour un effet cohérent",
                "Tester la couleur des joints avant pose définitive — ils changent l'effet visuel",
                "Pour le zellige et le marbre, toujours choisir un artisan carreleur expérimenté",
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
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/douche-italienne-paris', title: 'Douche italienne Paris' },
              { href: '/blog/carrelage-salle-de-bain-paris', title: 'Carrelage salle de bain Paris' },
              { href: '/blog/renovation-appartement-paris-2e', title: 'Rénovation appartement Paris 2e' },
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
          Votre projet carrelage salle de bain à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan carreleur qualifié. Devis gratuit sous 48h. Pose soignée et finitions impeccables.
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
