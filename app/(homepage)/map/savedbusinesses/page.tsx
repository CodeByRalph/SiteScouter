import React from 'react'
import Link from 'next/link'

export default function SavedBusinessesPage() {
  // TODO: Fetch saved businesses from the backend
  const savedBusinesses = [
    { id: 1, name: 'Business 1', address: '123 Main St' },
    { id: 2, name: 'Business 2', address: '456 Elm St' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-grow max-w-4xl mx-auto py-12 px-4 mt-16">
        <h1 className="text-3xl font-bold mb-8">Your Saved Businesses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedBusinesses.map((business) => (
            <div key={business.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{business.name}</h2>
              <p className="text-gray-600 mb-4">{business.address}</p>
              <Link href={`/business/${business.id}`} className="text-blue-500 hover:underline">
                View Details
              </Link>
            </div>
          ))}
        </div>
        {savedBusinesses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">You haven't saved any businesses yet.</p>
            <Link href="/map" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
              Explore Businesses
            </Link>
          </div>
        )}
      </section>
      
      <footer className="mt-auto bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Why Save Businesses?</h2>
          <ul className="text-left max-w-md mx-auto">
            <li className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Quick access to your favorite places
            </li>
            <li className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Plan your visits efficiently
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Never forget a great discovery
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
