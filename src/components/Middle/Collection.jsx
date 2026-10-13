import React from 'react';

const collections = [
  {
    title: 'Petal & Pearl',
    subtitle: 'COLLECTION',
    image: 'https://i.pinimg.com/1200x/23/89/1b/23891b7a7eb5ef2179e9fb0625b5d909.jpg',
  },
  {
    title: 'Golden Romance',
    subtitle: 'COLLECTION',
    image: 'https://i.pinimg.com/736x/61/2e/f0/612ef086ba20791b444ac567e9c49aa1.jpg',
  },
  {
    title: 'Celestial Glow',
    subtitle: 'COLLECTION',
    image: 'https://i.pinimg.com/736x/54/68/1f/54681fcc7371fa5f7a8509c57c0ad5c2.jpg',
  },
  {
    title: 'Minimal Muse',
    subtitle: 'COLLECTION',
    image: 'https://i.pinimg.com/736x/87/14/33/871433bd818394483137960f2786df5e.jpg',
  },
];

const Collection = () => {
  return (
    <div className="py-12 px-2 max-w-7xl mx-auto">
      {/* Section Header */}
      <h3 className="text-center tracking-widest text-sm md:text-base font-semibold text-gray-800 mb-8 uppercase">
        Curated Collections
      </h3>

      {/* 4-Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((item, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden aspect-square rounded-sm shadow-sm"
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full  h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent transition-opacity group-hover:from-black/70" />

            {/* Title & Subtitle Overlay */}
            <div className="absolute bottom-6 inset-x-0 text-center text-white p-2">
              <h4 className="font-serif italic text-xl md:text-2xl drop-shadow-md tracking-wide">
                {item.title}
              </h4>
              <p className="text-[10px] md:text-xs tracking-[0.25em] font-light mt-1 text-gray-200 uppercase">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;