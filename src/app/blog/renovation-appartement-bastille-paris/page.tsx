import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Bastille Paris 11e 12e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-bastille-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Bastille Paris 11e 12e : loft & style 2025 | Espace Design',
  description: 'Rénover dans le quartier Bastille (11e-12e) : anciens ateliers, lofts, immeubles ouvriers. Style industriel, prix 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-bastille-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels types de biens trouve-t-on autour de la Bastille (11e-12e) ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le quartier Bastille (Paris 11e et 12e) présente un parc immobilier très varié : appartements anciens du XIXe siècle avec parquets et moulures, anciens ateliers et entrepôts industriels reconvertis en lofts (passages et cours intérieures), et immeubles de rapport construits entre 1880 et 1920. Ce secteur est moins contraint que le centre historique par les règles ABF, ce qui laisse plus de liberté dans les projets de transformation.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la rénovation d\'un loft dans le secteur Bastille ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un projet loft complet dans le secteur Bastille (11e-12e) — comprenant décloisonnement, verrière intérieure, mezzanine, béton ciré, cuisine ouverte et mise aux normes électriques — coûte entre 2 000 et 3 000 €/m² selon les finitions choisies. Pour un 70 m², comptez 140 000 à 210 000 €. La rénovation d'un appartement ancien standard (sans configuration loft) se situe entre 1 000 et 1 800 €/m².",
      },
    },
    {
      '@type': 'Question',
      name: 'Le quartier Bastille est-il soumis aux contraintes ABF ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le quartier Bastille (11e et 12e arrondissements) est moins contraint que les secteurs sauvegardés du centre de Paris (Marais, Saint-Germain). La plupart des travaux intérieurs et même certaines modifications extérieures sont libres ou soumis à simple déclaration préalable. C'est l'un des avantages de ce secteur pour les projets ambitieux de transformation : moins de délais administratifs, plus de liberté d'aménagement.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Bastille Paris 11e 12e : loft & style 2025 | Espace Design',
  description: 'Rénover dans le quartier Bastille (11e-12e) : anciens ateliers, lofts, immeubles ouvriers. Style industriel, prix 2025.',
}

export default function ArticleBastille() {
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
            Rénovation Appartement Bastille Paris 11e 12e : loft &amp; style 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le quartier Bastille concentre une offre immobilière exceptionnellement variée : appartements anciens du XIXe siècle, lofts dans d&apos;anciens ateliers et entrepôts industriels, immeubles de rapport construits entre 1880 et 1920. Moins contraint que le centre historique par les règles ABF, ce secteur offre une grande liberté pour les projets ambitieux. Ce guide vous aide à préparer votre rénovation dans le 11e ou le 12e.
          </p>
        </div>
      </section>

      {/* Section 1 — Profil du quartier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Un quartier au parc immobilier mixte : anciens ateliers, lofts et immeubles ouvriers
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le secteur Bastille (11e et 12e arrondissements) a connu une profonde mutation depuis les années 1990. D&apos;anciens quartiers artisanaux et industriels se sont transformés en secteurs résidentiels recherchés, portés par la rénovation de friches et la création de logements atypiques.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              L&apos;atout majeur du secteur Bastille pour les propriétaires : moins de contraintes ABF qu&apos;ailleurs à Paris. La plupart des travaux intérieurs sont libres, et les modifications extérieures sont soumises à une simple déclaration préalable dans la majorité des cas — sans délais d&apos;instruction de l&apos;ABF.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Anciens ateliers et entrepôts convertis en lofts',
                  detail: 'La spécialité du quartier Bastille : d&apos;anciens ateliers de menuiserie, de métal ou d&apos;imprimerie ont été transformés en lofts dans les passages et cours intérieures (passage de la Bonne Graine, passage Louis-Philippe, cour de la Maison Brûlée). Ces espaces offrent des hauteurs sous plafond de 4 à 6 m, des verrières et des volumes industriels uniques à Paris.',
                },
                {
                  enjeu: 'Immeubles de rapport construits entre 1880 et 1920',
                  detail: 'Le 11e arrondissement regorge d&apos;immeubles construits entre 1880 et 1920 : plafonds à 2,90 m - 3,20 m, parquets en bois massif, moulures simples, cheminées de fonte. Ces appartements sont souvent vendus à rénover et présentent un excellent rapport qualité-prix une fois rénovés.',
                },
                {
                  enjeu: 'Terrasses et cours intérieures',
                  detail: 'De nombreux immeubles du 11e et du 12e possèdent des cours intérieures lumineuses et des appartements avec terrasse ou accès jardin — atouts rares à Paris. La rénovation doit intégrer ces espaces extérieurs pour créer une continuité intérieur-extérieur (baie vitrée, porte-fenêtre, béton ciré terrasse).',
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

      {/* Section 2 — Style industriel et projets loft */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Style industriel et projets loft : les spécialités du secteur Bastille
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 11e et le 12e sont particulièrement propices aux projets de transformation ambitieux. La hauteur sous plafond importante et l&apos;esprit industriel du quartier inspirent des projets que l&apos;on ne retrouve pas ailleurs à Paris.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Verrière intérieure',
                solution: 'La verrière intérieure (entre salon et chambre, ou entre cuisine et salon) est une signature des rénovations Bastille. En métal et verre feuilleté, posée par un menuisier métallier spécialisé, elle apporte lumière et séparation visuelle sans couper l&apos;espace.',
                cout: '3 000 – 8 000 €',
              },
              {
                titre: 'Mezzanine',
                solution: 'Avec 3,50 m ou plus sous plafond, la mezzanine est une solution intelligente pour gagner une chambre ou un espace de travail. Budget selon la superficie et les matériaux (bois, métal, mixte). Nécessite une étude de résistance du plancher existant.',
                cout: '8 000 – 18 000 €',
              },
              {
                titre: 'Béton ciré et finitions industrielles',
                solution: 'Sol en béton ciré, mur en enduit béton, métal brut — ces finitions s&apos;accordent parfaitement avec l&apos;esprit des lofts Bastille. Le béton ciré coûte 80 à 150 €/m² fourni et posé, compatible avec un plancher chauffant.',
                cout: '80 – 150 €/m²',
              },
              {
                titre: 'Décloisonnement et cuisine ouverte',
                solution: 'Ouvrir la cuisine sur le salon est le projet le plus demandé dans le secteur Bastille. Cloison non porteuse : 2 000 à 5 000 €. Mur porteur avec IPN : 8 000 à 16 000 €. La liberté ABF du quartier simplifie les démarches par rapport au Marais ou au 6e.',
                cout: '2 000 – 16 000 €',
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
            Prix d&apos;une rénovation autour de la Bastille en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Avec des prix au m² plus accessibles que dans les arrondissements du centre-ouest, le 11e et le 12e offrent un excellent potentiel de valorisation après rénovation. Les prix dépendent fortement du type de bien et du niveau de finition.
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
                    prestations: 'Verrière, mezzanine, béton ciré, cuisine ouverte',
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
              Avantages du 11e et 12e pour votre projet de rénovation
            </h3>
            <div className="space-y-3">
              {[
                'Moins de contraintes ABF qu\'ailleurs — plus de liberté de transformation sans délais administratifs',
                'Prix au m² plus accessibles que le centre-ouest parisien — potentiel de valorisation important',
                'Hauteurs sous plafond importantes dans les anciens ateliers — idéal pour les projets loft et mezzanine',
                'Nombreuses cours intérieures lumineuses — lumière naturelle abondante souvent sous-exploitée',
                'Quartier en pleine évolution — investissement immobilier à fort potentiel',
                'Artisans spécialisés disponibles — secteur actif pour les projets de rénovation ambitieux',
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
              { href: '/blog/renovation-loft-paris', title: 'Rénovation loft Paris — guide complet 2025' },
              { href: '/blog/verriere-interieure-paris', title: 'Verrière intérieure Paris : prix & pose' },
              { href: '/blog/renovation-appartement-marais-paris', title: 'Rénovation appartement Marais Paris' },
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
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
              { href: '/renovation-paris-3e', label: 'Paris 3e' },
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-13e', label: 'Paris 13e' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
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
          Vous rénovez un appartement autour de la Bastille ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Appartement ancien, loft, projet de décloisonnement — devis gratuit sous 48h dans le 11e et 12e.
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
