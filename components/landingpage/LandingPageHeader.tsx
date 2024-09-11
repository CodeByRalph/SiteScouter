import React from 'react'
import Link from 'next/link'

import { SignUpButton } from '@clerk/nextjs'

export default function LandingPageHeader() {
  

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">SiteScout</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </nav>
        <SignUpButton mode="modal">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </SignUpButton>
      </div>
    </header>
  )
}
