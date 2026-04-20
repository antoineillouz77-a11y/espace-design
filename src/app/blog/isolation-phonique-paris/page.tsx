import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Isolation Phonique Paris', item: 'https://espacedesignparis.fr/blog/isolation-phonique-paris' },
  ],
}

export const metadata: Metadata = {
  title: 'Isolation Phonique Paris : solutions, prix & artisans 2025 | Espace Design',
  description:
    'Isolation phonique appartement Paris : contre-cloisons, sols flottants, plafonds, fenêtres. Prix au m², solutions efficaces. Guide 2025.',
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Isolation Phonique Paris : solutions, prix & artisans 2025',
  description:
    'Isolation phonique appartement Paris : contre-cloisons, sols flottants, plafonds, fenêtres. Prix au m², solutions efficaces. Guide 2025.',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/isolation-phonique-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelle est la solution d\'isolation phonique la plus efficace dans un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La solution la plus efficace dépend de la source du bruit. Pour les bruits aériens entre voisins (voix, télévision), la contre-cloison désolidarisée avec laine de roche 45 mm est la référence (gain de 15 à 25 dB). Pour les bruits d\'impact du voisin du dessus (pas, chutes d\'objets), un plancher flottant avec sous-couche résiliente est incontournable (gain de 20 à 30 dB). Dans la plupart des appartements parisiens, combiner les deux donne les meilleurs résultats. Budget : 80 à 200 €/m² selon les surfaces traitées.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on isoler phoniquement son appartement sans travaux lourds à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, des solutions légères existent : pose de rideaux épais (réduction de 3 à 5 dB), joints d\'étanchéité sur les portes intérieures (réduction de 5 à 8 dB), moquette épaisse sur mousse (réduction de 8 à 12 dB pour les bruits d\'impact), calfeutrement des prises électriques et interrupteurs (pont acoustique fréquent). Ces solutions sont utiles en complément mais insuffisantes seules face à un voisinage bruyant. Pour un gain significatif (> 15 dB), les travaux structurels sont inévitables.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte l\'isolation phonique d\'un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le coût varie fortement selon les surfaces et les solutions choisies. Pour une chambre de 12 m² avec traitement des 3 parois bruyantes (1 mur + plafond + sol) : 3 000 à 7 000 €. Pour un appartement de 60 m² avec traitement complet (tous murs mitoyens + plafond + sol) : 12 000 à 30 000 €. Les postes les plus coûteux sont le plafond désolidarisé (80 à 200 €/m²) et la porte d\'entrée acoustique si elle est à remplacer (1 500 à 4 000 €). Espace Design propose un diagnostic phonique gratuit pour identifier les sources et prioriser les travaux.',
      },
    },
  ],
}

export default function ArticleIsolationPhoniqueParis() {
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

      {/* Hero article */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Isolation
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1C1C] leading-tight mb-5">
            Isolation Phonique Paris : solutions, prix &amp; artisans 2025
          </h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Vivre à Paris, c&apos;est souvent composer avec le bruit — voisins du dessus,
            mitoyens, rue, couloir d&apos;immeuble. L&apos;isolation phonique est l&apos;un des chantiers
            les plus demandés dans les appartements parisiens, et l&apos;un des plus mal compris.
            Ce guide pratique détaille les solutions réellement efficaces, poste par poste,
            avec les prix 2025 et les gains acoustiques attendus.
          </p>
        </div>
      </section>

      {/* Contenu article */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

          {/* Section 1 — Parois verticales */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Bruits des voisins mitoyens : traiter les parois verticales
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Les bruits transmis par les murs mitoyens (voix, musique, télévision) sont des
              bruits aériens. La solution la plus efficace est la contre-cloison désolidarisée :
              une nouvelle cloison est construite devant le mur existant, sans aucun contact
              rigide avec lui (ce contact est appelé pont acoustique et annule l&apos;effet isolant).
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  La contre-cloison sur ossature métallique désolidarisée
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Une ossature en rails et montants métalliques est montée à 3 cm du mur
                  existant, sans vissage dans ce mur. L&apos;espace entre les deux parois est comblé
                  par de la laine de roche (45 mm minimum, densité 45 kg/m³). Les deux faces
                  sont habillées de double plaque de plâtre (2 × 13 mm). Gain acoustique :
                  15 à 25 dB. Perte de surface au sol : 8 à 12 cm par paroi traitée.
                  Prix posé : 80 à 130 €/m².
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le complexe acoustique collé (solution légère)
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Des panneaux composites (mousse résiliente + plaque de plâtre ou OSB) sont
                  collés directement sur le mur existant. Solution moins efficace (gain de
                  8 à 12 dB) mais plus rapide à poser et moins encombrante (épaisseur
                  totale 40 à 60 mm). Adaptée aux situations où la perte de surface est
                  une contrainte forte. Prix : 50 à 90 €/m².
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Le panneau masse-ressort-masse
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Technique haute performance pour les cas difficiles (studio de musique,
                  voisin particulièrement bruyant) : deux panneaux lourds séparés par
                  une couche résiliente à masse élevée. Gain de 25 à 35 dB mais épaisseur
                  conséquente (15 à 20 cm). Prix : 150 à 250 €/m². Nécessite de refaire
                  les encadrements, prises et interrupteurs concernés.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 — Plafond */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Bruits du voisin du dessus : le plafond désolidarisé
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le bruit de pas, chutes d&apos;objets, chaises traînées — les bruits d&apos;impact transmis
              par le plancher du voisin du dessus sont les plus difficiles à traiter côté
              victime. Le seul moyen efficace est d&apos;interrompre la transmission rigide entre
              la dalle et le plafond de votre appartement.
            </p>
            <ul className="space-y-3">
              {[
                {
                  poste: 'Faux-plafond sur suspentes acoustiques',
                  fourchette: '80 à 150 €/m²',
                  detail: 'Une ossature métallique est suspendue à la dalle via des suspentes anti-vibratiles (caoutchouc ou ressort). L\'espace créé (15 à 25 cm) est rempli de laine de roche. Gain : 15 à 25 dB sur les bruits aériens, 10 à 15 dB sur les bruits d\'impact. La solution la plus courante dans les appartements parisiens.',
                },
                {
                  poste: 'Faux-plafond sur plots résilients',
                  fourchette: '120 à 200 €/m²',
                  detail: 'Plots en matériau résilient intercalés entre la dalle et l\'ossature. Plus efficace sur les basses fréquences (bruits de pas lourds, musique basse). Gain : 20 à 30 dB bruits d\'impact. Perte de hauteur sous plafond : 12 à 20 cm.',
                },
                {
                  poste: 'Plafond suspendu découplé complet',
                  fourchette: '150 à 250 €/m²',
                  detail: 'Solution haut de gamme : ossature complètement découplée de la structure, double plaque de plâtre, laine de roche haute densité, traitement des périphéries. Gain : 30 à 40 dB. Recommandé pour les chambres sur cour ou au-dessous d\'une salle de bain.',
                },
              ].map((item) => (
                <li key={item.poste} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-medium text-[#1C1C1C] text-sm">{item.poste}</div>
                    <div className="text-[#B8960C] text-sm font-medium whitespace-nowrap ml-4">{item.fourchette}</div>
                  </div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 — Sol flottant */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Bruits d&apos;impact transmis vers le bas : le plancher flottant
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Si vous êtes à l&apos;origine des bruits pour votre voisin du dessous (enfants qui
              courent, chaises, objets qui tombent), la solution est un plancher flottant —
              c&apos;est-à-dire un sol posé sur une couche résiliente qui absorbe les chocs avant
              qu&apos;ils ne se transmettent à la dalle.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Sous-couche résiliente sous parquet ou stratifié
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  La sous-couche acoustique (liège, polyuréthane expansé, mousse PE haute densité)
                  est posée directement sur la dalle, puis le parquet flottant ou stratifié
                  est clipsé par-dessus. Le sol ne doit jamais être fixé aux plinthes ou aux murs
                  (pont acoustique). Gain : 15 à 22 dB sur les bruits d&apos;impact (indice LnTw).
                  Solution la moins coûteuse : 5 à 15 €/m² pour la sous-couche seule.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Chape sèche flottante (plaques de sol)
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  Des plaques de sol (Fermacell, Knauf, Rigidur) sont posées sur une couche
                  de granulés de liège ou de laine de roche. Le tout repose sans fixation sur
                  la dalle. Solution plus épaisse (5 à 8 cm) mais compatible avec tous les
                  revêtements (carrelage, parquet, béton ciré) et très performante : gain
                  de 22 à 30 dB. Prix : 50 à 90 €/m² posé.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-2">
                  Chape béton flottante sur résilient
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  La chape béton (5 à 7 cm d&apos;épaisseur) est coulée sur une membrane résiliente
                  (laine de roche 25 mm ou mousse acoustique haute densité) avec relevés
                  périphériques pour éviter tout contact avec les murs. Solution la plus lourde
                  et la plus durable, avec un gain de 25 à 35 dB. À réserver aux projets de
                  rénovation complète car le temps de séchage est long (4 à 6 semaines).
                  Prix : 60 à 120 €/m².
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 — Fenêtres */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Bruits extérieurs : fenêtres et vitrages acoustiques
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Pour les appartements parisiens sur boulevard, avenue ou rue passante, le bruit
              de la circulation est souvent la source principale. Les fenêtres sont le
              maillon faible de l&apos;enveloppe phonique.
            </p>
            <ul className="space-y-3">
              {[
                {
                  flag: 'Vitrage feuilleté acoustique (remplacement du verre seul)',
                  detail: 'Si le châssis est en bon état, le remplacement du seul vitrage par un verre feuilleté asymétrique (ex: 6/16/44.2 mm) peut suffire. Gain : 10 à 15 dB. Prix : 150 à 400 € par vantail selon la taille.',
                },
                {
                  flag: 'Fenêtres double vitrage acoustique PVC ou aluminium',
                  detail: 'Remplacement complet du châssis par une fenêtre à rupture de pont thermique et vitrage acoustique feuilleté. Gain : 35 à 42 dB (classement AR 4 ou 5). Prix : 800 à 2 500 € par fenêtre posée selon la taille et le matériau.',
                },
                {
                  flag: 'Survitrage intérieur (solution locative)',
                  detail: 'Un second vitrage est posé en applique à l\'intérieur du châssis existant, créant une lame d\'air supplémentaire. Solution sans travaux lourds, compatible avec un bail locatif. Gain : 8 à 20 dB selon la lame d\'air. Prix : 300 à 800 € par fenêtre.',
                },
                {
                  flag: 'Calfeutrement des joints et coulisses',
                  detail: 'Les joints d\'étanchéité usés ou absents sont la première cause de déperdition acoustique sur les fenêtres existantes. Le simple remplacement des joints (10 à 30 € par fenêtre) peut apporter 3 à 8 dB de gain supplémentaire à coût quasi nul.',
                },
              ].map((item) => (
                <li key={item.flag} className="flex gap-3">
                  <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#1C1C1C] text-sm font-medium">{item.flag} : </span>
                    <span className="text-gray-600 text-sm font-light">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5 — Portes */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Portes acoustiques et traitement des points singuliers
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Une isolation phonique de qualité peut être annulée par des points de faiblesse
              souvent négligés : porte d&apos;entrée insuffisante, prises électriques dos à dos,
              passages de gaines. Ces détails font souvent la différence entre un résultat
              correct et un résultat exceptionnel.
            </p>
            <ul className="space-y-3">
              {[
                {
                  poste: 'Porte d\'entrée acoustique',
                  fourchette: '1 500 à 4 000 €',
                  detail: 'Une porte d\'entrée classique offre 25 à 30 dB. Une porte acoustique certifiée (Rw ≥ 42 dB) est indispensable si le palier ou l\'escalier est bruyant. Joint périphérique, bas de porte automatique, encadrement jointif : aucun pont acoustique ne doit subsister.',
                },
                {
                  poste: 'Portes intérieures acoustiques',
                  fourchette: '400 à 900 € par porte',
                  detail: 'Les portes intérieures standard (creux, 25 à 28 dB) ne protègent pas des bruits d\'une pièce à l\'autre. Des portes pleines avec joint périphérique (Rw ≥ 38 dB) réduisent significativement les bruits de la vie courante. Indispensable pour les chambres en appartement familial.',
                },
                {
                  poste: 'Traitement des boîtes électriques (prises, interrupteurs)',
                  fourchette: '20 à 50 € par point',
                  detail: 'Les boîtes électriques encastrées dans les murs créent des ponts acoustiques importants. Des membranes acoustiques (type Isover Vario KM Duplex ou équivalent) sont posées dans ou autour de chaque boîte. Opération rapide mais souvent oubliée.',
                },
                {
                  poste: 'Traitement des passages de gaines et canalisations',
                  fourchette: 'Sur devis',
                  detail: 'Les tuyaux de plomberie transmettent les bruits d\'eau et de chasse d\'eau dans tout l\'immeuble. Un manchonnage des tuyaux et le colmatage des passages de gaines avec un mastic acoustique réduisent significativement ces bruits structurels.',
                },
              ].map((item) => (
                <li key={item.poste} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-medium text-[#1C1C1C] text-sm">{item.poste}</div>
                    <div className="text-[#B8960C] text-sm font-medium whitespace-nowrap ml-4">{item.fourchette}</div>
                  </div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.detail}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-6">
              Questions fréquentes — Isolation phonique Paris
            </h2>
            <div className="space-y-4">
              {schemaFaq.mainEntity.map((item) => (
                <div key={item.name} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{item.name}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{item.acceptedAnswer.text}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/isolation-paris', title: 'Isolation Paris — Espace Design' },
              { href: '/blog/isolation-acoustique-appartement-paris', title: 'Isolation acoustique appartement Paris — guide 2025' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris — guide 2025' },
              { href: '/blog/renovation-cave-paris', title: 'Rénovation cave Paris — guide 2025' },
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
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Nos zones d&apos;intervention</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-paris-19e', label: 'Paris 19e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
              { href: '/renovation-pantin', label: 'Pantin' },
              { href: '/renovation-bagnolet', label: 'Bagnolet' },
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
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Problèmes d&apos;isolation phonique ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Diagnostic gratuit et devis détaillé sous 48h. Déplacement sans engagement dans tout Paris et petite couronne.
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
