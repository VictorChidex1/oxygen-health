import React from "react";
import { motion } from "framer-motion";

const TrustBar: React.FC = () => {
  const logos = [
    { src: "/images/ISO_9001-2015.png", alt: "ISO 9001:2015 Certified" },
    { src: "/images/iso-13485.avif", alt: "ISO 13485 Medical Devices" },
    { src: "/images/ce-logo.png", alt: "CE Mark Approved" },
    { src: "/images/asme-logo-.png", alt: "ASME Certified" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="flex flex-col gap-4 py-6 border-t border-white/10 mt-8 w-full items-center md:items-start">
      <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold text-center md:text-left">
        Medical-Grade Safety Certifications
      </span>

      <motion.div
        className="flex flex-wrap items-center justify-center md:justify-start gap-8 opacity-80"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {logos.map((logo, index) => (
          <motion.img
            key={index}
            variants={itemVariants}
            src={logo.src}
            alt={logo.alt}
            className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TrustBar;
