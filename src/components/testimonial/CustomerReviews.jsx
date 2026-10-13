import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      'The quality is exceptional and the packaging is so beautiful. I felt so special opening my order.',
    author: 'Emily R.',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'I wear my necklace every day and get compliments all the time. Absolutely dreamy!',
    author: 'Sophia L.',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'The perfect gift! My wife loved it and the customer service was amazing.',
    author: 'Daniel K.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto relative">
      {/* Section Title */}
      <h2 className="font-serif text-2xl md:text-3xl text-center text-[#3D231D] mb-10 tracking-wide">
        What Our Customers Say
      </h2>

      {/* Main Container with Left/Right Carousel Controls */}
      <div className="relative flex items-center justify-between">
        {/* Left Arrow Button */}
        <button
          className="w-9 h-9 rounded-full bg-white border border-[#E8DCD1] text-[#5E3E37] flex items-center justify-center hover:bg-[#FAF5F0] transition-colors shadow-sm shrink-0 z-10"
          aria-label="Previous review"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 flex-1">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col items-center text-center px-4 py-2 ${
                index < testimonials.length - 1
                  ? 'md:border-r md:border-[#E8DCD1]'
                  : ''
              }`}
            >
              {/* Review Text */}
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-light mb-4 min-h-12 flex items-center justify-center italic">
                "{item.quote}"
              </p>

              {/* Author Name */}
              <span className="text-xs font-medium text-gray-800 tracking-wider mb-2">
                - {item.author}
              </span>

              {/* Star Rating */}
              <div className="flex gap-1 text-[#C58B68]">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" stroke="none" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          className="w-9 h-9 rounded-full bg-white border border-[#E8DCD1] text-[#5E3E37] flex items-center justify-center hover:bg-[#FAF5F0] transition-colors shadow-sm shrink-0 z-10"
          aria-label="Next review"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;