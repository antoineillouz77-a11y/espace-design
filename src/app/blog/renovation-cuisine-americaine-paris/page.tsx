import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cuisine Américaine Paris', item: 'https://espacedesignparis.fr/blog/renovation-cuisine-americaine-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cuisine Américaine Paris : ouverte, semi-ouverte & prix 2025 | Espace Design',
  description: "Aménager une cuisine américaine à Paris : mur porteur, IPN, hotte sans gaine. Copropriété, budget et artisan 2025.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-cuisine-americaine-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le budget pour créer une cuisine américaine à Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le budget pour créer une cuisine américaine à Paris varie de 8 000 à 25 000 € selon la surface, le niveau d'équipement et si un mur porteur doit être abattu. Une cuisine ouverte sur cloison simple (pas de mur porteur) avec pose d'un meuble îlot : 8 000 à 14 000 € (cuisine + travaux). Si le mur est porteur (IPN à poser) : ajouter 3 000 à 8 000 € pour l'étude structure, le ferraillage et la pose de la poutre. Une cuisine américaine haut de gamme avec façades sur mesure, plan en marbre et électroménager premium : 20 000 à 40 000 €.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment savoir si le mur de ma cuisine est porteur ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Plusieurs indices permettent d'identifier un mur porteur : sa position perpendiculaire aux solives du plancher (visible en cave ou combles), son épaisseur supérieure à 15 cm, la présence d'une poutre ou d'un poteau dans son prolongement. Mais seul un professionnel (architecte, bureau d'études structure) peut certifier qu'un mur est porteur ou non. Ne jamais abattre un mur sans cette vérification : les conséquences sur la structure peuvent être dramatiques et engager votre responsabilité civile et pénale.",
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il l\'accord de la copropriété pour ouvrir une cuisine ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'accord de la copropriété n'est pas nécessaire pour abattre une cloison légère à l'intérieur de l'appartement. En revanche, si le mur est porteur, des travaux sur des éléments structuraux peuvent requérir l'information (voire l'accord) de la copropriété selon le règlement de l'immeuble. Dans tous les cas, les travaux doivent être déclarés en mairie (déclaration préalable) si la surface habitable est modifiée. Renseignez-vous auprès du syndic avant tout abattage de mur porteur.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle hotte choisir pour une cuisine ouverte sans gaine ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans une cuisine ouverte sur le séjour dans un appartement parisien, la gaine d'évacuation vers l'extérieur est rarement possible (copropriété, façade classée). Deux solutions s'offrent à vous : la hotte à recyclage (filtres à charbon actif) qui filtre et recycle l'air dans la pièce — efficace contre les graisses et les odeurs légères, à changer tous les 6 mois — ou la hotte sans conduit intégrée dans un îlot de cuisine. Pour une cuisine gourmande avec cuisson intensive, un système de ventilation dédiée (VMC cuisine) raccordé sur la gaine existante est recommandé.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Cuisine Américaine Paris : ouverte, semi-ouverte & prix 2025 | Espace Design',
  description: "Aménager une cuisine américaine à Paris : mur porteur, IPN, hotte sans gaine. Copropriété, budget et artisan 2025.",
}

export default function ArticleCuisineAmericaineParis() {
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
            Cuisine
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Cuisine Américaine Paris : ouverte, semi-ouverte &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La cuisine américaine est l&apos;une des transformations les plus demandées dans les appartements parisiens. Elle agrandit visuellement l&apos;espace, favorise la convivialité et valorise le bien. Mais ouvrir une cuisine à Paris soulève des questions techniques précises : mur porteur, IPN, hotte, copropriété. Guide complet et prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Mur porteur vs cloison */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Ouvrir sa cuisine : mur porteur ou simple cloison ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La première question à résoudre est la nature du mur entre la cuisine et le séjour. Selon la réponse, le budget, les démarches et le délai de chantier changent radicalement. Ne jamais se fier aux apparences : un mur en plâtre peut être porteur, et un mur épais peut n&apos;être qu&apos;un doublage.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Seul un professionnel (architecte ou bureau d&apos;études structure) peut confirmer la nature d&apos;un mur. Une sonde permet de vérifier la présence d&apos;armatures métalliques (mur béton armé) ou de solives perpendiculaires (mur porteur en maçonnerie). Le coût de l&apos;étude structure varie entre 400 et 1 200 €.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Simple cloison (non porteuse)',
                  detail: "Cloison en briques plâtrières (7 à 10 cm), carreaux de plâtre (5 à 10 cm) ou plaque de plâtre sur ossature. Abattage libre sans étude structure. Travaux rapides : démolition + évacuation des gravats + rebouchage sol et plafond. Comptez 800 à 2 500 € pour l'abattage d'une cloison de 8 à 12 m².",
                },
                {
                  enjeu: 'Mur porteur (béton, pierre, brique)',
                  detail: "Le mur doit être remplacé par un IPN (poutre métallique en I) ou un linteau béton armé qui reprend les charges. Étude structure obligatoire. Démarches mairie (déclaration préalable). Étayage de la structure pendant les travaux. Pose de l'IPN + reprise des murs latéraux + plâtrerie. Budget : 3 000 à 8 000 € selon la portée de l'ouverture.",
                },
                {
                  enjeu: 'Semi-ouverture (pass-plat, verrière)',
                  detail: "Si l'abattage complet est impossible (mur porteur trop complexe, copropriété restrictive), la semi-ouverture est une excellente alternative. Création d'une large ouverture avec pose d'un linteau, installation d'une verrière acier ou d'un pass-plat. Le visuel est ouvert, les odeurs restent contenues. Budget : 2 000 à 5 000 € pour une verrière posée.",
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

      {/* Section 2 — IPN et démarches */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Pose d&apos;un IPN : démarches, étapes et prix
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Lorsque le mur à abattre est porteur, la pose d&apos;un IPN (profilé métallique en I) est la solution la plus fréquente dans les appartements parisiens. Ce chantier implique plusieurs corps de métier et des démarches administratives précises.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Étude structure (bureau d\'études)',
                detail: "Vérification de la nature du mur, calcul de la section d'IPN adaptée à la portée et aux charges, rédaction de la note de calcul. Document indispensable pour la déclaration préalable en mairie et pour la responsabilité civile de l'artisan.",
                cout: '400 – 1 200 €',
              },
              {
                titre: 'Déclaration préalable en mairie',
                detail: "Obligatoire pour tous les travaux portant sur des éléments structuraux dans un immeuble. Dépôt à la mairie du 1er au 20e selon l'arrondissement. Délai d'instruction : 1 mois. Documents requis : plan existant, plan modifié, note structure.",
                cout: 'Gratuit (délai 1 mois)',
              },
              {
                titre: 'Étayage et dépose du mur',
                detail: "Installation d'étais métalliques pour reprendre provisoirement les charges pendant les travaux. Démolition du mur par passes successives. Évacuation des gravats en benne. Nettoyage du chantier. Durée : 1 à 2 jours pour une ouverture de 3 à 5 m.",
                cout: '1 500 – 3 000 €',
              },
              {
                titre: "Pose de l'IPN",
                detail: "Levage de la poutre acier (parfois nécessite une nacelle ou un palan). Scellement des about dans les murs latéraux. Soudure ou boulonnage des plaques d'about. Habillage de l'IPN en plâtre ou boîte en acier. Finition peinture. L'IPN peut être apparent ou dissimulé selon le style souhaité.",
                cout: '2 000 – 5 000 €',
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

      {/* Section 3 — Hotte et ventilation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Hotte sans gaine et ventilation : les solutions pour une cuisine ouverte à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dans un appartement parisien, installer une gaine d&apos;évacuation vers l&apos;extérieur est souvent impossible : façade classée, règlement de copropriété, configuration des gaines existantes. La hotte à recyclage et les systèmes de ventilation adaptés sont les réponses à ces contraintes.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Hotte à recyclage (filtre charbon)',
                prix: '300 – 1 500 €',
                detail: "Filtre les graisses (filtre aluminium) et neutralise les odeurs par filtre au charbon actif. L'air filtré est recyclé dans la pièce. Pas besoin de gaine d'évacuation. Efficace pour les cuisines à usage modéré (cuissons légères). Remplacement des filtres charbon tous les 6 à 12 mois (30 à 80 € par filtre). Niveau sonore : 50 à 65 dB selon le modèle.",
              },
              {
                type: 'Hotte îlot sans conduit',
                prix: '800 – 3 000 €',
                detail: "Hotte suspendue au-dessus d'un îlot de cuisine, fonctionnant en recyclage. Design épuré, compatible avec les cuisines ouvertes contemporaines. Certains modèles incluent un éclairage LED intégré et une commande tactile. Marques : Elica, Bora, Falmec.",
              },
              {
                type: 'Raccordement sur gaine existante',
                prix: '500 – 2 000 €',
                detail: "Si une gaine de ventilation existe dans les murs (ancienne cuisine fermée), il est parfois possible d'y raccorder la nouvelle hotte. Vérification du débit et du tirage nécessaire. Accord du syndic si la gaine est commune. Solution idéale pour les cuisines avec usage intensif.",
              },
              {
                type: 'Table de cuisson avec extraction intégrée',
                prix: '1 500 – 5 000 €',
                detail: "Système Bora ou similaire : l'extraction se fait par le bas de la table de cuisson, au niveau des foyers. Pas de hotte au-dessus : solution parfaite pour les îlots ouverts et les cuisines à la vue dégagée. Fonctionnement en recyclage ou en extraction si une gaine est disponible.",
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
            Budget cuisine américaine à Paris en 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Coût total comprenant la démolition, l&apos;IPN si nécessaire, la cuisine équipée et les lots techniques.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Scénario</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Détails</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    scenario: 'Cloison simple abattue',
                    details: 'Abattage cloison + plâtrerie + cuisine standard 8 m²',
                    budget: '8 000 – 14 000 €',
                  },
                  {
                    scenario: 'Mur porteur + IPN',
                    details: 'Étude structure + IPN + cuisine standard 10 m²',
                    budget: '14 000 – 22 000 €',
                  },
                  {
                    scenario: 'Semi-ouverture verrière',
                    details: 'Linteau + verrière acier + cuisine 8 m²',
                    budget: '10 000 – 18 000 €',
                  },
                  {
                    scenario: 'Haussmannien haut de gamme',
                    details: 'IPN + cuisine sur mesure marbre + îlot + électroménager premium',
                    budget: '25 000 – 45 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.scenario} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.scenario}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.details}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour réussir son projet de cuisine américaine
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Toujours vérifier la nature du mur avant d'établir un budget définitif",
                "Anticiper les démarches en mairie (déclaration préalable) dès le début du projet",
                "Choisir la hotte avant de concevoir la cuisine : elle conditionne l'implantation",
                "Prévoir un îlot avec rangements intégrés pour compenser la perte du mur de rangements",
                "Soigner l'acoustique du séjour (revêtements absorbants) pour limiter la propagation des bruits de cuisson",
                "Intégrer un éclairage de travail spécifique au plan de travail (LED sous meuble haut)",
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
              { href: '/blog/renovation-appartement-paris-10e', title: 'Rénovation appartement Paris 10e' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique appartement Paris' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
              { href: '/renovation-cuisine-paris', title: 'Rénovation cuisine Paris' },
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
              { href: '/renovation-paris-11e', label: 'Paris 11e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
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
          Créez votre cuisine américaine à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic mur porteur gratuit. Devis complet sous 48h. Artisans spécialisés en rénovation parisienne.
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
