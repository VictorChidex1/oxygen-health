export default function Certifications() {
  const certifications = [
    {
      src: "/assets/ce-certified.png",
      alt: "CE Certified",
    },
    {
      src: "/assets/iso-2.png",
      alt: "ISO 14001 Certified",
    },
    {
      src: "/assets/iso-3.png",
      alt: "ISO 9001 Certified",
    },
    {
      src: "/assets/iso.png",
      alt: "ISO 13485 Certified",
    },
  ];

  return (
    <section
      id="certifications"
      className="bg-slate-100 py-24 lg:py-32 font-sans relative overflow-hidden text-center rounded-b-[2.5rem]"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mb-6">
            Certified for Safety & Quality
          </h2>
          <div className="w-24 h-1.5 bg-brand-blue mx-auto mt-2 mb-6 rounded-full opacity-80 backdrop-blur-sm"></div>
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
            Our chambers meet rigorous international safety and quality
            standards.
            <br className="hidden md:block" /> Engineered to perform. Built to
            last.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 items-center justify-center max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center p-8 md:p-12 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-slate-200/60 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Soft glow behind image on hover */}
              <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

              <img
                src={cert.src}
                alt={cert.alt}
                className="w-full max-w-[140px] md:max-w-[170px] h-auto object-contain transition-transform duration-500 group-hover:scale-110 filter drop-shadow-sm relative z-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
