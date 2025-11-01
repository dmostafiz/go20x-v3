
import React from 'react';

const hotels = [
  {
    id: 1,
    name: 'Grand Palace Resort',
    location: 'Bali, Indonesia',
    rating: 4.8,
    reviews: 1247,
    publicPrice: 289,
    memberPrice: 159,
    savings: 130,
    image: 'https://readdy.ai/api/search-image?query=Luxury%20beachfront%20resort%20in%20Bali%20Indonesia%20with%20infinity%20pool%20overlooking%20ocean%2C%20modern%20tropical%20architecture%20with%20palm%20trees%2C%20golden%20sunset%20lighting%2C%20professional%20hotel%20photography%20style%2C%20high%20resolution%20resort%20exterior&width=400&height=300&seq=hotel-bali-resort&orientation=landscape'
  },
  {
    id: 2,
    name: 'Mountain View Lodge',
    location: 'Aspen, Colorado',
    rating: 4.9,
    reviews: 892,
    publicPrice: 425,
    memberPrice: 255,
    savings: 170,
    image: 'https://readdy.ai/api/search-image?query=Luxury%20mountain%20lodge%20in%20snowy%20Aspen%20Colorado%20with%20wooden%20architecture%20and%20mountain%20views%2C%20cozy%20winter%20resort%20with%20warm%20lighting%2C%20professional%20hotel%20photography%20style%2C%20high%20resolution%20mountain%20resort%20exterior&width=400&height=300&seq=hotel-aspen-lodge&orientation=landscape'
  },
  {
    id: 3,
    name: 'City Center Hotel',
    location: 'Paris, France',
    rating: 4.7,
    reviews: 2156,
    publicPrice: 195,
    memberPrice: 125,
    savings: 70,
    image: 'https://readdy.ai/api/search-image?query=Elegant%20boutique%20hotel%20in%20central%20Paris%20France%20with%20classic%20European%20architecture%2C%20charming%20Parisian%20building%20facade%20with%20ornate%20details%2C%20professional%20hotel%20photography%20style%2C%20high%20resolution%20urban%20hotel%20exterior&width=400&height=300&seq=hotel-paris-center&orientation=landscape'
  },
  {
    id: 4,
    name: 'Seaside Paradise Resort',
    location: 'Maldives',
    rating: 5.0,
    reviews: 743,
    publicPrice: 650,
    memberPrice: 389,
    savings: 261,
    image: 'https://readdy.ai/api/search-image?query=Overwater%20bungalows%20in%20Maldives%20with%20crystal%20clear%20turquoise%20lagoon%2C%20luxury%20tropical%20resort%20with%20thatched%20roof%20villas%2C%20pristine%20beach%20paradise%2C%20professional%20resort%20photography%20style%2C%20high%20resolution%20overwater%20villa&width=400&height=300&seq=hotel-maldives-resort&orientation=landscape'
  }
];

export default function PriceComparison() {
  const scrollToForm = () => {
    const formElement = document.getElementById('hero-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            See The Difference
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare public booking prices with exclusive member rates and discover your savings
          </p>
        </div>

        {/* Hotel Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Hotel Image */}
              <div className="relative h-48">
                <img 
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save ${hotel.savings}
                </div>
              </div>

              {/* Hotel Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{hotel.name}</h3>
                  <p className="text-gray-600 flex items-center">
                    <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center mr-1"></i>
                    {hotel.location}
                  </p>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`ri-star-${i < Math.floor(hotel.rating) ? 'fill' : 'line'} w-4 h-4 flex items-center justify-center text-yellow-400`}></i>
                      ))}
                      <span className="ml-2 text-sm text-gray-600">
                        {hotel.rating} ({hotel.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price Comparison */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    {/* Public Price */}
                    <div className="text-center flex-1">
                      <p className="text-sm text-gray-500 mb-1">Public Price</p>
                      <p className="text-2xl font-bold text-red-500 line-through">
                        ${hotel.publicPrice}
                      </p>
                      <p className="text-xs text-gray-400">per night</p>
                    </div>

                    {/* VS Divider */}
                    <div className="mx-4">
                      <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                        <span className="text-xs font-semibold text-gray-600">VS</span>
                      </div>
                    </div>

                    {/* Member Price */}
                    <div className="text-center flex-1">
                      <p className="text-sm text-gray-500 mb-1">Member Price</p>
                      <p className="text-2xl font-bold text-green-600">
                        ${hotel.memberPrice}
                      </p>
                      <p className="text-xs text-gray-400">per night</p>
                    </div>
                  </div>

                  {/* Savings Highlight */}
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <p className="text-green-700 font-semibold">
                      You Save ${hotel.savings} per night
                    </p>
                    <p className="text-sm text-green-600">
                      {Math.round((hotel.savings / hotel.publicPrice) * 100)}% off public rates
                    </p>
                  </div>

                  {/* Book Button */}
                  <button 
                    onClick={scrollToForm}
                    className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-7

0 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Book Member Rate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Saving?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of smart travelers who save up to 60% on their hotel bookings
            </p>
            <button 
              onClick={scrollToForm}
              className="bg-orange-500 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Become a Member Today
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
