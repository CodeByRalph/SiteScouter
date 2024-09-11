import React from 'react'
import Image from 'next/image'

import { SignUpButton } from '@clerk/nextjs'

export default function LandingPageHero() {
  return (
    <section className="relative h-screen flex items-center">
      <Image
        src="/heroImage.png"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="container mx-auto px-4 z-20 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">Find Your Next Client, Effortlessly</h1>
          <p className="text-lg font-medium mb-8">Discover businesses in your area without a website and pitch your services.</p>
          <SignUpButton mode="modal">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium mr-4">
              Find Clients Now
            </button>
          </SignUpButton>
        </div>
      </div>
    </section>
  )
}
