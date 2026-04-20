import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 15e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-15e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 15e : artisan & prix 2025 | Espace Design',
  description: "Rénovation appartement dans le 15e arrondissement de Paris : Vaugirard, Convention, Beaugrenelle. Artisan local, devis gratuit 48h.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-15e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels types de biens trouve-t-on dans le 15e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le 15e arrondissement est l'arrondissement le plus peuplé de Paris et présente un parc immobilier très varié. On y trouve des immeubles haussmanniens et des immeubles de rapport des années 1900-1930 dans la partie nord (Vaugirard, Convention), des immeubles modernes des années 1960-1980 (Beaugrenelle, Front de Seine) et des maisons de ville dans les impasses et villas du secteur sud. C'est un arrondissement résidentiel avec peu de contraintes ABF sauf cas particuliers.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte une rénovation dans le 15e arrondissement en 2025 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le 15e, les prix sont comparables à la moyenne parisienne. Un rafraîchissement (peintures, sols) coûte entre 400 et 800 €/m². Une rénovation complète d'un appartement ancien se situe entre 1 000 et 1 800 €/m². Les appartements des tours de Beaugrenelle et du Front de Seine nécessitent souvent un traitement de l'isolation thermique et acoustique (80 à 150 €/m² supplémentaires). Pour un 3 pièces de 65 m², comptez entre 65 000 et 120 000 € pour une rénovation complète.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les spécificités de la rénovation dans les immeubles haussmanniens du 15e ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les immeubles haussmanniens du 15e (secteur Vaugirard, Commerce, Convention) présentent les caractéristiques classiques du style : planchers en bois massif à restaurer, hauteur sous plafond de 2,80 à 3,20 m, moulures et parquets à conserver, façades en pierre de taille. Ces biens nécessitent une attention particulière à la conservation des éléments d'origine (parquet, moulures, cheminées) qui valorisent le bien. La rénovation complète d'un haussmannien dans le 15e est entre 1 200 et 2 000 €/m².",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 15e : artisan & prix 2025 | Espace Design',
  description: "Rénovation appartement dans le 15e arrondissement de Paris : Vaugirard, Convention, Beaugrenelle. Artisan local, devis gratuit 48h.",
}

export default function ArticleParis15e() {
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
            Rénovation Appartement Paris 15e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le 15e est l&apos;arrondissement le plus peuplé de Paris. Entre les immeubles haussmanniens de Vaugirard et Convention, les tours modernes de Beaugrenelle et les maisons cachées dans les villas et impasses, le 15e regorge de biens très différents. Ce guide vous aide à planifier et budgéter votre rénovation dans le 15e.
          </p>
        </div>
      </section>

      {/* Section 1 — Profil du quartier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              15e arrondissement : l&apos;arrondissement résidentiel par excellence
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Avec plus de 230 000 habitants, le 15e est le plus peuplé des arrondissements parisiens. C&apos;est aussi l&apos;un des plus homogènes en termes d&apos;ambiance — résidentiel, calme, bien desservi — mais l&apos;architecture y est très variée. Les quartiers Vaugirard, Convention et Commerce concentrent les immeubles anciens ; Beaugrenelle et le Front de Seine accueillent les tours modernes ; les villas et impasses du sud cachent des maisons atypiques.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              C&apos;est un arrondissement globalement peu contraint par les règles ABF, ce qui laisse plus de liberté dans les projets de transformation. Les copropriétés sont en revanche souvent bien organisées avec des règlements intérieurs à respecter sur les horaires de travaux.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Immeubles haussmanniens — Vaugirard, Convention, Commerce',
                  detail: "Ces immeubles construits entre 1860 et 1930 présentent les éléments classiques du bâti ancien : parquet massif chêne, hauteur sous plafond généreuse (2,80 à 3,20 m), moulures au plafond, cheminées décoratives. Leur rénovation est plus complexe mais valorise fortement le bien. Conserver les éléments d'origine (parquet, moulures, cheminées) est toujours rentable.",
                },
                {
                  enjeu: 'Tours modernes — Beaugrenelle, Front de Seine',
                  detail: "Les tours de Beaugrenelle et du Front de Seine (années 1970-1980) offrent de belles vues sur la Seine mais souffrent d'une isolation acoustique et thermique insuffisante. La rénovation doit traiter ces deux points en priorité. Les règles de copropriété dans ces ensembles modernes sont parfois strictes sur les modifications d'appartements.",
                },
                {
                  enjeu: 'Villas et maisons cachées du sud du 15e',
                  detail: "Le sud du 15e (Brancion, Vouillé, Dantzig) cache de nombreuses villas et maisons individuelles dans des impasses protégées. Ces biens atypiques nécessitent souvent des rénovations complètes incluant toiture, façade et structure. Le coût est plus élevé mais le potentiel de valorisation est important.",
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

      {/* Section 2 — Spécificités techniques */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux les plus fréquents dans le 15e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Voici les travaux les plus souvent réalisés dans le 15e, avec les fourchettes de prix habituellement constatées.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Rénovation salle de bain',
                solution: "Remplacement de la baignoire par une douche à l'italienne, nouveau carrelage, vasque suspendue, WC suspendu. La salle de bain est le poste le plus fréquent dans le 15e, souvent vétuste dans les immeubles des années 1960-1980.",
                cout: '8 000 – 18 000 €',
              },
              {
                titre: 'Ponçage et vitrification parquet',
                solution: "Les parquets anciens des haussmanniens du 15e méritent d'être restaurés plutôt que recouverts. Un ponçage + vitrification redonne un résultat spectaculaire à moindre coût. Éviter le remplacement par un stratifié qui dévaluerait le bien.",
                cout: '30 – 60 €/m²',
              },
              {
                titre: 'Mise aux normes électrique',
                solution: "Indispensable dans tous les appartements construits avant 1985. Remplacement du tableau électrique, mise en place des disjoncteurs différentiels, ajout de prises de terre. Durée : 3 à 7 jours selon la surface.",
                cout: '3 000 – 8 000 €',
              },
              {
                titre: 'Isolation acoustique (tours)',
                solution: "Dans les tours de Beaugrenelle et du Front de Seine, le bruit d'impact est le principal problème. Pose d'un plancher flottant avec sous-couche acoustique. Résultat : réduction de 8 à 12 dB des bruits d'impact.",
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
            Prix d&apos;une rénovation dans le 15e arrondissement en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 15e affiche des prix de rénovation dans la moyenne parisienne, légèrement inférieurs à ceux des arrondissements centraux. Les délais sont en général plus courts car les artisans sont moins saturés que dans le Marais ou Saint-Germain.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau de prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Description</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture, sol, luminaires — sans modification des installations',
                    prixM2: '400 – 800 €',
                  },
                  {
                    niveau: 'Rénovation partielle (SDB ou cuisine)',
                    prestations: 'Refonte d\'une pièce humide avec mise aux normes',
                    prixM2: '800 – 1 200 €',
                  },
                  {
                    niveau: 'Rénovation complète appartement ancien',
                    prestations: 'Électricité, plomberie, cuisine, SDB, sols, peintures',
                    prixM2: '1 000 – 1 800 €',
                  },
                  {
                    niveau: 'Rénovation haussmannien avec conservation',
                    prestations: 'Rénovation complète avec restauration parquet, moulures, cheminées',
                    prixM2: '1 200 – 2 000 €',
                  },
                  {
                    niveau: 'Maison individuelle ou villa',
                    prestations: 'Rénovation complète maison avec toiture, façade et structure',
                    prixM2: '1 500 – 2 500 €',
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
              Conseils spécifiques pour rénover dans le 15e
            </h3>
            <div className="space-y-3">
              {[
                'Conserver le parquet ancien dans les haussmanniens — ponçage et vitrification sont toujours plus rentables que le remplacement',
                'Traiter l\'acoustique en priorité dans les tours de Beaugrenelle et du Front de Seine',
                'Vérifier le règlement de copropriété avant de planifier des travaux dans les ensembles modernes',
                'Prévoir la mise aux normes électrique pour tout bien construit avant 1985',
                'Anticiper les délais d\'obtention des autorisations d\'urbanisme pour les maisons individuelles',
                'Demander 3 devis à des artisans locaux du 15e pour des délais d\'intervention réduits',
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
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénover un appartement haussmannien à Paris' },
              { href: '/blog/parquet-massif-paris', title: 'Parquet massif Paris — pose & prix' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique appartement Paris' },
              { href: '/blog/renovation-salle-de-bain-prix-paris', title: 'Prix rénovation salle de bain Paris 2025' },
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
              { href: '/renovation-paris-15e', label: 'Paris 15e' },
              { href: '/renovation-paris-14e', label: 'Paris 14e' },
              { href: '/renovation-paris-13e', label: 'Paris 13e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
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
          Vous rénovez un bien dans le 15e arrondissement ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Vaugirard, Convention, Beaugrenelle — devis gratuit sous 48h dans le 15e.
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
