import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShieldCheck, Leaf, Sparkles } from 'lucide-react'
import SEO from '../components/layout/SEO'
import ProductCard from '../components/ui/ProductCard'
import OrganicBlob from '../components/ui/OrganicBlob'
import { getProductBySlug, products } from '../data/products'
import { fadeUp, viewportOnce } from '../hooks/useScrollAnimation'

export default function ProductDetails() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) return <Navigate to="/404" replace />

  const otherProducts = products.filter((p) => p.slug !== slug)

  return (
    <>
      <SEO title={product.name} description={product.description} path={`/shop/${product.slug}`} />

      <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
        <OrganicBlob color={product.color} size={420} className="-right-32 top-0" opacity={0.2} />
        <div className="container-graab relative">
          <nav className="mb-8 flex items-center gap-2 text-sm text-ink/50">
            <Link to="/shop" className="hover:text-ink">Shop</Link>
            <span>/</span>
            <span className="text-ink">{product.name}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Gallery */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="flex flex-col gap-4">
              <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-cream-100">
                <div
                  className="absolute inset-0 opacity-40 blur-3xl"
                  style={{ background: `radial-gradient(circle at 50% 40%, ${product.color}, transparent 65%)` }}
                />
                <img
                  src={product.gallery[activeImage]}
                  alt={`GRAAB ${product.name} bottle`}
                  className="relative z-10 h-full w-full object-contain p-12"
                />
              </div>
              <div className="flex gap-3">
                {product.gallery.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-cream-100 ring-2 transition-all ${
                      activeImage === i ? 'ring-coral' : 'ring-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-contain p-2" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <div>
                {product.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="mr-2 inline-block rounded-pill bg-forest-50 px-3 py-1 text-xs font-semibold text-forest-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="font-heading text-display-md font-bold text-ink text-balance">{product.name}</h1>
              <p className="text-lg text-ink/70">{product.description}</p>

              <div className="flex items-center gap-3">
                <span className="rounded-pill bg-golden-100 px-3 py-1 text-xs font-semibold text-golden-500">
                  {product.size}
                </span>
                <span className="flex items-center gap-1.5 text-sm font-medium text-forest-600">
                  <Sparkles size={14} /> Naturally fermented
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 border-t border-ink/10 pt-6 sm:grid-cols-3">
                {[
                  { icon: Leaf, label: 'Organic & natural' },
                  { icon: ShieldCheck, label: 'Live probiotic cultures' },
                  { icon: Sparkles, label: 'Small-batch brewed' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-ink/60">
                    <Icon size={16} className="text-forest-500" />
                    {label}
                  </div>
                ))}
              </div>

              {/* Ingredients */}
              <div className="border-t border-ink/10 pt-6">
                <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-ink/50">
                  Ingredients
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span key={ing} className="rounded-pill bg-cream-100 px-3 py-1.5 text-sm text-ink/70">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nutrition */}
              <div className="border-t border-ink/10 pt-6">
                <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-ink/50">
                  Nutrition &mdash; {product.nutrition.serving}
                </h3>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
                  {[
                    ['Energy', product.nutrition.energy],
                    ['Protein', product.nutrition.protein],
                    ['Carbohydrate', product.nutrition.carbohydrate],
                    ['Total Sugar', product.nutrition.totalSugar],
                    ['Added Sugar', product.nutrition.addedSugar],
                    ['Fat', product.nutrition.fat],
                    ['Sodium', product.nutrition.sodium],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between border-b border-ink/5 py-1.5 text-sm">
                      <dt className="text-ink/55">{label}</dt>
                      <dd className="font-medium text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream-100">
        <div className="container-graab">
          <h2 className="mb-10 font-heading text-2xl font-bold text-ink">You might also like</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
