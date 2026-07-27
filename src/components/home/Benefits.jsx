import { motion } from 'framer-motion'
import { Hand, Heart, Sparkles, Leaf, Zap, ShieldCheck, Ban, CircleOff } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { fadeUp, staggerContainer, viewportOnce } from '../../hooks/useScrollAnimation'

export const benefits = [
  { icon: Hand, title: 'Handcrafted', desc: 'Brewed in small batches, bottle by bottle.' },
  { icon: Heart, title: 'Gut Friendly', desc: 'Supports a balanced, happy gut microbiome.' },
  { icon: Sparkles, title: 'Live Probiotics', desc: 'Alive with cultures from real fermentation.' },
  { icon: Leaf, title: 'Organic Ingredients', desc: 'Real tea, fruit, and botanicals — nothing else.' },
  { icon: Zap, title: 'Naturally Energizing', desc: 'A gentle lift, without the crash.' },
  { icon: ShieldCheck, title: 'Rich in Antioxidants', desc: 'Botanicals that do more than just taste good.' },
  { icon: Ban, title: 'Zero Artificial Flavours', desc: 'Flavour comes from real fruit, always.' },
  { icon: CircleOff, title: 'No Added CO\u2082', desc: 'Fizz is 100% naturally fermented.' },
]

export default function Benefits() {
  return (
    <section className="section-pad relative bg-cream-100">
      <div className="container-graab">
        <SectionHeading
          eyebrow="Why GRAAB"
          title="Good for your gut. Good, period."
          description="Every bottle is brewed to deliver real benefits — not just a nice label."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {benefits.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-soft transition-shadow hover:shadow-lift"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-50 text-forest-500 transition-colors group-hover:bg-coral group-hover:text-white">
                <Icon size={22} />
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold text-ink">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/60">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
