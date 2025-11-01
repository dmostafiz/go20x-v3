
import React from 'react';

function DigitalResources() {
  const scrollToForm = () => {
    const formElement = document.getElementById('hero-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resources = [
    {
      id: 1,
      title: 'Welcome to the Community - Start Here',
      category: 'Getting Started',
      lessons: '10 Lessons',
      rating: 5.0,
      reviews: 8,
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20training%20setup%20with%20red%20target%20arrow%20and%20bullseye%20on%20desk%2C%20motivational%20workspace%20environment%2C%20bright%20orange%20and%20red%20colors%2C%20clean%20modern%20office%20setting%2C%20goal%20achievement%20concept%20with%20notebooks%20and%20planning%20materials&width=400&height=300&seq=welcome-start-v2&orientation=landscape'
    },
    {
      id: 2,
      title: 'The King of Content vs Know - Like - Trust',
      category: 'Content Marketing',
      lessons: '1 Lesson',
      rating: 5.0,
      reviews: 3,
      image: 'https://readdy.ai/api/search-image?query=Dark%20professional%20business%20meeting%20room%20with%20modern%20presentation%20setup%2C%20authority%20and%20expertise%20atmosphere%2C%20sleek%20black%20conference%20table%2C%20professional%20lighting%2C%20content%20marketing%20materials%20and%20charts%20on%20table&width=400&height=300&seq=content-king-v2&orientation=landscape'
    },
    {
      id: 3,
      title: 'Facebook Trends 2025',
      category: 'Social Media Marketing',
      lessons: '1 Lesson',
      rating: 5.0,
      reviews: 2,
      image: 'https://readdy.ai/api/search-image?query=Modern%20social%20media%20workspace%20with%20blue%20themed%20setup%2C%20Facebook%20brand%20colors%2C%20digital%20marketing%20tools%20and%20devices%2C%20professional%20social%20media%20management%20environment%2C%20clean%20desk%20with%20multiple%20screens&width=400&height=300&seq=facebook-trends-v2&orientation=landscape'
    },
    {
      id: 4,
      title: 'Custom AI Twin in 2 Minutes!',
      category: 'AI and Agents',
      lessons: '1 Lesson',
      rating: 5.0,
      reviews: 2,
      image: 'https://readdy.ai/api/search-image?query=Futuristic%20AI%20technology%20workspace%20with%20holographic%20displays%2C%20artificial%20intelligence%20concept%20visualization%2C%20modern%20tech%20environment%2C%20blue%20and%20purple%20lighting%2C%20advanced%20computer%20setup%20with%20AI%20interface%20elements&width=400&height=300&seq=ai-twin-v2&orientation=landscape'
    },
    {
      id: 5,
      title: 'Marketers Marketing to Marketers',
      category: 'Marketing Strategy',
      lessons: '1 Lesson',
      rating: 5.0,
      reviews: 2,
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20handshake%20in%20modern%20office%20setting%2C%20marketing%20collaboration%20concept%2C%20warm%20professional%20lighting%2C%20business%20strategy%20materials%20on%20table%2C%20successful%20partnership%20atmosphere&width=400&height=300&seq=marketers-marketing-v2&orientation=landscape'
    },
    {
      id: 6,
      title: 'Financial Independence. Retire Early.',
      category: 'Investing',
      lessons: '7 Lessons',
      rating: 5.0,
      reviews: 0,
      image: 'https://readdy.ai/api/search-image?query=Luxury%20financial%20planning%20office%20with%20golden%20accents%2C%20wealth%20building%20concept%2C%20elegant%20desk%20setup%20with%20financial%20charts%20and%20investment%20documents%2C%20sophisticated%20dark%20background%20with%20gold%20highlights&width=400&height=300&seq=financial-independence-v2&orientation=landscape'
    },
    {
      id: 7,
      title: 'What Makes People BUY!',
      category: 'Sales Psychology',
      lessons: '1 Lesson',
      rating: 5.0,
      reviews: 0,
      image: 'https://readdy.ai/api/search-image?query=Consumer%20psychology%20concept%20with%20shopping%20cart%20and%20purchase%20decision%20elements%2C%20orange%20and%20brown%20color%20scheme%2C%20retail%20psychology%20workspace%2C%20buying%20behavior%20analysis%20setup%20with%20charts%20and%20graphs&width=400&height=300&seq=what-makes-buy-v2&orientation=landscape'
    },
    {
      id: 8,
      title: 'Intro to Canva AI',
      category: 'AI and Agents',
      lessons: '1 Lesson',
      rating: 5.0,
      reviews: 0,
      image: 'https://readdy.ai/api/search-image?query=Creative%20design%20workspace%20with%20colorful%20graphics%20and%20design%20tools%2C%20modern%20design%20software%20environment%2C%20vibrant%20creative%20studio%20setup%2C%20artistic%20materials%20and%20digital%20design%20elements%2C%20inspiring%20creative%20atmosphere&width=400&height=300&seq=canva-ai-v2&orientation=landscape'
    },
    {
      id: 9,
      title: 'Re-awaken the Giant Within',
      category: 'Personal Development',
      lessons: '1 Lesson',
      rating: 5.0,
      reviews: 0,
      image: 'https://readdy.ai/api/search-image?query=Powerful%20personal%20development%20concept%20with%20confident%20business%20leader%20silhouette%2C%20motivational%20and%20inspirational%20atmosphere%2C%20dramatic%20lighting%2C%20success%20and%20growth%20mindset%20visualization%2C%20dark%20background%20with%20inspiring%20elements&width=400&height=300&seq=giant-within-v2&orientation=landscape'
    },
    {
      id: 10,
      title: 'Think and Grow Rich',
      category: 'Wealth Creation',
      lessons: '3 Lessons',
      rating: 5.0,
      reviews: 0,
      image: 'https://readdy.ai/api/search-image?query=Classic%20wealth%20building%20concept%20with%20elegant%20golden%20elements%2C%20vintage%20luxury%20aesthetic%2C%20sophisticated%20financial%20success%20environment%2C%20rich%20textures%20and%20premium%20materials%2C%20timeless%20wealth%20creation%20atmosphere&width=400&height=300&seq=think-grow-rich-v2&orientation=landscape'
    }
  ];

  const categories = [
    { name: 'Social Media Marketing', count: 2847, color: 'bg-blue-500' },
    { name: 'AI and Agents', count: 1923, color: 'bg-purple-500' },
    { name: 'Investing', count: 3156, color: 'bg-green-500' },
    { name: 'Wealth Creation', count: 2891, color: 'bg-orange-500' },
    { name: 'Content Marketing', count: 1567, color: 'bg-red-500' },
    { name: 'Personal Development', count: 1834, color: 'bg-teal-500' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Access Over <span className="text-orange-500">12,000 Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your membership includes unlimited access to our complete library of videos, digital courses, and training materials across multiple categories
          </p>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map((category, index) => (
            <div 
              key={index} 
              onClick={scrollToForm}
              className="text-center cursor-pointer hover:transform hover:scale-105 transition-transform"
            >
              <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3`}>
                <i className="ri-play-circle-fill text-2xl text-white"></i>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{category.name}</h3>
              <p className="text-gray-500 text-xs">{category.count.toLocaleString()} resources</p>
            </div>
          ))}
        </div>

        {/* Featured Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {resources.map((resource) => (
            <div
              key={resource.id}
              onClick={scrollToForm}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden cursor-pointer"
            >
              {/* Course Thumbnail */}
              <div className="relative">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {resource.lessons}
                </div>
                <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
                  <i className="ri-file-line mr-1"></i>
                  0 file
                </div>
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Course Info */}
              <div className="p-4">
                <div className="text-xs text-orange-500 font-semibold mb-2 uppercase tracking-wide">
                  {resource.category}
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-3 leading-tight line-clamp-2">
                  {resource.title}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-yellow-400 text-xs"></i>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-gray-700">{resource.rating}</span>
                    <span className="text-xs text-gray-500 ml-1">({resource.reviews} Reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Unlock Your Complete Learning Library
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get instant access to over 12,000 premium resources, courses, and training materials designed to accelerate your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToForm}
              className="bg-white text-orange-500 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Start Learning Today
            </button>
            <button 
              onClick={scrollToForm}
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-orange-500 transition-colors whitespace-nowrap cursor-pointer"
            >
              Browse All Categories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigitalResources;
