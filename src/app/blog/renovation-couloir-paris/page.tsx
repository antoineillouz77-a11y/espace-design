import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Couloir Paris', item: 'https://espacedesignparis.fr/blog/renovation-couloir-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Couloir Paris : astuces pour un espace petit & sombre 2025 | Espace Design',
  description: 'Rénover un couloir parisien étroit et sombre : peinture claire, miroirs, éclairage, rangements intégrés. Prix et idées 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-couloir-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Comment agrandir visuellement un couloir étroit à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour agrandir visuellement un couloir parisien étroit, plusieurs techniques se combinent efficacement : peindre les murs dans une teinte claire et mate (blanc cassé, beige très clair, gris pâle) pour réfléchir la lumière ; poser un grand miroir plein cadre sur l'un des murs latéraux pour doubler la profondeur apparente ; choisir un revêtement de sol clair posé en diagonale pour élargir l'espace ; installer un éclairage LED encastré dans le plafond (spots en ligne) pour supprimer les ombres portées qui rétrécissent visuellement le couloir.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel revêtement de sol pour un couloir parisien très passant ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le couloir est la zone la plus sollicitée de l'appartement en termes de passage. Les revêtements recommandés pour un couloir parisien : carrelage grès cérame (résistant, facile à nettoyer, 40 à 100 €/m²), vinyle LVT haut de gamme (résistant, silencieux, 35 à 80 €/m²), ou parquet massif vitrifié (élégant mais plus sensible aux rayures, 100 à 180 €/m²). Évitez la moquette (difficile à entretenir) et les parquets stratifiés bas de gamme (peu résistants à l'abrasion).",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation de couloir à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'une rénovation de couloir à Paris dépend principalement de sa longueur et du niveau de finition : pour un couloir standard de 4 à 6 m de long et 1 à 1,2 m de large (4 à 7 m²), comptez 2 000 – 4 000 € pour un rafraîchissement (peinture + sol + éclairage), 4 000 – 7 000 € pour une rénovation complète avec rangements intégrés et miroir, et 7 000 – 12 000 € pour un couloir avec placards sur mesure, éclairage design et revêtements haut de gamme.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Couloir Paris : astuces pour un espace petit & sombre 2025 | Espace Design',
  description: 'Rénover un couloir parisien étroit et sombre : peinture claire, miroirs, éclairage, rangements intégrés. Prix et idées 2025.',
}

export default function ArticleRenovationCouloir() {
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
            Rénovation Couloir Paris : astuces pour un espace petit et sombre 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le couloir parisien typique est étroit, sombre et souvent ignoré lors des rénovations. Pourtant, c&apos;est la première pièce que vos visiteurs traversent — et la dernière qu&apos;ils quittent. Guide complet pour transformer votre couloir en un espace lumineux, fonctionnel et accueillant en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Peinture et lumière */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Peinture claire et effets trompe-l&apos;oeil : agrandir sans toucher aux murs
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le couloir parisien typique mesure 80 cm à 1,2 m de large pour 4 à 8 m de long. Cette configuration tube crée une impression d&apos;oppression que la peinture et les effets visuels peuvent considérablement atténuer, sans aucun travail structurel.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La règle d&apos;or : plus le couloir est étroit, plus les murs doivent être clairs. Une teinte blanc cassé (NCS S 0502-Y ou équivalent) réfléchit la lumière et donne une impression immédiate d&apos;espace. À l&apos;inverse, une couleur foncée, même trendy, rétrécira visuellement un espace déjà contraint.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Peinture claire : blanc cassé, beige clair, gris pâle',
                  detail: 'Choisir une teinte claire avec une légère base chaude (jaune ou rouge très atténué) pour éviter l\'effet clinique d\'un blanc pur. Le blanc cassé type "Lin" ou "Sable" (Farrow & Ball, Tollens, Dulux) convient parfaitement à la plupart des couloirs haussmanniens. Finition velours ou mat pour masquer les irrégularités des vieux murs. Coût : 300 – 800 € fourniture + pose pour un couloir standard.',
                },
                {
                  enjeu: 'Miroirs : doubler la profondeur apparente',
                  detail: 'Un grand miroir plein cadre (largeur 60 à 80 cm, hauteur du sol au plafond ou jusqu\'à la hauteur de caisson) positionné sur l\'un des murs latéraux crée une illusion de profondeur saisissante. Pour un effet maximal, le miroir doit être face à une source lumineuse (fenêtre ou spot). Coût d\'un miroir sur mesure posé : 400 – 1 200 €.',
                },
                {
                  enjeu: 'Peindre le plafond en blanc pur',
                  detail: 'Dans un couloir, le plafond blanc pur (sans teinte chaude) accentue la hauteur sous plafond, souvent généreuse dans les immeubles parisiens (2,70 à 3,20 m). Ne jamais peindre le plafond dans la même teinte que les murs — cela écrase la pièce. La jonction entre mur et plafond peut être soulignée par une fine baguette peinte en blanc ou en teinte légèrement plus sombre que le mur.',
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

      {/* Section 2 — Éclairage */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Éclairage LED : transformer un couloir sombre en espace lumineux
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;éclairage est souvent le levier le plus impactant dans un couloir parisien sombre. Un bon éclairage peut multiplier par deux la sensation d&apos;espace et de confort. C&apos;est aussi un investissement rentable sur le long terme grâce aux LED basse consommation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Spots LED encastrés en ligne',
                solution: 'La solution la plus efficace pour un couloir : une rangée de spots LED encastrés dans le plafond, espacés de 80 à 100 cm. Choisir des spots à faisceau large (60°) pour éviter les zones d\'ombre entre spots. Température de couleur : 3 000 K (blanc chaud) pour une ambiance accueillante. Coût : 800 – 1 800 € selon longueur du couloir.',
                cout: '800 – 1 800 €',
              },
              {
                titre: 'Éclairage indirect en corniche',
                solution: 'Ruban LED dissimulé dans une corniche en plâtre ou une niche en haut des murs. Crée une lumière douce et homogène qui élargit visuellement le couloir. Particulièrement adapté aux couloirs haussmanniens avec moulures. L\'effet est spectaculaire : le couloir paraît flotter dans la lumière. Coût : 1 200 – 2 500 €.',
                cout: '1 200 – 2 500 €',
              },
              {
                titre: 'Détecteur de présence',
                solution: "Indispensable dans un couloir : s'allume automatiquement à l'entrée, s'éteint après 30 secondes à 2 minutes d'inactivité. Économise jusqu'à 80% de la consommation électrique d'un couloir par rapport à un interrupteur classique. Compatible avec les systèmes domotiques existants. Coût supplémentaire : 150 – 300 €.",
                cout: '+ 150 – 300 €',
              },
              {
                titre: 'Appliques murales basses',
                solution: "Des appliques positionnées à 30 à 40 cm du sol créent un éclairage rasant qui met en valeur le revêtement de sol et crée une ambiance cocooning le soir. Complément idéal à un éclairage général par spots. Les modèles à orientable permettent de diriger la lumière vers le plafond pour un effet bougie indirect. Coût : 400 – 900 €.",
                cout: '400 – 900 €',
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

      {/* Section 3 — Rangements intégrés */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rangements intégrés : exploiter chaque centimètre du couloir
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un appartement parisien, le couloir est souvent le seul espace disponible pour créer des rangements supplémentaires. Des placards bien conçus peuvent transformer un couloir encombré en un espace aéré et organisé.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Placard sur toute la hauteur',
                prix: '1 500 – 4 000 €',
                detail: "Un placard du sol au plafond (profondeur 40 à 60 cm) intégré dans le couloir crée un rangement massif tout en gardant un mur plan et élégant. Avec des portes coulissantes (miroir ou laquées blanc), il ne mange pas de place à l'ouverture et peut incorporer le miroir obligatoire. Intérieur organisé avec tringles, tiroirs et étagères réglables.",
              },
              {
                type: 'Niche encastrée dans la cloison',
                prix: '800 – 2 000 €',
                detail: "Si la cloison n'est pas porteuse, une niche creusée dans l'épaisseur du mur (15 à 30 cm de profondeur) crée un espace de rangement ou de décoration sans empiéter sur le couloir. Idéale pour les manteaux, les chaussures, ou une console d'entrée encastrée. Éclairée par un ruban LED, elle devient un véritable élément décoratif.",
              },
              {
                type: 'Console et rangement chaussures',
                prix: '600 – 1 800 €',
                detail: "Une console sur mesure fixée au mur (sans pied au sol) avec rangement chaussures en dessous libère la circulation et organise l'entrée. Associée à un miroir au-dessus et des patères intégrées, elle crée un espace fonctionnel compact. Profondeur idéale : 25 à 30 cm pour ne pas obstruer le passage dans un couloir de 90 cm.",
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

      {/* Section 4 — Sol et budget */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Revêtement de sol et budget complet pour un couloir parisien
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un couloir de 4 à 8 m de long, Paris intra-muros, main d&apos;oeuvre et matériaux inclus.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau de rénovation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations incluses</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget estimé</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture murs et plafond + éclairage simple',
                    budget: '800 – 2 000 €',
                  },
                  {
                    niveau: 'Rénovation standard',
                    prestations: 'Peinture + sol (vinyle ou carrelage) + spots LED',
                    budget: '2 000 – 4 000 €',
                  },
                  {
                    niveau: 'Rénovation complète',
                    prestations: 'Peinture + sol + spots + miroir + rangements intégrés',
                    budget: '4 000 – 7 000 €',
                  },
                  {
                    niveau: 'Rénovation haut de gamme',
                    prestations: 'Placards sur mesure + éclairage design + parquet + miroir plein mur',
                    budget: '7 000 – 12 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour réussir la rénovation de votre couloir parisien
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Commencer par la peinture claire — c\'est le levier le plus rapide et le plus impactant',
                'Installer un détecteur de présence pour l\'éclairage dès le départ',
                'Choisir un revêtement de sol résistant à l\'abrasion (classe 33 minimum)',
                'Opter pour des portes de placard coulissantes pour ne pas bloquer le passage',
                'Associer miroir et éclairage pour un effet agrandissement maximal',
                'Choisir une seule teinte de peinture pour mur et boiseries (simplifie visuellement)',
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
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
              { href: '/peinture-paris', title: 'Peinture Paris' },
              { href: '/parquet-paris', title: 'Parquet Paris' },
              { href: '/blog/renovation-entree-paris', title: 'Rénovation entrée Paris' },
              { href: '/blog/amenagement-studio-paris', title: 'Aménagement studio Paris' },
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
          Transformez votre couloir parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Idées d&apos;aménagement sur mesure. Devis détaillé sous 48h.
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
