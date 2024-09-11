import LandingPageHeader from "@/components/landingpage/LandingPageHeader";
import LandingPageFooter from "@/components/landingpage/LandingPageFooter";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LandingPageHeader />
      <main>{children}</main>
      <LandingPageFooter />
    </>
  );
}