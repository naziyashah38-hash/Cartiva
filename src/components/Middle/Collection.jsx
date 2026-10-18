import { Link } from "react-router-dom";
import { COLLECTIONS } from "../../data/collections";

const Collection = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-6 ">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#722F37] mb-10">
        CURATED COLLECTIONS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
        {COLLECTIONS.map((c) => (
          <Link
            to={"/collections/" + c.id}
            key={c.id}
            className="no-underline group"
          >
            <div className="overflow-hidden rounded-2xl shadow-sm
                            group-hover:shadow-xl transition-shadow duration-300">
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-64 object-cover
                           group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-center mt-3 font-semibold text-[#722F37] group-hover:text-[#a71e2e] transition-colors">
              {c.name} COLLECTION
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Collection;