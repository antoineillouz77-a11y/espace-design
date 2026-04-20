import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Climatisation Appartement Paris', item: 'https://espacedesignparis.fr/blog/climatisation-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Climatisation Appartement Paris : installation split & prix artisan 2025",
  description: "Installer une climatisation split dans un appartement a Paris : demarches copropriete, mairie, prix artisan 2025. Devis gratuit Espace Design.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/climatisation-appartement-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Faut-il une autorisation pour installer une climatisation a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, une double autorisation est en general necessaire a Paris. D'abord, l'accord de la copropriete en assemblee generale pour l'installation de l'unite exterieure sur les parties communes (facade, toiture). Ensuite, une declaration prealable de travaux en mairie (formulaire Cerfa 13404) est obligatoire si l'unite exterieure est visible depuis la voie publique. Pour les immeubles classe en secteur protege (patrimoine parisien, Architectes des Batiments de France), un accord specifique de l'ABF est requis. L'installation de l'unite interieure ne necessite aucune autorisation specifique.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix d'installation d'une climatisation split a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'installation d'une climatisation split a Paris varie selon la puissance et la configuration : comptez 1 500 a 2 500 euros pour un mono-split (1 unite interieure + 1 exterieure) en 2,5 kW adapte a une piece de 20 m2, 2 500 a 4 000 euros pour un 3,5 kW (salon de 30-35 m2), et 4 000 a 8 000 euros pour un multi-split 2 a 3 zones. Ces prix incluent la fourniture du climatiseur, la pose par un technicien certifie RGE, la liaison frigorifique, le raccordement electrique et la mise en service. La gaine technique (passage dans les murs) peut ajouter 200 a 500 euros selon la configuration.",
      },
    },
    {
      '@type': 'Question',
      name: "La copropriete peut-elle refuser l'installation d'une climatisation ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, la copropriete peut refuser via son assemblee generale. L'accord est requis des que l'unite exterieure est fixee sur les parties communes (facade, toit terrasse, mur pignon). Si l'installation est entierement sur les parties privatives (balcon privatif, interieur de l'appartement), l'accord de la copropriete n'est pas obligatoire. Le vote en AG requiert la majorite de l'article 25 du reglement de copropriete (majorite absolue des coproprietes representant au moins 50% des tantièmes). En pratique, les coproprietes parisiennes sont de plus en plus favorables a ces installations avec les etes caniculaires.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment entretenir sa climatisation a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'entretien annuel d'une climatisation est obligatoire pour les installations de plus de 2,5 kW (article R224-41 du Code de l'environnement). Il doit etre realise par un technicien certifie RGE habilite aux fluides frigorigenes. L'entretien comprend : nettoyage des filtres (a faire soi-meme tous les mois en periode d'utilisation), verification du niveau de frigorigene, nettoyage de l'echangeur, verification electrique. Prix d'un contrat d'entretien annuel a Paris : 100 a 200 euros. Un entretien regulier prolonge la duree de vie de l'appareil (15 a 20 ans) et maintient ses performances.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Climatisation Appartement Paris : installation split & prix artisan 2025 | Espace Design",
  description: "Installer une climatisation split dans un appartement a Paris : demarches copropriete, mairie, prix artisan 2025. Devis gratuit Espace Design.",
  keywords: ["climatisation appartement Paris", "installation climatisation Paris", "prix climatisation Paris", "artisan climatisation Paris", "split system Paris 2025"],
}

export default function ArticleClimatisationParis() {
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
            Confort thermique
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Installer une Climatisation dans son Appartement a Paris : guide 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Avec des etes de plus en plus chauds, la climatisation est devenue une priorite pour beaucoup de Parisiens. Mais installer un climatiseur split dans un appartement parisien suppose de naviguer entre regles de copropriete, demarches en mairie et choix du bon equipement. Guide complet 2025.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: '1 500 €', label: 'Prix mini installation split' },
              { val: '4 000 €', label: 'Prix multi-split 2 zones' },
              { val: 'A+++', label: 'Classe energie recommandee' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-1">{s.val}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — Contexte parisien */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C]">
            Climatisation a Paris : une necessité croissante, des contraintes specifiques
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Paris concentre plus de 2 millions d&apos;appartements dont la grande majorite n&apos;est pas climatisee. Les canicules de 2019, 2022 et 2023 ont revele les limites des appartements non ventiles, en particulier sous les toits et dans les petites surfaces. La demande en climatisation a explose, creant un marche d&apos;installation tres actif.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Cependant, installer une climatisation a Paris n&apos;est pas aussi simple qu&apos;en pavillon : les immeubles collectifs imposent des contraintes de copropriete, l&apos;architecture parisienne impose des regles esthetiques, et la densite urbaine complique le passage des liaisons frigorifiques. Un artisan qualifie connait toutes ces specificites.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            La solution la plus repandue dans les appartements parisiens est le climatiseur reversible de type split (unite interieure mural + unite exterieure compacte). Ce systeme offre le meilleur rapport efficacite energetique / encombrement et peut etre installe dans la majorite des configurations parisiennes.
          </p>
        </div>
      </section>

      {/* Section 2 — Types de climatisation */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Types de climatisation pour un appartement a Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Chaque type d&apos;equipement a ses avantages et ses contraintes d&apos;installation dans un appartement parisien.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Mono-split mural (le plus courant)",
                detail: "1 unite interieure fixee au mur + 1 unite exterieure. Puissances : 2,5 kW (chambres), 3,5 kW (salon 30 m2), 5 kW (salon 45 m2). Avantages : installation rapide (1 journee), efficacite energetique elevee, silencieux. Ideal pour 1 a 2 pieces. La liaison frigorifique (1 a 5 m en general) passe dans le mur ou est gainee en facade.",
              },
              {
                titre: "Multi-split (plusieurs pieces)",
                detail: "1 unite exterieure + 2 a 5 unites interieures dans differentes pieces. Permet de climatiser plusieurs zones avec une seule unite exterieure (avantage pour la copropriete). Prix plus eleve (4 000 a 10 000 euros) mais plus discret esthetiquement. Chaque unite interieure est commande independamment.",
              },
              {
                titre: "Gainable (invisble, integre au plafond)",
                detail: "Solution haut de gamme ou la diffusion d'air se fait via des grilles encastrees au plafond, sans unite murale visible. Necessite un faux plafond ou des gaines techniques caches. Ideal pour les appartements haussmanniens ou l'esthetique est primordiale. Prix : 5 000 a 15 000 euros pose comprise selon la surface.",
              },
              {
                titre: "Portable (sans travaux)",
                detail: "Solution sans autorisation ni travaux, mais peu efficace (rendement faible, bruyante, evacuation eau condensats obligatoire). Ne necessitent pas d'installation par un artisan. Recommande uniquement pour les locataires ou les situations temporaires. Consommation electrique bien superieure a un split de meme puissance.",
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

      {/* Section 3 — Demarches */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Demarches administratives pour installer une clim a Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            A Paris, l&apos;installation d&apos;une climatisation necessite en general deux demarches distinctes avant de commencer les travaux.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                etape: "1 — Accord de la copropriete",
                detail: "Si l'unite exterieure est posee sur les parties communes (facade, mur pignon, terrasse commune), un vote en assemblee generale est obligatoire. Il faut faire inscrire la question a l'ordre du jour au moins 21 jours avant l'AG. Le vote se fait a la majorite de l'article 25 (majorite absolue des voix de tous les coproprietaires). Pour accelerer, certains syndics accordent des accords ecrits simples pour des installations discretes sur balcon privatif.",
              },
              {
                etape: "2 — Declaration prealable en mairie",
                detail: "La declaration prealable (formulaire Cerfa 13404) est obligatoire a Paris pour toute installation d'unite exterieure visible depuis la voie publique. Elle est deposee en ligne sur le portail urbanisme.gouv.fr ou en mairie. Le delai d'instruction est de 1 mois. Si le batiment est en secteur ABF (secteur protege), ajouter 1 mois supplementaire. En l'absence de reponse dans le delai, c'est un accord tacite.",
              },
              {
                etape: "3 — Installation par un technicien certifie",
                detail: "La loi impose que la manipulation des fluides frigorigenes (R410A, R32, R290) soit realisee uniquement par un technicien detenteur de l'attestation de capacite CERFA (anciennement 'habilitation fluides frigorigenes'). Cette attestation est delivree par un organisme accredite (Certiflhor, QUALICLIMA, etc.). Verifier cette attestation avant tout devis.",
              },
              {
                etape: "4 — Raccordement electrique",
                detail: "Selon la puissance de la climatisation, un circuit electrique dedie peut etre necessaire (disjoncteur 16 A pour un mono-split, 20 A pour un multi-split). Si le tableau electrique est ancien ou sans capacite disponible, un remplacement ou une extension du tableau peut etre facturee en supplement (500 a 1 500 euros). Ce raccordement peut etre realise par le meme artisan.",
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

      {/* Section 4 — Prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix installation climatisation Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix tout compris (fourniture + pose + raccordement electrique + mise en service) par un artisan certifie RGE a Paris.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Configuration</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Puissance</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix estime</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { config: "Mono-split chambre / bureau", puissance: "2,5 kW (25 m2)", prix: "1 500 – 2 000 €" },
                  { config: "Mono-split salon", puissance: "3,5 kW (35 m2)", prix: "2 000 – 2 800 €" },
                  { config: "Mono-split grand salon", puissance: "5 kW (50 m2)", prix: "2 500 – 3 500 €" },
                  { config: "Multi-split 2 zones", puissance: "2 x 2,5 kW", prix: "4 000 – 6 000 €" },
                  { config: "Multi-split 3 zones", puissance: "3 x 2,5 kW", prix: "6 000 – 9 000 €" },
                  { config: "Gainable (plafond, faux plafond)", puissance: "5-10 kW", prix: "5 000 – 15 000 €" },
                  { config: "Entretien annuel obligatoire", puissance: "—", prix: "100 – 200 €/an" },
                ].map((row, i) => (
                  <tr key={row.config} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.config}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.puissance}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
            <div className="font-medium text-[#1C1C1C] text-sm mb-3">Points de vigilance a Paris</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Passage de la liaison frigorifique : dans un immeuble ancien, le passage peut necessiter une saignee ou une gaine apparente",
                "Unite exterieure : le positionnement (balcon, facade, terrasse) impacte le niveau sonore pour les voisins et les demarches administratives",
                "Secteur ABF : en secteur protege, l'unite exterieure doit etre dissimule ou peinte de la couleur de la facade",
                "Evacuation des condensats : un siphon et une evacuation vers les eaux usees est obligatoire (pas d'ecoulement direct sur facade)",
                "Marque et classe energetique : privilegier les appareils A++ minimum, classe A+++ recommandee pour les grandes surfaces",
                "Attestation du technicien : verifier la certification manipulation fluides frigorigenes avant de signer tout devis",
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

      {/* Section 5 — Entretien */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Entretien de la climatisation : obligations et conseils
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Un climatiseur non entretenu perd jusqu&apos;a 30% de son efficacite en 3 ans. L&apos;entretien regulier est a la fois une obligation legale et un investissement rentable.
          </p>
          <div className="space-y-4">
            {[
              {
                type: "Entretien mensuel (a faire soi-meme)",
                detail: "Nettoyage des filtres de l'unite interieure : retirer les filtres, les passer sous l'eau froide, les secher et les remettre en place. Operation a faire tous les mois en periode d'utilisation. Des filtres encrassees reduisent le debit d'air et augmentent la consommation electrique de 10 a 20%. Duree : 10 minutes.",
              },
              {
                type: "Entretien annuel obligatoire (>2,5 kW)",
                detail: "Pour toute installation de plus de 2,5 kW, l'entretien annuel par un technicien certifie est obgatoire (decret R224-41). Il comprend : verification du niveau de frigorigene, nettoyage de l'echangeur interieur et exterieur, verification du circuit electrique, controle du siphon d'evacuation condensats, mesure du coefficient de performance (COP). Prix : 100 a 200 euros a Paris.",
              },
              {
                type: "Contrat d'entretien",
                detail: "Un contrat d'entretien annuel avec un artisan de confiance garantit que votre installation reste sous garantie constructeur et performante. Certains installateurs proposent des contrats tout inclus (entretien + depannage prioritaire) pour 150 a 300 euros/an. En cas de panne en pleine canicule, les clients sous contrat sont traites en priorite.",
              },
            ].map((el) => (
              <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.type}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
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
              { href: '/blog/vmc-appartement-paris', title: 'VMC appartement Paris' },
              { href: '/blog/chauffage-appartement-paris', title: 'Chauffage appartement Paris' },
              { href: '/blog/renovation-appartement-paris', title: 'Renovation appartement Paris' },
              { href: '/blog/electricite-appartement-paris', title: 'Electricite appartement Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique Paris' },
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
          Faire installer votre climatisation a Paris par un artisan certifie
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Espace Design : installation split et multi-split Paris, techniciens certifies fluides frigorigenes, devis 48h.
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
