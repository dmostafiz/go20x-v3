
import React from 'react';

const PopularBrands: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('hero-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const favoriteDeals = [
    {
      id: 1,
      name: "Marriott Hotels",
      logo: "https://readdy.ai/api/search-image?query=Marriott%20hotel%20chain%20logo%20on%20white%20background%2C%20clean%20corporate%20branding%2C%20professional%20hospitality%20industry%20design%2C%20modern%20typography%2C%20luxury%20accommodation%20symbol&width=120&height=80&seq=marriott1&orientation=landscape",
      discount: "Save $45.00",
      category: "Luxury Hotels"
    },
    {
      id: 2,
      name: "Hilton Worldwide",
      logo: "https://readdy.ai/api/search-image?query=Hilton%20hotel%20chain%20logo%20on%20white%20background%2C%20clean%20corporate%20branding%2C%20professional%20hospitality%20industry%20design%2C%20modern%20typography%2C%20luxury%20accommodation%20symbol&width=120&height=80&seq=hilton1&orientation=landscape",
      discount: "Save $38.00",
      category: "Premium Hotels"
    },
    {
      id: 3,
      name: "Expedia Travel",
      logo: "https://readdy.ai/api/search-image?query=Expedia%20travel%20booking%20logo%20on%20white%20background%2C%20clean%20corporate%20branding%2C%20professional%20travel%20industry%20design%2C%20modern%20typography%2C%20vacation%20booking%20symbol&width=120&height=80&seq=expedia1&orientation=landscape",
      discount: "Save 25%",
      category: "Travel Booking"
    },
    {
      id: 4,
      name: "Booking.com",
      logo: "https://readdy.ai/api/search-image?query=Booking.com%20travel%20platform%20logo%20on%20white%20background%2C%20clean%20corporate%20branding%2C%20professional%20travel%20industry%20design%2C%20modern%20typography%2C%20accommodation%20booking%20symbol&width=120&height=80&seq=booking1&orientation=landscape",
      discount: "Save $52.00",
      category: "Hotel Booking"
    },
    {
      id: 5,
      name: "Airbnb Stays",
      logo: "https://readdy.ai/api/search-image?query=Airbnb%20vacation%20rental%20logo%20on%20white%20background%2C%20clean%20corporate%20branding%2C%20professional%20travel%20industry%20design%2C%20modern%20typography%2C%20home%20sharing%20symbol&width=120&height=80&seq=airbnb1&orientation=landscape",
      discount: "Save $28.00",
      category: "Vacation Rentals"
    },
    {
      id: 6,
      name: "Delta Airlines",
      logo: "https://readdy.ai/api/search-image?query=Delta%20Airlines%20logo%20on%20white%20background%2C%20clean%20corporate%20branding%2C%20professional%20aviation%20industry%20design%2C%20modern%20typography%2C%20airline%20travel%20symbol&width=120&height=80&seq=delta1&orientation=landscape",
      discount: "Save $75.00",
      category: "Airlines"
    }
  ];

  const popularBrands = [
    {
      id: 1,
      name: "Walt Disney World",
      logo: "https://readdy.ai/api/search-image?query=Walt%20Disney%20World%20theme%20park%20logo%20on%20white%20background%2C%20clean%20corporate%20branding%2C%20professional%20entertainment%20industry%20design%2C%20modern%20typography%2C%20family%20vacation%20symbol&width=120&height=80&seq=disney1&orientation=landscape"
    },
    {
      id: 2,
      name: "Universal Studios",
      logo: "https://readdy.ai/api/search-image?query=Universal%20Studios%20theme%20park%20logo%20on%20white%20background%2C%20clean%20corporate%20branding%2C%20professional%20entertainment%20industry%20design%2C%20modern%20typography%2C%20movie%20theme%20park%20symbol&width=120&height=80&seq=universal1&orientation=landscape"
    },
    {
      id: 3,
      name: "Six Flags",
      logo: "https://readdy.ai/api/search-image?query=Six%20Flags%20amusement%20park%20logo%20on%20white%20background%2C%20clean%20corporate%20branding%2C%20professional%20entertainment%20industry%20design%2C%20modern%20typography%2C%20roller%20coaster%20theme%20park%20symbol&width=120&height=80&seq=sixflags1&orientation=landscape"
    },
    {
      id: 4,
      name: "SeaWorld Parks",
      logo: "https://readdy.ai/api/search-image?query=SeaWorld%20marine%20park%20logo%20on%20white%20background%2C%20clean%20corporate%20branding%2C%20professional%20entertainment%20industry%20design%2C%20modern%20typography%2C%20marine%20life%20theme%20park%20symbol&width=120&height=80&seq=seaworld1&orientation=landscape"
    },
    {
      id: 5,
      name: "Knott's Berry Farm",
      logo: "https://readdy.ai/api/search-image?query=Knotts%20Berry%20Farm%20amusement%20park%20logo%20on%20white%20background%2C%20clean%20corporate%20branding%2C%20professional%20entertainment%20industry%20design%2C%20modern%20typography%2C%20family%20theme%20park%20symbol&width=120&height=80&seq=knotts1&orientation=landscape"
    },
    {
      id: 6,
      name: "Cedar Point",
      logo: "https://readdy.ai/api/search-image?query=Cedar%20Point%20amusement%20park%20logo%20on%20white%20background%2C%20clean%20corporate%20branding%2C%20professional%20entertainment%20industry%20design%2C%20modern%20typography%2C%20roller%20coaster%20capital%20symbol&width=120&height=80&seq=cedar1&orientation=landscape"
    },
    {
      id: 7,
      name: "Busch Gardens",
      logo: "https://readdy.ai/api/search-image?query=Busch%20Gardens%20theme%20park%20logo%20on%20white%20background%2C%20clean%20corporate%20branding%2C%20professional%20entertainment%20industry%20design%2C%20modern%20typography%2C%20adventure%20park%20symbol&width=120&height=80&seq=busch1&orientation=landscape"
    },
    {
      id: 8,
      name: "Great Wolf Lodge",
      logo: "https://readdy.ai/api/search-image?query=Great%20Wolf%20Lodge%20family%20resort%20logo%20on%20white%20background%2C%20clean%20corporate%20branding%2C%20professional%20hospitality%20industry%20design%2C%20modern%20typography%2C%20family%20vacation%20symbol&width=120&height=80&seq=wolf1&orientation=landscape"
    },
    {
      id: 9,
      name: "Dollywood",
      logo: "https://readdy.ai/api/search-image?query=Dollywood%20theme%20park%20logo%20on%20white%20background%2C%20clean%20corporate%20branding%2C%20professional%20entertainment%20industry%20design%2C%20modern%20typography%2C%20country%20music%20theme%20park%20symbol&width=120&height=80&seq=dolly1&orientation=landscape"
    },
    {
      id: 10,
      name: "Legoland",
      logo: "https://readdy.ai/api/search-image?query=Legoland%20theme%20park%20logo%20on%20white%20background%2C%20clean%20corporate%20branding%2C%20professional%20entertainment%20industry%20design%2C%20modern%20typography%2C%20LEGO%20brick%20family%20park%20symbol&width=120&height=80&seq=lego1&orientation=landscape"
    },
    {
      id: 11,
      name: "Hersheypark",
      logo: "https://readdy.ai/api/search-image?query=Hersheypark%20amusement%20park%20logo%20on%20white%20background%2C%20clean%20corporate%20branding%2C%20professional%20entertainment%20industry%20design%2C%20modern%20typography%2C%20chocolate%20theme%20park%20symbol&width=120&height=80&seq=hershey1&orientation=landscape"
    },
    {
      id: 12,
      name: "Silver Dollar City",
      logo: "https://readdy.ai/api/search-image?query=Silver%20Dollar%20City%20theme%20park%20logo%20on%20white%20background%2C%20clean%20corporate%20branding%2C%20professional%20entertainment%20industry%20design%2C%20modern%20typography%2C%20old%20west%20theme%20park%20symbol&width=120&height=80&seq=silver1&orientation=landscape"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Favorites Near You Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Favorites Near You</h2>
            <button 
              onClick={scrollToForm}
              className="text-blue-500 hover:text-blue-600 font-semibold cursor-pointer whitespace-nowrap"
            >
              View More
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {favoriteDeals.map((deal) => (
              <div 
                key={deal.id} 
                onClick={scrollToForm}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
              >
                <div className="relative mb-3">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToForm();
                    }}
                    className="absolute top-2 right-2 text-gray-400 hover:text-red-5
                    00 transition-colors"
                  >
                    <i className="ri-heart-line text-lg"></i>
                  </button>
                  <div className="w-full h-16 flex items-center justify-center mb-3">
                    <img 
                      src={deal.logo} 
                      alt={deal.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{deal.name}</h3>
                <p className="text-blue-500 font-medium text-sm">{deal.discount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Brands Section */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Popular Brands</h2>
            <button 
              onClick={scrollToForm}
              className="text-blue-500 hover:text-blue-600 font-semibold cursor-pointer whitespace-nowrap"
            >
              <i className="ri-arrow-right-line ml-1"></i>
            </button>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {popularBrands.map((brand) => (
                <div 
                  key={brand.id} 
                  onClick={scrollToForm}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
                >
                  <div className="relative">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToForm();
                      }}
                      className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <i className="ri-heart-line text-lg"></i>
                    </button>
                    <div className="w-full h-16 flex items-center justify-center">
                      <img 
                        src={brand.logo} 
                        alt={brand.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrow */}
            <button 
              onClick={scrollToForm}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <i className="ri-arrow-right-line text-gray-600"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;
