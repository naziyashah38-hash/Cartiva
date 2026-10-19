import { useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function CartDrawer({ open, onClose }) {
  const { cart, setCart, notify } = useShop();
  const navigate = useNavigate();

  if (!open) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  const changeQty = (id, delta) => {
    setCart((c) =>
      c.map((x) => (x.id === id ? { ...x, qty: Math.max(1, x.qty + delta) } : x))
    );
  };

  const removeItem = (id) => {
    setCart((c) => {
      const next = c.filter((x) => x.id !== id);
      localStorage.setItem("cart", JSON.stringify(next));
      return next;
    });
    notify("Item removed from bag");
  };

  const checkout = () => {
    if (cart.length === 0) return;
    setCart([]);
    localStorage.setItem("cart", "[]");
    notify("Order placed — thank you! 🛍");
    onClose();
    navigate("/");
  };

  return (
    <>
      {/* dark overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* drawer panel */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50
                      shadow-2xl flex flex-col transition-transform duration-300">

        {/* header */}
        <div className="flex items-center justify-between p-5 border-b border-amber-100">
          <h3 className="text-xl font-bold text-[#722F37]">
            Your Bag {count > 0 && <span className="text-sm">({count})</span>}
          </h3>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border-none bg-amber-50
                       cursor-pointer text-[#722F37] hover:bg-amber-100"
          >
            ✕
          </button>
        </div>

        {/* items */}
        <div className="flex-1 overflow-y-auto p-5">
          {cart.length === 0 ? (
            <div className="text-center py-20 text-[#722F37]/60">
              <p className="text-5xl mb-4">🛍</p>
              <p>Your bag is empty.</p>
              <button
                onClick={() => { onClose(); navigate("/"); }}
                className="mt-4 text-[#a71e2e] underline cursor-pointer bg-none border-none"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 items-center mb-4 p-3
                           bg-amber-50/50 rounded-2xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover bg-[#f7ede3]"
                />
                <div className="flex-1">
                  <div className="font-semibold text-sm text-[#722F37]">{item.name}</div>
                  <div className="text-sm text-[#722F37]/60">₹{item.price}</div>

                  {/* qty controls */}
                  <div className="flex items-center gap-2 mt-1.5">
                    <button
                      onClick={() => changeQty(item.id, -1)}
                      className="w-6 h-6 rounded-full border border-[#722F37]/30
                                 bg-white cursor-pointer text-sm"
                    >−</button>
                    <span className="w-5 text-center text-sm">{item.qty}</span>
                    <button
                      onClick={() => changeQty(item.id, 1)}
                      className="w-6 h-6 rounded-full border border-[#722F37]/30
                                 bg-white cursor-pointer text-sm"
                    >+</button>
                    <span className="ml-auto text-sm font-bold">
                      ₹{item.price * item.qty}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-rose-500 text-xs cursor-pointer bg-none border-none
                             hover:underline self-start"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* footer / checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-amber-100">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-[#722F37]/60">Subtotal</span>
              <span className="text-2xl font-bold text-[#722F37]">₹{total}</span>
            </div>
            <button
              onClick={checkout}
              className="w-full bg-[#722F37] text-white py-3 rounded-full
                         font-semibold cursor-pointer border-none
                         hover:bg-[#a71e2e] transition-colors"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}