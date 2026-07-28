import { Link } from 'react-router-dom'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import Newsletter from '../ui/Newsletter'

const shopLinks = [
  { label: 'Pineapple & Kaffir Leaves', to: '/shop/pineapple-kaffir-leaves' },
  { label: 'Hibiscus & Pomegranate', to: '/shop/hibiscus-pomegranate' },
  { label: 'All Products', to: '/shop' },
]

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Benefits', to: '/benefits' },
  { label: 'Brewing Process', to: '/brewing-process' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-900 text-cream-50">
      <div className="container-graab section-pad">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral">
                <span className="font-display text-sm font-bold text-white">G</span>
              </span>
              <span className="font-display text-lg font-bold tracking-tight">GRAAB</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-cream-100/70">
              Handcrafted, small-batch kombucha brewed with organic ingredients and live cultures —
              by Krafery Beverages, Bengaluru.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GRAAB on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-coral"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GRAAB on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-coral"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-wide text-cream-100/50">
              Shop
            </h3>
            <ul className="flex flex-col gap-3">
              {shopLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-cream-100/80 transition-colors hover:text-coral">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-wide text-cream-100/50">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-cream-100/80 transition-colors hover:text-coral">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-wide text-cream-100/50">
              Stay in the loop
            </h3>
            <p className="mb-4 text-sm text-cream-100/70">
              New flavours, brewing notes, and small-batch drops — straight to your inbox.
            </p>
            <Newsletter light />

            <div className="mt-8 flex flex-col gap-3 text-sm text-cream-100/80">
              <a href="mailto:contact@krafery.com" className="flex items-center gap-2 hover:text-coral">
                <Mail size={16} /> contact@krafery.com
              </a>
              <a href="tel:+918310942465" className="flex items-center gap-2 hover:text-coral">
                <Phone size={16} /> +91 8310942465
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} /> Bengaluru, Karnataka
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-cream-100/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Krafery Beverages. All rights reserved.</p>
          <p>Bengaluru, India — Brewed in small batches.</p>
        </div>
      </div>
    </footer>
  )
}
