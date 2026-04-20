import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Prix Rénovation Salle de Bain Paris', item: 'https://espacedesignparis.fr/blog/prix-renovation-salle-de-bain-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Prix Rénovation Salle de Bain Paris : budget complet 2025 | Espace Design",
  description: "Budget rénovation salle de bain à Paris : douche italienne, baignoire, carrelage, plomberie. Prix m² 2025 par type de travaux.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/prix-renovation-salle-de-bain-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation complète de salle de bain à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À Paris, le prix d'une rénovation complète de salle de bain varie entre 6 000 et 35 000 € selon la surface et le niveau de prestation. Pour une petite salle de bain de 3 à 4 m², comptez 6 000 à 12 000 €. Pour une salle de bain standard de 5 à 8 m², le budget est de 10 000 à 20 000 €. Une grande salle de bain de 10 m² ou plus avec douche italienne et baignoire îlot atteint 25 000 à 45 000 €. Ces prix incluent la dépose de l'existant, le carrelage mural et sol, la plomberie, l'électricité et les équipements sanitaires.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien coûte une douche italienne à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'une douche italienne à Paris (fourniture et pose) se situe entre 2 500 et 8 000 €. Ce prix inclut : la création du receveur (béton ou résine), l'étanchéité (SPEC ou Schlüter), le carrelage intérieur, la paroi en verre (900 à 2 500 €) et la robinetterie encastrée (400 à 1 500 €). La douche à l'italienne nécessite une hauteur sous plafond suffisante pour la gaine d'évacuation (contrainte fréquente dans le bâti parisien ancien). Un devis sur-mesure est indispensable pour évaluer la faisabilité technique.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on poser du carrelage grand format dans une petite salle de bain parisienne ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, le carrelage grand format (60×120 cm ou 120×120 cm) est tout à fait adapté aux petites salles de bain parisiennes. Contrairement aux idées reçues, il agrandit visuellement l'espace en réduisant le nombre de joints. La contrainte principale est la planéité du support : un ragréage précis est souvent nécessaire dans le bâti ancien (parquet ou béton irrégulier). Le surcoût de pose (joints plus complexes, découpes) représente 15 à 25 % par rapport au carrelage standard. Prix posé : 60 à 120 €/m² selon le format et la marque.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps dure une rénovation de salle de bain à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une rénovation complète de salle de bain à Paris dure en général de 10 à 25 jours ouvrés, selon la surface et la complexité. Phase 1 (démolition et dépose) : 1 à 2 jours. Phase 2 (plomberie rough-in et électricité) : 2 à 3 jours. Phase 3 (étanchéité et ragréage) : 2 à 3 jours + séchage. Phase 4 (carrelage mural et sol) : 3 à 7 jours. Phase 5 (pose des équipements et finitions) : 2 à 4 jours. Dans un immeuble parisien, prévoir 1 à 2 jours supplémentaires pour la logistique (monte-charge, protection des parties communes).",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Prix Rénovation Salle de Bain Paris : budget complet 2025 | Espace Design",
  description: "Budget rénovation salle de bain à Paris : douche italienne, baignoire, carrelage, plomberie. Prix m² 2025 par type de travaux.",
}

export default function ArticlePrixRenovationSalleDeBainParis() {
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
            Salle de bain
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Prix Rénovation Salle de Bain Paris : budget complet 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La rénovation d&apos;une salle de bain à Paris est l&apos;un des chantiers les plus complexes dans le bâti ancien : contraintes techniques (plomberie, étanchéité, ventilation), surfaces souvent réduites, et nécessité de coordonner plusieurs corps de métier. Ce guide détaille les prix réels 2025 par poste et par type de salle de bain.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: '6 000 €', label: 'Budget mini petite SdB' },
              { val: '15 000 €', label: 'Budget médian SdB standard' },
              { val: '45 000 €', label: 'Budget max SdB premium' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-1">{s.val}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — Budget selon taille */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Budget rénovation salle de bain selon la surface
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La surface est le premier facteur déterminant du coût d&apos;une rénovation de salle de bain à Paris. Elle conditionne le volume de carrelage, l&apos;ampleur de la plomberie et la complexité des travaux d&apos;étanchéité.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              À Paris, la plupart des appartements anciens (avant 1970) disposent de salles de bain de 3 à 6 m², souvent avec baignoire. La tendance actuelle est au remplacement de la baignoire par une douche italienne pour gagner de l&apos;espace et moderniser l&apos;espace.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: "Petite salle de bain (2–4 m²) — Budget 6 000 à 14 000 €",
                  detail: "Configuration typique : douche italienne 80×80 ou 90×90 cm, meuble vasque suspendu 60 cm, WC (si intégré), carrelage sol et mural. Les contraintes de cet espace sont la gestion de l'étanchéité et le respect des distances minimales entre équipements (60 cm entre WC et douche). Prix indicatif : 6 000 à 9 000 € pour une rénovation milieu de gamme, 10 000 à 14 000 € pour du haut de gamme.",
                },
                {
                  enjeu: "Salle de bain standard (5–8 m²) — Budget 10 000 à 25 000 €",
                  detail: "La configuration la plus répandue dans les appartements parisiens : douche italienne ou baignoire, double vasque, WC séparé ou intégré. Surface de carrelage : 30 à 50 m² mural + sol. Ce type de chantier mobilise 2 à 3 artisans pendant 15 à 20 jours. Les dépassements de budget sont fréquents en cas de découverte de problèmes d'humidité ou de plomberie ancienne à remplacer.",
                },
                {
                  enjeu: "Grande salle de bain (9 m² et plus) — Budget 25 000 à 50 000 €",
                  detail: "Pour les appartements du 16e, 7e ou dans les immeubles haussmanniens rénovés : salle de bain avec double circulation, baignoire îlot, grande douche à l'italienne, double vasque, dressing intégré. Le carrelage représente 60 à 100 m² de surface totale. Ces chantiers nécessitent souvent un architecte d'intérieur pour l'agencement et peuvent atteindre 50 000 € en finitions très haut de gamme.",
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

      {/* Section 2 — Prix par poste */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix par poste : carrelage, douche, plomberie, électricité
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Détail des prix pratiqués à Paris en 2025, fourniture et pose comprises, pour chaque poste d&apos;une rénovation de salle de bain.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Carrelage mural et sol',
                solution: "Carrelage mural (format 30×60 cm) : 35–70 €/m² posé. Grand format mural (60×120 cm) : 60–120 €/m² posé. Carrelage sol antidérapant : 30–65 €/m² posé. Dépose de l'ancien carrelage : 8–15 €/m². Ragréage support : 15–25 €/m². Une salle de bain de 5 m² représente environ 35–45 m² de carrelage mural et sol.",
                cout: '30 – 120 €/m²',
              },
              {
                titre: 'Douche italienne',
                solution: "Receveur béton ou résine sur-mesure : 400–1 200 €. Étanchéité (SPEC ou Schlüter) : 300–700 €. Carrelage intérieur douche : 50–150 €/m². Paroi verre 1 face : 900–2 000 €. Robinetterie encastrée : 400–1 500 €. Total douche italienne montée : 2 500 à 8 000 €.",
                cout: '2 500 – 8 000 €',
              },
              {
                titre: 'Baignoire',
                solution: "Baignoire acrylique encastrée : 400–1 500 €. Baignoire îlot design : 1 500–6 000 €. Robinetterie baignoire montée : 300–1 200 €. Pose et raccordement : 400–800 €. Tablier carrelé ou bois : 300–800 €. Total baignoire posée : 1 500 à 9 000 €.",
                cout: '1 500 – 9 000 €',
              },
              {
                titre: 'Meuble vasque',
                solution: "Meuble vasque suspendu 60 cm (milieu de gamme) : 400–900 €. Double vasque 120 cm : 800–2 000 €. Vasque à poser design : 200–800 €. Robinetterie lavabo : 150–600 €. Pose et raccordement : 200–500 €. Miroir avec éclairage LED intégré : 200–800 €.",
                cout: '400 – 2 500 €',
              },
              {
                titre: 'Plomberie',
                solution: "Remplacement colonne plomberie (alimentation + évacuation) : 800–2 000 €. Déplacement de la douche (moins de 1 m) : 600–1 200 €. Déplacement complet des équipements (change de plan) : 2 000–5 000 €. Radiateur sèche-serviettes : 400–1 000 € pose incluse.",
                cout: '600 – 5 000 €',
              },
              {
                titre: 'Électricité et ventilation',
                solution: "Mise aux normes électricité SdB (circuits dédiés, GFCI) : 600–1 500 €. VMC hygroréglable : 300–800 € pose incluse. Éclairage encastré IP65 : 150–400 €. Chauffage soufflant électrique : 200–500 €. Toute installation électrique en salle de bain doit respecter les zones NF C 15-100.",
                cout: '600 – 2 000 €',
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

      {/* Section 3 — Tableau */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Tableau récapitulatif des prix 2025 — Salle de bain Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix indicatifs tous compris (main d&apos;œuvre + matériaux), pour un immeuble parisien standard.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Poste</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix unitaire</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget type SdB 5 m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée pose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    traitement: 'Dépose + évacuation déchets',
                    unite: '800 – 1 500 €',
                    budget: '800 – 1 500 €',
                    duree: '1–2 j',
                  },
                  {
                    traitement: 'Ragréage + étanchéité',
                    unite: '15 – 40 €/m²',
                    budget: '600 – 1 200 €',
                    duree: '2–3 j',
                  },
                  {
                    traitement: 'Carrelage mural et sol',
                    unite: '35 – 120 €/m²',
                    budget: '2 500 – 5 000 €',
                    duree: '3–7 j',
                  },
                  {
                    traitement: 'Douche italienne complète',
                    unite: '2 500 – 8 000 €',
                    budget: '3 000 – 6 000 €',
                    duree: '2–4 j',
                  },
                  {
                    traitement: 'Meuble vasque + robinetterie',
                    unite: '600 – 3 000 €',
                    budget: '800 – 2 000 €',
                    duree: '1 j',
                  },
                  {
                    traitement: 'Plomberie (remplacement)',
                    unite: '800 – 5 000 €',
                    budget: '1 500 – 3 000 €',
                    duree: '1–3 j',
                  },
                  {
                    traitement: 'Électricité + VMC',
                    unite: '600 – 2 000 €',
                    budget: '800 – 1 500 €',
                    duree: '1–2 j',
                  },
                ].map((row, i) => (
                  <tr key={row.traitement} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.traitement}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.unite}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.budget}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour optimiser le budget salle de bain
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Ne pas déplacer la plomberie si possible : conserver les arrivées d'eau au même emplacement réduit le coût de 1 000 à 3 000 €",
                "Choisir un receveur de douche prêt à carreler plutôt qu'un béton coulé : moins cher et séchage plus rapide",
                "Opter pour un meuble vasque avec plan intégré plutôt qu'une vasque à poser : plus pratique et souvent moins cher",
                "Grouper la rénovation SdB avec la réfection WC pour mutualiser les coûts de plomberie",
                "Prévoir un budget imprévus de 10 à 15 % : dans le bâti parisien ancien, les surprises (plomberie en plomb, humidité cachée) sont fréquentes",
                "Demander à l'artisan un planning détaillé : la coordination des corps de métier (plombier, carreleur, électricien) est critique pour éviter les surcoûts",
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

      {/* Guides connexes */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Guides connexes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/douche-italienne-paris', title: 'Douche italienne Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/carrelage-salle-de-bain-paris', title: 'Carrelage salle de bain Paris' },
              { href: '/blog/renovation-salle-de-bain-petite-surface-paris', title: 'Rénovation SdB petite surface Paris' },
              { href: '/blog/plomberie-renovation-paris', title: 'Plomberie rénovation Paris' },
              { href: '/blog/humidite-appartement-paris', title: "Traitement humidité appartement Paris" },
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
          Obtenez un devis pour votre salle de bain parisienne
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Visite gratuite à domicile. Devis détaillé par poste sous 48h. Artisan spécialisé Paris et Île-de-France.
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
