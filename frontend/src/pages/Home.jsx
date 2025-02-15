import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../utils/dateUtils'
import { RotatingLines } from 'react-loader-spinner'

export default function Home({ fullCalendar }) {
  const [showDescription, setShowDescription] = useState(false)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    )
  }

  // Sort hottest upcoming shows by date
  const hottestUpcomingShows = fullCalendar
    .filter((concert) =>
      ['Modest Mouse', 'Death Cab for Cutie', 'The Thrills', 'Rooney'].includes(
        concert.artist
      )
    )
    .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by gig date
    .slice(0, 4) // Get only the first four gigs

  const handleBookTickets = (concert) => {
    if (concert.artist === 'Death Cab for Cutie') {
      alert('Tickets for this concert are sold out.')
      return
    }
    navigate('/ticket-purchase', { state: { tickets: concert } })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row max-w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-2/3">
          <img
            src={fullCalendar[0].img}
            alt={'Images of bands upcoming concerts'}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/3 p-8 text-center">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-2">
            {fullCalendar[0].artist}
          </h1>
          <p className="text-xl font-semibold text-green-500 mb-4">
            First Ever Appearance in CA
          </p>
          <p className="text-lg text-gray-800 mb-2">
            {formatDate(fullCalendar[0].date)}
          </p>
          <p className="text-lg text-gray-700 mb-2">The Bait Shop</p>
          <p className="text-lg text-gray-700 mb-2">Doors: 19:00</p>
          <p className="text-lg text-gray-700 mb-2">Show: 20:00</p>
          <p className="text-lg text-gray-700 mb-2">Support: The Bravery</p>
          <p className="text-lg font-bold text-red-600 mb-4">
            {fullCalendar[0].price}
          </p>
          <button
            className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg flex items-center text-sm sm:text-lg mx-auto"
            onClick={() => handleBookTickets(fullCalendar[0])}
            aria-label={`Book tickets for ${fullCalendar[0].artist}`}
          >
            <span className="mr-2">🎟️</span> Book Tickets
          </button>

          <div
            className={`prose max-w-none transition-all duration-300 ${
              showDescription
                ? 'max-h-96 opacity-100'
                : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <p className="text-lg text-gray-700 mb-12">
              {fullCalendar[0].blurb}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Upcoming Concerts Grid */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Hottest Upcoming Shows
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hottestUpcomingShows.map((concert) => (
              <div
                key={concert.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <img
                    src={concert.img}
                    alt={concert.artist}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="text-xl font-bold text-white absolute bottom-0 left-0 p-2">
                    {concert.artist}
                    {concert.artist === 'Death Cab for Cutie' && (
                      <span className="text-red-500 font-bold ml-2">
                        Sold Out
                      </span>
                    )}
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600">{formatDate(concert.date)}</p>
                  <p className="text-gray-600">{concert.time}</p>
                  <p className="text-lg font-bold text-gray-800 mt-2">
                    {concert.price}
                  </p>
                  <button
                    className={`mt-4 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition-colors ${
                      concert.artist === 'Death Cab for Cutie'
                        ? 'opacity-50 cursor-not-allowed'
                        : ''
                    }`}
                    onClick={() => handleBookTickets(concert)}
                    disabled={concert.artist === 'Death Cab for Cutie'}
                  >
                    {concert.artist === 'Death Cab for Cutie'
                      ? 'Sold Out'
                      : 'Book Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
