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
            {/* Primary Button: "Get Usage Guide" */}
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ y: 1, scale: 0.98 }}
              onClick={onOpen}
              className="px-8 py-4 bg-white text-brand-navy font-bold rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] 
              hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] transition-all flex items-center justify-center gap-2 text-lg active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]"
            >
              Get Pricing
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            {/* Secondary Button: "View Specs" */}
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ y: 1, scale: 0.98 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:bg-white/5 transition-all active:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]"
            >
              View Specs
            </motion.button>
          </div>

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
