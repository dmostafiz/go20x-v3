
import React from 'react';

const TravelExperiences: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('hero-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Exclusive <span className="text-orange-500">Member Access</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlock luxury travel experiences and earn substantial commissions with our exclusive membership program
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-vip-crown-fill text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Premium Access</h3>
                  <p className="text-orange-500 font-semibold">Luxury for Less</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your membership gives you insider pricing on <strong>3 million hotels</strong>, <strong>200,000 retailers</strong>, and <strong>90,000 restaurants</strong> worldwide.
              </p>
              <div className="flex items-center text-orange-500 font-semibold">
                <i className="ri-arrow-right-line mr-2"></i>
                Save up to 60% on luxury accommodations
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-money-dollar-circle-fill text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Earn While You Travel</h3>
                  <p className="text-green-500 font-semibold">Passive Income Stream</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Earn up to <strong>60% commissions</strong> when new members join and up to <strong>60% again</strong> when they renew each month.
              </p>
              <div className="flex items-center text-green-500 font-semibold">
                <i className="ri-arrow-right-line mr-2"></i>
                Weekly payouts every Friday
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join thousands of members who are already living their dream lifestyle while earning substantial income.
              </p>
              <button 
                onClick={scrollToForm}
                className="bg-white text-orange-500 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
              >
                Get Started Today
              </button>
            </div>
          </div>

          {/* Right Side - Visual Content */}
          <div className="space-y-8">
            {/* Main Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://static.readdy.ai/image/e51407ef51fd55054dec0ca329ae8c8f/ff18ec7700a3f9bf547c00b01e850aab.png"
                alt="New Affiliates Getting Started"
                className="w-full h-80 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-2xl font-bold mb-2">New Affiliates</h4>
                <p className="text-lg opacity-90">Take the first step</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-orange-100">
                <div className="text-3xl font-bold text-orange-500 mb-2">3M+</div>
                <div className="text-gray-700 font-semibold">Hotels & Resorts</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-orange-100">
                <div className="text-3xl font-bold text-green-500 mb-2">up to 60%</div>
                <div className="text-gray-700 font-semibold">Commissions</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-orange-100">
                <div className="text-3xl font-bold text-blue-500 mb-2">200K+</div>
                <div className="text-gray-700 font-semibold">Retail Partners</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-orange-100">
                <div className="text-3xl font-bold text-purple-500 mb-2">90K+</div>
                <div className="text-gray-700 font-semibold">Restaurants</div>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Member Benefits Include:</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3 text-lg"></i>
                  <span className="text-gray-700">Wholesale pricing on luxury accommodations</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3 text-lg"></i>
                  <span className="text-gray-700">Access to exclusive travel experiences</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3 text-lg"></i>
                  <span className="text-gray-700">Weekly commission payouts</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-3 text-lg"></i>
                  <span className="text-gray-700">24/7 member support community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelExperiences;
