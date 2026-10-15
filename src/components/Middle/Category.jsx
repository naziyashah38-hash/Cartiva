import { Link } from "react-router-dom";

const categories = [
  { id: "necklaces", name: "Necklaces", image: "https://i.pinimg.com/736x/70/dc/01/70dc018d8bc8548cafc711dc6cca9755.jpg" },
  { id: "earrings", name: "Earrings", image: "https://i.pinimg.com/736x/81/c3/ce/81c3cecc0eb63513ef504c7bb1996aa1.jpg" },
  { id: "rings", name: "Rings", image: "https://i.pinimg.com/736x/47/2d/ad/472dad25eab6b55761d3da4eead69576.jpg" },
  { id: "bracelets", name: "Bracelets", image: "https://i.pinimg.com/736x/14/7b/21/147b2111e39a0ec0b3f548ece13d6adc.jpg" },
  { id: "fine-gifts", name: "Fine Gifts", image: "https://i.pinimg.com/736x/27/12/4c/27124c9d2ecfd3544561c1aebb5e6c7a.jpg" },
  { id: "wedding", name: "Wedding", image: "https://i.pinimg.com/736x/56/59/ce/5659ced7121299047af66daa2d62f964.jpg" },
];

const Category = () => {
  return (
    <section className="py-12 px-4 max-w-8xl mx-auto">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#722F37] mb-10">
        SHOP BY CATEGORY
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
        {categories.map((c) => (
          <Link
            to={"/" + c.id}
            key={c.id}
            className="flex flex-col items-center gap-3 no-underline"
          >
            <div className="rounded-full p-1  transition-all duration-300
                            hover:scale-110 hover:border-[#722F37] border-2 border-transparent">
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-100 object-cover group-hover:scale-105 rounded-full transition-transform duration-300"
              />
            </div>

            {/* category name — explicitly styled so it is always visible */}
            <span
              className="text-sm font-semibold mt-3 tracking-wide uppercase text-[#722F37]
                         hover:text-[#a71e2e] transition-colors duration-300"
            >
              {c.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;