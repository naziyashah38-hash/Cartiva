import React, { useState, useEffect } from "react";
import ProductsPage from "./Productspage";

// Replace the image URLs, titles and subtitles with your own
const slides = [
  {
    url: "https://i.pinimg.com/736x/70/5f/3e/705f3e339d82a007c064f84319cdf443.jpg",
    title: "Timeless Elegance",
    subtitle: "Discover our exquisite ivory and gold jewelry collections.",
    opensProducts: true, // this slide opens the products page
  },
  {
    url: "https://i.pinimg.com/1200x/6f/cb/f6/6fcbf69655a712000a1421c5f4f1779d.jpg",
    title: "Modern Radiance",
    subtitle: "Embrace soft sage and coral hues for the new season.",
  },
  {
    url: "https://i.pinimg.com/1200x/79/e7/82/79e78231b5043e8ab16089dfad51efb9.jpg",
    title: "Everyday Glow",
    subtitle: "Bring warmth and sophisticated style into your dressing.",
  },
];

export default function Hero() {
  const [showProducts, setShowProducts] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // auto-play only while the slider is visible
    const timer = showProducts
      ? null
      : setInterval(() => {
          setCurrentIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
        }, 5000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [showProducts]);

  const prevSlide = () => setCurrentIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const nextSlide = () => setCurrentIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  if (showProducts) {
    return <ProductsPage onBack={() => setShowProducts(false)} />;
  }

  return (
    <div className="w-390 ml-3 mr-3 h-[85vh] relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img src={slide.url} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{slide.title}</h1>
            <p className="text-lg md:text-xl max-w-xl mb-8">{slide.subtitle}</p>
            <button
              onClick={() => setShowProducts(true)}
              className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition duration-300"
            >
              Explore Collection
            </button>
          </div>
        </div>
      ))}

      {/* arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full flex items-center justify-center"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full flex items-center justify-center"
      >
        ›
      </button>

      {/* dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}