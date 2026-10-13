// import React from 'react'

// const Sale = () => {
//   return (
//     <div>
      
//       <h3 className='text-center mt-20 text-5xl font-bold text-[#EF8557]'>
//         Daily offer</h3>

//          <div  className='flex justify-around '>

//         <div className='flex flex-col items-center justify-center text-center font-bold bg-[#063558]/50 w-60 h-80 rounded-lg border-4 border-y-2 border-[#d4c8b0] cursor-pointer ml-20 mr-20 mt-10 p-40'>
//           <p className='text-5xl text-[#413827]' >under </p>
//           <p className='text-3xl text-[#413827]'>Rs.99</p>
//         </div>

//         <div className='flex flex-col items-center justify-center text-center font-bold bg-[#063558]/50 w-60 h-80 rounded-lg border-4 border-y-2 cursor-pointer text-[#EF8557] border-[#d4c8b0] p-40 ml-20 mr-20 mt-10'>
//          <p className='text-5xl text-[#413827]' >under </p>
//           <p className='text-3xl text-[#413827]'>Rs.199</p>
//         </div>
        
//         <div className='flex flex-col items-center justify-center text-center font-bold bg-[#063558]/50 w-60 h-80 rounded-lg border-4 border-y-2 cursor-pointer text-[#EF8557] border-[#d4c8b0] p-40 ml-20 mr-20 mt-10 '>
//           <p className='text-5xl text-[#413827]' >under </p>
//           <p className='text-3xl text-[#413827]'>Rs.299</p>
//         </div>

//         </div>

//       </div>
//   )
// }

// export default Sale

import React, { useState } from 'react';

const SaleBanner = () => {
  const [copied, setCopied] = useState(false);
  const promoCode = 'LOVE15';

  const handleCopyCode = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-4 px-8 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-md bg-[#F2DDD5] min-h-40 md:min-h-50 flex flex-col md:flex-row items-center justify-between shadow-sm">
        
        {/* Left Side: Model / Lifestyle Image */}
        <div className="w-full md:w-1/3 h-48 md:h-full relative overflow-hidden">
          <img
            src="https://i.pinimg.com/1200x/84/88/9f/84889f174888c82fa3401b123c372049.jpg"
            alt="Jewelry Promo Model"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Center Text Content */}
        <div className="flex-1 text-center py-6 px-4 z-10">
          <p className="font-serif italic text-xs md:text-sm text-[#7A5B53] tracking-wide mb-1">
            Because every moment deserves sparkle
          </p>
          <h2 className="font-serif text-2xl md:text-4xl text-[#3D231D] tracking-wide my-1">
            Enjoy 15% Off
          </h2>
          <p className="text-[10px] md:text-xs tracking-[0.25em] font-semibold text-[#5E3E37] uppercase">
            Your First Order
          </p>
        </div>

        {/* Right Side: Promo Code Button */}
        <div className="py-4 md:py-0 pr-0 md:pr-12 text-center z-10 pb-6 md:pb-0">
          <button
            onClick={handleCopyCode}
            className="bg-[#4A2322] hover:bg-[#381A19] text-white text-xs md:text-sm font-medium tracking-widest px-6 py-3 rounded-sm shadow transition-all duration-300 uppercase"
          >
            {copied ? 'COPIED!' : `USE CODE: ${promoCode}`}
          </button>
        </div>

        {/* Subtle Decorative Floral Background Texture overlay */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1000&auto=format&fit=crop')`
          }}
        />
      </div>
    </section>
  );
};

export default SaleBanner;
