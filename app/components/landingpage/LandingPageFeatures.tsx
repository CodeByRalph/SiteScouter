import React from 'react'

export default function LandingPageFeatures() {
  return (
    <section id="features" className="py-14 bg-gray-100 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Smart Radius Search</h3>
            <p>Find businesses within your customizable search radius.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Instant Insights</h3>
            <p>Get detailed information about businesses at a glance.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-semibold mb-2">Easy Contact</h3>
            <p>Connect with businesses directly through our platform.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
