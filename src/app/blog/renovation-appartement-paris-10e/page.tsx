import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 10e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-10e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 10e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 10e arrondissement de Paris : Canal Saint-Martin, République, Gare du Nord. Artisan, devis 48h.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-10e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation appartement dans le 10e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le 10e arrondissement, les prix de rénovation varient entre 1 400 et 2 800 €/m² selon le niveau de finition et le type de bien. Une rénovation légère (peinture, sol, électricité partielle) se situe autour de 600 à 1 000 €/m². Pour un appartement Canal Saint-Martin avec loft converti : comptez 1 500 à 2 500 €/m² (béton ciré, métal industriel, verrière). Pour un appartement Haussmannien rénové complètement : 1 800 à 2 800 €/m². Ces prix incluent main d'œuvre et matériaux.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment transformer un ancien entrepôt en loft dans le 10e ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La transformation d'un ancien entrepôt ou d'un atelier en loft nécessite plusieurs étapes : vérification de la conformité au PLU de Paris (changement de destination si le local était commercial ou industriel), étude structure pour valider la reprise des charges, création des lots techniques (salle de bain, cuisine, électricité aux normes), isolation thermique et phonique (les anciens entrepôts ont souvent une mauvaise isolation). Comptez 1 200 à 2 500 €/m² selon le niveau de finition souhaité et l'état initial du local.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on installer une verrière dans un appartement du 10e ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, une verrière intérieure est possible dans un appartement du 10e, sous réserve que le mur ou la cloison sur lequel elle est posée ne soit pas porteur. Si le mur est porteur, il faut créer un IPN (poutre métallique) pour reprendre les charges avant d'installer la verrière. Une verrière atelier acier noir coûte entre 1 500 et 5 000 € selon les dimensions, la qualité du vitrage (simple, double, feuilleté) et la complexité de la pose. Prévoir une déclaration préalable en mairie si la verrière modifie l'aspect extérieur du bâtiment.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les spécificités de la rénovation près de la Gare du Nord ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les immeubles du quartier Gare du Nord (autour des rues du Faubourg-Saint-Denis et Lafayette) sont souvent des immeubles de rapport construits entre 1880 et 1920, moins haussmanniens que ceux du centre. Les spécificités : hauteur sous plafond plus basse (2,50 à 2,70 m), installations électriques souvent vétustes à remettre entièrement aux normes, isolation phonique importante (ligne B du RER, trafic intense), présence fréquente d'amiante dans les colles de carrelage et les faux-plafonds (diagnostic obligatoire avant travaux).",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 10e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 10e arrondissement de Paris : Canal Saint-Martin, République, Gare du Nord. Artisan, devis 48h.',
}

export default function ArticleRenovationParis10e() {
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
            Paris
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Paris 10e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Canal Saint-Martin, République, Gare du Nord : le 10e arrondissement offre une diversité architecturale unique à Paris. Anciens entrepôts reconvertis en lofts, immeubles de rapport Belle Époque, ateliers d&apos;artistes — chaque bien a ses spécificités. Guide complet pour rénover dans le 10e en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Canal Saint-Martin et gentrification */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Canal Saint-Martin : lofts et espaces industriels reconvertis
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le quartier Canal Saint-Martin est l&apos;un des secteurs les plus dynamiques de Paris depuis les années 2010. D&apos;anciens entrepôts et ateliers industriels y ont été transformés en lofts ouverts très recherchés. Ce type de rénovation est exigeant : changement de destination, gros œuvre, isolation totale à créer, lots techniques à concevoir de zéro.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Le style industriel qui caractérise ces espaces repose sur des matériaux bruts — béton ciré, acier noir, bois vieilli, brique apparente — qui demandent une vraie expertise de mise en œuvre. Un béton ciré mal exécuté fissure et se tache ; une verrière industrielle mal étanchée crée des ponts thermiques importants.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Loft industriel : béton ciré et matériaux bruts',
                  detail: 'Béton ciré sur sol (30 à 80 €/m²), brique apparente dégagée et rejointoyée (20 à 40 €/m²), charpente métallique apparente peinte (selon devis), verrière atelier acier noir (1 500 à 5 000 € selon taille). Ces matériaux demandent des finitions soignées pour ne pas paraître inachevés.',
                },
                {
                  enjeu: 'Isolation thermique et phonique d\'un ancien entrepôt',
                  detail: 'Un entrepôt ou atelier non habité n\'a aucune isolation. Il faut créer de toutes pièces : doublage intérieur en laine de roche (60 à 120 €/m²), isolation du plancher bas, isolation de la toiture si accessible. Le résultat DPE peut passer de G à C après travaux.',
                },
                {
                  enjeu: 'Création des lots techniques',
                  detail: 'Salle de bain, cuisine, plomberie, électricité : tout est à créer dans un ancien entrepôt. La conception de l\'espace (plan, circulation, ensoleillement) est l\'étape clé. Prévoir un architecte d\'intérieur ou un maître d\'œuvre pour les projets de plus de 100 m².',
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

      {/* Section 2 — République et mixité architecturale */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            République et alentours : la mixité architecturale du 10e
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Autour de la place de la République et du faubourg Saint-Denis, le 10e concentre une grande variété d&apos;immeubles : Haussmanniens standards, immeubles de rapport de la Belle Époque (1880-1914), constructions d&apos;après-guerre et résidences récentes. Chaque type de bien appelle une approche spécifique.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Haussmannien standard du 10e',
                detail: 'Moins luxueux que le 6e, mais mêmes bases : moulures, parquet chêne, cheminée. La rénovation standard (cuisine, SDB, peinture, électricité) coûte 1 200 à 2 000 €/m². L\'occasion de moderniser sans dénaturer : cuisine ouverte possible si la cloison n\'est pas porteuse.',
                cout: '1 200 – 2 000 €/m²',
              },
              {
                titre: 'Immeuble de rapport Belle Époque',
                detail: 'Hauteurs sous plafond plus modestes (2,50 à 2,70 m), mais souvent des détails remarquables (carreaux de ciment, tomettes, ferronnerie d\'escalier). Préserver les éléments d\'époque valorise le bien. Mise aux normes électrique souvent urgente.',
                cout: '900 – 1 600 €/m²',
              },
              {
                titre: 'Construction d\'après-guerre',
                detail: 'Béton armé, double vitrage possible, mais isolation souvent insuffisante. L\'isolation par l\'intérieur (doublage laine de roche 60 mm + plaque de plâtre) améliore sensiblement le confort et le DPE. Pas de contraintes patrimoniales.',
                cout: '700 – 1 200 €/m²',
              },
              {
                titre: 'Ancien atelier ou commerce reconverti',
                detail: 'Dossier urbanisme à monter pour le changement de destination (PLU de Paris, mairie du 10e). Travaux : isolation totale, lot technique complet, ventilation, conformité ascenseur si existant. Budget plus élevé mais valeur créée importante.',
                cout: '1 500 – 2 800 €/m²',
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

      {/* Section 3 — Isolation phonique */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Isolation phonique dans le 10e : une priorité incontournable
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 10e est l&apos;un des arrondissements les plus animés de Paris : Gare du Nord, Gare de l&apos;Est, Canal Saint-Martin, boulevard de Strasbourg. L&apos;isolation phonique est un investissement essentiel pour le confort de vie et la valeur locative du bien.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Isolation des murs sur rue',
                prix: '80 – 150 €/m²',
                detail: 'Doublage intérieur avec laine de roche 45 mm sur ossature métallique désolidarisée, plaque de plâtre haute densité. Gain de 40 à 50 dB sur les bruits extérieurs. Perte de 6 à 8 cm sur la profondeur de la pièce. Recommandé pour tous les appartements donnant sur boulevard ou axe passant.',
              },
              {
                type: 'Double vitrage acoustique',
                prix: '400 – 900 € / fenêtre',
                detail: 'Remplacement des simples vitrages par du double vitrage feuilleté asymétrique (6/18/4 ou 44.2/16/44.2). Réduction du bruit de 35 à 42 dB selon le vitrage. À compléter par des joints d\'étanchéité périphériques. La pose dans les immeubles anciens requiert parfois une adaptation des tableaux de fenêtre.',
              },
              {
                type: 'Isolation du plancher',
                prix: '15 – 35 €/m²',
                detail: 'Sous-couche résiliente (liège, laine de roche, mousse) posée sous le revêtement de sol. Réduit les bruits d\'impact transmis aux voisins du dessous et reçus du dessus. Particulièrement important dans les immeubles sans plancher intermédiaire (anciens entrepôts).',
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
            Prix d&apos;une rénovation appartement Paris 10e en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tarifs main d&apos;œuvre et matériaux inclus pour un appartement dans le 10e arrondissement.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prestations</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Total 45 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Réfection légère',
                    prestations: 'Peinture, sol vinyle, électricité partielle',
                    prixM2: '600 – 1 000 €',
                    total: '27 000 – 45 000 €',
                  },
                  {
                    niveau: 'Rénovation standard',
                    prestations: 'Cuisine, SDB, peinture, sol, électricité complète',
                    prixM2: '1 200 – 1 800 €',
                    total: '54 000 – 81 000 €',
                  },
                  {
                    niveau: 'Rénovation complète',
                    prestations: 'Tout corps d\'état + isolation phonique + double vitrage',
                    prixM2: '1 800 – 2 500 €',
                    total: '81 000 – 112 500 €',
                  },
                  {
                    niveau: 'Loft industriel',
                    prestations: 'Création loft complet depuis ancien entrepôt ou atelier',
                    prixM2: '2 000 – 3 000 €',
                    total: '90 000 – 135 000 €',
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
              Conseils pour rénover dans le 10e arrondissement
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Faire un diagnostic amiante avant toute démolition dans un immeuble d\'avant 1997',
                'Vérifier le PLU pour les changements de destination (atelier vers logement)',
                'Prioriser l\'isolation phonique sur rue avant la décoration',
                'Conserver les éléments Belle Époque (carreaux de ciment, tomettes, ferronnerie)',
                'Anticiper la mise aux normes électrique complète pour les immeubles anciens',
                'Prévoir 10 à 15 % de contingence pour les découvertes en structure',
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

      {/* Guides connexes */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Guides connexes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-appartement-paris-4e', title: 'Rénovation appartement Paris 4e' },
              { href: '/blog/renovation-appartement-paris-6e', title: 'Rénovation appartement Paris 6e' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/renovation-cuisine-americaine-paris', title: 'Cuisine américaine Paris' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
              { href: '/renovation-paris', title: 'Rénovation Paris — tous arrondissements' },
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
              { href: '/renovation-paris-9e', label: 'Paris 9e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-paris-19e', label: 'Paris 19e' },
              { href: '/renovation-saint-denis', label: 'Saint-Denis' },
              { href: '/renovation-pantin', label: 'Pantin' },
              { href: '/renovation-aubervilliers', label: 'Aubervilliers' },
              { href: '/renovation-bobigny', label: 'Bobigny' },
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
          Rénovation appartement Paris 10e : devis gratuit sous 48h
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisans expérimentés en rénovation d&apos;appartements et de lofts dans le 10e arrondissement. Devis sous 48h.
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
