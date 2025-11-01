
import { useState } from 'react';

export default function Testimonials() {
  const scrollToForm = () => {
    const formElement = document.getElementById('hero-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Kelsie G.',
      title: 'Stay at Home Mom',
      text: 'The bills and financial stresses were piling up before Kelsie discovered digital marketing. Today she has earned over $30,000 referring others to our Membership.',
      image: 'https://static.readdy.ai/image/e51407ef51fd55054dec0ca329ae8c8f/f6ec7d9d06c2d50fe7f3d97fd1307138.jpeg',
      earnings: '$30,000'
    },
    {
      id: 2,
      name: 'Jenna S.',
      title: 'Retired School Teacher',
      text: 'After retiring from the public sector Jenna turned her focus on online and social media marketing. Since joining as a member last year, Jenna has earned over $80,000.',
      image: 'https://static.readdy.ai/image/e51407ef51fd55054dec0ca329ae8c8f/485f00326b97d188598112f61a19d65a.jpeg',
      earnings: '$80,000'
    },
    {
      id: 3,
      name: 'Jesenia V.',
      title: 'Stay at Home Mom',
      text: 'Jesenia is a stay at home mom that also works full time marketing online with her phone and wifi. Since joining us Jesenia has earned over $6,000 in commissions.',
      image: 'https://static.readdy.ai/image/e51407ef51fd55054dec0ca329ae8c8f/6f52f0e15d82db8297af5c7bcf64c960.jpeg',
      earnings: '$6,000'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="ri-star-fill text-yellow-400 text-2xl mx-1"></i>
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our members are already<br />
            earning cash and bonuses!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              onClick={scrollToForm}
              className="bg-gray-800 rounded-lg p-8 border-2 border-yellow-400 cursor-pointer hover:transform hover:scale-105 transition-transform"
            >
              <div className="text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
                />
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {testimonial.name}
                </h3>
                
                <p className="text-yellow-400 font-semibold mb-6">
                  {testimonial.title}
                </p>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-xs max-w-md mx-auto">
            *No guarantee of income. Individual results will vary.
          </p>
        </div>
      </div>
    </section>
  );
}
