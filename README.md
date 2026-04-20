# Carré Traiteur — Site Web One Page

Site internet one-page pour **Carré Traiteur**, charcutier-traiteur artisanal à Orléans.

## Structure du projet

```
carre-traiteur/
├── index.html          ← Page principale
├── css/
│   └── style.css       ← Styles (charte graphique complète)
├── js/
│   └── main.js         ← Interactions (navbar, reveal, lightbox)
├── images/
│   └── logo.jpg        ← Logo Carré Traiteur (à placer ici)
└── README.md
```

## ⚠️ Logo

Placez le fichier du logo dans `images/logo.jpg`.
Le logo doit être sur fond blanc ou transparent pour un meilleur rendu
(il sera rendu en blanc sur le fond sombre de la navigation et du footer).

## Charte graphique appliquée

- **Couleurs principales** : Deep Charcoal `#1C1C1E` · Off-White `#F5F0E8` · Warm Gold `#B08D57`
- **Couleurs accent** : Terracotta `#C0614A` · Elegant Gray `#A3A3A5`
- **Typographies** :
  - Titres : Playfair Display (Google Fonts)
  - Corps : Montserrat Light / Regular (Google Fonts)
- **Signature** : Savoir-faire artisanal (italique serif)

## Sections

1. **Navigation** — sticky, devient opaque au scroll
2. **Hero** — plein écran avec image de fond + animation zoom
3. **Notre Histoire** — texte + images empilées
4. **Savoir-Faire** — 3 cartes (charcuterie, plats, traiteur)
5. **Prix Remportés** — liste + mosaïque photos
6. **Nos Prestations** — blocs alternés (cocktails, brasero, foires)
7. **Galerie** — grille avec lightbox au clic
8. **Contact** — 3 cartes + carte Google Maps
9. **Footer** — logo, liens, copyright

## Pour modifier dans VS Code

- Modifier les textes directement dans `index.html`
- Modifier les couleurs dans les variables CSS (`css/style.css`, lignes 10-20)
- Remplacer les URLs d'images par vos propres images si besoin
- Le site est **responsive** (mobile, tablette, desktop)

## Technologies utilisées

- HTML5 sémantique
- CSS3 (variables, Grid, Flexbox, animations)
- JavaScript vanilla (aucune dépendance)
- Google Fonts (Playfair Display + Montserrat)
- Images hébergées sur le CDN Zyrosite (site actuel)
