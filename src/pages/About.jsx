import React from 'react';

const About = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700">
          We are a premier music venue dedicated to bringing you the best live music
          experiences. Our venue has been hosting amazing artists since [year].
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <p className="text-gray-700">
            Find us in the heart of the city at:<br />
            123 Music Street<br />
            City, Country
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
