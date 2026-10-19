import CategoryLayout from "../../cart/CategoryLayout";
import { GOLDEN_ROMANCE_PRODUCTS } from "../../data/collections";

export default function GoldenRomance() {
  return (
    <CategoryLayout
      title="Golden Romance Collection"
      blurb="Warm gold tones made for date nights and special moments."
      products={GOLDEN_ROMANCE_PRODUCTS}
      parent={{ id: "collections", name: "Curated Collections" }}
    />
  );
}