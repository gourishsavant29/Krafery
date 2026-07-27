# GRAAB Kombucha — Premium Brand Website (Static, No Ordering)

A premium, animated **informational** website for **GRAAB**, the craft
kombucha brand by **Krafery Beverages** (Bengaluru). Built with React 19,
Vite, Tailwind CSS, and Framer Motion.

This is a **static brand/marketing site** — there is no cart, checkout,
pricing, or order flow anywhere on the site. The Shop and Product Details
pages showcase the flavours (ingredients, nutrition, imagery) for browsing
only. People who want to buy or stock GRAAB are directed to the Contact page
or WhatsApp.

## Tech Stack

- **React 19** + **Vite** — fast dev server & build
- **Tailwind CSS** — utility-first styling with a custom GRAAB design token set
- **Framer Motion** — scroll reveals, parallax, page/menu transitions
- **React Router v6** — client-side routing
- **Lucide React** — icon set
- **Swiper** — testimonials carousel
- **React Hook Form** — Newsletter and Contact forms
- **react-helmet-async** — per-page SEO metadata

## Getting Started

```bash
npm install
npm run dev
```

The dev server opens automatically at **http://localhost:5173**.

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project Structure

```
graab-kombucha/
├── index.html                  # HTML shell + global SEO/meta tags + fonts
├── public/
│   ├── favicon.svg
│   └── og-image.jpg            # placeholder — replace with real OG image
├── src/
│   ├── main.jsx                 # app entry (Router, Helmet)
│   ├── App.jsx                  # route definitions
│   ├── assets/images/           # placeholder images — see its own README
│   ├── components/
│   │   ├── layout/              # Navbar, Footer, FloatingWhatsApp,
│   │   │                        # ScrollToTop, SEO
│   │   ├── ui/                  # Button, ProductCard, SectionHeading,
│   │   │                        # Testimonials, Newsletter, OrganicBlob, BubbleField
│   │   └── home/                # Hero, Benefits, WhyKombucha, BrewingTimeline,
│   │                             # BrandStory, FeaturedProducts, NewsletterCTA…
│   ├── pages/                   # Home, About, Shop, ProductDetails, OurStory,
│   │                             # Benefits, BrewingProcess, FAQ, Contact, NotFound
│   ├── data/                    # products.js, testimonials.js, faq.js
│   ├── hooks/                   # useScrollAnimation (Framer Motion variants),
│   │                             # useLockBodyScroll
│   ├── utils/                   # seo.js
│   └── styles/index.css         # Tailwind layers + custom utilities
├── tailwind.config.js            # GRAAB brand tokens (colors, type, radii, motion)
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Brand System

| Token         | Hex       | Tailwind class prefix |
|---------------|-----------|------------------------|
| Coral (primary) | `#FF6E63` | `coral`               |
| Cream           | `#F7D2A3` | `cream`                |
| Deep Blue       | `#1D3FD3` | `blue`                 |
| Dark Green      | `#1E5A3A` | `forest`               |
| Golden Yellow   | `#F3C245` | `golden`               |

**Typography:** Poppins (`font-heading`), Inter (`font-body`), Space Grotesk
(`font-display`) — loaded via Google Fonts in `index.html`.

## Pages & Routes

| Route                     | Page              |
|----------------------------|-------------------|
| `/`                         | Home              |
| `/about`                    | About             |
| `/shop`                     | Shop (browsing only) |
| `/shop/:slug`                | Product Details (browsing only) |
| `/our-story`                 | Our Story         |
| `/benefits`                   | Benefits          |
| `/brewing-process`            | Brewing Process   |
| `/faq`                        | FAQ               |
| `/contact`                    | Contact           |
| `*`                            | 404               |

## Replacing Placeholder Content

- **Images** — everything under `src/assets/images/` is a generated
  placeholder. See `src/assets/images/README.md` for exact file paths,
  dimensions, and where each one is used.
- **Products** — edit `src/data/products.js` to update flavours,
  ingredients, or nutrition info. The Shop, Product Details, and homepage
  featured section all read from this single file.
- **Testimonials / FAQ** — edit `src/data/testimonials.js` and
  `src/data/faq.js`.
- **Contact details** — phone/email/address appear in `Footer.jsx`,
  `Contact.jsx`, and `FloatingWhatsApp.jsx` (WhatsApp number).
- **Newsletter / Contact form submission** — both currently simulate a
  successful submission client-side. Wire `onSubmit` in
  `src/components/ui/Newsletter.jsx` and `src/pages/Contact.jsx` to your
  actual email/CRM endpoint if you want real submissions.

## Notes

- No cart, pricing, or checkout exists anywhere in the codebase — the Shop
  and Product Details pages are purely informational.
- All animations respect `prefers-reduced-motion`.
- The site is fully responsive from mobile (375px) through large desktop.

## Turning ordering back on later

If you ever want to re-add ecommerce functionality, the cleanest approach is
a fresh `CartContext` + cart drawer + pricing fields on `products.js` — this
version was deliberately built without any of that wiring, so there's
nothing to strip out first.
