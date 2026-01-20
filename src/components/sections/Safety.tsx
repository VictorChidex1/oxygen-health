import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Wind, Layers, Award, CheckCircle2 } from "lucide-react";

const Safety: React.FC = () => {
  const features = [
    {
      title: "Penta-Seam™ Welding",
      description:
        "Five-layer heat welding eliminates glue failures. Creating a bond stronger than the material itself.",
      icon: Layers,
    },
    {
      title: "Dual-Redundancy Valves",
      description:
        "Automatic over-pressure release at 1.5 ATA. Two independent systems ensure absolute safety.",
      icon: Wind,
    },
    {
      title: "Medical-Grade TPU",
      description:
        "Zero off-gassing, non-toxic, and antibacterial. The same material used in IV bags and heart valves.",
      icon: ShieldCheck,
    },
    {
      title: "20-Year Warranty",
      description:
        "Industry-leading protection. While others offer 1 year, we guarantee our craftsmanship for decades.",
      icon: Award,
    },
  ];

  return (
    <section className="bg-brand-navy py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Visual/Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent z-10" />

            {/* Placeholder for the Chamber Image */}
            <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
              <img
                src="/assets/top-doctor-cover.webp"
                className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700"
                alt="Top Doctor Magazine Feature"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">
                  ISO 13485 Certified
                </p>
                <p className="text-slate-300 text-xs">Medical Device Quality</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Engineered for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Zero-Failure.
                </span>
              </h2>
              <p className="text-lg text-slate-300 max-w-lg">
                We don't just meet safety standards; we define them. Every
                mechanism is designed with redundancy and longevity in mind.
              </p>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;
