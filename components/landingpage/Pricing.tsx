import React from 'react'

export default function Pricing() {
  return (
    <section id="pricing" className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Free</h3>
            <p className="text-3xl font-bold mb-4">$0<span className="text-sm font-normal">/month</span></p>
            <ul className="mb-6">
              <li className="mb-2">✓ Basic Search Radius (1-2 miles)</li>
              <li className="mb-2">✓ 5 searches per day</li>
              <li className="mb-2">✓ Basic business info</li>
              <li className="mb-2">✗ No contact integration</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300">Get Started</button>
          </div>
          <div className="border rounded-lg p-6 bg-blue-50 relative">
            <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-bl-lg">POPULAR</div>
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <p className="text-3xl font-bold mb-4">$25<span className="text-sm font-normal">/month</span></p>
            <ul className="mb-6">
              <li className="mb-2">✓ Expanded Search Radius (10-20 miles)</li>
              <li className="mb-2">✓ Unlimited searches</li>
              <li className="mb-2">✓ Detailed business insights</li>
              <li className="mb-2">✓ Contact integration</li>
              <li className="mb-2">✓ Priority support</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300">Choose Pro</button>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Elite</h3>
            <p className="text-3xl font-bold mb-4">$50<span className="text-sm font-normal">/month</span></p>
            <ul className="mb-6">
              <li className="mb-2">✓ Everything in Pro</li>
              <li className="mb-2">✓ Unlimited global search radius</li>
              <li className="mb-2">✓ Exclusive Resources</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300">Choose Elite</button>
          </div>
        </div>
      </div>
    </section>
  )
}
