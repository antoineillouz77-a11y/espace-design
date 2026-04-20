import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 20e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-20e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 20e : artisan & prix 2025 | Espace Design',
  description: "Rénovation appartement dans le 20e arrondissement de Paris : Père-Lachaise, Belleville, Ménilmontant. Artisan local, devis gratuit 48h.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-20e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels types de biens trouve-t-on dans le 20e arrondissement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le 20e arrondissement est l'un des plus divers de Paris. Autour du Père-Lachaise, on trouve des immeubles bourgeois de la fin du XIXe siècle avec de belles surfaces et des parquets anciens. Dans Belleville et Ménilmontant, le parc est plus varié : immeubles populaires des années 1920-1960, ateliers d'artistes réhabilités, maisons de ville dans des impasses. Le bas du 20e (Nation) est plus homogène avec des immeubles des années 1950-1970. La gentrification de Belleville et Ménilmontant crée une forte demande de rénovation dans ces secteurs.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte une rénovation dans le 20e arrondissement en 2025 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le 20e propose des prix de rénovation parmi les plus accessibles de Paris, ce qui en fait un marché très actif. Un rafraîchissement coûte entre 400 et 800 €/m². Une rénovation complète d'un appartement ancien se situe entre 850 et 1 500 €/m². Pour un studio de 30 m² à rénover entièrement, comptez entre 25 000 et 45 000 €. Pour un 2 pièces de 50 m², entre 42 500 et 75 000 €.",
      },
    },
    {
      '@type': 'Question',
      name: 'Belleville et Ménilmontant : est-ce une bonne adresse pour rénover en 2025 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, Belleville et Ménilmontant sont parmi les secteurs les plus dynamiques de Paris pour la rénovation en 2025. Ces quartiers sont en pleine gentrification — de nombreux bobos et créatifs s'y installent, attirés par l'ambiance de village, les commerces de bouche et les prix encore raisonnables. Les appartements anciens y sont achetés vétustes et rénovés dans un esprit atelier ou loft pour la location meublée ou la résidence principale. La plus-value après rénovation est significative.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 20e : artisan & prix 2025 | Espace Design',
  description: "Rénovation appartement dans le 20e arrondissement de Paris : Père-Lachaise, Belleville, Ménilmontant. Artisan local, devis gratuit 48h.",
}

export default function ArticleParis20e() {
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
            Rénovation Appartement Paris 20e : artisan &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le 20e arrondissement est l&apos;un des plus vivants et des plus divers de Paris. Père-Lachaise et ses immeubles bourgeois, Belleville et Ménilmontant en pleine gentrification, ateliers d&apos;artistes reconvertis — le 20e concentre un grand nombre de projets de rénovation. C&apos;est aussi l&apos;un des arrondissements les plus accessibles financièrement, ce qui en fait un marché très actif.
          </p>
        </div>
      </section>

      {/* Section 1 — Profil du quartier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              20e arrondissement : diversité, gentrification et fort potentiel de rénovation
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 20e est souvent présenté comme l&apos;un des derniers arrondissements parisiens &quot;authentiques&quot;. Quartier populaire par tradition, il subit depuis les années 2010 une gentrification progressive, particulièrement marquée dans les secteurs Belleville, Ménilmontant et Gambetta. Cette transformation est le moteur principal d&apos;une activité de rénovation intense.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Les biens les plus intéressants à rénover dans le 20e sont les appartements anciens des immeubles des années 1900-1950, souvent vétustes (plomberie en plomb, électricité pré-1985, isolation inexistante) mais spacieux et lumineux, avec des parquets anciens à rénover et des hauteurs sous plafond généreuses.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Père-Lachaise — immeubles bourgeois et surfaces généreuses',
                  detail: "Le secteur Père-Lachaise (autour du cimetière, rue des Pyrénées, boulevard de Ménilmontant) concentre des immeubles de la fin du XIXe siècle avec de belles surfaces, des parquets en chêne massif et des hauteurs sous plafond de 2,80 à 3 m. Ces appartements sont très recherchés après rénovation et se valorisent fortement.",
                },
                {
                  enjeu: 'Belleville — village dans la ville en pleine transformation',
                  detail: "Belleville (partagé entre les 19e et 20e) est le coeur vibrant de l'est parisien. Ses immeubles anciens, ses passages et cours intérieures, ses ateliers d'artistes — tout y attire les projets de rénovation ambitieux. La demande locative y est forte et le rendement après rénovation est parmi les meilleurs de Paris.",
                },
                {
                  enjeu: 'Ménilmontant — esprit bohème et ateliers reconvertis',
                  detail: "Ménilmontant est le quartier le plus bobo du 20e. Ses ruelles en escalier, ses villas cachées et ses anciens ateliers d'artistes offrent des configurations uniques à Paris. Ces biens nécessitent souvent une rénovation complète mais offrent un potentiel architectural exceptionnel pour des projets d'atelier ou de loft.",
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
            Travaux populaires et spécificités techniques dans le 20e
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 20e concentre de nombreux biens anciens nécessitant une remise à niveau complète. Voici les travaux les plus fréquents et leurs fourchettes de prix.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Réfection électrique complète',
                solution: "La mise aux normes NF C 15-100 est quasi systématique dans les appartements du 20e construits avant 1985. Remplacement du tableau, câblage en encastré, prises de terre, différentiels par circuit. Ce poste est non négociable pour la sécurité et obligatoire à la revente.",
                cout: '3 000 – 8 000 €',
              },
              {
                titre: 'Remplacement canalisations plomb',
                solution: "Les appartements construits avant 1950 dans le 20e ont souvent encore des canalisations en plomb, interdit depuis 1995. Le remplacement complet est obligatoire — il faut ouvrir les murs et sols. Profiter d'une rénovation complète pour le réaliser systématiquement.",
                cout: '3 000 – 7 000 €',
              },
              {
                titre: 'Rénovation parquet massif ancien',
                solution: "Les immeubles anciens du 20e disposent souvent de parquets en chêne massif (lames de 60 à 90 mm) en très bon état structurellement. Ponçage et vitrification pour 30 à 60 €/m² — un investissement minimal pour un résultat spectaculaire qui valorise fortement le bien.",
                cout: '30 – 60 €/m²',
              },
              {
                titre: 'Création d\'un esprit atelier — décloisonnement',
                solution: "Très demandé dans Belleville et Ménilmontant, le décloisonnement transforme un appartement mal distribué en espace ouvert lumineux. Abattement des murs non porteurs, cuisine ouverte, espace de travail intégré — la transformation est spectaculaire et très appréciée par les locataires.",
                cout: '3 000 – 8 000 €',
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
            Prix d&apos;une rénovation dans le 20e arrondissement en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le 20e est l&apos;un des arrondissements les plus accessibles pour rénover à Paris. Le rapport coût de rénovation / valeur créée est parmi les meilleurs de la capitale, notamment dans les secteurs Belleville et Ménilmontant.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Niveau de prestation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Description</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix / m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    niveau: 'Rafraîchissement',
                    prestations: 'Peinture, sol, luminaires — sans modification des installations',
                    prixM2: '400 – 800 €',
                  },
                  {
                    niveau: 'Rénovation partielle (SDB ou cuisine)',
                    prestations: 'Refonte d\'une pièce humide avec mise aux normes',
                    prixM2: '700 – 1 000 €',
                  },
                  {
                    niveau: 'Rénovation complète appartement ancien',
                    prestations: 'Électricité, plomberie, cuisine, SDB, sols, peintures',
                    prixM2: '850 – 1 500 €',
                  },
                  {
                    niveau: 'Rénovation esprit atelier ou loft',
                    prestations: 'Décloisonnement, béton ciré, verrière, cuisine ouverte, finitions design',
                    prixM2: '1 500 – 2 500 €',
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
              Conseils spécifiques pour rénover dans le 20e
            </h3>
            <div className="space-y-3">
              {[
                'Remplacer systématiquement les canalisations en plomb lors de toute rénovation — présentes dans la plupart des immeubles construits avant 1950',
                'Rénover le parquet massif plutôt que le remplacer — ponçage + vitrification pour un résultat spectaculaire à prix maîtrisé',
                'Décloisonner pour créer de la luminosité — les appartements anciens du 20e sont souvent trop découpés',
                'Traiter l\'isolation thermique et phonique dans les immeubles des années 1950-1970',
                'Anticiper la mise aux normes électrique — obligatoire dans tout bien construit avant 1985',
                'Vérifier les villas et impasses du 20e — des maisons de ville à fort potentiel y sont encore à saisir',
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
              { href: '/blog/renovation-appartement-investissement-paris', title: 'Rénovation investissement locatif Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Rénover un appartement ancien à Paris' },
              { href: '/blog/sol-beton-cire-paris', title: 'Béton ciré Paris — pose & prix' },
              { href: '/blog/renovation-appartement-montmartre-paris', title: 'Rénovation Montmartre Paris 18e' },
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
              { href: '/renovation-paris-20e', label: 'Paris 20e' },
              { href: '/renovation-paris-19e', label: 'Paris 19e' },
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-12e', label: 'Paris 12e' },
              { href: '/renovation-paris-18e', label: 'Paris 18e' },
              { href: '/renovation-paris-10e', label: 'Paris 10e' },
              { href: '/renovation-montreuil', label: 'Montreuil' },
              { href: '/renovation-vincennes', label: 'Vincennes' },
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
          Vous rénovez un bien dans le 20e arrondissement ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Père-Lachaise, Belleville, Ménilmontant — devis gratuit sous 48h dans le 20e.
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
