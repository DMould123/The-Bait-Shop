import {useState} from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/the_killers.jpg';
import modestImage from '../assets/modest.png';
import deathcabImage from '../assets/deathcab.png';
import thrillsImage from '../assets/Thrills.png';
import rooneyImage from '../assets/rooney.png';

const otherConcerts = [
  {
    id: 1,
    artist: 'Modest Mouse',
    date: '2024-03-15',
    time: '20:00',
    image: modestImage,
    price: '$28'
  },
  {
    id: 2,
    artist: 'Death Cab for Cutie',
    date: '2024-03-22',
    time: '19:30',
    image: deathcabImage,
    price: '$30'
  },
  {
    id: 3,
    artist: 'Rooney',
    date: '2024-04-05',
    time: '20:00',
    image: rooneyImage,
    price: '$20'
  },
  {
    id: 4,
    artist: 'The Thrills',
    date: '2024-04-12',
    time: '21:00',
    image: thrillsImage,
    price: '$20'
  }
];

const Home = () => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row max-w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-2/3">
          <img
            src={heroImage}
            alt="The Killers"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/3 p-8 text-center">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-2">The Killers</h1>
          <p className="text-xl font-semibold text-green-500 mb-4">Hot Fuss Anniversary Tour</p>
          <p className="text-lg text-gray-800 mb-2">Thursday, February 15, 2024</p>
          <p className="text-lg text-gray-700 mb-2">The Bait Shop</p>
          <p className="text-lg text-gray-700 mb-2">Doors: 19:00</p>
          <p className="text-lg text-gray-700 mb-2">Show: 20:00</p>
          <p className="text-lg text-gray-700 mb-2">Support: The Bravery</p>
          <p className="text-lg font-bold text-red-600 mb-4">$25</p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg flex items-center text-sm sm:text-lg mx-auto">
            <span className="mr-2">🎟️</span> Book Tickets
          </button>

          {/* Read More Section */}
          <div className="text-center mt-6">
            <button
              onClick={() => setShowDescription(!showDescription)}
              className="text-blue-600 hover:underline"
            >
              {showDescription ? 'Read Less...' : 'Read More...'}
            </button>
          </div>

          <div className={`prose max-w-none transition-all duration-300 ${showDescription ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <p className="text-lg text-gray-700 mb-12">
              Don't miss The Killers live at The Bait Shop in Gothenburg! Join us for an unforgettable night
              of music featuring special guests The Walkmen. The Hot Fuss Anniversary Tour promises
              to be one of the most exciting shows of the year.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Upcoming Concerts Grid */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">More Upcoming Shows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherConcerts.map((concert) => (
              <div
                key={concert.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <img
                    src={concert.image}
                    alt={concert.artist}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold">{concert.artist}</h3>
                    <p className="text-sm opacity-90">
                      {new Date(concert.date).toLocaleDateString()} at {concert.time}
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">{concert.price}</span>
                    <span className="text-sm text-gray-500">Limited Tickets</span>
                  </div>
                  <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg transition-colors text-sm font-medium">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
