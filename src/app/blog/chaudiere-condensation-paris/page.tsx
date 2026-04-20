import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Chaudière à condensation Paris', item: 'https://espacedesignparis.fr/blog/chaudiere-condensation-paris' },
  ],
}

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Chaudière à condensation Paris : remplacement, installation et entretien 2025",
  description: "Remplacement et installation de chaudière à condensation gaz à Paris. Prix, délais, entretien annuel obligatoire. Artisan qualifié RGE, devis gratuit sous 48h.",
  author: { '@type': 'Organization', name: 'Espace Design' },
  publisher: { '@type': 'Organization', name: 'Espace Design', url: 'https://espacedesignparis.fr' },
  datePublished: '2025-01-15',
  dateModified: '2025-06-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://espacedesignparis.fr/blog/chaudiere-condensation-paris' },
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'une chaudière à condensation posée à Paris ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le prix d\'une chaudière à condensation gaz posée à Paris varie entre 2 500 et 5 000 € tout compris (matériel + main-d\'oeuvre), selon la marque, la puissance et les travaux de raccordement nécessaires. Des aides comme MaPrimeRénov\' peuvent réduire ce coût.' },
    },
    {
      '@type': 'Question',
      name: 'L\'entretien annuel de la chaudière est-il obligatoire ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, l\'entretien annuel de la chaudière est obligatoire pour les appareils de moins de 400 kW. Il coûte entre 100 et 200 € par an. Il garantit la sécurité de l\'installation, optimise les performances et est souvent exigé par les assurances.' },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure l\'installation d\'une chaudière à condensation ?',
      acceptedAnswer: { '@type': 'Answer', text: 'L\'installation d\'une chaudière à condensation en remplacement d\'un ancien modèle prend généralement 1 à 2 jours. Ce délai peut s\'allonger si des modifications de tuyauterie ou de ventilation sont nécessaires.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Chaudière Condensation Paris — Remplacement & Installation | Espace Design',
  description: "Remplacement chaudière à condensation Paris : 2500-5000€ posée, entretien 100-200€/an, installation en 1-2j. Artisan RGE qualifié, devis gratuit sous 48h.",
}

export default function ChaudiereCondensationParis() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Blog Rénovation</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Chaudière à condensation Paris</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">Remplacement, installation et entretien de chaudière à condensation gaz à Paris. Tout ce que vous devez savoir pour choisir et faire poser votre nouvelle chaudière en 2025.</p>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none">
          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-4">Pourquoi remplacer sa chaudière par un modèle à condensation ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Les chaudières à condensation affichent un rendement supérieur à 100 % PCI (Pouvoir Calorifique Inférieur), contre 70-85 % pour les anciennes chaudières classiques. En récupérant la chaleur latente contenue dans les fumées, elles consomment jusqu'à 30 % d'énergie en moins. À Paris, où les logements sont souvent mal isolés et anciens, ce gain peut représenter plusieurs centaines d'euros d'économies annuelles sur la facture de gaz.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Depuis 2015, toute chaudière gaz installée en France doit être à condensation. Le remplacement d'une ancienne chaudière est également éligible à plusieurs aides financières : MaPrimeRénov', Certificats d'Économies d'Énergie (CEE) et éco-prêt à taux zéro. Notre équipe vous accompagne dans les démarches pour maximiser vos subventions.</p>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Nos prestations chaudière à Paris</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              'Diagnostic de l\'installation existante',
              'Conseil sur la puissance adaptée au logement',
              'Dépose de l\'ancienne chaudière',
              'Installation chaudière condensation gaz',
              'Raccordement gaz, eau et évacuation',
              'Entretien annuel et contrat de maintenance',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#B8960C] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{p}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">Tarifs Paris 2025</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1C1C1C] text-white"><th className="p-3 text-left">Prestation</th><th className="p-3 text-right">Prix indicatif</th></tr></thead>
              <tbody>
                {[
                  ['Chaudière gaz condensation posée', '2 500 – 5 000 €'],
                  ['Entretien annuel chaudière', '100 – 200 €/an'],
                  ['Délai d\'installation', '1 – 2 jours'],
                  ['Dépose ancienne chaudière', '150 – 350 €'],
                ].map(([label, price]) => (
                  <tr key={label} className="border-b border-gray-100"><td className="p-3 text-gray-600">{label}</td><td className="p-3 text-right font-medium">{price}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mt-8 mb-4">FAQ</h2>
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
