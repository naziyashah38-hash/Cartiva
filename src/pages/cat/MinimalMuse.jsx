import CategoryLayout from "../../components/CategoryLayout";
import { MINIMAL_MUSE_PRODUCTS } from "../../data/collections";

export default function MinimalMuse() {
  return (
    <CategoryLayout
      title="Minimal Muse Collection"
      blurb="Clean, delicate lines for effortless everyday elegance."
      products={MINIMAL_MUSE_PRODUCTS}
      parent={{ id: "collections", name: "Curated Collections" }}
    />
  );
}