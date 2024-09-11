import React from 'react'

export default function ContactForm() {
  return (
    <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" required
               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
               placeholder="your@email.com" />
      </div>
      <div className="mb-4">
        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">First Name</label>
        <input type="text" id="firstName" name="firstName" required
               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
               placeholder="John" />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-700">Last Name</label>
        <input type="text" id="lastName" name="lastName" required
               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
               placeholder="Doe" />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Phone Number (Optional)</label>
        <input type="tel" id="phone" name="phone"
               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
               placeholder="(123) 456-7890" />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" name="message" rows={4} required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message here..."></textarea>
      </div>
      <button type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
        Send Message
      </button>
    </form>
  )
}
