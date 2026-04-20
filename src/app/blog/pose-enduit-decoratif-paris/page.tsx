import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Pose enduit décoratif Paris',
      item: 'https://espacedesignparis.fr/blog/pose-enduit-decoratif-paris',
    },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Pose Enduit Décoratif Paris : béton ciré, stuc, tadelakt — prix & guide 2025",
  description:
    "Tout savoir sur la pose d'enduit décoratif à Paris : béton ciré, stuc vénitien, tadelakt, chaux. Prix au m², conseils de pose et artisans spécialisés 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/pose-enduit-decoratif-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix de pose d'un enduit décoratif à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix de pose d'un enduit décoratif à Paris varie selon la technique choisie. Le béton ciré coûte entre 80 et 150 € /m² fourni et posé. Le stuc vénitien revient à 90 à 180 € /m². Le tadelakt, plus technique, atteint 120 à 250 € /m². La chaux de finition décorative se situe entre 40 et 90 € /m². Ces tarifs incluent la préparation du support, les couches de fond et les couches de finition, mais hors maçonnerie lourde.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle est la différence entre béton ciré et stuc vénitien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le béton ciré est une résine chargée de ciment projetée en couche mince (2 à 3 mm) sur un support, puis cirée. Il est appliqué en sol et en mur et supporte l'humidité s'il est bien protégé. Le stuc vénitien est une technique italienne à base de chaux et de marbre en poudre, appliquée à la spatule sur les murs uniquement. Le stuc offre des reflets nacrés très décoratifs et une texture plus artisanale. Le béton ciré donne un rendu plus contemporain et industriel.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on poser un enduit décoratif dans une salle de bain à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, sous conditions. Le tadelakt est l'enduit le plus adapté aux pièces humides : à base de chaux hydraulique marocaine, il est naturellement imperméable et antibactérien. Le béton ciré en salle de bain est possible mais nécessite une protection renforcée (2 couches de cire + résine de finition) et une ventilation suffisante. Le stuc vénitien classique ne convient pas aux zones humides sans traitement hydrofuge spécifique. Dans tous les cas, le support (bac à douche, baignoire) doit être parfaitement étanche avant la pose.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Pose Enduit Décoratif Paris : béton ciré, stuc, tadelakt — prix & guide 2025",
  description:
    "Tout savoir sur la pose d'enduit décoratif à Paris : béton ciré, stuc vénitien, tadelakt, chaux. Prix au m², conseils de pose et artisans spécialisés 2025.",
}

export default function ArticlePoseEnduitDecoratif() {
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
            Finitions décoratives
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Pose Enduit Décoratif Paris : béton ciré, stuc vénitien & tadelakt 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Béton ciré sur sol et mur, stuc vénitien, tadelakt pour salle de bain, enduit chaux
            décoratif : guide complet des techniques, des prix au m² et des conseils pour choisir
            l&apos;artisan spécialisé à Paris.
          </p>
        </div>
      </section>

      {/* Section 1 — Techniques */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les grandes techniques d&apos;enduit décoratif à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              L&apos;enduit décoratif regroupe toutes les finitions de surface appliquées à la main
              ou à la spatule pour créer un rendu texturé, nacré ou minéral sur les murs, les sols
              et les plafonds. À Paris, quatre techniques dominent les chantiers de rénovation haut
              de gamme : le béton ciré, le stuc vénitien, le tadelakt et la chaux décorative.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Chaque technique a ses exigences : support parfaitement aplomb et sec, température de
              pose stable, temps de séchage entre couches respecté. Une mauvaise préparation du
              support (fissures, humidité remontante, peinture mal accrochée) conduit
              systématiquement à des décollements ou des taches. À Paris, où les appartements
              anciens présentent souvent des murs hétérogènes, cette étape préparatoire représente
              jusqu&apos;à 30 % du temps de chantier.
            </p>
            <div className="space-y-4">
              {[
                {
                  technique: 'Béton ciré',
                  application: 'Sol + mur + plan de travail',
                  prix: '80 – 150 € /m²',
                  detail:
                    "Mélange de résine et de ciment posé en 2 à 3 couches de 2 mm. Rendu minéral contemporain, palette de couleurs infinie. Compatible salle de bain avec protection renforcée. Très populaire dans les lofts et les cuisines ouvertes parisiennes.",
                },
                {
                  technique: 'Stuc vénitien',
                  application: 'Murs uniquement',
                  prix: '90 – 180 € /m²',
                  detail:
                    "Composition à base de chaux et de poussière de marbre, appliquée à la spatule en plusieurs passes croisées. Effet nacré, soyeux, lumineux. Exige une grande maîtrise gestuelle : chaque artisan a sa propre signature. Très demandé dans les salons et entrées haussmanniennes.",
                },
                {
                  technique: 'Tadelakt',
                  application: 'Mur + sol (pièces humides)',
                  prix: '120 – 250 € /m²',
                  detail:
                    "Enduit de chaux hydraulique d'origine marocaine, lissé au galet et savonné. Naturellement imperméable et antibactérien sans ajout de produits chimiques. La technique la plus complexe à poser : formation spécialisée obligatoire. Idéal pour les salles de bain et les hammams.",
                },
                {
                  technique: 'Chaux décorative (badigeon)',
                  application: 'Murs + plafonds',
                  prix: '40 – 90 € /m²',
                  detail:
                    "Application à la brosse de lait de chaux coloré en plusieurs passes. Rendu mat, légèrement irrégulier, très naturel. Respirant, idéal pour les murs anciens. Moins onéreux et moins technique que le stuc — parfait pour donner du caractère à un salon ou une chambre.",
                },
              ].map((el) => (
                <div key={el.technique} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <div>
                      <span className="font-medium text-[#1C1C1C] text-sm">{el.technique}</span>
                      <span className="ml-3 text-[10px] text-gray-400 font-light uppercase tracking-wider">
                        {el.application}
                      </span>
                    </div>
                    <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                  </div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tableau comparatif */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Tableau comparatif — enduits décoratifs à Paris
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Technique</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix /m²</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Zone humide</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée de vie</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tech: 'Béton ciré', prix: '80 – 150 €', humide: 'Oui (protégé)', duree: '10 – 20 ans' },
                    { tech: 'Stuc vénitien', prix: '90 – 180 €', humide: 'Non', duree: '20 – 30 ans' },
                    { tech: 'Tadelakt', prix: '120 – 250 €', humide: 'Oui (natif)', duree: '15 – 25 ans' },
                    { tech: 'Chaux décorative', prix: '40 – 90 €', humide: 'Non', duree: '10 – 15 ans' },
                    { tech: 'Mortier texturé', prix: '30 – 70 €', humide: 'Non', duree: '5 – 10 ans' },
                  ].map((row, i) => (
                    <tr key={row.tech} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                      <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.tech}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prix}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.humide}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Préparation & pose */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Préparation du support : l&apos;étape clé d&apos;une pose réussie
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
            À Paris, les murs en plâtre ancien, les cloisons en placoplâtre ou les carrelages
            existants exigent une préparation minutieuse avant toute pose d&apos;enduit décoratif.
            Un support non traité compromet l&apos;accroche et génère des fissurations prématurées,
            surtout dans les appartements anciens soumis aux mouvements saisonniers des structures.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La préparation comprend systématiquement : ragréage ou rebouchage des irrégularités,
            primaire d&apos;accrochage adapté à la technique choisie, bande armée sur les joints de
            plaques, protection des zones non concernées. Cette phase représente en moyenne 20 à
            30 % du budget total du poste.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Vérifiez l'hygrométrie du support (maxi 4 %) avant toute pose de béton ciré ou de stuc",
              "Sur carrelage existant, brossez et dégraissez soigneusement avant d'appliquer le primaire",
              "Préférez un artisan certifié par le fabricant de la gamme choisie (Cimentec, Mortex, etc.)",
              "Demandez à voir des réalisations en conditions similaires (même support, même pièce)",
              "Prévoyez 3 à 5 jours de séchage entre les couches — ne précipitez pas le chantier",
              "Protégez l'enduit fini avec un produit d'entretien adapté (cire naturelle, huile végétale) tous les 2 à 3 ans",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Applications & FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Enduit décoratif : quelle technique selon la pièce ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le choix de la technique dépend autant de l&apos;usage de la pièce que de
              l&apos;esthétique recherchée. En cuisine et salle de bain, la résistance à
              l&apos;humidité et la facilité de nettoyage priment. En salon, en chambre ou dans une
              entrée, c&apos;est l&apos;effet visuel qui guide le choix — profondeur du rendu,
              couleur, texture. La continuité entre les pièces est souvent recherchée : un béton
              ciré posé du salon à la cuisine ouverte unifie visuellement l&apos;espace.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Dans les appartements parisiens haussmanniens, l&apos;enduit décoratif est souvent
              utilisé pour moderniser les cloisons sans alourdir la pièce. Le stuc vénitien
              remplace avantageusement la peinture classique sur les grands murs de salon, en
              apportant du relief et de la profondeur. Le tadelakt est très prisé dans les salles
              de bain de standing, notamment dans les 7e, 8e et 16e arrondissements où les
              rénovations haut de gamme sont fréquentes.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-6">
              Questions fréquentes — enduit décoratif Paris
            </h2>
            <div className="space-y-4">
              {schemaFaq.mainEntity.map((q) => (
                <div key={q.name} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{q.name}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">
                    {q.acceptedAnswer.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">
            Voir aussi
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/beton-cire-paris', title: 'Béton ciré Paris' },
              { href: '/blog/stuc-venitien-paris', title: 'Stuc vénitien Paris' },
              { href: '/blog/peinture-effet-matiere-paris', title: 'Peinture effet matière Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Rénovation salle de bain Paris' },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="bg-white border border-gray-100 rounded-lg p-4 hover:border-[#D4AF37]/40 transition-colors group"
              >
                <span className="text-sm text-[#1C1C1C] font-light group-hover:text-[#B8960C] transition-colors">
                  {a.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">
            Nos zones d&apos;intervention
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-saint-germain-en-laye', label: 'Saint-Germain-en-Laye' },
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
          Un projet d&apos;enduit décoratif à Paris ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisans spécialisés béton ciré, stuc et
          tadelakt.
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
