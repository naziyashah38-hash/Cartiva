import React from 'react';

const categories = [
  {
    name: 'NECKLACES',
    image: 'https://i.pinimg.com/736x/70/dc/01/70dc018d8bc8548cafc711dc6cca9755.jpg',
  },
  {
    name: 'EARRINGS',
    image: 'https://i.pinimg.com/736x/81/c3/ce/81c3cecc0eb63513ef504c7bb1996aa1.jpg',
  },
  {
    name: 'RINGS',
    image: 'https://i.pinimg.com/736x/47/2d/ad/472dad25eab6b55761d3da4eead69576.jpg',
  },
  {
    name: 'BRACELETS',
    image: 'https://i.pinimg.com/736x/14/7b/21/147b2111e39a0ec0b3f548ece13d6adc.jpg',
  },
  {
    name: 'FINE GIFTS',
    image: 'https://i.pinimg.com/736x/27/12/4c/27124c9d2ecfd3544561c1aebb5e6c7a.jpg',
  },
  {
    name: 'WEDDING',
    image: 'https://i.pinimg.com/736x/56/59/ce/5659ced7121299047af66daa2d62f964.jpg',
  },
];

const Category = () => {
  return (
    <div className="py-12 px-4 max-w-8xl mx-auto">
      <h3 className="text-center tracking-widest text-sm md:text-base font-semibold text-gray-800 mb-8 uppercase">
        Shop by Category
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col items-center group cursor-pointer">
            <div className="w-28 h-28 sm:w-50 sm:h-50 rounded-full overflow-hidden shadow-md border-2 border-transparent group-hover:border-[#E07A5F] transition-all duration-300">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="mt-3 text-xs sm:text-sm font-medium tracking-wider text-gray-700 group-hover:text-[#E07A5F] transition-colors">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;