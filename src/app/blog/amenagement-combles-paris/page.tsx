import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Aménagement combles Paris', item: 'https://espacedesignparis.fr/blog/amenagement-combles-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Aménagement combles Paris : transformer votre espace sous toiture en pièce de vie 2025",
  description: "Aménager vos combles à Paris : réglementations, Velux, prix par m², permis de construire, isolation en rampant. Guide complet Espace Design 2025.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
    logo: { '@type': 'ImageObject', url: 'https://espacedesignparis.fr/images/logo.png' },
  },
  datePublished: '2025-04-20',
  dateModified: '2025-06-01',
  inLanguage: 'fr-FR',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/amenagement-combles-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix pour aménager des combles à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'aménagement de combles à Paris coûte entre 1 200 et 2 500 €/m² selon les travaux nécessaires (isolation, création de fenêtres de toit, escalier, cloisons, revêtements). Pour 20 m² de combles aménageables, comptez entre 24 000 et 50 000 € selon la configuration et les finitions choisies.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il un permis de construire pour aménager des combles à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Si l'aménagement augmente la surface habitable de plus de 40 m², un permis de construire est obligatoire. En dessous, une déclaration préalable de travaux suffit, notamment pour la pose de fenêtres de toit (Velux). À Paris, le PLU (Plan Local d'Urbanisme) peut imposer des contraintes supplémentaires selon l'arrondissement et le type de bâtiment.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle hauteur minimum pour aménager des combles ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour être considérés comme aménageables, les combles doivent présenter une hauteur sous faîtage d'au moins 1,80 m sur une surface significative. En pratique, pour un usage confortable en chambre ou bureau, une hauteur de 2,20 m sous le point le plus bas est recommandée. En dessous de 1,80 m, on parle de combles perdus non aménageables.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Aménagement combles Paris : prix, Velux, réglementation 2025 | Espace Design",
  description: "Aménager vos combles à Paris : prix par m², réglementation, Velux, isolation en rampant, permis de construire. Guide complet Espace Design 2025.",
}

export default function AmenagementComblesParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <nav className="text-xs text-gray-500 mb-6 flex justify-center gap-2">
          <Link href="/" className="hover:text-[#D4AF37]">Accueil</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#D4AF37]">Blog</Link>
          <span>/</span>
          <span className="text-gray-400">Aménagement combles Paris</span>
        </nav>
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Aménagement</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 max-w-3xl mx-auto leading-tight">
          Aménagement combles Paris :<br className="hidden sm:block" /> transformer votre espace sous toiture
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Convertir des combles inutilisés en chambre, bureau ou studio : réglementations parisiennes,
          Velux et fenêtres de toit, isolation en rampant, prix et étapes clés. Guide complet 2025 par
          Espace Design.
        </p>
        <p className="text-gray-500 text-xs mt-4">Publié le 20 avril 2025</p>
      </section>

      {/* Article body */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            À Paris, où chaque mètre carré compte, l&apos;aménagement des combles représente une opportunité
            unique de gagner de la surface habitable sans déménager ni acheter. Un espace sous toiture bien
            conçu peut devenir une chambre supplémentaire, un bureau, un studio indépendant ou même une
            suite parentale. Mais ce type de projet requiert une préparation rigoureuse : faisabilité
            technique, réglementation, autorisations, et coordination des corps de métier.
          </p>

          {/* Faisabilité */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Les combles sont-ils aménageables ? — Critères de faisabilité
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Avant de lancer un projet, il faut vérifier quatre critères fondamentaux. Si l&apos;un d&apos;eux
            n&apos;est pas satisfait, le projet peut être impossible ou très coûteux.
          </p>

          <div className="space-y-4 mb-10">
            {[
              {
                titre: '1. Hauteur sous faîtage',
                detail: "Minimum absolu : 1,80 m sur une surface exploitable. En pratique, pour un usage confortable, visez 2,20 m ou plus sous le point le plus bas. Dans les immeubles haussmanniens parisiens, les combles atteignent souvent 2,50 à 3,50 m sous le faîtage — un potentiel excellent.",
              },
              {
                titre: '2. Structure de la charpente',
                detail: "La charpente traditionnelle (à fermes) laisse généralement de l'espace libre. La charpente industrielle (à fermettes) est plus difficile à traiter et nécessite souvent un renforcement structurel coûteux. Un bureau d'études structure est recommandé avant tout engagement.",
              },
              {
                titre: '3. Propriété des combles',
                detail: "Dans une copropriété, les combles appartiennent souvent à la copropriété. Leur privatisation nécessite un vote en assemblée générale et un rachat des droits. Vérifiez impérativement votre règlement de copropriété et votre titre de propriété.",
              },
              {
                titre: "4. Plancher porteur",
                detail: "Le plancher des combles doit supporter une charge habitable (minimum 250 kg/m² en usage résidentiel). Un diagnostic préalable par un bureau d'études est indispensable, surtout dans les immeubles anciens où le plancher n'a pas été dimensionné pour cet usage.",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <p className="font-semibold text-[#1C1C1C] text-sm mb-2">{el.titre}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{el.detail}</p>
              </div>
            ))}
          </div>

          {/* Réglementation */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Réglementation et autorisations à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            L&apos;aménagement de combles est soumis à plusieurs réglementations qui se superposent à Paris.
            Il est impératif de toutes les respecter avant de démarrer les travaux.
          </p>

          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Situation</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Autorisation requise</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Délai instruction</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { situation: "Aménagement sans création de surface (travaux intérieurs)", autorisation: "Aucune (déclaration si copropriété)", delai: "—" },
                  { situation: "Création de surface de 0 à 20 m² (hors zone PLU spéciale)", autorisation: "Déclaration préalable", delai: "1 mois" },
                  { situation: "Création de surface de 20 à 40 m²", autorisation: "Déclaration préalable", delai: "1 mois" },
                  { situation: "Création de surface de plus de 40 m²", autorisation: "Permis de construire", delai: "2 à 3 mois" },
                  { situation: "Pose de fenêtres de toit (Velux) modifiant l'aspect", autorisation: "Déclaration préalable", delai: "1 mois" },
                  { situation: "Bâtiment classé ou en zone protégée (Paris centre)", autorisation: "Accord ABF obligatoire", delai: "Variable" },
                ].map((row, i) => (
                  <tr key={row.situation} className={i % 2 === 1 ? 'bg-[#FAFAF8]' : ''}>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.situation}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 font-medium text-[#B8960C]">{row.autorisation}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.delai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Velux et fenêtres de toit */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Velux et fenêtres de toit : apporter la lumière naturelle
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Une pièce sous les toits sans lumière naturelle n&apos;est pas habitable. L&apos;installation de
            fenêtres de toit est presque toujours nécessaire. À Paris, les contraintes PLU et la présence de
            l&apos;Architecte des Bâtiments de France dans les secteurs patrimoniaux peuvent limiter les modèles
            autorisés.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              {
                titre: "Velux standard (tabatière)",
                detail: "Fenêtre dans le plan de la toiture. La plus courante à Paris. Prix fourni-posé : 800 à 2 500 € selon la taille et les options (double vitrage, store intégré, télécommande). Modèles à triple vitrage disponibles pour les toitures nord.",
                prix: "800 – 2 500 €",
              },
              {
                titre: "Velux à rotation (pivot)",
                detail: "Ouvre à 180° pour un nettoyage facile depuis l'intérieur. Confort supérieur. Recommandé pour les pièces de vie. Soumis à déclaration préalable si modifie l'aspect extérieur.",
                prix: "1 200 – 3 500 €",
              },
              {
                titre: "Lucarne (fenêtre en saillie)",
                detail: "Crée un renfoncement dans la toiture et apporte plus de volumétrie et de surface utilisable. Impact architectural fort — souvent refusée dans les secteurs ABF. Nécessite un permis de construire. Coût élevé mais valeur ajoutée importante.",
                prix: "8 000 – 25 000 €",
              },
              {
                titre: "Châssis de toit fixe (verrière)",
                detail: "Puits de lumière non ouvrant, intégré dans un rampant ou un plafond plat. Idéal pour les couloirs ou les salles de bain sous les toits. Ne nécessite pas de ventilation mais doit répondre aux normes thermiques (Uw ≤ 1,8 W/m².K pour RT2012).",
                prix: "1 500 – 4 000 €",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="font-semibold text-[#1C1C1C] text-sm">{el.titre}</p>
                  <span className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.prix}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{el.detail}</p>
              </div>
            ))}
          </div>

          {/* Isolation en rampant */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Isolation en rampant : la clé du confort thermique et acoustique
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Dans des combles aménagés, l&apos;isolation se fait obligatoirement en rampant (entre ou sous les
            chevrons), contrairement aux combles perdus où l&apos;on isole le plancher. C&apos;est un poste
            critique : une isolation insuffisante rend la pièce invivable en été (surchauffe) et très coûteuse
            en chauffage en hiver.
          </p>
          <div className="space-y-4 mb-10">
            {[
              {
                technique: "Isolation entre chevrons (laine minérale ou biosourcée)",
                prix: "60 – 100 €/m²",
                detail: "Technique classique : panneaux semi-rigides glissés entre les chevrons. Résistance thermique R3 à R5 selon l'épaisseur. Souvent insuffisante seule — recommander de doubler avec une seconde couche sous les chevrons.",
              },
              {
                technique: "Sarking (isolation par l'extérieur sous toiture)",
                prix: "120 – 220 €/m²",
                detail: "Panneaux isolants rigides posés sur les chevrons, sous la couverture. Technique supérieure éliminant les ponts thermiques. Idéal en cas de réfection de toiture. R6 à R8 atteint facilement. Nécessite de déposer la couverture.",
              },
              {
                technique: "Isolation en sous-face (doublage intérieur)",
                prix: "40 – 80 €/m²",
                detail: "Doublage thermique posé sous les chevrons, côté intérieur. Perd de la hauteur sous plafond (4 à 12 cm). Solution économique mais avec plus de ponts thermiques qu'un sarking. Associée à un pare-vapeur pour éviter la condensation.",
              },
              {
                technique: "Isolation mixte (entre + sous chevrons)",
                prix: "90 – 150 €/m²",
                detail: "Combinaison des deux premières techniques pour atteindre R6 à R8 sans déposer la couverture. Recommandée pour les projets de haute performance énergétique sans travaux de toiture. Solution courante dans les rénovations parisiennes.",
              },
            ].map((el) => (
              <div key={el.technique} className="flex gap-4 p-5 bg-[#FAFAF8] rounded-lg border border-gray-100">
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="font-semibold text-[#1C1C1C] text-sm">{el.technique}</p>
                    <span className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{el.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tableau des prix */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Prix d&apos;un aménagement de combles à Paris : budget par poste
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Les prix ci-dessous sont indicatifs pour un aménagement de 20 m² de combles à Paris, toutes
            surfaces comprises. Ils s&apos;entendent fourniture et pose.
          </p>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Poste</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Budget (20 m²)</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-[#1C1C1C]">Niveau finition</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { poste: "Isolation en rampant (entre + sous chevrons)", budget: "2 500 – 4 500 €", finition: "Standard à premium" },
                  { poste: "1 fenêtre de toit Velux + pose", budget: "1 500 – 3 000 €", finition: "Standard" },
                  { poste: "Création d'escalier d'accès", budget: "2 000 – 8 000 €", finition: "Bois à acier design" },
                  { poste: "Cloisons et plâtrerie (5 m de cloison)", budget: "1 500 – 3 500 €", finition: "Standard" },
                  { poste: "Électricité (6 points d'éclairage + prises)", budget: "1 500 – 3 500 €", finition: "Standard" },
                  { poste: "Sol (parquet ou carrelage)", budget: "2 000 – 5 000 €", finition: "Standard à premium" },
                  { poste: "Peinture murs et plafonds", budget: "1 500 – 3 000 €", finition: "Standard" },
                  { poste: "TOTAL estimé", budget: "12 500 – 30 500 €", finition: "Hors permis et structure" },
                ].map((row, i) => (
                  <tr key={row.poste} className={i % 2 === 1 ? 'bg-[#FAFAF8]' : row.poste === 'TOTAL estimé' ? 'bg-[#D4AF37]/10 font-semibold' : ''}>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.poste}</td>
                    <td className="p-3 border border-gray-200 text-[#B8960C] font-medium">{row.budget}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.finition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Check-list */}
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-10 mb-4">
            Ce qu&apos;il faut faire avant de lancer votre projet
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {[
              "Vérifier que les combles sont privatifs (titre + règlement copropriété)",
              "Mesurer la hauteur sous faîtage et la surface exploitable",
              "Commander un diagnostic structure du plancher porteur",
              "Vérifier le PLU de votre arrondissement et consulter l'ABF si besoin",
              "Déposer la déclaration préalable ou le permis de construire",
              "Obtenir l'accord de l'assemblée générale de copropriété",
              "Prévoir un budget imprévus de 10 à 15 % du montant total",
              "Choisir un maître d'oeuvre ou un interlocuteur unique pour coordonner",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{item}</span>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="font-display text-xl font-semibold text-[#1C1C1C] mt-10 mb-4">Questions fréquentes</h2>
          <div className="space-y-3">
            {schemaFAQ.mainEntity.map((faq) => (
              <div key={faq.name} className="border border-gray-200 rounded p-4">
                <p className="font-semibold text-[#1C1C1C] mb-1 text-sm">{faq.name}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-combles-paris', title: "Rénovation combles Paris" },
              { href: '/blog/amenagement-combles-perdus-paris', title: "Aménagement combles perdus Paris" },
              { href: '/blog/isolation-thermique-appartement-paris', title: "Isolation thermique appartement Paris" },
              { href: '/blog/renovation-sous-sol-paris', title: "Rénovation sous-sol Paris" },
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
        <h2 className="font-display text-3xl font-bold text-white mb-4">Aménager vos combles à Paris ?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
          Devis gratuit sous 48h — un interlocuteur unique, des artisans qualifiés, assurance décennale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors"
          >
            Devis gratuit <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"
          >
            <Phone size={16} />06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
