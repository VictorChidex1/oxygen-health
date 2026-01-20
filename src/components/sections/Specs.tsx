import React from "react";
import { motion } from "framer-motion";

const Specs: React.FC = () => {
  const specs = [
    { label: "Pressure Range", value: "1.3 ATA to 1.5 ATA" },
    { label: "Material", value: "Medical-Grade TPU (No glues)" },
    { label: "Oxygen Purity", value: "95% via Medical Concentrator" },
    { label: "Zipper System", value: "YKK Dual-Seal (Japanese Engineering)" },
    { label: "Warranty", value: "20-Year Structural Warranty" },
  ];

  return (
    <section
      className="bg-brand-navy py-24 relative overflow-hidden"
      id="specs"
    >
      {/* Background Decorator */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 blur-3xl rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Clinical Performance Metrics
            </h2>
            <p className="text-slate-400">
              Engineered to meet rigorous medical standards for safety and
              efficacy.
            </p>
          </div>

          {/* Glassmorphism Table */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  flex flex-col sm:flex-row sm:justify-between sm:items-center 
                  p-6 border-b border-white/5 last:border-0
                  ${index % 2 === 0 ? "bg-white/5" : "bg-transparent"}
                `}
              >
                <span className="text-slate-400 font-medium mb-1 sm:mb-0">
                  {spec.label}
                </span>
                <span className="text-white font-bold text-lg text-right">
                  {spec.value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Specs;
