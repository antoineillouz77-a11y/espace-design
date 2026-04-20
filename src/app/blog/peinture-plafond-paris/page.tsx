import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Peinture Plafond Paris', item: 'https://espacedesignparis.fr/blog/peinture-plafond-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Peinture Plafond Paris : blanc mat, rosace & prix 2025 | Espace Design',
  description: 'Peindre son plafond à Paris : préparation, peinture blanc mat, plafond tendu, rosace décorative. Prix au m² et artisan peintre 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/peinture-plafond-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix pour peindre un plafond à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix pour peindre un plafond à Paris varie entre 8 et 25 €/m² selon l'état de surface et le type de peinture. Pour un appartement haussmannien avec fissures, il faut prévoir 150 à 400 € de préparation (rebouchage, enduit, ponçage) avant application. Une pièce de 20 m² revient en général à 400 – 800 € main d'œuvre et matériaux inclus.",
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il choisir une peinture mate ou satinée pour un plafond ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La peinture mate est presque toujours recommandée pour les plafonds : elle absorbe la lumière, efface les imperfections et ne produit pas de reflets. Le satiné est réservé aux plafonds parfaitement plans (rare dans l'ancien parisien) car il révèle chaque défaut. Pour les pièces humides (salle de bain, cuisine), une peinture mat lessivable ou satinée microporeuse est préférable pour résister à la vapeur.",
      },
    },
    {
      '@type': 'Question',
      name: 'Plafond tendu ou peinture classique : que choisir à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le plafond tendu (PVC ou tissu) est idéal pour masquer un plafond très dégradé, des câbles électriques ou des traces d'humidité importantes. Il coûte entre 20 et 55 €/m² posé, mais ne peut pas être décaissé ou peint par la suite. La peinture classique reste moins chère (8 à 25 €/m²) et préserve la hauteur sous plafond — précieuse dans les appartements parisiens. Pour un plafond en bon état ou légèrement abîmé, la peinture est presque toujours préférable.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Peinture Plafond Paris : blanc mat, rosace & prix 2025 | Espace Design',
  description: 'Peindre son plafond à Paris : préparation, peinture blanc mat, plafond tendu, rosace décorative. Prix au m² et artisan peintre 2025.',
}

export default function ArticlePeinturePlafondParis() {
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
            Peinture
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Peinture Plafond Paris : blanc mat, rosace &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le plafond est la surface la plus visible d&apos;une pièce, pourtant la plus négligée lors d&apos;une rénovation. À Paris, les plafonds haussmanniens présentent souvent fissures, décollements de peinture et moulures à remettre en valeur. Guide complet pour réussir la peinture de votre plafond en 2025 : préparation, types de peinture, application, rosaces décoratives et prix au m².
          </p>
        </div>
      </section>

      {/* Section 1 — Préparation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Préparation du plafond : rebouchage, ponçage et enduit
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La qualité du résultat final dépend à 80 % de la qualité de la préparation. Un plafond parisien ancien présente fréquemment des fissures, des cloques, des traces d&apos;humidité anciennes ou des auréoles dues à des fuites. Peindre sans préparer ne fait que recouvrir provisoirement ces défauts.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La préparation suit toujours le même ordre : dégraissage, rebouchage des fissures et trous, séchage, ponçage, dépoussiérage, application d&apos;un primaire d&apos;accrochage si nécessaire. Ne pas sauter une étape.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Traitement des fissures fines',
                  detail: 'Élargir légèrement la fissure en V au cutter ou à la spatule, dépoussiérer, appliquer un enduit de rebouchage acrylique, lisser et laisser sécher 24h. Poncer ensuite au grain 120 avant peinture. Cette étape est souvent sous-estimée et génère des reprises coûteuses.',
                },
                {
                  enjeu: 'Traitement des fissures larges ou lézardes',
                  detail: 'Pour les fissures de plus de 2 mm ou les lézardes structurelles, poser une bande à enduire (armée) avant l\'application d\'enduit. Si les fissures sont nombreuses et récurrentes, un doublage complet au plâtre ou en plaque de plâtre peut s\'avérer plus économique sur le long terme.',
                },
                {
                  enjeu: 'Plafond avec traces d\'humidité',
                  detail: 'Avant de peindre, s\'assurer que la source de l\'humidité est traitée (fuite réparée, condensation résolue). Appliquer ensuite un traitement anti-humidité ou un primaire isolant. Sans cette étape, les auréoles réapparaissent en quelques mois malgré plusieurs couches de peinture.',
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

      {/* Section 2 — Types de peinture */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Choisir la bonne peinture pour son plafond à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tous les plafonds ne se peignent pas de la même façon. Le type de peinture conditionne le rendu visuel, la durabilité et la capacité à masquer les imperfections. À Paris, les plafonds hauts des appartements anciens demandent des peintures à fort pouvoir couvrant pour réduire le nombre de passes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Blanc mat opaque',
                detail: 'La référence absolue pour les plafonds. Absorbe la lumière, efface les imperfections mineures, donne une finition propre et intemporelle. Convient à tous les styles, du haussmannien au contemporain. Entretien facile avec passage humide doux.',
                usage: 'Séjour, chambre, couloir',
              },
              {
                titre: 'Mat lessivable',
                detail: 'Finition mate mais résistante à l\'humidité et aux projections. Idéal pour les cuisines et salles de bain où la vapeur et les graisses peuvent tacher le plafond. Légèrement plus brillant que le mat classique mais reste discret.',
                usage: 'Cuisine, salle de bain',
              },
              {
                titre: 'Satiné',
                detail: 'Réfléchit légèrement la lumière, facile à nettoyer, mais révèle chaque imperfection du support. Réservé aux plafonds parfaitement préparés et planés. Rare dans les appartements anciens parisiens sans travaux préparatoires importants.',
                usage: 'Surfaces planes parfaites',
              },
              {
                titre: 'Peinture plafond anti-trace',
                detail: 'Formulation spéciale qui masque les auréoles et traces légères existantes sans traitement préalable. Utile pour rafraîchir rapidement un plafond légèrement jauni ou taché sans passer par une préparation lourde.',
                usage: 'Rafraîchissement rapide',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.usage}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Application */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Application : rouleau classique ou projection airless
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix du mode d&apos;application conditionne le rendu final et le temps de travail. Deux méthodes s&apos;opposent pour les plafonds : le rouleau à long manche (traditionnel) et la projection airless (professionnel). Chacune a ses avantages selon l&apos;état du plafond et la surface à traiter.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Rouleau à long manche',
                detail: 'Solution idéale pour les petites et moyennes surfaces (moins de 30 m²). Le rouleau à poils mi-longs (12 à 15 mm) applique une couche régulière sans projections. Deux couches croisées sont nécessaires pour un résultat couvrant. Technique accessible mais physiquement exigeante au plafond.',
                avantage: 'Économique, précis, moins de masquage',
              },
              {
                type: 'Projection airless',
                detail: 'Machine professionnelle qui projette la peinture sous haute pression. Couvre rapidement de grandes surfaces et pénètre dans tous les recoins, y compris les moulures et caissons. Exige un masquage soigneux de tous les murs et meubles. Résultat homogène et sans traces de rouleau.',
                avantage: 'Rapide, finition parfaite sur grandes surfaces',
              },
              {
                type: 'Pinceau pour les découpes',
                detail: 'Indispensable pour peindre proprement les bords du plafond en contact avec les murs, les moulures et les angles rentrants. Le pinceau droit de 50 mm permet une découpe nette sans débordement sur les murs. Ne jamais utiliser le rouleau pour cette étape.',
                avantage: 'Finition nette, bords propres',
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.type}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.avantage}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Rosace et moulures */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rosace décorative et moulures : restaurer le charme haussmannien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            Les appartements haussmanniens parisiens disposent souvent de moulures au plafond — corniches, frises, rosaces — qui constituent un patrimoine architectural de grande valeur. Leur restauration et mise en valeur lors d&apos;une rénovation transforme radicalement le rendu d&apos;une pièce.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La rosace de plafond (médaillon central sur lequel est suspendu le lustre) est souvent endommagée, repeinte sous plusieurs couches épaisses ou partiellement cassée. Sa restauration est l&apos;une des interventions les plus valorisantes d&apos;une rénovation parisienne.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Restauration de rosace existante',
                prix: '300 – 800 €',
                detail: 'Décapage des couches de peinture accumulées (parfois 5 à 10 couches dans l\'ancien), rebouchage des parties manquantes au plâtre fin, reproduction des détails à la spatule ou au gabarit. Résultat : la rosace originale retrouve son relief et sa finesse.',
              },
              {
                type: 'Pose d\'une rosace polyuréthane',
                prix: '80 – 300 €',
                detail: 'Les rosaces en polyuréthane reproduisent fidèlement les modèles classiques (Louis XVI, Empire, Art Déco) à moindre coût. Légères, elles se collent directement au plafond propre et se peignent comme le reste du plafond. Idéal pour les plafonds qui n\'avaient pas de rosace d\'origine.',
              },
              {
                type: 'Remise en valeur des corniches et frises',
                prix: '40 – 80 €/ml',
                detail: 'Les corniches sont souvent noyées sous des couches de peinture qui en effacent le relief. Le décapage au mouillé ou à la vapeur restitue les détails d\'origine. Pour les parties manquantes, des éléments préfabriqués en staff ou en polyuréthane sont disponibles en reproduction exacte.',
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
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

      {/* Section 5 — Plafond tendu vs peinture classique + Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix 2025 : peinture plafond et alternatives à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent main d&apos;œuvre et matériaux inclus, pour un artisan qualifié intervenant à Paris intra-muros.
          </p>

          <div className="space-y-3 mb-10">
            {[
              {
                prestation: 'Peinture plafond (2 couches, bon état)',
                prix: '8 – 12 €/m²',
                detail: 'Plafond propre, sans fissures ni décollement. Deux couches de blanc mat.',
              },
              {
                prestation: 'Peinture plafond avec préparation légère',
                prix: '12 – 18 €/m²',
                detail: 'Quelques fissures fines, rebouchage ponctuel, enduit localisé avant peinture.',
              },
              {
                prestation: 'Peinture plafond avec préparation lourde',
                prix: '18 – 25 €/m²',
                detail: 'Plafond très dégradé, enduit général, reprise des moulures, 2 à 3 couches.',
              },
              {
                prestation: 'Restauration de rosace (polyuréthane)',
                prix: '80 – 300 €/unité',
                detail: 'Fourniture et pose d\'une rosace en polyuréthane, peinture incluse.',
              },
              {
                prestation: 'Restauration de rosace en staff (originale)',
                prix: '300 – 800 €/unité',
                detail: 'Décapage, rebouchage et reproduction des reliefs sur rosace d\'origine.',
              },
              {
                prestation: 'Plafond tendu PVC',
                prix: '20 – 35 €/m²',
                detail: 'Masque un plafond très dégradé. Pose rapide, perd 3 à 5 cm de hauteur.',
              },
              {
                prestation: 'Plafond tendu tissu',
                prix: '35 – 55 €/m²',
                detail: 'Finition premium, respirant, idéal pour les pièces à fort taux d\'humidité.',
              },
            ].map((el) => (
              <div key={el.prestation} className="grid grid-cols-[1fr_auto] gap-4 bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                <div>
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.prestation}</div>
                  <div className="text-gray-500 text-xs font-light">{el.detail}</div>
                </div>
                <div className="text-[#B8960C] text-sm font-medium self-center whitespace-nowrap">{el.prix}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour réussir la peinture de son plafond
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Toujours préparer le support avant de peindre — la préparation conditionne 80 % du résultat',
                'Choisir systématiquement une finition mate pour le plafond — elle masque les imperfections',
                'Traiter les traces d\'humidité à la source avant peinture, pas après',
                'Peindre le plafond avant les murs pour éviter les projections sur les murs finis',
                'Utiliser une peinture à fort pouvoir couvrant pour réduire le nombre de passes',
                'Restaurer les rosaces et moulures avant la peinture finale, jamais après',
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
              { href: '/peinture-paris', title: 'Peinture intérieure Paris' },
              { href: '/renovation-paris', title: 'Rénovation appartement Paris' },
              { href: '/blog/renovation-chambre-paris', title: 'Rénovation chambre Paris' },
              { href: '/blog/renovation-salon-paris', title: 'Rénovation salon Paris' },
              { href: '/blog/renovation-salle-de-bain-petite-surface-paris', title: 'Petite salle de bain Paris' },
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
          Faites peindre votre plafond à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisans peintres qualifiés en Île-de-France.
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
