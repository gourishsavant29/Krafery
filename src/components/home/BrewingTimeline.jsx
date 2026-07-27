import { motion } from 'framer-motion'
import { Leaf, FlaskConical, Citrus, Snowflake, GlassWater, Sparkles } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce } from '../../hooks/useScrollAnimation'

export const brewingSteps = [
  { icon: Leaf, title: 'Tea', desc: 'Organic tea leaves are steeped and sweetened with cane sugar to feed the culture.' },
  { icon: FlaskConical, title: 'Fermentation', desc: 'Our SCOBY ferments the sweet tea for days, building live cultures and organic acids.' },
  { icon: Citrus, title: 'Fruit Infusion', desc: 'Real fruit and botanicals are steeped in — pineapple & kaffir, or hibiscus & pomegranate.' },
  { icon: Snowflake, title: 'Cold Conditioning', desc: 'The brew rests cold to settle flavour, sharpen crispness, and build gentle carbonation.' },
  { icon: GlassWater, title: 'Bottling', desc: 'Hand-bottled in small batches, sealed to lock in the live cultures and natural fizz.' },
  { icon: Sparkles, title: 'Enjoy', desc: 'Chilled, poured, and sipped — a living drink, brewed with purpose.' },
]

export default function BrewingTimeline({ dense = false }) {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`relative grid gap-x-8 gap-y-12 sm:grid-cols-2 ${dense ? 'lg:grid-cols-6' : 'lg:grid-cols-3'}`}
    >
      {/* connecting line for large screens */}
      <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent lg:block" />

      {brewingSteps.map(({ icon: Icon, title, desc }, i) => (
        <motion.div key={title} variants={fadeUp} className="relative flex flex-col items-center gap-4 text-center">
          <span className="relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-4 border-cream-50 bg-coral text-white shadow-soft">
            <Icon size={26} strokeWidth={1.75} />
          </span>
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-coral">
            Step {i + 1}
          </span>
          <h3 className="font-heading text-lg font-semibold text-ink">{title}</h3>
          <p className="max-w-[15rem] text-sm leading-relaxed text-ink/60">{desc}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
