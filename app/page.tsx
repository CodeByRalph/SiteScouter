import LandingPageHero from '@/app/components/landingpage/LandingPageHero'
import LandingPageFeatures from '@/app/components/landingpage/LandingPageFeatures'
import LandingPagePricing from '@/app/components/landingpage/LandingPagePricing'
import CallToAction from '@/app/components/landingpage/CallToAction'

export default function HomePage() {
  return (
    <main>
      <LandingPageHero />
      <LandingPageFeatures />
      <LandingPagePricing />
      <CallToAction />
    </main>
  );
}
