import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Copropriété Paris', item: 'https://espacedesignparis.fr/blog/renovation-appartement-copropriete-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement en Copropriété Paris : règles & démarches 2025',
  description: 'Rénover en copropriété à Paris : travaux autorisés sans AG, vote obligatoire, déclaration en mairie. Guide complet 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-copropriete-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels travaux peut-on faire dans un appartement en copropriété sans autorisation ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les travaux purement privatifs ne touchant pas aux parties communes ne nécessitent pas d\'autorisation de l\'AG : peinture, papier peint, pose de parquet flottant (sous réserve de sous-couche phonique), remplacement du carrelage intérieur, rénovation de la cuisine ou de la salle de bains (sans déplacer les évacuations sur colonnes communes). Tout ce qui affecte la structure de l\'immeuble, les façades, les colonnes montantes ou les parties communes nécessite en revanche un vote en AG.',
      },
    },
    {
      '@type': 'Question',
      name: 'Doit-on déclarer en mairie des travaux dans un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une déclaration préalable de travaux (DP) est nécessaire dès lors que vous modifiez l\'aspect extérieur de l\'immeuble (remplacement d\'une fenêtre visible de la rue, création ou agrandissement d\'une ouverture). Un permis de construire (PC) est requis si les travaux créent plus de 20 m² de surface supplémentaire. Pour des travaux intérieurs standards (peinture, sol, cuisine), aucune démarche en mairie n\'est requise.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les règles de bruit pendant un chantier en copropriété parisienne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'À Paris, les travaux bruyants dans les logements sont autorisés du lundi au vendredi de 8h à 20h, le samedi de 9h à 19h, et le dimanche de 10h à 12h. Le règlement intérieur de la copropriété peut imposer des horaires plus restrictifs — consultez-le avant de démarrer. Il est recommandé d\'informer vos voisins par courrier ou affichage en avance de la durée prévisionnelle du chantier.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement en Copropriété Paris : règles & démarches 2025 | Espace Design',
  description: 'Rénover en copropriété à Paris : travaux autorisés sans AG, vote obligatoire, déclaration en mairie. Guide complet 2025.',
}

export default function ArticleRenovationCopropriete() {
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
            Réglementation
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement en Copropriété Paris : règles & démarches 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Rénover son appartement à Paris en copropriété implique de naviguer entre droits privatifs et parties communes, autorisations d&apos;assemblée générale et déclarations en mairie. Ce guide complet vous explique ce que vous pouvez faire librement et ce qui nécessite une autorisation.
          </p>
        </div>
      </section>

      {/* Section 1 — Travaux libres */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Travaux autorisés sans passer par l&apos;AG
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Toute rénovation qui reste dans le périmètre strictement privatif de votre appartement — et qui ne touche ni aux parties communes, ni à l&apos;aspect extérieur de l&apos;immeuble — peut être réalisée librement, sans avoir à solliciter l&apos;accord de la copropriété.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Toutefois, même pour ces travaux, il est fortement conseillé de prévenir le syndic et vos voisins immédiats en avance, notamment pour les chantiers bruyants ou de longue durée.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Peinture, papier peint, revêtements muraux',
                  detail: 'Aucune restriction. Vous pouvez peindre, tapisser, enduire ou décorer vos murs intérieurs sans aucune démarche. Seules les murs de façade visibles de l\'extérieur sont soumis à contraintes.',
                },
                {
                  enjeu: 'Sol : parquet flottant, carrelage, stratifié',
                  detail: 'Pose libre de tout revêtement de sol intérieur. Attention : le règlement de copropriété impose souvent une sous-couche résiliente phonique sous les revêtements durs (parquet, carrelage) pour protéger les voisins du dessous. Sans cette sous-couche, vous pourriez être mis en demeure de déposer le revêtement.',
                },
                {
                  enjeu: 'Cuisine et salle de bains (sans déplacement de colonnes)',
                  detail: 'Remplacement de l\'équipement, de la robinetterie, du carrelage et du mobilier : libre. Le déplacement des évacuations sur des colonnes communes (collecteurs d\'immeuble) nécessite en revanche l\'accord du syndic et parfois un vote en AG.',
                },
                {
                  enjeu: 'Cloisons intérieures non porteuses',
                  detail: 'La suppression ou la création de cloisons légères entre pièces de votre appartement est généralement libre. En revanche, toucher à un mur porteur (même privatif) nécessite une déclaration préalable en mairie et une étude de structure.',
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

      {/* Section 2 — Vote AG obligatoire */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Travaux nécessitant un vote en assemblée générale
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Dès lors que vos travaux impactent les parties communes — même indirectement — vous devez soumettre un dossier au syndic pour inscription à l&apos;ordre du jour de la prochaine AG. Procéder sans autorisation expose à une mise en demeure, voire une obligation de remise en état à vos frais.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Percement d\'un mur porteur commun',
                detail: 'Création d\'une ouverture entre deux pièces impliquant un mur porteur appartenant aux parties communes. Nécessite un vote en AG, un bureau de contrôle technique et une déclaration préalable (voire un permis de construire selon la surface créée).',
                cout: 'Vote AG requis',
              },
              {
                titre: 'Modification de la façade',
                detail: 'Remplacement des fenêtres par un modèle différent (couleur, profil), pose d\'une climatisation visible, installation d\'un store banne ou d\'un volet roulant extérieur : toujours soumis à vote AG + déclaration préalable en mairie.',
                cout: 'Vote AG + DP mairie',
              },
              {
                titre: 'Travaux sur la toiture ou les combles',
                detail: 'Percement d\'un velux, aménagement des combles communs, installation d\'une terrasse en toiture : travaux sur parties communes soumis à vote en AG. L\'accord de l\'ABF peut être exigé pour les immeubles en secteur patrimonial.',
                cout: 'Vote AG + ABF possible',
              },
              {
                titre: 'Déplacement d\'une colonne montante',
                detail: 'Les colonnes de plomberie, d\'électricité ou de gaz appartenant à l\'immeuble sont des parties communes. Tout déplacement ou modification nécessite l\'accord du syndic et souvent un vote en AG.',
                cout: 'Accord syndic + vote',
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

      {/* Section 3 — Déclaration mairie */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Déclaration en mairie : DP ou permis de construire ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Indépendamment des règles de copropriété, certains travaux doivent être déclarés en mairie. À Paris, la règle est plus stricte qu&apos;en province : la capitale est quasi entièrement classée zone ABF, ce qui signifie que même des travaux mineurs sur l&apos;extérieur peuvent nécessiter une démarche administrative.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Aucune démarche',
                prix: 'Travaux intérieurs courants',
                detail: 'Peinture, sol, cuisine, salle de bains, cloisons intérieures non porteuses, électricité intérieure : aucune démarche en mairie. Ces travaux n\'affectent ni l\'aspect extérieur, ni la structure de l\'immeuble.',
              },
              {
                type: 'Déclaration préalable (DP)',
                prix: 'Délai : 1 mois',
                detail: 'Requis pour : modification de l\'aspect extérieur (fenêtres, volets, balcon visible), création d\'une surface de moins de 20 m², installation d\'une climatisation ou d\'un poêle à granulés avec conduit en façade. Dossier à déposer en mairie d\'arrondissement. Délai d\'instruction : 1 mois.',
              },
              {
                type: 'Permis de construire (PC)',
                prix: 'Délai : 2 mois',
                detail: 'Requis si les travaux créent plus de 20 m² de surface de plancher supplémentaire (agrandissement, surélévation). À Paris, le dossier est examiné par la mairie d\'arrondissement ET par l\'ABF. Délai d\'instruction : 2 mois minimum.',
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

      {/* Section 4 — Règlement copro et bruit */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Règlement de copropriété et bruit de chantier à Paris
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le règlement de copropriété est le document contractuel qui régit la vie de l&apos;immeuble. Il peut contenir des clauses spécifiques plus restrictives que la loi : horaires de chantier, matériaux imposés, interdiction de certains travaux. Sa lecture attentive avant tout projet est indispensable.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Horaires de chantier légaux à Paris',
                prix: 'Lun-Ven 8h-20h',
                detail: 'Les travaux bruyants sont autorisés du lundi au vendredi de 8h à 20h, le samedi de 9h à 19h, et le dimanche de 10h à 12h. Mais le règlement de copropriété peut être plus restrictif (ex : travaux bruyants interdits le samedi après-midi). Vérifiez impérativement avant de planifier le chantier.',
              },
              {
                type: 'Clause matériaux imposés',
                prix: 'Fréquent à Paris',
                detail: 'Certains règlements de copropriété anciens (immeubles haussmanniens, années 1930-1960) imposent des matériaux précis pour les sols (parquet bois), les fenêtres (bois), ou les revêtements de façade. Le non-respect peut être sanctionné par le syndic ou les autres copropriétaires.',
              },
              {
                type: 'Communication avec le syndic',
                prix: 'Recommandé par écrit',
                detail: 'Même pour des travaux libres, informer le syndic par courrier recommandé ou email permet de constituer une trace en cas de litige ultérieur. Pour les travaux nécessitant un accord, prévoyez un délai de 3 à 6 mois entre la demande d\'inscription à l\'AG et le vote.',
              },
            ].map((el) => (
              <div key={el.type} className="bg-white rounded-lg p-5 border border-gray-100">
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

      {/* Section 5 — Récapitulatif / tableau */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Récapitulatif : autorisation requise ou non ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Tableau de référence rapide pour les travaux les plus courants dans un appartement parisien en copropriété.
          </p>

          <div className="grid grid-cols-1 gap-3 mb-8">
            {[
              { travaux: 'Peinture intérieure', ag: 'Non', mairie: 'Non', note: 'Libre' },
              { travaux: 'Pose parquet flottant', ag: 'Non', mairie: 'Non', note: 'Sous-couche phonique obligatoire' },
              { travaux: 'Rénovation cuisine/SDB (sans déplacement colonnes)', ag: 'Non', mairie: 'Non', note: 'Libre' },
              { travaux: 'Remplacement fenêtres (même modèle)', ag: 'Recommandé', mairie: 'Non', note: 'Vérifier règlement copro' },
              { travaux: 'Remplacement fenêtres (modèle différent)', ag: 'Oui', mairie: 'DP', note: 'Façade modifiée' },
              { travaux: 'Percement mur porteur commun', ag: 'Oui', mairie: 'DP ou PC', note: 'Bureau de contrôle requis' },
              { travaux: 'Travaux toiture / combles communs', ag: 'Oui', mairie: 'DP', note: 'ABF possible' },
            ].map((row) => (
              <div key={row.travaux} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="font-medium text-[#1C1C1C] text-sm">{row.travaux}</div>
                  <div className="flex gap-3 text-xs">
                    <span className={`px-2 py-0.5 rounded font-medium ${row.ag === 'Non' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>
                      AG : {row.ag}
                    </span>
                    <span className={`px-2 py-0.5 rounded font-medium ${row.mairie === 'Non' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>
                      Mairie : {row.mairie}
                    </span>
                  </div>
                </div>
                {row.note && (
                  <div className="text-gray-500 text-xs font-light mt-1">{row.note}</div>
                )}
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils avant de démarrer votre rénovation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Lire attentivement le règlement de copropriété — il prime sur la loi générale',
                'Obtenir les plans de l\'appartement auprès du syndic pour identifier les murs porteurs',
                'Contacter le syndic par écrit avant tout chantier, même pour les travaux libres',
                'Prévoir 3 à 6 mois de délai pour les travaux nécessitant un vote en AG',
                'Choisir un artisan qui connaît les contraintes de la copropriété parisienne',
                'Constituer un dossier photos avant/pendant/après pour protéger vos droits en cas de litige',
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
              { href: '/blog/renovation-balcon-terrasse-immeuble-paris', title: 'Rénovation balcon en copropriété Paris' },
              { href: '/blog/ravalement-facade-paris', title: 'Ravalement de façade Paris' },
              { href: '/blog/isolation-combles-subvention-paris', title: 'Isolation combles Paris' },
              { href: '/blog/renovation-appartement-mise-en-location-paris', title: 'Rénovation avant location Paris' },
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
          Un projet de rénovation en copropriété à Paris ?
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisan expérimenté en rénovation d&apos;appartements parisiens. Accompagnement démarches inclus. Devis gratuit sous 48h.
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
