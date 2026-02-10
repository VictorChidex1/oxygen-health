import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ComparisonFeature {
  name: string;
  competitor: string;
  us: string;
}

const features: ComparisonFeature[] = [
  {
    name: "Window Safety",
    competitor: "Single Seam Glue (Risk of Rupture)",
    us: "Penta-Seam Welding (5x Stronger)",
  },
  {
    name: "Warranty",
    competitor: "1-2 Years",
    us: "3-Year System / 20-Year Window Warranty",
  },
  {
    name: "Certification",
    competitor: "Standard CE only",
    us: "CE + 3x ISO Certified (Medical Grade)",
  },
  {
    name: "Design & Ergonomics",
    competitor: "Tubular Design (Hard Entry/Exit)",
    us: "Zero-Gravity Luxury Chair",
  },
  {
    name: "Manufacturing",
    competitor: "Imported / China",
    us: "Made in USA",
  },
];

const Comparison: React.FC = () => {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Background Decorator - Subtle clinical grid or mesh could go here */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-brand-blue font-bold tracking-widest uppercase text-sm">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
            Why Choose Oxygen Health Systems
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            See why clinical professionals trust Oxygen Health Systems over
            generic imported alternatives.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Column 1: Competitors (The "Old" Way) - Light Gray Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ backgroundColor: "rgba(241, 245, 249, 1)" }} // bg-slate-100
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8 relative overflow-hidden opacity-70"
          >
            <h3 className="text-xl font-bold text-slate-500 mb-8 flex items-center gap-3">
              <XCircle className="w-6 h-6 text-slate-400" />
              Standard Market Models
            </h3>

            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center border-b border-slate-200 pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-slate-500 font-medium text-sm">
                    {feature.name}
                  </span>
                  <span className="text-slate-700 font-semibold text-right max-w-[50%]">
                    {feature.competitor}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: OXYGEN PROTOCOL (The "New" Way) - Navy Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1.05, y: 0 }}
            whileHover={{
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(22, 81, 169, 0.4)", // Enhanced glow
            }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            className="bg-brand-navy border border-brand-blue shadow-2xl shadow-brand-blue/20 rounded-2xl p-8 relative overflow-hidden z-10"
          >
            {/* Glossy sheen */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent pointer-events-none" />

            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-400 fill-green-400/20" />
              Oxygen Health Systems
            </h3>

            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-blue-200 font-semibold text-sm">
                    {feature.name}
                  </span>
                  <span className="text-white font-bold text-right max-w-[60%] flex items-center justify-end gap-2">
                    {feature.us}
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
