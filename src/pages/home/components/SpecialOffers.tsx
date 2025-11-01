
import React from 'react';

export default function SpecialOffers() {
  const scrollToForm = () => {
    const formElement = document.getElementById('hero-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const offers = [
    {
      id: 1,
      title: 'Early Bird Special',
      subtitle: 'Book 3 Months Ahead',
      discount: '30% OFF',
      description: 'Save big when you plan ahead! Book your dream vacation 3 months in advance and enjoy exclusive savings.',
      validUntil: 'Valid until Dec 31, 2024',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20tropical%20resort%20with%20infinity%20pool%20overlooking%20ocean%2C%20palm%20trees%2C%20elegant%20modern%20architecture%2C%20golden%20hour%20lighting%2C%20peaceful%20paradise%20atmosphere%2C%20professional%20resort%20photography&width=500&height=300&seq=early-bird-offer&orientation=landscape',
      bgColor: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Last Minute Deals',
      subtitle: 'Spontaneous Adventures',
      discount: 'Up to 50% OFF',
      description: 'Ready for an impromptu getaway? Grab these incredible last-minute deals and save while you explore.',
      validUntil: 'Limited time offers',
      image: 'https://readdy.ai/api/search-image?query=Exciting%20adventure%20travel%20scene%20with%20backpacker%20on%20mountain%20peak%2C%20dramatic%20landscape%2C%20sunrise%20lighting%2C%20sense%20of%20freedom%20and%20adventure%2C%20inspirational%20travel%20photography&width=500&height=300&seq=last-minute-offer&orientation=landscape',
      bgColor: 'from-orange-500 to-red-500'
    },
    {
      id: 3,
      title: 'Group Bookings',
      subtitle: 'Travel with Friends',
      discount: '25% OFF',
      description: 'The more the merrier! Book for 6+ people and enjoy group discounts plus exclusive group activities.',
      validUntil: 'Year-round savings',
      image: 'https://readdy.ai/api/search-image?query=Happy%20group%20of%20friends%20celebrating%20on%20beautiful%20beach%2C%20diverse%20people%20laughing%20and%20enjoying%20vacation%20together%2C%20sunset%20background%2C%20joyful%20travel%20moments%2C%20professional%20lifestyle%20photography&width=500&height=300&seq=group-booking-offer&orientation=landscape',
      bgColor: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Special Offers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't miss out on these exclusive deals! Limited time offers to make your 
            dream vacation more affordable than ever.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image with Gradient Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${offer.bgColor} opacity-80`} />
                  
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-lg">
                    {offer.discount}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-lg text-teal-600 font-semibold mb-4">
                    {offer.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {offer.description}
                  </p>
                  
                  {/* Valid Until */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-gray-500 italic">
                      {offer.validUntil}
                    </span>
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                      <i className="ri-time-line text-teal-600 text-sm"></i>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <button className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full transition-colors duration-300 whitespace-nowrap cursor-pointer">
                    Claim This Offer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Never Miss a Deal!
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter and be the first to know about exclusive offers and flash sales.
          </p>
          <button className="px-8 py-4 bg-white text-teal-600 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
}
