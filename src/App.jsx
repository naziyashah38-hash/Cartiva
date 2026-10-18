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
import { AuthProvider } from "./context/AuthContext";
import ReturnPolicy from "./pages/ReturnPolicy";
import About from "./pages/About";
import Wishlist from "./pages/Wishlist";
import InfoPage from "./pages/InfoPage";


// the six category pages
import Necklaces from "./pages/Necklaces";
import Earrings from "./pages/Earrings";
import Rings from "./pages/Rings";
import Bracelets from "./pages/Bracelets";
import FineGifts from "./pages/FineGifts";
import Wedding from "./pages/Wedding";

// curated collection
import PetalPearl from "./pages/cat/PetalPearl";
import GoldenRomance from "./pages/cat/GoldenRomance";
import MinimalMuse from "./pages/cat/MinimalMuse";
import CelestialGlow from "./pages/cat/CelestialGlow";



export default function App() {
  return (
     <AuthProvider>
      <BrowserRouter>
      <ShopProvider>
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

          {/* curated collection */}
          <Route path="/collections/petal-pearl" element={<PetalPearl />} />
          <Route path="/collections/golden-romance" element={<GoldenRomance />} />
          <Route path="/collections/celestial-glow" element={<CelestialGlow />} />
          <Route path="/collections/minimal-muse" element={<MinimalMuse />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="/wishlist" element={<Wishlist />} />

          {/* info */}
          <Route path="/faq" element={<InfoPage pageId="faq" />} />
          <Route path="/shipping" element={<InfoPage pageId="shipping" />} />
          <Route path="/size-guide" element={<InfoPage pageId="size" />} />
          <Route path="/care-guide" element={<InfoPage pageId="care" />} />
          <Route path="/contact" element={<InfoPage pageId="contact" />} />
          <Route path="/our-story" element={<InfoPage pageId="story" />} />
          <Route path="/sustainability" element={<InfoPage pageId="sustainability" />} />
          <Route path="/journal" element={<InfoPage pageId="journal" />} />
          <Route path="/careers" element={<InfoPage pageId="careers" />} />
          <Route path="/privacy" element={<InfoPage pageId="privacy" />} />
          <Route path="/terms" element={<InfoPage pageId="terms" />} />

           </Routes>
         </ShopProvider>
      </BrowserRouter>
   
      </AuthProvider>
  );
}