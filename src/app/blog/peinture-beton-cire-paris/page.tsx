import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Peinture Béton Ciré Paris', item: 'https://espacedesignparis.fr/blog/peinture-beton-cire-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Peinture Béton Ciré Paris : application, entretien & prix 2025 | Espace Design',
  description: 'Appliquer du béton ciré à Paris : préparation support, couches, lasure de protection. Cuisine, salle de bain, salon. Prix artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/peinture-beton-cire-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre la peinture béton ciré et le vrai béton ciré ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La peinture effet béton ciré est une résine acrylique teintée qui imite l'aspect du béton ciré sur n'importe quel support existant (carrelage, plâtre, bois). Le vrai béton ciré est un produit à base de ciment, appliqué en 2 à 3 couches fines par un applicateur qualifié, avec une lasure de protection. La peinture effet béton est moins chère (15-30 €/m² en fourniture) mais moins durable et moins authentique. Le vrai béton ciré posé coûte 60-120 €/m² tout compris mais offre une finition incomparable, sans joint, lavable et résistante.",
      },
    },
    {
      '@type': 'Question',
      name: 'Le béton ciré convient-il à une salle de bain parisienne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, à condition de choisir une lasure de protection hydrofuge adaptée aux pièces humides. Le béton ciré est imperméable une fois protégé par 2 couches de lasure polyuréthane ou époxy. Il résiste à l'eau, aux produits d'entretien ménager courants et aux variations de température. En revanche, il ne tolère pas les chocs répétés ni les produits acides (javel concentrée, détartrant). Dans les douches à l'italienne, l'application doit être réalisée par un artisan expérimenté avec une pente de sol maîtrisée.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment entretenir le béton ciré dans une cuisine parisienne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'entretien du béton ciré en cuisine est simple : nettoyage à la serpillière légèrement humide avec un savon pH neutre. Évitez l'eau de javel, le vinaigre blanc et les détergents acides qui ternissent la lasure. En cas de tache grasse (huile, café), intervenez rapidement avec un chiffon humide. Un re-cirage à l'huile de lin diluée tous les 2-3 ans suffit à raviver la teinte et protéger la surface. Les rayures légères sur le sol peuvent être estompées par un léger ponçage suivi d'une nouvelle couche de lasure.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Peinture Béton Ciré Paris : application, entretien & prix 2025 | Espace Design',
  description: 'Appliquer du béton ciré à Paris : préparation support, couches, lasure de protection. Cuisine, salle de bain, salon. Prix artisan 2025.',
}

export default function ArticleBetonCire() {
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
            Peinture Béton Ciré Paris : application, entretien & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le béton ciré séduit par son rendu minimaliste sans joint, sa continuité visuelle et sa polyvalence — murs, sols, cuisine, salle de bain. À Paris, son application requiert une préparation rigoureuse du support et un savoir-faire artisanal précis. Guide complet sur la technique, les prix et l&apos;entretien en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Béton ciré vs peinture effet béton */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Béton ciré véritable vs peinture effet béton : laquelle choisir ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le marché propose deux catégories distinctes de produits, souvent confondues dans les recherches : la peinture effet béton (résine acrylique teintée) et le béton ciré véritable (produit à base de ciment). Ces deux solutions donnent un rendu visuellement proche mais diffèrent radicalement en termes de durabilité, de technique d&apos;application et de prix.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Peinture effet béton ciré (résine acrylique)',
                  detail: 'Produit en pot applicable par un bricoleur averti sur carrelage, plâtre ou béton existant. Teintes multiples, séchage rapide, coût faible (15-30 €/m² en fourniture). Rendu moins authentique, moins résistant aux chocs et à l\'usure intensive. Idéal pour un budget limité ou une location.',
                },
                {
                  enjeu: 'Béton ciré véritable (produit cimentaire)',
                  detail: 'Mélange de ciment, résine et pigments appliqué en 2 à 3 couches fines (1-2 mm au total) par un artisan qualifié. Finition unique, sans joint, mate ou satinée selon la lasure choisie. Résistance supérieure une fois protégé. Coût posé : 60-120 €/m² selon la surface et la complexité du support.',
                },
                {
                  enjeu: 'Micro-béton (variante contemporaine)',
                  detail: 'Béton ciré ultra-fin (0,5 à 1 mm) à base de résine polyuréthane, plus flexible que le béton traditionnel. Tolère mieux les légers mouvements du support et les surfaces courbes. Particulièrement adapté aux murs de douche et aux plans de travail de cuisine. Prix posé : 80-150 €/m².',
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

      {/* Section 2 — Préparation du support */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Préparation du support : l&apos;étape clé avant l&apos;application
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La préparation du support conditionne 80 % de la réussite d&apos;une pose de béton ciré. Un support mal préparé entraîne des fissures, des décollements et des irrégularités visibles sous le rasant. Cette phase représente souvent 30 à 40 % du coût total de la prestation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Ragréage et nivellement',
                solution: 'Tout support irrégulier, fissuré ou en pente doit être ragréé avant l\'application. Un ragréage autonivelant est coulé sur le sol pour obtenir une planéité parfaite. Sur les murs, les fissures sont rebouchées et poncées. Indispensable pour les parquets anciens ou les carrelages avec joints en relief.',
                cout: '15 – 30 €/m²',
              },
              {
                titre: 'Ponçage du support existant',
                solution: 'Les peintures brillantes, les vernis et les anciens revêtements non adhérents doivent être poncés pour créer une accroche. Le ponçage élimine également les résidus de colle et les aspérités. Étape incontournable sur carrelage émaillé ou ancien parquet ciré.',
                cout: '10 – 20 €/m²',
              },
              {
                titre: 'Primaire d\'accrochage',
                solution: 'Application d\'une couche de primaire (primer) adaptée au support pour favoriser l\'adhérence du béton ciré. Le primaire colmate les micro-porosités et uniformise l\'absorption du support. Certains primers sont spécifiques aux supports humides (salle de bain, cuisine).',
                cout: '5 – 10 €/m²',
              },
              {
                titre: 'Traitement des fissures structurelles',
                solution: 'Les fissures actives (qui bougent avec les mouvements du bâtiment) doivent être traitées avec un produit élastique avant la pose. Si le support est trop instable, un micro-béton flexible est préférable au béton ciré standard pour éviter la refissuration.',
                cout: 'Selon étendue',
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

      {/* Section 3 — Application */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Application du béton ciré : 2-3 couches et lasure de protection
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;application du béton ciré est un processus en plusieurs étapes qui demande patience et technique. Chaque couche doit sécher parfaitement avant la suivante — le respect des temps de séchage est non négociable pour éviter les cloques et les fissures.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Couche 1 — Couche de fond',
                prix: 'Séchage 12-24h',
                detail: 'Première couche de béton ciré appliquée à la lisseuse inox ou à la spatule en acier. Cette couche remplit les micro-irrégularités du support et créé la base colorée. Elle est appliquée en couche fine et régulière. La couleur finale est posée à cette étape via les pigments mélangés au produit.',
              },
              {
                type: 'Couche 2 — Couche de finition',
                prix: 'Séchage 12-24h',
                detail: 'Deuxième couche plus fine qui affine le rendu et corrige les éventuelles irrégularités de la première. C\'est lors de cette couche que l\'artisan travaille les effets (nuancé, marbrures, aspect uni) en variant la pression et les passes de lisseuse. Un léger ponçage à grain fin est réalisé entre les deux couches.',
              },
              {
                type: 'Couche 3 — Couche de correction (si nécessaire)',
                prix: 'Optionnel',
                detail: 'Sur les grandes surfaces ou les supports irréguliers, une troisième couche de finition peut être nécessaire pour homogénéiser le rendu et effacer les jonctions. Cette étape est systématique pour les sols soumis à une usure intensive (cuisine, entrée).',
              },
              {
                type: 'Lasure de protection (2 couches)',
                prix: 'Séchage 24-48h',
                detail: 'La lasure imperméabilise et protège le béton ciré. Deux couches sont appliquées au rouleau ou au pinceau. Choix de la lasure selon l\'usage : mat pour un rendu industriel authentique, satiné pour un compromis entre esthétique et facilité d\'entretien, brillant pour les plans de travail. Pour les pièces humides, une lasure polyuréthane bi-composant offre la meilleure protection.',
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
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

      {/* Section 4 — Avantages et inconvénients */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Avantages et inconvénients du béton ciré à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Idéal pour les intérieurs parisiens contemporains, le béton ciré présente néanmoins des contraintes à anticiper — notamment dans les immeubles haussmanniens dont les structures ont tendance à bouger.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">Points forts</h3>
              <div className="space-y-3">
                {[
                  'Rendu minimaliste et élégant, sans joint visible',
                  'Continuité visuelle sol-mur agrandissant visuellement l\'espace',
                  'Personnalisable : plus de 50 teintes, effets variés',
                  'Applicable sur support existant (carrelage, béton, plâtre)',
                  'Entretien simple avec serpillière et savon neutre',
                  'Durable : 15-20 ans avec un entretien adapté',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                    <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[#1C1C1C] mb-3">Points de vigilance</h3>
              <div className="space-y-3">
                {[
                  'Fissuration possible si le support bouge (immeubles anciens)',
                  'Sensible aux produits acides (vinaigre, javel concentrée)',
                  'Entretien des lasures à renouveler tous 2-3 ans en zone humide',
                  'Technique exigeante — malfaçon visible et difficile à corriger',
                  'Non adapté aux supports structurellement instables',
                  'Temps de pose long : 3 à 5 jours pour une pièce de 20 m²',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                    <div className="w-3.5 h-3.5 rounded-full border border-gray-300 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix béton ciré Paris 2025 : tarifs artisan posé
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent fourniture et pose par un artisan qualifié à Paris, TVA à 10 % incluse. La préparation du support (ragréage, ponçage) est facturée en supplément si nécessaire.
          </p>
          <div className="grid grid-cols-1 gap-3 mb-8">
            {[
              {
                niveau: 'Peinture effet béton ciré (DIY ou posé)',
                prestations: 'Résine acrylique sur support sain. Rendu imitant le béton.',
                prixM2: '20 – 45 €/m²',
                total: 'Fourniture 15-30 €/m² + pose 5-15 €/m²',
              },
              {
                niveau: 'Béton ciré standard (sol ou mur)',
                prestations: 'Produit cimentaire, 2 couches + lasure mate ou satinée.',
                prixM2: '60 – 90 €/m²',
                total: 'Pour une surface de 20 m² : 1 200 – 1 800 €',
              },
              {
                niveau: 'Béton ciré pièce humide (SDB, cuisine)',
                prestations: '2-3 couches + lasure polyuréthane hydrofuge. Préparation support incluse.',
                prixM2: '80 – 120 €/m²',
                total: 'Pour une SDB de 5 m² : 400 – 600 €',
              },
              {
                niveau: 'Micro-béton (plan de travail, douche italienne)',
                prestations: 'Produit résine, ultra-flexible. Finition haut de gamme.',
                prixM2: '100 – 150 €/m²',
                total: 'Pour un plan de travail 3 m² : 300 – 450 €',
              },
            ].map((row) => (
              <div key={row.niveau} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                  <div className="font-medium text-[#1C1C1C] text-sm">{row.niveau}</div>
                  <div className="text-[#B8960C] text-sm font-semibold flex-shrink-0">{row.prixM2}</div>
                </div>
                <div className="text-gray-600 text-xs font-light mb-1">{row.prestations}</div>
                <div className="text-gray-500 text-xs font-light italic">{row.total}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour réussir son projet béton ciré
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Exiger un artisan ayant des références de béton ciré (demandez des photos de chantiers passés)',
                'Vérifier que le devis inclut la préparation du support, pas seulement l\'application',
                'Tester la teinte sur un échantillon — la couleur sèche plus claire que l\'aspect humide',
                'Prévoir 5 à 7 jours de délai avant remise en usage normal de la pièce',
                'Opter pour une lasure satinée en zone humide — plus facile à entretenir que le mat',
                'Ne pas poser par temps humide ou températures inférieures à 10°C',
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
              { href: '/peinture-paris', title: 'Peinture Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
              { href: '/blog/renovation-cuisine-paris', title: 'Rénovation cuisine Paris' },
              { href: '/blog/devis-renovation-en-ligne-paris', title: 'Devis rénovation Paris' },
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
          Votre projet béton ciré à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisans spécialisés en béton ciré et micro-béton.
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
