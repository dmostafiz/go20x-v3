
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('hero-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      id: 1,
      title: 'Expert Marketing & Money Guides',
      description: 'Access proven strategies and step-by-step guides to maximize your earning potential.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20mentor%20teaching%20marketing%20strategies%20with%20charts%20and%20graphs%2C%20modern%20office%20setting%2C%20confident%20expert%20explaining%20financial%20growth%20concepts%2C%20warm%20lighting%2C%20business%20success%20atmosphere&width=400&height=300&seq=marketing-guides&orientation=landscape'
    },
    {
      id: 2,
      title: '24/7 Member Community',
      description: 'Connect with like-minded entrepreneurs and get support whenever you need it.',
      image: 'https://readdy.ai/api/search-image?query=Diverse%20group%20of%20successful%20entrepreneurs%20networking%20and%20collaborating%2C%20modern%20co-working%20space%2C%20laptops%20and%20smartphones%2C%20friendly%20community%20atmosphere%2C%20professional%20business%20meeting&width=400&height=300&seq=member-community&orientation=landscape'
    },
    {
      id: 3,
      title: 'Save More. Earn More.',
      description: 'Unlock exclusive discounts while building your income through our affiliate program.',
      image: 'https://readdy.ai/api/search-image?query=Financial%20growth%20concept%20with%20money%2C%20savings%2C%20and%20investment%20symbols%2C%20calculator%20and%20charts%20showing%20profit%20increase%2C%20gold%20coins%20and%20dollar%20bills%2C%20prosperity%20and%20wealth%20building&width=400&height=300&seq=save-earn-more&orientation=landscape'
    },
    {
      id: 4,
      title: 'Freedom Built Around You',
      description: 'Design your lifestyle with flexible income opportunities that work on your schedule.',
      image: 'https://readdy.ai/api/search-image?query=Person%20working%20remotely%20on%20laptop%20from%20beautiful%20beach%20location%2C%20digital%20nomad%20lifestyle%2C%20freedom%20and%20flexibility%2C%20tropical%20paradise%20background%2C%20work-life%20balance%20concept&width=400&height=300&seq=freedom-lifestyle&orientation=landscape'
    },
    {
      id: 5,
      title: 'Residual Income That Lasts',
      description: 'Build sustainable income streams that continue generating revenue month after month.',
      image: 'https://readdy.ai/api/search-image?query=Passive%20income%20concept%20with%20money%20flowing%20continuously%2C%20recurring%20revenue%20streams%2C%20financial%20stability%20and%20growth%2C%20investment%20returns%2C%20long-term%20wealth%20building%20visualization&width=400&height=300&seq=residual-income&orientation=landscape'
    },
    {
      id: 6,
      title: 'Work Anywhere. Live Anywhere.',
      description: 'Break free from location constraints and create income from anywhere in the world.',
      image: 'https://readdy.ai/api/search-image?query=Digital%20nomad%20working%20from%20exotic%20locations%20around%20the%20world%2C%20laptop%20on%20beach%2C%20mountain%20cafe%2C%20city%20rooftop%2C%20global%20freedom%20lifestyle%2C%20remote%20work%20flexibility&width=400&height=300&seq=work-anywhere&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Why Become a Travel Affiliate?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of members who are earning commissions with our copy-paste content and proven marketing system. Start building your travel business today.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={scrollToForm}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-base opacity-90 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-orange-400 transition-colors duration-300 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our community of successful travel affiliates and start earning today with our proven system.
          </p>
          <button 
            onClick={scrollToForm}
            className="bg-white text-teal-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer text-lg"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
