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
  headline: 'Carrelage Salle de Bain Paris : pose, choix & prix 2025 | Espace Design',
  description: 'Poser du carrelage en salle de bain à Paris : format, joint époxy, pose sur ancien carrelage, prix artisan. Guide 2025.',
  datePublished: '2025-04-20',
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
      name: 'Quel est le prix de pose de carrelage en salle de bain à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix de pose de carrelage en salle de bain à Paris se situe entre 60 et 120 €/m² main d\'oeuvre comprise (hors fourniture du carrelage). Ce prix varie selon le format des carreaux (grand format plus long à poser), le type de joint (époxy plus technique que ciment), la complexité de la pose (pose droite moins chère que pose en diagonale ou en chevron), et la nécessité de déposer l\'ancien carrelage. Pour une salle de bain de 5 m², comptez entre 300 et 600 € de main d\'oeuvre pour le sol, et 400 à 800 € pour les murs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on poser du carrelage sur l\'ancien carrelage en salle de bain ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, il est possible de poser du nouveau carrelage directement sur l\'ancien à condition que l\'ancien soit bien adhérent (aucun carreau décollé, aucun son creux), que la surface soit plane et solide, et que la surépaisseur n\'occasionne pas de problème avec les seuils de portes ou les équipements sanitaires. Cette technique évite le coût et la durée de la dépose (démolition, évacuation des gravats). En revanche, elle n\'est pas recommandée si l\'ancien carrelage est fissuré, humide en profondeur, ou si vous souhaitez refaire l\'étanchéité de la douche.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle différence entre joint époxy et joint ciment en salle de bain ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le joint époxy est à base de résine : il est imperméable, résistant aux taches, aux produits ménagers et aux bactéries. Il ne se colore pas dans le temps et ne nécessite pas d\'entretien particulier. En contrepartie, il est plus difficile à poser (prise rapide, technique rigoureuse) et coûte 2 à 3 fois plus cher que le joint ciment. Le joint ciment est plus accessible et facile à corriger, mais il est poreux, peut jaunir avec le temps et demande un traitement hydrofuge régulier. Pour une douche italienne ou un bac à douche, le joint époxy est fortement recommandé.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Carrelage Salle de Bain Paris : pose, choix & prix 2025 | Espace Design',
  description: 'Poser du carrelage en salle de bain à Paris : format, joint époxy, pose sur ancien carrelage, prix artisan. Guide 2025.',
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
            Carrelage Salle de Bain Paris : pose, choix & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Grand format, joint époxy, pose sur ancien carrelage, étanchéité douche italienne : le carrelage d&apos;une salle de bain parisienne est un chantier technique qui ne s&apos;improvise pas. Guide complet pour bien choisir et bien faire poser votre carrelage en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Choisir le carrelage */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Choisir le carrelage : format, matière et rendu
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le choix du carrelage conditionne l&apos;esthétique finale, mais aussi la complexité de la pose et le budget. Les formats grands (60x60 cm, 90x90 cm, 120x60 cm) sont tendance et agrandissent visuellement les petites salles de bain parisiennes. En revanche, ils exigent un support parfaitement plan et une pose plus technique.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Pour les murs, le carrelage en grès cérame émaillé ou le faïence sont les références en salle de bain. Pour le sol, un grès cérame antidérapant (classement R10 minimum pour sol mouillé) est indispensable, surtout dans la zone douche.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Grand format (60x60, 90x90, 120x60 cm)',
                  detail: 'Le grand format réduit le nombre de joints et donne un aspect luxueux et contemporain. Il est idéal pour les murs. Sur le sol, il nécessite un support parfaitement plan (ragréage obligatoire si irrégularités) et une pose en pleine masse (colle sur toute la surface, pas uniquement les bords). Coût de pose : 80 à 120 €/m².',
                },
                {
                  enjeu: 'Petit format et zellige (mosaïque, 10x10, 20x20 cm)',
                  detail: 'Les petits formats et le zellige marocain sont très prisés dans les salles de bain parisiennes haut de gamme. La pose est plus longue (plus de découpes, plus de joints), ce qui augmente le coût de main d\'oeuvre de 20 à 40%. Le joint est partie intégrante du rendu esthétique. Coût de pose : 90 à 140 €/m².',
                },
                {
                  enjeu: 'Carrelage imitation béton ou marbre',
                  detail: 'Le grès cérame imitation béton (format 60x60 cm) ou imitation marbre (60x120 cm) offre un rendu haut de gamme à prix raisonnable. Contrairement au vrai marbre, il est imperméable, ne se tache pas et ne nécessite aucun traitement. Très adapté aux salles de bain parisiennes de style contemporain.',
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

      {/* Section 2 — Joint et pose sur ancien carrelage */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Joint époxy, pose sur ancien carrelage et peinture carrelage
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Trois questions reviennent systématiquement lors de la rénovation d&apos;une salle de bain parisienne : faut-il choisir un joint époxy ou ciment ? Peut-on poser le nouveau carrelage sur l&apos;ancien ? La peinture carrelage est-elle une alternative sérieuse ? Réponses techniques.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Joint époxy vs joint ciment',
                solution: 'Le joint époxy (résine) est imperméable, antibactérien et ne jaunit pas. Recommandé pour toute zone humide (douche, bac). Plus technique à poser (prise rapide à 20°C), il coûte 2 à 3 fois plus cher que le joint ciment. Le joint ciment est plus facile à corriger mais reste poreux sans traitement hydrofuge régulier.',
                cout: 'Époxy : 15 – 40 €/m² surcout',
              },
              {
                titre: 'Pose sur ancien carrelage',
                solution: 'Possible si l\'ancien carrelage est parfaitement adhérent (test au marteau : aucun son creux), plan et non fissuré. Économise la dépose (250 – 500 €) et réduit la durée du chantier de 1 à 2 jours. Non recommandé si l\'étanchéité de la douche doit être refaite ou si des carreaux sont déjà décollés.',
                cout: 'Économie dépose : 250 – 500 €',
              },
              {
                titre: 'Peinture carrelage : réalité et limites',
                solution: 'La peinture carrelage (peinture époxy ou résine) peut revitaliser un carrelage en bon état pour un budget limité (30 à 80 €/m²). Elle tient 5 à 10 ans selon l\'usage. Idéale pour les murs et les plans de travail. Déconseillée pour les sols de douche (usure rapide) ou les carrelages très brillants (adhérence faible).',
                cout: '30 – 80 €/m² tout compris',
              },
              {
                titre: 'Étanchéité bac douche (Schluter, résine)',
                solution: 'Avant de carrelaer une douche à l\'italienne, l\'étanchéité du receveur est obligatoire. Deux options : le système Schluter (bande de désolidarisation + membrane) ou la résine d\'étanchéité en deux couches. Les deux sont compatibles avec le carrelage. Le système Schluter est plus rapide et garantit une durabilité supérieure.',
                cout: '200 – 600 € pour un bac de 90x90',
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

      {/* Section 3 — Prix et durée */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de pose et durée de chantier : salle de bain complète à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent main d&apos;oeuvre comprise, hors fourniture du carrelage. Pour une salle de bain complète de 4 à 6 m², comptez 3 à 7 jours de chantier selon la complexité.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix MO</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    prestation: 'Dépose ancien carrelage (sol + murs)',
                    prix: '20 – 40 €/m²',
                    duree: '0,5 – 1 jour',
                  },
                  {
                    prestation: 'Pose carrelage sol (format standard)',
                    prix: '60 – 90 €/m²',
                    duree: '1 jour pour 5 m²',
                  },
                  {
                    prestation: 'Pose carrelage mural (faïence)',
                    prix: '65 – 100 €/m²',
                    duree: '1 – 2 jours pour 15 m²',
                  },
                  {
                    prestation: 'Pose grand format (60x60 ou +)',
                    prix: '80 – 120 €/m²',
                    duree: '+20% vs format standard',
                  },
                  {
                    prestation: 'Étanchéité receveur douche italienne',
                    prix: '200 – 600 € forfait',
                    duree: '0,5 jour',
                  },
                  {
                    prestation: 'Chantier complet salle de bain 5 m²',
                    prix: '800 – 1 800 €',
                    duree: '3 – 7 jours',
                  },
                ].map((row, i) => (
                  <tr key={row.prestation} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.prestation}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour réussir sa pose de carrelage
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Toujours prévoir 10% de carreaux supplémentaires pour les découpes et les casses',
                'Faire vérifier la planéité du support avant de choisir le format (ragréage si nécessaire)',
                'Opter pour le joint époxy dans toute zone humide (douche, autour de la baignoire)',
                'Tracer les axes de pose avant de commencer — un départ mal calé se voit sur tout le mur',
                'Laisser sécher 24h entre la pose et le jointoiement pour éviter le décollement',
                'En appartement parisien : vérifier le poids du carrelage grand format sur les planchers anciens',
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
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
              { href: '/blog/renovation-salle-de-bain-prix-paris', title: 'Prix rénovation salle de bain Paris' },
              { href: '/blog/plomberie-renovation-paris', title: 'Plomberie rénovation Paris' },
              { href: '/blog/creation-cloison-separation-paris', title: 'Créer une cloison Paris' },
              { href: '/contact', title: 'Demander un devis gratuit' },
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
          Faites poser votre carrelage par un artisan parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Carreleur expérimenté à Paris et Île-de-France.
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
