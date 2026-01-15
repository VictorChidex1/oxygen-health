import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const TopDoctorBadge: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
      className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full cursor-default group"
    >
      {/* Magazine Cover Thumbnail */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/30 shrink-0">
        <img
          src="/assets/top-doctor-cover.webp"
          alt="Top Doctor Magazine Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-start gap-0.5">
        {/* Stars */}
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="w-3 h-3 text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>

        {/* Text */}
        <span className="text-xs font-semibold text-white/90 tracking-wide uppercase">
          Featured on Top Doctor Magazine
        </span>
      </div>
    </motion.div>
  );
};

export default TopDoctorBadge;
