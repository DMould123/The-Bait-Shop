import React from 'react';

const Calendar = () => {
  // Update the full calendar with all artists
  const fullCalendar = [
    {
      id: 1,
      artist: 'The Killers',
      date: '2024-02-15',
      time: '20:00',
      price: '450 SEK'
    },
    {
      id: 2,
      artist: 'Modest Mouse',
      date: '2024-03-15',
      time: '20:00',
      price: '400 SEK'
    },
    {
      id: 3,
      artist: 'Death Cab for Cutie',
      date: '2024-03-22',
      time: '19:30',
      price: '400 SEK'
    },
    {
      id: 4,
      artist: 'The Walkmen',
      date: '2024-04-01',
      time: '20:00',
      price: '350 SEK'
    },
    {
      id: 5,
      artist: 'Rooney',
      date: '2024-04-05',
      time: '20:00',
      price: '350 SEK'
    },
    {
      id: 6,
      artist: 'Rachael Yamagata',
      date: '2024-04-15',
      time: '19:30',
      price: '300 SEK'
    },
    {
      id: 7,
      artist: 'Cobra Verde',
      date: '2024-04-22',
      time: '20:00',
      price: '300 SEK'
    },
    {
      id: 8,
      artist: 'The Thrills',
      date: '2024-05-01',
      time: '20:00',
      price: '350 SEK'
    },
    {
      id: 9,
      artist: 'Tom Vek',
      date: '2024-05-10',
      time: '20:00',
      price: '300 SEK'
    },
    {
      id: 10,
      artist: 'The Subways',
      date: '2024-05-20',
      time: '20:00',
      price: '350 SEK'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Upcoming Shows at The Bait Shop</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fullCalendar.map((event) => (
            <div key={event.id} className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-xl hover:transform hover:scale-105 transition-all">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-orange-400 mb-2">{event.artist}</h3>
                <div className="space-y-2 text-white">
                  <p className="text-lg">
                    <span className="text-orange-300">Date:</span> {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <p className="text-lg">
                    <span className="text-orange-300">Time:</span> {event.time}
                  </p>
                  <p className="text-lg">
                    <span className="text-orange-300">Price:</span> {event.price}
                  </p>
                  <div className="pt-4">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors">
                      Book Tickets
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* OC Reference Section */}
        <div className="mt-16 text-center text-white">
          <p className="text-lg italic">"Where music meets the ocean"</p>
          <p className="text-sm mt-2">As featured in The OC - Season 1</p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
