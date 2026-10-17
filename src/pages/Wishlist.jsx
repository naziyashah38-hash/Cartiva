import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function Wishlist() {
  const { wishlist, toggleWishlist, addToCart } = useShop();

  return (
    <main className="max-w-6xl mx-auto px-5 py-12">
      {/* breadcrumb */}
      <div className="text-xs text-amber-700 mb-2">
        <Link to="/" className="no-underline text-amber-700 hover:underline">Home</Link>
        {" / "}<span>Wishlist</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl text-[#722F37] mb-2">
        WISHLIST {wishlist.length > 0 && <span className="text-lg">({wishlist.length})</span>}
      </h1>
      <p className="text-amber-900/60 mb-8">Your saved pieces — all in one place.</p>

      {/* empty state */}
      {wishlist.length === 0 ? (
        <div className="text-center py-20 text-amber-900/60">
          <p className="text-5xl mb-4">♡</p>
          <p className="mb-2">Nothing saved yet.</p>
          <p className="text-sm mb-6">Tap the heart on any product to save it here.</p>
          <Link
            to="/"
            className="inline-block bg-[#722F37] text-white px-8 py-3 rounded-full
                       font-semibold no-underline hover:bg-[#a71e2e] transition-colors"
          >
            Browse Jewellery
          </Link>
        </div>
      ) : (
        /* saved items grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((p) => (
            <div key={p.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm
                         hover:shadow-lg transition-shadow">

              {/* product image with remove heart */}
              <div className="relative h-48 bg-[#f7ede3]">
                <img src={p.image} alt={p.name}
                  className="w-full h-full object-cover" />
                <button
                  onClick={() => toggleWishlist(p)}
                  title="Remove from wishlist"
                  className="absolute top-2.5 right-2.5 w-9 h-9 rounded-full
                             bg-white/90 border-none text-lg cursor-pointer text-rose-500">
                  ♥
                </button>
              </div>

              <div className="p-4">
                <div className="font-semibold text-[#722F37]">{p.name}</div>
                <div className="text-xs text-amber-700 my-1">
                  {"★".repeat(Math.round(p.rating))}{"☆".repeat(5 - Math.round(p.rating))}
                  {" "}({p.reviewsCount})
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">₹{p.price}</span>
                  <span className="text-xs text-amber-900/40 line-through">₹{p.oldPrice}</span>
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
                    onClick={() => toggleWishlist(p)}
                    className="text-rose-500 bg-none border-none
                               py-2 rounded-full text-xs cursor-pointer
                               hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}