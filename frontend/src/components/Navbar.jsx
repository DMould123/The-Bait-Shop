import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaInstagramSquare,
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaSpotify
} from 'react-icons/fa'
import { formatDate } from '../utils/dateUtils'

export default function Navbar({ fullCalendar }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md" role="navigation">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo with responsive size */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dele4dvi9/image/upload/v1737800969/The_Bait_Shop/logo_l8chx5.png"
                alt="The Bait Shop Logo"
                loading="lazy"
                className="h-16 w-auto sm:h-20 md:h-24 hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/calendar"
              className="text-gray-800 hover:text-gray-600 text-2xl font-bold transform transition-transform duration-200 hover:scale-105 px-3 py-2"
            >
              Calendar
            </Link>
            <Link
              to="/merch"
              className="text-gray-800 hover:text-gray-600 text-2xl font-bold transform transition-transform duration-200 hover:scale-105 px-3 py-2"
            >
              Merch
            </Link>
            <Link
              to="/faqs"
              className="text-gray-800 hover:text-gray-600 text-2xl font-bold transform transition-transform duration-200 hover:scale-105 px-3 py-2"
            >
              FAQs
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-gray-600 text-2xl font-bold transform transition-transform duration-200 hover:scale-105 px-3 py-2"
            >
              About Us
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagramSquare className="h-6 w-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://www.tiktok.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok className="h-6 w-6" />
            </a>
            <a
              href="https://open.spotify.com/playlist/4huLUIOwYXUa7ClrsaIJYv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors"
              aria-label="Spotify"
            >
              <FaSpotify className="h-6 w-6" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 transition-transform transform duration-200 ease-in-out"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2">
            <Link
              to="/calendar"
              className="block text-gray-800 hover:text-gray-600 px-3 py-2 text-lg font-bold"
            >
              Calendar
            </Link>
            <Link
              to="/merch"
              className="block text-gray-800 hover:text-gray-600 px-3 py-2 text-lg font-bold"
            >
              Merch
            </Link>
            <Link
              to="/faqs"
              className="block text-gray-800 hover:text-gray-600 px-3 py-2 text-lg font-bold"
            >
              FAQs
            </Link>
            <Link
              to="/about"
              className="block text-gray-800 hover:text-gray-600 px-3 py-2 text-lg font-bold"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Events Section for Upcoming Gigs */}
        <div className="bg-100 p-4 rounded-lg mt-2 overflow-hidden">
          <div className="whitespace-nowrap overflow-hidden">
            <ul className="inline-flex animate-marquee">
              {fullCalendar
                .slice()
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .map((event) => (
                  <li key={event.id} className="mx-4 text-gray-700 uppercase">
                    <span className="font-bold">{event.artist}</span> -{' '}
                    {formatDate(event.date)} at {event.time}
                    {event.artist === 'Death Cab for Cutie' && (
                      <span className="text-red-500 font-bold">
                        {' '}
                        (SOLD OUT)
                      </span>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
