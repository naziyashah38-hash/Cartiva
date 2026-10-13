import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-sm bg-[#F8DDD3] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#F2CFC3]">
        
        {/* Floral background decorations (Sides) */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-36 pointer-events-none opacity-40">
          <img
            src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=400&auto=format&fit=crop"
            alt="Floral Accent Left"
            className="w-full h-full object-cover object-left"
          />
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-36 pointer-events-none opacity-40">
          <img
            src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=400&auto=format&fit=crop"
            alt="Floral Accent Right"
            className="w-full h-full object-cover object-right"
          />
        </div>

        {/* Left Content: Mail Icon + Text */}
        <div className="flex items-center gap-4 z-10 text-center md:text-left flex-col md:flex-row">
          <div className="p-3 bg-[#F2C5B7]/50 rounded-lg text-[#8A5A44] shrink-0">
            <Mail size={32} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-serif text-xl md:text-2xl text-[#3D231D] mb-1">
              Stay Sparkling
            </h3>
            <p className="text-xs md:text-sm text-gray-700 font-light max-w-md">
              Be the first to know about new arrivals, exclusive offers & special surprises.
            </p>
          </div>
        </div>

        {/* Right Content: Email Input & Subscribe Button */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full md:w-auto items-center z-10 max-w-md"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full md:w-72 px-4 py-2.5 text-xs md:text-sm bg-white text-gray-800 border border-transparent focus:outline-none focus:ring-1 focus:ring-[#4A2322] placeholder:text-gray-400 placeholder:font-light rounded-l-sm"
          />
          <button
            type="submit"
            className="bg-[#4A2322] hover:bg-[#381A19] text-white text-xs font-semibold tracking-widest px-6 py-2.5 transition-colors uppercase shrink-0 rounded-r-sm"
          >
            {subscribed ? 'THANK YOU!' : 'SUBSCRIBE'}
          </button>
        </form>

      </div>
    </section>
  );
};

export default Newsletter;