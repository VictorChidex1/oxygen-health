import React from "react";
import { motion } from "framer-motion";

const Specs: React.FC = () => {
  const specs = [
    { label: "Pressure Range", value: "1.3 ATA to 1.5 ATA" },
    { label: "Material", value: "Medical-Grade TPU (No glues)" },
    { label: "Oxygen Purity", value: "95% via Medical Concentrator" },
    { label: "Zipper System", value: "YKK Dual-Seal (Japanese Engineering)" },
    { label: "Warranty", value: "3-Year System / 20-Year Window Warranty" },
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden" id="specs">
      {/* Grid Pattern (Blueprint Effect) - Clinical Gray on White */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Fade Mask (Vignette) - Fade to White */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-brand-blue font-bold tracking-widest uppercase text-sm">
              Technical Specifications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 mt-2">
              Clinical Performance Metrics
            </h2>
            <p className="text-slate-600">
              Engineered to meet rigorous medical standards for safety and
              efficacy.
            </p>
          </div>

          {/* Clinical Data Table - Solid White with Border */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  flex flex-col sm:flex-row sm:justify-between sm:items-center 
                  p-6 border-b border-slate-100 last:border-0
                  ${index % 2 === 0 ? "bg-slate-50/50" : "bg-white"}
                `}
              >
                <span className="text-slate-500 font-medium mb-1 sm:mb-0">
                  {spec.label}
                </span>
                <span className="text-brand-navy font-bold text-lg text-right">
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
