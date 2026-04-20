import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Studio Paris', item: 'https://espacedesignparis.fr/blog/renovation-studio-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Rénovation Studio Paris : optimiser l'espace & prix au m² 2025 | Espace Design",
  description: "Rénover un studio parisien : optimisation de l'espace, rangements intégrés, kitchenette, salle de bain. Prix au m² et conseils artisan 2025.",
  datePublished: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-studio-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une rénovation de studio à Paris en 2025 ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'une rénovation de studio à Paris varie selon l'ampleur des travaux. Une rénovation légère (peinture, sol, luminaires) coûte 300 à 500 €/m². Une rénovation complète (électricité, plomberie, cuisine, salle de bain, cloisons) revient à 800 à 1 500 €/m². Pour un studio de 25 m², comptez entre 7 500 et 37 500 € selon le niveau de finition. Les travaux d'aménagement sur-mesure (lit escamotable, rangements intégrés) ajoutent 3 000 à 8 000 € au budget total.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment agrandir visuellement un studio parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Plusieurs techniques permettent d'agrandir visuellement un studio : peindre les murs et le plafond de la même couleur claire (blanc cassé, lin) pour effacer les angles, opter pour un sol continu sans rupture de matériau, utiliser des miroirs pleine hauteur sur un pan de mur, choisir des meubles sur pieds (qui laissent voir le sol), installer des cloisons vitrées pour séparer les espaces sans les fermer, et miser sur un éclairage indirect qui supprime les ombres dures.",
      },
    },
    {
      '@type': 'Question',
      name: "Un lit escamotable vaut-il l'investissement dans un studio parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, dans un studio de moins de 25 m², un lit escamotable (ou lit mural) est souvent le meilleur investissement. Il libère 4 à 6 m² de surface au sol en journée, transformant la chambre en salon ou en bureau. Les modèles avec armoire intégrée et/ou canapé face ont des prix compris entre 1 500 et 4 000 €. Le retour sur investissement est immédiat en termes de confort et de valeur locative. Un artisan peut l'intégrer dans un meuble sur-mesure pour une finition parfaite.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il un permis de construire pour rénover un studio parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non, la plupart des travaux de rénovation d'un studio ne nécessitent pas de permis de construire. Une déclaration préalable est requise uniquement si vous créez une ouverture (fenêtre, porte) dans un mur extérieur ou si vous modifiez l'aspect de la façade. En copropriété, les travaux touchant les parties communes (cloisons porteuses, gaines techniques) nécessitent l'accord de l'AG. L'électricité et la plomberie doivent respecter les normes NF C 15-100 et DTU 60.1 mais ne requièrent pas de permis.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Studio Paris : optimiser l'espace & prix au m² 2025 | Espace Design",
  description: "Rénover un studio parisien : optimisation de l'espace, rangements intégrés, kitchenette, salle de bain. Prix au m² et conseils artisan 2025.",
  keywords: "rénovation studio Paris, aménagement studio Paris, prix rénovation studio",
}

export default function ArticleRenovationStudio() {
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
            Guides
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Studio Paris : optimiser l&apos;espace et prix au m² 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Rénover un studio parisien est un exercice de précision : chaque centimètre compte, chaque choix a des conséquences sur l&apos;usage, la luminosité et la valeur du bien. Rangements intégrés, kitchenette, salle de bain optimisée, lit escamotable : voici le guide complet pour réussir la rénovation d&apos;un studio à Paris en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Diagnostic */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Avant de rénover : analyser les contraintes du studio parisien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Un studio parisien présente presque toujours les mêmes défis : surface réduite (15 à 35 m²), hauteur sous plafond souvent faible (2,40 m à 2,60 m dans le bâti des années 1960), luminosité limitée (une seule façade exposée), et contraintes de plomberie figées par la position des gaines et colonnes montantes.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La première étape est un état des lieux technique : état de l&apos;électricité (tableau, prises, éclairage), plomberie (pression, évacuations), revêtements (plancher, murs, plafond), isolation (murs, fenêtres), ventilation. Ces éléments conditionnent le budget et la faisabilité des aménagements envisagés.
            </p>
            <div className="space-y-4">
              {[
                {
                  point: "Électricité : mise aux normes prioritaire",
                  detail: "Dans un studio ancien, le tableau électrique est souvent sous-dimensionné (6 ou 10 circuits) et les prises peu nombreuses. La mise aux normes NF C 15-100 est indispensable avant tout aménagement. Coût : 1 500 à 3 000 € pour un studio. C'est aussi le moment d'intégrer les gaines pour l'éclairage LED, les prises USB et le câblage multimédia.",
                },
                {
                  point: "Plomberie : contraintes de déplacement",
                  detail: "Déplacer les évacuations d'une cuisine ou d'une salle de bain dans un studio est coûteux (300 à 800 €/point d'eau déplacé) et parfois impossible sans accord de copropriété. L'astuce : concevoir l'aménagement autour des contraintes existantes plutôt que de les déplacer. Une kitchenette peut s'adapter à presque n'importe quel angle si les évacuations restent en place.",
                },
                {
                  point: "Hauteur sous plafond : enjeu majeur",
                  detail: "Une hauteur de 2,40 m limite les rangements en hauteur et les mezzanines. A 2,70 m et au-delà, une mezzanine (lit en hauteur) devient possible, libérant toute la surface au sol pour le séjour. Vérifier la hauteur réelle (avec les doublages existants) avant de concevoir tout aménagement en hauteur.",
                },
              ].map((el) => (
                <div key={el.point} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.point}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Optimisation espace */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Optimisation de l&apos;espace : les solutions qui changent tout
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un studio parisien, l&apos;optimisation de l&apos;espace passe par des solutions de mobilier malin, du sur-mesure et une réflexion poussée sur les circulations. Voici les interventions les plus efficaces, par ordre d&apos;impact.
          </p>
          <div className="space-y-4">
            {[
              {
                solution: "Lit escamotable ou mezzanine",
                prix: "1 500 – 5 000 €",
                detail: "Le lit escamotable (wall bed) libère 4 à 6 m² de jour. Les modèles avec canapé intégré sont les plus polyvalents (séjour le jour, chambre la nuit). La mezzanine est possible dès 2,70 m de hauteur : le lit est en hauteur, le bureau ou le dressing en dessous. Ces deux solutions transforment radicalement l'usage d'un petit espace.",
              },
              {
                solution: "Cloison vitrée ou verrière intérieure",
                prix: "2 000 – 5 000 €",
                detail: "Séparer la zone nuit sans fermer l'espace : la cloison vitrée (style atelier, acier noir) est la solution idéale. Elle délimite clairement la chambre sans bloquer la lumière. Alternative moins coûteuse : le rideau sur rail plafond (200 à 500 €) qui sépare les espaces à la demande sans travaux.",
              },
              {
                solution: "Rangements intégrés plafond-sol",
                prix: "800 – 3 000 €",
                detail: "Des rangements sur-mesure du sol au plafond optimisent chaque centimètre. Dans une niche, sous un escalier (en cas de mezzanine), autour d'un radiateur, dans l'espace perdu d'un couloir : tout peut devenir rangement. Un menuisier artisan peut concevoir ces solutions sur-mesure pour une finition impeccable.",
              },
              {
                solution: "Sol continu sans rupture",
                prix: "30 – 80 €/m²",
                detail: "Un sol identique dans tout le studio (parquet, carrelage grand format, béton ciré) efface les transitions et agrandit visuellement l'espace. Éviter les petits carreaux qui hachent l'espace. Un parquet chêne en pose biais (diagonale) agrandit encore davantage les petites surfaces.",
              },
              {
                solution: "Cuisine ouverte et kitchenette compacte",
                prix: "2 000 – 6 000 €",
                detail: "Une kitchenette bien conçue dans 120 cm de linéaire (évier, plaque 2 feux, réfrigérateur compact) peut suffire pour un studio locatif. En rénovation pour usage personnel, une cuisine ouverte en L (réfrigérateur, lave-vaisselle, plaque 3 feux) s'intègre dans 4 m² et s'ouvre sur le séjour.",
              },
            ].map((el) => (
              <div key={el.solution} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.solution}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Salle de bain */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Salle de bain de studio : maximiser dans 3 à 5 m²
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La salle de bain d&apos;un studio parisien fait souvent moins de 4 m². L&apos;enjeu est de combiner douche, WC (ou WC séparés), lavabo et rangements dans cet espace minimal, sans sacrifier le confort ni l&apos;esthétique.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Douche à l'italienne",
                detail: "Indispensable dans un studio : plus spacieuse visuellement qu'une douche avec receveur surélevé, elle facilite le nettoyage et convient aux PMR. Dimension minimale recommandée : 80 × 80 cm. Prévoir un carrelage antidérapant et une évacuation centrée.",
                prix: "800 – 2 500 €",
              },
              {
                titre: "WC suspendu",
                detail: "Le WC suspendu libère 20 cm de profondeur par rapport au WC posé (la chasse est encastrée dans le mur). Il facilite le nettoyage du sol et donne une impression d'espace. Coût plus élevé à l'installation (bâti-support) mais gain esthétique notable.",
                prix: "600 – 1 200 €",
              },
              {
                titre: "Meuble vasque compact",
                detail: "Un meuble sous-vasque de 50 à 60 cm de profondeur offre rangements et plan de toilette. Privilégier les finitions laquées blanc ou béton qui réfléchissent la lumière. Un miroir avec éclairage intégré (LED) remplace le placard à pharmacie et optimise la luminosité.",
                prix: "300 – 800 €",
              },
              {
                titre: "Carrelage grand format ou effet marbre",
                detail: "Un carrelage 60 × 60 cm ou 60 × 120 cm (pose en continue sols et murs) agrandit visuellement la pièce. L'effet marbre blanc ou gris clair est très tendance et intemporel. Éviter les petites mosaïques qui renforcent l'impression d'étroitesse.",
                prix: "40 – 120 €/m²",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.prix}</div>
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
            Budget rénovation studio Paris 2025 : tableau des prix au m²
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix indicatifs pour un studio parisien de 20 à 30 m², main d&apos;oeuvre et matériaux inclus. Les prix varient selon l&apos;état de départ et le niveau de finition.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Poste</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix unitaire</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget 25 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { poste: 'Peinture + enduit', unite: '25 – 60 €/m²', budget: '625 – 1 500 €' },
                  { poste: 'Sol (parquet flottant)', unite: '30 – 70 €/m²', budget: '750 – 1 750 €' },
                  { poste: 'Électricité (mise aux normes)', unite: 'Forfait', budget: '1 500 – 3 000 €' },
                  { poste: 'Plomberie (robinetterie + WC)', unite: 'Forfait', budget: '1 000 – 2 500 €' },
                  { poste: 'Salle de bain complète', unite: 'Forfait', budget: '3 000 – 8 000 €' },
                  { poste: 'Cuisine / kitchenette', unite: 'Forfait', budget: '2 000 – 6 000 €' },
                  { poste: 'Lit escamotable sur-mesure', unite: 'Forfait', budget: '1 500 – 4 000 €' },
                  { poste: 'Rangements intégrés', unite: '400 – 1 000 €/ml', budget: '1 200 – 3 000 €' },
                ].map((row, i) => (
                  <tr key={row.poste} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.poste}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.unite}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Les 6 règles d&apos;or pour rénover un studio parisien
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Privilégier les couleurs claires pour les murs et le plafond — le blanc fait gagner 2 à 3 m² visuellement",
                "Toujours opter pour un sol continu dans tout le studio, sans rupture de matériau",
                "Préférer les meubles sur pieds : le sol visible en continu agrandit l'espace",
                "Utiliser la hauteur : rangements plafond-sol, mezzanine, étagères hautes",
                "Intégrer des miroirs sur un pan de mur entier pour doubler la profondeur visuelle",
                "Ne jamais négliger l'éclairage : éclairage indirect + spots directionnels + lampes d'ambiance",
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

      {/* Section 5 — Profils */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénovation studio : selon votre profil et votre objectif
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les priorités de rénovation d&apos;un studio diffèrent selon que vous êtes propriétaire occupant, investisseur locatif ou que vous préparez une vente. Voici les stratégies adaptées à chaque cas.
          </p>
          <div className="space-y-4">
            {[
              {
                profil: "Propriétaire occupant : confort et esthétique",
                contenu: "Investissez dans la qualité : parquet massif, carrelage grand format, électroménager encastré, salle de bain sur-mesure. Le sur-mesure (lit escamotable intégré, rangements plafond-sol) maximise le confort quotidien. Budget : 800 à 1 500 €/m², finitions premium.",
              },
              {
                profil: "Investisseur locatif : durabilité et facilité d'entretien",
                contenu: "Privilégiez les matériaux résistants et faciles à nettoyer : carrelage grand format dans toutes les pièces (ou parquet stratifié haute résistance), peinture lessivable, plomberie robuste. Une kitchenette compacte bien équipée (lave-vaisselle petit format, micro-ondes encastré) fait la différence pour la location. Budget : 500 à 900 €/m².",
              },
              {
                profil: "Avant vente : valoriser rapidement",
                contenu: "Misez sur l'effet visuel à budget maîtrisé : peinture blanche intégrale, sol refait, salle de bain repeinte + nouveaux robinets, éclairage LED chaud. Coût : 200 à 400 €/m² pour une transformation visuelle significative. Évitez les travaux structurels qui n'apportent pas de valeur visible.",
              },
            ].map((el) => (
              <div key={el.profil} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.profil}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.contenu}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Tendances */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Tendances déco studio Paris 2025 : du wabi-sabi au minimalisme
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les studios parisiens rénovés en 2025 s&apos;orientent vers des intérieurs épurés, chaleureux et fonctionnels. Quelques tendances fortes à connaître avant de commencer votre projet.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                tendance: "Palette terracotta et lin",
                detail: "Les tons chauds (ocre, terracotta, sable) remplacent le blanc pur pour plus de chaleur. Associés à des matières naturelles (lin, osier, bois), ils créent un intérieur cosy même dans 20 m².",
              },
              {
                tendance: "Béton ciré et parquet chêne",
                detail: "Le béton ciré (sol continu, facile à entretenir) reste la référence pour les studios modernes. Le parquet chêne en pose droite ou biais apporte chaleur et noblesse à des budgets accessibles.",
              },
              {
                tendance: "Verrière intérieure acier noir",
                detail: "La verrière style atelier sépare la chambre du séjour sans bloquer la lumière. L'acier noir mat est la finition la plus demandée en 2025. S'adapte à tous les styles, du haussmannien au contemporain.",
              },
              {
                tendance: "Éclairage stratifié",
                detail: "Fini le plafonnier central unique. Les studios rénovés multiplient les sources lumineuses : spots encastrés, ruban LED indirect, appliques murales, lampe de table. L'éclairage crée des zones et de la profondeur.",
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
              { href: '/blog/renovation-loft-paris', title: 'Rénovation loft Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/isolation-thermique-paris', title: 'Isolation thermique Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
              { href: '/blog/humidite-appartement-paris', title: "Humidité appartement Paris" },
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
          Donnez une nouvelle vie à votre studio parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Visite gratuite sur place. Conception de l&apos;aménagement incluse. Devis détaillé sous 48h.
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
