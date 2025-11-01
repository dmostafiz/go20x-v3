
import React from 'react';

const HolidayDeals: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('hero-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const deals = [
    {
      id: 1,
      brand: 'Samsung',
      title: 'Up to 30% off your purchase',
      image: 'https://readdy.ai/api/search-image?query=Samsung%20electronics%20store%20display%20with%20modern%20TVs%20smartphones%20and%20tablets%20showcasing%20latest%20technology%20products%20in%20clean%20retail%20environment%20with%20Samsung%20branding%20and%20promotional%20banners&width=400&height=200&seq=samsung-deal&orientation=landscape'
    },
    {
      id: 2,
      brand: "Kohl's",
      title: '15% off purchase of $100 or more',
      image: 'https://readdy.ai/api/search-image?query=Happy%20diverse%20family%20shopping%20together%20in%20modern%20retail%20store%20with%20shopping%20bags%20and%20smiles%20showing%20family-friendly%20shopping%20experience%20with%20warm%20lighting%20and%20comfortable%20atmosphere&width=400&height=200&seq=kohls-family&orientation=landscape'
    },
    {
      id: 3,
      brand: 'Amazon',
      title: 'Up to 40% off Amazon Devices!',
      image: 'https://readdy.ai/api/search-image?query=Amazon%20Echo%20devices%20and%20tablets%20arranged%20on%20modern%20desk%20setup%20with%20smart%20home%20technology%20and%20digital%20lifestyle%20accessories%20in%20clean%20minimalist%20environment&width=400&height=200&seq=amazon-devices&orientation=landscape'
    },
    {
      id: 4,
      brand: 'Regal',
      title: 'Save up to 25% on Movie Tickets',
      image: 'https://readdy.ai/api/search-image?query=Modern%20movie%20theater%20interior%20with%20comfortable%20red%20seats%20and%20large%20screen%20showing%20cinematic%20experience%20with%20popcorn%20and%20movie%20atmosphere&width=400&height=200&seq=regal-cinema&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Holiday Shopping Deals
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-lg text-gray-600">
              Exclusive member discounts on top brands and retailers
            </p>
            <button 
              onClick={scrollToForm}
              className="text-orange-500 hover:text-orange-600 font-semibold flex items-center cursor-pointer whitespace-nowrap"
            >
              View All Deals
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              onClick={scrollToForm}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group"
            >
              {/* Deal Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.brand}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Deal Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {deal.brand}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {deal.title}
                </p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToForm();
                  }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Save More with Member Pricing
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get exclusive access to wholesale pricing on over 200,000 retailers worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToForm}
                className="bg-white text-orange-500 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
              >
                Start Saving Today
              </button>
              <button 
                onClick={scrollToForm}
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-orange-500 transition-colors whitespace-nowrap cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolidayDeals;
