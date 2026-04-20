import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'VMC Appartement Paris', item: 'https://espacedesignparis.fr/blog/vmc-appartement-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "VMC Appartement Paris : installation, entretien & prix artisan 2025",
  description: "Installer une VMC dans un appartement a Paris : simple flux vs double flux, reglementation, prix artisan 2025. Devis gratuit Espace Design.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/vmc-appartement-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "La VMC est-elle obligatoire dans un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, la VMC (Ventilation Mecanique Controlee) est obligatoire dans tout logement neuf depuis l'arrete du 24 mars 1982, et exigee dans les logements anciens renoves selon les normes RT 2012 et RE 2020. En renovation, elle est techniquement obligatoire pour obtenir certaines subventions (MaPrimeRenov') et est fortement recommandee par les diagnostiqueurs energetiques pour ameliorer le DPE. Dans les appartements parisiens anciens sans VMC, la ventilation naturelle par les fenetres et les entrees d'air des menuiseries est souvent insuffisante, ce qui genere humidite, moisissures et mauvaise qualite de l'air interieur.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle est la difference entre VMC simple flux et VMC double flux ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La VMC simple flux extrait l'air vicie des pieces humides (salle de bain, cuisine, WC) via un moteur electrique et des bouches d'extraction. L'air neuf entre naturellement par les entrees d'air des fenetres. C'est la solution la plus repandue et la moins couteuse (1 500 a 3 000 euros pose comprise). La VMC double flux extrait l'air vicie ET insuffle de l'air neuf filtre et prechauff via un echangeur thermique. Elle recupere 70 a 90% de la chaleur de l'air extrait pour chauffer l'air entrant. Ideal pour les appartements tres bien isoles (DPE A ou B), elle reduit les besoins en chauffage. Prix : 4 000 a 8 000 euros pose comprise. Moins adaptee aux immeubles anciens ou les gaines sont difficiles a passer.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on installer une VMC dans un appartement en copropriete a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, mais l'installation d'une VMC dans un appartement en copropriete requiert en general l'accord de la copropriete si les gaines d'extraction passent par les parties communes (vide-sanitaire, gaine technique collective, toiture). Si les gaines passent uniquement dans les parties privatives et evacuent en facade par une sortie de toit individuelle, aucun accord n'est necessaire. Dans les immeubles parisiens anciens, l'installation est souvent realisee en raccordement sur la gaine collective existante (moins invasif) ou par une nouvelle gaine individuelle posee en saillie dans la salle de bain.",
      },
    },
    {
      '@type': 'Question',
      name: "A quelle frequence faut-il entretenir sa VMC a Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'entretien de la VMC doit etre realise au minimum une fois par an. Les operations a prevoir : nettoyage des bouches d'extraction (aspiration des poussières) et des entrees d'air (brossage), verification du moteur (niveaux sonores, vibrations), remplacement des filtres pour la VMC double flux (tous les 6 mois a 1 an selon le modele), nettoyage des gaines tous les 3 a 5 ans. Un entretien negliges se traduit par une baisse des debits d'air, une surconsommation electrique et un risque de moisissures. Prix entretien annuel VMC simple flux : 80 a 150 euros. VMC double flux : 150 a 300 euros (remplacement filtres inclus).",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "VMC Appartement Paris : installation, entretien & prix artisan 2025 | Espace Design",
  description: "Installer une VMC dans un appartement a Paris : simple flux vs double flux, reglementation, prix artisan 2025. Devis gratuit Espace Design.",
  keywords: ["VMC appartement Paris", "installation VMC Paris", "prix VMC Paris", "VMC simple flux Paris", "VMC double flux Paris 2025"],
}

export default function ArticleVmcAppartementParis() {
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
            Ventilation & qualite de l&apos;air
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Installer une VMC dans son Appartement a Paris : guide complet 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Une VMC bien installee protege votre appartement contre l&apos;humidite, les moisissures et garantit un air sain. Mais dans les immeubles parisiens, l&apos;installation d&apos;une VMC pose des contraintes specifiques. Guide complet sur les types, la reglementation, les prix et l&apos;entretien 2025.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1C1C1C] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { val: '1 500 €', label: 'Prix mini VMC simple flux posee' },
              { val: '8 000 €', label: 'VMC double flux haut de gamme' },
              { val: '1x/an', label: 'Frequence entretien recommandee' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#D4AF37] mb-1">{s.val}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C]">
            Pourquoi la ventilation est critique dans les appartements parisiens
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Les appartements parisiens, en particulier ceux du XIXe et debut XXe siecle, ont ete construits avant l&apos;ere de l&apos;isolation intensive. Paradoxalement, c&apos;est cette permeabilite a l&apos;air qui assurait naturellement la ventilation. Avec les renovations energetiques (double vitrage, isolation, joints d&apos;etancheite), les appartements sont devenus beaucoup plus etanches — et beaucoup plus sujets aux problemes d&apos;humidite et de qualite de l&apos;air.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            Un appartement sans VMC ou avec une VMC defaillante accumule vapeur d&apos;eau (douche, cuisine), CO2, COV (composes organiques volatils des peintures et meubles) et polluants interieurs. Le resultat : moisissures sur les murs, condensation sur les fenetres, air confinee, et risques pour la sante des occupants.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            A Paris, les appartements sous les toits sont particulierement vulnerables : chaleur en ete, humidite en hiver, et souvent aucune gaine existante. L&apos;installation d&apos;une VMC est dans ce cas une priorite absolue.
          </p>
        </div>
      </section>

      {/* Section 2 — Simple vs double flux */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            VMC simple flux vs double flux : que choisir a Paris ?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le choix entre simple et double flux depend du niveau d&apos;isolation de votre logement, de votre budget et de la configuration de l&apos;immeuble.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "VMC simple flux (hygro A ou B)",
                recommande: "Logements anciens, DPE C a E",
                detail: "Extraction mecanique de l'air vicie dans les pieces humides (SDB, cuisine, WC). L'air neuf entre naturellement par les entrees d'air des menuiseries. La version hygro B module le debit selon l'humidite mesuree dans chaque piece, ce qui reduit la consommation electrique et evite de trop refroidir en hiver. C'est la solution la plus adaptee aux immeubles parisiens anciens ou les gaines existantes peuvent etre reutilisees.",
              },
              {
                titre: "VMC double flux (avec echangeur)",
                recommande: "Logements tres isoles, DPE A ou B",
                detail: "Extraction + insufflation avec recuperation de chaleur via un echangeur (efficacite 70-90%). Ideal pour les logements bien isoles ou chaque kWh de chauffage compte. Necessite un groupe de ventilation plus volumineux (placard technique) et deux reseaux de gaines distincts. En immeuble ancien, la difficulte de passage des gaines en fait une solution couteuse et complexe. Plus adaptee aux appartements neufs ou entierement renoves.",
              },
              {
                titre: "VMC simple flux autoreglee",
                recommande: "Budget contraint, configuration simple",
                detail: "Version simplifiee de la VMC simple flux : debits fixes (pas de modulation hygro). Moins chere a l'achat mais moins efficace energetiquement. Souvent deja presente dans les immeubles parisiens des annees 1980-2000. En cas de remplacement, la mise a jour vers une version hygro B est fortement recommandee pour un surcoût de seulement 200 a 400 euros.",
              },
              {
                titre: "VMC hydrauique (eau chaude sanitaire)",
                recommande: "Renovation energetique complete",
                detail: "Solution avancee qui combine ventilation double flux et preparation d'eau chaude sanitaire via une pompe a chaleur sur l'air extrait. Tres efficace energetiquement (COP > 3) mais installation complexe et volumineuse. A Paris, principalement recommandee pour les maisons et les grands appartements avec projet de renovation energetique complete. Prix : 6 000 a 12 000 euros.",
              },
            ].map((el) => (
              <div key={el.titre} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.titre}</div>
                <div className="text-[#B8960C] text-[10px] uppercase tracking-wider font-light mb-2">{el.recommande}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Installation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Installation VMC a Paris : etapes et contraintes
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            L&apos;installation d&apos;une VMC dans un appartement parisien presente des specificites techniques liees a l&apos;architecture des immeubles.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                etape: "1 — Diagnostic et conception du reseau",
                detail: "L'artisan analyse la configuration de l'appartement (nombre et position des pieces humides), evalue les possibilites de passage des gaines (faux plafond, combles, placard technique), et choisit le groupe de ventilation adapte. Dans les immeubles anciens, le raccordement sur la gaine collective existante est souvent la solution la plus economique.",
              },
              {
                etape: "2 — Passage des gaines",
                detail: "C'est l'etape la plus technique. Les gaines (generalement en PVC rigide ou semi-rigide, diametre 80 a 125 mm) sont posees en faux plafond, dans les placards, ou en apparent gaine placo. Dans les immeubles parisiens anciens, le passage des gaines necessite parfois des saignees dans les murs (bouchees apres pose) ou un trajet en apparent cache par une gaine placo. Les raccords sont etanches pour eviter toute fuite d'air.",
              },
              {
                etape: "3 — Pose du groupe de ventilation",
                detail: "Le groupe electrique (moteur) est pose dans un placard, sous les combles ou dans un faux plafond technique. Il doit etre accessible pour l'entretien. La fixation anti-vibrations est indispensable pour eviter les nuisances sonores. Le groupe est raccorde au reseau de gaines et a l'alimentation electrique (prise 220V dediee ou raccordement direct au tableau).",
              },
              {
                etape: "4 — Pose des bouches d'extraction et entrees d'air",
                detail: "Les bouches d'extraction sont posees dans les plafonds des pieces humides (SDB, cuisine, WC, buanderie). Elles sont reglees aux debits recommandes par la reglementation (NF EN 15251). Les entrees d'air sont posees en haut des menuiseries des pieces principales (salon, chambres) : 30 a 45 m3/h par piece. Si les fenetres ne sont pas equipees d'entrees d'air, des grilles de transfert dans les portes interieures completent le dispositif.",
              },
              {
                etape: "5 — Reglage et mise en service",
                detail: "L'artisan verifie et regle les debits de chaque bouche selon les normes (NF DTU 68.3). Un compte-rendu de mise en service est remis. Pour une VMC double flux, le reglage de l'equilibrage entre extraction et insufflation est critique pour le bon fonctionnement de l'echangeur.",
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
            Prix VMC Paris 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Prix tout compris (fourniture + pose + mise en service + raccordement electrique) par un artisan paris.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type d&apos;installation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix estime</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Surface typique</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "VMC simple flux autoreglee (studio)", prix: "1 500 – 2 000 €", surface: "Jusqu'a 30 m2" },
                  { type: "VMC simple flux hygro B (2-3 pieces)", prix: "2 000 – 3 500 €", surface: "30 a 70 m2" },
                  { type: "VMC simple flux hygro B (grand appartement)", prix: "3 000 – 5 000 €", surface: "70 a 120 m2" },
                  { type: "VMC double flux (appartement neuf/isole)", prix: "4 000 – 8 000 €", surface: "Toutes surfaces" },
                  { type: "Remplacement VMC existante", prix: "800 – 2 000 €", surface: "Gaines existantes" },
                  { type: "Entretien VMC simple flux (annuel)", prix: "80 – 150 €", surface: "—" },
                  { type: "Entretien VMC double flux (annuel)", prix: "150 – 300 €", surface: "Filtres inclus" },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prix}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.surface}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
            <div className="font-medium text-[#1C1C1C] text-sm mb-3">Points a verifier lors du devis VMC</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Passage des gaines : en apparent ou encastre — impact majeur sur le prix et l'esthetique",
                "Raccordement electrique : prise dediee existante ou creation d'un circuit electrique supplementaire",
                "Sortie en toiture : necessite souvent une autorisation en copropriete pour percement de la toiture",
                "Marque du groupe : choisir des marques reconnues (Aldes, Atlantic, Zehnder) pour la perennite des pieces",
                "Mise aux normes entrees d'air : si vos fenetres n'ont pas d'entrees d'air, prevoir leur pose (50-100 euros/fenetre)",
                "Aide MaPrimeRenov : la VMC double flux peut ouvrir droit a une aide sous conditions de ressources",
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
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-6 text-center">Questions frequentes</p>
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
              { href: '/blog/climatisation-appartement-paris', title: 'Climatisation appartement Paris' },
              { href: '/blog/isolation-thermique-appartement-paris', title: 'Isolation thermique Paris' },
              { href: '/blog/humidite-appartement-paris', title: 'Humidite appartement Paris' },
              { href: '/blog/renovation-salle-de-bain-paris', title: 'Renovation salle de bain Paris' },
              { href: '/blog/electricite-appartement-paris', title: 'Electricite appartement Paris' },
              { href: '/blog/renovation-appartement-paris', title: 'Renovation appartement Paris' },
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
          Installer votre VMC a Paris avec un artisan certifie
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Espace Design : installation VMC simple et double flux dans tout Paris. Devis gratuit 48h, garantie decennale.
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
