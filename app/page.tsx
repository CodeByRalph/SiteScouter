import { SignedIn, SignedOut } from '@clerk/nextjs';
import LandingPageLayout from "./(landingpage)/layout";
import LandingPage from "./(landingpage)/page";
import Home from "@/components/Home";

export default function Page() {
  return (
    <>
      <SignedOut>
        <LandingPageLayout>
          <LandingPage />
        </LandingPageLayout>
      </SignedOut>
      <SignedIn>
        <Home />
      </SignedIn>
    </>
  );
}
