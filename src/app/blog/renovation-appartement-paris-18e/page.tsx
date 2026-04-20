import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 18e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-18e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 18e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 18e arrondissement de Paris : Montmartre, Goutte-d\'Or, Clignancourt. Artisan local, devis 48h.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-18e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix au m² pour rénover un appartement dans le 18e arrondissement de Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix de rénovation dans le 18e arrondissement se situe entre 1 400 et 3 000 €/m² selon le niveau de prestations et le secteur. Montmartre, classé secteur patrimonial, peut entraîner des surcoûts liés aux contraintes ABF (Architectes des Bâtiments de France). Un rafraîchissement coûte 400-700 €/m². Une rénovation complète cuisine + salle de bain + électricité atteint 1 400 à 2 200 €/m². Les finitions premium (matériaux haut de gamme, menuiserie sur mesure) font monter la facture à 2 500-3 000 €/m².',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les contraintes ABF à Montmartre pour la rénovation ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le secteur de Montmartre est classé Zone de Protection du Patrimoine Architectural, Urbain et Paysager (ZPPAUP). Tout projet visible depuis la rue (modification de façade, remplacement de fenêtres, ravalement) doit obtenir l\'aval de l\'Architecte des Bâtiments de France. Les fenêtres doivent respecter les proportions et matériaux d\'origine (bois peint généralement). À l\'intérieur, les rénovations sont libres, mais tout agrandissement de baie ou création d\'ouverture en façade nécessite une autorisation ABF en plus de la déclaration préalable de mairie.',
      },
    },
    {
      '@type': 'Question',
      name: 'La Goutte-d\'Or est-elle un bon quartier pour rénover et investir ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Goutte-d\'Or est l\'un des quartiers parisiens en pleine gentrification, avec des prix au m² encore accessibles (7 000 – 9 000 €) et un potentiel de valorisation fort. Les appartements y sont souvent dans un état nécessitant une rénovation complète, ce qui représente une opportunité pour les investisseurs : achat décoté + rénovation complète = plus-value significative à la revente ou rendement locatif optimisé. Notre équipe accompagne régulièrement des investisseurs dans ce secteur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Les anciens immeubles du 18e sont-ils difficiles à rénover ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les immeubles anciens du 18e arrondissement (nombreux bâtiments du XIXe et début XXe siècle) présentent des défis spécifiques : réseaux électriques souvent hors normes, plomberie en plomb à remplacer, escaliers de service étroits qui compliquent la livraison des matériaux, et parfois absence d\'ascenseur. Ces contraintes allongent les délais et augmentent les coûts de 10 à 20 % par rapport à un immeuble moderne. Elles sont anticipées et chiffrées dans notre devis initial.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 18e : artisan & prix 2025 | Espace Design',
  description: 'Rénovation appartement dans le 18e arrondissement de Paris : Montmartre, Goutte-d\'Or, Clignancourt. Artisan local, devis 48h.',
}

export default function ArticleRenovationParis18() {
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
            Rénovation Appartement Paris 18e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Montmartre, Goutte-d&apos;Or, Clignancourt, Grandes-Carrières : le 18e arrondissement est l&apos;un des plus contrastés de Paris, alliant patrimoine exceptionnel, quartiers en pleine gentrification et diversité architecturale remarquable. Espace Design intervient dans tout le 18e avec une expertise particulière sur les immeubles anciens et les secteurs patrimoniaux, devis sous 48h.
          </p>
        </div>
      </section>

      {/* Section 1 — Quartiers */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les quartiers du 18e et leur profil architectural
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 18e arrondissement est le deuxième plus peuplé de Paris et l&apos;un des plus hétérogènes architecturalement. Comprendre les spécificités de chaque quartier est indispensable pour anticiper la nature et le coût des travaux.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Montmartre : secteur ABF et patrimoine exceptionnel',
                  detail: 'La Butte Montmartre est un secteur patrimonial protégé par les Architectes des Bâtiments de France. Les appartements y sont souvent petits (studios et 2-pièces dans d\'anciens hôtels particuliers ou ateliers d\'artistes) avec des configurations atypiques. La rénovation intérieure est libre, mais toute modification de façade ou d\'ouverture nécessite un accord ABF préalable. Les matériaux de façade doivent respecter les prescriptions patrimoniales.',
                },
                {
                  enjeu: 'Goutte-d\'Or : gentrification et potentiel d\'investissement',
                  detail: 'Ancien quartier populaire en pleine mutation, la Goutte-d\'Or attire depuis 2015 une clientèle de primo-accédants et d\'investisseurs attirés par des prix encore accessibles (7 000 – 9 000 €/m²). Les appartements sont souvent dans un état de dégradation avancée, ce qui représente une opportunité : l\'écart entre prix d\'acquisition et valeur post-rénovation est l\'un des plus importants de Paris.',
                },
                {
                  enjeu: 'Clignancourt - Jules Joffrin : diversité architecturale',
                  detail: 'Le secteur Clignancourt et Jules Joffrin mêle immeubles haussmanniens classiques, résidences des années 1950-1970 et quelques immeubles modernes. Les appartements familiaux y sont spacieux et la demande locative forte. Les rénovations portent souvent sur la modernisation complète (cuisine, salle de bain) et la mise aux normes des réseaux dans les immeubles d\'avant-guerre.',
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

      {/* Section 2 — Travaux courants */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Rénovations les plus demandées dans le 18e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La forte proportion d&apos;immeubles anciens dans le 18e génère une demande récurrente pour les travaux suivants, que notre équipe maîtrise parfaitement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Rénovation complète appartement ancien',
                solution: 'Remise à neuf totale d\'un appartement XIXe ou début XXe : dépose des anciens revêtements, remplacement complet de l\'électricité et de la plomberie, isolation, nouvelle cuisine et salle de bain, parquet, peinture. Idéal pour les investisseurs ou acheteurs d\'un bien décoté.',
                cout: '1 400 – 2 500 €/m²',
              },
              {
                titre: 'Réfection toiture et isolation combles (ateliers)',
                solution: 'Les anciens ateliers d\'artistes de la Butte ont souvent des toitures en mauvais état et des combles non isolés. Remplacement de la couverture (zinc, ardoise), isolation des combles par soufflage ou panneaux rigides, réfection des verrières d\'atelier. Nécessite accord ABF si visible depuis la rue.',
                cout: '200 – 450 €/m² de toiture',
              },
              {
                titre: 'Mise aux normes plomberie (plomb)',
                solution: 'Obligatoire avant 2025 pour les logements locatifs, le remplacement des canalisations en plomb est une priorité dans les immeubles du 18e construits avant 1949. Remplacement par du cuivre ou du PER, mise aux normes des évacuations, pose d\'un nouveau chauffe-eau. Intervention en coordination avec le syndic pour les parties communes.',
                cout: '4 000 – 12 000 €',
              },
              {
                titre: 'Création salle de bain (studio ou F2)',
                solution: 'De nombreux petits appartements du 18e n\'ont pas de salle de bain indépendante (WC sur palier, douche dans la cuisine). Création d\'une salle d\'eau ex nihilo dans un espace dédié : gestion des contraintes hydrauliques, aération, isolation phonique des parois. Transforme radicalement la valeur locative.',
                cout: '8 000 – 18 000 €',
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

      {/* Section 3 — Contraintes pratiques */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Contraintes pratiques de la rénovation dans le 18e arrondissement
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Rénover dans le 18e présente des défis logistiques spécifiques, notamment dans les secteurs à forte déclivité (Butte Montmartre) et dans les immeubles sans ascenseur.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Accès et livraison des matériaux',
                prix: 'Surcoût 5 – 15 %',
                detail: 'Les ruelles étroites de Montmartre, les immeubles sans ascenseur et les nombreux escaliers raides du 18e compliquent la livraison des matériaux lourds (carrelage, chape, matériel de plomberie). Notre équipe anticipe ces contraintes logistiques dès le devis et dispose du matériel adapté (monte-charge, palans).',
              },
              {
                type: 'Contraintes copropriété dans les vieux immeubles',
                prix: 'Délai +4 à 8 semaines',
                detail: 'Dans les copropriétés du 18e, les travaux impactant les parties communes ou la structure nécessitent un vote en assemblée générale. Si la prochaine AG est dans 6 mois, le chantier doit attendre. Notre coordinateur de travaux vous accompagne dans la constitution du dossier AG et la relation avec le syndic.',
              },
              {
                type: 'Gestion des déchets de chantier',
                prix: '500 – 1 500 €',
                detail: 'L\'évacuation des gravats et déchets de démolition dans les rues étroites du 18e nécessite une autorisation de voirie (benne sur la voie publique) et une coordination avec la mairie d\'arrondissement. Cette prestation est incluse dans notre offre globale et ne génère pas de mauvaises surprises en fin de chantier.',
              },
              {
                type: 'Amiante et plomb : diagnostics obligatoires',
                prix: '200 – 500 € (diagnostics)',
                detail: 'Dans les immeubles du 18e construits avant 1997 (quasi-totalité du bâti ancien), un diagnostic amiante avant travaux est obligatoire. Pour les immeubles d\'avant 1949, un diagnostic plomb s\'ajoute. Ces diagnostics conditionnent les modes opératoires de démolition et l\'élimination des déchets. Ils sont à réaliser avant le démarrage du chantier.',
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
            Prix rénovation appartement Paris 18e : tableau récapitulatif 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Estimations main d&apos;œuvre et matériaux inclus pour des appartements situés dans le 18e arrondissement de Paris.
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
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture + sol + petites réparations',
                    prixM2: '400 – 650 €',
                    total: '18 000 – 29 000 €',
                  },
                  {
                    niveau: 'Rénovation partielle',
                    prestations: 'Cuisine ou SDB + peinture + sol',
                    prixM2: '700 – 1 200 €',
                    total: '31 500 – 54 000 €',
                  },
                  {
                    niveau: 'Rénovation complète',
                    prestations: 'Cuisine + SDB + électricité + plomberie + sols',
                    prixM2: '1 400 – 2 200 €',
                    total: '63 000 – 99 000 €',
                  },
                  {
                    niveau: 'Haut de gamme',
                    prestations: 'Tout compris + matériaux premium + restauration patrimoniale',
                    prixM2: '2 200 – 3 000 €',
                    total: '99 000 – 135 000 €',
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
              Checklist avant de démarrer une rénovation dans le 18e
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Commander le diagnostic amiante et plomb avant tout commencement de travaux',
                'Vérifier les contraintes ABF si l\'appartement est situé sur la Butte Montmartre',
                'Obtenir l\'accord de la copropriété pour les travaux structurels ou sur parties communes',
                'Demander une autorisation de benne en voirie à la mairie du 18e',
                'Vérifier la conformité du tableau électrique avant tout autre travail',
                'Prévoir 15 % de budget pour les imprévus (fréquents dans les immeubles anciens)',
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
              { href: '/blog/renovation-appartement-paris-11e', title: 'Rénovation appartement Paris 11e' },
              { href: '/blog/renovation-appartement-paris-14e', title: 'Rénovation appartement Paris 14e' },
              { href: '/blog/prix-renovation-salle-de-bain-paris', title: 'Prix rénovation salle de bain Paris' },
              { href: '/blog/devis-travaux-renovation-paris', title: 'Devis travaux rénovation Paris' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
              { href: '/renovation-paris', title: 'Rénovation appartement Paris' },
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
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-paris-19e', label: 'Paris 19e' },
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-saint-ouen', label: 'Saint-Ouen' },
              { href: '/renovation-clichy', label: 'Clichy' },
              { href: '/renovation-saint-denis', label: 'Saint-Denis' },
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
          Rénover votre appartement dans le 18e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis sous 48h. Expertise immeubles anciens et secteurs patrimoniaux.
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
