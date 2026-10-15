import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopProvider } from "./context/ShopContext";
import Intro from "./components/Intro";           // your existing files — keep
import Category from "./components/Middle/Category";    // same folder as before
import Sale from "./components/Middle/Sale"
import BtT from "./components/Footer/BtT";
import Collection from "./components/Middle/Collection"
import BestSellers from "./components/Middle/BestSellers";
import OurStory from "./components/Footer/OurStory";
import CustomerReviews from "./components/testimonial/CustomerReviews";
import Newsletter from "./components/testimonial/Newsletter";
import Support from "./components/Footer/Support";


// the six category pages
import Necklaces from "./pages/Necklaces";
import Earrings from "./pages/Earrings";
import Rings from "./pages/Rings";
import Bracelets from "./pages/Bracelets";
import FineGifts from "./pages/FineGifts";
import Wedding from "./pages/Wedding";

export default function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Intro />
              <Category />
              <Collection />
              <BestSellers />
              <Sale />
              <BtT />
              
              
              <OurStory />
              <CustomerReviews />
              <Newsletter />
              <Support />
            </>
          } />
          <Route path="/necklaces" element={<Necklaces />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/rings" element={<Rings />} />
          <Route path="/bracelets" element={<Bracelets />} />
          <Route path="/fine-gifts" element={<FineGifts />} />
          <Route path="/wedding" element={<Wedding />} />
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}