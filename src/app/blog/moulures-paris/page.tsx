import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Restauration Moulures Paris', item: 'https://espacedesignparis.fr/blog/moulures-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Restauration Moulures Paris : corniche, rosace & prix 2025 | Espace Design',
  description: 'Restaurer ou poser des moulures dans un appartement parisien : corniche au plafond, rosace, parquet moulure. Prix artisan plâtrier 2025.',
  datePublished: '2025-04-20',
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: {
    '@type': 'Organization',
    name: 'Espace Design',
    url: 'https://espacedesignparis.fr',
  },
  url: 'https://espacedesignparis.fr/blog/moulures-paris',
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix pour restaurer des moulures dans un appartement parisien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix de restauration de moulures à Paris varie selon le matériau et la complexité du profil : entre 15 et 35 €/ml pour une corniche en polyuréthane posée, 40 à 80 €/ml pour une corniche en plâtre traditionnel sculptée et posée. Une rosace de plafond coûte entre 150 et 600 € posée selon le diamètre et le décor. Ces tarifs incluent la main d'œuvre et les matériaux.",
      },
    },
    {
      '@type': 'Question',
      name: 'Vaut-il mieux restaurer les moulures d\'origine ou les remplacer par du polyuréthane ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La restauration du plâtre d'origine est toujours préférable dans les appartements haussmanniens classés ou en secteur sauvegardé : elle préserve l'authenticité, la valeur patrimoniale et les détails du profil. Le polyuréthane est une alternative économique pour les bâtiments sans contrainte de préservation : moins cher (15–25 €/ml), léger, ne nécessite pas de mouillage, mais avec un rendu moins fin et une durabilité moindre face aux chocs. En rénovation standard, les deux solutions sont valables selon le budget.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on poser des moulures dans un appartement rénové sans moulures d\'origine ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, il est tout à fait possible d'ajouter des moulures dans un appartement qui n'en avait pas ou dont les moulures ont été supprimées lors d'une rénovation antérieure. Un artisan plâtrier sélectionne un profil adapté à la hauteur sous plafond et au style souhaité, puis le pose à la jonction mur-plafond. Le résultat donne immédiatement un caractère haussmannien à l'espace. Comptez 20 à 60 €/ml selon le profil choisi.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Restauration Moulures Paris : corniche, rosace & prix 2025 | Espace Design',
  description: 'Restaurer ou poser des moulures dans un appartement parisien : corniche au plafond, rosace, parquet moulure. Prix artisan plâtrier 2025.',
}

export default function ArticleMouluresParis() {
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
            Plâtrerie
          </p>
          <div className="w-8 h-px bg-[#D4AF37]/60 mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Restauration Moulures Paris : corniche, rosace &amp; prix 2025
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Les moulures sont l&apos;âme des appartements parisiens : corniches à profil classique, rosaces de plafond, frises décoratives. Restaurer ou recréer ces éléments demande un artisan plâtrier expérimenté. Guide complet des techniques, matériaux et prix 2025.
          </p>
        </div>
      </section>

      {/* Section 1 — Types de moulures */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
              Les différents types de moulures dans l&apos;appartement parisien
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Le patrimoine haussmannien parisien regorge d&apos;éléments décoratifs en plâtre travaillé. Chaque type de moulure a sa fonction architecturale et son vocabulaire propre. Comprendre ces distinctions est indispensable avant d&apos;engager une restauration.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
              La qualité de la restauration dépend avant tout du respect du profil d&apos;origine. Un artisan plâtrier expérimenté commence toujours par analyser les sections encore en place pour reproduire à l&apos;identique l&apos;ensemble de la pièce.
            </p>
            <div className="space-y-4">
              {[
                {
                  enjeu: 'La corniche',
                  detail: 'Moulure courant en jonction mur-plafond, la corniche est l\'élément le plus répandu des appartements haussmanniens. Ses profils varient du simple quart-de-rond (sobre, fin XIXe) aux corniches complexes à gorge, talon et astragale des immeubles bourgeois. Hauteur typique : 8 à 25 cm selon le standing.',
                },
                {
                  enjeu: 'La rosace de plafond',
                  detail: 'Médaillon circulaire en plâtre au centre du plafond, la rosace accueille le lustre et structure visuellement la pièce. Les modèles vont du simple disque nervuré (60 cm) aux compositions florales élaborées (plus de 120 cm) dans les salons de réception. Très fréquentes dans les immeubles de standing construits entre 1860 et 1914.',
                },
                {
                  enjeu: 'La frise et le bandeau',
                  detail: 'Bande décorative courant horizontalement en haut des murs (sous la corniche) ou en ceinture de pièce. Les frises à motifs répétitifs (oves, denticules, godrons) caractérisent l\'architecture classique. Plus discrète, la baguette ou le bandeau uni structure l\'espace sans ornementation.',
                },
                {
                  enjeu: 'Le caisson et la voussure',
                  detail: 'Présents dans les couloirs et salles à manger des grands appartements, les caissons de plafond sont des encadrements moulurés qui créent une composition géométrique en relief. La voussure est le raccord courbe entre le mur et un plafond légèrement bombé, typique des boudoirs et bibliothèques haussmanniens.',
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

      {/* Section 2 — Restauration vs création */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Restauration plâtre traditionnel vs moulures en polyuréthane
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Face à des moulures dégradées ou absentes, deux grandes solutions s&apos;offrent aux propriétaires parisiens : la restauration (ou recréation) en plâtre traditionnel par un artisan stucateur, ou la pose de moulures préfabriquées en polyuréthane. Le choix dépend du budget, des contraintes patrimoniales et du niveau de finition souhaité.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: 'Restauration plâtre traditionnel',
                solution: 'L\'artisan plâtrier reconstitue les sections manquantes en plâtre à la chaux ou au plâtre fin, à partir d\'un gabarit réalisé sur les parties conservées. Technique du tiré à la règle pour les corniches droites, moulage pour les rosaces complexes. Résultat : identique à l\'existant, durable, valorisant.',
                cout: '40 – 80 €/ml corniche',
              },
              {
                titre: 'Création en plâtre (neuf)',
                solution: 'Pour un appartement sans moulures, l\'artisan choisit un profil adapté à la hauteur sous plafond et au style du logement. Exécution en plâtre traditionnel ou plâtre à projection. Le plâtre authentique donne un rendu que le polyuréthane ne peut pas égaler pour les profils complexes.',
                cout: '35 – 70 €/ml posé',
              },
              {
                titre: 'Moulures polyuréthane (PU)',
                solution: 'Éléments préfabriqués légers, collés directement sur le plafond et le mur à la colle ou au plâtre de fixation. Profils standards disponibles sur mesure. Convient aux budgets serrés et aux espaces sans contrainte patrimoniale. Finition peinture obligatoire pour un résultat soigné.',
                cout: '15 – 35 €/ml posé',
              },
              {
                titre: 'Rosace plâtre sur mesure',
                solution: 'Réalisée par moulage en atelier, la rosace est livrée en plusieurs secteurs et assemblée en place. Le stucateur réalise les reprises de joints et le ponçage fin avant application de la peinture. Les rosaces d\'origine très endommagées peuvent être refaites à partir d\'un relevé de plan ou d\'archives photographiques.',
                cout: '200 – 600 € posée',
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

      {/* Section 3 — Étapes de restauration */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Les étapes de la restauration de moulures par un artisan plâtrier
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Une restauration de moulures réussie suit un protocole rigoureux. L&apos;improvisation est l&apos;ennemie du plâtrier : chaque étape conditionne la suivante. Voici le déroulement type d&apos;un chantier de restauration dans un appartement parisien.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                type: '1. Diagnostic et relevé du profil',
                prix: 'Inclus dans le devis',
                detail: 'L\'artisan examine l\'état des moulures existantes : sections stables, parties décollées, zones pulvérulentes. Il réalise un relevé du profil en coupe pour créer le gabarit qui servira à reconstituer les parties manquantes à l\'identique.',
              },
              {
                type: '2. Dépose des parties instables',
                prix: 'Variable selon l\'étendue',
                detail: 'Les sections décollées, fissurées ou trop dégradées sont retirées délicatement. L\'accrochage au support est consolidé : la surface est poncée, dépoussiérée et traitée avec une couche d\'accrochage (bonite, colle à plâtre) si nécessaire.',
              },
              {
                type: '3. Reconstitution par tiré à la règle',
                prix: 'Inclus dans le forfait',
                detail: 'Pour les corniches droites, l\'artisan utilise un gabarit en métal ou en bois découpé au profil exact. Il applique le plâtre en plusieurs passes et tire le gabarit le long de la règle guide fixée sur le mur pour extruder le profil. Technique traditionnelle inchangée depuis le XIXe siècle.',
              },
              {
                type: '4. Finition et peinture',
                prix: '5 – 15 €/ml en sus',
                detail: 'Ponçage fin des reprises, enduit lissage aux jonctions, puis application de primaire pénétrant avant peinture. Les moulures en plâtre ne se peignent jamais sans primaire sous peine de cloquage. Deux couches de peinture glycéro satinée ou acrylique mat selon le rendu souhaité.',
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

      {/* Section 4 — Prix détaillés */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Prix des moulures à Paris en 2025 : tableau complet
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            Les tarifs ci-dessous s&apos;entendent main d&apos;œuvre et fournitures comprises, hors peinture sauf mention contraire.
          </p>

          {/* Price table as styled divs */}
          <div className="rounded-lg overflow-hidden border border-gray-200 mb-8">
            <div className="grid grid-cols-3 bg-[#1C1C1C] text-white px-4 py-3">
              <div className="text-xs font-light uppercase tracking-wider">Prestation</div>
              <div className="text-xs font-light uppercase tracking-wider text-center">Matériau</div>
              <div className="text-xs font-light uppercase tracking-wider text-center">Prix</div>
            </div>
            {[
              { prestation: 'Corniche simple (quart-de-rond)', materiau: 'Polyuréthane', prix: '15 – 25 €/ml' },
              { prestation: 'Corniche simple (quart-de-rond)', materiau: 'Plâtre traditionnel', prix: '35 – 50 €/ml' },
              { prestation: 'Corniche à profil haussmannien', materiau: 'Polyuréthane', prix: '25 – 40 €/ml' },
              { prestation: 'Corniche à profil haussmannien', materiau: 'Plâtre traditionnel', prix: '50 – 80 €/ml' },
              { prestation: 'Restauration corniche existante', materiau: 'Plâtre traditionnel', prix: '40 – 70 €/ml' },
              { prestation: 'Rosace de plafond (60–80 cm)', materiau: 'Polyuréthane', prix: '100 – 200 €' },
              { prestation: 'Rosace de plafond (60–80 cm)', materiau: 'Plâtre traditionnel', prix: '200 – 400 €' },
              { prestation: 'Rosace grand modèle (100 cm+)', materiau: 'Plâtre traditionnel', prix: '400 – 600 €' },
              { prestation: 'Frise décorative', materiau: 'Polyuréthane', prix: '18 – 35 €/ml' },
              { prestation: 'Bandeau / baguette', materiau: 'Plâtre ou PU', prix: '12 – 25 €/ml' },
            ].map((row, i) => (
              <div key={`${row.prestation}-${row.materiau}`} className={`grid grid-cols-3 px-4 py-3 border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}`}>
                <div className="text-sm text-[#1C1C1C] font-light">{row.prestation}</div>
                <div className="text-sm text-gray-600 font-light text-center">{row.materiau}</div>
                <div className="text-sm text-[#B8960C] font-medium text-center">{row.prix}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-[#1C1C1C] mb-4">
              Ce qui influence le prix d&apos;une restauration de moulures
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Complexité du profil : plus il y a de membres (gorge, talon, ove...), plus la fabrication du gabarit est longue',
                'État de l\'existant : une corniche décollée sur 60% de son linéaire coûte plus cher à consolider qu\'une moulure stable',
                'Hauteur sous plafond : au-delà de 3,50 m, échafaudage ou nacelle nécessaire',
                'Accès au chantier : appartement occupé, présence de mobilier, protection des parquets',
                'Contraintes patrimoniales : immeuble classé ou en secteur sauvegardé — plâtre obligatoire, polyuréthane interdit',
                'Reprise de peinture incluse ou non dans le devis de l\'artisan plâtrier',
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

      {/* Section 5 — Artisan plâtrier Paris */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">
            Choisir un artisan plâtrier à Paris pour ses moulures
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
            La restauration de moulures est un métier d&apos;art qui ne s&apos;improvise pas. À Paris, les appartements haussmanniens exigent des artisans formés aux techniques traditionnelles du plâtre. Quelques critères pour bien choisir son prestataire.
          </p>
          <div className="space-y-4">
            {[
              {
                enjeu: 'Vérifier la spécialisation plâtrerie décorative',
                detail: 'Tous les plâtriers ne maîtrisent pas le tiré à la règle ou le moulage de rosaces. Demandez à voir des références de chantiers similaires (restauration haussmannienne, moulures en plâtre fin) avant de signer.',
              },
              {
                enjeu: 'Exiger un devis avec métré détaillé',
                detail: 'Un devis sérieux distingue le linéaire de corniche, le nombre de rosaces, les reprises d\'enduit, la fourniture des matériaux et la main d\'œuvre. Méfiez-vous des devis globaux sans détail : ils sont difficiles à comparer.',
              },
              {
                enjeu: 'Demander si l\'artisan travaille en propre ou sous-traite',
                detail: 'Certaines entreprises de plâtrerie générales sous-traitent les travaux de moulures décoratives. Pour un chantier patrimonial, préférez un artisan qui intervient lui-même, garant de la continuité des finitions.',
              },
            ].map((el) => (
              <div key={el.enjeu} className="bg-[#FAFAF8] rounded-lg p-5 border border-gray-100">
                <div className="font-medium text-[#1C1C1C] text-sm mb-2">{el.enjeu}</div>
                <div className="text-gray-600 text-sm font-light leading-relaxed">{el.detail}</div>
              </div>
            ))}
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
              { href: '/platrerie-paris', title: 'Plâtrerie Paris' },
              { href: '/peinture-paris', title: 'Peinture Paris' },
              { href: '/blog/renovation-appartement-haussmannien-paris', title: 'Rénovation appartement haussmannien' },
              { href: '/blog/renovation-hall-immeuble-paris', title: 'Rénovation hall d\'immeuble Paris' },
              { href: '/blog/renovation-plafond-paris', title: 'Rénovation plafond Paris' },
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
              { href: '/renovation-paris-7e', label: 'Paris 7e' },
              { href: '/renovation-paris-8e', label: 'Paris 8e' },
              { href: '/renovation-paris-16e', label: 'Paris 16e' },
              { href: '/renovation-paris-17e', label: 'Paris 17e' },
              { href: '/renovation-neuilly-sur-seine', label: 'Neuilly-sur-Seine' },
              { href: '/renovation-levallois-perret', label: 'Levallois' },
              { href: '/renovation-courbevoie', label: 'Courbevoie' },
              { href: '/renovation-boulogne-billancourt', label: 'Boulogne-Billancourt' },
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
          Restaurez les moulures de votre appartement parisien
        </h2>
        <p className="text-[#1C1C1C]/70 text-sm font-light mb-8">
          Diagnostic gratuit. Devis détaillé sous 48h. Artisan plâtrier spécialisé en rénovation haussmannienne.
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
