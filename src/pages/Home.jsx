import SEO from '../components/layout/SEO'
import Hero from '../components/home/Hero'
import Benefits from '../components/home/Benefits'
import WhyKombucha from '../components/home/WhyKombucha'
import FeaturedProducts from '../components/home/FeaturedProducts'
import BrandStory from '../components/home/BrandStory'
import BrewingProcessPreview from '../components/home/BrewingProcessPreview'
import TestimonialsSection from '../components/home/TestimonialsSection'
import NewsletterCTA from '../components/home/NewsletterCTA'

export default function Home() {
  return (
    <>
      <SEO
        title="Handcrafted Live-Culture Kombucha"
        description="Premium handcrafted kombucha brewed in small batches using organic ingredients and live cultures. Crafted by nature, brewed with purpose."
        path="/"
      />
      <Hero />
      <Benefits />
      <WhyKombucha />
      <FeaturedProducts />
      <BrandStory />
      <BrewingProcessPreview />
      <TestimonialsSection />
      <NewsletterCTA />
    </>
  )
}
