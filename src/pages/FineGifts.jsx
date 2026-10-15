import CategoryLayout from "../components/CategoryLayout";
import { FINE_GIFT_PRODUCTS } from "../data/categories";

export default function FineGifts() {
  return (
    <CategoryLayout
      title="Fine Gifts"
      blurb="Curated gift boxes for every occasion."
      products={FINE_GIFT_PRODUCTS}
    />
  );
}