import baitShopImage from '../assets/baitshop.jpg'
import baitShopImage1 from '../assets/baitshop-bar.jpg'
import baitShopImage2 from '../assets/baitshop-indoors.jpg'

const About = () => {
  return (
    <div className="py-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        About The Bait Shop
      </h1>
      <div className="prose max-w-none text-gray-700 mb-8">
        <p>
          The Bait Shop is a vibrant new addition to Orange County, California's
          music scene, having recently opened its doors to become a premier
          venue for concerts and events. Our mission is to provide a platform
          for both local talent and international artists, fostering a community
          driven by a passion for music and culture.
        </p>
        <p>
          With an exciting lineup of upcoming acts, The Bait Shop is the place
          to be for music lovers. We are proud to host a diverse range of
          performances, from emerging artists to established names, ensuring
          that every night is a unique experience. Join us as we celebrate the
          power of live music and the artists who bring it to life.
        </p>
        <p>
          Since our opening, we have quickly become a significant part of the
          local cultural landscape, and we invite you to be part of our journey.
          Whether you're here for a concert, a night out with friends, or simply
          to enjoy the atmosphere, The Bait Shop promises unforgettable moments.
        </p>
      </div>

      {/* Images Section */}
      <div className="flex flex-col items-center mb-8">
        <img
          src={baitShopImage}
          alt="The Bait Shop"
          className="w-full h-auto rounded-lg shadow-md mb-4"
        />
        <div className="flex space-x-4">
          <img
            src={baitShopImage1}
            alt="Bait Shop Interior"
            className="w-1/2 h-auto rounded-lg shadow-md"
          />
          <img
            src={baitShopImage2}
            alt="Bait Shop Event"
            className="w-1/2 h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Sign Up for Our Newsletter
        </h2>
        <p className="text-gray-600 mb-4">
          Stay updated on upcoming shows, events, and exclusive offers!
        </p>
        <form
          action="https://formspree.io/f/mjvdqpav"
          method="POST"
          className="flex flex-col"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            className="border border-gray-300 p-2 rounded-lg mb-4"
          />
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default About
