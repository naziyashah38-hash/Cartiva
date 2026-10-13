import React, { useState } from 'react';
import { Heart, ChevronRight, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Lumière Heart Necklace',
    price: '$89.00',
    rating: 5,
    image: 'https://i.pinimg.com/736x/37/2b/3a/372b3a272c22a4b422f6bf676d8e4ce1.jpg',
  },
  {
    id: 2,
    name: 'Eternal Sparkle Ring',
    price: '$79.00',
    rating: 5,
    image: 'https://i.pinimg.com/736x/d7/be/7a/d7be7aff6b466ea19e26c5e2a17a1300.jpg',
  },
  {
    id: 3,
    name: 'Pearl Grace Earrings',
    price: '$69.00',
    rating: 5,
    image: 'https://i.pinimg.com/736x/14/a7/25/14a725209d64748cb2f50ee96dc8da02.jpg',
  },
  {
    id: 4,
    name: 'Lavender Blue Bracelet',
    price: '$99.00',
    rating: 5,
    image: 'https://i.pinimg.com/736x/30/c0/ae/30c0aee35cd5532134e9818596f3cda4.jpg',
  },
  {
    id: 5,
    name: 'Love Knot Ring',
    price: '$59.00',
    rating: 5,
    image: 'https://i.pinimg.com/1200x/49/64/32/49643288f7ade5d74b7dfd5cd9f467d0.jpg',
  },
];

const BestSellers = () => {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-12 px-4 max-w-8xl ml-2 mr-2 mx-auto relative">
      {/* Section Title */}
      <h3 className="text-center tracking-widest text-sm md:text-base font-semibold text-gray-800 mb-8 uppercase">
        Best Sellers
      </h3>

      {/* Product Grid / Slider Container */}
      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center group">
              {/* Image Container with Wishlist Icon */}
              <div className="relative w-full aspect-square bg-[#FBF6F0] rounded-sm overflow-hidden mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Heart / Wishlist Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition-colors p-1"
                  aria-label="Add to Wishlist"
                >
                  <Heart
                    size={18}
                    className={
                      favorites[product.id]
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600 hover:text-red-500'
                    }
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h4 className="text-xs sm:text-sm font-medium text-gray-800 tracking-wide mb-1">
                  {product.name}
                </h4>

                {/* Star Rating */}
                <div className="flex justify-center gap-0.5 text-amber-700 mb-1">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" stroke="none" />
                  ))}
                </div>

                {/* Price */}
                <p className="text-xs sm:text-sm font-semibold text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Navigation Button */}
        <button
          className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md border border-gray-100 text-gray-600 hover:bg-gray-50 transition-all z-10 hidden sm:flex items-center justify-center"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default BestSellers;