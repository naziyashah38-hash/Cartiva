import CategoryLayout from "../components/CategoryLayout";
import { WEDDING_PRODUCTS } from "../data/categories";

export default function Wedding() {
  return (
    <CategoryLayout
      title="Wedding"
      blurb="Bridal sets & timeless heirlooms."
      products={WEDDING_PRODUCTS}
    />
  );
}