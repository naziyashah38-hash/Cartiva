import React  from 'react'
import { UserRoundKey , BaggageClaim } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import CartDrawer from '../CartDrawer';
import Hero from './Hero'
import { useState } from 'react';
import SearchBar from './SearchBar';
import { useAuth } from '../../context/AuthContext';
import LoginModal from '../../Login/LoginModal';


const Search = () => {

    const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useShop();
  const [loginOpen, setLoginOpen] = useState(false);
const { user, logout } = useAuth();

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  return (
    <div >

      <div className='flex justify-between'>
          
          <div className='flex gap-13 text-lg bold mt-3 ml-15 items-left cursor-pointer mb-10 text-[#722F37] p-3 rounded-full '>
         <span className='hover:text-[#a71e2e]/70 transition-colors duration-300'>Return</span>
         <span
            onClick={() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              });
            }}
            className="hover:text-[#a71e2e]/70 transition-colors duration-300"
          >
            About us
          </span>
        <span className='hover:text-[#a71e2e]/70 transition-colors duration-300'>Collections</span>
        <span className='hover:text-[#a71e2e]/70 transition-colors duration-300'>Gifts</span>
      </div>

       <div className="flex items-center gap-2 justify-center mr-11 mt-5 mb-10">
                <span className="text-amber-600 text-xl">✦</span>
                <span className="text-3xl font-serif font-bold tracking-[0.3em] text-[#722F37]">CARTIVA</span>
                <span className="text-amber-600 text-xl">✦</span>
         </div>
       
              <div className='flex justify-between items-right text-[#722F37]'>
              <div className="p-3 mt-3 w-50 mr-10">
                <SearchBar />
              </div>

            {/* user icon OR first name */}
                {user ? (
                  <div className="relative group">
                    <span className="p-3 mt-5 flex text-bold mr-5 cursor-pointer
                                    text-[#722F37] font-semibold text-sm
                                    hover:text-[#a71e2e] transition-colors duration-300 capitalize">
                       {user.firstName} ▾
                    </span>

                    {/* dropdown: logout */}
                    <div className="absolute right-0 top w-30 bg-white rounded-full shadow-lg
                                    border border-amber-100 py-2 hidden group-hover:block z-50">
                      <button
                        onClick={logout}
                        className="w-full text-sm text-[#722F37] py- px-4 cursor-pointer
                                  bg-none border-none hover:bg-amber-50 hover:text-[#a71e2e]"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <span
                    className="p-3 mt-2 flex text-bold mr-10 cursor-pointer
                              hover:text-[#a71e2e] transition-colors duration-300"
                    onClick={() => setLoginOpen(true)}
                  >
                    <UserRoundKey strokeWidth={1.25} color="#722F37" />
                  </span>
                )}

{loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}

              {/* cart */}
              <span
        className="p-3 mt-4 flex text-bold mr-10 relative cursor-pointer"
        onClick={() => setCartOpen(true)}
      >
        <BaggageClaim strokeWidth={1.25} />

        {/* badge with item count */}
        {cartCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 bg-[#a71e2e] text-white
                           text-[10px] font-bold rounded-full w-5 h-5
                           flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </span>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
           </div>
            

      </div>
       <Hero />
    </div>
  )
}

export default Search

