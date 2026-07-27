import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../hooks/useScrollAnimation'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex max-w-2xl flex-col gap-4 ${alignment}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${light ? 'text-cream-300' : ''}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-coral" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading text-display-md font-bold text-balance ${
          light ? 'text-cream-50' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? 'text-cream-100/80' : 'text-ink/70'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
