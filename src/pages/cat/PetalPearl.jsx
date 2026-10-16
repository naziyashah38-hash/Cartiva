import CategoryLayout from "../../components/CategoryLayout";
import { PETAL_PEARL_PRODUCTS } from "../../data/collections";

export default function PetalPearl() {
  return (
    <CategoryLayout
      title="Petal & Pearl Collection"
      blurb="Soft florals and lustrous pearls for a romantic everyday look."
      products={PETAL_PEARL_PRODUCTS}
      parent={{ id: "collections", name: "Curated Collections" }}
    />
  );
}