import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import TopDoctorBadge from "./ui/TopDoctorBadge";
import TrustBar from "./ui/TrustBar";

interface HeroProps {
  // Props can be added here if needed
}

const Hero: React.FC<HeroProps> = () => {
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
    <section className="relative bg-brand-navy min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Decorator - subtle gradient/pattern if needed, keeping it solid for now as per strict request */}

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Text & CTA */}
        <div className="text-left space-y-6">
          <TopDoctorBadge />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white leading-tight font-sans">
            {headline}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
            Experience hospital-grade oxygen therapy at home. Engineered for
            safety, certified for performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-4 bg-white text-brand-navy font-bold rounded shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-lg">
              Get Usage Guide
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded hover:bg-white/10 transition-colors">
              View Specs
            </button>
          </div>

          <TrustBar />
        </div>

        {/* Right Column: Visual (Placeholder for Chamber Image) */}
        <div className="relative">
          {/* Using a placeholder div to represent where the chamber image will go */}
          <div className="aspect-[4/3] bg-gradient-to-br from-brand-blue/30 to-brand-navy border border-white/10 rounded-xl relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-2xl uppercase tracking-widest rotate-[-15deg]">
              Product Image Asset
            </div>
            {/* Simulated Reflection/Glow */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
