import React from 'react'

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">&quot;SiteScout helped me find my first big client. It&apos;s a game-changer for freelancers!&quot;</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold">Jane Doe</p>
                <p className="text-sm text-gray-600">Freelance Web Developer</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">&quot;I&apos;ve tripled my client base using SiteScout. It&apos;s an essential tool for any web agency.&quot;</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold">John Smith</p>
                <p className="text-sm text-gray-600">Owner, WebPro Agency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
