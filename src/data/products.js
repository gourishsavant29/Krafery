// Placeholder image paths — replace with real bottle renders / product photography.
// Drop matching files into src/assets/images/products/

export const products = [
  {
    id: 'pineapple-kaffir',
    slug: 'pineapple-kaffir-leaves',
    name: 'Pineapple & Kaffir Leaves',
    tagline: 'Bright, tropical, crisp',
    shortDescription:
      'Bright tropical pineapple blended with aromatic kaffir leaves.',
    description:
      'Bright tropical pineapple blended with aromatic kaffir leaves. Naturally fermented with live cultures for a refreshing, crisp, citrus-inspired kombucha.',
    size: '300ml',
    color: '#F3C245',
    accent: 'golden',
    image: '/src/assets/images/products/pineapple-kaffir.png',
    gallery: [
      '/src/assets/images/products/pineapple-kaffir.png',
      '/src/assets/images/products/pineapple-kaffir-lifestyle-1.png',
      '/src/assets/images/products/pineapple-kaffir-lifestyle-2.png',
    ],
    ingredients: [
      'Filtered Water',
      'Tea Leaves',
      'Organic Cane Sugar',
      'SCOBY',
      'Pineapple',
      'Kaffir Leaves',
    ],
    nutrition: {
      serving: 'Per 100 ml',
      energy: '18 kcal',
      protein: '0.1 g',
      carbohydrate: '4.5 g',
      totalSugar: '3.8 g',
      addedSugar: '0 g',
      fat: '0 g',
      sodium: '8 mg',
    },
    tags: ['Bestseller', 'Citrus-forward'],
  },
  {
    id: 'hibiscus-pomegranate',
    slug: 'hibiscus-pomegranate',
    name: 'Hibiscus & Pomegranate',
    tagline: 'Vibrant, antioxidant-rich',
    shortDescription:
      'A vibrant fusion of hibiscus petals and juicy pomegranate.',
    description:
      'A vibrant fusion of hibiscus petals and juicy pomegranate creating a refreshing antioxidant-rich kombucha.',
    size: '300ml',
    color: '#FF6E63',
    accent: 'coral',
    image: '/src/assets/images/products/hibiscus-promograte.png',
    gallery: [
      '/src/assets/images/products/hibiscus-promograte.png',
      '/src/assets/images/products/hibiscus-pomegranate-lifestyle-1.png',
      '/src/assets/images/products/hibiscus-pomegranate-lifestyle-2.png',
    ],
    ingredients: [
      'Filtered Water',
      'Tea Leaves',
      'Organic Cane Sugar',
      'SCOBY',
      'Hibiscus',
      'Pomegranate',
    ],
    nutrition: {
      serving: 'Per 100 ml',
      energy: '18 kcal',
      protein: '0.1 g',
      carbohydrate: '4.5 g',
      totalSugar: '3.8 g',
      addedSugar: '0 g',
      fat: '0 g',
      sodium: '8 mg',
    },
    tags: ['New', 'Antioxidant-rich'],
  },
]

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug)
