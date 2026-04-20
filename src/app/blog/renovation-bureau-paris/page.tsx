import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Bureau Paris', item: 'https://espacedesignparis.fr/blog/renovation-bureau-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Bureau Paris : aménagement home office & prix 2025 | Espace Design',
  description: 'Créer ou rénover un bureau à Paris : isolation phonique, éclairage, rangements, sol. Prix et guide complet 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-bureau-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix pour aménager un bureau à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'aménagement d'un bureau à Paris coûte entre 300 et 800 €/m² selon le niveau de finition. Pour une pièce de 10 m², comptez 3 000 – 5 000 € pour un aménagement standard (sol + peinture + bureau et rangements), 6 000 – 10 000 € pour un home office complet avec isolation phonique et éclairage pensé, et jusqu'à 15 000 € pour un bureau sur mesure haut de gamme avec menuiserie, acoustique et domotique.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment convertir une chambre ou un placard en bureau à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La conversion d'une chambre en bureau nécessite généralement : remplacement du sol (parquet → revêtement adapté bureau), ajout de prises électriques et de gaines réseau, création de rangements muraux, et traitement de l'isolation phonique si la pièce est mitoyenne. Pour un placard converti en bureau-alcôve : installation d'un plateau de travail sur mesure, ajout d'une prise, et d'un éclairage LED intégré. Comptez 1 500 – 4 000 € pour cette transformation.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle isolation phonique pour un bureau à domicile à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un bureau à domicile dans un appartement parisien, l'isolation phonique est souvent la priorité numéro un. Les solutions efficaces : doublage du mur mitoyen avec laine de roche (60 à 120 €/m², gain 40 dB), faux-plafond désolidarisé (80 à 150 €/m²), sous-couche résiliente sous le sol (15 à 30 €/m²), et joint d'étanchéité sous la porte (50 – 150 €). Pour un bureau dédié aux visioconférences, un traitement acoustique des murs (panneaux absorbants) réduit la réverbération sonore et améliore la qualité audio.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Bureau Paris : aménagement home office & prix 2025 | Espace Design',
  description: 'Créer ou rénover un bureau à Paris : isolation phonique, éclairage, rangements, sol. Prix et guide complet 2025.',
}

export default function ArticleRenovationBureau() {
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
            Rénovation Bureau Paris : aménagement home office & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Depuis l&apos;essor du télétravail, le bureau à domicile est devenu un espace clé de l&apos;appartement parisien. Isolation phonique, éclairage adapté, rangements sur mesure : guide complet pour créer un home office fonctionnel et esthétique en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Choisir la pièce */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Choisir et aménager la pièce dédiée au bureau
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Dans un appartement parisien, dédier une pièce au bureau implique souvent de convertir une chambre existante ou d&apos;exploiter un espace sous-utilisé (débarras, alcôve, grand couloir). La configuration choisie conditionne l&apos;ensemble des travaux à réaliser.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Deux critères doivent guider le choix de la pièce : l&apos;accès à la lumière naturelle (indispensable pour la concentration et le bien-être) et l&apos;éloignement des zones de vie familiale (pour limiter les interruptions et les bruits parasites lors des visioconférences).
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Conversion d\'une chambre en bureau',
                  detail: 'Solution la plus courante dans les appartements parisiens de 3 pièces et plus. Travaux typiques : remplacement du revêtement de sol, ajout de prises électriques et de gaines réseau, création de rangements muraux, traitement de l\'isolation phonique. Coût : 3 000 – 8 000 € selon niveau de finition.',
                },
                {
                  enjeu: 'Transformation d\'un placard en bureau-alcôve',
                  detail: 'Idéale dans les grands appartements haussmanniens avec placards de service. Un placard de 1,20 m × 2 m peut accueillir un plateau de travail, des étagères et un éclairage LED. Le bureau se ferme avec des portes coulissantes quand il n\'est pas utilisé. Coût : 1 500 – 4 000 €.',
                },
                {
                  enjeu: 'Création d\'un espace bureau dans le séjour',
                  detail: 'Pour les petits appartements parisiens (studio, 2 pièces), le bureau s\'intègre au séjour par une bibliothèque avec plateau de travail intégré ou un module dédié. L\'enjeu acoustique est alors majeur pour les réunions en visio. Coût : 2 000 – 5 000 € pour un meuble sur mesure.',
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

      {/* Section 2 — Isolation phonique */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Isolation phonique : la priorité du home office parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un immeuble parisien, les bruits aériens (voix, musique, télévision) et les bruits d&apos;impact (pas, chaises) circulent facilement d&apos;un appartement à l&apos;autre. Pour un bureau à domicile, une bonne isolation phonique est la condition sine qua non d&apos;une journée de travail productive.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Doublage du mur mitoyen',
                solution: 'Plaque de plâtre haute densité + laine de roche 45 mm sur ossature désolidarisée. Traite les bruits aériens en priorité. Gain : 40 à 50 dB. Perte de 5 à 7 cm sur la largeur de la pièce.',
                cout: '60 – 120 €/m²',
              },
              {
                titre: 'Isolation du plancher',
                solution: 'Sous-couche résiliente sous le revêtement de sol. Réduit les bruits d\'impact transmis aux voisins du dessous et ceux reçus des voisins du dessus. Indispensable si le bureau est au-dessus d\'une pièce de vie.',
                cout: '15 – 30 €/m²',
              },
              {
                titre: 'Faux-plafond désolidarisé',
                solution: 'Plaque de plâtre sur suspentes anti-vibrations + laine minérale. Traite les bruits d\'impact du dessus. Recommandé si des enfants vivent dans l\'appartement du dessus.',
                cout: '80 – 150 €/m²',
              },
              {
                titre: 'Traitement acoustique intérieur',
                solution: 'Panneaux absorbants (laine de bois, mousse acoustique) sur les murs du bureau. Ne bloque pas les sons mais réduit la réverbération : voix plus nette en visioconférence, moins de fatigue auditive.',
                cout: '30 – 80 €/m²',
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

      {/* Section 3 — Éclairage */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Éclairage naturel et artificiel : concevoir un bureau bien éclairé
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;éclairage d&apos;un bureau conditionne directement la productivité et la santé visuelle. Un éclairage mal conçu génère fatigue oculaire, maux de tête et baisse de concentration. À Paris, où de nombreuses pièces sont orientées sur cour avec une lumière indirecte limitée, l&apos;éclairage artificiel doit compenser intelligemment.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Position du bureau par rapport à la fenêtre',
                prix: 'Sans surcoût',
                detail: 'Placer le bureau perpendiculairement à la fenêtre (lumière arrivant sur le côté) est la configuration optimale. Évitez de faire face à la fenêtre (éblouissement) ou de lui tourner le dos (ombre portée sur le bureau). Ce positionnement est souvent la première chose à optimiser sans dépense.',
              },
              {
                type: 'Éclairage général LED variable',
                prix: '300 – 800 €',
                detail: 'Luminaire plafonnier avec variation d\'intensité et de température de couleur (blanc froid pour la concentration, blanc chaud pour les réunions ou fin de journée). Un éclairage à 4 000 K le matin favorise l\'éveil et la concentration.',
              },
              {
                type: 'Éclairage de travail dédié',
                prix: '150 – 500 €',
                detail: 'Lampe de bureau positionnée du côté opposé à la main dominante pour éviter les ombres. Les modèles LED avec réglage de température et d\'intensité permettent une adaptation tout au long de la journée. Préférer une luminosité d\'au moins 500 lux au plan de travail.',
              },
              {
                type: 'Éclairage pour visioconférence',
                prix: '80 – 300 €',
                detail: 'Lumière de face douce et diffuse pour que le visage soit bien éclairé lors des appels vidéo. Un anneau lumineux LED (ring light) ou un panneau LED diffusant positionné derrière l\'écran donne d\'excellents résultats. Évitez les sources lumineuses dans le dos (contre-jour fatal en visio).',
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

      {/* Section 4 — Rangements et mobilier */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rangements et mobilier sur mesure pour un bureau parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans les petites surfaces parisiennes, le mobilier sur mesure permet d&apos;exploiter chaque centimètre. Un bureau bien rangé favorise la concentration et réduit le stress — la conception de l&apos;espace de rangement mérite autant d&apos;attention que le bureau lui-même.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Plan de travail sur mesure (menuiserie)',
                prix: '800 – 2 500 €',
                detail: 'Plan en MDF laqué, chêne massif ou compact stratifié, dimensions adaptées à la pièce. Intègre goulotte de câbles, passe-fils, et peut inclure un retour latéral pour un espace L. Profondeur idéale : 70 à 80 cm.',
              },
              {
                type: 'Bibliothèque murale du sol au plafond',
                prix: '2 000 – 5 000 €',
                detail: 'Exploite la hauteur sous plafond parisienne. Mix de tablettes ouvertes et de portes fermées pour ranger dossiers, matériel électronique et objets personnels. Un bureau intégré avec volet roulant permet de fermer le bureau en fin de journée.',
              },
              {
                type: 'Caissons de rangement sous le bureau',
                prix: '600 – 1 500 €',
                detail: 'Caissons à tiroirs sur roulettes ou fixes, intégrés sous le plan de travail. Permettent de ranger dossiers, fournitures et matériel de manière organisée et accessible sans encombrer le plateau.',
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

      {/* Section 5 — Budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget complet : prix d&apos;aménagement d&apos;un bureau à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un bureau de 10 m² à Paris, main d&apos;œuvre et matériaux inclus.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total 10 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Basique',
                    prestations: 'Peinture + sol + prises électriques + bureau standard',
                    prixM2: '300 – 400 €',
                    total: '3 000 – 4 000 €',
                  },
                  {
                    niveau: 'Standard',
                    prestations: 'Sol + peinture + isolation phonique basique + éclairage adapté + rangements',
                    prixM2: '400 – 600 €',
                    total: '4 000 – 6 000 €',
                  },
                  {
                    niveau: 'Complet',
                    prestations: 'Isolation phonique renforcée + éclairage variable + bureau et bibliothèque sur mesure',
                    prixM2: '600 – 800 €',
                    total: '6 000 – 8 000 €',
                  },
                  {
                    niveau: 'Haut de gamme',
                    prestations: 'Isolation totale + menuiserie premium + domotique + traitement acoustique intérieur',
                    prixM2: '800 – 1 200 €',
                    total: '8 000 – 12 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour bien budgéter son home office
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Commencer par l\'isolation phonique — c\'est le poste le plus impactant pour la qualité de travail',
                'Investir dans un éclairage de qualité — rentable en gains de productivité et de bien-être',
                'Préférer un plan de travail sur mesure à un bureau standard qui ne s\'adapte pas à la pièce',
                'Intégrer la gestion des câbles dès la conception pour un espace propre et professionnel',
                'Prévoir une alimentation électrique suffisante (multiprise, circuit dédié) avant les travaux de peinture',
                'Traiter l\'ergonomie : hauteur bureau, chaise réglable, écran à bonne distance',
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
              { href: '/menuiserie-paris', title: 'Menuiserie sur mesure Paris' },
              { href: '/electricite-paris', title: 'Électricité Paris' },
              { href: '/blog/renovation-chambre-paris', title: 'Rénovation chambre Paris' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/domotique-appartement-paris', title: 'Domotique appartement Paris' },
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
          Créez votre home office idéal à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisans spécialisés en aménagement parisien.
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
