import { useState } from "react";
import { useShop } from "../context/ShopContext";

export default function ProductModal({ product, onClose }) {
  const [tab, setTab] = useState("details");
  const { addToCart, notify } = useShop();

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* image */}
        <div className="relative h-48 bg-[#f7ede3]">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-t-2xl" />
          <button
            onClick={onClose}
            className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90
                       border-none cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="p-5">
          <h2 className="font-serif text-2xl text-[#1e2a4a]">{product.name}</h2>
          <div className="text-sm text-amber-700 mt-1">
            {"★".repeat(Math.round(product.rating))}{"☆".repeat(5 - Math.round(product.rating))}
            {" "}{product.rating} · {product.reviewsCount} reviews
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xl font-bold">₹{product.price}</span>
            <span className="text-sm text-amber-900/40 line-through">₹{product.oldPrice}</span>
          </div>

          {/* tabs */}
          <div className="flex gap-1 border-b border-amber-100 mt-4">
            <button
              onClick={() => setTab("details")}
              className={
                "px-4 py-2 text-sm border-none bg-none cursor-pointer " +
                (tab === "details"
                  ? "text-amber-800 font-medium border-b-2 border-amber-600"
                  : "text-amber-900/50 border-b-2 border-transparent")
              }
            >
              Details
            </button>
            <button
              onClick={() => setTab("reviews")}
              className={
                "px-4 py-2 text-sm border-none bg-none cursor-pointer " +
                (tab === "reviews"
                  ? "text-amber-800 font-medium border-b-2 border-amber-600"
                  : "text-amber-900/50 border-b-2 border-transparent")
              }
            >
              Reviews ({product.reviews.length})
            </button>
          </div>

          {/* tab content */}
          {tab === "details" ? (
            <p className="text-sm leading-relaxed text-amber-900/80 mt-4">{product.details}</p>
          ) : (
            <div className="mt-4">
              {product.reviews.map((r, i) => (
                <div key={i} className="border-b border-amber-50 py-2.5 last:border-0">
                  <div className="flex justify-between text-sm font-semibold text-[#1e2a4a]">
                    <span>{r.author}</span>
                    <span className="text-amber-600">
                      {"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}
                    </span>
                  </div>
                  <p className="text-sm text-amber-900/70 my-1">{r.text}</p>
                  <span className="text-[11px] text-amber-900/40">{r.date}</span>
                </div>
              ))}
            </div>
          )}

          {/* Add to Bag / Buy Now */}
          <div className="grid grid-cols-2 gap-2 mt-5">
            <button
              onClick={() => { addToCart(product); onClose(); }}
              className="border border-[#1e2a4a] text-[#1e2a4a] bg-white
                         py-2.5 rounded-full text-sm cursor-pointer hover:bg-amber-50"
            >
              Add to Bag
            </button>
            <button
              onClick={() => { addToCart(product); notify("Proceeding to checkout …"); onClose(); }}
              className="bg-[#1e2a4a] text-white border-none
                         py-2.5 rounded-full text-sm cursor-pointer hover:bg-amber-700"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}