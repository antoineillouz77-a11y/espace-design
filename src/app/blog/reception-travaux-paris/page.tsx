import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: "Reception des Travaux Paris : liste de controle & droits 2025",
  description: "Que verifier lors de la reception des travaux a Paris ? Reserves, retenue de garantie, garanties post-reception. Guide complet 2025 par Espace Design.",
  keywords: [
    "reception travaux Paris",
    "proces-verbal reception travaux",
    "reserves reception travaux",
    "retenue garantie travaux",
    "garantie parfait achevement Paris",
    "garantie biennale decennale",
    "malfacons travaux Paris",
    "refus reception travaux",
  ],
}

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reception des Travaux Paris : liste de controle & droits 2025",
  description: "Que verifier lors de la reception des travaux a Paris ? Reserves, retenue de garantie, garanties post-reception. Guide complet 2025.",
  author: { "@type": "Organization", name: "Espace Design" },
  publisher: {
    "@type": "Organization",
    name: "Espace Design",
    url: "https://espacedesignparis.fr",
  },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  url: "https://espacedesignparis.fr/blog/reception-travaux-paris",
}

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Que verifier lors de la reception des travaux a Paris ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lors de la reception, verifiez methodiquement : la conformite des travaux au devis (surfaces, materiaux, equipements), l'etat des finitions (peinture, jointoiement, raccords), le fonctionnement de tous les equipements installes (prises, robinets, VMC, chauffage), l'absence de fissures, deformations ou traces d'humidite, la conformite des installations aux normes (norme NF C 15-100 pour l'electricite, DTU pour la plomberie). Prenez des photos datees de chaque reserve constatee et exigez qu'elles soient consignees dans le proces-verbal de reception.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on refuser de receptionner les travaux ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, le refus de reception est possible lorsque les travaux sont affectes de desordres tellement importants qu'ils rendent l'ouvrage inutilisable ou dangereux. En pratique, il est preferable de receptionner avec reserves plutot que de refuser : cela preserve vos droits tout en permettant a l'artisan de corriger les defauts. Le refus doit etre motive par ecrit et notifie a l'artisan par LRAR. Il suspend le paiement du solde et le delai de prescription. Une reception tacite (occupation des lieux sans PV) peut etre invoquee par l'artisan — d'ou l'importance d'etablir toujours un PV ecrit.",
      },
    },
    {
      "@type": "Question",
      name: "Qu'est-ce que la retenue de garantie de 5 % ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La retenue de garantie est une somme representant 5 % du montant HT du marche que vous pouvez legalement retenir lors du paiement du solde, afin de garantir l'execution des reserves formulees lors de la reception. Ce droit est prevu par la loi du 16 juillet 1971. L'artisan peut substituer a cette retenue une caution bancaire d'un montant equivalent. La retenue est liberee dans un delai d'un an apres la reception, sauf si des reserves restent non levees. Elle ne s'applique pas aux marches inferieurs a 12 000 euros HT.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont les delais de recours apres reception des travaux ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trois garanties legales s'appliquent apres reception, avec des durees differentes. La garantie de parfait achevement couvre 1 an tous les desordres signales au PV ou notifies par LRAR dans l'annee. La garantie biennale couvre 2 ans les equipements dissociables (volets, robinetterie, radiateurs). La garantie decennale couvre 10 ans les dommages compromettant la solidite ou l'usage de l'ouvrage. Ces delais sont des delais de prescription : passez ce cap, vos recours sont eteints meme si les dommages persistent.",
      },
    },
  ],
}

export default function ArticleReceptionTravaux() {
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

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">
            Guide pratique
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Réception des Travaux Paris : tout vérifier avant de payer
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La réception des travaux est l&apos;acte juridique le plus important du chantier : c&apos;est
            à partir de ce moment que courent les garanties légales et que votre artisan est
            libéré de sa responsabilité pour les défauts non signalés. Voici comment préparer
            et conduire cette étape.
          </p>
        </div>
      </section>

      {/* Section 1 — Cadre juridique */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Le cadre juridique de la réception (article 1792-6 du Code civil)
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La réception est définie à l&apos;article 1792-6 du Code civil comme &laquo;&nbsp;l&apos;acte par lequel
              le maître de l&apos;ouvrage déclare accepter l&apos;ouvrage avec ou sans réserves.&nbsp;&raquo; Elle
              marque deux moments clés : le transfert de la garde de l&apos;ouvrage au maître
              d&apos;ouvrage, et le point de départ des garanties légales.
            </p>
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-5 mb-5">
              <div className="font-medium text-amber-900 text-sm mb-2">Attention — réception tacite</div>
              <p className="text-amber-800 text-sm font-light leading-relaxed">
                Si vous prenez possession des lieux sans établir de PV ni formuler de réserves, la
                jurisprudence peut reconnaître une &laquo;&nbsp;réception tacite&nbsp;&raquo;. Cette situation vous
                prive de la possibilité de soulever des réserves a posteriori pour les défauts
                apparents. Établissez toujours un procès-verbal écrit, même pour de petits
                chantiers.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  effet: "Transfert de garde",
                  desc: "À la réception, vous devenez gardien de l'ouvrage. Les dommages survenus après la réception (vol, accident, intempéries) relèvent de votre responsabilité et non de celle de l'artisan, sauf s'ils résultent d'un désordre apparu avant réception.",
                },
                {
                  effet: "Point de départ des garanties",
                  desc: "Les trois garanties légales (parfait achèvement, biennale, décennale) commencent à courir à compter de la date du PV de réception. La date mentionnée dans le PV fait foi en cas de litige. En cas d'absence de PV, les tribunaux retiennent généralement la date d'emménagement.",
                },
                {
                  effet: "Paiement du solde",
                  desc: "La réception déclenche le droit pour l'artisan de réclamer le paiement du solde (généralement 5 à 10 % du montant total). En cas de réserves, vous pouvez retenir 5 % jusqu'à leur levée (retenue de garantie légale).",
                },
              ].map((el) => (
                <div key={el.effet} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.effet}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Liste de contrôle avant de signer le PV
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Prévoyez deux à trois heures pour une visite de réception sérieuse. Emmenez votre
              devis, le cahier des charges et un appareil photo. Voici les points à inspecter
              pièce par pièce.
            </p>
            <div className="space-y-3">
              {[
                {
                  zone: "Gros œuvre et structure",
                  items: [
                    "Absence de fissures structurelles (fissures en escalier sur maçonnerie, fissures traversantes)",
                    "Planéité des planchers et des murs (règle de 2 mètres, écart max 7 mm)",
                    "Confomité des ouvertures (dimensions, tableaux, linteaux)",
                    "Étanchéité des jonctions (toiture/mur, terrasse/façade)",
                  ],
                },
                {
                  zone: "Électricité",
                  items: [
                    "Fonctionnement de chaque prise et interrupteur",
                    "Tableau électrique : disjoncteurs identifiés et calibrés selon la NF C 15-100",
                    "Présence de la mise à la terre (vérifiable avec testeur de prise)",
                    "Fonctionnement de la VMC, des extracteurs salle de bain et cuisine",
                  ],
                },
                {
                  zone: "Plomberie et sanitaires",
                  items: [
                    "Test d'étanchéité de toutes les évacuations (WC, lavabo, douche, évier)",
                    "Pression et température de l'eau chaude sanitaire",
                    "Absence de bruit anormal dans les canalisations",
                    "Fonctionnement du chauffage (chaudière, plancher chauffant, radiateurs)",
                  ],
                },
                {
                  zone: "Finitions",
                  items: [
                    "Régularité des joints de carrelage (largeur constante, absence de fissure)",
                    "Planéité du parquet (pas de lame qui craque, pas de bombement)",
                    "Peinture : absence de coulures, reprises visibles, raccords de couleur",
                    "Menuiseries : alignement des portes, jeux homogènes, fermeture sans effort",
                  ],
                },
              ].map((zone) => (
                <div key={zone.zone} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-3">{zone.zone}</div>
                  <ul className="space-y-1.5">
                    {zone.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-gray-600 font-light">
                        <span className="text-[#D4AF37] flex-shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Réserves et PV */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Comment formuler des réserves et rédiger le PV de réception
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La qualité de la rédaction du procès-verbal de réception est déterminante pour
            protéger vos droits. Une réserve vague est une réserve difficile à faire valoir.
          </p>
          <div className="space-y-4">
            {[
              {
                num: "01",
                titre: "Description précise de chaque réserve",
                texte:
                  "Chaque réserve doit localiser le défaut (\"chambre principale, mur nord, à 1,20 m du sol\"), décrire le désordre constaté (\"fissure horizontale de 45 cm, lézarde de 3 mm\") et préciser si le défaut est de nature esthétique ou fonctionnel. Évitez les formulations générales type \"peinture à reprendre\" sans plus de précision.",
              },
              {
                num: "02",
                titre: "Photos datées en annexe",
                texte:
                  "Joignez systématiquement des photos datées de chaque réserve. Ces photos constituent la preuve de l'état de l'ouvrage à la réception. Elles sont déterminantes si un litige survient ultérieurement sur la question de savoir si le désordre existait avant ou après réception.",
              },
              {
                num: "03",
                titre: "Délai de levée des réserves",
                texte:
                  "Fixez dans le PV un délai raisonnable pour la levée de chaque réserve : 15 à 30 jours pour des finitions légères, 2 à 3 mois pour des travaux plus importants. Passé ce délai, vous pouvez faire exécuter les travaux de reprise par une autre entreprise aux frais de l'artisan défaillant.",
              },
              {
                num: "04",
                titre: "Retenue de 5 % sur le solde",
                texte:
                  "En cas de réserves, vous êtes en droit de ne payer que 95 % du solde restant et de retenir 5 % du montant HT total du marché à titre de garantie. Mentionnez explicitement cette retenue dans le PV et notifiez le montant retenu par écrit à l'artisan.",
              },
              {
                num: "05",
                titre: "Double signature",
                texte:
                  "Le PV doit être signé par vous et par le représentant de l'entreprise (gérant ou chef de chantier mandaté). Un PV signé uniquement par vous n'a pas la même valeur probante. En cas de refus de l'artisan de signer, envoyez-lui le PV par LRAR : il vaudra constat unilatéral.",
              },
            ].map((el) => (
              <div
                key={el.num}
                className="flex gap-4 bg-white rounded-lg p-5 border border-gray-100"
              >
                <span className="font-display text-2xl font-semibold text-[#D4AF37]/40 flex-shrink-0 leading-none">
                  {el.num}
                </span>
                <div>
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.titre}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.texte}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Garanties post-réception */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les garanties post-réception : récapitulatif
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Trois régimes de garantie se succèdent après la réception, avec des champs et des
              durées différents. Savoir lequel actionner selon le désordre constaté vous évite de
              perdre du temps et de laisser prescrire vos droits.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">
                      Garantie
                    </th>
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">
                      Durée
                    </th>
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">
                      Ce qu&apos;elle couvre
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      nom: "Parfait achèvement",
                      duree: "1 an",
                      couverture:
                        "Tous défauts signalés au PV ou par LRAR dans l'année, y compris esthétiques",
                    },
                    {
                      nom: "Biennale",
                      duree: "2 ans",
                      couverture:
                        "Équipements dissociables : volets, robinetterie, VMC indépendante, radiateurs",
                    },
                    {
                      nom: "Décennale",
                      duree: "10 ans",
                      couverture:
                        "Dommages compromettant la solidité ou l'usage : structure, étanchéité, canalisations encastrées",
                    },
                  ].map((row, i) => (
                    <tr key={row.nom} className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"}>
                      <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.nom}</td>
                      <td className="px-4 py-3 text-gray-600 font-light">{row.duree}</td>
                      <td className="px-4 py-3 text-gray-600 font-light">{row.couverture}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Défauts apparus après réception : comment agir ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Vous constatez un désordre plusieurs semaines ou mois après la réception. Voici la
              marche à suivre selon la garantie applicable.
            </p>
            <div className="space-y-3">
              {[
                {
                  cas: "Dans l'année — garantie de parfait achèvement",
                  action:
                    "Notifiez le défaut à l'artisan par LRAR dans l'année suivant la réception. L'artisan est tenu de réparer sans délai. En cas d'inaction sous 15 jours, vous pouvez faire exécuter les travaux par un tiers aux frais de l'artisan, après mise en demeure.",
                },
                {
                  cas: "Entre 1 et 2 ans — garantie biennale",
                  action:
                    "Si le désordre concerne un équipement dissociable (volet roulant, robinet, pompe de chauffage), mettez en demeure l'artisan par LRAR. Demandez l'intervention ou le remplacement dans un délai de 30 jours. En cas de refus, saisissez le tribunal judiciaire.",
                },
                {
                  cas: "Entre 2 et 10 ans — garantie décennale",
                  action:
                    "Déclenchez d'abord votre assurance dommages-ouvrage si vous en avez souscrit une. Sinon, mettez en demeure l'artisan par LRAR. S'il est défaillant, saisissez le tribunal judiciaire. La prescription est de 10 ans à compter de la réception — ne tardez pas.",
                },
              ].map((el) => (
                <div key={el.cas} className="bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.cas}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.action}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Peut-on refuser de réceptionner les travaux ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le refus de réception est un droit, mais il doit être motivé et mesuré. Voici dans
              quels cas il est justifié — et comment procéder.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  titre: "Cas justifiant un refus",
                  texte:
                    "L'ouvrage est inutilisable en l'état (absence d'alimentation électrique, de plomberie fonctionnelle), dangereux (risque d'effondrement, installation électrique non conforme), ou présente des non-conformités majeures par rapport au devis (surface réalisée inférieure, matériaux substitués sans accord).",
                },
                {
                  titre: "Procédure de refus",
                  texte:
                    "Notifiez votre refus à l'artisan par LRAR en motivant précisément chaque défaut constaté. L'artisan doit corriger et proposer une nouvelle réception. Ne prenez pas possession des lieux : une occupation des lieux caractériserait une réception tacite et viderait votre refus de sa substance.",
                },
              ].map((el) => (
                <div key={el.titre} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.titre}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.texte}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-8 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Que vérifier lors de la réception des travaux à Paris ?",
                a: "Vérifiez méthodiquement : la conformité au devis (surfaces, matériaux), les finitions (peinture, carrelage, parquet), le fonctionnement de tous les équipements (prises, VMC, plomberie, chauffage), l'absence de fissures ou traces d'humidité. Prenez des photos datées de chaque réserve et exigez qu'elles soient inscrites dans le PV.",
              },
              {
                q: "Peut-on refuser de réceptionner des travaux ?",
                a: "Oui, si l'ouvrage est inutilisable, dangereux ou présente des non-conformités majeures. Le refus doit être motivé par écrit (LRAR) et ne prendre possession des lieux sous aucun prétexte. En pratique, réceptionner avec réserves est souvent préférable : cela force l'artisan à lever les réserves tout en préservant vos droits.",
              },
              {
                q: "Qu'est-ce que la retenue de garantie de 5 % ?",
                a: "La retenue de garantie est une somme représentant 5 % du montant HT total que vous pouvez légalement retenir sur le solde en cas de réserves. Elle est libérée dans l'année qui suit la réception, une fois les réserves levées. L'artisan peut la remplacer par une caution bancaire de même montant. Elle ne s'applique pas aux marchés inférieurs à 12 000 € HT.",
              },
              {
                q: "Quels sont les délais de recours après réception des travaux ?",
                a: "Trois garanties s'appliquent : parfait achèvement (1 an, tous désordres), biennale (2 ans, équipements dissociables), décennale (10 ans, désordres structurels). Ces délais sont des délais de prescription : au-delà, vos recours sont éteints. Agissez dès les premiers désordres constatés et notifiez par LRAR pour interrompre la prescription.",
              },
            ].map((faq) => (
              <details key={faq.q} className="bg-white rounded-lg border border-gray-100 group">
                <summary className="flex justify-between items-center px-5 py-4 cursor-pointer list-none text-sm font-medium text-[#1C1C1C]">
                  {faq.q}
                  <span className="text-[#D4AF37] font-light text-lg ml-4 flex-shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 font-light leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">
            Voir aussi
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: "/blog/assurance-decennale-artisan-paris",
                title: "Assurance décennale artisan Paris",
              },
              {
                href: "/blog/declaration-travaux-paris",
                title: "Déclaration préalable de travaux Paris",
              },
              {
                href: "/blog/devis-renovation-paris",
                title: "Devis rénovation Paris",
              },
              { href: "/contact", title: "Demander un devis gratuit" },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="bg-[#FAFAF8] border border-gray-100 rounded-lg p-4 hover:border-[#D4AF37]/40 transition-colors group"
              >
                <span className="text-sm text-[#1C1C1C] font-light group-hover:text-[#B8960C] transition-colors">
                  {a.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Un projet de rénovation à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Espace Design réalise un procès-verbal de réception détaillé à chaque fin de chantier.
          Devis gratuit, déplacement sans engagement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#c9a030] transition-colors"
          >
            Devis gratuit <ArrowRight size={13} />
          </Link>
          <a
            href="tel:+33611783867"
            className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 px-7 py-3.5 rounded font-light text-sm tracking-wide hover:border-white hover:text-white transition-colors"
          >
            <Phone size={14} />
            06 11 78 38 67
          </a>
        </div>
      </section>
    </>
  )
}
