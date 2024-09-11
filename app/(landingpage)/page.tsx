import LandingPageHero from "@/components/landingpage/LandingPageHero";
import LandingPageFeatures from "@/components/landingpage/LandingPageFeatures";
import Pricing from "@/components/landingpage/Pricing";
import CallToAction from "@/components/landingpage/CallToAction";

export default function LandingPage() {
  return (
    <>
      <LandingPageHero />
      <LandingPageFeatures />
      <Pricing />
      <CallToAction />
    </>
  );
}