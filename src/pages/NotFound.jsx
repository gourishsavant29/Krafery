import { motion } from 'framer-motion'
import { Home, ShoppingBag } from 'lucide-react'
import SEO from '../components/layout/SEO'
import Button from '../components/ui/Button'
import OrganicBlob from '../components/ui/OrganicBlob'
import BubbleField from '../components/ui/BubbleField'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for has fermented away." path="/404" />

      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-32">
        <OrganicBlob color="#FF6E63" size={480} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" opacity={0.15} />
        <BubbleField className="left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2" />

        <div className="container-graab relative flex flex-col items-center gap-6 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="font-display text-display-xl font-extrabold text-coral"
          >
            404
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-heading text-3xl font-bold text-balance text-ink sm:text-4xl"
          >
            This batch fermented a little too far.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="max-w-md text-base text-ink/60"
          >
            The page you&rsquo;re looking for doesn&rsquo;t exist, or it&rsquo;s been moved.
            Let&rsquo;s get you back to something real.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button to="/" variant="primary" icon={Home}>
              Back Home
            </Button>
            <Button to="/shop" variant="secondary" icon={ShoppingBag}>
              Shop Kombucha
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
