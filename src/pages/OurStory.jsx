import { motion } from 'framer-motion'
import SEO from '../components/layout/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import OrganicBlob from '../components/ui/OrganicBlob'
import Button from '../components/ui/Button'
import { fadeUp, staggerContainer, viewportOnce } from '../hooks/useScrollAnimation'

const pillars = [
  {
    title: 'Small batches',
    desc: 'We brew in volumes we can actually taste-test and stand behind — never scaled past what we can vouch for.',
  },
  {
    title: 'Naturally fizzy',
    desc: 'Every bubble comes from live fermentation. No added CO\u2082, no shortcuts to carbonation.',
  },
  {
    title: 'Real ingredients',
    desc: 'Organic tea, real fruit, real botanicals. If it isn\u2019t something you\u2019d recognise, it isn\u2019t in the bottle.',
  },
  {
    title: 'Real people',
    desc: 'A small, hands-on team in Bengaluru — sourcing, brewing, bottling, and tasting every batch ourselves.',
  },
  {
    title: 'Real impact',
    desc: 'Better gut health, honest labels, and a supply chain we can trace back to the source.',
  },
]

export default function OurStory() {
  return (
    <>
      <SEO
        title="Our Story"
        description="At GRAAB Kombucha we believe good health starts with what's real. Discover the story behind Krafery Beverages and our small-batch kombucha."
        path="/our-story"
      />

      <section className="relative overflow-hidden pb-20 pt-40 sm:pt-48">
        <OrganicBlob color="#1E5A3A" size={460} className="-left-40 -top-10" opacity={0.15} />
        <OrganicBlob color="#F3C245" size={300} className="-right-24 top-40" opacity={0.25} />
        <div className="container-graab relative">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-3xl text-center"
          >
            <span className="eyebrow justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" /> Our Story
            </span>
            <h1 className="mt-4 font-heading text-display-lg font-bold text-balance text-ink">
              Good health starts with what&rsquo;s real.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              Every bottle of GRAAB is handcrafted using organic tea, SCOBY, and carefully
              selected botanicals. We brew in small batches, because trust is built one bottle
              at a time.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-cream-100">
        <div className="container-graab">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-blob shadow-lift">
                <img
                  src="/src/assets/images/brewing/graab-scoby-jars.png"
                  alt="Organic tea and SCOBY cultures used to brew GRAAB kombucha"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="flex flex-col gap-6"
            >
              <h2 className="font-heading text-3xl font-bold text-ink">How it began</h2>
              <p className="text-base leading-relaxed text-ink/70">
                Krafery Beverages started with a simple question: why does "healthy" so often
                mean bland, or worse, dishonest? We set out to brew a kombucha that didn&rsquo;t
                cut corners — real fermentation, real fruit, real transparency about what goes
                into every bottle.
              </p>
              <p className="text-base leading-relaxed text-ink/70">
                What began as small test batches in Bengaluru has grown into GRAAB — still
                brewed by hand, still tasted by the same people who started it, still committed
                to the same five things that matter.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-graab">
          <SectionHeading eyebrow="What We Stand For" title="Five things we never compromise on" align="center" />

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-soft"
              >
                <span className="font-display text-sm font-bold text-coral">0{i + 1}</span>
                <h3 className="font-heading text-lg font-semibold text-ink">{p.title}</h3>
                <p className="text-sm leading-relaxed text-ink/60">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-forest-900 text-cream-50">
        <div className="container-graab flex flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-display-md font-bold text-balance">Taste the difference real makes.</h2>
          <Button to="/shop" variant="primary">
            Shop the lineup
          </Button>
        </div>
      </section>
    </>
  )
}
