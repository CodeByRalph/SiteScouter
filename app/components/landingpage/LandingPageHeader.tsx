'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

import { SignUpButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import MenuDrawer from '../MenuDrawer'
export default function LandingPageHeader() {
  const router = useRouter()
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = async(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    event.preventDefault();

    // If we are on a different page, navigate back to the homepage
    if (pathname !== '/') {
      await router.push('/#' + id)
    } else {
      // If already on the homepage, directly scroll to the section
      scrollToSection(id);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // After scrolling, ensure the URL is clean without a hash
      window.history.replaceState({}, '', '/');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600"><Link href='/'>SiteScouter</Link></div>
        <nav className="hidden md:flex space-x-6">
          <SignedOut>
          <a href="#features" onClick={(event) => handleScroll(event, 'features')} className="text-gray-600 hover:text-blue-600">Features</a>
          <a href="#pricing" onClick={(event) => handleScroll(event, 'pricing')} className="text-gray-600 hover:text-blue-600">Pricing</a>
          </SignedOut>
          <SignedIn>
            <Link href='/'>Home</Link>
            <a href='/map' >Map</a>
            <Link href='/map/savedbusinesses'>Saved</Link>
          </SignedIn>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </nav>
        <SignedOut>
        <SignUpButton mode="modal">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </SignUpButton>
        </SignedOut>
        <SignedIn>
        <div className='hidden md:block'>
          <UserButton />
        </div>
        </SignedIn>
        <SignedIn>
				<button onClick={toggleMenu} className="md:hidden">
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						</svg>
				</button>

        {isOpen && (
            <MenuDrawer isOpen={isOpen} onClose={toggleMenu}/>
          )}
        </SignedIn>
      </div>
    </header>
  )
}
