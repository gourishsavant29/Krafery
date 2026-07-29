import { motion } from 'framer-motion'
import SEO from '../components/layout/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import OrganicBlob from '../components/ui/OrganicBlob'
import BubbleField from '../components/ui/BubbleField'
import BrewingTimeline from '../components/home/BrewingTimeline'
import Button from '../components/ui/Button'
import { fadeUp, viewportOnce } from '../hooks/useScrollAnimation'

export default function BrewingProcess() {
  return (
    <>
      <SEO
        title="Brewing Process"
        description="From tea to bottle — how GRAAB kombucha is naturally fermented, fruit-infused, cold conditioned, and hand-bottled in Bengaluru."
        path="/brewing-process"
      />

      <section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
        <OrganicBlob color="#1E5A3A" size={420} className="-left-32 -top-10" opacity={0.15} />
        <BubbleField className="right-10 top-0 hidden w-32 lg:block" />
        <div className="container-graab relative">
          <SectionHeading
            eyebrow="How It's Made"
            title="Six stages. One living drink."
            description="Nothing about GRAAB is rushed. Every bottle passes through the same six deliberate stages before it reaches you."
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-graab">
          <BrewingTimeline dense />
        </div>
      </section>

      <section className="section-pad bg-forest-900 text-cream-50">
        <div className="container-graab grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="relative aspect-square">
            <div className="absolute inset-0 rounded-organic bg-gradient-to-br from-coral-500/20 via-golden-400/15 to-forest-400/20" />
            <img
              src="/images/brewing/graab-fermentation-tanks.png"
              alt="GRAAB kombucha fermentation vessels"
              className="relative z-10 h-full w-full object-contain p-10"
            />
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="flex flex-col gap-5">
            <span className="eyebrow text-cream-300">
              <span className="h-1.5 w-1.5 rounded-full bg-golden-400" /> Patience, Bottled
            </span>
            <h2 className="font-heading text-3xl font-bold text-balance">
              Fermentation can&rsquo;t be rushed — so we don&rsquo;t try to.
            </h2>
            <p className="text-base leading-relaxed text-cream-100/70">
              Each batch ferments on its own timeline, tasted along the way until the balance
              of tart, sweet, and fizz is exactly right. It&rsquo;s slower than mass production
              — that&rsquo;s the point.
            </p>
            <Button to="/shop" variant="primary" className="w-fit">
              Taste the result
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
