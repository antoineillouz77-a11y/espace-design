import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Renovation Belleville Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-belleville-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Renovation Appartement Belleville Paris 20e : artisan & prix 2025",
  description: "Renovation appartement Belleville Paris 19e/20e : immeubles anciens, lofts, prix artisan 2025. Devis gratuit 48h Espace Design.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-belleville-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix moyen d'une renovation complete a Belleville Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un appartement ancien dans le quartier Belleville (Paris 19e/20e), comptez entre 900 et 1 500 euros par m2 pour une renovation complete (plomberie, electricite, sols, cloisons, salle de bain, cuisine). Un 2 pieces de 40 m2 represente un budget de 36 000 a 60 000 euros. Pour une renovation partielle (peinture, parquet, salle de bain uniquement), le budget descend a 400-700 euros/m2. Le quartier Belleville concentre beaucoup d'immeubles du debut du XXe siecle avec des specificites techniques (planchers bois, murs en pletre, canalisations en plomb) qui impactent les couts.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il une autorisation pour renover un appartement a Belleville Paris 20e ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une renovation interieure simple (peinture, sol, salle de bain, cuisine), aucune autorisation en mairie n'est necessaire. En revanche, si vous touchez a des murs porteurs (demande de permis de construire ou declaration prealable selon l'ampleur) ou si l'immeuble est en secteur protege (certaines parties de Belleville sont en secteur Belleville-Menilmontant), des contraintes supplementaires s'appliquent. La copropriete doit systematiquement etre informee via une demande en assemblee generale pour tout travaux impactant les parties communes (canalisations, facade, toiture) ou modifiant la structure.",
      },
    },
    {
      '@type': 'Question',
      name: "Les appartements de Belleville ont-ils des specificites techniques particulieres ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, les immeubles de Belleville presentent plusieurs particularites. La majorite des immeubles construits avant 1950 ont des planchers en bois (solivage) qui peuvent necessiter un renforcement avant pose de carrelage lourd. Les murs sont souvent en pletre ou en meuliere, materiaux friables qui imposent des techniques de fixation specifiques. Les canalisations en plomb (interdites depuis 1995) sont encore presentes dans les vides sanitaires de certains immeubles et doivent etre remplacees. Enfin, l'installation electrique en tube acier ou en allumage est frequente et necessite une mise aux normes NF C 15-100 complete.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment renover un loft a Belleville Paris 19e/20e ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La renovation d'un loft a Belleville necessite une approche specifique : la hauteur sous plafond (souvent 3 a 4 m dans les anciens ateliers) permet de creer des mezzanines ou des volumes ouverts. Les points cles sont : le diagnostic structure (murs porteurs, poutres metalliques), la mise aux normes electrique (tableau + cablage complet), l'isolation thermique et phonique (les anciens ateliers sont souvent mal isoles), la creation de zones (chambre, salon, cuisine) par des cloisons ou du mobilier sur mesure. Budget type loft Belleville 80 m2 : 80 000 a 150 000 euros selon le niveau de prestations.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Renovation Appartement Belleville Paris 20e : artisan & prix 2025 | Espace Design",
  description: "Renovation appartement Belleville Paris 19e/20e : immeubles anciens, lofts, prix artisan 2025. Devis gratuit 48h Espace Design.",
  keywords: ["renovation appartement Belleville Paris", "artisan renovation Belleville", "renovation Paris 20e", "renovation Paris 19e", "prix renovation Belleville 2025"],
}

export default function ArticleBellevilleParis() {
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
            Renovation par quartier
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Renover un Appartement a Belleville Paris 20e : guide complet 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Belleville, a cheval sur les 19e et 20e arrondissements, est l&apos;un des quartiers les plus dynamiques de Paris en matiere de renovation. Immeubles anciens, lofts d&apos;artistes, appartements haussmanniens atypiques — chaque projet est unique. Guide complet sur les specificites, les prix et le choix d&apos;un artisan de confiance en 2025.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: '900 €/m²', label: 'Prix mini renovation complete' },
              { val: '1 500 €/m²', label: 'Prix haut de gamme' },
              { val: '48h', label: 'Delai devis Espace Design' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-1">{s.val}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — Specificites du quartier */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C]">
            Belleville : un quartier atypique aux specificites techniques fortes
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Le quartier Belleville, reparti principalement entre les 19e et 20e arrondissements de Paris, presente un tissu urbain heterogene : immeubles du debut du XXe siecle, anciens ateliers d&apos;artistes convertis en lofts, constructions des annees 1960-70 et programmes plus recents. Cette diversite implique des contraintes techniques radicalement differentes d&apos;un immeuble a l&apos;autre.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Contrairement aux quartiers haussmanniens du centre de Paris (4e, 6e, 7e), les immeubles de Belleville sont souvent moins prestige mais tout aussi complexes a renover : planchers bois fragilises, murs en meuliere ou en pletre, installations electriques et de plomberie tres anciennes. Un diagnostic prealable serieux est indispensable avant tout chantier.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Le quartier connait depuis 2015 une forte gentrification qui se traduit par une hausse des projets de renovation haut de gamme, notamment autour du boulevard de Belleville, de la rue des Couronnes et de la Villa du Borrego. Les standards attendus (cuisine ouverte, douche italienne, parquet chene) elevent le niveau de finition moyen des chantiers.
          </p>
        </div>
      </section>

      {/* Section 2 — Types d'immeubles */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Types d&apos;immeubles a Belleville : ce qu&apos;il faut savoir avant de renover
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Chaque categorie d&apos;immeuble presente ses contraintes specifiques. Un artisan experimente doit les identifier des la visite de chantier.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Immeubles de rapport (1880-1930)",
                detail: "Les plus courants a Belleville. Planchers en solivage bois, murs en pletre ou briques, hauteurs sous plafond de 2,6 a 3,2 m. Necessite souvent un diagnostic amiante (obligatoire avant 1997), un diagnostic plomb et une verification de la structure des planchers avant tout travaux lourds. La renovation electrique complete est presque systematique.",
              },
              {
                titre: "Anciens ateliers d'artistes (lofts)",
                detail: "Concentres autour de la Villa du Borrego, de la Cite des Vignoles et de la Cite Leroy. Grandes surfaces, hauteur sous plafond de 3 a 5 m, souvent sur un seul niveau. L'enjeu principal est la creation de zones de vie (chambre fermee, salle de bain) dans un espace totalement ouvert, et l'isolation thermique (toiture souvent peu isolee).",
              },
              {
                titre: "Immeubles annees 1960-1980",
                detail: "Construction en beton arme, planchers beton, hauteur sous plafond de 2,5 m en general. Renovation plus simple techniquement mais plus contraignante esthetiquement (fenetre PVC a remplacer, carrelage d'epoque, salle de bain datee). La mise aux normes electrique (NF C 15-100) est souvent necessaire. Pas de contrainte plomb/amiante si construction apres 1980.",
              },
              {
                titre: "Immeubles neufs (apres 2000)",
                detail: "Relativement rares dans Belleville mais presents en peripherie du quartier. Renovation principalement decorative (peinture, parquet, cuisine, salle de bain). Pas de contraintes structurelles majeures. Les travaux portent essentiellement sur la personnalisation : ouverture cuisine/salon, creation de rangements, refonte salle de bain. Budget renovation partielle : 300 a 600 euros/m2.",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Renovation totale */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Renovation totale a Belleville : les postes cles
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Une renovation complete d&apos;un appartement ancien a Belleville inclut systematiquement plusieurs postes majeurs. Voici ce a quoi il faut s&apos;attendre.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                poste: "Mise aux normes electrique",
                prix: "3 500 – 8 000 €",
                detail: "Dans les immeubles anciens de Belleville, l'installation electrique est souvent en tube acier ou en allumage, sans mise a la terre. La mise aux normes NF C 15-100 comprend : nouveau tableau electrique, cablage complet de l'appartement, creation de circuits separes (cuisine, salle de bain, chauffage), pose de prises terre. Pour un 3 pieces de 60 m2, comptez 4 000 a 6 000 euros.",
              },
              {
                poste: "Plomberie et canalisations",
                prix: "4 000 – 12 000 €",
                detail: "Les canalisations en plomb (eau froide et chaude) sont encore presentes dans beaucoup d'immeubles de Belleville construits avant 1950. Leur remplacement est obligatoire depuis la loi Grenelle 2. Le remplacement complet des colonnes montantes (si la copropriete prend en charge sa partie) et des colonnes internes a l'appartement (en PER ou en cuivre) est fortement recommande lors d'une renovation totale.",
              },
              {
                poste: "Sols — parquet ou carrelage",
                prix: "60 – 120 €/m²",
                detail: "Le traitement des planchers bois existants (ponçage, vitrification) est souvent possible et economique (20 a 40 euros/m2). La pose d'un parquet flottant contrecolle sur une chape ou ragréage (40 a 80 euros/m2) est l'option la plus demandee. Pour les cuisines et salles de bain, le carrelage grand format (60x60 ou 80x80) est prefere. A noter : les planchers bois en solivage ne supportent pas toujours le carrelage lourd sans renforcement.",
              },
              {
                poste: "Salle de bain",
                prix: "5 000 – 15 000 €",
                detail: "La refection complete d'une salle de bain (douche italienne, meuble vasque, WC suspendu) dans un appartement de Belleville necessite souvent de reprendre la plomberie existante (tuyaux en plomb ou galvanise), d'imperméabiliser les murs (membrane d'etancheite), de poser un nouveau carrelage et d'installer une VMC simple flux pour le renouvellement d'air. Budget median a Paris pour 4 m2 : 7 000 a 10 000 euros pose comprise.",
              },
              {
                poste: "Cuisine",
                prix: "5 000 – 20 000 €",
                detail: "La renovation de cuisine a Belleville va souvent de pair avec l'ouverture sur le salon (creation d'une cuisine americaine). Le prix d'une ouverture dans une cloison non porteuse est de 500 a 2 000 euros. Si la cloison est porteuse, l'intervention necessite un ITE ou BET structure et des travaux de renforcement (IPN, poteau) pour 3 000 a 8 000 euros suppl. La cuisine elle-meme (meuble, plan de travail, electromenager encastre) represent 5 000 a 15 000 euros.",
              },
            ].map((el) => (
              <div key={el.poste} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{el.poste}</div>
                  <div className="text-[#B8960C] text-sm font-medium flex-shrink-0">{el.prix}</div>
                </div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Lofts Belleville */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Renover un loft a Belleville Paris 19e/20e
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Belleville est l&apos;un des rares quartiers parisiens ou il est encore possible de trouver de grands ateliers convertibles en lofts. La renovation d&apos;un loft est un projet atypique qui necessite une expertise specifique.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                etape: "Diagnostic et conception",
                detail: "Avant tout, un architecte ou un maitre d'oeuvre doit evaluer la structure (poutres metalliques ou bois, murs porteurs, charpente). Le permis de construire est necessaire si vous touchez a la structure ou si la surface habitable augmente. La conception d'un loft necessite une reflexion approfondie sur les zones de vie, l'eclairage naturel et la ventilation.",
              },
              {
                etape: "Isolation thermique et acoustique",
                detail: "Les anciens ateliers sont rarement bien isoles. L'isolation par l'interieur (ITI) avec de la laine de verre ou du liege projete est la solution la plus repandue en milieu dense parisien. L'isolation de la toiture (combles perdus ou rampants) est prioritaire, car 30% des deperditions thermiques passent par le toit. Budget isolation complete d'un loft 100 m2 : 15 000 a 30 000 euros.",
              },
              {
                etape: "Creation des espaces de vie",
                detail: "Dans un loft, la chambre est souvent creee par une cloison ou une mezzanine. La cloison en placo (BA13 double paroi) est la solution la plus economique (80 a 120 euros/ml). La mezzanine en structure metallique ou bois est plus spectaculaire mais plus couteuse (5 000 a 15 000 euros pour une mezzanine de 15 m2). La salle de bain est generalement creee ex nihilo, avec toutes les contraintes de plomberie associees.",
              },
              {
                etape: "Sol beton cire ou parquet",
                detail: "Dans un loft Belleville, le sol beton est souvent le support existant. Les deux finitions les plus prisees sont le beton cire (80 a 150 euros/m2, aspect industriel chic) et le parquet chene massif ou contrecolle (60 a 120 euros/m2, chaleur et authenticite). Le ragrage prealable est systematique pour garantir la planeite avant tout revetement de finition.",
              },
            ].map((el) => (
              <div key={el.etape} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.etape}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Prix et budget */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix renovation appartement Belleville Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Estimations tous compris (main d&apos;oeuvre + fournitures) par type de renovation et de surface pour un appartement a Belleville Paris.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de bien / Travaux</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget estime</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Duree chantier</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "Studio 20-25 m2 (renovation complete)", budget: "18 000 – 35 000 €", duree: "4-6 semaines" },
                  { type: "2 pieces 35-45 m2 (renovation complete)", budget: "32 000 – 60 000 €", duree: "6-10 semaines" },
                  { type: "3 pieces 60-70 m2 (renovation complete)", budget: "55 000 – 100 000 €", duree: "8-14 semaines" },
                  { type: "Loft 80-100 m2 (renovation complete)", budget: "80 000 – 150 000 €", duree: "12-20 semaines" },
                  { type: "Renovation partielle (salle de bain + peinture)", budget: "8 000 – 18 000 €", duree: "2-4 semaines" },
                  { type: "Renovation cuisine seule", budget: "5 000 – 20 000 €", duree: "1-3 semaines" },
                  { type: "Remise aux normes electrique seule", budget: "3 500 – 8 000 €", duree: "1-2 semaines" },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.budget}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
            <div className="font-medium text-[#1C1C1C] text-sm mb-3">Ce qui peut faire varier le prix a Belleville</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Presence d'amiante ou de plomb : diagnostic obligatoire, demenagement et decontamination facturable en sus",
                "Etat du plancher bois : renforcement necessaire si solivage affaibli avant pose de carrelage lourd",
                "Mur porteur : ouverture necessitant un IPN = surcoût de 3 000 a 8 000 euros",
                "Accessibilite du chantier : etage sans ascenseur, cours etroite, monte-charge necessaire",
                "Niveau de finition : finitions standard vs haut de gamme (carrelage grand format, parquet massif, luminaires design)",
                "Delai de chantier : urgence ou calendrier contraint peuvent generer des surcouts",
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-6 text-center">Questions frequentes</p>
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

      {/* Guides connexes */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Guides connexes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/renovation-appartement-paris-19e', title: 'Renovation appartement Paris 19e' },
              { href: '/blog/renovation-appartement-paris-20e', title: 'Renovation appartement Paris 20e' },
              { href: '/blog/renovation-loft-paris', title: 'Renovation loft Paris' },
              { href: '/blog/renovation-appartement-ancien-paris', title: 'Renovation appartement ancien Paris' },
              { href: '/blog/prix-renovation-appartement-paris', title: 'Prix renovation appartement Paris' },
              { href: '/blog/devis-renovation-paris', title: 'Devis renovation Paris' },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-4 hover:border-[#D4AF37]/40 transition-colors group"
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
          Renover votre appartement a Belleville avec un artisan de confiance
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Espace Design intervient dans tout Paris 19e et 20e. Devis detaille sous 48h, garantie decennale, artisans qualifies.
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
