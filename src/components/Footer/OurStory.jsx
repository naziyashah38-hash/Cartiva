import React from 'react';
import { CheckCircle2, Gem, Heart, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <CheckCircle2 className="w-5 h-5 text-[#8A5A44]" />,
    title: 'ETHICALLY SOURCED',
    description: 'Responsibly made with care',
  },
  {
    icon: <Gem className="w-5 h-5 text-[#8A5A44]" />,
    title: 'PREMIUM QUALITY',
    description: 'Crafted to last a lifetime',
  },
  {
    icon: <Heart className="w-5 h-5 text-[#8A5A44]" />,
    title: 'MADE WITH LOVE',
    description: 'Designed in Cartiva',
  },
];

const OurStory = () => {
  return (
    <section className="py-4 px-18 max-w-8xl mx-auto">
      <div className="bg-[#FAF5F0] rounded-sm p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-[#F2E8DF]">
        
        {/* Left Side: Image */}
        <div className="md:col-span-4 aspect-4/3 md:aspect-square overflow-hidden rounded-sm shadow-sm">
          <img
            src="https://i.pinimg.com/736x/1d/d4/d6/1dd4d674970a7e405f8055ce4a3f55d5.jpg"
            alt="Our Story Jewelry"
            className="w-full h-140 object-cover object-center hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Center Side: Story Text */}
        <div className="md:col-span-5 flex flex-col justify-center pr-0 md:pr-4">
          <h2 className="font-serif text-2xl md:text-3xl text-[#3D231D] mb-1">
            Our Story
          </h2>
          
          {/* Subtle Heart Divider */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#D4B8A5]"></span>
            <span className="text-[#8A5A44] text-xs">♥</span>
            <span className="w-8 h-px bg-[#D4B8A5]"></span>
          </div>

          <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 font-light">
            Cartiva was born from a love for timeless beauty and meaningful connections. Each piece is thoughtfully designed to celebrate your story and the moments that matter most.
          </p>

          <a
            href="#about"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#5E3E37] hover:text-[#8A5A44] transition-colors uppercase"
          >
            Learn More About Us <ArrowRight size={14} />
          </a>
        </div>

        {/* Right Side: Features List with Vertical Separator */}
        <div className="md:col-span-3 flex flex-col gap-6 md:border-l md:border-[#E8DCD1] md:pl-8 pt-4 md:pt-0 border-t border-[#E8DCD1] md:border-t-0">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-0.5 shrink-0">{item.icon}</div>
              <div>
                <h4 className="text-[11px] md:text-xs font-bold tracking-wider text-[#3D231D] uppercase">
                  {item.title}
                </h4>
                <p className="text-[11px] text-gray-500 font-light mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurStory;