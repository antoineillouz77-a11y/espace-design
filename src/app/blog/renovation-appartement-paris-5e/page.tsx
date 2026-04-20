import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Rénovation Appartement Paris 5e', item: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-5e' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rénovation Appartement Paris 5e : Quartier Latin & prix 2025 | Espace Design',
  description: 'Rénover dans le 5e arrondissement à Paris : immeubles anciens, étudiants et familles, contraintes copropriété. Prix 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/renovation-appartement-paris-5e',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une rénovation au m² dans le 5e arrondissement de Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans le 5e arrondissement, le prix d'une rénovation d'appartement se situe entre 1 500 et 2 500 €/m² selon l'ampleur des travaux et l'état initial du logement. Une rénovation légère (peinture, sol, salle de bain) se situe autour de 800 à 1 200 €/m². Une rénovation complète d'un appartement haussmannien de 60 m² dans le Quartier Latin, incluant remise aux normes électriques, plomberie, parquet, menuiseries, peinture décorative et cuisine, peut atteindre 80 000 à 120 000 €. Les contraintes ABF (Architectes des Bâtiments de France) et les délais de copropriété peuvent allonger les délais et renchérir les coûts de 10 à 20 %.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les contraintes spécifiques pour rénover dans le 5e arrondissement de Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le 5e arrondissement est l'un des plus réglementés de Paris. Plusieurs zones sont soumises à l'avis des Architectes des Bâtiments de France (ABF) — notamment autour du Panthéon, de la rue Mouffetard et des abords de Notre-Dame. Tout changement de façade, de menuiserie extérieure (couleur des fenêtres, volets) ou de balcon nécessite une déclaration préalable de travaux et peut être refusé ou modifié par l'ABF. En copropriété, les travaux de parties communes (cage d'escalier, façade, toiture) nécessitent un vote en assemblée générale. Les immeubles des 17e et 18e siècles comportent souvent des murs en pierre de taille qui nécessitent des techniques d'isolation spécifiques.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment isoler un appartement en pierre dans le 5e arrondissement de Paris ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'isolation d'un appartement en pierre de taille dans le 5e est un sujet délicat. La pierre a une bonne inertie thermique mais une isolation médiocre. Deux approches existent : l'isolation par l'intérieur (doublage en laine de roche ou laine de bois sur ossature, avec pare-vapeur adapté) réduit la surface habitable de 8 à 12 cm par mur traité mais est la seule option en appartement. L'isolation par l'extérieur (ITE) n'est possible qu'en façade et nécessite l'accord de la copropriété et de l'ABF — rarement accordé dans les immeubles anciens du 5e. Il faut éviter les isolants trop étanches sur un mur en pierre pour ne pas piéger l'humidité : préférer des matériaux respirants (chanvre, liège expansé, laine de bois).",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Rénovation Appartement Paris 5e : Quartier Latin & prix 2025 | Espace Design',
  description: 'Rénover dans le 5e arrondissement à Paris : immeubles anciens, étudiants et familles, contraintes copropriété. Prix 2025.',
}

export default function ArticleRenovationParis5e() {
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
            Quartiers
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Rénovation Appartement Paris 5e : Quartier Latin &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Le 5e arrondissement est l&apos;un des plus anciens et des plus protégés de Paris. Autour du Panthéon, de la rue Mouffetard et des bords de Seine, les immeubles des 17e et 18e siècles imposent leurs contraintes spécifiques. Planchers anciens, murs en pierre, copropriétés exigeantes : guide complet pour rénover dans le Quartier Latin en 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Spécificités du 5e */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les spécificités du 5e arrondissement pour les travaux de rénovation
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le 5e arrondissement abrite le Quartier Latin, l&apos;un des quartiers les plus anciens de Paris, avec une densité exceptionnelle de bâtiments classés ou inscrits aux Monuments Historiques. La rue Mouffetard, les abords du Panthéon, l&apos;Île Saint-Louis voisine et les berges de Seine sont autant de zones où les travaux de façade font l&apos;objet d&apos;une surveillance architecturale particulière.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Le parc immobilier du 5e est dominé par des immeubles de rapport des 17e et 18e siècles, avec quelques constructions haussmanniennes du 19e siècle. On y trouve aussi une proportion importante de studios et de petits appartements liés à la forte présence universitaire (Sorbonne, École normale supérieure, Paris-IV).
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Immeubles des 17e-18e siècles : contraintes spécifiques',
                  detail: "Les immeubles les plus anciens du 5e arrondissement ont des structures en pierre de taille, avec des planchers en bois et des murs porteurs épais. La hauteur sous plafond est souvent remarquable (2,80 à 3,20 m), mais les distributions sont parfois complexes avec des couloirs étroits et des escaliers en bois sans ascenseur. Les travaux de plomberie et d'électricité nécessitent une attention particulière pour ne pas endommager les structures existantes.",
                },
                {
                  enjeu: 'Contraintes ABF et déclaration préalable',
                  detail: "Une grande partie du 5e arrondissement est couverte par le périmètre de protection des Monuments Historiques. Les Architectes des Bâtiments de France (ABF) doivent approuver tout changement visible depuis la rue : menuiseries extérieures, volets, couleur de façade, travaux sur balcons. La déclaration préalable de travaux est obligatoire et le délai d'instruction peut atteindre 2 mois.",
                },
                {
                  enjeu: 'Rue Mouffetard et secteurs protégés',
                  detail: "La rue Mouffetard et ses abords font l'objet d'une protection particulière au titre du Plan Local d'Urbanisme de Paris. Les devantures, enseignes et façades sont réglementées. Pour les appartements en étages, les travaux intérieurs sont libres, mais toute modification de l'aspect extérieur (y compris les fenêtres) doit être conforme aux prescriptions de l'ABF.",
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

      {/* Section 2 — Planchers et sols anciens */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Planchers anciens du 5e : pont de bateau, point de Hongrie et rénovation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les planchers en bois des immeubles anciens du 5e arrondissement sont souvent des pièces maîtresses de l&apos;appartement. Deux motifs dominent : le point de Hongrie (lames en chevrons, typique des appartements bourgeois du 19e siècle) et le plancher à bâtons rompus, ou pont de bateau (lames parallèles posées en quinconce). Ces parquets anciens méritent d&apos;être préservés et rénovés plutôt que remplacés.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Point de Hongrie',
                detail: 'Motif en chevrons caractéristique des appartements bourgeois parisiens des 17e-19e siècles. Les lames sont coupées en biseau et assemblées à 45 ou 90 degrés. La rénovation nécessite un ponçage soigneux pour respecter les angles. Incompatible avec une pose de parquet collé par-dessus sans préparation spécifique.',
                cout: 'Rénovation : 40 – 80 €/m²',
              },
              {
                titre: 'Plancher point de Hongrie',
                detail: 'Les lames droites posées en alternance décalée (bâtons rompus) sont le plancher le plus courant dans les immeubles de la fin du 19e et du début du 20e siècle dans le 5e. Souvent en chêne massif épais, il supporte plusieurs ponçages. Vérifier l\'état des lambourdes (poutrelles support) avant de rénover : elles peuvent être fragilisées par l\'humidité ou les insectes.',
                cout: 'Rénovation : 35 – 70 €/m²',
              },
              {
                titre: 'Diagnostic parquet avant travaux',
                detail: 'Avant toute rénovation de parquet ancien dans le 5e, un diagnostic de l\'état des lambourdes et des lames est indispensable. Certains parquets présentent des trous de vrillette (insecte xylophage) ou des moisissures en sous-face. Le remplacement des lames abîmées à l\'identique est possible avec du bois de récupération ou des lames neuves en chêne assorties.',
                cout: 'Diagnostic : gratuit à 200 €',
              },
              {
                titre: 'Isolation acoustique sous parquet ancien',
                detail: 'Les planchers anciens sur lambourdes laissent passer les sons par les interstices. Une rénovation complète permet d\'intercaler une laine minérale entre les lambourdes pour améliorer l\'isolation acoustique et thermique. Gain acoustique : 10 à 20 dB selon la technique. Obligatoire à mentionner au règlement de copropriété.',
                cout: 'Isolation : 20 – 40 €/m² en plus',
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

      {/* Section 3 — Murs en pierre et isolation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Murs en pierre de taille : isolation et finition dans le 5e
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les murs en pierre de taille des immeubles anciens du 5e sont magnifiques à voir mais thermiquement inefficaces. Les traiter sans endommager le bâti ni créer de problèmes d&apos;humidité est un vrai savoir-faire artisanal.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Isolation par l\'intérieur sur mur en pierre',
                prix: '80 – 150 €/m²',
                detail: "La seule option possible en appartement, l'isolation intérieure (ITI) consiste à poser un doublage isolant sur la face intérieure des murs en pierre. Pour un mur en pierre, il faut impérativement utiliser des matériaux respirants (laine de bois, chanvre, liège) pour éviter la condensation dans la paroi. Les matériaux synthétiques fermés (polystyrène) sont à proscrire sur un mur en pierre car ils piègent l'humidité et provoquent des dégâts à terme.",
              },
              {
                type: 'Enduits de finition sur pierre',
                prix: '30 – 60 €/m²',
                detail: "Si vous souhaitez conserver l'aspect pierre apparente (très prisé dans le 5e), un traitement à la chaux naturelle assure l'étanchéité tout en laissant le mur respirer. La chaux naturelle est le matériau traditionnel des immeubles anciens de Paris : compatible avec la pierre calcaire, elle régule naturellement l'humidité et n'emprisonne pas les sels.",
              },
              {
                type: 'Mise aux normes électriques (murs en pierre)',
                prix: '4 000 – 12 000 €/logement',
                detail: "Faire passer des câbles électriques dans des murs en pierre de 40 à 60 cm d'épaisseur est complexe. L'électricien doit utiliser des goulottes en saillie (habillées en menuiserie pour un rendu esthétique) ou créer des saignées dans le joint de mortier (jamais dans la pierre elle-même). Un appartement dans le 5e antérieur à 1980 nécessite souvent une mise aux normes NF C 15-100 complète (tableau, prises de terre, circuit dédié cuisine).",
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

      {/* Section 4 — Budget et prix */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix de rénovation dans le 5e arrondissement de Paris : budget 2025
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les prix ci-dessous s&apos;entendent pour un appartement ancien du 5e arrondissement (immeuble 17e-19e siècle), main d&apos;oeuvre et matériaux inclus.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Type de rénovation</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Travaux inclus</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Prix /m²</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget 50 m²</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: 'Légère',
                    travaux: 'Peinture + parquet ponçage + salle de bain',
                    prixM2: '800 – 1 200 €',
                    budget: '40 000 – 60 000 €',
                  },
                  {
                    type: 'Standard',
                    travaux: 'Peinture + parquet + cuisine + électricité partielle',
                    prixM2: '1 200 – 1 800 €',
                    budget: '60 000 – 90 000 €',
                  },
                  {
                    type: 'Complète',
                    travaux: 'Tout corps d\'état : électricité NF C 15-100, plomberie, sol, murs, menuiseries',
                    prixM2: '1 800 – 2 500 €',
                    budget: '90 000 – 125 000 €',
                  },
                  {
                    type: 'Haut de gamme',
                    travaux: 'Complète + isolation, matériaux premium, parquet sur mesure, cuisine sur mesure',
                    prixM2: '2 500 – 4 000 €',
                    budget: '125 000 – 200 000 €',
                  },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.travaux}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.prixM2}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Conseils pour rénover dans le 5e arrondissement
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Vérifier si votre immeuble est en zone ABF avant de commander des fenêtres ou des volets',
                'Faire un diagnostic parquet avant toute décision — il vaut souvent mieux rénover que remplacer',
                'Utiliser des matériaux respirants pour l\'isolation des murs en pierre (chaux, chanvre, liège)',
                'Anticiper les délais de copropriété pour les travaux de parties communes (assemblée générale)',
                'Prévoir une mise aux normes électrique complète dans les appartements antérieurs à 1980',
                'Conserver les éléments authentiques (moulures, cheminées, parquet ancien) : ils ont une vraie valeur',
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
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien' },
              { href: '/blog/renovation-parquet-paris', title: 'Rénovation parquet Paris' },
              { href: '/blog/renovation-appartement-paris-9e', title: 'Rénovation appartement Paris 9e' },
              { href: '/contact', title: 'Demander un devis gratuit' },
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
          Rénovez votre appartement dans le 5e arrondissement
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Artisans spécialisés en immeubles anciens et Quartier Latin. Devis gratuit sous 48h.
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
