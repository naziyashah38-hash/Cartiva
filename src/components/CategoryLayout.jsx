// import { Link } from "react-router-dom";
// import ProductCard from "./ProductCard";

// export default function CategoryLayout({ title, blurb, products }) {
//   return (
//     <main className="max-w-6xl mx-auto px-5 py-8">
//       {/* breadcrumb */}
//       <div className="text-xs text-amber-700 mb-2">
//         <Link to="/" className="no-underline text-amber-700 hover:underline">Home</Link>
//         {" / "}<span>{title}</span>
//       </div>

//       <h1 className="font-serif text-3xl md:text-4xl text-[#1e2a4a] mb-2">{title.toUpperCase()}</h1>
//       <p className="text-amber-900/60 mb-8">{blurb}</p>

//       {/* product grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {products.map((p) => (
//           <ProductCard key={p.id} product={p} />
//         ))}
//       </div>
//     </main>
//   );
// }

import { Link } from "react-router-dom";
import ProductCard from "./ProductCard"

export default function CategoryLayout({ title, blurb, products, parent }) {
  return (
    <main className="max-w-6xl mx-auto px-5 py-8">
      {/* breadcrumb */}
      <div className="text-xs text-amber-700 mb-2">
        <Link to="/" className="no-underline text-amber-700 hover:underline">Home</Link>
        {" / "}
        {parent && (
          <>
            <Link to={"/" + parent.id} className="no-underline text-amber-700 hover:underline">
              {parent.name}
            </Link>
            {" / "}
          </>
        )}
        <span>{title}</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl text-[#722F37] mb-2">{title.toUpperCase()}</h1>
      <p className="text-amber-900/60 mb-8">{blurb}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}