import React from 'react'

export default function ContactForm() {
  return (
    <form className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" required
               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
               placeholder="your@email.com" />
      </div>
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">First Name</label>
          <input type="text" id="firstName" name="firstName" required
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                 placeholder="John" />
        </div>
        <div className="flex-1">
          <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" id="lastName" name="lastName" required
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                 placeholder="Doe" />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Phone Number (Optional)</label>
        <input type="tel" id="phone" name="phone"
               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
               placeholder="(123) 456-7890" />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" name="message" rows={4} required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Your message here..."></textarea>
      </div>
      <button type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300 font-medium">
        Send Message
      </button>
    </form>
  )
}
