import { Link } from "react-router-dom";
import { CATEGORIES } from "../../data/categories";
import { COLLECTIONS } from "../../data/collections";

export default function NavMenu() {
  return (
    <div className="relative group">
      {/* the nav item — style it like your other nav spans */}
      <span
        className="text-lg bold cursor-pointer p-3
                   hover:text-[#a71e2e]/70 transition-colors duration-300"
      >
        Collections ▾
      </span>

      {/* dropdown — appears on hover */}
      <div className="absolute left-0 top-full pt-2 z-50 hidden group-hover:block">
        <div className="bg-white rounded-2xl shadow-xl border border-amber-100
                        w-64 p-4 grid grid-cols-2 gap-4">

          {/* CATEGORIES column */}
          <div>
            <h4 className="text-xs font-bold text-[#722F37] uppercase tracking-wider mb-2">
              Shop by Category
            </h4>
            {CATEGORIES.map((c) => (
              <Link
                key={c.id}
                to={"/" + c.id}
                className="block py-1 text-sm text-[#722F37]/80 no-underline
                           hover:text-[#a71e2e] hover:translate-x-1 transition-all"
              >
                {c.name}
              </Link>
            ))}
          </div>

          {/* COLLECTIONS column */}
          <div>
            <h4 className="text-xs font-bold text-[#722F37] uppercase tracking-wider mb-2">
              Curated Collections
            </h4>
            {COLLECTIONS.map((c) => (
              <Link
                key={c.id}
                to={"/collections/" + c.id}
                className="block py-1 text-sm text-[#722F37]/80 no-underline
                           hover:text-[#a71e2e] hover:translate-x-1 transition-all"
              >
                {c.name}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}