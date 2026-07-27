import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp, viewportOnce } from '../../hooks/useScrollAnimation'

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-soft transition-shadow duration-500 hover:shadow-lift"
    >
      <Link to={`/shop/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-cream-100">
        <div
          className="absolute inset-0 opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
          style={{ background: `radial-gradient(circle at 50% 40%, ${product.color}, transparent 65%)` }}
        />
        <img
          src={product.image}
          alt={`GRAAB ${product.name} kombucha bottle`}
          loading="lazy"
          className="relative z-10 h-full w-full object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-rotate-2"
        />
        {product.tags?.[0] && (
          <span className="absolute left-4 top-4 z-20 rounded-pill bg-ink/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream-50">
            {product.tags[0]}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-heading text-lg font-semibold text-ink">{product.name}</h3>
            <p className="text-sm text-ink/60">{product.tagline}</p>
          </div>
          <span className="whitespace-nowrap rounded-pill bg-forest-50 px-2.5 py-1 text-xs font-semibold text-forest-500">
            {product.size}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-ink/70">{product.shortDescription}</p>

        <div className="mt-auto flex items-center justify-end pt-3">
          <Link
            to={`/shop/${product.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-coral-700 transition-colors hover:text-coral-800"
          >
            View Details
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
