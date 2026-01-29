import React from "react";

const ProductVideo: React.FC = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] border border-white/10 bg-brand-navy/50 aspect-[4/3]">
      {/* Video Element */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/herman-chamber.jpg"
        className="w-full h-full object-cover"
      >
        <source src="/assets/chamber-loop.mp4" type="video/mp4" />
        {/* Fallback text if video fails (not requested but good practice) */}
        Your browser does not support the video tag.
      </video>

      {/* Live View Badge */}
      <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-[10px] font-bold text-white tracking-widest uppercase">
          Live View
        </span>
      </div>
    </div>
  );
};

export default ProductVideo;
