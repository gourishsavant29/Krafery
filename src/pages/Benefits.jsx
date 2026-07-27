import { motion } from 'framer-motion'
import SEO from '../components/layout/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import OrganicBlob from '../components/ui/OrganicBlob'
import Benefits from '../components/home/Benefits'
import { fadeUp, staggerContainer, viewportOnce } from '../hooks/useScrollAnimation'

const nutritionRows = [
  ['Energy', '18 kcal'],
  ['Protein', '0.1 g'],
  ['Carbohydrate', '4.5 g'],
  ['Total Sugar', '3.8 g'],
  ['Added Sugar', '0 g'],
  ['Fat', '0 g'],
  ['Sodium', '8 mg'],
]

export default function BenefitsPage() {
  return (
    <>
      <SEO
        title="Benefits"
        description="Why GRAAB kombucha is good for your gut — live probiotics, organic ingredients, antioxidants, and zero artificial flavours."
        path="/benefits"
      />

      <section className="relative overflow-hidden pb-8 pt-40 sm:pt-48">
        <OrganicBlob color="#1D3FD3" size={380} className="-right-32 -top-10" opacity={0.1} />
        <div className="container-graab relative">
          <SectionHeading
            eyebrow="Benefits"
            title="What every bottle brings to the table"
            description="Kombucha isn't a trend for us — it's a functional, fermented drink with real, tastable benefits."
          />
        </div>
      </section>

      <Benefits />

      <section className="section-pad">
        <div className="container-graab grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="flex flex-col gap-5">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" /> Nutrition
            </span>
            <h2 className="font-heading text-3xl font-bold text-balance text-ink">
              Honest numbers, straight off the label
            </h2>
            <p className="text-base leading-relaxed text-ink/70">
              No added sugar, no fat, and a light natural fizz — every GRAAB bottle is brewed
              to be genuinely light, not just marketed that way.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="overflow-hidden rounded-3xl bg-white shadow-soft"
          >
            <div className="bg-forest-500 px-6 py-4 text-cream-50">
              <p className="font-heading text-sm font-semibold uppercase tracking-wide">Per 100 ml</p>
            </div>
            <dl>
              {nutritionRows.map(([label, value], i) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className={`flex items-center justify-between px-6 py-3.5 text-sm ${
                    i % 2 === 0 ? 'bg-cream-50/60' : ''
                  }`}
                >
                  <dt className="text-ink/60">{label}</dt>
                  <dd className="font-semibold text-ink">{value}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>
    </>
  )
}
