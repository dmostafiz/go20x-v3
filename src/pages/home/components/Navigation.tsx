
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-teal-600" style={{ fontFamily: '"Pacifico", serif' }}>
              Roam
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-900 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Home</a>
              <a href="#" className="text-gray-900 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Destinations</a>
              <a href="#" className="text-gray-900 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Tours</a>
              <a href="#" className="text-gray-900 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">About</a>
              <a href="#" className="text-gray-900 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">Contact</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer">
              Book Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-teal-600 cursor-pointer"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#" className="text-gray-900 hover:text-teal-600 block px-3 py-2 text-base font-medium cursor-pointer">Home</a>
            <a href="#" className="text-gray-900 hover:text-teal-600 block px-3 py-2 text-base font-medium cursor-pointer">Destinations</a>
            <a href="#" className="text-gray-900 hover:text-teal-600 block px-3 py-2 text-base font-medium cursor-pointer">Tours</a>
            <a href="#" className="text-gray-900 hover:text-teal-600 block px-3 py-2 text-base font-medium cursor-pointer">About</a>
            <a href="#" className="text-gray-900 hover:text-teal-600 block px-3 py-2 text-base font-medium cursor-pointer">Contact</a>
            <button className="w-full text-left bg-teal-600 text-white px-3 py-2 rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
