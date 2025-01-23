import {useState} from 'react';
import { Link } from 'react-router-dom';

// Import all images
import heroImage from '../assets/sol.jpg';
import modestImage from '../assets/sol.jpg';
import deathcabImage from '../assets/sol.jpg';
import walkmenImage from '../assets/sol.jpg';

const upcomingConcerts = [
  {
    id: 1,
    artist: 'The Killers',
    date: '2024-02-15',
    time: '20:00',
    venue: 'The Bait Shop, Gothenburg',
    price: '450 SEK',
    description: 'Live in Concert - Hot Fuss Anniversary Tour',
    supportAct: 'Special Guests: The Walkmen',
    doorsOpen: '19:00',
    image: heroImage
  }
];

const otherConcerts = [
  {
    id: 1,
    artist: 'Modest Mouse',
    date: '2024-03-15',
    time: '20:00',
    image: modestImage,
    price: '400 SEK'
  },
  {
    id: 2,
    artist: 'Death Cab for Cutie',
    date: '2024-03-22',
    time: '19:30',
    image: deathcabImage,
    price: '400 SEK'
  },
  {
    id: 3,
    artist: 'Rooney',
    date: '2024-04-05',
    time: '20:00',
    image: walkmenImage,
    price: '350 SEK'
  },
  {
    id: 4,
    artist: 'The Thrills',
    date: '2024-04-12',
    time: '21:00',
    image: walkmenImage,
    price: '350 SEK'
  }
];

const Home = () => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 py-12">
            {/* Image Section */}
            <div className="lg:w-1/2">
              <img
                src={heroImage}
                alt="The Killers"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
            </div>

            {/* Concert Info Section */}
            <div className="lg:w-1/2 text-white space-y-6">
              <div className="space-y-2">
                <h2 className="text-5xl font-bold tracking-tight">The Killers</h2>
                <p className="text-xl text-gray-300">Hot Fuss Anniversary Tour</p>
              </div>

              <div className="space-y-4 text-lg">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Date:</span>
                  <span>Thursday, February 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Venue:</span>
                  <span>The Bait Shop, Gothenburg</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Doors:</span>
                  <span>19:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Show:</span>
                  <span>20:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Support:</span>
                  <span>The Walkmen</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Price:</span>
                  <span>450 SEK</span>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition-colors">
                  Book Tickets
                </button>
                <Link
                  to="/calendar"
                  className="block text-center bg-transparent border-2 border-indigo-600 hover:bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-medium transition-colors"
                >
                  View All Events
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Marquee */}
        <div className="absolute top-0 w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-3">
          <div className="animate-marquee whitespace-nowrap">
            {upcomingConcerts.map((concert) => (
              <span key={concert.id} className="mx-8 text-white font-medium">
                {concert.artist} - {new Date(concert.date).toLocaleDateString()} - {concert.time} - {concert.venue}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">About The Show</h2>
          <button
            onClick={() => setShowDescription(!showDescription)}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <span>{showDescription ? 'Show Less' : 'See More'}</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                showDescription ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <div className={`prose max-w-none transition-all duration-300 ${
          showDescription ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <p className="text-lg text-gray-700 mb-12">
            Don't miss The Killers live at The Bait Shop in Gothenburg! Join us for an unforgettable night
            of music featuring special guests The Walkmen. The Hot Fuss Anniversary Tour promises
            to be one of the most exciting shows of the year.
          </p>
        </div>

        {/* Upcoming Concerts Grid */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">More Upcoming Shows</h2>
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
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition-colors text-sm font-medium">
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
