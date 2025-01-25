import React from 'react';
import { FaEnvelope, FaWater } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        The Bait Shop <FaWater className="inline text-blue-500 text-3xl" />
      </h2>
      <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Where music meets the ocean
        </h3>
      <p className="text-lg font-semibold text-gray-600 mb-4 text-center">
      Stay updated on upcoming shows, events, and exclusive offers!
      </p>
      <p className="text-gray-600 mb-4 text-center">
        Register your email to never miss out on the hottest bands coming to play for you in Newport County
      </p>
      <form
        action="https://formspree.io/f/mjvdqpav"
        method="POST"
        className="flex flex-col items-center"
      >
        <div className="flex items-center border border-gray-300 rounded-lg mb-4 w-full max-w-md focus-within:border-gray-600">
          <FaEnvelope className="text-gray-800 p-2 text-4xl" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            className="p-2 rounded-lg flex-grow outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-lg transition-colors text-lg"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
