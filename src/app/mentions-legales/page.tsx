import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions Légales — Espace Design Paris',
  description: 'Mentions légales d\'Espace Design, artisan rénovateur à Paris. SIRET, responsabilité, cookies, données personnelles.',
  robots: { index: true, follow: false },
}

export default function MentionsLegalesPage() {
  return (
    <section className="pt-32 pb-20 bg-[#FAFAF8] px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl font-bold text-[#1C1C1C] mb-8">Mentions légales</h1>

        <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
          <div>
            <h2 className="font-semibold text-[#1C1C1C] mb-3">Éditeur du site</h2>
            <p><strong>Espace Design</strong><br />
            Entreprise individuelle — Artisan rénovateur<br />
            SIRET : 904 728 268 00015<br />
            Adresse : Paris, Île-de-France<br />
            Téléphone : <a href="tel:+33611783867" className="text-[#B8960C] hover:underline">06 11 78 38 67</a><br />
            Email : <a href="mailto:espacedesign92@gmail.com" className="text-[#B8960C] hover:underline">espacedesign92@gmail.com</a>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1C1C1C] mb-3">Directeur de la publication</h2>
            <p>Patrick Illouz</p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1C1C1C] mb-3">Hébergement</h2>
            <p>
              Ce site est hébergé par <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133, Covina, CA 91723, USA<br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#B8960C] hover:underline">vercel.com</a>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1C1C1C] mb-3">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo) est protégé par le droit d&apos;auteur.
              Toute reproduction, même partielle, est strictement interdite sans autorisation préalable écrite d&apos;Espace Design.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1C1C1C] mb-3">Responsabilité</h2>
            <p>
              Espace Design s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur ce site.
              Cependant, des erreurs ou omissions peuvent survenir. Espace Design décline toute responsabilité
              pour tout dommage résultant de l&apos;utilisation des informations publiées sur ce site.
              Les tarifs indiqués sont donnés à titre indicatif et peuvent varier selon la nature des travaux.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1C1C1C] mb-3">Données personnelles</h2>
            <p>
              Les informations collectées via le formulaire de contact sont utilisées uniquement pour
              traiter votre demande de devis. Elles ne sont pas cédées à des tiers.
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression
              de vos données en contactant : <a href="mailto:espacedesign92@gmail.com" className="text-[#B8960C] hover:underline">espacedesign92@gmail.com</a>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1C1C1C] mb-3">Cookies</h2>
            <p>
              Ce site n&apos;utilise pas de cookies de tracking ou publicitaires. Des cookies techniques
              strictement nécessaires au fonctionnement du site peuvent être utilisés.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <Link href="/" className="text-[#B8960C] text-xs hover:underline">← Retour à l&apos;accueil</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
