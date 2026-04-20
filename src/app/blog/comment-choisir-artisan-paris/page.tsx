import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Comment choisir son artisan à Paris', item: 'https://espacedesignparis.fr/blog/comment-choisir-artisan-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Comment choisir son artisan rénovation à Paris : garanties, labels et bons réflexes",
  description: "Guide complet pour bien choisir son artisan de rénovation à Paris : labels RGE, Qualibat, assurance décennale, devis comparatifs et conseils pratiques.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/comment-choisir-artisan-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Comment vérifier l\'assurance décennale d\'un artisan ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Demandez à l\'artisan la copie de son attestation d\'assurance décennale en cours de validité. Vérifiez que les travaux concernés sont bien couverts par la police (nature des travaux, activités assurées). Vous pouvez aussi contacter directement l\'assureur mentionné sur l\'attestation pour confirmer la validité du contrat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qu\'est-ce que le label Qualibat et pourquoi est-il important ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Qualibat est un organisme indépendant qui certifie les entreprises du bâtiment en France. Une qualification Qualibat garantit que l\'entreprise possède les compétences techniques, les moyens humains et financiers, et les références nécessaires pour réaliser les travaux concernés. C\'est un gage sérieux de professionnalisme, surtout à Paris où les offres sont très nombreuses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de devis faut-il demander avant de choisir un artisan ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Il est recommandé d\'obtenir au minimum 3 devis détaillés pour tout chantier supérieur à 3 000 €. Comparez non seulement les prix, mais aussi le détail des prestations, les délais d\'intervention, les garanties offertes et la clarté des documents. Un devis trop vague ou anormalement bas doit vous alerter.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Comment choisir son artisan rénovation à Paris — Labels et garanties | Espace Design',
  description: 'Guide complet pour bien choisir son artisan de rénovation à Paris : labels RGE, Qualibat, assurance décennale, devis comparatifs et conseils pratiques.',
}

export default function CommentChoisirArtisanParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Comment choisir son artisan à Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Labels, garanties, devis comparatifs : les bons réflexes pour trouver un artisan de confiance pour votre rénovation à Paris.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Les critères essentiels pour sélectionner un artisan sérieux</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            À Paris, l&apos;offre d&apos;artisans et d&apos;entreprises de rénovation est pléthorique. Identifier les professionnels fiables parmi les centaines de prestataires disponibles demande méthode et vigilance. Le premier réflexe doit être de vérifier la solidité juridique et assurantielle de l&apos;intervenant : numéro SIRET actif, assurance décennale valide couvrant les travaux concernés, et responsabilité civile professionnelle à jour.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Au-delà des garanties légales, les labels professionnels constituent un repère utile. Le label RGE (Reconnu Garant de l&apos;Environnement) est indispensable si vous souhaitez bénéficier d&apos;aides à la rénovation énergétique (MaPrimeRénov&apos;, CEE). Le label Qualibat atteste des compétences techniques et de la solidité financière de l&apos;entreprise. Ces certifications ne se décrètent pas : elles impliquent audits, formations et renouvellements réguliers. Un artisan labellisé prend son métier au sérieux.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Les points de vigilance avant de signer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Labels RGE et Qualibat : indicateurs fiables de sérieux professionnel',
              'Assurance décennale obligatoire : exiger l\'attestation à jour',
              'Demander au minimum 3 devis comparatifs détaillés',
              'Avis clients vérifiés sur Google, Houzz ou Pages Jaunes',
              'Bouche-à-oreille : références de chantiers réalisés dans le quartier',
              'Acompte limité à 30 % maximum avant démarrage des travaux',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Questions fréquentes</h2>
          <div className="space-y-4">
            {schemaFAQ.mainEntity.map((faq) => (
              <div key={faq.name} className="border border-gray-200 rounded p-4">
                <p className="font-semibold text-[#1C1C1C] mb-2">{faq.name}</p>
                <p className="text-sm text-gray-600">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#B8960C] text-[10px] font-light uppercase tracking-widest mb-4">Voir aussi</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/renovation-appartement-paris', label: 'Rénovation Paris' },
              { href: '/blog/prix-renovation-appartement-paris', label: 'Prix rénovation Paris' },
              { href: '/blog/devis-renovation-paris', label: 'Devis rénovation' },
              { href: '/blog', label: 'Tous les articles' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#D4AF37] hover:text-[#B8960C] transition-colors font-light">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1C1C1C] text-center px-4">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet à Paris</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Devis gratuit sous 48h — artisan qualifié, assurance décennale.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1C1C1C] px-8 py-4 rounded font-bold hover:bg-[#c9a030] transition-colors">Devis gratuit <ArrowRight size={16} /></Link>
          <a href="tel:+33611783867" className="flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"><Phone size={16} />06 11 78 38 67</a>
        </div>
      </section>
    </>
  )
}
