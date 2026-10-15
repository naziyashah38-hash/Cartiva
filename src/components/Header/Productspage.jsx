import React, { useState, useEffect } from "react";

/* Add this once in index.html <head>:
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Pinyon+Script&display=swap" rel="stylesheet">
*/

const C = {
  cream: "#EADFA9",
  peach: "#E9B79C",
  brown: "#4B3A2E",
  gold: "#C9973A",
  sage: "#5E6B4F",
};

// Put your photos in the public/products folder named product1.jpg ... product6.jpg
// (or replace each path with a full image link). Missing images show a placeholder.
const PRODUCTS = [
  { id: 1, name: "Triple Band Gold Hoops", price: 1499, old: 1999, tone: C.cream, image: "https://i.pinimg.com/1200x/7a/1b/2a/7a1b2aad37ccc9c7bebf30a81fc5c49f.jpg", desc: "Three layered bands in 18k gold plating. Lightweight, tarnish resistant and made for daily wear." },
  { id: 2, name: "Twisted Rope Bracelet", price: 1199, old: 1599, tone: C.peach, image: "https://i.pinimg.com/1200x/6d/97/30/6d9730fffd6f0cb723c369e617e76c50.jpg", desc: "Stacked rope and curb chain bracelet with a secure lobster clasp. Adjustable to 17-20 cm." },
  { id: 3, name: "Pearl Pendant Necklace", price: 1799, old: 2399, tone: C.cream, image: "https://i.pinimg.com/1200x/6c/4f/fa/6c4ffaf962d980a111b03e88721a026e.jpg", desc: "A single freshwater pearl set in a gold bezel on a fine 45 cm chain." },
  { id: 4, name: "Coin Charm Layer Chain", price: 1399, old: 1799, tone: C.peach, image: "https://i.pinimg.com/736x/40/ad/03/40ad03dd0ef945c48ff421129308b0e1.jpg", desc: "Fine figaro chain layered with a hand-polished coin charm. Wear it alone or stacked." },
  { id: 5, name: "Vine Stacking Rings", price: 999, old: 1399, tone: C.cream, image: "https://i.pinimg.com/736x/03/53/d1/0353d1315e986661554e427665ff4f7b.jpg", desc: "A set of three slim rings with a twisted vine design. Fits sizes 6-9." },
  { id: 6, name: "Crystal Leaf Earrings", price: 1699, old: 2199, tone: C.peach, image: "https://i.pinimg.com/736x/33/7f/a2/337fa2583f3de6e41e3cd93ba6afce0c.jpg", desc: "Gold leaf drops with clear crystal accents. Hypoallergenic posts." },
];

const inr = (n) => "₹" + n.toLocaleString("en-IN");

const Sparkle = ({ className = "", size = 40 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 40 40" fill="white" aria-hidden="true">
    <path d="M20 0 C21.5 13 27 18.5 40 20 C27 21.5 21.5 27 20 40 C18.5 27 13 21.5 0 20 C13 18.5 18.5 13 20 0Z" />
  </svg>
);

const Placeholder = ({ tone }) => (
  <div className="w-full h-full flex items-center justify-center" style={{ background: tone }}>
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke={C.gold} strokeWidth="3">
      <circle cx="32" cy="38" r="16" />
      <path d="M24 16 L32 6 L40 16 L32 22 Z" />
    </svg>
  </div>
);

const Img = ({ p }) => {
  const [failed, setFailed] = useState(false);
  if (!p.image || failed) return <Placeholder tone={p.tone} />;
  return <img src={p.image} alt={p.name} onError={() => setFailed(true)} className="w-full h-full object-cover" />;
};

export default function ProductsPage({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [cart, setCart] = useState({}); // {id: qty}
  const [saved, setSaved] = useState({});
  const [detail, setDetail] = useState(null);
  const [toast, setToast] = useState("");
  const [buying, setBuying] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const say = (m) => {
    setToast(m);
    setTimeout(() => setToast(""), 1800);
  };
  const addToCart = (p) => {
    setCart((c) => ({ ...c, [p.id]: (c[p.id] || 0) + 1 }));
    say(`${p.name} added to cart`);
  };
  const removeFromCart = (p) => {
    setCart((c) => {
      const next = { ...c };
      delete next[p.id];
      return next;
    });
    say(`${p.name} removed from cart`);
  };
  const changeQty = (p, d) =>
    setCart((c) => {
      const q = (c[p.id] || 0) + d;
      const next = { ...c };
      if (q <= 0) delete next[p.id];
      else next[p.id] = q;
      return next;
    });
  // clicking Buy now removes the item from the cart (if it was added) and opens the confirm popup
  const buyNow = (p) => {
    setCart((c) => {
      if (!c[p.id]) return c;
      const next = { ...c };
      delete next[p.id];
      return next;
    });
    setBuying(p);
  };
  const cartItems = PRODUCTS.filter((x) => cart[x.id]);
  const cartTotal = cartItems.reduce((s, x) => s + x.price * cart[x.id], 0);
  const toggleSave = (p) => {
    setSaved((s) => ({ ...s, [p.id]: !s[p.id] }));
    say(saved[p.id] ? "Removed from saved" : "Saved for later");
  };

  const btn = "px-4 py-2 text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  return (
    <div className="min-h-screen ml-9 mr-9 rounded-3xl" style={{ background: C.brown,backgroundImage:`url('https://i.pinimg.com/736x/e5/4b/85/e54b85eba65deb247ff538e43dde868c.jpg')`, color: "#fff", fontFamily: "'Cormorant Garamond', serif" }}>
      {/* top bar */}
      <header className="flex items-center justify-between px-5 md:px-10 py-8 md:py-10 rounded-t-3xl"
>
        <button onClick={onBack} className="text-lg hover:opacity-70">← Back</button>
        <button onClick={() => setCartOpen(true)} className="text-lg hover:opacity-70 flex items-center">
          Cart
          <span className="ml-2 inline-flex items-center justify-center min-w-6 h-6 px-2 rounded-full text-sm" style={{ background: C.gold, color: C.brown }}>
            {cartCount}
          </span>
        </button>
      </header>

      {/* collage hero */}
      <section className="relative max-w-5xl mx-auto px-5 pt-4 pb-16">
        <div className="relative mx-auto " style={{ maxWidth: 520, aspectRatio: "4 / 5"}}>
          {[
            { p: PRODUCTS[0], top: "32%", left: "35%", s: "44%" },
            { p: PRODUCTS[1], top: "11%", left: "10%", s: "36%" },
            { p: PRODUCTS[3], top: "62%", left: "14%", s: "38%" },
            { p: PRODUCTS[2], top: "-4%", left: "-6%", s: "26%" },
          ].map(({ p, top, left, s }, i) => (
            <div
              key={i}
              className="absolute overflow-hidden shadow-2xl"
              style={{ top, left, width: s, aspectRatio: "1", transform: "rotate(45deg)", borderRadius: "14%" }}
            >
              <div className="w-full h-full" style={{ transform: "rotate(-45deg) scale(1.45)" }}>
                <Img p={p} />
              </div>
            </div>
          ))}

          <div className=" left-0 absolute  top-[34%] text-4xl md:text-5xl leading-tight" style={{ letterSpacing: "0.04em" }}>
            UP<br />TO<br />30%
          </div>

          <div
            className="absolute right-0 top-[38%] text-5xl md:text-6xl text-amber-200 "
            style={{ fontFamily: "'monospace', sens serif", writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Grab Now
          </div>

          <Sparkle className="absolute right-[6%] top-[4%]" size={56} />
          <Sparkle className="absolute right-[2%] top-[18%]" size={22} />
          <Sparkle className="absolute right-[12%] bottom-[2%]" size={56} />
          <Sparkle className="absolute right-[18%] bottom-[22%]" size={22} />
        </div>
      </section>

      {/* product grid */}
      <section className="px-5 md:px-10 rounded-3xl pb-20" style={{ background: C.cream, color: C.brown }}>
        <h2 className="text-center text-4xl md:text-5xl pt-14 pb-10 text-amber-950" style={{ fontFamily: "'times new roman', cursive" }}>
          Shop our bests 
        </h2>
        <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => {
            const off = Math.round((1 - p.price / p.old) * 100);
            return (
              <article key={p.id} className="flex flex-col">
                <div className="relative aspect-square overflow-hidden" style={{ borderRadius: "28px 6px 28px 6px" }}>
                  <Img p={p} />
                  <span className="absolute top-3 left-3 px-3 py-1 text-sm rounded-full" style={{ background: C.brown, color: "#fff" }}>
                    {off}% off
                  </span>
                  <button
                    onClick={() => toggleSave(p)}
                    aria-pressed={!!saved[p.id]}
                    aria-label={saved[p.id] ? "Remove from saved" : "Save"}
                    className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center bg-white/90 hover:bg-white"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={saved[p.id] ? "#B3402F" : "none"} stroke={saved[p.id] ? "#B3402F" : C.brown} strokeWidth="2">
                      <path d="M12 21s-8-5.4-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.6-8 11-8 11z" />
                    </svg>
                  </button>
                </div>

                <h3 className="mt-4 text-2xl font-semibold">{p.name}</h3>
                <p className="text-xl">
                  {inr(p.price)} <span className="line-through opacity-50 text-base ml-1">{inr(p.old)}</span>
                </p>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button onClick={() => addToCart(p)} className={btn} style={{ border: `1px solid ${C.brown}` }}>
                    Add to cart{cart[p.id] ? ` (${cart[p.id]})` : ""}
                  </button>
                  <button onClick={() => buyNow(p)} className={btn} style={{ background: C.brown, color: "#fff" }}>
                    Buy now
                  </button>
                  <button onClick={() => toggleSave(p)} className={btn + " underline underline-offset-4"}>
                    {saved[p.id] ? "Saved" : "Save"}
                  </button>
                  <button onClick={() => setDetail(p)} className={btn + " underline underline-offset-4"}>
                    Details
                  </button>
                  {cart[p.id] && (
                    <button onClick={() => removeFromCart(p)} className={btn + " col-span-2"} style={{ border: "1px solid #B3402F", color: "#B3402F" }}>
                      Remove from cart
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* details modal */}
      {detail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={() => setDetail(null)}>
          <div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-md overflow-hidden"
            style={{ background: C.cream, color: C.brown, borderRadius: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-4/3"><Img p={detail} /></div>
            <div className="p-6">
              <h3 className="text-3xl font-semibold">{detail.name}</h3>
              <p className="text-xl mt-1">{inr(detail.price)}</p>
              <p className="mt-3 text-lg leading-relaxed">{detail.desc}</p>
              <ul className="mt-3 text-base opacity-80 list-disc pl-5">
                <li>18k gold plated brass</li>
                <li>Free shipping over ₹999</li>
                <li>7-day easy returns</li>
              </ul>
              <div className="mt-5 flex gap-2">
                <button onClick={() => { addToCart(detail); setDetail(null); }} className={btn + " flex-1"} style={{ border: `1px solid ${C.brown}` }}>
                  Add to cart
                </button>
                <button onClick={() => { buyNow(detail); setDetail(null); }} className={btn + " flex-1"} style={{ background: C.brown, color: "#fff" }}>
                  Buy now
                </button>
              </div>
              <button onClick={() => setDetail(null)} className="mt-3 w-full text-center underline underline-offset-4">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* buy now confirmation */}
      {buying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={() => setBuying(null)}>
          <div className="w-full max-w-sm p-6 text-center" style={{ background: C.cream, color: C.brown, borderRadius: 24 }} onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-semibold">Order placed</h3>
            <p className="mt-2 text-lg">{buying.name}</p>
            <p className="text-2xl">{inr(buying.price)}</p>
            <p className="mt-2 text-base opacity-80">Your order has been placed . Connect your checkout here.</p>
            <button onClick={() => setBuying(null)} className={btn + " mt-5 w-full"} style={{ background: C.brown, color: "#fff" }}>
              Done
            </button>
          </div>
        </div>
      )}

      {/* cart drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-end" onClick={() => setCartOpen(false)}>
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Cart"
            className="w-full max-w-md h-full overflow-y-auto p-6 flex flex-col"
            style={{ background: C.cream, color: C.brown }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-semibold">Your cart</h3>
              <button onClick={() => setCartOpen(false)} className="text-lg underline underline-offset-4">Close</button>
            </div>

            {cartItems.length === 0 ? (
              <p className="mt-10 text-xl">Your cart is empty. Add a piece you like and it will show up here.</p>
            ) : (
              <>
                <ul className="mt-6 flex-1 space-y-5">
                  {cartItems.map((x) => (
                    <li key={x.id} className="flex gap-4">
                      <div className="w-20 h-20 shrink-0 overflow-hidden" style={{ borderRadius: "16px 4px 16px 4px" }}>
                        <Img p={x} />
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-semibold leading-tight">{x.name}</p>
                        <p>{inr(x.price)}</p>
                        <div className="mt-1 flex items-center gap-3 text-base">
                          <button onClick={() => changeQty(x, -1)} aria-label="Decrease quantity" className="w-7 h-7 rounded-full" style={{ border: `1px solid ${C.brown}` }}>-</button>
                          <span>{cart[x.id]}</span>
                          <button onClick={() => changeQty(x, 1)} aria-label="Increase quantity" className="w-7 h-7 rounded-full" style={{ border: `1px solid ${C.brown}` }}>+</button>
                        </div>
                        <div className="mt-2 flex gap-4 text-base">
                          <button onClick={() => removeFromCart(x)} className="underline underline-offset-4" style={{ color: "#B3402F" }}>Remove</button>
                          <button onClick={() => { setCartOpen(false); buyNow(x); }} className="underline underline-offset-4">Buy now</button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 flex items-center justify-between text-xl" style={{ borderTop: `1px solid ${C.brown}55` }}>
                  <span>Total</span>
                  <span className="font-semibold">{inr(cartTotal)}</span>
                </div>
              </>
            )}
          </aside>
        </div>
      )}

      {/* toast */}
      {toast && (
        <div role="status" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-60 px-5 py-3 rounded-full text-base shadow-xl" style={{ background: C.gold, color: C.brown }}>
          {toast}
        </div>
      )}
    </div>
  );
}