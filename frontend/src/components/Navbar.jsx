import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import logoImage from '../assets/logo.png';

const Navbar = ({ language, setLanguage, events, fullCalendar }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={logoImage}
                alt="The Bait Shop Logo"
                className="h-20 w-auto hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/calendar" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-lg font-medium">
              Calendar
            </Link>
            <Link to="/restaurant" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-lg font-medium">
              Restaurant
            </Link>
            <Link to="/faqs" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-lg font-medium">
              FAQs
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600 px-3 py-2 text-lg font-medium">
              About Us
            </Link>
          </div>

          {/* Language Toggle and Social Icons */}
          <div className="flex items-center space-x-6">
            <div className="flex space-x-1 bg-white rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  language === 'en'
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('sv')}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  language === 'sv'
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                SV
              </button>
            </div>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-300 hover:bg-blue-400"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2">
            <Link to="/calendar" className="block text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-medium">
              Calendar
            </Link>
            <Link to="/restaurant" className="block text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-medium">
              Restaurant
            </Link>
            <Link to="/faqs" className="block text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-medium">
              FAQs
            </Link>
            <Link to="/about" className="block text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-medium">
              About Us
            </Link>
          </div>
        </div>

        {/* Events Section for Upcoming Gigs */}
        <div className="bg-gray-100 p-4 rounded-lg mt-2 overflow-hidden">
          <div className="whitespace-nowrap overflow-hidden">
            <ul className="inline-flex animate-marquee">
              {fullCalendar.map(event => (
                <li key={event.id} className="mx-4 text-gray-700">
                  {event.artist} - {new Date(event.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })} at {event.time}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
