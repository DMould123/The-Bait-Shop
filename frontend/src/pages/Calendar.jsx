import React from 'react';
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
  const navigate = useNavigate();

  // Update the full calendar with all artists
  const fullCalendar = [
    {
      id: 1,
      artist: 'The Killers',
      date: '2004-11-04',
      time: '20:00',
      price: '$25'
    },
    {
      id: 2,
      artist: 'Modest Mouse',
      date: '2005-01-06',
      time: '20:00',
      price: '$28'
    },
    {
      id: 3,
      artist: 'Death Cab for Cutie',
      date: '2005-05-05',
      time: '19:30',
      price: '$30'
    },
    {
      id: 4,
      artist: 'The Walkmen',
      date: '2005-01-27',
      time: '20:00',
      price: '$25'
    },
    {
      id: 5,
      artist: 'Rooney',
      date: '2004-02-11',
      time: '20:00',
      price: '$20'
    },
    {
      id: 6,
      artist: 'Rachael Yamagata',
      date: '2004-12-16',
      time: '19:30',
      price: '$30'
    },
    {
      id: 7,
      artist: 'Cobra Verde',
      date: '2024-04-22',
      time: '20:00',
      price: '$15'
    },
    {
      id: 8,
      artist: 'The Thrills',
      date: '2024-05-01',
      time: '20:00',
      price: '$20'
    },
    {
      id: 9,
      artist: 'Tom Vek',
      date: '2024-05-10',
      time: '20:00',
      price: '$18'
    },
    {
      id: 10,
      artist: 'The Subways',
      date: '2005-11-17',
      time: '20:00',
      price: '$20'
    }
  ];

  const handleBookTickets = (concert) => {
    navigate('/ticket-purchase', { state: { tickets: concert } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Upcoming Shows at The Bait Shop</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fullCalendar.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.artist}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="text-lg">
                    <span className="font-semibold">Date:</span> {new Date(event.date).toLocaleDateString('en-US', {
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
                    <button onClick={() => handleBookTickets(event)} className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition-colors">
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
  );
};

export default Calendar;
