import CategoryLayout from "../cart/CategoryLayout";
import { BRACELET_PRODUCTS } from "../data/categories";

export default function Bracelets() {
  return (
    <CategoryLayout
      title="Bracelets"
      blurb="Tennis, bangles & charm bracelets."
      products={BRACELET_PRODUCTS}
    />
  );
}