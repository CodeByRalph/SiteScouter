import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'


export default function LandingPageFooter() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-24">
          <div className="text-center mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">SiteScout</h3>
            <p className="mt-2">Find your next client with ease</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faTwitter} height={24} width={24}/>
              </a>
              <a href="#" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faFacebook} height={24} width={24}/>
              </a>
              <a href="#" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faLinkedin} height={24} width={24}/>
              </a>
              <a href="#" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faInstagram} height={24} width={24}/>
              </a>
            </div>
          </div>
          <div className="text-center">
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2024 SiteScout. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
