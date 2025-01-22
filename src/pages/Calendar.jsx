import React from 'react';

const Calendar = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Event cards will go here */}
        <div className="p-4 border rounded-lg shadow-md">
          <p className="text-lg font-semibold">Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
