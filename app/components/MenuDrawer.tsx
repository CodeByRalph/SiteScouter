'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

type MenuDrawerProps = {
    isOpen: boolean
    onClose: () => void
}

export default function MenuDrawer({isOpen, onClose}: MenuDrawerProps) {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
      <div className="bg-white w-64 h-full absolute right-0 shadow-lg">
        <div className="p-4">
          <button onClick={onClose} className="mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col space-y-4">
            <Link href='/' onClick={onClose}>Home</Link>
            <a href='/map' onClick={onClose}>Map</a>
            <Link href='/map/savedbusinesses' onClick={onClose}>Saved</Link>
            <Link href="/contact" onClick={onClose}>Contact</Link>
          </nav>
          <div className="mt-4">
            <UserButton />
          </div>
        </div>
      </div>
    </div>
  )
}
