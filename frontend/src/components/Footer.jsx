import { FaWater } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-4">One of Newport County's most iconic places for music, concerts, and club experiences!</p>
        <div className="mb-4">
          <h3 className="font-semibold">
            The Bait Shop <FaWater className="inline text-blue-500 text-1xl" />
          </h3>
          <p>456 Bay St</p>
          <p>Newport, CA 92663</p>
          <p>+1 (123) 456-7890</p>
          <p>info@thebaitshop.com</p>
        </div>
        <div className="mt-8 text-gray-500 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} The Bait Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
