import CategoryLayout from "../cart/CategoryLayout";
import { NECKLACE_PRODUCTS } from "../data/categories";

export default function Necklaces() {
  return (
    <CategoryLayout
      title="Necklaces"
      blurb="Pendants, chains & layers in 18k gold."
      products={NECKLACE_PRODUCTS}
    />
  );
}