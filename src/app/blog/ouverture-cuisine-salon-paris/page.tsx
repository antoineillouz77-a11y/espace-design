import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Ouverture Cuisine Salon Paris', item: 'https://espacedesignparis.fr/blog/ouverture-cuisine-salon-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ouvrir Cuisine sur Salon Paris : verrière, IPN & prix 2025 | Espace Design',
  description: "Ouvrir une cuisine sur le salon à Paris : verrière atelier, abattage de cloison, IPN. Démarches, prix 2025 et conseils d'artisan.",
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  url: 'https://espacedesignparis.fr/blog/ouverture-cuisine-salon-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix pour ouvrir une cuisine sur le salon à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix dépend du type de cloison à abattre. Pour une cloison légère (non porteuse) : 800 – 2 500 € incluant démolition, évacuation et finitions. Pour un mur porteur avec IPN : 6 000 – 16 000 € (étude structure + IPN + démolition + finitions). Une verrière atelier en remplacement de cloison coûte 2 500 – 6 000 € fournie et posée selon la surface vitrée.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il une autorisation pour ouvrir la cuisine sur le salon dans un appartement parisien ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Si la cloison à abattre est une simple cloison légère (non porteuse), aucune autorisation administrative n'est requise. Si c'est un mur porteur, une déclaration préalable de travaux en mairie et l'accord de la copropriété (vote AG) sont nécessaires. Dans tous les cas, vérifiez le règlement de copropriété qui peut imposer une consultation préalable pour tout travaux modifiant les circulations.",
      },
    },
    {
      '@type': 'Question',
      name: "La verrière atelier est-elle adaptée à tous les appartements parisiens ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La verrière atelier est idéale pour séparer visuellement cuisine et salon tout en laissant passer la lumière. Elle convient particulièrement aux appartements haussmanniens (hauteur sous plafond 2,80 m+) et aux lofts. Dans les appartements à faible hauteur (2,40 m), la verrière peut écraser l'espace. Prévoyez une cuisine bien ventilée (VMC, hotte puissante) car la verrière ne bloque pas les odeurs.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment gérer les odeurs de cuisine dans un espace ouvert à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans une cuisine ouverte sur le salon, la hotte est l'élément clé. Préférez une hotte aspirante avec évacuation vers l'extérieur plutôt que recyclante (moins efficace). Dans un immeuble parisien, le passage du conduit d'évacuation dans les murs peut être complexe — consultez votre artisan avant de choisir votre hotte. Une VMC double flux dans le séjour complète efficacement le système. Budget hotte qualité : 400 – 1 500 €.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Ouvrir Cuisine sur Salon Paris : verrière, IPN & prix 2025 | Espace Design',
  description: "Ouvrir une cuisine sur le salon à Paris : verrière atelier, abattage de cloison, IPN. Démarches, prix 2025 et conseils d'artisan.",
}

export default function ArticleOuvertureCuisineSalonParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#D4AF37] text-[10px] font-light uppercase tracking-[0.25em] mb-4">Cuisine</p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Ouvrir Cuisine sur Salon Paris : verrière, IPN & prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Ouvrir la cuisine sur le salon est l&apos;une des transformations les plus demandées dans les appartements parisiens. Elle agrandit visuellement l&apos;espace, favorise la convivialité et valorise le bien. Guide complet : cloison, mur porteur, verrière atelier et budget réel 2025.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Cloison légère ou mur porteur : quelle est la différence ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Avant de lancer les travaux, il est indispensable d&apos;identifier la nature de la séparation entre cuisine et salon. Cette étape conditionne tout : la complexité des travaux, le budget, et les démarches administratives.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              Dans les appartements parisiens des années 1950-1980, la cuisine est souvent séparée du salon par une simple cloison en carreaux de plâtre ou en plaques de plâtre — non porteuse et facile à abattre. Dans les immeubles haussmanniens et de rapport du XIXe siècle, la séparation est souvent un mur en pierre ou brique, potentiellement porteur.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'Cloison légère (non porteuse)',
                  detail: "Carreaux de plâtre (7 à 10 cm), plaque de plâtre sur ossature métallique (10 à 15 cm). Aucune fonction structurelle. Abattage simple, sans étaiement ni IPN. Travaux rapides (1 à 2 jours), budget limité (800 – 2 500 €). Idéal pour les appartements des années 1960-1990.",
                },
                {
                  enjeu: 'Mur porteur (structure)',
                  detail: "Pierre de taille, meulière, brique pleine, béton armé (15 à 50 cm d'épaisseur). Supporte les planchers et niveaux supérieurs. Abattage nécessite un bureau d'études structure, un IPN, et des démarches administratives. Budget : 6 000 – 16 000 €. Concerne surtout les immeubles haussmanniens et de rapport.",
                },
                {
                  enjeu: 'Verrière atelier : la solution intermédiaire',
                  detail: "La verrière en acier et verre remplace la cloison existante sans abattre. Elle laisse passer la lumière tout en maintenant une séparation visuelle légère. Très tendance dans les rénovations parisiennes. Peut être posée sur une cloison légère abattue partiellement ou en remplacement complet. Budget : 2 500 – 6 000 € posée.",
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

      {/* Section 2 */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            La verrière atelier : style industriel et lumière dans votre cuisine parisienne
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La verrière d&apos;intérieur style atelier est devenue le symbole des rénovations parisiennes tendance. Elle sépare sans cloisonner, laisse circuler la lumière naturelle, et donne un cachet industriel ou contemporain à l&apos;espace.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Verrière fixe pleine hauteur',
                detail: "La plus lumineuse : du sol au plafond, entièrement vitrée. Idéale dans les appartements haussmanniens à haute hauteur sous plafond (2,80 m+). Structure en acier noir ou blanc, vitrage simple ou feuilleté. Surface : 3 à 8 m².",
                cout: '3 000 – 6 000 €',
              },
              {
                titre: 'Verrière avec porte coulissante',
                detail: "Associe séparation visuelle et séparation physique occasionnelle. La porte coulissante permet de confiner les odeurs de cuisine lors des grandes cuissons. Très prisée dans les appartements avec enfants.",
                cout: '3 500 – 7 000 €',
              },
              {
                titre: 'Verrière partielle (mi-hauteur)',
                detail: "Couvre 40 à 60 % de la hauteur, laissant une ouverture en haut pour la circulation d'air. Crée un effet bar ou comptoir. Moins coûteuse et moins complexe qu'une pleine hauteur.",
                cout: '2 000 – 4 000 €',
              },
              {
                titre: 'Fenêtre de style (passe-plat vitré)',
                detail: "Option minimaliste : une simple fenêtre carrée ou rectangulaire percée dans la cloison, encadrée d'acier. Crée un passe-plat visuel sans ouvrir complètement les deux pièces. Budget très accessible.",
                cout: '800 – 2 000 €',
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

      {/* Section 3 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Ventilation, électricité et finitions : ce qu&apos;il ne faut pas oublier
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Ouvrir la cuisine sur le salon implique des modifications au-delà du seul abattage de cloison. Plusieurs corps de métier interviennent pour un résultat parfait.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: 'Hotte et ventilation',
                prix: '400 – 2 000 €',
                detail: "Dans une cuisine ouverte, la hotte aspirante avec évacuation vers l'extérieur est indispensable. Le passage du conduit dans les murs doit être anticipé avant les travaux. Une hotte îlot ou murale puissante (400 à 600 m³/h) est recommandée pour une cuisine ouverte de 15 m² ou plus.",
              },
              {
                type: 'Remise aux normes électriques',
                prix: '500 – 1 500 €',
                detail: "La cuisine doit disposer d'au moins 6 circuits dédiés (NF C 15-100). L'ouverture sur le salon est l'occasion de revoir le câblage et d'ajouter des prises en plinthe ou en sol pour le salon. Anticipez les éclairages encastrés dans le nouveau plafond ouvert.",
              },
              {
                type: 'Raccords de sol et plafond',
                prix: '300 – 1 000 €',
                detail: "Après abattage de la cloison, les raccords de revêtement de sol (parquet, carrelage) entre cuisine et salon sont presque toujours nécessaires. Prévoyez une bande de transition si les deux pièces ont des sols différents. Les raccords de plâtre au plafond (trace de la cloison) nécessitent ponçage et peinture.",
              },
              {
                type: 'Îlot central ou bar',
                prix: '1 500 – 5 000 €',
                detail: "L'ouverture sur le salon est souvent l'occasion de créer un îlot central ou un bar de séparation qui matérialise la frontière entre les deux espaces. L'îlot peut intégrer un plan de travail, des rangements, et des prises électriques.",
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

      {/* Budget table */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Budget : prix pour ouvrir la cuisine sur le salon à Paris (2025)
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="text-left px-4 py-3 font-light text-xs uppercase tracking-wider">Scénario</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Travaux inclus</th>
                  <th className="text-center px-4 py-3 font-light text-xs uppercase tracking-wider">Budget</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { scenario: 'Cloison légère + finitions', travaux: 'Démolition cloison + raccords sol/plafond + peinture', budget: '1 500 – 3 500 €' },
                  { scenario: 'Cloison légère + verrière', travaux: 'Démolition partielle + pose verrière atelier', budget: '3 000 – 7 000 €' },
                  { scenario: 'Mur porteur + ouverture partielle', travaux: 'Étude structure + IPN + démolition + finitions', budget: '6 000 – 12 000 €' },
                  { scenario: 'Mur porteur + verrière', travaux: 'IPN + démolition + verrière + raccords', budget: '8 000 – 18 000 €' },
                  { scenario: 'Ouverture complète + îlot', travaux: 'Démolition + verrière + îlot sur mesure + hotte + électricité', budget: '10 000 – 25 000 €' },
                ].map((row, i) => (
                  <tr key={row.scenario} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 text-[#1C1C1C] font-medium">{row.scenario}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-light">{row.travaux}</td>
                    <td className="px-4 py-3 text-center text-[#B8960C] font-medium">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">Points clés pour réussir votre projet</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Identifiez la nature de la séparation (cloison ou mur porteur) avant tout devis",
                "Anticipez la ventilation (hotte + VMC) — c'est le point le plus souvent oublié",
                "Vérifiez le règlement de copropriété avant de lancer les démarches",
                "Prévoyez les raccords de sol entre cuisine et salon dans le budget",
                "La verrière atelier se marie bien avec tous les styles d'appartement parisien",
                "Un îlot central bien conçu compense la perte de rangements muraux en cuisine",
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
              { href: '/blog/mur-porteur-paris', title: 'Mur porteur Paris : guide complet' },
              { href: '/blog/renovation-appartement-paris-13e', title: 'Rénovation appartement Paris 13e' },
              { href: '/blog/renovation-appartement-paris-15e', title: 'Rénovation appartement Paris 15e' },
              { href: '/blog/renovation-appartement-paris-17e', title: 'Rénovation appartement Paris 17e' },
              { href: '/blog/creation-verriere-interieure-paris', title: 'Verrière intérieure Paris' },
              { href: '/blog/renovation-bureau-paris', title: 'Rénovation bureau Paris' },
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
          Ouvrez votre cuisine sur le salon à Paris
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Verrière, cloison ou mur porteur : devis sous 48h.
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
