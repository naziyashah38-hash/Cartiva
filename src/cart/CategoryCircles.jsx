import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/categories";

export default function CategoryCircles() {
  return (
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}>
      <h2 style={{ textAlign: "center", fontSize: 28, color: "#1e2a4a" }}>SHOP BY CATEGORY</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 32, marginTop: 32 }}>
        {CATEGORIES.map((c) => (
          <Link key={c.id} to={"/" + c.id}
            style={{ display: "flex", flexDirection: "column", alignItems: "center",
              gap: 12, textDecoration: "none" }}>
            <img src={c.image} alt={c.name}
              style={{ width: 110, height: 110, borderRadius: "50%", objectFit: "cover",
                border: "2px solid transparent" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#b08a4a")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")} />
            <span style={{ fontSize: 13, letterSpacing: 1, color: "#1e2a4a", fontWeight: 600 }}>
              {c.name.toUpperCase()}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}