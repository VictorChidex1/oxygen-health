import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import TopDoctorBadge from "../ui/TopDoctorBadge";
import TrustBar from "../ui/TrustBar";
import ProductVideo from "../ui/ProductVideo";

interface HeroProps {
  onOpen: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpen }) => {
  const [headline] = useState("Clinical Grade Hyperbaric Chambers.");

  // PostHog Variant Logic (Placeholder)
  useEffect(() => {
    // const variant = posthog.getFeatureFlag('hero_headline_test');
    // if (variant === 'test') {
    //   // setHeadline("Recover Faster with Medical-Grade Oxygen.");
    // }
    // Initialize logic would go here or in a context
  }, []);

  return (
    <section className="relative bg-brand-navy min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 md:pt-0">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Text & CTA */}
        <div className="text-left space-y-6">
          <div className="flex justify-center md:justify-start">
            <TopDoctorBadge />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white leading-tight font-sans">
            {headline}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
            Experience hospital-grade oxygen therapy at home. Engineered for
            safety, certified for performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* Primary Button: "Get Pricing" */}
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ y: 1, scale: 0.98 }}
              onClick={onOpen}
              className="w-full sm:w-auto px-8 py-4 bg-white text-brand-navy font-bold rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] 
                hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] transition-all flex items-center justify-center gap-2 text-lg active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]"
            >
              Get Pricing
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            {/* Secondary Button: "View Specs" */}
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ y: 1, scale: 0.98 }}
              onClick={() =>
                document
                  .getElementById("specs")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto px-8 py-4 bg-brand-navy border-2 border-white text-white font-semibold rounded-full shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:bg-white/10 transition-all active:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]"
            >
              View Specs
            </motion.button>
          </div>

          {/* Third Button: "View Soft Chamber Catalog" */}
          <motion.button
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ y: 1, scale: 0.98 }}
            onClick={() =>
              window.open(
                "https://www.oxygenhealthsystems.com/product-category/all-chambers/lying-soft-chambers/",
                "_blank"
              )
            } // Placeholder action
            className="mt-4 px-8 py-4 w-full sm:w-fit bg-gradient-to-r from-brand-blue to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
          >
            View Soft Chamber Catalog
          </motion.button>

          <TrustBar />
        </div>

        {/* Right Column: Visual (Product Video) */}
        <div className="relative">
          <ProductVideo />
        </div>
      </div>
    </section>
  );
};

export default Hero;
