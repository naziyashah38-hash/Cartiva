import { useState } from "react";
import { useShop } from "../context/ShopContext";
import ProductModal from "./ProductModal";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist, notify } = useShop();
  const [showModal, setShowModal] = useState(false);
  const isSaved = wishlist.some((x) => x.id === product.id);

  const buyNow = () => {
    addToCart(product);
    notify("Proceeding to checkout with " + product.name + " …");
  };

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        {/* image + save */}
        <div className="relative h-48 bg-[#f7ede3] cursor-pointer" onClick={() => setShowModal(true)}>
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <button
            onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}
            title={isSaved ? "Remove from wishlist" : "Save to wishlist"}
            className={
              "absolute top-2.5 right-2.5 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center " +
              "text-lg cursor-pointer border-none " +
              (isSaved ? "text-rose-500" : "text-amber-800/40")
            }
          >
            {isSaved ? "♥" : "♡"}
          </button>
        </div>

        {/* info */}
        <div className="p-4">
          <div className="font-semibold text-[#1e2a4a] cursor-pointer" onClick={() => setShowModal(true)}>
            {product.name}
          </div>
          <div className="text-xs text-amber-700 my-1">
            {"★".repeat(Math.round(product.rating))}{"☆".repeat(5 - Math.round(product.rating))}
            {" "}({product.reviewsCount})
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">₹{product.price}</span>
            <span className="text-xs text-amber-900/40 line-through">₹{product.oldPrice}</span>
          </div>

          {/* Add to Bag / Buy Now */}
          <div className="grid grid-cols-2 gap-2 mt-3">
            <button
              onClick={() => addToCart(product)}
              className="border border-[#1e2a4a] text-[#1e2a4a] bg-white
                         py-2 rounded-full text-xs cursor-pointer
                         hover:bg-amber-50 transition"
            >
              Add to Bag
            </button>
            <button
              onClick={buyNow}
              className="bg-[#1e2a4a] text-white border-none
                         py-2 rounded-full text-xs cursor-pointer
                         hover:bg-amber-700 transition"
            >
              Buy Now
            </button>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="w-full mt-2 border-none bg-none text-amber-700
                       text-xs cursor-pointer hover:underline"
          >
            View Details & Reviews →
          </button>
        </div>
      </div>

      {showModal && <ProductModal product={product} onClose={() => setShowModal(false)} />}
    </>
  );
}
