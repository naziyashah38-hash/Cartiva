import CategoryLayout from "../components/CategoryLayout";
import { EARRING_PRODUCTS } from "../data/categories";

export default function Earrings() {
  return (
    <CategoryLayout
      title="Earrings"
      blurb="Studs, hoops & drops that shine all day."
      products={EARRING_PRODUCTS}
    />
  );
}