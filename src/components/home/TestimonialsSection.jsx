import SectionHeading from '../ui/SectionHeading'
import Testimonials from '../ui/Testimonials'

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-cream-100">
      <div className="container-graab">
        <SectionHeading
          eyebrow="Loved Locally"
          title="What Bengaluru is sipping on"
          align="center"
          description="Real words from the people who keep GRAAB in their fridge."
        />
        <div className="mt-14">
          <Testimonials />
        </div>
      </div>
    </section>
  )
}
