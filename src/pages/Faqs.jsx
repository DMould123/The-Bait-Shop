import React from 'react';

const Faqs = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold mb-2">Opening Hours</h2>
          <p className="text-gray-700">
            We're open from 5 PM until late on show days.
          </p>
        </div>
        {/* More FAQ items will go here */}
      </div>
    </div>
  );
};

export default Faqs;
