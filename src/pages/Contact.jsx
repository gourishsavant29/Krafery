import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import SEO from '../components/layout/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import OrganicBlob from '../components/ui/OrganicBlob'

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'contact@krafery.com', href: 'mailto:contact@krafery.com' },
  { icon: Phone, label: 'Phone', value: '+91 83109 42465', href: 'tel:+918310942465' },
  { icon: MapPin, label: 'Location', value: 'Bengaluru, Karnataka', href: null },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600))
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Krafery Beverages — GRAAB Kombucha, Bengaluru. Email contact@krafery.com or call +91 83109 42465."
        path="/contact"
      />

      <section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
        <OrganicBlob color="#1D3FD3" size={400} className="-left-32 -top-10" opacity={0.1} />
        <div className="container-graab relative">
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk kombucha"
            description="Questions about flavours, stockist partnerships, or where to find us? We'd love to hear from you."
          />
        </div>
      </section>

      <section className="pb-28">
        <div className="container-graab grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col gap-6">
            {contactDetails.map(({ icon: Icon, label, value, href }) => {
              const Wrapper = href ? 'a' : 'div'
              return (
                <Wrapper
                  key={label}
                  {...(href ? { href } : {})}
                  className="flex items-center gap-4 rounded-3xl bg-white p-6 shadow-soft transition-shadow hover:shadow-lift"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest-50 text-forest-500">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-ink/40">{label}</p>
                    <p className="font-heading text-base font-semibold text-ink">{value}</p>
                  </div>
                </Wrapper>
              )
            })}

            <div className="rounded-3xl bg-forest-900 p-6 text-cream-50">
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-cream-100/60">
                Krafery Beverages
              </p>
              <p className="mt-2 text-sm leading-relaxed text-cream-100/80">
                Makers of GRAAB Kombucha. Brewed in small batches, delivered fresh across
                Bengaluru.
              </p>
            </div>
          </div>

          <div className="relative rounded-[2rem] bg-white p-8 shadow-soft sm:p-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex h-full min-h-[320px] flex-col items-center justify-center gap-4 text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forest-50 text-forest-500">
                    <CheckCircle2 size={32} />
                  </span>
                  <h3 className="font-heading text-xl font-bold text-ink">Message sent!</h3>
                  <p className="max-w-xs text-sm text-ink/60">
                    Thanks for reaching out — our team will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="flex flex-col gap-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-ink/70">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="rounded-xl border border-ink/10 px-4 py-3 text-sm outline-none transition-colors focus:border-forest-500"
                        {...register('name', { required: true })}
                      />
                      {errors.name && <span className="text-xs text-coral-700">Please enter your name.</span>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-ink/70">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="rounded-xl border border-ink/10 px-4 py-3 text-sm outline-none transition-colors focus:border-forest-500"
                        {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                      />
                      {errors.email && <span className="text-xs text-coral-700">Enter a valid email.</span>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-ink/70">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="rounded-xl border border-ink/10 px-4 py-3 text-sm outline-none transition-colors focus:border-forest-500"
                      {...register('phone')}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-ink/70">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="resize-none rounded-xl border border-ink/10 px-4 py-3 text-sm outline-none transition-colors focus:border-forest-500"
                      {...register('message', { required: true })}
                    />
                    {errors.message && <span className="text-xs text-coral-700">Tell us a little more.</span>}
                  </div>

                  <button type="submit" disabled={isSubmitting} className="btn-primary w-fit">
                    {isSubmitting ? 'Sending…' : 'Send Message'}
                    <Send size={16} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  )
}
