import { useState } from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { useAuth } from "../context/AuthContext";
import LoginModal from "../Login/LoginModal";
import { CATEGORIES } from "../data/categories";
import { COLLECTIONS } from "../data/collections";


export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { user, logout } = useAuth();
  const { wishlist } = useShop();

  const close = () => setOpen(false);

  return (
    <>
      {/* hamburger button — phone only */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-3 text-[#722F37] bg-none border-none cursor-pointer"
        aria-label="Open menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
        </svg>
      </button>

      {/* drawer */}
      {open && (
        <>
          {/* overlay */}
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={close} />

          {/* panel */}
          <div className="fixed top-0 left-0 h-full w-72 bg-white z-50 overflow-y-auto
                          shadow-2xl md:hidden">
            {/* header */}
            <div className="flex items-center justify-between p-5 border-b border-amber-100">
              <span className="font-serif order-2 md:order-0 mx-auto md:mx-0 font-bold tracking-[0.2em] text-[#722F37]">CARTIVA</span>
              <button onClick={close}
                className="w-8 h-8 rounded-full bg-amber-50 text-[#722F37]
                           border-none cursor-pointer">✕</button>
            </div>

            <div className="p-5">
              {/* main links */}
              <Link to="/return-policy" onClick={close}
                className="block py-3 text-[#722F37] font-semibold no-underline
                           hover:text-[#a71e2e]">Return</Link>
              <Link to="/about" onClick={close}
                className="block py-3 text-[#722F37] font-semibold no-underline
                           hover:text-[#a71e2e]">About us</Link>
              <Link to="/fine-gifts" onClick={close}
                className="block py-3 text-[#722F37] font-semibold no-underline
                           hover:text-[#a71e2e]">Gifts</Link>
              <Link to="/wishlist" onClick={close}
                className="block py-3 text-[#722F37] font-semibold no-underline
                           hover:text-[#a71e2e]">
                Wishlist {wishlist.length > 0 && <span className="text-[#a71e2e]">({wishlist.length})</span>}
              </Link>

              {/* account */}
              {user ? (
                <button onClick={logout}
                  className="block w-full text-left py-3 text-[#722F37] font-semibold
                             bg-none border-none cursor-pointer hover:text-[#a71e2e]">
                  Logout ({user.firstName})
                </button>
              ) : (
                <button onClick={() => { setLoginOpen(true); }}
                  className="block w-full text-left py-3 text-[#722F37] font-semibold
                             bg-none border-none cursor-pointer hover:text-[#a71e2e]">
                  Login / Sign up
                </button>
              )}

              {/* Categories section */}
              <h4 className="text-xs font-bold text-[#722F37]/50 uppercase tracking-wider
                             mt-6 mb-2">Shop by Category</h4>
              {CATEGORIES.map((c) => (
                <Link key={c.id} to={"/" + c.id} onClick={close}
                  className="block py-2 text-sm text-[#722F37]/80 no-underline
                             hover:text-[#a71e2e]">{c.name}</Link>
              ))}

              {/* Collections section */}
              <h4 className="text-xs font-bold text-[#722F37]/50 uppercase tracking-wider
                             mt-6 mb-2">Curated Collections</h4>
              {COLLECTIONS.map((c) => (
                <Link key={c.id} to={"/collections/" + c.id} onClick={close}
                  className="block py-2 text-sm text-[#722F37]/80 no-underline
                             hover:text-[#a71e2e]">{c.name}</Link>
              ))}
            </div>
          </div>
        </>
      )}

      {/* login modal (opened from drawer) */}
      {loginOpen && <LoginModal onClose={() => { setLoginOpen(false); close(); }} />}
    </>
  );
}