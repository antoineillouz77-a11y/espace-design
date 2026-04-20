import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Parquet Flottant vs Collé Paris', item: 'https://espacedesignparis.fr/blog/parquet-flottant-vs-colle-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Parquet Flottant vs Collé Paris : quel choix pour votre appartement 2025 | Espace Design',
  description: 'Parquet flottant ou collé à Paris ? Avantages, inconvénients, isolation acoustique, prix. Guide complet artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/parquet-flottant-vs-colle-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel parquet choisir pour un appartement en copropriété parisienne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans une copropriété parisienne, le règlement de copropriété impose souvent une isolation acoustique minimale. Le parquet collé avec sous-couche résiliente est la solution la plus recommandée car il offre une meilleure isolation aux bruits d'impact (bruits de pas) que le flottant. Si le règlement n'impose pas de seuil précis, un parquet flottant avec sous-couche acoustique de qualité (au moins 20 dB d'affaiblissement) peut suffire. Demandez toujours conseil à votre syndic avant de choisir votre revêtement de sol.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le prix de pose d\'un parquet flottant vs collé à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À Paris, la pose d'un parquet flottant coûte entre 40 et 80 €/m² fourniture et pose comprises (parquet stratifié ou contrecollé, sous-couche incluse). La pose d'un parquet collé est plus chère : 80 à 120 €/m² pour un parquet contrecollé collé, et jusqu'à 180 €/m² pour un parquet massif collé en chêne. La pose clouée (parquet massif sur lambourdes) coûte 150 à 250 €/m² — c'est la technique traditionnelle des immeubles haussmanniens parisiens.",
      },
    },
    {
      '@type': 'Question',
      name: 'Le parquet flottant fait-il plus de bruit que le parquet collé ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, le parquet flottant génère davantage de bruits de pas car il repose sur une sous-couche sans être solidarisé au support. Ce phénomène de 'caisse de résonance' amplifie les bruits d'impact transmis aux voisins du dessous. Le parquet collé, directement fixé à la chape, transmet moins de vibrations. Pour atténuer ce problème avec un parquet flottant, investissez dans une sous-couche acoustique de qualité (5 à 10 mm d'épaisseur, au moins 18 à 22 dB d'affaiblissement aux bruits d'impact).",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Parquet Flottant vs Collé Paris : quel choix pour votre appartement 2025 | Espace Design',
  description: 'Parquet flottant ou collé à Paris ? Avantages, inconvénients, isolation acoustique, prix. Guide complet artisan 2025.',
}

export default function ArticleParquetFlottantVsColle() {
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
            Parquet
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Parquet Flottant vs Collé Paris : quel choix pour votre appartement 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Parquet flottant, collé ou cloué : dans un appartement parisien, le choix de la technique de pose est déterminant pour le confort acoustique, la durabilité et le coût. Guide complet pour choisir le bon parquet en fonction de votre immeuble, votre copropriété et votre budget en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Parquet flottant */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Parquet flottant : rapide, économique, mais attention au bruit
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le parquet flottant est la technique de pose la plus répandue dans les appartements parisiens rénovés ces 20 dernières années. Les lames (stratifiées ou contrecollées) sont emboîtées entre elles et reposent sur une sous-couche sans être collées ni clouées au support. La pose est rapide et réversible.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Son principal défaut dans un immeuble parisien : le bruit de pas. Sans sous-couche acoustique adaptée, les voisins du dessous entendent chaque pas, chaque chaise déplacée. Dans les copropriétés, c&apos;est souvent la source numéro un de litiges entre voisins.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Avantages du parquet flottant',
                  detail: 'Pose rapide (1 à 2 jours pour un appartement de 60 m²), coût réduit (40 à 80 €/m² fourniture + pose), réversible sans dommage au support, compatible avec plancher chauffant (vérifier la compatibilité du produit), large choix de teintes et de formats. Idéal pour une rénovation avec petit budget ou pour un appartement locatif.',
                },
                {
                  enjeu: 'Inconvénients du parquet flottant',
                  detail: 'Bruit de pas plus élevé qu\'un parquet collé (effet caisse de résonance), sensation légèrement creuse sous le pied, durée de vie inférieure au massif (10 à 20 ans vs 50 ans+), impossibilité de poncer et rénover contrairement au massif. En copropriété parisienne, peut nécessiter une sous-couche acoustique renforcée imposée par le règlement.',
                },
                {
                  enjeu: 'Sous-couche acoustique : le choix déterminant',
                  detail: 'La qualité de la sous-couche fait toute la différence en parquet flottant. Evitez les sous-couches fines de 2 mm incluses dans les packs bas de gamme. Privilégiez une sous-couche en polyéthylène expansé haute densité ou en mousse mélaminée, épaisseur 5 à 8 mm, avec un indice d\'affaiblissement aux bruits d\'impact d\'au moins 20 dB. Budget : 5 à 12 €/m².',
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

      {/* Section 2 — Parquet collé */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Parquet collé : plus silencieux, plus durable, plus cher
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le parquet collé est directement fixé à la chape ou au support avec une colle spéciale. Cette technique solidarise les lames au sol et supprime l&apos;effet caisse de résonance. C&apos;est la solution privilégiée dans les appartements haut de gamme et les immeubles en copropriété avec règlement strict.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Avantages du parquet collé',
                solution: 'Silence de marche nettement supérieur au flottant, sensation de solidité et de chaleur sous le pied, compatible avec plancher chauffant hydronique (selon le produit), longévité accrue car les lames ne bougent pas, rénovable par ponçage si le parquet est massif ou contrecollé avec couche d\'usure suffisante.',
                cout: 'Durabilité : 30 à 50 ans',
              },
              {
                titre: 'Inconvénients du parquet collé',
                solution: "Pose plus longue et plus technique (séchage de la colle 24 à 48h), coût plus élevé (80 à 120 €/m²), irréversible sans dépose complète, nécessite un support parfaitement plan et sec (taux d'humidité inférieur à 2,5%), impossible à modifier facilement si l'appartement est revendu.",
                cout: 'Coût : 80 – 120 €/m²',
              },
              {
                titre: 'Parquet massif collé : le haut de gamme',
                solution: "Le parquet massif (chêne, noyer, frêne) collé directement sur la chape est la référence pour les appartements haussmanniens de standing. Épaisseur de 20 à 23 mm, il peut être poncé et rénové 5 à 8 fois au fil des décennies. La pose doit être réalisée par un parqueteur qualifié. Prix : 120 à 180 €/m².",
                cout: 'Coût : 120 – 180 €/m²',
              },
              {
                titre: 'Parquet contrecollé collé : le bon compromis',
                solution: "Le parquet contrecollé (couche d'usure 3 à 6 mm + âme contreplaquée) collé offre un excellent rapport qualité/prix. Plus stable dimensionnellement que le massif, il convient aux appartements avec plancher chauffant. La couche d'usure permet 1 à 2 ponçages. Prix : 80 à 120 €/m² fourniture et pose.",
                cout: 'Coût : 80 – 120 €/m²',
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

      {/* Section 3 — Réglementation copropriété */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Bruit en copropriété parisienne : réglementation et obligations
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            À Paris, les litiges liés aux bruits de pas entre voisins sont extrêmement fréquents. Avant de choisir votre revêtement de sol, vérifiez les obligations de votre copropriété — le non-respect peut vous obliger à refaire entièrement votre sol à vos frais.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Règlement de copropriété',
                prix: 'À lire en priorité',
                detail: "Consultez votre règlement de copropriété avant tout achat. De nombreux immeubles parisiens imposent un revêtement de sol avec un indice d'affaiblissement aux bruits d'impact minimal (souvent 18 à 22 dB). Certains règlements interdisent explicitement le parquet flottant sans sous-couche certifiée, ou imposent la moquette dans les chambres.",
              },
              {
                type: 'Décret du 31 août 2006 sur les nuisances sonores',
                prix: 'Réglementation nationale',
                detail: "En France, les bruits de comportement (marche, chaises, jeux) sont réglementés. Si vos voisins peuvent prouver que vos travaux ont aggravé la transmission des bruits d'impact et que votre revêtement ne respecte pas les normes acoustiques minimales, vous pouvez être condamné à le refaire. La norme NF EN ISO 140 définit les méthodes de mesure.",
              },
              {
                type: 'Sous-couche acoustique certifiée',
                prix: '5 – 12 €/m²',
                detail: "Pour être en conformité avec la plupart des règlements de copropriété parisiens, choisissez une sous-couche avec certificat d'affaiblissement aux bruits d'impact (delta Lw) d'au moins 18 dB, idéalement 22 dB ou plus. Conservez la fiche technique du produit : elle peut vous être demandée par le syndic ou en cas de litige.",
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

      {/* Section 4 — Tableau comparatif */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Tableau comparatif : flottant vs collé vs cloué à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent fourniture et pose incluses, pour Paris, hors dépose de l&apos;ancien revêtement.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Technique</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Acoustique</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée de vie</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    technique: 'Flottant stratifié + sous-couche standard',
                    prix: '40 – 60 €/m²',
                    acoustique: 'Moyenne',
                    duree: '10 – 15 ans',
                  },
                  {
                    technique: 'Flottant contrecollé + sous-couche acoustique',
                    prix: '60 – 80 €/m²',
                    acoustique: 'Bonne',
                    duree: '15 – 25 ans',
                  },
                  {
                    technique: 'Contrecollé collé',
                    prix: '80 – 120 €/m²',
                    acoustique: 'Très bonne',
                    duree: '25 – 40 ans',
                  },
                  {
                    technique: 'Massif collé (chêne)',
                    prix: '120 – 180 €/m²',
                    acoustique: 'Très bonne',
                    duree: '50 ans et plus',
                  },
                  {
                    technique: 'Massif cloué sur lambourdes',
                    prix: '150 – 250 €/m²',
                    acoustique: 'Excellente',
                    duree: '80 ans et plus',
                  },
                ].map((row, i) => (
                  <tr key={row.technique} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.technique}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.acoustique}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour bien choisir votre parquet parisien
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Lire le règlement de copropriété avant tout achat de parquet',
                'Privilégier le collé si vous habitez au-dessus d\'un voisin sensible au bruit',
                'Choisir une sous-couche acoustique certifiée delta Lw 20 dB minimum',
                'Opter pour le flottant uniquement si le budget est la contrainte principale',
                'Vérifier la compatibilité avec un éventuel plancher chauffant existant',
                'Conserver les fiches techniques des produits posés pour le syndic',
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
              { href: '/parquet-paris', title: 'Parquet Paris' },
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
              { href: '/blog/renovation-parquet-paris', title: 'Rénovation parquet Paris' },
              { href: '/blog/parquet-chene-paris', title: 'Parquet chêne Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
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
          Posez votre parquet à Paris avec un artisan expert
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Conseil sur la technique de pose adaptée à votre immeuble. Devis détaillé sous 48h.
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
