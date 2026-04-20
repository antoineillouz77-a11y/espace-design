import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Revêtement Sol Paris', item: 'https://espacedesignparis.fr/blog/revetement-sol-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Revêtement Sol Appartement Paris : parquet, carrelage, béton ciré 2025 | Espace Design',
  description: 'Choisir le bon revêtement de sol pour un appartement parisien : parquet, carrelage, béton ciré, vinyle. Comparatif prix et conseils 2025.',
  datePublished: '2025-04-20',
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
      name: 'Quel revêtement de sol choisir pour un appartement parisien ancien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans un appartement haussmannien ou de rapport parisien, le parquet massif ou contrecollé chêne est le choix classique et le plus valorisant. Il s'intègre parfaitement à l'architecture ancienne et peut être rénové plusieurs fois par ponçage. Pour les pièces humides (cuisine ouverte, salle de bain), le carrelage ou le béton ciré sont préférables. Le parquet flottant est une option économique mais moins noble et moins adaptée aux planchers anciens.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le prix de pose d\'un parquet à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La pose d'un parquet à Paris coûte entre 30 et 80 €/m² pour la main d'œuvre seule, selon le type de pose (flottante, clouée, collée). Ajoutez le coût du parquet : 25 – 60 €/m² pour un parquet contrecollé chêne standard, 60 – 150 €/m² pour un parquet massif qualité. Pour une pièce de 20 m², comptez 1 500 – 4 000 € main d'œuvre + matériaux, sans compter la dépose de l'ancien revêtement (200 – 500 €).",
      },
    },
    {
      '@type': 'Question',
      name: 'Le béton ciré est-il adapté à un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le béton ciré est particulièrement adapté aux intérieurs contemporains et lofts parisiens. Il s'applique sur le sol existant (carrelage, béton) sans surélévation significative (2 à 3 mm). Ses points forts : seamless, moderne, facile à entretenir. Attention : il est sensible aux chocs et aux produits acides ; un traitement protecteur (vernis, cire) doit être appliqué régulièrement. Prix : 80 – 150 €/m² posé à Paris.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on poser un carrelage grand format dans un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, le carrelage grand format (60×60, 90×90, 120×60 cm) est très tendance dans les appartements parisiens rénovés. Il donne une impression d'espace et réduit les joints. Attention au plancher support : dans un immeuble ancien avec plancher bois, un ragréage préalable ou une dalle de compression peut être nécessaire pour supporter le poids du grand format. Comptez 60 – 120 €/m² posé selon le format et la qualité du carrelage.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Revêtement Sol Appartement Paris : parquet, carrelage, béton ciré 2025 | Espace Design',
  description: 'Choisir le bon revêtement de sol pour un appartement parisien : parquet, carrelage, béton ciré, vinyle. Comparatif prix et conseils 2025.',
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
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Guides</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Revêtement Sol Appartement Paris : parquet, carrelage, béton ciré 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le choix du revêtement de sol est l&apos;une des décisions les plus déterminantes dans une rénovation parisienne. Il impacte l&apos;ambiance de chaque pièce, la valeur du bien, et la durée de vie de l&apos;installation. Comparatif complet des options disponibles en 2025, avec les prix réels constatés à Paris.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Parquet : le revêtement de référence des appartements parisiens
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le parquet reste le revêtement de sol le plus prisé dans les appartements parisiens, qu&apos;il s&apos;agisse de rénovation d&apos;un haussmannien ou d&apos;un appartement contemporain. Deux grandes familles : le parquet massif (lame pleine en bois) et le parquet contrecollé (âme en bois contreplaqué, couche d&apos;usure en bois noble).
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Le parquet massif est réparable (ponçage, vitrification) plusieurs fois sur sa durée de vie — un atout dans les appartements anciens où le sol subit des variations d&apos;hygrométrie. Le parquet contrecollé est plus stable dimensionnellement et souvent moins coûteux.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Parquet massif chêne',
                  detail: "Le choix patrimonial par excellence. Lame pleine de 14 à 22 mm d'épaisseur, posée clouée (sur lambourdes ou plancher bois) ou collée (sur dalle béton). Durée de vie : 50 à 80 ans avec entretien. Prix : 60 – 150 €/m² matériau + 40 – 70 €/m² pose.",
                },
                {
                  enjeu: 'Parquet contrecollé',
                  detail: "Âme en multiplis ou HDF, couche d'usure 3 à 6 mm en chêne, noyer ou autre essence. Pose collée, flottante ou clouée. Plus stable que le massif face à l'humidité. Prix : 30 – 80 €/m² matériau + 30 – 60 €/m² pose. Option rénovation très populaire à Paris.",
                },
                {
                  enjeu: 'Rénovation du parquet existant',
                  detail: "Dans les appartements haussmanniens, le parquet en point de Hongrie ou en bâtons rompus est souvent masqué sous une moquette ou un vinyle. La rénovation par ponçage + vitrification redonne une seconde vie au parquet d'origine pour 25 – 50 €/m². Vérifiez l'épaisseur restante avant de poncer (minimum 5 mm).",
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

      {/* Section 2 */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Carrelage et grand format : tendances 2025 à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le carrelage connaît un fort regain d&apos;intérêt dans les rénovations parisiennes contemporaines, notamment en grand format (60×60 cm et plus). Il offre une excellente durabilité, une résistance aux projections d&apos;eau, et un effet visuel saisissant dans les espaces ouverts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Carrelage grès cérame rectifié',
                detail: "Le choix dominant des rénovations haut de gamme. Grès cérame pleine masse, résistant aux chocs et aux taches, disponible en imitation béton, marbre, bois. Joints réduits grâce au rectifié. Prix : 30 – 80 €/m² matériau.",
                cout: '60 – 120 €/m² posé',
              },
              {
                titre: 'Grand format (90×90, 120×60 cm)',
                detail: "Effet espace garanti dans les séjours et cuisines parisiennes. Attention au support : plancher bois ancien nécessite ragréage ou dalle. La pose est plus technique (litage soigné, colle adaptée). Prix matériau : 40 – 120 €/m².",
                cout: '80 – 150 €/m² posé',
              },
              {
                titre: 'Carrelage imitation parquet',
                detail: "Tendance forte dans les cuisines et salles de bain ouvertes. Offre le look du bois avec la résistance du carrelage à l'eau. Format planche (20×120 cm, 30×150 cm). Pose en décalé recommandée.",
                cout: '55 – 100 €/m² posé',
              },
              {
                titre: 'Carreaux de ciment',
                detail: "Très populaires dans les rénovations d'appartements anciens (bohème chic, style bistrot). Artisanaux, motifs variés, nécessitent un traitement hydrofuge. Fragiles et poreux : à réserver aux passages doux.",
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
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Béton ciré, résine et vinyle : les alternatives modernes
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Au-delà du parquet et du carrelage, plusieurs options séduisent les Parisiens en quête d&apos;un intérieur contemporain et sans joint visible.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Béton ciré',
                prix: '80 – 150 €/m²',
                detail: "Appliqué en 2 à 3 mm sur le support existant, le béton ciré est seamless et très tendance dans les lofts et appartements contemporains parisiens. Sensible aux chocs et aux produits acides ; traitement protecteur obligatoire. Peut être appliqué sur sol, murs et plan de travail pour un effet unifié.",
              },
              {
                type: 'Résine époxy',
                prix: '60 – 120 €/m²',
                detail: "Plus durable que le béton ciré, la résine époxy est imperméable et extrêmement résistante aux chocs. Utilisée en cuisine et garage, elle offre une surface brillante ou mate selon le choix. Pose nécessitant un professionnel expérimenté (préparation du support critique).",
              },
              {
                type: 'Sol vinyle LVT (Luxury Vinyl Tile)',
                prix: '30 – 70 €/m² posé',
                detail: "Le vinyle LVT a révolutionné les rénovations d'appartements parisiens : imitation parquet ou carrelage, résistant à l'eau, confortable sous le pied, compatible avec le plancher chauffant. Idéal pour les budgets limités ou les locations meublées. Durée de vie : 15 à 25 ans.",
              },
              {
                type: 'Moquette et textiles',
                prix: '25 – 60 €/m² posé',
                detail: "En recul dans les appartements parisiens sauf dans les chambres. Apporte confort thermique et acoustique. Les versions en laine ou sisal retrouvent grâce dans les intérieurs haut de gamme. Déconseillée dans les appartements loués (usure rapide, difficile à nettoyer).",
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

      {/* Budget table */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Comparatif prix revêtements de sol à Paris (2025)
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix indicatifs fourniture + pose, pour un appartement parisien standard.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Revêtement</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée de vie</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m² posé</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Adapté pièce humide</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rev: 'Parquet massif chêne', duree: '50 – 80 ans', prix: '100 – 220 €', humide: 'Non' },
                  { rev: 'Parquet contrecollé', duree: '20 – 40 ans', prix: '60 – 140 €', humide: 'Partiel' },
                  { rev: 'Carrelage grès cérame', duree: '40 – 60 ans', prix: '60 – 120 €', humide: 'Oui' },
                  { rev: 'Béton ciré', duree: '15 – 25 ans', prix: '80 – 150 €', humide: 'Oui (traité)' },
                  { rev: 'Vinyle LVT', duree: '15 – 25 ans', prix: '30 – 70 €', humide: 'Oui' },
                  { rev: 'Résine époxy', duree: '20 – 30 ans', prix: '60 – 120 €', humide: 'Oui' },
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
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">Conseils pour bien choisir</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Vérifiez l'état du support avant de choisir — un plancher bois déformé nécessite ragréage",
                "Dans un appartement ancien, préservez le parquet d'origine si l'épaisseur le permet",
                "Pour une location, privilégiez le vinyle LVT : économique, résistant, facile à remplacer",
                "Le béton ciré valorise fortement un bien haut de gamme mais demande un entretien rigoureux",
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

      {/* Guides connexes */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Guides connexes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/carrelage-appartement-paris', title: 'Carrelage appartement Paris' },
              { href: '/blog/renovation-appartement-paris-15e', title: 'Rénovation appartement Paris 15e' },
              { href: '/blog/renovation-appartement-paris-13e', title: 'Rénovation appartement Paris 13e' },
              { href: '/blog/renovation-appartement-paris-17e', title: 'Rénovation appartement Paris 17e' },
              { href: '/blog/renovation-immeuble-paris', title: 'Rénovation immeuble Paris' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
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
          Rénover le sol de votre appartement parisien
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
