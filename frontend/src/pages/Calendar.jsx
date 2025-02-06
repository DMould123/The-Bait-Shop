import { useNavigate } from 'react-router-dom'
import { formatDate } from '../utils/dateUtils'

export default function Calendar ({ fullCalendar })  {
  const navigate = useNavigate()

  // Sort events by date
  const sortedEvents = fullCalendar.slice().sort((a, b) => new Date(a.date) - new Date(b.date));

  const handleBookTickets = (concert) => {
    navigate('/ticket-purchase', { state: { tickets: concert } })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Upcoming Shows at The Bait Shop
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={event.img}
                  alt={event.artist}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-30" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {event.artist}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="text-lg">
                    <span className="font-semibold">Date:</span>{' '}
                    {formatDate(event.date)}
                  </p>
                  <p className="text-lg">
                    <span className="font-semibold">Time:</span> {event.time}
                  </p>
                  <p className="text-lg">
                    <span className="font-semibold">Price:</span> {event.price}
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => handleBookTickets(event)}
                      className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-2 rounded-lg transition-colors"
                    >
                      <span className="mr-2">🎟️</span> Book Tickets
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
