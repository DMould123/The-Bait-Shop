import { FaMusic, FaUsers, FaCalendarAlt, FaWater } from "react-icons/fa";

export default function About() {
  return (
    <div className="py-12 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          About The Bait Shop <FaWater className="inline text-blue-500 text-l" />
        </h1>
        <p className="text-lg text-gray-600">
          Orange County's hottest new live music venue – where music meets the ocean!
        </p>
      </div>

      {/* Info Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
          <FaMusic className="text-red-500 text-4xl mx-auto mb-2" />
          <h3 className="font-semibold text-gray-800 text-lg">Live Music</h3>
          <p className="text-gray-600 text-sm">Experience electrifying performances from top artists and local bands.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
          <FaUsers className="text-red-500 text-4xl mx-auto mb-2" />
          <h3 className="font-semibold text-gray-800 text-lg">Community</h3>
          <p className="text-gray-600 text-sm">A space where music lovers come together to celebrate culture and sound.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
          <FaCalendarAlt className="text-red-500 text-4xl mx-auto mb-2" />
          <h3 className="font-semibold text-gray-800 text-lg">Events</h3>
          <p className="text-gray-600 text-sm">From intimate gigs to packed-out shows, there's something for everyone.</p>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Welcome to The Bait Shop
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          The Bait Shop is not just a venue; it's a <span className="font-semibold text-red-500">community hub</span> for music lovers in Orange County. Our mission is to create an inclusive space where both local talent and international artists can thrive, share their passion, and connect with fans.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We pride ourselves on hosting a diverse lineup of events, from intimate acoustic sets to electrifying full-band performances. Each night at The Bait Shop promises a unique experience, whether you're discovering the next big act or enjoying a night out with friends.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our venue features state-of-the-art sound and lighting systems, ensuring that every performance is unforgettable. We also offer a variety of food and drink options, making it the perfect spot to unwind and enjoy live music.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Join us as we celebrate the vibrant music scene and the artists who bring it to life. At The Bait Shop, every show is more than just a concert; it's a <span className="font-semibold text-red-500">memorable experience</span> that you won't want to miss!
        </p>
      </div>

      {/* Images Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <img
          src="https://res.cloudinary.com/dele4dvi9/image/upload/v1737799918/The_Bait_Shop/baitshop_w7lejg.png"
          alt="The Bait Shop - Exterior view"
          loading="lazy"
          className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-all"
        />
        <img
          src="https://res.cloudinary.com/dele4dvi9/image/upload/v1737799927/The_Bait_Shop/baitshop-bar_an53dl.png"
          alt="Bait Shop Interior - Bar Area"
          loading="lazy"
          className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-all"
        />
        <img
          src="https://res.cloudinary.com/dele4dvi9/image/upload/v1737799926/The_Bait_Shop/baitshop-indoors_gdsxmv.png"
          alt="Bait Shop Event - Indoor"
          loading="lazy"
          className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-all"
        />
      </div>
    </div>
  );
}
