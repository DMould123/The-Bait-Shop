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
          src="https://res.cloudinary.com/dele4dvi9/image/upload/v1737799918/The_Bait_Shop/baitshop_w7lejg.png"
          alt="The Bait Shop"
          className="w-full h-auto rounded-lg shadow-md mb-4"
        />
        <div className="flex space-x-4">
          <img
            src="https://res.cloudinary.com/dele4dvi9/image/upload/v1737799927/The_Bait_Shop/baitshop-bar_an53dl.png"
            alt="Bait Shop Interior"
            className="w-1/2 h-auto rounded-lg shadow-md"
          />
          <img
            src="https://res.cloudinary.com/dele4dvi9/image/upload/v1737799926/The_Bait_Shop/baitshop-indoors_gdsxmv.png"
            alt="Bait Shop Event"
            className="w-1/2 h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  )
}

export default About
