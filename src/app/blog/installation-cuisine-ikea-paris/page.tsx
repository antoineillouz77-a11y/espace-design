import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: "Installation Cuisine IKEA Paris : montage, pose & prix artisan 2025",
  description: "Faire installer sa cuisine IKEA à Paris par un artisan pro : étapes, prix, avantages vs bricolage. Devis gratuit, intervention rapide. Appelez le 06 11 78 38 67.",
  keywords: [
    "installation cuisine ikea paris",
    "pose cuisine ikea paris",
    "montage cuisine ikea artisan",
    "installateur cuisine ikea paris",
    "artisan cuisine ikea paris",
    "prix installation cuisine ikea paris",
    "cuisine ikea par professionnel paris",
    "plombier cuisine ikea paris",
  ],
}

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Installation Cuisine IKEA Paris : montage, pose & prix artisan 2025",
  description: "Faire installer sa cuisine IKEA à Paris par un artisan pro : étapes, prix, avantages vs bricolage. Devis gratuit, intervention rapide.",
  author: { "@type": "Organization", name: "Espace Design" },
  publisher: {
    "@type": "Organization",
    name: "Espace Design",
    url: "https://espacedesignparis.fr",
  },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  url: "https://espacedesignparis.fr/blog/installation-cuisine-ikea-paris",
}

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien coute l'installation cuisine IKEA a Paris ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le prix d'installation d'une cuisine IKEA a Paris par un artisan varie entre 800 et 2 500 euros selon la surface, la complexite et les travaux annexes (plomberie, electricite). Pour une cuisine standard de 6 a 10 m2, comptez en moyenne 1 200 a 1 800 euros de main-d'oeuvre. Ce tarif inclut le montage des meubles, la fixation murale, la pose du plan de travail et le raccordement des equipements.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il un plombier pour installer une cuisine IKEA ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, un raccordement plomberie est indispensable pour l'evier, le lave-vaisselle et parfois le frigo americain. Un artisan renovation polyvalent comme Espace Design realise ces raccordements en meme temps que l'installation des meubles, ce qui evite de coordonner plusieurs corps de metier et fait gagner du temps et de l'argent.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la duree d'installation d'une cuisine IKEA ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'installation d'une cuisine IKEA par un professionnel prend en general 1 a 3 jours selon la taille et la complexite. Une cuisine de 5 modules simples peut etre posee en une journee, tandis qu'une cuisine en L ou en U avec ilot central necessite 2 a 3 jours, en incluant la plomberie et l'electricite.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on modifier un plan IKEA avec un artisan ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolument. Un artisan experimente peut adapter, modifier ou optimiser votre plan IKEA en fonction des contraintes de votre appartement parisien : prise d'air, gaine technique, mur porteur, compteur electrique. Il peut aussi integrer des elements non-IKEA (hotte, electromenager encastrable, plan de travail sur mesure) pour un resultat sur mesure.",
      },
    },
  ],
}

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://espacedesignparis.fr" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://espacedesignparis.fr/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Installation Cuisine IKEA Paris",
      item: "https://espacedesignparis.fr/blog/installation-cuisine-ikea-paris",
    },
  ],
}

const etapes = [
  {
    num: "01",
    titre: "Diagnostic et mesures",
    desc: "L'artisan visite votre cuisine, prend les mesures précises, repère les alimentations eau, gaz et électricité, et vérifie la faisabilité du plan IKEA.",
  },
  {
    num: "02",
    titre: "Préparation du chantier",
    desc: "Dépose de l'ancienne cuisine si nécessaire, protection des sols, mise hors tension et fermeture des vannes d'eau. Le chantier est sécurisé avant tout montage.",
  },
  {
    num: "03",
    titre: "Montage des meubles et caissons",
    desc: "Assemblage de chaque caisson IKEA selon les plans, fixation murale solide avec chevilles adaptées aux murs parisiens (béton, plâtre, briques creuses).",
  },
  {
    num: "04",
    titre: "Pose du plan de travail",
    desc: "Découpe sur mesure, ajustement aux angles, découpe pour l'évier et la plaque. Pose des façades, tiroirs et poignées. Niveau vérifié avec soin.",
  },
  {
    num: "05",
    titre: "Raccordements plomberie et électricité",
    desc: "Branchement de l'évier, du lave-vaisselle et de la hotte. Création ou déplacement de prises, mise aux normes si nécessaire.",
  },
  {
    num: "06",
    titre: "Finitions et nettoyage",
    desc: "Pose des plinthes, joints silicone, réglage des portes et tiroirs. Nettoyage complet du chantier. Vérification finale de chaque équipement.",
  },
]

const avantages = [
  "Gain de temps considérable : un pro monte 2 à 3 fois plus vite",
  "Résultat parfaitement de niveau et solidement fixé",
  "Raccordements plomberie et électricité inclus en une seule intervention",
  "Adaptation possible du plan IKEA aux contraintes de votre logement",
  "Garantie de l'artisan sur la pose (hors produit IKEA)",
  "Évite les erreurs coûteuses (mauvais perçage, plan de travail mal découpé)",
]

const tarifs = [
  { poste: "Montage et pose meubles (hors fournitures)", prix: "800 – 1 500 €" },
  { poste: "Raccordement plomberie évier + lave-vaisselle", prix: "200 – 400 €" },
  { poste: "Raccordements électricité (hotte, prises)", prix: "150 – 300 €" },
  { poste: "Dépose ancienne cuisine", prix: "150 – 350 €" },
  { poste: "Carrelage crédence (pose uniquement)", prix: "200 – 600 €" },
]

export default function InstallationCuisineIkeaParis() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      {/* Hero */}
      <section className="bg-[#1C1C1C] text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-sm uppercase tracking-widest text-[#C8A96E] mb-4">
            Guide pratique 2025
          </div>
          <h1 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
            Installation Cuisine IKEA Paris :{" "}
            <span className="text-[#C8A96E]">faire poser sa cuisine par un pro</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Montage, raccordements plomberie et électricité, finitions parfaites.
            Un artisan Espace Design prend en charge toute l&apos;installation de votre cuisine IKEA à Paris.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33611783867"
              className="inline-flex items-center gap-2 bg-[#C8A96E] text-[#1C1C1C] px-6 py-3 font-medium hover:bg-[#b8995e] transition-colors"
            >
              <Phone size={18} />
              06 11 78 38 67
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 hover:bg-white hover:text-[#1C1C1C] transition-colors"
            >
              Devis gratuit
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-6">
              IKEA propose des cuisines de qualité à prix accessibles, plébiscitées par des milliers de Parisiens chaque année.
              Mais entre choisir sa cuisine en ligne et l&apos;avoir installée, fonctionnelle, dans son appartement parisien,
              il y a souvent un fossé. Montage des caissons, découpe du plan de travail, raccordement de l&apos;évier,
              branchement de la hotte : chaque étape demande du temps, de l&apos;expérience et des outils adaptés.
            </p>
            <p className="leading-relaxed mb-6">
              Faire appel à un artisan spécialisé dans l&apos;installation de cuisine IKEA à Paris, c&apos;est la garantie
              d&apos;un résultat professionnel, rapide et durable. Espace Design intervient sur tout Paris pour la pose
              complète de votre cuisine IKEA : du montage des meubles aux raccordements plomberie et électricité,
              en passant par les finitions et le nettoyage de chantier.
            </p>
            <p className="leading-relaxed">
              Dans ce guide, vous trouverez tout ce qu&apos;il faut savoir sur l&apos;installation d&apos;une cuisine IKEA à Paris :
              les étapes, les prix, les avantages d&apos;un professionnel et les questions les plus fréquentes.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages artisan vs bricolage */}
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#1C1C1C] mb-4">
            Artisan vs bricolage : pourquoi confier l&apos;installation à un pro ?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Installer soi-même sa cuisine IKEA peut sembler séduisant. Mais dans un appartement parisien,
            les contraintes sont nombreuses : murs irréguliers, plomberie ancienne, électricité à remettre aux normes,
            sol pas parfaitement de niveau. Un artisan expérimenté anticipe ces problèmes et les résout.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {avantages.map((a, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 border border-gray-100">
                <CheckCircle size={20} className="text-[#C8A96E] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{a}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#1C1C1C] text-white p-6">
            <h3 className="text-lg font-medium mb-2 text-[#C8A96E]">
              Artisan vs IKEA Home Service : quelle différence ?
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Le service d&apos;installation IKEA (IKEA Home Service) est pratique mais limité : il ne prend généralement pas
              en charge la plomberie ni l&apos;électricité complexe, et les délais sont souvent longs (2 à 6 semaines).
              Un artisan indépendant comme Espace Design intervient plus rapidement, s&apos;adapte à votre logement
              et réalise l&apos;ensemble des travaux en une seule intervention. Le rapport qualité-prix est souvent meilleur.
            </p>
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#1C1C1C] mb-4">
            Les 6 étapes d&apos;une installation cuisine IKEA par un artisan
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            De la visite préalable aux finitions, voici comment Espace Design procède pour l&apos;installation
            complète de votre cuisine IKEA à Paris.
          </p>
          <div className="space-y-6">
            {etapes.map((e) => (
              <div key={e.num} className="flex gap-6 items-start border-l-2 border-[#C8A96E] pl-6">
                <div className="text-3xl font-light text-[#C8A96E] flex-shrink-0 w-10">{e.num}</div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">{e.titre}</h3>
                  <p className="text-gray-600">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prix */}
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#1C1C1C] mb-4">
            Prix installation cuisine IKEA Paris 2025
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Les tarifs ci-dessous sont des fourchettes indicatives pour la main-d&apos;œuvre uniquement,
            hors fournitures IKEA. Le prix final dépend de la surface, du nombre de modules et des travaux annexes.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="py-3 px-4 font-medium">Prestation</th>
                  <th className="py-3 px-4 font-medium text-right">Prix indicatif</th>
                </tr>
              </thead>
              <tbody>
                {tarifs.map((t, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 text-gray-700">{t.poste}</td>
                    <td className="py-3 px-4 text-right font-medium text-[#1C1C1C]">{t.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white border border-[#C8A96E] p-6">
            <div className="flex items-start gap-3">
              <Star size={20} className="text-[#C8A96E] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-[#1C1C1C] mb-1">Devis gratuit et sans engagement</h3>
                <p className="text-gray-600 text-sm">
                  Le prix exact de votre installation cuisine IKEA à Paris est déterminé après visite sur place.
                  Espace Design propose un devis gratuit et transparent, sans surprise.
                  Appelez le{" "}
                  <a href="tel:+33611783867" className="text-[#C8A96E] font-medium">
                    06 11 78 38 67
                  </a>{" "}
                  pour convenir d&apos;un rendez-vous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conseils pratiques */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#1C1C1C] mb-4">
            Conseils pratiques pour réussir votre projet cuisine IKEA à Paris
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-[#C8A96E] mb-3">
                Avant de commander chez IKEA
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="text-[#C8A96E] flex-shrink-0 mt-1" />
                  Faites mesurer votre cuisine par l&apos;artisan avant de finaliser votre plan IKEA
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="text-[#C8A96E] flex-shrink-0 mt-1" />
                  Vérifiez l&apos;emplacement des arrivées d&apos;eau, évacuations et prises électriques
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="text-[#C8A96E] flex-shrink-0 mt-1" />
                  Prévoyez des réserves (modules supplémentaires) en cas d&apos;erreur de découpe
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="text-[#C8A96E] flex-shrink-0 mt-1" />
                  Choisissez votre électroménager avant de finaliser le plan (dimensions critiques)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#C8A96E] mb-3">
                Spécificités des appartements parisiens
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="text-[#C8A96E] flex-shrink-0 mt-1" />
                  Les murs en briques ou pierres meulières nécessitent des chevilles spéciales
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="text-[#C8A96E] flex-shrink-0 mt-1" />
                  Les sols anciens sont rarement parfaitement de niveau : cales et pieds réglables obligatoires
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="text-[#C8A96E] flex-shrink-0 mt-1" />
                  Les gaines techniques et colonnes de plomberie peuvent contraindre l&apos;implantation
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="text-[#C8A96E] flex-shrink-0 mt-1" />
                  La ventilation (VMC) doit être raccordée correctement pour éviter les odeurs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#1C1C1C] mb-10 text-center">
            Questions fréquentes — Installation cuisine IKEA Paris
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 border-l-4 border-[#C8A96E]">
              <h3 className="font-medium text-[#1C1C1C] mb-2 text-lg">
                Combien coûte l&apos;installation d&apos;une cuisine IKEA à Paris ?
              </h3>
              <p className="text-gray-600">
                Le prix d&apos;installation d&apos;une cuisine IKEA à Paris par un artisan varie entre 800 et 2 500 € selon
                la surface, la complexité et les travaux annexes (plomberie, électricité). Pour une cuisine standard
                de 6 à 10 m², comptez en moyenne 1 200 à 1 800 € de main-d&apos;œuvre. Ce tarif inclut le montage des
                meubles, la fixation murale, la pose du plan de travail et le raccordement des équipements.
              </p>
            </div>
            <div className="bg-white p-6 border-l-4 border-[#C8A96E]">
              <h3 className="font-medium text-[#1C1C1C] mb-2 text-lg">
                Faut-il un plombier pour installer une cuisine IKEA ?
              </h3>
              <p className="text-gray-600">
                Oui, un raccordement plomberie est indispensable pour l&apos;évier, le lave-vaisselle et parfois le frigo
                américain. Un artisan rénovation polyvalent comme Espace Design réalise ces raccordements en même
                temps que l&apos;installation des meubles, ce qui évite de coordonner plusieurs corps de métier et fait
                gagner du temps et de l&apos;argent.
              </p>
            </div>
            <div className="bg-white p-6 border-l-4 border-[#C8A96E]">
              <h3 className="font-medium text-[#1C1C1C] mb-2 text-lg">
                Quelle est la durée d&apos;installation d&apos;une cuisine IKEA ?
              </h3>
              <p className="text-gray-600">
                L&apos;installation d&apos;une cuisine IKEA par un professionnel prend en général 1 à 3 jours selon la taille
                et la complexité. Une cuisine de 5 modules simples peut être posée en une journée, tandis qu&apos;une
                cuisine en L ou en U avec îlot central nécessite 2 à 3 jours, en incluant la plomberie et l&apos;électricité.
              </p>
            </div>
            <div className="bg-white p-6 border-l-4 border-[#C8A96E]">
              <h3 className="font-medium text-[#1C1C1C] mb-2 text-lg">
                Peut-on modifier un plan IKEA avec un artisan ?
              </h3>
              <p className="text-gray-600">
                Absolument. Un artisan expérimenté peut adapter, modifier ou optimiser votre plan IKEA en fonction
                des contraintes de votre appartement parisien : prise d&apos;air, gaine technique, mur porteur, compteur
                électrique. Il peut aussi intégrer des éléments non-IKEA (hotte, électroménager encastrable, plan
                de travail sur mesure) pour un résultat véritablement personnalisé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl font-light text-[#1C1C1C] mb-4">
            Zones d&apos;intervention — Installation cuisine IKEA Paris
          </h2>
          <p className="text-gray-600 mb-4">
            Espace Design intervient dans tous les arrondissements de Paris et en proche banlieue :
          </p>
          <p className="text-gray-500 text-sm">
            Paris 1er, 2e, 3e, 4e, 5e, 6e, 7e, 8e, 9e, 10e, 11e, 12e, 13e, 14e, 15e, 16e, 17e, 18e, 19e, 20e —
            Neuilly-sur-Seine, Boulogne-Billancourt, Levallois-Perret, Issy-les-Moulineaux, Saint-Cloud
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C1C1C] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-4">
            Besoin d&apos;un artisan pour installer votre cuisine IKEA à Paris ?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Espace Design assure l&apos;installation complète de votre cuisine IKEA à Paris :
            montage, plomberie, électricité et finitions. Devis gratuit sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33611783867"
              className="inline-flex items-center justify-center gap-2 bg-[#C8A96E] text-[#1C1C1C] px-8 py-4 font-medium hover:bg-[#b8995e] transition-colors text-lg"
            >
              <Phone size={20} />
              06 11 78 38 67
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-4 hover:bg-white hover:text-[#1C1C1C] transition-colors text-lg"
            >
              Demander un devis gratuit
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Artisan rénovation Paris — Intervention rapide — Devis gratuit et sans engagement
          </p>
        </div>
      </section>
    </>
  )
}
