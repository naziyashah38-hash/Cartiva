import { createContext, useContext, useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";


const ShopContext = createContext(null);

// safe localStorage read helper
const readLS = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
};

export function ShopProvider({ children }) {
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => readLS("cart"));
  const [wishlist, setWishlist] = useState(() => readLS("wishlist"));
  const [toast, setToast] = useState(null);
  const [cartOpen, setCartOpen] = useState(false); 
  

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // toast with optional action — auto-hides in 4s
  const notify = (msg, action = null) => {
    setToast({ msg, action });
    setTimeout(() => setToast(null), 4000);
  };

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      if (prev.find((x) => x.id === product.id)) {
        return prev.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + qty } : x
        );
      }
      return [...prev, { ...product, qty }];
    });
    notify("Added to cart 🛒", "view-cart");   
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.find((x) => x.id === product.id)) {
        return prev.filter((x) => x.id !== product.id);
      }
      return [...prev, product];
    });
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        setCart,
        wishlist,
        toggleWishlist,
        addToCart,
        notify,
        cartOpen,     
        setCartOpen,
        toast,
      }}
    >
      {children}

      {/* 🆕 toast with View Cart link — rendered here, uses the SAME setCartOpen */}
      {toast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-60
                        bg-white rounded-full shadow-lg px-5 py-3
                        border border-amber-100 flex items-center gap-4">
          <span className="text-sm text-[#722F37]">{toast.msg}</span>

          {toast.action === "view-cart" && (
            <button
              onClick={() => {
                 navigate("/");
                setCartOpen(true);   // 🆕 opens the drawer
                setToast(null);      // hide toast
              }}
              className="text-sm font-bold text-[#a71e2e] underline
                         cursor-pointer bg-none border-none whitespace-nowrap"
            >
              View Cart
            </button>
          )}
        </div>
      )}
    </ShopContext.Provider>
  );
}

export const useShop = () => useContext(ShopContext);