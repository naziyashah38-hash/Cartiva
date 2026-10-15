import { createContext, useContext, useState } from "react";

const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("cart")) || []; } catch { return []; }
  });
  const [wishlist, setWishlist] = useState(() => {
    try { return JSON.parse(localStorage.getItem("wishlist")) || []; } catch { return []; }
  });
  const [toast, setToast] = useState(null);

  const notify = (msg) => {
    setToast(msg);
    window.clearTimeout(notify.t);
    notify.t = window.setTimeout(() => setToast(null), 2500);
  };

  const addToCart = (product, qty = 1) => {
    setCart((c) => {
      const found = c.find((x) => x.id === product.id);
      const next = found
        ? c.map((x) => (x.id === product.id ? { ...x, qty: x.qty + qty } : x))
        : [...c, { ...product, qty }];
      localStorage.setItem("cart", JSON.stringify(next));
      return next;
    });
    notify(product.name + " added to bag");
  };

  const toggleWishlist = (product) => {
    setWishlist((w) => {
      const next = w.some((x) => x.id === product.id)
        ? w.filter((x) => x.id !== product.id)
        : [...w, product];
      localStorage.setItem("wishlist", JSON.stringify(next));
      return next;
    });
    notify(wishlist.some((x) => x.id === product.id) ? "Removed from wishlist" : "Saved to wishlist ♥");
  };

  return (
    <ShopContext.Provider value={{ cart, setCart, wishlist, toggleWishlist, addToCart, toast, notify }}>
      {children}
      {toast && (
        <div style={{ position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)",
          background: "#1e2a4a", color: "#fff", padding: "10px 22px", borderRadius: 999,
          fontSize: 14, zIndex: 60, boxShadow: "0 10px 25px rgba(0,0,0,.25)" }}>
          {toast}
        </div>
      )}
    </ShopContext.Provider>
  );
}

export const useShop = () => useContext(ShopContext);