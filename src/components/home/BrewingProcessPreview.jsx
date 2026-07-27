import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import BrewingTimeline from './BrewingTimeline'

export default function BrewingProcessPreview() {
  return (
    <section className="section-pad bg-forest-900 text-cream-50">
      <div className="container-graab">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="From Tea to Bottle"
            title="Our brewing process"
            description="Six deliberate stages, each one shaping the flavour, fizz, and cultures in your bottle."
            light
          />
          <Button to="/brewing-process" variant="ghost" className="!text-cream-50 hover:!bg-white/10 shrink-0">
            See full process
          </Button>
        </div>

        <div className="mt-16 [&_h3]:text-cream-50 [&_p]:text-cream-100/60 [&_span.text-coral]:text-golden-400">
          <BrewingTimeline />
        </div>
      </div>
    </section>
  )
}
