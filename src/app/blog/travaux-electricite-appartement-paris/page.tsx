import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Travaux Électricité Appartement Paris', item: 'https://espacedesignparis.fr/blog/travaux-electricite-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Travaux Électricité Appartement Paris : mise aux normes & prix 2025 | Espace Design',
  description: 'Mettre aux normes l\'électricité d\'un appartement à Paris : tableau, prises, éclairage. Prix et artisan RGE. Devis gratuit 48h.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/travaux-electricite-appartement-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une mise aux normes électriques dans un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La mise aux normes électriques d\'un appartement à Paris coûte entre 3 000 et 8 000 € selon la surface et l\'état de l\'installation existante. Ce prix comprend le remplacement du tableau électrique, la pose de disjoncteurs différentiels par circuit, la mise à la terre des prises, et la vérification du câblage. Pour un appartement de 50 m² avec installation vétuste, comptez entre 4 000 et 6 000 €. Pour une rénovation complète du câblage (logement des années 1960-70), le budget peut dépasser 10 000 €.',
      },
    },
    {
      '@type': 'Question',
      name: 'Est-il obligatoire de faire un diagnostic électrique avant de vendre un appartement à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, le diagnostic électrique (ESRIS ou anciennement DPE électricité) est obligatoire lors de la vente d\'un logement dont l\'installation électrique a plus de 15 ans. Ce diagnostic identifie les anomalies et points de danger. Il n\'impose pas la réalisation de travaux avant la vente, mais le résultat est transmis à l\'acheteur qui peut l\'utiliser pour négocier le prix. En location, le bailleur doit garantir une installation électrique conforme à la norme NF C 15-100.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps durent les travaux d\'électricité dans un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La durée des travaux d\'électricité dépend de l\'ampleur de la rénovation. Un remplacement de tableau électrique seul prend 1 journée. La mise aux normes d\'un appartement de 50 m² (tableau + prises de terre + quelques circuits) dure 3 à 5 jours. Une réfection complète du câblage d\'un appartement haussmannien de 100 m² nécessite de 7 à 10 jours. Ces durées incluent la pose de nouvelles gaines, le passage des câbles, et la remise en état des saignées.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Travaux Électricité Appartement Paris : mise aux normes & prix 2025 | Espace Design',
  description: 'Mettre aux normes l\'électricité d\'un appartement à Paris : tableau, prises, éclairage. Prix et artisan RGE. Devis gratuit 48h.',
}

export default function ArticleElectriciteAppartementParis() {
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
            Électricité
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Travaux Électricité Appartement Paris : mise aux normes & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Des installations vétustes des années 1960 aux tableaux électriques non conformes, les appartements parisiens présentent souvent des défauts électriques sérieux. Norme NF C 15-100, tableau, prises de terre, câblage : guide complet pour une mise aux normes sécurisée en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Norme NF C 15-100 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              La norme NF C 15-100 : ce qu&apos;elle impose dans un appartement
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La norme NF C 15-100 est le référentiel français qui régit l&apos;ensemble des installations électriques basse tension dans les logements. Elle est mise à jour régulièrement et s&apos;impose pour tout logement neuf ou rénové. Dans un appartement parisien ancien, la conformité à cette norme est souvent partielle ou absente.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Les principaux points de non-conformité relevés dans les appartements anciens : absence de mise à la terre, tableau électrique sans disjoncteurs différentiels, nombre de prises insuffisant par pièce, et câblage en aluminium ou de section inadaptée aux usages actuels.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Tableau électrique et disjoncteurs différentiels',
                  detail: 'La norme impose un disjoncteur différentiel 30 mA par groupe de circuits (éclairage, prises, cuisine, salle de bain...). Chaque circuit doit être protégé individuellement. Un tableau vétuste avec un seul disjoncteur général ne permet pas de couper sélectivement un circuit défaillant — situation dangereuse et non conforme.',
                },
                {
                  enjeu: 'Prises de terre obligatoires',
                  detail: 'Toutes les prises doivent être équipées d\'une broche de terre. En salle de bain et en cuisine, c\'est une obligation absolue depuis la révision 2002 de la norme. Une prise sans terre dans ces pièces représente un risque d\'électrocution grave, notamment en présence d\'eau.',
                },
                {
                  enjeu: 'Section minimale des câbles par circuit',
                  detail: 'La section minimale est de 1,5 mm² pour l\'éclairage et de 2,5 mm² pour les prises. Les circuits spécialisés (four, lave-linge, lave-vaisselle, four, climatisation) nécessitent des sections de 4 à 6 mm². Un câblage sous-dimensionné chauffe et représente un risque d\'incendie.',
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

      {/* Section 2 — Tableau électrique */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Remplacement du tableau électrique : coffret, disjoncteurs et câblage
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le tableau électrique est le coeur de l&apos;installation. Dans les appartements parisiens construits avant 1980, il est fréquent de trouver des tableaux à fusibles à vis (pas de disjoncteurs), des coffrets de petite capacité inadaptés aux usages modernes, ou des installations sans séparation de circuits. Le remplacement s&apos;impose alors pour garantir la sécurité et la conformité.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Coffret de tableau moderne',
                solution: 'Tableau de répartition avec rail DIN, disjoncteur général de branchement (AGCP), rangée de disjoncteurs divisionnaires et rangée de disjoncteurs différentiels 30 mA. Le nombre de rangées dépend du nombre de circuits (compter 1 circuit par pièce + circuits spécialisés).',
                cout: '300 – 600 €',
              },
              {
                titre: 'Disjoncteurs différentiels',
                solution: 'Un disjoncteur différentiel 30 mA doit protéger chaque groupe de circuits. Il coupe l\'alimentation dès qu\'un défaut d\'isolation est détecté (fuite de courant), évitant l\'électrocution. La norme impose une sélectivité entre le différentiel général et les différentiels de circuits.',
                cout: '50 – 120 € / unité',
              },
              {
                titre: 'Circuits dédiés cuisine et salle de bain',
                solution: 'La cuisine nécessite au minimum 4 circuits dédiés selon la norme NF C 15-100 (prises, hotte, lave-vaisselle, four/plaques). La salle de bain exige un circuit dédié avec différentiel 30 mA et des prises situées à plus de 60 cm du bac ou de la douche.',
                cout: '400 – 1 200 €',
              },
              {
                titre: 'Mise à la terre du réseau',
                solution: 'La mise à la terre relie toutes les masses métalliques (châssis d\'appareils, carcasses) à la terre, permettant l\'évacuation des courants de défaut. En immeuble, la prise de terre est collective : vérifier sa continuité depuis le tableau jusqu\'aux prises est indispensable.',
                cout: 'Inclus dans la mise aux normes',
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

      {/* Section 3 — Câblage et prises */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Câblage, prises de terre et éclairage : travaux courants
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Au-delà du tableau, la mise aux normes d&apos;un appartement parisien implique souvent de revoir le câblage existant, d&apos;ajouter des prises conformes et de moderniser l&apos;éclairage. Ces travaux nécessitent d&apos;ouvrir des saignées dans les murs ou d&apos;utiliser des goulottes en apparent lorsque la configuration de l&apos;appartement ne permet pas de passer les câbles en encastré.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Remplacement des prises sans terre',
                prix: '30 – 80 € / prise',
                detail: 'Remplacement des prises deux broches par des modèles trois broches avec raccordement au conducteur de protection (terre). Dans un appartement de 60 m², comptez 20 à 40 prises à remplacer selon la configuration. Le coût intègre la vérification de la continuité de la mise à la terre jusqu\'au tableau.',
              },
              {
                type: 'Passage de gaines et tirage de câbles',
                prix: '25 – 60 € / ml',
                detail: 'Pour relier un nouveau circuit au tableau, il faut passer un câble depuis le coffret jusqu\'aux prises ou luminaires. En appartement haussmannien (murs épais), le passage en saignée est délicat et coûteux. En construction plus récente, les goulottiers encastrés facilitent le passage. Compter la reprise de l\'enduit après saignée.',
              },
              {
                type: 'Modernisation de l\'éclairage (LED et variateurs)',
                prix: '80 – 300 € / pièce',
                detail: 'Remplacement des luminaires encastrés halogènes par des spots LED basse consommation, installation de variateurs de lumière conformes (compatibles LED), et ajout de circuits d\'éclairage décoratif (bandeaux LED dans les cuisines et salles de bain). Les LED consomment 5 à 8 fois moins que l\'halogène.',
              },
              {
                type: 'Prises de courant spécialisées (cuisine)',
                prix: '150 – 400 € / circuit',
                detail: 'Ajout de prises dédiées pour les gros appareils électroménagers (lave-vaisselle, four, réfrigérateur) sur des circuits protégés individuellement. Chaque prise spécialisée doit avoir son propre disjoncteur 20 A et être raccordée en câble 2,5 mm².',
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

      {/* Section 4 — Budget */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix d&apos;une mise aux normes électriques à Paris : tableau récapitulatif
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent main d&apos;oeuvre et matériaux inclus, pour un appartement parisien standard. La durée des travaux est indiquée à titre indicatif.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Durée</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    prestation: 'Remplacement tableau électrique seul',
                    prix: '800 – 1 500 €',
                    duree: '1 journée',
                  },
                  {
                    prestation: 'Mise aux normes partielle (tableau + prises)',
                    prix: '2 000 – 4 000 €',
                    duree: '3 – 5 jours',
                  },
                  {
                    prestation: 'Mise aux normes complète (50 m²)',
                    prix: '3 000 – 6 000 €',
                    duree: '5 – 7 jours',
                  },
                  {
                    prestation: 'Réfection totale du câblage (100 m²)',
                    prix: '6 000 – 12 000 €',
                    duree: '7 – 10 jours',
                  },
                  {
                    prestation: 'Diagnostic électrique seul',
                    prix: '100 – 200 €',
                    duree: '2 – 3 heures',
                  },
                ].map((row, i) => (
                  <tr key={row.prestation} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.prestation}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Points de vigilance avant de lancer les travaux
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Faire réaliser un diagnostic électrique complet avant tout chiffrage — impossible d\'évaluer sans voir l\'installation',
                'Vérifier que l\'artisan est qualifié Qualifelec ou équivalent pour les travaux d\'électricité',
                'Anticiper la remise en état des murs après saignées (enduit, peinture) dans le budget global',
                'Profiter des travaux d\'électricité pour tirer les gaines réseau informatique en même temps',
                'En copropriété, vérifier l\'accès au tableau général et les règles de modification du compteur',
                'Conserver le schéma électrique à jour du tableau — obligatoire et indispensable en cas d\'intervention future',
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
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-6 text-center">Questions fréquentes</p>
          <div className="space-y-6">
            {schemaFaq.mainEntity.map((q) => (
              <div key={q.name} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-3">{q.name}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{q.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/electricite-paris', title: 'Électricité Paris' },
              { href: '/renovation-appartement-paris', title: 'Rénovation appartement Paris' },
              { href: '/blog/renovation-salle-de-bain-prix-paris', title: 'Prix rénovation salle de bain Paris' },
              { href: '/blog/carrelage-salle-de-bain-paris', title: 'Carrelage salle de bain Paris' },
              { href: '/contact', title: 'Demander un devis gratuit' },
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
          Mettez votre installation électrique aux normes
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisan électricien qualifié à Paris.
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
