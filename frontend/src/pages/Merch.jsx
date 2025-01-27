import React from 'react';

const merchItems = [
  {
    id: 1,
    title: 'Concert Poster',
    description: 'High-quality concert poster featuring the latest tour.',
    price: '$15.00',
    img: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1737801111/The_Bait_Shop/killerstheocposter_q7zakd-removebg-preview_aa2lwa.png',
  },
  {
    id: 2,
    title: 'CD Album',
    description: 'Latest album from your favorite band.',
    price: '$10.00',
    img: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1737934600/The_Bait_Shop/0602547859303_cilaec.webp',
  },
  {
    id: 3,
    title: 'T-Shirt',
    description: 'Stylish T-shirt with the band logo.',
    price: '$20.00',
    img: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1737801049/The_Bait_Shop/tshirt_v8ctpi-removebg-preview_smcuqv.png',
  },
  {
    id: 4,
    title: 'Limited Edition T-shirt',
    description: 'Limited edition T-shirt for collectors.',
    price: '$25.00',
    img: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1738016065/The_Bait_Shop/octshirtlogo2a-removebg-preview_vjqvcg.png',
  },
  {
    id: 5,
    title: 'Vinyl Record',
    description: 'Classic vinyl record of the band.',
    price: '$30.00',
    img: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1737934600/The_Bait_Shop/0602547859303_cilaec.webp',
  },
  {
    id: 6,
    title: 'Hoodie',
    description: 'Comfortable hoodie with the band design.',
    price: '$40.00',
    img: 'https://res.cloudinary.com/dele4dvi9/image/upload/v1737800973/The_Bait_Shop/thirt2_yuqknm.png',
  },
];

export default function Merch() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Merchandise</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {merchItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-lg font-bold mt-2">{item.price}</p>
              <button className="mt-4 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
