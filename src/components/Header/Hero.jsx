// import React from 'react'

// const Hero = () => {
//   return (
//     <div>

//     <div className='flex justify-center '>
       
//         <img className='w-350 h-130' src='https://i.pinimg.com/1200x/6f/cb/f6/6fcbf69655a712000a1421c5f4f1779d.jpg' alt='hero'></img>
      
//       </div>

//     </div>
//   )
// }

// export default Hero

import React, { useState, useEffect } from 'react';

const Hero = () => {
  const slides = [
    {
      url: 'https://i.pinimg.com/736x/70/5f/3e/705f3e339d82a007c064f84319cdf443.jpg',
      title: 'Timeless Elegance',
      subtitle: 'Discover our exquisite ivory and gold jewelry collections.'
    },
    {
      url: 'https://i.pinimg.com/1200x/6f/cb/f6/6fcbf69655a712000a1421c5f4f1779d.jpg',
      title: 'Minimal Refresh',
      subtitle: 'Embrace soft sage and coral hues for the new season.'
    },
    {
      url: 'https://i.pinimg.com/1200x/79/e7/82/79e78231b5043e8ab16089dfad51efb9.jpg',
      title: 'Artisan favourites',
      subtitle: 'Bring warmth and sophisticated style into your dressing.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="w-390 ml-4 relative h-112.5 md:h-137.5 overflow-hidden bg-[#FDFBF7]">
      {/* Slides Container */}
      <div className="w-full h-full relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/20 z-10" />
            <img
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
              <span className="text-[#E07A5F] bg-[#FDFBF7]/90 px-4 py-1 rounded-full text-sm font-semibold tracking-wider uppercase mb-3 shadow-sm">
                Cartiva Exclusive
              </span>
              <h1 className="text-3xl md:text-5xl font-serif text-[#FDFBF7] mb-2 drop-shadow-md">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg text-[#FDFBF7] max-w-xl mb-6 drop-shadow">
                {slide.subtitle}
              </p>
              <button className="bg-[#E07A5F] hover:bg-[#d56a4e] text-white px-8 py-3 rounded-full font-medium shadow-lg transition duration-300">
                Explore Collection
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/70 hover:bg-white text-[#1D3557] p-3 rounded-full shadow-md transition duration-200 focus:outline-none"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/70 hover:bg-white text-[#1D3557] p-3 rounded-full shadow-md transition duration-200 focus:outline-none"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-[#E07A5F] w-8' : 'bg-white/70 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
