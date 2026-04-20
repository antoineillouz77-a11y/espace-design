import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "Isolation Phonique Appartement Paris : solutions, prix & artisan 2025",
  description: "Réduire les bruits dans un appartement parisien : bruits aériens vs impact, réglementation acoustique 1969, doublage murs, faux-plafond, sol flottant. Prix au m² 2025.",
  keywords: ["isolation phonique appartement Paris", "isolation acoustique Paris", "bruit voisins Paris", "doublage mur acoustique Paris", "artisan isolation Paris"],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Isolation Phonique Appartement Paris : solutions, prix & artisan 2025",
  description: "Réduire les bruits dans un appartement parisien : bruits aériens vs impact, réglementation acoustique 1969, doublage murs, faux-plafond, sol flottant. Prix au m² 2025.",
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
      name: "Quelle isolation phonique pour appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le choix depend du type de bruit : pour les bruits d'impact (pas du voisin du dessus), le faux-plafond suspendu avec suspentes antivibratiles est la solution la plus efficace depuis votre appartement. Pour les bruits aériens (voix, musique depuis un mur mitoyen), le doublage interieur avec laine de roche haute densité (60 kg/m³ minimum) et placo est recommandé. Pour réduire les bruits que vous transmettez au voisin du dessous, une sous-couche acoustique haute densité sous votre sol est la première étape. Dans un haussmannien, les murs en pierre épaisse sont déjà bons acoustiquement : priorité aux planchers bois et aux cloisons légères.",
      },
    },
    {
      '@type': 'Question',
      name: "Prix isolation phonique Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À Paris en 2025, les prix d'une isolation phonique d'appartement sont les suivants : sous-couche acoustique sol 8 à 25 €/m², doublage mur mitoyen (placo + laine de roche) 80 à 150 €/m², faux-plafond suspendu acoustique 60 à 120 €/m², remplacement fenêtres en double vitrage acoustique 400 à 900 € par fenêtre. Une isolation phonique complète d'un appartement de 50 m² (sol + murs + plafond) représente un budget de 8 000 à 20 000 € selon les solutions choisies et l'état existant.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il l'accord du syndic ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour des travaux d'isolation phonique strictement intérieurs à votre lot privatif (doublage mur intérieur, faux-plafond, sous-couche sol), l'accord du syndic n'est pas obligatoire mais votre règlement de copropriété peut imposer des contraintes acoustiques. Si les travaux touchent des parties communes (percement de plancher, modification de cloisons porteuses) ou modifient l'aspect extérieur (fenêtres), l'accord de l'assemblée générale est requis. Le remplacement de fenêtres dans un immeuble haussmannien nécessite souvent un accord du syndic pour conserver l'harmonie architecturale de la façade.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle réduction en décibels attendue ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les gains acoustiques réalistes par solution sont les suivants : sous-couche acoustique sol haute densité : 18 à 22 dB sur les bruits d'impact. Doublage mur (laine de roche 60 mm + double placo) : 30 à 40 dB sur les bruits aériens. Faux-plafond avec suspentes antivibratiles : 8 à 15 dB sur les bruits d'impact, 10 à 20 dB sur les bruits aériens. Double vitrage acoustique Rw 38 dB : 10 à 20 dB supplémentaires sur les bruits extérieurs. À titre de référence, 10 dB de gain divisent par 2 la sensation sonore perçue par l'oreille humaine.",
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
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Isolation</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Isolation Phonique Appartement Paris : réduire les bruits efficacement
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-2xl mx-auto">
            Bruits d&apos;impact, bruits aériens, nuisances de voisinage : guide complet des solutions d&apos;isolation acoustique pour appartement parisien, avec les réglementations en vigueur et les prix au m² 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de bruits */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Bruits aériens vs bruits d&apos;impact : identifier la source pour mieux traiter
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Avant tout travaux, il est indispensable de qualifier précisément le type de bruit qui vous gêne. Un doublage de mur efficace contre les voix ne changera rien aux pas du voisin du dessus. Chaque type de bruit a sa voie de transmission et sa solution propre.
          </p>
          <div className="space-y-4">
            {[
              {
                type: "Bruits aériens (voix, musique, télévision)",
                transmission: "Via l'air à travers les parois",
                solution: "Doublage intérieur des murs avec laine de roche haute densité + double placo, désolidarisé de la structure. Traitement des jonctions et des points singuliers (prises électriques, passages de gaines). Gain possible : 30 à 40 dB sur un mur mitoyen correctement traité.",
              },
              {
                type: "Bruits d'impact (pas, chaises, objets tombés)",
                transmission: "Via la structure solide du bâtiment (plancher, dalles, murs porteurs)",
                solution: "Traitement à la source : sous-couche résiliente haute densité sous le sol chez l'émetteur. Depuis votre appartement : faux-plafond suspendu avec suspentes antivibratiles. La chape flottante est la solution maximale (25 à 35 dB) mais implique 10 à 15 cm de surélévation.",
              },
              {
                type: "Bruits d'équipements (tuyaux, VMC, ascenseur)",
                transmission: "Via les fixations et la structure (vibrations mécaniques)",
                solution: "Calorifugeage des canalisations, manchons antivibratiles sur les points de fixation, remplacement des robinets à clapet par des robinets à boisseau sphérique silencieux. Ces interventions sont souvent à la charge de la copropriété si l'équipement est en partie commune.",
              },
              {
                type: "Bruits extérieurs (trafic, travaux, commerce)",
                transmission: "Via les fenêtres et les menuiseries (point faible principal)",
                solution: "Remplacement des fenêtres simple vitrage par du double vitrage acoustique (Rw ≥ 36 dB) ou pose d'un survitrage intérieur (sans travaux lourds, gain de 8 à 15 dB). Les façades en pierre haussmannienne sont naturellement efficaces ; la faiblesse est toujours au niveau des menuiseries.",
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.type}</div>
                <div className="text-[10px] text-gray-400 font-light uppercase tracking-wider mb-2">Transmission : {el.transmission}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.solution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Réglementation acoustique Paris */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Réglementation acoustique Paris : l&apos;arrêté de 1969 et les copropriétés
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La réglementation acoustique dans les immeubles anciens parisiens est encadrée par plusieurs textes. Les connaître vous protège en cas de litige et vous permet de savoir ce que vous pouvez exiger.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Arrêté du 14 juin 1969",
                description: "Ce texte fondateur fixe les niveaux d'isolement acoustique minimaux pour les logements construits entre 1970 et 1994. Il impose notamment un isolement aux bruits aériens DnT,A ≥ 53 dB entre logements et un niveau de bruit d'impact Ln,w ≤ 58 dB. Les immeubles parisiens antérieurs à 1970 (haussmanniens, années 50-60) ne sont pas soumis à ces exigences mais peuvent y être comparés.",
                tag: "Référence historique",
              },
              {
                titre: "Norme NRA (1994) pour le neuf",
                description: "La Nouvelle Réglementation Acoustique de 1994 renforce les exigences pour les constructions neuves et réhabilitations lourdes. Elle est plus stricte que l'arrêté de 1969 sur les bruits d'équipements (≤ 30 dB dans les pièces de vie) et introduit la notion d'isolement standardisé pondéré. Elle ne s'applique pas rétroactivement aux immeubles anciens.",
                tag: "Neuf et réhabilitation lourde",
              },
              {
                titre: "Règlement de copropriété",
                description: "La plupart des règlements de copropriété parisiens comportent une clause acoustique imposant une sous-couche isolante lors de tout changement de revêtement de sol. Violer cette clause expose à une mise en demeure et une obligation de remise en état. Vérifiez votre règlement avant tout chantier sol.",
                tag: "Obligation contractuelle",
              },
              {
                titre: "Recours en cas de nuisance persistante",
                description: "Si un voisin génère des nuisances : courrier recommandé, saisine du syndic, plainte en mairie (bureau de la tranquillité publique), constat d'huissier. Une mesure acoustique par un bureau d'étude agréé (300 à 800 €) objectivise le problème et est indispensable pour une procédure judiciaire.",
                tag: "Procédure",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.tag}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Solutions techniques */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Solutions techniques : doublage murs, faux-plafond, sol flottant
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les solutions acoustiques performantes reposent sur deux principes : la masse (plus une paroi est lourde et dense, moins le son la traverse) et la désolidarisation (interrompre les ponts vibratoires entre deux structures).
          </p>
          <div className="space-y-5">
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">
                Doublage murs : isolation des bruits aériens
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed mb-3">
                Le doublage intérieur est la technique de référence pour les murs mitoyens. L&apos;ossature acier est montée sur rails antivibratiles désolidarisés de la dalle, la laine de roche haute densité (60 à 100 kg/m³, 45 à 100 mm) est intégrée dans l&apos;ossature, et deux couches de placo 12,5 mm sont posées. Gain : 30 à 40 dB. Perte de surface : 7 à 12 cm par mur traité. Traiter impérativement les jonctions sol/mur et plafond/mur pour éviter les ponts acoustiques.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">
                Faux-plafond suspendu : isolation des bruits d&apos;impact du dessus
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed mb-3">
                Le faux-plafond acoustique est la solution pour réduire les bruits d&apos;impact du voisin du dessus depuis votre appartement. Les suspentes antivibratiles (Résiflex, Isotec) désolidarisent mécaniquement l&apos;ossature du plancher existant. La laine de roche 60 à 100 mm est placée entre les solives, deux couches de placo 12,5 mm ferment. Gain : 8 à 15 dB impact, 10 à 20 dB aérien. Perte de hauteur : 10 à 15 cm.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">
                Sol flottant : réduire les bruits transmis au dessous
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed mb-3">
                La sous-couche acoustique haute densité (polyuréthane 15-25 kg/m³, 5 à 8 mm) posée sous parquet flottant ou stratifié est la solution la plus simple et la moins coûteuse. Gain : 18 à 22 dB sur les bruits d&apos;impact. Pour un résultat maximal, la chape flottante (dalle béton ou anhydrite sur couche résiliente, sans contact avec les murs) atteint 25 à 35 dB mais ajoute 10 à 15 cm de hauteur de sol — problématique dans les appartements parisiens aux plafonds limités.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Prix au m² */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix isolation phonique Paris 2025 : tableau récapitulatif
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs indicatifs main d&apos;oeuvre + matériaux pour un artisan qualifié à Paris, hors travaux préparatoires.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Solution</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Gain dB</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Cible</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { solution: 'Sous-couche acoustique sol', prix: '8 – 25 €/m²', gain: '18 – 22 dB', cible: 'Impact' },
                  { solution: 'Chape flottante', prix: '40 – 80 €/m²', gain: '25 – 35 dB', cible: 'Impact' },
                  { solution: 'Doublage mur mitoyen', prix: '80 – 150 €/m²', gain: '30 – 40 dB', cible: 'Aérien' },
                  { solution: 'Faux-plafond acoustique', prix: '60 – 120 €/m²', gain: '8 – 15 dB', cible: 'Impact + aérien' },
                  { solution: 'Survitrage intérieur', prix: '200 – 500 €/fen.', gain: '8 – 15 dB', cible: 'Extérieur' },
                  { solution: 'Double vitrage acoustique', prix: '400 – 900 €/fen.', gain: '10 – 20 dB', cible: 'Extérieur' },
                  { solution: 'Isolation complète 50 m²', prix: '8 000 – 20 000 €', gain: 'Globale', cible: 'Tous types' },
                ].map((row, i) => (
                  <tr key={row.solution} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.solution}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.gain}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.cible}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Traiter en priorité le plancher bois dans les immeubles haussmanniens (point faible majeur)",
              "Vérifier le règlement de copropriété avant tout changement de revêtement de sol",
              "Ne pas oublier les jonctions mur/sol et mur/plafond lors d'un doublage (ponts acoustiques)",
              "Privilégier la laine de roche haute densité (60 kg/m³ min.) plutôt que la laine thermique classique",
              "Les suspentes antivibratiles sont indispensables pour un faux-plafond acoustique efficace",
              "Contacter le syndic avant tous travaux touchant les parties communes ou modifiant la structure",
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
              { href: '/isolation-paris', title: 'Isolation Paris — Espace Design' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/faux-plafond-paris', title: 'Faux-plafond Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien' },
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
          Améliorer l&apos;isolation phonique de votre appartement
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Diagnostic gratuit. Solutions sur-mesure pour votre configuration. Devis sous 48h.
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
