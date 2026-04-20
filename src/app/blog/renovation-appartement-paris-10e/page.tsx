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
  headline: "Rénovation Appartement Paris 10e : Canal Saint-Martin & prix 2025 | Espace Design",
  description: "Artisan rénovation Paris 10e arrondissement : Canal Saint-Martin, République, Gare du Nord. Quartier en forte demande locative, prix 2025.",
  datePublished: '2025-01-15',
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
      name: "Quel est le prix d'une rénovation appartement dans le 10e arrondissement ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le 10e arrondissement, les prix de rénovation varient entre 600 et 2 800 €/m² selon le niveau de finition et le type de bien. Une rénovation légère (peinture, sol, électricité partielle) se situe autour de 600 à 1 000 €/m². Pour un appartement Canal Saint-Martin avec loft converti : comptez 1 500 à 2 500 €/m² (béton ciré, métal industriel, verrière). Pour un appartement haussmannien rénové complètement : 1 800 à 2 800 €/m². Ces prix incluent main d'œuvre et matériaux.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelles sont les spécificités de la rénovation pour investissement locatif dans le 10e ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le 10e est particulièrement prisé par les investisseurs locatifs grâce à la proximité des Gares du Nord et de l'Est, du Canal Saint-Martin et de la place de la République. Pour optimiser le rendement locatif, les travaux prioritaires sont : remise aux normes électrique (obligatoire pour louer décemment), isolation phonique (le 10e est bruyant — boulevard de Strasbourg, axe ferroviaire), cuisine fonctionnelle ouverte, salle de bain refaite à neuf. Budget moyen pour un T2 de 40 m² prêt à louer : 20 000 à 45 000 €.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment transformer un ancien entrepôt en loft dans le 10e ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La transformation d'un ancien entrepôt ou atelier en loft nécessite plusieurs étapes : vérification de la conformité au PLU de Paris (changement de destination si le local était commercial ou industriel), étude structure pour valider la reprise des charges, création des lots techniques (salle de bain, cuisine, électricité aux normes), isolation thermique et phonique. Comptez 1 200 à 2 500 €/m² selon le niveau de finition et l'état initial du local. Un architecte est recommandé pour les changements de destination.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelles sont les spécificités de la rénovation près de la Gare du Nord ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les immeubles du quartier Gare du Nord (autour des rues du Faubourg-Saint-Denis et Lafayette) sont souvent des immeubles de rapport construits entre 1880 et 1920. Les spécificités : hauteur sous plafond plus basse (2,50 à 2,70 m), installations électriques souvent vétustes à remettre entièrement aux normes, isolation phonique importante (RER B, trafic intense), présence fréquente d'amiante dans les colles de carrelage et les faux-plafonds (diagnostic obligatoire avant travaux dans les immeubles d'avant 1997).",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Rénovation Appartement Paris 10e : Canal Saint-Martin & prix 2025 | Espace Design",
  description: "Artisan rénovation Paris 10e arrondissement : Canal Saint-Martin, République, Gare du Nord. Quartier en forte demande locative, prix 2025.",
  keywords: "rénovation appartement Paris 10e, artisan Paris 10e, rénovation Canal Saint-Martin",
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
            Arrondissements
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Paris 10e : Canal Saint-Martin &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Canal Saint-Martin, République, Gare du Nord : le 10e arrondissement est l&apos;un des plus dynamiques de Paris. Forte demande locative, parc immobilier diversifié, quartiers en mutation — rénover dans le 10e est un investissement stratégique. Guide complet pour votre projet en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Spécificités du 10e */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Spécificités du 10e : Canal Saint-Martin, gares et mix résidentiel
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 10e arrondissement offre une diversité architecturale et sociale unique à Paris. Ses trois quartiers principaux — Canal Saint-Martin, République-Strasbourg-Saint-Denis et Gare du Nord-Gare de l&apos;Est — présentent des enjeux de rénovation très différents.
            </p>
            <div className="space-y-4">
              {[
                {
                  quartier: "Canal Saint-Martin : le quartier branché",
                  detail: "Depuis les années 2010, le quartier Canal Saint-Martin est l'un des secteurs les plus gentrifiés de Paris. D'anciens entrepôts et ateliers industriels y ont été transformés en lofts et appartements ouverts recherchés. Style industriel (béton ciré, acier noir, brique apparente), cuisine ouverte avec verrière, isolation phonique renforcée : voilà les travaux emblématiques du secteur.",
                },
                {
                  quartier: "Gares du Nord et de l'Est : porte d'entrée de Paris",
                  detail: "Les quartiers autour des deux gares concentrent une forte densité locative. Les immeubles sont majoritairement des constructions de rapport de la Belle Époque (1880-1920) aux hauteurs sous plafond modestes (2,50 à 2,70 m). La remise aux normes électrique et l'isolation phonique sont les travaux les plus urgents et les plus valorisants pour l'investissement locatif.",
                },
                {
                  quartier: "République et Strasbourg-Saint-Denis : mix résidentiel varié",
                  detail: "Autour de la place de la République, le 10e offre une grande variété d'immeubles : haussmanniens standards, résidences des années 1960-1970, et petites copropriétés de type immeuble de rapport. Chaque bien appelle une approche spécifique selon son état, son époque et sa configuration.",
                },
              ].map((el) => (
                <div key={el.quartier} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.quartier}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Parc immobilier */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Parc immobilier du 10e : haussmannien, grands immeubles 70s et petites copropriétés
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Comprendre le type d&apos;immeuble dans lequel se trouve votre appartement est essentiel pour anticiper les contraintes et les coûts de rénovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Haussmannien standard du 10e",
                detail: "Moins luxueux que ceux du 6e ou du 8e, mais mêmes bases : moulures, parquet chêne, cheminée, hauteur sous plafond 2,80 m. La rénovation standard coûte 1 200 à 2 000 €/m². L'occasion de moderniser sans dénaturer : cuisine ouverte possible si cloison non porteuse.",
                cout: "1 200 – 2 000 €/m²",
              },
              {
                titre: "Immeuble de rapport Belle Époque",
                detail: "Hauteurs sous plafond plus modestes (2,50 à 2,70 m), mais souvent des détails remarquables : carreaux de ciment, tomettes, ferronnerie. Mise aux normes électrique souvent urgente. Conserver les éléments d'époque valorise fortement le bien.",
                cout: "900 – 1 600 €/m²",
              },
              {
                titre: "Grand immeuble des années 1970",
                detail: "Béton armé, double vitrage possible, mais isolation thermique insuffisante et équipements vieillissants. Isolation par l'intérieur + remplacement fenêtres améliorent sensiblement le DPE. Pas de contraintes patrimoniales.",
                cout: "700 – 1 200 €/m²",
              },
              {
                titre: "Ancien atelier ou entrepôt reconverti",
                detail: "Dossier urbanisme pour changement de destination (PLU de Paris). Travaux : isolation totale à créer, lot technique complet, ventilation, conformité. Budget plus élevé mais valeur créée très importante dans le 10e.",
                cout: "1 500 – 2 800 €/m²",
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

      {/* Section 3 — Travaux les plus demandés (investisseurs locatifs) */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux les plus demandés dans le 10e par les investisseurs locatifs
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 10e est l&apos;un des arrondissements les plus actifs en termes d&apos;investissement locatif parisien. La proximité des grandes gares, du Canal Saint-Martin et de la place de la République attire une clientèle de locataires diversifiée et exigeante.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: "Remise aux normes électrique complète",
                prix: "3 000 – 8 000 €",
                detail: "Obligatoire pour louer légalement un logement décent. Dans les immeubles du 10e d'avant 1970, les installations électriques (fuse-based, mono-phase, tableau non différentiel) sont souvent à refaire intégralement. Comptez 3 000 à 8 000 € pour un appartement de 40 à 80 m².",
              },
              {
                type: "Isolation phonique sur rue",
                prix: "80 – 150 €/m² de mur",
                detail: "Le 10e est l'un des arrondissements les plus bruyants de Paris (Gare du Nord, RER B, boulevard de Strasbourg, canal). L'isolation phonique est un investissement rentable : elle augmente le loyer potentiel et réduit la vacance locative. Double vitrage acoustique + doublage des murs sur rue.",
              },
              {
                type: "Réfection complète salle de bain",
                prix: "6 000 – 15 000 €",
                detail: "Une salle de bain refaite à neuf (douche à l'italienne, faïence contemporaine, robinetterie design) est le premier critère de décision des locataires dans le 10e. Comptez 6 000 à 15 000 € pour une salle de bain de 4 à 8 m² selon les finitions.",
              },
              {
                type: "Cuisine ouverte avec électroménager encastré",
                prix: "8 000 – 18 000 €",
                detail: "La cuisine ouverte est le second critère prioritaire. Dans un studio ou T2 du 10e, abattre une cloison légère pour ouvrir la cuisine sur le séjour agrandit visuellement le bien de 20 à 30 % sans toucher aux m² réels. ROI locatif significatif.",
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
            Prix rénovation appartement Paris 10e en 2025
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
                    niveau: "Réfection légère",
                    prestations: "Peinture, sol vinyle, électricité partielle",
                    prixM2: "600 – 1 000 €",
                    total: "27 000 – 45 000 €",
                  },
                  {
                    niveau: "Rénovation standard",
                    prestations: "Cuisine, SDB, peinture, sol, électricité complète",
                    prixM2: "1 200 – 1 800 €",
                    total: "54 000 – 81 000 €",
                  },
                  {
                    niveau: "Rénovation complète",
                    prestations: "Tout corps d'état + isolation phonique + double vitrage",
                    prixM2: "1 800 – 2 500 €",
                    total: "81 000 – 112 500 €",
                  },
                  {
                    niveau: "Loft industriel",
                    prestations: "Création loft complet depuis ancien entrepôt ou atelier",
                    prixM2: "2 000 – 3 000 €",
                    total: "90 000 – 135 000 €",
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
                "Faire un diagnostic amiante avant toute démolition dans un immeuble d'avant 1997 — obligation légale",
                "Vérifier le PLU pour les changements de destination (atelier vers logement)",
                "Prioriser l'isolation phonique sur rue avant la décoration — impact direct sur le loyer",
                "Conserver les éléments Belle Époque (carreaux de ciment, tomettes, ferronnerie) — forte valeur ajoutée",
                "Anticiper la mise aux normes électrique complète pour les immeubles anciens",
                "Prévoir 10 à 15 % de contingence pour les découvertes en structure",
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
              { href: '/blog/renovation-appartement-paris-11e', title: 'Rénovation appartement Paris 11e' },
              { href: '/blog/isolation-phonique-paris', title: 'Isolation phonique Paris' },
              { href: '/blog/renovation-cuisine-ouverte-paris', title: 'Cuisine ouverte Paris' },
              { href: '/blog/pose-parquet-paris', title: 'Pose parquet Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénovation appartement ancien Paris' },
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

      {/* CTA */}
      <section className="py-16 bg-[#D4AF37] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1C1C] mb-4">
          Rénovation appartement Paris 10e : devis gratuit sous 48h
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisans expérimentés en rénovation d&apos;appartements dans le 10e arrondissement. Canal Saint-Martin, République, Gare du Nord.
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
