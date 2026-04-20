import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Porte blindée Paris', item: 'https://espacedesignparis.fr/blog/porte-blindee-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Porte Blindée Paris : installation, certifications & prix 2025",
  description: "Installer une porte blindée à Paris : certifications A2P BP1/BP2/BP3, marques Fichet, Vachette, Dierre, démarches syndic, délai de pose et prix 2025.",
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/porte-blindee-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quelle certification porte blindée choisir ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La certification A2P (Assurance Prevention Protection) est la reference en France. Le niveau BP1 resiste 5 minutes a une effraction, BP2 resist 10 minutes et BP3 resist 15 minutes. Pour un appartement parisien standard en copropriete, le BP2 est le meilleur compromis securite/prix. Le BP3 est recommande en rez-de-chaussee ou pour des biens de haute valeur.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien coûte une porte blindée à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix d'une porte blindee posee a Paris varie de 2 000 a 5 000 euros pour une porte A2P BP2 standard (marques Fichet, Vachette, Dierre). Une porte BP3 haut de gamme avec finition sur mesure peut atteindre 7 000 a 10 000 euros. La pose seule represente 300 a 600 euros selon les contraintes de l'embrasure.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il l'accord du syndic pour installer une porte blindée ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non, si la porte blindee remplace la porte existante sans modifier la facade ni le couloir commun. En revanche, si le montage necessite de toucher au mur porteur ou au palier, l'accord du syndic peut etre requis. Verifiez toujours votre reglement de copropriete et consultez votre syndic avant de commander.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps dure l'installation d'une porte blindée ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La pose d'une porte blindee en remplacement d'une porte existante prend generalement une demi-journee (3 a 5 heures). Si l'embrasure doit etre modifiee ou agrandie, la journee complete est necessaire. La livraison de la porte sur mesure intervient 3 a 6 semaines apres la commande selon la marque et la finition choisie.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "Porte Blindée Paris : installation, certifications & prix 2025",
  description: "Installer une porte blindée à Paris : certifications A2P BP1/BP2/BP3, marques Fichet, Vachette, Dierre, démarches syndic, délai de pose et prix 2025. Artisan Paris.",
  keywords: [
    'porte blindée Paris',
    'installation porte blindée Paris',
    'prix porte blindée Paris 2025',
    'certification A2P BP2 BP3',
    'Fichet Paris',
    'Vachette Paris',
    'Dierre Paris',
    'serrure multipoints Paris',
    'artisan porte blindée Paris',
  ],
}

export default function ArticlePorteBlindee() {
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
            Sécurité & Menuiserie
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Installer une Porte Blindée à Paris : guide complet
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Certifications A2P, marques (Fichet, Vachette, Dierre), types de portes, démarches copropriété et prix 2025 pour l&apos;installation d&apos;une porte blindée à Paris.
          </p>
        </div>
      </section>

      {/* Section 1 — Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Certifications A2P : BP1, BP2, BP3 — laquelle choisir ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La certification A2P (Assurance Prévention Protection) est la référence française en matière de résistance à l&apos;effraction. Elle est délivrée par le CNPP (Centre National de Prévention et de Protection) et reconnue par les assureurs. Trois niveaux existent, correspondant au temps de résistance à une tentative d&apos;intrusion par des techniciens professionnels.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Certification</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Résistance</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Usage recommandé</th>
                    <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix indicatif posé</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cert: 'A2P BP1', resistance: '5 minutes', usage: 'Appartement étage, faible risque', prix: '1 500 – 2 500 €' },
                    { cert: 'A2P BP2', resistance: '10 minutes', usage: 'Standard Paris — recommandé', prix: '2 500 – 5 000 €' },
                    { cert: 'A2P BP3', resistance: '15 minutes', usage: 'RDC, bien de valeur, haute sécurité', prix: '5 000 – 10 000 €' },
                  ].map((row, i) => (
                    <tr key={row.cert} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                      <td className="px-4 py-3 text-[#1C1C1C] font-medium text-sm">{row.cert}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.resistance}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.usage}</td>
                      <td className="px-4 py-3 text-center text-gray-600 font-light">{row.prix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs font-light italic">
              La certification porte sur l&apos;ensemble du bloc-porte : vantail, huisserie, serrure et paumelles. Assurez-vous que chaque élément est certifié séparément.
            </p>
          </div>

          {/* Types de portes */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Types de portes blindées : pivotante, coulissante, à galandage
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              La grande majorité des portes d&apos;entrée parisiennes sont des portes pivotantes classiques. Mais dans les petits appartements ou les studios, d&apos;autres configurations sont envisageables.
            </p>
            <div className="space-y-4">
              {[
                {
                  type: 'Porte blindée pivotante (standard)',
                  detail: "La solution de référence à Paris. Montée sur paumelles blindées, elle intègre une serrure multipoints encastrée et un dormant renforcé scellé dans la maçonnerie. Compatible avec toutes les certifications A2P. Disponible en finition bois, laquée ou revêtement PVC.",
                },
                {
                  type: 'Porte coulissante blindée',
                  detail: "Adaptée aux espaces très contraints où l'ouverture standard est impossible. Les performances anti-effraction sont légèrement inférieures à une porte pivotante (joints moins comprimés). Certification BP1 ou BP2 possible. Coût supérieur de 20 à 40 % à qualité équivalente.",
                },
                {
                  type: 'Porte à galandage blindée',
                  detail: "La porte s'escamote dans la paroi. Solution esthétique pour les espaces ouverts. Les contraintes de caisson limitent l'épaisseur du vitail et donc les performances antieffraction. Recommandée pour les pièces intérieures ou comme séparation, rarement en porte d'entrée principale.",
                },
              ].map((el) => (
                <div key={el.type} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.type}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Marques & serrures */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Fichet, Vachette, Dierre : les marques de référence à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Le marché parisien est dominé par quelques marques dont la réputation est bien établie. Voici leurs points forts respectifs pour vous aider à faire votre choix.
            </p>
            <div className="space-y-4">
              {[
                {
                  marque: 'Fichet',
                  detail: "Référence historique du marché français. Gamme étendue du BP1 au BP3. Finitions haut de gamme très appréciées dans les appartements de prestige parisiens. SAV solide et réseau de serruriers agréés dense en Île-de-France. Prix légèrement premium mais qualité de fabrication reconnue.",
                },
                {
                  marque: 'Vachette (ASSA ABLOY)',
                  detail: "Solide rapport qualité/prix sur toute la gamme A2P. Large choix de finitions bois décoratives. Serrures multipoints fiables, cylindres hautes sécurité en option. Très présente dans les programmes de rénovation en copropriété parisienne.",
                },
                {
                  marque: 'Dierre',
                  detail: "Fabricant italien avec une forte présence sur le marché français. Connu pour ses portes au design contemporain et ses finitions laquées mate ou brillante. Bon niveau de certification A2P et isolation phonique notable (jusqu'à 40 dB selon les modèles).",
                },
                {
                  marque: 'Torterolo & Re / Fichet-Bauche',
                  detail: "Positionnement haut de gamme et ultra-sécurité (BP3 et au-delà). Prisé pour les appartements de grande valeur, les rez-de-chaussée ou les biens en zone sensible. Fabrication française, délais de pose plus longs (5 à 8 semaines).",
                },
              ].map((el) => (
                <div key={el.marque} className="bg-white rounded-lg p-5 border border-gray-100">
                  <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.marque}</div>
                  <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Serrures multipoints */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Serrures multipoints : le coeur de la sécurité d&apos;une porte blindée
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Une porte blindée sans serrure de qualité ne vaut rien. La serrure multipoints (3, 5 ou 7 points d&apos;ancrage) est indissociable du niveau de certification A2P. Voici les caractéristiques à vérifier.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Nombre de points de fermeture : 3 points minimum (BP1), 5 points (BP2), 7 points ou plus (BP3)",
                "Cylindre antibumping, antipicking et antiperçage inclus dans la certification A2P serrure",
                "Bouton de béquille protégé par un cache anti-arrachage ou une rosace blindée",
                "Clé brevetée (non reproductible sans attestation) : indispensable pour contrôler les duplicata",
                "Option connectée (serrure numérique ou Bluetooth) disponible sur certaines gammes BP2/BP3",
                "Gâche électrique possible pour les immeubles avec interphone centralisé",
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

      {/* Section 3 — Démarches copropriété & délais */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Démarches copropriété pour une porte blindée à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-5">
              Contrairement aux fenêtres, la pose d&apos;une porte blindée ne nécessite généralement pas l&apos;accord de l&apos;assemblée générale — à condition de ne pas modifier l&apos;aspect extérieur du palier. Voici ce qu&apos;il faut vérifier.
            </p>
            <ul className="space-y-3">
              {[
                "Si la porte blindée remplace exactement l'ancienne porte sans toucher au mur ni au palier commun : aucune autorisation de l'AG n'est requise dans la majorité des cas.",
                "Si le dormant doit être élargi (embrasure trop étroite) ou si la pose affecte le couloir commun : consultez votre syndic avant de commander.",
                "Certains règlements imposent une finition extérieure homogène sur tout l'étage (couleur ou aspect bois). Vérifiez les contraintes esthétiques du côté palier.",
                "En immeuble haussmannien classé ou périmètre ABF : vérifiez si la porte d'entrée est mentionnée dans les éléments soumis à autorisation préalable.",
                "Informez simplement le syndic par lettre recommandée pour tracer les travaux effectués — bonne pratique même sans obligation légale.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600 font-light">
                  <span className="text-[#D4AF37] font-medium flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Déroulement chantier */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Déroulement de la pose d&apos;une porte blindée à Paris
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              La pose d&apos;une porte blindée est un travail de précision qui demande une demi-journée à une journée complète selon l&apos;état de l&apos;embrasure. Voici les étapes type.
            </p>
            <ol className="space-y-3">
              {[
                {
                  etape: 'Relevé de cotes et diagnostic',
                  detail: "Mesure précise de l'embrasure, état de la maçonnerie, analyse du sol (présence de seuil, parquet à protéger), sens d'ouverture et contraintes de palier. Indispensable pour commander la porte aux bonnes dimensions.",
                },
                {
                  etape: 'Commande et délai de fabrication',
                  detail: "3 à 6 semaines selon la marque et la finition. Les portes blindées sont fabriquées sur mesure — aucune porte standard du commerce n'est certifiée A2P pour une embrasure non conforme.",
                },
                {
                  etape: 'Dépose de l\'ancienne porte',
                  detail: "Retrait du bloc-porte existant, nettoyage de l'embrasure, reprise éventuelle de la maçonnerie ou ajout de cales pour assurer le parfait aplomb du nouveau dormant.",
                },
                {
                  etape: 'Pose du dormant et scellement',
                  detail: "Le dormant blindé est vissé et scellé dans la maçonnerie selon les préconisations du fabricant. C'est l'étape la plus critique : un mauvais scellement annule l'essentiel de la résistance à l'effraction.",
                },
                {
                  etape: 'Réglages, finitions et remise des clés',
                  detail: "Réglage des paumelles et du multipoints, vérification de l'étanchéité au pourtour, pose des joncs et finitions intérieures. Remise des clés brevetées et des attestations de certification A2P.",
                },
              ].map((el, i) => (
                <li key={el.etape} className="flex gap-4 bg-[#FAFAF8] rounded-lg p-4 border border-gray-100">
                  <span className="font-display text-lg font-semibold text-[#D4AF37]/50 flex-shrink-0 w-6">{i + 1}</span>
                  <div>
                    <div className="font-medium text-[#1C1C1C] text-sm mb-1">{el.etape}</div>
                    <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Section 4 — Prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix porte blindée Paris 2025 : exemples concrets
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Le prix d&apos;une porte blindée posée à Paris dépend du niveau de certification, de la marque, de la finition et des éventuelles modifications de l&apos;embrasure. Ces fourchettes incluent la fourniture et la pose.
          </p>
          <div className="space-y-3">
            {[
              {
                cas: 'Porte A2P BP1 — entrée de gamme',
                prix: '1 500 – 2 500 €',
                detail: 'Finition bois standard, serrure 3 points, appartement étages intermédiaires',
              },
              {
                cas: 'Porte A2P BP2 — standard Paris (Vachette, Dierre)',
                prix: '2 500 – 5 000 €',
                detail: 'Serrure 5 points, cylindre antibumping, finition laquée ou bois décor',
              },
              {
                cas: 'Porte A2P BP3 — haute sécurité (Fichet, Torterolo)',
                prix: '5 000 – 10 000 €',
                detail: 'RDC, bien de valeur, serrure 7 points, clé brevetée, finition sur mesure',
              },
              {
                cas: 'Option serrure connectée (Bluetooth/NFC)',
                prix: '+ 500 – 1 500 €',
                detail: 'Ouverture smartphone, gestion des accès à distance, compatible BP2/BP3',
              },
            ].map((row, i) => (
              <div key={i} className="bg-white rounded-lg p-5 border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <div className="font-medium text-[#1C1C1C] text-sm mb-1">{row.cas}</div>
                  <div className="text-gray-500 text-xs font-light">{row.detail}</div>
                </div>
                <div className="text-[#D4AF37] font-semibold text-sm flex-shrink-0">{row.prix}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs font-light italic mt-4">
            Hors modification importante de l&apos;embrasure ou reprise de maçonnerie. Compter 300 à 800 € supplémentaires en cas de travaux d&apos;adaptation.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-8 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Quelle certification porte blindée choisir ?",
                r: "La certification A2P est la référence française. Le niveau BP1 résiste 5 minutes à une effraction, BP2 résiste 10 minutes et BP3 résiste 15 minutes. Pour un appartement parisien standard en copropriété, le BP2 est le meilleur compromis sécurité/prix. Le BP3 est recommandé en rez-de-chaussée ou pour des biens de haute valeur.",
              },
              {
                q: "Combien coûte une porte blindée à Paris ?",
                r: "Le prix d'une porte blindée posée à Paris varie de 1 500 à 5 000 € pour une porte A2P BP1/BP2 standard (marques Fichet, Vachette, Dierre). Une porte BP3 haut de gamme avec finition sur mesure peut atteindre 7 000 à 10 000 €. La pose seule représente 300 à 600 € selon les contraintes de l'embrasure.",
              },
              {
                q: "Faut-il l'accord du syndic pour installer une porte blindée ?",
                r: "Non dans la plupart des cas, si la porte remplace l'existante sans modifier la façade ni le palier commun. En revanche, si le montage nécessite de toucher au mur porteur ou au couloir, l'accord du syndic peut être requis. Vérifiez votre règlement de copropriété avant de commander.",
              },
              {
                q: "Combien de temps dure l'installation d'une porte blindée ?",
                r: "La pose d'une porte blindée en remplacement prend généralement 3 à 5 heures. Si l'embrasure doit être modifiée, la journée complète est nécessaire. La livraison de la porte sur mesure intervient 3 à 6 semaines après la commande selon la marque et la finition choisie.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{item.q}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{item.r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4 text-center">Voir aussi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/menuiserie-paris', title: 'Menuiserie Paris' },
              { href: '/blog/renovation-fenetre-paris', title: 'Rénovation fenêtres Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénover un haussmannien' },
              { href: '/blog/choisir-artisan-renovation-paris', title: 'Choisir son artisan à Paris' },
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
              { href: '/renovation-paris-6e', label: 'Paris 6e' },
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
              { href: '/renovation-levallois-perret', label: 'Levallois-Perret' },
              { href: '/renovation-versailles', label: 'Versailles' },
              { href: '/renovation-saint-germain-en-laye', label: 'Saint-Germain-en-Laye' },
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
      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
          Vous souhaitez installer une porte blindée à Paris ?
        </h2>
        <p className="text-gray-400 text-sm font-light mb-8">
          Prise de cotes gratuite. Devis sous 48h. Pose soignée par artisan qualifié.
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
