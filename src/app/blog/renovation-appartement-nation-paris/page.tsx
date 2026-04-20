import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Nation Paris 11e 12e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-nation-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Appartement Nation Paris 11e/12e : artisan & prix 2025 | Espace Design",
  description: "Rénover un appartement près de Nation (Paris 11e/12e) : Haussmannien, immeuble ancien, parc mixte. Prix artisan 2025, conseils et devis gratuit.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-nation-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quels types de biens trouve-t-on autour de Nation (Paris 11e et 12e) ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le secteur Nation (11e et 12e arrondissements) offre un parc immobilier mixte et varié. On trouve d'un côté de beaux immeubles haussmanniens avec appartements de standing (parquets point de Hongrie, moulures, cheminées en marbre, hauteurs sous plafond de 3 à 3,50 m), et de l'autre des immeubles de rapport plus modestes construits entre 1900 et 1930. Le 12e dispose également d'immeubles plus récents, construits dans les années 1970-1990, offrant des plans plus fonctionnels.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien coûte la rénovation d'un appartement haussmannien près de Nation ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation complète d'un appartement haussmannien près de Nation (11e-12e) coûte entre 1 200 et 2 000 €/m² pour un projet standard incluant électricité, plomberie, cuisine, salle de bain, sols et peintures. Si vous souhaitez conserver et restaurer les éléments d'époque (parquet point de Hongrie, moulures, cheminées), prévoyez 15 à 20 % de budget supplémentaire. Un rafraîchissement simple revient à 400-700 €/m².",
      },
    },
    {
      '@type': 'Question',
      name: "La rénovation d'un appartement près de Nation nécessite-t-elle des autorisations ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La plupart des travaux intérieurs (peinture, électricité, plomberie, cuisine, salle de bain) ne nécessitent aucune autorisation. La suppression d'un mur porteur requiert une déclaration préalable et une étude structurelle par un bureau d'études. En copropriété, les travaux affectant les parties communes (cage d'escalier, façade, toiture-terrasse) nécessitent un vote en assemblée générale. Le 12e arrondissement, moins contraint par l'ABF que les arrondissements historiques, offre une bonne liberté de transformation.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Appartement Nation Paris 11e/12e : artisan & prix 2025",
  description: "Rénover un appartement près de Nation (Paris 11e/12e) : Haussmannien, immeuble ancien, parc mixte. Prix artisan 2025, conseils et devis gratuit.",
  keywords: ['rénovation appartement Nation', 'artisan Paris 12e', 'rénovation Paris 11e 12e', 'appartement haussmannien Nation', 'prix rénovation Paris Nation'],
}

export default function ArticleNation() {
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
            Rénover un Appartement près de Nation à Paris : guide complet 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le secteur Nation (Paris 11e et 12e) concentre un parc immobilier mixte d&apos;exception : immeubles haussmanniens avec parquets point de Hongrie et moulures, immeubles de rapport construits entre 1900 et 1930, ensembles plus récents des années 1970-1990. Ce guide vous aide à préparer votre projet de rénovation autour de la place de la Nation.
          </p>
        </div>
      </section>

      {/* Section 1 — Profil du quartier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le parc immobilier mixte autour de Nation : Haussmannien, ancien et récent
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La place de la Nation est l&apos;une des plus grandes de Paris. Elle marque la frontière entre le 11e et le 12e arrondissement, deux secteurs aux caractères immobiliers distincts mais complémentaires. Le secteur Nation réunit ainsi une très grande diversité de biens, ce qui en fait un terrain idéal pour des projets de rénovation variés.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Les avantages du 12e arrondissement pour la rénovation sont nombreux : moins contraint par les règles des Architectes des Bâtiments de France que les arrondissements historiques, il offre une bonne liberté de transformation, des prix d&apos;achat encore accessibles et un fort potentiel de valorisation après travaux.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: "Immeubles haussmanniens : caractère et volumes",
                  detail: "Les rues proches de Nation (avenue du Trône, boulevard Voltaire, rue de la Roquette) sont bordées d'immeubles haussmanniens avec appartements de standing : parquet point de Hongrie ou bâtons rompus, moulures en stuc, cheminées en marbre, hauteurs sous plafond de 3 à 3,50 m. La rénovation de ces biens nécessite de préserver les éléments d'époque tout en modernisant les installations.",
                },
                {
                  enjeu: "Immeubles de rapport 1900-1930 : charme et accessibilité",
                  detail: "Plus modestes que les immeubles haussmanniens mais également chargés de caractère, les immeubles de rapport construits entre 1900 et 1930 autour de Nation proposent des appartements avec parquets en chêne massif, plafonds à 2,90-3 m et souvent des caves ou des espaces de stockage. Ces biens, fréquemment vendus à rénover, offrent un excellent rapport qualité-prix.",
                },
                {
                  enjeu: "Ensembles récents 1970-1990 : fonctionnalité à moderniser",
                  detail: "Le 12e arrondissement compte également des ensembles résidentiels construits dans les années 1970-1990, avec des appartements aux plans fonctionnels mais aux finitions datées. La rénovation de ces biens porte surtout sur la mise aux normes électriques, l'amélioration thermique, la modernisation des pièces d'eau et la création d'une ambiance contemporaine.",
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
            Travaux de rénovation autour de Nation : ce que nos artisans réalisent
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans le secteur Nation (11e et 12e), les projets de rénovation que nous réalisons couvrent aussi bien la restauration d&apos;éléments anciens que la création d&apos;espaces modernes dans des appartements récents.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Restauration parquet point de Hongrie',
                solution: "Le parquet point de Hongrie des appartements haussmanniens est un trésor à ne pas remplacer. Ponçage soigneux, rebouchage des fissures et vitrification satinée ou mate — une rénovation de parquet coûte bien moins cher qu'une dépose et repose, pour un résultat souvent supérieur.",
                cout: '15 – 35 €/m²',
              },
              {
                titre: 'Rénovation salle de bain complète',
                solution: "Douche italienne sans receveur, carrelage grand format en grès cérame, vasque à poser, robinetterie thermostatique — la rénovation complète de la salle de bain est le projet le plus transformateur dans un appartement ancien du secteur Nation.",
                cout: '6 000 – 15 000 €',
              },
              {
                titre: 'Ouverture cuisine sur salon',
                solution: "La suppression d'une cloison pour ouvrir la cuisine sur le séjour est très demandée autour de Nation. Cloison légère : 2 000-5 000 €. Mur porteur avec IPN et étude structurelle : 8 000-16 000 €. Le résultat : un espace de vie fluide et lumineux.",
                cout: '2 000 – 16 000 €',
              },
              {
                titre: 'Mise aux normes électrique',
                solution: "Les appartements anciens du secteur Nation ont souvent des installations électriques datant des années 1960-1980, inadaptées aux usages actuels. La remise aux normes NFC 15-100 est indispensable pour la sécurité et pour la mise en location.",
                cout: '4 000 – 10 000 €',
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
            Prix rénovation appartement Nation Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix pratiqués autour de Nation sont dans la moyenne parisienne, avec des variations selon le type de bien et le niveau de finition.
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
                    niveau: 'Haussmannien avec restauration',
                    prestations: 'Parquet POH, moulures, cheminées + rénovation complète',
                    prixM2: '1 200 – 2 200 €',
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
              Les atouts du secteur Nation pour votre rénovation
            </h3>
            <div className="space-y-3">
              {[
                "Parc immobilier mixte — adaptation à tous les budgets et tous les styles de rénovation",
                "Noeud de transport exceptionnel — Nation est desservie par les lignes 1, 2, 6, 9 du métro et le RER A",
                "Quartier familial et animé — forte demande locative et à l'achat dans les deux arrondissements",
                "Moins contraint par l'ABF que les arrondissements historiques — liberté de transformation accrue",
                "Excellente valorisation immobilière après rénovation — marché porteur",
                "Artisans disponibles dans le 11e et le 12e — nombreux prestataires spécialisés en rénovation",
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
              { href: '/renovation-appartement-paris-12e', title: 'Rénovation appartement Paris 12e' },
              { href: '/blog/renovation-appartement-bastille-paris', title: 'Rénovation appartement Bastille Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
              { href: '/blog/parquet-massif-paris', title: 'Parquet massif Paris — pose & restauration' },
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
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-13e', label: 'Paris 13e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
              { href: '/renovation-saint-mande', label: 'Saint-Mandé' },
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
          Vous rénovez un appartement près de Nation ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Appartement haussmannien, immeuble ancien, ensemble récent — devis gratuit sous 48h dans le 11e et 12e.
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
