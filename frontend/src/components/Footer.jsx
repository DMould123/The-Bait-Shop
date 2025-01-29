import { FaWater } from 'react-icons/fa';
import {
  SiCocacola,
  SiMcdonalds,
  SiStubhub,
  SiTicketmaster
} from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Venue Information */}
        <div className="text-center mb-4 md:mb-0">
          <p className="text-lg font-bold">
            The Bait Shop <FaWater className="inline text-blue-500 text-l" />
          </p>
          <p className="text-sm">456 Bay St, Newport, CA 92663</p>
          <p className="text-sm">+1 (123) 456-7890</p>
          <p className="text-sm">info@thebaitshop.com</p>
        </div>

        {/* Partners Section */}
        <div className="text-center">
          <h3 className="text-lg font-bold mb-2">Our Partners</h3>
          <div className="flex justify-center space-x-4">
            <SiCocacola className="text-6xl" />
            <SiStubhub className="text-6xl" />
            <SiMcdonalds className="text-5xl" />
            <SiTicketmaster className="text-7xl" />
          </div>
        </div>
      </div>

      <div className="mt-8 text-gray-500 text-sm text-center">
        <p>
          &copy; {new Date().getFullYear()} The Bait Shop{' '}
          <FaWater className="inline text-blue-500 text-l" /> All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
