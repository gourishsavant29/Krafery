import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Benefits', to: '/benefits' },
  { label: 'Brewing Process', to: '/brewing-process' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useLockBodyScroll(menuOpen)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="container-graab">
          <div
            className={`flex items-center justify-between rounded-pill px-5 py-2.5 transition-all duration-500 ${
              scrolled ? 'glass shadow-glass' : 'bg-transparent'
            }`}
          >
            <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-500">
                <span className="font-display text-sm font-bold text-cream-50">G</span>
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-ink">GRAAB</span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `rounded-pill px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'bg-ink text-cream-50' : 'text-ink/70 hover:bg-ink/5 hover:text-ink'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <Link to="/shop" className="btn-primary hidden lg:inline-flex !py-2.5 !px-5">
                Explore Flavours
              </Link>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-forest-900/98 pt-28 backdrop-blur-lg lg:hidden"
          >
            <nav className="container-graab flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block border-b border-white/10 py-4 font-heading text-2xl font-medium ${
                        isActive ? 'text-coral' : 'text-cream-50'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <Link to="/shop" onClick={() => setMenuOpen(false)} className="btn-primary mt-8 w-full">
                Explore Flavours
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
