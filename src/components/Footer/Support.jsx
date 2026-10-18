import React from 'react';
import { Link } from 'react-router-dom';
import {
  Pin,
  Lock,
  Truck,
  RotateCcw,
} from 'lucide-react';

const Support = () => {
  return (
    <footer className="bg-[#FAF5F0] text-[#3D231D] pt-12 pb-6 px-4 border-t border-[#F0E6DD]">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid: Brand + 4 Navigation Columns + Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 mb-12">
          
          {/* Brand Info (2 Columns wide on desktop) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-2xl tracking-[0.25em] font-semibold text-[#3D231D] uppercase">
                Cartiva
              </h2>
              <span className="text-[10px] tracking-[0.3em] text-[#8A5A44] uppercase block mb-3 font-medium">
                Jewelry
              </span>
              <p className="text-xs text-gray-600 font-light max-w-xs leading-relaxed">
                your World , One cart !
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6 text-[#5E3E37]">
              <a href="#instagram" className="hover:text-[#8A5A44] transition-colors" aria-label="Instagram">
                Instagram
              </a>
              <a href="#facebook" className="hover:text-[#8A5A44] transition-colors" aria-label="Facebook">
                facebook
              </a>
              <a href="#pinterest" className="hover:text-[#8A5A44] transition-colors" aria-label="Pinterest">
                <Pin size={18} />
              </a>
              {/* TikTok Icon SVG */}
              <a href="#tiktok" className="hover:text-[#8A5A44] transition-colors" aria-label="TikTok">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525 0h3.08c.12 1.024.715 2.001 1.622 2.623.906.621 2.006.84 3.09.84V6.57c-1.393-.016-2.736-.5-3.832-1.387v8.303c0 3.738-3.03 6.77-6.768 6.77-3.738 0-6.768-3.032-6.768-6.77 0-3.738 3.03-6.768 6.768-6.768.422 0 .84.04 1.25.118v3.238c-.41-.122-.84-.184-1.25-.184-1.92 0-3.48 1.56-3.48 3.48 0 1.92 1.56 3.48 3.48 3.48 1.92 0 3.48-1.56 3.48-3.48V0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1: SHOP */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#3D231D] uppercase mb-4">
              Shop
            </h4>
            <ul className="space-x-2  text-xs font-light text-gray-600">
            <li> <Link to="/all-jewelry" className="...">All Jewelry</Link> </li>  {/* your existing category route */}
             <li> <Link to="/necklaces" className="...">Necklaces</Link></li>
            <li>  <Link to="/earrings" className="...">Earrings</Link></li>
             <li> <Link to="/rings" className="...">Rings</Link></li>
            <li>  <Link to="/bracelets" className="...">Bracelets</Link></li>
            <li>  <Link to="/fine-gifts" className="...">Gifts</Link></li>
            </ul>
          </div>

          {/* Column 2: COLLECTIONS */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#3D231D] uppercase mb-4">
              Collections
            </h4> 
            <ul className="space-y-2 text-xs font-light text-gray-600">
           <li>  <Link to="/collections/petal-and-pearl" className="...">Petal & Pearl</Link></li>
            <li>  <Link to="/collections/golden-romance" className="...">Golden Romance</Link></li>
             <li> <Link to="/collections/celestial-glow" className="...">Celestial Glow</Link></li>
             <li> <Link to="/collections/minimal-muse" className="...">Minimal Muse</Link></li>
             <li> <Link to="/collections/wedding" className="...">Wedding</Link></li>
            </ul>
          </div>

          {/* Column 3: HELP */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#3D231D] uppercase mb-4">
              Help
            </h4>
            <ul className="space-y-2 text-xs font-light text-gray-600">
            <li>  <Link to="/faq" className="...">FAQ</Link></li>
            <li>  <Link to="/shipping" className="...">Shipping & Delivery</Link></li>
           <li>   <Link to="/return-policy" className="...">Returns & Exchanges</Link>  </li> {/* your existing page! */}
           <li>   <Link to="/size-guide" className="...">Size Guide</Link></li>
            <li>  <Link to="/care-guide" className="...">Care Guide</Link></li>
            <li>  <Link to="/contact" className="...">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: ABOUT */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#3D231D] uppercase mb-4">
              About
            </h4>
            <ul className="space-y-2 text-xs font-light text-gray-600">
           <li>   <Link to="/about" className="...">Our Story</Link> </li>  {/* or /our-story if you prefer the new page */}
             <li> <Link to="/sustainability" className="...">Sustainability</Link></li>
             <li> <Link to="/journal" className="...">Journal</Link></li>
            <li>  <Link to="/careers" className="...">Careers</Link></li>
            </ul>
          </div>

          {/* Trust Badges Column (1.5 Columns wide on desktop) */}
          <div className="lg:col-span-1 flex flex-col justify-start space-y-5 border-t lg:border-t-0 border-[#E8DCD1] pt-6 lg:pt-0">
            {/* SECURE PAYMENTS */}
            <div className="flex items-center gap-3">
              <div className="p-2 border border-[#D8C7B9] rounded-full text-[#8A5A44] shrink-0">
                <Lock size={16} />
              </div>
              <div>
                <h5 className="text-[11px] font-bold tracking-wider text-[#3D231D] uppercase">
                  Secure Payments
                </h5>
                <p className="text-[10px] text-gray-500 font-light">Safe & encrypted</p>
              </div>
            </div>

            {/* FREE SHIPPING */}
            <div className="flex items-center gap-3">
              <div className="p-2 border border-[#D8C7B9] rounded-full text-[#8A5A44] shrink-0">
                <Truck size={16} />
              </div>
              <div>
                <h5 className="text-[11px] font-bold tracking-wider text-[#3D231D] uppercase">
                  Free Shipping
                </h5>
                <p className="text-[10px] text-gray-500 font-light">On orders $75+</p>
              </div>
            </div>

            {/* 30-DAY RETURNS */}
            <div className="flex items-center gap-3">
              <div className="p-2 border border-[#D8C7B9] rounded-full text-[#8A5A44] shrink-0">
                <RotateCcw size={16} />
              </div>
              <div>
                <h5 className="text-[11px] font-bold tracking-wider text-[#3D231D] uppercase">
                  30-Day Returns
                </h5>
                <p className="text-[10px] text-gray-500 font-light">Hassle-free</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Line */}
        <div className="pt-6 border-t border-[#E8DCD1] flex flex-col sm:flex-row items-center justify-center gap-2 text-[11px] text-gray-500 font-light">
          <p>© 2026 Cartiva . All rights reserved.</p>
          <span className="hidden sm:inline">|</span>
          <div className="flex gap-4">
           <Link to="/privacy" className="...">Privacy Policy</Link>
           <Link to="/terms" className="...">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Support;