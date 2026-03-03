import { useState } from "react";
import Hero from "./components/sections/Hero";
import Trust from "./components/sections/Trust";
import WhyItWorks from "./components/sections/WhyItWorks";
import Certifications from "./components/sections/Certifications";
import Comparison from "./components/sections/Comparison";
import Navbar from "./components/layout/Navbar";
import Safety from "./components/sections/Safety";
import Specs from "./components/sections/Specs";
import Reviews from "./components/sections/Reviews";
import FeaturedProducts from "./components/sections/FeaturedProducts";
import Faqs from "./components/sections/Faqs";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import PricingModal from "./components/ui/PricingModal";
import ScrollToTop from "./components/ui/ScrollToTop";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpen={() => setIsModalOpen(true)} />
      <main>
        <div id="hero">
          <Hero onOpen={() => setIsModalOpen(true)} />
        </div>

        <div id="trust">
          <Trust />
        </div>

        <div id="why-it-works">
          <WhyItWorks />
        </div>

        <div id="certifications">
          <Certifications />
        </div>

        <div id="comparison">
          <Comparison />
        </div>
        <div id="safety">
          <Safety />
        </div>
        <div id="specs">
          <Specs />
        </div>
        <div id="reviews">
          <Reviews />
        </div>
        <div id="products">
          <FeaturedProducts onOpen={() => setIsModalOpen(true)} />
        </div>
        <div id="faqs">
          <Faqs />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </main>
      <PricingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <ScrollToTop />
    </>
  );
}

export default App;
