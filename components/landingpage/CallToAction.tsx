import React from 'react'

import { SignUpButton } from '@clerk/nextjs'

export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
        <p className="text-xl mb-8">Join SiteScout today and start finding your ideal clients.</p>
        <SignUpButton mode="modal">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Sign Up Now
          </button>
        </SignUpButton>
      </div>
    </section>
  )
}
