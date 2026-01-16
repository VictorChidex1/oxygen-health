import { useState } from "react";
import Hero from "./components/sections/Hero";
import Comparison from "./components/sections/Comparison";
import Navbar from "./components/layout/Navbar";
import PricingModal from "./components/ui/PricingModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpen={() => setIsModalOpen(true)} />
      <main>
        <div id="safety">
          <Hero onOpen={() => setIsModalOpen(true)} />
        </div>
        <div id="comparison">
          <Comparison />
        </div>
      </main>
      <PricingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default App;
