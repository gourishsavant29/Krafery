import { motion } from 'framer-motion'
import { Droplets, FlaskConical, Sprout } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import OrganicBlob from '../ui/OrganicBlob'
import { fadeUp, staggerContainer, viewportOnce } from '../../hooks/useScrollAnimation'

const explainers = [
  {
    icon: Droplets,
    title: 'Start with tea',
    desc: 'Organic tea leaves are steeped and sweetened with cane sugar — the food our culture needs to work.',
    color: 'bg-golden-100 text-golden-500',
  },
  {
    icon: FlaskConical,
    title: 'Live fermentation',
    desc: 'A SCOBY transforms the sweet tea over days, producing organic acids, live cultures, and natural fizz.',
    color: 'bg-forest-100 text-forest-500',
  },
  {
    icon: Sprout,
    title: 'Real infusion',
    desc: 'Real fruit and botanicals are added post-ferment for flavour — never syrups, never concentrates.',
    color: 'bg-coral-100 text-coral-600',
  },
]

export default function WhyKombucha() {
  return (
    <section className="section-pad relative overflow-hidden">
      <OrganicBlob color="#1D3FD3" size={340} className="-left-24 top-10 hidden lg:block" opacity={0.08} />
      <div className="container-graab">
        <SectionHeading
          eyebrow="Why Kombucha"
          title="A living drink, brewed the old way"
          description="Kombucha isn't just fizzy tea — it's a centuries-old fermentation craft that turns simple ingredients into something alive."
          align="center"
        />

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {explainers.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div key={title} variants={fadeUp} className="relative flex flex-col items-center gap-5 text-center">
              <div className={`relative flex h-24 w-24 items-center justify-center rounded-organic ${color}`}>
                <Icon size={36} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink">{title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-ink/65">{desc}</p>
              {i < explainers.length - 1 && (
                <span className="absolute right-[-1.5rem] top-12 hidden text-2xl text-ink/15 md:block">&rarr;</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
