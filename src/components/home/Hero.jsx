import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown, Leaf } from 'lucide-react'
import Button from '../ui/Button'
import OrganicBlob from '../ui/OrganicBlob'
import BubbleField from '../ui/BubbleField'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const bottleY = useTransform(scrollYProgress, [0, 1], [0, 160])
  const bottleRotate = useTransform(scrollYProgress, [0, 1], [0, 8])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
      {/* Ambient organic backdrop */}
      <OrganicBlob color="#F7D2A3" size={520} className="-left-40 -top-20 animate-float-slow" opacity={0.6} />
      <OrganicBlob color="#FF6E63" size={380} className="-right-32 top-40 animate-float" opacity={0.25} />
      <OrganicBlob color="#1E5A3A" size={300} className="bottom-0 left-1/3 animate-float-slow" opacity={0.12} />
      <BubbleField className="right-[8%] top-0 hidden w-40 lg:block" />

      <div className="container-graab relative grid items-center gap-16 lg:grid-cols-2">
        <motion.div style={{ y: textY, opacity }} className="flex flex-col gap-7">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow w-fit rounded-pill bg-forest-50 px-4 py-2"
          >
            <Leaf size={14} /> Small-batch &middot; Bengaluru
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-display-xl font-extrabold uppercase leading-[0.92] tracking-tight text-ink text-balance"
          >
            Crafted by
            <br />
            <span className="text-coral">Nature.</span>
            <br />
            Brewed with
            <br />
            <span className="text-forest-500">Purpose.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="max-w-md text-lg leading-relaxed text-ink/70"
          >
            Premium handcrafted kombucha brewed in small batches using organic
            ingredients and live cultures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button to="/shop" variant="primary">
              Explore Flavours
            </Button>
            <Button to="/our-story" variant="secondary">
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: bottleY, rotate: bottleRotate }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-[3/4] w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-organic bg-gradient-to-br from-coral-100 via-cream-200 to-golden-100" />
          <img
            src="/src/assets/images/hero/graab-hero-bottles.png"
            alt="GRAAB Kombucha bottles — Pineapple & Kaffir Leaves and Hibiscus & Pomegranate"
            className="relative z-10 h-full w-full object-contain p-8 drop-shadow-2xl"
          />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="mt-16 flex justify-center text-ink/30"
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  )
}
