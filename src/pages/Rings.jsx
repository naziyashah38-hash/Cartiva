import CategoryLayout from "../cart/CategoryLayout";
import { RING_PRODUCTS } from "../data/categories";

export default function Rings() {
  return (
    <CategoryLayout
      title="Rings"
      blurb="Solitaires, stacks & statement bands."
      products={RING_PRODUCTS}
    />
  );
}