import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Revêtement Sol Appartement Paris', item: 'https://espacedesignparis.fr/blog/revetement-sol-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Revêtement Sol Appartement Paris : parquet, carrelage, résine & prix 2025',
  description: "Choisir le revêtement de sol pour un appartement parisien : parquet massif, flottant, carrelage, résine. Comparatif prix au m² et conseils selon type d'immeuble 2025.",
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  url: 'https://espacedesignparis.fr/blog/revetement-sol-appartement-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel revêtement de sol choisir pour un appartement haussmannien à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans un appartement haussmannien, le parquet massif ou contrecollé chêne est le choix classique et le plus valorisant : il s'intègre parfaitement à l'architecture et peut être rénové plusieurs fois par ponçage. Le parquet en point de Hongrie ou en bâtons rompus est souvent présent sous une moquette ou un vinyle — la rénovation par ponçage vitrification (25 – 50 €/m²) redonne une seconde vie à l'original. Pour les pièces humides (cuisine ouverte, salle de bain), le carrelage ou le béton ciré sont préférables. Le parquet flottant est une option économique mais moins adaptée aux planchers anciens déformés.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix de pose d'un parquet à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La pose d'un parquet à Paris coûte entre 30 et 80 €/m² pour la main d'œuvre seule, selon le type de pose (flottante, clouée, collée). Ajoutez le coût du parquet : 25 – 60 €/m² pour un parquet contrecollé chêne standard, 60 – 150 €/m² pour un parquet massif qualité. Pour une pièce de 20 m², comptez 1 500 – 4 000 € main d'œuvre et matériaux, sans compter la dépose de l'ancien revêtement (200 – 500 €) ni le ragréage si nécessaire.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on poser un carrelage grand format dans un appartement parisien ancien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, le carrelage grand format (60×60, 90×90, 120×60 cm) est très tendance dans les appartements parisiens rénovés. Attention au plancher support : dans un immeuble ancien avec plancher bois, un ragréage préalable ou une dalle de compression peut être nécessaire pour supporter le poids du grand format et éviter les fissures. La pose est plus technique (litage soigné, colle adaptée). Comptez 60 – 120 €/m² posé selon le format et la qualité du carrelage.",
      },
    },
    {
      '@type': 'Question',
      name: 'La résine époxy est-elle adaptée à un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La résine époxy est particulièrement adaptée aux cuisines, salles de bain et lofts parisiens contemporains. Imperméable, résistante aux chocs et sans joint, elle offre une surface seamless très prisée. Elle s'applique sur une dalle béton ou un carrelage existant (après préparation soigneuse du support). Prix à Paris : 60 – 120 €/m² posé. Contrainte : la préparation du support est critique — une mauvaise adhérence entraîne des décollements. Toujours confier la pose à un professionnel expérimenté.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Revêtement Sol Appartement Paris : parquet, carrelage, résine & prix 2025 | Espace Design',
  description: "Choisir le revêtement de sol pour un appartement parisien : parquet massif, flottant, carrelage, résine. Comparatif prix au m² et conseils selon type d'immeuble 2025.",
  keywords: ['revêtement sol appartement Paris', 'parquet Paris', 'carrelage Paris', 'résine sol Paris', 'pose parquet Paris'],
}

export default function ArticleRevetementSolParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Parquet</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Revêtement Sol Appartement Paris : parquet, carrelage, résine et prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le choix du revêtement de sol est l&apos;une des décisions les plus déterminantes dans une rénovation parisienne. Parquet massif ou flottant, carrelage grand format, béton ciré, résine : chaque option a ses avantages, ses contraintes et ses prix. Voici le guide complet 2025 pour choisir selon le type d&apos;immeuble et le budget.
          </p>
        </div>
      </section>

      {/* Section 1 — Parquet */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Parquet massif vs flottant : lequel choisir à Paris ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le parquet reste le revêtement de sol le plus prisé dans les appartements parisiens, qu&apos;il s&apos;agisse de rénovation d&apos;un haussmannien ou d&apos;un appartement contemporain. Deux grandes familles s&apos;opposent : le parquet massif (lame pleine en bois) et le parquet contrecollé ou flottant (âme en bois contreplaqué, couche d&apos;usure en bois noble).
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Le parquet massif est réparable (ponçage, vitrification) plusieurs fois sur sa durée de vie — un atout majeur dans les appartements anciens où le sol subit des variations d&apos;hygrométrie importantes selon les saisons. Le parquet flottant est plus stable dimensionnellement, plus rapide à poser et souvent moins coûteux.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Parquet massif chêne (le choix patrimonial)',
                  detail: "Lame pleine de 14 à 22 mm d'épaisseur, posée clouée (sur lambourdes ou plancher bois existant) ou collée (sur dalle béton). Durée de vie : 50 à 80 ans avec entretien régulier. Peut être poncé et revitrifié 5 à 8 fois. Idéal pour les appartements haussmanniens et les biens de prestige. Prix matériau : 60 – 150 €/m². Pose : 40 – 70 €/m².",
                },
                {
                  enjeu: 'Parquet contrecollé (le meilleur rapport qualité/prix)',
                  detail: "Âme en multiplis ou HDF, couche d'usure 3 à 6 mm en chêne ou autre essence. Pose collée, flottante ou clouée. Plus stable que le massif face aux variations d'humidité — recommandé si plancher chauffant. Couche d'usure ponçable 1 à 2 fois. Prix matériau : 30 – 80 €/m². Pose : 30 – 60 €/m².",
                },
                {
                  enjeu: 'Rénovation du parquet existant',
                  detail: "Dans les appartements haussmanniens, le parquet en point de Hongrie ou bâtons rompus est souvent masqué sous moquette ou vinyle. La rénovation par ponçage + vitrification ou huilage redonne une seconde vie au parquet d'origine pour 25 – 50 €/m². Vérifier l'épaisseur restante avant de poncer (minimum 5 mm de couche d'usure).",
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

      {/* Section 2 — Carrelage */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Carrelage à Paris : grès cérame, grand format et carreaux de ciment
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le carrelage connaît un fort regain d&apos;intérêt dans les rénovations parisiennes contemporaines, notamment en grand format (60×60 cm et plus). Il offre une excellente durabilité, résiste à l&apos;eau et crée un effet visuel saisissant dans les espaces ouverts. Mais dans les immeubles anciens avec plancher bois, des précautions s&apos;imposent.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Grès cérame rectifié',
                detail: "Le choix dominant des rénovations haut de gamme. Résistant aux chocs et aux taches, disponible en imitation béton, marbre, bois. Joints réduits à 1 – 2 mm grâce au rectifié. Compatible pièces humides.",
                cout: '60 – 120 €/m² posé',
              },
              {
                titre: 'Grand format (90×90, 120×60 cm)',
                detail: "Effet espace garanti dans les séjours et cuisines parisiennes. Attention : plancher bois ancien nécessite ragréage ou dalle de compression avant pose. La colle adaptée au grand format est indispensable.",
                cout: '80 – 150 €/m² posé',
              },
              {
                titre: 'Imitation parquet (20×120 cm)',
                detail: "Tendance forte dans les cuisines et salles de bain ouvertes. Look bois avec la résistance du carrelage à l'eau. Pose en décalé recommandée pour un effet naturel. Joint fin conseillé.",
                cout: '55 – 100 €/m² posé',
              },
              {
                titre: 'Carreaux de ciment',
                detail: "Très populaires dans les rénovations d'appartements anciens (bohème chic, style bistrot). Artisanaux, motifs variés. Nécessitent un traitement hydrofuge et un entretien régulier — à réserver aux passages doux.",
                cout: '70 – 130 €/m² posé',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <h3 className="font-display text-base font-semibold text-white mb-3">
              Carrelage dans un immeuble haussmannien : précautions
            </h3>
            <div className="space-y-2">
              {[
                "Les planchers bois anciens (lambourdes + lames) supportent mal le carrelage lourd sans renfort structurel",
                "Un ragréage autonivelant (15 – 30 €/m²) est souvent nécessaire avant pose pour planéité et résistance",
                "Sous-couche de désolidarisation conseillée pour limiter les fissures dues aux mouvements du plancher",
                "Dans les parties communes, vérifier les charges admissibles avec un bureau d'études si nécessaire",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-300 font-light">
                  <CheckCircle size={14} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Résine et alternatives */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Résine, béton ciré et vinyle : les alternatives modernes
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Au-delà du parquet et du carrelage, plusieurs options séduisent les Parisiens en quête d&apos;un intérieur contemporain sans joint visible et à l&apos;entretien simplifié.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Béton ciré',
                prix: '80 – 150 €/m²',
                detail: "Appliqué en 2 à 3 mm sur le support existant, le béton ciré est seamless et très tendance dans les lofts et appartements contemporains parisiens. Sensible aux chocs et aux produits acides — traitement protecteur (vernis, cire) obligatoire et à renouveler. Peut être appliqué sur sol, murs et plan de travail pour un effet unifié.",
              },
              {
                type: 'Résine époxy',
                prix: '60 – 120 €/m²',
                detail: "Plus durable que le béton ciré, la résine époxy est imperméable et résistante aux chocs. Utilisée en cuisine, salle de bain et garage. Surface brillante ou mate selon le choix. Pose nécessitant un professionnel expérimenté — la préparation du support (ponçage, primaire d'accrochage) est critique.",
              },
              {
                type: 'Sol vinyle LVT (Luxury Vinyl Tile)',
                prix: '30 – 70 €/m² posé',
                detail: "Le vinyle LVT a révolutionné les rénovations d'appartements parisiens : imitation parquet ou carrelage très réaliste, résistant à l'eau, confortable sous le pied, compatible plancher chauffant. Idéal pour les budgets limités ou les appartements locatifs. Durée de vie : 15 à 25 ans.",
              },
              {
                type: 'Sol stratifié',
                prix: '25 – 55 €/m² posé',
                detail: "Option économique mais moins valorisante : impression bois sur support HDF, pose flottante rapide. Sensible à l'eau et peu réparable. Déconseillé dans les appartements parisiens haut de gamme ou en copropriété avec règlement acoustique strict — la sous-couche standard peut être insuffisante.",
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

      {/* Section 4 — Tableau comparatif */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Comparatif prix revêtements de sol à Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix indicatifs fourniture + pose, pour un appartement parisien standard. Hors dépose de l&apos;ancien revêtement et ragréage éventuel.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Revêtement</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée de vie</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m² posé</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Pièce humide</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rev: 'Parquet massif chêne', duree: '50 – 80 ans', prix: '100 – 220 €', humide: 'Non' },
                  { rev: 'Parquet contrecollé', duree: '20 – 40 ans', prix: '60 – 140 €', humide: 'Partiel' },
                  { rev: 'Carrelage grès cérame', duree: '40 – 60 ans', prix: '60 – 120 €', humide: 'Oui' },
                  { rev: 'Carrelage grand format', duree: '40 – 60 ans', prix: '80 – 150 €', humide: 'Oui' },
                  { rev: 'Béton ciré', duree: '15 – 25 ans', prix: '80 – 150 €', humide: 'Oui (traité)' },
                  { rev: 'Résine époxy', duree: '20 – 30 ans', prix: '60 – 120 €', humide: 'Oui' },
                  { rev: 'Vinyle LVT', duree: '15 – 25 ans', prix: '30 – 70 €', humide: 'Oui' },
                  { rev: 'Sol stratifié', duree: '10 – 20 ans', prix: '25 – 55 €', humide: 'Non' },
                ].map((row, i) => (
                  <tr key={row.rev} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.rev}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.humide}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">Conseils pratiques pour bien choisir</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Vérifier l'état du support avant de choisir — un plancher bois déformé nécessite ragréage",
                "Dans un appartement ancien, préservez le parquet d'origine si l'épaisseur le permet (min 5 mm)",
                "Pour une location, privilégiez le vinyle LVT : économique, résistant, facile à remplacer",
                "Le béton ciré valorise un bien haut de gamme mais demande un entretien rigoureux",
                "Anticipez l'isolation acoustique : sous-couche résiliente obligatoire en copropriété",
                "Demandez des échantillons avant commande — la couleur varie selon la lumière de la pièce",
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

      {/* Section 5 — Par type d'appartement */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Quel sol selon le type d&apos;appartement parisien ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le meilleur revêtement de sol dépend autant du style de vie et du budget que de l&apos;architecture du bâtiment. Voici nos recommandations selon le type d&apos;immeuble le plus fréquent à Paris.
          </p>
          <div className="space-y-4">
            {[
              {
                type: 'Immeuble haussmannien (avant 1914)',
                profil: "Plancher bois sur lambourdes, hauteur sous plafond 2,80 à 3,20 m, souvent parquet ancien en place",
                recommandation: "Priorité : rénover le parquet existant (ponçage-vitrification, 25 – 50 €/m²). Si remplacement nécessaire : parquet massif chêne cloué ou parquet contrecollé collé. Éviter le carrelage lourd sans renfort structurel. La résine époxy peut fonctionner si le support est stable.",
              },
              {
                type: 'Immeuble des années 1960–1980 (béton)',
                profil: "Dalle béton, appartements moins élevés (2,50 à 2,70 m), souvent moquette ou carrelage d'origine",
                recommandation: "Parquet contrecollé collé ou flottant, carrelage grand format, béton ciré ou résine époxy sur dalle. Le vinyle LVT est une très bonne option pour les investissements locatifs. Ragréage souvent nécessaire avant pose.",
              },
              {
                type: 'Appartement neuf ou récent (après 2000)',
                profil: "Dalle béton parfaitement plane, plancher chauffant fréquent, isolation acoustique intégrée",
                recommandation: "Parquet contrecollé compatible plancher chauffant (obligatoire si sol chauffant), carrelage grand format, béton ciré, LVT. Le parquet massif est déconseillé sur plancher chauffant (dilatation).",
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.type}</div>
                <div className="text-gray-500 text-xs font-light mb-3 italic">{el.profil}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.recommandation}</div>
              </div>
            ))}
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
              { href: '/blog/parquet-massif-paris', title: 'Parquet massif Paris' },
              { href: '/blog/carrelage-appartement-paris', title: 'Carrelage appartement Paris' },
              { href: '/blog/pose-carrelage-grand-format-paris', title: 'Pose carrelage grand format Paris' },
              { href: '/blog/sol-beton-cire-paris', title: 'Sol béton ciré Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
              { href: '/blog/renovation-immeuble-paris', title: 'Rénovation immeuble Paris' },
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
          Rénover le sol de votre appartement parisien ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Pose soignée par des artisans spécialisés. Devis sous 48h.
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
