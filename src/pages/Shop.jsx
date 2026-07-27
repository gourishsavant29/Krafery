import { motion } from 'framer-motion'
import SEO from '../components/layout/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import ProductCard from '../components/ui/ProductCard'
import OrganicBlob from '../components/ui/OrganicBlob'
import { products } from '../data/products'
import { fadeUp, viewportOnce } from '../hooks/useScrollAnimation'

export default function Shop() {
  return (
    <>
      <SEO
        title="Shop"
        description="Shop GRAAB's small-batch kombucha lineup — Pineapple & Kaffir Leaves and Hibiscus & Pomegranate. Naturally fermented, organic, live-culture kombucha delivered across Bengaluru."
        path="/shop"
      />

      <section className="relative overflow-hidden pb-12 pt-40 sm:pt-48">
        <OrganicBlob color="#FF6E63" size={400} className="-left-32 -top-10" opacity={0.2} />
        <div className="container-graab relative">
          <SectionHeading
            eyebrow="Shop GRAAB"
            title="The current lineup"
            description="Two naturally fermented flavours, brewed in small batches. More on the way — brewed one culture at a time."
          />
        </div>
      </section>

      <section className="pb-28">
        <div className="container-graab">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2"
          >
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
