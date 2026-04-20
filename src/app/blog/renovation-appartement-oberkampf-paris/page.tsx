import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Oberkampf Paris 11e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-oberkampf-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Appartement Oberkampf Paris 11e : artisan & prix 2025 | Espace Design",
  description: "Rénover un appartement à Oberkampf (Paris 11e) : immeubles anciens, lofts, rénovation totale. Prix artisan 2025, conseils et devis gratuit.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-oberkampf-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quels types de biens trouve-t-on dans le quartier Oberkampf (Paris 11e) ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le quartier Oberkampf (Paris 11e) présente un parc immobilier très varié : immeubles anciens construits entre 1880 et 1920 avec parquets en bois massif, moulures et cheminées, anciens ateliers artisanaux reconvertis en lofts dans les cours intérieures et passages couverts, et quelques immeubles des années 1960-1970. C'est un secteur qui offre de belles opportunités de rénovation avec un fort potentiel de valorisation.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation complète à Oberkampf Paris 11e en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'une rénovation complète à Oberkampf (Paris 11e) en 2025 se situe entre 1 000 et 1 800 €/m² pour un appartement ancien standard (électricité, plomberie, cuisine, salle de bain, sols, peintures). Pour un projet loft avec décloisonnement, verrière et béton ciré, comptez 2 000 à 3 000 €/m². Un simple rafraîchissement (peinture, sol, éclairage) revient à 400-700 €/m².",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il une autorisation pour rénover un appartement à Oberkampf ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour la plupart des travaux intérieurs à Oberkampf (Paris 11e), aucune autorisation n'est requise : peinture, revêtements de sol, électricité, plomberie, cuisine et salle de bain. En revanche, la suppression d'un mur porteur nécessite une déclaration préalable et une étude structurelle. Si votre immeuble est en copropriété, les travaux touchant les parties communes (façade, toiture, hall) nécessitent une autorisation de l'assemblée générale.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Appartement Oberkampf Paris 11e : artisan & prix 2025",
  description: "Rénover un appartement à Oberkampf (Paris 11e) : immeubles anciens, lofts, rénovation totale. Prix artisan 2025, conseils et devis gratuit.",
  keywords: ['rénovation appartement Oberkampf', 'artisan Paris 11e', 'rénovation Paris 11e', 'loft Oberkampf', 'prix rénovation Paris 11'],
}

export default function ArticleOberkampf() {
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
            Quartiers
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénover un Appartement à Oberkampf Paris 11e : guide complet 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Oberkampf est l&apos;un des quartiers les plus vivants du 11e arrondissement : immeubles anciens chargés de caractère, lofts dans d&apos;anciens ateliers artisanaux, cours intérieures lumineuses. Rénovation totale, projet loft ou simple rafraîchissement — ce guide vous aide à préparer votre chantier à Oberkampf et dans le 11e arrondissement de Paris.
          </p>
        </div>
      </section>

      {/* Section 1 — Profil du quartier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le parc immobilier d&apos;Oberkampf : immeubles anciens et lofts atypiques
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le quartier Oberkampf doit son nom à l&apos;industriel alsacien Christophe-Philippe Oberkampf, qui y installa ses manufactures au XVIIIe siècle. Ce passé artisanal et industriel a laissé une empreinte architecturale unique : cours intérieures, passages couverts, ateliers reconvertis en logements atypiques.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Aujourd&apos;hui, le 11e arrondissement est l&apos;un des plus dynamiques de Paris sur le plan de la rénovation immobilière. Les prix d&apos;achat encore raisonnables par rapport au centre-ouest, combinés à un fort potentiel de valorisation après travaux, attirent investisseurs et primo-accédants souhaitant rénover à leur goût.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Immeubles anciens construits entre 1880 et 1920',
                  detail: "La majorité des immeubles du quartier Oberkampf date de la fin du XIXe et du début du XXe siècle. On y trouve des appartements avec parquets en chêne massif, moulures au plafond, cheminées en fonte et hauteurs sous plafond de 2,90 à 3,20 m. Ces biens, souvent vendus à rénover, offrent un excellent rapport qualité-prix une fois réhabilités.",
                },
                {
                  enjeu: "Anciens ateliers reconvertis en lofts",
                  detail: "Le quartier Oberkampf recèle de nombreux passages et cours intérieures (passage Saint-Sébastien, cour de la Folie-Regnault) où d'anciens ateliers de menuiserie, de tissage ou d'imprimerie ont été transformés en lofts. Ces espaces offrent des hauteurs sous plafond de 4 à 6 m, des verrières et des volumes industriels introuvables dans les immeubles classiques.",
                },
                {
                  enjeu: "Immeubles des années 1960-1970",
                  detail: "Quelques immeubles plus récents (1960-1970) sont présents dans le secteur, avec des appartements aux volumes standardisés mais aux plans plus fonctionnels. La rénovation de ces biens vise surtout la mise aux normes électriques, l'amélioration thermique et la modernisation des cuisines et salles de bain.",
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

      {/* Section 2 — Travaux courants */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux les plus demandés à Oberkampf en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            À Oberkampf et dans le 11e arrondissement, les projets de rénovation couvrent un large spectre — du simple rafraîchissement avant mise en location au projet loft complet avec décloisonnement et verrière intérieure.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Rénovation électrique complète',
                solution: "Les immeubles anciens d'Oberkampf sont souvent équipés d'installations électriques obsolètes (tableau vétuste, absence de mise à la terre, câblage en aluminium). La remise aux normes NFC 15-100 est indispensable pour la sécurité et la location.",
                cout: '4 000 – 10 000 €',
              },
              {
                titre: 'Rénovation salle de bain',
                solution: "Remplacement de la baignoire par une douche italienne, nouveau carrelage grand format, vasque suspendue et robinetterie design — la rénovation de salle de bain est le chantier le plus transformateur à l'usage dans un appartement ancien.",
                cout: '6 000 – 15 000 €',
              },
              {
                titre: 'Décloisonnement cuisine-salon',
                solution: "Ouvrir la cuisine sur le salon reste le projet le plus demandé à Oberkampf. Cloison non porteuse : 2 000-5 000 €. Mur porteur avec IPN et étude structurelle : 8 000-16 000 €. Résultat : espace de vie unifié, lumineux et moderne.",
                cout: '2 000 – 16 000 €',
              },
              {
                titre: 'Rénovation parquet ancien',
                solution: "Les parquets en chêne massif des immeubles anciens du 11e sont souvent en excellent état sous les moquettes. Ponçage et vitrification redonnent tout leur éclat à ces parquets d'époque — pour un résultat bien supérieur à la pose d'un parquet flottant neuf.",
                cout: '15 – 35 €/m²',
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

      {/* Section 3 — Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix d&apos;une rénovation à Oberkampf Paris 11e en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les tarifs pratiqués à Oberkampf et dans le 11e arrondissement reflètent la qualité des artisans parisiens. Ils varient selon le type de bien, l&apos;ampleur des travaux et le niveau de finition.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Description</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture, sol, éclairage — sans modifier les installations',
                    prixM2: '400 – 700 €',
                  },
                  {
                    niveau: 'Rénovation complète standard',
                    prestations: 'Électricité, plomberie, cuisine, SDB, sols, peintures',
                    prixM2: '1 000 – 1 800 €',
                  },
                  {
                    niveau: 'Projet loft — décloisonnement',
                    prestations: 'Verrière, béton ciré, cuisine ouverte, mezzanine',
                    prixM2: '2 000 – 3 000 €',
                  },
                  {
                    niveau: 'Haut de gamme — finitions premium',
                    prestations: 'Matériaux nobles, menuiseries sur mesure, domotique',
                    prixM2: '2 500 – 3 500 €',
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Pourquoi rénover à Oberkampf est un bon investissement ?
            </h3>
            <div className="space-y-3">
              {[
                "Prix d'achat accessibles par rapport aux arrondissements centraux — potentiel de valorisation élevé après travaux",
                "Quartier dynamique et recherché — forte demande locative et à l'achat dans le 11e",
                "Immeubles anciens de caractère — parquets, moulures et cheminées valorisent le bien rénové",
                "Moins de contraintes ABF que les secteurs sauvegardés — plus de liberté de transformation",
                "Nombreux artisans spécialisés en rénovation dans le 11e — délais maîtrisés",
                "Transport en commun excellents — métro Oberkampf (lignes 5 et 9), bus, vélos",
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
              { href: '/renovation-appartement-paris-11e', title: 'Rénovation appartement Paris 11e' },
              { href: '/blog/renovation-appartement-bastille-paris', title: 'Rénovation appartement Bastille Paris' },
              { href: '/blog/renovation-loft-paris', title: 'Rénovation loft Paris — guide complet 2025' },
              { href: '/blog/verriere-interieure-paris', title: 'Verrière intérieure Paris : prix & pose' },
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
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
              { href: '/renovation-paris-3e', label: 'Paris 3e' },
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
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
          Vous rénovez un appartement à Oberkampf ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Appartement ancien, loft, projet de décloisonnement — devis gratuit sous 48h dans le 11e arrondissement.
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
