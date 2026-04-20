import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Montmartre Paris 18e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-montmartre-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Montmartre Paris 18e : atypique & charmant 2025 | Espace Design',
  description: 'Rénover à Montmartre (18e) : maisons vigneronnes, appartements en duplex, escaliers étroits. Prix et guide artisan 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-montmartre-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels types de biens trouve-t-on à Montmartre (18e) ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Montmartre (Paris 18e) est unique car on y trouve des maisons vigneronnes et de village avec jardins (rarissimes à Paris), des appartements anciens du XIXe siècle, des duplex sous les toits avec toits mansardés, et d'anciens ateliers d'artistes. Ces biens ont souvent des configurations atypiques : niveaux décalés, escaliers étroits, caves voûtées, structures en meulière. Leur rénovation est plus complexe mais le résultat est très recherché.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment rénover un duplex sous les toits à Montmartre ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La rénovation d'un duplex sous les toits à Montmartre implique plusieurs spécificités : isolation de la toiture (indispensable — le toit mansardé est non isolé dans la plupart des immeubles anciens), traitement des poutres de charpente (sablage, lasure ou peinture), création d'un escalier intérieur si inexistant, et parfois installation de velux (avec accord ABF si le bâtiment est en zone protégée). Budget isolation toiture : 80 à 150 €/m². Budget velux : 1 500 à 4 000 € l'unité posée.",
      },
    },
    {
      '@type': 'Question',
      name: 'Montmartre est-il en secteur sauvegardé ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une partie de Montmartre est protégée au titre des sites et monuments historiques, notamment autour du Sacré-Cœur et de la Butte. Les modifications de façade nécessitent l'accord de l'ABF. Les travaux intérieurs sont libres dans la plupart des cas. Il convient de vérifier le statut exact de votre bien auprès de la mairie du 18e avant de démarrer. Comptez 2 à 3 mois d'instruction pour une déclaration préalable ABF.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Montmartre Paris 18e : atypique & charmant 2025 | Espace Design',
  description: 'Rénover à Montmartre (18e) : maisons vigneronnes, appartements en duplex, escaliers étroits. Prix et guide artisan 2025.',
}

export default function ArticleMontmartre() {
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
            Quartiers
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Montmartre Paris 18e : atypique &amp; charmant 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Montmartre est l&apos;un des quartiers les plus atypiques de Paris. Maisons vigneronnes avec jardin, appartements anciens en meulière, duplex sous les toits, escaliers étroits — chaque bien est unique. Rénover ici demande une expérience spécifique et un artisan capable de s&apos;adapter à des configurations hors norme. Ce guide fait le point.
          </p>
        </div>
      </section>

      {/* Section 1 — Profil du quartier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Montmartre : un quartier aux biens atypiques et chargés d&apos;histoire
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Contrairement à d&apos;autres quartiers parisiens dominés par un seul type de bâti, Montmartre présente une diversité architecturale exceptionnelle qui s&apos;explique par son histoire de village absorbé par Paris à la fin du XIXe siècle. On y trouve des configurations qu&apos;on ne trouve nulle part ailleurs à Paris.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Une partie de Montmartre est protégée au titre des sites et monuments historiques, notamment autour du Sacré-Cœur et de la Butte. Les modifications de façade nécessitent l&apos;accord de l&apos;ABF. Comptez 2 à 3 mois d&apos;instruction pour une déclaration préalable.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Maisons vigneronnes et maisons de village avec jardin',
                  detail: 'Rarissimes à Paris, les maisons de village de Montmartre (rue Lepic, rue de l&apos;Abreuvoir, villa Léandre) sont parmi les biens les plus recherchés de la capitale. Construites aux XVIIIe et XIXe siècles, elles présentent des structures en meulière, des planchers anciens et parfois des caves voûtées spectaculaires.',
                },
                {
                  enjeu: 'Appartements en duplex sous les toits mansardés',
                  detail: 'Les duplex sous les toits de Montmartre offrent des volumes atypiques avec charpente apparente et volumes mansardés. L&apos;isolation de la toiture est indispensable (80 à 150 €/m²). Les velux (1 500 à 4 000 € l&apos;unité posée) nécessitent un accord ABF dans les secteurs protégés.',
                },
                {
                  enjeu: 'Accès difficile — livraisons en rue pavée',
                  detail: 'Les ruelles en escalier et les rues pavées de la Butte Montmartre rendent impossible l&apos;accès aux camions de livraison. Tout doit être monté à la main ou via des monte-matériaux. Ce surcoût logistique doit être intégré au devis — comptez 10 à 20 % de plus sur la main d&apos;œuvre.',
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

      {/* Section 2 — Spécificités techniques */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Spécificités techniques : escaliers étroits, chauffage ancien, meulière
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Chaque appartement de Montmartre réserve des surprises que seul un artisan expérimenté dans ce quartier peut anticiper. Voici les principaux points de vigilance techniques.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Escaliers étroits à restaurer',
                solution: 'Les escaliers des maisons et immeubles anciens de Montmartre sont souvent étroits (60 à 80 cm) et en bois massif. Leur restauration comprend : ponçage des marches, remplacement des barreaux cassés, renforcement de la structure si nécessaire. Coût : 200 à 600 € par marche selon l&apos;état.',
                cout: '200 – 600 €/marche',
              },
              {
                titre: 'Chauffage ancien à rénover',
                solution: 'La plupart des immeubles anciens de Montmartre fonctionnent avec du chauffage central collectif ou des convecteurs électriques vétustes. La mise en place d&apos;un plancher chauffant ou de radiateurs à eau nécessite une refonte complète de la plomberie chauffage.',
                cout: '8 000 – 18 000 €',
              },
              {
                titre: 'Structures en meulière',
                solution: 'La meulière (pierre volcanique locale) est un matériau résistant mais difficile à percer et à travailler. Les passages de gaines (électricité, plomberie) sont plus longs qu&apos;en béton ou parpaing. Prévoyez 15 à 20 % de temps supplémentaire pour ce type de structure.',
                cout: 'Surcoût 15 – 20 %',
              },
              {
                titre: 'Isolation toiture et combles',
                solution: 'Les toits mansardés des duplex et combles de Montmartre sont souvent non isolés. L&apos;isolation par l&apos;intérieur (laine de verre ou laine de roche sous les rampants) est la solution la plus courante. Indispensable avant toute autre finition — sous peine de condensation et de perte thermique.',
                cout: '80 – 150 €/m²',
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

      {/* Section 3 — Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix d&apos;une rénovation à Montmartre en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix de rénovation à Montmartre sont plus variables qu&apos;ailleurs, car le type de bien influence fortement le coût. Une maison de village sur 3 niveaux en meulière ne se rénove pas comme un appartement standard dans un immeuble des années 1900.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de bien</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Description</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Appartement standard — rafraîchissement',
                    prestations: 'Peinture, sol, luminaires — sans modification des installations',
                    prixM2: '400 – 800 €',
                  },
                  {
                    niveau: 'Appartement standard — rénovation complète',
                    prestations: 'Électricité, plomberie, cuisine, SDB, sols, peintures',
                    prixM2: '1 200 – 2 000 €',
                  },
                  {
                    niveau: 'Duplex sous les toits',
                    prestations: 'Rénovation complète + isolation toiture + velux',
                    prixM2: '1 500 – 2 500 €',
                  },
                  {
                    niveau: 'Maison de village ou atelier',
                    prestations: 'Structures en meulière, caves voûtées, accès difficile',
                    prixM2: '2 000 – 3 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.niveau} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.niveau}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prestations}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils spécifiques pour rénover à Montmartre
            </h3>
            <div className="space-y-3">
              {[
                'Anticiper l\'accès difficile — prévoir un monte-matériaux ou un portage à la main pour les livraisons',
                'Toujours isoler la toiture avant les finitions — indispensable dans les duplex et combles',
                'Vérifier la protection ABF du bien avant de planifier les velux ou le ravalement',
                'Traiter l\'humidité des caves voûtées avant toute réhabilitation en espace de vie',
                'Demander des références sur des chantiers en meulière — matériau spécifique nécessitant de l\'expérience',
                'Restaurer les escaliers anciens plutôt que les remplacer — coût et valeur patrimoniale',
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
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénover un appartement ancien à Paris' },
              { href: '/blog/chauffage-appartement-paris', title: 'Chauffage appartement Paris — guide 2025' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/renovation-escalier-paris', title: 'Rénovation escalier Paris — prix & guide' },
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
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-paris-19e', label: 'Paris 19e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-saint-denis', label: 'Saint-Denis' },
              { href: '/renovation-clichy', label: 'Clichy' },
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
          Vous rénovez un bien à Montmartre ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Maison de village, duplex, atelier d&apos;artiste — devis gratuit sous 48h dans le 18e.
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
