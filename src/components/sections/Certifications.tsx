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
    <section id="certifications" className="bg-white py-20 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight mb-4">
            Certified for Safety & Quality
          </h2>
          <p className="text-lg text-slate-500">
            Our chambers meet rigorous international safety and quality
            standards.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-center max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-full max-w-[160px] md:max-w-[200px] h-auto object-contain hover:scale-105 transition-transform duration-300 filter drop-shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
