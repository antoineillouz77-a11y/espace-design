import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Faux Plafond Paris', item: 'https://espacedesignparis.fr/blog/faux-plafond-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Faux Plafond Paris : placo, dalles & prix 2025 | Espace Design',
  description: 'Poser un faux plafond à Paris : placo BA13, dalles minérales, tendu. Cacher les gaines, isolation phonique. Prix au m² et artisans 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/faux-plafond-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelle hauteur sous plafond faut-il garder à Paris après pose d\'un faux plafond ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le Plan Local d\'Urbanisme (PLU) de Paris n\'impose pas de hauteur minimale sous plafond pour les pièces d\'habitation, mais le règlement sanitaire départemental de Paris fixe une hauteur minimale de 2,20 m sous plafond pour les pièces principales (salon, chambre). En pratique, un faux plafond consomme entre 10 et 30 cm de hauteur selon le type (placo suspendu sur ossature, dalle, ou tendu). Dans les appartements haussmanniens avec 2,80 à 3,20 m de hauteur, la marge est confortable. Dans les immeubles des années 1970-1990 avec 2,50 à 2,60 m, un faux plafond doit être étudié avec soin.',
      },
    },
    {
      '@type': 'Question',
      name: 'Un faux plafond en placo améliore-t-il l\'isolation phonique ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, à condition d\'être correctement conçu. Un faux plafond en placo BA13 posé sur suspentes anti-vibrations (avec laine de roche ou laine de verre entre les deux plafonds) réduit significativement les bruits d\'impact transmis depuis le plancher supérieur (chutes d\'objets, pas, chaises). Gain typique : 20 à 35 dB selon l\'épaisseur de laine et le type de suspentes. Pour les bruits aériens (voix, musique), l\'efficacité est moindre sans masse suffisante. Un double plafond avec plaque BA18 ou deux plaques BA13 améliore sensiblement la performance acoustique.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on poser un faux plafond soi-même à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La pose d\'un faux plafond en dalles minérales sur rail T est accessible à un bricoleur expérimenté sur de petites surfaces. En revanche, la pose d\'un faux plafond en placo suspendu (ossature métallique, découpe des plaques, enduitage et ponçage) nécessite un savoir-faire professionnel pour obtenir un résultat invisible et plan. À Paris, les plafonds sont rarement parfaitement plans dans les immeubles anciens, ce qui complique la pose. Un artisan plâtrier garantit la planéité, les joints invisibles et les finitions propres autour des spots et des corniches.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Faux Plafond Paris : placo, dalles & prix 2025 | Espace Design',
  description: 'Poser un faux plafond à Paris : placo BA13, dalles minérales, tendu. Cacher les gaines, isolation phonique. Prix au m² et artisans 2025.',
}

export default function ArticleFauxPlafondParis() {
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
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[11px] text-gray-500 font-light">
              <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">Accueil</Link></li>
              <li className="text-gray-600">/</li>
              <li><Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link></li>
              <li className="text-gray-600">/</li>
              <li className="text-gray-400">Faux plafond Paris</li>
            </ol>
          </nav>
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Plâtrerie
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Faux Plafond Paris : placo, dalles &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Cacher des gaines apparentes, intégrer des spots encastrés, améliorer l&apos;isolation phonique ou simplement rafraîchir un plafond dégradé : le faux plafond est l&apos;une des solutions les plus polyvalentes de la rénovation parisienne. Guide complet des types, prix au m² et points de vigilance pour 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de faux plafonds */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les types de faux plafonds : placo, dalles minérales et tendu
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Trois grandes familles de faux plafonds coexistent sur le marché parisien. Chacune répond à des besoins différents en termes de budget, d&apos;esthétique, d&apos;isolation acoustique et de facilité d&apos;intervention ultérieure sur les gaines et câbles.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Faux plafond en placo (BA13) suspendu',
                  detail: 'Solution la plus répandue en rénovation parisienne. Plaques de plâtre vissées sur une ossature métallique légère (rails et montants) suspendue au plafond d\'origine par des suspentes réglables. Permet d\'intégrer éclairage encastré, câbles et gaines. Résultat lisse et parfaitement peignable. Nécessite une finition (enduit + peinture) pour un rendu professionnel.',
                },
                {
                  enjeu: 'Faux plafond en dalles minérales (60x60)',
                  detail: 'Dalles posées sur une structure de rails en T visibles. Solution économique et démontable facilement : chaque dalle peut être soulevée pour accéder aux gaines. Très utilisé dans les bureaux, locaux commerciaux et salles de réunion. Moins esthétique que le placo dans un appartement, mais très pratique pour les pièces techniques (cuisine, débarras, local informatique).',
                },
                {
                  enjeu: 'Plafond tendu',
                  detail: 'Film de PVC ou de polyester tendu sur un profilé fixé en périphérie de la pièce. Résultat très lisse, brillant, mat ou satiné. Peut intégrer des éclairages LED rétro-éclairés pour un effet lumineux spectaculaire. Imperméable : idéal si risque de fuite du dessus (salle de bain, cuisine). Prix plus élevé mais pose rapide (1 journée) sans poussière.',
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

      {/* Section 2 — Avantages */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Avantages du faux plafond dans un appartement parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Au-delà de l&apos;aspect esthétique, le faux plafond répond à plusieurs problématiques très concrètes dans les appartements parisiens, qu&apos;ils soient haussmanniens ou en immeuble moderne.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Cacher les gaines et câbles apparents',
                detail: 'Dans les appartements rénovés à la va-vite ou après travaux électriques, les gaines PVC courent souvent en apparent le long des murs et du plafond. Un faux plafond les dissimule proprement sans retouche de maçonnerie. Idéal aussi pour cacher les conduits de VMC, les tuyaux de chauffage ou les câbles réseau.',
                cout: 'Inclus dans le faux plafond',
              },
              {
                titre: 'Intégration de l\'éclairage encastré',
                detail: 'Les spots LED encastrés dans un faux plafond donnent un résultat sobre et moderne. La plénière lumineuse (bandeau LED caché derrière une corniche) ou le rétroéclairage sur plafond tendu créent une ambiance très qualitative. L\'électricité est tirée dans le vide de plafond avant fermeture.',
                cout: '80 – 300 € / spot encastré posé',
              },
              {
                titre: 'Isolation phonique des bruits d\'impact',
                detail: 'Un faux plafond placo sur suspentes anti-vibrations avec laine minérale réduit significativement les bruits de choc du dessus (pas, chutes d\'objets). Solution très appréciée dans les immeubles parisiens où les planchers sont parfois minces. Gain de 20 à 35 dB selon la configuration.',
                cout: 'Supplément 10 – 20 €/m²',
              },
              {
                titre: 'Rattrapage d\'un plafond dégradé ou irrégulier',
                detail: 'Les plafonds des immeubles haussmanniens vieillissants présentent souvent des fissures, des auréoles, ou un plâtre décollé. Plutôt que d\'endure et de ragréer (travaux longs et coûteux), un faux plafond suspendu réalise un rattrapage complet en une seule opération propre.',
                cout: 'Solution complète : 35 – 60 €/m²',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Réglementation PLU Paris */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Réglementation Paris : hauteur sous plafond et PLU
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Avant de poser un faux plafond dans un appartement parisien, il est indispensable de vérifier que la hauteur résiduelle reste conforme aux exigences réglementaires et que les travaux ne compromettent pas le classement ou la protection du bâtiment.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Hauteur minimale — Règlement sanitaire départemental',
                prix: 'Règle impérative',
                detail: 'Le règlement sanitaire de Paris impose 2,20 m de hauteur minimale sous plafond pour les pièces principales (salon, chambre, salle de bain). Un faux plafond qui descend en dessous de cette limite rend la pièce non conforme à la location et au changement de destination. À vérifier impérativement si le plafond d\'origine est inférieur à 2,50 m.',
              },
              {
                type: 'Immeubles classés ou inscrits au patrimoine',
                prix: 'Déclaration préalable possible',
                detail: 'Dans les secteurs sauvegardés parisiens (Marais, Île Saint-Louis, secteur Montmartre...), les travaux modifiant l\'aspect d\'un appartement peuvent nécessiter une déclaration préalable de travaux voire un permis de construire, notamment si le faux plafond cache des éléments architecturaux remarquables (moulures, caissons, poutres apparentes). Renseignez-vous auprès de la mairie d\'arrondissement.',
              },
              {
                type: 'Copropriété : approbation requise pour les gros travaux',
                prix: 'Vote AG si parties communes impactées',
                detail: 'Si le faux plafond nécessite de percer le plancher (passage de câbles vers le dessus) ou impacte des éléments structurels, l\'accord du syndic est nécessaire. En revanche, un faux plafond posé dans l\'espace privatif sans impact sur le gros oeuvre ne nécessite généralement pas de vote en AG.',
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

      {/* Section 4 — Éclairage encastré */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Éclairage encastré et spots LED dans le faux plafond
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le faux plafond est l&apos;opportunité idéale pour repenser entièrement l&apos;éclairage d&apos;une pièce. L&apos;intégration de spots LED encastrés, de barrettes lumineuses ou de plénières nécessite une coordination entre le plâtrier et l&apos;électricien dès la phase de conception.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Spots LED encastrés',
                detail: 'Les plus répandus. Spots ronds ou carrés de 10 à 20 cm de diamètre, à LED intégrée ou à ampoule GU10. Choisir des modèles orientables pour pointer la lumière. Espacement recommandé : 1 spot tous les 1,5 à 2 m². Puissance : 7 à 12 W par spot, température recommandée 3 000 K pour une ambiance chaude.',
                cout: '80 – 200 € / spot posé',
              },
              {
                titre: 'Bandeau LED / plénière lumineuse',
                detail: 'Bandeau LED installé derrière une corniche en placo créant un halo de lumière indirect. Effet architectural très qualitatif, souvent utilisé dans les séjours et chambres pour une lumière douce et ambiante. Permet aussi de matérialiser des zones (cuisine, espace repas) sans cloisonnement.',
                cout: '40 – 100 €/ml posé',
              },
              {
                titre: 'Rétroéclairage plafond tendu',
                detail: 'Système LED placé entre le plafond d\'origine et le film tendu translucide. L\'ensemble du plafond devient une dalle lumineuse uniforme et sans éblouissement. Très utilisé dans les salles de bain et les cabinets médicaux. Effet lumineux spectaculaire pour un prix compétitif sur les grandes surfaces.',
                cout: '60 – 120 €/m² (tout compris)',
              },
              {
                titre: 'Détecteurs de présence et variation',
                detail: 'Les spots encastrés peuvent être connectés à des variateurs d\'ambiance (Variateur Legrand, Schneider, ou solution domotique Philips Hue). Un détecteur de présence dans couloir ou WC évite d\'oublier la lumière allumée. Ces équipements sont à prévoir dès le câblage, avant fermeture du plafond.',
                cout: '30 – 150 € / point de commande',
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.titre}</div>
                  <div className="text-[#B8960C] text-xs font-medium flex-shrink-0">{el.cout}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix d&apos;un faux plafond à Paris en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tous les prix ci-dessous s&apos;entendent main d&apos;œuvre et fournitures incluses pour une pièce standard parisienne. Ils n&apos;incluent pas l&apos;électricité (spots, câblage) sauf mention contraire.
          </p>

          {/* Price grid */}
          <div className="mb-8 space-y-2">
            <div className="grid grid-cols-3 bg-[#1C1C1C] text-white rounded-t-lg px-4 py-3 text-xs font-light uppercase tracking-wider">
              <div>Type de faux plafond</div>
              <div className="text-center">Prix au m²</div>
              <div className="text-right">Pour 20 m²</div>
            </div>
            {[
              { type: 'Dalle minérale 60x60 (structure apparente)', m2: '25 – 40 €', total: '500 – 800 €' },
              { type: 'Placo BA13 suspendu (sans finition peinture)', m2: '35 – 55 €', total: '700 – 1 100 €' },
              { type: 'Placo BA13 suspendu (finition peinture incluse)', m2: '50 – 75 €', total: '1 000 – 1 500 €' },
              { type: 'Placo avec isolation acoustique (laine minérale)', m2: '55 – 85 €', total: '1 100 – 1 700 €' },
              { type: 'Plafond tendu mat ou satiné', m2: '60 – 100 €', total: '1 200 – 2 000 €' },
              { type: 'Plafond tendu rétroéclairé (LED incluses)', m2: '90 – 150 €', total: '1 800 – 3 000 €' },
            ].map((row, i) => (
              <div
                key={row.type}
                className={`grid grid-cols-3 px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'} border border-gray-100`}
              >
                <div className="text-[#1C1C1C] font-light">{row.type}</div>
                <div className="text-center text-[#B8960C] font-medium">{row.m2}</div>
                <div className="text-right text-gray-600 font-light">{row.total}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points clés à vérifier avant de démarrer
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Mesurer la hauteur disponible : minimum 2,20 m après pose',
                'Identifier les gaines et câbles à intégrer avant de fermer le faux plafond',
                'Prévoir le câblage électrique (spots, variateurs) en coordination avec l\'électricien',
                'Choisir des plaques hydrofuges (BA13 H1) pour salle de bain et cuisine',
                'Prévoir des trappes de visite si des gaines nécessitent un accès régulier',
                'Vérifier l\'état du plafond d\'origine avant pose (fuite, amiante dans les immeubles avant 1997)',
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
              { href: '/platrererie-paris', title: 'Plâtrerie Paris — enduits et cloisons' },
              { href: '/peinture-paris', title: 'Peinture Paris — plafonds et murs' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/renovation-cage-escalier-paris', title: 'Rénovation cage d\'escalier Paris' },
              { href: '/blog/renovation-bureau-paris', title: 'Aménagement bureau Paris' },
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
          Posez votre faux plafond avec un artisan parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Devis gratuit. Placo, dalles ou plafond tendu. Artisan plâtrier spécialisé Paris et Île-de-France.
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
