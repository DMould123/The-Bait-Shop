import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NpuV8JiXV88granpu14IbP89g0Tn2YLNmAjvNZffbDkbpUFpDNEiBDt9o9ACUS2rozL6UvLLLQV55miUOUIURPx00D7luQrbY');

const merchItems = {
  tShirts: [
    {
      id: 1,
      title: 'Bait Shop T-Shirt #1',
      description: 'Stylish venue T-shirt.',
      price: '$25.00',
      img: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1737801049/The_Bait_Shop/tshirt_v8ctpi-removebg-preview_smcuqv.png',
      sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    },
    {
      id: 2,
      title: 'Bait Shop T-Shirt #2',
      description: 'Limited edition Bait Shop T-shirt.',
      price: '$25.00',
      img: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1738016065/The_Bait_Shop/octshirtlogo2a-removebg-preview_vjqvcg.png',
      sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    },
    {
      id: 3,
      title: 'Bait Shop T-Shirt #3',
      description: 'Limited edition Bait Shop T-shirt.',
      price: '$25.00',
      img: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1737800973/The_Bait_Shop/thirt2_yuqknm.png',
      sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    },
  ],
  vinyls: [
    {
      id: 4,
      title: 'Transatlanticism - Death Cab For Cutie',
      description: 'Vinyl LP from Death Cab For Cutie.',
      price: '$40.00',
      img: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1738018789/The_Bait_Shop/129066-death-cab-for-cutie-transatlanticism-LP-1-6478684036889_kx6bla.jpg',
    },
    {
      id: 5,
      title: 'The Killers - Hot Fuss',
      description: 'Iconic album on vinyl.',
      price: '$40.00',
      img: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1737934600/The_Bait_Shop/0602547859303_cilaec.webp',
    },
    {
      id: 6,
      title: 'Rooney - Self-Titled',
      description: 'Classic Rooney debut album.',
      price: '$40.00',
      img: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1738020042/The_Bait_Shop/169415-rooney-rooney-LP-671118b3e54fd_nu8uhd.jpg',
    },
  ],
  posters: [
    {
      id: 7,
      title: 'Concert Poster',
      description: 'High-quality poster of The Killers.',
      price: '$20.00',
      img: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1737801111/The_Bait_Shop/killerstheocposter_q7zakd-removebg-preview_aa2lwa.png',
    },
  ],
};

export default function Merch() {
  const [selectedSize, setSelectedSize] = useState({});

  const handleCheckout = async (item) => {
    const stripe = await stripePromise;

    const response = await fetch('http://localhost:3001/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          {
            name: `${item.title} - Size: ${selectedSize[item.id]}`,
            price: parseFloat(item.price.replace('$', '')),
            quantity: 1,
          },
        ],
      }),
    });

    const session = await response.json();
    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Merchandise</h1>

      {/* T-Shirts */}
      <h2 className="text-2xl font-semibold mb-4">T-Shirts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {merchItems.tShirts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md border border-gray-300 overflow-hidden h-120 transform hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            <div className="w-full h-80 flex items-center justify-center bg-gray-100">
              <img
                src={item.img}
                alt={item.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-lg font-bold mt-2">{item.price}</p>
              <select
                className="mt-2 border border-gray-300 rounded-lg p-2"
                onChange={(e) => setSelectedSize({ ...selectedSize, [item.id]: e.target.value })}
                defaultValue=""
              >
                <option value="" disabled>Select Size</option>
                {item.sizes.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
              <button
                className="mt-4 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition-colors self-end"
                onClick={() => handleCheckout(item)}
                disabled={!selectedSize[item.id]}
              >
                Buy It Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Vinyls */}
      <h2 className="text-2xl font-semibold mb-4">Vinyls</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {merchItems.vinyls.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md border border-gray-300 overflow-hidden h-120 transform hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full h-80 flex items-center justify-center bg-gray-100">
              <img
                src={item.img}
                alt={item.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-lg font-bold mt-2">{item.price}</p>
              <button
                className="mt-4 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition-colors"
                onClick={() => handleCheckout(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Posters */}
      <h2 className="text-2xl font-semibold mb-4">Posters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {merchItems.posters.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md border border-gray-300 overflow-hidden h-120 transform hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full h-80 flex items-center justify-center bg-gray-100">
              <img
                src={item.img}
                alt={item.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-lg font-bold mt-2">{item.price}</p>
              <button
                className="mt-4 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition-colors"
                onClick={() => handleCheckout(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
