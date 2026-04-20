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
