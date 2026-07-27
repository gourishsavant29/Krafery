import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../hooks/useScrollAnimation'
import Newsletter from '../ui/Newsletter'
import OrganicBlob from '../ui/OrganicBlob'

export default function NewsletterCTA() {
  return (
    <section className="relative overflow-hidden bg-golden-100 py-20 sm:py-24">
      <OrganicBlob color="#1E5A3A" size={340} className="-left-24 -top-24" opacity={0.12} />
      <OrganicBlob color="#FF6E63" size={280} className="-right-16 bottom-[-6rem]" opacity={0.15} />
      <div className="container-graab relative flex flex-col items-center gap-6 text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <h2 className="font-heading text-display-md font-bold text-balance text-ink">
            Brewed fresh. Delivered to your door.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-ink/70">
            Be first to know about new flavours, small-batch drops, and brewing notes from Bengaluru.
          </p>
        </motion.div>
        <div className="mt-2 flex justify-center">
          <Newsletter />
        </div>
      </div>
    </section>
  )
}
