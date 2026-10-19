import { UserRoundKey , BaggageClaim ,Heart } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import CartDrawer from '../CartDrawer';
import Hero from './Hero'
import { useState } from 'react';
import SearchBar from './SearchBar';
import { useAuth } from '../../context/AuthContext';
import LoginModal from '../../Login/LoginModal';
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";
import MobileMenu from '../MobileMenu';

const Search = () => {

  const { cart, wishlist , cartOpen, setCartOpen } = useShop();
  const [loginOpen, setLoginOpen] = useState(false);
  const { user, logout } = useAuth();



  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const wishlistCount = wishlist.length; 
  return (
    <div >

    <div className="md:hidden"><MobileMenu /></div>
      <div className='flex justify-between'>
          
          <div className='hidden md:flex  gap-4 text-lg bold mt-3 ml-3 items-left cursor-pointer mb-10 text-[#722F37] p-3 rounded-full '>
         <Link
              to="/return-policy"
              className="hover:text-[#a71e2e]/70 transition-colors duration-300 no-underline text-[#722F37]"
            >
              Return
            </Link>

             <Link
                to="/about"
                className="hover:text-[#a71e2e]/70 transition-colors duration-300 no-underline text-[#722F37]"
              >
                About us
              </Link>

         <NavMenu />
       
        <Link to="/fine-gifts" className='hover:text-[#a71e2e]/70 transition-colors duration-300 no-underline  text-[#722F37]'>Gifts</Link>
        {/* <Link to="/fine-gifts" className='hover:text-[#a71e2e]/70 transition-colors duration-300 no-underline text-[#722F37]'>Gifts</Link> */}
      </div>

       <div className="hidden md:flex items-center gap-2 justify-center  mt-5 mb-10">
                <span className="text-amber-600 text-xl">✦</span>
                <span className="text-3xl font-serif font-bold tracking-[0.3em] text-[#722F37]">CARTIVA</span>
                <span className="text-amber-600 text-xl">✦</span>
         </div>
       
              <div className='hidden md:flex justify-between items-right text-[#722F37]'>
              <div className=" mt-2  max-w-xs md:max-w-sm p-3">
                <SearchBar />
              </div>

            {/* user icon OR first name */}
                {user ? (
                  <div className="relative group hidden md:flex ">
                    <span className="p-3 mt-4 flex text-bold  cursor-pointer
                                    text-[#722F37] font-semibold text-sm
                                    hover:text-[#a71e2e] transition-colors duration-300 capitalize">
                       {user.firstName} ▾
                    </span>

                    {/* dropdown: logout */}
                    <div className="absolute right-0 top-10 w-20 hidden bg-white rounded-full shadow-lg
                                    border border-amber-100 py-1 group-hover:block z-50">
                      <button
                        onClick={logout}
                        className=" w-full text-sm text-[#722F37] rounded-full cursor-pointer
                   bg-none border-none hover:bg-amber-50 hover:text-[#a71e2e]"
                      >
                        Log out
                      </button>
                    </div>
                  </div>
                ) : (
                  <span
                    className="p-3 mt-3 flex text-bold  cursor-pointer
                              hover:text-[#a71e2e] transition-colors duration-300"
                    onClick={() => setLoginOpen(true)}
                  >
                    <UserRoundKey strokeWidth={1.25} color="#722F37" />
                  </span>
                )}

{loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}

                <Link
                    to="/wishlist"
                    className="p-3 mt-3 hidden md:flex  text-bold  relative no-underline"
                  >
                    <Heart strokeWidth={1.25} color="#722F37" />

                    {/* badge with saved count */}
                    {wishlistCount > 0 && (
                      <span className="absolute -top-0.5 -right-0.5 bg-[#a71e2e] text-white
                                      text-[10px] font-bold rounded-full w-5 h-5
                                      flex items-center justify-center">
                        {wishlistCount}
                      </span>
                    )}
                  </Link>

              {/* cart */}
              <span
        className="p-3 mt-3 hidden md:flex text-bold mr-3 relative cursor-pointer"
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
           {/* <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
                className="hidden md:flex p-2 bg-none border-none cursor-pointer text-[#722F37]"
              >
                <SearchSlash strokeWidth={1.25} />
              </button> */}
              {/* phone search dropdown — tap icon to show/hide */}
                        {/* {searchOpen && (
            <div className="hidden md:flex px-4 pb-3">
              <SearchBar />
            </div>
          )} */}
 

      </div>
       <Hero />
    </div>
  )
}

export default Search

