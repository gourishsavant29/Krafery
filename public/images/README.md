# GRAAB Image Assets

This folder holds every image the site references. All files here are
lightweight generated **placeholders** — replace them with real bottle
renders and product photography, keeping the same filenames (or update the
paths in `src/data/products.js` and the relevant page/component files).

## Structure

```
images/
├── hero/
│   ├── graab-hero-bottles.png         → Homepage hero, both bottles together
│   └── graab-brewing-lifestyle.png    → "Our Belief" section on the homepage
├── brewing/
│   ├── graab-scoby-jars.png           → Our Story page, SCOBY/tea imagery
│   └── graab-fermentation-tanks.png   → Brewing Process page
├── products/
│   ├── pineapple-kaffir-bottle.png
│   ├── pineapple-kaffir-lifestyle-1.png
│   ├── pineapple-kaffir-lifestyle-2.png
│   ├── hibiscus-pomegranate-bottle.png
│   ├── hibiscus-pomegranate-lifestyle-1.png
│   └── hibiscus-pomegranate-lifestyle-2.png
├── testimonials/
│   └── avatar-1.png … avatar-4.png    → Referenced in src/data/testimonials.js
└── icons/ , illustrations/            → Empty, reserved for future organic
                                          illustrations / custom iconography
```

## Recommended specs when replacing

- **Bottle shots** (`*-bottle.png`): transparent or near-white background,
  min. 1200×1500px, PNG with alpha if possible — the UI already applies its
  own colored glow/blur behind the bottle.
- **Lifestyle shots** (`*-lifestyle-*.png`): 1200×1500px, JPG or PNG.
- **Hero images**: 1600×2000px for crisp rendering on large screens.
- Keep file sizes reasonable (<400KB per image) — consider `.webp` for
  production and updating the `src` attributes accordingly.
