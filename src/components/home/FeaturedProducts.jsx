import { products } from '../../data/products'
import SectionHeading from '../ui/SectionHeading'
import ProductCard from '../ui/ProductCard'
import Button from '../ui/Button'

export default function FeaturedProducts() {
  return (
    <section className="section-pad">
      <div className="container-graab">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="The Lineup"
            title="Two flavours. Zero compromises."
            description="Every bottle is naturally fermented, hand-bottled, and brewed in small batches in Bengaluru."
          />
          <Button to="/shop" variant="secondary" className="shrink-0">
            View All
          </Button>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
