#!/usr/bin/env python3
"""
Génère toutes les photos avec un overlay homogène identique à l'exemple.
Tailles FIXES — indépendantes des dimensions de la photo originale.
"""

from PIL import Image, ImageDraw, ImageFont
import os

PHOTOS_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.path.join(PHOTOS_DIR, "selected")
os.makedirs(OUTPUT_DIR, exist_ok=True)

SELECTION = [
    { "src": "WhatsApp Image 2026-04-19 at 11.42.36.jpeg",     "out": "01-salon-parisien-bibliotheque.jpg",  "lieu": "Paris 7ème · Avenue de Breteuil",         "desc": "Salon & bibliothèque sur-mesure" },
    { "src": "WhatsApp Image 2026-04-19 at 11.42.36 (1).jpeg", "out": "02-bibliotheque-led.jpg",             "lieu": "Paris 16ème · Rue de la Pompe",            "desc": "Bibliothèque éclairée LED" },
    { "src": "WhatsApp Image 2026-04-19 at 11.42.36 (3).jpeg", "out": "03-buffet-led.jpg",                  "lieu": "Paris 8ème · Boulevard Haussmann",         "desc": "Buffet sur-mesure & éclairage intégré" },
    { "src": "WhatsApp Image 2026-04-19 at 11.43.47.jpeg",     "out": "04-terrasse-vue-paris.jpg",          "lieu": "Paris 9ème · Rue La Fayette",             "desc": "Terrasse — lames composite" },
    { "src": "WhatsApp Image 2026-04-19 at 11.43.53.jpeg",     "out": "05-terrasse-ciel-bleu.jpg",          "lieu": "Paris 17ème · Avenue des Ternes",         "desc": "Terrasse — vue dégagée" },
    { "src": "WhatsApp Image 2026-04-19 at 11.47.48 (3).jpeg", "out": "06-salon-eclairage-theatre.jpg",     "lieu": "Paris 6ème · Rue de Vaugirard",           "desc": "Salon — éclairage architectural" },
    { "src": "WhatsApp Image 2026-04-19 at 11.47.48 (4).jpeg", "out": "07-open-space-cuisine.jpg",         "lieu": "Paris 12ème · Avenue Daumesnil",          "desc": "Open space cuisine & séjour" },
    { "src": "WhatsApp Image 2026-04-19 at 11.47.47.jpeg",     "out": "08-couloir-moderne.jpg",            "lieu": "Paris 15ème · Rue de la Convention",      "desc": "Couloir & aménagement global" },
    { "src": "WhatsApp Image 2026-04-19 at 11.47.48 (2).jpeg", "out": "09-chambre-tete-lit.jpg",           "lieu": "Paris 11ème · Boulevard Voltaire",        "desc": "Chambre — tête de lit & dressing" },
    { "src": "WhatsApp Image 2026-04-19 at 11.47.48 (6).jpeg", "out": "10-appartement-globe.jpg",          "lieu": "Paris 3ème · Rue du Temple",              "desc": "Rénovation complète appartement" },
    { "src": "WhatsApp Image 2026-04-19 at 11.47.48 (7).jpeg", "out": "11-chambre-dressing.jpg",           "lieu": "Paris 14ème · Rue d'Alésia",              "desc": "Chambre & dressing intégré" },
    { "src": "WhatsApp Image 2026-04-19 at 11.47.47 (2).jpeg", "out": "12-salle-bain.jpg",                 "lieu": "Paris 10ème · Faubourg Saint-Denis",      "desc": "Salle de bain — carreaux de ciment" },
    { "src": "WhatsApp Image 2026-04-19 at 11.47.48.jpeg",     "out": "13-bureau-dressing.jpg",            "lieu": "Paris 13ème · Avenue de Choisy",          "desc": "Bureau & dressing sur-mesure" },
    { "src": "WhatsApp Image 2026-04-19 at 11.42.37.jpeg",     "out": "14-meuble-tv-beton.jpg",            "lieu": "Paris 5ème · Rue Mouffetard",             "desc": "Meuble TV effet béton ciré" },
    { "src": "WhatsApp Image 2026-04-19 at 11.47.48 (9).jpeg", "out": "15-chambre-niche-led.jpg",          "lieu": "Paris 4ème · Île Saint-Louis",            "desc": "Chambre — niche & rangement éclairé" },
]

# ─── Paramètres FIXES pour overlay homogène ───────────────────────────────
TARGET_WIDTH  = 1400          # toutes les photos normalisées à cette largeur
FONT_SIZE_LIEU = 18           # taille fixe adresse
FONT_SIZE_DESC = 13           # taille fixe description
PAD_X  = 16                   # padding horizontal intérieur
PAD_Y  = 12                   # padding vertical intérieur
BORDER = 3                    # épaisseur trait doré gauche
GAP    = 6                    # espace entre les deux lignes de texte
MARGIN = 20                   # marge depuis le bord de la photo
GOLD   = (212, 175, 55, 240)  # couleur trait doré
BG     = (15, 15, 15, 185)    # fond sombre semi-transparent

font_paths = [
    "/System/Library/Fonts/HelveticaNeue.ttc",
    "/System/Library/Fonts/Helvetica.ttc",
    "/Library/Fonts/Arial.ttf",
    "/System/Library/Fonts/Arial.ttf",
]

def load_font(size):
    for fp in font_paths:
        if os.path.exists(fp):
            try:
                return ImageFont.truetype(fp, size)
            except Exception:
                continue
    return ImageFont.load_default()

font_lieu = load_font(FONT_SIZE_LIEU)
font_desc = load_font(FONT_SIZE_DESC)

def process(src_path, out_path, lieu, desc):
    img = Image.open(src_path).convert("RGB")
    W, H = img.size

    # Normaliser largeur → TARGET_WIDTH
    ratio = TARGET_WIDTH / W
    new_h = int(H * ratio)
    img = img.resize((TARGET_WIDTH, new_h), Image.LANCZOS)
    W, H = img.size

    # Mesurer textes
    dummy = ImageDraw.Draw(img)
    bb_lieu = dummy.textbbox((0, 0), lieu, font=font_lieu)
    bb_desc = dummy.textbbox((0, 0), desc, font=font_desc)
    tw_lieu = bb_lieu[2] - bb_lieu[0]
    tw_desc = bb_desc[2] - bb_desc[0]
    th_lieu = bb_lieu[3] - bb_lieu[1]
    th_desc = bb_desc[3] - bb_desc[1]

    box_w = max(tw_lieu, tw_desc) + PAD_X * 2 + BORDER
    box_h = th_lieu + GAP + th_desc + PAD_Y * 2

    x0 = MARGIN
    y0 = H - MARGIN - box_h

    # Overlay
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)

    # Fond
    d.rectangle([x0, y0, x0 + box_w, y0 + box_h], fill=BG)
    # Trait doré gauche
    d.rectangle([x0, y0, x0 + BORDER, y0 + box_h], fill=GOLD)

    img = img.convert("RGBA")
    img = Image.alpha_composite(img, overlay).convert("RGB")
    draw = ImageDraw.Draw(img)

    tx = x0 + BORDER + PAD_X
    ty_lieu = y0 + PAD_Y
    ty_desc = ty_lieu + th_lieu + GAP

    draw.text((tx, ty_lieu), lieu, font=font_lieu, fill=(255, 255, 255))
    draw.text((tx, ty_desc), desc, font=font_desc, fill=(200, 200, 200))

    img.save(out_path, "JPEG", quality=93)
    print(f"  ✓  {os.path.basename(out_path)}")

print("Génération des photos avec overlay homogène…")
for item in SELECTION:
    src = os.path.join(PHOTOS_DIR, item["src"])
    out = os.path.join(OUTPUT_DIR, item["out"])
    if not os.path.exists(src):
        print(f"  ⚠  Manquant : {item['src']}")
        continue
    process(src, out, item["lieu"], item["desc"])

print(f"\n✅ {len(SELECTION)} photos → {OUTPUT_DIR}")
