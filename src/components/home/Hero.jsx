import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowDown, Leaf, X } from 'lucide-react'
import Button from '../ui/Button'
import OrganicBlob from '../ui/OrganicBlob'
import BubbleField from '../ui/BubbleField'

const BOTTLE_IMG = '/src/assets/images/hero/Graab bottles.png'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const [isOpen, setIsOpen] = useState(false)

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] overflow-hidden pb-16 pt-36 sm:pt-44"
    >
      {/* Full background image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <img
          src={BOTTLE_IMG}
          alt="GRAAB Kombucha bottles — Pineapple & Kaffir Leaves and Hibiscus & Pomegranate"
          onClick={() => setIsOpen(true)}
          className="h-full w-full cursor-pointer object-cover object-center"
        />
        {/* Scrim so the text stays readable over the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream-100 via-cream-100/85 to-cream-100/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-100/60 via-transparent to-transparent" />
      </motion.div>

      {/* Ambient organic backdrop, on top of the scrim for extra texture */}
      <OrganicBlob color="#F7D2A3" size={520} className="-left-40 -top-20 animate-float-slow" opacity={0.5} />
      <OrganicBlob color="#FF6E63" size={380} className="-right-32 top-40 animate-float" opacity={0.15} />
      <OrganicBlob color="#1E5A3A" size={300} className="bottom-0 left-1/3 animate-float-slow" opacity={0.1} />
      <BubbleField className="right-[8%] top-0 hidden w-40 lg:block" />

      <div className="container-graab relative">
        <motion.div style={{ y: textY, opacity }} className="flex max-w-2xl flex-col gap-7">
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
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="relative mt-16 flex justify-center text-ink/30"
      >
        <ArrowDown size={22} />
      </motion.div>

      {/* Popup / lightbox with rotation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-6 backdrop-blur-sm"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <motion.img
              src={BOTTLE_IMG}
              alt="GRAAB Kombucha bottles — Pineapple & Kaffir Leaves and Hibiscus & Pomegranate"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.6, rotate: 0, opacity: 0 }}
              animate={{ scale: 1, rotate: 360, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-[80vh] max-w-[90vw] object-contain drop-shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}