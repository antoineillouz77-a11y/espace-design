import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement République Paris 10e 11e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-republique-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Appartement République Paris 10e/11e : artisan & prix 2025 | Espace Design",
  description: "Rénover un appartement près de République (Paris 10e/11e) : logements anciens et récents, prix artisan 2025, conseils et devis gratuit.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-republique-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quels types de biens trouve-t-on autour de République (Paris 10e et 11e) ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le secteur République (10e et 11e arrondissements) présente une grande diversité immobilière. On y trouve des immeubles du Second Empire et de la Belle Époque avec appartements en enfilade, parquets en chêne et cheminées, des immeubles de rapport construits entre 1900 et 1930 plus accessibles, et quelques ensembles récents. Le canal Saint-Martin (10e) attire des profils créatifs qui rénovent leurs appartements dans un esprit loft ou atelier.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel budget prévoir pour rénover un appartement près de République ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le budget de rénovation d'un appartement autour de République (10e-11e) varie selon l'ampleur du projet : 400-700 €/m² pour un rafraîchissement (peinture, sol, éclairage), 1 000-1 800 €/m² pour une rénovation complète standard (électricité, plomberie, cuisine, salle de bain, sols), et 2 000-3 000 €/m² pour un projet ambitieux avec décloisonnement, verrière ou finitions haut de gamme.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il l'accord de la copropriété pour rénover à République ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour les travaux strictement intérieurs à votre appartement (peinture, électricité, plomberie, cuisine, salle de bain, cloisons intérieures), aucun accord de copropriété n'est nécessaire. En revanche, si les travaux affectent les parties communes (percement d'une façade, modification de la cage d'escalier, travaux sur la toiture) ou l'aspect extérieur du bâtiment, une autorisation de l'assemblée générale est obligatoire. La suppression d'un mur porteur requiert une déclaration préalable en mairie.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Appartement République Paris 10e/11e : artisan & prix 2025",
  description: "Rénover un appartement près de République (Paris 10e/11e) : logements anciens et récents, prix artisan 2025, conseils et devis gratuit.",
  keywords: ['rénovation appartement République', 'artisan Paris 10e', 'rénovation Paris 11e', 'rénovation canal Saint-Martin', 'prix rénovation République Paris'],
}

export default function ArticleRepublique() {
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
            Rénover un Appartement près de République à Paris : guide 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le secteur République (Paris 10e et 11e) est l&apos;un des plus prisés de la capitale pour les projets de rénovation : parc immobilier varié, quartier dynamique, transport en commun exceptionnel. Immeubles anciens, logements canal Saint-Martin, appartements à rénover — ce guide vous aide à préparer votre projet.
          </p>
        </div>
      </section>

      {/* Section 1 — Profil du quartier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le parc immobilier autour de République : diversité et opportunités
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La place de la République marque le carrefour des 3e, 10e et 11e arrondissements. Ce secteur a connu une mutation profonde depuis les années 2010, portée par la rénovation de la place elle-même et l&apos;attractivité croissante du canal Saint-Martin. Il attire aujourd&apos;hui des projets de rénovation ambitieux dans des biens longtemps délaissés.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Le secteur République est également très bien desservi — métro République (lignes 3, 5, 8, 9, 11), Oberkampf (5, 9), Goncourt (11) — ce qui en fait un quartier très demandé à la location comme à l&apos;achat. La rénovation d&apos;un appartement dans ce secteur est donc un investissement solide.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: "Immeubles du Second Empire et de la Belle Époque",
                  detail: "Le boulevard du Temple, le boulevard Voltaire et la rue Oberkampf sont bordés d'immeubles du Second Empire et de la Belle Époque, avec des appartements en enfilade, des parquets en chêne massif, des moulures et des cheminées en fonte ou en marbre. Ces biens, souvent divisés en appartements plus petits au fil du temps, offrent un fort potentiel de restauration.",
                },
                {
                  enjeu: "Logements canal Saint-Martin (10e) : esprit atelier",
                  detail: "Les rues autour du canal Saint-Martin (rue de la Grange-aux-Belles, quai de Jemmapes, rue Bichat) abritent de nombreux appartements et anciens ateliers rénovés dans un esprit contemporain — béton ciré, verrière industrielle, cuisine ouverte sur salon. Ce secteur est très recherché par les créatifs et les jeunes professionnels.",
                },
                {
                  enjeu: "Immeubles de rapport accessibles (1900-1930)",
                  detail: "Le 10e et le 11e comptent de nombreux immeubles de rapport construits entre 1900 et 1930, avec des appartements plus modestes mais chargés de caractère : parquets en chêne, plafonds à 2,90 m, petites cours intérieures. Ces biens, accessibles à l'achat, sont idéaux pour des projets de rénovation en vue de la location.",
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
            Projets de rénovation types dans le secteur République
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans le secteur République (10e et 11e), Espace Design réalise des projets aussi bien dans des appartements anciens du Boulevard Voltaire que dans des lofts du canal Saint-Martin.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Rénovation appartement ancien complet',
                solution: "Prise en charge complète : dépose des anciens revêtements, mise aux normes électrique, rénovation plomberie, création salle de bain italienne, cuisine sur mesure, parquet et peintures. Livraison clé en main pour investissement locatif ou résidence principale.",
                cout: '1 000 – 1 800 €/m²',
              },
              {
                titre: 'Création verrière intérieure',
                solution: "La verrière intérieure en métal et verre feuilleté est la signature des appartements rénovés dans l'esprit canal Saint-Martin. Elle sépare visuellement les espaces tout en préservant la lumière naturelle. Pose par un menuisier métallier spécialisé.",
                cout: '3 000 – 8 000 €',
              },
              {
                titre: 'Isolation phonique entre appartements',
                solution: "Les immeubles anciens du 10e et 11e ont souvent des planchers bois sans isolation phonique entre les étages. La pose d'une chape sèche ou d'un complexe résilient sous parquet améliore considérablement le confort acoustique.",
                cout: '40 – 80 €/m²',
              },
              {
                titre: 'Béton ciré et finitions contemporaines',
                solution: "Sol béton ciré, enduit béton sur les murs, vasque en béton moulé — ces finitions s'accordent parfaitement avec l'esprit atelier du secteur canal Saint-Martin et République. Compatible plancher chauffant. Application par artisan spécialisé.",
                cout: '80 – 150 €/m²',
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
            Prix rénovation appartement République Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les tarifs pratiqués dans le secteur République (10e et 11e) sont dans la moyenne parisienne, avec des variations selon le type de bien et l&apos;ampleur du projet.
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
                    niveau: 'Esprit atelier / loft',
                    prestations: 'Béton ciré, verrière, cuisine ouverte, finitions industrielles',
                    prixM2: '1 800 – 2 800 €',
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
              Pourquoi rénover dans le secteur République est un bon choix ?
            </h3>
            <div className="space-y-3">
              {[
                "Hub de transport exceptionnel — 5 lignes de métro à République, accès rapide à toute la capitale",
                "Quartier vivant et cosmopolite — forte attractivité locative et valeur immobilière stable",
                "Parc immobilier varié — options pour tous les budgets, de l'appartement à rénover au loft atelier",
                "Canal Saint-Martin à deux pas — secteur très recherché par les locataires et acquéreurs",
                "Moins contraint par l'ABF que les arrondissements historiques — bonne liberté de transformation",
                "Fort potentiel de valorisation après rénovation dans les deux arrondissements",
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
              { href: '/renovation-appartement-paris-10e', title: 'Rénovation appartement Paris 10e' },
              { href: '/blog/renovation-appartement-oberkampf-paris', title: 'Rénovation appartement Oberkampf Paris 11e' },
              { href: '/blog/verriere-interieure-paris', title: 'Verrière intérieure Paris : prix & pose' },
              { href: '/blog/sol-beton-cire-paris', title: 'Sol béton ciré Paris — prix & pose' },
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
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-3e', label: 'Paris 3e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-19e', label: 'Paris 19e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-pantin', label: 'Pantin' },
              { href: '/renovation-saint-ouen', label: 'Saint-Ouen' },
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
          Vous rénovez un appartement près de République ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Appartement ancien, esprit atelier, canal Saint-Martin — devis gratuit sous 48h dans le 10e et 11e.
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
