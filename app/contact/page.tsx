import React from 'react'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <ContactForm />
      </main>
    </div>
  )
}
