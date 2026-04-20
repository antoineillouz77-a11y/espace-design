import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://espacedesignparis.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://espacedesignparis.fr/blog' },
  ],
}

export const metadata: Metadata = {
  title: 'Blog Rénovation Paris — Conseils, Prix & Guides | Espace Design',
  description:
    'Guides et conseils pour rénover votre appartement à Paris : prix au m², types de travaux, choix des matériaux, choisir un artisan. Articles rédigés par Espace Design.',
}

const articles = [
  {
    href: '/blog/prix-renovation-appartement-paris',
    title: 'Prix d\'une rénovation d\'appartement à Paris en 2025',
    desc: 'Tarifs au m², exemples de budgets pour studio, 2 pièces, 3 pièces. Tous les facteurs qui font varier le coût.',
    tag: 'Prix & Budgets',
  },
  {
    href: '/blog/renovation-appartement-haussmannien-paris',
    title: 'Rénover un appartement haussmannien à Paris',
    desc: 'Parquet, moulures, cheminées, hauteur sous plafond… comment préserver le cachet tout en modernisant.',
    tag: 'Guides',
  },
  {
    href: '/blog/renovation-salle-de-bain-paris',
    title: 'Rénovation salle de bain à Paris : guide complet 2025',
    desc: 'Prix, matériaux, durée des travaux, erreurs à éviter. Tout pour rénover votre salle de bain à Paris.',
    tag: 'Salle de bain',
  },
  {
    href: '/blog/choisir-artisan-renovation-paris',
    title: 'Comment choisir un artisan rénovateur à Paris ?',
    desc: 'Les 8 critères clés pour ne pas se tromper : assurance, devis, références, garanties. Conseils d\'expert.',
    tag: 'Conseils',
  },
  {
    href: '/blog/renovation-cuisine-ouverte-paris',
    title: 'Créer une cuisine ouverte à Paris : tout savoir',
    desc: 'Abattre un mur porteur, aménager une cuisine ouverte, prix et réglementations à Paris.',
    tag: 'Cuisine',
  },
  {
    href: '/blog/renovation-parquet-paris',
    title: 'Parquet à Paris : pose, rénovation, vitrification',
    desc: 'Parquet massif, contrecollé, stratifié — lequel choisir ? Prix et conseils pour les appartements parisiens.',
    tag: 'Sols & Parquet',
  },
  {
    href: '/blog/isolation-acoustique-appartement-paris',
    title: 'Isolation acoustique d\'un appartement à Paris — guide 2025',
    desc: 'Bruits de voisins, de rue, d\'impact — solutions, prix et démarches pour isoler phoniquement votre appartement parisien.',
    tag: 'Isolation',
  },
  {
    href: '/blog/peinture-appartement-paris',
    title: 'Peinture appartement Paris : prix, délais et conseils 2025',
    desc: 'Tarifs au m², préparation des murs, choix des couleurs pour appartements parisiens. Guide complet par Espace Design.',
    tag: 'Peinture',
  },
  {
    href: '/blog/renovation-studio-paris',
    title: 'Rénovation studio Paris : prix, astuces & guide 2025',
    desc: 'Comment rénover un studio parisien de 15 à 35 m² — optimisation de l\'espace, budget réaliste, matériaux adaptés.',
    tag: 'Studios',
  },
  {
    href: '/blog/carrelage-appartement-paris',
    title: 'Carrelage appartement Paris : prix, pose & conseils 2025',
    desc: 'Prix au m², types de carreaux, salle de bain, cuisine — tout sur la pose de carrelage dans les appartements parisiens.',
    tag: 'Sols & Carrelage',
  },
  {
    href: '/blog/menuiserie-sur-mesure-paris',
    title: 'Menuiserie sur mesure Paris : prix, types & artisan 2025',
    desc: 'Placards, dressings, bibliothèques, portes coulissantes sur mesure à Paris. Prix au ml, matériaux et délais.',
    tag: 'Menuiserie',
  },
  {
    href: '/blog/decoration-interieure-paris',
    title: 'Décoration intérieure Paris : décorateur, prix & tendances 2025',
    desc: 'Styles tendance, tarifs d\'un décorateur parisien, conseils pour transformer votre appartement. Guide complet.',
    tag: 'Décoration',
  },
  {
    href: '/blog/renovation-appartement-ancien-paris',
    title: 'Rénovation appartement ancien Paris : guide & contraintes 2025',
    desc: 'Haussmannien, Art déco, immeuble d\'avant 1948 — contraintes, prix, amiante, mise aux normes. Guide expert.',
    tag: 'Appartement ancien',
  },
  {
    href: '/blog/isolation-thermique-appartement-paris',
    title: 'Isolation thermique appartement Paris : prix & aides 2025',
    desc: 'Combles, murs, fenêtres — solutions, prix au m², aides MaPrimeRénov\' et contraintes pour appartements parisiens.',
    tag: 'Isolation thermique',
  },
  {
    href: '/blog/renovation-2-pieces-paris',
    title: 'Rénovation 2 pièces Paris : prix, délais & guide 2025',
    desc: 'Budget par scénario, détail des postes de travaux et exemple concret de rénovation complète d\'un 2 pièces à Paris.',
    tag: 'Prix & Budgets',
  },
  {
    href: '/blog/renovation-3-pieces-paris',
    title: 'Rénovation 3 pièces Paris : prix, budget & guide 2025',
    desc: 'De 60 000 à 120 000 € selon les finitions — guide complet avec tableau de postes et exemple clé en main.',
    tag: 'Prix & Budgets',
  },
  {
    href: '/blog/renovation-4-pieces-paris',
    title: 'Rénovation 4 pièces Paris : prix, budget & guide 2025',
    desc: 'Budget de 80 000 à 160 000 € selon les finitions — guide complet pour rénover un 4 pièces à Paris.',
    tag: 'Prix & Budgets',
  },
  {
    href: '/blog/electricite-appartement-paris',
    title: 'Électricité appartement Paris : prix, mise aux normes & guide 2025',
    desc: 'Remise aux normes NF C 15-100, tableau électrique, prix au m² — tout pour la rénovation électrique dans les appartements parisiens.',
    tag: 'Électricité',
  },
  {
    href: '/blog/renovation-avant-achat-appartement-paris',
    title: 'Rénovation avant achat appartement Paris : guide & budget 2025',
    desc: 'Estimer les travaux avant d\'acheter, négocier le prix, éviter les pièges — guide complet pour l\'achat-rénovation à Paris.',
    tag: 'Guides',
  },
  {
    href: '/blog/investissement-locatif-renovation-paris',
    title: 'Investissement locatif & rénovation Paris : guide 2025',
    desc: 'Rénover pour louer à Paris — rentabilité, travaux prioritaires, DPE, fiscalité. Guide complet pour les investisseurs.',
    tag: 'Investissement',
  },
  {
    href: '/blog/renovation-maison-paris',
    title: 'Rénovation Maison Paris & Île-de-France : prix & guide 2025',
    desc: 'Rénover une maison en Île-de-France : prix au m², types de travaux, spécificités vs appartement. Guide complet Espace Design.',
    tag: 'Guides',
  },
  {
    href: '/blog/budget-renovation-paris-2025',
    title: 'Budget Rénovation Paris 2025 : estimez votre projet au m²',
    desc: "Comment établir un budget rénovation à Paris en 2025 ? Coûts par poste, marges d'erreur, aides disponibles. Guide pratique.",
    tag: 'Prix & Budgets',
  },
  {
    href: '/blog/verriere-interieure-paris',
    title: 'Verrière Intérieure Paris : prix, styles acier & pose 2025',
    desc: "Verrière intérieure (cloison vitrée style atelier) à Paris — prix, dimensions, acier noir, pose et réglementation. Guide complet.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/parquet-massif-paris',
    title: 'Parquet Massif Paris : prix, essences, pose & entretien 2025',
    desc: "Parquet massif à Paris — chêne, noyer, hêtre. Prix au m², pose, vitrification, rénovation des parquets anciens. Guide complet.",
    tag: 'Sols & Parquet',
  },
  {
    href: '/blog/home-staging-paris',
    title: 'Home Staging Paris : valoriser son bien avant vente 2025',
    desc: "Home staging à Paris : travaux de valorisation avant vente. Peinture, sol, cuisines, salles de bain — augmentez votre prix de vente.",
    tag: 'Conseils',
  },
  {
    href: '/blog/peinture-decorative-paris',
    title: 'Peinture Décorative Paris : enduit, béton ciré, tadelakt 2025',
    desc: "Peinture décorative à Paris : enduit à la chaux, béton ciré, tadelakt, badigeon. Prix, applications, artisans. Guide complet.",
    tag: 'Peinture',
  },
  {
    href: '/blog/devis-renovation-paris',
    title: 'Devis Rénovation Paris : obtenir et comparer 3 devis 2025',
    desc: "Comment obtenir un bon devis de rénovation à Paris ? Que comparer, les pièges à éviter, les garanties à demander. Guide pratique.",
    tag: 'Conseils',
  },
  {
    href: '/blog/renovation-fenetre-paris',
    title: 'Rénovation Fenêtres Paris : double vitrage, PVC, aluminium 2025',
    desc: "Changer ses fenêtres à Paris : double vitrage, PVC, aluminium, bois. Prix, aides MaPrimeRénov', démarches copropriété. Guide complet.",
    tag: 'Rénovation',
  },
  {
    href: '/blog/renovation-escalier-paris',
    title: 'Rénovation Escalier Paris : prix, bois, carrelage & garde-corps 2025',
    desc: 'Rénover un escalier à Paris : peinture, remplacement marches, garde-corps design. Prix selon matériaux. Guide complet et artisans 2025.',
    tag: 'Menuiserie',
  },
  {
    href: '/blog/domotique-appartement-paris',
    title: 'Domotique Appartement Paris : prix, installation & marques 2025',
    desc: "Domotique dans un appartement parisien : volets automatiques, éclairage connecté, thermostat, interphone vidéo. Prix et installation. Guide 2025.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/renovation-loft-paris',
    title: 'Rénovation Loft Paris : prix, aménagement industriel & guide 2025',
    desc: "Rénover un loft à Paris : style industriel, béton ciré, verrière, mezzanine. Prix au m², artisans spécialisés. Guide complet 2025.",
    tag: 'Guides',
  },
  {
    href: '/blog/plomberie-appartement-paris',
    title: 'Plomberie Appartement Paris : prix, réfection & urgence 2025',
    desc: "Rénovation plomberie Paris : remplacement colonnes, salle de bain, prix au m², délais. Plombier agréé Paris et Île-de-France. Guide complet 2025.",
    tag: 'Plomberie',
  },
  {
    href: '/blog/amenagement-studio-paris',
    title: 'Aménagement Studio Paris : optimiser l\'espace & décoration 2025',
    desc: "Aménager un studio parisien de 15 à 35 m² : lit escamotable, cloisons coulissantes, mobilier sur-mesure, rangements. Idées et prix 2025.",
    tag: 'Studios',
  },
  {
    href: '/blog/chauffage-appartement-paris',
    title: 'Chauffage Appartement Paris : remplacement, prix & aides 2025',
    desc: "Changer son chauffage à Paris : radiateurs à inertie, plancher chauffant, pompe à chaleur. Prix, aides MaPrimeRénov', copropriété. Guide 2025.",
    tag: 'Rénovation',
  },
  {
    href: '/blog/renovation-cave-paris',
    title: 'Rénovation Cave Paris : aménagement, humidité & prix 2025',
    desc: "Rénover sa cave à Paris : traitement humidité, isolation, aménagement bureau ou chambre. Prix, réglementation copropriété. Guide complet 2025.",
    tag: 'Guides',
  },
  {
    href: '/blog/renovation-appartement-marais-paris',
    title: 'Rénovation Appartement Marais Paris : guide & artisans 2025',
    desc: "Rénover un appartement dans le Marais (Paris 3e-4e) : contraintes Bâtiments de France, prix, artisans spécialisés. Guide complet 2025.",
    tag: 'Guides',
  },
  {
    href: '/blog/renovation-appartement-saint-germain-paris',
    title: 'Rénovation Appartement Saint-Germain-des-Prés Paris : guide 2025',
    desc: "Rénover un appartement à Saint-Germain-des-Prés (Paris 6e) : prix, contraintes, artisans. Haussmannien, immeubles anciens, finitions premium.",
    tag: 'Guides',
  },
  {
    href: '/blog/renovation-appartement-montmartre-paris',
    title: 'Rénovation Appartement Montmartre Paris 18e : guide & prix 2025',
    desc: "Rénover un appartement à Montmartre (Paris 18e) : maisons de village, appartements anciens, prix, artisans. Guide complet 2025.",
    tag: 'Guides',
  },
  {
    href: '/blog/renovation-appartement-bastille-paris',
    title: 'Rénovation Appartement Bastille Paris 11e-12e : prix & guide 2025',
    desc: "Rénover un appartement autour de la Bastille (Paris 11e-12e) : prix, artisans, appartements anciens et lofts. Guide complet 2025.",
    tag: 'Guides',
  },
  {
    href: '/blog/renovation-duplex-paris',
    title: 'Rénovation Duplex Paris : prix, aménagement & guide 2025',
    desc: "Rénover un duplex parisien : mezzanine, escalier, décloisonnement, hauteur sous plafond. Prix et guide complet 2025.",
    tag: 'Guides',
  },
  {
    href: '/blog/parquet-chene-paris',
    title: 'Parquet Chêne Paris : massif, contrecollé & prix 2025',
    desc: "Parquet en chêne à Paris : massif vs contrecollé, essence, finitions, prix au m², artisans. Guide complet 2025.",
    tag: 'Sols & Parquet',
  },
  {
    href: '/blog/renovation-terrasse-paris',
    title: 'Rénovation Terrasse Paris : lames, carrelage & prix 2025',
    desc: "Rénover sa terrasse à Paris : lames composite, carrelage sur plots, bois exotique. Prix au m², copropriété. Guide complet 2025.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/renovation-balcon-paris',
    title: 'Rénovation Balcon Paris : carrelage, étanchéité & prix 2025',
    desc: "Rénover son balcon à Paris : carrelage sur plots, lames composite, étanchéité, garde-corps. Prix au m² et guide complet 2025.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/isolation-phonique-paris',
    title: 'Isolation Phonique Paris : solutions, prix & artisans 2025',
    desc: "Isolation phonique appartement Paris : contre-cloisons, sols flottants, plafonds, fenêtres. Prix au m², solutions efficaces. Guide 2025.",
    tag: 'Isolation',
  },
  {
    href: '/blog/renovation-chambre-paris',
    title: 'Rénovation Chambre Paris : aménagement, rangements & prix 2025',
    desc: "Rénover une chambre à Paris : parquet, peinture, placards sur mesure, isolation phonique. Prix au m² et guide complet 2025.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/sol-beton-cire-paris',
    title: 'Sol Béton Ciré Paris : prix, pose & finitions 2025',
    desc: "Béton ciré à Paris : cuisine, salle de bain, séjour. Prix au m², application, entretien, comparatif avec carrelage. Guide complet 2025.",
    tag: 'Sols & Parquet',
  },
  {
    href: '/blog/renovation-salle-de-jeux-paris',
    title: 'Aménagement Salle de Jeux Paris : idées & prix 2025',
    desc: "Créer ou rénover une salle de jeux pour enfants à Paris : sol souple, rangements, peinture. Prix et idées déco 2025.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/renovation-wc-paris',
    title: 'Rénovation WC Paris : carrelage, WC suspendu & prix 2025',
    desc: "Rénover ses WC à Paris : carrelage, faïence, WC suspendu, lave-mains. Prix, délais, artisans. Guide complet 2025.",
    tag: 'Plomberie',
  },
  {
    href: '/blog/douche-italienne-paris',
    title: 'Douche Italienne Paris : prix, carrelage & installation 2025',
    desc: "Créer une douche italienne à Paris : receveur extra-plat, carrelage, paroi, prix. Guide complet et artisans spécialisés 2025.",
    tag: 'Salle de bain',
  },
  {
    href: '/blog/renovation-bureau-paris',
    title: 'Rénovation Bureau Paris : aménagement home office & prix 2025',
    desc: "Créer ou rénover un bureau à Paris : isolation phonique, éclairage, rangements, sol. Prix et guide complet 2025.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/renovation-entree-paris',
    title: "Rénovation Entrée Paris : hall d'appartement & prix 2025",
    desc: "Rénover l'entrée de son appartement parisien : sol, miroir, rangements, éclairage. Prix et idées déco 2025.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/peinture-cuisine-paris',
    title: 'Peinture Cuisine Paris : couleurs, lessivables & prix 2025',
    desc: 'Choisir la bonne peinture pour sa cuisine parisienne : peinture lessivable, émulsion, faïence. Couleurs tendance, prix. Guide 2025.',
    tag: 'Peinture',
  },
  {
    href: '/blog/peinture-enduit-paris',
    title: 'Enduit Peinture Paris : préparation murs & finitions 2025',
    desc: 'Enduits de finition à Paris : enduit de lissage, enduit à la chaux, ragréage. Prix, techniques, artisans. Guide complet 2025.',
    tag: 'Peinture',
  },
  {
    href: '/blog/renovation-combles-paris',
    title: 'Rénovation Combles Paris : aménagement, isolation & prix 2025',
    desc: 'Aménager les combles à Paris : isolation, Velux, hauteur sous plafond, prix. Guide pour appartements en dernier étage 2025.',
    tag: 'Isolation',
  },
  {
    href: '/blog/diagnostic-amiante-paris',
    title: 'Diagnostic Amiante Paris : avant rénovation, prix & obligations 2025',
    desc: 'Amiante dans un appartement parisien : diagnostic obligatoire, matériaux concernés, coût du désamiantage. Guide complet avant travaux 2025.',
    tag: 'Réglementation',
  },
  {
    href: '/blog/moulures-paris',
    title: 'Restauration Moulures Paris : corniche, rosace & prix 2025',
    desc: 'Restaurer ou poser des moulures dans un appartement parisien : corniche au plafond, rosace, parquet moulure. Prix artisan plâtrier 2025.',
    tag: 'Plâtrerie',
  },
  {
    href: '/blog/renovation-cage-escalier-paris',
    title: "Rénovation Cage d'Escalier Paris : peinture, carrelage & prix 2025",
    desc: "Rénover la cage d'escalier d'un immeuble parisien : peinture, sol, éclairage, autorisations copropriété. Prix et guide artisan 2025.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/renovation-parquet-abime-paris',
    title: 'Rénover un Parquet Abîmé Paris : ponçage, vitrification & prix 2025',
    desc: 'Parquet rayé, gondolé ou abîmé à Paris : ponçage, bouche-pores, vitrification, huilage. Prix au m² et guide artisan 2025.',
    tag: 'Parquet',
  },
  {
    href: '/blog/robinetterie-salle-de-bain-paris',
    title: 'Robinetterie Salle de Bain Paris : choix, pose & prix 2025',
    desc: 'Choisir et poser sa robinetterie de salle de bain à Paris : mitigeur, thermostat, douche, baignoire. Prix, marques, artisan plombier 2025.',
    tag: 'Salle de bain',
  },
  {
    href: '/blog/carrelage-grand-format-paris',
    title: 'Carrelage Grand Format Paris : pose 60x60 120x60 & prix 2025',
    desc: 'Poser du carrelage grand format à Paris (60×60, 120×60) : préparation chape, adhésif, joints minces. Prix au m² et artisan carreleur 2025.',
    tag: 'Carrelage',
  },
  {
    href: '/blog/renovation-cave-parking-paris',
    title: 'Rénovation Cave & Parking Paris : humidité, peinture & prix 2025',
    desc: 'Rénover sa cave ou parking à Paris : traitement humidité, peinture sols, rangements. Prix et guide complet 2025.',
    tag: 'Aménagement',
  },
  {
    href: '/blog/renovation-sous-sol-paris',
    title: 'Rénovation Sous-Sol Paris : aménagement, humidité & prix 2025',
    desc: 'Aménager un sous-sol à Paris : traitement humidité, isolation, éclairage, cloisons. Prix et guide artisan 2025.',
    tag: 'Aménagement',
  },
  {
    href: '/blog/renovation-fenetre-paris',
    title: 'Rénovation Fenêtres Paris : double vitrage, PVC alu & prix 2025',
    desc: 'Changer ses fenêtres à Paris : double vitrage, PVC, aluminium, bois. Autorisations ABF, prix et artisan 2025.',
    tag: 'Menuiserie',
  },
  {
    href: '/blog/faux-plafond-paris',
    title: 'Faux Plafond Paris : placo, dalles & prix 2025',
    desc: 'Poser un faux plafond à Paris : placo BA13, dalles minérales, tendu. Cacher les gaines, isolation phonique. Prix au m² et artisans 2025.',
    tag: 'Plâtrerie',
  },
  {
    href: '/blog/renovation-hall-immeuble-paris',
    title: "Rénovation Hall d'Immeuble Paris : syndic, vote & prix 2025",
    desc: "Rénover le hall d'un immeuble à Paris : procédure vote en AG, travaux parties communes, choix artisan syndic. Prix et guide 2025.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/creation-verriere-interieure-paris',
    title: 'Création Verrière Intérieure Paris : prix, démarches & artisan 2025',
    desc: "Installer une verrière intérieure à Paris : cloison vitrée atelier, verrière d'angle, autorisation copropriété. Prix et guide 2025.",
    tag: 'Menuiserie',
  },
  {
    href: '/blog/renovation-cuisine-ouverte-paris',
    title: 'Cuisine Ouverte Paris : séparation, îlot & prix 2025',
    desc: 'Ouvrir sa cuisine sur le salon à Paris : abattre mur porteur, verrière, îlot central, hotte décorative. Autorisations et prix 2025.',
    tag: 'Cuisine',
  },
  {
    href: '/blog/peinture-plafond-paris',
    title: 'Peinture Plafond Paris : blanc mat, rosace & prix 2025',
    desc: 'Peindre son plafond à Paris : préparation, peinture blanc mat, plafond tendu, rosace décorative. Prix au m² et artisan peintre 2025.',
    tag: 'Peinture',
  },
  {
    href: '/blog/renovation-parquet-contrecolle-paris',
    title: 'Parquet Contrecollé Paris : pose, prix & avantages 2025',
    desc: 'Choisir et poser du parquet contrecollé à Paris : avantages vs massif, pose flottante vs collée, essences. Prix au m² et artisan 2025.',
    tag: 'Parquet',
  },
  {
    href: '/blog/amenagement-combles-perdus-paris',
    title: 'Aménagement Combles Perdus Paris : isolation, plancher & prix 2025',
    desc: 'Aménager ses combles perdus à Paris : isolation soufflée ou rampant, trappe, plancher. Éligibilité MaPrimeRénov. Prix 2025.',
    tag: 'Isolation',
  },
  {
    href: '/blog/nettoyage-apres-travaux-paris',
    title: 'Nettoyage Après Travaux Paris : tarifs, entreprises & astuces 2025',
    desc: 'Faire nettoyer son appartement après rénovation à Paris : poussière plâtre, résidus peinture, vitres. Tarifs et conseils artisan 2025.',
    tag: 'Aménagement',
  },
  {
    href: '/blog/renovation-salle-de-bain-petite-surface-paris',
    title: 'Petite Salle de Bain Paris : rénovation 3m² 4m² & prix 2025',
    desc: 'Rénover une petite salle de bain à Paris (3 à 5 m²) : douche italienne, WC suspendu, rangements. Optimisation espace et prix 2025.',
    tag: 'Salle de bain',
  },
  {
    href: '/blog/domotique-renovation-paris',
    title: 'Domotique Rénovation Paris : store, éclairage & thermostat connecté 2025',
    desc: "Intégrer la domotique lors d'une rénovation à Paris : store motorisé, éclairage LED connecté, thermostat, volets. Prix et guide 2025.",
    tag: 'Électricité',
  },
  {
    href: '/blog/renovation-balcon-terrasse-immeuble-paris',
    title: 'Rénovation Balcon Copropriété Paris : travaux, autorisations & prix 2025',
    desc: "Rénover son balcon en copropriété à Paris : parties communes vs privatives, autorisations AG, carrelage, étanchéité. Prix 2025.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/pose-parquet-sur-carrelage-paris',
    title: 'Poser Parquet sur Carrelage Paris : méthode & prix 2025',
    desc: 'Peut-on poser un parquet sur carrelage à Paris ? Méthode flottante, différence de hauteur, seuils. Prix et conseils artisan 2025.',
    tag: 'Parquet',
  },
  {
    href: '/blog/isolation-combles-subvention-paris',
    title: 'Isolation Combles Paris : subventions MaPrimeRénov & prix 2025',
    desc: 'Isoler ses combles à Paris avec MaPrimeRénov : montant des aides, travaux éligibles, artisan RGE. Guide et prix 2025.',
    tag: 'Isolation',
  },
  {
    href: '/blog/peinture-beton-cire-paris',
    title: 'Peinture Béton Ciré Paris : application, entretien & prix 2025',
    desc: 'Appliquer du béton ciré à Paris : préparation support, couches, lasure de protection. Cuisine, salle de bain, salon. Prix artisan 2025.',
    tag: 'Peinture',
  },
  {
    href: '/blog/renovation-appartement-copropriete-paris',
    title: 'Rénovation Appartement en Copropriété Paris : règles & démarches 2025',
    desc: 'Rénover en copropriété à Paris : travaux autorisés sans AG, vote obligatoire, déclaration en mairie. Guide complet 2025.',
    tag: 'Réglementation',
  },
  {
    href: '/blog/renovation-cuisine-studio-paris',
    title: 'Cuisine Studio Paris : aménager une kitchenette 2025',
    desc: 'Créer ou rénover une cuisine dans un studio parisien : kitchenette encastrée, rangements optimisés, électroménager compact. Prix 2025.',
    tag: 'Cuisine',
  },
  {
    href: '/blog/renovation-immeuble-ancien-paris',
    title: 'Rénovation Immeuble Ancien Paris : contraintes, ABF & prix 2025',
    desc: 'Rénover un appartement dans un immeuble ancien à Paris : contraintes ABF, planchers en bois, murs porteurs, isolation. Prix et guide 2025.',
    tag: 'Rénovation',
  },
  {
    href: '/blog/ravalement-facade-paris',
    title: 'Ravalement Façade Paris : obligation, autorisations ABF & prix 2025',
    desc: 'Ravalement de façade à Paris : obligation décennale, autorisations ABF, enduits, peintures. Prix et guide artisan 2025.',
    tag: 'Réglementation',
  },
  {
    href: '/blog/ravalement-facade-copropriete-paris',
    title: 'Ravalement Façade Copropriété Paris : vote AG & prestataire 2025',
    desc: 'Organiser un ravalement de façade en copropriété à Paris : majorité requise, consultation entreprises, financement. Guide syndic 2025.',
    tag: 'Copropriété',
  },
  {
    href: '/blog/renovation-appartement-mise-en-location-paris',
    title: 'Rénovation Avant Location Paris : travaux, budget & rentabilité 2025',
    desc: 'Rénover un appartement avant de le louer à Paris : travaux prioritaires, budget optimal, rendement locatif. Guide investisseur 2025.',
    tag: 'Investissement',
  },
  {
    href: '/blog/carrelage-salle-de-bain-paris',
    title: 'Carrelage Salle de Bain Paris : pose, choix & prix 2025',
    desc: 'Poser du carrelage en salle de bain à Paris : format, joint époxy, pose sur ancien carrelage, prix artisan. Guide 2025.',
    tag: 'Carrelage',
  },
  {
    href: '/blog/devis-renovation-en-ligne-paris',
    title: 'Devis Rénovation Paris : comment obtenir un bon devis en 2025',
    desc: 'Obtenir un devis de rénovation à Paris : comment comparer artisans, questions à poser, pièges à éviter. Guide pratique 2025.',
    tag: 'Conseils',
  },
  {
    href: '/blog/renovation-avant-vente-paris',
    title: 'Rénovation Avant Vente Paris : valoriser son appartement 2025',
    desc: 'Rénover avant de vendre à Paris : quels travaux pour valoriser, budget, retour sur investissement. Conseils artisan 2025.',
    tag: 'Investissement',
  },
  {
    href: '/blog/travaux-electricite-appartement-paris',
    title: 'Travaux Électricité Appartement Paris : mise aux normes & prix 2025',
    desc: "Mettre aux normes l'électricité d'un appartement à Paris : tableau, prises, éclairage. Prix et artisan RGE. Devis gratuit 48h.",
    tag: 'Électricité',
  },
  {
    href: '/blog/plomberie-renovation-paris',
    title: 'Plomberie Rénovation Paris : remplacement tuyaux, chasse & prix 2025',
    desc: "Rénover la plomberie d'un appartement à Paris : tuyaux plomb, chasse d'eau, siphon, robinetterie. Prix artisan plombier 2025.",
    tag: 'Plomberie',
  },
  {
    href: '/blog/renovation-4-pieces-paris',
    title: 'Rénovation 4 Pièces Paris : budget, planning & conseils 2025',
    desc: "Budget rénovation 4 pièces à Paris : de 80 000 à 160 000 € selon les finitions. Tableau des postes, exemple clé en main, délais.",
    tag: 'Prix & Budgets',
  },
  {
    href: '/blog/creation-cloison-separation-paris',
    title: 'Créer une Cloison de Séparation Paris : pose, isolation & prix 2025',
    desc: 'Créer une cloison pour séparer deux espaces à Paris : cloison placo, vitrage, coulissante. Prix et démarches artisan 2025.',
    tag: 'Plâtrerie',
  },
  {
    href: '/blog/parquet-flottant-vs-colle-paris',
    title: 'Parquet Flottant vs Collé Paris : quel choix pour votre appartement 2025',
    desc: 'Parquet flottant ou collé à Paris ? Avantages, inconvénients, isolation acoustique, prix. Guide complet artisan 2025.',
    tag: 'Parquet',
  },
  {
    href: '/blog/renovation-salle-de-bain-prix-paris',
    title: 'Prix Rénovation Salle de Bain Paris : budget détaillé 2025',
    desc: 'Budget pour rénover une salle de bain à Paris : carrelage, douche, vasque, plomberie. Prix détaillés par poste artisan 2025.',
    tag: 'Prix & Budgets',
  },
  {
    href: '/blog/renovation-couloir-paris',
    title: 'Rénovation Couloir Paris : astuces pour un espace petit & sombre 2025',
    desc: 'Rénover un couloir parisien étroit et sombre : peinture claire, miroirs, éclairage, rangements intégrés. Prix et idées 2025.',
    tag: 'Aménagement',
  },
  {
    href: '/blog/renovation-appartement-loue-paris',
    title: 'Rénovation Appartement Loué Paris : droits locataire & bailleur 2025',
    desc: 'Qui peut rénover un appartement loué à Paris ? Droits du bailleur, du locataire, travaux imposables. Guide juridique 2025.',
    tag: 'Réglementation',
  },
  {
    href: '/blog/renovation-appartement-investissement-paris',
    title: 'Rénovation Investissement Locatif Paris : ROI & travaux prioritaires 2025',
    desc: 'Rénover un investissement locatif à Paris : quels travaux maximisent le loyer, budget, rendement. Guide investisseur 2025.',
    tag: 'Investissement',
  },
  {
    href: '/blog/renovation-appartement-neuf-paris',
    title: 'Rénovation Appartement Neuf Paris : personnalisation & aménagement 2025',
    desc: 'Personnaliser un appartement neuf à Paris avant emménagement : peinture, parquet, placards. Prix et conseils artisan 2025.',
    tag: 'Aménagement',
  },
  {
    href: '/blog/renovation-urgence-paris',
    title: 'Rénovation Urgence Paris : dégât des eaux, fissure & intervention rapide 2025',
    desc: "Urgences rénovation à Paris : dégât des eaux, fissure apparente, chute de plâtre. Qui appeler, que faire, assurance. Guide 2025.",
    tag: 'Conseils',
  },
  {
    href: '/blog/sol-stratifie-paris',
    title: 'Sol Stratifié Paris : pose, entretien & prix 2025',
    desc: 'Tout savoir sur le sol stratifié à Paris : types, prix au m², pose, avantages vs parquet. Guide artisan 2025.',
    tag: 'Parquet',
  },
  {
    href: '/blog/renovation-appartement-paris-5e',
    title: 'Rénovation Appartement Paris 5e : artisan & prix 2025',
    desc: "Rénovation appartement dans le 5e arrondissement de Paris : Quartier Latin, Mouffetard, Sorbonne. Artisan local, devis gratuit 48h.",
    tag: 'Paris',
  },
  {
    href: '/blog/renovation-appartement-paris-13e',
    title: 'Rénovation Appartement Paris 13e : artisan & prix 2025',
    desc: "Rénovation appartement dans le 13e arrondissement de Paris : Butte-aux-Cailles, Gobelins, Chinatown. Artisan local, devis gratuit 48h.",
    tag: 'Paris',
  },
  {
    href: '/blog/renovation-appartement-paris-9e',
    title: 'Rénovation Appartement Paris 9e : artisan & prix 2025',
    desc: "Rénovation appartement dans le 9e arrondissement de Paris : Pigalle, Opéra, SoPi. Artisan local, devis gratuit 48h.",
    tag: 'Paris',
  },
  {
    href: '/blog/renovation-appartement-paris-15e',
    title: 'Rénovation Appartement Paris 15e : artisan & prix 2025',
    desc: "Rénovation appartement dans le 15e arrondissement de Paris : Beaugrenelle, Convention, Vaugirard. Artisan local, devis gratuit 48h.",
    tag: 'Paris',
  },
  {
    href: '/blog/renovation-appartement-paris-17e',
    title: 'Rénovation Appartement Paris 17e : artisan & prix 2025',
    desc: "Rénovation appartement dans le 17e arrondissement de Paris : Batignolles, Ternes, Épinettes. Artisan local, devis gratuit 48h.",
    tag: 'Paris',
  },
  {
    href: '/blog/renovation-appartement-paris-19e',
    title: 'Rénovation Appartement Paris 19e : artisan & prix 2025',
    desc: "Rénovation appartement dans le 19e arrondissement de Paris : Buttes-Chaumont, Belleville, Villette. Artisan local, devis gratuit 48h.",
    tag: 'Paris',
  },
  {
    href: '/blog/renovation-appartement-paris-20e',
    title: 'Rénovation Appartement Paris 20e : artisan & prix 2025',
    desc: "Rénovation appartement dans le 20e arrondissement de Paris : Père-Lachaise, Belleville, Ménilmontant. Artisan local, devis gratuit 48h.",
    tag: 'Paris',
  },
  {
    href: '/blog/renovation-appartement-paris-1er',
    title: 'Rénovation Appartement Paris 1er : artisan & prix 2025',
    desc: "Rénovation appartement dans le 1er arrondissement de Paris : Louvre, Châtelet, Les Halles. Artisan local, devis gratuit 48h.",
    tag: 'Paris',
  },
  {
    href: '/blog/renovation-maison-ancienne-paris',
    title: 'Rénovation Maison Ancienne Paris : meulière, pierres & contraintes 2025',
    desc: "Rénover une maison ancienne à Paris : contraintes ABF, pierres de taille, poutres apparentes, amiante. Guide artisan 2025.",
    tag: 'Guides',
  },
  {
    href: '/blog/renovation-appartement-paris-2e',
    title: 'Rénovation Appartement Paris 2e : artisan & prix 2025',
    desc: "Rénovation appartement dans le 2e arrondissement de Paris : Bourse, Sentier, Montorgueil. Artisan local, devis gratuit 48h.",
    tag: 'Paris',
  },
  {
    href: '/blog/choisir-carrelage-salle-de-bain',
    title: 'Choisir son Carrelage Salle de Bain : format, matière & prix 2025',
    desc: "Comment choisir le carrelage pour sa salle de bain : 60x60, grès cérame, zellige. Anti-dérapant, joints époxy. Guide et prix 2025.",
    tag: 'Carrelage',
  },
  {
    href: '/blog/renovation-parquet-massif-paris',
    title: 'Parquet Massif Paris : pose, ponçage & prix artisan 2025',
    desc: "Poser ou rénover un parquet massif à Paris : chêne, frêne, exotique. Pose clouée, collée ou flottante. Artisan parqueteur, devis 48h.",
    tag: 'Parquet',
  },
  {
    href: '/blog/renovation-cuisine-americaine-paris',
    title: 'Cuisine Américaine Paris : ouverte, semi-ouverte & prix 2025',
    desc: "Aménager une cuisine américaine à Paris : mur porteur, IPN, hotte sans gaine. Copropriété, budget et artisan 2025.",
    tag: 'Cuisine',
  },
  {
    href: '/blog/renovation-appartement-paris-4e',
    title: 'Rénovation Appartement Paris 4e : artisan & prix 2025',
    desc: "Rénovation appartement dans le 4e arrondissement de Paris : Marais, Île Saint-Louis, Beaubourg. ABF, parquet, moulures. Devis 48h.",
    tag: 'Paris',
  },
  {
    href: '/blog/renovation-appartement-paris-11e',
    title: 'Rénovation Appartement Paris 11e : artisan & prix 2025',
    desc: "Rénovation appartement dans le 11e arrondissement de Paris : Bastille, Oberkampf, Nation. Artisan local, devis 48h.",
    tag: 'Paris',
  },
  {
    href: '/blog/renovation-appartement-paris-3e',
    title: 'Rénovation Appartement Paris 3e : artisan & prix 2025',
    desc: "Rénovation appartement dans le 3e arrondissement de Paris : Marais nord, Arts-et-Métiers, Temple. ABF, parquet, plafonds. Devis 48h.",
    tag: 'Paris',
  },
  {
    href: '/blog/renovation-appartement-paris-14e',
    title: 'Rénovation Appartement Paris 14e : artisan & prix 2025',
    desc: "Rénovation appartement dans le 14e arrondissement de Paris : Montparnasse, Alésia, Plaisance. Artisan, devis 48h.",
    tag: 'Paris',
  },
  {
    href: '/blog/renovation-appartement-paris-6e',
    title: 'Rénovation Appartement Paris 6e : artisan & prix 2025',
    desc: "Rénovation appartement dans le 6e arrondissement de Paris : Saint-Germain-des-Prés, Luxembourg. Haussmannien, ABF. Devis 48h.",
    tag: 'Paris',
  },
  {
    href: '/blog/renovation-appartement-paris-7e',
    title: 'Rénovation Appartement Paris 7e : artisan & prix 2025',
    desc: "Rénovation appartement dans le 7e arrondissement de Paris : Invalides, Eiffel, Saint-Thomas-d'Aquin. Haussmannien prestige. Devis 48h.",
    tag: 'Paris',
  },
  {
    href: '/blog/renovation-appartement-paris-8e',
    title: 'Rénovation Appartement Paris 8e : artisan & prix 2025',
    desc: "Rénovation appartement dans le 8e arrondissement de Paris : Champs-Élysées, Monceau, Faubourg Saint-Honoré. Prestige, devis 48h.",
    tag: 'Paris',
  },
  {
    href: '/blog/renovation-appartement-paris-10e',
    title: 'Rénovation Appartement Paris 10e : artisan & prix 2025',
    desc: "Rénovation appartement dans le 10e arrondissement de Paris : Canal Saint-Martin, République, Gare du Nord. Artisan, devis 48h.",
    tag: 'Paris',
  },
  {
    href: '/blog/renovation-appartement-paris-18e',
    title: 'Rénovation Appartement Paris 18e : artisan & prix 2025',
    desc: "Rénovation appartement dans le 18e arrondissement de Paris : Montmartre, Goutte-d'Or, Clignancourt. Artisan local, devis 48h.",
    tag: 'Paris',
  },
  {
    href: '/blog/prix-renovation-salle-de-bain-paris',
    title: 'Prix Rénovation Salle de Bain Paris : tarifs détaillés 2025',
    desc: "Prix rénovation salle de bain à Paris : petite surface 3m², carrelage mural, meuble vasque, douche italienne. Tarifs artisan 2025.",
    tag: 'Salle de bain',
  },
  {
    href: '/blog/renovation-appartement-paris-12e',
    title: 'Rénovation Appartement Paris 12e : artisan & prix 2025',
    desc: "Rénovation appartement dans le 12e arrondissement de Paris : Bastille, Nation, Bercy. Artisan local, devis 48h.",
    tag: 'Paris',
  },
  {
    href: '/blog/devis-travaux-renovation-paris',
    title: 'Devis Travaux Rénovation Paris : comment comparer & éviter les pièges 2025',
    desc: "Comment obtenir et comparer un devis de rénovation à Paris : CGV, prix au m², délais, assurance décennale. Guide 2025.",
    tag: 'Guides',
  },
  {
    href: '/blog/renovation-appartement-paris-16e',
    title: 'Rénovation Appartement Paris 16e : artisan & prix 2025',
    desc: "Rénovation appartement dans le 16e arrondissement de Paris : Passy, Auteuil, Trocadéro. Prestige, haussmannien, artisan 2025.",
    tag: 'Paris',
  },
  {
    href: '/blog/renovation-appartement-bailleur-paris',
    title: 'Rénovation Appartement Bailleur Paris : entre deux locataires 2025',
    desc: "Rénover un appartement entre deux locataires à Paris : peinture, sols, cuisine, salle de bain. Budget et artisan 2025.",
    tag: 'Guides',
  },
  {
    href: '/blog/renovation-terrasse-bois-paris',
    title: 'Terrasse Bois Paris : ipé, composite & prix artisan 2025',
    desc: "Installer une terrasse en bois à Paris : ipé, teck, composite. Permis de construire, copropriété, entretien. Artisan, prix 2025.",
    tag: 'Extérieur',
  },
  {
    href: '/blog/humidite-appartement-paris',
    title: "Humidité Appartement Paris : causes, traitement & artisan 2025",
    desc: "Traiter l'humidité dans un appartement parisien : remontées capillaires, condensation, infiltrations. Solutions et prix artisan 2025.",
    tag: 'Guides',
  },
  {
    href: '/blog/pose-carrelage-grand-format-paris',
    title: 'Pose Carrelage Grand Format Paris : 120x60, 120x120 & prix 2025',
    desc: "Poser un carrelage grand format à Paris : 120x60, rectifié, joints fins 1mm. Artisan carreleur, prix 2025.",
    tag: 'Carrelage',
  },
  {
    href: '/blog/mur-porteur-paris',
    title: 'Mur Porteur Paris : abattre, percer & prix artisan 2025',
    desc: "Abattre ou percer un mur porteur à Paris : IPN, bilan structurel, copropriété, déclaration travaux. Prix et artisan 2025.",
    tag: 'Guides',
  },
  {
    href: '/blog/renovation-appartement-copropriete-travaux-paris',
    title: 'Travaux en Copropriété Paris : autorisations, règles & artisan 2025',
    desc: "Tout savoir sur les travaux en copropriété à Paris : autorisations, règlements, parties communes vs privatives. Guide pratique et prix 2025.",
    tag: 'Guides',
  },
  {
    href: '/blog/renovation-appartement-paris-18e-montmartre',
    title: 'Rénovation Appartement Paris 18e Montmartre : artisan & prix 2025',
    desc: "Rénovation appartement dans le 18e arrondissement de Paris : Montmartre, Pigalle, Château Rouge, Clignancourt. Artisan local, devis 48h.",
    tag: 'Arrondissements',
  },
  {
    href: '/blog/ouverture-cuisine-salon-paris',
    title: 'Ouvrir Cuisine sur Salon Paris : verrière, IPN & prix 2025',
    desc: "Ouvrir cuisine sur salon à Paris : verrière, abattage mur porteur, IPN, prix par scénario. Guide pratique artisan 2025.",
    tag: 'Cuisine',
  },
  {
    href: '/blog/revetement-sol-appartement-paris',
    title: 'Revêtement Sol Appartement Paris : parquet, carrelage, béton ciré 2025',
    desc: "Choisir son revêtement sol à Paris : parquet massif, carrelage, béton ciré, LVT. Comparatif prix et conseils artisan 2025.",
    tag: 'Parquet',
  },
  {
    href: '/blog/renovation-immeuble-paris',
    title: 'Rénovation Immeuble Paris : parties communes, façade & copropriété 2025',
    desc: "Rénover les parties communes d'un immeuble parisien : hall, cage d'escalier, façade. Décision en copropriété, qui paie, coûts 2025.",
    tag: 'Guides',
  },
  {
    href: '/blog/remise-aux-normes-electrique-paris',
    title: 'Remise aux Normes Électrique Paris : NF C 15-100 & prix 2025',
    desc: "Mise en conformité électrique à Paris : NF C 15-100, DDR 30mA, tableau électrique, diagnostic vente. Prix par surface 2025.",
    tag: 'Électricité',
  },
  {
    href: '/blog/isolation-thermique-paris',
    title: 'Isolation Thermique Paris : combles, murs & prix artisan 2025',
    desc: "Améliorer l'isolation thermique d'un appartement parisien : combles, murs, fenêtres, DPE, MaPrimeRénov'. Prix 2025.",
    tag: 'Isolation',
  },
  {
    href: '/blog/renovation-appartement-paris-11e-bastille',
    title: 'Rénovation Appartement Paris 11e Bastille : artisan & prix 2025',
    desc: "Artisan rénovation Paris 11e : Bastille, Oberkampf, Nation, Charonne. Quartier branché, forte demande locative, prix 2025.",
    tag: 'Arrondissements',
  },
  {
    href: '/blog/renovation-salle-de-bain-italienne-paris',
    title: "Salle de Bain Italienne Paris : douche à l'italienne & prix 2025",
    desc: "Installer une douche à l'italienne à Paris : bac extra-plat, paroi vitrée, contraintes plancher. Prix et artisan 2025.",
    tag: 'Salle de bain',
  },
  {
    href: '/blog/renovation-cave-amenagee-paris',
    title: 'Cave Aménagée Paris : sous-sol, rangement & prix 2025',
    desc: "Aménager une cave parisienne : traitement humidité, isolation, électricité, usages (cave à vin, home cinéma). Prix 2025.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/prix-renovation-cuisine-paris',
    title: 'Prix Rénovation Cuisine Paris : budget, matériaux & devis 2025',
    desc: "Quel budget pour rénover une cuisine à Paris ? Cuisine équipée, plan de travail, carrelage, électroménager. Prix m² 2025.",
    tag: 'Cuisine',
  },
  {
    href: '/blog/pose-parquet-paris',
    title: 'Pose Parquet Paris : massif, contrecollé & prix artisan 2025',
    desc: "Poser un parquet à Paris : parquet massif cloué, contrecollé collé, flottant. Préparation, finitions, prix m² 2025.",
    tag: 'Parquet',
  },
  {
    href: '/blog/renovation-parquet-chene-blanc-paris',
    title: 'Parquet Chêne Blanc Paris : naturel, blanchi & prix artisan 2025',
    desc: "Parquet chêne blanc à Paris : bois naturel blanchi, huile blanche, vernis satiné. Tendances 2025, pose et entretien.",
    tag: 'Parquet',
  },
  {
    href: '/blog/peinture-decoration-appartement-paris',
    title: 'Peinture & Décoration Appartement Paris : couleurs, finitions & prix 2025',
    desc: "Tendances peinture 2025, finitions mat/velours/satin, artisan peintre Paris. Prix au m² et conseils couleurs.",
    tag: 'Peinture',
  },
  {
    href: '/blog/verriere-interieure-atelier-paris',
    title: 'Verrière Intérieure Atelier Paris : styles, prix & pose 2025',
    desc: "Installer une verrière intérieure style atelier à Paris : séparation cuisine-salon, cloison vitrée. Prix pose 2025.",
    tag: 'Décoration',
  },
  {
    href: '/blog/salle-de-bain-italienne-sans-receveur-paris',
    title: 'Douche Italienne sans Receveur Paris : installation & prix 2025',
    desc: "Douche italienne sans receveur à Paris : chape hydrofuge, étanchéité SPEC, carrelage antidérapant. Prix 2025.",
    tag: 'Salle de bain',
  },
  {
    href: '/blog/isolation-murs-appartement-paris',
    title: 'Isolation Murs Appartement Paris : ITI, ITE & prix 2025',
    desc: "Isoler les murs d'un appartement à Paris : ITI, ITE, aides MaPrimeRénov'. Prix m² 2025 par technique.",
    tag: 'Isolation',
  },
  {
    href: '/blog/cloison-separation-appartement-paris',
    title: 'Cloison Séparation Appartement Paris : types, prix & pose 2025',
    desc: "Créer une cloison dans un appartement parisien : placo, brique, verre, amovible. Prix pose artisan Paris 2025.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/amenagement-petite-salle-de-bain-paris',
    title: 'Aménagement Petite Salle de Bain Paris : astuces & prix 2025',
    desc: "Optimiser une petite salle de bain (3-5 m²) à Paris : douche italienne, WC suspendu, niche carrelage. Artisan Paris.",
    tag: 'Salle de bain',
  },
  {
    href: '/blog/choisir-peinture-appartement-paris',
    title: 'Choisir sa Peinture Appartement Paris : marques, finitions & prix 2025',
    desc: "Dulux, Tollens, Farrow & Ball : quelle peinture choisir pour un appartement parisien ? Conseils 2025.",
    tag: 'Peinture',
  },
  {
    href: '/blog/escalier-interieur-renovation-paris',
    title: 'Rénover un Escalier Intérieur Paris : bois, métal, béton — guide 2025',
    desc: "Habillage bois, rampe métal, marches béton : rénover son escalier parisien. Prix artisan Paris 2025.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/robinetterie-salle-de-bain-paris',
    title: 'Robinetterie Salle de Bain Paris : choisir & installer 2025',
    desc: "Hansgrohe, Grohe, Roca : quelle robinetterie pour votre salle de bain parisienne ? Pose artisan Paris 2025.",
    tag: 'Salle de bain',
  },
  {
    href: '/blog/renovation-wc-paris',
    title: 'Rénovation WC Paris : prix, matériaux & artisan 2025',
    desc: "Rénover les toilettes d'un appartement parisien : WC suspendu, carrelage, peinture. Artisan Paris, devis 48h.",
    tag: 'Plomberie',
  },
  {
    href: '/blog/renovation-studio-paris',
    title: 'Rénovation Studio Paris : optimiser chaque m² — guide 2025',
    desc: "Rénover un studio parisien (15 à 35 m²) : optimisation, cuisinette, salle de bain, rangements. Artisan Paris.",
    tag: 'Prix & Budgets',
  },
  {
    href: '/blog/renovation-loft-paris',
    title: 'Rénovation Loft Paris : aménager un espace ouvert avec style 2025',
    desc: "Rénover un loft parisien : béton ciré, verrière, mezzanine, décloisonnement. Artisan Paris, devis 48h.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/renovation-immeuble-ancien-paris',
    title: 'Rénover un Immeuble Ancien Paris : façade, parties communes 2025',
    desc: "Rénover un immeuble parisien : ravalement, isolation, parties communes, logements. Artisan Paris, devis 48h.",
    tag: 'Rénovation',
  },
  {
    href: '/blog/renovation-maison-ancienne-paris',
    title: 'Rénover une Maison Ancienne Paris : guide technique & prix 2025',
    desc: "Murs en meulière, planchers bois, charpente : rénover une maison ancienne à Paris. Artisan Paris, devis 48h.",
    tag: 'Rénovation',
  },
  {
    href: '/blog/beton-cire-paris',
    title: 'Béton Ciré Paris : pose, prix & entretien — guide artisan 2025',
    desc: "Béton ciré sol, mur, salle de bain à Paris. Pose artisan, prix au m², entretien 2025. Devis gratuit 48h.",
    tag: 'Sol & Revêtements',
  },
  {
    href: '/blog/renovation-energetique-appartement-paris',
    title: 'Rénovation Énergétique Appartement Paris : DPE, aides & artisan 2025',
    desc: "Améliorer le DPE de votre appartement à Paris : isolation, fenêtres, chauffage. MaPrimeRénov', CEE, artisan RGE. Devis gratuit 48h.",
    tag: 'Rénovation Énergétique',
  },
  {
    href: '/blog/moisissures-appartement-paris',
    title: 'Moisissures Appartement Paris : causes, traitement & prévention 2025',
    desc: "Traitement moisissures appartement à Paris. Causes humidité, solutions durables, artisan spécialisé. Devis gratuit 48h.",
    tag: 'Humidité & Isolation',
  },
  {
    href: '/blog/sol-vinyle-paris',
    title: 'Sol Vinyle Paris : pose, prix & conseils — artisan 2025',
    desc: "Sol vinyle à Paris : LVT, dalle, lame. Pose artisan, prix au m², entretien 2025. Devis gratuit 48h.",
    tag: 'Sol & Revêtements',
  },
  {
    href: '/blog/renovation-salle-de-bain-haussmannien',
    title: 'Salle de Bain Haussmannienne Paris : rénovation avec caractère 2025',
    desc: "Rénover une salle de bain haussmannienne à Paris. Contraintes syndic, styles conseillés, prix au m². Devis gratuit 48h.",
    tag: 'Salle de bain',
  },
  {
    href: '/blog/pose-carrelage-salle-de-bain-paris',
    title: 'Pose Carrelage Salle de Bain Paris : prix, types & artisan 2025',
    desc: "Pose carrelage salle de bain Paris. Grands formats, mosaïque, zellige. Prix artisan 2025. Devis gratuit 48h.",
    tag: 'Carrelage',
  },
  {
    href: '/blog/installation-cuisine-ikea-paris',
    title: 'Installation Cuisine IKEA Paris : montage, pose & prix artisan 2025',
    desc: "Faire poser sa cuisine IKEA à Paris par un artisan. Prix, délais, plomberie, électricité. Devis gratuit 48h.",
    tag: 'Cuisine',
  },
  {
    href: '/blog/isolation-phonique-appartement-paris',
    title: 'Isolation Phonique Appartement Paris : solutions & prix 2025',
    desc: "Réduire les bruits dans votre appartement parisien. Doublage murs, faux-plafond, sol flottant. Devis gratuit 48h.",
    tag: 'Isolation',
  },
  {
    href: '/blog/budget-renovation-appartement-paris',
    title: 'Budget Rénovation Appartement Paris : grilles de prix 2025 par pièce',
    desc: "Combien prévoir pour rénover un appartement à Paris en 2025 ? Prix au m² par type de travaux, budget total, astuces économies.",
    tag: 'Budget & Prix',
  },
  {
    href: '/blog/tendances-deco-appartement-paris-2025',
    title: 'Tendances Déco Appartement Paris 2025 : styles & couleurs de l\'année',
    desc: "Couleurs tendance, japandi, arches, matériaux naturels — les grandes tendances déco pour vos appartements parisiens en 2025.",
    tag: 'Décoration',
  },
  {
    href: '/blog/travaux-renovation-locatif-paris',
    title: 'Rénovation Appartement Locatif Paris : travaux déductibles & rentabilité 2025',
    desc: "Optimiser la rentabilité de votre bien locatif à Paris. Travaux déductibles, valorisation après rénovation, DPE et loyer.",
    tag: 'Investissement',
  },
  {
    href: '/blog/baignoire-ilot-paris',
    title: "Baignoire Îlot Paris : installation, prix & styles — guide artisan 2025",
    desc: "Installer une baignoire îlot à Paris. Styles, matériaux, contraintes plomberie, prix 2025. Devis gratuit 48h.",
    tag: 'Salle de bain',
  },
  {
    href: '/blog/renovation-fenetre-double-vitrage-paris',
    title: 'Remplacement Fenêtres Double Vitrage Paris : prix & guide 2025',
    desc: "Changer ses fenêtres à Paris. Double/triple vitrage, démarches syndic, CEE, prix 2025. Devis gratuit 48h.",
    tag: 'Menuiserie',
  },
  {
    href: '/blog/carrelage-zellige-paris',
    title: 'Zellige Paris : pose, prix & entretien — guide artisan 2025',
    desc: "Zellige à Paris : crédence cuisine, salle de bain, sol. Pose artisan, prix au m², entretien 2025. Devis gratuit 48h.",
    tag: 'Carrelage',
  },
  {
    href: '/blog/porte-blindee-paris',
    title: 'Porte Blindée Paris : installation, certifications & prix 2025',
    desc: "Installer une porte blindée à Paris. Certifications A2P, démarches copropriété, prix 2025. Devis gratuit 48h.",
    tag: 'Menuiserie',
  },
  {
    href: '/blog/renovation-plancher-chauffant-paris',
    title: 'Plancher Chauffant Paris : installation, types & prix artisan 2025',
    desc: "Plancher chauffant hydraulique ou électrique à Paris. Installation artisan, compatibilité revêtements, prix 2025. Devis gratuit 48h.",
    tag: 'Chauffage',
  },
  {
    href: '/blog/credence-cuisine-paris',
    title: 'Crédence Cuisine Paris : matériaux, pose & prix artisan 2025',
    desc: "Choisir et faire poser sa crédence cuisine à Paris. Carrelage, verre, inox, zellige. Prix artisan 2025. Devis gratuit 48h.",
    tag: 'Cuisine',
  },
  {
    href: '/blog/declaration-travaux-paris',
    title: "Déclaration Travaux Paris : quand et comment déclarer ? Guide 2025",
    desc: "Quels travaux nécessitent une déclaration préalable à Paris ? Formulaires, délais, règles PLU. Guide complet artisan 2025.",
    tag: 'Administratif',
  },
  {
    href: '/blog/renovation-cuisine-equipee-paris',
    title: 'Cuisine Équipée Paris : installation, marques & prix artisan 2025',
    desc: "Faire installer une cuisine équipée à Paris. Choix des marques, coût de pose artisan, délais. Devis gratuit 48h.",
    tag: 'Cuisine',
  },
  {
    href: '/blog/pose-parquet-flottant-paris',
    title: 'Pose Parquet Flottant Paris : technique, coût & artisan 2025',
    desc: "Faire poser un parquet flottant à Paris. Préparation du support, sous-couche, prix au m², marques recommandées. Devis gratuit 48h.",
    tag: 'Parquet',
  },
  {
    href: '/blog/cloison-placo-paris',
    title: 'Cloison Placo Paris : pose, isolation & prix artisan 2025',
    desc: "Faire poser une cloison en placo à Paris. Types de cloisons, isolation phonique, prix au m², délais. Devis gratuit 48h.",
    tag: 'Plâtrerie',
  },
  {
    href: '/blog/renovation-entree-appartement-paris',
    title: "Rénovation Entrée Appartement Paris : idées & prix artisan 2025",
    desc: "Rénover son entrée à Paris. Aménagement couloir, miroirs, rangements, revêtements, luminaires. Devis gratuit 48h.",
    tag: 'Décoration',
  },
  {
    href: '/blog/autorisation-copropriete-paris',
    title: "Autorisation Copropriété Paris : travaux et démarches 2025",
    desc: "Obtenir une autorisation de copropriété à Paris. AG, travaux nécessitant autorisation, délais, rôle du syndic. Guide complet.",
    tag: 'Administratif',
  },
  {
    href: '/blog/autorisation-travaux-copropriete-paris',
    title: "Autorisation Travaux Copropriété Paris : guide complet 2025",
    desc: "Quels travaux nécessitent une autorisation en copropriété à Paris ? Démarches, formulaires, délais. Guide artisan 2025.",
    tag: 'Administratif',
  },
  {
    href: '/blog/assurance-decennale-artisan-paris',
    title: "Assurance Décennale Paris : pourquoi l'exiger à votre artisan 2025",
    desc: "Vérifier l'assurance décennale de votre artisan à Paris. Garantie décennale, travaux couverts, responsabilité, 10 ans. Guide 2025.",
    tag: 'Administratif',
  },
  {
    href: '/blog/reception-travaux-paris',
    title: 'Réception des Travaux Paris : checklist et conseils artisan 2025',
    desc: "Comment réceptionner ses travaux à Paris. PV de réception, réserves, garantie parfait achèvement, droits du client. Guide 2025.",
    tag: 'Administratif',
  },
  {
    href: '/blog/assurance-decennale-renovation-paris',
    title: "Assurance Décennale Rénovation Paris : guide complet artisan 2025",
    desc: "Tout savoir sur l'assurance décennale pour vos travaux de rénovation à Paris. Garanties, vérifications, recours. Guide 2025.",
    tag: 'Administratif',
  },
  {
    href: '/blog/renovation-salon-paris',
    title: 'Rénovation Salon Paris : idées, matériaux & prix artisan 2025',
    desc: "Rénover son salon à Paris. Ouverture cloison, parquet, peinture, cheminée, éclairage. Prix artisan 2025. Devis gratuit 48h.",
    tag: 'Rénovation',
  },
  {
    href: '/blog/verriere-atelier-paris',
    title: "Verrière Atelier Paris : pose, styles & prix artisan 2025",
    desc: "Installer une verrière atelier à Paris. Acier, aluminium, vitrages, prix, démarches copropriété. Devis gratuit 48h.",
    tag: 'Menuiserie',
  },
  {
    href: '/blog/chape-beton-paris',
    title: 'Chape Béton Paris : chape sèche, liquide & prix artisan 2025',
    desc: "Faire poser une chape béton à Paris. Chape sèche, liquide, traditionnelle. Épaisseur, séchage, prix au m². Devis gratuit 48h.",
    tag: 'Gros œuvre',
  },
  {
    href: '/blog/cout-renovation-cuisine-paris',
    title: "Coût Rénovation Cuisine Paris : prix au m² et devis artisan 2025",
    desc: "Prix et coût de rénovation cuisine à Paris. Petit/moyen/grand budget, cuisine IKEA vs sur mesure. Devis gratuit 48h.",
    tag: 'Cuisine',
  },
  {
    href: '/blog/terrasse-bois-paris',
    title: 'Terrasse Bois Paris : pose, essences & prix artisan 2025',
    desc: "Faire poser une terrasse bois à Paris. Ipé, pin traité, composite. Lames, lambourdes, prix, entretien. Devis gratuit 48h.",
    tag: 'Extérieur',
  },
  {
    href: '/blog/cout-renovation-salle-de-bain-paris',
    title: "Coût Rénovation Salle de Bain Paris : prix & devis artisan 2025",
    desc: "Prix et coût de rénovation salle de bain à Paris. Petite/grande SDB, carrelage, plomberie, douche italienne. Devis gratuit 48h.",
    tag: 'Salle de bain',
  },
  {
    href: '/blog/renovation-appartement-200m2-paris',
    title: "Rénovation Appartement 200m² Paris : planning & prix artisan 2025",
    desc: "Rénover un grand appartement de 200m² à Paris. Planification, corps de métier, budget estimatif au m², phasage. Guide 2025.",
    tag: 'Rénovation',
  },
  {
    href: '/blog/peinture-interieure-paris',
    title: 'Peinture Intérieure Paris : types, finitions & prix artisan 2025',
    desc: "Types de peinture intérieure à Paris. Mat, satin, brillant, marques, préparation des murs, prix au m² artisan. Devis gratuit 48h.",
    tag: 'Peinture',
  },
  {
    href: '/blog/renovation-haussmannien-paris',
    title: "Rénovation Appartement Haussmannien Paris : guide complet artisan 2025",
    desc: "Rénover un appartement haussmannien à Paris. Parquets, moulures, cheminées, réglementation, isolation, prix. Guide expert 2025.",
    tag: 'Rénovation',
  },
  {
    href: '/blog/enduit-decoratif-paris',
    title: "Enduit Décoratif Paris : béton ciré, stuc, tadelakt & prix 2025",
    desc: "Enduit décoratif à Paris : béton ciré, stuc vénitien, tadelakt. Application, entretien, prix au m². Artisan qualifié. Devis gratuit 48h.",
    tag: 'Décoration',
  },
  {
    href: '/blog/prix-peinture-appartement-paris',
    title: 'Prix Peinture Appartement Paris : tarif artisan au m² 2025',
    desc: "Prix et tarif peinture appartement à Paris en 2025. Coût au m² selon pièce, préparation murs, main d'œuvre. Devis gratuit 48h.",
    tag: 'Peinture',
  },
  {
    href: '/blog/climatisation-appartement-paris',
    title: 'Climatisation Appartement Paris : installation split & prix artisan 2025',
    desc: "Installer une climatisation dans son appartement à Paris. Split, règles copropriété, démarches mairie, prix. Devis gratuit 48h.",
    tag: 'Climatisation',
  },
  {
    href: '/blog/renovation-appartement-belleville-paris',
    title: "Rénovation Appartement Belleville Paris 20e : artisan & prix 2025",
    desc: "Rénover un appartement à Belleville Paris 19e/20e. Immeubles anciens, lofts, rénovation totale, prix artisan. Devis gratuit 48h.",
    tag: 'Quartier',
  },
  {
    href: '/blog/store-interieur-paris',
    title: 'Store Intérieur Paris : pose, types & prix artisan 2025',
    desc: "Faire poser des stores intérieurs à Paris. Store enrouleur, vénitien, bateau, occultant, sur mesure. Prix artisan. Devis gratuit 48h.",
    tag: 'Décoration',
  },
  {
    href: '/blog/vmc-appartement-paris',
    title: 'VMC Appartement Paris : installation, entretien & prix artisan 2025',
    desc: "Installer une VMC dans son appartement à Paris. Simple flux, double flux, réglementation, prix artisan. Devis gratuit 48h.",
    tag: 'Technique',
  },
  {
    href: '/blog/carreaux-ciment-paris',
    title: 'Carreaux de Ciment Paris : pose, entretien & prix artisan 2025',
    desc: "Poser des carreaux de ciment à Paris. Avantages, jointoiement, traitement hydrofuge, entretien, prix au m². Devis gratuit 48h.",
    tag: 'Sol',
  },
  {
    href: '/blog/renovation-chambre-paris-2025',
    title: "Rénovation Chambre Paris 2025 : tendances, idées & prix artisan",
    desc: "Rénover sa chambre à Paris en 2025. Tendances déco, matériaux, placards sur mesure, parquet, éclairage, prix artisan. Devis gratuit 48h.",
    tag: 'Chambre',
  },
  {
    href: '/blog/renovation-appartement-oberkampf-paris',
    title: "Rénovation Appartement Oberkampf Paris 11e : artisan & prix 2025",
    desc: "Rénover un appartement à Oberkampf Paris 11e. Immeubles anciens, lofts, rénovation totale, prix artisan. Devis gratuit 48h.",
    tag: 'Quartier',
  },
  {
    href: '/blog/renovation-appartement-nation-paris',
    title: "Rénovation Appartement Nation Paris 11e/12e : artisan & prix 2025",
    desc: "Rénover un appartement près de Nation à Paris 11e/12e. Appartements haussmanniens, prix artisan. Devis gratuit 48h.",
    tag: 'Quartier',
  },
  {
    href: '/blog/renovation-appartement-republique-paris',
    title: "Rénovation Appartement République Paris 10e/11e : artisan & prix 2025",
    desc: "Rénover un appartement près de République à Paris 10e/11e. Logements anciens et récents, prix artisan. Devis gratuit 48h.",
    tag: 'Quartier',
  },
  {
    href: '/blog/plafond-tendu-paris',
    title: "Plafond Tendu Paris : pose, types & prix artisan 2025",
    desc: "Faire poser un plafond tendu à Paris : types (laqué, satiné, acoustique), prix au m², délai de pose et artisan qualifié. Devis gratuit sous 48h.",
    tag: 'Travaux',
  },
  {
    href: '/blog/renovation-appartement-pigalle-paris',
    title: "Rénovation Appartement Pigalle Paris 9e/18e : artisan & prix 2025",
    desc: "Rénover un appartement à Pigalle (Paris 9e/18e) : immeubles haussmanniens, caves, combles aménageables. Prix artisan 2025.",
    tag: 'Quartier',
  },
  {
    href: '/blog/renovation-appartement-batignolles-paris',
    title: "Rénovation Appartement Batignolles Paris 17e : artisan & prix 2025",
    desc: "Rénover un appartement aux Batignolles (Paris 17e) : haussmannien, copropriété, parquet. Devis gratuit 48h.",
    tag: 'Quartier',
  },
  {
    href: '/blog/renovation-appartement-montparnasse-paris',
    title: "Rénovation Appartement Montparnasse Paris 14e/6e : artisan & prix 2025",
    desc: "Rénover un appartement à Montparnasse : standing, cuisines équipées, salles de bain italiennes. Devis 48h.",
    tag: 'Quartier',
  },
  {
    href: '/blog/renovation-appartement-bercy-paris',
    title: "Rénovation Appartement Bercy Paris 12e : loft & prix 2025",
    desc: "Rénover un appartement ou loft à Bercy (Paris 12e) : béton ciré, verrières, espaces industriels. Devis 48h.",
    tag: 'Quartier',
  },
  {
    href: '/blog/renovation-appartement-opera-paris',
    title: "Rénovation Appartement Opéra Paris 9e/2e : haussmannien & prix 2025",
    desc: "Rénover un appartement haussmannien au quartier Opéra (Paris 9e/2e). Moulures, parquet, finitions premium. Devis 48h.",
    tag: 'Quartier',
  },
  {
    href: '/blog/renovation-appartement-chatelet-paris',
    title: "Rénovation Appartement Châtelet-Les Halles Paris : artisan & prix 2025",
    desc: "Rénover un appartement au coeur de Paris, Châtelet-Les Halles. Accès chantier délicat, finitions premium. Devis 48h.",
    tag: 'Quartier',
  },
  {
    href: '/blog/placard-sur-mesure-paris',
    title: "Placard Sur Mesure Paris : fabrication & prix artisan 2025",
    desc: "Fabrication et pose de placards sur mesure à Paris. Optimisation des espaces, matériaux haut de gamme. Devis 48h.",
    tag: 'Travaux',
  },
  {
    href: '/blog/dressing-sur-mesure-paris',
    title: "Dressing Sur Mesure Paris : conception & prix artisan 2025",
    desc: "Aménagement dressing sur mesure à Paris. Conception 3D, dressing d'angle, éclairage LED. Devis gratuit 48h.",
    tag: 'Travaux',
  },
  {
    href: '/blog/porte-interieure-paris',
    title: "Porte Intérieure Paris : pose & remplacement artisan 2025",
    desc: "Pose et remplacement portes intérieures à Paris. Bois massif, huisseries, finitions laquées. Devis 48h.",
    tag: 'Travaux',
  },
  {
    href: '/blog/porte-coulissante-paris',
    title: "Porte Coulissante Paris : installation galandage & prix 2025",
    desc: "Installation portes coulissantes et galandage à Paris. Gain de place, portes vitrées, bois. Devis 48h.",
    tag: 'Travaux',
  },
  {
    href: '/blog/salle-de-bain-noire-paris',
    title: "Salle de Bain Noire Paris : tendance & prix artisan 2025",
    desc: "Créer une salle de bain noire ou anthracite à Paris. Carrelage noir mat, robinetterie noire, douche italienne. Devis 48h.",
    tag: 'Salle de bain',
  },
  {
    href: '/blog/carrelage-metro-paris',
    title: "Carrelage Métro Paris : pose faïence & prix artisan 2025",
    desc: "Pose carrelage métro en faïence à Paris. Joints colorés, formats 10x20, cuisine et salle de bain. Devis 48h.",
    tag: 'Carrelage',
  },
  {
    href: '/blog/cuisine-ouverte-salon-paris',
    title: "Cuisine Ouverte sur Salon Paris : abattre cloison & prix 2025",
    desc: "Ouvrir la cuisine sur le salon à Paris, abattre une cloison. IPN, mur porteur, prix travaux. Devis 48h.",
    tag: 'Cuisine',
  },
  {
    href: '/blog/renovation-appartement-30m2-paris',
    title: "Rénovation Appartement 30m2 Paris : budget & prix 2025",
    desc: "Rénover un studio ou T1 de 30m2 à Paris. Budget rafraîchissement à réno complète, prix artisan 2025.",
    tag: 'Budget',
  },
  {
    href: '/blog/renovation-appartement-50m2-paris',
    title: "Rénovation Appartement 50m2 Paris : budget & prix 2025",
    desc: "Rénover un T2/T3 de 50m2 à Paris. Budget estimé selon niveau de rénovation, prix artisan 2025.",
    tag: 'Budget',
  },
  {
    href: '/blog/renovation-appartement-70m2-paris',
    title: "Rénovation Appartement 70m2 Paris : budget & prix 2025",
    desc: "Rénover un T3 de 70m2 à Paris. Budget rénovation partielle à complète, prix artisan 2025.",
    tag: 'Budget',
  },
  {
    href: '/blog/renovation-appartement-80m2-paris',
    title: "Rénovation Appartement 80m2 Paris : budget & prix 2025",
    desc: "Rénover un T3/T4 de 80m2 à Paris. Budget estimé selon niveau de travaux, prix artisan 2025.",
    tag: 'Budget',
  },
  {
    href: '/blog/renovation-appartement-150m2-paris',
    title: "Rénovation Grand Appartement 150m2 Paris : budget & prix 2025",
    desc: "Rénover un grand appartement de 150m2 à Paris. Budget rénovation partielle à complète, artisan qualifié.",
    tag: 'Budget',
  },
  {
    href: '/blog/prix-renovation-loft-paris',
    title: "Prix Rénovation Loft Paris : budget & coûts au m2 2025",
    desc: "Rénover un loft à Paris : budget au m², niveaux de rénovation, aménagement open space. Devis 48h.",
    tag: 'Budget',
  },
  {
    href: '/blog/stuc-venitien-paris',
    title: "Stuc Vénitien Paris : application & prix artisan 2025",
    desc: "Application stuc vénitien et marmorino à Paris. Finition brillante, résistance humidité, couleurs sur mesure.",
    tag: 'Travaux',
  },
  {
    href: '/blog/beton-decoratif-paris',
    title: "Béton Décoratif Paris : béton ciré murs & sols 2025",
    desc: "Béton décoratif et béton ciré à Paris : murs et sols. Durabilité, entretien, prix artisan 2025.",
    tag: 'Travaux',
  },
  {
    href: '/blog/parquet-bois-flotte-paris',
    title: "Parquet Bois Flotté Paris : pose & prix artisan 2025",
    desc: "Parquet bois flotté et bois vieilli à Paris. Effet naturel, teintes grises, entretien. Devis gratuit 48h.",
    tag: 'Parquet',
  },
  {
    href: '/blog/radiateur-design-paris',
    title: "Radiateur Design Paris : installation & prix artisan 2025",
    desc: "Radiateurs design et sèche-serviettes décoratifs à Paris. Acier, fonte, inertie. Devis gratuit 48h.",
    tag: 'Travaux',
  },
  {
    href: '/blog/prix-artisan-renovation-paris',
    title: "Prix Artisan Rénovation Paris : tarifs & coûts 2025",
    desc: "Tarifs des artisans rénovation à Paris. Prix horaire, devis au m², TVA, garanties. Comparatif 2025.",
    tag: 'Budget',
  },
  {
    href: '/blog/renovation-appartement-neuilly-paris',
    title: "Rénovation Appartement Neuilly-sur-Seine : artisan & prix 2025",
    desc: "Rénover un appartement à Neuilly-sur-Seine. Haussmannien haut de gamme, finitions premium. Devis 48h.",
    tag: 'Ville',
  },
  {
    href: '/blog/renovation-appartement-vincennes',
    title: "Rénovation Appartement Vincennes : artisan & prix 2025",
    desc: "Rénover un appartement à Vincennes. Proche Paris 12e, fort de Vincennes. Devis gratuit 48h.",
    tag: 'Ville',
  },
  {
    href: '/blog/renovation-appartement-saint-lazare-paris',
    title: "Rénovation Appartement Saint-Lazare Paris 8e/9e : artisan & prix 2025",
    desc: "Rénover un appartement au quartier Saint-Lazare (Paris 8e/9e). Investissement locatif, standing. Devis 48h.",
    tag: 'Quartier',
  },
  {
    href: '/blog/eclairage-appartement-paris',
    title: "Éclairage Appartement Paris : spots LED & installation 2025",
    desc: "Éclairage et luminaires pour appartement à Paris. Spots encastrés, rubans LED, domotique, variateurs. Devis 48h.",
    tag: 'Travaux',
  },
  {
    href: '/blog/renovation-appartement-boulogne-billancourt',
    title: "Rénovation Appartement Boulogne-Billancourt : artisan & prix 2025",
    desc: "Rénover un appartement à Boulogne-Billancourt (92). Haussmannien et moderne, finitions premium. Devis 48h.",
    tag: 'Ville',
  },
  {
    href: '/blog/renovation-rapide-appartement-paris',
    title: "Rénovation Rapide Appartement Paris : délais & planning 2025",
    desc: "Rénover rapidement son appartement à Paris. Rafraîchissement express, planning chantier, délais réalistes.",
    tag: 'Conseils',
  },
  {
    href: '/blog/comment-choisir-artisan-paris',
    title: "Comment Choisir Son Artisan Rénovation Paris : guide 2025",
    desc: "Choisir le bon artisan rénovation à Paris. Labels, assurances, devis comparatifs, garanties. Guide 2025.",
    tag: 'Conseils',
  },
  {
    href: '/blog/financement-travaux-renovation-paris',
    title: "Financement Travaux Rénovation Paris : prêts & aides 2025",
    desc: "Financer sa rénovation à Paris. Prêt travaux, MaPrimeRénov, Anah, CEE. Guide complet des aides 2025.",
    tag: 'Conseils',
  },
  {
    href: '/blog/tva-travaux-renovation-paris',
    title: "TVA Travaux Rénovation Paris : taux 10% conditions 2025",
    desc: "TVA à 10% sur vos travaux de rénovation à Paris. Conditions, attestation propriétaire, logement de plus de 2 ans.",
    tag: 'Conseils',
  },
  {
    href: '/blog/planning-travaux-renovation-paris',
    title: "Planning Travaux Rénovation Paris : ordre & délais 2025",
    desc: "Organiser son chantier de rénovation à Paris. Ordre des travaux, coordination artisans, délais réalistes.",
    tag: 'Conseils',
  },
  {
    href: '/blog/renovation-appartement-levallois',
    title: "Rénovation Appartement Levallois-Perret : artisan & prix 2025",
    desc: "Rénover un appartement à Levallois-Perret (92). Immeubles modernes et anciens, finitions premium. Devis 48h.",
    tag: 'Ville',
  },
  {
    href: '/blog/renovation-appartement-versailles',
    title: "Rénovation Appartement Versailles : artisan & prix 2025",
    desc: "Rénover un appartement à Versailles. Patrimoine UNESCO, appartements classés et modernes. Devis 48h.",
    tag: 'Ville',
  },
  {
    href: '/blog/renovation-appartement-saint-germain-en-laye',
    title: "Rénovation Appartement Saint-Germain-en-Laye : artisan & prix 2025",
    desc: "Rénover un appartement à Saint-Germain-en-Laye. Ville royale, appartements premium. Devis gratuit 48h.",
    tag: 'Ville',
  },
  {
    href: '/blog/salle-de-bain-style-industriel-paris',
    title: "Salle de Bain Style Industriel Paris : tendance & prix 2025",
    desc: "Créer une salle de bain style industriel à Paris. Béton, métal, tuyaux apparents, robinetterie. Devis 48h.",
    tag: 'Salle de bain',
  },
  {
    href: '/blog/salle-de-bain-scandinave-paris',
    title: "Salle de Bain Scandinave Paris : style & prix artisan 2025",
    desc: "Aménager une salle de bain scandinave à Paris. Bois clair, carrelage blanc, minimalisme. Devis 48h.",
    tag: 'Salle de bain',
  },
  {
    href: '/blog/cuisine-noir-mat-paris',
    title: "Cuisine Noire Mat Paris : meubles & prix artisan 2025",
    desc: "Créer une cuisine noire mat à Paris. Façades laquées, plan de travail, association couleurs. Devis 48h.",
    tag: 'Cuisine',
  },
  {
    href: '/blog/renovation-salle-de-jeux-adultes-paris',
    title: "Salle de Jeux Adultes Paris : aménagement & prix 2025",
    desc: "Aménager une salle de jeux ou home cinéma à Paris. Insonorisation, éclairage, écran de projection.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/cuisine-bois-paris',
    title: "Cuisine Bois Paris : massif ou plaqué, prix artisan 2025",
    desc: "Cuisine en bois massif ou plaqué à Paris. Ambiance chaleureuse, durabilité, entretien. Devis gratuit 48h.",
    tag: 'Cuisine',
  },
  {
    href: '/blog/renovation-bibliotheque-salon-paris',
    title: "Bibliothèque Sur Mesure Paris : intégrée salon, prix 2025",
    desc: "Bibliothèque intégrée sur mesure dans le salon à Paris. Sol-plafond, bois massif, éclairage intégré.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/renovation-bureau-domicile-paris',
    title: "Bureau à Domicile Paris : aménagement & prix artisan 2025",
    desc: "Aménager un bureau à domicile à Paris. Cloison, éclairage de travail, prises, acoustique. Devis 48h.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/renovation-appartement-montreuil',
    title: "Rénovation Appartement Montreuil : artisan & prix 2025",
    desc: "Rénover un appartement à Montreuil (93). Ville artistique en pleine gentrification. Devis gratuit 48h.",
    tag: 'Ville',
  },
  {
    href: '/blog/renovation-appartement-saint-denis',
    title: "Rénovation Appartement Saint-Denis : artisan & prix 2025",
    desc: "Rénover un appartement à Saint-Denis (93). Ville en transformation, Stade de France. Devis 48h.",
    tag: 'Ville',
  },
  {
    href: '/blog/fenetre-pvc-aluminium-paris',
    title: "Fenêtre PVC ou Aluminium Paris : remplacement & prix 2025",
    desc: "Remplacement fenêtres PVC ou aluminium à Paris. Double/triple vitrage, isolation phonique. Devis 48h.",
    tag: 'Travaux',
  },
  {
    href: '/blog/brise-vue-terrasse-paris',
    title: "Brise-Vue Terrasse Paris : installation & prix artisan 2025",
    desc: "Brise-vue et intimité terrasse à Paris. Bois, bambou, verre dépoli, végétal. Devis gratuit 48h.",
    tag: 'Extérieur',
  },
  {
    href: '/blog/debarras-appartement-paris',
    title: "Débarras Appartement Paris : avant rénovation, prix 2025",
    desc: "Débarras d'appartement avant rénovation à Paris. Vidage encombrants, tri sélectif, bennes. Devis 48h.",
    tag: 'Services',
  },
  {
    href: '/blog/nettoyage-chantier-paris',
    title: "Nettoyage Fin de Chantier Paris : prestation & prix 2025",
    desc: "Nettoyage de fin de chantier à Paris après rénovation. Déchets, dépoussiérage, vitres. Devis 48h.",
    tag: 'Services',
  },
  {
    href: '/blog/renovation-appartement-creteil',
    title: "Rénovation Appartement Créteil : artisan & prix 2025",
    desc: "Rénover un appartement à Créteil (94). Préfecture du Val-de-Marne, immeubles modernes. Devis 48h.",
    tag: 'Ville',
  },
  {
    href: '/blog/renovation-appartement-nanterre',
    title: "Rénovation Appartement Nanterre : artisan & prix 2025",
    desc: "Rénover un appartement à Nanterre (92). Ville universitaire, La Défense. Devis gratuit 48h.",
    tag: 'Ville',
  },
  {
    href: '/blog/renovation-appartement-argenteuil',
    title: "Rénovation Appartement Argenteuil : artisan & prix 2025",
    desc: "Rénover un appartement à Argenteuil (95). Grande ville du Val-d'Oise, parc varié. Devis 48h.",
    tag: 'Ville',
  },
  {
    href: '/blog/peinture-effet-matiere-paris',
    title: "Peinture Effet Matière Paris : chaux, ardoise & prix 2025",
    desc: "Peinture effet matière à Paris (chaux, ardoise, rouille, craie). Techniques et prix artisan 2025.",
    tag: 'Peinture',
  },
  {
    href: '/blog/renovation-appartement-location-saisonniere-paris',
    title: "Rénovation Appartement Location Saisonnière Paris : Airbnb 2025",
    desc: "Rénover un appartement pour location saisonnière Airbnb à Paris. Design, matériaux résistants, budget.",
    tag: 'Investissement',
  },
  {
    href: '/blog/renovation-appartement-melun',
    title: "Rénovation Appartement Melun : artisan & prix 2025",
    desc: "Rénover un appartement à Melun (77). Préfecture Seine-et-Marne, bord de Seine. Devis 48h.",
    tag: 'Ville',
  },
  {
    href: '/blog/renovation-facade-maison-paris',
    title: "Rénovation Façade Maison Paris : ravalement & prix 2025",
    desc: "Ravalement et rénovation façade maison à Paris. Enduit, peinture façade, isolation extérieure. Devis 48h.",
    tag: 'Extérieur',
  },
  {
    href: '/blog/miroir-sur-mesure-paris',
    title: "Miroir Sur Mesure Paris : pose & prix artisan 2025",
    desc: "Pose de miroir sur mesure à Paris. Salle de bain, dressing, salon. Miroir encadré et sur mesure.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/agencement-cuisine-ilot-central-paris',
    title: "Cuisine Îlot Central Paris : agencement & prix artisan 2025",
    desc: "Cuisine avec îlot central à Paris. Conception, dimensions, plomberie intégrée. Devis gratuit 48h.",
    tag: 'Cuisine',
  },
  {
    href: '/blog/chaudiere-condensation-paris',
    title: "Chaudière à Condensation Paris : installation & prix 2025",
    desc: "Remplacement chaudière à condensation à Paris. Gaz, entretien, économies d'énergie. Devis 48h.",
    tag: 'Énergie',
  },
  {
    href: '/blog/escalier-metal-paris',
    title: "Escalier Métal Paris : fabrication & prix artisan 2025",
    desc: "Escalier métal et acier à Paris. Limon central, marches bois, garde-corps. Devis gratuit 48h.",
    tag: 'Travaux',
  },
  {
    href: '/blog/garde-corps-terrasse-paris',
    title: "Garde-Corps Terrasse Paris : métal, verre & prix 2025",
    desc: "Pose garde-corps terrasse à Paris. Métal, verre, inox, aluminium. Normes et prix artisan 2025.",
    tag: 'Extérieur',
  },
  {
    href: '/blog/isolation-sol-appartement-paris',
    title: "Isolation Sol Appartement Paris : chape & prix 2025",
    desc: "Isolation sol appartement Paris. Chape, plancher chauffant, sous-couche isolante. Devis 48h.",
    tag: 'Isolation',
  },
  {
    href: '/blog/pompe-a-chaleur-paris',
    title: "Pompe à Chaleur Paris : installation & prix artisan 2025",
    desc: "Installation pompe à chaleur (PAC) à Paris. Air/air, air/eau, subventions disponibles. Devis 48h.",
    tag: 'Énergie',
  },
  {
    href: '/blog/renovation-appartement-compiegne',
    title: "Rénovation Appartement Compiègne : artisan & prix 2025",
    desc: "Rénover un appartement à Compiègne. Ville historique proche IDF, immeubles anciens. Devis 48h.",
    tag: 'Ville',
  },
  {
    href: '/blog/peinture-boiseries-paris',
    title: "Peinture Boiseries Paris : volets, portes & prix 2025",
    desc: "Peinture boiseries, volets et portes à Paris. Décapage, laque, finitions. Devis gratuit 48h.",
    tag: 'Peinture',
  },
  {
    href: '/blog/renovation-appartement-meuble-paris',
    title: "Rénovation Appartement Meublé Paris : investissement 2025",
    desc: "Rénover un appartement meublé à Paris (location meublée). Mobilier intégré, optimisation, standing.",
    tag: 'Investissement',
  },
  {
    href: '/blog/renovation-colocation-paris',
    title: "Aménagement Colocation Paris : rénovation & prix 2025",
    desc: "Aménager un appartement en colocation à Paris. Chambres indépendantes, SDB partagée. Devis 48h.",
    tag: 'Aménagement',
  },
  {
    href: '/blog/renovation-appartement-asnieres',
    title: "Rénovation Appartement Asnières-sur-Seine : artisan & prix 2025",
    desc: "Rénover un appartement à Asnières-sur-Seine (92). Ville dynamique en bord de Seine. Devis 48h.",
    tag: 'Ville',
  },
  {
    href: '/blog/renovation-pergola-paris',
    title: "Pergola Paris : installation bois ou alu & prix 2025",
    desc: "Installer une pergola à Paris (terrasse, jardin). Bois, aluminium, bioclimatique. Devis gratuit 48h.",
    tag: 'Extérieur',
  },
  {
    href: '/blog/renovation-appartement-colombes',
    title: "Rénovation Appartement Colombes : artisan & prix 2025",
    desc: "Rénover un appartement à Colombes (92). Ville reconvertie proche Paris, forte demande. Devis 48h.",
    tag: 'Ville',
  },
  {
    href: '/blog/renovation-appartement-sartrouville',
    title: "Rénovation Appartement Sartrouville : artisan & prix 2025",
    desc: "Rénover un appartement à Sartrouville (78). Yvelines, proche Paris. Devis gratuit 48h.",
    tag: 'Ville',
  },
  {
    href: '/blog/renovation-appartement-rueil-malmaison',
    title: "Rénovation Appartement Rueil-Malmaison : artisan & prix 2025",
    desc: "Rénover un appartement à Rueil-Malmaison (92). Ville résidentielle haut de gamme. Devis 48h.",
    tag: 'Ville',
  },
  {
    href: '/blog/renovation-maison-individuelle-paris',
    title: "Rénovation Maison Individuelle Paris et IDF : prix 2025",
    desc: "Rénover une maison individuelle à Paris ou en IDF. Spécificités, façade, toiture, cave. Devis 48h.",
    tag: 'Maison',
  },
  {
    href: '/blog/renovation-appartement-hors-dair-eau',
    title: "Rénovation Hors d'Air Hors d'Eau Paris : charpente & toiture 2025",
    desc: "Mise hors d'air hors d'eau avant rénovation intérieure. Charpente, couverture, zinguerie. Devis 48h.",
    tag: 'Travaux',
  },
  {
    href: '/blog/soubassement-mural-paris',
    title: "Soubassement Mural Paris : lambris bas de mur & prix 2025",
    desc: "Soubassement mural à Paris. Lambris bois, PVC, carrelage, boiseries bas de mur. Devis 48h.",
    tag: 'Travaux',
  },
  {
    href: '/blog/renovation-appartement-fontenay-sous-bois',
    title: "Rénovation Appartement Fontenay-sous-Bois : artisan & prix 2025",
    desc: "Rénover un appartement à Fontenay-sous-Bois (94). Ville résidentielle Val-de-Marne. Devis 48h.",
    tag: 'Ville',
  },
]

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1C1C1C] text-center px-4">
        <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-widest mb-3">Conseils & Guides</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Blog Rénovation Paris
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          Prix, matériaux, artisans, réglementations — tout ce qu&apos;il faut savoir pour rénover
          votre appartement à Paris en 2025.
        </p>
      </section>

      {/* Articles grid */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="bg-white rounded-lg p-6 border border-gray-100 hover:border-[#D4AF37]/40 hover:shadow-md transition-all group"
              >
                <span className="inline-block text-[10px] uppercase tracking-widest text-[#B8960C] font-light mb-3">
                  {a.tag}
                </span>
                <h2 className="font-display text-lg font-semibold text-[#1C1C1C] leading-snug mb-3 group-hover:text-[#B8960C] transition-colors">
                  {a.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed font-light mb-4">{a.desc}</p>
                <span className="flex items-center gap-1 text-[#B8960C] text-xs font-light">
                  Lire l&apos;article <ArrowRight size={11} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center px-4">
        <h2 className="font-display text-2xl font-semibold text-[#1C1C1C] mb-3">
          Votre projet de rénovation à Paris
        </h2>
        <p className="text-gray-500 text-sm font-light mb-6 max-w-lg mx-auto">
          Devis gratuit sous 48h — nous intervenons dans tout Paris et l&apos;Île-de-France.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#1C1C1C] text-white px-7 py-3.5 rounded font-light text-sm tracking-wide hover:bg-[#B8960C] transition-colors duration-300"
        >
          Demander un devis <ArrowRight size={13} />
        </Link>
      </section>
    </>
  )
}
