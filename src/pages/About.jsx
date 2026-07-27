import { motion } from 'framer-motion'
import { MapPin, Users, Factory, Sprout } from 'lucide-react'
import SEO from '../components/layout/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import OrganicBlob from '../components/ui/OrganicBlob'
import { fadeUp, staggerContainer, viewportOnce } from '../hooks/useScrollAnimation'

const stats = [
  { icon: Factory, label: 'Brewed in', value: 'Bengaluru' },
  { icon: Users, label: 'Founded by', value: 'Krafery Beverages' },
  { icon: Sprout, label: 'Ingredients', value: 'Organic & Real' },
  { icon: MapPin, label: 'Delivering across', value: 'Bengaluru City' },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="GRAAB Kombucha is handcrafted by Krafery Beverages in Bengaluru — a small team obsessed with real ingredients and honest fermentation."
        path="/about"
      />

      <section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
        <OrganicBlob color="#F3C245" size={420} className="-right-32 -top-10" opacity={0.3} />
        <div className="container-graab relative">
          <SectionHeading
            eyebrow="About GRAAB"
            title="A small Bengaluru team, obsessed with real fermentation."
            description="GRAAB Kombucha is the flagship craft beverage brand of Krafery Beverages — built by people who care more about what's in the bottle than what's on the label."
          />
        </div>
      </section>

      <section className="section-pad bg-cream-100">
        <div className="container-graab">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {stats.map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex flex-col items-center gap-3 rounded-3xl bg-white p-8 text-center shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-50 text-forest-500">
                  <Icon size={22} />
                </span>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink/40">{label}</p>
                <p className="font-heading text-lg font-semibold text-ink">{value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-graab grid gap-14 lg:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="flex flex-col gap-5">
            <h2 className="font-heading text-3xl font-bold text-ink">Who we are</h2>
            <p className="text-base leading-relaxed text-ink/70">
              Krafery Beverages was started with a simple frustration: most "healthy" drinks on
              Indian shelves are anything but. GRAAB is our answer — a kombucha brand built
              around organic tea, live cultures, and real fruit, brewed the way fermentation
              was always meant to be done: slowly, and honestly.
            </p>
            <p className="text-base leading-relaxed text-ink/70">
              We work hands-on across every part of the process — sourcing, brewing, bottling,
              and design — because a craft product deserves a team that actually cares about
              the craft.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="flex flex-col gap-5">
            <h2 className="font-heading text-3xl font-bold text-ink">What we stand for</h2>
            <ul className="flex flex-col gap-4">
              {[
                'Organic ingredients, sourced with intent',
                'Small batches — never mass-produced',
                'Live cultures in every single bottle',
                'Honest labels — no hidden sugars, no shortcuts',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-ink/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  )
}
