import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 2e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-2e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 2e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 2e arrondissement de Paris : Bourse, Sentier, Montorgueil. Artisan local, devis gratuit 48h.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-2e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation dans le 2e arrondissement de Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le 2e arrondissement, le prix d'une rénovation varie entre 1 800 et 3 500 €/m² selon l'ampleur des travaux et la localisation. Le quartier de Montorgueil, très prisé, pousse les budgets vers le haut. Une rénovation légère (peinture, sol, salle de bain) se situe autour de 900 à 1 400 €/m². Une rénovation complète d'un loft de 70 m² dans l'ancien quartier du Sentier — incluant électricité NF C 15-100, plomberie, isolation, cuisine ouverte et salle de bain — tourne autour de 100 000 à 180 000 €. Les anciens ateliers du secteur textile Sentier nécessitent souvent des surcoûts liés à la création de distribution intérieure.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quels sont les travaux les plus courants dans le 2e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le 2e arrondissement est l'un des arrondissements parisiens qui connaît la plus forte gentrification depuis les années 2010. L'ancien quartier du Sentier s'est transformé en pôle de la tech et des start-ups, attirant une population jeune et aisée. Les travaux les plus courants sont : la rénovation complète d'appartements anciens dans des immeubles haussmanniens ou du 19e siècle (parquet, peinture, cuisine, salle de bain), la transformation d'anciens locaux commerciaux ou d'ateliers en lofts ou appartements, et la mise aux normes énergétique (isolation, double vitrage) de biens en DPE F ou G.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les contraintes spécifiques pour rénover autour de Montorgueil ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le quartier Montorgueil est l'un des secteurs les plus protégés du 2e arrondissement. La rue Montorgueil et ses abords font l'objet d'une protection particulière au titre du Plan Local d'Urbanisme de Paris : les devantures, enseignes et façades sont réglementées. Pour les appartements en étages, les travaux intérieurs sont libres, mais toute modification de l'aspect extérieur (fenêtres, volets, balcons) nécessite une déclaration préalable soumise à l'avis de l'Architecte des Bâtiments de France. Les copropriétés de la rue Montorgueil et de ses abords ont souvent des règlements très stricts.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 2e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 2e arrondissement de Paris : Bourse, Sentier, Montorgueil. Artisan local, devis gratuit 48h.',
}

export default function ArticleRenovationParis2e() {
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
            Rénovation Appartement Paris 2e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Bourse, Sentier, Montorgueil : le 2e arrondissement est le plus petit de Paris mais l&apos;un des plus dynamiques. Ancien quartier du textile reconverti en hub tech et créatif, il concentre une offre immobilière atypique — lofts dans d&apos;anciens ateliers, appartements haussmanniens et immeubles de commerce reconvertis. Guide complet pour rénover dans le 2e en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Spécificités du 2e */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Sentier, Bourse, Montorgueil : les spécificités du 2e arrondissement
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 2e arrondissement est le plus petit arrondissement de Paris (moins de 22 000 habitants) mais l&apos;un des plus dynamiques. L&apos;ancien quartier du Sentier, historiquement dédié à l&apos;industrie textile, s&apos;est transformé depuis les années 2010 en un pôle créatif et tech très prisé. Les anciens ateliers de confection ont été progressivement reconvertis en appartements, lofts ou bureaux.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Le parc immobilier du 2e est très hétérogène : immeubles haussmanniens de prestige autour de la Bourse, anciens immeubles de rapport du 19e siècle dans le Sentier, quelques constructions modernes et de nombreux rez-de-chaussée commerciaux convertis en habitation. Les appartements du 2e sont souvent atypiques et à fort potentiel de valorisation après rénovation.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Lofts dans anciens ateliers du Sentier',
                  detail: "Les anciens ateliers de confection textile du Sentier sont souvent de grands plateaux en open space, avec de belles hauteurs sous plafond (3 à 5 m) et des structures métalliques apparentes. Leur reconversion en appartement nécessite la création de cloisons, l'installation d'un système de chauffage et de ventilation, et une mise aux normes électrique et plomberie complète. Ces espaces atypiques séduisent les acquéreurs cherchant des logements sortant de l'ordinaire.",
                },
                {
                  enjeu: 'Quartier Montorgueil — très prisé et protégé',
                  detail: "La rue Montorgueil et ses abords constituent l'un des secteurs les plus recherchés du 2e arrondissement. Les appartements y sont très demandés et les prix élevés. La proximité des commerces, restaurants et marchés est un atout majeur. Les façades et devantures sont réglementées par les ABF, ce qui rend les travaux sur l'extérieur complexes.",
                },
                {
                  enjeu: 'Immeubles haussmanniens autour de la Bourse',
                  detail: "Le secteur de la Bourse de Commerce concentre des immeubles haussmanniens de qualité, avec les caractéristiques typiques : parquet en point de Hongrie, moulures, cheminées en marbre, hauteur sous plafond de 3 à 3,5 m. La rénovation de ces biens nécessite une attention particulière aux éléments patrimoniaux.",
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
            Travaux les plus demandés dans le 2e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La gentrification rapide du 2e et la diversité de son parc immobilier génèrent une demande variée, des rénovations légères aux transformations d&apos;espaces industriels en lofts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Rénovation appartement haussmannien',
                detail: "Les appartements haussmanniens du 2e méritent une rénovation soignée qui respecte leur cachet : restauration du parquet en point de Hongrie, conservation des moulures et cheminées, mise aux normes électrique discrète. La cuisine ouverte sur le salon est très demandée dans ce type de bien.",
                cout: '1 500 – 2 500 €/m²',
              },
              {
                titre: 'Reconversion atelier en loft',
                detail: "La transformation d'un ancien atelier du Sentier en loft contemporain est l'un des chantiers les plus demandés dans le 2e. Cela implique la création de cloisons (chambre, salle de bain), l'installation d'un chauffage, une isolation acoustique sérieuse et une mise aux normes complète.",
                cout: '2 000 – 3 500 €/m²',
              },
              {
                titre: 'Cuisine ouverte et aménagement',
                detail: "La création d'une cuisine ouverte dans un appartement du 2e (démolition de la cloison existante, réalisation du comptoir, raccordements plomberie et électricité) est l'une des prestations les plus demandées. Elle améliore significativement la luminosité et la convivialité du logement.",
                cout: '8 000 – 20 000 €',
              },
              {
                titre: 'Rénovation salle de bain complète',
                detail: "Les salles de bain des appartements anciens du 2e nécessitent souvent une rénovation complète : reconfiguration de l'espace, douche à l'italienne, faïence contemporaine, robinetterie de qualité. Une salle de bain bien rénovée est un argument fort lors de la revente.",
                cout: '7 000 – 15 000 €',
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

      {/* Section 3 — Valorisation et tendances */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Montorgueil et Sentier : rénover pour valoriser dans le 2e
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le marché immobilier du 2e arrondissement récompense fortement les rénovations de qualité, en particulier dans les quartiers Montorgueil et Sentier où la demande reste très soutenue.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Valorisation immobilière dans le 2e',
                prix: '+15 à +35 % de valeur',
                detail: "Un appartement bien rénové dans le 2e, notamment autour de Montorgueil, peut se valoriser de 20 à 35 % par rapport au même bien dans son état d'origine. Les acheteurs et locataires du 2e sont prêts à payer le prix fort pour un logement clé-en-main avec des prestations de qualité.",
              },
              {
                type: 'Tendances déco du 2e arrondissement',
                prix: 'Style industriel-chic',
                detail: "Le style industriel-chic — métal peint, béton ciré, bois brut, verrières intérieures — est particulièrement adapté aux lofts du Sentier et très demandé dans le 2e. Les cuisines ouvertes avec îlot central, les salles de bain en marbre ou en terrazzo et les bibliothèques intégrées font partie des éléments les plus valorisants.",
              },
              {
                type: 'Impact DPE dans le 2e',
                prix: 'DPE C à D recommandé',
                detail: "Les appartements du 2e arrondissement sont souvent en DPE E ou F dans les immeubles antérieurs aux années 1970. Une rénovation énergétique (isolation des murs par l'intérieur, remplacement des fenêtres, chauffage performant) permet de passer en DPE C ou D et d'élargir considérablement le pool d'acheteurs ou de locataires potentiels.",
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

      {/* Section 4 — Budget et prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de rénovation dans le 2e arrondissement : budget 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un appartement ancien du 2e arrondissement, main d&apos;oeuvre et matériaux inclus, hors mobilier.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de rénovation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Travaux inclus</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix /m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget 55 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: 'Légère',
                    travaux: 'Peinture + parquet + salle de bain',
                    prixM2: '900 – 1 400 €',
                    budget: '49 500 – 77 000 €',
                  },
                  {
                    type: 'Standard',
                    travaux: 'Peinture + sol + cuisine + électricité partielle',
                    prixM2: '1 400 – 2 000 €',
                    budget: '77 000 – 110 000 €',
                  },
                  {
                    type: 'Complète',
                    travaux: "Tout corps d'état : électricité NF C 15-100, plomberie, sol, murs, cuisine, salle de bain",
                    prixM2: '2 000 – 3 000 €',
                    budget: '110 000 – 165 000 €',
                  },
                  {
                    type: 'Loft / Atelier',
                    travaux: 'Complète + cloisons, isolation, chauffage, verrières intérieures',
                    prixM2: '2 500 – 4 000 €',
                    budget: '137 500 – 220 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.travaux}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour rénover dans le 2e arrondissement
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Pour un atelier du Sentier, prévoir un budget isolation acoustique conséquent — le bruit urbain est important",
                "Conserver les éléments industriels (poutres métalliques, briques) qui ont une vraie valeur dans le 2e",
                "Vérifier les contraintes ABF avant de modifier les fenêtres, surtout autour de Montorgueil",
                "La cuisine ouverte est un must dans le 2e — prévoir l'extraction d'air et les raccordements plomberie",
                "Anticiper la mise aux normes électrique complète dans les biens antérieurs à 1980",
                "Privilégier les matériaux durables et de qualité : le marché du 2e valorise fortement les prestations haut de gamme",
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
              { href: '/blog/renovation-appartement-paris-1er', title: 'Rénovation appartement Paris 1er' },
              { href: '/blog/renovation-loft-paris', title: 'Rénovation loft Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien' },
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
              { href: '/renovation-paris-1er', label: 'Paris 1er' },
              { href: '/renovation-paris-3e', label: 'Paris 3e' },
              { href: '/renovation-paris-4e', label: 'Paris 4e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
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
          Rénovez votre appartement dans le 2e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisans spécialisés en lofts, ateliers reconvertis et appartements haussmanniens. Devis gratuit sous 48h.
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
