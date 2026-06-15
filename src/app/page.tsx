import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import IntroSection from '@/components/IntroSection'
import StatsSection from '@/components/StatsSection'
import FeaturedEras from '@/components/FeaturedEras'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-warm-950 min-h-screen">
      <Navigation />
      <Hero />
      <IntroSection />
      <StatsSection />
      <FeaturedEras />
      <Footer />
    </main>
  )
}
