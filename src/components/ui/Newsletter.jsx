import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, CheckCircle2 } from 'lucide-react'

export default function Newsletter({ light = false }) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="w-full max-w-md">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className={`flex items-center gap-2 rounded-pill px-5 py-3.5 text-sm font-medium ${
              light ? 'bg-white/15 text-cream-50' : 'bg-forest-50 text-forest-600'
            }`}
          >
            <CheckCircle2 size={18} />
            You&rsquo;re on the list — welcome to the brew crew.
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-2"
          >
            <div
              className={`flex items-center gap-2 rounded-pill border px-2 py-2 pl-5 transition-colors ${
                light ? 'border-white/25 bg-white/10' : 'border-ink/10 bg-white'
              }`}
            >
              <Mail size={18} className={light ? 'text-cream-100/70' : 'text-ink/40'} />
              <input
                type="email"
                placeholder="Your email address"
                className={
                  light
                    ? 'w-full bg-transparent text-sm text-cream-50 outline-none placeholder:text-cream-100/50'
                    : 'w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/40'
                }
                {...register('email', {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
              />
              <button type="submit" className="btn-primary !py-2.5 !px-5 shrink-0">
                Join
              </button>
            </div>
            {errors.email && (
              <span className={`px-4 text-xs ${light ? 'text-golden-400' : 'text-coral-700'}`}>
                Enter a valid email address.
              </span>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
