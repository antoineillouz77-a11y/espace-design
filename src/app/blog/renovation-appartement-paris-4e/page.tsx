import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 4e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-4e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 4e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 4e arrondissement de Paris : Marais, Île Saint-Louis, Beaubourg. ABF, parquet, moulures. Devis 48h.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-4e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelles sont les contraintes ABF pour rénover dans le Marais ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le Marais est classé secteur sauvegardé. Tout projet visible depuis l'espace public doit obtenir l'avis de l'Architecte des Bâtiments de France (ABF). Cela concerne : le remplacement des fenêtres (matériaux, profils, couleur), les ravalements de façade, les menuiseries extérieures. À l'intérieur, les travaux sont libres sous réserve de respecter les éléments remarquables (poutres apparentes, parquet d'époque, moulures). Un artisan habitué au secteur sauvegardé peut vous accompagner dans les démarches en mairie.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation appartement dans le 4e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le 4e arrondissement, les prix de rénovation varient entre 2 000 et 4 000 €/m² selon le niveau de finition et les contraintes patrimoniales. Une rénovation légère (peinture, sol, électricité) se situe autour de 800 à 1 200 €/m². Une rénovation complète avec restoration de parquet ancien, reprise des moulures et mise aux normes électrique coûte entre 2 000 et 3 500 €/m². Pour un appartement haut de gamme avec matériaux premium et menuiserie sur mesure, comptez 3 500 à 4 500 €/m².",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment restaurer un parquet point de Hongrie ancien dans le Marais ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La restauration d'un parquet point de Hongrie ancien comprend plusieurs étapes : ponçage pour éliminer les anciennes finitions et uniformiser la surface, remplacement des lames abîmées ou manquantes (les essences d'époque — chêne massif — doivent être respectées), rebouchage des interstices et des trous de clous, puis application d'une vitrification ou d'un huilage selon le rendu souhaité. Comptez 40 à 80 €/m² pour un ponçage + vitrification, et 80 à 150 €/m² si des lames sont à remplacer. Un parquet restauré valorise l'appartement et est souvent exigé par l'ABF dans les secteurs protégés.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on abattre une cloison dans un appartement du Marais ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, sous conditions. Les cloisons légères (briques plâtrières, carreaux de plâtre) peuvent être abattues librement. Les murs porteurs nécessitent une étude structure et la pose d'un IPN (poutre métallique) ou d'un linteau. Dans un immeuble classé ou en secteur sauvegardé, toute modification de la structure intérieure visible (escalier en pierre, voûte, poutres apparentes) doit faire l'objet d'une déclaration préalable. Une expertise préalable par un artisan expérimenté et un bureau d'études structure est recommandée avant tout abattage de mur.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 4e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 4e arrondissement de Paris : Marais, Île Saint-Louis, Beaubourg. ABF, parquet, moulures. Devis 48h.',
}

export default function ArticleRenovationParis4e() {
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
            Paris
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Paris 4e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le 4e arrondissement concentre quelques-uns des appartements les plus remarquables de Paris : hôtels particuliers du Marais, immeubles du XVIIe siècle de l&apos;Île Saint-Louis, lofts de Beaubourg. Rénover dans ce secteur exige une connaissance précise des contraintes patrimoniales et des règles ABF. Guide complet et prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Marais et secteur sauvegardé */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le Marais : rénover dans un secteur sauvegardé
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le Marais est l&apos;un des quartiers les mieux préservés de Paris. Classé secteur sauvegardé depuis 1964, il est placé sous la surveillance de l&apos;Architecte des Bâtiments de France (ABF). Cette protection garantit la cohérence architecturale du quartier mais impose des contraintes précises aux propriétaires souhaitant rénover.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Côté intérieur, les travaux restent globalement libres — vous pouvez modifier la cuisine, refaire la salle de bain, abattre des cloisons légères. Mais les éléments remarquables (parquets anciens, moulures, boiseries, poutres apparentes, escaliers en pierre) sont souvent à préserver ou à restaurer dans les règles de l&apos;art.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Travaux soumis à l\'avis ABF',
                  detail: 'Remplacement des fenêtres et volets (matériaux, profils et couleurs imposés), ravalement de façade, modification des devantures commerciales, installation de climatisation visible depuis la rue. Chaque dossier est instruit par la mairie du 4e en lien avec l\'ABF.',
                },
                {
                  enjeu: 'Travaux libres à l\'intérieur',
                  detail: 'Réfection des peintures, remplacement du revêtement de sol (hors parquet remarquable), mise aux normes électrique et plomberie, création ou suppression de cloisons légères, rénovation de la cuisine et de la salle de bain. Pas de déclaration préalable si la structure est préservée.',
                },
                {
                  enjeu: 'Éléments à restaurer plutôt qu\'à remplacer',
                  detail: 'Dans les appartements du Marais, parquets point de Hongrie, moulures en staff, boiseries peintes et cheminées en marbre sont des éléments patrimoniaux souvent exigés dans les actes de vente. Leur restauration est valorisante et parfois moins coûteuse qu\'un remplacement à l\'identique.',
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

      {/* Section 2 — Île Saint-Louis */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Île Saint-Louis : rénover un immeuble du XVIIe siècle
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;Île Saint-Louis abrite une collection exceptionnelle d&apos;immeubles construits entre 1620 et 1680, classés aux Monuments Historiques ou inscrits à l&apos;inventaire supplémentaire. Rénover dans ce contexte demande une expertise particulière : structures anciennes en pierre de taille, planchers bois massif, murs en moellon de 60 à 80 cm d&apos;épaisseur.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Planchers bois massif',
                detail: 'Les planchers en chêne massif à l\'ancienne doivent être traités avec précaution : ponçage léger pour préserver l\'épaisseur, traitement contre les insectes xylophages, réparation des lattes brisées à l\'identique. La pose d\'un isolant phonique sous le plancher est possible sans le déposer.',
                cout: '50 – 100 €/m²',
              },
              {
                titre: 'Murs en moellon',
                detail: 'Les murs en pierre de taille ou moellon ne se comportent pas comme du plâtre. L\'enduit doit être compatible (chaux naturelle), les fixations imposent des chevilles spéciales, et l\'isolation par l\'intérieur requiert une lame d\'air ou un doublage enduit chaux pour éviter les condensations.',
                cout: '60 – 120 €/m²',
              },
              {
                titre: 'Humidité et remontes capillaires',
                detail: 'Dans les immeubles anciens de l\'île, les caves et les rez-de-chaussée souffrent souvent de remontées capillaires. Un traitement à l\'injection de résine hydrophobe ou la pose d\'une membrane drainante est nécessaire avant tout revêtement de sol.',
                cout: '80 – 200 €/ml de mur',
              },
              {
                titre: 'Mise aux normes électrique',
                detail: 'Les appartements de l\'Île Saint-Louis datent souvent d\'installations électriques des années 1950-1970 en aluminium. La mise aux normes NF C 15-100 (câblage cuivre, tableau divisionnaire, différentiel 30 mA) est indispensable et doit être intégrée au budget de rénovation.',
                cout: '6 000 – 15 000 €',
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

      {/* Section 3 — Parquet et moulures */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Parquet point de Hongrie et moulures : restaurer le patrimoine intérieur
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le parquet point de Hongrie est la signature des appartements haussmanniens et pré-haussmanniens du 4e. Son motif en chevrons emboîtés nécessite un savoir-faire artisanal spécifique. La restauration est presque toujours préférable au remplacement, tant pour des raisons patrimoniales que financières.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Ponçage et vitrification du parquet',
                prix: '40 – 80 €/m²',
                detail: 'Le ponçage élimine les anciennes finitions (cire, vitrification dégradée), les griffures et les légères déformations. La vitrification polyuréthane ou l\'huilage donnent ensuite une finition durable. Un parquet poncé deux fois voit son épaisseur réduite : prévoir 3 à 4 passages maximum dans sa vie.',
              },
              {
                type: 'Remplacement de lames à l\'identique',
                prix: '80 – 150 €/m²',
                detail: 'Quand des lames sont brisées, pourries ou manquantes, leur remplacement doit se faire avec du chêne massif de même épaisseur et de même motif. Les chantiers de démolition parisiens sont parfois une source de lames d\'époque compatibles. Comptez 15 à 40 € par lame selon la qualité.',
              },
              {
                type: 'Restauration des moulures en staff',
                prix: '60 – 120 €/ml',
                detail: 'Les moulures en staff (corniche, bandeau, rosace) se restaurent par ragréage au staff (plâtre + fibres de jute), moulage de sections manquantes et peinture de finition. Un artisan staffeur expérimenté peut reproduire à l\'identique n\'importe quel profil. Évitez les résines polyuréthane qui ne respirent pas comme le staff d\'origine.',
              },
              {
                type: 'Cheminées en marbre',
                prix: '500 – 2 000 € / unité',
                detail: 'Les cheminées en marbre du Marais sont souvent bouchées mais récupérables. Débouchage du conduit, vérification du tirage, nettoyage du marbre et rejointoiement des joints ouverts. Si le foyer est à conserver décoratif, un insert électrique à effet flamme peut être intégré discrètement.',
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
            Prix d&apos;une rénovation appartement Paris 4e en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les tarifs ci-dessous s&apos;entendent main d&apos;œuvre et matériaux inclus pour un appartement dans le 4e arrondissement.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total 50 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Réfection légère',
                    prestations: 'Peinture, électricité partielle, sol',
                    prixM2: '800 – 1 200 €',
                    total: '40 000 – 60 000 €',
                  },
                  {
                    niveau: 'Rénovation standard',
                    prestations: 'Cuisine, SDB, peinture, parquet poncé, électricité complète',
                    prixM2: '1 500 – 2 500 €',
                    total: '75 000 – 125 000 €',
                  },
                  {
                    niveau: 'Rénovation complète patrimoniale',
                    prestations: 'Restauration moulures + parquet + menuiserie + tout corps d\'état',
                    prixM2: '2 000 – 3 500 €',
                    total: '100 000 – 175 000 €',
                  },
                  {
                    niveau: 'Haut de gamme',
                    prestations: 'Matériaux premium + menuiserie sur mesure + finitions exceptionnelles',
                    prixM2: '3 500 – 4 500 €',
                    total: '175 000 – 225 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points de vigilance pour maîtriser votre budget dans le 4e
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Vérifier l\'état des canalisations encastrées avant de refermer les murs',
                'Identifier les murs porteurs avant tout projet d\'abattage',
                'Anticiper les délais ABF (4 à 8 semaines) pour les travaux extérieurs',
                'Prévoir 10 à 15 % de contingence pour les découvertes en cours de chantier',
                'Choisir des matériaux compatibles avec les structures anciennes (chaux, staff)',
                'Demander plusieurs devis à des artisans habitués aux immeubles anciens parisiens',
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
              { href: '/blog/renovation-appartement-paris-6e', title: 'Rénovation appartement Paris 6e' },
              { href: '/blog/renovation-appartement-paris-10e', title: 'Rénovation appartement Paris 10e' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/renovation-cuisine-americaine-paris', title: 'Cuisine américaine Paris' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
              { href: '/renovation-paris', title: 'Rénovation Paris — tous arrondissements' },
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
              { href: '/renovation-paris-3e', label: 'Paris 3e' },
              { href: '/renovation-paris-5e', label: 'Paris 5e' },
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
              { href: '/renovation-saint-mande', label: 'Saint-Mandé' },
              { href: '/renovation-charenton-le-pont', label: 'Charenton' },
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
          Rénovation appartement Paris 4e : devis gratuit sous 48h
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisans habitués aux contraintes du Marais et de l&apos;Île Saint-Louis. Devis détaillé sous 48h.
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
