import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "Aménagement Studio Paris : optimiser chaque m² — guide 2025",
  description: "Optimiser un studio parisien : lit mezzanine, cloison amovible, cuisine compacte, rangements intégrés, mobilier sur-mesure, couleurs et lumière. Prix aménagement studio Paris 2025.",
  keywords: ["aménagement studio Paris", "optimiser studio Paris", "lit mezzanine studio Paris", "mobilier sur-mesure studio Paris", "prix aménagement studio 2025"],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Aménagement Studio Paris : optimiser chaque m² — guide 2025",
  description: "Optimiser un studio parisien : lit mezzanine, cloison amovible, cuisine compacte, rangements intégrés, mobilier sur-mesure, couleurs et lumière. Prix 2025.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Comment aménager un studio de 20m² à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour aménager un studio de 20 m² à Paris, commencez par définir les zones fonctionnelles : espace nuit, espace vie/bureau et espace cuisine. La priorité est de libérer le sol : un lit escamotable mural récupère 4 à 6 m², un lit mezzanine (si hauteur > 2,80 m) libère toute la surface au sol. Exploitez la hauteur avec des étagères du sol au plafond. Unifiez les revêtements de sol (même parquet ou même béton ciré dans tout le studio) pour agrandir visuellement l'espace. Limitez la palette de couleurs à 2 ou 3 tons et multipliez les miroirs face aux fenêtres pour réfléchir la lumière.",
      },
    },
    {
      '@type': 'Question',
      name: "Prix aménagement studio Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'un aménagement de studio parisien varie selon le niveau de finition. Budget entrée de gamme (mobilier IKEA + peinture + parquet flottant) : 3 000 à 6 000 € pour un 20 m². Budget intermédiaire (mobilier semi sur-mesure, carrelage, peinture de qualité) : 8 000 à 15 000 €. Budget haut de gamme (sur-mesure intégral, parquet massif, béton ciré, mezzanine) : 15 000 à 30 000 €. Ces estimations incluent l'aménagement et les revêtements mais excluent les travaux lourds (électricité, plomberie). La surface est aussi déterminante : un 15 m² coûte moins cher à aménager qu'un 35 m² mais demande plus d'ingéniosité.",
      },
    },
    {
      '@type': 'Question',
      name: "Lit escamotable ou mezzanine ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le choix dépend principalement de la hauteur sous plafond. Pour une hauteur standard de 2,40 à 2,60 m, le lit escamotable (Murphy bed) est la seule option : il se replie dans un meuble mural et libère 4 à 6 m² pendant la journée. Budget : 1 500 à 5 000 € selon les éléments intégrés (bureau, canapé, étagères). Pour une hauteur de 2,80 m et plus, la mezzanine est idéale : elle libère toute la surface au sol pour créer un bureau ou un salon en dessous. Budget : 2 500 à 6 000 € avec escalier ou échelle. Les studios haussmanniens parisiens avec leurs hauts plafonds (souvent 3,00 m ou plus) se prêtent parfaitement à la mezzanine.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il un architecte pour un studio ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un architecte n'est pas obligatoire pour aménager un studio, quelle que soit sa surface. L'intervention d'un architecte DPLG ou d'un architecte d'intérieur est obligatoire uniquement pour les permis de construire portant sur des surfaces supérieures à 150 m² (particuliers) ou pour certains ERP. Pour un studio parisien, un artisan spécialisé en aménagement intérieur ou un décorateur peut concevoir et réaliser l'ensemble du projet. En revanche, si votre aménagement prévoit de déplacer des cloisons porteuses ou de créer une mezzanine de plus de 5 m², une déclaration préalable de travaux en mairie est requise.",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* Hero */}
      <section className="bg-[#1C1C1C] text-center pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Studios</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Aménagement Studio Paris : maximiser l&apos;espace et le confort
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-2xl mx-auto">
            Lit mezzanine, cloison amovible, cuisine compacte, rangements intégrés, mobilier sur-mesure : guide complet pour optimiser chaque m² d&apos;un studio parisien en 2025, avec les prix et les solutions selon votre budget.
          </p>
        </div>
      </section>

      {/* Section 1 — Gain de place */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Astuces gain de place : lit mezzanine, cloison amovible, cuisine compacte
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un studio parisien, chaque centimètre compte. Les solutions les plus efficaces jouent sur la verticalité, la polyvalence des meubles et la séparation intelligente des espaces.
          </p>
          <div className="space-y-5">
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">
                Lit mezzanine : la solution reine pour les hauts plafonds
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Les appartements parisiens anciens bénéficient souvent de hauteurs sous plafond de 2,80 m à 3,20 m — idéales pour une mezzanine. Le lit en hauteur libère intégralement la surface au sol pour créer un bureau, un dressing ou un coin salon en dessous. Une mezzanine bien conçue peut récupérer 8 à 15 m² de surface fonctionnelle dans un studio de 20 m². Budget : 2 500 à 6 000 € selon les matériaux (bois massif, métal, ou mixte) et l&apos;escalier ou l&apos;échelle intégré. Si la surface créée dépasse 5 m², une déclaration préalable de travaux est requise en mairie.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">
                Cloison amovible : séparer sans murer
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                La cloison amovible ou coulissante permet de créer une intimité visuelle entre la zone nuit et la zone vie sans recourir à une cloison fixe. Les solutions vont du simple rideau sur rail (100 à 300 €) à la cloison coulissante en bois ou en verre (1 500 à 5 000 €) en passant par les bibliothèques ouvertes servant de séparateurs (400 à 2 000 €). L&apos;avantage : la séparation est réversible et ne réduit pas la luminosité si l&apos;on choisit une cloison en verre ou ajourée.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">
                Cuisine compacte : la kitchenette optimisée
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Dans un studio, la cuisine doit tenir en 1,20 à 2,40 m linéaires maximum. Les solutions compactes actuelles permettent d&apos;intégrer plaque induction 2 feux, mini réfrigérateur combiné, évier et rangements dans un module de 60 cm de profondeur. Un plan de travail rabattable ou une table à rallonge fixée au mur complète le dispositif. Budget kitchenette sur-mesure : 2 500 à 6 000 €. Pensez à intégrer la hotte aspirante dès la conception pour éviter les odeurs dans l&apos;unique pièce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Rangements intégrés */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rangements intégrés : exploiter chaque recoin
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un studio, le rangement visible est l&apos;ennemi de l&apos;espace visuel. L&apos;objectif est de maximiser les rangements cachés ou intégrés pour garder un espace épuré et apaisant.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                zone: 'Sous le lit',
                solution: "Tiroirs intégrés dans le sommier ou cadre avec rangement. Idéal pour le linge de maison, les valises, les vêtements hors-saison. Un lit double avec tiroirs peut stocker l'équivalent de 2 à 3 armoires.",
              },
              {
                zone: 'Autour de la fenêtre',
                solution: "Bibliothèques ou placards encadrant la fenêtre du sol au plafond. L'encaissement crée une alcôve visuelle et maximise le rangement sur une paroi souvent inexploitée. Combiner avec un siège sous la fenêtre avec coffre intégré.",
              },
              {
                zone: 'Couloir et entrée',
                solution: "L'entrée d'un studio est souvent sacrifiée. Un meuble d'entrée sur mesure (banquette + crochets + placards hauts) peut absorber chaussures, manteaux et accessoires et libérer le studio de l'encombrement visuel à l'entrée.",
              },
              {
                zone: 'Cloisons et alcôves',
                solution: "Si votre studio présente des recoins ou des niches (typique des anciens appartements parisiens), transformez-les en dressings sur mesure avec portes coulissantes miroirs. Le miroir agrandit visuellement la pièce et cache le rangement.",
              },
              {
                zone: 'Volume en hauteur',
                solution: "Les étagères montant jusqu'au plafond (H 2,50 m) doublent la capacité de rangement d'un mur classique. Combiner rangements ouverts (livres, déco) et fermés (placards) pour un résultat ordonné. Prévoir un escabeau design ou une échelle coulissante.",
              },
              {
                zone: 'Sous l\'escalier mezzanine',
                solution: "Si votre studio comporte une mezzanine, le volume sous l'escalier est une opportunité : dressing intégré, bureau niché, mini-cellier ou rangements de cuisine selon l'emplacement et votre besoin prioritaire.",
              },
            ].map((el) => (
              <div key={el.zone} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.zone}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.solution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Mobilier sur-mesure */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Mobilier sur-mesure : la clé des petits espaces
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le mobilier standard est dimensionné pour des appartements de taille normale. Dans un studio parisien, les cotes standards créent des espaces perdus et des angles morts. Le mobilier sur-mesure exploite chaque centimètre disponible et s&apos;adapte aux contraintes architecturales (poutres, tuyaux, murs non droits typiques des immeubles anciens).
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                meuble: 'Lit escamotable avec bureau intégré',
                prix: '2 500 – 5 500 €',
                detail: "Le lit se replie dans un meuble mural qui révèle un bureau en position fermée. La journée, votre studio est un appartement bureau. La nuit, le bureau disparaît et le lit se déploie en 30 secondes. Nombreux finitions disponibles : laqué blanc, chêne naturel, gris anthracite.",
              },
              {
                meuble: 'Bibliothèque mural du sol au plafond',
                prix: '1 500 – 4 000 €',
                detail: "Conçue sur mesure pour s'adapter exactement à la hauteur et à la largeur du mur, avec intégration possible d'un espace TV, d'un bureau rabattable ou d'un bar. Finitions laqué mat ou bois naturel selon l'ambiance souhaitée.",
              },
              {
                meuble: 'Cuisine compacte intégrée',
                prix: '2 500 – 6 000 €',
                detail: "Module cuisine sur-mesure intégrant plaque, réfrigérateur, évier et rangements dans une largeur de 80 à 160 cm. Portes intégrées dans un meuble de rangement plus large pour qu'elle soit invisible quand elle est fermée.",
              },
              {
                meuble: 'Dressing mezzanine ou alcôve',
                prix: '1 800 – 4 500 €',
                detail: "Dressing intégré sous la mezzanine ou dans une niche sur mesure, avec portes coulissantes miroirs pour agrandir visuellement. Intérieur organisé (penderie, tiroirs, étagères) adapté à votre garde-robe.",
              },
            ].map((el) => (
              <div key={el.meuble} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.meuble}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Couleurs et lumière */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Couleurs et lumière : agrandir visuellement votre studio
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La couleur et la lumière sont les outils les plus puissants — et les moins coûteux — pour transformer la perception d&apos;un petit espace. Un studio bien éclairé et aux couleurs harmonieuses paraît toujours plus grand qu&apos;un studio encombré aux tons sombres.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                principe: 'Palette limitée à 3 tons maximum',
                detail: "Dans un studio, la cohérence visuelle est essentielle. Choisissez une couleur dominante (murs, 70%), une couleur secondaire (mobilier ou textile, 20%) et un accent (détails, 10%). Les tons neutres clairs (blanc cassé, beige nude, gris clair chaud) agrandissent. Un mur de couleur plus soutenue peut créer un point focal sans écraser si c'est une nuance naturelle (vert sauge, terracotta, bleu ardoise).",
              },
              {
                principe: 'Revêtement de sol uniforme',
                detail: "Un seul revêtement dans tout le studio (parquet chêne, béton ciré ou carrelage grand format) crée une continuité visuelle qui allonge et agrandit l'espace. Les ruptures de sol entre zones (carrelage cuisine + parquet salon) fractionnent l'espace et le rapetissent.",
              },
              {
                principe: 'Miroirs et lumière naturelle',
                detail: "Un grand miroir (H 180 cm minimum) placé face à la fenêtre principale réfléchit la lumière naturelle et double visuellement la profondeur de la pièce. Évitez les rideaux épais : stores vénitiens, stores double rouleau ou voilages permettent de filtrer sans bloquer la lumière.",
              },
              {
                principe: 'Éclairage artificiel en couches',
                detail: "Évitez l'unique plafonnier central qui uniformise l'éclairage et écrase l'espace. Multipliez les sources : éclairage de plan de travail sous les meubles hauts, lampes de chevet ou appliques murales pour la zone nuit, lampe de bureau pour le coin travail, éclairages d'accentuation pour mettre en valeur une étagère ou un tableau. Préférez les ampoules à lumière chaude (2700-3000K).",
              },
            ].map((el) => (
              <div key={el.principe} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.principe}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Prix aménagement studio Paris 2025 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix aménagement studio Paris 2025 : tableau par budget
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Estimations pour un studio parisien de 20 m², aménagement complet hors travaux lourds (électricité, plomberie, démolition).
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget 20 m²</th>
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Ce qui est inclus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { niveau: 'Entrée de gamme', budget: '3 000 – 6 000 €', inclus: 'Peinture, parquet flottant, mobilier grande surface, accessoires' },
                  { niveau: 'Intermédiaire', budget: '8 000 – 15 000 €', inclus: 'Mobilier semi sur-mesure, carrelage ou parquet collé, lit escamotable entrée de gamme' },
                  { niveau: 'Haut de gamme', budget: '15 000 – 30 000 €', inclus: 'Mobilier intégral sur-mesure, parquet massif ou béton ciré, mezzanine, cuisine intégrée' },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.budget}</td>
                    <td className="px-4 py-3 text-gray-600 font-light">{row.inclus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Commencer par un plan à l'échelle avant d'acheter le moindre meuble",
              "Privilégier la qualité sur les éléments fixes (sol, cuisine, lit) plutôt que sur le déco",
              "Investir dans un lit confortable : la qualité du sommeil impacte tout le reste",
              "Prévoir les prises électriques en nombre suffisant dès la conception (évite les rallonges)",
              "Choisir un revêtement de sol lavable facilement (studio = usure intense)",
              "Penser à la ventilation : cuisine sans hotte dans un studio = odeurs dans tout l'espace",
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
            {schemaFAQ.mainEntity.map((q) => (
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
              { href: '/renovation-studio-paris', title: 'Rénovation studio Paris' },
              { href: '/amenagement-interieur-paris', title: 'Aménagement intérieur Paris' },
              { href: '/menuiserie-paris', title: 'Menuiserie Paris — mobilier sur-mesure' },
              { href: '/blog/renovation-studio-paris', title: 'Guide rénovation studio Paris' },
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
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Transformer votre studio parisien
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Conception et aménagement sur-mesure. Devis gratuit sous 48h.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#c9a030] transition-colors"
          >
            Devis gratuit <ArrowRight size={13} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 px-7 py-3.5 rounded font-light text-sm tracking-wide hover:border-white hover:text-white transition-colors"
          >
            <Phone size={14} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
