
const destinations = [
  {
    id: 1,
    title: '7 Nights',
    subtitle: 'Taino Beach Resort',
    location: 'Bahamas',
    price: '$499 (includes tax)',
    originalPrice: '$499 (includes tax)',
    image: 'https://static.readdy.ai/image/e51407ef51fd55054dec0ca329ae8c8f/e0ca650a7dfb09a5b5715a6994f4ce4d.png'
  },
  {
    id: 2,
    title: '5 Nights',
    subtitle: 'Bor Saen Villa Resort',
    location: 'Thailand',
    price: '$470 (includes tax)',
    originalPrice: '$470 (includes tax)',
    image: 'https://static.readdy.ai/image/e51407ef51fd55054dec0ca329ae8c8f/8a50267b2e046c1a50c980db6cad0bd4.png'
  },
  {
    id: 3,
    title: '7 Nights',
    subtitle: 'Las Terrazas De Cala Codolar',
    location: 'Spain',
    price: '$464 (includes tax)',
    originalPrice: '$464 (includes tax)',
    image: 'https://static.readdy.ai/image/e51407ef51fd55054dec0ca329ae8c8f/dbd0f97f10f69fa88f498ad49f33c402.png'
  },
  {
    id: 4,
    title: '3 Nights',
    subtitle: 'Knocktopher Abbey',
    location: 'Ireland',
    price: '$299 (includes tax)',
    originalPrice: '$299 (includes tax)',
    image: 'https://static.readdy.ai/image/e51407ef51fd55054dec0ca329ae8c8f/becacd6a577d9c44099cf10e28cefd55.png'
  }
];

export default function FeaturedDestinations() {
  const scrollToForm = () => {
    const formElement = document.getElementById('hero-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full h-[80vh] flex flex-col md:flex-row">
      {destinations.map((destination, index) => (
        <div
          key={destination.id}
          className="relative flex-1 h-1/4 md:h-full group cursor-pointer overflow-hidden"
          onClick={scrollToForm}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${destination.image})` }}
          />
          
          {/* Dark Overlay for Lower Third */}
          <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-3 pb-6 md:p-8 text-white">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 leading-tight">
                {destination.title}
              </h3>
              <p className="text-xs md:text-lg lg:text-xl mb-1 md:mb-2 opacity-90 italic text-yellow-300">
                {destination.subtitle}
              </p>
              {destination.location && (
                <p className="text-xs md:text-base mb-1 md:mb-4 opacity-80 text-gray-200">
                  {destination.location}
                </p>
              )}
              <div className="flex items-center space-x-2 md:space-x-4 mb-2 md:mb-6">
                <span className="text-base md:text-2xl font-bold text-yellow-400">
                  {destination.price}
                </span>
                {destination.originalPrice !== destination.price && (
                  <span className="text-xs md:text-lg text-gray-300 line-through">
                    {destination.originalPrice}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Hover Effect Border */}
          <div className="absolute inset-0 border-2 md:border-4 border-transparent group-hover:border-orange-400 transition-colors duration-300 pointer-events-none" />
        </div>
      ))}
    </section>
  );
}
