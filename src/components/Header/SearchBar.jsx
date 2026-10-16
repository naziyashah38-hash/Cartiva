import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ProductModal from "../ProductModal";
import { useShop } from "../../context/ShopContext";

// import ALL product lists so search covers everything

import {
  PETAL_PEARL_PRODUCTS, GOLDEN_ROMANCE_PRODUCTS,
  CELESTIAL_GLOW_PRODUCTS, MINIMAL_MUSE_PRODUCTS,
} from "../../data/collections";
import { BRACELET_PRODUCTS, EARRING_PRODUCTS, FINE_GIFT_PRODUCTS, NECKLACE_PRODUCTS, RING_PRODUCTS, WEDDING_PRODUCTS } from "../../data/categories";

const ALL_PRODUCTS =[
  ...CELESTIAL_GLOW_PRODUCTS,...GOLDEN_ROMANCE_PRODUCTS, ...MINIMAL_MUSE_PRODUCTS, ...PETAL_PEARL_PRODUCTS, ...NECKLACE_PRODUCTS, ...EARRING_PRODUCTS, ...RING_PRODUCTS ,...BRACELET_PRODUCTS, ...FINE_GIFT_PRODUCTS, ...WEDDING_PRODUCTS
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const { addToCart } = useShop();

  // filter products as the user types
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 1) return [];
    return ALL_PRODUCTS
      .filter((p) => p.name.toLowerCase().includes(q))
      .slice(0, 6); // max 6 suggestions
  }, [query]);

  return (
    <div className="relative w-full max-w-sm">
      {/* input */}
      <div className="flex items-center bg-white border border-[#722F37]/30 rounded-full px-4 py-2 focus-within:border-[#722F37] transition-colors">
        <svg className="w-4 h-4 text-[#722F37] mr-2" fill="none" stroke="currentColor"
          strokeWidth={1.25} viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search necklaces, rings, gifts…"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          className="w-full outline-none text-sm text-[#722F37] placeholder:text-[#722F37]/40 bg-transparent"
        />
        {query && (
          <button onClick={() => { setQuery(""); setOpen(false); }}
            className="text-[#722F37]/50 hover:text-[#722F37] text-sm ml-2">✕</button>
        )}
      </div>

      {/* dropdown results */}
      {open && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-xl
                        border border-amber-100 overflow-hidden z-50">
          {results.map((p) => (
            <div key={p.id}
              className="flex items-center gap-3 p-3 hover:bg-amber-50 cursor-pointer
                         border-b border-amber-50 last:border-0"
              onClick={() => { setSelected(p); setOpen(false); }}>
              <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover bg-[#f7ede3]" />
              <div className="flex-1">
                <div className="text-sm font-medium text-[#722F37]">{p.name}</div>
                <div className="text-xs text-[#722F37]/50">₹{p.price}</div>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); addToCart(p); }}
                className="text-xs border border-[#722F37] text-[#722F37] rounded-full
                           px-3 py-1 hover:bg-[#722F37] hover:text-white transition-colors">
                Add
              </button>
            </div>
          ))}
          <div className="p-2 text-center">
            <Link to="/necklaces" onClick={() => setOpen(false)}
              className="text-xs text-[#a71e2e] hover:underline">
              View all collections →
            </Link>
          </div>
        </div>
      )}

      {/* no results */}
      {open && query.trim().length > 0 && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-xl
                        border border-amber-100 p-4 text-center text-sm text-[#722F37]/60 z-50">
          No results for "{query}"
        </div>
      )}

      {/* click outside to close */}
      {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />}

      {/* open product modal on click */}
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}