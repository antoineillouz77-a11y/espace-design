import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: "Crédence Cuisine Paris : matériaux, pose & prix artisan 2025 | Espace Design",
  description: "Guide complet crédence cuisine Paris 2025 : carrelage, verre, inox, béton ciré, zellige. Prix au m², pose sur carrelage existant, entretien et tendances. Artisan Paris.",
  keywords: [
    "credence cuisine paris",
    "pose credence cuisine paris",
    "credence cuisine prix paris",
    "credence zellige paris",
    "credence verre cuisine paris",
    "credence inox paris",
    "credence beton cire paris",
    "artisan credence paris",
    "credence carrelage paris",
    "renovation cuisine paris",
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Crédence Cuisine Paris : matériaux, pose & prix artisan 2025",
  description: "Guide complet crédence cuisine Paris 2025 : carrelage, verre, inox, béton ciré, zellige. Prix au m², pose sur carrelage existant, entretien et tendances. Artisan Paris.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  url: 'https://espacedesignparis.fr/blog/credence-cuisine-paris',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel matériau pour crédence cuisine ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le choix dépend de votre style et de votre budget. Le carrelage (céramique, grès, zellige) est le plus classique : résistant, facile à entretenir, nombreux formats et couleurs, prix 50 à 150 €/m² posé. Le verre laqué donne un effet très contemporain et est ultra-facile à nettoyer : 80 à 200 €/m² posé. L'inox convient aux cuisines professionnelles ou industrielles : 100 à 250 €/m² posé. Le béton ciré est trendy mais demande un scellant régulier : 80 à 180 €/m² posé. Le zellige apporte une âme artisanale incomparable : 85 à 190 €/m² posé à Paris.",
      },
    },
    {
      '@type': 'Question',
      name: "Prix crédence cuisine Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'une crédence cuisine à Paris varie selon le matériau et la surface. Pour une crédence standard de 2 à 3 m² (du plan de travail à la hotte) : carrelage classique 200 à 500 €, zellige 400 à 800 €, verre laqué 300 à 700 €, inox 300 à 800 €, béton ciré 300 à 600 €. Ces prix incluent la fourniture et la pose. La préparation du support (primaire, ragréage éventuel) peut ajouter 50 à 150 € selon l'état du mur. Espace Design réalise des devis gratuits sur visite pour les crédences à Paris.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on poser sur l'ancien carrelage ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, sous conditions. Poser un nouveau carrelage sur l'ancien est possible si : l'ancien carrelage est solidement ancré (aucun carreau décollé au test de la clé), le support est suffisamment plan, et l'épaisseur supplémentaire ne pose pas de problème (prises électriques, hottes, rebords). Cette technique économise la dépose (8 à 15 €/m²) et le traitement des murs. Le verre laqué et l'inox se posent également sur carrelage existant avec une colle adaptée. Le béton ciré nécessite une dépose préalable pour des raisons d'adhérence.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle hauteur de crédence cuisine ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La hauteur standard d'une crédence cuisine est de 60 cm (du plan de travail au bas des meubles hauts). Certaines cuisines sans meuble haut peuvent avoir une crédence montant jusqu'au plafond ou jusqu'à la hotte uniquement (45 cm). La tendance 2025 à Paris est à la crédence pleine hauteur (du plan de travail au plafond, 90 cm à 1,20 m) pour un effet graphique fort, notamment en zellige ou carrelage grand format. Cette crédence haute est particulièrement efficace pour les cuisines ouvertes où elle structure visuellement la zone de cuisson.",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* Hero */}
      <section className="bg-[#1C1C1C] text-center pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#B8960C] text-xs font-medium uppercase tracking-widest mb-4">
            Guide artisan 2025
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-6 leading-tight">
            Crédence Cuisine Paris : choisir et faire poser votre crédence
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed font-light max-w-2xl mx-auto mb-8">
            Carrelage, zellige, verre laqué, inox ou béton ciré — guide complet des matériaux,
            prix au m² Paris 2025, conseils de pose et entretien par votre artisan Paris.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B8960C] text-white px-6 py-3 text-sm font-medium rounded hover:bg-[#9a7d0a] transition-colors"
            >
              Demander un devis <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+33611783867"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-sm font-medium rounded hover:bg-white/5 transition-colors"
            >
              <Phone className="w-4 h-4" /> 06 11 78 38 67
            </a>
          </div>
        </div>
      </section>

      {/* Section 1 — Matériaux */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les 5 matériaux pour votre crédence cuisine à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La crédence est la surface murale entre le plan de travail et les meubles hauts. Elle doit résister
              aux projections grasses, à la chaleur des plaques de cuisson, aux vapeurs et aux nettoyages
              fréquents. Chaque matériau a ses avantages, ses contraintes et sa personnalité visuelle.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              À Paris en 2025, les artisans d&apos;Espace Design observent une forte demande pour le zellige et le
              carrelage grand format, au détriment du verre et de l&apos;inox qui marquaient les années 2010.
              Le béton ciré reste une valeur sûre dans les cuisines industrielles ou loft.
            </p>
            <div className="space-y-4">
              {[
                {
                  matiere: "Carrelage céramique et grès cérame",
                  avantages: "Résistant, facile à entretenir, vaste choix de formats et couleurs, compatible avec la pose sur carrelage existant. Format 10×10 cm (métro), 20×20 cm (classique) ou grand format jusqu'au 60×60 cm. Idéal pour les cuisines à budget maîtrisé ou les cuisines familiales à fort usage.",
                  inconvenients: "Les joints peuvent jaunir avec le temps si non traités. Un joint époxy hydrofuge est recommandé pour la cuisine.",
                  prix: "50 – 130 €/m² posé",
                },
                {
                  matiere: "Zellige marocain",
                  avantages: "Caractère artisanal unique, reflets changeants, couleurs profondes, effet chaleureux incomparable. Parfait pour les crédences accent dans les cuisines haussmanniennes ou les cuisines ouvertes sur salon. Se pose sur carrelage existant avec primaire adapté.",
                  inconvenients: "Prix plus élevé que le carrelage standard. Pose plus longue (gestion des irrégularités d'épaisseur). Entretien avec un scellant régulier.",
                  prix: "85 – 190 €/m² posé",
                },
                {
                  matiere: "Verre laqué",
                  avantages: "Surface lisse sans joints, nettoyage ultra-rapide d'un coup d'éponge, aspect très contemporain. Disponible dans toutes les teintes RAL. Résistant aux projections et aux vapeurs. Pose légère (collage sans ragréage lourd).",
                  inconvenients: "Traces de doigts visibles sur les teintes foncées. Moins chaleureux que les matières naturelles. Pas adapté aux cuisines très exposées à la chaleur directe (proximity plaques gaz).",
                  prix: "80 – 200 €/m² posé",
                },
                {
                  matiere: "Inox brossé",
                  avantages: "Aspect professionnel, résistance maximale à la chaleur et à l'humidité, entretien facile. Incontournable dans les cuisines de style industriel ou scandinave gris. Se pose en panneau de 1 ou 2 m, sans joints.",
                  inconvenients: "Traces de doigts sur l'inox brillant. Bruit lors des chocs. Moins adapté aux appartements haussmanniens. Prix élevé sur mesure.",
                  prix: "100 – 250 €/m² posé",
                },
                {
                  matiere: "Béton ciré",
                  avantages: "Aspect mat contemporain, continu sans joints, personnalisable en teinte, s'harmonise avec les sols béton ou les cuisines ouvertes. Effet design très recherché dans les lofts et studios.",
                  inconvenients: "Entretien régulier (scellant annuel). Sensible aux acides (citron, vinaigre) si non protégé. Dépose de l'ancien carrelage souvent nécessaire pour une bonne adhérence.",
                  prix: "80 – 180 €/m² posé",
                },
              ].map((el) => (
                <div key={el.matiere} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="font-medium text-[#1C1C1C] text-sm">{el.matiere}</div>
                    <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.prix}</div>
                  </div>
                  <p className="text-gray-600 text-sm font-light leading-relaxed mb-2">
                    <span className="font-medium text-gray-700">Avantages :</span> {el.avantages}
                  </p>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">
                    <span className="font-medium text-gray-700">Points de vigilance :</span> {el.inconvenients}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Pose sur carrelage existant */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Poser une crédence sur l&apos;ancien carrelage : est-ce possible ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans les appartements parisiens, la cuisine existante dispose souvent d&apos;un carrelage mural en place.
            La question de la dépose se pose systématiquement. Voici les réponses concrètes d&apos;un artisan
            spécialiste de la rénovation cuisine à Paris.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                scenario: "Carrelage → carrelage (ou zellige)",
                possible: "Oui, sous conditions",
                detail: "Tester la solidité de l'ancien carrelage (aucun carreau creux), appliquer un primaire d'accrochage, puis coller le nouveau carrelage avec un ciment-colle C2 TE. L'épaisseur supplémentaire (8 à 12 mm) peut nécessiter d'ajuster les prises et l'éclairage sous meuble.",
              },
              {
                scenario: "Carrelage → verre laqué",
                possible: "Oui, facilement",
                detail: "Le verre laqué se colle directement sur le carrelage existant avec une colle silicone spécifique, après nettoyage dégraissage. Pas de ragréage nécessaire. C'est la solution la plus rapide pour moderniser une cuisine sans travaux lourds.",
              },
              {
                scenario: "Carrelage → inox",
                possible: "Oui, facilement",
                detail: "Panneau inox collé sur carrelage existant. Prévoir les découpes pour les prises et interrupteurs. Certaines finitions inox brossé s'installent en quelques heures pour une cuisine de 2 à 3 m² de crédence.",
              },
              {
                scenario: "Carrelage → béton ciré",
                possible: "Non recommandé",
                detail: "Le béton ciré adhère difficilement sur carrelage existant (risque de décollement). La dépose de l'ancien carrelage est recommandée pour garantir l'accroche du béton ciré. Exception : certains systèmes à base de résine époxy permettent la pose sur carrelage mais avec une durabilité moindre.",
              },
            ].map((el) => (
              <div key={el.scenario} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.scenario}</div>
                <div className="text-[#B8960C] text-xs font-medium mb-2">{el.possible}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5 text-white">
            <p className="text-sm font-light leading-relaxed">
              <span className="font-medium">Conseil Espace Design :</span> Dans la majorité des rénovations cuisine
              à Paris, la pose sur carrelage existant est possible et économise 8 à 15 €/m² de dépose. Nous
              évaluons systématiquement la solidité du support lors de la visite gratuite avant devis.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Prix Paris 2025 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix crédence cuisine Paris 2025 : le récapitulatif
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Pour une crédence cuisine standard de 2 à 3 m² (longueur plan de travail × hauteur 60 cm),
            voici les budgets à prévoir à Paris selon le matériau choisi. Les prix incluent fourniture et pose
            artisanale, hors dépose de l&apos;ancien carrelage si nécessaire.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left p-3 font-medium text-xs">Matériau</th>
                  <th className="text-right p-3 font-medium text-xs">Prix/m²</th>
                  <th className="text-right p-3 font-medium text-xs">Budget 2 m²</th>
                  <th className="text-right p-3 font-medium text-xs">Budget 3 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { matiere: "Carrelage céramique classique", pm2: "50 – 100 €", deux: "100 – 200 €", trois: "150 – 300 €" },
                  { matiere: "Carrelage grand format", pm2: "80 – 130 €", deux: "160 – 260 €", trois: "240 – 390 €" },
                  { matiere: "Zellige marocain", pm2: "85 – 190 €", deux: "170 – 380 €", trois: "255 – 570 €" },
                  { matiere: "Verre laqué", pm2: "80 – 200 €", deux: "160 – 400 €", trois: "240 – 600 €" },
                  { matiere: "Inox brossé", pm2: "100 – 250 €", deux: "200 – 500 €", trois: "300 – 750 €" },
                  { matiere: "Béton ciré", pm2: "80 – 180 €", deux: "160 – 360 €", trois: "240 – 540 €" },
                ].map((row, i) => (
                  <tr key={row.matiere} className={i % 2 === 0 ? "bg-[#FAFAF8]" : "bg-white"}>
                    <td className="p-3 text-gray-700">{row.matiere}</td>
                    <td className="p-3 text-right text-gray-600">{row.pm2}</td>
                    <td className="p-3 text-right text-gray-600">{row.deux}</td>
                    <td className="p-3 text-right font-medium text-[#1C1C1C]">{row.trois}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs leading-relaxed">
            Tarifs artisan Paris 2025 — fourniture et pose incluses — hors dépose ancien carrelage (8–15 €/m²),
            ragréage si nécessaire (15–25 €/m²), et ajustements électriques (prises, éclairage).
          </p>
        </div>
      </section>

      {/* Section 4 — Tendances 2025 */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Tendances crédence cuisine Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prescriptions des artisans et décorateurs parisiens en 2025 dessinent des tendances claires
            pour les crédences cuisine. Voici les orientations que nous observons chez Espace Design lors de
            nos chantiers parisiens.
          </p>
          <div className="space-y-4">
            {[
              {
                tendance: "Le zellige en vedette",
                detail: "Le zellige est la crédence la plus demandée à Paris depuis 2023. Les coloris vert olive, blanc cassé et bleu de Fès dominent. L'effet vivant des reflets et l'authenticité artisanale répondent au désir de matières naturelles dans la cuisine. Le zellige en crédence est aussi le moyen le moins coûteux de s'offrir cette matière (2 à 3 m² suffisent).",
              },
              {
                tendance: "Le carrelage métro revisite ses classiques",
                detail: "Le carrelage métro (format 7,5×15 cm ou 10×20 cm) connaît un retour en force dans les versions colorées : vert sauge, terracotta, bleu indigo. La pose en chevron (pointe de flèche) ou en brique décalée apporte un dynamisme supplémentaire. Il coexiste parfaitement avec les cuisines haussmanniennes et les studios rénovés.",
              },
              {
                tendance: "La crédence pleine hauteur",
                detail: "Plutôt que la crédence standard de 60 cm, de plus en plus de Parisiens optent pour une crédence qui monte jusqu'au plafond (90 cm à 1,20 m), notamment dans les cuisines ouvertes. Cet effet colonne structure visuellement la zone de cuisson et donne un caractère fort à l'ensemble. Très plébiscité en zellige ou en carrelage grand format.",
              },
              {
                tendance: "La niche de crédence",
                detail: "Pour les cuisines avec cuisinière ou piano de cuisson central, creuser une niche dans le mur de crédence (environ 30 cm de profondeur, 60 cm de hauteur) permet d'y placer les huiles, épices et petits ustensiles. La niche en zellige ou en carrelage de caractère devient une véritable pièce de décoration. De plus en plus demandée lors des rénovations complètes de cuisine à Paris.",
              },
            ].map((el) => (
              <div key={el.tendance} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.tendance}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-8">
            Questions fréquentes : crédence cuisine Paris
          </h2>
          <div className="space-y-4">
            {schemaFAQ.mainEntity.map((faq) => (
              <div key={faq.name} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <h3 className="font-medium text-[#1C1C1C] text-sm mb-2">{faq.name}</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C1C1C] py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl font-semibold text-white mb-4">
            Votre crédence cuisine à Paris
          </h2>
          <p className="text-gray-300 text-sm font-light leading-relaxed mb-8">
            Zellige, carrelage, verre ou béton ciré — Espace Design vous conseille et pose votre crédence
            dans les règles de l&apos;art. Devis gratuit sur visite, intervention sous 2 à 3 semaines à Paris.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B8960C] text-white px-6 py-3 text-sm font-medium rounded hover:bg-[#9a7d0a] transition-colors"
            >
              Demander un devis <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+33611783867"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-sm font-medium rounded hover:bg-white/5 transition-colors"
            >
              <Phone className="w-4 h-4" /> 06 11 78 38 67
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
