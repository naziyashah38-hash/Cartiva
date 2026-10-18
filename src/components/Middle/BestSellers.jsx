import { Link, useNavigate } from "react-router-dom";
import { useShop } from "../../context/ShopContext";

// your best sellers — replace with the real product data / imports you use
const BEST_SELLERS = [
  { id: "bs1", name: "Lumière Heart Necklace", price: 8900, oldPrice: 10900,
    rating: 5, reviewsCount: 210, image: "https://i.pinimg.com/736x/37/2b/3a/372b3a272c22a4b422f6bf676d8e4ce1.jpg" },
  { id: "bs2", name: "Eternal Sparkle Ring", price: 7900, oldPrice: 9500,
    rating: 5, reviewsCount: 180, image: "https://i.pinimg.com/736x/d7/be/7a/d7be7aff6b466ea19e26c5e2a17a1300.jpg" },
  { id: "bs3", name: "Pearl Grace Earrings", price: 6900, oldPrice: 8200,
    rating: 5, reviewsCount: 150, image: "https://i.pinimg.com/736x/14/a7/25/14a725209d64748cb2f50ee96dc8da02.jpg" },
  { id: "bs4", name: "Lavender Blue Bracelet", price: 9900, oldPrice: 12500,
    rating: 5, reviewsCount: 240, image: "https://i.pinimg.com/736x/30/c0/ae/30c0aee35cd5532134e9818596f3cda4.jpg" },
  { id: "bs5", name: "Love Knot Ring", price: 5900, oldPrice: 7500,
    rating: 5, reviewsCount: 320, image: "https://i.pinimg.com/1200x/49/64/32/49643288f7ade5d74b7dfd5cd9f467d0.jpg" },
];

export default function BestSellers() {
  const { addToCart, wishlist, toggleWishlist, setCartOpen } = useShop();
  const navigate = useNavigate();
  

  const buyNow = (p) => {
    addToCart(p);
    navigate("/");        // go home where the drawer lives
    setCartOpen(true);    // open the drawer
  };

  return (
    <section className="py-12">
      <h2 className="font-serif text-3xl text-center text-[#722F37] mb-8">
        BEST SELLERS
      </h2>

      <div className="flex gap-6 overflow-x-auto px-3 mr-3 ml-3 pb-4 scrollbar-none">
        {BEST_SELLERS.map((p) => {
          const saved = wishlist.some((w) => w.id === p.id);
          return (
            <div key={p.id}
              className="min-w-80 bg-white rounded-2xl overflow-hidden
                         shadow-sm hover:shadow-lg transition-shadow">

              {/* image + working heart */}
              <div className="relative h-56 bg-[#f7ede3]">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <button
                  onClick={() => toggleWishlist(p)}
                  className="absolute top-2.5 right-2.5 w-9 h-9 rounded-full
                             bg-white/90 border-none text-lg cursor-pointer"
                  title={saved ? "Remove from wishlist" : "Save to wishlist"}
                >
                  <span className={saved ? "text-rose-500" : "text-amber-900/40"}>
                    {saved ? "♥" : "♡"}
                  </span>
                </button>
              </div>

              <div className="p-4">
                <div className="font-semibold text-[#722F37]">{p.name}</div>
                <div className="text-xs text-amber-700 my-1">
                  {"★".repeat(p.rating)}{"☆".repeat(5 - p.rating)} ({p.reviewsCount})
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">₹{p.price.toLocaleString("en-IN")}</span>
                  <span className="text-xs text-amber-900/40 line-through">
                    ₹{p.oldPrice.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* actions */}
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <button
                    onClick={() => addToCart(p)}
                    className="border border-[#722F37] text-[#722F37] bg-white
                               py-2 rounded-full text-xs cursor-pointer
                               hover:bg-amber-50 transition"
                  >
                    Add to Bag
                  </button>
                  <button
                    onClick={() => buyNow(p)}
                    className="bg-[#722F37] text-white border-none
                               py-2 rounded-full text-xs cursor-pointer
                               hover:bg-[#a71e2e] transition"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-6">
        <Link to="/wishlist" className="text-sm text-[#a71e2e] underline">
          View Wishlist ({wishlist.length})
        </Link>
      </div>
    </section>
  );
}