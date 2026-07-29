import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp, viewportOnce } from '../../hooks/useScrollAnimation'
import OrganicBlob from '../ui/OrganicBlob'

const pillars = ['Small Batches', 'Naturally Fizzy', 'Real Ingredients', 'Real People', 'Real Impact']

export default function BrandStory() {
  return (
    <section className="section-pad relative overflow-hidden bg-coral-50">
      <OrganicBlob color="#FF6E63" size={460} className="-right-40 top-0" opacity={0.18} />
      <div className="container-graab relative grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative order-2 aspect-square lg:order-1"
        >
          <div className="absolute inset-6 rounded-organic border-2 border-dashed border-forest-500/30" />
          <img
            src="/images/hero/graab-brewing-lifestyle.png"
            alt="GRAAB kombucha brewing process — organic tea and SCOBY"
            className="relative z-10 h-full w-full rounded-blob object-cover shadow-lift"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="order-1 flex flex-col gap-6 lg:order-2"
        >
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" /> Our Belief
          </span>
          <h2 className="font-heading text-display-md font-bold text-balance text-ink">
            Good health starts with what&rsquo;s real.
          </h2>
          <p className="text-lg leading-relaxed text-ink/70">
            At GRAAB Kombucha we believe good health starts with what&rsquo;s real. Every
            bottle is handcrafted using organic tea, SCOBY, and carefully selected
            botanicals. We brew in small batches.
          </p>

          <ul className="flex flex-wrap gap-3">
            {pillars.map((p) => (
              <li
                key={p}
                className="rounded-pill border border-forest-500/20 bg-white/60 px-4 py-2 text-sm font-medium text-forest-600"
              >
                {p}
              </li>
            ))}
          </ul>

          <Link
            to="/our-story"
            className="inline-flex w-fit items-center gap-1.5 font-semibold text-coral-700 transition-colors hover:text-coral-800"
          >
            Read our full story
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
