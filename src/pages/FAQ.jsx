import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SEO from '../components/layout/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import OrganicBlob from '../components/ui/OrganicBlob'
import { faqCategories } from '../data/faq'
import { fadeUp, viewportOnce } from '../hooks/useScrollAnimation'

function AccordionItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-soft">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-heading text-base font-semibold text-ink">{q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream-100 text-ink/60"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-ink/65">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openKey, setOpenKey] = useState('About Kombucha-0')

  return (
    <>
      <SEO
        title="FAQ"
        description="Answers to common questions about GRAAB kombucha — ingredients, caffeine, alcohol content, storage, shelf life, and delivery across Bengaluru."
        path="/faq"
      />

      <section className="relative overflow-hidden pb-12 pt-40 sm:pt-48">
        <OrganicBlob color="#F3C245" size={360} className="-right-28 -top-10" opacity={0.25} />
        <div className="container-graab relative">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered"
            description="Everything you'd want to know before your first bottle — and a few things you didn't know to ask."
          />
        </div>
      </section>

      <section className="section-pad pt-4">
        <div className="container-graab flex flex-col gap-14">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="mb-6 font-heading text-xl font-bold text-forest-600"
              >
                {cat.category}
              </motion.h2>
              <div className="flex flex-col gap-3">
                {cat.items.map((item, i) => {
                  const key = `${cat.category}-${i}`
                  return (
                    <AccordionItem
                      key={key}
                      q={item.q}
                      a={item.a}
                      isOpen={openKey === key}
                      onToggle={() => setOpenKey(openKey === key ? null : key)}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
