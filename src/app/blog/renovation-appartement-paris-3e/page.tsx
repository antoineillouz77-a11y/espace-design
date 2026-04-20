import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 3e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-3e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 3e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 3e arrondissement de Paris : Marais nord, Arts-et-Métiers, Temple. ABF, parquet, plafonds. Devis 48h.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-3e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation d\'appartement dans le 3e arrondissement de Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dans le 3e arrondissement, le prix d\'une rénovation complète varie entre 2 000 et 3 800 €/m² selon l\'état du bien et le niveau de finition. Une rénovation légère (peinture, parquet, plomberie partielle) se situe autour de 800 – 1 500 €/m². Une rénovation complète avec remise aux normes électriques, salle de bain, cuisine et sols atteint 2 000 – 3 000 €/m². Les hôtels particuliers avec contraintes ABF et éléments patrimoniaux à restaurer peuvent dépasser 3 800 €/m².',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les contraintes ABF dans le Marais (3e arrondissement) ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le 3e arrondissement est en grande partie classé secteur sauvegardé, soumis à l\'avis de l\'Architecte des Bâtiments de France (ABF). Toute modification de façade (fenêtres, volets, ravalement) doit être validée. À l\'intérieur, si l\'immeuble est classé ou inscrit, les éléments patrimoniaux (cheminées, parquets anciens, stucs, boiseries) doivent être préservés ou restaurés à l\'identique. Les délais d\'instruction sont plus longs (2 à 4 mois). Il est fortement conseillé de faire appel à un artisan habitué aux contraintes patrimoniales parisiennes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment restaurer un parquet point de Hongrie dans un appartement du Marais ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La restauration d\'un parquet point de Hongrie (chevrons à 45°) passe par plusieurs étapes : diagnostic de l\'état des lames (lames manquantes, gondolées, grinçantes), ponçage à la machine (3 à 4 passes de granulométrie croissante), comblement des lacunes avec des lames identiques ou compatibles, et application d\'une finition (vitrificateur, huile dure ou cire selon le rendu souhaité). Le ponçage et la vitrification d\'un parquet coûtent entre 20 et 50 €/m². La restauration complète avec remplacement de lames : 60 – 120 €/m².',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure une rénovation complète dans le 3e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour un appartement de 50 m² à rénover entièrement dans le 3e, comptez 6 à 10 semaines de travaux. Un studio de 30 m² rénové légèrement : 3 à 4 semaines. Si les travaux nécessitent une déclaration préalable ou un accord ABF, ajoutez 2 à 4 mois de délai administratif avant le démarrage du chantier. Espace Design assure la coordination de tous les corps de métier pour limiter les délais.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 3e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 3e arrondissement de Paris : Marais nord, Arts-et-Métiers, Temple. ABF, parquet, plafonds. Devis 48h.',
}

export default function ArticleRenovation3e() {
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
            Rénovation Appartement Paris 3e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le 3e arrondissement concentre quelques-uns des plus beaux appartements parisiens : hôtels particuliers du Marais nord, ateliers reconvertis des Arts-et-Métiers, immeubles XVIIe du quartier Temple. Rénover dans ce secteur sauvegardé exige des artisans rompus aux exigences de l&apos;ABF et au patrimoine architectural parisien. Guide complet des prix et contraintes en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Quartiers et patrimoine */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les quartiers du 3e : Marais nord, Arts-et-Métiers, Temple
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 3e arrondissement est l&apos;un des plus denses et des plus contrastés de Paris. Il abrite à la fois des hôtels particuliers du XVIIe siècle classés Monument Historique, des ateliers d&apos;artisans reconvertis en lofts contemporains, et des immeubles haussmanniens plus tardifs. Chaque quartier a ses caractéristiques propres qui conditionnent directement l&apos;approche de rénovation.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Marais nord — hôtels particuliers et immeubles XVIIe',
                  detail: 'Cette partie du Marais concentre les biens les plus patrimoniaux du 3e : hôtels particuliers avec cours intérieures, plafonds à la française, parquets point de Hongrie, cheminées en marbre. La rénovation y est soumise au Plan de Sauvegarde et de Mise en Valeur (PSMV) et nécessite systématiquement l\'accord de l\'ABF. Coût moyen : 2 800 – 3 800 €/m².',
                },
                {
                  enjeu: 'Arts-et-Métiers — ateliers reconvertis et lofts',
                  detail: 'Le quartier Arts-et-Métiers (autour du musée du même nom) abrite d\'anciens ateliers artisanaux reconvertis en appartements atypiques : hauts plafonds (4 à 6 m), grandes verrières, poutres et piliers en fonte apparents. La rénovation mise sur la mise en valeur des volumes et des matériaux bruts. Coût moyen : 2 000 – 3 200 €/m².',
                },
                {
                  enjeu: 'Quartier Temple — tissu mixte XIXe-XXe',
                  detail: 'Le quartier Temple, moins réglementé que le cœur du Marais, offre un tissu d\'immeubles du XIXe et du début du XXe siècle. Les appartements y sont souvent plus accessibles à la rénovation standard, avec moins de contraintes patrimoniales, tout en bénéficiant de la proximité immédiate du secteur sauvegardé. Coût moyen : 1 800 – 2 800 €/m².',
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

      {/* Section 2 — Contraintes ABF */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes ABF en secteur sauvegardé : ce qu&apos;il faut savoir
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La quasi-totalité du 3e arrondissement est couverte par le Plan de Sauvegarde et de Mise en Valeur du Marais, l&apos;un des plus anciens secteurs sauvegardés de France (créé en 1965). L&apos;Architecte des Bâtiments de France doit valider toute modification affectant l&apos;aspect extérieur des immeubles et, dans certains cas, certains éléments intérieurs remarquables.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Fenêtres et menuiseries extérieures',
                detail: 'Remplacement de fenêtres soumis à accord ABF. Les menuiseries doivent respecter les profils et matériaux d\'origine (bois peint, couleurs validées). Le double vitrage est accepté mais avec des profils fins conformes au caractère patrimonial.',
                cout: 'Délai +2 à 4 mois',
              },
              {
                titre: 'Ravalements de façade',
                detail: 'Les ravalements doivent utiliser des enduits compatibles avec l\'existant (chaux naturelle, teintes harmonisées). Interdiction d\'isolation par l\'extérieur (ITE) sur la plupart des immeubles du secteur sauvegardé.',
                cout: 'Avis ABF obligatoire',
              },
              {
                titre: 'Éléments patrimoniaux intérieurs',
                detail: 'Dans les immeubles classés ou inscrits, les éléments remarquables (parquet point de Hongrie, plafonds à la française, boiseries, cheminées) doivent être préservés ou restaurés à l\'identique. Leur suppression est en principe refusée.',
                cout: 'Restauration requise',
              },
              {
                titre: 'Divisions et fusions de lots',
                detail: 'La division d\'un grand appartement en plusieurs lots ou la fusion de deux appartements peut nécessiter un permis de construire avec avis ABF favorable. Le dossier doit justifier la compatibilité avec le caractère patrimonial de l\'immeuble.',
                cout: 'PC + avis ABF',
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

      {/* Section 3 — Parquet et plafonds */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Parquet point de Hongrie et plafonds à la française : restauration et prix
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 3e arrondissement abrite une concentration exceptionnelle de parquets anciens et de plafonds patrimoniaux. Leur restauration est l&apos;un des postes les plus techniques — et les plus valorisants — d&apos;une rénovation dans ce secteur. Bien réalisée, elle multiplie la valeur du bien sur le marché immobilier du Marais.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Ponçage et vitrification parquet point de Hongrie',
                prix: '25 – 55 €/m²',
                detail: 'Ponçage à la machine à bande (3 à 4 passes), mise à niveau des lames disjointes, comblement des fissures avec mastic teinte bois, application d\'un vitrificateur mat ou satiné (3 couches). Pour les appartements de prestige : finition à l\'huile dure ou à la cire pour un rendu authentique et réversible.',
              },
              {
                type: 'Restauration partielle (remplacement de lames)',
                prix: '80 – 150 €/m²',
                detail: 'Lorsque des lames sont manquantes, vermoulues ou irréparables, il faut sourcer des lames d\'occasion compatibles (chêne, merbau, pin selon l\'immeuble) ou les faire fabriquer sur mesure. Le défi est d\'assurer une teinte et un relief cohérents avec l\'existant après ponçage.',
              },
              {
                type: 'Plafonds à la française — restauration stucs et moulures',
                prix: '150 – 400 €/m²',
                detail: 'Les plafonds à caissons avec poutres apparentes et entrevous peints nécessitent une restauration des stucs (raccords, moulures refaites à la colle de peau), une mise en peinture à la chaux ou à la détrempe pour un rendu mat authentique, et parfois une consolidation des poutres porteuses. Travail de spécialiste indispensable.',
              },
              {
                type: 'Restauration de cheminées XVIIe-XVIIIe',
                prix: '2 000 – 6 000 € / unité',
                detail: 'Nettoyage et consolidation du manteau (marbre, pierre, bois sculpté), rejointoiement du foyer et du conduit, remise aux normes si réutilisation du foyer (tubage acier inox). Dans les secteurs classés, la cheminée doit être conservée même si le conduit est inutilisable.',
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
            Budget rénovation appartement Paris 3e : prix 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent tous corps de métier inclus (main d&apos;œuvre + matériaux), hors études et frais de maîtrise d&apos;œuvre.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture, ponçage parquet, petits travaux électricité',
                    prixM2: '800 – 1 200 €',
                  },
                  {
                    niveau: 'Rénovation partielle',
                    prestations: 'Salle de bain ou cuisine + sols + peinture + électricité partielle',
                    prixM2: '1 200 – 2 000 €',
                  },
                  {
                    niveau: 'Rénovation complète standard',
                    prestations: 'Tous corps de métier, remise aux normes complète, finitions soignées',
                    prixM2: '2 000 – 3 000 €',
                  },
                  {
                    niveau: 'Rénovation prestige / patrimoniale',
                    prestations: 'Restauration éléments XVIIe, parquet, stucs, ABF, matériaux nobles',
                    prixM2: '3 000 – 3 800 €',
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
              Points de vigilance spécifiques au 3e arrondissement
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Vérifier le classement ou l\'inscription de l\'immeuble avant tout projet de travaux',
                'Contacter l\'ABF en amont pour les modifications de façade ou de menuiseries extérieures',
                'Préserver les éléments patrimoniaux (parquet, cheminées, stucs) même lors d\'une rénovation contemporaine',
                'Prévoir un délai administratif de 2 à 4 mois pour l\'obtention des autorisations ABF',
                'Faire appel à un artisan expérimenté en restauration du patrimoine pour les éléments sensibles',
                'Anticiper les surcoûts liés aux matériaux conformes (chaux, bois certifié, enduits traditionnels)',
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
              { href: '/blog/renovation-appartement-paris-4e', title: 'Rénovation appartement Paris 4e' },
              { href: '/blog/renovation-appartement-paris-7e', title: 'Rénovation appartement Paris 7e' },
              { href: '/blog/renovation-appartement-paris-8e', title: 'Rénovation appartement Paris 8e' },
              { href: '/blog/renovation-appartement-paris-12e', title: 'Rénovation appartement Paris 12e' },
              { href: '/blog/renovation-appartement-paris-16e', title: 'Rénovation appartement Paris 16e' },
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
          Rénovez votre appartement dans le 3e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisans spécialisés en patrimoine parisien. Devis gratuit sous 48h. Accompagnement ABF inclus.
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
