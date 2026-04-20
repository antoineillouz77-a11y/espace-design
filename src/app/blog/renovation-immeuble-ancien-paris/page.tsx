import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Immeuble Ancien Paris', item: 'https://espacedesignparis.fr/blog/renovation-immeuble-ancien-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Immeuble Ancien Paris : contraintes, ABF & prix 2025',
  description: 'Rénover un appartement dans un immeuble ancien à Paris : contraintes ABF, planchers en bois, murs porteurs, isolation. Prix et guide 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-immeuble-ancien-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Pourquoi la rénovation d\'un immeuble ancien parisien coûte-t-elle plus cher ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La rénovation d\'un appartement dans un immeuble ancien parisien coûte généralement 20 à 40 % plus cher qu\'une rénovation en construction neuve pour plusieurs raisons : les planchers en bois anciens nécessitent un diagnostic de solidité et parfois un renforcement structurel (1 000 – 5 000 €), les murs en pierre ou en moellon ne permettent pas une isolation par l\'extérieur (seule l\'isolation intérieure est possible), la plomberie et l\'électricité vétustes doivent être entièrement refaites aux normes actuelles, et les éventuels tuyaux en plomb imposent un remplacement réglementé. À cela s\'ajoutent les contraintes ABF (Architectes des Bâtiments de France) pour toute modification de façade ou de fenêtres.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qu\'est-ce que les contraintes ABF et comment s\'appliquent-elles à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les Architectes des Bâtiments de France (ABF) protègent le patrimoine architectural des quartiers classés ou sauvegardés. À Paris, la quasi-totalité des immeubles haussmanniens est concernée. Concrètement, toute modification visible depuis la rue (remplacement de fenêtres, ravalement, pose de volets, création ou suppression d\'ouvertures, installation de panneaux solaires ou de climatiseurs en façade) doit recevoir un avis conforme de l\'ABF avant dépôt du permis ou de la déclaration préalable en mairie. L\'avis conforme est contraignant : si l\'ABF s\'y oppose, les travaux ne peuvent pas être réalisés. Les fenêtres doivent correspondre aux modèles d\'époque (bois blanc ou gris, proportions respectées).',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment isoler un appartement dans un immeuble ancien parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dans un immeuble ancien parisien, l\'isolation par l\'extérieur (ITE) est systématiquement refusée par les ABF. L\'isolation par l\'intérieur (ITI) est la seule solution : doublage des murs avec laine de roche ou laine de verre sur ossature métallique (perte de 8 à 15 cm par mur traité), ou isolant mince collé directement sur les murs (perte de 2 à 4 cm, performance moindre). Pour les planchers : sous-couche résiliente sous parquet pour les bruits d\'impact, et laine de verre soufflée entre plancher et faux-plafond suspendu. Budget isolation complet d\'un 50 m² parisien : 8 000 – 20 000 €.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Immeuble Ancien Paris : contraintes, ABF & prix 2025',
  description: 'Rénover un appartement dans un immeuble ancien à Paris : contraintes ABF, planchers en bois, murs porteurs, isolation. Prix et guide 2025.',
}

export default function ArticleRenovationImmeubleAncien() {
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
            Aménagement
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Immeuble Ancien Paris : contraintes, ABF &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Rénover un appartement dans un immeuble haussmannien ou un bâtiment ancien parisien est un projet à part entière : contraintes ABF, planchers en bois à consolider, murs en pierre, plomberie et électricité vétustes, éventuels matériaux dangereux (plomb, amiante). Guide complet des spécificités, contraintes réglementaires et prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Contraintes ABF */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Contraintes ABF : ce que vous pouvez et ne pouvez pas faire
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Les Architectes des Bâtiments de France exercent une tutelle sur les travaux affectant l&apos;aspect extérieur des immeubles situés dans les secteurs sauvegardés ou à proximité des monuments historiques. À Paris, la majorité des arrondissements centraux est concernée, couvrant une grande partie du parc immobilier haussmannien.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Remplacement des fenêtres et double vitrage',
                  detail: 'Les fenêtres en PVC blanc ou gris anthracite sont systématiquement refusées dans la plupart des secteurs parisiens sous contrôle ABF. Seules les fenêtres en bois peint (blanc ou gris, selon le secteur) aux proportions identiques aux fenêtres d\'origine sont autorisées. Le double vitrage est possible mais uniquement avec des profils fin imitant le simple vitrage d\'époque (profil 28 mm maximum dans certains secteurs). Budget remplacement fenêtre avec avis ABF : 1 200 – 2 500 € par fenêtre.',
                },
                {
                  enjeu: 'Ravalement et modification de façade',
                  detail: 'Tout ravalement de façade, même à l\'identique, nécessite une déclaration préalable avec accord ABF. Les couleurs sont imposées (souvent ocre, beige pierre, blanc cassé selon le quartier). L\'ajout d\'une isolation extérieure (ITE) est quasi systématiquement refusé en raison de la modification de l\'aspect de la façade et de l\'altération du profil des fenêtres et moulures.',
                },
                {
                  enjeu: 'Climatiseurs, panneaux solaires et équipements techniques',
                  detail: 'L\'installation d\'une unité extérieure de climatisation en façade sur rue est refusée par les ABF. En façade sur cour, une autorisation est parfois accordée selon les immeubles et les copropriétés. Les panneaux solaires sont autorisés uniquement sur des toitures non visibles depuis la voie publique, en toiture terrasse technique. La VMC double flux avec prise d\'air en façade peut nécessiter un accord.',
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

      {/* Section 2 — Planchers bois anciens */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Planchers en bois anciens : diagnostic et renforcement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les immeubles construits avant 1950 à Paris ont quasi systématiquement des planchers en bois (solives en chêne ou en sapin, revêtement de parquet cloué). Ces planchers sont souvent en bon état structurel, mais ils nécessitent un diagnostic avant tous travaux lourds — redistribution de pièces, ajout de cloisons, pose d&apos;une cuisine équipée ou d&apos;une salle de bain.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Diagnostic de solidité',
                solution: 'Inspection visuelle et sondages des solives depuis le dessous (cave ou appartement du dessous avec accord). Vérification de l\'absence de pourrissement, de champignons (mérule) ou d\'attaques d\'insectes xylophages (capricornes, vrillettes). Un rapport d\'expert bois est recommandé avant une rénovation lourde.',
                cout: '300 – 800 €',
              },
              {
                titre: 'Traitement des solives (insectes, champignons)',
                solution: 'Injection de produit insecticide/fongicide sous pression dans les solives atteintes. Traitement de surface des zones contaminées. En cas d\'attaque de mérule (champignon lignivore), traitement renforcé et remplacement des solives trop dégradées.',
                cout: '50 – 150 €/m²',
              },
              {
                titre: 'Renforcement structurel (doublage des solives)',
                solution: 'En cas de plancher insuffisamment rigide pour les charges prévues (cuisine équipée, bibliothèque murale lourde, cloisons), doublage des solives existantes par des solives neuves boulonnées. Opération réalisée depuis l\'appartement du dessous ou par ouverture du plafond.',
                cout: '150 – 400 €/ml de solive',
              },
              {
                titre: 'Remplacement d\'une ou plusieurs solives',
                solution: 'Si des solives sont trop dégradées pour être traitées, remplacement par des solives neuves en chêne ou en IPN métallique (pour les ouvertures larges). Opération complexe nécessitant l\'accord de la copropriété si elle touche aux parties communes.',
                cout: '500 – 2 000 €/solive',
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

      {/* Section 3 — Murs en pierre et isolation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Murs en pierre et isolation par l&apos;intérieur
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les murs en pierre calcaire ou en moellon des immeubles parisiens anciens présentent un comportement thermique particulier : leur inertie importante amortit les variations de température, mais leur coefficient d&apos;isolation (R) est faible. L&apos;isolation par l&apos;extérieur étant refusée par les ABF, l&apos;isolation par l&apos;intérieur (ITI) est la seule option.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Doublage sur ossature métallique (laine minérale)',
                detail: 'Technique la plus courante : ossature acier désolidarisée du mur (pour éviter les ponts thermiques), remplissage laine de roche ou laine de verre 45 – 100 mm, parement plaque de plâtre BA13. Perte de place : 8 à 15 cm par mur traité. Avantage : possibilité d\'intégrer les gaines électriques et les réseaux dans l\'épaisseur du doublage.',
                cout: '60 – 120 €/m²',
              },
              {
                type: 'Isolant rigide collé (polystyrène expansé, polyuréthane)',
                detail: 'Panneaux isolants rigides collés directement sur la pierre. Perte de place réduite (4 – 8 cm), mais performance thermique moindre que le doublage ossature. Nécessite un enduit de finition ou une plaque de plâtre en finition. Risque de condensation si mal réalisé (pont de vapeur à traiter).',
                cout: '40 – 80 €/m²',
              },
              {
                type: 'Isolation mince réfléchissante',
                solution: 'Produits controversés — leur performance réelle est très inférieure aux allégations marketing. Non reconnue par les normes françaises pour le calcul thermique (non conforme RE2020). À proscrire comme isolation principale. Peut être utilisée en complément, jamais seule.',
                cout: '20 – 40 €/m²',
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail ?? (el as { type: string; solution?: string; detail?: string; cout: string }).solution}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#1C1C1C] rounded-lg p-5">
            <p className="text-white text-sm font-light leading-relaxed">
              <span className="text-[#D4AF37] font-medium">Point de vigilance : </span>
              Dans un mur en pierre, la vapeur d&apos;eau migre de l&apos;intérieur vers l&apos;extérieur. Un isolant posé sans pare-vapeur correctement traité peut créer un point de condensation dans la paroi, provoquant des moisissures. Toujours confier l&apos;isolation d&apos;un mur en pierre à un artisan expérimenté en rénovation de l&apos;ancien.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — Plomberie et électricité vétustes */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Plomberie et électricité vétustes : mise aux normes obligatoire
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            Dans les immeubles parisiens construits avant 1970, les réseaux d&apos;eau et d&apos;électricité sont souvent hors normes. Leur remplacement est obligatoire lors d&apos;une rénovation complète et représente l&apos;un des postes de dépense les plus importants du chantier.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Tuyaux en plomb (eau potable)',
                solution: 'La présence de tuyaux en plomb pour l\'eau potable est interdite depuis 1995 en France (directive européenne). Dans les immeubles anciens, les colonnes montantes en plomb relèvent de la copropriété. Les branchements intérieurs à l\'appartement sont à la charge du propriétaire. Remplacement par tuyaux en cuivre ou multicouche PER.',
                cout: '3 000 – 8 000 €',
              },
              {
                titre: 'Mise aux normes électricité (NF C 15-100)',
                solution: 'Les installations électriques antérieures à 1975 ne répondent pas à la norme NF C 15-100 en vigueur. Une rénovation électrique complète comprend : tableau électrique neuf avec différentiel 30 mA, circuits dédiés (plaques, lave-linge, lave-vaisselle, chauffe-eau), prises de terre sur tous les circuits, circuit dédié salle de bain.',
                cout: '5 000 – 15 000 €',
              },
              {
                titre: 'Présence d\'amiante (matériaux avant 1997)',
                solution: 'Dans les immeubles construits avant 1997, plusieurs matériaux peuvent contenir de l\'amiante : dalles de sol en vinyle, colle de carrelage, faux-plafonds, flocage de tuyaux, joints. Un diagnostic amiante avant travaux (DAT) est obligatoire. Le désamiantage est réglementé et réservé à des entreprises certifiées.',
                cout: 'Diagnostic 500 – 1 500 € / Désamiantage variable',
              },
              {
                titre: 'Présence de plomb dans les peintures (avant 1948)',
                solution: 'Un constat de risque d\'exposition au plomb (CREP) est obligatoire lors de toute vente d\'un logement construit avant 1949. Pour les travaux, si les peintures contiennent du plomb à une concentration supérieure au seuil réglementaire, des mesures de protection spécifiques s\'imposent (confinement, équipement de protection individuelle, élimination des déchets comme déchets dangereux).',
                cout: 'CREP 150 – 400 € / Travaux variable',
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

      {/* Section 5 — Budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget rénovation immeuble ancien parisien : récapitulatif des prix 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les surcoûts spécifiques à la rénovation dans l&apos;ancien à Paris, par rapport à une rénovation standard, sont estimés à +20 à +40 % selon l&apos;état du bâti.
          </p>

          <div className="mb-8">
            <div className="grid grid-cols-3 gap-0 bg-[#1C1C1C] rounded-t-lg">
              <div className="px-4 py-3 text-white text-xs font-light uppercase tracking-wider">Poste de travaux</div>
              <div className="px-4 py-3 text-white text-xs font-light uppercase tracking-wider text-center">Prix indicatif</div>
              <div className="px-4 py-3 text-white text-xs font-light uppercase tracking-wider text-center">Surcoût ancien</div>
            </div>
            {[
              { poste: 'Rénovation électricité complète', prix: '5 000 – 15 000 €', surcout: '+20 – 40 %', even: true },
              { poste: 'Remplacement plomberie (tuyaux plomb)', prix: '3 000 – 8 000 €', surcout: '+30 – 50 %', even: false },
              { poste: 'Isolation par l\'intérieur (100 m²)', prix: '8 000 – 20 000 €', surcout: '+15 – 30 %', even: true },
              { poste: 'Diagnostic et traitement plancher bois', prix: '2 000 – 8 000 €', surcout: 'Spécifique ancien', even: false },
              { poste: 'Remplacement fenêtres (ABF, bois)', prix: '1 200 – 2 500 €/fenêtre', surcout: '+40 – 60 % vs PVC', even: true },
              { poste: 'Rénovation complète 60 m² (ancien)', prix: '80 000 – 150 000 €', surcout: '+20 – 40 % vs neuf', even: false },
            ].map((row) => (
              <div key={row.poste} className={`grid grid-cols-3 gap-0 border-b border-gray-100 ${row.even ? 'bg-white' : 'bg-[#FAFAF8]'}`}>
                <div className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.poste}</div>
                <div className="px-4 py-3 text-center text-[#B8960C] font-medium text-sm">{row.prix}</div>
                <div className="px-4 py-3 text-center text-gray-600 font-light text-sm">{row.surcout}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour bien préparer sa rénovation dans l&apos;ancien parisien
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Commander les diagnostics obligatoires avant travaux (amiante, plomb, DPE, état de l\'installation électrique)',
                'Consulter un architecte ou un maître d\'œuvre expérimenté dans la rénovation de l\'ancien parisien',
                'Contacter la mairie d\'arrondissement ou l\'ABF dès la conception pour valider les modifications extérieures',
                'Prévoir 15 % de budget supplémentaire pour les imprévus (fréquents dans l\'ancien)',
                'Ne pas négliger le diagnostic structurel des planchers avant de modifier la distribution des pièces',
                'Anticiper les délais d\'instruction des autorisations ABF (2 à 4 mois en moyenne)',
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
              { href: '/renovation-paris', title: 'Rénovation appartement Paris' },
              { href: '/electricite-paris', title: 'Électricité Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/domotique-renovation-paris', title: 'Domotique rénovation Paris' },
              { href: '/blog/renovation-complete-appartement-paris', title: 'Rénovation complète appartement Paris' },
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
          Rénovation d&apos;immeuble ancien à Paris — artisans expérimentés
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Maîtrise des contraintes ABF et spécificités du bâti ancien parisien.
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
