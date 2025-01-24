import React from 'react'
import { useNavigate } from 'react-router-dom'

const Calendar = ({ fullCalendar }) => {
  const navigate = useNavigate()

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
          {fullCalendar.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {event.artist}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="text-lg">
                    <span className="font-semibold">Date:</span>{' '}
                    {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
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
                      className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition-colors"
                    >
                      Book Tickets
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* OC Reference Section */}
        <div className="mt-16 text-center text-gray-800">
          <p className="text-lg italic">"Where music meets the ocean"</p>
          <p className="text-sm mt-2">As featured in The OC - Season 1</p>
        </div>
      </div>
    </div>
  )
}

export default Calendar
