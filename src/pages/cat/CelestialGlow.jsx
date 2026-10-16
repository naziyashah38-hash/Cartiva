import CategoryLayout from "../../components/CategoryLayout";
import { CELESTIAL_GLOW_PRODUCTS } from "../../data/collections";

export default function CelestialGlow() {
  return (
    <CategoryLayout
      title="Celestial Glow Collection"
      blurb="Stars, moons and sparkle — inspired by the night sky."
      products={CELESTIAL_GLOW_PRODUCTS}
      parent={{ id: "collections", name: "Curated Collections" }}
    />
  );
}