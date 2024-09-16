import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import LandingPageHeader from "@/app/components/landingpage/LandingPageHeader";
import LandingPageFooter from "@/app/components/landingpage/LandingPageFooter";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SiteScouter",
  description: "Find local clients with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider >
      <html lang="en">
        <body className={inter.className}>
          <LandingPageHeader />
          {children}
          <LandingPageFooter />
        </body>
      </html>
    </ClerkProvider>
  );
}
