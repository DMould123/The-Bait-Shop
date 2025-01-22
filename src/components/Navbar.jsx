import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import logoImage from '../assets/theloft.png';

const Navbar = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-indigo-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 -ml-4">
            <Link to="/">
              <img
                className="h-20 w-auto hover:opacity-90 transition-opacity"
                src={logoImage}
                alt="The Loft"
              />
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-700 hover:text-indigo-900 hover:bg-indigo-100"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/calendar" className="text-indigo-700 hover:text-indigo-900 px-3 py-2 text-base font-medium">
              Calendar
            </Link>
            <Link to="/restaurant" className="text-indigo-700 hover:text-indigo-900 px-3 py-2 text-base font-medium">
              Restaurant
            </Link>
            <Link to="/faqs" className="text-indigo-700 hover:text-indigo-900 px-3 py-2 text-base font-medium">
              FAQs
            </Link>
            <Link to="/about" className="text-indigo-700 hover:text-indigo-900 px-3 py-2 text-base font-medium">
              About Us
            </Link>
          </div>

          {/* Language Toggle and Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm rounded ${
                  language === 'en'
                    ? 'bg-indigo-600 text-white'
                    : 'text-indigo-700 hover:bg-indigo-100'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('sv')}
                className={`px-2 py-1 text-sm rounded ${
                  language === 'sv'
                    ? 'bg-indigo-600 text-white'
                    : 'text-indigo-700 hover:bg-indigo-100'
                }`}
              >
                SV
              </button>
            </div>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:text-indigo-900">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:text-indigo-900">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:text-indigo-900">
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/calendar" className="block text-indigo-700 hover:text-indigo-900 px-3 py-2 text-base font-medium">
              Calendar
            </Link>
            <Link to="/restaurant" className="block text-indigo-700 hover:text-indigo-900 px-3 py-2 text-base font-medium">
              Restaurant
            </Link>
            <Link to="/faqs" className="block text-indigo-700 hover:text-indigo-900 px-3 py-2 text-base font-medium">
              FAQs
            </Link>
            <Link to="/about" className="block text-indigo-700 hover:text-indigo-900 px-3 py-2 text-base font-medium">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
