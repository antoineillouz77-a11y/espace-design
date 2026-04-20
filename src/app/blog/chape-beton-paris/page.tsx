import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Chape Beton Paris', item: 'https://espacedesignparis.fr/blog/chape-beton-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Chape Beton Paris : chape seche, liquide & prix artisan 2025",
  description: "Guide complet pose chape beton a Paris : chape seche vs liquide vs traditionnelle, epaisseur, sechage, prix au m², compatibilite parquet. Artisan Paris.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/chape-beton-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix de la pose d'une chape beton a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix de la pose d'une chape beton a Paris varie selon le type : la chape traditionnelle (ciment + sable) coute 20 - 40 euros/m², la chape liquide autonivelante (anhydrite ou ciment) coute 25 - 55 euros/m², la chape seche (plaques Fermacell ou OSB sur granulats) coute 40 - 80 euros/m². Ces prix incluent la main d'oeuvre et les materiaux. Pour un appartement de 60 m², prevoir 1 200 - 3 300 euros pour la chape seule, hors depose de l'ancien revetement.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle epaisseur de chape pour poser un parquet ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour poser un parquet sur chape, l'epaisseur minimale depend du type de chape et du parquet : chape traditionnelle ou liquide - epaisseur minimale 4 cm pour un parquet colle, 5 cm si plancher chauffant. Chape seche (Fermacell) - compatible parquet des 22 mm de plaques. La planéité requise pour la pose d'un parquet massif colle est de 2 mm sous la regle de 2 metres. Un ragréage autonivelant est souvent necessaire après sechage pour corriger les defauts de surface.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps faut-il attendre avant de poser un parquet sur chape ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le temps de sechage avant pose de parquet depend du type de chape : chape traditionnelle ciment - 1 semaine par centimetre d'epaisseur, soit 4 - 6 semaines pour 4 - 6 cm. Chape anhydrite liquide - sechage plus rapide, 1 cm/semaine avec chauffage et aeration, mais hygroscopique (absorbe l'humidite) donc taux d'humidite residuelle critique : moins de 0,5% avant parquet colle. Chape seche - praticable apres 24 h, parquet posable des 48 h. Toujours verifier le taux d'humidite residuelle au carbimetre avant toute pose.",
      },
    },
    {
      '@type': 'Question',
      name: "Chape seche ou chape liquide : que choisir pour un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un appartement parisien en etage, la chape seche (Fermacell ou plaques OSB sur granulats) est souvent privilegiee : poids tres inferieur (30 - 50 kg/m² vs 80 - 120 kg/m² pour une chape humide), pas de temps de sechage, realisable par un artisan seul. La chape liquide anhydrite est la plus rapide a poser (pompage mecanise) et la plus lisse, ideale pour les grandes surfaces et le plancher chauffant. La chape traditionnelle convient pour les travaux lourds avec changement de niveau important.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Chape Beton Paris : chape seche, liquide & prix artisan 2025 | Espace Design",
  description: "Guide pose chape beton Paris : chape seche vs liquide vs traditionnelle, epaisseur, sechage, prix au m². Compatibilite parquet. Artisan Paris.",
  keywords: [
    'chape beton Paris',
    'pose chape Paris',
    'artisan chape Paris',
    'prix chape beton Paris',
    'chape seche Paris',
    'chape liquide Paris',
    'chape anhydrite Paris',
    'chape avant parquet Paris',
  ],
}

export default function ArticleChapeBeton() {
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
            Sols & travaux
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Pose de Chape Béton à Paris : guide complet artisan 2025
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed font-light">
            La chape béton est l&apos;étape clé qui conditionne toute la qualité des revêtements de sol posés ensuite — parquet, carrelage, béton ciré. Chape sèche, chape liquide anhydrite ou chape traditionnelle au ciment : chaque technique a ses avantages selon les contraintes de l&apos;appartement parisien. Guide complet épaisseurs, séchage et prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Pourquoi une chape */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Pourquoi faire une chape béton dans un appartement parisien ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La chape béton sert à créer un support plan, homogène et résistant sur lequel poser ensuite un revêtement de sol. Dans les appartements parisiens anciens, elle est souvent rendue nécessaire par plusieurs raisons : plancher en bois ancien irrégulier ou vermoulu, changement de niveau entre pièces, passage de gaines techniques (chauffage, électricité), isolation phonique à intégrer ou mise en place d&apos;un plancher chauffant.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              En appartement parisien en étage, le poids de la chape est une contrainte technique centrale. Les planchers anciens ont une capacité portante limitée — généralement 150 à 250 kg/m² — qui peut être dépassée par une chape traditionnelle trop épaisse. Le choix du type de chape se fait donc toujours en tenant compte du poids admissible du plancher existant.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Plancher en bois irrégulier ou dégradé',
                  detail: "Dans les immeubles haussmanniens, les planchers en bois sur solives présentent souvent des déformations, des bombements ou des zones pourries. Une chape sèche (granulats + plaques) est ici préférable à une chape humide qui pourrait aggraver les problèmes d'humidité dans le bois.",
                },
                {
                  enjeu: 'Passage de gaines et rattrapage de niveau',
                  detail: "Lors d'une rénovation complète, les gaines électriques, la plomberie et les tuyaux de chauffage sont souvent noyés dans la chape pour une intégration propre. L'épaisseur de la chape doit alors tenir compte du diamètre des gaines (minimum 5 cm au-dessus des gaines).",
                },
                {
                  enjeu: 'Plancher chauffant hydraulique ou électrique',
                  detail: "Un plancher chauffant nécessite une chape d'enrobage spécifique, généralement liquide anhydrite (5 à 6 cm minimum au-dessus des tubes). Cette chape assure à la fois l'enrobage des tubes, la diffusion thermique et la planéité du support.",
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

      {/* Section 2 — Les 3 types de chape */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Chape sèche, liquide ou traditionnelle : comparatif technique
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Trois techniques de chape coexistent dans la rénovation parisienne. Chaque type répond à des contraintes spécifiques : poids du bâtiment, temps de chantier disponible, revêtement de sol prévu et présence ou non d&apos;un plancher chauffant.
          </p>

          <div className="space-y-5 mb-8">
            {[
              {
                nom: 'Chape traditionnelle (ciment + sable)',
                avantages: ['Résistance mécanique maximale', 'Compatible tous supports', 'Idéale pour les rehausses importantes (5 à 15 cm)'],
                inconvenients: ['Poids lourd : 80 – 120 kg/m²', 'Séchage long : 4 à 6 semaines', 'Surface moins lisse — ragréage souvent nécessaire'],
                prix: '20 – 40 €/m²',
                usage: 'Locaux commerciaux, garages, rez-de-chaussée, travaux lourds avec niveau à reprendre fortement',
              },
              {
                nom: 'Chape liquide autonivelante (anhydrite ou ciment)',
                avantages: ['Surface très lisse, sans ragréage', 'Idéale pour plancher chauffant', 'Pose mécanisée rapide (grande surface en 1 journée)'],
                inconvenients: ['Anhydrite hygroscopique (risque humidité avant parquet)', 'Poids similaire à la chape traditionnelle', 'Délai de séchage à surveiller selon hygrométrie'],
                prix: '25 – 55 €/m²',
                usage: 'Grandes surfaces, plancher chauffant, logements neufs ou grands chantiers de rénovation',
              },
              {
                nom: 'Chape sèche (granulats + plaques Fermacell ou OSB)',
                avantages: ['Très légère : 30 – 50 kg/m²', 'Praticable en 24 h, parquet posable à 48 h', 'Isolation phonique et thermique intégrée'],
                inconvenients: ['Coût supérieur aux chapes humides', 'Sensible à l\'humidité résiduelle du support', 'Epaisseur minimale plus importante (6 à 8 cm avec granulats)'],
                prix: '40 – 80 €/m²',
                usage: 'Appartements en étage (planchers anciens), chantiers rapides, zones sensibles à l\'humidité',
              },
            ].map((el) => (
              <div key={el.nom} className="bg-white rounded-lg p-6 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="font-semibold text-[#1C1C1C] text-sm">{el.nom}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs font-medium text-[#1C1C1C] uppercase tracking-wider mb-2">Avantages</div>
                    <ul className="space-y-1">
                      {el.avantages.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-xs text-gray-600 font-light">
                          <CheckCircle size={12} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#1C1C1C] uppercase tracking-wider mb-2">Inconvénients</div>
                    <ul className="space-y-1">
                      {el.inconvenients.map((i) => (
                        <li key={i} className="text-xs text-gray-500 font-light leading-snug">— {i}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="text-xs text-gray-500 font-light border-t border-gray-100 pt-3">
                  <span className="font-medium text-[#1C1C1C]">Usage typique :</span> {el.usage}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-2">Notre recommandation pour un appartement parisien</div>
            <div className="text-gray-400 text-sm font-light leading-relaxed">
              Pour un appartement en étage avec plancher bois ancien : chape sèche Fermacell (légèreté + rapidité). Pour une rénovation complète avec plancher chauffant : chape liquide anhydrite. Pour un rez-de-chaussée ou un sous-sol avec fort rattrapage de niveau : chape traditionnelle ciment.
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Épaisseur, séchage et compatibilité parquet */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Épaisseur, séchage et compatibilité avec le parquet
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La compatibilité entre la chape et le revêtement de sol à poser dépend de trois paramètres critiques : l&apos;épaisseur minimale, le temps de séchage et le taux d&apos;humidité résiduelle. Ces paramètres conditionnent directement la durabilité du parquet ou du carrelage posé ensuite.
          </p>

          <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-3">Épaisseurs minimales selon le revêtement prévu</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Revêtement de sol</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Chape humide (min.)</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Chape sèche (min.)</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Planéité requise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rev: 'Parquet massif collé', humide: '4 cm', seche: '22 mm plaques', planeite: '2 mm / 2 m' },
                  { rev: 'Parquet flottant', humide: '4 cm', seche: '22 mm plaques', planeite: '3 mm / 2 m' },
                  { rev: 'Carrelage grand format', humide: '5 cm', seche: '25 mm plaques', planeite: '2 mm / 2 m' },
                  { rev: 'Béton ciré', humide: '4 cm', seche: '22 mm plaques', planeite: '1 mm / 2 m' },
                  { rev: 'Plancher chauffant + revêtement', humide: '5 – 6 cm', seche: 'non recommandée', planeite: '3 mm / 2 m' },
                ].map((row, i) => (
                  <tr key={row.rev} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.rev}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.humide}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.seche}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.planeite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-3">Temps de séchage et taux d&apos;humidité résiduelle</h3>
          <div className="space-y-3 mb-6">
            {[
              {
                type: 'Chape ciment traditionnelle',
                detail: "Règle empirique : 1 semaine de séchage par centimètre d'épaisseur. Une chape de 5 cm nécessite 5 semaines minimum. Taux d'humidité résiduelle acceptable pour parquet collé : inférieur à 2 % CM (carbimètre). Pour carrelage : inférieur à 4 %.",
                sechage: '4 – 7 semaines',
              },
              {
                type: 'Chape liquide anhydrite',
                detail: "Séchage plus rapide avec chauffage et ventilation : 1 cm/semaine avec circulation d'air. L'anhydrite est hygroscopique — elle ré-absorbe l'humidité ambiante. Taux d'humidité résiduelle critique : moins de 0,5 % avant parquet collé (à vérifier au carbimètre, jamais au drap de polyéthylène). Primaire de protection obligatoire avant tout parquet.",
                sechage: '3 – 5 semaines',
              },
              {
                type: 'Chape sèche Fermacell',
                detail: "Pas de temps de séchage. Praticable dès 24 h, parquet posable à 48 h. Vérifier que les granulats sous les plaques ont été correctement compactés et que le taux d'humidité du plancher support est inférieur à 70 % HR avant pose.",
                sechage: '48 h (parquet)',
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.sechage}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Prix au m² */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de la chape béton à Paris : détail par poste
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour la pose de chape seule, main d&apos;œuvre et matériaux inclus, hors dépose de l&apos;ancien revêtement (comptez 10 à 20 €/m² pour la dépose carrelage ou parquet). Le ragréage éventuel après séchage est également en sus.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de chape</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix /m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix pour 50 m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Délai chantier</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Chape traditionnelle ciment', prix: '20 – 40 €', total50: '1 000 – 2 000 €', delai: '1 à 2 jours' },
                  { type: 'Chape liquide anhydrite', prix: '25 – 55 €', total50: '1 250 – 2 750 €', delai: '1 jour (pompe)' },
                  { type: 'Chape sèche Fermacell', prix: '40 – 80 €', total50: '2 000 – 4 000 €', delai: '1 à 3 jours' },
                  { type: 'Ragréage autonivelant seul', prix: '15 – 30 €', total50: '750 – 1 500 €', delai: '1 jour' },
                  { type: 'Chape avec isolation phonique', prix: '50 – 90 €', total50: '2 500 – 4 500 €', delai: '2 à 3 jours' },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.total50}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.delai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <div className="font-medium text-white text-sm mb-2">Facteurs qui font varier le prix à Paris</div>
            <div className="text-gray-400 text-sm font-light leading-relaxed">
              L&apos;accès au chantier (monte-charge ou escalier étroit), l&apos;étage (surcoût de monte-matériaux), la nécessité de déposer un ancien carrelage épais (scellé au mortier) ou de traiter un plancher vermoulu, et la présence de gaines à noyer dans la chape sont les principaux facteurs de variation du prix. À Paris, comptez systématiquement une majoration de 10 à 20 % par rapport aux tarifs régionaux pour les difficultés d&apos;accès et de stationnement.
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Conseils */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Conseils pratiques pour réussir sa chape à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La chape est un travail technique qui conditionne toute la durabilité des revêtements posés ensuite. Quelques règles pratiques permettent d&apos;éviter les erreurs les plus courantes dans les appartements parisiens anciens.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Vérifier la capacité portante du plancher avant de choisir entre chape humide et chape sèche — essentiel en étage",
              "Ne jamais poser un parquet massif sur chape anhydrite sans mesure au carbimètre (taux < 0,5 % impératif)",
              "Prévoir systématiquement un primaire de durcissement sur chape anhydrite avant tout collage",
              "Intégrer les gaines électriques et les tuyaux avant coulage — les modifier après est très coûteux",
              "Attendre le séchage complet avant toute mesure de planéité — une chape encore humide semble plus lisse",
              "Demander un devis avec détail du type de chape, épaisseur, composition et délais de séchage garantis",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
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
              { href: '/carrelage-paris', title: 'Carrelage Paris' },
              { href: '/blog/pose-parquet-paris', title: 'Pose parquet Paris' },
              { href: '/blog/carrelage-grand-format-paris', title: 'Carrelage grand format Paris' },
              { href: '/blog/renovation-plancher-chauffant-paris', title: 'Plancher chauffant Paris' },
              { href: '/blog/sol-beton-cire-paris', title: 'Béton ciré Paris' },
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
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-saint-germain-en-laye', label: 'Saint-Germain-en-Laye' },
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
          Un support parfait pour votre revêtement de sol
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisans spécialisés en chape et rénovation parisienne.
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
